// Generuje karty Open Graph 1200×630 (JPG) dla wszystkich stron do public/og/.
// Użycie: npx tsx scripts/gen-og.mts   (uruchamiać po zmianie tytułów/stron; wynik commitujemy)
import fs from "node:fs";
import path from "node:path";
import sharp, { type OverlayOptions } from "sharp";
import matter from "gray-matter";
import { services } from "../src/data/services";
import { landings } from "../src/data/landings";
import { cases } from "../src/data/cases";
import { portfolio } from "../src/data/portfolio";
import { ogPath } from "../src/lib/seo";

const OUT = path.resolve("public/og");
fs.mkdirSync(OUT, { recursive: true });
const W = 1200, H = 630;

type Card = { path: string; eyebrow: string; title: string; image?: string };

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function wrap(text: string, maxChars: number, maxLines: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > maxChars && cur) {
      lines.push(cur);
      cur = w;
    } else cur = (cur + " " + w).trim();
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) {
    const cut = lines.slice(0, maxLines);
    cut[maxLines - 1] = cut[maxLines - 1].replace(/[\s,–-]*\S*$/, "") + "…";
    return cut;
  }
  return lines;
}

async function render(card: Card) {
  const hasImg = card.image && fs.existsSync(path.join("public", card.image));
  const textW = hasImg ? 640 : 1040;
  const len = card.title.length;
  const size = hasImg ? (len > 70 ? 46 : len > 45 ? 52 : 60) : len > 70 ? 58 : 68;
  const maxChars = Math.floor(textW / (size * 0.52));
  const lines = wrap(card.title, maxChars, 4);
  const lineH = Math.round(size * 1.12);
  const blockH = lines.length * lineH;
  const top = Math.round((H - blockH) / 2) + size * 0.35;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <radialGradient id="g" cx="0.15" cy="0" r="0.9"><stop offset="0" stop-color="#08fbfa" stop-opacity="0.22"/><stop offset="1" stop-color="#08fbfa" stop-opacity="0"/></radialGradient>
      <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.04"/></pattern>
    </defs>
    <rect width="100%" height="100%" fill="#11100f"/>
    <rect width="100%" height="100%" fill="url(#grid)"/>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="64" y="${top - lineH - 6}" fill="#08fbfa" font-family="Segoe UI, Arial, sans-serif" font-size="22" font-weight="700" letter-spacing="4">${esc(card.eyebrow.toUpperCase())}</text>
    ${lines.map((l, i) => `<text x="64" y="${top + i * lineH}" fill="#fffffe" font-family="Segoe UI, Arial, sans-serif" font-size="${size}" font-weight="700">${esc(l)}</text>`).join("\n")}
    <text x="64" y="${H - 52}" fill="#b2b2ac" font-family="Segoe UI, Arial, sans-serif" font-size="24" font-weight="600">olekcodetech.pl</text>
    <rect x="64" y="${H - 40}" width="72" height="4" rx="2" fill="#08fbfa"/>
  </svg>`;

  const layers: OverlayOptions[] = [];
  const logo = await sharp("public/images/logo.webp").resize({ height: 52 }).png().toBuffer();
  layers.push({ input: logo, left: 64, top: 48 });
  if (hasImg) {
    const iw = 440, ih = 500;
    const img = await sharp(path.join("public", card.image!)).resize({ width: iw, height: ih, fit: "cover", position: "top" }).png().toBuffer();
    const mask = Buffer.from(`<svg width="${iw}" height="${ih}"><rect width="${iw}" height="${ih}" rx="28" fill="#fff"/></svg>`);
    const rounded = await sharp(img).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
    const border = Buffer.from(`<svg width="${iw}" height="${ih}"><rect x="1" y="1" width="${iw - 2}" height="${ih - 2}" rx="27" fill="none" stroke="#3b3a3a" stroke-width="2"/></svg>`);
    layers.push({ input: rounded, left: W - iw - 64, top: (H - ih) / 2 }, { input: border, left: W - iw - 64, top: (H - ih) / 2 });
  }
  const file = path.join(OUT, path.basename(ogPath(card.path)));
  await sharp(Buffer.from(svg)).composite(layers).jpeg({ quality: 82, mozjpeg: true }).toFile(file);
  return file;
}

const pfImage = (title?: string) => portfolio.find((p) => p.title === title)?.image;

const cards: Card[] = [
  { path: "/", eyebrow: "Strony · Sklepy · Aplikacje · IT", title: "Technologia, która pracuje na Twój wynik", image: "/images/hero/OlekCodeTech-Mockup-.webp" },
  { path: "/o-nas/", eyebrow: "O nas", title: "Technologia dopasowana do potrzeb firm – poznaj OlekCodeTech", image: "/images/piotr-olek.webp" },
  { path: "/oferta/", eyebrow: "Oferta", title: "Kompleksowe usługi IT dla firm – od strony WWW po stałą opiekę", image: "/images/services/Ulsugi-IT-WWW.webp" },
  { path: "/portfolio/", eyebrow: "Portfolio", title: "50+ realizacji: strony, sklepy, systemy i automatyzacje", image: "/images/hero/OlekCodeTech-Mockup-.webp" },
  { path: "/kontakt/", eyebrow: "Kontakt", title: "Porozmawiajmy o Twoim projekcie – bezpłatna konsultacja", image: "/images/piotr-olek.webp" },
  { path: "/aktualnosci/", eyebrow: "Baza wiedzy IT", title: "Wiedza, technologia i praktyka IT dla firm", image: "/images/blog/Gemini_Generated_Image_kpqlgdkpqlgdkpql.webp" },
  ...services.map((s) => ({ path: `/${s.slug}/`, eyebrow: s.eyebrow, title: s.hero.title, image: s.image })),
  ...landings.map((l) => ({ path: `/${l.slug}/`, eyebrow: l.kind === "city" ? `Lokalnie · ${l.city}` : l.eyebrow, title: l.title.split(" – ")[0], image: pfImage(l.portfolio?.[0]) })),
  ...cases.map((c) => ({ path: `/portfolio/${c.slug}/`, eyebrow: `Case study · ${c.client}`, title: c.title, image: c.image ?? pfImage(c.portfolioTitle) })),
];

for (const f of fs.readdirSync("content/posts").filter((f) => f.endsWith(".md"))) {
  const { data } = matter(fs.readFileSync(path.join("content/posts", f), "utf8"));
  cards.push({ path: `/${f.replace(/\.md$/, "")}/`, eyebrow: (data.categories?.[0] as string) ?? "Blog", title: data.title, image: data.image });
}

let n = 0;
for (const c of cards) {
  await render(c);
  n++;
}
const kb = fs.readdirSync(OUT).reduce((s, f) => s + fs.statSync(path.join(OUT, f)).size, 0) / 1024;
console.log(`OG: ${n} kart, ${Math.round(kb)} KB → public/og/`);
