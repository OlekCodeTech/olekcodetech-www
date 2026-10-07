import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./ui";
import Reveal from "./Reveal";

/** Duże „oświadczenie” w stylu Apple – trzy słowa, jedna obietnica. */
export function Statement() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">Jedno miejsce. Cała technologia firmy.</p>
          <h2 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Projektujemy. <span className="text-cyan">Programujemy.</span>
            <br className="hidden sm:block" /> Utrzymujemy.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-body sm:text-xl">
            Nie sprzedajemy „strony” ani „wtyczki”. Budujemy strony, sklepy i aplikacje dedykowane, które porządkują sprzedaż, obsługę klienta i codzienną pracę zespołu.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/** Kafel z mockupem – obraz prowadzi, tekst krótki. */
export function ShowcaseTile() {
  return (
    <section className="py-8 sm:py-12">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line/70 bg-ink-2 sm:rounded-[3rem]">
            <div aria-hidden className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-[140px]" />
            <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:gap-6 lg:p-16">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">Strony i sklepy</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl lg:text-5xl">Twoja firma na każdym ekranie.</h3>
                <p className="mt-5 text-lg text-body">
                  Responsywne, szybkie i gotowe pod Google. Projektujemy pod konwersję, a nie pod „ładnie wygląda”.
                </p>
                <Link href="/stronywww-aplikacje/" className="mt-7 inline-flex items-center gap-1 font-display font-semibold text-cyan hover:text-cyan-2">
                  Strony i sklepy internetowe
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="lg:col-span-7">
                <Image
                  src="/images/hero/OlekCodeTech-Mockup-.webp"
                  alt="Realizacje OlekCodeTech na ekranach telefonów"
                  width={873}
                  height={1065}
                  sizes="(min-width: 1024px) 640px, 90vw"
                  className="mx-auto h-auto w-full max-w-2xl rounded-[1.5rem] border border-line/60 lg:translate-y-8"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/** Dwa mniejsze kafle obok siebie (automatyzacje, opieka IT). */
export function FeatureTiles() {
  const tiles = [
    {
      eyebrow: "Aplikacje dedykowane",
      title: "Software szyty na miarę.",
      text: "CRM, panele klienta, systemy rezerwacji i aplikacje mobilne zbudowane pod Twoje procesy. Kod i prawa należą do Ciebie.",
      href: "/aplikacje-dedykowane/",
      image: "/images/services/OlekCodeTech-Dasch-1.webp",
      alt: "Panel aplikacji dedykowanej zaprojektowanej przez OlekCodeTech",
    },
    {
      eyebrow: "Opieka IT",
      title: "Działa. Codziennie.",
      text: "Aktualizacje, kopie, monitoring i helpdesk. Partner technologiczny, a nie „serwis od awarii”.",
      href: "/opieka-it-dla-firm/",
      image: "/images/hero/OlekCodeTech-serwerowania.webp",
      alt: "Serwerownia – opieka IT",
    },
  ];
  return (
    <section className="py-8 sm:py-12">
      <Container className="grid gap-6 lg:grid-cols-2">
        {tiles.map((t, i) => (
          <Reveal key={t.href} delay={i * 100}>
            <Link href={t.href} className="group block h-full overflow-hidden rounded-[2rem] border border-line/70 bg-ink-2 transition hover:border-cyan/50 sm:rounded-[2.5rem]">
              <div className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">{t.eyebrow}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">{t.title}</h3>
                <p className="mt-4 max-w-md text-body">{t.text}</p>
                <span className="mt-6 inline-flex items-center gap-1 font-display font-semibold text-cyan">
                  Dowiedz się więcej
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={t.image} alt={t.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent" />
              </div>
            </Link>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
