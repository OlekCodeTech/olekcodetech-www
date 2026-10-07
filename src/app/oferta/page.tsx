import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { CtaBand, ValuesGrid } from "@/components/sections";
import { Button, CheckList, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { services } from "@/data/services";
import { landingsByParent, cityLandings } from "@/data/landings";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Oferta IT dla firm – OlekCodeTech",
  description:
    "Kompleksowa oferta IT dla firm: strony WWW, automatyzacja procesów, integracje systemów, SEO oraz stała obsługa IT. Sprawdź, jak możemy pomóc.",
  alternates: { canonical: "/oferta/" },
};

export default function OfferPage() {
  return (
    <>
      <PageHero
        eyebrow="Oferta"
        title="Kompleksowe usługi IT dla firm – od strony WWW po stałą opiekę"
        crumbs={[{ label: "Oferta", href: "/oferta/" }]}
        wide
        lead={[
          "Projektujemy nowoczesne strony internetowe, sklepy online oraz aplikacje webowe, a także zapewniamy profesjonalną obsługę IT dla firm. Wspieramy przedsiębiorstwa w rozwoju technologicznym, automatyzacji procesów i utrzymaniu stabilnych, bezpiecznych systemów IT.",
        ]}
      />

      <section className="pb-16 lg:pb-24">
        <Container>
          <ValuesGrid />
        </Container>
      </section>

      <section className="border-t border-line/60">
        <Container className="divide-y divide-line/60">
          {services.map((s, i) => (
            <Reveal key={s.slug} className={cn("grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24")}>
              <div className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-2")}>
                <Eyebrow className="mb-4">{s.eyebrow}</Eyebrow>
                <h2 className="text-3xl sm:text-4xl">{s.name}</h2>
                <p className="mt-5 text-lg text-body">{s.short}</p>
                <CheckList items={s.homeScope.slice(0, 4)} className="mt-6" />
                {landingsByParent(s.slug).length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {landingsByParent(s.slug).map((l) => (
                      <li key={l.slug}>
                        <Link href={`/${l.slug}/`} className="inline-flex items-center gap-1 rounded-pill border border-line/80 px-3.5 py-1.5 text-sm text-body transition hover:border-cyan hover:text-cyan">
                          {l.eyebrow}
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={`/${s.slug}/`}>
                    {s.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href="/kontakt/" variant="outline">
                    Zapytaj o wycenę
                  </Button>
                </div>
              </div>
              <div className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-1")}>
                <div className="relative">
                  <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-cyan/10 blur-2xl" />
                  <Image src={s.image} alt={s.name} width={756} height={816} sizes="(min-width: 1024px) 45vw, 90vw" className="h-auto w-full rounded-[2rem] border border-line/70" />
                  <span className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink/80 text-cyan backdrop-blur">
                    <ServiceIcon icon={s.icon} className="h-6 w-6" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="border-t border-line/60 py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Lokalnie" title="Strony internetowe w Twoim mieście" lead="Pracujemy zdalnie z firmami z całej Polski, a w regionie także na miejscu." className="mb-8" />
          <ul className="flex flex-wrap gap-2">
            {cityLandings.map((l) => (
              <li key={l.slug}>
                <Link href={`/${l.slug}/`} className="inline-flex items-center gap-1 rounded-pill border border-line/80 px-4 py-2 font-display text-sm font-semibold text-body transition hover:border-cyan hover:text-cyan">
                  {l.city}
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line/60 pt-16 lg:pt-24">
        <Container>
          <SectionHeading
            eyebrow="Nie wiesz, od czego zacząć?"
            title="Zacznijmy od bezpłatnej konsultacji"
            lead="W 30 minut ustalimy, co w Twojej firmie warto uporządkować w pierwszej kolejności – stronę, procesy czy obsługę IT."
            align="center"
          />
        </Container>
      </section>
      <CtaBand title="Masz pytania dotyczące IT?" />
    </>
  );
}
