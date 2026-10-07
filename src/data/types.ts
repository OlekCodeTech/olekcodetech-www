/** Wspólne typy treści SEO: podstrony usług, strony lokalne, case studies. */

export type Faq = { q: string; a: string };

export type LandingSection = {
  title: string;
  text: string;
  bullets?: string[];
};

export type LandingPage = {
  /** Slug w adresie: https://olekcodetech.pl/<slug>/ (bez slashy) */
  slug: string;
  kind: "service" | "city";
  /** Slug nadrzędnej usługi z src/data/services.ts (np. "stronywww-aplikacje") */
  parent: string;
  /** H1 */
  title: string;
  /** <title>, max ~60 znaków */
  metaTitle: string;
  /** meta description, 140–160 znaków */
  metaDescription: string;
  /** Krótka etykieta nad H1 */
  eyebrow: string;
  /** 1–2 akapity wprowadzenia */
  lead: string[];
  /** 3–5 sekcji merytorycznych */
  sections: LandingSection[];
  /** 4–6 pytań do FAQ (FAQPage schema) */
  faq: Faq[];
  /** Slugi powiązanych stron (LandingPage lub usług) */
  related?: string[];
  /** Nazwa miasta w mianowniku, tylko dla kind="city" */
  city?: string;
  /** Miasto w miejscowniku ("w Wieluniu"), tylko dla kind="city" */
  cityLocative?: string;
  /** Frazy kluczowe (pomocniczo, do keywords w meta) */
  keywords: string[];
  /** Tytuły realizacji z src/data/portfolio.ts do pokazania na stronie (3) */
  portfolio?: string[];
};

export type CaseStudy = {
  /** Slug w adresie: /portfolio/<slug>/ */
  slug: string;
  client: string;
  /** H1, np. "Sklep internetowy z 1000+ produktów dla WTA Perfekt" */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** Tytuł wpisu w src/data/portfolio.ts (do dopasowania obrazka i linku) */
  portfolioTitle: string;
  /** Obraz (jeśli inny niż w portfolio) */
  image?: string;
  url?: string;
  type: "strona" | "sklep" | "system";
  industry: string;
  location?: string;
  year: string;
  /** 1 akapit streszczenia */
  summary: string;
  /** Wyzwanie / punkt wyjścia, 1–2 akapity */
  challenge: string[];
  /** Co zrobiliśmy – punkty */
  scope: string[];
  /** Technologie */
  stack: string[];
  /** Efekt / stan po wdrożeniu, 1–2 akapity (bez zmyślonych liczb) */
  results: string[];
  /** Slugi usług z services.ts, które ta realizacja ilustruje */
  services: string[];
  /** Slugi LandingPage (opcjonalnie) */
  landings?: string[];
};
