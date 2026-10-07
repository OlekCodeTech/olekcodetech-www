import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import { CtaBand } from "@/components/sections";
import { Container } from "@/components/ui";
import { portfolio } from "@/data/portfolio";
import { cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "Portfolio – Realizacje IT i Strony WWW | OlekCodeTech",
  description:
    "Zobacz portfolio OlekCodeTech. Realizacje stron WWW, sklepów online, automatyzacji procesów i systemów IT dla firm z całej Polski.",
  alternates: { canonical: "/portfolio/" },
};

export default function PortfolioPage() {
  const caseSlugs = Object.fromEntries(cases.map((c) => [c.portfolioTitle, c.slug]));
  return (
    <>
      <PageHero
        eyebrow="Nasze realizacje technologiczne"
        title="Portfolio OlekCodeTech"
        crumbs={[{ label: "Portfolio", href: "/portfolio/" }]}
        lead="Wybrane projekty stron internetowych, e-commerce i automatyzacji, które realnie wspierają rozwój biznesów naszych klientów."
      />
      <section className="pb-16 lg:pb-24">
        <Container>
          <PortfolioGrid items={portfolio} filters caseSlugs={caseSlugs} />
        </Container>
      </section>
      <CtaBand title="Chcesz, żeby Twój projekt trafił na tę listę?" text="Opowiedz nam o swojej firmie – zaproponujemy rozwiązanie i wycenę bez zobowiązań." />
    </>
  );
}
