import type { LandingPage } from "./types";

/**
 * Podstrony produktów InsERT (część 3): Rewizor GT, Gratyfikant nexo, Gratyfikant nexo PRO,
 * Gratyfikant GT, Portal Dokumentów.
 * Wymagania sieci sprzedaży InsERT: H1 = „Nazwa - przeznaczenie”, <title> = H1 + „ | OlekCodeTech”,
 * każdy nagłówek sekcji zawiera nazwę produktu, opisy napisane własnymi słowami, bez cen.
 */
export const insertProducts3: LandingPage[] = [
  // 1. Rewizor GT
  {
    slug: "rewizor-gt",
    navLabel: "Rewizor GT",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Rewizor GT",
      line: "GT",
      image: "/images/insert/rewizor-gt.webp",
      producerUrl:
        "https://www.insert.com.pl/programy_dla_firm/ksiegowosc_i_finanse/rewizor_gt/opis.html",
    },
    title: "Rewizor GT - program do pełnej księgowości dla firm i biur",
    metaTitle: "Rewizor GT - program do pełnej księgowości dla firm i biur | OlekCodeTech",
    metaDescription:
      "Rewizor GT to program do pełnej księgowości: plany kont, dekretacja, rozrachunki, VAT i środki trwałe. Sprzedaż, wdrożenie i opieka – OlekCodeTech, Wieluń.",
    eyebrow: "InsERT GT · pełna księgowość",
    lead: [
      "Rewizor GT to program finansowo-księgowy do prowadzenia ksiąg handlowych. Korzystają z niego małe i średnie firmy, które księgują u siebie, samodzielni księgowi oraz biura rachunkowe obsługujące wielu klientów. W jednym miejscu macie plan kont, dekrety, rozrachunki, ewidencje VAT, środki trwałe i sprawozdania.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, w tym Rewizora GT. Instalujemy program razem z serwerem SQL, ustawiamy pracę na kilku stanowiskach i kopie zapasowe, a potem zostajemy jako opieka IT. Pracujemy na miejscu w Wieluniu i okolicy oraz zdalnie.",
    ],
    sections: [
      {
        title: "Dla kogo jest Rewizor GT",
        text: "Rewizor GT wybierają przede wszystkim ci, którzy prowadzą pełną księgowość i chcą mieć ją pod własną kontrolą. W firmie sprawdza się wtedy, gdy księgowa pracuje na miejscu, a sprzedaż jest wystawiana w Subiekcie GT – dokumenty nie krążą wtedy między osobnymi systemami. W biurze rachunkowym liczy się co innego: jeden program obsługuje dowolną liczbę podmiotów, a plan kont przygotowany dla jednego klienta można przenieść do kolejnego. Z opinii publikowanych przez producenta wynika, że programu używają także fundacje i stowarzyszenia. Start ułatwia kreator wdrożeniowy, który prowadzi przez pierwsze ustawienia. Jeśli nie wiecie, czy pełne księgi są w Waszej sytuacji potrzebne, tę decyzję zostawcie księgowej – my zajmujemy się programem.",
        bullets: [
          "małe i średnie firmy z własną księgowością",
          "samodzielni księgowi",
          "biura rachunkowe prowadzące wiele podmiotów",
          "firmy pracujące już na Subiekcie GT",
          "organizacje, które przechodzą z ręcznego księgowania na program",
        ],
      },
      {
        title: "Co potrafi Rewizor GT – najważniejsze funkcje",
        text: "Rewizor GT obejmuje cały tok pracy przy księgach handlowych. Plan kont można wygenerować z wzorca albo przenieść z poprzedniego roku obrotowego, a konta kartotekowe powstają automatycznie po podłączeniu kartotek. Dokumenty dzielą się na dekrety i zapisy zaksięgowane, więc jest miejsce na sprawdzenie przed ostatecznym księgowaniem. Podczas dekretacji program sam tworzy rozrachunki i zapisy VAT, obsługuje też dekrety w walutach. Rozrachunki są powiązane z zapisami na kontach i mają pełną historię. Ewidencje VAT obejmują transakcje krajowe, wewnątrzwspólnotowe i pozaunijne, a pliki JPK_V7M oraz JPK_V7K program wylicza i wysyła. Do tego dochodzi pobieranie e-faktur z KSeF, ewidencja środków trwałych i wartości niematerialnych oraz definiowane sprawozdania i zestawienia.",
        bullets: [
          "plan kont z wzorca lub z poprzedniego roku, konta pozabilansowe",
          "dekretacja z automatycznymi rozrachunkami i zapisami VAT",
          "ewidencje VAT oraz pliki JPK_V7M i JPK_V7K",
          "pobieranie e-faktur z KSeF",
          "środki trwałe oraz wartości niematerialne i prawne",
          "sprawozdania, zestawienia finansowe i deklaracje skarbowe",
        ],
      },
      {
        title: "Rewizor GT a inne programy InsERT i wymiana danych",
        text: "Rewizor GT jest częścią systemu InsERT GT, w którym działają także Subiekt GT do sprzedaży, Gratyfikant GT do kadr i płac oraz Gestor GT do relacji z klientami. Najwięcej zyskują firmy pracujące równocześnie na Subiekcie GT i Rewizorze GT: rozrachunki są wspólne dla obu programów, a dokumenty handlowe trafiają do modułu „Dokumenty do dekretacji”, skąd księgowa zamienia je na dekrety. Dekrety mogą powstawać automatycznie – przez dekretację kontekstową albo import oparty na schematach. Biuro rachunkowe może wczytać dokumenty z pliku przygotowanego w Subiekcie GT działającym u klienta. Podstawową obsługę płac zapewnia dołączany do programu mikroGratyfikant GT. Rewizor GT współpracuje też z Portalem Dokumentów, przez który klienci przesyłają skany i zdjęcia faktur.",
        bullets: [
          "wspólne rozrachunki z Subiektem GT",
          "moduł „Dokumenty do dekretacji” dla dokumentów z Subiekta GT",
          "dekretacja kontekstowa i import według schematów",
          "import dokumentów z pliku od klienta biura rachunkowego",
          "mikroGratyfikant GT do podstawowej obsługi płac",
          "współpraca z Portalem Dokumentów",
        ],
      },
      {
        title: "Rewizor GT a Rewizor nexo i nexo PRO – czym się różnią",
        text: "Rewizor GT należy do linii InsERT GT, a Rewizor nexo i Rewizor nexo PRO do linii InsERT nexo. To osobne rodziny programów i każda z nich łączy się przede wszystkim z programami ze swojej linii. Dlatego pierwsze pytanie brzmi: na czym pracuje reszta firmy albo klienci biura? Jeśli sprzedaż prowadzicie w Subiekcie GT, Rewizor GT jest naturalnym uzupełnieniem. Jeśli budujecie system od zera, warto porównać go z wersjami nexo – producent udostępnia szczegółowe zestawienie różnic i przechodzimy przez nie razem na konsultacji. Samego Rewizora GT można rozbudować pakietami rozszerzeń PLUS dla InsERT GT, a nietypowe potrzeby obsługuje dodatek Sfera dla Rewizora GT. Nie namawiamy do zmiany linii, jeśli obecna dobrze Wam służy.",
        bullets: [
          "Rewizor GT – linia InsERT GT, razem z Subiektem GT i Gratyfikantem GT",
          "Rewizor nexo i nexo PRO – linia InsERT nexo",
          "wybór zależy od programów, na których już pracujecie",
          "pakiety rozszerzeń PLUS dla InsERT GT",
          "Sfera dla Rewizora GT do rozwiązań indywidualnych",
        ],
      },
      {
        title: "Zakup i wdrożenie – Rewizor GT w OlekCodeTech",
        text: "Rewizor GT kupicie u nas razem z wdrożeniem. Program pracuje na bazie Microsoft SQL Server, na jednym komputerze albo w sieci, więc zaczynamy od instalacji serwera SQL i ustawienia stanowisk tak, by kilka osób mogło księgować jednocześnie. Od pierwszego dnia konfigurujemy automatyczne kopie zapasowe, a w biurze rachunkowym – archiwizację wszystkich podmiotów. Plan kont, schematy importu i sposób dekretacji ustawiamy według ustaleń księgowej; podobne schematy dekretacji, między innymi dla list płac, konfigurowaliśmy w Rewizorze nexo dla biura rachunkowego. Pomagamy przenieść dane, szkolimy użytkowników i zostajemy jako opieka IT. Zaczynamy od bezpłatnej 30-minutowej konsultacji. Działamy na miejscu w Wieluniu, Wieruszowie, Sieradzu, Kępnie i Kluczborku, a poza tym zdalnie.",
        bullets: [
          "sprzedaż licencji w cenie zgodnej z cennikiem producenta",
          "instalacja programu i serwera SQL, praca wielostanowiskowa",
          "automatyczne kopie zapasowe i archiwizacja podmiotów",
          "konfiguracja według ustaleń księgowej",
          "przeniesienie danych i szkolenie użytkowników",
          "opieka po wdrożeniu – na miejscu i zdalnie",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Rewizor GT?",
        a: "Rewizor GT jest dla firm prowadzących pełną księgowość we własnym zakresie, dla samodzielnych księgowych i dla biur rachunkowych. Biura docenią obsługę dowolnej liczby podmiotów i przenoszenie planów kont między nimi. W firmie program najlepiej sprawdza się w parze z Subiektem GT, bo dokumenty sprzedaży trafiają wtedy prosto do dekretacji.",
      },
      {
        q: "Czym różni się Rewizor GT od Rewizora nexo?",
        a: "Rewizor GT należy do linii InsERT GT, a Rewizor nexo do linii InsERT nexo – to dwie osobne rodziny programów. Każdy z nich współpracuje głównie z programami własnej linii, więc wybór zależy od tego, na czym pracuje reszta firmy. Szczegółowe porównanie funkcji publikuje producent; omawiamy je z Wami na konsultacji, zanim cokolwiek kupicie.",
      },
      {
        q: "Czy Rewizor GT współpracuje z Subiektem GT?",
        a: "Tak. Rewizor GT i Subiekt GT mają wspólne rozrachunki, a dokumenty wystawione w Subiekcie GT pojawiają się w Rewizorze w module „Dokumenty do dekretacji”. Biuro rachunkowe może też wczytać dokumenty z pliku przygotowanego w Subiekcie GT działającym u klienta. Przy wdrożeniu ustawiamy to połączenie i sprawdzamy je na Waszych dokumentach.",
      },
      {
        q: "Ile kosztuje Rewizor GT?",
        a: "Cena licencji na program Rewizor GT jest zgodna z aktualnym cennikiem producenta i zależy między innymi od liczby stanowisk oraz podmiotów. Wdrożenie wyceniamy osobno, bo inaczej wygląda instalacja na jednym komputerze, a inaczej praca kilku osób w sieci z przeniesieniem danych. Konkretną kwotę podajemy po bezpłatnej 30-minutowej konsultacji.",
      },
      {
        q: "Czy pomożecie wdrożyć Rewizor GT i przenieść dane?",
        a: "Tak. Instalujemy program i serwer SQL, konfigurujemy stanowiska oraz kopie zapasowe, a plan kont i schematy ustawiamy według wskazań księgowej. Zakres przenoszonych danych ustalamy wcześniej i sprawdzamy na kopii, żebyście wiedzieli, co przejdzie automatycznie, a co trzeba uzupełnić ręcznie. Na koniec szkolimy osoby, które będą w programie pracować.",
      },
    ],
    related: [
      "rewizor-nexo",
      "rewizor-nexo-pro",
      "gratyfikant-gt",
      "portal-dokumentow",
      "wsparcie-it-dla-biur-rachunkowych",
    ],
    keywords: [
      "Rewizor GT",
      "Rewizor GT program księgowy",
      "Rewizor GT pełna księgowość",
      "Rewizor GT dla biura rachunkowego",
      "Rewizor GT wdrożenie",
      "Rewizor GT Wieluń",
    ],
  },

  // 2. Gratyfikant nexo
  {
    slug: "gratyfikant-nexo",
    navLabel: "Gratyfikant nexo",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Gratyfikant nexo",
      line: "nexo",
      image: "/images/insert/gratyfikant-nexo.webp",
      producerUrl:
        "https://www.insert.com.pl/programy_dla_firm/kadry_i_place/gratyfikant_nexo/opis.html",
    },
    title: "Gratyfikant nexo - program kadrowo-płacowy dla firm",
    metaTitle: "Gratyfikant nexo - program kadrowo-płacowy dla firm | OlekCodeTech",
    metaDescription:
      "Gratyfikant nexo to program do kadr i płac: umowy, czas pracy, listy płac, deklaracje PIT, ZUS i PPK. Sprzedaż, wdrożenie i opieka – OlekCodeTech z Wielunia.",
    eyebrow: "InsERT nexo · kadry i płace",
    lead: [
      "Gratyfikant nexo to program do obsługi kadr i płac w małych i średnich firmach. Prowadzi kartoteki pracowników, umowy o pracę i umowy cywilnoprawne, pomaga zaplanować i naliczyć wynagrodzenia, a na koniec przygotowuje rozliczenia z urzędem skarbowym, ZUS i PPK. Dużo czynności jest zautomatyzowanych, a sam program da się szeroko skonfigurować.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, także Gratyfikanta nexo. Instalujemy go, ustawiamy według wskazań Waszej kadrowej, szkolimy użytkowników i opiekujemy się programem po wdrożeniu – na miejscu w Wieluniu i okolicy albo zdalnie.",
    ],
    sections: [
      {
        title: "Dla kogo jest Gratyfikant nexo",
        text: "Gratyfikant nexo jest przeznaczony dla małych i średnich firm, które zatrudniają ludzi i same prowadzą sprawy kadrowo-płacowe. Przyda się zarówno tam, gdzie jest kilku pracowników na umowie o pracę, jak i tam, gdzie dochodzą zleceniobiorcy, praca w akordzie, prowizje czy różne systemy czasu pracy. Osoba zajmująca się kadrami zaczyna dzień od strony głównej programu, która pokazuje bieżący stan rozliczeń. Program pilnuje też spraw, o których łatwo zapomnieć – po rozwiązaniu umowy przypomni na przykład o świadectwie pracy, informacji PIT-11 i wyrejestrowaniu z ubezpieczeń. Jeśli kadry i płace prowadzi za Was biuro rachunkowe, własny program zwykle nie jest konieczny; warto to ustalić przed zakupem.",
        bullets: [
          "małe i średnie firmy naliczające płace we własnym zakresie",
          "firmy z pracownikami etatowymi i zleceniobiorcami",
          "zakłady rozliczające akord, prowizje lub potrącenia komornicze",
          "firmy z różnymi systemami i okresami rozliczania czasu pracy",
          "osoby, które chcą mieć przypomnienia o obowiązkach kadrowych",
        ],
      },
      {
        title: "Co potrafi Gratyfikant nexo – najważniejsze funkcje",
        text: "Gratyfikant nexo łączy część kadrową z płacową. W ewidencji osobowej dane pracownika są pogrupowane tematycznie, a umowy o pracę i cywilnoprawne prowadzi się razem z aneksami. Program ma gotowe wydruki kadrowe – umowy, świadectwa, zaświadczenia, skierowania – i pozwala tworzyć własne wzorce. Czas pracy można zaplanować, a potem zaewidencjonować: godziny przepracowane, nadgodziny, godziny nocne, urlopy, zwolnienia lekarskie i inne nieobecności. Wynagrodzenia buduje się ze składników płacowych, których wartości ustawia się dla całej firmy, działu lub konkretnej osoby. Listy płac powstają w kreatorze, a analizator wypłaty pokazuje krok po kroku, skąd wzięła się każda kwota. Program obsługuje również delegacje krajowe i zagraniczne oraz bankowość elektroniczną.",
        bullets: [
          "ewidencja osobowa, umowy o pracę i cywilnoprawne z aneksami",
          "planowanie i ewidencja czasu pracy, urlopy i zwolnienia",
          "składniki płacowe ustawiane globalnie, dla działu lub pracownika",
          "kreator naliczania wynagrodzeń i analizator wypłaty",
          "delegacje krajowe i zagraniczne",
          "obsługa RODO: zgody, obowiązki informacyjne, anonimizacja",
        ],
      },
      {
        title: "Gratyfikant nexo a inne programy InsERT i wymiana danych",
        text: "Gratyfikant nexo należy do linii InsERT nexo, tej samej, w której działają programy księgowe Rewizor nexo i Rachmistrz nexo oraz Subiekt nexo. Sposób powiązania płac z księgowością zależy od tego, kto i w czym księguje, dlatego ustalamy go z księgową na etapie wdrożenia. Sam program wymienia dane także z otoczeniem firmy. Deklaracje skarbowe, między innymi PIT-4R, PIT-8AR i PIT-11, można naliczyć, wydrukować i wysłać elektronicznie. Deklaracje zgłoszeniowe i rozliczeniowe ZUS trafiają do programu Płatnik, a dla PPK powstają raporty zgłoszeniowe i raporty z wpłatami. Przelewy wynagrodzeń ułatwia bankowość elektroniczna. Pracownicy mogą zajrzeć do swoich danych przez Portal pracownika, dostępny w przeglądarce internetowej z dowolnego miejsca.",
        bullets: [
          "ta sama linia InsERT nexo co Rewizor nexo, Rachmistrz nexo i Subiekt nexo",
          "elektroniczna wysyłka deklaracji skarbowych",
          "deklaracje ZUS we współpracy z programem Płatnik",
          "raporty zgłoszeniowe i raporty wpłat do PPK",
          "bankowość elektroniczna",
          "Portal pracownika dostępny przez przeglądarkę",
        ],
      },
      {
        title: "Gratyfikant nexo a wersja nexo PRO i GT – czym się różnią",
        text: "Gratyfikant nexo to wersja standardowa. Gratyfikant nexo PRO zawiera wszystko to samo, a dodatkowo rozwiązania dla firm, które chcą program rozbudowywać: pola i słowniki własne, własne raporty i wydruki, wielopoziomową strukturę organizacyjną, szerszą obsługę umów cywilnoprawnych oraz możliwość dopisywania indywidualnych rozwiązań. Producent kieruje wersję PRO także do biur rachunkowych. Gratyfikant GT to z kolei program z linii InsERT GT, zintegrowany z Rewizorem GT i Rachmistrzem GT – ma sens głównie tam, gdzie reszta firmy pracuje na programach GT. Jedna rzecz, o której warto wiedzieć w wersji standardowej: biblioteka załączników, w której przechowuje się na przykład umowy w PDF, ma ograniczoną liczbę plików. Na konsultacji mówimy wprost, kiedy wersja standardowa wystarczy.",
        bullets: [
          "Gratyfikant nexo – pełna obsługa kadr i płac w wersji standardowej",
          "Gratyfikant nexo PRO – dodatkowo pola własne, własne raporty i rozszerzenia",
          "Gratyfikant nexo PRO – szersza obsługa umów cywilnoprawnych",
          "Gratyfikant GT – linia InsERT GT, w parze z Rewizorem GT lub Rachmistrzem GT",
          "wybór wersji po rozmowie o tym, jak naliczacie płace",
        ],
      },
      {
        title: "Zakup i wdrożenie – Gratyfikant nexo w OlekCodeTech",
        text: "Gratyfikant nexo kupicie u nas razem z wdrożeniem. Instalujemy program i serwer SQL, na którym stoi baza danych, oraz ustawiamy pracę wielostanowiskową, jeśli z programu korzysta więcej niż jedna osoba. Dane kadrowe są wrażliwe, dlatego od razu konfigurujemy automatyczne kopie zapasowe i uprawnienia użytkowników. Składniki płacowe, kalendarze i wzorce wydruków ustawiamy według ustaleń Waszej kadrowej lub księgowej – my odpowiadamy za program, nie za decyzje kadrowe. Pomagamy przenieść dane z dotychczasowego rozwiązania i szkolimy na Waszych przykładach. Po wdrożeniu zostajemy jako opieka: aktualizacje, pomoc zdalna, nowe stanowiska. Zaczynamy od bezpłatnej 30-minutowej konsultacji. Przyjeżdżamy do firm w Wieluniu, Wieruszowie, Sieradzu, Kępnie i Kluczborku, pozostałe obsługujemy zdalnie.",
        bullets: [
          "licencja w cenie zgodnej z cennikiem producenta",
          "instalacja programu i serwera SQL, praca wielostanowiskowa",
          "kopie zapasowe i uprawnienia użytkowników",
          "konfiguracja według ustaleń kadrowej lub księgowej",
          "przeniesienie danych i szkolenie",
          "opieka po wdrożeniu – na miejscu i zdalnie",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Gratyfikant nexo?",
        a: "Gratyfikant nexo jest dla małych i średnich firm, które same prowadzą kadry i naliczają wynagrodzenia. Obsługuje pracowników na umowie o pracę i zleceniobiorców, różne systemy czasu pracy, akordy, prowizje i potrącenia komornicze. Jeśli płace prowadzi za Was biuro rachunkowe, najpierw warto ustalić z nim, czy własny program jest w ogóle potrzebny.",
      },
      {
        q: "Czym różni się Gratyfikant nexo od Gratyfikanta nexo PRO?",
        a: "Gratyfikant nexo PRO ma całą funkcjonalność wersji standardowej i dodatkowe możliwości rozbudowy: pola oraz słowniki własne, własne raporty i wydruki, wielopoziomową strukturę organizacyjną, szerszą obsługę umów cywilnoprawnych i dopisywanie indywidualnych rozwiązań. Jeśli nie potrzebujecie takich dostosowań, Gratyfikant nexo zwykle w zupełności wystarcza – sprawdzamy to z Wami na konsultacji.",
      },
      {
        q: "Czy Gratyfikant nexo współpracuje z innymi programami InsERT?",
        a: "Gratyfikant nexo należy do linii InsERT nexo, tak jak Rewizor nexo, Rachmistrz nexo i Subiekt nexo. Sposób powiązania płac z księgowością ustalamy z księgową podczas wdrożenia. Poza tym program współpracuje z Płatnikiem przy deklaracjach ZUS, wysyła elektronicznie deklaracje skarbowe i udostępnia pracownikom dane przez Portal pracownika.",
      },
      {
        q: "Ile kosztuje Gratyfikant nexo?",
        a: "Cena licencji na program Gratyfikant nexo jest zgodna z aktualnym cennikiem producenta. Wdrożenie wyceniamy osobno, ponieważ zależy od liczby stanowisk, sposobu naliczania wynagrodzeń i tego, czy przenosimy dane z poprzedniego programu. Kwotę podajemy po bezpłatnej 30-minutowej konsultacji, na której ustalamy, czego faktycznie potrzebujecie.",
      },
      {
        q: "Czy pomożecie wdrożyć Gratyfikant nexo i przenieść dane pracowników?",
        a: "Tak. Instalujemy program i serwer SQL, ustawiamy uprawnienia oraz kopie zapasowe, a składniki płacowe i kalendarze konfigurujemy według wskazań Waszej kadrowej. Zakres przenoszonych danych ustalamy przed rozpoczęciem prac i sprawdzamy wynik razem z osobą prowadzącą kadry. Szkolenie prowadzimy na Waszych danych, na miejscu albo zdalnie.",
      },
    ],
    related: [
      "gratyfikant-nexo-pro",
      "gratyfikant-gt",
      "rewizor-nexo",
      "rachmistrz-nexo",
      "programy-insert-nexo",
    ],
    keywords: [
      "Gratyfikant nexo",
      "Gratyfikant nexo kadry i płace",
      "Gratyfikant nexo program kadrowo-płacowy",
      "Gratyfikant nexo wdrożenie",
      "Gratyfikant nexo cena",
      "Gratyfikant nexo Wieluń",
    ],
  },

  // 3. Gratyfikant nexo PRO
  {
    slug: "gratyfikant-nexo-pro",
    navLabel: "Gratyfikant nexo PRO",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Gratyfikant nexo PRO",
      line: "nexo PRO",
      image: "/images/insert/gratyfikant-nexo-pro.webp",
      producerUrl:
        "https://www.insert.com.pl/programy_dla_firm/kadry_i_place/gratyfikant_nexo_pro/opis.html",
    },
    title: "Gratyfikant nexo PRO - rozbudowane kadry i płace dla firm i biur",
    metaTitle: "Gratyfikant nexo PRO - rozbudowane kadry i płace dla firm i biur | OlekCodeTech",
    metaDescription:
      "Gratyfikant nexo PRO to kadry i płace z polami własnymi, własnymi raportami i Sferą. Dla firm i biur rachunkowych. Sprzedaż i wdrożenie – OlekCodeTech, Wieluń.",
    eyebrow: "InsERT nexo PRO · kadry i płace",
    lead: [
      "Gratyfikant nexo PRO to rozszerzona wersja programu kadrowo-płacowego Gratyfikant nexo. Robi wszystko to, co wersja standardowa, a dodatkowo pozwala dopasować program do firmy: opisywać dane własnymi polami, budować własne raporty i dopisywać indywidualne rozwiązania. Jest przeznaczony dla małych i średnich firm oraz biur rachunkowych, którym zwykły program przestaje wystarczać.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, w tym Gratyfikanta nexo PRO. Jesteśmy też firmą programistyczną, więc oprócz instalacji i konfiguracji możemy przygotować dostosowania, do których wersja PRO została stworzona. Pracujemy na miejscu w Wieluniu i okolicy oraz zdalnie.",
    ],
    sections: [
      {
        title: "Dla kogo jest Gratyfikant nexo PRO",
        text: "Gratyfikant nexo PRO jest dla firm i biur rachunkowych, które potrzebują otwartego, elastycznego systemu kadrowo-płacowego. Typowe sygnały, że to właściwa wersja: rozbudowana struktura z wieloma działami, wielu zleceniobiorców rozliczanych podobnie jak pracownicy etatowi, nietypowe składniki wynagrodzenia albo potrzeba raportów, których nie ma w standardzie. Biuro rachunkowe prowadzące kadry i płace klientów może dzięki temu obsłużyć firmy o różnych zasadach wynagradzania. W opiniach publikowanych przez producenta użytkownicy opisują też powiązanie programu z rejestracją czasu pracy i własnymi narzędziami firmy. Jeżeli naliczacie proste wynagrodzenia dla kilku osób, wersja PRO będzie raczej na wyrost – wtedy uczciwie polecimy wersję standardową.",
        bullets: [
          "firmy z rozbudowaną strukturą organizacyjną",
          "biura rachunkowe prowadzące kadry i płace klientów",
          "firmy z wieloma umowami cywilnoprawnymi",
          "zakłady z nietypowymi składnikami wynagrodzeń",
          "firmy, które chcą połączyć kadry z własnymi systemami",
        ],
      },
      {
        title: "Co potrafi Gratyfikant nexo PRO – najważniejsze funkcje",
        text: "Podstawą jest pełna obsługa kadr i płac: ewidencja osobowa, umowy o pracę i cywilnoprawne z aneksami, planowanie i ewidencja czasu pracy, urlopy, zwolnienia, delegacje, listy płac tworzone w kreatorze oraz analizator wypłaty, który tłumaczy każdą wyliczoną kwotę. Gratyfikant nexo PRO dokłada do tego warstwę dostosowań. Pola i słowniki własne pozwalają opisywać dane po swojemu i analizować je według własnych kryteriów. Flagi własne oznaczają na przykład wybrane umowy o pracę. Można definiować własne raporty, wydruki, widoki w modułach i role użytkowników. Składniki definiowalne mogą odwoływać się do wartości z bieżących i wcześniejszych wypłat, a strukturę firmy da się odwzorować na wielu poziomach.",
        bullets: [
          "pełna obsługa kadr, czasu pracy i wynagrodzeń",
          "pola, słowniki i flagi własne",
          "własne raporty, wydruki i dedykowane widoki",
          "własne role użytkowników",
          "składniki płacowe sięgające do wcześniejszych wypłat",
          "wielopoziomowa struktura organizacyjna",
        ],
      },
      {
        title: "Gratyfikant nexo PRO a inne programy InsERT i wymiana danych",
        text: "Gratyfikant nexo PRO należy do linii InsERT nexo PRO. Zdefiniowane w nim raporty i wydruki można eksportować do innych programów InsERT nexo, co ułatwia utrzymanie jednego standardu dokumentów. Na zewnątrz program komunikuje się tak jak wersja standardowa: deklaracje skarbowe wysyła elektronicznie, deklaracje ZUS przygotowuje we współpracy z programem Płatnik, tworzy raporty dla PPK i obsługuje bankowość elektroniczną. Pracownicy mają wgląd w swoje dane przez Portal pracownika w przeglądarce. Największa różnica to otwartość: Sfera dla Gratyfikanta i punkty rozszerzeń pozwalają dopisać własne algorytmy, na przykład składniki płacowe lub wtyczki łączące kadry z innym systemem. Producent ma też w ofercie aplikację Portal HR do spraw takich jak zgłaszanie nieobecności.",
        bullets: [
          "eksport własnych raportów i wydruków do innych programów InsERT nexo",
          "Sfera dla Gratyfikanta – tworzenie własnych rozwiązań",
          "punkty rozszerzeń dla własnych algorytmów i wtyczek",
          "współpraca z programem Płatnik i raporty PPK",
          "elektroniczna wysyłka deklaracji skarbowych",
          "Portal pracownika w przeglądarce",
        ],
      },
      {
        title: "Gratyfikant nexo PRO a wersja standardowa i GT – czym się różnią",
        text: "Najprościej: Gratyfikant nexo PRO to Gratyfikant nexo plus narzędzia do rozbudowy. Tylko w wersji PRO umowy cywilnoprawne mogą mieć własny kalendarz i ewidencję czasu pracy, absencje, dostęp do ewidencji naliczeń i potrąceń oraz dowolne składniki płacowe. Tylko tu są pola, słowniki i flagi własne, własne role użytkowników, wielopoziomowa struktura organizacyjna oraz Sfera z punktami rozszerzeń. Codzienna obsługa – kartoteki, czas pracy, listy płac, deklaracje – wygląda w obu wersjach tak samo, więc przejście ze standardu nie wymaga nauki od nowa. Gratyfikant GT to osobny program z linii InsERT GT, powiązany z Rewizorem GT i Rachmistrzem GT; wybiera się go głównie wtedy, gdy cała firma pracuje na programach GT.",
        bullets: [
          "Gratyfikant nexo PRO – szersza obsługa umów cywilnoprawnych",
          "pola, słowniki i flagi własne tylko w wersji PRO",
          "Sfera i punkty rozszerzeń tylko w wersji PRO",
          "wielopoziomowa struktura organizacyjna w wersji PRO",
          "wspólna z wersją standardową codzienna obsługa kadr i płac",
          "Gratyfikant GT – osobna linia InsERT GT",
        ],
      },
      {
        title: "Zakup i wdrożenie – Gratyfikant nexo PRO w OlekCodeTech",
        text: "Gratyfikant nexo PRO kupicie u nas razem z wdrożeniem, które przy tej wersji zaczyna się od rozmowy o tym, co chcecie dostosować. Instalujemy program i serwer SQL, ustawiamy pracę wielostanowiskową, role użytkowników oraz automatyczne kopie zapasowe bazy. Strukturę organizacyjną, składniki płacowe, pola własne i wzorce wydruków konfigurujemy według ustaleń kadrowej lub księgowej. Jeśli potrzebne jest rozwiązanie indywidualne, na przykład połączenie z innym systemem w firmie, wyceniamy je osobno jako pracę programistyczną. Pomagamy przenieść dane, także z wersji standardowej, szkolimy użytkowników i zostajemy jako opieka IT. Zaczynamy od bezpłatnej 30-minutowej konsultacji. Na miejscu działamy w Wieluniu, Wieruszowie, Sieradzu, Kępnie i Kluczborku, a zdalnie – w całej Polsce.",
        bullets: [
          "licencja w cenie zgodnej z cennikiem producenta",
          "instalacja programu i serwera SQL, praca wielostanowiskowa",
          "role użytkowników i kopie zapasowe",
          "konfiguracja według ustaleń kadrowej lub księgowej",
          "indywidualne dostosowania wyceniane osobno",
          "przeniesienie danych, szkolenie i opieka",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Gratyfikant nexo PRO?",
        a: "Gratyfikant nexo PRO jest dla małych i średnich firm oraz biur rachunkowych, które potrzebują elastycznego programu kadrowo-płacowego. Sprawdza się przy rozbudowanej strukturze, wielu umowach cywilnoprawnych, nietypowych składnikach wynagrodzeń i tam, gdzie kadry mają być połączone z innymi narzędziami w firmie. Przy prostych płacach zwykle wystarczy wersja standardowa.",
      },
      {
        q: "Czym różni się Gratyfikant nexo PRO od Gratyfikanta nexo?",
        a: "Gratyfikant nexo PRO zawiera pełną funkcjonalność wersji standardowej oraz dodatki: pola, słowniki i flagi własne, własne raporty i role użytkowników, wielopoziomową strukturę organizacyjną, szerszą obsługę umów cywilnoprawnych, a także Sferę i punkty rozszerzeń do tworzenia własnych rozwiązań. Codzienna praca w obu wersjach wygląda tak samo.",
      },
      {
        q: "Czy Gratyfikant nexo PRO współpracuje z innymi programami InsERT?",
        a: "Tak. Gratyfikant nexo PRO należy do linii InsERT nexo PRO, a zdefiniowane w nim raporty i wydruki można eksportować do innych programów InsERT nexo. Pracownicy korzystają z Portalu pracownika w przeglądarce. Program współpracuje też z Płatnikiem. Sposób powiązania płac z programem księgowym ustalamy z księgową podczas wdrożenia.",
      },
      {
        q: "Ile kosztuje Gratyfikant nexo PRO?",
        a: "Cena licencji na program Gratyfikant nexo PRO jest zgodna z aktualnym cennikiem producenta. Osobno wyceniamy wdrożenie, a jeśli zamawiacie indywidualne rozszerzenia – również pracę programistyczną. Zakres bywa bardzo różny, dlatego kwotę podajemy dopiero po bezpłatnej 30-minutowej konsultacji, na której spisujemy Wasze potrzeby.",
      },
      {
        q: "Czy pomożecie wdrożyć Gratyfikant nexo PRO i przenieść dane?",
        a: "Tak. Instalujemy program i serwer SQL, konfigurujemy role, strukturę organizacyjną i kopie zapasowe, a składniki płacowe ustawiamy według wskazań kadrowej. Pomagamy przenieść dane z dotychczasowego rozwiązania, także z wersji standardowej, i sprawdzamy wynik razem z osobą prowadzącą kadry. Szkolimy na miejscu w Wieluniu i okolicy albo zdalnie.",
      },
    ],
    related: [
      "gratyfikant-nexo",
      "gratyfikant-gt",
      "rewizor-nexo-pro",
      "programy-insert-nexo",
      "wsparcie-it-dla-biur-rachunkowych",
    ],
    keywords: [
      "Gratyfikant nexo PRO",
      "Gratyfikant nexo PRO kadry i płace",
      "Gratyfikant nexo PRO dla biura rachunkowego",
      "Gratyfikant nexo PRO Sfera",
      "Gratyfikant nexo PRO wdrożenie",
      "Gratyfikant nexo PRO cena",
    ],
  },

  // 4. Gratyfikant GT
  {
    slug: "gratyfikant-gt",
    navLabel: "Gratyfikant GT",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Gratyfikant GT",
      line: "GT",
      image: "/images/insert/gratyfikant-gt.webp",
      producerUrl:
        "https://www.insert.com.pl/programy_dla_firm/kadry_i_place/gratyfikant_gt/opis.html",
    },
    title: "Gratyfikant GT - kadry i płace w systemie InsERT GT",
    metaTitle: "Gratyfikant GT - kadry i płace w systemie InsERT GT | OlekCodeTech",
    metaDescription:
      "Gratyfikant GT to program kadrowo-płacowy: ewidencja pracowników, umowy, czas pracy, listy płac, deklaracje PIT i ZUS. Sprzedaż i wdrożenie – OlekCodeTech.",
    eyebrow: "InsERT GT · kadry i płace",
    lead: [
      "Gratyfikant GT to program kadrowo-płacowy z linii InsERT GT. Służy osobom, które w małych i średnich firmach zajmują się kadrami i wynagrodzeniami, a także biurom rachunkowym. Pozwala prowadzić ewidencję pracowników, wystawiać umowy, rejestrować czas pracy, naliczać wypłaty i rachunki oraz przygotowywać deklaracje skarbowe i dane dla ZUS.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, w tym Gratyfikanta GT. Instalujemy program, konfigurujemy go według wskazań kadrowej, dbamy o serwer SQL i kopie zapasowe, a po wdrożeniu zapewniamy opiekę – na miejscu w Wieluniu i okolicy lub zdalnie.",
    ],
    sections: [
      {
        title: "Dla kogo jest Gratyfikant GT",
        text: "Gratyfikant GT jest dla małych i średnich firm, które same prowadzą kadry i płace, oraz dla biur rachunkowych świadczących taką usługę klientom. Najczęściej wybierają go ci, którzy pracują już na programach InsERT GT – księgują w Rewizorze GT albo Rachmistrzu GT i chcą mieć płace w tym samym systemie. Program dobrze radzi sobie z niejednolitymi zasadami wynagradzania: w jednej umowie można mieć kilka definicji wypłat, a składniki płacowe ustawiać globalnie lub indywidualnie. Obsługuje umowy o pracę, zlecenia, umowy o dzieło i kontrakty menedżerskie. Jeśli do tej pory wystarczał Wam mikroGratyfikant GT, a firma urosła, zgromadzone w nim dane można przenieść do pełnego programu.",
        bullets: [
          "małe i średnie firmy z własnym działem kadr i płac",
          "biura rachunkowe naliczające płace klientom",
          "użytkownicy Rewizora GT i Rachmistrza GT",
          "firmy z różnymi rodzajami umów i systemami wynagrodzeń",
          "firmy wyrastające z programu mikroGratyfikant GT",
        ],
      },
      {
        title: "Co potrafi Gratyfikant GT – najważniejsze funkcje",
        text: "W części kadrowej Gratyfikant GT prowadzi rozbudowaną ewidencję pracowników: badania lekarskie, kursy BHP, nagrody i kary, historię zatrudnienia, podział na grupy, cechy, a nawet zdjęcia. W umowach o pracę planuje się czas pracy, z możliwością zmiany kalendarza w trakcie umowy i wskazania wyjątków. Rejestrowany jest faktyczny czas pracy – nadgodziny, godziny nocne, absencje – rozliczany miesięcznie lub w dłuższych okresach. Dla umów cywilnoprawnych można ułożyć harmonogram wypłacania rachunków. W części płacowej pracuje się na definicjach list płac i zestawach płacowych, które automatyzują comiesięczne naliczenia; analizator wypłat pokazuje, jak powstała każda kwota. Program obsługuje również Zakładowy Fundusz Świadczeń Socjalnych, deklaracje skarbowe, dane do deklaracji ZUS oraz PPK.",
        bullets: [
          "ewidencja pracowników z badaniami, kursami BHP i historią zatrudnienia",
          "umowy o pracę, zlecenia, o dzieło i kontrakty menedżerskie",
          "planowanie i rejestracja czasu pracy, ewidencja nieobecności",
          "definicje list płac, zestawy płacowe i analizator wypłat",
          "akordy, prowizje, naliczenia i potrącenia komornicze",
          "deklaracje skarbowe, dane dla ZUS, PPK i ZFŚS",
        ],
      },
      {
        title: "Gratyfikant GT a inne programy InsERT i wymiana danych",
        text: "Gratyfikant GT wchodzi w skład systemu InsERT GT i jest zintegrowany z programami księgowymi tej linii: Rachmistrzem GT, czyli księgą przychodów i rozchodów, oraz Rewizorem GT do pełnej księgowości. Dzięki temu płace i księgowość pracują w jednym środowisku, a zakres przekazywanych informacji ustawiamy z księgową podczas wdrożenia. Deklaracje ZUS przygotowuje się we współpracy z programem Płatnik; z Płatnika można też przenieść dane na start, żeby nie wpisywać ich od nowa. To samo dotyczy danych zebranych wcześniej w programie mikroGratyfikant GT. Dla PPK program przygotowuje deklaracje zgłoszeniowe i rozliczeniowe. Jeśli standard nie wystarcza, są pakiety rozszerzeń PLUS dla InsERT GT oraz dodatek Sfera dla Gratyfikanta GT.",
        bullets: [
          "integracja z Rewizorem GT i Rachmistrzem GT",
          "współpraca z programem Płatnik",
          "przeniesienie danych z Płatnika",
          "przeniesienie danych z programu mikroGratyfikant GT",
          "deklaracje zgłoszeniowe i rozliczeniowe PPK",
          "pakiety PLUS dla InsERT GT i Sfera dla Gratyfikanta GT",
        ],
      },
      {
        title: "Gratyfikant GT a Gratyfikant nexo i nexo PRO – czym się różnią",
        text: "Gratyfikant GT należy do linii InsERT GT, a Gratyfikant nexo i Gratyfikant nexo PRO do linii InsERT nexo. To osobne rodziny programów, więc o wyborze najczęściej decyduje to, w czym prowadzona jest księgowość: przy Rewizorze GT lub Rachmistrzu GT naturalnym partnerem jest Gratyfikant GT. W opisie wersji nexo producent wymienia kilka rozwiązań, których w opisie GT nie ma – między innymi Portal pracownika dostępny przez przeglądarkę, mechanizm przypomnień kadrowych, elektroniczną wysyłkę deklaracji skarbowych i funkcje związane z RODO. Wersja nexo PRO dodaje do tego pola własne i szerszą obsługę umów cywilnoprawnych. Pełne porównanie udostępnia producent; na konsultacji pomagamy je przełożyć na Waszą sytuację, bez namawiania do zmiany na siłę.",
        bullets: [
          "Gratyfikant GT – linia InsERT GT, w parze z Rewizorem GT i Rachmistrzem GT",
          "Gratyfikant nexo – linia InsERT nexo, między innymi z Portalem pracownika",
          "Gratyfikant nexo PRO – dodatkowo pola własne i rozszerzenia",
          "wybór zależy głównie od programu księgowego w firmie",
          "szczegółowe porównanie wersji udostępnia producent",
        ],
      },
      {
        title: "Zakup i wdrożenie – Gratyfikant GT w OlekCodeTech",
        text: "Gratyfikant GT kupicie u nas razem z wdrożeniem. Instalujemy program i serwer SQL, a gdy pracuje w nim kilka osób – ustawiamy stanowiska w sieci. Ponieważ w bazie są dane osobowe i płacowe, od razu konfigurujemy automatyczne kopie zapasowe oraz dostęp użytkowników. Składniki płacowe, definicje list płac i kalendarze ustawiamy według ustaleń kadrowej lub księgowej; nie doradzamy w sprawach kadrowych, odpowiadamy za to, żeby program działał zgodnie z Waszymi ustaleniami. Pomagamy przenieść dane z Płatnika lub programu mikroGratyfikant GT i szkolimy na Waszych przykładach. Potem zostajemy jako opieka IT. Zaczynamy od bezpłatnej 30-minutowej konsultacji. Dojeżdżamy do firm w Wieluniu, Wieruszowie, Sieradzu, Kępnie i Kluczborku, resztę obsługujemy zdalnie.",
        bullets: [
          "licencja w cenie zgodnej z cennikiem producenta",
          "instalacja programu i serwera SQL, praca wielostanowiskowa",
          "kopie zapasowe i dostęp użytkowników",
          "konfiguracja według ustaleń kadrowej lub księgowej",
          "przeniesienie danych i szkolenie",
          "opieka po wdrożeniu – na miejscu i zdalnie",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Gratyfikant GT?",
        a: "Gratyfikant GT jest dla osób prowadzących kadry i płace w małych i średnich firmach oraz dla biur rachunkowych. Najlepiej pasuje tam, gdzie księgowość działa już w Rewizorze GT lub Rachmistrzu GT. Obsługuje umowy o pracę, zlecenia, umowy o dzieło i kontrakty menedżerskie, także przy złożonych systemach wynagrodzeń.",
      },
      {
        q: "Czym różni się Gratyfikant GT od Gratyfikanta nexo?",
        a: "Gratyfikant GT to program z linii InsERT GT, a Gratyfikant nexo z linii InsERT nexo. Każdy łączy się z programami księgowymi swojej linii. W opisie wersji nexo producent wymienia między innymi Portal pracownika i przypomnienia kadrowe, których opis GT nie zawiera. Szczegółowe porównanie publikuje producent, a my pomagamy je omówić przed zakupem.",
      },
      {
        q: "Czy Gratyfikant GT współpracuje z Rewizorem GT?",
        a: "Tak. Gratyfikant GT jest zintegrowany z programami księgowymi linii InsERT GT, czyli z Rewizorem GT i Rachmistrzem GT. Współpracuje też z programem Płatnik przy deklaracjach ZUS. Podczas wdrożenia ustawiamy połączenie z programem księgowym według wskazań księgowej i sprawdzamy je na przykładowej liście płac.",
      },
      {
        q: "Ile kosztuje Gratyfikant GT?",
        a: "Cena licencji na program Gratyfikant GT jest zgodna z aktualnym cennikiem producenta. Wdrożenie wyceniamy osobno, bo zależy od liczby stanowisk, stopnia złożoności wynagrodzeń i zakresu przenoszonych danych. Kwotę podajemy po bezpłatnej 30-minutowej konsultacji, podczas której ustalamy, co faktycznie jest do zrobienia.",
      },
      {
        q: "Czy pomożecie wdrożyć Gratyfikant GT i przenieść dane?",
        a: "Tak. Instalujemy program i serwer SQL, ustawiamy kopie zapasowe oraz dostęp użytkowników, a składniki płacowe konfigurujemy według wskazań kadrowej. Dane można przenieść z Płatnika lub z programu mikroGratyfikant GT – robimy to razem z osobą prowadzącą kadry i sprawdzamy wynik. Szkolenie prowadzimy na miejscu albo zdalnie.",
      },
    ],
    related: [
      "gratyfikant-nexo",
      "gratyfikant-nexo-pro",
      "rewizor-gt",
      "programy-insert-nexo",
      "wsparcie-it-dla-biur-rachunkowych",
    ],
    keywords: [
      "Gratyfikant GT",
      "Gratyfikant GT kadry i płace",
      "Gratyfikant GT program kadrowo-płacowy",
      "Gratyfikant GT dla biura rachunkowego",
      "Gratyfikant GT wdrożenie",
      "Gratyfikant GT cena",
    ],
  },

  // 5. Portal Dokumentów
  {
    slug: "portal-dokumentow",
    navLabel: "Portal Dokumentów",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Portal Dokumentów",
      line: "online",
      producerUrl: "https://portaldokumentow.insert.com.pl/",
    },
    title: "Portal Dokumentów - wysyłka dokumentów do księgowości online",
    metaTitle: "Portal Dokumentów - wysyłka dokumentów do księgowości online | OlekCodeTech",
    metaDescription:
      "Portal Dokumentów InsERT: wysyłka faktur do biura rachunkowego lub księgowości, odczyt OCR i obieg dokumentów. Uruchomienie i wsparcie – OlekCodeTech, Wieluń.",
    eyebrow: "InsERT · usługa online dla księgowości",
    lead: [
      "Portal Dokumentów to usługa online InsERT, przez którą dokumenty księgowe trafiają do osoby, która je księguje. Korzystają z niej biura rachunkowe i ich klienci, a także firmy prowadzące własną księgowość w Rachmistrzu lub Rewizorze. Zamiast wozić segregatory albo wysyłać faktury mailem, przesyłacie plik PDF lub zdjęcie, a księgowość ma wszystko w jednym miejscu.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT i pomagamy uruchomić Portal Dokumentów – od aktywacji w programie księgowym, przez zaproszenie użytkowników, po krótkie szkolenie dla osób wysyłających dokumenty. Działamy na miejscu w Wieluniu i okolicy oraz zdalnie.",
    ],
    sections: [
      {
        title: "Dla kogo jest Portal Dokumentów",
        text: "Portal Dokumentów ma trzy grupy użytkowników. Pierwsza to biura rachunkowe, które chcą uporządkować sposób, w jaki klienci dostarczają faktury. Druga to klienci tych biur – właściciele firm, którzy wolą zrobić zdjęcie dokumentu smartfonem niż pamiętać o comiesięcznej teczce. Trzecia to firmy z własnym działem księgowości, w których dokumenty spływają od wielu osób: z biura, od kierowników, od pracowników w terenie. We wszystkich przypadkach chodzi o to samo – dokument ma trafić do księgowości szybko, z opisem, i nie zginąć po drodze. Usługa przydaje się także przy pracy zdalnej, bo ani wysyłający, ani księgujący nie muszą być w tym samym miejscu.",
        bullets: [
          "biura rachunkowe odbierające dokumenty od klientów",
          "klienci biur rachunkowych",
          "firmy z własną księgowością w Rachmistrzu lub Rewizorze",
          "firmy, w których faktury zbiera kilka osób",
          "zespoły pracujące zdalnie",
        ],
      },
      {
        title: "Co potrafi Portal Dokumentów – najważniejsze funkcje",
        text: "Portal Dokumentów przyjmuje pliki PDF i pliki graficzne, w tym zdjęcia, wysyłane przez stronę internetową. Do każdego dokumentu można dodać opis, żeby księgowa wiedziała, czego dotyczy wydatek. Wysyłający widzi postęp prac nad dokumentem, a gdy coś się nie zgadza, dokument wraca do niego z komentarzem i prośbą o poprawkę. Po stronie księgowości działa automatyczny odczyt OCR oparty na mechanizmach sztucznej inteligencji: z faktury rozpoznawane są numer, data, kontrahent i kwoty z tabeli VAT, a dane przenoszą się na zapis księgowy w chwili jego dodawania. Producent wymienia wśród możliwości usługi także obsługę KSeF. Wszystkie przesłane dokumenty są widoczne w jednym miejscu, razem z historią tego, co się z nimi działo.",
        bullets: [
          "wysyłka plików PDF i zdjęć przez stronę internetową",
          "opis dołączany do każdego dokumentu",
          "podgląd postępu prac nad dokumentem",
          "zwrot dokumentu do nadawcy z komentarzem",
          "automatyczny odczyt danych z faktury (OCR)",
          "obsługa KSeF",
        ],
      },
      {
        title: "Portal Dokumentów a programy InsERT i wymiana danych",
        text: "Portal Dokumentów współpracuje z programami księgowymi InsERT: Rachmistrzem i Rewizorem z linii nexo, nexo PRO oraz GT. Dokumenty przesłane przez klienta lub pracownika mogą być automatycznie pobierane do programu księgowego, gdzie stają się podstawą zapisu. Usługę uruchamia się z poziomu programu – w Rachmistrzu GT i Rewizorze GT służy do tego ikona Portalu na pasku narzędzi, a w programach nexo PRO moduł „Dokumenty Pobrane”. Pracownik księgowości dostaje zaproszenie e-mailem i loguje się swoim Kontem InsERT. Dokumentom można nadawać etykiety, przy czym ta funkcja jest dostępna w Rachmistrzu i Rewizorze z linii nexo. Dokładny zakres współpracy z Waszą wersją programu sprawdzamy przed uruchomieniem.",
        bullets: [
          "współpraca z Rachmistrzem i Rewizorem nexo, nexo PRO oraz GT",
          "automatyczne pobieranie dokumentów do programu księgowego",
          "aktywacja z poziomu programu księgowego",
          "logowanie Kontem InsERT po zaproszeniu e-mailem",
          "etykiety dokumentów w programach linii nexo",
        ],
      },
      {
        title: "Kiedy przydaje się Portal Dokumentów i jak ustawić obieg",
        text: "Portal Dokumentów działa w dwóch trybach. W podstawowym dokument idzie prosto do programu księgowego, a wszyscy użytkownicy mają takie same uprawnienia – to dobre rozwiązanie dla małej firmy i dla klienta biura rachunkowego. Drugi tryb to obieg dokumentów przed wysyłką do księgowości. Administrator może go włączyć w dowolnym momencie i nadać uprawnienia poszczególnym osobom. Dokument przechodzi wtedy między użytkownikami, na przykład od pracownika do kierownika, i może zostać zaakceptowany albo odrzucony, zanim trafi do księgowania. Historia obiegu pokazuje, kto i kiedy się nim zajmował. Ten tryb warto rozważyć, gdy faktury kosztowe wymagają zatwierdzenia albo gdy chcecie wiedzieć, na czyim biurku dokument utknął.",
        bullets: [
          "tryb bezpośredni – dokument od razu trafia do programu księgowego",
          "tryb obiegu – akceptacja lub odrzucenie przed księgowaniem",
          "uprawnienia nadawane przez administratora",
          "przekazywanie dokumentów między użytkownikami",
          "historia obiegu każdego dokumentu",
        ],
      },
      {
        title: "Uruchomienie i wsparcie – Portal Dokumentów w OlekCodeTech",
        text: "Portal Dokumentów jest usługą online, więc nie wymaga osobnej instalacji – wymaga za to działającego programu księgowego i dobrze ustawionych użytkowników. Pomagamy aktywować usługę w Rachmistrzu lub Rewizorze, zaprosić pracowników i klientów, wybrać tryb pracy oraz ustawić uprawnienia w obiegu według ustaleń księgowej. Jeśli program księgowy dopiero kupujecie, wdrażamy go w całości: instalacja, serwer SQL, praca wielostanowiskowa i automatyczne kopie zapasowe bazy. Osobom wysyłającym dokumenty pokazujemy w kilkanaście minut, jak robić czytelne zdjęcia i opisywać faktury. Po uruchomieniu zostajemy jako opieka IT. Zaczynamy od bezpłatnej 30-minutowej konsultacji. Pracujemy na miejscu w Wieluniu, Wieruszowie, Sieradzu, Kępnie i Kluczborku oraz zdalnie.",
        bullets: [
          "aktywacja usługi w programie księgowym",
          "zaproszenie użytkowników i ustawienie uprawnień",
          "wybór trybu: wysyłka bezpośrednia lub obieg",
          "wdrożenie Rachmistrza lub Rewizora z serwerem SQL i kopiami zapasowymi",
          "krótkie szkolenie dla wysyłających i księgujących",
          "opieka po uruchomieniu – na miejscu i zdalnie",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Portal Dokumentów?",
        a: "Portal Dokumentów jest dla biur rachunkowych, ich klientów oraz firm, które prowadzą własną księgowość w Rachmistrzu lub Rewizorze. Przydaje się wszędzie tam, gdzie faktury trzeba szybko przekazać osobie księgującej – także wtedy, gdy dokumenty zbiera kilka osób albo zespół pracuje zdalnie. Wysyła się pliki PDF lub zdjęcia.",
      },
      {
        q: "Czym różni się w usłudze Portal Dokumentów wysyłka bezpośrednia od obiegu?",
        a: "W trybie bezpośrednim dokument od razu trafia do programu księgowego, a wszyscy użytkownicy mają równe uprawnienia. W trybie obiegu dokument najpierw krąży w firmie: można go przekazać innej osobie, zaakceptować albo odrzucić, a administrator decyduje, kto co może. Obieg włącza się w dowolnym momencie, gdy okaże się potrzebny.",
      },
      {
        q: "Z jakimi programami InsERT współpracuje Portal Dokumentów?",
        a: "Portal Dokumentów współpracuje z programami księgowymi InsERT: Rachmistrzem i Rewizorem z linii nexo, nexo PRO oraz GT. Usługę uruchamia się z poziomu programu, a przesłane dokumenty mogą być do niego automatycznie pobierane. Przed startem sprawdzamy, czy Wasza wersja programu obsługuje wszystkie funkcje, na których Wam zależy, na przykład etykiety.",
      },
      {
        q: "Ile kosztuje Portal Dokumentów?",
        a: "Portal Dokumentów jest rozliczany przez producenta za przesłane dokumenty, według liczby stron, w punktach z Portfela InsERT – zgodnie z aktualnym cennikiem producenta. Nie podajemy tu kwot, bo cennik może się zmieniać. Naszą pomoc przy uruchomieniu i szkoleniu wyceniamy osobno, po bezpłatnej 30-minutowej konsultacji.",
      },
      {
        q: "Czy pomożecie uruchomić Portal Dokumentów w biurze rachunkowym lub firmie?",
        a: "Tak. Aktywujemy usługę w programie księgowym, pomagamy zaprosić użytkowników, wybrać tryb pracy i ustawić uprawnienia według ustaleń księgowej. Pokazujemy też klientom lub pracownikom, jak wysyłać i opisywać dokumenty. Jeśli trzeba, wdrażamy również sam program księgowy. Działamy na miejscu w Wieluniu i okolicy oraz zdalnie.",
      },
    ],
    related: [
      "rewizor-nexo",
      "rewizor-nexo-pro",
      "rewizor-gt",
      "rachmistrz-nexo",
      "wsparcie-it-dla-biur-rachunkowych",
    ],
    keywords: [
      "Portal Dokumentów",
      "Portal Dokumentów InsERT",
      "Portal Dokumentów dla biura rachunkowego",
      "Portal Dokumentów OCR faktur",
      "Portal Dokumentów obieg dokumentów",
      "Portal Dokumentów wdrożenie",
    ],
  },
];
