// Okładka wpisu z własnych zrzutów: dwa zaokrąglone „ekrany” na ciemnym tle z siatką i turkusową poświatą.
// Użycie: npx tsx scripts/make-cover.mts <wyjście.webp> <obraz-tło> <obraz-przód>
import sharp from "sharp";

const [out, backSrc, frontSrc] = process.argv.slice(2);
if (!out || !backSrc || !frontSrc) {
  console.error("Użycie: npx tsx scripts/make-cover.mts <wyjście.webp> <obraz-tło> <obraz-przód>");
  process.exit(1);
}
const W = 1600, H = 900;

async function card(src: string, w: number, h: number, position: string) {
  const img = await sharp(src).resize({ width: w, height: h, fit: "cover", position }).png().toBuffer();
  const mask = Buffer.from(`<svg width="${w}" height="${h}"><rect width="${w}" height="${h}" rx="30" fill="#fff"/></svg>`);
  const border = Buffer.from(`<svg width="${w}" height="${h}"><rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="29" fill="none" stroke="#3b3a3a" stroke-width="2"/></svg>`);
  return sharp(img).composite([{ input: mask, blend: "dest-in" }, { input: border }]).png().toBuffer();
}

async function shadow(w: number, h: number) {
  const svg = `<svg width="${w + 160}" height="${h + 160}"><rect x="80" y="100" width="${w}" height="${h}" rx="30" fill="#000" fill-opacity="0.65"/></svg>`;
  return sharp(Buffer.from(svg)).blur(40).png().toBuffer();
}

const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="g1" cx="0.78" cy="0.25" r="0.7"><stop offset="0" stop-color="#08fbfa" stop-opacity="0.22"/><stop offset="1" stop-color="#08fbfa" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="0.1" cy="1" r="0.6"><stop offset="0" stop-color="#08fbfa" stop-opacity="0.12"/><stop offset="1" stop-color="#08fbfa" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M56 0H0V56" fill="none" stroke="#ffffff" stroke-opacity="0.045"/></pattern>
  </defs>
  <rect width="100%" height="100%" fill="#11100f"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <rect width="100%" height="100%" fill="url(#g1)"/>
  <rect width="100%" height="100%" fill="url(#g2)"/>
</svg>`);

const bw = 760, bh = 600, fw = 900, fh = 600;
const back = await card(backSrc, bw, bh, "centre");
const front = await card(frontSrc, fw, fh, "centre");
await sharp(bg)
  .composite([
    { input: await shadow(bw, bh), left: 110 - 80, top: 110 - 100 },
    { input: back, left: 110, top: 110 },
    { input: await shadow(fw, fh), left: 600 - 80, top: 230 - 100 },
    { input: front, left: 600, top: 230 },
  ])
  .webp({ quality: 84 })
  .toFile(out);
console.log("okładka:", out);
