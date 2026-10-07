// Ujednolica logotypy klientów do monochromatycznych, białych wersji pod ciemne tło strony.
// Użycie: node scripts/process-logos.mjs <katalog źródłowy> [katalog wyjściowy=public/images/clients]
//
// Tryb dobierany automatycznie na podstawie średniej jasności znaku:
//  - ciemne logo (na jasne tło)  -> "knockout": krycie = 1 - jasność (ciemne elementy stają się białe, jasne wycięcia zostają przezroczyste)
//  - jasne logo (na ciemne tło)  -> "light":    krycie = jasność
//  - średnie / kolorowe          -> "silhouette": cały znak na biało
// Nieprzezroczyste obrazy (JPG) najpierw tracą tło wykryte z narożników.
// Nadpisanie trybu: plik <slug>.mode w katalogu źródłowym z treścią knockout|light|silhouette|hard
// (hard = knockout z progiem: jasne i kolorowe tła znikają całkowicie).
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const [srcDir, outDirArg] = process.argv.slice(2);
const outDir = path.resolve(outDirArg || "public/images/clients");
fs.mkdirSync(outDir, { recursive: true });
const TARGET_H = 120; // px (wyświetlane ~40 px, zapas na ekrany retina)
const MAX_W = 520;

const lum = (r, g, b) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

async function processOne(file) {
  const slug = path.basename(file).replace(/\.(png|jpe?g|webp|svg|gif|avif)$/i, "");
  const override = fs.existsSync(path.join(srcDir, slug + ".mode")) ? fs.readFileSync(path.join(srcDir, slug + ".mode"), "utf8").trim() : "";
  const img = sharp(path.join(srcDir, file), { density: 300 }).ensureAlpha();
  const { data, info } = await img.resize({ height: 400, width: 1600, fit: "inside", withoutEnlargement: false }).raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h } = info;
  const px = (x, y) => (y * w + x) * 4;

  // 1) Usunięcie tła, jeśli narożniki są nieprzezroczyste i podobne do siebie.
  const corners = [px(1, 1), px(w - 2, 1), px(1, h - 2), px(w - 2, h - 2)];
  const opaqueCorners = corners.filter((i) => data[i + 3] > 240);
  if (opaqueCorners.length >= 3) {
    const bg = [0, 1, 2].map((c) => opaqueCorners.reduce((s, i) => s + data[i + c], 0) / opaqueCorners.length);
    for (let i = 0; i < data.length; i += 4) {
      const d = Math.hypot(data[i] - bg[0], data[i + 1] - bg[1], data[i + 2] - bg[2]);
      if (d < 38) data[i + 3] = 0;
      else if (d < 90) data[i + 3] = Math.round(data[i + 3] * ((d - 38) / 52));
    }
  }

  // 2) Średnia jasność znaku (ważona kryciem).
  let sumL = 0, sumA = 0;
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3] / 255;
    if (a < 0.05) continue;
    sumL += lum(data[i], data[i + 1], data[i + 2]) * a;
    sumA += a;
  }
  const meanL = sumA ? sumL / sumA : 0.5;
  const mode = override || (meanL < 0.42 ? "knockout" : meanL > 0.72 ? "light" : "silhouette");

  // 3) Biały znak z kryciem zależnym od trybu.
  const out = Buffer.alloc(data.length);
  let maxA = 0;
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3] / 255;
    const L = lum(data[i], data[i + 1], data[i + 2]);
    let k = mode === "knockout" ? 1 - L : mode === "light" ? L : mode === "hard" ? Math.min(1, Math.max(0, (0.72 - L) / 0.5)) : 1;
    const v = a * k;
    out[i] = out[i + 1] = out[i + 2] = 255;
    out[i + 3] = Math.round(v * 255);
    if (out[i + 3] > maxA) maxA = out[i + 3];
  }
  // normalizacja kontrastu – najmocniejszy piksel ma pełne krycie
  if (maxA > 0 && maxA < 255) for (let i = 3; i < out.length; i += 4) out[i] = Math.min(255, Math.round((out[i] * 255) / maxA));

  const dest = path.join(outDir, slug + ".webp");
  const buf = await sharp(out, { raw: { width: w, height: h, channels: 4 } }).trim({ threshold: 1 }).png().toBuffer();
  await sharp(buf).resize({ height: TARGET_H, width: MAX_W, fit: "inside" }).webp({ quality: 90, alphaQuality: 100 }).toFile(dest);
  const meta = await sharp(dest).metadata();
  return { slug, mode, meanL: +meanL.toFixed(2), width: meta.width, height: meta.height };
}

const files = fs.readdirSync(srcDir).filter((f) => /\.(png|jpe?g|webp|svg|gif|avif)$/i.test(f)).sort();
const results = [];
for (const f of files) {
  try {
    const r = await processOne(f);
    results.push(r);
    console.log(`✓ ${r.slug.padEnd(28)} ${r.mode.padEnd(10)} L=${r.meanL} ${r.width}x${r.height}`);
  } catch (e) {
    console.log("✗", f, e.message);
  }
}
fs.writeFileSync(path.join(outDir, "_logos.json"), JSON.stringify(results, null, 1));
