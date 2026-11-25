import type { LandingPage } from "./types";

/**
 * Podstrony produktów InsERT – księgowość (część 2):
 * Rachmistrz nexo, Rachmistrz nexo PRO, Rachmistrz GT, Rewizor nexo, Rewizor nexo PRO.
 * Wymagania sieci sprzedaży InsERT: H1 = "Nazwa - przeznaczenie", <title> = "H1 | OlekCodeTech",
 * każdy nagłówek h2 zawiera nazwę produktu, treść napisana własnymi słowami (bez cen i promocji).
 */
export const insertProducts2: LandingPage[] = [
  // 1. Rachmistrz nexo
  {
    slug: "rachmistrz-nexo",
    navLabel: "Rachmistrz nexo",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Rachmistrz nexo",
      line: "nexo",
      image: "/images/insert/rachmistrz-nexo.webp",
      producerUrl:
        "https://www.insert.com.pl/programy_dla_firm/ksiegowosc_i_finanse/rachmistrz_nexo/opis.html",
    },
    title: "Rachmistrz nexo - księga przychodów i rozchodów oraz ryczałt",
    metaTitle: "Rachmistrz nexo - księga przychodów i rozchodów oraz ryczałt | OlekCodeTech",
    metaDescription:
      "Rachmistrz nexo to program do KPiR i ryczałtu z ewidencją VAT, JPK i obsługą KSeF. Kupicie go w OlekCodeTech razem z wdrożeniem, szkoleniem i opieką.",
    eyebrow: "InsERT nexo · księgowość uproszczona",
    lead: [
      "Rachmistrz nexo to program InsERT do księgowości uproszczonej. Prowadzi się w nim księgę przychodów i rozchodów albo ewidencję podatku zryczałtowanego, a przy okazji rejestry VAT, środki trwałe i rozrachunki. Sięgają po niego przedsiębiorcy, którzy księgują u siebie, oraz biura rachunkowe obsługujące małe firmy.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT. Rachmistrza nexo możecie u nas kupić, zlecić nam jego instalację i konfigurację, a potem objąć program stałą opieką – na miejscu w Wieluniu i okolicy albo zdalnie.",
    ],
    sections: [
      {
        title: "Dla kogo jest Rachmistrz nexo",
        text: "Rachmistrz nexo jest przeznaczony dla firm, które rozliczają się na podstawie księgi przychodów i rozchodów albo ryczałtu ewidencjonowanego. W praktyce sięgają po niego dwie grupy. Pierwsza to właściciele małych firm, którzy chcą prowadzić księgowość u siebie i mieć bieżący wgląd w koszty, VAT oraz należności. Druga to biura rachunkowe i samodzielni księgowi, którym potrzebne jest jedno narzędzie do ewidencji, deklaracji i rozrachunków. Program rozlicza także wspólników, więc pasuje nie tylko do jednoosobowej działalności. Może działać na jednym komputerze albo na kilku stanowiskach w sieci. O tym, jaka forma ewidencji jest dla Was właściwa, decyduje księgowa lub doradca podatkowy – my dobieramy i ustawiamy program pod tę decyzję.",
        bullets: [
          "firmy na księdze przychodów i rozchodów",
          "firmy rozliczające się ryczałtem ewidencjonowanym",
          "działalności jednoosobowe i firmy z kilkoma wspólnikami",
          "przedsiębiorcy księgujący samodzielnie",
          "biura rachunkowe i samodzielni księgowi",
          "praca na jednym stanowisku lub w sieci",
        ],
      },
      {
        title: "Co potrafi Rachmistrz nexo – najważniejsze funkcje",
        text: "Rachmistrz nexo zbiera w jednym miejscu ewidencje, które w małej firmie zwykle żyją w kilku arkuszach. Oprócz samej księgi lub ewidencji przychodów prowadzi rejestry VAT zakupów i sprzedaży, także przy marży i metodzie kasowej. Pilnuje środków trwałych, wartości niematerialnych, wyposażenia i remanentów, a amortyzację nalicza i księguje sam. Obsługuje pojazdy firmowe i prywatne używane w działalności. W części finansowej znajdziecie kasę z raportami kasowymi, rachunki bankowe z przelewami oraz rozrachunki z kontrahentami, łącznie z różnicami kursowymi. Powtarzalne dokumenty księgują się według schematów dekretacji, które można zdefiniować samodzielnie. Jest też podstawowa ewidencja osobowa i umów oraz rozliczenia właścicieli: składki ZUS, przychody z innych źródeł i odliczenia.",
        bullets: [
          "KPiR lub ewidencja przychodów, ze zmianą formy bez wymiany programu",
          "rejestry VAT, w tym marża, metoda kasowa i korekty",
          "środki trwałe, wyposażenie, remanenty i amortyzacja",
          "kasa, bank, przelewy i rozrachunki z różnicami kursowymi",
          "automatyczna dekretacja według własnych schematów",
          "rozliczenia właścicieli oraz podstawowa ewidencja umów i wynagrodzeń",
        ],
      },
      {
        title: "Rachmistrz nexo a inne programy InsERT, KSeF i JPK",
        text: "Rachmistrz nexo należy do pakietu InsERT nexo, w którym są także Subiekt nexo do sprzedaży i magazynu, Rewizor nexo do pełnej księgowości, Gratyfikant nexo do kadr i płac oraz Gestor nexo do relacji z klientami. Najczęstsze połączenie to Subiekt i Rachmistrz: faktury wystawione w sprzedaży trafiają do księgowości bez przepisywania. W zakresie KSeF program pobiera faktury z systemu i pozwala nimi zarządzać, a wystawianie i wysyłkę faktur ustrukturyzowanych realizuje Subiekt nexo. Rozliczenie VAT odbywa się plikiem JPK_V7, który Rachmistrz przygotowuje i wysyła. Księgi i dowody można też wygenerować do plików JPK na potrzeby kontroli. Do tego dochodzą deklaracje dotyczące podatku dochodowego oraz deklaracje ZUS z eksportem do Płatnika.",
        bullets: [
          "wspólny pakiet z Subiektem, Rewizorem, Gratyfikantem i Gestorem nexo",
          "przejmowanie dokumentów sprzedaży z Subiekta nexo",
          "pobieranie faktur z KSeF i praca na nich w programie",
          "JPK_V7 oraz pliki JPK na żądanie kontroli",
          "deklaracje ZUS z eksportem do programu Płatnik",
          "sprawdzanie kontrahentów w GUS, VIES i na Białej liście",
        ],
      },
      {
        title: "Czym Rachmistrz nexo różni się od wersji PRO, GT i od Rewizora",
        text: "Rachmistrz nexo ma trzech bliskich sąsiadów w ofercie InsERT i warto wiedzieć, gdzie przebiegają granice. Rachmistrz nexo PRO zawiera wszystko to, co wersja standardowa, a dodatkowo pozwala mocniej dopasować program: tworzyć własne raporty i wydruki, pola własne, warunkowe schematy dekretacji czy rozliczenia w ratach i wielu walutach. Rachmistrz GT to starsza linia programów, która nadal obsługuje księgę i ryczałt oraz współpracuje z Subiektem GT. Z kolei Rewizor nexo służy do ksiąg rachunkowych, czyli pełnej księgowości z planem kont. Wersja standardowa ma też ograniczenia, na przykład limit liczby plików w bibliotece załączników. Przed zakupem sprawdzamy razem z Wami, czy standard wystarczy, czy lepiej od razu wybrać PRO.",
        bullets: [
          "nexo PRO: własne raporty, wydruki, pola i słowniki",
          "nexo PRO: Sfera i punkty rozszerzeń do indywidualnych rozwiązań",
          "GT: starsza linia, współpracuje z Subiektem GT",
          "Rewizor nexo: pełna księgowość zamiast uproszczonej",
          "standard: limit załączników w bibliotece plików",
          "dobór wersji po rozmowie o tym, jak pracujecie",
        ],
      },
      {
        title: "Rachmistrz nexo w OlekCodeTech – zakup i wdrożenie",
        text: "Rachmistrz nexo kupicie u nas w cenie zgodnej z aktualnym cennikiem producenta, a wdrożenie wyceniamy osobno po bezpłatnej 30-minutowej konsultacji. Instalujemy program razem z serwerem Microsoft SQL i przygotowujemy pracę wielostanowiskową, jeśli z bazy ma korzystać kilka osób. Od pierwszego dnia ustawiamy automatyczne kopie zapasowe. Parametry księgowe, rejestry i schematy dekretacji konfigurujemy według ustaleń Waszej księgowej – nie doradzamy podatkowo, tylko przekładamy jej decyzje na ustawienia programu. Pomagamy przenieść kartoteki i dane z poprzedniego systemu, a potem szkolimy osoby, które będą księgować. Po wdrożeniu możecie zostać pod naszą opieką: aktualizacje, pomoc zdalna, nowe stanowiska. Pracujemy na miejscu w Wieluniu, Wieruszowie, Sieradzu, Kępnie i Kluczborku oraz zdalnie.",
        bullets: [
          "licencja w cenie z cennika producenta",
          "instalacja programu i serwera SQL, praca w sieci",
          "automatyczne kopie zapasowe bazy",
          "konfiguracja według ustaleń księgowej",
          "przeniesienie danych i szkolenie",
          "opieka po wdrożeniu, na miejscu i zdalnie",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Rachmistrz nexo?",
        a: "Rachmistrz nexo jest dla firm rozliczających się na księdze przychodów i rozchodów albo ryczałtem ewidencjonowanym. Korzystają z niego przedsiębiorcy, którzy prowadzą księgowość samodzielnie, oraz biura rachunkowe i księgowi obsługujący małe firmy. Program rozlicza też wspólników. Formę ewidencji wybiera księgowa lub doradca podatkowy, a my ustawiamy program zgodnie z tą decyzją.",
      },
      {
        q: "Czym Rachmistrz nexo różni się od Rachmistrza nexo PRO?",
        a: "Rachmistrz nexo PRO ma wszystkie funkcje wersji standardowej i dodaje narzędzia do dopasowania programu: własne raporty i wydruki, pola i słowniki własne, warunkowe schematy dekretacji, rozrachunki w ratach, rozliczenia wielowalutowe oraz Sferę do indywidualnych rozwiązań. Rachmistrz nexo w wersji standardowej wystarcza firmom, które księgują w typowy sposób i nie potrzebują takich dostosowań.",
      },
      {
        q: "Czy Rachmistrz nexo nadaje się dla biura rachunkowego?",
        a: "Tak, Rachmistrz nexo sprawdza się w pracy księgowych: ma schematy automatycznej dekretacji, rozliczenia właścicieli, deklaracje, JPK_V7 i pracę sieciową dla kilku osób. Biurom, które chcą budować własne raporty, analizować zapisy według własnych cech albo rozszerzać program, zwykle proponujemy porównanie z wersją PRO. Pomagamy to ocenić na konsultacji, na konkretnych przykładach z Waszej pracy.",
      },
      {
        q: "Ile kosztuje Rachmistrz nexo?",
        a: "Cena licencji na program Rachmistrz nexo jest zgodna z aktualnym cennikiem producenta i zależy między innymi od liczby stanowisk. Wdrożenie wyceniamy osobno, bo inaczej wygląda instalacja na jednym komputerze, a inaczej praca kilku osób z przeniesieniem danych i szkoleniem. Konkretną kwotę podajemy po bezpłatnej 30-minutowej konsultacji, kiedy wiemy, czego potrzebujecie.",
      },
      {
        q: "Czy pomożecie wdrożyć program Rachmistrz nexo i przenieść dane?",
        a: "Tak. Instalujemy program Rachmistrz nexo i serwer SQL, konfigurujemy stanowiska, kopie zapasowe oraz ustawienia księgowe według wskazówek Waszej księgowej. Dane z poprzedniego programu przenosimy najpierw próbnie, żeby było jasne, co przejdzie automatycznie, a co wymaga uporządkowania. Na koniec szkolimy użytkowników. Działamy na miejscu w Wieluniu i okolicy oraz zdalnie.",
      },
    ],
    related: [
      "rachmistrz-nexo-pro",
      "rachmistrz-gt",
      "rewizor-nexo",
      "subiekt-nexo",
      "programy-insert-nexo",
    ],
    keywords: [
      "Rachmistrz nexo",
      "Rachmistrz nexo KPiR",
      "Rachmistrz nexo ryczałt",
      "Rachmistrz nexo KSeF",
      "Rachmistrz nexo wdrożenie",
      "Rachmistrz nexo Wieluń",
    ],
  },

  // 2. Rachmistrz nexo PRO
  {
    slug: "rachmistrz-nexo-pro",
    navLabel: "Rachmistrz nexo PRO",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Rachmistrz nexo PRO",
      line: "nexo PRO",
      image: "/images/insert/rachmistrz-nexo-pro.webp",
      producerUrl:
        "https://www.insert.com.pl/programy_dla_firm/ksiegowosc_i_finanse/rachmistrz_nexo_pro/opis.html",
    },
    title: "Rachmistrz nexo PRO - rozbudowana księgowość uproszczona",
    metaTitle: "Rachmistrz nexo PRO - rozbudowana księgowość uproszczona | OlekCodeTech",
    metaDescription:
      "Rachmistrz nexo PRO: KPiR i ryczałt z własnymi raportami, polami, warunkową dekretacją i Sferą. Sprzedaż, wdrożenie i opieka w OlekCodeTech z Wielunia.",
    eyebrow: "InsERT nexo PRO · księgowość uproszczona",
    lead: [
      "Rachmistrz nexo PRO to rozszerzona wersja programu InsERT do księgi przychodów i rozchodów oraz ryczałtu. Ma wszystko, co wersja standardowa, a do tego pozwala ułożyć program po swojemu: z własnymi raportami, polami, typami rozrachunków i schematami dekretacji zależnymi od cech dokumentu. Wybierają go biura rachunkowe i firmy, którym typowe ustawienia przestały wystarczać.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT. Rachmistrza nexo PRO dostarczamy razem z instalacją, konfiguracją i szkoleniem, a po uruchomieniu możemy przejąć stałą opiekę nad programem i bazą danych.",
    ],
    sections: [
      {
        title: "Dla kogo jest Rachmistrz nexo PRO",
        text: "Rachmistrz nexo PRO wybierają ci, którzy prowadzą księgę przychodów i rozchodów lub ryczałt, ale chcą mieć większy wpływ na to, jak program pracuje. Pierwsza grupa to biura rachunkowe: przy wielu klientach liczy się automatyzacja księgowania, analiza zapisów według własnych kryteriów i raporty skrojone pod biuro. Druga to firmy księgujące samodzielnie, które mają nietypowe rozliczenia – płatności rozłożone na raty, transakcje w kilku walutach albo kasę wymagającą kontroli pracy kasjera. Trzecia to przedsiębiorstwa, które planują połączyć księgowość z własnym oprogramowaniem. Jeżeli nie jesteście pewni, czy potrzebujecie wersji PRO, powiedzcie nam, jak wygląda Wasz dzień pracy – wskażemy, które dodatki faktycznie się przydadzą.",
        bullets: [
          "biura rachunkowe prowadzące KPiR i ryczałt",
          "firmy z rozliczeniami w wielu walutach",
          "firmy rozkładające należności i zobowiązania na raty",
          "zespoły, które potrzebują własnych raportów i wydruków",
          "przedsiębiorstwa planujące indywidualne rozszerzenia",
          "praca jednostanowiskowa lub sieciowa",
        ],
      },
      {
        title: "Najważniejsze funkcje, które ma Rachmistrz nexo PRO",
        text: "Rachmistrz nexo PRO zaczyna się tam, gdzie wersja standardowa: jest księga lub ewidencja przychodów, rejestry VAT, środki trwałe, pojazdy, kasa, bank, rozrachunki, deklaracje i automatyczna dekretacja. Dodatki PRO dotyczą głównie elastyczności. Schematy dekretacji mogą zależeć od dowolnej cechy dokumentu źródłowego, a obiekty w programie da się opisać własnymi polami i słownikami, po których potem filtrujecie i analizujecie zapisy. Rozrachunek można podzielić na raty z osobnymi terminami, rozliczyć w innej walucie niż faktura albo skompensować między walutami. Do tego dochodzą własne typy amortyzacji, definiowalne transakcje VAT, sesje kasowe sprawdzające stan gotówki przy zamknięciu oraz własne raporty i wydruki. Pełny ślad rewizyjny pokazuje uprawnionym osobom, kto co zmienił.",
        bullets: [
          "warunkowe schematy dekretacji",
          "pola i słowniki własne do opisu i analizy zapisów",
          "rozrachunki w ratach i własne rodzaje rozrachunków",
          "rozliczenia i kompensaty wielowalutowe",
          "sesje kasowe oraz własne typy amortyzacji",
          "własne raporty, wydruki i pełny ślad rewizyjny",
        ],
      },
      {
        title: "Rachmistrz nexo PRO a inne programy InsERT, KSeF i JPK",
        text: "Rachmistrz nexo PRO jest częścią pakietu InsERT nexo PRO, razem z Subiektem, Rewizorem, Gratyfikantem i Gestorem w wersjach PRO. Z programem sprzedażowym łączy go wymiana dokumentów: to, co wystawicie w Subiekcie, nie musi być wpisywane w księgowości drugi raz. Producent wymienia też integrację z Subiektem 123, czyli fakturowaniem online. Jeśli chodzi o KSeF, Rachmistrz pobiera faktury z systemu i pozwala nad nimi pracować, natomiast wystawianie i przesyłanie faktur ustrukturyzowanych odbywa się w Subiekcie nexo PRO. Program przygotowuje i wysyła JPK_V7, tworzy pliki JPK dla kontroli, deklaracje podatkowe oraz ZUS z eksportem do Płatnika. Własne raporty i wydruki można przenosić do innych programów nexo, a Sfera otwiera drogę do integracji z zewnętrznym oprogramowaniem.",
        bullets: [
          "pakiet InsERT nexo PRO na wspólnych danych",
          "integracja z Subiektem nexo i Subiektem 123",
          "pobieranie faktur z KSeF",
          "JPK_V7 i pliki JPK na potrzeby kontroli",
          "deklaracje ZUS z eksportem do Płatnika",
          "Sfera dla Rachmistrza nexo – własne rozwiązania i integracje",
        ],
      },
      {
        title: "Czym Rachmistrz nexo PRO różni się od wersji standardowej, GT i Rewizora",
        text: "Rachmistrz nexo PRO i Rachmistrz nexo to ten sam program w dwóch wariantach – PRO dokłada narzędzia do dostosowań i automatyzacji, a zakres ewidencji podatkowych pozostaje wspólny. Jeśli więc pytanie brzmi, czy da się prowadzić KPiR, odpowiedź jest taka sama w obu wersjach; różnica pojawia się przy własnych raportach, warunkowej dekretacji, ratach, walutach i rozszerzeniach. Rachmistrz GT to starsza linia, współpracująca z Subiektem GT. Rewizor nexo PRO jest natomiast odpowiednikiem dla ksiąg rachunkowych, czyli pełnej księgowości. Biura rachunkowe często korzystają z obu programów PRO jednocześnie, bo obsługują klientów na różnych formach ewidencji. Przed zakupem przechodzimy z Wami listę dodatków PRO i zaznaczamy te, których naprawdę użyjecie.",
        bullets: [
          "ten sam zakres ewidencji co w wersji standardowej",
          "więcej możliwości dostosowania i automatyzacji",
          "pełny ślad rewizyjny działań użytkowników",
          "GT: starsza linia programów InsERT",
          "Rewizor nexo PRO: pełna księgowość",
          "wspólna praca z pozostałymi programami nexo PRO",
        ],
      },
      {
        title: "Zakup i wdrożenie – Rachmistrz nexo PRO w OlekCodeTech",
        text: "Rachmistrz nexo PRO sprzedajemy w cenie zgodnej z aktualnym cennikiem producenta. Wdrożenie wersji PRO to zwykle więcej pracy konfiguracyjnej, dlatego zaczynamy od bezpłatnej 30-minutowej konsultacji i spisania, co program ma robić. Potem instalujemy serwer Microsoft SQL, ustawiamy pracę wielostanowiskową i automatyczne kopie zapasowe. Schematy dekretacji, pola własne i wzorce wydruków przygotowujemy według ustaleń księgowej – w Rewizorze nexo konfigurowaliśmy już schematy dekretacji dla biura rachunkowego, więc znamy ten rodzaj pracy. Przenosimy dane z poprzedniego programu, szkolimy zespół i zostajemy w kontakcie po starcie. Jeżeli potrzebne jest rozwiązanie indywidualne oparte na Sferze, jako software house możemy je zaprojektować i napisać. Działamy na miejscu w Wieluniu i okolicy oraz zdalnie.",
        bullets: [
          "licencja według cennika producenta",
          "serwer SQL i praca wielostanowiskowa",
          "kopie zapasowe od pierwszego dnia",
          "schematy dekretacji i pola własne według ustaleń księgowej",
          "przeniesienie danych i szkolenie zespołu",
          "indywidualne rozszerzenia oraz stała opieka",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Rachmistrz nexo PRO?",
        a: "Rachmistrz nexo PRO jest dla biur rachunkowych i firm, które prowadzą księgę przychodów i rozchodów lub ryczałt, a przy tym potrzebują większej elastyczności niż w wersji standardowej. Chodzi między innymi o własne raporty, pola do analiz, warunkową dekretację, rozrachunki ratalne i wielowalutowe albo o indywidualne rozszerzenia programu przygotowane specjalnie dla firmy.",
      },
      {
        q: "Czym Rachmistrz nexo PRO różni się od Rachmistrza nexo?",
        a: "Rachmistrz nexo PRO zawiera pełną funkcjonalność Rachmistrza nexo i dodaje do niej między innymi Sferę, punkty rozszerzeń, definiowalne transakcje VAT, własne typy amortyzacji, sesje kasowe, raty, rozliczenia wielowalutowe, pola i słowniki własne oraz definiowanie raportów i wydruków. Formy ewidencji są te same, różni się stopień, w jakim program da się dopasować.",
      },
      {
        q: "Czy Rachmistrz nexo PRO nadaje się dla biura rachunkowego?",
        a: "Tak, Rachmistrz nexo PRO jest często wybierany właśnie przez biura rachunkowe. Warunkowe schematy dekretacji ograniczają ręczne księgowanie powtarzalnych dokumentów, pola własne pozwalają analizować zapisy według kryteriów biura, a praca sieciowa umożliwia jednoczesne działanie kilku księgowych. Przy klientach na pełnej księgowości naturalnym uzupełnieniem jest Rewizor nexo PRO z tego samego pakietu.",
      },
      {
        q: "Ile kosztuje Rachmistrz nexo PRO?",
        a: "Licencję na program Rachmistrz nexo PRO sprzedajemy w cenie zgodnej z aktualnym cennikiem producenta; wpływa na nią między innymi liczba stanowisk. Koszt wdrożenia zależy od zakresu konfiguracji, liczby schematów i raportów do przygotowania oraz od tego, czy przenosimy dane. Wycenę przedstawiamy po bezpłatnej 30-minutowej konsultacji, bez zobowiązań z Waszej strony.",
      },
      {
        q: "Czy pomożecie wdrożyć program Rachmistrz nexo PRO i przenieść dane?",
        a: "Tak. Wdrożenie programu Rachmistrz nexo PRO obejmuje u nas instalację serwera SQL, konfigurację stanowisk i kopii zapasowych, przygotowanie schematów dekretacji oraz pól własnych według ustaleń księgowej, a także szkolenie. Dane z dotychczasowego programu przenosimy po próbie na kopii bazy. Możemy też przygotować indywidualne rozszerzenie, jeśli standardowe funkcje nie wystarczą.",
      },
    ],
    related: [
      "rachmistrz-nexo",
      "rewizor-nexo-pro",
      "rachmistrz-gt",
      "wsparcie-it-dla-biur-rachunkowych",
      "programy-insert-nexo",
    ],
    keywords: [
      "Rachmistrz nexo PRO",
      "Rachmistrz nexo PRO dla biura rachunkowego",
      "Rachmistrz nexo PRO KPiR",
      "Rachmistrz nexo PRO KSeF",
      "Rachmistrz nexo PRO wdrożenie",
      "Rachmistrz nexo PRO Sfera",
    ],
  },

  // 3. Rachmistrz GT
  {
    slug: "rachmistrz-gt",
    navLabel: "Rachmistrz GT",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Rachmistrz GT",
      line: "GT",
      image: "/images/insert/rachmistrz-gt.webp",
      producerUrl:
        "https://www.insert.com.pl/programy_dla_firm/ksiegowosc_i_finanse/rachmistrz_gt/opis.html",
    },
    title: "Rachmistrz GT - KPiR i podatek zryczałtowany w małej firmie",
    metaTitle: "Rachmistrz GT - KPiR i podatek zryczałtowany w małej firmie | OlekCodeTech",
    metaDescription:
      "Rachmistrz GT: księga przychodów i rozchodów lub ryczałt, VAT, e-deklaracje, JPK i współpraca z Subiektem GT. Sprzedaż, wdrożenie i opieka w OlekCodeTech.",
    eyebrow: "InsERT GT · księgowość uproszczona",
    lead: [
      "Rachmistrz GT to program InsERT do prowadzenia księgi przychodów i rozchodów albo ewidencji podatku zryczałtowanego. Należy do linii InsERT GT, tej samej co Subiekt GT, i od lat pracuje w małych firmach oraz biurach rachunkowych. Obejmuje ewidencje VAT, środki trwałe, pojazdy, wynagrodzenia i deklaracje.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, także z linii GT. Rachmistrza GT zainstalujemy, skonfigurujemy i obejmiemy opieką, a jeśli rozważacie przejście na nexo – pomożemy ocenić, czy i kiedy ma to sens.",
    ],
    sections: [
      {
        title: "Dla kogo jest Rachmistrz GT",
        text: "Rachmistrz GT to wybór dla firm, które prowadzą księgowość uproszczoną i cenią program dobrze znany księgowym. Najczęściej pytają o niego przedsiębiorcy, którzy mają już Subiekta GT i chcą, żeby sprzedaż i księgowość działały w jednej linii programów. Druga grupa to biura rachunkowe oraz doradcy podatkowi, którzy pracują w GT od lat i dokupują kolejne stanowiska. Trzecia to małe firmy usługowe, w których właściciel sam prowadzi księgę i potrzebuje prostego narzędzia. Program prowadzi kartotekę wspólników z indywidualnymi ustawieniami rozliczeń z ZUS, więc obsłuży także firmę kilku osób. Jeżeli dopiero zaczynacie i nie macie żadnego programu InsERT, pokażemy Wam również nowszą linię nexo, żeby wybór był świadomy.",
        bullets: [
          "firmy na KPiR lub ryczałcie",
          "użytkownicy Subiekta GT",
          "biura rachunkowe i doradcy podatkowi pracujący w linii GT",
          "właściciele małych firm księgujący samodzielnie",
          "firmy z kilkoma wspólnikami",
          "osoby rozbudowujące istniejącą instalację GT",
        ],
      },
      {
        title: "Najważniejsze funkcje, które oferuje Rachmistrz GT",
        text: "Rachmistrz GT prowadzi księgę przychodów i rozchodów albo ewidencję ryczałtu – zależnie od formy, którą wybraliście z księgową. Obok niej są ewidencje VAT zakupów i sprzedaży, także dla transakcji unijnych, oraz możliwość ujęcia sprzedaży nieudokumentowanej rozliczanej strukturą zakupów. Program pamięta o środkach trwałych i wartościach niematerialnych: nalicza i księguje amortyzację, drukuje jej plan, prowadzi wyposażenie i remanenty. Dla pojazdów używanych służbowo dostępna jest ewidencja danych, rachunków eksploatacyjnych i przebiegu. Część płacowa jest rozbudowana: ewidencja osobowa, umowy o pracę i cywilnoprawne, rachunki do umów oraz wypłaty liczone według zdefiniowanych schematów wynagrodzeń. Składki ZUS wspólników mogą być automatycznie księgowane w koszty lub odliczane od dochodu, a zaliczka na podatek dochodowy jest wyliczana i dokumentowana raportem.",
        bullets: [
          "KPiR lub ewidencja podatku zryczałtowanego",
          "ewidencje VAT, w tym transakcje unijne",
          "środki trwałe, wyposażenie i remanenty",
          "ewidencja pojazdów i ich przebiegu",
          "wynagrodzenia: umowy, rachunki i wypłaty",
          "rozliczenia wspólników i zaliczki na podatek dochodowy",
        ],
      },
      {
        title: "Rachmistrz GT a inne programy InsERT, KSeF i e-deklaracje",
        text: "Rachmistrz GT wchodzi w skład linii InsERT GT razem z Subiektem GT, Rewizorem GT, Gratyfikantem GT i Gestorem GT. Najważniejsze połączenie to Subiekt GT: dokumenty sprzedaży i zakupu przechodzą do księgowości bez ponownego wpisywania. Przez opcję komunikacji program może też wymieniać dane z innymi systemami sprzedażowymi. W zakresie KSeF Rachmistrz pobiera faktury z systemu i pozwala nimi zarządzać, a wystawianie faktur ustrukturyzowanych i ich wysyłka to zadanie Subiekta GT. Deklaracje skarbowe program nalicza, drukuje i wysyła elektronicznie wraz z załącznikami, obsługuje też ich korekty. Pliki JPK_V7 w wariancie miesięcznym lub kwartalnym są wyliczane i wysyłane z programu. Deklaracje ZUS można wystawić na miejscu albo wyeksportować do Płatnika.",
        bullets: [
          "integracja z Subiektem GT",
          "wymiana danych z innymi systemami przez opcję komunikacji",
          "pobieranie faktur z KSeF",
          "elektroniczna wysyłka deklaracji skarbowych i ich korekt",
          "JPK_V7 w rozliczeniu miesięcznym lub kwartalnym",
          "deklaracje ZUS i eksport do Płatnika",
        ],
      },
      {
        title: "Czym Rachmistrz GT różni się od wersji nexo i od Rewizora",
        text: "Rachmistrz GT i Rachmistrz nexo robią w gruncie rzeczy to samo – obsługują księgę i ryczałt – ale pochodzą z dwóch różnych linii programów. GT jest linią starszą, o sprawdzonym układzie, dobrze znanym wielu księgowym. Nexo to linia nowsza, a w opisie producenta znajdziecie w niej między innymi sprawdzanie statusu kontrahentów w rejestrach, wbudowaną pocztę i SMS-y czy narzędzia związane z RODO. Wersja nexo PRO dodaje do tego własne raporty, pola i rozszerzenia. Linie nie mieszają się ze sobą: Rachmistrz GT współpracuje z Subiektem GT, a Rachmistrz nexo z Subiektem nexo. Rewizor GT to z kolei program do księgi handlowej, czyli pełnej księgowości. Doradzimy, którą linię wybrać w Waszej sytuacji.",
        bullets: [
          "GT i nexo: dwie odrębne linie programów",
          "GT współpracuje z Subiektem GT, nexo z Subiektem nexo",
          "nexo: nowsza linia z dodatkowymi narzędziami",
          "nexo PRO: własne raporty, pola i rozszerzenia",
          "Rewizor GT: pełna księgowość w linii GT",
          "pomoc w decyzji: zostać przy GT czy przejść na nexo",
        ],
      },
      {
        title: "Rachmistrz GT w OlekCodeTech – zakup, instalacja i opieka",
        text: "Rachmistrz GT kupicie u nas w cenie zgodnej z aktualnym cennikiem producenta, a o zakresie wdrożenia rozmawiamy na bezpłatnej 30-minutowej konsultacji. Program pracuje na bazie Microsoft SQL Server – instalujemy serwer, podłączamy stanowiska i ustawiamy pracę wielostanowiskową, jeśli księguje więcej niż jedna osoba. Konfigurujemy automatyczne kopie zapasowe i sprawdzamy, czy da się z nich odtworzyć bazę. Parametry firmy, ewidencje i wysyłkę deklaracji ustawiamy według wskazówek księgowej. Gdy zmieniacie komputer lub serwer, przenosimy program razem z danymi. Uczymy obsługi na Waszych dokumentach, a później pomagamy przy aktualizacjach i bieżących problemach. Przyjeżdżamy do firm w Wieluniu, Wieruszowie, Sieradzu, Kępnie i Kluczborku, a z pozostałymi pracujemy zdalnie.",
        bullets: [
          "licencja w cenie z cennika producenta",
          "instalacja serwera SQL i stanowisk",
          "kopie zapasowe z próbnym odtworzeniem",
          "konfiguracja według ustaleń księgowej",
          "przeniesienie na nowy komputer lub serwer",
          "szkolenie i stała opieka, na miejscu lub zdalnie",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Rachmistrz GT?",
        a: "Rachmistrz GT jest dla firm prowadzących księgę przychodów i rozchodów albo rozliczających się ryczałtem, zwłaszcza tych, które pracują już w linii InsERT GT, na przykład z Subiektem GT. Korzystają z niego właściciele małych firm księgujący samodzielnie oraz biura rachunkowe i doradcy podatkowi. Wyboru formy ewidencji dokonuje księgowa, my zajmujemy się programem.",
      },
      {
        q: "Czym Rachmistrz GT różni się od Rachmistrza nexo?",
        a: "Rachmistrz GT należy do starszej linii programów InsERT i współpracuje z Subiektem GT, a Rachmistrz nexo to nowsza linia działająca z Subiektem nexo. Oba służą do księgowości uproszczonej, różnią się natomiast interfejsem i zestawem dodatkowych narzędzi. Szczegółowe porównanie udostępnia producent, a my pomagamy przełożyć je na potrzeby konkretnej firmy.",
      },
      {
        q: "Czy Rachmistrz GT nadaje się dla biura rachunkowego?",
        a: "Tak, Rachmistrz GT jest używany przez biura rachunkowe i doradców podatkowych, a producent kieruje do nich osobną ofertę. Program prowadzi ewidencje, wynagrodzenia, deklaracje z wysyłką elektroniczną i pliki JPK_V7. Biuru, które dopiero wybiera oprogramowanie albo potrzebuje własnych raportów i rozszerzeń, pokazujemy też Rachmistrza nexo PRO, żeby można było porównać oba podejścia.",
      },
      {
        q: "Ile kosztuje Rachmistrz GT?",
        a: "Cena programu Rachmistrz GT jest zgodna z aktualnym cennikiem producenta. Do licencji dochodzi koszt wdrożenia, który zależy od liczby stanowisk, zakresu konfiguracji i tego, czy przenosimy program z innego komputera. Nie podajemy kwot w ciemno – po bezpłatnej 30-minutowej konsultacji dostajecie wycenę dopasowaną do tego, co rzeczywiście trzeba zrobić.",
      },
      {
        q: "Czy pomożecie wdrożyć program Rachmistrz GT lub przenieść dane?",
        a: "Tak. Instalujemy program Rachmistrz GT wraz z serwerem SQL, konfigurujemy stanowiska i kopie zapasowe, a ustawienia księgowe wprowadzamy według wskazówek księgowej. Przenosimy też istniejącą bazę na nowy komputer lub serwer. Jeśli myślicie o przejściu na linię nexo, najpierw sprawdzamy na kopii bazy, jak dane się przeniosą, i dopiero wtedy planujemy zmianę.",
      },
    ],
    related: [
      "rachmistrz-nexo",
      "rachmistrz-nexo-pro",
      "rewizor-gt",
      "programy-insert-nexo",
      "wsparcie-it-dla-biur-rachunkowych",
    ],
    keywords: [
      "Rachmistrz GT",
      "Rachmistrz GT KPiR",
      "Rachmistrz GT ryczałt",
      "Rachmistrz GT KSeF",
      "Rachmistrz GT instalacja",
      "Rachmistrz GT a Rachmistrz nexo",
    ],
  },

  // 4. Rewizor nexo
  {
    slug: "rewizor-nexo",
    navLabel: "Rewizor nexo",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Rewizor nexo",
      line: "nexo",
      image: "/images/insert/rewizor-nexo.webp",
      producerUrl:
        "https://www.insert.com.pl/programy_dla_firm/ksiegowosc_i_finanse/rewizor_nexo/opis.html",
    },
    title: "Rewizor nexo - pełna księgowość i księgi rachunkowe",
    metaTitle: "Rewizor nexo - pełna księgowość i księgi rachunkowe | OlekCodeTech",
    metaDescription:
      "Rewizor nexo to program do pełnej księgowości: plan kont, dekretacja, VAT, JPK, sprawozdania i KSeF. Sprzedaż, wdrożenie i opieka w OlekCodeTech z Wielunia.",
    eyebrow: "InsERT nexo · pełna księgowość",
    lead: [
      "Rewizor nexo to system finansowo-księgowy InsERT do prowadzenia ksiąg rachunkowych. Łączy plan kont, dekretację i księgowanie z ewidencjami VAT, środkami trwałymi, rozrachunkami, kasą i bankiem oraz sprawozdaniami finansowymi. Pracują w nim księgowi w firmach na pełnej księgowości i w biurach rachunkowych.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT. Rewizora nexo instalujemy, konfigurujemy z udziałem Waszej księgowej i obejmujemy opieką – w tym programie przygotowywaliśmy już schematy dekretacji dla biura rachunkowego.",
    ],
    sections: [
      {
        title: "Dla kogo jest Rewizor nexo",
        text: "Rewizor nexo jest narzędziem dla tych, którzy prowadzą księgi rachunkowe. Korzystają z niego spółki i inne firmy na pełnej księgowości, które mają własny dział księgowy albo jedną osobę odpowiedzialną za finanse. Drugą dużą grupą są biura rachunkowe obsługujące takich klientów. Program jest też przygotowany na sytuację, w której firma wyrasta z księgowości uproszczonej i przechodzi na księgi – tę zmianę da się przeprowadzić płynnie. Obsługuje deklaracje CIT dla osób prawnych oraz rozliczenia wspólników, więc pasuje do różnych form prawnych. Wspiera również centralne rozliczanie VAT, w którym jednostka podrzędna prowadzi ewidencję, a rozlicza się jednostka nadrzędna. O tym, czy pełna księgowość Was dotyczy, rozstrzyga księgowa.",
        bullets: [
          "spółki i firmy na pełnej księgowości",
          "działy księgowe i samodzielni główni księgowi",
          "biura rachunkowe prowadzące księgi rachunkowe",
          "firmy przechodzące z księgowości uproszczonej",
          "jednostki z centralnym rozliczaniem VAT",
          "praca na jednym stanowisku lub w sieci",
        ],
      },
      {
        title: "Najważniejsze funkcje, które ma Rewizor nexo",
        text: "Rewizor nexo porządkuje pracę księgowej od planu kont po sprawozdanie. Plan kont można wygenerować ze wzorca albo przenieść z poprzedniego okresu, konta kartotekowe zakładają się automatycznie, są też konta pozabilansowe. Dokumenty dzielą się na dekrety i polecenia księgowania i przechodzą przez kolejne stany – w przygotowaniu, zatwierdzony, zaksięgowany – co ułatwia kontrolę przed ostatecznym zapisem. Program obsługuje otwarcie i zamknięcie ksiąg oraz zapisy kwalifikowane do „13. miesiąca”, a także pilnuje kręgu kosztów. Do tego dochodzą rejestry VAT, środki trwałe z amortyzacją, pojazdy, kasa, rachunki bankowe i rozrachunki powiązane z zapisami na kontach. Sprawozdania finansowe można dostosować do własnych potrzeb. Powtarzalne dokumenty księgują się automatycznie według zdefiniowanych schematów.",
        bullets: [
          "plan kont ze wzorca lub z poprzedniego okresu",
          "dekrety, polecenia księgowania i stany dokumentów",
          "otwarcie i zamknięcie ksiąg, „13. miesiąc”",
          "kontrola kręgu kosztów",
          "rejestry VAT, środki trwałe, kasa, bank i rozrachunki",
          "sprawozdania finansowe i schematy automatycznej dekretacji",
        ],
      },
      {
        title: "Rewizor nexo a inne programy InsERT, KSeF i JPK",
        text: "Rewizor nexo jest jednym z programów pakietu InsERT nexo, obok Subiekta nexo, Rachmistrza nexo, Gratyfikanta nexo i Gestora nexo. Dokumenty ze sprzedaży prowadzonej w Subiekcie nexo albo w Subiekcie 123 mogą trafiać do księgowości i być dekretowane schematami, bez ręcznego przepisywania. W obszarze KSeF Rewizor pobiera faktury z systemu i umożliwia pracę na nich, a wystawianiem oraz wysyłką faktur ustrukturyzowanych zajmuje się Subiekt nexo. Program przygotowuje JPK_V7 i wysyła go do Ministerstwa Finansów, a księgi i dowody potrafi wygenerować do plików JPK, gdy poprosi o nie kontrola. Wystawia deklaracje dotyczące podatku dochodowego, CIT i VAT oraz deklaracje ZUS z eksportem do Płatnika. Status kontrahenta można sprawdzić w rejestrach bezpośrednio z programu.",
        bullets: [
          "wspólny pakiet InsERT nexo",
          "integracja z Subiektem nexo i Subiektem 123",
          "pobieranie faktur z KSeF",
          "JPK_V7 oraz pliki JPK z ksiąg i dowodów",
          "deklaracje podatkowe i ZUS, eksport do Płatnika",
          "weryfikacja kontrahentów: GUS, VIES, Biała lista",
        ],
      },
      {
        title: "Czym Rewizor nexo różni się od wersji PRO, GT i od Rachmistrza",
        text: "Rewizor nexo najłatwiej pomylić z trzema programami. Rachmistrz nexo służy do księgowości uproszczonej – księgi przychodów i rozchodów oraz ryczałtu – a Rewizor do ksiąg rachunkowych; to rozróżnienie wynika z formy ewidencji, nie z wielkości programu. Rewizor nexo PRO ma wszystko to, co wersja standardowa, i dodaje między innymi wielopoziomowe konta kartotekowe, magazyn walut, rozrachunki w ratach, rozliczenia wielowalutowe, warunkowe schematy dekretacji, pola własne oraz własne raporty i wydruki. Rewizor GT to program do pełnej księgowości ze starszej linii, współpracujący z Subiektem GT. W wersji standardowej nexo biblioteka załączników ma limit liczby plików. Na konsultacji sprawdzamy, czy Wasz sposób księgowania mieści się w standardzie, czy wymaga wersji PRO.",
        bullets: [
          "Rachmistrz nexo: księgowość uproszczona",
          "nexo PRO: wielopoziomowe konta kartotekowe",
          "nexo PRO: magazyn walut i rozliczenia wielowalutowe",
          "nexo PRO: warunkowa dekretacja, pola i raporty własne",
          "Rewizor GT: starsza linia programów",
          "standard: limit załączników w bibliotece plików",
        ],
      },
      {
        title: "Zakup i wdrożenie – Rewizor nexo w OlekCodeTech",
        text: "Rewizor nexo sprzedajemy w cenie zgodnej z aktualnym cennikiem producenta, a wdrożenie wyceniamy po bezpłatnej 30-minutowej konsultacji. Uruchomienie programu księgowego to przede wszystkim wspólna praca z księgową: ona decyduje o planie kont i zasadach księgowania, my przenosimy to do programu. Konfigurowaliśmy już w Rewizorze nexo schematy dekretacji dla biura rachunkowego, między innymi dla list płac. Od strony technicznej instalujemy serwer Microsoft SQL, ustawiamy stanowiska do pracy w sieci, uprawnienia użytkowników i automatyczne kopie zapasowe. Pomagamy przenieść dane z dotychczasowego programu i szkolimy zespół na Waszych dokumentach. Po starcie zostajemy jako opieka: aktualizacje, pomoc zdalna, zmiany w konfiguracji. Pracujemy na miejscu w Wieluniu i okolicy oraz zdalnie.",
        bullets: [
          "licencja według cennika producenta",
          "serwer SQL, stanowiska sieciowe i uprawnienia",
          "automatyczne kopie zapasowe",
          "plan kont i schematy dekretacji według ustaleń księgowej",
          "przeniesienie danych i szkolenie",
          "opieka po wdrożeniu, na miejscu i zdalnie",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Rewizor nexo?",
        a: "Rewizor nexo jest dla firm prowadzących księgi rachunkowe, czyli pełną księgowość, oraz dla biur rachunkowych, które obsługują takich klientów. Sprawdza się w spółkach z własnym działem księgowym i tam, gdzie księguje jedna osoba. Umożliwia też przejście z księgowości uproszczonej na księgi. O obowiązku prowadzenia pełnej księgowości rozstrzyga księgowa lub doradca.",
      },
      {
        q: "Czym Rewizor nexo różni się od Rachmistrza nexo?",
        a: "Rewizor nexo służy do pełnej księgowości: ma plan kont, dekrety, polecenia księgowania, zamknięcie okresu i sprawozdania finansowe. Rachmistrz nexo obsługuje księgowość uproszczoną, czyli księgę przychodów i rozchodów oraz ryczałt. Oba programy należą do tego samego pakietu i mają wiele wspólnych ewidencji, na przykład VAT, środki trwałe czy rozrachunki.",
      },
      {
        q: "Czy Rewizor nexo nadaje się dla biura rachunkowego?",
        a: "Tak, Rewizor nexo jest używany w biurach rachunkowych. Schematy automatycznej dekretacji przyspieszają księgowanie powtarzalnych dokumentów, a praca sieciowa pozwala działać kilku osobom naraz. Biura, które potrzebują wielopoziomowych kont kartotekowych, własnych raportów lub warunkowej dekretacji, powinny porównać go z wersją PRO. Mamy doświadczenie w konfiguracji schematów dekretacji w tym programie.",
      },
      {
        q: "Ile kosztuje Rewizor nexo?",
        a: "Licencja na program Rewizor nexo kosztuje tyle, ile wskazuje aktualny cennik producenta; cena zależy między innymi od liczby stanowisk. Osobno wyceniamy wdrożenie, bo jego zakres bywa różny – od samej instalacji po konfigurację planu kont, schematów dekretacji, przeniesienie danych i szkolenie. Wycenę przygotowujemy po bezpłatnej 30-minutowej konsultacji.",
      },
      {
        q: "Czy pomożecie wdrożyć program Rewizor nexo i przenieść dane?",
        a: "Tak. Instalujemy program Rewizor nexo i serwer SQL, ustawiamy pracę wielostanowiskową, uprawnienia i kopie zapasowe. Plan kont oraz schematy dekretacji wprowadzamy według ustaleń Waszej księgowej. Dane z poprzedniego systemu przenosimy po próbie na kopii bazy, żeby wcześniej wychwycić rozbieżności. Potem szkolimy użytkowników i zostajemy do dyspozycji w ramach opieki.",
      },
    ],
    related: [
      "rewizor-nexo-pro",
      "rewizor-gt",
      "rachmistrz-nexo",
      "gratyfikant-nexo",
      "wsparcie-it-dla-biur-rachunkowych",
    ],
    keywords: [
      "Rewizor nexo",
      "Rewizor nexo pełna księgowość",
      "Rewizor nexo KSeF",
      "Rewizor nexo wdrożenie",
      "Rewizor nexo schematy dekretacji",
      "Rewizor nexo Wieluń",
    ],
  },

  // 5. Rewizor nexo PRO
  {
    slug: "rewizor-nexo-pro",
    navLabel: "Rewizor nexo PRO",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Rewizor nexo PRO",
      line: "nexo PRO",
      image: "/images/insert/rewizor-nexo-pro.webp",
      producerUrl:
        "https://www.insert.com.pl/programy_dla_firm/ksiegowosc_i_finanse/rewizor_nexo_pro/opis.html",
    },
    title: "Rewizor nexo PRO - rozbudowany system pełnej księgowości",
    metaTitle: "Rewizor nexo PRO - rozbudowany system pełnej księgowości | OlekCodeTech",
    metaDescription:
      "Rewizor nexo PRO: pełna księgowość z wielopoziomowymi kontami, magazynem walut, własnymi raportami i Sferą. Sprzedaż, wdrożenie i opieka w OlekCodeTech.",
    eyebrow: "InsERT nexo PRO · pełna księgowość",
    lead: [
      "Rewizor nexo PRO to rozbudowana wersja systemu finansowo-księgowego InsERT, przeznaczona do prowadzenia ksiąg rachunkowych w małych i średnich firmach oraz w biurach rachunkowych. Oprócz pełnego zakresu Rewizora nexo daje otwarty, elastyczny program: z wielopoziomowymi kontami kartotekowymi, własnymi raportami, polami i rozszerzeniami.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT. Rewizora nexo PRO konfigurujemy razem z Waszą księgową, przenosimy dane, szkolimy zespół i opiekujemy się programem po uruchomieniu – na miejscu w Wieluniu i okolicy albo zdalnie.",
    ],
    sections: [
      {
        title: "Dla kogo jest Rewizor nexo PRO",
        text: "Rewizor nexo PRO powstał dla księgowych, którym standardowy program zaczyna być za ciasny. Dotyczy to firm na pełnej księgowości z rozbudowaną strukturą kosztów, wieloma walutami albo własnymi wymaganiami co do raportowania dla zarządu. Dotyczy też biur rachunkowych, które obsługują klientów o różnym profilu i chcą zautomatyzować księgowanie tak daleko, jak to możliwe. Trzecia grupa to przedsiębiorstwa łączące księgowość z innymi systemami – tu przydaje się otwartość programu i możliwość dopisania własnej logiki. Program działa na jednym stanowisku albo w sieci. Jeśli wahacie się między wersją standardową a PRO, zapytajcie księgową, czego jej brakuje w codziennej pracy – zwykle właśnie od tego zależy odpowiedź, a my pomożemy ją zweryfikować.",
        bullets: [
          "małe i średnie firmy na pełnej księgowości",
          "biura rachunkowe z różnorodnymi klientami",
          "firmy rozliczające się w wielu walutach",
          "działy finansowe potrzebujące własnych raportów",
          "przedsiębiorstwa z analityką opartą na własnych cechach",
          "organizacje planujące integracje i rozszerzenia",
        ],
      },
      {
        title: "Najważniejsze funkcje, które oferuje Rewizor nexo PRO",
        text: "Rewizor nexo PRO zawiera cały fundament wersji standardowej: plan kont, dekretację z podziałem na dekrety i polecenia księgowania, zamknięcie okresu, rejestry VAT, środki trwałe, kasę, bank, rozrachunki i deklaracje. Wersja PRO rozbudowuje analitykę i automatyzację. W planie kont można tworzyć wielopoziomowe konta kartotekowe, a kartoteki księgowe filtrować po polach własnych. Magazyn walut ewidencjonuje i rozlicza ruch środków na rachunkach walutowych; dostępne są też rozliczenia i kompensaty między walutami. Rozrachunki da się dzielić na raty i grupować we własne rodzaje, a sesje rozliczeniowe zapisują się automatycznie. Schematy dekretacji mogą reagować na dowolną cechę dokumentu. Do tego definiowalne transakcje VAT, własne typy amortyzacji, sesje kasowe oraz własne raporty i wydruki.",
        bullets: [
          "wielopoziomowe konta kartotekowe w planie kont",
          "kartoteki księgowe filtrowane po polach własnych",
          "magazyn walut, rozliczenia i kompensaty wielowalutowe",
          "rozrachunki ratalne i własne rodzaje rozrachunków",
          "warunkowe schematy dekretacji",
          "własne raporty, wydruki, typy amortyzacji i transakcje VAT",
        ],
      },
      {
        title: "Rewizor nexo PRO a inne programy InsERT, KSeF i JPK",
        text: "Rewizor nexo PRO działa w pakiecie InsERT nexo PRO razem z Subiektem, Rachmistrzem, Gratyfikantem i Gestorem w wersjach PRO. Współpraca z Subiektem nexo PRO oznacza, że dokumenty handlowe trafiają do księgowości i mogą być dekretowane automatycznie. Program jest zintegrowany z Krajowym Systemem e-Faktur, a wystawianie, przesyłanie i odbieranie faktur ustrukturyzowanych po stronie sprzedaży automatyzuje Subiekt nexo PRO. Rewizor obsługuje pliki JPK dotyczące ewidencji VAT i ich wysyłkę do Ministerstwa Finansów, a księgi oraz dowody generuje do plików JPK na potrzeby kontroli. Wystawia deklaracje podatkowe, w tym CIT, oraz deklaracje ZUS z eksportem do Płatnika. Własne raporty i wydruki można eksportować do innych programów nexo, a Sfera pozwala połączyć księgowość z zewnętrznym oprogramowaniem.",
        bullets: [
          "pakiet InsERT nexo PRO na wspólnych danych",
          "współpraca z Subiektem nexo PRO",
          "integracja z KSeF",
          "pliki JPK dla ewidencji VAT, ksiąg i dowodów",
          "deklaracje podatkowe i ZUS, eksport do Płatnika",
          "Sfera dla Rewizora i punkty rozszerzeń",
        ],
      },
      {
        title: "Czym Rewizor nexo PRO różni się od wersji standardowej, GT i Rachmistrza",
        text: "Rewizor nexo PRO i Rewizor nexo mają ten sam rdzeń księgowy, więc księgi rachunkowe poprowadzicie w obu. Różnica polega na tym, jak daleko można dopasować program: PRO dodaje wielopoziomowe konta kartotekowe, magazyn walut, raty, rozliczenia wielowalutowe, warunkową dekretację, pola i słowniki własne, definiowanie raportów oraz Sferę z punktami rozszerzeń. Rewizor GT to program do pełnej księgowości ze starszej linii, który współpracuje z Subiektem GT. Rachmistrz nexo PRO jest odpowiednikiem dla księgowości uproszczonej – księgi przychodów i rozchodów oraz ryczałtu – i wiele biur używa obu programów równolegle. Nie namawiamy na PRO na zapas: jeżeli z listy dodatków przyda się Wam jedna pozycja, policzymy razem, czy to wystarczający powód.",
        bullets: [
          "ten sam rdzeń księgowy co w wersji standardowej",
          "PRO: głębsza analityka kont i pola własne",
          "PRO: magazyn walut i rozliczenia wielowalutowe",
          "PRO: Sfera i punkty rozszerzeń",
          "Rewizor GT: starsza linia programów",
          "Rachmistrz nexo PRO: księgowość uproszczona",
        ],
      },
      {
        title: "Rewizor nexo PRO w OlekCodeTech – zakup i wdrożenie",
        text: "Rewizor nexo PRO kupicie u nas w cenie zgodnej z aktualnym cennikiem producenta. Wdrożenie zaczynamy od bezpłatnej 30-minutowej konsultacji i listy tego, co program ma automatyzować. Instalujemy serwer Microsoft SQL, przygotowujemy pracę wielostanowiskową, uprawnienia i automatyczne kopie zapasowe z okresowym testem odtwarzania. Strukturę planu kont, pola własne i schematy dekretacji ustawiamy według ustaleń księgowej – mamy za sobą konfigurację schematów dekretacji w Rewizorze nexo dla biura rachunkowego. Przenosimy dane z poprzedniego programu, szkolimy zespół i dokumentujemy ustawienia. Jesteśmy software housem, więc własne raporty czy rozwiązanie oparte na Sferze możemy zaprojektować i wykonać sami. Po starcie zapewniamy opiekę i pomoc zdalną. Dojeżdżamy do Wielunia, Wieruszowa, Sieradza, Kępna i Kluczborka.",
        bullets: [
          "licencja w cenie z cennika producenta",
          "serwer SQL, praca w sieci i uprawnienia",
          "kopie zapasowe z testem odtwarzania",
          "plan kont, pola własne i dekretacja według ustaleń księgowej",
          "przeniesienie danych i szkolenie",
          "indywidualne raporty, rozszerzenia i stała opieka",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Rewizor nexo PRO?",
        a: "Rewizor nexo PRO jest dla małych i średnich firm prowadzących pełną księgowość oraz dla biur rachunkowych, które potrzebują elastycznego, otwartego systemu. Sprawdza się przy rozbudowanej analityce kont, rozliczeniach w wielu walutach, własnych raportach i tam, gdzie księgowość ma współpracować z innym oprogramowaniem. Decyzję o wersji warto podjąć razem z księgową.",
      },
      {
        q: "Czym Rewizor nexo PRO różni się od Rewizora nexo?",
        a: "Rewizor nexo PRO ma pełną funkcjonalność Rewizora nexo, a dodatkowo między innymi wielopoziomowe konta kartotekowe, magazyn walut, rozrachunki ratalne, rozliczenia i kompensaty wielowalutowe, warunkowe schematy dekretacji, pola i słowniki własne, definiowanie raportów i wydruków oraz Sferę z punktami rozszerzeń. Zakres samych ksiąg rachunkowych jest w obu wersjach wspólny.",
      },
      {
        q: "Czy Rewizor nexo PRO nadaje się dla biura rachunkowego?",
        a: "Tak, producent wprost wskazuje biura rachunkowe jako odbiorców programu Rewizor nexo PRO. Warunkowa dekretacja i pola własne pozwalają ułożyć księgowanie pod różnych klientów, a praca sieciowa umożliwia działanie całego zespołu na jednej bazie. Dla klientów na księdze przychodów i rozchodów biura zwykle dobierają do niego Rachmistrza nexo PRO.",
      },
      {
        q: "Ile kosztuje Rewizor nexo PRO?",
        a: "Program Rewizor nexo PRO sprzedajemy w cenie zgodnej z aktualnym cennikiem producenta, zależnej między innymi od liczby stanowisk. Wdrożenie liczymy osobno: wpływa na nie zakres konfiguracji planu kont, liczba schematów dekretacji i raportów, migracja danych oraz szkolenie. Wycenę dostajecie po bezpłatnej 30-minutowej konsultacji, na której ustalamy potrzeby.",
      },
      {
        q: "Czy pomożecie wdrożyć program Rewizor nexo PRO i przenieść dane?",
        a: "Tak. Przy wdrożeniu programu Rewizor nexo PRO instalujemy serwer SQL, konfigurujemy stanowiska, uprawnienia i kopie zapasowe, a plan kont i schematy dekretacji ustawiamy według wskazań księgowej. Dane z dotychczasowego systemu przenosimy po wcześniejszej próbie na kopii bazy. Możemy też przygotować własne raporty lub rozszerzenie programu i przeszkolić zespół.",
      },
    ],
    related: [
      "rewizor-nexo",
      "rachmistrz-nexo-pro",
      "rewizor-gt",
      "gratyfikant-nexo",
      "wsparcie-it-dla-biur-rachunkowych",
    ],
    keywords: [
      "Rewizor nexo PRO",
      "Rewizor nexo PRO dla biura rachunkowego",
      "Rewizor nexo PRO pełna księgowość",
      "Rewizor nexo PRO KSeF",
      "Rewizor nexo PRO wdrożenie",
      "Rewizor nexo PRO Sfera",
    ],
  },
];
