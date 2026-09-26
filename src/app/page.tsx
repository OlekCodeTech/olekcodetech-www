import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { AboutTeaser, BlogTeaser, CtaBand, KeywordMarquee, Process, ServicesGrid, StatsBand } from "@/components/sections";
import { FeatureTiles, ShowcaseTile, Statement } from "@/components/home";
import { Button, Container, SectionHeading } from "@/components/ui";
import { portfolio } from "@/data/portfolio";
import { site } from "@/data/site";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "OlekCodeTech – Strony WWW, Automatyzacje i Obsługa IT",
  description: site.description,
  alternates: { canonical: "/" },
};

const featuredTitles = [
  "IJK Transport – Krzysztof Maślanka",
  "DS Paliwa",
  "SZYJA Hair Academy",
  "RAV - Sklep elektryczny",
  "Marsol Developer",
  "CRM E-Numerika Biuro Księgowe",
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const featured = featuredTitles.map((t) => portfolio.find((p) => p.title === t)).filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <Hero />
      <Statement />
      <ShowcaseTile />
      <FeatureTiles />

      <section className="py-24 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="Kompleksowe podejście do IT"
            title="Kompleksowe usługi IT dla firm"
            lead="Od strony internetowej, przez automatyzacje i integracje, po stałą opiekę IT. Wybierz obszar, który chcesz uporządkować – albo oddaj nam całość."
            align="center"
            className="mb-14"
          />
          <ServicesGrid />
        </Container>
      </section>

      <KeywordMarquee />
      <StatsBand />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Nasze realizacje" title="Projekty, które pracują na wynik" lead="Strony, sklepy i systemy dla firm z różnych branż – od produkcji po usługi." />
            <Button href="/portfolio/" variant="outline">
              Zobacz więcej projektów
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <PortfolioGrid items={featured} />
        </Container>
      </section>

      <AboutTeaser />
      <Process />
      <BlogTeaser posts={posts} />
      <CtaBand />
    </>
  );
}
