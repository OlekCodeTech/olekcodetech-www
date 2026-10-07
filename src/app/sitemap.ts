import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { landings } from "@/data/landings";
import { cases } from "@/data/cases";
import { categories, categorySlug, getAllPosts } from "@/lib/posts";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const used = new Set(posts.flatMap((p) => p.categories.map(categorySlug)));
  const now = new Date();

  const statics: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/oferta/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/o-nas/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/portfolio/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/aktualnosci/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/kontakt/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  return [
    ...statics,
    ...services.map((s) => ({ url: `${siteUrl}/${s.slug}/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...landings.map((l) => ({ url: `${siteUrl}/${l.slug}/`, lastModified: now, changeFrequency: "monthly" as const, priority: l.kind === "city" ? 0.7 : 0.8 })),
    ...cases.map((c) => ({ url: `${siteUrl}/portfolio/${c.slug}/`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.6 })),
    ...posts.map((p) => ({ url: `${siteUrl}/${p.slug}/`, lastModified: new Date(p.updated || p.date), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...categories.filter((c) => used.has(c.slug)).map((c) => ({ url: `${siteUrl}/category/${c.slug}/`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.4 })),
  ];
}
