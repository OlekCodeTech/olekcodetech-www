import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button, Container } from "./ui";
import Reveal from "./Reveal";

const chips = ["Strony WWW", "Sklepy internetowe", "Aplikacje web", "Automatyzacje", "SEO", "Opieka IT"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -top-48 left-1/2 -z-10 h-[640px] w-[960px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[150px]" />
      <div aria-hidden className="absolute right-[-10%] top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-cyan/5 blur-[120px]" />

      <Container className="grid items-center gap-14 py-14 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-pill border border-line bg-ink-2/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
              <Sparkles className="h-3.5 w-3.5" />
              Partner technologiczny dla firm
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
              Strony internetowe, automatyzacje i&nbsp;obsługa IT <span className="text-cyan">dla firm</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
              Projektujemy strony i sklepy, które sprzedają, automatyzujemy powtarzalną pracę i dbamy o systemy IT na co dzień.
              Jeden zespół od analizy po stałą opiekę – dla firm z całej Polski.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/oferta/" size="lg">
                Sprawdź naszą ofertę
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/kontakt/" variant="outline" size="lg">
                Bezpłatna konsultacja
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-2">
              {chips.map((c) => (
                <li key={c} className="rounded-pill border border-line/80 px-3.5 py-1.5 text-sm text-body">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="relative lg:col-span-6">
          <Reveal delay={120} className="relative mx-auto max-w-[560px]">
            <div aria-hidden className="absolute inset-0 -z-10 rounded-[2.5rem] bg-cyan/15 blur-3xl" />
            <div className="float-slow overflow-hidden rounded-[2rem] border border-line/70 shadow-2xl">
              <Image
                src="/images/hero/OlekCodeTech-Mockup-.webp"
                alt="Realizacje OlekCodeTech na ekranach telefonów"
                width={873}
                height={1065}
                priority
                sizes="(min-width: 1024px) 560px, 90vw"
                className="h-auto w-full"
              />
            </div>
            <div className="float-slower absolute -bottom-8 -left-6 hidden w-[46%] overflow-hidden rounded-3xl border border-line/70 shadow-2xl sm:block lg:-left-12">
              <Image
                src="/images/hero/OlekCodeTech-Dasch.webp"
                alt="Panel analityczny zaprojektowany przez OlekCodeTech"
                width={738}
                height={810}
                sizes="260px"
                className="h-auto w-full"
              />
            </div>
            <div className="absolute -right-4 top-8 hidden rounded-2xl border border-line bg-ink-2/90 px-4 py-3 shadow-xl backdrop-blur sm:block lg:-right-8">
              <p className="font-display text-2xl font-semibold text-snow">50+</p>
              <p className="text-xs text-muted">zrealizowanych projektów</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
