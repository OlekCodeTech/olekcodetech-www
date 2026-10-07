"use client";

/**
 * Google reCAPTCHA v3 (niewidoczna). Klucz witryny: NEXT_PUBLIC_RECAPTCHA_SITE_KEY.
 * Skrypt ładowany leniwie – dopiero gdy formularz jest na ekranie lub ktoś zaczyna go wypełniać.
 * Bez klucza wszystkie funkcje są no-op, a formularz działa jak wcześniej.
 */
export const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

type Grecaptcha = { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> };
declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

let loading: Promise<void> | null = null;

export function loadRecaptcha(): Promise<void> {
  if (!RECAPTCHA_SITE_KEY || typeof window === "undefined") return Promise.resolve();
  if (loading) return loading;
  loading = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => {
      loading = null;
      reject(new Error("Nie udało się załadować reCAPTCHA"));
    };
    document.head.appendChild(s);
  });
  return loading;
}

/** Zwraca token dla akcji (np. "contact") albo pusty string, gdy reCAPTCHA jest wyłączona. */
export async function getRecaptchaToken(action: string): Promise<string> {
  if (!RECAPTCHA_SITE_KEY) return "";
  await loadRecaptcha();
  const g = window.grecaptcha;
  if (!g) throw new Error("reCAPTCHA niedostępna");
  await new Promise<void>((r) => g.ready(r));
  return g.execute(RECAPTCHA_SITE_KEY, { action });
}
