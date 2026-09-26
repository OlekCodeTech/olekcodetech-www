import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { CtaBand, ValuesGrid } from "@/components/sections";
import { Button, CheckList, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { services } from "@/data/services";
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
