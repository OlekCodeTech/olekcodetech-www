"use client";

/**
 * Loader next/image dla statycznego eksportu: nie przetwarza obrazów,
 * tylko dokleja base path (podgląd na GitHub Pages pod /olekcodetech-www).
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  return src.startsWith("/") ? `${basePath}${src}` : src;
}
