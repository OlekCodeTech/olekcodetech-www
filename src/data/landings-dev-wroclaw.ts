import type { LandingPage } from "./types";

/**
 * Lokalne strony „programista + miasto” – Wrocław i okolice
 * (Oleśnica, Oława, Trzebnica, Środa Śląska).
 * Każda ma własną treść (lokalne branże, inne przykłady zastosowań) –
 * to nie są kopie z podmienioną nazwą miasta.
 */
export const devCityLandingsWroclaw: LandingPage[] = [
  // ---------------------------------------------------------------------------
  // WROCŁAW – ok. 120 km od Wielunia, trasą S8
  // ---------------------------------------------------------------------------
  {
    slug: "programista-wroclaw",
    kind: "city",
    parent: "aplikacje-dedykowane",
    topic: "dev",
    navLabel: "Programista Wrocław",
    calculator: true,
    title:
      "Programista Wrocław – oprogramowanie na zamówienie, automatyzacje i integracje dla firm",
    metaTitle: "Programista Wrocław – programy dla firm | OlekCodeTech",
    metaDescription:
      "Programista dla firm z Wrocławia: programy na zamówienie, automatyzacje i integracje. Stała cena, kontakt z autorem kodu. Umów bezpłatną konsultację.",
    eyebrow: "Lokalnie · Wrocław i okolice",
    city: "Wrocław",
    cityLocative: "we Wrocławiu",
    lead: [
      "Szukacie programisty we Wrocławiu, ale nie chcecie wchodzić w wielomiesięczny projekt z rozbudowanym zespołem po drugiej stronie? OlekCodeTech to mała firma z Wielunia – ok. 120 km od Wrocławia trasą S8. Od 2019 roku zrobiliśmy ponad 50 projektów dla firm z całej Polski: systemy do obsługi zleceń, CRM-y, sklepy z integracjami i automatyzacje. Z firmami z Wrocławia pracujemy głównie zdalnie – na wideorozmowach i regularnych pokazach postępów – a na warsztat startowy i wdrożenie przyjeżdżamy na miejsce.",
      "Czym różnimy się od dużych software house'ów? Rozmawiacie bezpośrednio z osobą, która pisze kod – bez pośredników i przekazywania ustaleń przez kilka szczebli. Zamiast stawki godzinowej i otwartego budżetu dostajecie wycenę ze stałą ceną i terminem za konkretny zakres. „Programista Wrocław” oznacza u nas po prostu kogoś, kto najpierw zrozumie, jak działa Wasza firma, a potem napisze program, który zdejmie z ludzi powtarzalną robotę.",
    ],
    sections: [
      {
        title: "Oprogramowanie na zamówienie dla firm z Wrocławia",
        text: "Piszemy programy dopasowane do tego, jak faktycznie pracuje Wasza firma – a nie odwrotnie. Najczęściej są to aplikacje działające w przeglądarce: pracownik loguje się z komputera lub telefonu i widzi swoje zlecenia, klientów, dokumenty czy stany magazynowe. Niczego nie trzeba instalować, a dane są w jednym miejscu zamiast w kilkunastu arkuszach i skrzynkach mailowych. Budujemy w React, Next.js, TypeScript, Node.js i PostgreSQL – to popularne technologie, więc w razie potrzeby projekt przejmie każdy doświadczony programista. Gdy część zespołu pracuje w terenie, dokładamy aplikację mobilną na iOS i Androida w React Native. W ten sposób powstaje m.in. rozwijany przez nas system TMS dla firmy transportowej, z aplikacją dla kierowców.",
        bullets: [
          "Aplikacje w przeglądarce dla biura, magazynu i handlowców",
          "Panele dla pracowników z uprawnieniami i historią zmian",
          "CRM dopasowany do Waszego procesu sprzedaży",
          "Systemy zleceń, rezerwacji i harmonogramów",
          "Proste systemy magazynowe i ewidencje",
          "Aplikacje mobilne iOS/Android dla pracowników w terenie",
        ],
      },
      {
        title: "Automatyzacja pracy w firmie – programista Wrocław od powtarzalnych zadań",
        text: "W większości firm są czynności, które ktoś wykonuje codziennie w ten sam sposób: przepisuje zamówienia z maila do arkusza, składa raport z kilku plików, sprawdza w portalu, czy pojawiło się coś nowego, wysyła klientom przypomnienia. To dobry materiał na automatyzację. Proste przepływy ustawiamy w n8n lub Make, a tam, gdzie gotowe narzędzie nie wystarcza, piszemy własny skrypt – najczęściej w Pythonie lub Node.js. Automat działa w tle, o ustalonej porze albo po konkretnym zdarzeniu, i informuje, gdy coś pójdzie nie tak. Zaczynamy zwykle od jednej czynności, która zabiera najwięcej czasu, i dopiero po sprawdzeniu efektu bierzemy kolejne.",
        bullets: [
          "Przepisywanie danych między systemami bez udziału człowieka",
          "Raporty PDF i Excel generowane o stałej porze",
          "Pobieranie danych ze stron, portali i skrzynek pocztowych",
          "Powiadomienia e-mail i SMS do klientów i pracowników",
          "Przepływy w n8n i Make oraz własne skrypty",
          "Automatyzacje w Microsoft 365 (Power Automate) i Google Workspace",
        ],
      },
      {
        title: "Integracje systemów: sklep, Allegro, kurierzy, magazyn",
        text: "Wrocławskie firmy handlowe często mają sklep internetowy, konto na Allegro, program magazynowy i kilku kurierów – a między nimi człowieka, który wszystko przepisuje. Łączymy te systemy tak, żeby zamówienie samo trafiało tam, gdzie powinno, a stany i ceny były wszędzie takie same. Mamy to przećwiczone: dla sklepu elektrycznego RAV zrobiliśmy synchronizację stanów i cen z programem Subiekt nexo, a w platformie Wypożycz Sukienkę połączyliśmy kalendarz rezerwacji z płatnościami online i zamawianiem kuriera. Jeżeli Wasz program udostępnia API albo choćby eksport do pliku, zwykle da się go podłączyć. Sprawdzamy to przed wyceną, żeby nie obiecywać rzeczy niewykonalnych.",
        bullets: [
          "WooCommerce połączony z magazynem i fakturowaniem",
          "Allegro: oferty, stany i zamówienia w jednym miejscu",
          "Kurierzy: InPost, DPD, Furgonetka – etykiety i statusy",
          "Płatności online, m.in. Przelewy24",
          "Programy magazynowo-księgowe, np. Subiekt nexo",
          "Dowolne API albo wymiana plików CSV/XML",
        ],
      },
      {
        title: "Dla jakich firm z Wrocławia piszemy oprogramowanie",
        text: "Wrocław to duży rynek e-commerce, usług dla biznesu, logistyki i produkcji – i w każdej z tych branż program na zamówienie rozwiązuje inny problem. Sklepom internetowym porządkujemy obieg zamówień i zwrotów. Firmom usługowym B2B budujemy CRM i panel klienta, w którym kontrahent sam sprawdza status zlecenia i pobiera dokumenty. Magazynom i firmom transportowym – systemy zleceń z aplikacją dla kierowcy lub magazyniera. Startupom pomagamy zbudować pierwszą wersję produktu, którą można pokazać klientom i inwestorom. Dla marki związanej z Wrocławiem zrobiliśmy też sklep dla akademii fryzjerskiej, łączący sprzedaż produktów i szkoleń.",
        bullets: [
          "E-commerce: zamówienia, zwroty, synchronizacja stanów",
          "Usługi B2B: CRM, ofertowanie, panel klienta",
          "Logistyka i magazyny: zlecenia, awizacje, aplikacja mobilna",
          "Produkcja: ewidencja zleceń i raporty dla kierownictwa",
          "Firmy usługowe: rezerwacje, grafiki, przypomnienia",
          "Startupy: pierwsza wersja produktu (MVP)",
        ],
      },
      {
        title: "Ile kosztuje program na zamówienie i kiedy się zwraca",
        text: "Nie mamy cennika, bo każdy program jest inny – ale sposób liczenia jest zawsze ten sam. Na początku wspólnie sprawdzamy, ile godzin w miesiącu Wasi ludzie poświęcają na czynność, którą chcecie zautomatyzować, i mnożymy to przez koszt ich pracy. Tak powstaje kwota, którą firma traci dziś. Zestawiamy ją z wyceną i od razu widać, po jakim czasie inwestycja się zwróci – albo że się nie opłaca, i wtedy mówimy to wprost. Wycena ma stałą cenę za opisany zakres, a większe projekty dzielimy na etapy. Zaczynamy od najmniejszego modułu, który daje realny efekt. Wstępny rachunek możecie zrobić sami w kalkulatorze na dole strony.",
        bullets: [
          "Liczymy godziny ręcznej pracy i ich koszt dla firmy",
          "Wycena ze stałą ceną po rozmowie – nie stawka godzinowa",
          "Podział na etapy, każdy z osobnym zakresem i terminem",
          "Start od najmniejszego modułu, który daje efekt",
          "Uczciwa informacja, gdy automatyzacja się nie opłaca",
        ],
      },
      {
        title: "Jak pracujemy z firmą z Wrocławia",
        text: "Pierwszy krok to bezpłatna, 30-minutowa konsultacja – telefonicznie lub na wideo. Jeśli widzimy, że możemy pomóc, umawiamy warsztat: zdalnie albo u Was we Wrocławiu, gdzie oglądamy proces na żywo i rozmawiamy z osobami, które będą z programu korzystać. Potem dostajecie wycenę ze stałą ceną i terminem. Budujemy etapami i co ustalony czas pokazujemy działającą wersję, żebyście mogli zgłaszać uwagi na bieżąco, a nie dopiero na końcu. Po wdrożeniu szkolimy zespół i zostajemy do opieki: poprawki, rozwój, monitoring. Kod źródłowy i prawa autorskie przechodzą na Was – nie jesteście do nas przywiązani umową ani technologią.",
        bullets: [
          "Bezpłatna konsultacja (30 min) – telefon lub wideo",
          "Warsztat zdalnie albo na miejscu we Wrocławiu",
          "Wycena ze stałą ceną, zakresem i terminem",
          "Budowa etapami z regularnymi pokazami postępów",
          "Wdrożenie i szkolenie pracowników",
          "Opieka po starcie; kod i prawa autorskie należą do Was",
        ],
      },
    ],
    faq: [
      {
        q: "Czy programista z Wielunia może obsłużyć firmę z Wrocławia?",
        a: "Tak. Większość pracy nad programem i tak odbywa się przy komputerze, więc z firmami z Wrocławia spotykamy się na wideorozmowach i pokazujemy postępy na działającej wersji roboczej. Na warsztat startowy, wdrożenie i szkolenie przyjeżdżamy na miejsce – z Wielunia to ok. 120 km trasą S8. Na co dzień jesteśmy pod telefonem i mailem.",
      },
      {
        q: "Ile kosztuje program na zamówienie dla firmy we Wrocławiu?",
        a: "To zależy od zakresu: liczby ekranów i ról użytkowników, integracji z innymi systemami oraz tego, czy potrzebna jest aplikacja mobilna. Dlatego nie podajemy ceny bez rozmowy. Po bezpłatnej konsultacji i krótkim warsztacie dostajecie wycenę ze stałą ceną i terminem, podzieloną na etapy, razem z szacunkiem, kiedy inwestycja się zwróci.",
      },
      {
        q: "Czym różni się współpraca z Wami od dużego software house'u z Wrocławia?",
        a: "Jesteśmy małym zespołem, więc rozmawiacie bezpośrednio z osobą, która projektuje i pisze Wasz program. Ustalenia nie giną po drodze, a decyzje zapadają szybko. Rozliczamy się stałą ceną za opisany zakres, a nie za przepracowane godziny. Najlepiej sprawdzamy się w projektach dla małych i średnich firm, gdzie liczy się szybki, konkretny efekt.",
      },
      {
        q: "Czy da się połączyć nowe oprogramowanie z programem, który już mamy?",
        a: "W większości przypadków tak. Łączyliśmy m.in. sklep WooCommerce z programem Subiekt nexo, płatnościami online i kurierami. Jeśli Wasz system ma API, integracja jest zwykle prosta; jeśli nie – często wystarcza eksport i import plików albo odczyt danych z bazy. Możliwości sprawdzamy przed wyceną, więc wiecie z góry, co będzie działać.",
      },
      {
        q: "Co, jeśli nasza firma pracuje tylko na Excelu?",
        a: "To częsty punkt wyjścia i żaden wstyd. Arkusz dobrze pokazuje, jakie dane są dla Was ważne, więc traktujemy go jak gotowy opis potrzeb. Zwykle przenosimy dane do aplikacji w przeglądarce, w której kilka osób może pracować jednocześnie, a raporty robią się same. Dotychczasowe dane importujemy, żeby nikt nie zaczynał od zera.",
      },
      {
        q: "Kto jest właścicielem kodu po zakończeniu projektu?",
        a: "Wy. Po rozliczeniu projektu przekazujemy kod źródłowy, dostępy i majątkowe prawa autorskie – zapisujemy to w umowie. Korzystamy z popularnych technologii (React, Next.js, Node.js, PostgreSQL), więc program może dalej rozwijać inny programista albo Wasz własny dział IT. Zależy nam, żebyście zostawali z nami z wyboru, a nie z konieczności.",
      },
    ],
    related: [
      "strony-internetowe-wroclaw",
      "programista-olesnica",
      "programista-olawa",
      "programista-trzebnica",
      "programista-sroda-slaska",
    ],
    keywords: [
      "programista Wrocław",
      "oprogramowanie dla firm Wrocław",
      "programy na zamówienie Wrocław",
      "automatyzacja Wrocław",
      "aplikacje dla firm Wrocław",
      "software house Wrocław",
      "integracje systemów Wrocław",
      "oprogramowanie na zamówienie Wrocław",
    ],
    portfolio: ["SZYJA Hair Academy", "Plonio.pl", "CRM E-Numerika Biuro Księgowe"],
  },

  // ---------------------------------------------------------------------------
  // OLEŚNICA – ok. 90 km, przy S8
  // ---------------------------------------------------------------------------
  {
    slug: "programista-olesnica",
    kind: "city",
    parent: "aplikacje-dedykowane",
    topic: "dev",
    navLabel: "Programista Oleśnica",
    calculator: true,
    title: "Programista Oleśnica – programy na zamówienie i automatyzacje dla firm produkcyjnych i handlowych",
    metaTitle: "Programista Oleśnica – programy dla firm | OlekCodeTech",
    metaDescription:
      "Programista dla firm z Oleśnicy: systemy zleceń, magazyn, integracje sklepu i automatyzacje. Wycena ze stałą ceną. Umów bezpłatną konsultację 30 min.",
    eyebrow: "Lokalnie · Oleśnica i powiat oleśnicki",
    city: "Oleśnica",
    cityLocative: "w Oleśnicy",
    lead: [
      "Oleśnica leży przy tej samej drodze co my – z Wielunia jedzie się tu trasą S8 ok. 90 km. OlekCodeTech działa od 2019 roku i ma za sobą ponad 50 projektów: programy do obsługi zleceń, sklepy połączone z magazynem, CRM-y i automatyzacje dla firm z całej Polski. Jeśli wpisujecie w wyszukiwarkę „programista Oleśnica”, bo arkusze i zeszyty przestały wystarczać, dobrze trafiliście.",
      "Nie będziemy udawać, że mamy biuro w Oleśnicy. Siedziba jest w Wieluniu, a z firmami z Oleśnicy i okolic pracujemy głównie zdalnie: rozmawiamy na wideo i co kilka tygodni pokazujemy, co już działa. Na spotkanie startowe i uruchomienie programu przyjeżdżamy do Was, bo hali produkcyjnej, magazynu czy biura obsługi najlepiej nie oglądać przez kamerę.",
    ],
    sections: [
      {
        title: "Programy na zamówienie dla firm z Oleśnicy",
        text: "W firmie rodzinnej, która urosła, zwykle wygląda to tak: zamówienia przychodzą mailem i telefonem, ktoś wpisuje je do arkusza, produkcja dostaje wydruk, a o stan realizacji trzeba pytać na hali. Program na zamówienie zbiera to w jednym miejscu. Budujemy aplikacje otwierane w przeglądarce – na komputerze w biurze, tablecie na hali, telefonie handlowca – w których każdy widzi to, czego potrzebuje do swojej pracy. Zakres dobieramy do Was: czasem wystarczy lista zleceń ze statusami, czasem potrzebny jest CRM, prosty magazyn i panel dla pracowników. Jeśli ludzie pracują poza biurem, robimy też aplikację mobilną na iOS i Androida.",
        bullets: [
          "System zleceń ze statusami widocznymi dla całej firmy",
          "Panele dla pracowników – każdy widzi swoje zadania",
          "CRM z historią kontaktów, ofert i zamówień",
          "Ewidencja magazynu: przyjęcia, wydania, stany",
          "Aplikacje na tablet i telefon dla hali i kierowców",
          "Import dotychczasowych danych z arkuszy",
        ],
      },
      {
        title: "Automatyzacja w firmie: mniej przepisywania, mniej pomyłek",
        text: "Automatyzacja nie musi oznaczać dużego wdrożenia. Często chodzi o jedną rzecz, która codziennie zjada komuś godzinę: przepisanie zamówień ze sklepu do programu, zestawienie dla szefa składane ręcznie z trzech plików, sprawdzanie cen u dostawcy na jego stronie. Takie czynności oddajemy automatom. Korzystamy z n8n i Make, a gdy sprawa jest nietypowa, piszemy własny skrypt w Pythonie. Raport w PDF lub Excelu może przychodzić na maila w każdy poniedziałek rano, a klient może dostawać SMS, gdy jego zamówienie zmienia status. Przy okazji znikają literówki i pominięte pozycje, które przy ręcznym przepisywaniu prędzej czy później się zdarzają.",
        bullets: [
          "Automatyczne przenoszenie zamówień między programami",
          "Cykliczne raporty PDF/Excel wysyłane na e-mail",
          "Pobieranie cenników i danych ze stron dostawców",
          "Powiadomienia SMS i e-mail o statusie zamówienia",
          "Przepływy n8n/Make i własne skrypty w Pythonie",
        ],
      },
      {
        title: "Programista Oleśnica – integracje sklepu, Allegro i magazynu",
        text: "Firmy handlowe z Oleśnicy coraz częściej sprzedają równolegle w sklepie stacjonarnym, internetowym i na Allegro. Kłopot zaczyna się, gdy każdy z tych kanałów ma własne stany i ceny. Łączymy je ze sobą: źródłem prawdy zostaje Wasz program magazynowy, a sklep i Allegro pobierają z niego dane. Robiliśmy to dla sklepu elektrycznego RAV, gdzie WooCommerce synchronizuje stany i ceny z Subiektem nexo. Budowaliśmy też sklep WTA Perfekt z ponad tysiącem produktów, więc wiemy, jak wygląda praca na dużym asortymencie. Do tego podłączamy kurierów i płatności, żeby zamówienie od kliknięcia „kupuję” do nadania paczki wymagało jak najmniej ręcznej pracy.",
        bullets: [
          "Synchronizacja stanów i cen: magazyn – sklep – Allegro",
          "WooCommerce z programem Subiekt nexo i podobnymi",
          "Etykiety kurierskie InPost, DPD, Furgonetka z poziomu zamówienia",
          "Płatności online Przelewy24 z automatycznym statusem",
          "Dowolne API, a gdy go brak – wymiana plików",
          "Import dużych katalogów produktów",
        ],
      },
      {
        title: "Oprogramowanie dla firm z Oleśnicy i powiatu: produkcja, logistyka, handel",
        text: "Gospodarka Oleśnicy opiera się na produkcji, logistyce przy S8, handlu i firmach rodzinnych – i pod takie potrzeby dobieramy rozwiązania. Zakład produkcyjny zyskuje ewidencję zleceń, w której widać, co jest na jakim etapie i co się opóźnia. Firma transportowa – system do planowania kursów; taki system TMS, ze zleceniami, planem załadunku pojazdu, kalendarzem dostępności aut i aplikacją dla kierowców, rozwijamy na co dzień. Hurtownia może dać stałym odbiorcom panel do składania zamówień bez dzwonienia. A firma rodzinna, w której wiedza o klientach jest w głowie właściciela, dostaje prosty CRM, z którego skorzystają też pracownicy.",
        bullets: [
          "Produkcja: zlecenia, etapy, terminy, opóźnienia",
          "Transport: planowanie kursów i aplikacja dla kierowców",
          "Hurtownie: panel zamówień dla stałych odbiorców",
          "Handel: jeden stan magazynowy dla wszystkich kanałów",
          "Firmy rodzinne: CRM i porządek w danych klientów",
          "Usługi: grafiki, zlecenia serwisowe, protokoły",
        ],
      },
      {
        title: "Ile kosztuje program dla firmy i po jakim czasie się zwraca",
        text: "Zanim padnie jakakolwiek kwota, robimy prosty rachunek. Pytamy, kto i jak długo wykonuje dziś daną czynność ręcznie – na przykład dwie osoby po godzinie dziennie. Mnożymy te godziny przez koszt pracy i wychodzi, ile firma płaci co miesiąc za przepisywanie. Dopiero do tego przykładamy wycenę programu. Jeśli zwrot wypada po rozsądnym czasie, jest o czym rozmawiać; jeśli nie, proponujemy mniejszy zakres albo odradzamy. Cena w wycenie jest stała i dotyczy opisanego zakresu, więc nie rośnie w trakcie prac. Większe pomysły dzielimy na etapy i zaczynamy od modułu, który najszybciej odciąży ludzi. Kalkulator pod tekstem pozwala policzyć to wstępnie samodzielnie.",
        bullets: [
          "Rachunek: godziny ręcznej pracy razy koszt pracownika",
          "Stała cena za opisany zakres, bez dopłat w trakcie",
          "Etapy – płacicie za kolejne działające części",
          "Pierwszy moduł to ten, który daje najszybszy efekt",
          "Kalkulator opłacalności na dole strony",
        ],
      },
      {
        title: "Jak wygląda współpraca z firmą z Oleśnicy",
        text: "Zaczynamy od 30 minut bezpłatnej rozmowy, w której opowiadacie, co Was najbardziej męczy. Następny krok to warsztat – możemy zrobić go zdalnie, ale przy firmach produkcyjnych i handlowych chętnie przyjeżdżamy do Oleśnicy, żeby zobaczyć, jak dokumenty i towar krążą po firmie. Po warsztacie przygotowujemy wycenę: zakres, stała cena, termin. Program powstaje etapami, a po każdym pokazujemy działającą część i zbieramy uwagi. Na koniec wdrażamy go u Was, szkolimy pracowników i ustalamy zasady opieki. Kod źródłowy i prawa autorskie przechodzą na Waszą firmę, razem z dostępami do serwera i dokumentacją. Dalszy rozwój możecie zlecać nam albo komuś innemu.",
        bullets: [
          "Bezpłatna rozmowa wstępna – 30 minut",
          "Warsztat zdalnie lub na miejscu w Oleśnicy",
          "Wycena: zakres, stała cena, termin",
          "Etapy zakończone pokazem działającej części",
          "Wdrożenie i szkolenie u Was w firmie",
          "Opieka po starcie, kod i prawa autorskie dla klienta",
        ],
      },
    ],
    faq: [
      {
        q: "Czy przyjeżdżacie do Oleśnicy, czy pracujecie tylko zdalnie?",
        a: "Jedno i drugie. Codzienna praca nad programem odbywa się zdalnie: wideorozmowy, telefon, pokazy postępów na wersji roboczej. Do Oleśnicy przyjeżdżamy na warsztat startowy oraz na wdrożenie i szkolenie pracowników. Z Wielunia to ok. 90 km trasą S8, więc dojazd nie jest problemem, gdy spotkanie na żywo ma sens.",
      },
      {
        q: "Ile kosztuje program na zamówienie dla małej firmy?",
        a: "Zależy od tego, co program ma robić: ile osób z niego korzysta, z czym ma się łączyć, czy potrzebna jest wersja na telefon. Po bezpłatnej konsultacji przygotowujemy wycenę ze stałą ceną i terminem. Małym firmom proponujemy zwykle start od jednego modułu – tak, żeby pierwszy efekt pojawił się szybko i nie obciążał budżetu.",
      },
      {
        q: "Jakie oprogramowanie dla firm z Oleśnicy robicie najczęściej?",
        a: "Specjalizujemy się w programach porządkujących codzienną pracę: systemach zleceń, CRM-ach, ewidencjach magazynowych, panelach dla pracowników i klientów oraz integracjach sklepu internetowego z magazynem i kurierami. Do tego automatyzacje – raporty, powiadomienia, przenoszenie danych. Wszystko powstaje pod konkretną firmę, a nie z gotowego pudełka.",
      },
      {
        q: "Czy program połączy się z Subiektem albo innym systemem, który już mamy?",
        a: "Najczęściej tak. Mamy za sobą integrację sklepu WooCommerce z Subiektem nexo, w której stany i ceny synchronizują się automatycznie. Przy innych programach sprawdzamy, czy udostępniają API, bazę danych albo eksport plików – jedna z tych dróg zwykle jest dostępna. Weryfikujemy to przed wyceną, żeby nie było niespodzianek.",
      },
      {
        q: "Mamy tylko Excela i zeszyt. Czy to nie za wcześnie na własny program?",
        a: "Nie. Jeśli arkusz zaczyna się rozjeżdżać, bo edytuje go kilka osób, albo szukanie informacji zajmuje coraz więcej czasu, to dobry moment. Wasze arkusze wykorzystamy jako punkt wyjścia: pokażą, jakie dane zbieracie i czego brakuje. Dane z Excela przenosimy do nowego programu, więc historia zostaje.",
      },
      {
        q: "Kto jest właścicielem kodu i co, jeśli zechcemy zmienić wykonawcę?",
        a: "Właścicielem jesteście Wy. Po zakończeniu i rozliczeniu projektu przekazujemy kod źródłowy, prawa autorskie i wszystkie dostępy. Program piszemy w powszechnie używanych technologiach, więc inny programista bez trudu go przejmie. Jeśli kiedyś uznacie, że wolicie pracować z kimś innym, nic Was nie blokuje.",
      },
    ],
    related: [
      "programista-wroclaw",
      "programista-kepno",
      "programista-wielun",
      "systemy-dla-firm-transportowych",
      "integracje-sklepow-internetowych",
    ],
    keywords: [
      "programista Oleśnica",
      "oprogramowanie dla firm Oleśnica",
      "programy na zamówienie Oleśnica",
      "automatyzacja Oleśnica",
      "aplikacje dla firm Oleśnica",
      "software house Oleśnica",
      "integracja sklepu z magazynem Oleśnica",
    ],
    portfolio: ["RAV - Sklep elektryczny", "WTA Perfekt", "PROMYK – okna i drzwi"],
  },

  // ---------------------------------------------------------------------------
  // OŁAWA – przemysł, strefa ekonomiczna
  // ---------------------------------------------------------------------------
  {
    slug: "programista-olawa",
    kind: "city",
    parent: "aplikacje-dedykowane",
    topic: "dev",
    navLabel: "Programista Oława",
    calculator: true,
    title: "Programista Oława – oprogramowanie dla firm produkcyjnych, transportowych i usługowych",
    metaTitle: "Programista Oława – oprogramowanie dla firm | OlekCodeTech",
    metaDescription:
      "Programista dla firm z Oławy: ewidencja zleceń, raporty, integracje i aplikacje mobilne. Stała cena i termin w wycenie. Umów bezpłatną konsultację.",
    eyebrow: "Lokalnie · Oława i powiat oławski",
    city: "Oława",
    cityLocative: "w Oławie",
    lead: [
      "Oława to miasto przemysłu: strefa ekonomiczna, zakłady produkcyjne, dostawcy branży motoryzacyjnej oraz dziesiątki mniejszych firm, które je obsługują – transportem, serwisem, utrzymaniem ruchu, usługami. Właśnie te mniejsze firmy najczęściej szukają hasła „programista Oława”, bo duży klient wymaga terminowości i porządku w dokumentach, a w biurze wciąż królują arkusze i maile.",
      "OlekCodeTech to firma programistyczna z Wielunia, działająca od 2019 roku, z ponad 50 projektami na koncie. Z firmami z Oławy pracujemy przede wszystkim zdalnie – przez wideorozmowy i pokazy kolejnych wersji programu. Na warsztat otwierający projekt i na wdrożenie dojeżdżamy w okolice Wrocławia, zwykle łącząc wizytę z innymi spotkaniami w regionie.",
    ],
    sections: [
      {
        title: "Oprogramowanie na zamówienie dla firm z Oławy",
        text: "Gotowe programy są projektowane dla „przeciętnej firmy”, a Wasza ma własne wymagania: konkretny obieg zleceń, wzory protokołów, sposób rozliczania z kontrahentem. Program na zamówienie odwzorowuje to dokładnie. Tworzymy aplikacje działające w przeglądarce, z których korzysta biuro, brygadziści i kierownictwo – każdy ze swoimi uprawnieniami. Zlecenie wprowadzone raz jest widoczne dla wszystkich zainteresowanych, a jego historia zostaje w systemie. Pracownikom w terenie lub na obiekcie klienta dajemy aplikację mobilną na iOS i Androida: zdjęcie, podpis, status wykonania trafiają do biura od razu. Dane trzymamy w bazie PostgreSQL, z regularnymi kopiami zapasowymi.",
        bullets: [
          "Ewidencja zleceń i prac wykonywanych dla zakładów",
          "Panele dla biura, brygadzistów i kierownictwa",
          "CRM z umowami, ofertami i terminami",
          "Magazyn części, narzędzi i materiałów",
          "Aplikacje mobilne z protokołami i zdjęciami",
          "Uprawnienia i historia zmian w każdym module",
        ],
      },
      {
        title: "Automatyzacja raportów i dokumentów – programista Oława dla biura",
        text: "Firmy pracujące dla przemysłu produkują dużo papieru: zestawienia godzin, protokoły odbioru, raporty miesięczne dla zleceniodawcy, potwierdzenia dostaw. Sporą część tych dokumentów da się generować automatycznie z danych, które i tak już wprowadzacie. Piszemy skrypty w Pythonie, które składają raport w PDF lub Excelu według Waszego wzoru i wysyłają go pod wskazany adres. Automat może też regularnie logować się do portalu kontrahenta i pobierać nowe zamówienia albo awizacje, zamiast żeby robił to pracownik. Prostsze przepływy – powiadomienia, przypomnienia o terminach, kopiowanie danych między arkuszami – ustawiamy w n8n, Make lub Power Automate, jeśli firma korzysta z Microsoft 365.",
        bullets: [
          "Raporty miesięczne i zestawienia godzin w PDF/Excel",
          "Protokoły i potwierdzenia generowane z szablonu",
          "Pobieranie zamówień z portali kontrahentów",
          "Przypomnienia o terminach przeglądów i umów",
          "n8n, Make, Power Automate albo własny skrypt",
          "Powiadomienia e-mail/SMS dla pracowników i klientów",
        ],
      },
      {
        title: "Integracje systemów: magazyn, księgowość, sklep, kurierzy",
        text: "Nowy program rzadko działa w próżni. Zwykle w firmie jest już program magazynowo-księgowy, czasem sklep internetowy z częściami lub materiałami, do tego kurierzy i bank. Naszym zadaniem jest sprawić, żeby te elementy wymieniały dane bez udziału ludzi. Dokument wystawiony w jednym systemie pojawia się w drugim, zamówienie ze sklepu od razu rezerwuje towar, a paczka dostaje etykietę bez przepisywania adresu. Taką wymianę danych zrobiliśmy m.in. między sklepem WooCommerce a Subiektem nexo. Jeśli Wasz system ma API, korzystamy z niego. Jeśli nie ma, szukamy innej drogi – eksportu plików albo bezpośredniego odczytu z bazy – i mówimy otwarcie, co jest możliwe.",
        bullets: [
          "Programy magazynowo-księgowe, np. Subiekt nexo",
          "Sklep WooCommerce z automatycznym obiegiem zamówień",
          "Allegro – oferty i stany z jednego źródła",
          "Kurierzy: InPost, DPD, Furgonetka",
          "Płatności Przelewy24 i statusy wpłat",
          "API kontrahentów oraz pliki CSV/XML",
        ],
      },
      {
        title: "Oprogramowanie dla firm z Oławy: produkcja, transport, usługi dla zakładów",
        text: "Dla mniejszego zakładu produkcyjnego przydatna bywa prosta ewidencja: co jest zlecone, na jakim stanowisku, kiedy ma wyjechać. Bez wdrażania dużego systemu klasy ERP, za to z dokładnie tymi polami, których potrzebujecie. Firmom transportowym z powiatu oławskiego możemy pokazać podejście znane z rozwijanego przez nas systemu TMS: kartoteki, zlecenia, plan załadunku pojazdu i kalendarz dostępności aut. Firmy świadczące usługi dla zakładów – serwis, sprzątanie przemysłowe, utrzymanie ruchu – korzystają na aplikacji, w której pracownik odhacza wykonane prace na telefonie, a biuro od ręki ma podstawę do faktury i raportu dla klienta.",
        bullets: [
          "Produkcja: zlecenia, stanowiska, terminy wysyłek",
          "Dostawcy przemysłu: dokumentacja i raporty dla odbiorcy",
          "Transport: zlecenia, plan załadunku, dostępność aut",
          "Serwis i utrzymanie ruchu: zgłoszenia i protokoły",
          "Usługi dla zakładów: ewidencja wykonanych prac",
        ],
      },
      {
        title: "Ile kosztuje oprogramowanie na zamówienie i kiedy się zwraca",
        text: "Koszt programu warto oceniać tak samo jak zakup maszyny: ile kosztuje i ile pracy zaoszczędzi. Na konsultacji prosimy, żebyście oszacowali, ile godzin tygodniowo biuro spędza na danej czynności – składaniu raportu, przepisywaniu zleceń, uzgadnianiu stanów. Te godziny razy stawka pracownika dają miesięczny koszt obecnego sposobu pracy. Jeśli program odzyskuje większość tego czasu, łatwo wyliczyć, po ilu miesiącach się spłaci. Kwot nie podajemy w ciemno; wycenę ze stałą ceną przygotowujemy po rozmowie i poznaniu procesu. Projekt dzielimy na etapy i zaczynamy od najmniejszej części, która już przynosi oszczędność. Resztę można dobudować później, gdy pierwsza część się sprawdzi.",
        bullets: [
          "Program oceniany jak inwestycja: koszt kontra oszczędność",
          "Godziny pracy biura razy stawka – to punkt odniesienia",
          "Stała cena w wycenie przygotowanej po rozmowie",
          "Etapy, które można realizować z przerwami",
          "Najpierw najmniejszy moduł, który przynosi oszczędność",
        ],
      },
      {
        title: "Jak pracujemy z firmą z Oławy – od konsultacji do opieki",
        text: "Kolejność jest zawsze taka sama. Najpierw bezpłatna konsultacja – pół godziny przez telefon lub wideo, bez zobowiązań. Jeżeli temat ma sens, robimy warsztat, na którym rozrysowujemy proces krok po kroku; może odbyć się zdalnie albo u Was, gdy akurat dojeżdżamy w okolice Wrocławia. Na tej podstawie powstaje wycena ze stałą ceną i terminem. Potem budujemy program etapami i regularnie pokazujemy postępy, żeby poprawki wprowadzać na bieżąco. Wdrożenie obejmuje przeniesienie danych i szkolenie pracowników. Po starcie zapewniamy opiekę i dalszy rozwój. Kod źródłowy oraz prawa autorskie do programu należą do Was.",
        bullets: [
          "Konsultacja 30 minut – bezpłatnie i bez zobowiązań",
          "Warsztat procesowy zdalnie lub na miejscu",
          "Wycena ze stałą ceną i terminem realizacji",
          "Budowa etapami, regularne pokazy postępów",
          "Wdrożenie z przeniesieniem danych i szkoleniem",
          "Opieka po wdrożeniu; kod i prawa autorskie dla Was",
        ],
      },
    ],
    faq: [
      {
        q: "Czy programista z OlekCodeTech przyjedzie do Oławy?",
        a: "Tak, gdy jest taka potrzeba – przede wszystkim na warsztat startowy i wdrożenie. Dojeżdżamy w okolice Wrocławia i zwykle łączymy wizytę z innymi spotkaniami w regionie, dlatego termin ustalamy z wyprzedzeniem. Bieżąca praca odbywa się zdalnie: wideorozmowy, telefon, pokazy działających wersji programu.",
      },
      {
        q: "Jakie oprogramowanie dla firm z Oławy możecie przygotować?",
        a: "Programy porządkujące codzienną pracę: ewidencję zleceń, CRM, magazyn części i materiałów, panele dla pracowników, aplikacje mobilne z protokołami oraz automatyczne raporty. Nie sprzedajemy gotowego produktu – każdy program projektujemy pod konkretną firmę po warsztacie, na którym poznajemy Wasz sposób pracy i wymagania Waszych kontrahentów.",
      },
      {
        q: "Ile kosztuje program na zamówienie?",
        a: "Nie ma jednej ceny, bo program do ewidencji zleceń dla pięciu osób to inny zakres niż system z aplikacją mobilną i integracjami. Po bezpłatnej konsultacji dostajecie wycenę ze stałą ceną, podziałem na etapy i terminem. Razem z Wami liczymy też, ile kosztuje obecna ręczna praca, żeby było jasne, kiedy inwestycja się zwróci.",
      },
      {
        q: "Czy da się połączyć Wasz program z systemem, którego już używamy?",
        a: "Zazwyczaj tak. Nowy program może pobierać dane z programu magazynowo-księgowego, arkuszy, sklepu internetowego lub portalu kontrahenta i odsyłać je z powrotem. Sposób połączenia zależy od tego, co udostępnia dany system: API, eksport plików albo dostęp do bazy. Ustalamy to jeszcze przed wyceną.",
      },
      {
        q: "Co, jeśli w firmie wszystko prowadzimy w Excelu?",
        a: "To normalna sytuacja i dobry początek. Arkusze pokazują, jakie informacje są dla Was istotne, więc projektujemy program na ich podstawie. Różnica po wdrożeniu: kilka osób pracuje równocześnie, nikt nie nadpisuje cudzych zmian, a raporty powstają automatycznie. Dane z Excela importujemy do nowego systemu, więc niczego nie tracicie.",
      },
      {
        q: "Kto jest właścicielem kodu napisanego dla naszej firmy?",
        a: "Wasza firma. W umowie zapisujemy przeniesienie majątkowych praw autorskich, a po rozliczeniu przekazujemy kod źródłowy i dostępy. Używamy otwartych, popularnych technologii, takich jak React, Node.js i PostgreSQL, bez ukrytych opłat licencyjnych z naszej strony. Program możecie rozwijać z nami albo z dowolnym innym programistą.",
      },
    ],
    related: [
      "programista-wroclaw",
      "programista-olesnica",
      "panel-klienta-portal-b2b",
      "systemy-dla-firm-transportowych",
      "oprogramowanie-na-zamowienie",
    ],
    keywords: [
      "programista Oława",
      "oprogramowanie dla firm Oława",
      "programy na zamówienie Oława",
      "automatyzacja Oława",
      "aplikacje dla firm Oława",
      "software house Oława",
      "oprogramowanie dla produkcji Oława",
    ],
    portfolio: ["CRM E-Numerika Biuro Księgowe", "RAV - Sklep elektryczny", "Komunalne Wieluń"],
  },

  // ---------------------------------------------------------------------------
  // TRZEBNICA – usługi, handel, sadownictwo, turystyka
  // ---------------------------------------------------------------------------
  {
    slug: "programista-trzebnica",
    kind: "city",
    parent: "aplikacje-dedykowane",
    topic: "dev",
    navLabel: "Programista Trzebnica",
    calculator: true,
    title: "Programista Trzebnica – aplikacje, rezerwacje i automatyzacje dla lokalnych firm",
    metaTitle: "Programista Trzebnica – aplikacje dla firm | OlekCodeTech",
    metaDescription:
      "Programista dla firm z Trzebnicy: rezerwacje online, zamówienia, CRM i automatyzacje zamiast Excela. Stała cena w wycenie. Umów bezpłatną konsultację.",
    eyebrow: "Lokalnie · Trzebnica i powiat trzebnicki",
    city: "Trzebnica",
    cityLocative: "w Trzebnicy",
    lead: [
      "W Trzebnicy i okolicach działają głównie mniejsze firmy: usługi, sklepy, gospodarstwa sadownicze, gastronomia, obiekty noclegowe, ekipy budujące domy jednorodzinne. Rzadko mają własnego informatyka, a pracy biurowej przybywa – zamówienia, rezerwacje, wyceny, przypomnienia. Jeśli hasło „programista Trzebnica” wpisujecie z myślą „niech ktoś wreszcie to uporządkuje”, to jest dokładnie to, czym się zajmujemy.",
      "OlekCodeTech ma siedzibę w Wieluniu, działa od 2019 roku i obsługuje klientów z całej Polski. Z firmami z Trzebnicy pracujemy zdalnie – wystarczy telefon i wideorozmowa, a postępy pokazujemy na działającym programie. Kiedy przydaje się spotkanie na żywo, dojeżdżamy w okolice Wrocławia i łączymy wizytę z innymi spotkaniami we Wrocławiu.",
    ],
    sections: [
      {
        title: "Aplikacje i programy na zamówienie dla firm z Trzebnicy",
        text: "Mała firma nie potrzebuje wielkiego systemu. Potrzebuje jednego miejsca, w którym widać, kto co zamówił, na kiedy i czy zapłacił. Takie programy budujemy jako aplikacje w przeglądarce – otwieracie je na laptopie w biurze albo na telefonie między jednym klientem a drugim. Dla pensjonatu lub sali przyjęć będzie to kalendarz rezerwacji, dla ekipy budowlanej lista zleceń z etapami i zdjęciami, dla sklepu – ewidencja zamówień i klientów. Mamy w tym praktykę: zbudowaliśmy platformę wypożyczalni sukienek z ponad 700 produktami i kalendarzem rezerwacji oraz stronę z konfiguratorem okien i drzwi, w którym klient sam składa zapytanie.",
        bullets: [
          "Kalendarze rezerwacji i zapisy online",
          "Lista zleceń z etapami, terminami i zdjęciami",
          "Prosty CRM: klienci, wyceny, historia kontaktów",
          "Konfiguratory i formularze zapytań na stronie",
          "Ewidencja zamówień i płatności",
          "Wersja na telefon dla właściciela i pracowników",
        ],
      },
      {
        title: "Automatyzacja pracy biurowej – gdy biurem jest właściciel",
        text: "W wielu trzebnickich firmach papierami zajmuje się właściciel, wieczorem, po pracy. Tym bardziej warto oddać automatom wszystko, co się powtarza. Potwierdzenie rezerwacji i przypomnienie dzień przed terminem może wysyłać się samo – mailem lub SMS-em. Zapytanie z formularza może od razu trafiać do arkusza albo CRM, zamiast ginąć w skrzynce. Zestawienie sprzedaży za miesiąc może przychodzić gotowe, w Excelu lub PDF, bez klikania. Do takich rzeczy używamy n8n i Make, a dla firm pracujących na Google Workspace lub Microsoft 365 wykorzystujemy narzędzia, które już mają w abonamencie. Bardziej nietypowe zadania, jak pobieranie danych z zewnętrznego portalu, rozwiązujemy własnym skryptem.",
        bullets: [
          "Potwierdzenia i przypomnienia SMS/e-mail dla klientów",
          "Zapytania ze strony zapisywane od razu w CRM lub arkuszu",
          "Miesięczne zestawienia sprzedaży w Excelu lub PDF",
          "Automatyczne porządkowanie dokumentów na dysku",
          "Przepływy w n8n i Make, skrypty do zadań nietypowych",
        ],
      },
      {
        title: "Integracje: sklep internetowy, płatności, kurierzy, Allegro",
        text: "Sprzedajecie przez internet – przetwory, owoce, rękodzieło, materiały budowlane – i każdą paczkę obsługujecie ręcznie? Da się to skrócić. Łączymy sklep WooCommerce z płatnościami Przelewy24, kurierami i paczkomatami, tak żeby po opłaceniu zamówienia etykieta była gotowa do wydruku, a klient dostawał numer przesyłki. Jeśli sprzedajecie też na Allegro, pilnujemy wspólnych stanów, żeby nie sprzedać czegoś, czego już nie ma. Gdy w firmie działa program magazynowy lub fakturowy, na przykład Subiekt nexo, podłączamy go, żeby dokumenty wystawiały się bez przepisywania. W platformie Wypożycz Sukienkę rezerwacja, płatność i zamówienie kuriera działają u nas jako jeden ciąg.",
        bullets: [
          "WooCommerce z płatnościami Przelewy24",
          "InPost, DPD, Furgonetka – etykiety i śledzenie",
          "Wspólne stany magazynowe dla sklepu i Allegro",
          "Faktury i dokumenty z programu, np. Subiekt nexo",
          "Rezerwacja, płatność i dostawa w jednym procesie",
          "Połączenia z innymi usługami przez API",
        ],
      },
      {
        title: "Programista Trzebnica dla usług, sadownictwa, gastronomii i budownictwa",
        text: "Każda z branż powiatu trzebnickiego ma swoją specyfikę. Gospodarstwo sadownicze sprzedające odbiorcom hurtowym może przyjmować zamówienia przez prosty panel zamiast przez telefon o szóstej rano – i od razu widzieć, ile towaru trzeba przygotować. Restauracja, sala przyjęć czy obiekt noclegowy zyskują kalendarz rezerwacji z zaliczkami online; z tą tematyką pracowaliśmy przy stronie systemu BIFOR do organizacji przyjęć. Firma budująca domy jednorodzinne prowadzi kilka budów naraz, więc przydaje się jej aplikacja z etapami, zdjęciami i listą materiałów dla każdej z nich. Gabinety i punkty usługowe najczęściej potrzebują zapisów online z przypomnieniami.",
        bullets: [
          "Sadownictwo i rolnictwo: zamówienia od odbiorców, ewidencja dostaw",
          "Gastronomia i przyjęcia: rezerwacje, zaliczki, lista gości",
          "Turystyka i noclegi: kalendarz dostępności, płatności online",
          "Budownictwo jednorodzinne: budowy, etapy, materiały",
          "Usługi: zapisy online i przypomnienia o wizytach",
          "Handel: sklep internetowy połączony z magazynem",
        ],
      },
      {
        title: "Ile kosztuje program dla małej firmy i kiedy się zwraca",
        text: "Zamiast zaczynać od ceny, zaczynamy od pytania: ile czasu to Wam dziś zajmuje? Jeśli potwierdzanie rezerwacji, odpisywanie na te same pytania i wystawianie dokumentów zabiera godzinę dziennie, w skali miesiąca robi się z tego kilka dni roboczych. Mnożymy ten czas przez wartość Waszej godziny i mamy kwotę, z którą porównujemy koszt programu. W małej firmie dochodzi jeszcze jedno: zapytania, na które nikt nie zdążył odpowiedzieć. Wycenę ze stałą ceną dostajecie po rozmowie – bez stawek godzinowych i dopłat. Większe plany dzielimy na etapy i ruszamy od najmniejszego modułu, który daje efekt, na przykład samych przypomnień albo samego kalendarza.",
        bullets: [
          "Punkt wyjścia: ile godzin miesięcznie zabiera ręczna praca",
          "Czas razy wartość godziny pracy – prosty rachunek",
          "Stała cena po rozmowie, bez stawek godzinowych",
          "Start od jednego małego modułu",
          "Kolejne etapy dopiero, gdy pierwszy się sprawdzi",
        ],
      },
      {
        title: "Jak pracujemy z firmą z Trzebnicy",
        text: "Wszystko zaczyna się od bezpłatnej, półgodzinnej rozmowy – wystarczy zadzwonić albo umówić wideo. Nie trzeba przygotowywać specyfikacji; opowiadacie własnymi słowami, co chcecie usprawnić. Później robimy krótki warsztat, zdalnie lub na miejscu w Trzebnicy, i spisujemy, co program ma robić. Dostajecie wycenę ze stałą ceną i terminem. Budowa idzie etapami: co jakiś czas pokazujemy działający fragment i pytamy, czy to jest to, o co chodziło. Gdy program jest gotowy, uruchamiamy go, uczymy obsługi Was i pracowników, a potem pozostajemy do pomocy. Kod i prawa autorskie przechodzą na Was, tak jak wszystkie hasła i dostępy.",
        bullets: [
          "Bezpłatna rozmowa 30 min – bez specyfikacji i formalności",
          "Krótki warsztat zdalnie albo w Trzebnicy",
          "Wycena ze stałą ceną i terminem",
          "Etapy z pokazami działających fragmentów",
          "Uruchomienie i szkolenie z obsługi",
          "Opieka po wdrożeniu; kod, prawa i dostępy są Wasze",
        ],
      },
    ],
    faq: [
      {
        q: "Czy pracujecie z małymi firmami z Trzebnicy, nawet jednoosobowymi?",
        a: "Tak. Wiele naszych projektów to rozwiązania dla małych firm: kalendarz rezerwacji, prosty CRM, sklep z płatnościami, kilka automatyzacji. Przy małej skali szczególnie pilnujemy, żeby zakres był rozsądny – zaczynamy od jednej rzeczy, która oszczędza najwięcej czasu, i nie namawiamy na system większy, niż potrzeba.",
      },
      {
        q: "Czy programista przyjedzie do Trzebnicy, czy wszystko odbywa się zdalnie?",
        a: "Większość pracy prowadzimy zdalnie: telefon, wideorozmowy i pokazy postępów. Na miejscu spotykamy się, gdy to faktycznie pomaga – zwykle na początku i przy wdrożeniu. Dojeżdżamy wtedy w okolice Wrocławia i łączymy wizytę w Trzebnicy z innymi spotkaniami w regionie, więc termin ustalamy wspólnie z wyprzedzeniem.",
      },
      {
        q: "Ile kosztuje program na zamówienie albo system rezerwacji?",
        a: "Cena zależy od zakresu: czym innym jest sam kalendarz z przypomnieniami, a czym innym system z płatnościami, kontami klientów i integracjami. Po bezpłatnej konsultacji przygotowujemy wycenę ze stałą ceną i terminem. Pokazujemy też, ile czasu program zaoszczędzi, żebyście mogli sami ocenić, czy to się Wam opłaca.",
      },
      {
        q: "Czy da się połączyć nowy program z tym, czego już używamy?",
        a: "Zwykle tak. Łączymy nowe rozwiązania ze sklepem WooCommerce, płatnościami online, kurierami, programami do faktur i magazynu, kalendarzem Google czy arkuszami. Najpierw sprawdzamy, jakie możliwości daje Wasz obecny program, i dopiero wtedy potwierdzamy zakres – tak, żeby wycena obejmowała to, co naprawdę zadziała.",
      },
      {
        q: "Prowadzimy wszystko w Excelu i kalendarzu papierowym. Od czego zacząć?",
        a: "Od rozmowy. Pokażcie nam arkusz i kalendarz, a my wskażemy, co najbardziej opłaca się przenieść do programu w pierwszej kolejności. Zazwyczaj jest to jedna rzecz: rezerwacje, zamówienia albo lista klientów. Dane z Excela importujemy, a obsługi uczymy na spokojnie – program ma być prostszy niż arkusz, nie trudniejszy.",
      },
      {
        q: "Kto jest właścicielem kodu i danych po wdrożeniu?",
        a: "Wy – zarówno kodu, jak i danych. Po rozliczeniu projektu przenosimy na Was prawa autorskie i przekazujemy kod źródłowy oraz dostępy do serwera, domeny i kont. Dane klientów i zamówień możecie w każdej chwili wyeksportować. Jeśli zechcecie kiedyś rozwijać program z kimś innym, nie ma przeszkód.",
      },
    ],
    related: [
      "programista-wroclaw",
      "programista-olesnica",
      "automatyzacja-pracy-biurowej",
      "systemy-crm-dla-firm",
      "aplikacje-mobilne-dla-firm",
    ],
    keywords: [
      "programista Trzebnica",
      "oprogramowanie dla firm Trzebnica",
      "programy na zamówienie Trzebnica",
      "automatyzacja Trzebnica",
      "aplikacje dla firm Trzebnica",
      "software house Trzebnica",
      "system rezerwacji Trzebnica",
    ],
    portfolio: ["Wypożycz Sukienkę", "BIFOR", "PROMYK – okna i drzwi"],
  },

  // ---------------------------------------------------------------------------
  // ŚRODA ŚLĄSKA – strefa przemysłowa, logistyka przy A4
  // ---------------------------------------------------------------------------
  {
    slug: "programista-sroda-slaska",
    kind: "city",
    parent: "aplikacje-dedykowane",
    topic: "dev",
    navLabel: "Programista Środa Śląska",
    calculator: true,
    title: "Programista Środa Śląska – systemy dla logistyki, magazynów i produkcji oraz integracje sprzedaży",
    metaTitle: "Programista Środa Śląska – programy dla firm | OlekCodeTech",
    metaDescription:
      "Programista dla firm ze Środy Śląskiej: systemy magazynowe, zlecenia transportowe, integracje i raporty. Stała cena. Umów bezpłatną konsultację 30 min.",
    eyebrow: "Lokalnie · Środa Śląska i powiat średzki",
    city: "Środa Śląska",
    cityLocative: "w Środzie Śląskiej",
    lead: [
      "Środa Śląska i okolice to strefa przemysłowa, magazyny i firmy logistyczne przy autostradzie A4, zakłady produkcyjne, a obok nich rolnictwo. W takich firmach liczy się przepływ: towaru, zleceń, dokumentów. Gdy informacje krążą wolniej niż palety, zaczynają się pomyłki i nadgodziny w biurze. Wtedy zwykle pada pytanie o programistę – i hasło „programista Środa Śląska” w wyszukiwarce.",
      "Jesteśmy OlekCodeTech, firma programistyczna z Wielunia. Od 2019 roku zrealizowaliśmy ponad 50 projektów dla klientów z całej Polski. Firmy ze Środy Śląskiej obsługujemy głównie zdalnie, z regularnymi wideorozmowami i pokazami tego, co już działa. Na początek projektu i na wdrożenie dojeżdżamy w okolice Wrocławia, łącząc wizytę z innymi spotkaniami w regionie.",
    ],
    sections: [
      {
        title: "Programy na zamówienie dla firm ze Środy Śląskiej",
        text: "Budujemy oprogramowanie, które odwzorowuje ruch w Waszej firmie: przyjęcie towaru, kompletację, wydanie, zlecenie transportowe, dokument dla klienta. Są to aplikacje otwierane w przeglądarce, więc działają tak samo na komputerze w biurze, tablecie na rampie i telefonie kierowcy. Każda osoba ma własne konto i widzi tylko to, co jej potrzebne. Gdy internet w hali bywa słaby albo pracownik ma zajęte ręce, lepsza okazuje się aplikacja mobilna – piszemy je w React Native na iOS i Androida. Na co dzień rozwijamy system TMS dla firmy transportowej, w którym zlecenia, plan załadunku pojazdu i aplikacja kierowcy tworzą jedną całość.",
        bullets: [
          "Ewidencja przyjęć, wydań i stanów magazynowych",
          "Zlecenia transportowe i planowanie załadunku",
          "Panele dla biura, magazynu i kierowców",
          "CRM dla działu handlowego i obsługi klienta",
          "Aplikacje mobilne na telefon i tablet",
          "Konta z uprawnieniami i pełną historią operacji",
        ],
      },
      {
        title: "Automatyzacja pracy w firmie: awizacje, raporty, powiadomienia",
        text: "W logistyce i produkcji dużo czasu pochłania przekazywanie informacji. Awizacja przychodzi mailem i ktoś wpisuje ją do arkusza. Klient pyta o status, więc ktoś dzwoni na magazyn. Kierownik chce raportu dziennego, więc ktoś składa go z kilku źródeł. Wszystkie te czynności można zautomatyzować. Automat odczytuje maile i załączniki, pobiera dane z portali kontrahentów, zapisuje je w systemie i rozsyła powiadomienia e-mail lub SMS. Raport dzienny w PDF albo Excelu generuje się o ustalonej godzinie. Używamy do tego n8n i Make, a przy większej liczbie danych lub nietypowych formatach – własnych skryptów w Pythonie i Node.js, które łatwiej dopasować do Waszych wymagań.",
        bullets: [
          "Awizacje i zamówienia z maili wpisywane automatycznie",
          "Raporty dzienne i tygodniowe w PDF/Excel",
          "Pobieranie danych z portali i platform kontrahentów",
          "Powiadomienia o statusie dla klientów i pracowników",
          "n8n, Make oraz skrypty w Pythonie i Node.js",
        ],
      },
      {
        title: "Integracje systemów – programista Środa Śląska dla sprzedaży i magazynu",
        text: "Firma, która magazynuje i wysyła towar, pracuje zwykle na kilku systemach naraz: program magazynowo-księgowy, sklep internetowy, Allegro, panele kurierów, bramka płatności. Im więcej ręcznych kroków między nimi, tym więcej błędów w wysyłkach. Integrujemy te elementy w jeden obieg. Dla sklepu elektrycznego RAV połączyliśmy WooCommerce z Subiektem nexo, tak aby stany i ceny aktualizowały się same. Pracowaliśmy też przy sklepach z dużym asortymentem i z konfiguratorem produktu, jak MS Nadruki, gdzie zamówienie niesie ze sobą dodatkowe dane do realizacji. Podłączamy InPost, DPD i Furgonetkę, płatności Przelewy24 oraz dowolne systemy, które udostępniają API lub wymianę plików.",
        bullets: [
          "Subiekt nexo i inne programy magazynowo-księgowe",
          "WooCommerce: zamówienia, stany, ceny, dokumenty",
          "Allegro zsynchronizowane z magazynem",
          "InPost, DPD, Furgonetka – nadawanie i statusy",
          "Przelewy24 i automatyczne księgowanie wpłat",
          "API klientów i przewoźników, pliki CSV/XML",
        ],
      },
      {
        title: "Oprogramowanie dla firm ze Środy Śląskiej: logistyka, produkcja, rolnictwo",
        text: "Magazyn obsługujący kilku klientów potrzebuje czego innego niż zakład produkcyjny czy gospodarstwo rolne, dlatego nie mamy jednego produktu dla wszystkich. Firmie logistycznej przy A4 przyda się panel, w którym jej klient sam zgłasza dostawę i sprawdza stan swojego towaru. Przewoźnik skorzysta na kalendarzu dostępności aut i aplikacji, w której kierowca potwierdza załadunek i rozładunek. W produkcji pomaga ewidencja zleceń z terminami i raportem dla kierownictwa. Gospodarstwom i firmom obsługującym rolnictwo możemy przygotować ewidencję dostaw, zamówień i rozliczeń z odbiorcami – zamiast zeszytu i arkusza prowadzonego przez jedną osobę. Zakres ustalamy zawsze po poznaniu Waszego sposobu pracy.",
        bullets: [
          "Logistyka: panel klienta ze stanami i zgłoszeniami dostaw",
          "Transport: dostępność aut, zlecenia, aplikacja kierowcy",
          "Magazyny: przyjęcia, wydania, inwentaryzacja",
          "Produkcja: zlecenia, terminy, raporty",
          "Rolnictwo: ewidencja dostaw i rozliczeń z odbiorcami",
          "Handel hurtowy: zamówienia online dla stałych klientów",
        ],
      },
      {
        title: "Ile kosztuje system na zamówienie i kiedy inwestycja się zwraca",
        text: "W firmach, w których pracuje się na zmiany, rachunek jest wyjątkowo czytelny. Sprawdzamy, ile osób i przez ile godzin na zmianę zajmuje się przepisywaniem, uzgadnianiem i szukaniem informacji. Mnożymy to przez koszt pracy i liczbę dni roboczych – tyle kosztuje ręczny obieg danych. Jeśli chcecie, bierzemy też pod uwagę skutki pomyłek, na przykład błędnie wydany towar, choć opieramy się wtedy wyłącznie na Waszych danych. Wycenę przygotowujemy po rozmowie i ma ona stałą cenę za uzgodniony zakres. Duże systemy rozkładamy na etapy, a pierwszym jest najmniejszy moduł, który sam w sobie daje efekt. Kalkulator na dole strony pozwala wstępnie policzyć zwrot.",
        bullets: [
          "Liczymy osoby, godziny i zmiany przy ręcznym obiegu danych",
          "Koszt pomyłek – na podstawie Waszych danych",
          "Stała cena za uzgodniony zakres",
          "Etapy zamiast jednego dużego wdrożenia",
          "Pierwszy moduł ma dawać efekt samodzielnie",
        ],
      },
      {
        title: "Jak pracujemy z firmą ze Środy Śląskiej",
        text: "Na początek umawiamy bezpłatną konsultację – 30 minut wystarcza, żeby ocenić, czy i jak możemy pomóc. Drugi krok to warsztat. W firmach magazynowych i produkcyjnych wolimy przeprowadzić go na miejscu, bo proces najlepiej zrozumieć, idąc drogą towaru od rampy do wysyłki; jeśli to niemożliwe, robimy go zdalnie. Po warsztacie otrzymujecie wycenę ze stałą ceną i terminem. Prace prowadzimy etapami, a każdy kończy się pokazem działającej części i Waszą akceptacją. Wdrożenie planujemy tak, żeby nie zatrzymać pracy firmy. Szkolimy pracowników na każdej zmianie, po starcie zapewniamy opiekę i dalszy rozwój, a kod źródłowy i prawa autorskie przekazujemy Wam.",
        bullets: [
          "Bezpłatna konsultacja 30 minut",
          "Warsztat na miejscu lub zdalnie",
          "Wycena ze stałą ceną i terminem",
          "Etapy z pokazem i akceptacją",
          "Wdrożenie bez zatrzymywania pracy firmy, szkolenie zespołu",
          "Opieka i rozwój; kod oraz prawa autorskie dla klienta",
        ],
      },
    ],
    faq: [
      {
        q: "Szukamy programisty w Środzie Śląskiej – czy pracujecie z firmami z naszego powiatu?",
        a: "Tak, obsługujemy klientów z całej Polski, w tym z okolic Wrocławia. Siedzibę mamy w Wieluniu, dlatego większość współpracy prowadzimy zdalnie, a na kluczowe spotkania przyjeżdżamy. Dla firm ze Środy Śląskiej i powiatu średzkiego przygotowujemy programy do magazynu, transportu i produkcji oraz integracje sprzedaży internetowej.",
      },
      {
        q: "Czy przyjeżdżacie do Środy Śląskiej na wdrożenie?",
        a: "Tak. Warsztat startowy i wdrożenie warto zrobić na miejscu, zwłaszcza w magazynie lub na hali. Dojeżdżamy w okolice Wrocławia i łączymy taką wizytę z innymi spotkaniami w regionie, więc terminy ustalamy z wyprzedzeniem. Pomiędzy wizytami pracujemy zdalnie i regularnie pokazujemy postępy na wideo.",
      },
      {
        q: "Ile kosztuje program na zamówienie dla magazynu lub firmy transportowej?",
        a: "Wszystko zależy od zakresu: liczby użytkowników, modułów, integracji i tego, czy potrzebna jest aplikacja mobilna. Dlatego wycenę przygotowujemy dopiero po konsultacji i warsztacie. Ma ona stałą cenę, termin i podział na etapy. Wspólnie liczymy też koszt obecnej ręcznej pracy, żeby było widać, kiedy system się zwróci.",
      },
      {
        q: "Czy da się połączyć nowy system z programem magazynowym, który już mamy?",
        a: "W większości przypadków tak i zwykle od tego zaczynamy, bo nie ma sensu wymieniać czegoś, co działa. Łączyliśmy sklep internetowy z Subiektem nexo, kurierami i płatnościami. Przy innych programach korzystamy z API, wymiany plików lub odczytu z bazy danych. Możliwości sprawdzamy przed wyceną.",
      },
      {
        q: "Co, jeśli całą ewidencję prowadzimy w Excelu?",
        a: "Wtedy mamy gotowy materiał do pracy. Arkusze pokazują, jakie dane zbieracie i jak je liczycie, więc program projektujemy tak, żeby pracownicy odnaleźli w nim znajomy układ. Zyskujecie pracę wielu osób jednocześnie, historię zmian i automatyczne raporty. Dotychczasowe dane przenosimy z Excela do nowego systemu.",
      },
      {
        q: "Kto jest właścicielem kodu po zakończeniu prac?",
        a: "Zamawiający, czyli Wy. Umowa przewiduje przeniesienie majątkowych praw autorskich, a po rozliczeniu przekazujemy kod źródłowy, dokumentację i dostępy. Piszemy w popularnych technologiach – React, Next.js, Node.js, PostgreSQL – dzięki czemu system może rozwijać każdy doświadczony programista, także zatrudniony u Was na etacie.",
      },
    ],
    related: [
      "programista-wroclaw",
      "programista-olawa",
      "programista-trzebnica",
      "systemy-dla-firm-transportowych",
      "integracje-sklepow-internetowych",
    ],
    keywords: [
      "programista Środa Śląska",
      "oprogramowanie dla firm Środa Śląska",
      "programy na zamówienie Środa Śląska",
      "automatyzacja Środa Śląska",
      "aplikacje dla firm Środa Śląska",
      "software house Środa Śląska",
      "system magazynowy na zamówienie Środa Śląska",
    ],
    portfolio: ["WTA Perfekt", "MS Nadruki", "Wypożycz Sukienkę"],
  },
];
