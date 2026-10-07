import Link from "next/link";
import { ArrowUpRight, Boxes, Code2, Headset, Rocket } from "lucide-react";
import { cases } from "@/data/cases";
import { services } from "@/data/services";
import { serviceLandings } from "@/data/landings";
import type { Faq } from "@/data/types";
import { Card, CheckList, Container, SectionHeading } from "./ui";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { siteUrl } from "@/lib/utils";

/* ---------- Modele współpracy ---------- */
const models = [
  {
    icon: Rocket,
    name: "Projekt",
    tagline: "Nowa strona, sklep lub system od zera",
    for: "Gdy wiesz, czego potrzebujesz, i chcesz mieć gotowe rozwiązanie w ustalonym terminie i budżecie.",
    bullets: ["Analiza, zakres i wycena przed startem", "Projekt graficzny i makiety do akceptacji", "Wdrożenie etapami z testami", "Szkolenie i dokumentacja po starcie"],
  },
  {
    icon: Code2,
    name: "Rozwój",
    tagline: "Stały zespół do rozbudowy i automatyzacji",
    for: "Gdy masz działający system i regularnie dochodzą nowe funkcje, integracje albo automatyzacje.",
    bullets: ["Pula godzin w miesiącu, rozliczenie co do godziny", "Priorytety ustalane wspólnie co tydzień lub miesiąc", "Integracje, automatyzacje n8n / Make, nowe moduły", "Raport prac i rekomendacje"],
  },
  {
    icon: Headset,
    name: "Opieka IT",
    tagline: "Utrzymanie, bezpieczeństwo i helpdesk",
    for: "Gdy chcesz mieć spokój: aktualne systemy, kopie zapasowe i kogoś, kto szybko reaguje na zgłoszenia.",
    bullets: ["Aktualizacje, kopie zapasowe, monitoring", "Helpdesk dla zespołu i czas reakcji w umowie", "Microsoft 365 / Google Workspace, dostępy", "Drobne poprawki w ramach abonamentu"],
  },
];

