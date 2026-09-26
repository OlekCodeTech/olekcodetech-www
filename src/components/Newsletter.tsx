"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

const ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT || "";

/** Zapis do newslettera – widoczny tylko gdy skonfigurowano endpoint. */
export default function Newsletter() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  if (!ENDPOINT) return null;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") || "").trim();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "olekcodetech.pl", sentAt: new Date().toISOString() }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid items-center gap-8 rounded-3xl border border-line bg-gradient-to-br from-ink-2 to-ink p-8 md:grid-cols-2 md:p-12">
      <div>
        <h2 className="text-2xl sm:text-3xl">Zapisz się i bądź na bieżąco z nowoczesnym IT.</h2>
        <p className="mt-3 text-body">Raz na jakiś czas: konkretne porady o stronach, automatyzacjach i SEO. Bez spamu.</p>
      </div>
      {status === "ok" ? (
        <p className="rounded-2xl border border-cyan/40 bg-cyan-dim p-5 text-snow">Dziękujemy! Sprawdź skrzynkę, żeby potwierdzić zapis.</p>
      ) : (
        <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            name="email"
            type="email"
            required
            placeholder="Twój adres e-mail"
            className="w-full rounded-pill border border-line bg-ink px-5 py-3.5 text-snow placeholder:text-muted focus:border-cyan focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-pill bg-cyan px-6 py-3.5 font-display font-semibold text-ink transition hover:bg-cyan-2 disabled:opacity-70"
          >
            {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowRight className="h-4 w-4" />}
            Zapisz się
          </button>
          {status === "error" && <p className="text-sm text-red-300 sm:col-span-2">Coś poszło nie tak. Spróbuj ponownie.</p>}
        </form>
      )}
    </div>
  );
}
