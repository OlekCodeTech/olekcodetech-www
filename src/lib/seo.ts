import type { Metadata } from "next";

/** Ścieżka karty Open Graph wygenerowanej przez scripts/gen-og.ts dla danego adresu. */
export function ogPath(path: string) {
  const key = path.replace(/^\/|\/$/g, "").replace(/\//g, "--") || "home";
  return `/og/${key}.jpg`;
}

type PageMetaInput = {
  /** Ścieżka strony, np. "/oferta/" */
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  keywords?: string[];
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  /** Własny obraz OG (domyślnie karta z /og/) */
  image?: string;
};

/** Spójne metadane strony: canonical, Open Graph z kartą 1200×630, Twitter card, robots. */
export function pageMeta({ path, title, description, type = "website", keywords, noindex, publishedTime, modifiedTime, image }: PageMetaInput): Metadata {
  const img = image ?? ogPath(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "pl_PL",
      siteName: "OlekCodeTech",
      url: path,
      title,
      description,
      images: [{ url: img, width: 1200, height: 630, alt: title }],
      ...(type === "article" ? { publishedTime, modifiedTime, authors: ["Piotr Olek"] } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [img] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
