import type { LandingPage } from "./types";

/**
 * Podstrony usługowe (kind: "service") związane z programami InsERT:
 * hub programów InsERT nexo, wdrożenie Subiekta nexo, wsparcie IT dla biur rachunkowych,
 * integracja sklepu internetowego z Subiektem nexo.
 * Każda ma 3 realizacje z src/data/portfolio.ts (dokładne tytuły).
 */
export const insertLandings: LandingPage[] = [
  // 1. Hub: programy InsERT nexo
  {
    slug: "programy-insert-nexo",
    navLabel: "Programy InsERT nexo",
    kind: "service",
    parent: "opieka-it-dla-firm",
    title: "Programy InsERT nexo – sprzedaż, wdrożenie i wsparcie w Wieluniu i zdalnie",
    metaTitle: "Programy InsERT nexo Wieluń – Partner InsERT | OlekCodeTech",
    metaDescription:
      "Programy InsERT nexo w Wieluniu: Subiekt, Rewizor, Rachmistrz i Gratyfikant nexo. Sprzedaż licencji, wdrożenie, KSeF i opieka. Partner InsERT – zapytaj.",
    eyebrow: "Partner InsERT · Wieluń",
    lead: [
      "Sprzedajemy, wdrażamy i obsługujemy programy InsERT nexo: Subiekt nexo, Rachmistrz nexo, Rewizor nexo, Gratyfikant nexo i Gestor nexo. Jesteśmy Partnerem InsERT, więc licencję, instalację, konfigurację i późniejszą pomoc dostajecie w jednym miejscu. Pracujemy dla firm handlowych i usługowych, hurtowni oraz biur rachunkowych – na miejscu w Wieluniu i okolicy oraz zdalnie w całej Polsce.",
      "OlekCodeTech to software house z Wielunia, działający od 2019 roku. Oprócz samych programów InsERT zajmujemy się tym, co wokół nich: serwerem SQL, siecią i kopiami zapasowymi, integracją ze sklepem internetowym oraz bieżącą opieką IT. Dzięki temu nie musicie szukać osobno sprzedawcy programu, informatyka i programisty.",
    ],
    sections: [
      {
        title: "Programy InsERT, które sprzedajemy i wdrażamy",
        text: "Programy InsERT nexo to rodzina systemów do prowadzenia firmy, które pracują na wspólnej bazie danych. Możecie zacząć od jednego programu i dokładać kolejne, gdy firma rośnie – dane kontrahentów, towarów czy dokumentów nie są wtedy przepisywane między programami. Jako Partner InsERT sprzedajemy licencje na programy z tej linii, a potem je instalujemy, konfigurujemy i uczymy z nich korzystać. Najczęściej wdrażamy Subiekta nexo w firmach handlowych i usługowych oraz programy księgowe i kadrowe w biurach rachunkowych. Programy występują w wersji standardowej i w rozbudowanej wersji PRO. Dla najmniejszych firm, które potrzebują tylko wystawiać faktury, jest też Subiekt 123, czyli fakturowanie online w przeglądarce. Poniżej krótko, do czego służy każdy z programów.",
        bullets: [
          "Subiekt nexo – sprzedaż, faktury, zamówienia i magazyn",
          "Rachmistrz nexo – księga przychodów i rozchodów oraz ryczałt",
          "Rewizor nexo – pełna księgowość",
          "Gratyfikant nexo – kadry i płace",
          "Gestor nexo – CRM: relacje z klientami i praca handlowców",
          "wersje PRO oraz Subiekt 123 do fakturowania online",
        ],
      },
      {
        title: "Jak dobrać program InsERT do firmy",
        text: "Dobór programu zaczynamy od pytania, co ma on w firmie załatwiać, a nie od cennika. Sklep, hurtownia czy serwis potrzebują zwykle Subiekta nexo, bo tam wystawia się dokumenty sprzedaży i prowadzi magazyn. Jeśli księgowość prowadzi biuro rachunkowe, program księgowy w firmie często nie jest potrzebny – wystarczy sprawne przekazywanie dokumentów. Firma, która księguje sama, wybiera między Rachmistrzem nexo a Rewizorem nexo w zależności od formy ewidencji, którą wskazuje księgowa. Gratyfikant nexo ma sens, gdy zatrudniacie pracowników i sami naliczacie płace. Wersję PRO polecamy wtedy, gdy potrzebujecie większych możliwości dostosowania programu albo integracji z innym systemem, na przykład sklepem internetowym. Na konsultacji mówimy też wprost, kiedy wersja standardowa w zupełności wystarczy.",
        bullets: [
          "handel, hurtownia, serwis: Subiekt nexo",
          "księga przychodów i rozchodów lub ryczałt: Rachmistrz nexo",
          "pełna księgowość: Rewizor nexo",
          "pracownicy i listy płac w firmie: Gratyfikant nexo",
          "handlowcy i kontakt z klientami: Gestor nexo",
          "integracja ze sklepem lub własne dostosowania: wersja PRO",
        ],
      },
      {
        title: "Wdrożenie InsERT nexo: od instalacji do szkolenia",
        text: "Wdrożenie InsERT nexo to coś więcej niż instalacja programu. Zaczynamy od sprawdzenia komputerów i sieci oraz ustalenia, gdzie będzie stała baza danych – programy nexo pracują na serwerze Microsoft SQL, który instalujemy i konfigurujemy tak, by kilka stanowisk mogło pracować jednocześnie. Zakładamy użytkowników i ustawiamy uprawnienia, żeby każdy widział tylko to, czego potrzebuje. Dopasowujemy wzorce wydruków: faktury z Waszym logo, dokumenty magazynowe, oferty. Jeśli macie dane w poprzednim programie albo w arkuszach, importujemy kartoteki towarów i kontrahentów, żeby nie wpisywać ich ręcznie. Na koniec szkolimy osoby, które będą pracować w programie, na Waszych danych i Waszych dokumentach. Od pierwszego dnia ustawiamy też automatyczną kopię zapasową bazy.",
        bullets: [
          "instalacja programu i serwera Microsoft SQL",
          "konfiguracja stanowisk i pracy w sieci",
          "użytkownicy i uprawnienia",
          "wzorce wydruków z logo i danymi firmy",
          "import kartotek towarów i kontrahentów",
          "szkolenie pracowników i automatyczna kopia bazy",
        ],
      },
      {
        title: "KSeF i przejście z InsERT GT na nexo",
        text: "Dwa tematy wracają dziś w prawie każdej rozmowie: Krajowy System e-Faktur i wymiana starszych programów. Programy InsERT nexo obsługują KSeF, ale samo włączenie funkcji to nie wszystko – trzeba skonfigurować połączenie w programie, nadać uprawnienia i ustalić, kto w firmie wysyła i odbiera faktury. Pomagamy przejść przez to, zanim obowiązkowy KSeF obejmie Waszą firmę, i sprawdzamy konfigurację razem z osobą, która wystawia faktury. Druga sprawa to przejście z linii InsERT GT, czyli na przykład z Subiekta GT, na nexo. Dane z GT można przenieść do nexo, a zakres przenoszonych informacji sprawdzamy wcześniej na kopii bazy. Dzięki temu wiecie, co przejdzie automatycznie, a co wymaga ręcznego uporządkowania.",
        bullets: [
          "konfiguracja połączenia z KSeF w programie",
          "ustalenie, kto wystawia i odbiera e-faktury",
          "abonament na ulepszenia, czyli dostęp do aktualnych wersji",
          "próbne przeniesienie danych z InsERT GT na kopii bazy",
          "kontrola kartotek, stanów i rozrachunków po migracji",
          "szkolenie z różnic między GT a nexo",
        ],
      },
      {
        title: "Opieka po wdrożeniu: aktualizacje, kopie zapasowe, pomoc",
        text: "Program do sprzedaży czy księgowości musi działać codziennie, dlatego po wdrożeniu nie zostawiamy Was samych. Przepisy się zmieniają, a InsERT wydaje nowe wersje programów – instalujemy aktualizacje w uzgodnionym terminie, po wcześniejszym wykonaniu kopii bazy. Pilnujemy, żeby kopie zapasowe robiły się automatycznie i trafiały także poza komputer, na którym stoi baza, oraz co jakiś czas sprawdzamy, czy da się z nich odtworzyć dane. Gdy coś przestaje działać – wydruk, urządzenie fiskalne, połączenie stanowiska z serwerem – łączymy się zdalnie i zwykle rozwiązujemy problem bez wizyty. W Wieluniu i okolicy, między innymi w Wieruszowie, Sieradzu, Kępnie i Kluczborku, przyjeżdżamy też na miejsce. Opiekę nad programem można połączyć z obsługą IT całej firmy.",
        bullets: [
          "aktualizacje programów po wykonaniu kopii bazy",
          "automatyczne kopie zapasowe i testowe odtwarzanie",
          "pomoc zdalna dla użytkowników programu",
          "wizyty na miejscu w Wieluniu i okolicy",
          "nowe stanowiska, użytkownicy i wzorce wydruków",
          "przeniesienie programu na nowy komputer lub serwer",
        ],
      },
      {
        title: "Dlaczego InsERT u nas: program, integracje i IT od jednego wykonawcy",
        text: "Różnica między sprzedawcami programu zaczyna się wtedy, gdy trzeba go połączyć z resztą firmy. Jesteśmy jednocześnie Partnerem InsERT, firmą programistyczną i informatykiem dla firm, więc nie odsyłamy Was od jednego wykonawcy do drugiego. Dla sklepu elektrycznego RAV przygotowaliśmy integrację sklepu WooCommerce z magazynem w Subiekt nexo – ze stanami, cenami i rabatami przypisanymi do klientów. Dla biura rachunkowego konfigurowaliśmy w Rewizorze nexo schematy dekretacji, między innymi dla list płac. Zbudowaliśmy też CRM dla biura księgowego E-Numerika. Działamy od 2019 roku i mamy za sobą ponad 50 projektów. Licencje sprzedajemy w cenach zgodnych z cennikiem producenta, a wdrożenie wyceniamy osobno po bezpłatnej 30-minutowej konsultacji.",
        bullets: [
          "licencja, wdrożenie i opieka w jednym miejscu",
          "integracje Subiekta nexo ze sklepem internetowym",
          "serwer SQL, sieć, kopie zapasowe i helpdesk",
          "ceny licencji zgodne z cennikiem producenta",
          "bezpłatna 30-minutowa konsultacja przed wyceną",
          "na miejscu w Wieluniu i okolicy, zdalnie w całej Polsce",
        ],
      },
    ],
    faq: [
      {
        q: "Gdzie kupić Subiekt nexo w Wieluniu?",
        a: "Subiekta nexo i pozostałe programy InsERT kupicie w OlekCodeTech – jesteśmy Partnerem InsERT z siedzibą w Wieluniu, przy ul. Liliowej 3. Oprócz sprzedaży licencji instalujemy program, konfigurujemy go pod Waszą firmę i szkolimy pracowników. Obsługujemy też firmy z okolicy, między innymi z Wieruszowa, Sieradza, Kępna i Kluczborka, a zdalnie klientów z całej Polski. Zaczynamy od bezpłatnej 30-minutowej konsultacji.",
      },
      {
        q: "Ile kosztuje program InsERT nexo i jego wdrożenie?",
        a: "Ceny licencji są zgodne z cennikiem producenta i zależą od wybranego programu, wersji (standardowa lub PRO) oraz liczby stanowisk. Wdrożenie wyceniamy osobno, bo jego zakres bywa bardzo różny: inaczej wygląda instalacja na jednym komputerze, a inaczej praca kilku osób w sieci z importem danych i szkoleniem. Kwotę podajemy po bezpłatnej 30-minutowej konsultacji, na której ustalamy, czego faktycznie potrzebujecie.",
      },
      {
        q: "Jaki program InsERT wybrać dla małej firmy?",
        a: "Jeśli firma sprzedaje towary lub usługi i potrzebuje faktur oraz magazynu, zwykle wystarczy Subiekt nexo. Gdy chodzi tylko o wystawianie faktur, można rozważyć Subiekt 123, który działa online w przeglądarce. Program księgowy – Rachmistrz nexo lub Rewizor nexo – jest potrzebny wtedy, gdy księgujecie samodzielnie, a nie przez biuro rachunkowe. Wybór formy ewidencji zostawiamy księgowej, a my dobieramy i konfigurujemy program zgodnie z jej ustaleniami.",
      },
      {
        q: "Czym różni się InsERT nexo od nexo PRO?",
        a: "Wersja PRO to rozbudowany wariant tego samego programu. Oferuje między innymi większe możliwości dostosowania programu do firmy oraz Sferę, czyli mechanizm pozwalający łączyć program z innymi systemami, na przykład ze sklepem internetowym. Wersja standardowa wystarcza wielu małym firmom, które pracują w typowy sposób. Szczegółowe różnice zależą od programu, dlatego przed zakupem sprawdzamy, których funkcji naprawdę będziecie używać.",
      },
      {
        q: "Czy da się przenieść dane z Subiekta GT do Subiekta nexo?",
        a: "Tak, dane z programów linii InsERT GT można przenieść do nexo. Zakres przenoszonych informacji zależy od programu i od tego, jak baza była prowadzona, dlatego zawsze robimy najpierw próbne przeniesienie na kopii. Sprawdzamy kartoteki, stany magazynowe i rozrachunki, a rozbieżności omawiamy przed właściwą migracją. Starą bazę zachowujemy jako archiwum, żeby można było zajrzeć do dawnych dokumentów.",
      },
      {
        q: "Czy programy InsERT nexo obsługują KSeF?",
        a: "Tak, programy InsERT nexo obsługują Krajowy System e-Faktur. Potrzebna jest aktualna wersja programu, do której dostęp daje abonament na ulepszenia. Po naszej stronie jest konfiguracja połączenia z KSeF w programie, ustawienie uprawnień użytkowników i pokazanie, jak wysyłać oraz odbierać faktury. Nie doradzamy w sprawach podatkowych – zasady wystawiania dokumentów ustalacie z księgową, a my ustawiamy program zgodnie z nimi.",
      },
      {
        q: "Czy wdrożenie programu InsERT nexo można zrobić zdalnie?",
        a: "W większości przypadków tak. Instalację programu i serwera SQL, konfigurację, import danych oraz szkolenie możemy przeprowadzić przez zdalny pulpit i rozmowę wideo – tak pracujemy z klientami z całej Polski. Wizyta na miejscu przydaje się przy podłączaniu urządzeń, na przykład drukarki fiskalnej czy czytników kodów, oraz przy porządkowaniu sieci. W Wieluniu i okolicy przyjeżdżamy do firmy, jeśli tak jest wygodniej.",
      },
    ],
    related: [
      "wdrozenie-subiekt-nexo",
      "wsparcie-it-dla-biur-rachunkowych",
      "integracja-sklepu-z-subiekt-nexo",
      "helpdesk-it-dla-firm",
      "programista-wielun",
    ],
    keywords: [
      "programy InsERT Wieluń",
      "Partner InsERT Wieluń",
      "Subiekt nexo Wieluń",
      "Rewizor nexo",
      "Rachmistrz nexo",
      "Gratyfikant nexo",
      "wdrożenie InsERT nexo",
      "przejście z InsERT GT na nexo",
    ],
    portfolio: [
      "RAV - Sklep elektryczny",
      "CRM E-Numerika Biuro Księgowe",
      "Hurtownia Budowlana Panek",
    ],
  },

  // 2. Wdrożenie Subiekt nexo
  {
    slug: "wdrozenie-subiekt-nexo",
    navLabel: "Wdrożenie Subiekt nexo",
    kind: "service",
    parent: "opieka-it-dla-firm",
    title: "Wdrożenie Subiekt nexo – program do faktur i magazynu ustawiony pod Waszą firmę",
    metaTitle: "Wdrożenie Subiekt nexo i nexo PRO – OlekCodeTech",
    metaDescription:
      "Wdrożenie Subiekt nexo dla sklepu, hurtowni i firmy usługowej: kartoteki, cenniki, magazyn, wydruki, KSeF, migracja z Subiekta GT. Partner InsERT z Wielunia.",
    eyebrow: "Partner InsERT · Subiekt nexo",
    lead: [
      "Wdrażamy Subiekta nexo i Subiekta nexo PRO w sklepach, hurtowniach, firmach usługowych i serwisach. Jesteśmy Partnerem InsERT: sprzedajemy licencję, instalujemy program, ustawiamy kartoteki, cenniki, magazyny i wydruki, przenosimy dane z poprzedniego systemu i szkolimy pracowników. Efekt to program do faktur i magazynu, w którym od pierwszego dnia da się normalnie pracować.",
      "Pracujemy na miejscu w Wieluniu i okolicy oraz zdalnie w całej Polsce. Ponieważ jesteśmy też firmą programistyczną, po wdrożeniu możemy połączyć Subiekta ze sklepem internetowym – integrację sklepu WooCommerce z magazynem w Subiekt nexo przygotowaliśmy dla sklepu elektrycznego RAV.",
    ],
    sections: [
      {
        title: "Dla kogo jest Subiekt nexo",
        text: "Subiekt nexo to program do sprzedaży i magazynu dla małych i średnich firm. Sprawdza się wszędzie tam, gdzie codziennie wystawia się dokumenty sprzedaży, przyjmuje dostawy i trzeba wiedzieć, ile towaru zostało na półce. W sklepie stacjonarnym obsługuje sprzedaż przy ladzie, w hurtowni – zamówienia od klientów, różne cenniki i wydania z magazynu, w firmie usługowej i serwisie – faktury za usługi oraz części i materiały. Subiekt porządkuje też rozrachunki, czyli to, kto i ile zalega z płatnością. Jeśli dziś wystawiacie faktury w prostym programie, a stany prowadzicie w arkuszu, przejście na Subiekta nexo łączy te dwie rzeczy w jednym miejscu. Dokumenty łatwiej też potem przekazać do biura rachunkowego.",
        bullets: [
          "sklepy stacjonarne i punkty sprzedaży",
          "hurtownie i firmy sprzedające innym firmom",
          "firmy usługowe wystawiające faktury i oferty",
          "serwisy rozliczające usługi, części i materiały",
          "firmy z kilkoma magazynami lub punktami",
          "sprzedawcy internetowi, którzy chcą jednego magazynu dla wszystkich kanałów",
        ],
      },
      {
        title: "Co ustawiamy przy wdrożeniu Subiekta nexo",
        text: "Program po instalacji jest pusty i ogólny. Wdrożenie polega na tym, żeby odzwierciedlał Waszą firmę. Zaczynamy od kartotek: towary i usługi z grupami, jednostkami, stawkami VAT i kodami kreskowymi oraz kontrahenci z warunkami płatności. Potem ustawiamy cenniki i rabaty – osobne ceny detaliczne i hurtowe, upusty dla grup klientów lub pojedynczych odbiorców. Zakładamy magazyny i ustalamy, jakie dokumenty mają powstawać przy sprzedaży, przyjęciu i przesunięciu towaru. Dopasowujemy wydruki faktur i dokumentów magazynowych. Podłączamy urządzenia, z których korzystacie przy sprzedaży: kasy i drukarki fiskalne, terminale płatnicze oraz czytniki kodów kreskowych – po wcześniejszym sprawdzeniu, czy dany model współpracuje z programem. Na koniec zakładamy użytkowników z odpowiednimi uprawnieniami.",
        bullets: [
          "kartoteki towarów, usług i kontrahentów",
          "cenniki, rabaty i warunki płatności",
          "magazyny i obieg dokumentów magazynowych",
          "wzorce wydruków z logo firmy",
          "kasy i drukarki fiskalne, terminale, czytniki kodów",
          "użytkownicy, uprawnienia i kopia zapasowa bazy",
        ],
      },
      {
        title: "Subiekt nexo czy Subiekt nexo PRO",
        text: "Subiekt występuje w dwóch wersjach i wybór między nimi warto przemyśleć przed zakupem. Wersja standardowa obsługuje sprzedaż, zakupy, magazyn i rozrachunki w sposób, który wystarcza wielu firmom. Subiekt nexo PRO to wariant rozbudowany: oferuje między innymi szersze możliwości dostosowania programu do własnych potrzeb oraz Sferę, czyli mechanizm, przez który inne systemy mogą wymieniać dane z Subiektem. Sfera ma znaczenie przede wszystkim wtedy, gdy planujecie integrację ze sklepem internetowym, własną aplikacją lub innym oprogramowaniem. Nie namawiamy na PRO na zapas. Na konsultacji spisujemy, jak pracujecie i co chcecie zautomatyzować, a potem mówimy, która wersja to pokrywa. Jeśli potrzeby wzrosną później, do tematu można wrócić – warunki zmiany wersji sprawdzamy w aktualnej ofercie producenta.",
        bullets: [
          "wersja standardowa: typowa sprzedaż i magazyn",
          "wersja standardowa: mała firma bez integracji z innymi systemami",
          "PRO: m.in. rozbudowane dostosowanie programu do firmy",
          "PRO: Sfera do integracji ze sklepem i własnymi aplikacjami",
          "PRO: gdy procesy sprzedaży odbiegają od typowych",
          "wybór po rozmowie o tym, jak faktycznie pracujecie",
        ],
      },
      {
        title: "KSeF w Subiekcie nexo",
        text: "Subiekt nexo obsługuje Krajowy System e-Faktur, więc faktury można wysyłać do KSeF i odbierać z niego w programie. Żeby działało to bez nerwów, kilku rzeczy trzeba dopilnować wcześniej. Po pierwsze program musi być aktualny – dostęp do nowych wersji daje abonament na ulepszenia. Po drugie firma potrzebuje uprawnień w KSeF i sposobu uwierzytelnienia, który konfigurujemy w Subiekcie. Po trzecie warto ustalić, kto wystawia faktury, kto odbiera faktury zakupowe i jak trafiają one dalej do księgowości. Przy okazji porządkujemy dane kontrahentów, bo błędny NIP czy niepełny adres to częsta przyczyna kłopotów. Nie udzielamy porad podatkowych – zasady ustalacie z księgową, a my ustawiamy program zgodnie z nimi i szkolimy pracowników.",
        bullets: [
          "aktualizacja Subiekta do bieżącej wersji",
          "konfiguracja połączenia z KSeF w programie",
          "uprawnienia użytkowników do wysyłki i odbioru e-faktur",
          "uporządkowanie danych kontrahentów",
          "obieg faktur zakupowych do księgowości",
          "szkolenie osób wystawiających faktury",
        ],
      },
      {
        title: "Migracja z Subiekta GT lub innego programu",
        text: "Mało która firma zaczyna od zera. Zwykle są już dane: w Subiekcie GT, w innym programie do faktur albo w arkuszach. Przy przejściu z Subiekta GT korzystamy z możliwości przeniesienia danych z linii InsERT GT do nexo. Zawsze robimy to najpierw próbnie, na kopii bazy, i porównujemy wyniki: liczbę towarów i kontrahentów, stany magazynowe, nierozliczone płatności. Przy innych programach eksportujemy kartoteki do plików i importujemy je do Subiekta, a przy okazji usuwamy duplikaty i nieużywane pozycje. Właściwe przejście planujemy na spokojny moment, na przykład na początek miesiąca lub okres po inwentaryzacji. Starą bazę zachowujemy jako archiwum, żeby można było zajrzeć do dawnych dokumentów. Jeśli czegoś nie da się przenieść automatycznie, mówimy o tym przed migracją.",
        bullets: [
          "próbne przeniesienie danych na kopii bazy",
          "porównanie kartotek, stanów i rozrachunków",
          "import towarów i kontrahentów z plików",
          "usunięcie duplikatów i nieużywanych pozycji",
          "przejście w ustalonym, spokojnym terminie",
          "stara baza zachowana jako archiwum",
        ],
      },
      {
        title: "Szkolenie i opieka po wdrożeniu",
        text: "Wdrożenie kończy się wtedy, gdy pracownicy swobodnie pracują w programie, a nie w chwili instalacji. Szkolimy na Waszej bazie i na dokumentach, które faktycznie wystawiacie: sprzedaż, przyjęcie dostawy, korekta, inwentaryzacja. Osobno pokazujemy osobie odpowiedzialnej, jak dodać użytkownika, zmienić cennik czy sprawdzić kopię zapasową. W pierwszych tygodniach pracy łączymy się zdalnie, gdy pojawia się pytanie lub problem. Później możecie zostać przy stałej opiece: instalujemy aktualizacje, pilnujemy kopii bazy, dodajemy stanowiska i zmieniamy wydruki. Jeśli firma zacznie sprzedawać w internecie, łączymy Subiekta ze sklepem, żeby stany i ceny nie były prowadzone w dwóch miejscach. Ceny licencji są zgodne z cennikiem producenta, a wdrożenie wyceniamy osobno po bezpłatnej 30-minutowej konsultacji.",
        bullets: [
          "szkolenie na własnych danych i dokumentach",
          "instrukcja dla osoby zarządzającej programem",
          "pomoc zdalna w pierwszych tygodniach pracy",
          "aktualizacje i kontrola kopii zapasowych",
          "nowe stanowiska, wydruki i zmiany w konfiguracji",
          "integracja ze sklepem internetowym w kolejnym etapie",
        ],
      },
    ],
    faq: [
      {
        q: "Ile trwa wdrożenie Subiekta nexo w małej firmie?",
        a: "To zależy głównie od danych i liczby stanowisk. Instalacja programu i serwera SQL jest najkrótszą częścią. Więcej czasu zajmuje uporządkowanie kartotek towarów i kontrahentów, ustawienie cenników, dopasowanie wydruków oraz podłączenie urządzeń fiskalnych. Jeśli przenosimy dane z innego programu, dochodzi próbna migracja i kontrola wyników. Realny harmonogram podajemy po konsultacji, kiedy wiemy, z czego startujecie i ile osób trzeba przeszkolić.",
      },
      {
        q: "Czy Subiekt nexo nadaje się dla sklepu i hurtowni?",
        a: "Tak, to jedne z najczęstszych zastosowań programu. W sklepie Subiekt nexo obsługuje sprzedaż z paragonem lub fakturą oraz współpracę z urządzeniami fiskalnymi i czytnikami kodów. W hurtowni przydają się zamówienia od klientów, kilka cenników, rabaty dla odbiorców, kontrola płatności i dokumenty magazynowe. Przy bardziej złożonych zasadach sprzedaży albo planowanej integracji ze sklepem internetowym warto rozważyć wersję PRO – pomagamy to ocenić przed zakupem.",
      },
      {
        q: "Czym różni się Subiekt nexo od Subiekt nexo PRO?",
        a: "Subiekt nexo PRO to rozbudowana wersja programu. Oferuje między innymi większe możliwości dostosowania do sposobu pracy firmy oraz Sferę – mechanizm, dzięki któremu inne systemy, na przykład sklep internetowy, mogą wymieniać dane z Subiektem. Wersja standardowa w zupełności wystarcza wielu małym firmom handlowym i usługowym. Dokładny zakres różnic warto sprawdzić na konkretnych potrzebach, dlatego przed wyborem omawiamy, jak pracujecie.",
      },
      {
        q: "Czy Subiekt nexo obsługuje KSeF?",
        a: "Tak, Subiekt nexo obsługuje Krajowy System e-Faktur – faktury wysyła się i odbiera w programie. Potrzebna jest aktualna wersja Subiekta, do której dostęp daje abonament na ulepszenia, oraz skonfigurowane uprawnienia firmy w KSeF. Przy wdrożeniu ustawiamy połączenie i uprawnienia użytkowników oraz pokazujemy pracownikom, jak wygląda wystawianie faktur w nowym trybie. W kwestiach podatkowych odsyłamy do księgowej.",
      },
      {
        q: "Jak przenieść dane z Subiekta GT do Subiekta nexo?",
        a: "Dane z Subiekta GT można przenieść do nexo, a robimy to w dwóch krokach. Najpierw próbna migracja na kopii bazy i sprawdzenie, czy zgadzają się kartoteki, stany magazynowe i rozrachunki. Potem właściwe przejście w ustalonym dniu, po którym pracujecie już tylko w nexo. Baza GT zostaje jako archiwum. O elementach, które wymagają ręcznego ustawienia, informujemy po próbnej migracji, a nie w trakcie pracy.",
      },
      {
        q: "Czy Subiekt nexo działa na kilku komputerach jednocześnie?",
        a: "Tak. Subiekt nexo przechowuje dane na serwerze Microsoft SQL, z którym łączą się poszczególne stanowiska, więc kilka osób może pracować na tej samej bazie w tym samym czasie. Liczba stanowisk zależy od posiadanej licencji. Przy wdrożeniu wybieramy komputer lub serwer, na którym stoi baza, konfigurujemy sieć i uprawnienia użytkowników oraz ustawiamy automatyczną kopię zapasową, żeby awaria jednego komputera nie oznaczała utraty danych.",
      },
      {
        q: "Czy Subiekta nexo można połączyć ze sklepem internetowym?",
        a: "Tak. Subiekta nexo można połączyć ze sklepem tak, żeby stany i ceny trafiały do sklepu, a zamówienia wracały do programu jako dokumenty. Sposób połączenia zależy od wersji – integracja przez Sferę wymaga wersji PRO, ale są też inne drogi. Dla sklepu elektrycznego RAV przygotowaliśmy integrację WooCommerce z magazynem w Subiekt nexo, obejmującą stany, ceny i rabaty przypisane do klientów.",
      },
    ],
    related: [
      "programy-insert-nexo",
      "integracja-sklepu-z-subiekt-nexo",
      "integracje-sklepow-internetowych",
      "helpdesk-it-dla-firm",
      "sklepy-internetowe-woocommerce",
    ],
    keywords: [
      "wdrożenie Subiekt nexo",
      "Subiekt nexo dla sklepu",
      "Subiekt nexo dla hurtowni",
      "Subiekt nexo PRO",
      "program do faktur i magazynu",
      "Subiekt nexo KSeF",
      "migracja Subiekt GT do nexo",
    ],
    portfolio: ["RAV - Sklep elektryczny", "Hurtownia Budowlana Panek", "WTA Perfekt"],
  },

  // 3. Wsparcie IT dla biur rachunkowych
  {
    slug: "wsparcie-it-dla-biur-rachunkowych",
    navLabel: "Wsparcie IT dla biur rachunkowych",
    kind: "service",
    parent: "opieka-it-dla-firm",
    title: "Wsparcie IT dla biur rachunkowych – informatyk, który zna programy InsERT nexo",
    metaTitle: "Informatyk dla biura rachunkowego – OlekCodeTech",
    metaDescription:
      "Obsługa IT biura rachunkowego: Rewizor, Rachmistrz i Gratyfikant nexo, serwer SQL, kopie zapasowe, praca zdalna, KSeF. Partner InsERT – Wieluń i zdalnie.",
    eyebrow: "Partner InsERT · Biura rachunkowe",
    lead: [
      "Zajmujemy się obsługą IT biur rachunkowych: instalujemy i aktualizujemy Rewizora nexo, Rachmistrza nexo i Gratyfikanta nexo, dbamy o serwer SQL, kopie zapasowe baz, bezpieczny dostęp zdalny i uprawnienia pracowników. Jesteśmy Partnerem InsERT, więc licencje, wdrożenie i codzienną pomoc macie u jednego wykonawcy. Pracujemy zarówno dla jednoosobowych biur, jak i dla większych zespołów.",
      "Działamy na miejscu w Wieluniu i okolicy oraz zdalnie w całej Polsce. Znamy pracę biura od strony narzędzi: konfigurowaliśmy w Rewizorze nexo schematy dekretacji, zbudowaliśmy CRM dla biura księgowego E-Numerika i strony internetowe dla kilku biur rachunkowych. Nie udzielamy porad księgowych ani podatkowych – ustawiamy programy według Waszych ustaleń.",
    ],
    sections: [
      {
        title: "Z czym pomagamy biurom rachunkowym na co dzień",
        text: "Biuro rachunkowe pracuje pod terminy, więc awaria programu czy brak dostępu do bazy w dniu wysyłki deklaracji to realny problem. Naszym zadaniem jest, żeby do takich sytuacji nie dochodziło, a gdy się zdarzą – żeby pomoc była szybka. Instalujemy programy InsERT nexo na stanowiskach, konfigurujemy serwer Microsoft SQL do pracy wielu osób jednocześnie i przeprowadzamy aktualizacje, których w księgowości jest sporo, bo przepisy często się zmieniają. Każdą aktualizację poprzedzamy kopią baz. Ustawiamy uprawnienia tak, żeby pracownik miał dostęp tylko do tego, czym się zajmuje. Dbamy też o komputery, drukarki, sieć i pocztę. Zgłoszenia przyjmujemy telefonicznie i mailowo, a większość spraw rozwiązujemy zdalnie, bez czekania na wizytę informatyka.",
        bullets: [
          "instalacja i aktualizacje Rewizora, Rachmistrza i Gratyfikanta nexo",
          "serwer SQL i praca wielostanowiskowa",
          "uprawnienia pracowników w programach",
          "kopie zapasowe baz przed każdą aktualizacją",
          "komputery, drukarki, sieć i poczta w biurze",
          "pomoc zdalna i wizyty na miejscu",
        ],
      },
      {
        title: "Kopie zapasowe, praca zdalna i bezpieczny dostęp do baz",
        text: "W bazach biura rachunkowego są dane wielu firm i ich pracowników, a ich utrata oznaczałaby odtwarzanie miesięcy pracy. Dlatego kopie zapasowe traktujemy jako podstawę. Ustawiamy automatyczne kopie wszystkich baz, przechowywane w więcej niż jednym miejscu, także poza biurem. Co ważne, okresowo wykonujemy testowe odtwarzanie – kopia, której nikt nigdy nie przywrócił, nie daje pewności. Drugi temat to praca zdalna. Księgowe coraz częściej pracują z domu lub u klienta, więc konfigurujemy bezpieczny dostęp do programów w biurze, zabezpieczony szyfrowanym połączeniem i dodatkowym składnikiem logowania. Nie wystawiamy serwera bezpośrednio do internetu. Porządkujemy też hasła, konta i dostępy byłych pracowników, bo to tam najczęściej powstają luki.",
        bullets: [
          "automatyczne kopie wszystkich baz programów",
          "kopia poza biurem, niezależna od serwera",
          "okresowe testowe odtwarzanie baz",
          "bezpieczny dostęp zdalny do programów w biurze",
          "logowanie dwuskładnikowe do poczty i dysków",
          "porządek w kontach, hasłach i uprawnieniach",
        ],
      },
      {
        title: "Konfiguracja programów InsERT nexo pod biuro rachunkowe",
        text: "Biuro pracuje sprawnie wtedy, gdy program jest ustawiony pod powtarzalne czynności. Pomagamy od strony technicznej skonfigurować Rewizora nexo i Rachmistrza nexo tak, jak ustali księgowa: wprowadzamy plany kont, przygotowujemy schematy dekretacji i ustawiamy automatyczne księgowanie typowych dokumentów. Takie schematy konfigurowaliśmy w Rewizorze nexo dla biura rachunkowego, między innymi dla list płac. Pomagamy też uruchomić import wyciągów bankowych oraz dokumentów, które klienci przekazują w formie elektronicznej, żeby ograniczyć ręczne przepisywanie. W Gratyfikancie nexo wspieramy konfigurację potrzebną do naliczania wynagrodzeń według Waszych wytycznych. Granica jest jasna: decyzje merytoryczne, czyli jak coś zaksięgować, należą do Was. My odpowiadamy za to, żeby program robił to powtarzalnie i bez błędów technicznych.",
        bullets: [
          "plany kont wprowadzone według ustaleń biura",
          "schematy dekretacji dla powtarzalnych dokumentów",
          "automatyczne księgowanie, m.in. list płac",
          "import wyciągów bankowych",
          "import dokumentów przekazywanych przez klientów",
          "wzorce wydruków i zestawień",
        ],
      },
      {
        title: "KSeF i wymiana dokumentów z klientami biura",
        text: "Krajowy System e-Faktur zmienia sposób, w jaki dokumenty trafiają do biura. Zamiast segregatorów i skanów faktury są dostępne w systemie, ale ktoś musi je stamtąd pobrać i wprowadzić do właściwej bazy. Programy InsERT nexo obsługują KSeF, a my pomagamy to poukładać technicznie: konfigurujemy połączenie w programach, ustawiamy uprawnienia osób obsługujących poszczególnych klientów i pilnujemy aktualnych wersji. Część klientów biura zapyta przy tej okazji o własny program do faktur – jako Partner InsERT możemy im dobrać i wdrożyć Subiekta nexo albo Subiekt 123, co ułatwia późniejszą wymianę danych z biurem. Dla pozostałych dokumentów, takich jak umowy czy wyciągi, przygotowujemy uporządkowane, bezpieczne miejsce do przekazywania plików zamiast załączników w mailach.",
        bullets: [
          "konfiguracja KSeF w programach nexo",
          "uprawnienia pracowników do obsługi klientów biura",
          "aktualne wersje programów dzięki abonamentowi na ulepszenia",
          "program do faktur dla klientów biura: Subiekt nexo, Subiekt 123",
          "bezpieczne przekazywanie plików zamiast załączników",
          "jasny obieg: kto pobiera, kto księguje",
        ],
      },
      {
        title: "Bezpieczeństwo danych i RODO od strony technicznej",
        text: "Biuro rachunkowe przetwarza dane osobowe i finansowe klientów, więc odpowiada za ich ochronę. Nie jesteśmy kancelarią i nie udzielamy porad prawnych – zajmujemy się stroną techniczną, czyli tym, żeby zabezpieczenia faktycznie działały. Szyfrujemy dyski laptopów, ustawiamy osobne konta dla każdego pracownika, włączamy logowanie dwuskładnikowe i dbamy o aktualizacje systemów. Konfigurujemy ochronę przed złośliwym oprogramowaniem oraz filtrowanie podejrzanych wiadomości, bo wiele incydentów zaczyna się od maila. Ustalamy, co dzieje się z dostępami, gdy pracownik odchodzi. Przygotowujemy też prosty opis tego, jak wykonywane są kopie i kto ma dostęp do czego – taki dokument przydaje się, gdy klient pyta o zabezpieczenia. Całość dopasowujemy do wielkości biura, bez rozwiązań na wyrost.",
        bullets: [
          "szyfrowanie dysków komputerów i laptopów",
          "osobne konta i logowanie dwuskładnikowe",
          "aktualizacje systemów i ochrona antywirusowa",
          "filtrowanie podejrzanej poczty",
          "procedura odbierania dostępów byłym pracownikom",
          "opis zabezpieczeń i kopii zapasowych biura",
        ],
      },
      {
        title: "Narzędzia wokół księgowości: poczta, CRM, przypomnienia, strona www",
        text: "Programy księgowe to tylko część pracy biura. Resztę stanowi komunikacja z klientami oraz pilnowanie terminów i dokumentów. Wdrażamy pocztę oraz dyski w Microsoft 365 lub Google Workspace, ze wspólnymi skrzynkami i uporządkowanymi folderami klientów. Budujemy systemy CRM dla biur – dla biura księgowego E-Numerika zbudowaliśmy CRM do pracy z klientami biura. W takim systemie w jednym miejscu są klienci, terminy i zadania. Automatyzujemy powtarzalne czynności, na przykład przypomnienia wysyłane do klientów o dostarczeniu dokumentów przed końcem okresu. Zajmujemy się także widocznością biura: zrobiliśmy strony internetowe dla kilku biur rachunkowych. Wszystko to robi jeden zespół, więc poczta, programy InsERT, CRM i strona nie są osobnymi wyspami, tylko elementami jednego uporządkowanego środowiska pracy.",
        bullets: [
          "poczta i dyski: Microsoft 365 lub Google Workspace",
          "CRM dla biura: klienci, terminy, zadania",
          "automatyczne przypomnienia o dokumentach",
          "wspólne skrzynki i uporządkowane foldery klientów",
          "strona www i widoczność biura w Google",
          "jeden wykonawca od programów, IT i strony",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje informatyk dla biura rachunkowego?",
        a: "Koszt zależy od liczby stanowisk, używanych programów i tego, czy potrzebujecie stałej opieki, czy pomocy przy konkretnym zadaniu, na przykład przeniesieniu baz na nowy serwer. Dlatego nie podajemy jednej stawki dla wszystkich. Zaczynamy od bezpłatnej 30-minutowej konsultacji, na której sprawdzamy, jak biuro pracuje dziś, a potem przedstawiamy wycenę. Licencje InsERT sprzedajemy w cenach zgodnych z cennikiem producenta.",
      },
      {
        q: "Jaki program wybrać dla biura rachunkowego?",
        a: "W linii InsERT nexo biura korzystają zwykle z trzech programów: Rachmistrza nexo do księgi przychodów i rozchodów oraz ryczałtu, Rewizora nexo do pełnej księgowości i Gratyfikanta nexo do kadr i płac. Dobór zależy od tego, jakich klientów obsługujecie i ile osób pracuje w biurze. Pomagamy wybrać zestaw programów i wersję, a potem instalujemy je i konfigurujemy do pracy wielostanowiskowej.",
      },
      {
        q: "Jak zrobić kopię zapasową baz Rewizora nexo?",
        a: "Rewizor nexo przechowuje dane na serwerze Microsoft SQL, więc kopię wykonuje się z poziomu programu lub narzędziami serwera. W praktyce ważne są trzy rzeczy: kopia ma robić się automatycznie, trafiać także poza komputer z bazą i być okresowo testowo odtwarzana. Ustawiamy taki harmonogram dla wszystkich baz biura i sprawdzamy, czy z kopii rzeczywiście da się przywrócić dane.",
      },
      {
        q: "Czy księgowa może pracować zdalnie w Rewizorze nexo?",
        a: "Tak, pod warunkiem bezpiecznej konfiguracji. Najczęściej ustawiamy szyfrowane połączenie z siecią biura i pracę na komputerze lub serwerze, który stoi w biurze, z dodatkowym składnikiem logowania. Dzięki temu bazy nie opuszczają biura, a pracownik ma do nich dostęp z domu lub od klienta. Nie zalecamy udostępniania serwera bezpośrednio w internecie, bo naraża to dane klientów biura.",
      },
      {
        q: "Czy da się zautomatyzować księgowanie dokumentów w Rewizorze nexo?",
        a: "W dużej części tak. Rewizor nexo pozwala przygotować schematy dekretacji, według których powtarzalne dokumenty księgują się automatycznie na wskazane konta. Konfigurowaliśmy takie schematy dla biura rachunkowego, między innymi dla list płac. Zasady księgowania ustala księgowa – my przekładamy je na ustawienia programu i testujemy na przykładowych dokumentach. Nie udzielamy porad księgowych ani podatkowych.",
      },
      {
        q: "Czy obsługujecie biura rachunkowe spoza Wielunia?",
        a: "Tak. Instalację, aktualizacje i konfigurację programów InsERT nexo, kopie zapasowe oraz bieżącą pomoc prowadzimy zdalnie dla biur z całej Polski. Na miejscu pracujemy w Wieluniu i okolicy, między innymi w Wieruszowie, Sieradzu, Kępnie i Kluczborku. Wizyta bywa potrzebna przy wymianie serwera lub porządkowaniu sieci, ale codzienne zgłoszenia zwykle rozwiązujemy przez zdalny pulpit, bez czekania na przyjazd informatyka.",
      },
      {
        q: "Jak przypominać klientom biura rachunkowego o dostarczeniu dokumentów?",
        a: "Najprościej zautomatyzować to w systemie CRM. Każdy klient ma tam przypisane terminy, a system sam wysyła przypomnienie e-mailem przed końcem okresu i ponawia je, gdy dokumenty nie dotarły. Pracownik widzi, kto dostarczył już komplet, a kto jeszcze nie. CRM dla biura księgowego zbudowaliśmy dla E-Numeriki, a podobne rozwiązanie możemy dopasować do sposobu pracy Waszego biura.",
      },
    ],
    related: [
      "programy-insert-nexo",
      "helpdesk-it-dla-firm",
      "systemy-crm-dla-firm",
      "automatyzacja-pracy-biurowej",
      "integracje-microsoft-365-sharepoint",
    ],
    keywords: [
      "informatyk dla biura rachunkowego",
      "obsługa IT biura rachunkowego",
      "Rewizor nexo wdrożenie",
      "Rachmistrz nexo biuro rachunkowe",
      "Gratyfikant nexo",
      "program dla biura rachunkowego",
      "kopie zapasowe baz Rewizor nexo",
    ],
    portfolio: [
      "CRM E-Numerika Biuro Księgowe",
      "E-Numerika | Usługi Księgowe",
      "BKP | Biuro Księgowo Podatkowe",
    ],
  },

  // 4. Integracja sklepu z Subiekt nexo
  {
    slug: "integracja-sklepu-z-subiekt-nexo",
    navLabel: "Integracja sklepu z Subiekt nexo",
    kind: "service",
    parent: "integracje-systemow-it",
    title: "Integracja sklepu internetowego z Subiekt nexo – stany, ceny i zamówienia bez przepisywania",
    metaTitle: "Integracja sklepu z Subiekt nexo – OlekCodeTech",
    metaDescription:
      "Integracja WooCommerce i Allegro z Subiekt nexo: synchronizacja stanów, cen, rabatów i zamówień. Sfera, wymiana plików, Sello NX. Partner InsERT – sprawdź.",
    eyebrow: "Partner InsERT · Integracje z Subiektem",
    lead: [
      "Łączymy sklepy internetowe z Subiektem nexo tak, żeby towary, stany magazynowe i ceny trafiały z programu do sklepu, a zamówienia wracały do Subiekta jako gotowe dokumenty. Usługa jest dla właścicieli sklepów WooCommerce i innych platform oraz sprzedawców Allegro, którzy dziś przepisują zamówienia ręcznie albo poprawiają stany po każdej sprzedaży. Jesteśmy jednocześnie Partnerem InsERT i firmą programistyczną.",
      "To połączenie ma znaczenie: znamy Subiekta od strony konfiguracji, a sklep od strony kodu. Dla sklepu elektrycznego RAV przygotowaliśmy integrację sklepu WooCommerce z magazynem w Subiekt nexo, obejmującą stany, ceny i rabaty przypisane do konkretnych klientów. Pracujemy z Wielunia, zdalnie dla sklepów z całej Polski.",
    ],
    sections: [
      {
        title: "Co synchronizujemy między sklepem a Subiektem nexo",
        text: "Zakres integracji ustalamy na początku, bo od niego zależy sposób połączenia i koszt. Punktem wyjścia jest zwykle zasada, że Subiekt nexo jest źródłem prawdy o towarze: tam powstaje kartoteka, tam jest stan i cena. Do sklepu trafiają towary z nazwą, symbolem, stawką VAT i jednostką, aktualne stany magazynowe oraz ceny z wybranego cennika. Jeśli sprzedajecie firmom, przenosimy także rabaty i ceny indywidualne, żeby zalogowany klient widział w sklepie swoje warunki. W drugą stronę płyną zamówienia: w Subiekcie powstaje zamówienie od klienta albo od razu dokument sprzedaży, z kontrahentem założonym lub dopasowanym po NIP-ie albo adresie e-mail. Do sklepu może wracać status realizacji, a opisy i zdjęcia zwykle zostają po stronie sklepu.",
        bullets: [
          "towary: nazwa, symbol, kod kreskowy, VAT, jednostka",
          "stany magazynowe z jednego lub kilku magazynów",
          "ceny i cenniki, w tym ceny hurtowe",
          "rabaty i ceny indywidualne per klient",
          "zamówienia ze sklepu jako dokumenty w Subiekcie",
          "kontrahenci i statusy realizacji zamówień",
        ],
      },
      {
        title: "Sposoby połączenia: Sfera, wymiana plików, gotowe integratory",
        text: "Subiekta nexo można połączyć ze sklepem na kilka sposobów i żaden nie jest najlepszy dla wszystkich. Sfera to mechanizm InsERT dostępny w wersjach PRO, przez który zewnętrzna aplikacja może odczytywać dane i tworzyć dokumenty zgodnie z regułami programu. Daje największe możliwości, zwłaszcza gdy zamówienia mają automatycznie trafiać do Subiekta, ale wymaga wersji PRO. Wymiana plików polega na cyklicznym przekazywaniu stanów i cen w pliku, który sklep wczytuje według harmonogramu – jest prostsza i sprawdza się, gdy wystarczy synchronizacja w jedną stronę. Trzecia droga to gotowe integratory i wtyczki, które przy typowym sklepie bywają najszybszym rozwiązaniem. Na konsultacji porównujemy te opcje dla Waszego przypadku i mówimy otwarcie, kiedy pisanie integracji na zamówienie nie ma sensu.",
        bullets: [
          "Sfera (wersje PRO): wymiana danych i tworzenie dokumentów",
          "wymiana plików: stany i ceny według harmonogramu",
          "gotowy integrator: typowy sklep, szybki start",
          "integracja na zamówienie: rabaty per klient, nietypowe reguły",
          "wybór po sprawdzeniu wersji i konfiguracji Subiekta",
          "jasna informacja przed wyceną, co jest możliwe",
        ],
      },
      {
        title: "Sello NX, vendero i Allegro – kiedy wystarczą rozwiązania InsERT",
        text: "InsERT ma własne narzędzia do sprzedaży internetowej i warto je rozważyć, zanim zamówicie integrację pisaną od zera. Sello NX to program do obsługi sprzedaży w internecie, między innymi na Allegro, współpracujący z Subiektem nexo. Jeśli sprzedajecie głównie na Allegro i chcecie mieć oferty, zamówienia i stany powiązane z magazynem, bywa naturalnym wyborem. vendero to sklep internetowy od InsERT, powiązany z Subiektem – rozwiązanie dla firm, które dopiero zaczynają sprzedaż online i nie mają jeszcze sklepu. Jako Partner InsERT pomagamy oba rozwiązania dobrać i uruchomić. Własna integracja ma przewagę wtedy, gdy macie już rozbudowany sklep WooCommerce, indywidualne cenniki, nietypowe warianty lub procesy, których gotowe narzędzia nie obsługują. Często łączy się obie drogi: Allegro przez Sello NX, a sklep przez integrację.",
        bullets: [
          "Sello NX: sprzedaż na Allegro powiązana z Subiektem nexo",
          "vendero: sklep internetowy od InsERT dla zaczynających",
          "własna integracja: istniejący sklep WooCommerce",
          "własna integracja: ceny i rabaty per klient w sprzedaży B2B",
          "połączenie dróg: Allegro osobno, sklep osobno",
          "jeden magazyn w Subiekcie dla wszystkich kanałów",
        ],
      },
      {
        title: "Typowe problemy integracji z Subiektem i jak je rozwiązujemy",
        text: "Integracja sklepu z Subiektem rzadko wykłada się na samym połączeniu. Kłopoty biorą się ze szczegółów. Warianty: w sklepie produkt ma rozmiary i kolory, a w magazynie każdy wariant trzeba powiązać z właściwą pozycją po symbolu. Jednostki: towar kupowany w kartonach, a sprzedawany na sztuki wymaga przelicznika. VAT: stawki mapujemy jawnie, podobnie jak ceny netto i brutto, żeby uniknąć groszowych różnic na dokumentach. Zdublowane zamówienia eliminujemy, zapisując numer zamówienia ze sklepu przy dokumencie i sprawdzając go przed każdym zapisem. Ustalamy też harmonogram: stany można wysyłać co kilka minut, pełne cenniki rzadziej. Wreszcie pytanie, co gdy komputer z Subiektem jest wyłączony – wtedy sklep sprzedaje na ostatnich znanych stanach, a zamówienia czekają w kolejce i trafiają do programu po jego włączeniu.",
        bullets: [
          "warianty: powiązanie każdego wariantu z towarem w Subiekcie",
          "jednostki: przeliczniki sztuk, opakowań i kartonów",
          "VAT i zaokrąglenia: jawne mapowanie stawek oraz cen netto i brutto",
          "zdublowane zamówienia: numer ze sklepu jako klucz kontrolny",
          "harmonogram: stany często, cenniki i kartoteki rzadziej",
          "wyłączony komputer: kolejka zamówień i baza na stale działającej maszynie",
        ],
      },
      {
        title: "Przebieg wdrożenia: analiza, test na kopii bazy, uruchomienie, monitoring",
        text: "Integracja dotyka dokumentów sprzedaży i magazynu, więc nie testujemy jej na działającej firmie. Zaczynamy od analizy: sprawdzamy wersję Subiekta, sposób prowadzenia kartotek, cenniki oraz to, jak zbudowany jest sklep. Spisujemy, jakie dane płyną w którą stronę i jak często. Potem budujemy integrację i testujemy ją na kopii bazy Subiekta oraz na kopii sklepu – składamy próbne zamówienia z różnymi wariantami, rabatami, formami płatności i dostawy, a wynik sprawdzamy razem z osobą, która zna Wasz magazyn. Uruchomienie planujemy na spokojniejszy dzień i zaczynamy zwykle od stanów oraz cen, a zamówienia włączamy w drugim kroku. Przez pierwsze dni porównujemy dane w obu systemach. Integracja prowadzi dziennik operacji i powiadamia o błędach e-mailem.",
        bullets: [
          "analiza Subiekta, sklepu i przepływu danych",
          "stała wycena po sprawdzeniu możliwości technicznych",
          "testy na kopii bazy i kopii sklepu",
          "próbne zamówienia z wariantami i rabatami",
          "uruchomienie etapami: najpierw stany i ceny",
          "dziennik operacji i powiadomienia o błędach",
        ],
      },
      {
        title: "Nasz przykład: sklep elektryczny RAV i opieka po wdrożeniu",
        text: "Dla sklepu elektrycznego RAV przygotowaliśmy integrację sklepu WooCommerce z magazynem prowadzonym w Subiekt nexo. Oprócz stanów i cen ważne były tu rabaty przypisane do konkretnych klientów – tak, żeby warunki w sklepie odpowiadały tym ustalonym w programie. To dobry przykład sytuacji, w której gotowa wtyczka zwykle nie wystarcza. Po uruchomieniu integracja wymaga opieki: InsERT wydaje nowe wersje Subiekta, WooCommerce i wtyczki też się aktualizują, a w firmie dochodzą nowe grupy towarów czy magazyny. Dlatego oferujemy stałą opiekę – sprawdzamy integrację po aktualizacjach, reagujemy na powiadomienia o błędach i rozwijamy ją o kolejne elementy. Zakres i koszt ustalamy indywidualnie: wdrożenie wyceniamy po bezpłatnej 30-minutowej konsultacji, a ceny licencji są zgodne z cennikiem producenta.",
        bullets: [
          "WooCommerce połączony z magazynem w Subiekt nexo",
          "stany i ceny przenoszone z programu do sklepu",
          "rabaty przypisane do konkretnych klientów",
          "kontrola integracji po aktualizacjach Subiekta i sklepu",
          "reakcja na powiadomienia o błędach",
          "rozbudowa o kolejne kanały i dokumenty",
        ],
      },
    ],
    faq: [
      {
        q: "Jak zintegrować WooCommerce z Subiektem nexo?",
        a: "Są trzy główne drogi: integracja przez Sferę, dostępną w Subiekcie nexo PRO, cykliczna wymiana plików ze stanami i cenami albo gotowy integrator. Wybór zależy od wersji Subiekta, liczby zamówień i tego, czy zamówienia mają automatycznie trafiać do programu. Zaczynamy od sprawdzenia Waszej konfiguracji, potem testujemy połączenie na kopii bazy i kopii sklepu, a dopiero na końcu uruchamiamy je na działającym sklepie.",
      },
      {
        q: "Czy do integracji sklepu z Subiektem nexo potrzebna jest wersja PRO?",
        a: "Nie zawsze. Wersja PRO jest potrzebna, gdy integracja ma korzystać ze Sfery, czyli mechanizmu InsERT pozwalającego zewnętrznej aplikacji wymieniać dane z programem i tworzyć w nim dokumenty. Prostszą synchronizację stanów i cen da się czasem oprzeć na wymianie plików. Zanim doradzimy zakup lub zmianę wersji, sprawdzamy, jaki zakres integracji jest Wam faktycznie potrzebny i co da się osiągnąć w obecnej wersji programu.",
      },
      {
        q: "Jak często synchronizują się stany magazynowe między Subiektem a sklepem?",
        a: "Częstotliwość ustalamy indywidualnie. Stany można przesyłać co kilka lub kilkanaście minut, a pełne cenniki i kartoteki rzadziej, na przykład raz na dobę, żeby nie obciążać sklepu ani bazy. Przy towarach, które szybko się wyprzedają, warto dodać zapas bezpieczeństwa, czyli pokazywać w sklepie stan pomniejszony o kilka sztuk. Dodatkowo integracja okresowo porównuje wszystkie stany i wyrównuje różnice.",
      },
      {
        q: "Co się dzieje z zamówieniami, gdy komputer z Subiektem jest wyłączony?",
        a: "Sklep działa dalej i przyjmuje zamówienia, ale nie dostaje nowych stanów ani cen – pokazuje ostatnie znane. Zamówienia czekają w kolejce i trafiają do Subiekta po ponownym uruchomieniu, bez dublowania. Żeby tego uniknąć, zalecamy trzymanie bazy na komputerze lub serwerze, który pracuje stale, a nie na laptopie zabieranym do domu. Integracja może też powiadomić e-mailem, gdy synchronizacja nie działa dłużej niż ustalony czas.",
      },
      {
        q: "Jak połączyć Allegro z Subiektem nexo?",
        a: "Najprostszą drogą jest zwykle Sello NX – program InsERT do obsługi sprzedaży internetowej, między innymi na Allegro, który współpracuje z Subiektem nexo. Dzięki temu oferty, zamówienia i stany są powiązane z jednym magazynem. Alternatywą są zewnętrzne integratory albo integracja pisana na zamówienie, gdy macie nietypowe wymagania. Jako Partner InsERT pomagamy dobrać i uruchomić Sello NX, a w razie potrzeby łączymy je z integracją sklepu.",
      },
      {
        q: "Ile kosztuje integracja sklepu internetowego z Subiektem nexo?",
        a: "Koszt zależy od zakresu: czy synchronizowane są same stany i ceny, czy także zamówienia, kontrahenci i rabaty per klient, ile jest wariantów towarów i jaką wersję Subiekta posiadacie. Dlatego wycenę przedstawiamy po bezpłatnej 30-minutowej konsultacji i sprawdzeniu możliwości technicznych. Jest to stała kwota za ustalony zakres. Jeśli potrzebna jest licencja lub zmiana wersji programu, jej cena jest zgodna z cennikiem producenta.",
      },
      {
        q: "Czy rabaty i indywidualne ceny klientów z Subiekta mogą być widoczne w sklepie?",
        a: "Tak. Taką integrację przygotowaliśmy dla sklepu elektrycznego RAV: obok stanów i cen do sklepu WooCommerce trafiają rabaty przypisane do konkretnych klientów. Chodzi o to, żeby po zalogowaniu klient widział ceny zgodne ze swoimi warunkami handlowymi, bez ręcznego ustawiania ich w dwóch miejscach. Wymaga to powiązania kont klientów w sklepie z kontrahentami w Subiekcie oraz jasnej reguły, które rabaty mają pierwszeństwo.",
      },
    ],
    related: [
      "integracje-sklepow-internetowych",
      "wdrozenie-subiekt-nexo",
      "programy-insert-nexo",
      "integracje-api-crm-erp",
      "sklepy-internetowe-woocommerce",
    ],
    keywords: [
      "integracja WooCommerce Subiekt nexo",
      "integracja sklepu z Subiektem",
      "Sfera Subiekt nexo integracja",
      "synchronizacja stanów Subiekt sklep internetowy",
      "Allegro Subiekt nexo",
      "Sello NX Subiekt nexo",
      "integracja sklepu internetowego z Subiekt nexo",
    ],
    portfolio: [
      "RAV - Sklep elektryczny",
      "WTA Perfekt",
      "SilverClean | Profesjonalne środki czystości i maszyny sprzątające",
    ],
  },
];
