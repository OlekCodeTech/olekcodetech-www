import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  date: string;
  updated: string;
  categories: string[];
  excerpt: string;
  image: string;
  html: string;
  readingMinutes: number;
};

export const categories: { name: string; slug: string; description: string }[] = [
  { name: "Strony internetowe i UX", slug: "strony-internetowe-i-ux", description: "Projektowanie stron, UX i konwersja." },
  { name: "SEO i widoczność w Google", slug: "seo-i-widocznosc-w-google", description: "SEO techniczne, lokalne SEO i content." },
  { name: "Automatyzacje i integracje", slug: "automatyzacje-i-integracje", description: "n8n, Make, CRM i przepływ danych." },
  { name: "AI w biznesie", slug: "ai-w-biznesie", description: "Praktyczne zastosowania AI w firmach." },
  { name: "Trendy i nowości IT", slug: "trendy-i-nowosci-it", description: "Co zmienia się w technologii dla biznesu." },
  { name: "WordPress i Elementor", slug: "wordpress-i-elementor", description: "Porady dla właścicieli stron na WordPressie." },
];

export const categorySlug = (name: string) =>
  categories.find((c) => c.name === name)?.slug ??
  name.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ł/g, "l").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

marked.setOptions({ gfm: true, breaks: false });

function prefixInternalUrls(html: string) {
  if (!basePath) return html;
  return html.replace(/(src|href)="\/(?!\/)/g, `$1="${basePath}/`);
}

function loadPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const html = prefixInternalUrls(marked.parse(content) as string);
  const words = content.split(/\s+/).filter(Boolean).length;
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    updated: data.updated ?? data.date ?? "",
    categories: data.categories ?? [],
    excerpt: data.excerpt ?? "",
    image: data.image ?? "",
    html,
    readingMinutes: Math.max(1, Math.round(words / 200)),
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(loadPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;
  return loadPost(`${slug}.md`);
}

export function getPostsByCategory(slug: string): Post[] {
  return getAllPosts().filter((p) => p.categories.some((c) => categorySlug(c) === slug));
}

export function getPage(slug: string): { title: string; updated?: string; html: string } | undefined {
  const file = path.join(process.cwd(), "content", "pages", `${slug}.md`);
  if (!fs.existsSync(file)) return undefined;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { title: data.title ?? slug, updated: data.updated, html: prefixInternalUrls(marked.parse(content) as string) };
}

export const formatDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
