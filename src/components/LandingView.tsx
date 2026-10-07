import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Phone } from "lucide-react";
import type { LandingPage } from "@/data/types";
import { getService, services } from "@/data/services";
import { landings } from "@/data/landings";
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
      if (l) return { href: `/${l.slug}/`, label: l.title, short: l.eyebrow };
      const s = services.find((x) => x.slug === slug);
      if (s) return { href: `/${s.slug}/`, label: s.name, short: s.eyebrow };
      return null;
    })
    .filter((x): x is NonNullable<typeof x> => Boolean(x));
  const featured = (page.portfolio ?? []).map((t) => portfolio.find((p) => p.title === t)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const caseSlugs = Object.fromEntries(cases.map((c) => [c.portfolioTitle, c.slug]));
  const siblings = page.kind === "service" ? landings.filter((l) => l.parent === page.parent && l.kind === "service" && l.slug !== page.slug) : landings.filter((l) => l.kind === "city" && l.slug !== page.slug);

  const crumbs = parent
    ? [
        { label: "Oferta", href: "/oferta/" },
        { label: parent.name, href: `/${parent.slug}/` },
        { label: page.kind === "city" ? `Strony internetowe ${page.city}` : page.title, href: `/${page.slug}/` },
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
                  {s.bullets && <CheckList items={s.bullets} className="mt-5" />}
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

      <Faq items={page.faq} lead={page.kind === "city" ? `Odpowiedzi na pytania firm ${page.cityLocative ?? ""}, które planują stronę lub sklep.` : "Jeśli nie znajdziesz odpowiedzi, napisz – odpowiadamy w ciągu jednego dnia roboczego."} />

      {(related.length > 0 || siblings.length > 0) && (
        <section className="pb-8">
          <Container>
            <SectionHeading eyebrow="Zobacz także" title={page.kind === "city" ? "Pozostałe lokalizacje" : "Powiązane usługi"} className="mb-8" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[...related, ...siblings.map((l) => ({ href: `/${l.slug}/`, label: page.kind === "city" ? `Strony internetowe ${l.city}` : l.title, short: l.eyebrow }))]
                .filter((x, i, arr) => arr.findIndex((y) => y.href === x.href) === i)
                .slice(0, 6)
                .map((r) => (
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

      <section className="pb-8 pt-8">
        <Container>
          <SectionHeading eyebrow="Pełna oferta" title="Pozostałe obszary" className="mb-8" />
          <RelatedServices current={page.parent} />
        </Container>
      </section>

      <CtaBand title={page.kind === "city" ? `Szukasz firmy od stron internetowych ${page.cityLocative}?` : "Masz pytania dotyczące tej usługi?"} />

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
