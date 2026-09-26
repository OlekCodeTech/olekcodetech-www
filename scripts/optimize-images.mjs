// Kopiuje grafiki ze źródła do public/images/<grupa>/ jako WebP (max 1600px).
// Użycie: node scripts/optimize-images.mjs <katalog źródłowy> <plik mapy JSON>
// Mapa: { "grupa": ["plik1.png", ...] }
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const [srcDir, mapFile] = process.argv.slice(2);
const map = JSON.parse(fs.readFileSync(mapFile, "utf8"));
for (const [group, files] of Object.entries(map)) {
  const outDir = path.resolve("public/images", group);
  fs.mkdirSync(outDir, { recursive: true });
  for (const f of files) {
    const src = path.join(srcDir, f);
    if (!fs.existsSync(src)) { console.warn("brak:", f); continue; }
    const ext = path.extname(f).toLowerCase();
    if ([".svg", ".webp"].includes(ext)) { fs.copyFileSync(src, path.join(outDir, f)); continue; }
    const out = path.join(outDir, f.replace(/\.(png|jpe?g)$/i, ".webp"));
    const img = sharp(src);
    const meta = await img.metadata();
    await img.resize({ width: Math.min(meta.width ?? 1600, 1600), withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
    const kb = (fs.statSync(out).size / 1024).toFixed(0);
    console.log("✓", group, path.basename(out), kb + "KB");
  }
}
