import type { LandingPage } from "./types";

/**
 * Podstrony produktów InsERT (część 1): Subiekt nexo, Subiekt nexo PRO, Subiekt GT, Subiekt 123, vendero.
 * Wymagania sieci sprzedaży InsERT: H1 = "Nazwa - przeznaczenie", <title> = "H1 | OlekCodeTech",
 * każdy nagłówek h2 zawiera nazwę produktu, opisy napisane własnymi słowami na podstawie stron producenta.
 */
export const insertProducts1: LandingPage[] = [
  // 1. Subiekt nexo
  {
    slug: "subiekt-nexo",
    navLabel: "Subiekt nexo",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Subiekt nexo",
      line: "nexo",
      image: "/images/insert/subiekt-nexo.webp",
      producerUrl: "https://www.insert.com.pl/programy_dla_firm/sprzedaz/subiekt_nexo/opis.html",
    },
    title: "Subiekt nexo - program do sprzedaży, faktur i magazynu",
    metaTitle: "Subiekt nexo - program do sprzedaży, faktur i magazynu | OlekCodeTech",
    metaDescription:
      "Subiekt nexo: faktury z KSeF, zamówienia, magazyn, kasa i rozrachunki w jednym programie. Kupisz go i wdrożysz z OlekCodeTech – w Wieluniu oraz zdalnie.",
    eyebrow: "InsERT nexo · sprzedaż i magazyn",
    lead: [
      "Subiekt nexo to program, w którym mała lub średnia firma prowadzi całą sprzedaż: wystawia faktury i paragony, przyjmuje zamówienia, pilnuje stanów magazynowych i płatności od klientów. Sprawdza się w sklepie, hurtowni, warsztacie i firmie usługowej, a jego obsługi da się nauczyć bez informatycznego przygotowania.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, więc Subiekt nexo możecie u nas kupić, zainstalować i skonfigurować pod własne dokumenty. Jeśli trzeba, łączymy go także ze sklepem internetowym albo innym systemem, z którego korzystacie na co dzień.",
    ],
    sections: [
      {
        title: "Dla kogo jest Subiekt nexo",
        text: "Subiekt nexo wybierają firmy, którym przestał wystarczać prosty program do faktur, a nie potrzebują jeszcze rozbudowanego systemu dla dużego przedsiębiorstwa. Dobrze odnajduje się w handlu detalicznym i hurtowym, w warsztatach oraz zakładach usługowych, czyli wszędzie tam, gdzie obok sprzedaży trzeba panować nad towarem i pieniędzmi. W jednym miejscu macie dokumenty sprzedaży i zakupu, magazyn, kasę, rachunki bankowe oraz rozliczenia z kontrahentami. Program nie jest przypisany do jednej branży – podobnie pracuje w nim sklep z częściami, hurtownia spożywcza i serwis. Ekrany są czytelne, więc nowa osoba w biurze szybko zaczyna samodzielnie wystawiać dokumenty. To rozsądny wybór, gdy sprzedajecie towary, prowadzicie magazyn i chcecie wiedzieć, kto zalega z zapłatą.",
        bullets: [
          "sklepy stacjonarne i punkty sprzedaży",
          "hurtownie i firmy handlowe",
          "warsztaty, serwisy i zakłady usługowe",
          "firmy, które prowadzą magazyn i przyjmują zamówienia",
          "przedsiębiorcy, którzy chcą sami pilnować należności",
        ],
      },
      {
        title: "Najważniejsze funkcje programu Subiekt nexo",
        text: "Subiekt nexo obsługuje komplet dokumentów handlowych i magazynowych, przy czym sprzedaż i wydanie towaru mogą być od siebie niezależne. Do jednej faktury program sam przygotuje dokument WZ, a kilka wcześniejszych wydań połączy w jedną fakturę zbiorczą. Mocną stroną są zamówienia – termin realizacji ustawia się osobno dla każdej pozycji. Ceny można układać w cenniki i przypisywać je wybranym klientom, a rabaty uzależniać od jednostki miary lub progu ilościowego. Część finansowa obejmuje kasę, rachunki bankowe z przelewami i wyciągami oraz rozrachunki z wezwaniami do zapłaty, notami odsetkowymi i kompensatami. Program współpracuje też z kasami i drukarkami fiskalnymi, wagami etykietującymi i czytnikami kodów kreskowych, a zmiany w asortymencie sam przekazuje do urządzeń.",
        bullets: [
          "faktury, faktury pro forma, korekty i dokumenty magazynowe",
          "zamówienia z osobnym terminem dla każdej pozycji",
          "kartoteka towarów, usług, kompletów i opakowań zwrotnych",
          "cenniki przypisywane do klientów, rabaty progowe",
          "kasa, bank, rozrachunki, wezwania do zapłaty i noty odsetkowe",
          "kasy i drukarki fiskalne, wagi etykietujące, czytniki kodów",
        ],
      },
      {
        title: "Subiekt nexo a KSeF i pozostałe programy InsERT nexo",
        text: "Subiekt nexo współpracuje z Krajowym Systemem e-Faktur: faktury ustrukturyzowane przygotowuje się, wysyła i archiwizuje bezpośrednio w programie, bez przepisywania danych do innych narzędzi. Program należy do pakietu InsERT nexo, w którym są także Rachmistrz nexo do księgi przychodów i rozchodów oraz ryczałtu, Rewizor nexo do pełnej księgowości, Gratyfikant nexo do kadr i płac oraz Gestor nexo, czyli CRM. Z programami księgowymi Subiekt nexo jest zintegrowany, więc dokumenty sprzedaży nie muszą być wprowadzane drugi raz. W programie znajdziecie również narzędzia związane z RODO: zgody i cele przetwarzania, obowiązki informacyjne oraz anonimizację danych. Aktywny abonament producenta daje dostęp do aktualizacji i funkcji dodatkowych, na przykład pobierania danych kontrahentów z GUS.",
        bullets: [
          "wysyłka i archiwizacja faktur ustrukturyzowanych w KSeF",
          "integracja z Rachmistrzem nexo i Rewizorem nexo",
          "wspólny pakiet z Gratyfikantem nexo i Gestorem nexo",
          "obsługa zgód, obowiązków informacyjnych i anonimizacji (RODO)",
          "abonament: aktualizacje, dane z GUS, kursy walut",
        ],
      },
      {
        title: "Czym Subiekt nexo różni się od Subiekt nexo PRO i Subiekt GT",
        text: "Subiekt nexo to wersja standardowa nowszej generacji programu. Subiekt nexo PRO zawiera wszystko to samo, a do tego rozwiązania dla bardziej wymagających firm: obsługę oddziałów, cenniki dodatkowe, pola własne, własne raporty i wzorce wydruków, pracę na partiach towaru oraz Sferę, która pozwala tworzyć własne rozszerzenia. W wersji standardowej biblioteka załączników ma limit liczby plików, w PRO takiego ograniczenia nie ma. Subiekt GT to z kolei wcześniejsza linia, która pracuje z programami księgowymi InsERT GT, a nie nexo. Jeśli zaczynacie od zera i nie macie nietypowych wymagań, wersja standardowa zwykle wystarcza. Gdy planujecie integrację ze sklepem, kilka oddziałów albo rozbudowaną logistykę zamówień, warto od razu porozmawiać o PRO.",
        bullets: [
          "Subiekt nexo: pełna sprzedaż, magazyn i finanse w wersji standardowej",
          "Subiekt nexo PRO: oddziały, cenniki dodatkowe, pola własne, Sfera",
          "Subiekt nexo PRO: własne raporty i wzorce wydruków",
          "Subiekt GT: wcześniejsza linia, współpracuje z księgowością InsERT GT",
          "wybór wersji ustalamy na bezpłatnej konsultacji",
        ],
      },
      {
        title: "Zakup i wdrożenie Subiekt nexo w OlekCodeTech",
        text: "Subiekt nexo kupicie u nas w cenie zgodnej z aktualnym cennikiem producenta, a wdrożenie wyceniamy osobno, bo zależy od liczby stanowisk i zakresu prac. Zaczynamy od bezpłatnej 30-minutowej konsultacji, na której ustalamy, jak dziś sprzedajecie i co program ma uporządkować. Potem instalujemy go razem z serwerem bazy danych, zakładamy użytkowników, ustawiamy wzorce wydruków z Waszym logo i podłączamy urządzenia fiskalne. Kartoteki towarów i klientów importujemy z poprzedniego programu lub arkuszy, żeby nikt nie wpisywał ich ręcznie. Na koniec szkolimy pracowników na Waszych danych i ustawiamy automatyczne kopie zapasowe. Pracujemy na miejscu w Wieluniu i okolicy – w Wieruszowie, Sieradzu, Kępnie i Kluczborku – oraz zdalnie w całej Polsce.",
        bullets: [
          "licencja w cenie zgodnej z cennikiem producenta",
          "instalacja, serwer bazy danych i praca wielu stanowisk",
          "import kartotek towarów i klientów",
          "wzorce wydruków, uprawnienia, urządzenia fiskalne",
          "szkolenie pracowników i opieka po wdrożeniu",
          "integracja ze sklepem WooCommerce lub innym systemem",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Subiekt nexo?",
        a: "Subiekt nexo jest przeznaczony dla małych i średnich firm, które sprzedają towary lub usługi i chcą mieć w jednym programie faktury, zamówienia, magazyn oraz rozliczenia z klientami. Korzystają z niego sklepy, hurtownie, warsztaty i zakłady usługowe. Nie jest związany z konkretną branżą, więc dopasowujemy go do sposobu pracy Waszej firmy podczas konfiguracji.",
      },
      {
        q: "Czy Subiekt nexo obsługuje KSeF?",
        a: "Tak. Subiekt nexo jest zintegrowany z Krajowym Systemem e-Faktur – faktury ustrukturyzowane tworzy się, wysyła i archiwizuje bezpośrednio w programie. Samo włączenie funkcji to jednak nie wszystko: trzeba skonfigurować połączenie, nadać uprawnienia i ustalić, kto w firmie odpowiada za e-faktury. Pomagamy w tym przy wdrożeniu albo jako osobną usługę dla firm, które już pracują w programie.",
      },
      {
        q: "Czym Subiekt nexo różni się od Subiekt nexo PRO?",
        a: "Subiekt nexo PRO ma wszystkie funkcje wersji standardowej oraz dodatkowe rozwiązania: obsługę oddziałów, cenniki dodatkowe, pola własne, własne raporty i wydruki, pracę na partiach towaru oraz Sferę do tworzenia własnych rozszerzeń. Subiekt nexo wystarcza większości małych firm handlowych i usługowych. O wersji PRO warto pomyśleć przy integracjach i bardziej złożonej logistyce.",
      },
      {
        q: "Ile kosztuje Subiekt nexo?",
        a: "Cena licencji Subiekt nexo jest zgodna z aktualnym cennikiem producenta i zależy między innymi od liczby stanowisk. Wdrożenie wyceniamy osobno, ponieważ inaczej wygląda instalacja na jednym komputerze, a inaczej praca kilku osób z importem danych i szkoleniem. Konkretną kwotę podajemy po bezpłatnej 30-minutowej konsultacji, kiedy znamy już zakres prac.",
      },
      {
        q: "Czy pomożecie wdrożyć Subiekt nexo i przenieść dane ze starego programu?",
        a: "Tak. Instalujemy Subiekt nexo, konfigurujemy go pod Wasze dokumenty i szkolimy pracowników. Kartoteki towarów oraz klientów przenosimy z poprzedniego programu lub z arkuszy, a zakres danych możliwych do przeniesienia sprawdzamy wcześniej na kopii. Działamy na miejscu w Wieluniu i okolicznych miastach oraz zdalnie, a po wdrożeniu możemy objąć program stałą opieką.",
      },
    ],
    related: [
      "subiekt-nexo-pro",
      "subiekt-gt",
      "wdrozenie-subiekt-nexo",
      "integracja-sklepu-z-subiekt-nexo",
      "rachmistrz-nexo",
    ],
    keywords: [
      "Subiekt nexo",
      "Subiekt nexo Wieluń",
      "Subiekt nexo KSeF",
      "Subiekt nexo wdrożenie",
      "Subiekt nexo cena",
      "program do sprzedaży i magazynu Subiekt nexo",
      "gdzie kupić Subiekt nexo",
    ],
  },

  // 2. Subiekt nexo PRO
  {
    slug: "subiekt-nexo-pro",
    navLabel: "Subiekt nexo PRO",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Subiekt nexo PRO",
      line: "nexo PRO",
      image: "/images/insert/subiekt-nexo-pro.webp",
      producerUrl: "https://www.insert.com.pl/programy_dla_firm/sprzedaz/subiekt_nexo_pro/opis.html",
    },
    title: "Subiekt nexo PRO - rozbudowany system sprzedaży i magazynu",
    metaTitle: "Subiekt nexo PRO - rozbudowany system sprzedaży i magazynu | OlekCodeTech",
    metaDescription:
      "Subiekt nexo PRO: oddziały, cenniki dodatkowe, partie towaru, własne raporty i Sfera do integracji. Sprzedaż licencji i wdrożenie – OlekCodeTech z Wielunia.",
    eyebrow: "InsERT nexo PRO · sprzedaż i magazyn",
    lead: [
      "Subiekt nexo PRO to rozszerzona wersja Subiekta nexo dla firm, którym standardowy program do sprzedaży zaczyna być za ciasny. Ma wszystko, co wersja podstawowa, a dodatkowo obsługuje oddziały, rozbudowane cenniki, partie towaru i zaawansowaną realizację zamówień. Można go też dopasować do własnych procesów dzięki polom własnym, własnym raportom i Sferze.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT. Subiekt nexo PRO kupicie u nas razem z instalacją, konfiguracją i szkoleniem, a ponieważ jesteśmy też firmą programistyczną, połączymy go ze sklepem internetowym lub innym systemem w Waszej firmie.",
    ],
    sections: [
      {
        title: "Dla kogo jest Subiekt nexo PRO",
        text: "Subiekt nexo PRO jest dla małych i średnich firm, których sprzedaż ma bardziej złożony przebieg niż wystawienie faktury i zdjęcie towaru ze stanu. Sięgają po niego przedsiębiorstwa z kilkoma oddziałami, hurtownie z wieloma dostawcami i cennikami, firmy pilnujące terminów ważności oraz sklepy internetowe, które chcą wymieniać dane z innymi systemami. Wersja PRO przydaje się także wtedy, gdy różni pracownicy mają widzieć różne magazyny i oddziały, a właściciel chce wiedzieć, kto i co zmienił w dokumentach. Program pozostaje przy tym tym samym Subiektem – osoby znające wersję standardową nie muszą uczyć się go od nowa. Wybierzcie go, jeśli już dziś wiecie, że będziecie potrzebować dostosowań lub integracji.",
        bullets: [
          "firmy z kilkoma oddziałami i magazynami",
          "hurtownie z wieloma dostawcami tego samego towaru",
          "sprzedaż towarów z terminem ważności i numerami partii",
          "sklepy internetowe wymagające integracji z magazynem",
          "firmy, które chcą własnych raportów, pól i wydruków",
        ],
      },
      {
        title: "Najważniejsze funkcje programu Subiekt nexo PRO",
        text: "Subiekt nexo PRO zawiera cały zakres wersji standardowej: dokumenty handlowe i magazynowe, zamówienia, kasę, bank, rozrachunki oraz obsługę urządzeń fiskalnych. Do tego dochodzą funkcje dla bardziej wymagających. Każdy oddział ma własny cennik główny, a cenniki dodatkowe mogą obowiązywać w wybranym czasie i tylko dla wskazanych klientów. Towar można kupować i sprzedawać z konkretnych dostaw, numerować partie automatycznie i ukrywać te po terminie ważności. Zamówienia realizuje się zbiorczo lub seryjnie, a widoki robocze, takie jak „Asortyment na wyczerpaniu”, podpowiadają, co trzeba domówić. Po stronie finansów są płatności ratalne, sesje kasowe do kontroli pracy kasjera i link do szybkiej zapłaty za dokument. Program prowadzi też pełny ślad rewizyjny zmian.",
        bullets: [
          "oddziały z własnym cennikiem głównym i cenniki dodatkowe",
          "partie towaru, terminy ważności, rezerwacja wybranych dostaw",
          "zbiorcza i seryjna realizacja zamówień od klientów",
          "wielu dostawców jednego towaru, zamienniki, kosztorysowanie usług",
          "raty, sesje kasowe, szybkie płatności linkiem",
          "role użytkowników, dostęp do magazynów i oddziałów, ślad rewizyjny",
        ],
      },
      {
        title: "Subiekt nexo PRO a KSeF, Sfera i księgowość InsERT nexo PRO",
        text: "Subiekt nexo PRO jest zintegrowany z Krajowym Systemem e-Faktur, więc e-faktury przygotowujecie, wysyłacie i archiwizujecie w tym samym programie, w którym powstaje sprzedaż. Dokumenty przechodzą do księgowości bez przepisywania – program współpracuje z Rachmistrzem nexo PRO i Rewizorem nexo PRO. Dla biura rachunkowego można przygotować plik JPK_V7, także z własnymi wyrażeniami. Najważniejszym wyróżnikiem linii PRO jest Sfera dla Subiekta nexo, czyli mechanizm pozwalający programistom tworzyć własne rozwiązania działające na danych programu. To właśnie dzięki niej da się połączyć Subiekta ze sklepem internetowym czy systemem produkcyjnym. Dla firm sprzedających za granicę jest pakiet e-Commerce z procedurą OSS oraz obsługa deklaracji INTRASTAT.",
        bullets: [
          "wystawianie, wysyłka i archiwizacja e-faktur w KSeF",
          "integracja z Rachmistrzem nexo PRO i Rewizorem nexo PRO",
          "Sfera dla Subiekta nexo – własne rozszerzenia i integracje",
          "JPK_V7 dla biura rachunkowego z wyrażeniami użytkownika",
          "sprzedaż transgraniczna w procedurze OSS, deklaracje INTRASTAT",
        ],
      },
      {
        title: "Czym Subiekt nexo PRO różni się od Subiekt nexo i Subiekt GT",
        text: "Subiekt nexo PRO i Subiekt nexo mają wspólny trzon, a różnią się zakresem dodatków. Tylko w PRO znajdziecie Sferę, zaawansowane pola własne, definiowanie własnych raportów i wydruków, oddziały, cenniki dodatkowe, pracę na partiach, wydawanie towaru metodą HIFO oraz ceny z dokładnością do sześciu miejsc po przecinku. Biblioteka załączników nie ma w PRO limitu plików, który obowiązuje w wersji standardowej. Subiekt GT należy do wcześniejszej linii InsERT GT i również da się go rozbudować Sferą, ale jako osobnym dodatkiem, a współpracuje z księgowością GT. Jeśli nie macie oddziałów, partii ani planów integracji, wersja standardowa może w zupełności wystarczyć – na konsultacji mówimy to wprost.",
        bullets: [
          "tylko w PRO: Sfera, pola własne, własne raporty i wydruki",
          "tylko w PRO: oddziały, cenniki dodatkowe, zestawy cenowe",
          "tylko w PRO: partie, HIFO, korekta kosztu dostaw",
          "bez limitu plików w bibliotece załączników",
          "Subiekt GT: wcześniejsza linia z księgowością InsERT GT",
        ],
      },
      {
        title: "Zakup i wdrożenie Subiekt nexo PRO w OlekCodeTech",
        text: "Subiekt nexo PRO ma wiele ustawień, dlatego wdrożenie zaczynamy od rozmowy, a nie od instalatora. Na bezpłatnej 30-minutowej konsultacji ustalamy, jak wygląda u Was droga zamówienia, ile jest magazynów i kto za co odpowiada. Następnie instalujemy program i serwer bazy danych, konfigurujemy oddziały, cenniki, role oraz uprawnienia, przygotowujemy wzorce wydruków i importujemy kartoteki. Jeżeli potrzebna jest integracja, piszemy ją sami – łączyliśmy już sklep WooCommerce z magazynem w Subiekcie, łącznie ze stanami i cenami. Pracowników szkolimy na ich własnych dokumentach, a po starcie zostajemy do pomocy. Licencję sprzedajemy w cenie zgodnej z aktualnym cennikiem producenta. Działamy w Wieluniu i okolicy oraz zdalnie w całej Polsce.",
        bullets: [
          "analiza procesu sprzedaży przed konfiguracją",
          "instalacja, serwer bazy danych, kopie zapasowe",
          "oddziały, cenniki, role i uprawnienia użytkowników",
          "własne raporty, pola i wzorce wydruków",
          "integracja ze sklepem WooCommerce lub innym systemem",
          "szkolenie i stała opieka po wdrożeniu",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Subiekt nexo PRO?",
        a: "Subiekt nexo PRO polecamy firmom, które mają kilka oddziałów lub magazynów, pracują na partiach towaru, obsługują dużo zamówień albo chcą połączyć program ze sklepem internetowym. To także dobry wybór, gdy potrzebujecie własnych raportów, dodatkowych pól w kartotekach i dokładnej kontroli tego, co poszczególni pracownicy widzą i zmieniają w programie.",
      },
      {
        q: "Czy Subiekt nexo PRO obsługuje KSeF?",
        a: "Tak. Subiekt nexo PRO współpracuje z Krajowym Systemem e-Faktur: e-faktury generuje się, wysyła i archiwizuje bezpośrednio w programie. Podczas wdrożenia konfigurujemy połączenie z KSeF, ustawiamy uprawnienia użytkowników i razem z osobą wystawiającą faktury sprawdzamy cały obieg dokumentu, żeby w codziennej pracy nic nie zaskakiwało.",
      },
      {
        q: "Czym Subiekt nexo PRO różni się od Subiekt nexo?",
        a: "Subiekt nexo PRO ma pełną funkcjonalność Subiekta nexo oraz dodatki, których w wersji standardowej nie ma: Sferę do tworzenia własnych rozwiązań, pola własne, własne raporty i wydruki, oddziały, cenniki dodatkowe, obsługę partii i rozbudowaną realizację zamówień. Jeśli żadnej z tych rzeczy nie potrzebujecie, wersja standardowa będzie prostszym i wystarczającym wyborem.",
      },
      {
        q: "Ile kosztuje Subiekt nexo PRO?",
        a: "Licencję Subiekt nexo PRO sprzedajemy w cenie zgodnej z aktualnym cennikiem producenta; wpływ na nią ma między innymi liczba stanowisk. Wdrożenie i ewentualną integrację wyceniamy osobno, bo ich zakres bywa bardzo różny. Zaczynamy od bezpłatnej 30-minutowej konsultacji, po której dostajecie konkretną propozycję z podziałem na licencję i prace wdrożeniowe.",
      },
      {
        q: "Czy pomożecie wdrożyć Subiekt nexo PRO i połączyć go ze sklepem?",
        a: "Tak, to nasza specjalność. Instalujemy i konfigurujemy Subiekt nexo PRO, importujemy kartoteki z poprzedniego programu, szkolimy zespół, a integrację ze sklepem internetowym piszemy we własnym zakresie. Dzięki temu za program, połączenie i opiekę odpowiada jeden wykonawca. Pracujemy na miejscu w Wieluniu i okolicznych miastach oraz zdalnie.",
      },
    ],
    related: [
      "subiekt-nexo",
      "subiekt-gt",
      "integracja-sklepu-z-subiekt-nexo",
      "wdrozenie-subiekt-nexo",
      "programy-insert-nexo",
    ],
    keywords: [
      "Subiekt nexo PRO",
      "Subiekt nexo PRO Wieluń",
      "Subiekt nexo PRO KSeF",
      "Subiekt nexo PRO wdrożenie",
      "Subiekt nexo PRO cena",
      "Subiekt nexo PRO Sfera integracja",
      "Subiekt nexo PRO a Subiekt nexo",
    ],
  },

  // 3. Subiekt GT
  {
    slug: "subiekt-gt",
    navLabel: "Subiekt GT",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Subiekt GT",
      line: "GT",
      image: "/images/insert/subiekt-gt.webp",
      producerUrl: "https://www.insert.com.pl/programy_dla_firm/sprzedaz/subiekt_gt/opis.html",
    },
    title: "Subiekt GT - sprawdzony program do sprzedaży i magazynu",
    metaTitle: "Subiekt GT - sprawdzony program do sprzedaży i magazynu | OlekCodeTech",
    metaDescription:
      "Subiekt GT: faktury z KSeF, magazyn, zamówienia, rozrachunki i urządzenia fiskalne. Licencję, wdrożenie i opiekę zapewnia OlekCodeTech – Wieluń i zdalnie.",
    eyebrow: "InsERT GT · sprzedaż i magazyn",
    lead: [
      "Subiekt GT to program do obsługi sprzedaży, z którego korzysta bardzo wiele polskich firm handlowych i usługowych. Pozwala wystawiać dokumenty, prowadzić magazyn, przyjmować zamówienia i rozliczać się z kontrahentami, a przy tym pozostaje szybki i prosty w codziennej pracy. Wybierają go działy handlowe, sklepy, punkty usługowe i zakłady rzemieślnicze.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, w tym Subiekt GT. Pomagamy przy zakupie licencji, instalacji i konfiguracji, opiekujemy się działającymi już instalacjami, a gdy trzeba – łączymy program ze sklepem internetowym lub innym systemem.",
    ],
    sections: [
      {
        title: "Dla kogo jest Subiekt GT",
        text: "Subiekt GT jest dla firm, które potrzebują jednego narzędzia do całej pracy działu handlowego: od oferty i zamówienia, przez fakturę, po zapłatę. Dobrze sprawdza się w sklepie, hurtowni, punkcie usługowym i zakładzie rzemieślniczym. Często zostają przy nim przedsiębiorcy, którzy pracują w nim od lat, mają w bazie całą historię sprzedaży, a ich księgowość korzysta z programów tej samej linii. To także rozsądny wybór dla osób, które cenią znany, przewidywalny sposób obsługi i dużą swobodę konfiguracji. Program jest następcą wcześniejszych Subiektów firmy InsERT, więc wiele osób zna go z poprzednich miejsc pracy. Jeżeli dopiero wybieracie system, na konsultacji porównamy go z Subiektem nexo.",
        bullets: [
          "działy handlowe małych i średnich firm",
          "sklepy i hurtownie z magazynem",
          "punkty usługowe i zakłady rzemieślnicze",
          "firmy pracujące już na programach InsERT GT",
          "przedsiębiorcy ceniący szybki, dobrze znany program",
        ],
      },
      {
        title: "Najważniejsze funkcje programu Subiekt GT",
        text: "Subiekt GT obsługuje wszystkie typy dokumentów handlowych i magazynowych, a sprzedaż może być oddzielona od wydania towaru. Fakturę wystawicie do jednego lub wielu dokumentów WZ, a WZ powstanie automatycznie do faktury. W kartotece prowadzi się towary, usługi, komplety i opakowania zwrotne, z kalkulacją cen na wielu poziomach, także w walutach. Kartoteka kontrahentów mieści informacje przydatne w kontaktach z klientem i można ją rozszerzać o własne rubryki. Zamówienia rezerwują towar i współpracują z fakturami zaliczkowymi. Program prowadzi rachunki bankowe w złotówkach i walutach oraz pełne rozrachunki. Do tego dochodzą liczne zestawienia i możliwość tworzenia własnych raportów, a także obsługa kas i drukarek fiskalnych, wag etykietujących oraz czytników kodów.",
        bullets: [
          "komplet dokumentów handlowych i magazynowych",
          "towary, usługi, komplety i opakowania zwrotne",
          "wiele poziomów cen sprzedaży, także ceny walutowe",
          "zamówienia z rezerwacją towaru i fakturami zaliczkowymi",
          "rachunki bankowe i rozrachunki, również wielowalutowe",
          "zestawienia, własne raporty, urządzenia fiskalne i wagi",
        ],
      },
      {
        title: "Subiekt GT a KSeF i inne programy oraz usługi InsERT",
        text: "Subiekt GT współpracuje z Krajowym Systemem e-Faktur: faktury elektroniczne wysyła się, odbiera i przechowuje bezpośrednio z poziomu programu. Program wchodzi w skład linii InsERT GT razem z Rachmistrzem GT do księgi przychodów i rozchodów oraz ryczałtu, Rewizorem GT do księgi handlowej, Gratyfikantem GT do kadr i płac oraz Gestorem GT, czyli systemem CRM. Z programami księgowymi i z Gestorem GT jest zintegrowany, więc dane nie są wprowadzane dwa razy. Towary z Subiekta można sprzedawać w internecie – w sklepie vendero oraz na aukcjach przez Sello. Program łączy się też z systemem rezerwacji zarezerwuj.pl. Jego możliwości poszerzają Sfera dla Subiekta GT oraz pakiety PLUS dla InsERT GT.",
        bullets: [
          "wysyłanie i odbieranie faktur elektronicznych w KSeF",
          "integracja z Rachmistrzem GT i Rewizorem GT",
          "integracja z Gestorem GT (CRM)",
          "sprzedaż w internecie przez vendero i Sello",
          "połączenie z systemem rezerwacji zarezerwuj.pl",
          "Sfera dla Subiekta GT i pakiety PLUS dla InsERT GT",
        ],
      },
      {
        title: "Czym Subiekt GT różni się od Subiekt nexo i Subiekt nexo PRO",
        text: "Subiekt GT i Subiekt nexo służą do tego samego, ale należą do dwóch różnych linii. Subiekt nexo jest nowszą generacją programu, z cennikami przypisywanymi do klientów, terminami realizacji dla pojedynczych pozycji zamówienia i narzędziami do obsługi RODO. Subiekt nexo PRO dokłada do tego między innymi oddziały, partie towaru i Sferę w standardzie. W Subiekcie GT rozbudowa odbywa się przez osobne dodatki: Sferę oraz pakiety PLUS. Ważna różnica praktyczna dotyczy księgowości – Subiekt GT wymienia dane z programami InsERT GT, a Subiekt nexo z programami nexo, dlatego wybór warto uzgodnić z biurem rachunkowym. Jeśli pracujecie już w GT i program Wam wystarcza, nie namawiamy na zmianę na siłę.",
        bullets: [
          "Subiekt GT: linia InsERT GT, rozbudowa przez Sferę i pakiety PLUS",
          "Subiekt nexo: nowsza generacja programu",
          "Subiekt nexo PRO: oddziały, partie towaru, Sfera w standardzie",
          "księgowość: GT współpracuje z GT, nexo z nexo",
          "wybór linii warto ustalić razem z księgową",
        ],
      },
      {
        title: "Zakup i wdrożenie Subiekt GT w OlekCodeTech",
        text: "Subiekt GT możecie u nas kupić, zainstalować i oddać pod stałą opiekę. Program pracuje na bazie Microsoft SQL Server, którą instalujemy i ustawiamy tak, żeby kilka stanowisk działało jednocześnie i żeby kopie zapasowe robiły się same. Konfigurujemy wzorce wydruków, użytkowników i urządzenia fiskalne, importujemy kartoteki oraz szkolimy osoby wystawiające dokumenty. Pomagamy też firmom, które pracują w programie od dawna: przenosimy bazę na nowy komputer lub serwer, konfigurujemy KSeF i sprawdzamy, czy przejście na Subiekta nexo ma w Waszym przypadku sens. Licencja kosztuje tyle, ile wynika z aktualnego cennika producenta. Zaczynamy od bezpłatnej 30-minutowej konsultacji. Pracujemy na miejscu w Wieluniu, Wieruszowie, Sieradzu, Kępnie i Kluczborku oraz zdalnie.",
        bullets: [
          "sprzedaż licencji w cenie zgodnej z cennikiem producenta",
          "instalacja programu i Microsoft SQL Server",
          "konfiguracja KSeF, wydruków i urządzeń fiskalnych",
          "przeniesienie bazy na nowy komputer lub serwer",
          "szkolenie, kopie zapasowe i stała opieka",
          "integracja ze sklepem internetowym lub innym systemem",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Subiekt GT?",
        a: "Subiekt GT jest przeznaczony dla firm handlowych i usługowych, które chcą w jednym programie wystawiać dokumenty sprzedaży, prowadzić magazyn, obsługiwać zamówienia i pilnować płatności. Korzystają z niego sklepy, hurtownie, punkty usługowe i zakłady rzemieślnicze. Szczególnie często wybierają go firmy, których księgowość pracuje na programach z linii InsERT GT.",
      },
      {
        q: "Czy Subiekt GT obsługuje KSeF?",
        a: "Tak. Subiekt GT jest zintegrowany z Krajowym Systemem e-Faktur i pozwala wysyłać, odbierać oraz przechowywać faktury elektroniczne bez wychodzenia z programu. Warunkiem jest aktualna wersja i poprawna konfiguracja połączenia. Pomagamy przejść przez to krok po kroku: ustawiamy program, uprawnienia i sprawdzamy pierwsze dokumenty razem z osobą, która je wystawia.",
      },
      {
        q: "Czym Subiekt GT różni się od Subiekt nexo?",
        a: "Subiekt GT należy do linii InsERT GT, a Subiekt nexo do nowszej linii InsERT nexo. Oba programy obsługują sprzedaż, magazyn i rozrachunki, ale współpracują z innymi programami księgowymi – każdy z własnej linii. Subiekt nexo oferuje między innymi cenniki przypisywane do klientów i narzędzia RODO. Wybór najlepiej uzgodnić z biurem rachunkowym.",
      },
      {
        q: "Ile kosztuje Subiekt GT?",
        a: "Cena licencji Subiekt GT jest zgodna z aktualnym cennikiem producenta i zależy od liczby stanowisk oraz wybranych dodatków. Instalację, konfigurację i szkolenie wyceniamy oddzielnie, po rozpoznaniu potrzeb. Pierwszym krokiem jest bezpłatna 30-minutowa konsultacja, na której ustalamy zakres prac i podpowiadamy, czy lepszym wyborem nie będzie przypadkiem Subiekt nexo.",
      },
      {
        q: "Czy pomożecie wdrożyć Subiekt GT albo przenieść go na nowy komputer?",
        a: "Tak. Instalujemy Subiekt GT od zera, importujemy kartoteki i szkolimy pracowników, a w działających firmach przenosimy program wraz z bazą na nowy komputer lub serwer. Przed każdą taką operacją wykonujemy kopię zapasową. Obsługujemy klientów na miejscu w Wieluniu i okolicy oraz zdalnie, również w ramach stałej opieki IT.",
      },
    ],
    related: [
      "subiekt-nexo",
      "subiekt-nexo-pro",
      "vendero",
      "programy-insert-nexo",
      "wdrozenie-subiekt-nexo",
    ],
    keywords: [
      "Subiekt GT",
      "Subiekt GT Wieluń",
      "Subiekt GT KSeF",
      "Subiekt GT wdrożenie",
      "Subiekt GT cena",
      "Subiekt GT a Subiekt nexo",
      "program do sprzedaży Subiekt GT",
    ],
  },

  // 4. Subiekt 123
  {
    slug: "subiekt-123",
    navLabel: "Subiekt 123",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Subiekt 123",
      line: "online",
      image: "/images/insert/subiekt-123.webp",
      producerUrl: "https://subiekt123.pl/",
    },
    title: "Subiekt 123 - faktury online i prosty magazyn w chmurze",
    metaTitle: "Subiekt 123 - faktury online i prosty magazyn w chmurze | OlekCodeTech",
    metaDescription:
      "Subiekt 123 to fakturowanie online z KSeF, kartoteką klientów i opcjonalnym magazynem. Pomożemy wybrać moduły i zacząć pracę – OlekCodeTech, Wieluń i zdalnie.",
    eyebrow: "InsERT online · faktury i magazyn",
    lead: [
      "Subiekt 123 to działający w chmurze program do wystawiania faktur, przeznaczony dla najmniejszych firm i osób prowadzących jednoosobową działalność. Nie wymaga instalacji ani własnego serwera, a dane klientów, usług i towarów są dostępne po zalogowaniu. Gdy firma rośnie, można dołączyć do niego kolejne moduły, na przykład magazyn czy obsługę drukarki fiskalnej.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, dlatego pomożemy Wam uruchomić Subiekt 123, dobrać moduły i ustawić wymianę dokumentów z biurem rachunkowym. Podpowiemy też uczciwie, kiedy lepiej od razu wybrać Subiekta nexo.",
    ],
    sections: [
      {
        title: "Dla kogo jest Subiekt 123",
        text: "Subiekt 123 jest dla tych, którzy chcą po prostu sprawnie wystawiać faktury i mieć porządek w danych klientów, bez wdrażania dużego systemu. Korzystają z niego freelancerzy, firmy usługowe, małe sklepy i początkujący przedsiębiorcy. Skoro program działa w chmurze, nie interesuje Was instalacja, aktualizowanie ani kopie zapasowe na własnym komputerze – wystarczy urządzenie z dostępem do internetu. To dobre rozwiązanie również wtedy, gdy księgowość prowadzi biuro rachunkowe pracujące na programach InsERT nexo, bo dokumenty można mu przekazywać na bieżąco. Zaczynacie od samego fakturowania, a magazyn, paragony z drukarki fiskalnej czy dostęp dla pracowników włączacie dopiero wtedy, gdy rzeczywiście są potrzebne. Płacicie więc za to, z czego korzystacie.",
        bullets: [
          "jednoosobowe działalności i freelancerzy",
          "małe firmy usługowe i handlowe",
          "przedsiębiorcy, którzy nie chcą instalować programu",
          "firmy obsługiwane przez biuro rachunkowe",
          "osoby wystawiające faktury z różnych urządzeń",
        ],
      },
      {
        title: "Najważniejsze funkcje programu Subiekt 123",
        text: "Subiekt 123 pozwala szybko wystawić fakturę lub paragon, wybrać formę i termin płatności, a gotowy dokument zapisać jako PDF i wysłać klientowi. Równie prosto robi się korekty. Faktury można wystawiać w walutach obcych – kurs pobiera się sam – oraz drukować w wersji polsko-angielskiej lub polsko-niemieckiej. W kartotece klientów program pamięta dane adresowe, numer rachunku, termin płatności i rabat, a dane firm pobiera z bazy GUS. Usługi i towary da się porządkować we własnych grupach. Zestawienia pokazują między innymi sprzedaż według klientów i produktów oraz nierozliczone płatności, z eksportem do PDF i CSV. Program generuje też pliki JPK. Po włączeniu modułu magazynowego dochodzą dokumenty przyjęć i wydań, kontrola stanów oraz inwentaryzacja.",
        bullets: [
          "faktury, paragony i korekty z wysyłką PDF do klienta",
          "dokumenty w walutach i faktury dwujęzyczne",
          "kartoteka klientów z pobieraniem danych z GUS",
          "zestawienia sprzedaży i płatności, eksport do PDF i CSV",
          "pliki JPK_VAT i JPK_FA",
          "moduł magazynu: przyjęcia, wydania, stany, inwentaryzacja",
        ],
      },
      {
        title: "Subiekt 123 a KSeF i programy księgowe InsERT nexo",
        text: "Subiekt 123 jest przygotowany do pracy z Krajowym Systemem e-Faktur. Możecie w nim wystawiać i wysyłać e-faktury, pobierać potwierdzenia UPO oraz odbierać dokumenty wystawione przez kontrahentów, a potem je przeglądać i dalej obsługiwać. Lista e-faktur pokazuje status, wartość i rodzaj dokumentu oraz dane wystawcy. Moduł Użytkownik+ pozwala nadać pracownikom role i uprawnienia do KSeF. Program łączy się z księgowymi programami InsERT nexo i nexo PRO, czyli Rachmistrzem i Rewizorem – dokumenty trafiają do biura rachunkowego na bieżąco, bez przesyłania plików mailem. Dodatkowy moduł fiskalizacji umożliwia drukowanie paragonów na drukarkach fiskalnych wielu producentów. Którą drukarkę wybrać i jak ją podłączyć, sprawdzamy przed zakupem.",
        bullets: [
          "wystawianie i wysyłanie e-faktur do KSeF",
          "pobieranie UPO i faktur od kontrahentów",
          "role i uprawnienia do KSeF w module Użytkownik+",
          "przekazywanie dokumentów do Rachmistrza nexo i Rewizora nexo",
          "moduł fiskalizacji dla drukarek fiskalnych",
        ],
      },
      {
        title: "Kiedy wybrać Subiekt 123, a kiedy Subiekt nexo",
        text: "Subiekt 123 wybierzcie, gdy głównym zadaniem jest fakturowanie, a magazyn – jeśli w ogóle jest – ma być prosty. Program działa online, uruchamia się go od ręki i rozbudowuje modułami. Subiekt nexo to już pełny system sprzedaży instalowany w firmie: ma rozbudowane zamówienia z terminami dla poszczególnych pozycji, cenniki przypisywane do klientów, kasę i rachunki bankowe, rozrachunki z wezwaniami do zapłaty oraz obsługę kas fiskalnych, wag etykietujących i czytników kodów. Jeśli więc przyjmujecie zamówienia, prowadzicie kilka magazynów, windykujecie należności albo pracujecie w kilka osób przy ladzie, lepiej sprawdzi się Subiekt nexo. Gdy wystawiacie kilkanaście lub kilkadziesiąt faktur miesięcznie i cenicie prostotę, Subiekt 123 będzie w sam raz.",
        bullets: [
          "Subiekt 123: fakturowanie online bez instalacji",
          "Subiekt 123: funkcje dokładane modułami",
          "Subiekt nexo: zamówienia, cenniki dla klientów, kasa i bank",
          "Subiekt nexo: rozrachunki, wezwania do zapłaty, kompensaty",
          "Subiekt nexo: kasy fiskalne, wagi i czytniki kodów",
        ],
      },
      {
        title: "Zakup i wdrożenie Subiekt 123 w OlekCodeTech",
        text: "Subiekt 123 jest prosty, ale i tak warto dobrze go ustawić na początku. Na bezpłatnej 30-minutowej konsultacji sprawdzamy, czy to właściwy program dla Waszej firmy i które moduły mają sens. Potem pomagamy założyć konto, wprowadzić dane firmy, przenieść listę klientów i towarów, skonfigurować KSeF oraz podłączyć drukarkę fiskalną. Jeśli korzystacie z biura rachunkowego, ustawiamy z nim przekazywanie dokumentów. Pokazujemy też pracownikom, jak wystawiać faktury i korekty, żeby nie uczyli się na prawdziwych dokumentach. Koszt usługi producenta jest zgodny z jego aktualnym cennikiem. Pomagamy na miejscu w Wieluniu i okolicy oraz zdalnie, a gdy firma urośnie, przeprowadzimy Was na Subiekta nexo.",
        bullets: [
          "dobór modułów do potrzeb firmy",
          "założenie konta i wprowadzenie danych firmy",
          "przeniesienie listy klientów, usług i towarów",
          "konfiguracja KSeF i drukarki fiskalnej",
          "ustawienie współpracy z biurem rachunkowym",
          "krótkie szkolenie i pomoc w razie pytań",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Subiekt 123?",
        a: "Subiekt 123 jest dla małych firm i jednoosobowych działalności, które potrzebują przede wszystkim wygodnego wystawiania faktur online. Sprawdzi się u usługodawców, w małych sklepach i u początkujących przedsiębiorców. Program działa w chmurze, więc nie trzeba go instalować, a dodatkowe moduły – magazyn, fiskalizację czy dostęp dla pracowników – włącza się wtedy, gdy są potrzebne.",
      },
      {
        q: "Czy Subiekt 123 obsługuje KSeF?",
        a: "Tak. Subiekt 123 pozwala wystawiać i wysyłać e-faktury do Krajowego Systemu e-Faktur, automatycznie pobiera potwierdzenia UPO i odbiera faktury wystawione przez kontrahentów. Na liście e-faktur widać status oraz wartość każdego dokumentu. Z modułem Użytkownik+ można dodatkowo nadać pracownikom role i uprawnienia do pracy z KSeF. Pomagamy to poprawnie skonfigurować.",
      },
      {
        q: "Czym Subiekt 123 różni się od Subiekt nexo?",
        a: "Subiekt 123 to program online skupiony na fakturowaniu, z magazynem jako opcjonalnym modułem. Subiekt nexo jest pełnym systemem sprzedaży instalowanym w firmie – obsługuje rozbudowane zamówienia, cenniki dla klientów, kasę, bank, rozrachunki i szeroki zestaw urządzeń sklepowych. Mówiąc krótko: Subiekt 123 dla prostego fakturowania, Subiekt nexo dla firm handlowych z magazynem.",
      },
      {
        q: "Ile kosztuje Subiekt 123?",
        a: "Koszt Subiekt 123 jest zgodny z aktualnym cennikiem producenta i zależy od tego, które moduły włączycie – samo fakturowanie, magazyn, fiskalizację lub dostęp dla kolejnych pracowników. Dzięki temu nie płacicie za funkcje, których nie używacie. Na bezpłatnej 30-minutowej konsultacji pomożemy ustalić, jaki zestaw jest Wam rzeczywiście potrzebny.",
      },
      {
        q: "Czy pomożecie uruchomić Subiekt 123 i przenieść dane klientów?",
        a: "Tak. Pomagamy założyć konto, wprowadzić dane firmy, przenieść listę klientów oraz towarów i skonfigurować KSeF, a jeśli sprzedajecie na paragony – podłączyć drukarkę fiskalną. Ustawiamy też przekazywanie dokumentów do biura rachunkowego. Robimy to zdalnie albo na miejscu w Wieluniu i okolicy, zwykle w trakcie jednego krótkiego spotkania.",
      },
    ],
    related: [
      "subiekt-nexo",
      "subiekt-nexo-pro",
      "subiekt-gt",
      "rachmistrz-nexo",
      "programy-insert-nexo",
    ],
    keywords: [
      "Subiekt 123",
      "Subiekt 123 KSeF",
      "Subiekt 123 faktury online",
      "Subiekt 123 magazyn",
      "Subiekt 123 cena",
      "Subiekt 123 a Subiekt nexo",
      "Subiekt 123 Wieluń",
    ],
  },

  // 5. vendero
  {
    slug: "vendero",
    navLabel: "vendero",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "vendero",
      line: "online",
      image: "/images/insert/vendero.webp",
      producerUrl: "https://vendero.pl/",
    },
    title: "vendero - sklep internetowy połączony z Subiektem",
    metaTitle: "vendero - sklep internetowy połączony z Subiektem | OlekCodeTech",
    metaDescription:
      "vendero to sklep internetowy, witryna z ofertą lub strona firmowa zasilana danymi z Subiekta GT i nexo. Uruchomimy ją i skonfigurujemy – OlekCodeTech, Wieluń.",
    eyebrow: "InsERT online · sklep internetowy",
    lead: [
      "vendero to usługa InsERT, dzięki której firma pracująca w Subiekcie może szybko uruchomić sklep internetowy, witrynę z ofertą albo zwykłą stronę firmową. Towary nie są wpisywane drugi raz – pochodzą z Subiekta GT lub Subiekta nexo, a zamówienia ze sklepu wracają do programu. To rozwiązanie dla firm handlowych, które chcą zacząć sprzedawać w sieci bez budowania sklepu od podstaw.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, więc pomożemy Wam uruchomić vendero, uporządkować dane w Subiekcie i ustawić ofertę. A jeśli okaże się, że potrzebujecie sklepu szytego na miarę, zbudujemy go i połączymy z Subiektem sami.",
    ],
    sections: [
      {
        title: "Dla kogo jest vendero",
        text: "Z vendero korzystają firmy, które mają już towary w Subiekcie i chcą pokazać je klientom w internecie możliwie małym nakładem pracy. Usługa występuje w trzech odmianach. Sklep internetowy służy do sprzedaży – klient składa zamówienie, a ono pojawia się w Subiekcie. Witryna z ofertą prezentuje asortyment z podziałem na kategorie, bez koszyka, co wystarcza na przykład hurtowni przyjmującej zamówienia telefonicznie. Firmowy serwis WWW to prosta strona z opisem działalności, aktualnościami i danymi kontaktowymi. Do obsługi nie trzeba znać się na tworzeniu stron: kreator prowadzi przez kolejne kroki. vendero polecamy sklepom i hurtowniom, które chcą sprawdzić sprzedaż online, zanim zainwestują w większy projekt.",
        bullets: [
          "sklepy i hurtownie pracujące w Subiekcie GT lub Subiekcie nexo",
          "firmy rozpoczynające sprzedaż w internecie",
          "hurtownie, które chcą pokazać ofertę bez koszyka",
          "małe firmy potrzebujące prostej strony firmowej",
          "przedsiębiorcy bez własnego serwera i domeny",
        ],
      },
      {
        title: "Najważniejsze funkcje vendero",
        text: "Uruchomienie vendero sprowadza się do kilku kroków: wybieracie rodzaj serwisu, podajecie nazwę i dane firmy, wskazujecie szablon graficzny, ustalacie zawartość podstron i zakres oferty. W ramach usługi dostajecie hosting oraz adres internetowy, więc nie zajmujecie się serwerem. Wygląd strony zmienia się gotowymi szablonami i widżetami, a układ, treści i kolory można poprawiać w dowolnej chwili. Panelem administracyjnym zarządza się z przeglądarki, z każdego miejsca z dostępem do internetu. Zestawienie zamówień pokazuje, na jakim etapie jest każdy zakup – widzi to zarówno klient, jak i obsługa sklepu. Są też powiadomienia dla klientów, płatności internetowe PayU oraz połączenie z Google Analytics, które pokazuje, skąd przychodzą odwiedzający.",
        bullets: [
          "kreator prowadzący krok po kroku przez założenie serwisu",
          "hosting i adres internetowy w ramach usługi",
          "szablony graficzne i widżety do zmiany wyglądu",
          "panel administracyjny dostępny z przeglądarki",
          "statusy zamówień widoczne dla klienta i sprzedawcy",
          "płatności PayU, powiadomienia, Google Analytics",
        ],
      },
      {
        title: "vendero a Subiekt GT, Subiekt nexo i inne programy InsERT",
        text: "Największą zaletą vendero jest fabryczne połączenie z Subiektem GT i Subiektem nexo. Towary i usługi, które wskażecie w Subiekcie, automatycznie pojawiają się w sklepie, a każde zamówienie złożone przez klienta trafia do programu jako dokument do realizacji. Kreator wykorzystuje dane wpisane wcześniej w systemie InsERT GT lub InsERT nexo, więc im lepiej uporządkowana kartoteka, tym mniej pracy przy starcie. Dalsza obsługa zamówienia odbywa się już w Subiekcie – tam wystawiacie dokument sprzedaży i tam korzystacie z funkcji, które Subiekt daje na co dzień, łącznie ze współpracą z KSeF. Dzięki temu sklep internetowy nie tworzy drugiego, osobnego obiegu dokumentów, tylko dokłada kolejny kanał sprzedaży do tego samego magazynu.",
        bullets: [
          "integracja z Subiektem GT i Subiektem nexo",
          "towary i usługi pobierane prosto z Subiekta",
          "zamówienia ze sklepu trafiają do Subiekta",
          "dane firmy pobierane z systemu InsERT GT lub InsERT nexo",
          "dokumenty sprzedaży wystawiane dalej w Subiekcie",
        ],
      },
      {
        title: "Kiedy wybrać vendero, a kiedy sam Subiekt nexo lub własny sklep",
        text: "vendero nie zastępuje programu sprzedażowego, tylko go uzupełnia – oferta sklepu i zamówienia opierają się na danych z Subiekta. Jeśli sprzedajecie wyłącznie stacjonarnie albo przyjmujecie zamówienia telefonicznie i mailowo, wystarczy Wam sam Subiekt nexo. vendero wybierzcie wtedy, gdy chcecie szybko i bez dużej inwestycji wystawić w internecie asortyment, który już macie w programie. Usługa opiera się na gotowych szablonach, więc ma swoje granice: przy nietypowym wyglądzie, niestandardowej ścieżce zakupu, rabatach liczonych po swojemu czy integracji z kolejnymi systemami lepszy będzie sklep budowany indywidualnie. Takie sklepy, na przykład na WooCommerce, tworzymy i łączymy z Subiektem sami. Na konsultacji porównamy oba warianty na Waszym przykładzie.",
        bullets: [
          "sam Subiekt nexo: sprzedaż stacjonarna i zamówienia telefoniczne",
          "vendero: szybki start sprzedaży online z danych Subiekta",
          "vendero: gotowe szablony, hosting i adres w usłudze",
          "własny sklep: nietypowy wygląd i niestandardowe wymagania",
          "własny sklep łączymy z Subiektem indywidualną integracją",
        ],
      },
      {
        title: "Zakup i wdrożenie vendero w OlekCodeTech",
        text: "Uruchomienie vendero jest proste, ale dobry efekt zależy od danych w Subiekcie. Dlatego zaczynamy od przeglądu kartoteki: nazw, opisów, cen i podziału na grupy, bo właśnie z tych danych powstaje oferta sklepu. Następnie przechodzimy z Wami przez kreator, dobieramy szablon, układamy podstrony, ustawiamy płatności PayU i statystyki Google Analytics. Sprawdzamy na próbnym zamówieniu, czy poprawnie trafia ono do Subiekta, i pokazujemy pracownikom, jak je realizować. Koszt usługi jest zgodny z aktualnym cennikiem producenta. Zaczynamy od bezpłatnej 30-minutowej konsultacji, na której ocenimy też, czy vendero w ogóle jest dla Was najlepszą drogą. Pracujemy na miejscu w Wieluniu i okolicy oraz zdalnie w całej Polsce.",
        bullets: [
          "przegląd i uporządkowanie kartoteki w Subiekcie",
          "konfiguracja serwisu, szablonu i podstron",
          "płatności PayU i statystyki Google Analytics",
          "test zamówienia od sklepu do Subiekta",
          "szkolenie z obsługi panelu i realizacji zamówień",
          "alternatywa: własny sklep WooCommerce z integracją",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest vendero?",
        a: "vendero jest dla firm, które pracują w Subiekcie GT lub Subiekcie nexo i chcą szybko zaistnieć w internecie: uruchomić sklep, pokazać ofertę albo postawić prostą stronę firmową. Najwięcej zyskują sklepy i hurtownie z uporządkowaną kartoteką towarów, bo asortyment trafia do serwisu prosto z programu i nie trzeba go wpisywać ponownie.",
      },
      {
        q: "Z jakimi programami współpracuje vendero?",
        a: "vendero jest zintegrowane z Subiektem GT oraz Subiektem nexo. Wybrane towary i usługi z Subiekta pojawiają się w sklepie automatycznie, a zamówienia klientów trafiają z powrotem do programu. Dane o firmie kreator również pobiera z systemu InsERT. Przed uruchomieniem sprawdzamy, czy kartoteka w Waszym Subiekcie jest gotowa do pokazania jej klientom.",
      },
      {
        q: "Czym vendero różni się od sklepu internetowego robionego na zamówienie?",
        a: "vendero to gotowa usługa: wybieracie szablon, a hosting, adres i połączenie z Subiektem dostajecie w pakiecie, więc start jest szybki. Sklep robiony na zamówienie, na przykład WooCommerce, daje pełną swobodę wyglądu i funkcji, ale wymaga projektu i osobnej integracji z Subiektem. Obie drogi znamy z praktyki i pomożemy wybrać właściwą.",
      },
      {
        q: "Ile kosztuje vendero?",
        a: "Koszt vendero jest zgodny z aktualnym cennikiem producenta. Do tego dochodzi nasza praca przy uruchomieniu, jeśli chcecie z niej skorzystać: uporządkowanie danych w Subiekcie, konfiguracja serwisu i szkolenie. Jej zakres ustalamy na bezpłatnej 30-minutowej konsultacji, po której dostajecie jasną wycenę, bez zobowiązań do dalszej współpracy.",
      },
      {
        q: "Czy pomożecie uruchomić vendero i przygotować dane w Subiekcie?",
        a: "Tak. Przeglądamy kartotekę towarów w Subiekcie, pomagamy przejść przez kreator vendero, ustawiamy szablon, podstrony i płatności, a na koniec testujemy, czy zamówienie ze sklepu poprawnie trafia do programu. Szkolimy też osoby, które będą obsługiwać zamówienia. Działamy na miejscu w Wieluniu i okolicznych miastach oraz zdalnie.",
      },
    ],
    related: [
      "subiekt-nexo",
      "subiekt-gt",
      "subiekt-nexo-pro",
      "integracja-sklepu-z-subiekt-nexo",
      "programy-insert-nexo",
    ],
    keywords: [
      "vendero",
      "vendero sklep internetowy",
      "vendero Subiekt nexo",
      "vendero Subiekt GT",
      "vendero wdrożenie",
      "vendero cena",
      "sklep internetowy do Subiekta vendero",
    ],
  },
];
