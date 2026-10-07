import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone, Building2 } from "lucide-react";
import { services, type Service } from "@/data/services";
import { site, stats as defaultStats, values } from "@/data/site";
import { Button, Card, CheckList, Container, Eyebrow, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import ServiceIcon from "./ServiceIcon";
import PostCard from "./PostCard";
import type { Post } from "@/lib/posts";
import VideoPlayer from "./VideoPlayer";

/* ---------- Pasek słów kluczowych ---------- */
const words = ["strategie", "automatyzacje", "systemy", "integracje", "seo", "opieka it", "rozwój", "wsparcie"];

export function KeywordMarquee() {
  const row = [...words, ...words];
  return (
    <div className="marquee overflow-hidden border-y border-line/60 bg-ink-2/40 py-4" aria-hidden>
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap font-display text-lg font-semibold uppercase tracking-[0.2em] text-muted">
        {row.map((w, i) => (
          <span key={i} className="inline-flex items-center gap-10">
            {w}
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Usługi (bento) ---------- */
export function ServicesGrid({ compact }: { compact?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal key={s.slug} delay={i * 60} className={i === 0 && !compact ? "lg:col-span-2" : undefined}>
          <Card glow className="flex h-full flex-col">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-dim text-cyan">
              <ServiceIcon icon={s.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-xl sm:text-2xl">{s.homeTitle}</h3>
            <p className="mt-3 text-body">{s.homeIntro}</p>
            {!compact && (
              <>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">{s.homeScopeLabel}</p>
                <CheckList items={s.homeScope} className="mt-3" />
              </>
            )}
            <Link href={`/${s.slug}/`} className="mt-auto inline-flex items-center gap-2 pt-6 font-display font-semibold text-cyan hover:text-cyan-2">
              Czytaj dalej
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- Liczby ---------- */
export function StatsBand({ items = defaultStats, title, lead }: { items?: typeof defaultStats; title?: string; lead?: string }) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        {title && <SectionHeading eyebrow="Nasz wpływ w liczbach" title={title} lead={lead} align="center" className="mb-12" />}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-ink-2/80 p-8">
              <p className="font-display text-5xl font-semibold text-snow lg:text-6xl">
                <CountUp value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 font-display text-lg font-semibold text-snow">{s.label}</p>
              <p className="mt-1 text-sm text-muted">{s.sub}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Wartości (3 karty) ---------- */
export function ValuesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {values.map((v, i) => (
        <Reveal key={v.title} delay={i * 80}>
          <Card className="h-full">
            <span className="font-display text-sm font-semibold text-cyan">0{i + 1}</span>
            <h3 className="mt-3 text-xl">{v.title}</h3>
            <p className="mt-3 text-body">{v.text}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

/* ---------- O nas (teaser na home) ---------- */
export function AboutTeaser() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <SectionHeading
            eyebrow="O nas"
            title={
              <>
                Rozwijamy firmy dzięki technologii <span className="text-cyan">i doświadczeniu IT</span>
              </>
            }
            lead="OlekCodeTech to firma IT specjalizująca się w tworzeniu stron internetowych, sklepów internetowych oraz aplikacji webowych, a także w obsłudze IT dla firm i SEO technicznym."
          />
          <p className="mt-4 max-w-2xl text-body">
            Projektujemy i wdrażamy nowoczesne rozwiązania IT, które realnie wspierają rozwój biznesu i zapewniają stabilne zaplecze technologiczne.
            Działamy w całej Polsce – lokalnie i zdalnie, m.in. dla firm z Wielunia, Łodzi i Wrocławia.
          </p>
          <CheckList
            className="mt-6"
            items={[
              "Jeden zespół: strony, sklepy, automatyzacje i opieka IT",
              "Indywidualne podejście zamiast gotowych schematów",
              "Przejrzysta komunikacja i wsparcie po wdrożeniu",
            ]}
          />
          <Button href="/o-nas/" variant="outline" className="mt-8">
            Poznaj mnie bliżej
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-6">
          <div className="relative">
            <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-cyan/10 blur-2xl" />
            <Image
              src="/images/piotr-olek.webp"
              alt="Piotr Olek – założyciel OlekCodeTech"
              width={385}
              height={500}
              sizes="(min-width: 1024px) 480px, 90vw"
              className="mx-auto h-auto w-full max-w-md rounded-[2rem] border border-line/70 object-cover"
            />
            <div className="absolute bottom-5 left-1/2 w-[calc(100%-2.5rem)] max-w-[22rem] -translate-x-1/2 rounded-2xl border border-line bg-ink/85 px-5 py-4 backdrop-blur">
              <p className="font-display font-semibold text-snow">Piotr Olek</p>
              <p className="text-sm text-muted">Założyciel OlekCodeTech · inżynier web i integracji</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Jak pracujemy ---------- */
const steps = [
  { n: "01", title: "Analiza i diagnoza", text: "Poznajemy Twój biznes, procesy i cele. Ustalamy, co ma się zmienić i jak to zmierzymy." },
  { n: "02", title: "Projekt i plan", text: "Architektura, makiety i harmonogram. Wiesz, co dostaniesz, kiedy i za ile – zanim ruszy development." },
  { n: "03", title: "Wdrożenie", text: "Development, integracje i testy. Wdrażamy etapami, żeby efekty były widoczne szybko." },
  { n: "04", title: "Opieka i rozwój", text: "Aktualizacje, monitoring, helpdesk i dalszy rozwój systemu w jednym miejscu." },
];

export function Process() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Jak pracujemy" title="Od analizy po stałą opiekę" lead="Prosty, przewidywalny proces – bez niespodzianek w trakcie i po wdrożeniu." className="mb-12" />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} as="li" delay={i * 80}>
              <Card className="h-full">
                <span className="font-display text-4xl font-semibold text-cyan/80">{s.n}</span>
                <h3 className="mt-4 text-xl">{s.title}</h3>
                <p className="mt-3 text-body">{s.text}</p>
              </Card>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------- Blog teaser ---------- */
export function BlogTeaser({ posts, title = "Wiedza, technologia i praktyka IT", eyebrow = "Baza wiedzy IT" }: { posts: Post[]; title?: string; eyebrow?: string }) {
  if (!posts.length) return null;
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={eyebrow} title={title} />
          <Button href="/aktualnosci/" variant="outline">
            Wszystkie wpisy
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- CTA ---------- */
export function CtaBand({ title, text, cta = "Skontaktuj się z nami", video = true }: { title?: React.ReactNode; text?: string; cta?: string; video?: boolean }) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan/30 bg-ink-2 px-6 py-14 text-center sm:px-12 lg:py-24">
            {video ? (
              <VideoPlayer mp4="/video/cta-720.mp4" poster="/video/cta-poster.webp" controls={false} overlay className="absolute inset-0" label="Animacja tła" />
            ) : (
              <div aria-hidden className="absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan/15 blur-[120px]" />
            )}
            <div className="relative mx-auto max-w-3xl">
              <Eyebrow className="mb-5 justify-center">Umów bezpłatną konsultację</Eyebrow>
              <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl">
                {title ?? (
                  <>
                    Rozwijaj swój biznes dzięki dopasowanym rozwiązaniom IT <span className="text-cyan">od OlekCodeTech</span>
                  </>
                )}
              </h2>
              <p className="mt-5 text-lg text-body">
                {text ?? "Skontaktuj się z nami — pomożemy w zakresie stron WWW, systemów IT, automatyzacji i stałej obsługi technicznej firm."}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button href="/kontakt/" size="lg">
                  {cta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={site.phoneHref} variant="outline" size="lg" external>
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------- Dane kontaktowe ---------- */
export function ContactInfo() {
  const items = [
    { icon: Phone, label: "Telefon", value: site.phone, href: site.phoneHref },
    { icon: Mail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Adres", value: `${site.address.street}, ${site.address.postal} ${site.address.city}`, href: site.address.mapsUrl, external: true },
  ];
  return (
    <div className="space-y-4">
      {items.map(({ icon: Icon, label, value, href, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="flex items-center gap-4 rounded-3xl border border-line bg-ink-2/60 p-5 transition hover:border-cyan/50"
        >
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-dim text-cyan">
            <Icon className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted">{label}</span>
            <span className="block font-display text-lg font-semibold text-snow">{value}</span>
          </span>
        </a>
      ))}
      <div className="flex items-start gap-4 rounded-3xl border border-line bg-ink-2/60 p-5">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-dim text-cyan">
          <Building2 className="h-5 w-5" />
        </span>
        <div className="text-sm text-body">
          <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-muted">Dane firmy</span>
          <p className="mt-1 font-display font-semibold text-snow">{site.legalName}</p>
          <p className="mt-1">Siedziba: {site.address.street}, {site.address.postal} {site.address.city}</p>
          <p>
            KRS: {site.krs} · NIP: {site.nip} · REGON: {site.regon}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Powiązane usługi ---------- */
export function RelatedServices({ current }: { current?: Service["slug"] }) {
  const list = services.filter((s) => s.slug !== current);
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {list.map((s) => (
        <Link key={s.slug} href={`/${s.slug}/`} className="group flex items-start justify-between gap-3 rounded-3xl border border-line bg-ink-2/60 p-5 transition hover:border-cyan/50">
          <span>
            <ServiceIcon icon={s.icon} className="h-5 w-5 text-cyan" />
            <span className="mt-3 block font-display font-semibold text-snow">{s.name}</span>
            <span className="mt-1 block text-sm text-muted">{s.eyebrow}</span>
          </span>
          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition group-hover:text-cyan" />
        </Link>
      ))}
    </div>
  );
}
