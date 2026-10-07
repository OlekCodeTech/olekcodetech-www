"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

type Status = "idle" | "sending" | "ok" | "error";

const inputCls =
  "w-full rounded-2xl border border-line bg-ink px-4 py-3.5 text-snow placeholder:text-muted/80 transition-colors focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30";

export default function ContactForm({ subject }: { subject?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("website")) return; // honeypot (serwer też odrzuca)
    const payload = {
      website: String(fd.get("website") || ""),
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      subject: String(fd.get("subject") || "").trim(),
      message: String(fd.get("message") || "").trim(),
      consent: fd.get("consent") === "on",
      source: typeof window !== "undefined" ? window.location.href : "",
      sentAt: new Date().toISOString(),
    };

    if (!ENDPOINT) {
      const body = `Imię i nazwisko: ${payload.name}\nE-mail: ${payload.email}\nTelefon: ${payload.phone}\n\n${payload.message}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(payload.subject || "Zapytanie ze strony")}&body=${encodeURIComponent(body)}`;
      setStatus("ok");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || json?.ok === false) throw new Error(json?.error || `Błąd serwera (${res.status})`);
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Nieznany błąd");
    }
  }

  if (status === "ok") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-cyan/40 bg-cyan-dim p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-cyan" />
        <h3 className="text-2xl">Dziękujemy za wiadomość!</h3>
        <p className="max-w-md text-body">
          Odpowiadamy zwykle w ciągu jednego dnia roboczego. Jeśli sprawa jest pilna, zadzwoń:{" "}
          <a href={site.phoneHref} className="font-semibold text-cyan">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-snow">Imię i nazwisko *</span>
          <input name="name" required autoComplete="name" className={inputCls} placeholder="Jan Kowalski" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-snow">E-mail *</span>
          <input name="email" type="email" required autoComplete="email" className={inputCls} placeholder="jan@firma.pl" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-snow">Telefon</span>
          <input name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="+48 …" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-snow">Temat</span>
          <input name="subject" defaultValue={subject} className={inputCls} placeholder="Np. nowa strona, sklep, automatyzacja" />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-snow">Wiadomość *</span>
        <textarea name="message" required rows={6} className={cn(inputCls, "resize-y")} placeholder="Opisz krótko, czego potrzebujesz i na jakim etapie jesteś." />
      </label>
      <label className="flex items-start gap-3 text-sm text-body">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-cyan" />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na zapytanie. Szczegóły w{" "}
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/privacy-policy/`} className="text-cyan underline underline-offset-2">
            polityce prywatności
          </a>
          .
        </span>
      </label>
      {/* honeypot */}
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-pill bg-cyan px-8 py-4 font-display font-semibold text-ink transition-all hover:bg-cyan-2 hover:shadow-glow disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        Wyślij wiadomość
      </button>
    </form>
  );
}
