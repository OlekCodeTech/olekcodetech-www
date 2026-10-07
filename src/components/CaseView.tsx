import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Building2, CalendarDays, MapPin, Layers } from "lucide-react";
import type { CaseStudy } from "@/data/types";
import { cases } from "@/data/cases";
import { portfolio, portfolioTypes } from "@/data/portfolio";
import { services } from "@/data/services";
import { landings } from "@/data/landings";
import PageHero from "./PageHero";
import PortfolioGrid from "./PortfolioGrid";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { Button, Card, CheckList, Container, SectionHeading } from "./ui";
import { CtaBand } from "./sections";
import { siteUrl } from "@/lib/utils";

export default function CaseView({ item }: { item: CaseStudy }) {
  const pf = portfolio.find((p) => p.title === item.portfolioTitle);
  const image = item.image ?? pf?.image;
  const url = item.url ?? pf?.url;
  const relatedServices = item.services.map((s) => services.find((x) => x.slug === s)).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const relatedLandings = (item.landings ?? []).map((s) => landings.find((x) => x.slug === s)).filter((x): x is NonNullable<typeof x> => Boolean(x));
  const others = cases.filter((c) => c.slug !== item.slug).sort((a, b) => Number(b.type === item.type) - Number(a.type === item.type)).slice(0, 3);
  const otherItems = others.map((c) => portfolio.find((p) => p.title === c.portfolioTitle)).filter((p): p is NonNullable<typeof p> => Boolean(p));
  const caseSlugs = Object.fromEntries(cases.map((c) => [c.portfolioTitle, c.slug]));

  const meta = [
    { icon: Building2, label: "Branża", value: item.industry },
    { icon: Layers, label: "Typ", value: portfolioTypes[item.type] },
    ...(item.location ? [{ icon: MapPin, label: "Lokalizacja", value: item.location }] : []),
    { icon: CalendarDays, label: "Rok", value: item.year },
  ];

  return (
    <>
      <PageHero eyebrow={`Case study · ${item.client}`} title={item.title} lead={item.summary} crumbs={[{ label: "Portfolio", href: "/portfolio/" }, { label: item.client, href: `/portfolio/${item.slug}/` }]} wide>
        <div className="mt-8 flex flex-wrap gap-3">
          {url && (
            <Button href={url} external size="lg">
              Zobacz na żywo
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          )}
          <Button href="/kontakt/" variant="outline" size="lg">
            Chcę podobny projekt
          </Button>
        </div>
      </PageHero>

      {image && (
        <Container className="max-w-6xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-line/70">
              <div aria-hidden className="absolute -inset-10 -z-10 rounded-[3rem] bg-cyan/10 blur-3xl" />
              <Image src={image} alt={`${item.client} – realizacja OlekCodeTech`} width={1600} height={1067} priority sizes="(min-width: 1152px) 1152px, 100vw" className="h-auto w-full object-cover" />
            </div>
          </Reveal>
        </Container>
      )}

      <section className="py-12 lg:py-16">
        <Container>
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line/60 sm:grid-cols-2 lg:grid-cols-4">
            {meta.map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-ink-2/80 p-6">
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                  <Icon className="h-4 w-4 text-cyan" />
                  {label}
                </dt>
                <dd className="mt-2 font-display text-lg font-semibold text-snow">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="pb-16 lg:pb-24">
        <Container className="grid items-start gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <Reveal>
              <Card>
                <h2 className="text-2xl sm:text-3xl">Punkt wyjścia</h2>
                <div className="mt-4 space-y-4 text-body sm:text-lg">
                  {item.challenge.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Card>
            </Reveal>
            <Reveal delay={60}>
              <Card>
                <h2 className="text-2xl sm:text-3xl">Co zrobiliśmy</h2>
                <CheckList items={item.scope} className="mt-5" />
              </Card>
            </Reveal>
            <Reveal delay={120}>
              <Card className="border-cyan/30">
                <h2 className="text-2xl sm:text-3xl">Efekt</h2>
                <div className="mt-4 space-y-4 text-body sm:text-lg">
                  {item.results.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
          <aside className="space-y-5 lg:col-span-5 lg:sticky lg:top-28">
            <Card>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Technologie</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <li key={s} className="rounded-pill border border-line/80 px-3.5 py-1.5 text-sm text-body">
                    {s}
                  </li>
                ))}
              </ul>
            </Card>
            {(relatedServices.length > 0 || relatedLandings.length > 0) && (
              <Card>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Usługi w tym projekcie</p>
                <ul className="mt-4 space-y-2">
                  {relatedServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/${s.slug}/`} className="inline-flex items-center gap-2 font-display font-semibold text-snow hover:text-cyan">
                        <ArrowRight className="h-4 w-4 text-cyan" />
                        {s.name}
                      </Link>
                    </li>
                  ))}
                  {relatedLandings.map((l) => (
                    <li key={l.slug}>
                      <Link href={`/${l.slug}/`} className="inline-flex items-center gap-2 text-body hover:text-cyan">
                        <ArrowRight className="h-4 w-4 text-cyan/70" />
                        {l.kind === "city" ? `Strony internetowe ${l.city}` : l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
            <Card className="border-cyan/40 bg-cyan-dim">
              <p className="font-display text-lg font-semibold text-snow">Potrzebujesz podobnego rozwiązania?</p>
              <p className="mt-2 text-sm text-body">Opowiedz o swojej firmie. W 30 minut ustalimy zakres i kolejne kroki.</p>
              <Button href="/kontakt/" className="mt-5 w-full">
                Bezpłatna konsultacja
              </Button>
            </Card>
          </aside>
        </Container>
      </section>

      {otherItems.length > 0 && (
        <section className="border-t border-line/60 py-16 lg:py-24">
          <Container>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Więcej realizacji" title="Inne projekty" />
              <Button href="/portfolio/" variant="outline">
                Całe portfolio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <PortfolioGrid items={otherItems} caseSlugs={caseSlugs} />
          </Container>
        </section>
      )}

      <CtaBand />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: item.title,
            about: item.client,
            description: item.metaDescription,
            url: `${siteUrl}/portfolio/${item.slug}/`,
            image: image ? `${siteUrl}${image}` : undefined,
            creator: { "@id": `${siteUrl}/#organization` },
            dateCreated: item.year,
            inLanguage: "pl-PL",
          },
        ]}
      />
    </>
  );
}
