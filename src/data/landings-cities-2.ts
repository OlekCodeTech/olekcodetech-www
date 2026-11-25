import type { LandingPage } from "./types";

/**
 * Lokalne strony „strony internetowe + miasto” – część 2 (Kępno, Kluczbork).
 * Każda ma własną treść (lokalny rynek, branże, forma współpracy) –
 * to nie są kopie z podmienioną nazwą miasta.
 */
export const cityLandings2: LandingPage[] = [
  // ---------------------------------------------------------------------------
  // KĘPNO – ok. 50 km, woj. wielkopolskie
  // ---------------------------------------------------------------------------
  {
    slug: "strony-internetowe-kepno",
    kind: "city",
    parent: "stronywww-aplikacje",
    title: "Strony internetowe Kępno – strony i sklepy dla producentów mebli i firm z Kępna",
    metaTitle: "Strony internetowe Kępno – strony dla firm | OlekCodeTech",
    metaDescription:
      "Strony WWW, sklepy WooCommerce i pozycjonowanie dla firm z Kępna, w tym producentów mebli. Z Wielunia ok. 50 km. Umów bezpłatną 30-min konsultację.",
    eyebrow: "Lokalnie · Kępno i powiat kępiński",
    city: "Kępno",
    cityLocative: "w Kępnie",
    lead: [
      "Kępno leży ok. 50 km od Wielunia, już w województwie wielkopolskim. Dla nas to niecała godzina drogi, więc firmy z Kępna, Baranowa, Bralina, Łęki Opatowskiej czy Trzcinicy obsługujemy tak, jak sąsiadów: przyjeżdżamy na pierwsze spotkanie, oglądamy zakład lub biuro, a potem prowadzimy projekt zdalnie.",
      "Okolice Kępna to zagłębie meblowe: producenci mebli tapicerowanych, stolarnie, hurtownie tkanin i akcesoriów meblowych, a do tego firmy, które sprzedają za granicę. Takim firmom strona ma pokazać kolekcje, zebrać zapytania od sklepów i hurtowni i dobrze działać na telefonie. OlekCodeTech robi strony i sklepy od 2019 roku, mamy za sobą ponad 50 projektów, w tym realizacje dla branży meblowej.",
    ],
    sections: [
      {
        title: "Strony internetowe Kępno – strony firmowe dla firm z miasta i powiatu",
        text: "Firmom z Kępna robimy strony na WordPressie z autorskim motywem, a gdy strona ma być wyjątkowo szybka – w React/Next.js. Strona firmowa to u nas nie szablon z podmienionym logo: zaczynamy od pytania, kto ma na nią trafić i co ma zrobić – zadzwonić, wysłać zapytanie, poprosić o ofertę. Pod to układamy podstrony, teksty i zdjęcia. Każda strona jest responsywna, lekka i od początku przygotowana pod wyszukiwanie w Google. Dla firm usługowych i handlowych zwykle wystarcza oferta, realizacje i kontakt; zakłady produkcyjne dostają dodatkowo katalog wyrobów. Domenę, hosting, certyfikat SSL i pocztę firmową konfigurujemy za Was.",
        bullets: [
          "Strony firmowe dla produkcji, handlu i usług z Kępna i okolic",
          "Autorski motyw WordPress – bez ciężkich page builderów",
          "React/Next.js tam, gdzie liczy się maksymalna szybkość",
          "Prosty panel do samodzielnej zmiany tekstów i zdjęć",
          "Przeniesienie starej strony bez utraty pozycji w Google",
          "Domena, hosting, SSL i poczta firmowa na start",
        ],
      },
      {
        title: "Sklepy internetowe Kępno – WooCommerce dla producentów i handlu",
        text: "Coraz więcej firm z Kępna chce sprzedawać bezpośrednio klientom, a nie tylko przez pośredników. Wdrażamy sklepy na WooCommerce z własnym, szybkim motywem. Przy meblach kluczowe są warianty: wymiar, strona narożnika, tkanina, kolor – klient wybiera je na karcie produktu i od razu widzi cenę. Podłączamy płatności Przelewy24 lub PayU oraz kurierów, a dla dużych przesyłek ustawiamy osobne zasady dostawy. Hurtowniom tkanin i akcesoriów meblowych przygotowujemy sklep z cenami dla firm i zamówieniami na konto. Produkty importujemy z arkusza, żeby nikt nie musiał wklepywać ich ręcznie, a po wdrożeniu szkolimy osoby, które będą obsługiwać zamówienia.",
        bullets: [
          "Sklepy WooCommerce z własnym motywem i szybkim ładowaniem",
          "Warianty produktów: wymiary, tkaniny, kolory, układ mebla",
          "Płatności Przelewy24 i PayU, integracje z kurierami",
          "Osobne zasady dostawy dla przesyłek gabarytowych",
          "Ceny dla firm i zamówienia hurtowe na konto",
          "Import produktów z arkusza i szkolenie z obsługi",
        ],
      },
      {
        title: "Pozycjonowanie lokalne Kępno – wizytówka Google i frazy z miastem",
        text: "Pozycjonowanie w Kępnie ma dwie strony. Firmy usługowe i sklepy stacjonarne potrzebują klientów z okolicy, więc budujemy im podstrony pod frazy z miastem, np. „stolarz Kępno” czy „tapicer Kępno”, i porządkujemy wizytówkę Google: kategorie, godziny, zdjęcia, opis, odpowiedzi na opinie. Producenci sprzedają dalej niż w powiecie, dlatego im przygotowujemy też podstrony pod frazy produktowe bez nazwy miasta – nazwy typów mebli, kolekcji i tkanin. W obu przypadkach zaczynamy od SEO technicznego: szybkość, poprawne nagłówki, dane strukturalne i mapa strony. Stronę podłączamy do Google Search Console, żebyście widzieli, po jakich hasłach ludzie do Was trafiają.",
        bullets: [
          "Konfiguracja i uporządkowanie wizytówki Google",
          "Podstrony pod frazy „<usługa> Kępno” i miejscowości powiatu",
          "Frazy produktowe dla firm sprzedających w całym kraju",
          "SEO techniczne: szybkość, nagłówki, dane strukturalne",
          "Podłączenie Google Search Console i czytelny podgląd fraz",
        ],
      },
      {
        title: "Strona www dla producenta mebli z Kępna – katalog, tkaniny, mobile",
        text: "Strona www dla producenta mebli ma inne zadania niż zwykła wizytówka. Odbiorca – sklep meblowy, hurtownia albo klient końcowy – chce szybko obejrzeć kolekcje, sprawdzić wymiary i dostępne tkaniny, a potem wysłać zapytanie. Dlatego budujemy katalog kolekcji i modeli z dużymi zdjęciami, wyborem tkanin i kartą techniczną. Strona musi być zoptymalizowana pod mobile, bo handlowcy i klienci oglądają ofertę głównie na telefonie: zdjęcia ładują się szybko, a formularz da się wypełnić kciukiem. Dla odbiorców zagranicznych dodajemy wersje językowe. Znamy tę branżę z własnych realizacji – robiliśmy strony dla LidioStyl i Syguła Meble oraz stronę z konfiguratorem dla firmy PROMYK.",
        bullets: [
          "Katalog kolekcji i modeli z wymiarami i funkcjami",
          "Zdjęcia w wysokiej jakości i wybór tkanin przy modelu",
          "Wersje językowe dla odbiorców zagranicznych",
          "Formularz zapytania hurtowego i oferty B2B",
          "Strona szybka na telefonie – lekkie zdjęcia, prosty układ",
          "Strefa dla partnerów handlowych z materiałami do pobrania",
        ],
      },
      {
        title: "Opieka nad stroną, automatyzacje i IT dla firm z Kępna",
        text: "Po uruchomieniu strona wymaga pilnowania. W ramach opieki robimy aktualizacje, kopie zapasowe i monitoring, a drobne poprawki wprowadzamy na zgłoszenie – nie musicie mieć do tego własnego informatyka. Firmom z Kępna pomagamy też poukładać codzienną pracę biura: konfigurujemy pocztę i wspólne dyski w Microsoft 365 lub Google Workspace oraz automatyzujemy powtarzalne czynności w n8n lub Make. Przykład z produkcji: zapytanie ze strony trafia od razu do arkusza i na skrzynkę handlowca, a klient dostaje potwierdzenie. Zamówienie ze sklepu może samo powiadomić dział, który je realizuje. Zaczynamy od jednej, najbardziej uciążliwej czynności i dopiero potem dokładamy kolejne.",
        bullets: [
          "Aktualizacje, kopie zapasowe i monitoring strony lub sklepu",
          "Poprawki i zmiany treści na zgłoszenie",
          "Microsoft 365 / Google Workspace: poczta, dyski, kalendarze",
          "Automatyzacje n8n/Make: zapytania, zamówienia, powiadomienia",
          "Wsparcie zdalne i dojazd z Wielunia, gdy trzeba",
        ],
      },
      {
        title: "Jak wygląda współpraca przy stronie internetowej w Kępnie",
        text: "Zaczynamy od bezpłatnej konsultacji – 30 minut przez telefon albo na wideorozmowie. Pytamy, co sprzedajecie, komu i co dziś nie działa. Na pierwsze spotkanie przyjeżdżamy do Kępna: w zakładzie lub showroomie najłatwiej zrozumieć ofertę i ustalić, jakie zdjęcia i materiały będą potrzebne. Potem dostajecie wycenę ze stałą ceną i opisanym zakresem. Dalej pracujemy zdalnie, etapami: struktura i projekt, wdrożenie, testy na telefonach, uruchomienie. Każdy etap akceptujecie, zanim przejdziemy dalej. Prosta strona firmowa to zwykle 2–4 tygodnie od przekazania materiałów; katalog z wieloma modelami lub sklep wymaga więcej czasu. Na koniec szkolimy z obsługi i przekazujemy dostępy.",
        bullets: [
          "Bezpłatna konsultacja – 30 minut, bez zobowiązań",
          "Pierwsze spotkanie na miejscu u Was w Kępnie",
          "Wycena ze stałą ceną i opisanym zakresem",
          "Praca zdalna etapami, z Waszą akceptacją",
          "Testy na telefonach przed uruchomieniem",
          "Szkolenie, przekazanie dostępów i opieka po starcie",
        ],
      },
    ],
    faq: [
      {
        q: "Czy robicie strony internetowe dla firm z Kępna?",
        a: "Tak. Siedzibę mamy w Wieluniu, przy ul. Liliowej 3, a do Kępna jest stamtąd ok. 50 km. Obsługujemy firmy z miasta i z powiatu kępińskiego – producentów, hurtownie, sklepy i firmy usługowe. Na pierwsze spotkanie przyjeżdżamy do Was, a dalszą pracę prowadzimy zdalnie: mailem, telefonicznie i na krótkich wideorozmowach.",
      },
      {
        q: "Ile kosztuje strona internetowa w Kępnie?",
        a: "To zależy od zakresu: liczby podstron, wielkości katalogu, wersji językowych, sklepu i integracji. Nie podajemy cen w ciemno, bo strona dla usługodawcy i katalog producenta mebli to zupełnie różne projekty. Po bezpłatnej konsultacji dostajecie wycenę ze stałą ceną i opisanym zakresem, więc od początku wiecie, za co płacicie.",
      },
      {
        q: "Czy zrobicie stronę www dla producenta mebli zoptymalizowaną pod mobile?",
        a: "Tak, to jeden z naszych częstszych tematów. Projekt zaczynamy od widoku na telefonie, bo tam ogląda się dziś większość ofert. Zdjęcia kolekcji przygotowujemy w lekkich formatach, katalog da się wygodnie przewijać, a zapytanie wysyła się w kilku krokach. Przed uruchomieniem sprawdzamy stronę na prawdziwych telefonach, a nie tylko w podglądzie na komputerze.",
      },
      {
        q: "Czy strona może mieć wersję niemiecką lub angielską dla odbiorców z zagranicy?",
        a: "Tak. Wdrażamy strony wielojęzyczne z osobnym adresem dla każdej wersji językowej, żeby Google pokazywał właściwą wersję odbiorcom z danego kraju. Treści w kolejnych językach można potem zmieniać samodzielnie w panelu. Tłumaczenia dostarczacie Wy albo Wasz tłumacz – my odpowiadamy za to, żeby wszystko poprawnie działało od strony technicznej.",
      },
      {
        q: "Czy da się zrobić strefę dla sklepów i hurtowni, które z nami współpracują?",
        a: "Tak. Możemy przygotować część strony dostępną po zalogowaniu, przeznaczoną dla partnerów handlowych. Trafiają tam materiały, których nie chcecie pokazywać publicznie, na przykład cenniki, katalogi do pobrania, zdjęcia produktów czy formularz zamówienia. Zakres takiej strefy ustalamy na konsultacji, bo każda firma inaczej pracuje ze swoimi odbiorcami i potrzebuje czegoś innego.",
      },
      {
        q: "Jak długo trwa zrobienie strony i co dzieje się po jej uruchomieniu?",
        a: "Prosta strona firmowa to zwykle 2–4 tygodnie od przekazania materiałów. Katalog z wieloma modelami, wersje językowe lub sklep zajmują dłużej – termin podajemy w wycenie. Po starcie szkolimy z obsługi i przekazujemy dostępy. Jeśli chcecie, zostajemy w ramach opieki: aktualizacje, kopie zapasowe, monitoring i bieżące poprawki na zgłoszenie.",
      },
    ],
    related: [
      "programista-kepno",
      "strony-internetowe-wieruszow",
      "strony-internetowe-wielun",
      "sklepy-internetowe-woocommerce",
      "strony-wordpress-autorski-motyw",
    ],
    keywords: [
      "strony internetowe Kępno",
      "tworzenie stron internetowych Kępno",
      "projektowanie stron www Kępno",
      "sklep internetowy Kępno",
      "pozycjonowanie Kępno",
      "strona www dla producenta mebli",
      "strona dla producenta mebli zoptymalizowana pod mobile",
      "strony www dla firm meblowych Kępno",
    ],
    portfolio: [
      "LidioStyl - meble twarde i tapicerowane",
      "Syguła Meble | Meble tapicerowane",
      "PROMYK – okna i drzwi",
    ],
  },

  // ---------------------------------------------------------------------------
  // KLUCZBORK – ok. 55 km, woj. opolskie
  // ---------------------------------------------------------------------------
  {
    slug: "strony-internetowe-kluczbork",
    kind: "city",
    parent: "stronywww-aplikacje",
    title: "Strony internetowe Kluczbork – strony i sklepy dla firm z Kluczborka i okolic",
    metaTitle: "Strony internetowe Kluczbork – strony www | OlekCodeTech",
    metaDescription:
      "Strony WWW, sklepy WooCommerce i pozycjonowanie lokalne dla firm z Kluczborka, Olesna i Byczyny. Z Wielunia ok. 55 km. Umów bezpłatną 30-min konsultację.",
    eyebrow: "Lokalnie · Kluczbork, Olesno, Byczyna",
    city: "Kluczbork",
    cityLocative: "w Kluczborku",
    lead: [
      "Z Wielunia do Kluczborka jest ok. 55 km – to już województwo opolskie, ale wciąż blisko. Pracujemy z firmami z Kluczborka i okolicznych miejscowości, m.in. z Byczyny, Wołczyna i Olesna. Na pierwsze spotkanie przyjeżdżamy na miejsce, a codzienną pracę nad projektem prowadzimy zdalnie.",
      "Kluczbork to miasto firm produkcyjnych i handlowych: przemysł maszynowy i metalowy, przetwórstwo spożywcze, obsługa rolnictwa, hurtownie, sklepy i usługi dla mieszkańców. Każda z tych branż potrzebuje od strony czegoś innego – jedni zapytań ofertowych od firm, inni telefonów od klientów z miasta. OlekCodeTech robi strony, sklepy i automatyzacje od 2019 roku i ma na koncie ponad 50 projektów.",
    ],
    sections: [
      {
        title: "Strony internetowe Kluczbork – strony firmowe, które dają zapytania",
        text: "Dobra strona firmowa odpowiada na trzy pytania: czym się zajmujecie, dla kogo i jak się z Wami skontaktować. Firmom z Kluczborka budujemy takie strony na WordPressie z autorskim motywem – lekkim, pisanym pod konkretną firmę, bez gotowych szablonów i zbędnych wtyczek. Gdy projekt wymaga czegoś więcej, na przykład bardzo szybkiego katalogu albo niestandardowych funkcji, sięgamy po React/Next.js. Pomagamy uporządkować ofertę i podzielić ją na podstrony, podpowiadamy, jakie zdjęcia warto zrobić, i piszemy strukturę pod Google. Strona wygląda dobrze na telefonie, tablecie i komputerze, a teksty i zdjęcia zmieniacie potem sami w prostym panelu.",
        bullets: [
          "Strony firmowe z ofertą, realizacjami i formularzem kontaktowym",
          "Autorski motyw WordPress dopasowany do firmy",
          "React/Next.js dla szybkich katalogów i nietypowych funkcji",
          "Pomoc w ułożeniu oferty i struktury podstron",
          "Wygodna obsługa na telefonie i komputerze",
          "Hosting, domena, SSL i skrzynki pocztowe skonfigurowane za Was",
        ],
      },
      {
        title: "Sklepy internetowe Kluczbork – sprzedaż online na WooCommerce",
        text: "Sklep internetowy pozwala firmie z Kluczborka sprzedawać poza własnym miastem – w całym województwie opolskim i w reszcie kraju. Sklepy stawiamy na WooCommerce: ustawiamy kategorie, karty produktów, koszyk i proces zamówienia tak, żeby zakup trwał chwilę. Podłączamy płatności online przez Przelewy24 lub PayU i integrujemy sklep z firmami kurierskimi, więc etykiety i statusy przesyłek nie wymagają ręcznej pracy. Hurtowniom i producentom żywności przygotowujemy też sprzedaż dla firm: osobne ceny, minimalne ilości, zamówienia powtarzalne. Jeśli macie już sklep stacjonarny, pomagamy zdecydować, od których produktów zacząć sprzedaż w internecie, żeby nie przenosić całego asortymentu naraz.",
        bullets: [
          "Sklepy WooCommerce z przejrzystym koszykiem i zamówieniem",
          "Płatności online Przelewy24 i PayU",
          "Integracje z kurierami i automatyczne statusy przesyłek",
          "Sprzedaż dla firm: osobne ceny i minimalne ilości",
          "Opisy i kategorie przygotowane pod wyszukiwanie w Google",
          "Szkolenie z dodawania produktów i obsługi zamówień",
        ],
      },
      {
        title: "Pozycjonowanie lokalne Kluczbork – wizytówka Google i Search Console",
        text: "Mieszkańcy Kluczborka szukają usług w telefonie i zwykle dopisują miasto: „mechanik Kluczbork”, „piekarnia Kluczbork”, „serwis maszyn rolniczych Kluczbork”. Żeby pojawić się w tych wynikach i na mapie, potrzebne są dwie rzeczy: dobrze uzupełniona wizytówka Google i strona, która jasno mówi, co i gdzie robicie. Porządkujemy wizytówkę, dodajemy usługi i zdjęcia, pokazujemy, jak prosić klientów o opinie. Na stronie tworzymy osobne podstrony dla każdej usługi oraz dla pobliskich miejscowości, takich jak Olesno, Byczyna czy Wołczyn. Dbamy o SEO techniczne i podłączamy Google Search Console, więc efekty widać w danych, a nie na słowo.",
        bullets: [
          "Uzupełnienie i prowadzenie wizytówki Google",
          "Podstrony usług pod frazy „<usługa> Kluczbork”",
          "Osobne podstrony dla Olesna, Byczyny i Wołczyna",
          "SEO techniczne: szybkość, struktura, dane firmy w schema.org",
          "Search Console: frazy, kliknięcia i pozycje w jednym miejscu",
        ],
      },
      {
        title: "Strony www dla branż z Kluczborka – przemysł, spożywka, rolnictwo",
        text: "Firmy z Kluczborka działają w różnych branżach, więc nie robimy jednej strony dla wszystkich. Zakład z branży maszynowej lub metalowej potrzebuje opisu parku maszynowego, zakresu obróbki i formularza, do którego można dołączyć rysunek. Przetwórca spożywczy – prezentacji produktów, informacji dla sieci i hurtowni oraz miejsca na dokumenty jakościowe. Firma obsługująca rolnictwo – oferty podzielonej na maszyny, części i serwis, z szybkim kontaktem w sezonie. Sklepy i usługi dla mieszkańców stawiają na godziny otwarcia, cennik i dojazd. Mamy doświadczenie z podobnymi tematami: robiliśmy strony dla firmy świadczącej usługi przemysłowe, serwisu PowerLAB (chiptuning i AdBlue) oraz hurtowni budowlanej.",
        bullets: [
          "Przemysł maszynowy i metalowy: park maszynowy, zapytanie z załącznikiem",
          "Przetwórstwo spożywcze: produkty, oferta dla sieci i hurtowni",
          "Rolnictwo: maszyny, części, serwis i szybki kontakt",
          "Handel: katalog produktów lub sklep internetowy",
          "Usługi lokalne: cennik, godziny, mapa dojazdu, rezerwacja kontaktu",
        ],
      },
      {
        title: "Opieka nad stroną, automatyzacje i IT dla firm z Kluczborka",
        text: "Strona zostawiona bez opieki z czasem zwalnia i staje się łatwym celem ataków. Dlatego proponujemy stałą opiekę: aktualizujemy system i wtyczki, robimy regularne kopie zapasowe i monitorujemy, czy strona działa. Gdy coś się zepsuje, przywracamy ją z kopii. Firmom z Kluczborka wdrażamy też Microsoft 365 albo Google Workspace – firmową pocztę we własnej domenie, wspólne kalendarze i pliki dostępne dla całego zespołu. Trzeci obszar to automatyzacje w n8n lub Make: formularz ze strony sam zakłada wiersz w arkuszu, nowe zamówienie wysyła powiadomienie, a raport tygodniowy przychodzi na maila bez niczyjej pracy. Wszystko da się prowadzić zdalnie.",
        bullets: [
          "Aktualizacje systemu i wtyczek, kopie zapasowe, monitoring",
          "Przywrócenie strony z kopii po awarii",
          "Microsoft 365 / Google Workspace: poczta w domenie, pliki, kalendarze",
          "Automatyzacje n8n/Make: formularze, zamówienia, raporty",
          "Jedna osoba kontaktowa do strony, poczty i automatyzacji",
        ],
      },
      {
        title: "Jak wygląda współpraca przy stronie internetowej w Kluczborku",
        text: "Pierwszy krok to bezpłatna konsultacja – 30 minut rozmowy o tym, czego potrzebujecie i czy strona faktycznie to rozwiąże. Jeśli decydujecie się iść dalej, umawiamy spotkanie na miejscu u Was w Kluczborku. Poznajemy firmę, zbieramy materiały i ustalamy zakres. Na tej podstawie przygotowujemy wycenę ze stałą ceną, więc kwota nie rośnie w trakcie prac. Kolejne etapy prowadzimy zdalnie: pokazujemy projekt, zbieramy uwagi, wdrażamy i testujemy. O postępach informujemy na bieżąco, bez dopytywania z Waszej strony. Prosta strona firmowa powstaje zwykle w 2–4 tygodnie od przekazania materiałów. Po uruchomieniu uczymy obsługi panelu i przekazujemy komplet dostępów.",
        bullets: [
          "Bezpłatna konsultacja 30 min – telefonicznie lub online",
          "Spotkanie na miejscu u klienta w Kluczborku",
          "Wycena ze stałą ceną, bez dopłat w trakcie",
          "Projekt, uwagi, wdrożenie i testy – zdalnie",
          "Prosta strona zwykle w 2–4 tygodnie od przekazania materiałów",
          "Szkolenie z panelu i komplet dostępów na koniec",
        ],
      },
    ],
    faq: [
      {
        q: "Czy obsługujecie firmy z Kluczborka, skoro macie siedzibę w Wieluniu?",
        a: "Tak. Z Wielunia do Kluczborka jest ok. 55 km, więc dojazd na spotkanie to dla nas zwykły wyjazd, a nie wyprawa. Pracujemy z firmami z Kluczborka i okolic, m.in. z Byczyny, Wołczyna i Olesna. Granica województw niczego nie zmienia: na pierwsze spotkanie przyjeżdżamy do Was, a resztę projektu prowadzimy zdalnie.",
      },
      {
        q: "Ile kosztuje strona internetowa w Kluczborku?",
        a: "Cena wynika z zakresu prac: liczby podstron, tego, czy potrzebny jest katalog lub sklep, czy pomagamy przy tekstach i jakie integracje wchodzą w grę. Dlatego najpierw rozmawiamy, a dopiero potem wyceniamy. Po bezpłatnej konsultacji dostajecie wycenę ze stałą ceną. Koszty domeny i hostingu pokazujemy osobno, również z góry.",
      },
      {
        q: "Ile trwa wykonanie strony dla firmy z Kluczborka?",
        a: "Prosta strona firmowa to zwykle 2–4 tygodnie od momentu, gdy przekażecie materiały: teksty, zdjęcia, logo i dane firmy. Najczęściej to właśnie zbieranie materiałów trwa najdłużej, dlatego pomagamy je przygotować i mówimy wprost, czego brakuje. Sklepy internetowe i strony z rozbudowanym katalogiem potrzebują więcej czasu – konkretny termin wpisujemy w wycenie.",
      },
      {
        q: "Czy pomożecie z wizytówką Google dla firmy z Kluczborka?",
        a: "Tak. Zakładamy wizytówkę albo porządkujemy istniejącą: kategorie, opis, godziny, zdjęcia, lista usług i link do strony. Pokazujemy też, jak zbierać opinie i jak na nie odpowiadać. Wizytówka i strona powinny podawać te same dane firmy, dlatego najlepiej zająć się nimi razem – wtedy Google chętniej pokazuje firmę na mapie i w wynikach lokalnych.",
      },
      {
        q: "Mamy już stronę. Czy możecie ją poprawić zamiast robić nową?",
        a: "Często tak. Najpierw sprawdzamy, na czym strona jest zbudowana, jak szybko działa i jak wypada w Google. Jeśli podstawa jest dobra, wystarczy poprawić strukturę, treści i szybkość. Jeśli strona stoi na przestarzałym lub ciężkim rozwiązaniu, uczciwie mówimy, że nowa wyjdzie taniej niż łatanie starej. Przy przenosinach pilnujemy przekierowań, żeby nie stracić pozycji.",
      },
      {
        q: "Czy po wdrożeniu możemy sami zmieniać treści na stronie?",
        a: "Tak, strona należy do Was i dostajecie do niej pełne dostępy. Na szkoleniu pokazujemy, jak edytować teksty, podmieniać zdjęcia, dodawać realizacje i wpisy. Panel przygotowujemy tak, żeby poradziła sobie z nim osoba bez wiedzy technicznej. Jeśli nie chcecie się tym zajmować, zmiany wprowadzamy za Was w ramach opieki nad stroną.",
      },
    ],
    related: [
      "programista-kluczbork",
      "strony-internetowe-wielun",
      "pozycjonowanie-stron-wielun-sieradz-zdunska-wola",
      "strony-internetowe-dla-firm",
      "sklepy-internetowe-woocommerce",
    ],
    keywords: [
      "strony internetowe Kluczbork",
      "tworzenie stron internetowych Kluczbork",
      "projektowanie stron www Kluczbork",
      "sklep internetowy Kluczbork",
      "pozycjonowanie Kluczbork",
      "wizytówka Google Kluczbork",
      "strony www Olesno",
    ],
    portfolio: [
      "TCHX - Usługi przemysłowe",
      "PowerLAB – chiptuning i serwis AdBlue",
      "Hurtownia Budowlana Panek",
    ],
  },
];
