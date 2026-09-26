export type ServiceBlock = { title: string; text: string; intro?: string; bullets: string[]; outro?: string };

export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  short: string;
  homeTitle: string;
  homeIntro: string;
  homeScopeLabel: string;
  homeScope: string[];
  icon: "web" | "automation" | "seo" | "care" | "integration";
  image: string;
  seo: { title: string; description: string };
  hero: { title: string; lead: string[] };
  sectionTitle: string;
  blocks: ServiceBlock[];
  why: { text: string; bullets?: string[]; outro?: string };
  cta: string;
};

export const services: Service[] = [
  {
    slug: "stronywww-aplikacje",
    name: "Strony internetowe, sklepy i aplikacje",
    eyebrow: "Projektowanie i development",
    short:
      "Projektujemy nowoczesne strony internetowe, sklepy online oraz aplikacje webowe dla firm. Dbamy o wydajność, SEO, bezpieczeństwo i konwersję użytkowników, tworząc rozwiązania dopasowane do realnych potrzeb biznesu.",
    homeTitle: "Strony internetowe, sklepy i aplikacje webowe",
    homeIntro:
      "Projektujemy nowoczesne strony internetowe, sklepy online oraz aplikacje webowe dla firm, dbając o wydajność, SEO i konwersję użytkowników.",
    homeScopeLabel: "Zakres technologiczny",
    homeScope: [
      "Strony firmowe i landing pages",
      "Sklepy internetowe (WooCommerce, custom e-commerce)",
      "WordPress / Elementor",
      "React JS i nowoczesne aplikacje frontendowe",
      "Systemy webowe dopasowane do procesów biznesowych",
      "Optymalizacja techniczna, Core Web Vitals i SEO",
    ],
    icon: "web",
    image: "/images/services/Ulsugi-IT-WWW.webp",
    seo: {
      title: "Strony WWW i aplikacje webowe dla firm – OlekCodeTech",
      description:
        "Tworzymy strony WWW, sklepy internetowe i aplikacje webowe dla firm. Nowoczesny design, optymalizacja SEO i rozwiązania dopasowane do potrzeb biznesu.",
    },
    hero: {
      title: "Strony internetowe, sklepy i aplikacje",
      lead: [
        "Projektujemy i rozwijamy nowoczesne strony internetowe, sklepy online oraz aplikacje webowe dla firm, które chcą skutecznie rozwijać swoją obecność w internecie. Tworzymy rozwiązania dopasowane do realnych potrzeb biznesowych, skupiając się na wydajności, SEO, bezpieczeństwie oraz konwersji użytkowników.",
        "Każdy projekt realizujemy kompleksowo — od analizy potrzeb i architektury informacji, przez projekt graficzny i development, aż po optymalizację techniczną i dalszy rozwój systemu.",
      ],
    },
    sectionTitle: "Projektowanie i development stron internetowych dla firm",
    blocks: [
      {
        title: "Strony internetowe dla firm",
        text: "Tworzymy strony firmowe i landing pages, które pełnią realną funkcję sprzedażową i wizerunkową. Projektujemy przejrzyste struktury, nowoczesny design oraz wdrażamy rozwiązania zgodne z aktualnymi standardami technicznymi i SEO.",
        intro: "Nasze strony internetowe są:",
        bullets: [
          "w pełni responsywne (mobile, tablet, desktop)",
          "szybkie i zoptymalizowane pod Core Web Vitals",
          "przygotowane pod pozycjonowanie w Google",
          "bezpieczne i łatwe w dalszej rozbudowie",
        ],
      },
      {
        title: "Sklepy internetowe i e-commerce",
        text: "Projektujemy sklepy internetowe WooCommerce oraz customowe rozwiązania e-commerce, dopasowane do specyfiki branży i modelu sprzedaży. Dbamy o intuicyjną obsługę, bezpieczeństwo transakcji oraz integracje z systemami zewnętrznymi.",
        intro: "Zakres realizacji obejmuje m.in.:",
        bullets: [
          "sklepy WooCommerce i rozwiązania dedykowane",
          "integracje płatności i systemów wysyłkowych",
          "optymalizację UX i ścieżek zakupowych",
          "przygotowanie sklepu pod SEO i sprzedaż",
        ],
      },
      {
        title: "Aplikacje webowe i systemy dedykowane",
        text: "Tworzymy aplikacje webowe oraz systemy dopasowane do procesów biznesowych firm, które usprawniają codzienną pracę i automatyzują działania operacyjne. Projektujemy skalowalne rozwiązania, które rozwijają się razem z biznesem.",
        intro: "W ramach realizacji oferujemy:",
        bullets: [
          "nowoczesne aplikacje frontendowe (React, Next.js)",
          "systemy webowe dopasowane do potrzeb firmy",
          "integracje API i synchronizację danych",
          "bezpieczne i wydajne architektury aplikacji",
        ],
      },
      {
        title: "Technologie i optymalizacja",
        text: "Każdy projekt realizujemy w oparciu o sprawdzone technologie i dobre praktyki. Dbamy nie tylko o wygląd strony, ale przede wszystkim o jej wydajność, bezpieczeństwo i widoczność w wyszukiwarkach.",
        intro: "Zapewniamy m.in.:",
        bullets: [
          "WordPress / Elementor oraz rozwiązania customowe",
          "optymalizację techniczną i SEO",
          "poprawę Core Web Vitals",
          "zabezpieczenia, aktualizacje i rozwój systemów",
        ],
      },
    ],
    why: {
      text: "W OlekCodeTech łączymy technologię z realnymi potrzebami biznesu. Nie tworzymy przypadkowych stron internetowych — projektujemy rozwiązania IT, które mają działać, sprzedawać i wspierać rozwój firm.",
      outro:
        "Współpracujemy z przedsiębiorstwami w całej Polsce, oferując indywidualne podejście, przejrzystą komunikację oraz wsparcie techniczne po wdrożeniu.",
    },
    cta: "Dowiedz się więcej",
  },
  {
    slug: "automatyzacja-procesow-biznesowych",
    name: "Automatyzacja procesów biznesowych",
    eyebrow: "Optymalizacja pracy i danych",
    short:
      "Wdrażamy automatyzacje, które eliminują ręczną pracę i usprawniają przepływ danych w firmach. Łączymy formularze, CRM i narzędzia operacyjne w spójne, zautomatyzowane procesy.",
    homeTitle: "Automatyzacje procesów biznesowych",
    homeIntro:
      "Wdrażamy automatyzacje procesów biznesowych, które eliminują ręczną pracę i usprawniają przepływ danych w firmach.",
    homeScopeLabel: "Zakres technologiczny",
    homeScope: ["Automatyzacje n8n / Make", "Formularze, CRM, ClickUp", "Automatyzacja leadów i obsługi klienta"],
    icon: "automation",
    image: "/images/services/Automatyzacje.webp",
    seo: {
      title: "Automatyzacja procesów biznesowych – OlekCodeTech",
      description:
        "Wdrażamy automatyzacje procesów biznesowych, integrujemy systemy i eliminujemy ręczną pracę. n8n, Make, CRM, Google Workspace i Microsoft 365.",
    },
    hero: {
      title: "Automatyzacja procesów biznesowych",
      lead: [
        "Wdrażamy automatyzację procesów biznesowych, która eliminuje ręczną, powtarzalną pracę i usprawnia przepływ danych w firmach. Projektujemy rozwiązania dopasowane do rzeczywistych procesów operacyjnych, sprzedażowych i administracyjnych, zwiększając efektywność zespołów oraz ograniczając błędy.",
        "Automatyzacja pozwala firmom działać szybciej, sprawniej i bardziej przewidywalnie — bez konieczności zwiększania liczby pracowników.",
      ],
    },
    sectionTitle: "Wdrażamy automatyzację procesów biznesowych",
    blocks: [
      {
        title: "Automatyzacja procesów w firmie – co usprawniamy?",
        text: "Pomagamy firmom uporządkować i zautomatyzować kluczowe obszary działalności, takie jak obsługa zapytań, sprzedaż, zarządzanie projektami czy przetwarzanie danych.",
        intro: "Najczęściej automatyzujemy:",
        bullets: [
          "obsługę leadów i formularzy kontaktowych",
          "przepływ danych między systemami",
          "procesy sprzedażowe i posprzedażowe",
          "zarządzanie zadaniami i statusami projektów",
          "raportowanie i powiadomienia zespołów",
        ],
        outro:
          "Każde wdrożenie poprzedzamy analizą procesów, aby automatyzacja realnie wspierała biznes, a nie była jedynie dodatkiem technologicznym.",
      },
      {
        title: "Integracja formularzy, CRM i narzędzi operacyjnych",
        text: "Projektujemy automatyzacje, które łączą formularze, systemy CRM oraz narzędzia operacyjne w jeden spójny ekosystem. Dane trafiają automatycznie tam, gdzie są potrzebne, a kolejne etapy procesu uruchamiają się bez udziału pracowników.",
        intro: "Zakres integracji obejmuje m.in.:",
        bullets: [
          "formularze kontaktowe i ofertowe",
          "systemy CRM i bazy klientów",
          "narzędzia do zarządzania projektami i zadaniami",
          "arkusze danych i raporty",
          "automatyczne powiadomienia i komunikację",
        ],
      },
      {
        title: "Technologie automatyzacji i integracji",
        text: "Wykorzystujemy sprawdzone technologie do automatyzacji procesów, dobierając je do skali i potrzeb firmy. Tworzymy elastyczne rozwiązania, które można łatwo rozbudowywać wraz z rozwojem organizacji.",
        intro: "Pracujemy m.in. z:",
        bullets: ["n8n i Make", "systemami CRM", "Google Workspace", "Microsoft 365 i SharePoint", "integracjami API i systemami dedykowanymi"],
      },
      {
        title: "Korzyści z automatyzacji procesów biznesowych",
        text: "Dobrze zaprojektowana automatyzacja pozwala firmom:",
        bullets: [
          "ograniczyć ręczną pracę i błędy",
          "przyspieszyć realizację procesów",
          "zwiększyć kontrolę nad danymi",
          "poprawić współpracę zespołów",
          "skalować biznes bez chaosu organizacyjnego",
        ],
      },
    ],
    why: {
      text: "W OlekCodeTech nie wdrażamy gotowych schematów. Każdą automatyzację projektujemy indywidualnie, dopasowując ją do struktury firmy i rzeczywistych procesów biznesowych.",
      bullets: [
        "analizę i optymalizację procesów przed wdrożeniem",
        "bezpieczne i stabilne rozwiązania automatyzacyjne",
        "dokumentację i możliwość dalszego rozwoju",
        "wsparcie techniczne po wdrożeniu",
      ],
    },
    cta: "Automatyzuj swój biznes",
  },
  {
    slug: "seo-content-marketing",
    name: "SEO i content marketing",
    eyebrow: "Widoczność w Google",
    short:
      "Budujemy widoczność stron internetowych w Google poprzez techniczne SEO, optymalizację treści oraz content dopasowany do intencji użytkowników i celów biznesowych.",
    homeTitle: "SEO i content marketing",
    homeIntro:
      "Budujemy widoczność stron internetowych w Google poprzez techniczne SEO oraz treści dopasowane do intencji użytkowników.",
    homeScopeLabel: "Zakres",
    homeScope: ["SEO techniczne", "Content B2B i blogi eksperckie", "Struktura i optymalizacja treści"],
    icon: "seo",
    image: "/images/services/SEO-1.webp",
    seo: {
      title: "SEO techniczne i content marketing – OlekCodeTech",
      description:
        "SEO techniczne, optymalizacja stron internetowych i content marketing. Zwiększamy widoczność w Google i ruch, który przekłada się na zapytania.",
    },
    hero: {
      title: "SEO i content marketing dla firm",
      lead: [
        "Realizujemy SEO i content marketing, które realnie zwiększają widoczność stron internetowych w Google i wspierają cele biznesowe firm. Łączymy techniczne SEO, optymalizację treści oraz strategię contentową dopasowaną do intencji użytkowników, aby ruch na stronie przekładał się na zapytania i sprzedaż.",
        "Działamy długofalowo, opierając działania na analizie danych, a nie przypadkowych optymalizacjach.",
      ],
    },
    sectionTitle: "Techniczne SEO i wartościowe treści",
    blocks: [
      {
        title: "SEO techniczne – solidne fundamenty strony",
        text: "Zajmujemy się SEO technicznym, które stanowi podstawę skutecznego pozycjonowania. Optymalizujemy strony pod kątem wydajności, struktury i zgodności z wytycznymi Google.",
        intro: "Zakres działań obejmuje m.in.:",
        bullets: [
          "optymalizację Core Web Vitals",
          "poprawę szybkości ładowania strony",
          "strukturę nagłówków i linkowanie wewnętrzne",
          "indeksację i crawl budget",
          "eliminację błędów technicznych SEO",
        ],
      },
      {
        title: "Optymalizacja treści i struktury strony",
        text: "Dbamy o to, aby treści na stronie były czytelne dla użytkowników i zrozumiałe dla wyszukiwarek. Optymalizujemy istniejące podstrony oraz planujemy strukturę nowych treści w oparciu o analizę fraz i intencji wyszukiwania.",
        intro: "Pracujemy nad:",
        bullets: [
          "optymalizacją nagłówków H1–H3",
          "treściami sprzedażowymi i informacyjnymi",
          "strukturą kategorii i podstron usługowych",
          "poprawą czytelności i UX treści",
        ],
      },
      {
        title: "Content marketing i blog ekspercki",
        text: "Tworzymy content marketing oparty na wiedzy eksperckiej i realnych potrzebach odbiorców. Przygotowujemy treści, które budują autorytet marki, zwiększają ruch organiczny i wspierają proces sprzedaży.",
        intro: "Zakres działań contentowych:",
        bullets: [
          "artykuły blogowe i poradniki",
          "treści B2B i eksperckie",
          "content pod long-tail i zapytania informacyjne",
          "planowanie i rozwój bloga firmowego",
        ],
      },
      {
        title: "Strategia SEO dopasowana do biznesu",
        text: "Każde działania SEO i content marketingowe rozpoczynamy od analizy branży, konkurencji i potencjału słów kluczowych. Tworzymy strategię dopasowaną do celów firmy, a nie uniwersalne schematy.",
        intro: "Strategia obejmuje:",
        bullets: ["dobór fraz kluczowych", "plan rozwoju treści i podstron", "priorytety optymalizacyjne", "długofalowy plan wzrostu widoczności"],
      },
    ],
    why: {
      text: "W OlekCodeTech łączymy technologię, treść i analitykę. Dzięki temu nasze działania SEO są stabilne, mierzalne i skalowalne wraz z rozwojem firmy.",
      bullets: [
        "techniczne podejście do SEO",
        "treści tworzone pod realne intencje użytkowników",
        "przejrzystą komunikację i raportowanie",
        "wsparcie długoterminowe, a nie jednorazowe optymalizacje",
      ],
    },
    cta: "Zwiększ widoczność strony",
  },
  {
    slug: "opieka-it-dla-firm",
    name: "Opieka IT dla firm",
    eyebrow: "Stałe wsparcie technologiczne",
    short:
      "Zapewniamy kompleksową obsługę IT dla firm – od utrzymania i rozwoju systemów, po wsparcie techniczne i helpdesk. Dbamy o bezpieczeństwo, aktualizacje i stabilne działanie infrastruktury IT.",
    homeTitle: "Opieka IT i rozwój systemów",
    homeIntro:
      "Zapewniamy stałą opiekę IT nad przedsiębiorstwami, obejmującą utrzymanie oraz rozwój wdrożonych systemów internetowych, aplikacji i infrastruktury IT, w tym wsparcie helpdesk dla zespołów.",
    homeScopeLabel: "Zakres",
    homeScope: [
      "Aktualizacje, bezpieczeństwo i monitoring systemów",
      "Rozwój funkcjonalności i utrzymanie aplikacji",
      "Wsparcie techniczne i helpdesk IT",
    ],
    icon: "care",
    image: "/images/services/Opieka-IT.webp",
    seo: {
      title: "Stała obsługa IT dla firm – OlekCodeTech",
      description:
        "Stała obsługa IT dla firm: wsparcie techniczne, helpdesk, bezpieczeństwo systemów i rozwój IT. Postaw na przewidywalnego partnera technologicznego.",
    },
    hero: {
      title: "Opieka IT dla firm",
      lead: [
        "Zapewniamy kompleksową opiekę IT dla firm, obejmującą utrzymanie, bezpieczeństwo oraz rozwój systemów informatycznych. Wspieramy przedsiębiorstwa w codziennym funkcjonowaniu technologicznym, dbając o stabilność infrastruktury IT i ciągłość pracy zespołów.",
      ],
    },
    sectionTitle: "Kompleksowo wspieramy firmy",
    blocks: [
      {
        title: "Zakres opieki IT",
        text: "Sprawujemy stałą opiekę IT nad firmami, nie ograniczając się wyłącznie do aplikacji czy stron internetowych. Nasze wsparcie obejmuje również helpdesk IT, bieżącą obsługę techniczną oraz reagowanie na zgłoszenia użytkowników.",
        intro: "Zakres usług obejmuje m.in.:",
        bullets: [
          "bieżącą obsługę IT i helpdesk",
          "utrzymanie stron internetowych, sklepów i aplikacji webowych",
          "aktualizacje systemów i komponentów",
          "zarządzanie dostępami i uprawnieniami",
          "wsparcie użytkowników i pomoc w narzędziach",
        ],
      },
      {
        title: "Bezpieczeństwo i stabilność systemów",
        text: "Dbamy o bezpieczeństwo systemów IT oraz danych firmowych. Regularnie aktualizujemy oprogramowanie, monitorujemy działanie systemów i reagujemy na potencjalne zagrożenia.",
        intro: "W ramach opieki IT zapewniamy:",
        bullets: [
          "aktualizacje bezpieczeństwa",
          "kopie zapasowe i procedury odzyskiwania danych",
          "monitoring działania systemów",
          "zabezpieczenia przed awariami i atakami",
        ],
      },
      {
        title: "Rozwój i optymalizacja systemów IT",
        text: "Opieka IT to nie tylko utrzymanie, ale również rozwój systemów i optymalizacja rozwiązań technologicznych. Pomagamy firmom usprawniać istniejące narzędzia, wdrażać nowe funkcjonalności i skalować systemy wraz z rozwojem biznesu.",
        intro: "Zakres rozwoju obejmuje:",
        bullets: [
          "rozbudowę stron internetowych i aplikacji",
          "optymalizację wydajności systemów",
          "wdrażanie nowych funkcjonalności",
          "doradztwo technologiczne",
        ],
      },
      {
        title: "Technologie i środowiska pracy",
        text: "Pracujemy w środowiskach dostosowanych do potrzeb firm, integrując systemy i narzędzia wykorzystywane na co dzień przez zespoły.",
        intro: "Wspieramy m.in.:",
        bullets: [
          "WordPress, WooCommerce i aplikacje webowe",
          "Google Workspace",
          "Microsoft 365 i SharePoint",
          "systemy CRM i narzędzia projektowe",
          "integracje API i systemy dedykowane",
        ],
      },
    ],
    why: {
      text: "W OlekCodeTech zapewniamy indywidualne podejście do obsługi IT, dopasowane do struktury i potrzeb firmy. Działamy jako partner technologiczny, a nie zewnętrzny „serwis IT”.",
      bullets: [
        "przewidywalną i stałą obsługę IT",
        "szybki czas reakcji na zgłoszenia",
        "jasny zakres współpracy",
        "możliwość rozwoju systemów w jednym miejscu",
      ],
    },
    cta: "Skontaktuj się z nami",
  },
  {
    slug: "integracje-systemow-it",
    name: "Integracje systemów IT",
    eyebrow: "Spójne środowisko IT",
    short:
      "Integrujemy systemy IT i narzędzia, tworząc jedno środowisko pracy i automatyczny przepływ informacji. Pracujemy z API, Google Workspace, Microsoft 365 oraz systemami dedykowanymi.",
    homeTitle: "Integracje systemów IT",
    homeIntro:
      "Integrujemy systemy IT i narzędzia, tworząc spójne środowisko pracy oraz automatyczny przepływ informacji między systemami.",
    homeScopeLabel: "Zakres technologiczny",
    homeScope: [
      "Integracje API (REST / Webhooks)",
      "Microsoft 365, SharePoint i Power Automate",
      "Google Workspace i automatyzacja danych",
      "Synchronizacja danych między systemami",
      "Integracje CRM, ERP i narzędzi biznesowych",
      "Bezpieczna wymiana danych, autoryzacja i uprawnienia",
    ],
    icon: "integration",
    image: "/images/services/INTEGRACJE-SYSTEMOW-IT.webp",
    seo: {
      title: "Integracje systemów IT – OlekCodeTech",
      description:
        "Integrujemy systemy IT, API i narzędzia biznesowe. Automatyczny przepływ danych między CRM, ERP, Google Workspace i Microsoft 365.",
    },
    hero: {
      title: "Integracje systemów IT",
      lead: [
        "Integrujemy systemy IT i narzędzia wykorzystywane w firmach, tworząc spójny i automatyczny przepływ danych między aplikacjami. Dzięki integracjom eliminujemy ręczne przenoszenie informacji, ograniczamy błędy i usprawniamy codzienną pracę zespołów.",
      ],
    },
    sectionTitle: "Łączymy systemy w jeden ekosystem",
    blocks: [
      {
        title: "Integracja systemów i narzędzi w firmie",
        text: "Pomagamy firmom łączyć wykorzystywane systemy w jeden, logiczny ekosystem IT. Projektujemy integracje dopasowane do realnych procesów biznesowych – sprzedażowych, operacyjnych i administracyjnych.",
        intro: "Najczęściej integrujemy:",
        bullets: [
          "systemy CRM i bazy klientów",
          "strony internetowe i sklepy online",
          "formularze i systemy leadowe",
          "narzędzia do zarządzania projektami i zadaniami",
          "systemy raportowe i analityczne",
        ],
      },
      {
        title: "Integracje API i automatyczny przepływ danych",
        text: "Tworzymy integracje API, które umożliwiają bezpieczną i stabilną wymianę danych pomiędzy systemami. Dane są synchronizowane automatycznie, zgodnie z ustalonymi regułami i scenariuszami.",
        intro: "Zakres integracji obejmuje m.in.:",
        bullets: [
          "synchronizację danych między systemami",
          "automatyczne aktualizacje statusów i informacji",
          "przesyłanie danych między aplikacjami w czasie rzeczywistym",
          "integracje customowe dopasowane do potrzeb firmy",
        ],
      },
      {
        title: "Google Workspace i Microsoft 365",
        text: "Integrujemy środowiska pracy oparte o Google Workspace oraz Microsoft 365, w tym SharePoint, aby usprawnić współpracę zespołów i przepływ informacji w firmie.",
        intro: "Zakres integracji obejmuje:",
        bullets: [
          "automatyzację pracy na dokumentach i plikach",
          "integrację poczty, kalendarzy i arkuszy danych",
          "synchronizację danych z innymi systemami",
          "porządkowanie i centralizację informacji",
        ],
      },
      {
        title: "Technologie i narzędzia integracyjne",
        text: "Dobieramy technologie integracyjne w zależności od skali i złożoności systemów. Tworzymy rozwiązania elastyczne, które można łatwo rozwijać wraz z rozwojem firmy.",
        intro: "Pracujemy m.in. z:",
        bullets: [
          "API i integracjami systemowymi",
          "n8n i Make",
          "Google Workspace",
          "Microsoft 365 / SharePoint",
          "systemami CRM i aplikacjami webowymi",
          "rozwiązaniami dedykowanymi",
        ],
      },
    ],
    why: {
      text: "W OlekCodeTech projektujemy integracje w oparciu o realne procesy biznesowe, a nie gotowe schematy. Dbamy o stabilność, bezpieczeństwo i możliwość dalszego rozwoju wdrożonych rozwiązań.",
      bullets: [
        "analizę procesów przed integracją",
        "bezpieczne i skalowalne rozwiązania",
        "dokumentację i przejrzystą komunikację",
        "wsparcie techniczne po wdrożeniu",
      ],
    },
    cta: "Sprawdź możliwości integracji",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
