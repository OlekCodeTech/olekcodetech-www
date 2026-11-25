import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, MapPin, Phone } from "lucide-react";
import type { LandingPage } from "@/data/types";
import { getService, services } from "@/data/services";
import { landings, landingLabel, insertLandings, insertProducts } from "@/data/landings";
import { portfolio } from "@/data/portfolio";
import { cases } from "@/data/cases";
import { site } from "@/data/site";
import PageHero from "./PageHero";
import PortfolioGrid from "./PortfolioGrid";
import Faq from "./Faq";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { Button, Card, CheckList, Container, SectionHeading } from "./ui";
import { CtaBand, RelatedServices } from "./sections";
import RoiCalculator from "./RoiCalculator";
import IntegrationsStrip from "./IntegrationsStrip";
import { siteUrl } from "@/lib/utils";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/ł/g, "l")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function LandingView({ page }: { page: LandingPage }) {
  const parent = getService(page.parent);
  const related = (page.related ?? [])
    .map((slug) => {
      const l = landings.find((x) => x.slug === slug);
      if (l) return { href: `/${l.slug}/`, label: l.kind === "city" ? landingLabel(l) : l.title, short: l.eyebrow };
      const s = services.find((x) => x.slug === slug);
      if (s) return { href: `/${s.slug}/`, label: s.name, short: s.eyebrow };
      return null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const featured = (page.portfolio ?? []).map((t) => portfolio.find((p) => p.title === t)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const caseSlugs = Object.fromEntries(cases.map((c) => [c.portfolioTitle, c.slug]));
  const isCity = page.kind === "city";
  const isDev = page.topic === "dev";
  const topicOf = (l: LandingPage) => l.topic ?? "www";
  const toLink = (l: LandingPage) => ({ href: `/${l.slug}/`, label: landingLabel(l), short: l.eyebrow });
  // Strony lokalne: ta sama usługa w innych miastach + druga usługa w tym samym mieście.
  const product = page.product;
  const isInsertHub = page.slug === "programy-insert-nexo";
  const siblings = product
    ? insertProducts.filter((l) => l.slug !== page.slug)
    : !isCity
    ? landings.filter((l) => l.parent === page.parent && l.kind === "service" && l.slug !== page.slug && !l.product)
    : landings.filter((l) => l.kind === "city" && l.slug !== page.slug && topicOf(l) === topicOf(page));
  const sameCity = isCity ? landings.filter((l) => l.kind === "city" && l.city === page.city && l.slug !== page.slug) : [];
  const seeAlso = [...sameCity.map(toLink), ...related, ...siblings.map(toLink)]
    .filter((x, i, arr) => arr.findIndex((y) => y.href === x.href) === i)
    .slice(0, 6);
  const ctaTitle = product ? `Chcesz kupić lub wdrożyć ${product.name}?` : !isCity ? "Masz pytania dotyczące tej usługi?" : isDev ? `Szukasz programisty ${page.cityLocative}?` : `Szukasz firmy od stron internetowych ${page.cityLocative}?`;
  const faqLead = !isCity
    ? "Jeśli nie znajdziesz odpowiedzi, napisz – odpowiadamy w ciągu jednego dnia roboczego."
    : isDev
      ? `Odpowiedzi na pytania firm ${page.cityLocative ?? ""}, które myślą o programie na zamówienie, automatyzacji albo integracji systemów.`
      : `Odpowiedzi na pytania firm ${page.cityLocative ?? ""}, które planują stronę lub sklep.`;

  const crumbs = product
    ? [
        { label: "Oferta", href: "/oferta/" },
        { label: "Programy InsERT", href: "/programy-insert-nexo/" },
        { label: product.name, href: `/${page.slug}/` },
      ]
    : parent
    ? [
        { label: "Oferta", href: "/oferta/" },
        { label: parent.name, href: `/${parent.slug}/` },
        { label: landingLabel(page), href: `/${page.slug}/` },
      ]
    : [{ label: page.title, href: `/${page.slug}/` }];

  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} lead={page.lead} crumbs={crumbs} wide>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/kontakt/" size="lg">
            Bezpłatna konsultacja
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button href={site.phoneHref} variant="outline" size="lg" external>
            <Phone className="h-4 w-4" />
            {site.phone}
          </Button>
        </div>
      </PageHero>

      <section className="pb-16 lg:pb-24">
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="space-y-5 lg:sticky lg:top-28">
              {product && (
                <Card>
                  <div className="flex items-center justify-center rounded-2xl bg-snow p-5">
                    <Image
                      src={product.image ?? "/images/partners/insert-partner.svg"}
                      alt={`${product.name} – program InsERT`}
                      width={430}
                      height={435}
                      className="h-44 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted">Producent: InsERT · linia {product.line}</p>
                  <a href={product.producerUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 font-display text-sm font-semibold text-cyan">
                    Strona produktu u producenta
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Card>
              )}
              <Card>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">W skrócie</p>
                <ol className="mt-4 space-y-2.5">
                  {page.sections.map((s, i) => (
                    <li key={s.title}>
                      <a href={`#${slugify(s.title)}`} className="flex gap-3 text-sm text-body transition hover:text-cyan">
                        <span className="font-display font-semibold text-cyan/80">0{i + 1}</span>
                        <span>{s.title}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </Card>
              {page.kind === "city" && (
                <Card>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Lokalnie</p>
                  <p className="mt-3 flex items-start gap-3 text-body">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                    <span>
                      Siedziba: {site.address.street}, {site.address.postal} {site.address.city}. Pracujemy {page.cityLocative} na miejscu i zdalnie.
                    </span>
                  </p>
                  <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 font-display text-sm font-semibold text-cyan">
                    Zobacz na mapie
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Card>
              )}
              <Card className="border-cyan/40 bg-cyan-dim">
                <p className="font-display text-lg font-semibold text-snow">Porozmawiajmy o Twoim projekcie</p>
                <p className="mt-2 text-sm text-body">30 minut, bez zobowiązań. Powiesz, co chcesz osiągnąć, my zaproponujemy plan i wycenę.</p>
                <Button href="/kontakt/" className="mt-5 w-full">
                  Umów rozmowę
                </Button>
              </Card>
            </div>
          </aside>

          <div className="space-y-6 lg:col-span-8">
            {page.sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 50}>
                <Card className="scroll-mt-28" >
                  <div id={slugify(s.title)} className="scroll-mt-28" />
                  <h2 className="text-2xl sm:text-3xl">{s.title}</h2>
                  <p className="mt-4 text-body sm:text-lg">{s.text}</p>
                  {s.bullets && <CheckList items={s.bullets.slice(0, 3)} className="mt-5" />}
                  {s.bullets && s.bullets.length > 3 && (
                    <details className="group mt-2.5">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-sm font-semibold text-muted transition hover:text-cyan [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">Rozwiń szczegóły (+{s.bullets.length - 3})</span>
                        <span className="hidden group-open:inline">Zwiń</span>
                        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                      </summary>
                      <CheckList items={s.bullets.slice(3)} className="mt-2.5" />
                    </details>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {featured.length > 0 && (
        <section className="border-t border-line/60 py-16 lg:py-24">
          <Container>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Realizacje" title="Zobacz, jak to wygląda w praktyce" />
              <Button href="/portfolio/" variant="outline">
                Całe portfolio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <PortfolioGrid items={featured} caseSlugs={caseSlugs} />
          </Container>
        </section>
      )}

      {page.calculator && (
        <section className="border-t border-line/60 py-16 lg:py-24">
          <Container>
            <SectionHeading
              eyebrow="Czy to się opłaca"
              title="Policz, ile kosztuje ręczna praca"
              lead="Ustaw trzy suwaki dla jednej powtarzalnej czynności w firmie. Zobaczysz, ile godzin i pieniędzy pochłania w skali roku – to punkt wyjścia do decyzji, czy warto ją oddać programowi."
              className="mb-10"
            />
            <RoiCalculator />
          </Container>
        </section>
      )}

      {(isDev || page.calculator) && <IntegrationsStrip />}

      {isInsertHub && (
        <section className="border-t border-line/60 py-16 lg:py-24">
          <Container>
            <SectionHeading eyebrow="Oferta" title="Programy InsERT w naszej ofercie" lead="Każdy program ma u nas osobny opis: dla kogo jest, co potrafi i jak wygląda wdrożenie." className="mb-10" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {insertProducts.map((l) => (
                <Link key={l.slug} href={`/${l.slug}/`} className="group flex items-center gap-4 rounded-3xl border border-line bg-ink-2/60 p-4 transition hover:border-cyan/50">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-snow p-1.5">
                    <Image src={l.product?.image ?? "/images/partners/insert-partner.svg"} alt="" width={64} height={64} className="h-full w-full object-contain" unoptimized />
                  </span>
                  <span>
                    <span className="block font-display font-semibold text-snow">{l.product?.name}</span>
                    <span className="mt-0.5 block text-sm text-muted">{l.title.split(" - ").slice(1).join(" - ")}</span>
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <Faq items={page.faq} lead={faqLead} title={product ? `${product.name} – najczęstsze pytania` : undefined} />

      {(seeAlso.length > 0) && (
        <section className="pb-8">
          <Container>
            <SectionHeading eyebrow="Zobacz także" title={product ? `${product.name} i powiązane programy InsERT` : isCity ? "Powiązane usługi i lokalizacje" : "Powiązane usługi"} className="mb-8" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {seeAlso.map((r) => (
                  <Link key={r.href} href={r.href} className="group flex items-start justify-between gap-3 rounded-3xl border border-line bg-ink-2/60 p-5 transition hover:border-cyan/50">
                    <span>
                      <span className="block font-display font-semibold text-snow">{r.label}</span>
                      <span className="mt-1 block text-sm text-muted">{r.short}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition group-hover:text-cyan" />
                  </Link>
                ))}
            </div>
          </Container>
        </section>
      )}

      {/* Na podstronach produktów InsERT każdy h2 musi zawierać nazwę produktu – tej sekcji tam nie ma. */}
      {!product && (
        <section className="pb-8 pt-8">
          <Container>
            <SectionHeading eyebrow="Pełna oferta" title="Pozostałe obszary" className="mb-8" />
            <RelatedServices current={page.parent} withoutInsert={insertLandings.some((l) => l.slug === page.slug)} />
          </Container>
        </section>
      )}

      <CtaBand title={ctaTitle} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.title,
          description: page.metaDescription,
          url: `${siteUrl}/${page.slug}/`,
          serviceType: parent?.name ?? page.title,
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: page.kind === "city" && page.city ? { "@type": "City", name: page.city } : "PL",
        }}
      />
    </>
  );
}
