// Konwertuje wpisy z eksportu WP REST (posts_full.json) do content/posts/*.md
// Użycie: node scripts/import-posts.mjs <ścieżka do posts_full.json>
import fs from "node:fs";
import path from "node:path";
import TurndownService from "turndown";

const src = process.argv[2];
if (!src) { console.error("Podaj ścieżkę do posts_full.json"); process.exit(1); }
const posts = JSON.parse(fs.readFileSync(src, "utf8"));
const outDir = path.resolve("content/posts");
fs.mkdirSync(outDir, { recursive: true });

const td = new TurndownService({ headingStyle: "atx", bulletListMarker: "-", codeBlockStyle: "fenced" });
td.remove(["script", "style"]);
td.keep(["table", "thead", "tbody", "tr", "th", "td"]);

const decode = (s) => s.replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
  .replace(/&hellip;/g, "…").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#8217;/g, "’").replace(/&#8211;/g, "–").replace(/&#8222;/g, "„").replace(/&#8221;/g, "”");

for (const p of posts) {
  const fm = p._embedded?.["wp:featuredmedia"]?.[0];
  const cats = (p._embedded?.["wp:term"]?.[0] ?? []).map((t) => t.name);
  let html = p.content.rendered
    .replace(/<(div|span|section)[^>]*>|<\/(div|span|section)>/g, "")
    .replace(/\swidth="\d+"|\sheight="\d+"|\sloading="lazy"|\sdecoding="async"|\sclass="[^"]*"|\ssrcset="[^"]*"|\ssizes="[^"]*"/g, "");
  let md = td.turndown(html).replace(/\n{3,}/g, "\n\n").trim();
  md = md.replace(/https:\/\/olekcodetech\.pl\/wp-content\/uploads\/\d+\/\d+\/([^)\s"]+)/g, (_, f) => `/images/blog/${f.replace(/\.(png|jpe?g)$/i, ".webp")}`);
  md = md.replace(/\]\(https:\/\/olekcodetech\.pl\//g, "](/");
  const title = decode(p.title.rendered);
  const excerpt = decode(p.excerpt.rendered.replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
  const image = fm?.source_url ? `/images/blog/${path.basename(fm.source_url).replace(/\.(png|jpe?g)$/i, ".webp")}` : "";
  const front = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `date: "${p.date.slice(0, 10)}"`,
    `updated: "${p.modified.slice(0, 10)}"`,
    `categories: ${JSON.stringify(cats)}`,
    `excerpt: ${JSON.stringify(excerpt)}`,
    `image: "${image}"`,
    "---",
    "",
  ].join("\n");
  fs.writeFileSync(path.join(outDir, `${p.slug}.md`), front + md + "\n", "utf8");
  console.log("✓", p.slug, md.split(/\s+/).length, "słów");
}
