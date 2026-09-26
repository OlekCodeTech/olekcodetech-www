"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie } from "lucide-react";

const KEY = "oct-consent";
const GTAG = process.env.NEXT_PUBLIC_GTAG_ID || "";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGtag() {
  if (!GTAG || document.getElementById("gtag-js")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("consent", "default", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", GTAG, { anonymize_ip: true });
  const s = document.createElement("script");
  s.id = "gtag-js";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GTAG}`;
  document.head.appendChild(s);
}

/** Prosty baner cookies: statystyki (Google tag) ładują się dopiero po zgodzie. */
export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let v: string | null = null;
    try {
      v = localStorage.getItem(KEY);
    } catch {
      /* brak dostępu do localStorage */
    }
    if (v === "all") loadGtag();
    else if (!v) setShow(true);
  }, []);

  const decide = (choice: "all" | "necessary") => {
    try {
      localStorage.setItem(KEY, choice);
    } catch {
      /* ignoruj */
    }
    if (choice === "all") loadGtag();
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Zgoda na pliki cookies"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-3xl border border-line bg-ink-2/95 p-5 shadow-2xl backdrop-blur sm:inset-x-auto sm:left-6 sm:bottom-6 sm:p-6"
    >
      <div className="flex gap-4">
        <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-dim text-cyan sm:inline-flex">
          <Cookie className="h-5 w-5" />
        </span>
        <div className="space-y-3 text-sm text-body">
          <p>
            Używamy niezbędnych plików cookies, a za Twoją zgodą także statystycznych (Google), żeby wiedzieć, które treści są
            przydatne. Szczegóły w{" "}
            <Link href="/privacy-policy/" className="text-cyan underline underline-offset-2">
              polityce prywatności
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => decide("all")}
              className="rounded-pill bg-cyan px-5 py-2.5 font-display text-sm font-semibold text-ink transition hover:bg-cyan-2"
            >
              Akceptuję wszystkie
            </button>
            <button
              onClick={() => decide("necessary")}
              className="rounded-pill border border-line px-5 py-2.5 font-display text-sm font-semibold text-snow transition hover:border-cyan hover:text-cyan"
            >
              Tylko niezbędne
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