export function CooperationModels() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Modele współpracy"
          title="Wybierz sposób współpracy, który pasuje do Twojej firmy"
          lead="Wycenę zawsze przygotowujemy po krótkiej rozmowie – z rozpisanym zakresem, terminem i tym, co dokładnie dostajesz."
          className="mb-12"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {models.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <Card glow className="flex h-full flex-col">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-dim text-cyan">
                  <m.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl">{m.name}</h3>
                <p className="mt-1 font-display text-cyan">{m.tagline}</p>
                <p className="mt-4 text-body">{m.for}</p>
                <CheckList items={m.bullets} className="mt-5" />
                <Link href="/kontakt/" className="mt-auto inline-flex items-center gap-1 pt-6 font-display font-semibold text-cyan hover:text-cyan-2">
                  Zapytaj o wycenę
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Branże ---------- */
const industries: { name: string; text: string; cases: string[] }[] = [
  { name: "E-commerce i hurtownie", text: "Sklepy z setkami i tysiącami produktów, integracje z magazynem i hurtowniami, porządek w katalogu.", cases: ["wta-perfekt-sklep-internetowy", "rav-sklep-elektryczny-integracja-magazynu", "silverclean-sklep-i-blog"] },
  { name: "Usługi lokalne", text: "Strony, które zbierają zapytania z Google: wizytówka, frazy z miastem, szybkie formularze.", cases: ["ds-paliwa-strona-z-cenami-paliw", "uni-system-strona-firmowa", "powerlab-strona-firmowa"] },
  { name: "Beauty, moda i rezerwacje", text: "Systemy rezerwacji, integracje z Booksy, sklepy z produktami premium i wypożyczalnie.", cases: ["szyja-hair-academy-sklep", "wypozyczsukienke-platforma-rezerwacji"] },
  { name: "Marki osobiste i merch", text: "Strony twórców i sklepy z gadżetami, które obsłużą ruch z mediów społecznościowych.", cases: ["ijk-transport-strona-i-merch", "ms-nadruki-sklep-z-nadrukami"] },
  { name: "Startupy i platformy", text: "MVP, katalogi sprzedawców, formularze rekrutacyjne i dokumenty pod publikację aplikacji.", cases: ["plonio-strona-platformy"] },
  { name: "Sektor publiczny i komunalny", text: "Serwisy zgodne z WCAG, przejrzyste harmonogramy i informacje dla mieszkańców.", cases: ["komunalne-wielun-react"] },
];

export function Industries() {
  return (
    <section className="border-y border-line/60 bg-ink-2/30 py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Branże" title="Dla kogo pracujemy" lead="Każda branża ma swoje procesy. Oto obszary, w których mamy już konkretne wdrożenia." className="mb-12" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 70}>
              <Card className="h-full">
                <Boxes className="h-5 w-5 text-cyan" />
                <h3 className="mt-4 text-xl">{ind.name}</h3>
                <p className="mt-2 text-body">{ind.text}</p>
                <ul className="mt-4 space-y-1.5">
                  {ind.cases
                    .map((slug) => cases.find((c) => c.slug === slug))
                    .filter((c): c is NonNullable<typeof c> => Boolean(c))
                    .map((c) => (
                      <li key={c.slug}>
                        <Link href={`/portfolio/${c.slug}/`} className="inline-flex items-center gap-1 text-sm font-semibold text-snow hover:text-cyan">
                          {c.client}
                          <ArrowUpRight className="h-3.5 w-3.5 text-cyan" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- Technologie ---------- */
const stack = [
  { group: "Strony i sklepy", items: ["WordPress (autorskie motywy)", "WooCommerce", "Elementor Pro", "PHP", "Przelewy24", "Furgonetka / InPost"] },
  { group: "Aplikacje", items: ["React", "Next.js", "TypeScript", "Node.js", "REST API", "PostgreSQL"] },
  { group: "Automatyzacje i integracje", items: ["n8n", "Make", "Power Automate", "Microsoft 365 / SharePoint", "Google Workspace", "ClickUp"] },
  { group: "SEO i wydajność", items: ["Rank Math", "Google Search Console", "Google Analytics 4", "Core Web Vitals", "Schema.org", "LiteSpeed Cache"] },
];

export function TechStack() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Technologie" title="Sprawdzony stack, dobierany do celu" lead="Nie przywiązujemy się do jednego narzędzia. Dobieramy technologię do skali, budżetu i tego, kto będzie rozwijał system." className="mb-12" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((s) => (
            <Card key={s.group} className="h-full">
              <h3 className="text-lg">{s.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li key={it} className="rounded-pill border border-line/80 px-3 py-1 text-sm text-body">
                    {it}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------- FAQ o współpracy ---------- */
export const offerFaq: Faq[] = [
  {
    q: "Ile kosztuje współpraca z OlekCodeTech?",
    a: "Cena zależy od zakresu: liczby podstron lub produktów, integracji, projektu graficznego i treści. Po bezpłatnej, 30-minutowej konsultacji przygotowujemy wycenę z rozpisanym zakresem i terminem, więc wiesz, za co płacisz, zanim cokolwiek zaczniemy.",
  },
  {
    q: "Czy podpisujemy umowę i wystawiacie fakturę VAT?",
    a: "Tak. OlekCodeTech to spółka z o.o. – każdą współpracę opieramy na umowie z zakresem, terminami i warunkami odbioru, a za usługi wystawiamy fakturę VAT.",
  },
  {
    q: "Do kogo należy strona i kod po wdrożeniu?",
    a: "Do Ciebie. Po rozliczeniu przekazujemy dostępy administracyjne, pliki i prawa do projektu. Nie blokujemy klienta w zamkniętych rozwiązaniach – stronę może dalej rozwijać inna firma.",
  },
  {
    q: "Czy pracujecie tylko z firmami z Wielunia?",
    a: "Nie. Siedzibę mamy w Wieluniu, ale realizujemy projekty w całej Polsce – zdalnie, z dojazdem na kluczowe spotkania w regionie (Sieradz, Wieruszów, Łódź, Wrocław, Częstochowa).",
  },
  {
    q: "Jak szybko możecie zacząć?",
    a: "Zwykle w ciągu 1–3 tygodni od akceptacji wyceny, zależnie od bieżącego obłożenia. Pilne sprawy w ramach opieki IT (awaria, włamanie) obsługujemy priorytetowo.",
  },
  {
    q: "Czy mogę zlecić tylko część prac, np. SEO albo automatyzację?",
    a: "Tak. Każdy obszar oferty realizujemy osobno – możesz zacząć od audytu SEO, jednej automatyzacji lub opieki nad istniejącą stroną i rozszerzać zakres, gdy zobaczysz efekty.",
  },
];

/* ---------- OfferCatalog (schema) ---------- */
export function OfferCatalogJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        name: "Oferta OlekCodeTech",
        url: `${siteUrl}/oferta/`,
        itemListElement: services.map((s) => ({
          "@type": "OfferCatalog",
          name: s.name,
          url: `${siteUrl}/${s.slug}/`,
          itemListElement: serviceLandings
            .filter((l) => l.parent === s.slug)
            .map((l) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: l.title.split(" – ")[0], url: `${siteUrl}/${l.slug}/`, provider: { "@id": `${siteUrl}/#organization` } },
            })),
        })),
      }}
    />
  );
}
