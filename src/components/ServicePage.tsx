import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { portfolio } from "@/data/portfolio";
import { cases } from "@/data/cases";
import { landingsByParent } from "@/data/landings";
import { servicesFaq } from "@/data/services-faq";
import Faq from "./Faq";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "./PageHero";
import PortfolioGrid from "./PortfolioGrid";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { Button, Card, CheckList, Container, SectionHeading } from "./ui";
import { CtaBand, RelatedServices, ValuesGrid } from "./sections";
import { siteUrl } from "@/lib/utils";

const featuredFor: Record<Service["icon"], string[]> = {
  web: ["Marsol Developer", "Complex - Rafał Gajda", "Sweepio | Roboty sprzątające"],
  automation: ["CRM E-Numerika Biuro Księgowe", "RAV - Sklep elektryczny", "WTA Perfekt"],
  seo: ["Apteki Burchaciński", "MSPM - BIOGAZ", "SilverClean | Profesjonalne środki czystości i maszyny sprzątające"],
  care: ["MG Recykling", "Komunalne Wieluń", "ATEST - Piotr Sosnowski"],
  integration: ["RAV - Sklep elektryczny", "CRM E-Numerika Biuro Księgowe", "MS Nadruki"],
};

export default function ServicePage({ service }: { service: Service }) {
  const subpages = landingsByParent(service.slug);
  const caseSlugs = Object.fromEntries(cases.map((c) => [c.portfolioTitle, c.slug]));
  const featured = featuredFor[service.icon].map((t) => portfolio.find((p) => p.title === t)).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <PageHero eyebrow="Nasze usługi" title={service.hero.title} lead={service.hero.lead} crumbs={[{ label: "Oferta", href: "/oferta/" }, { label: service.name, href: `/${service.slug}/` }]} wide />

      <section className="pb-16 lg:pb-24">
        <Container className="grid items-start gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading eyebrow={service.eyebrow} title={service.sectionTitle} />
              <div className="relative mt-8">
                <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-cyan/10 blur-2xl" />
                <Image src={service.image} alt={service.name} width={756} height={816} sizes="(min-width: 1024px) 40vw, 90vw" className="h-auto w-full rounded-[2rem] border border-line/70" />
              </div>
              <Button href="/kontakt/" size="lg" className="mt-8">
                {service.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
          <div className="space-y-5 lg:col-span-7">
            {service.blocks.map((b, i) => (
              <Reveal key={b.title} delay={i * 60}>
                <Card>
                  <div className="flex items-start gap-5">
                    <span className="shrink-0 font-display text-3xl font-semibold text-cyan/80">0{i + 1}</span>
                    <div>
                      <h3 className="text-xl sm:text-2xl">{b.title}</h3>
                      <p className="mt-3 text-body">{b.text}</p>
                      {b.intro && <p className="mt-4 font-semibold text-snow">{b.intro}</p>}
                      <CheckList items={b.bullets} className="mt-3" />
                      {b.outro && <p className="mt-4 text-body">{b.outro}</p>}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {subpages.length > 0 && (
        <section className="pb-16 lg:pb-24">
          <Container>
            <SectionHeading eyebrow="Zakres w szczegółach" title="Co dokładnie możemy dla Ciebie zrobić" lead="Każdy obszar opisaliśmy osobno – z zakresem, procesem i odpowiedziami na najczęstsze pytania." className="mb-10" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subpages.map((l) => (
                <Link key={l.slug} href={`/${l.slug}/`} className="group flex items-start justify-between gap-3 rounded-3xl border border-line bg-ink-2/60 p-6 transition hover:-translate-y-0.5 hover:border-cyan/50">
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{l.eyebrow}</span>
                    <span className="mt-2 block font-display text-lg font-semibold leading-snug text-snow">{l.title}</span>
                    <span className="mt-2 block text-sm text-muted">{l.lead[0]?.slice(0, 120)}…</span>
                  </span>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition group-hover:text-cyan" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-y border-line/60 bg-ink-2/30 py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionHeading title="Dlaczego OlekCodeTech?" />
              <p className="mt-6 text-lg text-body">{service.why.text}</p>
              {service.why.bullets && (
                <>
                  <p className="mt-6 font-semibold text-snow">Zapewniamy:</p>
                  <CheckList items={service.why.bullets} className="mt-3" />
                </>
              )}
              {service.why.outro && <p className="mt-6 text-body">{service.why.outro}</p>}
            </Reveal>
            <div className="lg:col-span-7">
              <ValuesGrid />
            </div>
          </div>
        </Container>
      </section>

      {featured.length > 0 && (
        <section className="py-16 lg:py-24">
          <Container>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Realizacje" title="Wybrane projekty" />
              <Button href="/portfolio/" variant="outline">
                Całe portfolio
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <PortfolioGrid items={featured} caseSlugs={caseSlugs} />
          </Container>
        </section>
      )}

      <Faq items={servicesFaq[service.slug] ?? []} lead="Konkretne odpowiedzi na pytania, które słyszymy najczęściej przed rozpoczęciem współpracy." />

      <section className="pb-8">
        <Container>
          <SectionHeading eyebrow="Zobacz także" title="Pozostałe usługi" className="mb-8" />
          <RelatedServices current={service.slug} />
        </Container>
      </section>

      <CtaBand title="Masz pytania dotyczące IT?" cta={service.cta} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.seo.description,
          url: `${siteUrl}/${service.slug}/`,
          provider: { "@id": `${siteUrl}/#organization` },
          areaServed: "PL",
          serviceType: service.name,
        }}
      />
    </>
  );
}
