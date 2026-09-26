export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://olekcodetech.pl";

/** Prefiks base path dla zwykłych <img>/<a> (Next Link i next/image robią to same). */
export const withBase = (p: string) => (p.startsWith("/") ? `${basePath}${p}` : p);

export const absoluteUrl = (p: string) => `${siteUrl}${p.startsWith("/") ? p : `/${p}`}`;

export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
