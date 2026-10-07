import type { LandingPage } from "./types";

/**
 * Podstrony usługi nadrzędnej „Aplikacje dedykowane" (kind: "service", parent: "aplikacje-dedykowane").
 * Każda ma 3 realizacje z src/data/portfolio.ts (dokładne tytuły).
 */
export const appLandings: LandingPage[] = [
  // 1. Aplikacje webowe React / Next.js
  {
    slug: "aplikacje-webowe-react-nextjs",
    kind: "service",
    parent: "aplikacje-dedykowane",
    title: "Aplikacje webowe React / Next.js szyte na miarę firmy",
    metaTitle: "Aplikacje webowe React / Next.js – OlekCodeTech",
    metaDescription:
      "Tworzymy dedykowane aplikacje webowe w React i Next.js: CRM, panele klienta, systemy rezerwacji. Kod i prawa przekazujemy klientowi. Umów bezpłatną konsultację.",
    eyebrow: "Aplikacje na zamówienie",
    lead: [
      "Projektujemy i programujemy aplikacje webowe w React i Next.js dla firm, którym gotowe programy przestały wystarczać. Zamiast dopasowywać proces do oprogramowania, budujemy oprogramowanie dopasowane do procesu: CRM dla biura księgowego, silnik rezerwacji dla wypożyczalni, panel do obsługi zamówień czy portal dla klientów.",
      "Aplikacje na zamówienie to dziś największa część naszej pracy. Każdy system budujemy etapami, łączymy przez API z narzędziami, których już używacie, i przekazujemy razem z kodem źródłowym oraz prawami, tak aby mógł rosnąć razem z firmą bez przepisywania od nowa.",
    ],
    sections: [
      {
        title: "Kiedy aplikacja webowa na zamówienie zamiast gotowego SaaS",
        text: "Gotowe narzędzia SaaS są dobre na start, ale z czasem firma zaczyna dopasowywać pracę do ograniczeń programu: dodatkowe arkusze, ręczne przepisywanie danych, opłaty za każdego użytkownika. Dedykowana aplikacja webowa ma sens, gdy proces jest dla firmy kluczowy, powtarzalny i na tyle specyficzny, że żaden abonament nie obsługuje go w całości. Zanim zaproponujemy budowę, sprawdzamy, czy nie wystarczy integracja lub automatyzacja narzędzi, które już macie.",
        bullets: [
          "proces obsługiwany dziś na arkuszach, mailach i kilku niepołączonych narzędziach",
          "rosnące koszty licencji liczonych od użytkownika",
          "brak potrzebnej integracji z księgowością, magazynem lub sklepem",
          "dane klientów, które muszą zostać na Waszej infrastrukturze",
          "funkcje dające przewagę, których nie chcecie dzielić z konkurencją w tym samym abonamencie",
        ],
      },
      {
        title: "Co budujemy w React i Next.js",
        text: "Najczęściej realizujemy aplikacje, które obsługują jeden konkretny obieg pracy od początku do końca. Mogą działać wewnątrz firmy, jako narzędzie dla klientów albo jako produkt, który klient oferuje dalej. Każdą projektujemy tak, by dało się ją rozbudowywać o kolejne moduły bez przepisywania od zera.",
        bullets: [
          "systemy CRM i ewidencje klientów, zleceń oraz dokumentów",
          "panele klienta i portale B2B z zamówieniami i historią współpracy",
          "systemy rezerwacji terminów i wypożyczalnie z kalendarzem dostępności",
          "panele administracyjne i raportowe zbierające dane z kilku źródeł",
          "przepisanie starych serwisów (np. z Joomli) na nowoczesny stack React",
        ],
      },
      {
        title: "Jak budujemy aplikację webową: warsztat, prototyp, MVP",
        text: "Zaczynamy od warsztatu, na którym rozpisujemy proces, role użytkowników i dane. Potem powstają makiety i klikalny prototyp, żeby było widać, co powstanie, zanim zacznie się programowanie. Pierwszy etap to MVP, czyli najważniejszy proces działający od początku do końca, a kolejne moduły dokładamy w iteracjach z regularną prezentacją postępów.",
        bullets: [
          "warsztat i analiza: proces, role, dane, integracje",
          "makiety i prototyp interfejsu do akceptacji",
          "MVP z jednym kluczowym procesem",
          "iteracje z testami po stronie użytkowników",
          "wdrożenie produkcyjne i okres stabilizacji",
          "rozwój i utrzymanie w kolejnych etapach",
        ],
      },
      {
        title: "Technologie: React, Next.js, TypeScript, Node.js, PostgreSQL",
        text: "Stawiamy na szeroko używany stack, który w razie potrzeby przejmie inny zespół. Frontend budujemy w React i Next.js z TypeScriptem, backend w Node.js z tRPC i Prisma na bazie PostgreSQL, a tam, gdzie środowisko klienta tego wymaga, w PHP. Jeśli część potrzeb pokrywa WordPress lub WooCommerce z własnymi wtyczkami, wykorzystujemy go jako zaplecze zamiast budować wszystko od nowa.",
        bullets: [
          "React, Next.js, TypeScript, Tailwind CSS",
          "Node.js, tRPC, Prisma, PostgreSQL; PHP i MySQL tam, gdzie to uzasadnione",
          "REST API i webhooki do integracji z systemami zewnętrznymi",
          "integracje z Microsoft 365, SharePoint i Google Workspace",
          "React Native / Expo, gdy potrzebny jest dostęp z telefonu",
        ],
      },
      {
        title: "Od czego zależy koszt aplikacji webowej i co dostajesz po wdrożeniu",
        text: "Koszt zależy przede wszystkim od liczby procesów, ról użytkowników i integracji, dlatego wyceniamy etapami, zaczynając od MVP. Po wdrożeniu dostajesz pełny kod źródłowy w repozytorium, dokumentację techniczną i instrukcję dla użytkowników. Prawa do kodu przechodzą na klienta, więc system możesz rozwijać z nami lub z dowolnym innym zespołem.",
        bullets: [
          "liczba modułów, ról i złożoność uprawnień",
          "liczba integracji i jakość ich dokumentacji",
          "wymagania dotyczące bezpieczeństwa i RODO",
          "repozytorium z kodem i przeniesienie praw autorskich",
          "dokumentacja, instrukcja i opcjonalna opieka po wdrożeniu",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje aplikacja webowa na zamówienie?",
        a: "Zależy od liczby funkcji, ról użytkowników i integracji. Prosty panel z jednym procesem to zupełnie inny zakres niż system z fakturowaniem, magazynem i aplikacją mobilną. Po bezpłatnej konsultacji i warsztacie przygotowujemy wycenę etapową, zaczynając od MVP.",
      },
      {
        q: "Ile trwa stworzenie aplikacji webowej?",
        a: "MVP prostej aplikacji zwykle da się uruchomić w kilka tygodni. Rozbudowane systemy z wieloma modułami powstają w kilka miesięcy, ale realizujemy je etapami, więc pierwsza działająca wersja trafia do użytkowników znacznie wcześniej.",
      },
      {
        q: "React czy Next.js – co wybrać do aplikacji biznesowej?",
        a: "Next.js to framework zbudowany na React, który dodaje routing, renderowanie po stronie serwera i generowanie stron statycznych. Dla większości aplikacji biznesowych wybieramy Next.js. Czysty React stosujemy głównie w panelach osadzanych w istniejących systemach.",
      },
      {
        q: "Czy kod aplikacji będzie moją własnością?",
        a: "Tak. Przekazujemy pełny kod źródłowy, repozytorium, dokumentację i prawa autorskie. Możesz rozwijać system z nami lub z dowolnym innym zespołem.",
      },
      {
        q: "Czy lepiej kupić gotowe oprogramowanie, czy zamówić dedykowane?",
        a: "Jeśli gotowe narzędzie obsługuje Wasz proces w całości, zwykle jest tańsze na start. Dedykowana aplikacja wygrywa, gdy proces jest specyficzny, wymaga integracji, których SaaS nie ma, albo koszty licencji rosną z każdym użytkownikiem. Na bezpłatnej konsultacji pomagamy to ocenić.",
      },
    ],
    related: ["aplikacje-dedykowane", "systemy-crm-dla-firm", "panel-klienta-portal-b2b"],
    keywords: [
      "aplikacje webowe React",
      "aplikacje Next.js",
      "aplikacja webowa na zamówienie",
      "dedykowane aplikacje dla firm",
      "oprogramowanie na zamówienie",
      "tworzenie aplikacji webowych",
    ],
    portfolio: ["CRM E-Numerika Biuro Księgowe", "Wypożycz Sukienkę", "Komunalne Wieluń"],
  },

  // 2. Systemy CRM na zamówienie
  {
    slug: "systemy-crm-dla-firm",
    kind: "service",
    parent: "aplikacje-dedykowane",
    title: "System CRM na zamówienie – dedykowany CRM dla firmy",
    metaTitle: "System CRM na zamówienie – OlekCodeTech",
    metaDescription:
      "Budujemy dedykowany CRM dla firmy: klienci, zlecenia, dokumenty, zadania i integracje z księgowością, dopasowane do Waszego procesu. Umów bezpłatną konsultację.",
    eyebrow: "Dedykowany CRM",
    lead: [
      "Dedykowany system CRM budujemy wokół tego, jak Wasza firma faktycznie pracuje z klientem: od pierwszego kontaktu, przez zlecenie i dokumenty, po rozliczenie. Nie kopiujemy menu z popularnych CRM-ów, tylko odwzorowujemy Wasz proces, role i nazewnictwo.",
      "W ten sposób powstał m.in. system CRM dla biura księgowego, w którym obsługa klientów opiera się na cyklicznych terminach, dokumentach i zadaniach dla zespołu. CRM na zamówienie łączymy z narzędziami, których już używacie: pocztą, kalendarzem, programem księgowym czy formularzami na stronie.",
    ],
    sections: [
      {
        title: "Czy lepiej kupić gotowy CRM, czy zamówić własny?",
        text: "Gotowy CRM to dobry wybór, gdy proces sprzedaży jest standardowy, a zespół akceptuje pracę według logiki programu. Własny CRM ma przewagę, gdy firma obsługuje klientów cyklicznie, pracuje na specyficznych dokumentach albo potrzebuje integracji, których abonamentowe narzędzia nie oferują. Liczy się też koszt w czasie: licencje rosną z każdym użytkownikiem, a dedykowany system jest Waszą własnością. Na konsultacji pomagamy ocenić, która droga ma sens w Waszym przypadku.",
        bullets: [
          "proces nie mieści się w lejku sprzedażowym typowego CRM",
          "zespół prowadzi równolegle CRM, arkusze i notatki w mailach",
          "potrzebne są pola, statusy i raporty specyficzne dla branży",
          "dane klientów mają pozostać na Waszej infrastrukturze",
          "liczba użytkowników sprawia, że abonament staje się drogi",
        ],
      },
      {
        title: "Moduły dedykowanego CRM dla firmy",
        text: "Zakres CRM dobieramy do procesu, a nie odwrotnie. Zwykle zaczynamy od kartoteki klientów i zleceń, a potem dokładamy moduły, które oszczędzają najwięcej ręcznej pracy. Każdy moduł ma role i uprawnienia, więc pracownik widzi tylko to, czego potrzebuje.",
        bullets: [
          "kartoteka klientów z historią kontaktów i dokumentów",
          "zlecenia, sprawy lub projekty ze statusami i terminami",
          "zadania dla zespołu, przypomnienia i powiadomienia e-mail",
          "obieg dokumentów i załączników przypisanych do klienta",
          "raporty i zestawienia dla właściciela firmy",
          "role, uprawnienia i dziennik zmian",
        ],
      },
      {
        title: "Jak tworzymy system CRM: od warsztatu do MVP",
        text: "Pierwszym krokiem jest warsztat z osobami, które będą pracować w systemie na co dzień, bo to one znają wyjątki i skróty w procesie. Na tej podstawie przygotowujemy model danych, makiety ekranów i klikalny prototyp. MVP obejmuje kartotekę i jeden kluczowy proces, a kolejne moduły wdrażamy etapami, po sprawdzeniu w praktyce. Przy przejściu z arkuszy lub innego CRM przenosimy też dane historyczne.",
        bullets: [
          "warsztat z zespołem i mapa procesu obsługi klienta",
          "model danych, makiety i prototyp do akceptacji",
          "MVP: kartoteka klientów i najważniejszy proces",
          "import danych z arkuszy lub dotychczasowego systemu",
          "szkolenie zespołu i wdrożenie produkcyjne",
        ],
      },
      {
        title: "Integracje CRM z pocztą, księgowością i stroną WWW",
        text: "CRM daje najwięcej, gdy dane trafiają do niego automatycznie, a nie są przepisywane ręcznie. Łączymy system przez REST API i webhooki z formularzami na stronie, pocztą, kalendarzem i programami księgowymi. Tam, gdzie wystarczy prosty przepływ, wykorzystujemy n8n lub Make, a integracje krytyczne dla działania firmy piszemy w kodzie aplikacji.",
        bullets: [
          "formularze i leady ze strony WWW trafiające wprost do CRM",
          "Microsoft 365 lub Google Workspace: poczta, kalendarz, pliki",
          "programy księgowe i fakturowe udostępniające API",
          "sklep WooCommerce: klienci i zamówienia",
          "automatyzacje n8n / Make dla powiadomień i raportów",
        ],
      },
      {
        title: "Od czego zależy koszt CRM na zamówienie i co dostajesz po wdrożeniu",
        text: "Koszt dedykowanego CRM zależy od liczby modułów, ról użytkowników i integracji oraz od tego, czy trzeba migrować dane z innego systemu. Nie podajemy cen z cennika, bo dwa systemy nazywane CRM mogą mieć zupełnie inny zakres; wycenę przygotowujemy po warsztacie, etapami. Po wdrożeniu otrzymujecie kod źródłowy, dokumentację i prawa do systemu, bez opłat licencyjnych za kolejnych użytkowników.",
        bullets: [
          "liczba modułów i obsługiwanych procesów",
          "liczba ról i złożoność uprawnień",
          "integracje i migracja danych",
          "kod źródłowy w repozytorium i przeniesienie praw autorskich",
          "brak opłat licencyjnych za kolejnych użytkowników",
          "opieka i rozwój po wdrożeniu w ustalonym zakresie",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje system CRM na zamówienie?",
        a: "Koszt zależy od liczby modułów, ról, integracji i migracji danych. Zaczynamy od MVP z kartoteką klientów i jednym kluczowym procesem, co pozwala ograniczyć budżet na start. Dokładną wycenę etapową przygotowujemy po bezpłatnej konsultacji i warsztacie.",
      },
      {
        q: "Ile trwa stworzenie CRM?",
        a: "Pierwsza działająca wersja CRM z kartoteką i podstawowym procesem zwykle powstaje w kilka tygodni. Pełny system z integracjami i raportami rozwijamy etapami przez kolejne miesiące, a zespół korzysta z niego już od pierwszego etapu.",
      },
      {
        q: "Czy lepiej kupić gotowy CRM czy zamówić własny?",
        a: "Gotowy CRM wystarczy, jeśli Wasz proces jest typowy i nie potrzebujecie nietypowych integracji. Własny CRM opłaca się, gdy proces jest specyficzny dla branży, zespół pracuje obok CRM w arkuszach albo licencje rosną z liczbą użytkowników. Pomagamy to ocenić na bezpłatnej konsultacji.",
      },
      {
        q: "Czy można przenieść dane z Excela lub innego CRM?",
        a: "Tak. Przygotowujemy import klientów, kontaktów i historii z arkuszy lub z eksportu dotychczasowego systemu. Przed migracją porządkujemy dane i ustalamy, które pola mają trafić do nowego CRM.",
      },
      {
        q: "Czy dedykowany CRM działa na telefonie?",
        a: "Interfejs projektujemy responsywnie, więc działa w przeglądarce na telefonie i tablecie. Jeśli zespół w terenie potrzebuje pracy offline, zdjęć czy powiadomień push, dokładamy aplikację mobilną w React Native / Expo.",
      },
    ],
    related: ["aplikacje-dedykowane", "integracje-api-crm-erp", "panel-klienta-portal-b2b"],
    keywords: [
      "system CRM na zamówienie",
      "dedykowany CRM dla firmy",
      "CRM szyty na miarę",
      "własny system CRM",
      "CRM dla biura rachunkowego",
      "program do obsługi klientów",
    ],
    portfolio: ["CRM E-Numerika Biuro Księgowe", "MS Nadruki", "RAV - Sklep elektryczny"],
  },

  // 3. Aplikacje mobilne dla firm
  {
    slug: "aplikacje-mobilne-dla-firm",
    kind: "service",
    parent: "aplikacje-dedykowane",
    title: "Aplikacje mobilne dla firm na iOS i Android",
    metaTitle: "Aplikacje mobilne dla firm iOS i Android – OlekCodeTech",
    metaDescription:
      "Tworzymy aplikacje mobilne dla firm na iOS i Android w React Native / Expo: dla pracowników, kierowców i klientów, z publikacją w sklepach. Umów konsultację.",
    eyebrow: "iOS i Android",
    lead: [
      "Budujemy aplikacje mobilne dla firm w React Native i Expo, czyli z jednego kodu na iOS i Android. Najczęściej są to aplikacje dla pracowników w terenie, kierowców i serwisantów albo aplikacje dla klientów, które uzupełniają panel webowy lub sklep.",
      "Aplikację mobilną traktujemy jako część większego systemu: korzysta z tego samego backendu i bazy danych co panel webowy, więc informacje są spójne. Przygotowujemy też to, czego wymagają App Store i Google Play, od opisów i zrzutów ekranu po politykę prywatności i stronę projektu aplikacji.",
    ],
    sections: [
      {
        title: "Kiedy firma potrzebuje własnej aplikacji mobilnej",
        text: "Aplikacja mobilna ma sens, gdy użytkownik pracuje z dala od komputera albo potrzebuje funkcji telefonu: aparatu, lokalizacji, powiadomień push czy pracy bez zasięgu. Jeśli wystarczy dostęp do danych z przeglądarki, często lepszym wyborem jest responsywna aplikacja webowa. Na etapie analizy wskazujemy, która opcja da ten sam efekt mniejszym kosztem.",
        bullets: [
          "pracownicy w terenie: zlecenia, protokoły, zdjęcia z realizacji",
          "kierowcy: trasy, statusy dostaw, potwierdzenia odbioru",
          "klienci: rezerwacje, zamówienia, historia zakupów",
          "praca offline z synchronizacją po odzyskaniu zasięgu",
          "powiadomienia push o nowych zadaniach i zmianach statusu",
        ],
      },
      {
        title: "React Native i Expo: jeden kod na iOS i Android",
        text: "Aplikacje mobilne piszemy w React Native z Expo i TypeScriptem. Jeden kod obsługuje oba systemy, co upraszcza rozwój i utrzymanie, a interfejs korzysta z natywnych komponentów każdej platformy. Backend współdzielimy z aplikacją webową (Node.js, tRPC, Prisma, PostgreSQL), więc logika biznesowa nie jest dublowana.",
        bullets: [
          "React Native, Expo, TypeScript",
          "wspólny backend i baza danych z panelem webowym",
          "aparat, GPS, skaner kodów, powiadomienia push",
          "tryb offline i lokalne przechowywanie danych",
          "szybkie aktualizacje poprawek bez pełnej ponownej publikacji",
        ],
      },
      {
        title: "Jak budujemy aplikację mobilną: prototyp, MVP, publikacja",
        text: "Zaczynamy od warsztatu i makiet ekranów, które można przeklikać na telefonie, zanim powstanie kod. MVP obejmuje najważniejszą ścieżkę użytkownika, np. przyjęcie zlecenia i jego zamknięcie ze zdjęciem. Wersje testowe udostępniamy przez TestFlight i testy wewnętrzne Google Play, a po akceptacji publikujemy aplikację w sklepach.",
        bullets: [
          "warsztat, makiety i klikalny prototyp",
          "MVP z jedną kluczową ścieżką użytkownika",
          "testy na urządzeniach zespołu klienta",
          "karty sklepów, zrzuty ekranu i polityka prywatności",
          "publikacja w App Store i Google Play",
          "aktualizacje i rozwój po wdrożeniu",
        ],
      },
      {
        title: "Od czego zależy koszt aplikacji mobilnej dla firmy",
        text: "Na koszt wpływa liczba ekranów i ról, wymagany tryb offline, integracje z systemami firmy oraz to, czy backend już istnieje. Aplikacja dla wewnętrznego zespołu ma zwykle prostsze wymagania wizualne niż aplikacja dla klientów, która konkuruje o uwagę w sklepie. Wyceniamy etapami, od MVP, żeby budżet szedł w funkcje, z których ludzie faktycznie korzystają.",
        bullets: [
          "liczba ekranów, ról i ścieżek użytkownika",
          "tryb offline i synchronizacja danych",
          "integracje z panelem webowym, CRM lub ERP",
          "wymagania dotyczące projektu graficznego",
          "publikacja i obsługa kont deweloperskich w sklepach",
        ],
      },
      {
        title: "Co dostajesz po wdrożeniu aplikacji mobilnej",
        text: "Aplikacja jest publikowana na kontach deweloperskich należących do Waszej firmy, a nie do wykonawcy. Przekazujemy kod źródłowy, repozytorium, dokumentację techniczną i prawa autorskie. Jeśli chcecie, przejmujemy dalsze utrzymanie: dostosowanie do nowych wersji iOS i Androida oraz rozwój kolejnych funkcji.",
        bullets: [
          "aplikacja na kontach App Store i Google Play klienta",
          "kod źródłowy w repozytorium i przeniesienie praw",
          "dokumentacja techniczna i instrukcja dla użytkowników",
          "skonfigurowany proces budowania i publikacji wersji",
          "opcjonalna opieka: aktualizacje systemów i bibliotek",
        ],
      },
    ],
    faq: [
      {
        q: "Czy aplikacja mobilna działa na iOS i Android?",
        a: "Tak. Piszemy w React Native z Expo, więc z jednego kodu powstaje aplikacja na iPhone'a i telefony z Androidem. Interfejs korzysta z natywnych komponentów każdej platformy, a utrzymanie jest prostsze niż przy dwóch osobnych aplikacjach.",
      },
      {
        q: "Ile kosztuje aplikacja mobilna dla firmy?",
        a: "Koszt zależy od liczby ekranów, ról, trybu offline i integracji z systemami firmy. Inaczej wycenia się aplikację dla kilku pracowników, a inaczej publiczną aplikację dla klientów. Po bezpłatnej konsultacji przygotowujemy wycenę etapową, zaczynając od MVP.",
      },
      {
        q: "Ile trwa stworzenie aplikacji mobilnej?",
        a: "MVP z jedną kluczową ścieżką można przygotować w kilka tygodni, do tego dochodzi czas przeglądu w App Store i Google Play. Większe aplikacje rozwijamy etapami, publikując kolejne wersje.",
      },
      {
        q: "Czy aplikacja mobilna może działać bez internetu?",
        a: "Tak, jeśli zaprojektujemy to od początku. Dane zapisujemy lokalnie na telefonie i synchronizujemy z serwerem po odzyskaniu zasięgu, co jest ważne np. dla kierowców i ekip pracujących w terenie.",
      },
      {
        q: "Czy aplikacja dla pracowników musi być w publicznym sklepie?",
        a: "Nie zawsze. Aplikację wewnętrzną można dystrybuować bez publicznej widoczności, np. jako aplikację prywatną przez Apple Business Manager i zarządzany Google Play. Sposób dystrybucji dobieramy do liczby użytkowników i wymagań bezpieczeństwa.",
      },
    ],
    related: ["systemy-dla-firm-transportowych", "aplikacje-webowe-react-nextjs", "aplikacje-dedykowane"],
    keywords: [
      "aplikacje mobilne dla firm",
      "aplikacja mobilna na zamówienie",
      "aplikacja iOS i Android",
      "React Native Expo",
      "aplikacja dla pracowników w terenie",
      "tworzenie aplikacji mobilnych",
    ],
    portfolio: ["Plonio.pl", "Wypożycz Sukienkę", "CRM E-Numerika Biuro Księgowe"],
  },

  // 4. Panel klienta / portal B2B
  {
    slug: "panel-klienta-portal-b2b",
    kind: "service",
    parent: "aplikacje-dedykowane",
    title: "Panel klienta i portal B2B – strefa klienta na zamówienie",
    metaTitle: "Panel klienta i portal B2B – OlekCodeTech",
    metaDescription:
      "Budujemy panel klienta i portal B2B: zamówienia, indywidualne cenniki, dokumenty, statusy i faktury w jednej strefie klienta. Umów bezpłatną konsultację.",
    eyebrow: "Strefa klienta",
    lead: [
      "Panel klienta to miejsce, w którym Wasi klienci sami sprawdzają status zamówienia, pobierają dokumenty, zamawiają według swoich cen i zgłaszają sprawy, bez dzwonienia i pisania maili. Portal B2B budujemy jako aplikację webową połączoną z systemami, w których te dane już są.",
      "Przykładem tego podejścia jest panel sprzedaży dla twórcy merchu IJK współpracującego ze sklepem MS Nadruki: zabezpieczony hasłem dostęp do zestawienia sprzedaży jego produktów, z danymi pobieranymi z WooCommerce przez REST API. Ten sam schemat rozwijamy w portale dla dystrybutorów, partnerów i klientów hurtowych.",
    ],
    sections: [
      {
        title: "Co może zawierać strefa klienta i portal B2B",
        text: "Zakres zależy od tego, o co klienci najczęściej pytają Wasz zespół. Jeśli większość telefonów dotyczy statusu zamówienia i dokumentów, od tego zaczynamy. Portal B2B dla klientów hurtowych zwykle rozszerzamy o indywidualne ceny i zamawianie, a panel klienta firmy usługowej o zgłoszenia i harmonogram prac.",
        bullets: [
          "historia i status zamówień, zleceń lub spraw",
          "indywidualne cenniki, rabaty i limity kupieckie",
          "szybkie zamówienia hurtowe i powtarzanie poprzednich",
          "faktury, umowy, protokoły i inne dokumenty do pobrania",
          "zgłoszenia, reklamacje i kontakt z opiekunem",
          "konta firmowe z wieloma użytkownikami i rolami",
        ],
      },
      {
        title: "Panel klienta na zamówienie czy moduł gotowej platformy",
        text: "Wiele platform sklepowych i CRM ma wbudowaną strefę klienta i jeśli spełnia Wasze potrzeby, nie ma sensu budować własnej. Dedykowany panel opłaca się, gdy dane pochodzą z kilku systemów, logika cen lub uprawnień jest nietypowa albo strefa klienta ma być wizytówką firmy. Możemy też zbudować panel jako nakładkę na istniejący sklep WooCommerce lub ERP, bez wymiany całego zaplecza.",
        bullets: [
          "dane z kilku źródeł: ERP, sklep, CRM, system magazynowy",
          "nietypowe zasady cen, rabatów i akceptacji zamówień",
          "konta firmowe z hierarchią użytkowników",
          "wysokie wymagania dotyczące wyglądu i wygody obsługi",
          "integracje, których gotowa platforma nie obsługuje",
        ],
      },
      {
        title: "Integracje portalu B2B z ERP, magazynem i sklepem",
        text: "Portal klienta jest tak dobry, jak aktualne są dane, które pokazuje. Łączymy go przez REST API z systemem ERP, magazynem zewnętrznym, programem księgowym lub WooCommerce, podobnie jak w sklepie RAV, gdzie dane produktów pochodzą z API magazynu zewnętrznego. Synchronizację projektujemy tak, by awaria jednego systemu nie blokowała całego portalu.",
        bullets: [
          "stany magazynowe i ceny z ERP lub hurtowni",
          "zamówienia przekazywane automatycznie do systemu sprzedaży",
          "faktury i dokumenty pobierane z programu księgowego",
          "WooCommerce jako zaplecze katalogu i zamówień",
          "kolejki i ponawianie synchronizacji przy błędach",
        ],
      },
      {
        title: "Jak budujemy panel klienta: etapy wdrożenia",
        text: "Zaczynamy od rozmowy z działem obsługi klienta, bo tam najlepiej widać, jakich informacji klienci szukają najczęściej. Następnie przygotowujemy makiety i prototyp, który można pokazać kilku zaufanym klientom przed startem prac. MVP obejmuje logowanie, podgląd zamówień i dokumentów, a zamawianie, zgłoszenia i raporty dodajemy w kolejnych etapach.",
        bullets: [
          "analiza pytań i zgłoszeń od klientów",
          "makiety i prototyp konsultowany z klientami",
          "MVP: logowanie, zamówienia, dokumenty",
          "integracje z systemami źródłowymi",
          "wdrożenie, zaproszenie klientów i wsparcie przy starcie",
        ],
      },
      {
        title: "Bezpieczeństwo, koszt i przekazanie portalu B2B",
        text: "Strefa klienta przetwarza dane firmowe, dlatego projektujemy ją z rolami, szyfrowanym połączeniem, dziennikiem zdarzeń i zgodnie z RODO. Koszt zależy głównie od liczby integracji, złożoności cen i uprawnień oraz liczby modułów. Po wdrożeniu przekazujemy kod, dokumentację i prawa autorskie, a utrzymanie może zostać po naszej stronie lub przejść do Waszego zespołu.",
        bullets: [
          "role i uprawnienia na poziomie firmy i użytkownika",
          "HTTPS, bezpieczne hasła, opcjonalne logowanie dwuskładnikowe",
          "dziennik zdarzeń i kopie zapasowe",
          "koszt: integracje, logika cen, liczba modułów",
          "kod źródłowy, dokumentacja i prawa po stronie klienta",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje panel klienta?",
        a: "Koszt zależy od liczby modułów, integracji z systemami źródłowymi oraz złożoności cen i uprawnień. Panel z podglądem zamówień i dokumentów to mniejszy zakres niż pełny portal B2B z zamawianiem według indywidualnych cenników. Wycenę etapową przygotowujemy po bezpłatnej konsultacji.",
      },
      {
        q: "Czym różni się portal B2B od sklepu internetowego?",
        a: "Sklep jest otwarty dla każdego i pokazuje wszystkim te same ceny. Portal B2B działa po zalogowaniu, pokazuje ceny i warunki ustalone z konkretnym klientem, obsługuje konta firmowe z wieloma użytkownikami oraz dokumenty i historię współpracy.",
      },
      {
        q: "Czy panel klienta można zintegrować z naszym ERP?",
        a: "Tak, jeśli ERP udostępnia API, eksport plików lub dostęp do bazy danych. Najpierw sprawdzamy dostępne metody wymiany danych, a potem projektujemy synchronizację z obsługą błędów.",
      },
      {
        q: "Czy można dodać strefę klienta do istniejącego sklepu WooCommerce?",
        a: "Tak. Możemy zbudować osobny panel korzystający z danych WooCommerce przez REST API albo rozbudować konto klienta w sklepie o własne moduły. Wybór zależy od tego, jak bardzo strefa klienta ma się różnić od standardowego konta.",
      },
      {
        q: "Ile trwa wdrożenie portalu B2B?",
        a: "MVP z logowaniem, zamówieniami i dokumentami zwykle uruchamiamy w kilka tygodni od akceptacji prototypu. Czas rośnie wraz z liczbą integracji, dlatego kolejne moduły wdrażamy etapami.",
      },
    ],
    related: ["integracje-api-crm-erp", "systemy-crm-dla-firm", "aplikacje-dedykowane"],
    keywords: [
      "panel klienta",
      "portal B2B",
      "strefa klienta",
      "panel klienta na zamówienie",
      "platforma B2B dla hurtowni",
      "portal dla dystrybutorów",
    ],
    portfolio: ["MS Nadruki", "RAV - Sklep elektryczny", "CRM E-Numerika Biuro Księgowe"],
  },

  // 5. Systemy rezerwacji online
  {
    slug: "systemy-rezerwacji-online",
    kind: "service",
    parent: "aplikacje-dedykowane",
    title: "System rezerwacji online na zamówienie",
    metaTitle: "System rezerwacji online na zamówienie – OlekCodeTech",
    metaDescription:
      "Tworzymy systemy rezerwacji online na zamówienie: terminy, wypożyczalnie, kalendarz dostępności, płatności i panel obsługi. Umów bezpłatną konsultację.",
    eyebrow: "Rezerwacje i wypożyczalnie",
    lead: [
      "Budujemy systemy rezerwacji online dla firm, których model nie mieści się w gotowych kalendarzach wizyt: wypożyczalni, wynajmu sprzętu, sal czy pojazdów, gdzie liczy się dostępność konkretnego egzemplarza w konkretnym terminie, czas na przygotowanie i zwrot.",
      "Przykład: dla wypożyczalni sukienek zbudowaliśmy własny silnik rezerwacji terminowej zintegrowany z WooCommerce, kalendarz dostępności w trzech wariantach, REST API sprawdzające wolne terminy i panel obsługi zamówień. Płatności i wysyłka działają przez Przelewy24 i Furgonetkę.",
    ],
    sections: [
      {
        title: "Kiedy własny system rezerwacji zamiast gotowego kalendarza",
        text: "Gotowe systemy rezerwacji dobrze obsługują wizyty u jednej osoby w stałych godzinach. Problem zaczyna się, gdy rezerwujecie egzemplarze w wielu rozmiarach lub wariantach, potrzebujecie bufora na pranie, serwis lub dostawę, albo rezerwacja ma być częścią sklepu z płatnością i wysyłką. Wtedy dedykowany silnik rezerwacji zdejmuje z zespołu ręczne pilnowanie kalendarza i ryzyko podwójnych rezerwacji.",
        bullets: [
          "rezerwacja konkretnych egzemplarzy, rozmiarów lub wariantów",
          "bufory przed i po wynajmie: przygotowanie, pranie, serwis, dostawa",
          "rezerwacja połączona z koszykiem, płatnością i wysyłką",
          "import blokad z poprzedniego systemu lub innych kanałów sprzedaży",
          "ceny zależne od długości i terminu wynajmu",
        ],
      },
      {
        title: "Funkcje systemu rezerwacji online i kalendarza dostępności",
        text: "Każdy system projektujemy wokół zasobu, który rezerwujecie, i reguł jego dostępności. Klient widzi tylko faktycznie wolne terminy, a zespół ma panel, w którym obsługuje zamówienia, zwroty i blokady ręczne. Dostępność udostępniamy przez API, więc może z niej korzystać strona, aplikacja mobilna lub system partnera.",
        bullets: [
          "kalendarz dostępności dopasowany do typu rezerwacji",
          "REST API dostępności dla strony, aplikacji i partnerów",
          "płatności online i automatyczne potwierdzenia e-mail",
          "panel obsługi: wydania, zwroty, blokady, notatki",
          "integracja z kurierami przy wynajmie z wysyłką",
          "raporty obłożenia i przychodów",
        ],
      },
      {
        title: "Jak budujemy system rezerwacji: etapy MVP",
        text: "Najpierw spisujemy reguły dostępności razem z wyjątkami, bo to one decydują o poprawności systemu. Następnie przygotowujemy prototyp kalendarza i ścieżki rezerwacji do przetestowania przez zespół. MVP obejmuje rezerwację, płatność i panel obsługi, a istniejące rezerwacje importujemy przed startem, żeby uniknąć konfliktów terminów.",
        bullets: [
          "spisanie reguł dostępności, buforów i wyjątków",
          "prototyp kalendarza i ścieżki rezerwacji",
          "MVP: rezerwacja, płatność, panel obsługi",
          "import istniejących rezerwacji i blokad terminów",
          "testy kolizji terminów przed uruchomieniem",
          "wdrożenie i monitoring pierwszych tygodni działania",
        ],
      },
      {
        title: "Technologie i integracje systemu rezerwacji",
        text: "W zależności od potrzeb budujemy system jako aplikację w Next.js z bazą PostgreSQL albo jako silnik rezerwacji osadzony w WordPressie i WooCommerce, gdy firma ma już sklep i chce zachować zaplecze. Logikę dostępności zawsze trzymamy po stronie serwera, żeby dwie osoby nie zarezerwowały tego samego terminu. Integrujemy płatności, kurierów i kalendarze zespołu.",
        bullets: [
          "Next.js, TypeScript, Node.js, PostgreSQL",
          "WordPress / WooCommerce jako zaplecze sklepu i katalogu",
          "bramki płatności, np. Przelewy24",
          "integracje kurierskie, np. Furgonetka",
          "synchronizacja z Google Calendar lub Microsoft 365",
        ],
      },
      {
        title: "Koszt systemu rezerwacji i co dostajesz po wdrożeniu",
        text: "Na koszt wpływa przede wszystkim złożoność reguł dostępności, liczba zasobów i wariantów oraz integracje z płatnościami i wysyłką. System z jednym typem rezerwacji jest wyraźnie prostszy niż wypożyczalnia z rozmiarami, buforami i zwrotami. Po wdrożeniu przekazujemy kod, dokumentację reguł dostępności i prawa autorskie, bez prowizji od rezerwacji.",
        bullets: [
          "złożoność reguł dostępności i liczba wariantów",
          "integracje płatności, kurierów i kalendarzy",
          "migracja rezerwacji z dotychczasowego systemu",
          "brak prowizji od rezerwacji i opłat za użytkownika",
          "kod, dokumentacja i prawa autorskie po stronie klienta",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje system rezerwacji online?",
        a: "Koszt zależy od reguł dostępności, liczby zasobów i wariantów oraz integracji z płatnościami, kurierami i kalendarzami. Prosty kalendarz terminów to inny zakres niż wypożyczalnia z buforami i zwrotami. Wycenę etapową przygotowujemy po bezpłatnej konsultacji.",
      },
      {
        q: "Czy system rezerwacji można dodać do sklepu WooCommerce?",
        a: "Tak. Silnik rezerwacji może działać jako rozszerzenie WooCommerce, korzystając z jego koszyka, płatności i kont klientów. Tak zrobiliśmy w wypożyczalni sukienek, gdzie rezerwacja terminu jest częścią zwykłego zakupu.",
      },
      {
        q: "Jak uniknąć podwójnych rezerwacji?",
        a: "Dostępność sprawdzamy po stronie serwera w momencie składania zamówienia, a nie tylko w kalendarzu na stronie. Uwzględniamy też bufory na przygotowanie i zwrot oraz blokady wprowadzane ręcznie przez zespół.",
      },
      {
        q: "Czy można przenieść rezerwacje z obecnego systemu?",
        a: "Tak. Importujemy istniejące rezerwacje i blokady terminów z eksportu dotychczasowego systemu, żeby nowe zamówienia nie kolidowały z już przyjętymi. Import sprawdzamy na kopii danych przed przełączeniem.",
      },
      {
        q: "Czy lepiej kupić gotowy system rezerwacji czy zamówić własny?",
        a: "Jeśli rezerwujecie wizyty w stałych godzinach, gotowe narzędzie zwykle wystarczy. Własny system opłaca się przy wynajmie egzemplarzy z wariantami i buforami, połączeniu z płatnością i wysyłką albo gdy prowizje od rezerwacji rosną razem z obrotem.",
      },
    ],
    related: ["aplikacje-dedykowane", "aplikacje-webowe-react-nextjs", "aplikacje-mobilne-dla-firm"],
    keywords: [
      "system rezerwacji online",
      "system rezerwacji na zamówienie",
      "system do wypożyczalni",
      "kalendarz dostępności online",
      "rezerwacja terminów online",
      "rezerwacje WooCommerce",
    ],
    portfolio: ["Wypożycz Sukienkę", "RAV - Sklep elektryczny", "CRM E-Numerika Biuro Księgowe"],
  },

  // 6. Oprogramowanie dla firm transportowych (TMS)
  {
    slug: "systemy-dla-firm-transportowych",
    kind: "service",
    parent: "aplikacje-dedykowane",
    title: "Oprogramowanie dla firm transportowych – system TMS i aplikacja dla kierowców",
    metaTitle: "System TMS dla firm transportowych – OlekCodeTech",
    metaDescription:
      "Budujemy oprogramowanie dla firm transportowych: system TMS, panel spedycji i aplikację mobilną dla kierowców, dopasowane do Waszej pracy. Umów konsultację.",
    eyebrow: "Transport i logistyka",
    lead: [
      "Tworzymy oprogramowanie dla firm transportowych i logistycznych: systemy TMS do obsługi zleceń, panele dla spedycji i aplikacje mobilne dla kierowców. Budujemy je wokół Waszego sposobu pracy, a nie uniwersalnego schematu, do którego trzeba się dostosować.",
      "Obecnie rozwijamy system TMS dla firmy transportowej: panel webowy dla spedycji i aplikację mobilną dla kierowców, zbudowane w Next.js, PostgreSQL i Expo. Doświadczenia z tego projektu wykorzystujemy w rozmowach z kolejnymi firmami z branży TSL.",
    ],
    sections: [
      {
        title: "Moduły systemu TMS dla spedycji i przewoźnika",
        text: "System TMS porządkuje to, co w wielu firmach transportowych żyje w arkuszach, komunikatorach i telefonach: zlecenia, przydział kierowców, dokumenty i rozliczenia. Zakres modułów ustalamy na warsztacie i wdrażamy etapami, zaczynając od tego, co najbardziej obciąża dział spedycji. Każdy moduł ma role i uprawnienia dla spedytorów, kierowców, księgowości i zarządu.",
        bullets: [
          "zlecenia transportowe, statusy i harmonogram",
          "przydział kierowców i pojazdów",
          "baza kontrahentów, stawek i tras",
          "dokumenty przewozowe i potwierdzenia dostaw",
          "rozliczenia, dane do faktur i raporty",
          "terminy przeglądów, badań i dokumentów pojazdów",
        ],
      },
      {
        title: "Aplikacja mobilna dla kierowców na iOS i Android",
        text: "Kierowca dostaje na telefonie tylko to, czego potrzebuje w trasie: listę zleceń, adresy, dokumenty i możliwość zmiany statusu. Zdjęcia dokumentów i potwierdzenia dostawy trafiają od razu do panelu spedycji, bez przesyłania ich komunikatorem. Aplikację budujemy w React Native / Expo na iOS i Android, z obsługą pracy przy słabym zasięgu.",
        bullets: [
          "lista zleceń i szczegóły trasy",
          "zmiana statusu jednym przyciskiem",
          "zdjęcia dokumentów i potwierdzeń dostawy",
          "powiadomienia push o nowych i zmienionych zleceniach",
          "praca offline z późniejszą synchronizacją",
        ],
      },
      {
        title: "Dedykowany TMS czy gotowy program do zarządzania transportem?",
        text: "Gotowe systemy TMS dobrze sprawdzają się w typowych modelach pracy, jeśli firma akceptuje ich logikę. Dedykowane oprogramowanie ma przewagę, gdy firma łączy kilka rodzajów działalności, ma własne zasady rozliczeń z kierowcami i kontrahentami albo potrzebuje integracji, których gotowy system nie oferuje. Na konsultacji pomagamy ocenić, czy wystarczy konfiguracja istniejącego narzędzia, czy warto budować własne.",
        bullets: [
          "nietypowe rozliczenia kierowców i podwykonawców",
          "transport połączony z innymi usługami, np. magazynowaniem",
          "integracje z księgowością lub systemem telematycznym",
          "własne raporty i wskaźniki dla zarządu",
          "rosnące koszty licencji liczonych od kierowcy lub pojazdu",
        ],
      },
      {
        title: "Jak budujemy oprogramowanie dla firmy transportowej",
        text: "Zaczynamy od warsztatu ze spedycją i rozmów z kierowcami, bo to oni najlepiej wiedzą, gdzie dziś giną informacje. Na tej podstawie powstają makiety panelu i aplikacji oraz model danych. MVP obejmuje zlecenia, przydział i statusy, a kolejne moduły, takie jak dokumenty, rozliczenia i raporty, dokładamy w iteracjach, z testami na prawdziwych trasach.",
        bullets: [
          "warsztat ze spedycją, kierowcami i księgowością",
          "makiety panelu webowego i aplikacji mobilnej",
          "MVP: zlecenia, przydział, statusy",
          "testy z kierowcami w realnych warunkach",
          "wdrożenie etapowe obok dotychczasowego sposobu pracy",
          "rozwój i utrzymanie po starcie",
        ],
      },
      {
        title: "Technologie, koszt i przekazanie systemu TMS",
        text: "Panel webowy budujemy w Next.js z TypeScriptem, backend w Node.js z tRPC i Prisma na bazie PostgreSQL, a aplikację dla kierowców w Expo / React Native. Koszt zależy od liczby modułów, ról i integracji oraz od wymagań aplikacji mobilnej, np. pracy offline. Po wdrożeniu przekazujemy kod źródłowy, dokumentację i prawa autorskie, a aplikacja jest publikowana na kontach firmy klienta.",
        bullets: [
          "Next.js, TypeScript, Node.js, tRPC, Prisma, PostgreSQL",
          "Expo / React Native na iOS i Android",
          "integracje REST API z księgowością i telematyką",
          "koszt: moduły, role, integracje, tryb offline",
          "kod, dokumentacja i prawa po stronie klienta",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje system TMS na zamówienie?",
        a: "Koszt zależy od liczby modułów, ról użytkowników, integracji i tego, czy potrzebna jest aplikacja mobilna dla kierowców. Zaczynamy od MVP obejmującego zlecenia, przydział i statusy, a kolejne moduły wyceniamy etapami. Szczegóły ustalamy po bezpłatnej konsultacji i warsztacie.",
      },
      {
        q: "Ile trwa wdrożenie systemu dla firmy transportowej?",
        a: "Pierwszy etap z obsługą zleceń i statusów zwykle trwa od kilku tygodni do kilku miesięcy, zależnie od zakresu. Kolejne moduły wdrażamy etapami, a system pracuje produkcyjnie już po pierwszym z nich.",
      },
      {
        q: "Czy aplikacja dla kierowców działa na Androidzie i iPhonie?",
        a: "Tak. Budujemy ją w React Native / Expo, więc z jednego kodu działa na obu systemach. Kierowcy mogą korzystać z prywatnych lub służbowych telefonów, a dostęp kontrolują role i uprawnienia.",
      },
      {
        q: "Czy system TMS można zintegrować z programem księgowym?",
        a: "Tak, jeśli program księgowy udostępnia API lub import plików. Dane do faktur i rozliczeń przekazujemy automatycznie, żeby księgowość nie przepisywała ich ręcznie ze zleceń.",
      },
      {
        q: "Czy lepiej kupić gotowy TMS czy zamówić własny?",
        a: "Gotowy TMS wystarczy, jeśli Wasz model pracy jest typowy, a koszt licencji akceptowalny. Własny system opłaca się przy nietypowych rozliczeniach, połączeniu kilku rodzajów działalności lub potrzebie integracji, których gotowe programy nie mają.",
      },
    ],
    related: ["aplikacje-mobilne-dla-firm", "aplikacje-dedykowane", "integracje-api-crm-erp"],
    keywords: [
      "oprogramowanie dla firm transportowych",
      "system TMS na zamówienie",
      "aplikacja dla kierowców",
      "system dla spedycji",
      "program do zarządzania transportem",
      "oprogramowanie dla logistyki",
    ],
    portfolio: ["CRM E-Numerika Biuro Księgowe", "Plonio.pl", "Komunalne Wieluń"],
  },
];

export const getAppLanding = (slug: string) => appLandings.find((l) => l.slug === slug);
