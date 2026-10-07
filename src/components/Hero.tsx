import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "./ui";
import VideoPlayer from "./VideoPlayer";

const proof = [
  { value: "50+", label: "zrealizowanych projektów" },
  { value: "7+", label: "lat doświadczenia" },
  { value: "98%", label: "zadowolonych klientów" },
];

/** Hero w stylu Apple: duży, wyśrodkowany nagłówek + showreel w „ramce ekranu”. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="absolute left-1/2 top-[-20%] -z-10 h-[70vh] w-[120vw] -translate-x-1/2 rounded-[100%] bg-cyan/10 blur-[160px]" />

      <Container className="flex flex-col items-center pb-16 pt-16 text-center sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
        <p className="hero-in inline-flex items-center gap-2 rounded-pill border border-line/80 bg-ink-2/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan sm:text-xs">
          Strony · Sklepy · Automatyzacje · IT
        </p>

        <h1 className="hero-in mt-7 max-w-5xl text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl xl:text-[5.5rem]" style={{ animationDelay: "80ms" }}>
          Technologia, która
          <br />
          <span className="bg-gradient-to-r from-cyan via-[#9ff] to-snow bg-clip-text text-transparent">pracuje na Twój wynik.</span>
        </h1>

        <p className="hero-in mt-7 max-w-2xl text-lg leading-relaxed text-body sm:text-xl" style={{ animationDelay: "160ms" }}>
          Strony internetowe, sklepy i aplikacje, automatyzacje procesów oraz stała opieka IT. Jeden zespół, od analizy po wdrożenie – dla firm z całej Polski.
        </p>

        <div className="hero-in mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4" style={{ animationDelay: "240ms" }}>
          <Link
            href="/kontakt/"
            className="inline-flex items-center gap-2 rounded-pill bg-cyan px-7 py-3.5 font-display text-base font-semibold text-ink transition hover:bg-cyan-2 hover:shadow-glow"
          >
            Bezpłatna konsultacja
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/oferta/" className="inline-flex items-center gap-1 font-display text-base font-semibold text-cyan transition hover:text-cyan-2">
            Zobacz ofertę
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="hero-in relative mt-16 w-full max-w-6xl sm:mt-20" style={{ animationDelay: "360ms" }}>
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[3rem] bg-cyan/15 blur-3xl sm:-inset-10" />
          <VideoPlayer
            mp4="/video/hero-720.mp4"
            poster="/video/hero-poster.webp"
            className="aspect-video rounded-2xl border border-line/80 shadow-[0_40px_120px_-40px_rgba(8,251,250,0.35)] sm:rounded-[2rem]"
            label="Showreel realizacji OlekCodeTech"
          />
        </div>

        <ul className="hero-in mt-12 flex flex-wrap justify-center gap-x-12 gap-y-6 sm:mt-16" style={{ animationDelay: "480ms" }}>
          {proof.map((p) => (
            <li key={p.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-snow sm:text-4xl">{p.value}</p>
              <p className="mt-1 text-sm text-muted">{p.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
