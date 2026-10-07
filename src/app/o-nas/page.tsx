import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Founder from "@/components/Founder";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { BlogTeaser, CtaBand, KeywordMarquee, Process, StatsBand } from "@/components/sections";
import { Button, Card, Container, SectionHeading } from "@/components/ui";
import { portfolio } from "@/data/portfolio";
import { cases } from "@/data/cases";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = pageMeta({
  path: "/o-nas/",
  title: "O nas – OlekCodeTech | Usługi IT dla firm",
  description:
    "OlekCodeTech to firma IT z Wielunia: strony WWW, sklepy, automatyzacje, integracje i stała obsługa IT. Poznaj założyciela i sposób, w jaki pracujemy.",
});

const pillars = [
  { icon: "web", title: "Strony i aplikacje webowe", text: "Projektujemy nowoczesne strony internetowe, sklepy online i aplikacje webowe zoptymalizowane pod wydajność, SEO i konwersję użytkowników." },
  { icon: "automation", title: "Automatyzacje procesów", text: "Wdrażamy automatyzacje procesów biznesowych, które eliminują ręczną pracę i porządkują działania sprzedażowe, operacyjne oraz obsługę klienta." },
  { icon: "care", title: "Obsługa IT dla firm", text: "Zapewniamy kompleksową obsługę IT, helpdesk oraz rozwój systemów dla firm działających lokalnie i w całej Polsce." },
] as const;

const aboutStats = [
  { value: 50, suffix: "+", label: "Zrealizowanych projektów IT", sub: "strony WWW, sklepy, systemy, automatyzacje" },
  { value: 98, suffix: "%", label: "Zadowolonych klientów", sub: "długofalowa współpraca i rekomendacje" },
  { value: 7, suffix: "+", label: "Klientów długoterminowych", sub: "opieka IT i rozwój systemów" },
  { value: 24, suffix: "h", label: "Wsparcie techniczne i opieka IT", sub: "dla firm objętych stałą obsługą" },
];

export default function AboutPage() {
  const posts = getAllPosts().slice(0, 3);
  const featured = ["Marsol Developer", "Syguła Meble | Meble tapicerowane", "Restauracja Incognito"]
    .map((t) => portfolio.find((p) => p.title === t))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <PageHero
        eyebrow="Kim jesteśmy"
        title="Technologia dopasowana do potrzeb firm"
        crumbs={[{ label: "O nas", href: "/o-nas/" }]}
        lead={[
          "OlekCodeTech to firma IT, która specjalizuje się w tworzeniu stron internetowych, sklepów internetowych oraz aplikacji webowych, a także w obsłudze IT dla firm, automatyzacji procesów i SEO technicznym.",
        ]}
      />

      <section className="pb-16 lg:pb-24">
        <Container className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="space-y-5 text-lg text-body lg:col-span-6">
            <p>Pomagamy przedsiębiorstwom porządkować technologię, usprawniać codzienną pracę i rozwijać systemy IT w sposób bezpieczny oraz skalowalny.</p>
            <p>
              Działamy na terenie całej Polski, realizując projekty zarówno lokalnie, jak i zdalnie — m.in. dla firm z Wielunia, Łodzi, Wrocławia i okolic. Każdy projekt traktujemy indywidualnie, skupiając się na realnych potrzebach biznesowych, a nie gotowych schematach.
            </p>
            <p>
              Stawiamy na długofalową współpracę, przejrzystą komunikację oraz rozwiązania, które faktycznie działają — od etapu analizy i wdrożenia, po stałą opiekę IT i rozwój systemów.
            </p>
            <Button href="/oferta/" className="mt-2">
              Zobacz, co robimy
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-6">
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-cyan/10 blur-2xl" />
              <Image src="/images/hero/LAPTOP-MOCKUP-scaled.webp" alt="Realizacje OlekCodeTech na laptopie" width={1600} height={1067} sizes="(min-width: 1024px) 560px, 90vw" className="h-auto w-full rounded-[2rem] border border-line/70" />
            </div>
          </Reveal>
        </Container>
      </section>

      <Founder />

      <KeywordMarquee />

      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Technologia dla biznesu" title="Rozwijamy biznes dzięki nowoczesnym rozwiązaniom IT" className="mb-12" />
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <Card glow className="h-full">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-dim text-cyan">
                    <ServiceIcon icon={p.icon} className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-xl sm:text-2xl">{p.title}</h2>
                  <p className="mt-3 text-body">{p.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <StatsBand items={aboutStats} title="Nasz wpływ w liczbach" lead="Zobacz, jak rozwiązania OlekCodeTech realnie wspierają rozwój firm." />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Realizacje" title="Wybrane projekty" />
            <Button href="/portfolio/" variant="outline">
              Całe portfolio
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <PortfolioGrid items={featured} caseSlugs={Object.fromEntries(cases.map((c) => [c.portfolioTitle, c.slug]))} />
        </Container>
      </section>

      <Process />
      <BlogTeaser posts={posts} />
      <CtaBand />
    </>
  );
}
