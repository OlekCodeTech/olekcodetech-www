import type { LandingPage } from "./types";

/**
 * Lokalne strony „strony internetowe + usługi IT w <miasto>".
 * Każda ma własną treść (lokalny rynek, branże, forma współpracy) –
 * to nie są kopie z podmienioną nazwą miasta.
 */
export const cityLandings: LandingPage[] = [
  // ---------------------------------------------------------------------------
  // WIELUŃ – siedziba firmy
  // ---------------------------------------------------------------------------
  {
    slug: "strony-internetowe-wielun",
    kind: "city",
    parent: "stronywww-aplikacje",
    title: "Strony internetowe Wieluń – projektowanie stron i sklepów dla firm z Wielunia",
    metaTitle: "Strony internetowe Wieluń – OlekCodeTech",
    metaDescription:
      "Strony WWW, sklepy WooCommerce i automatyzacje dla firm z Wielunia. Siedziba przy ul. Liliowej 3, spotkania na miejscu. Umów bezpłatną 30-min konsultację.",
    eyebrow: "Lokalnie · Wieluń i okolice",
    city: "Wieluń",
    cityLocative: "w Wieluniu",
    lead: [
      "OlekCodeTech to firma z Wielunia – siedzibę mamy przy ul. Liliowej 3 i od 2019 roku robimy strony internetowe, sklepy i systemy dla firm z miasta i powiatu wieluńskiego. Większość lokalnych projektów zaczyna się od spotkania na miejscu: przychodzimy do klienta albo zapraszamy do biura, oglądamy, jak firma działa na co dzień, i dopiero wtedy proponujemy rozwiązanie.",
      "Wieluń to przede wszystkim mniejsze i średnie firmy: zakłady produkcyjne, hurtownie, sklepy, usługi, gastronomia, gospodarstwa i firmy obsługujące rolnictwo. Nie potrzebują one korporacyjnych wdrożeń, tylko strony, które przynoszą telefony i zapytania, i kogoś, kto odbierze, gdy coś przestanie działać. Dokładnie tak pracujemy.",
    ],
    sections: [
      {
        title: "Strony internetowe dla firm z Wielunia",
        text: "Robimy strony na WordPressie z autorskim motywem albo w React/Next.js, gdy strona ma być szybka i statyczna. Dla firm z Wielunia najczęściej są to strony firmowe z ofertą, realizacjami i formularzem kontaktowym, a dla zakładów produkcyjnych i hurtowni – katalogi produktów z zapytaniem ofertowym. Każda strona jest responsywna, zoptymalizowana pod szybkość i od początku przygotowana pod lokalne wyszukiwania. Zdjęcia, teksty i strukturę ustalamy wspólnie, zwykle na jednym spotkaniu w Wieluniu.",
        bullets: [
          "Strony firmowe i wizytówkowe dla usług, handlu i produkcji",
          "Katalogi produktów i oferty hurtowe z zapytaniem ofertowym",
          "Strony dla instytucji i jednostek lokalnych z wymaganiami dostępności (WCAG)",
          "Autorskie motywy WordPress – bez ciężkich page builderów",
          "Przeniesienie starej strony na nową bez utraty pozycji w Google",
          "Hosting, domena, SSL i poczta firmowa skonfigurowane za Was",
        ],
      },
      {
        title: "Sklepy internetowe i e-commerce Wieluń",
        text: "Dla sklepów i hurtowni z Wielunia budujemy sklepy na WooCommerce: od prostego sklepu z kilkudziesięcioma produktami po sklepy z ponad tysiącem pozycji i integracją z magazynem. Podłączamy płatności (Przelewy24, PayU), kurierów i dokumenty sprzedaży, a jeśli firma prowadzi też sprzedaż stacjonarną, dbamy o to, żeby stany magazynowe się zgadzały. Sklep dostaje strukturę kategorii i opisy przygotowane pod wyszukiwanie w Google.",
        bullets: [
          "Sklepy WooCommerce z własnym motywem i szybkim ładowaniem",
          "Import produktów z arkuszy, hurtowni lub programu magazynowego",
          "Płatności online, kurierzy, paczkomaty, faktury",
          "Sprzedaż B2B: ceny dla firm, rabaty, zamówienia na konto",
          "Szkolenie z obsługi sklepu – na miejscu w Wieluniu",
        ],
      },
      {
        title: "Pozycjonowanie lokalne Wieluń – wizytówka Google i frazy z miastem",
        text: "Klienci z Wielunia szukają usług dopisując nazwę miasta: „hydraulik Wieluń”, „hurtownia budowlana Wieluń”, „cukiernia Wieluń”. Nasze strony od początku są pod to przygotowane: osobne podstrony usług, nagłówki z frazą lokalną, dane firmy w schema.org i poprawnie skonfigurowana wizytówka Google. Pomagamy też uporządkować wizytówkę, zebrać opinie i połączyć stronę z Google Search Console, żeby było widać, co faktycznie przynosi ruch.",
        bullets: [
          "Konfiguracja i uporządkowanie Profilu Firmy w Google (wizytówki)",
          "Podstrony usług pod frazy „<usługa> Wieluń” i okoliczne miejscowości",
          "Dane strukturalne LocalBusiness, FAQ i realizacji",
          "Blog firmowy z poradnikami, które ściągają ruch z okolicy",
          "Raport z Search Console: frazy, kliknięcia, pozycje",
        ],
      },
      {
        title: "Obsługa IT i automatyzacje dla firm z Wielunia",
        text: "Strona to często początek. Firmom z Wielunia porządkujemy też pocztę i dokumenty w Microsoft 365 lub Google Workspace, łączymy formularze ze strony z arkuszem albo CRM i automatyzujemy powtarzalne czynności w n8n lub Make – od powiadomień o zamówieniach po wystawianie dokumentów. Dla firm, które nie mają własnego informatyka, prowadzimy stałą opiekę: aktualizacje, kopie zapasowe, monitoring i pomoc, gdy coś nie działa. Przy awarii jesteśmy na miejscu, a nie na infolinii.",
        bullets: [
          "Opieka nad stroną: aktualizacje, backupy, monitoring, poprawki",
          "Microsoft 365 / Google Workspace: poczta, dyski, udostępnianie",
          "Automatyzacje n8n/Make: zapytania ze strony, zamówienia, dokumenty",
          "Integracje z programami magazynowymi i fakturowymi",
          "Wsparcie na miejscu w Wieluniu i zdalnie",
        ],
      },
      {
        title: "Jak wygląda współpraca z firmą z Wielunia",
        text: "Zaczynamy od bezpłatnej, 30-minutowej konsultacji – w biurze przy Liliowej 3, u klienta albo telefonicznie. Na tej podstawie przygotowujemy wycenę z zakresem i terminem. Realizację prowadzimy etapami: najpierw projekt i struktura, potem wdrożenie, testy i uruchomienie. Po starcie zostajemy: pokazujemy, jak samodzielnie dodawać treści, i w razie potrzeby przejmujemy stałą opiekę nad stroną.",
        bullets: [
          "Konsultacja (30 min, bezpłatna) – na miejscu lub telefonicznie",
          "Wycena z zakresem, terminem i stałą ceną",
          "Projekt i wdrożenie w etapach z Waszą akceptacją",
          "Szkolenie z obsługi i przekazanie dostępów",
          "Opieka po wdrożeniu – stała lub na zgłoszenie",
        ],
      },
    ],
    faq: [
      {
        q: "Czy robicie strony dla firm z Wielunia i okolic?",
        a: "Tak – to nasz rynek bazowy. Siedzibę mamy przy ul. Liliowej 3 w Wieluniu i obsługujemy firmy z miasta oraz powiatu wieluńskiego, m.in. z Osjakowa, Białej, Mokrska, Pątnowa czy Skomlina. Wśród realizacji są lokalne firmy handlowe, usługowe, apteki, cukiernie i jednostki komunalne.",
      },
      {
        q: "Czy spotkanie musi być na miejscu?",
        a: "Nie musi, ale w Wieluniu jest to najprostsze. Zwykle pierwsze spotkanie robimy na żywo – u klienta lub w naszym biurze – a dalszą pracę prowadzimy mailem, telefonicznie i na krótkich wideorozmowach. Jeśli wolicie w pełni zdalnie, też nie ma problemu.",
      },
      {
        q: "Ile kosztuje strona internetowa w Wieluniu?",
        a: "Cena zależy od zakresu: liczby podstron, tego, czy potrzebne są teksty i zdjęcia, czy strona ma katalog produktów lub sklep, oraz jakich integracji wymaga. Po bezpłatnej konsultacji dostajecie wycenę ze stałą ceną – bez ukrytych opłat. Hosting i domena to osobne, roczne koszty, które też przedstawiamy z góry.",
      },
      {
        q: "Jak długo trwa zrobienie strony?",
        a: "Prosta strona firmowa to zwykle 2–4 tygodnie od przekazania materiałów. Rozbudowane strony z katalogiem i sklepy zajmują dłużej, bo dochodzi import produktów, płatności i testy. Termin podajemy w wycenie i go pilnujemy.",
      },
      {
        q: "Co po uruchomieniu strony – czy zostajecie?",
        a: "Tak. Po starcie szkolimy z obsługi i przekazujemy wszystkie dostępy – strona jest Wasza. Na życzenie prowadzimy stałą opiekę: aktualizacje, kopie zapasowe, monitoring i poprawki. Wiele firm z Wielunia korzysta też z naszej pomocy przy poczcie, Microsoft 365 i automatyzacjach.",
      },
    ],
    related: [
      "strony-internetowe-wieruszow",
      "strony-internetowe-sieradz",
      "strony-internetowe-dla-firm",
      "sklepy-internetowe-woocommerce",
    ],
    keywords: [
      "strony internetowe Wieluń",
      "projektowanie stron Wieluń",
      "sklep internetowy Wieluń",
      "pozycjonowanie Wieluń",
      "obsługa IT Wieluń",
      "agencja interaktywna Wieluń",
    ],
    portfolio: ["Komunalne Wieluń", "DS Paliwa", "Hurtownia Budowlana Panek"],
  },

  // ---------------------------------------------------------------------------
  // SIERADZ – ok. 45 km
  // ---------------------------------------------------------------------------
  {
    slug: "strony-internetowe-sieradz",
    kind: "city",
    parent: "stronywww-aplikacje",
    title: "Strony internetowe Sieradz – strony, sklepy i obsługa IT dla firm z Sieradza",
    metaTitle: "Strony internetowe Sieradz – OlekCodeTech",
    metaDescription:
      "Strony WWW, sklepy WooCommerce i automatyzacje dla firm z Sieradza. Dojeżdżamy z Wielunia (ok. 45 km) lub pracujemy zdalnie. Bezpłatna 30-minutowa konsultacja.",
    eyebrow: "Lokalnie · Sieradz i powiat sieradzki",
    city: "Sieradz",
    cityLocative: "w Sieradzu",
    lead: [
      "Sieradz jest ok. 45 km od naszej siedziby w Wieluniu – to pół godziny drogi, więc na spotkanie przyjeżdżamy bez kombinowania. Dla firm z Sieradza i powiatu sieradzkiego robimy strony internetowe, sklepy WooCommerce, automatyzacje i prowadzimy opiekę IT; pierwsze spotkanie zwykle odbywa się u klienta, reszta pracy idzie zdalnie.",
      "Rynek w Sieradzu to głównie usługi, handel i firmy transportowo-logistyczne korzystające z bliskości trasy S8, a do tego budownictwo, warsztaty i lokalna gastronomia. Takie firmy potrzebują strony, która jasno mówi, co robią, gdzie działają i jak się z nimi skontaktować – oraz dobrze wygląda w telefonie, bo stamtąd przychodzi większość zapytań.",
    ],
    sections: [
      {
        title: "Strony internetowe dla firm z Sieradza",
        text: "Projektujemy strony na WordPressie z autorskim motywem lub w Next.js. Dla firm usługowych z Sieradza budujemy osobne podstrony dla każdej usługi, żeby każda mogła osobno pojawiać się w Google. Dla firm transportowych i logistycznych – strony z zakresem usług, flotą, obszarem działania i formularzem wyceny, który trafia od razu na maila i do arkusza. Dbamy o szybkość ładowania, poprawne dane firmy i o to, żeby strona była gotowa pod lokalne SEO już w dniu startu.",
        bullets: [
          "Strony usługowe z osobną podstroną na każdą usługę",
          "Strony dla firm transportowych, spedycji i pomocy drogowej",
          "Strony dla budownictwa, instalatorów i warsztatów z realizacjami",
          "Formularze wyceny z powiadomieniem SMS/mail i zapisem do arkusza",
          "Migracja starej strony z zachowaniem adresów i pozycji",
        ],
      },
      {
        title: "Sklepy internetowe Sieradz – sprzedaż online dla handlu i hurtowni",
        text: "Sklepom i hurtowniom z Sieradza wdrażamy WooCommerce z pełną obsługą zamówień: płatności online, kurierzy i paczkomaty, faktury, stany magazynowe. Jeśli sprzedajecie też stacjonarnie albo macie program magazynowy, łączymy go ze sklepem, żeby nie trzeba było niczego przepisywać ręcznie. Dla firm sprzedających do innych firm przygotowujemy sklepy B2B z indywidualnymi cennikami i zamówieniami na konto.",
        bullets: [
          "WooCommerce z autorskim motywem i szybkim koszykiem",
          "Integracje z programami magazynowymi i fakturowymi",
          "Płatności online, kurierzy, paczkomaty, odbiór osobisty",
          "Sklepy B2B: cenniki dla firm, limity, zamówienia na konto",
          "Opisy i kategorie przygotowane pod Google",
        ],
      },
      {
        title: "Pozycjonowanie lokalne Sieradz – wizytówka Google i frazy z miastem",
        text: "W Sieradzu, tak jak w innych miastach tej wielkości, klienci szukają z nazwą miasta: „pomoc drogowa Sieradz”, „biuro rachunkowe Sieradz”, „sklep elektryczny Sieradz”. Dlatego strona ma od początku strukturę pod takie frazy, a firma – uporządkowaną wizytówkę Google z aktualnymi godzinami, zdjęciami i opiniami. Pokazujemy, jak prosić klientów o opinie i jak odpowiadać na te mniej przychylne. Efekty śledzimy w Search Console i statystykach wizytówki.",
        bullets: [
          "Profil Firmy w Google: konfiguracja, kategorie, zdjęcia, posty",
          "Podstrony pod frazy „<usługa> Sieradz” i miejscowości z powiatu",
          "Dane strukturalne LocalBusiness i FAQ",
          "Proces zbierania opinii od klientów",
          "Comiesięczny podgląd wyników w Search Console",
        ],
      },
      {
        title: "Obsługa IT i automatyzacje dla firm z Sieradza",
        text: "Firmy z Sieradza, które nie mają własnego działu IT, obsługujemy zdalnie, a gdy trzeba – dojeżdżamy. Konfigurujemy Microsoft 365 lub Google Workspace, porządkujemy pocztę i dokumenty, zabezpieczamy konta. Automatyzujemy w n8n/Make to, co dziś robi się ręcznie: zapytania ze strony trafiają do CRM, zamówienia generują dokumenty, a klient dostaje potwierdzenie bez udziału pracownika. Utrzymujemy też strony i sklepy: aktualizacje, kopie, monitoring.",
        bullets: [
          "Opieka nad stroną i sklepem: aktualizacje, backupy, monitoring",
          "Microsoft 365 / Google Workspace dla małych zespołów",
          "Automatyzacje n8n/Make: formularze, zamówienia, powiadomienia",
          "Integracje strony z CRM, arkuszami i programami księgowymi",
          "Wsparcie zdalne z szybkim czasem reakcji, dojazd w razie potrzeby",
        ],
      },
      {
        title: "Jak wygląda współpraca z firmą z Sieradza",
        text: "Pierwszy krok to bezpłatna 30-minutowa konsultacja – telefon, wideorozmowa albo spotkanie w Sieradzu. Po niej dostajecie wycenę z zakresem i terminem. Realizację prowadzimy etapami i pokazujemy postępy na roboczym adresie, więc wszystko widać na bieżąco. Po uruchomieniu szkolimy z obsługi i – jeśli chcecie – przejmujemy stałą opiekę.",
        bullets: [
          "Konsultacja (30 min) – zdalnie lub u Was w Sieradzu",
          "Wycena ze stałą ceną i terminem",
          "Podgląd postępów na roboczym adresie",
          "Szkolenie i przekazanie dostępów",
          "Opieka po wdrożeniu",
        ],
      },
    ],
    faq: [
      {
        q: "Czy robicie strony dla firm z Sieradza?",
        a: "Tak. Sieradz i powiat sieradzki (m.in. Warta, Złoczew, Błaszki, Brzeźnio) to jeden z naszych głównych obszarów działania poza Wieluniem. Z Wielunia mamy tu ok. 45 km, więc spotkanie na miejscu to dla nas rutyna.",
      },
      {
        q: "Czy spotkanie musi być na miejscu w Sieradzu?",
        a: "Nie. Większość prac prowadzimy zdalnie – mail, telefon, krótkie wideorozmowy. Jeśli wolicie omówić projekt na żywo, przyjeżdżamy do Sieradza; zwykle robimy tak przy pierwszym spotkaniu i przy odbiorze.",
      },
      {
        q: "Ile kosztuje strona internetowa w Sieradzu?",
        a: "Zależy od zakresu: liczby podstron, potrzeby przygotowania tekstów i zdjęć, formularzy, katalogu lub sklepu oraz integracji. Lokalizacja nie wpływa na cenę – firma z Sieradza płaci tyle samo, co firma z Wielunia. Wycenę ze stałą ceną dostajecie po bezpłatnej konsultacji.",
      },
      {
        q: "Mamy już stronę, ale nie przynosi zapytań. Co możecie zrobić?",
        a: "Zaczynamy od audytu: sprawdzamy szybkość, strukturę, frazy, na które strona jest widoczna, i stan wizytówki Google. Często wystarczy przebudowa treści pod frazy lokalne, naprawa błędów technicznych i uporządkowanie wizytówki. Jeśli strona jest na przestarzałym silniku, proponujemy przeniesienie na nową z zachowaniem adresów.",
      },
      {
        q: "Czy obsługujecie firmy transportowe i logistyczne?",
        a: "Tak – mamy realizacje dla firm z branży transportu, spedycji i pomocy drogowej. Dla takich firm ważne są: czytelny zakres usług, obszar działania, szybki kontakt z telefonu i formularz wyceny, który natychmiast trafia do dyspozytora. To uwzględniamy od pierwszego szkicu.",
      },
    ],
    related: [
      "strony-internetowe-wielun",
      "strony-internetowe-zdunska-wola",
      "strony-internetowe-dla-firm",
      "seo-techniczne",
    ],
    keywords: [
      "strony internetowe Sieradz",
      "projektowanie stron Sieradz",
      "sklep internetowy Sieradz",
      "pozycjonowanie Sieradz",
      "obsługa informatyczna Sieradz",
    ],
    portfolio: ["SimTrans - Pomoc Drogowa", "Esel Logistik", "BKP - Ubezpieczenia"],
  },

  // ---------------------------------------------------------------------------
  // WIERUSZÓW – ok. 35 km
  // ---------------------------------------------------------------------------
  {
    slug: "strony-internetowe-wieruszow",
    kind: "city",
    parent: "stronywww-aplikacje",
    title: "Strony internetowe Wieruszów – strony i sklepy dla firm z Wieruszowa i okolic",
    metaTitle: "Strony internetowe Wieruszów – OlekCodeTech",
    metaDescription:
      "Strony WWW, sklepy internetowe i opieka IT dla firm z Wieruszowa. Z Wielunia to ok. 35 km – spotkanie u Was lub zdalnie. Umów bezpłatną 30-min konsultację.",
    eyebrow: "Lokalnie · Wieruszów i powiat wieruszowski",
    city: "Wieruszów",
    cityLocative: "w Wieruszowie",
    lead: [
      "Wieruszów leży ok. 35 km od Wielunia, przy granicy województwa łódzkiego z Wielkopolską. To dla nas bliski, sąsiedzki rynek – firmy z Wieruszowa, Lututowa, Galewic, Bolesławca czy Sokolnik obsługujemy tak samo, jak te z Wielunia: z dojazdem na spotkanie, gdy jest potrzebny, i zdalnie na co dzień.",
      "W powiecie wieruszowskim dominują zakłady produkcyjne – w tym meblarskie i drzewne – oraz firmy budowlane, handel i usługi dla mieszkańców. Producentom robimy strony z katalogiem wyrobów i zapytaniem ofertowym, często też w wersji dla odbiorców z Niemiec; mniejszym firmom – proste, szybkie strony, które mają dawać telefony z okolicy.",
    ],
    sections: [
      {
        title: "Strony internetowe dla firm z Wieruszowa",
        text: "Dla firm z Wieruszowa budujemy strony na WordPressie z autorskim motywem, a tam, gdzie liczy się maksymalna szybkość – w Next.js. Zakładom produkcyjnym przygotowujemy katalogi produktów z parametrami, zdjęciami i formularzem zapytania ofertowego, a także wersje językowe, jeśli sprzedają za granicę. Firmom usługowym i budowlanym – strony z realizacjami i jasnym zakresem działania. Treści układamy tak, żeby strona była czytelna dla klienta i dla Google.",
        bullets: [
          "Strony dla producentów: katalog wyrobów, parametry, zapytanie ofertowe",
          "Wersje językowe (np. DE/EN) dla firm eksportujących",
          "Strony dla firm budowlanych, stolarskich i instalacyjnych z galerią realizacji",
          "Proste strony wizytówkowe dla lokalnych usług",
          "Hosting, domena, SSL i poczta – skonfigurowane na start",
        ],
      },
      {
        title: "Sklepy internetowe Wieruszów – sprzedaż mebli, wyrobów i towarów online",
        text: "Producenci mebli i wyrobów z drewna z okolic Wieruszowa coraz częściej chcą sprzedawać bezpośrednio. Wdrażamy im sklepy WooCommerce z konfiguratorem wariantów (wymiar, kolor, tkanina), wyceną na podstawie wyboru i obsługą dostawy gabarytów. Dla handlu detalicznego – klasyczny sklep z płatnościami, kurierami i integracją z programem magazynowym. Mamy za sobą sklepy meblowe, więc znamy specyfikę takich zamówień.",
        bullets: [
          "Sklepy WooCommerce z wariantami i konfiguratorem produktu",
          "Obsługa dostaw gabarytowych i odbioru z zakładu",
          "Płatności online, raty, faktury",
          "Integracja z magazynem i programem sprzedażowym",
          "Szkolenie z obsługi sklepu na miejscu w Wieruszowie",
        ],
      },
      {
        title: "Pozycjonowanie lokalne Wieruszów – wizytówka Google i frazy z miastem",
        text: "W mniejszym mieście konkurencja w Google jest niższa, więc dobrze przygotowana strona i wizytówka dają szybki efekt. Budujemy podstrony pod frazy w rodzaju „meble na wymiar Wieruszów”, „usługi budowlane Wieruszów”, „sklep Wieruszów” oraz pod miejscowości z powiatu. Porządkujemy Profil Firmy w Google: kategorie, godziny, zdjęcia, opinie. Dla producentów sprzedających ogólnopolsko dokładamy frazy produktowe bez miasta.",
        bullets: [
          "Profil Firmy w Google – konfiguracja i porządkowanie",
          "Podstrony pod frazy lokalne i miejscowości powiatu",
          "Dane strukturalne LocalBusiness, Product, FAQ",
          "Frazy produktowe dla firm sprzedających w całym kraju",
          "Podgląd wyników w Search Console",
        ],
      },
      {
        title: "Obsługa IT i automatyzacje dla firm z Wieruszowa",
        text: "Zakłady produkcyjne i firmy handlowe z Wieruszowa korzystają u nas z opieki IT i automatyzacji: zapytania ofertowe ze strony trafiają od razu do arkusza lub CRM, zamówienia ze sklepu generują dokumenty, a stany magazynowe aktualizują się same. Konfigurujemy Microsoft 365 i Google Workspace, zabezpieczamy pocztę, robimy kopie zapasowe. Utrzymujemy strony i sklepy, żeby były aktualne, bezpieczne i szybkie.",
        bullets: [
          "Opieka nad stroną i sklepem: aktualizacje, backupy, monitoring",
          "Microsoft 365 / Google Workspace: poczta, dyski, kalendarze",
          "Automatyzacje n8n/Make: zapytania, zamówienia, dokumenty",
          "Integracje z programami magazynowymi i fakturowymi",
          "Wsparcie zdalne i dojazd z Wielunia",
        ],
      },
      {
        title: "Jak wygląda współpraca z firmą z Wieruszowa",
        text: "Zaczynamy od bezpłatnej 30-minutowej konsultacji – telefonicznie albo u Was w Wieruszowie. Po niej dostajecie wycenę ze stałą ceną i terminem. Pracujemy etapami i pokazujemy stronę na roboczym adresie, więc widzicie postępy na bieżąco. Po uruchomieniu szkolimy z obsługi, przekazujemy dostępy i zostajemy do pomocy.",
        bullets: [
          "Konsultacja (30 min) – u Was lub zdalnie",
          "Wycena ze stałą ceną",
          "Etapy z podglądem na roboczym adresie",
          "Szkolenie i przekazanie dostępów",
          "Opieka po wdrożeniu",
        ],
      },
    ],
    faq: [
      {
        q: "Czy robicie strony dla firm z Wieruszowa?",
        a: "Tak. Wieruszów i cały powiat wieruszowski to teren, który obsługujemy z Wielunia – ok. 35 km, więc dojazd na spotkanie nie jest problemem. Pracujemy zarówno z zakładami produkcyjnymi, jak i z małymi firmami usługowymi.",
      },
      {
        q: "Czy spotkanie musi być na miejscu w Wieruszowie?",
        a: "Nie. Chętnie przyjeżdżamy na pierwsze spotkanie i odbiór, ale cały projekt można prowadzić zdalnie – mailem, telefonicznie i na wideorozmowach. Wiele firm wybiera połączenie: jedno spotkanie na żywo, reszta online.",
      },
      {
        q: "Ile kosztuje strona internetowa w Wieruszowie?",
        a: "Cena zależy od zakresu – liczby podstron, katalogu produktów, wersji językowych, sklepu i integracji. Nie liczymy dopłaty za lokalizację ani dojazd w obrębie regionu. Po bezpłatnej konsultacji dostajecie wycenę ze stałą ceną.",
      },
      {
        q: "Czy zrobicie stronę w języku niemieckim dla firmy eksportującej?",
        a: "Tak. Wdrażamy strony wielojęzyczne (np. polski + niemiecki + angielski) z osobnymi adresami dla każdej wersji, poprawnymi tagami hreflang i możliwością samodzielnego tłumaczenia treści w panelu. Tłumaczenia dostarcza klient lub tłumacz – my dbamy o techniczną stronę.",
      },
      {
        q: "Czy robicie sklepy dla producentów mebli?",
        a: "Tak, mamy takie realizacje. Sklepy meblowe wymagają konfiguratora wariantów (wymiary, kolory, tkaniny), wyceny zależnej od wyboru i obsługi dostaw gabarytowych – to wszystko wdrażamy na WooCommerce z własnym motywem.",
      },
    ],
    related: [
      "strony-internetowe-wielun",
      "strony-internetowe-sieradz",
      "sklepy-internetowe-woocommerce",
    ],
    keywords: [
      "strony internetowe Wieruszów",
      "projektowanie stron Wieruszów",
      "sklep internetowy Wieruszów",
      "pozycjonowanie Wieruszów",
      "obsługa IT Wieruszów",
    ],
    portfolio: [
      "Syguła Meble | Meble tapicerowane",
      "LidioStyl - meble twarde i tapicerowane",
      "Ogrodzenia i Balustrady FTSpaw",
    ],
  },

  // ---------------------------------------------------------------------------
  // ZDUŃSKA WOLA – ok. 60 km
  // ---------------------------------------------------------------------------
  {
    slug: "strony-internetowe-zdunska-wola",
    kind: "city",
    parent: "stronywww-aplikacje",
    title: "Strony internetowe Zduńska Wola – strony, sklepy i IT dla firm ze Zduńskiej Woli",
    metaTitle: "Strony internetowe Zduńska Wola – OlekCodeTech",
    metaDescription:
      "Strony WWW, sklepy WooCommerce i automatyzacje dla firm ze Zduńskiej Woli i powiatu. Praca zdalna, dojazd z Wielunia na spotkania. Bezpłatna 30-min konsultacja.",
    eyebrow: "Lokalnie · Zduńska Wola i okolice",
    city: "Zduńska Wola",
    cityLocative: "w Zduńskiej Woli",
    lead: [
      "Zduńska Wola jest ok. 60 km od naszej siedziby w Wieluniu – przy trasie S8, w zasięgu aglomeracji łódzkiej. Firmy stąd obsługujemy głównie zdalnie, z dojazdem na kluczowe spotkania: start projektu i odbiór. Robimy strony internetowe, sklepy WooCommerce, integracje i automatyzacje, prowadzimy też opiekę IT.",
      "Zduńska Wola i okolice to przemysł, logistyka i coraz więcej firm sprzedających online – od hurtowni po małe marki z własnym sklepem. Dla takich firm ważne są integracje: sklep połączony z magazynem i kurierami, strona z CRM, zamówienia z dokumentami. To nasz główny obszar pracy w tym rejonie.",
    ],
    sections: [
      {
        title: "Strony internetowe dla firm ze Zduńskiej Woli",
        text: "Firmom produkcyjnym i logistycznym ze Zduńskiej Woli budujemy strony, które mają sprzedawać do innych firm: jasna oferta, parametry, certyfikaty, realizacje i szybki kontakt z handlowcem. Dla firm usługowych – strony z osobnymi podstronami na każdą usługę, przygotowane pod frazy lokalne. Pracujemy na WordPressie z autorskim motywem lub w Next.js; w obu przypadkach strona jest szybka, bezpieczna i łatwa do edycji.",
        bullets: [
          "Strony B2B dla produkcji i logistyki z ofertą i zapytaniem ofertowym",
          "Strony usługowe pod frazy lokalne",
          "Wersje językowe dla firm pracujących z zagranicą",
          "Formularze zintegrowane z CRM i arkuszami",
          "Przeniesienie starej strony bez utraty pozycji",
        ],
      },
      {
        title: "Sklepy internetowe i e-commerce Zduńska Wola",
        text: "W rejonie Zduńskiej Woli i Łodzi e-commerce to codzienność, więc sklep musi być nie tylko ładny, ale przede wszystkim sprawny operacyjnie. Wdrażamy WooCommerce z integracją magazynu, kurierów, paczkomatów i płatności, tak żeby zamówienie od wpłaty do wysyłki przechodziło bez ręcznego przepisywania. Mamy doświadczenie ze sklepami z ponad tysiącem produktów i z zewnętrznym magazynem podłączonym przez API.",
        bullets: [
          "WooCommerce z autorskim motywem – szybki koszyk i checkout",
          "Integracja z magazynem przez API, import i aktualizacja produktów",
          "Kurierzy, paczkomaty, płatności, faktury automatyczne",
          "Sklepy B2B z cennikami dla firm i zamówieniami na konto",
          "Feedy produktowe do Google Shopping i porównywarek",
        ],
      },
      {
        title: "Pozycjonowanie lokalne Zduńska Wola – wizytówka Google i frazy z miastem",
        text: "Firmy usługowe i handlowe ze Zduńskiej Woli konkurują o frazy z nazwą miasta – „warsztat Zduńska Wola”, „biuro rachunkowe Zduńska Wola”, „sklep Zduńska Wola” – a także o klientów z Sieradza i Łasku. Strona dostaje strukturę pod te frazy, firma – uporządkowany Profil w Google z opiniami i zdjęciami. Firmom sprzedającym ogólnopolsko dokładamy SEO techniczne i treści pod frazy produktowe.",
        bullets: [
          "Profil Firmy w Google: kategorie, godziny, zdjęcia, opinie",
          "Podstrony pod frazy „<usługa> Zduńska Wola” i sąsiednie miasta",
          "Dane strukturalne LocalBusiness, Product, FAQ",
          "SEO techniczne: szybkość, indeksowanie, Core Web Vitals",
          "Podgląd wyników w Search Console",
        ],
      },
      {
        title: "Obsługa IT i automatyzacje dla firm ze Zduńskiej Woli",
        text: "Firmy logistyczne i produkcyjne mają dużo powtarzalnych czynności: przepisywanie zamówień, wysyłanie potwierdzeń, generowanie dokumentów, raportowanie. Automatyzujemy to w n8n/Make i łączymy systemy, których firma już używa – sklep, CRM, program magazynowy, księgowość, Microsoft 365 lub Google Workspace. Zdalnie utrzymujemy strony i sklepy: aktualizacje, kopie zapasowe, monitoring dostępności i szybkości.",
        bullets: [
          "Automatyzacje n8n/Make: zamówienia, dokumenty, powiadomienia, raporty",
          "Integracje sklep–magazyn–księgowość–CRM",
          "Microsoft 365 / Google Workspace dla zespołów",
          "Opieka nad stroną i sklepem: aktualizacje, backupy, monitoring",
          "Wsparcie zdalne z umówionym czasem reakcji",
        ],
      },
      {
        title: "Jak wygląda współpraca z firmą ze Zduńskiej Woli",
        text: "Bezpłatna 30-minutowa konsultacja – zdalnie lub u Was – pozwala nam zrozumieć, co ma robić strona lub sklep i z czym ma się łączyć. Na tej podstawie przygotowujemy wycenę ze stałą ceną i harmonogramem. Projekt prowadzimy etapami z podglądem na roboczym adresie; przy sklepach dochodzą testy zamówień i integracji. Po starcie szkolimy zespół i przejmujemy opiekę, jeśli jest potrzebna.",
        bullets: [
          "Konsultacja (30 min) – zdalnie lub na miejscu",
          "Wycena ze stałą ceną i harmonogramem",
          "Etapy, podgląd roboczy, testy integracji",
          "Szkolenie zespołu i przekazanie dostępów",
          "Opieka po wdrożeniu",
        ],
      },
    ],
    faq: [
      {
        q: "Czy robicie strony dla firm ze Zduńskiej Woli?",
        a: "Tak. Zduńską Wolę i powiat zduńskowolski (m.in. Szadek, Zapolice) obsługujemy z Wielunia – ok. 60 km. Większość pracy idzie zdalnie, na spotkania dojeżdżamy.",
      },
      {
        q: "Czy spotkanie musi być na miejscu?",
        a: "Nie. Przy tej odległości zwykle spotykamy się na żywo raz lub dwa razy – na początku i przy odbiorze – a resztę prowadzimy online. Jeśli wolicie w pełni zdalnie, od pierwszej rozmowy do uruchomienia, też tak pracujemy.",
      },
      {
        q: "Ile kosztuje strona internetowa w Zduńskiej Woli?",
        a: "Zależy od zakresu: liczby podstron, treści, formularzy, katalogu, sklepu i integracji – te ostatnie najbardziej wpływają na cenę przy projektach dla logistyki i e-commerce. Wycenę ze stałą ceną dostajecie po bezpłatnej konsultacji.",
      },
      {
        q: "Czy połączycie sklep z naszym programem magazynowym?",
        a: "Tak, jeśli program ma API albo eksport danych. Robiliśmy integracje z zewnętrznymi magazynami przez API oraz importy z arkuszy i plików XML/CSV. Zakres i sposób integracji ustalamy na konsultacji, po sprawdzeniu, co Wasz system udostępnia.",
      },
      {
        q: "Mamy sklep, ale jest wolny i trudno nim zarządzać. Pomożecie?",
        a: "Tak. Zaczynamy od audytu technicznego: szybkość, wtyczki, hosting, struktura. Często wystarczy porządek w wtyczkach, optymalizacja obrazów i cache; w innych przypadkach proponujemy przeniesienie na autorski motyw z zachowaniem produktów, klientów i adresów.",
      },
    ],
    related: [
      "strony-internetowe-sieradz",
      "strony-internetowe-lodz",
      "sklepy-internetowe-woocommerce",
      "seo-techniczne",
    ],
    keywords: [
      "strony internetowe Zduńska Wola",
      "sklep internetowy Zduńska Wola",
      "projektowanie stron Zduńska Wola",
      "pozycjonowanie Zduńska Wola",
      "automatyzacje dla firm Zduńska Wola",
    ],
    portfolio: ["WTA Perfekt", "Esel Logistik", "WEKART | Opakowania z tektury falistej"],
  },

  // ---------------------------------------------------------------------------
  // ŁÓDŹ – praca zdalna + dojazd
  // ---------------------------------------------------------------------------
  {
    slug: "strony-internetowe-lodz",
    kind: "city",
    parent: "stronywww-aplikacje",
    title: "Strony internetowe Łódź – strony, sklepy WooCommerce i aplikacje dla firm z Łodzi",
    metaTitle: "Strony internetowe Łódź – OlekCodeTech",
    metaDescription:
      "Strony WWW, sklepy WooCommerce, aplikacje i automatyzacje dla firm z Łodzi. Pracujemy zdalnie, na spotkania dojeżdżamy z Wielunia. Bezpłatna 30-min konsultacja.",
    eyebrow: "Łódź · zdalnie i z dojazdem",
    city: "Łódź",
    cityLocative: "w Łodzi",
    lead: [
      "Łódź to największy rynek w naszym województwie i miejsce, gdzie realizujemy projekty w pełni zdalnie – z dojazdem na spotkania, gdy ma to sens. Firmy z Łodzi wybierają nas, bo dostają stały kontakt z osobą, która faktycznie robi projekt, stałą cenę i rozwiązania techniczne na poziomie większych agencji, bez ich narzutów.",
      "Łódzki rynek to logistyka i magazyny przy A1/A2/S8, przemysł, e-commerce, a do tego setki firm usługowych konkurujących o te same frazy w Google. Pracujemy dla firm, które potrzebują czegoś więcej niż szablonu: sklepu zintegrowanego z magazynem, strony z własną logiką, aplikacji do obsługi procesów albo automatyzacji łączącej kilka systemów.",
    ],
    sections: [
      {
        title: "Strony internetowe dla firm z Łodzi",
        text: "W Łodzi konkurencja w Google jest większa niż w mniejszych miastach, więc strona musi być technicznie bez zarzutu: szybka, poprawnie zbudowana, z czystą strukturą i treściami pod konkretne frazy. Budujemy strony na WordPressie z autorskim motywem albo w React/Next.js – ten drugi wariant wybieramy, gdy strona ma być statyczna i wyjątkowo szybka lub gdy ma własną logikę (konfiguratory, kalkulatory, panele). Dla firm B2B przygotowujemy strony z ofertą, realizacjami i ścieżką do zapytania ofertowego.",
        bullets: [
          "Strony firmowe i B2B na WordPressie z autorskim motywem",
          "Strony i aplikacje w React/Next.js z własną logiką",
          "Landing page pod kampanie Google Ads i Meta Ads",
          "Wersje językowe i strony dla firm z zagranicznymi klientami",
          "Audyt i przebudowa istniejącej strony bez utraty pozycji",
          "Strony zgodne z WCAG dla instytucji i firm, które tego wymagają",
        ],
      },
      {
        title: "Sklepy internetowe i e-commerce Łódź",
        text: "Dla łódzkich sklepów i hurtowni wdrażamy WooCommerce w wersji, która wytrzymuje realny ruch i duże katalogi: własny motyw, zoptymalizowany checkout, integracja z magazynem przez API, kurierzy, paczkomaty, płatności i automatyczne faktury. Prowadzimy sklepy z ponad tysiącem produktów, sklepy B2B z indywidualnymi cennikami i sklepy z nietypową logiką – np. rezerwacją terminową zamiast klasycznego koszyka.",
        bullets: [
          "WooCommerce z autorskim motywem i szybkim checkoutem",
          "Integracje z magazynem, ERP, hurtowniami (API, XML, CSV)",
          "Sklepy B2B: cenniki, limity kredytowe, zamówienia na konto",
          "Nietypowe modele sprzedaży: rezerwacje, konfiguratory, abonamenty",
          "Feedy do Google Shopping, Allegro i porównywarek",
          "Migracja z innych platform z zachowaniem produktów i adresów",
        ],
      },
      {
        title: "Pozycjonowanie lokalne Łódź – wizytówka Google i frazy z miastem",
        text: "W Łodzi fraza „<usługa> Łódź” ma zwykle dużą konkurencję, więc samo wpisanie miasta w tytuł nie wystarczy. Budujemy osobne podstrony dla usług i dzielnic lub obszarów działania, dbamy o dane strukturalne, szybkość i linkowanie wewnętrzne, a wizytówkę Google traktujemy jak osobny kanał: kategorie, zdjęcia, posty, odpowiedzi na opinie. Dla sklepów dokładamy SEO produktowe i techniczne. Wyniki śledzimy w Search Console i raportujemy co miesiąc.",
        bullets: [
          "Profil Firmy w Google: pełna konfiguracja i prowadzenie",
          "Podstrony pod usługi i obszary działania w Łodzi i aglomeracji",
          "SEO techniczne: Core Web Vitals, indeksowanie, struktura",
          "Treści blogowe pod frazy informacyjne z regionu",
          "Raport miesięczny z Search Console i wizytówki",
        ],
      },
      {
        title: "Aplikacje, integracje i automatyzacje dla firm z Łodzi",
        text: "Firmy logistyczne, produkcyjne i usługowe z Łodzi potrzebują często czegoś więcej niż strony: panelu do obsługi zleceń, systemu CRM dopasowanego do procesu, integracji między sklepem, magazynem i księgowością. Budujemy takie rozwiązania w React/Next.js i łączymy systemy w n8n/Make. Porządkujemy też środowisko pracy w Microsoft 365 lub Google Workspace i prowadzimy stałą opiekę nad stronami i sklepami.",
        bullets: [
          "Aplikacje webowe i panele (React/Next.js, Node, Postgres)",
          "Systemy CRM i obsługi zleceń szyte pod proces firmy",
          "Automatyzacje n8n/Make łączące sklep, CRM, magazyn, księgowość",
          "Microsoft 365 / Google Workspace: wdrożenie i administracja",
          "Opieka nad stroną i sklepem: aktualizacje, backupy, monitoring",
        ],
      },
      {
        title: "Jak wygląda współpraca z firmą z Łodzi",
        text: "Pierwsza rozmowa to bezpłatna 30-minutowa konsultacja – zwykle wideorozmowa, na której ustalamy cel, zakres i integracje. Potem dostajecie wycenę ze stałą ceną i harmonogramem. Projekt prowadzimy etapami z podglądem na roboczym adresie i jednym stałym kontaktem po naszej stronie. Na spotkanie do Łodzi przyjeżdżamy, gdy jest potrzebne – np. przy większych wdrożeniach lub warsztacie z zespołem. Po uruchomieniu szkolimy i zostajemy do opieki.",
        bullets: [
          "Konsultacja (30 min) – wideorozmowa lub spotkanie w Łodzi",
          "Wycena ze stałą ceną i harmonogramem",
          "Etapy, podgląd roboczy, jeden stały kontakt",
          "Szkolenie zespołu i dokumentacja",
          "Opieka po wdrożeniu z umówionym czasem reakcji",
        ],
      },
    ],
    faq: [
      {
        q: "Czy robicie strony dla firm z Łodzi, skoro siedzibę macie w Wieluniu?",
        a: "Tak – Łódź jest w naszym województwie i to jeden z głównych rynków, na których pracujemy. Projekty prowadzimy zdalnie, a na spotkania dojeżdżamy. Dla klienta różnica w porównaniu z agencją z Łodzi sprowadza się do tego, że nie płaci za jej biuro.",
      },
      {
        q: "Czy spotkanie musi być na miejscu?",
        a: "Nie. Większość projektów dla Łodzi prowadzimy w całości zdalnie – wideorozmowy, mail, podgląd na roboczym adresie. Jeśli chcecie spotkać się na żywo, przyjeżdżamy; przy większych wdrożeniach robimy to standardowo na starcie i przy odbiorze.",
      },
      {
        q: "Ile kosztuje strona internetowa w Łodzi?",
        a: "Cena zależy od zakresu: liczby podstron i treści, technologii (WordPress vs Next.js), integracji, wersji językowych i tego, czy to strona, sklep, czy aplikacja. Nie mamy cennika „per miasto” – wycena ze stałą ceną powstaje po bezpłatnej konsultacji i jest ważna przez cały projekt.",
      },
      {
        q: "Czy przejmiecie sklep lub stronę zrobioną przez inną firmę?",
        a: "Tak. Zaczynamy od audytu kodu, wtyczek, hostingu i bezpieczeństwa, potem proponujemy plan: albo porządkujemy to, co jest, albo przenosimy na własny motyw z zachowaniem treści, produktów i adresów. Często przejmujemy projekty, przy których poprzedni wykonawca przestał odpowiadać.",
      },
      {
        q: "Czy robicie aplikacje, nie tylko strony?",
        a: "Tak. Budujemy aplikacje webowe i panele w React/Next.js z backendem w Node i bazą Postgres – m.in. systemy CRM i obsługi zleceń. Jeśli potrzebujecie narzędzia dopasowanego do procesu firmy, a nie kolejnej subskrypcji SaaS, to jest nasz obszar.",
      },
    ],
    related: [
      "strony-internetowe-zdunska-wola",
      "strony-internetowe-sieradz",
      "strony-internetowe-dla-firm",
      "sklepy-internetowe-woocommerce",
      "seo-techniczne",
    ],
    keywords: [
      "strony internetowe Łódź",
      "projektowanie stron Łódź",
      "sklep internetowy Łódź",
      "agencja interaktywna Łódź",
      "aplikacje webowe Łódź",
      "pozycjonowanie Łódź",
    ],
    portfolio: ["WTA Perfekt", "RAV - Sklep elektryczny", "CRM E-Numerika Biuro Księgowe"],
  },

  // ---------------------------------------------------------------------------
  // WROCŁAW – realizacje SZYJA Hair Academy, Plonio.pl
  // ---------------------------------------------------------------------------
  {
    slug: "strony-internetowe-wroclaw",
    kind: "city",
    parent: "stronywww-aplikacje",
    title: "Strony internetowe Wrocław – strony, sklepy i aplikacje dla firm z Wrocławia",
    metaTitle: "Strony internetowe Wrocław – OlekCodeTech",
    metaDescription:
      "Strony WWW, sklepy WooCommerce i aplikacje dla firm z Wrocławia. Realizacje: SZYJA Hair Academy i Plonio.pl. Pracujemy zdalnie. Bezpłatna 30-min konsultacja.",
    eyebrow: "Wrocław · realizacje dla firm z Dolnego Śląska",
    city: "Wrocław",
    cityLocative: "we Wrocławiu",
    lead: [
      "We Wrocławiu mamy realizacje, które lubimy pokazywać: sklep i stronę dla SZYJA Hair Academy – salonu fryzjerskiego i akademii koloryzacji – oraz Plonio.pl, platformę z katalogiem sprzedawców, która wystartowała właśnie we Wrocławiu. Projekty dla firm z Wrocławia prowadzimy zdalnie, z dojazdem na spotkania, gdy jest taka potrzeba.",
      "Wrocławski rynek jest wymagający: usługi premium, beauty, gastronomia, startupy i firmy z branży kreatywnej konkurują wyglądem i doświadczeniem użytkownika, a nie tylko ceną. Dlatego dla Wrocławia robimy strony z dopracowanym designem i własnym kodem, sklepy z nietypową logiką (rezerwacje, kursy, bony) i aplikacje, które mają działać od pierwszego dnia.",
    ],
    sections: [
      {
        title: "Strony internetowe dla firm z Wrocławia",
        text: "Dla firm z Wrocławia projektujemy strony, które mają wyglądać jak marka, a nie jak szablon: własny motyw WordPress lub Next.js, typografia i układ dopasowane do branży, szybkie ładowanie na telefonie. Salonom, klinikom, restauracjom i studiom dokładamy rezerwacje online, menu i galerie; firmom usługowym i startupom – landing page pod kampanie, strony produktowe i wersje językowe. Każdy projekt ma od początku strukturę pod SEO lokalne i poprawne dane firmy.",
        bullets: [
          "Strony premium z własnym designem i kodem (WordPress / Next.js)",
          "Strony dla beauty, gastronomii i usług z rezerwacją online",
          "Landing page i strony produktowe dla startupów",
          "Wersje językowe (EN/DE/UA) dla firm z międzynarodowymi klientami",
          "Platformy z katalogami i kontami użytkowników – jak Plonio.pl",
          "Audyt i przebudowa istniejącej strony",
        ],
      },
      {
        title: "Sklepy internetowe Wrocław – e-commerce dla beauty, usług i marek",
        text: "Sklep dla SZYJA Hair Academy to przykład tego, co robimy we Wrocławiu: sprzedaż produktów i kursów w jednym miejscu, z płatnościami, dostawą i panelem, który obsługuje właściciel bez programisty. Wdrażamy WooCommerce z autorskim motywem, a gdy model sprzedaży jest nietypowy – bony podarunkowe, zapisy na szkolenia, rezerwacja terminowa, abonamenty – dopisujemy własną logikę zamiast kleić kilkanaście wtyczek.",
        bullets: [
          "WooCommerce z autorskim motywem i szybkim checkoutem",
          "Sprzedaż produktów, kursów, bonów i usług w jednym sklepie",
          "Rezerwacje terminowe i zapisy na szkolenia",
          "Płatności online, kurierzy, paczkomaty, faktury",
          "Integracje z magazynem, CRM i narzędziami marketingowymi",
        ],
      },
      {
        title: "Pozycjonowanie lokalne Wrocław – wizytówka Google i frazy z miastem",
        text: "Frazy w rodzaju „fryzjer Wrocław”, „restauracja Wrocław”, „kancelaria Wrocław” mają we Wrocławiu dużą konkurencję, więc pracujemy na dwóch poziomach: podstrony pod konkretne usługi i dzielnice oraz dopracowana wizytówka Google z opiniami, zdjęciami i aktualnościami. Dla firm beauty i gastronomii wizytówka jest często ważniejsza niż sama strona – dlatego ustawiamy ją porządnie i pokazujemy, jak ją prowadzić. Postępy śledzimy w Search Console.",
        bullets: [
          "Profil Firmy w Google: konfiguracja, zdjęcia, posty, opinie",
          "Podstrony pod usługi i dzielnice Wrocławia",
          "Dane strukturalne LocalBusiness, Product, Event, FAQ",
          "SEO techniczne: szybkość, indeksowanie, Core Web Vitals",
          "Raport z Search Console i statystyk wizytówki",
        ],
      },
      {
        title: "Aplikacje, integracje i automatyzacje dla firm z Wrocławia",
        text: "Startupom i firmom usługowym z Wrocławia budujemy aplikacje webowe w React/Next.js – od MVP po panele obsługujące realny proces – i platformy z katalogami, kontami i formularzami, jak Plonio.pl. Automatyzujemy w n8n/Make to, co dziś zajmuje czas zespołu: zapisy, potwierdzenia, faktury, przekazywanie leadów do CRM. Konfigurujemy Microsoft 365 i Google Workspace i prowadzimy stałą opiekę nad stronami i sklepami.",
        bullets: [
          "Aplikacje webowe i MVP w React/Next.js",
          "Platformy z katalogiem, kontami i formularzami",
          "Automatyzacje n8n/Make: leady, rezerwacje, faktury, powiadomienia",
          "Microsoft 365 / Google Workspace dla zespołów",
          "Opieka nad stroną i sklepem: aktualizacje, backupy, monitoring",
        ],
      },
      {
        title: "Jak wygląda współpraca z firmą z Wrocławia",
        text: "Zaczynamy od bezpłatnej 30-minutowej wideokonsultacji, na której ustalamy cel, zakres i to, co ma odróżniać Was od konkurencji. Potem dostajecie wycenę ze stałą ceną i harmonogramem. Projekt prowadzimy etapami: makieta i design do akceptacji, wdrożenie z podglądem na roboczym adresie, testy, start. Do Wrocławia przyjeżdżamy na spotkanie, gdy projekt tego wymaga. Po uruchomieniu szkolimy i zostajemy do opieki.",
        bullets: [
          "Wideokonsultacja (30 min, bezpłatna)",
          "Wycena ze stałą ceną i harmonogramem",
          "Design do akceptacji, wdrożenie z podglądem roboczym",
          "Szkolenie z obsługi i przekazanie dostępów",
          "Opieka po wdrożeniu",
        ],
      },
    ],
    faq: [
      {
        q: "Czy robicie strony dla firm z Wrocławia?",
        a: "Tak – mamy we Wrocławiu realizacje, m.in. SZYJA Hair Academy (sklep i strona salonu oraz akademii koloryzacji) i Plonio.pl (platforma z katalogiem sprzedawców, start we Wrocławiu). Projekty prowadzimy zdalnie, z dojazdem na spotkania w razie potrzeby.",
      },
      {
        q: "Czy spotkanie musi być na miejscu we Wrocławiu?",
        a: "Nie. Nasze wrocławskie projekty prowadziliśmy w większości zdalnie – wideorozmowy, podgląd na roboczym adresie, stały kontakt. Jeśli wolicie spotkanie na żywo, np. na starcie większego projektu, przyjeżdżamy.",
      },
      {
        q: "Ile kosztuje strona internetowa we Wrocławiu?",
        a: "Zależy od zakresu i poziomu designu: liczba podstron, indywidualny projekt graficzny, rezerwacje, sklep, wersje językowe, integracje. Strony premium z własnym designem kosztują więcej niż proste wizytówki, ale wycena zawsze jest ze stałą ceną i powstaje po bezpłatnej konsultacji.",
      },
      {
        q: "Czy robicie strony i sklepy dla salonów, klinik i restauracji?",
        a: "Tak, to jedna z naszych mocniejszych branż – SZYJA Hair Academy to salon i akademia koloryzacji, mamy też realizacje dla gastronomii. Wiemy, że dla takich firm liczy się wygląd, rezerwacja online, galeria i wizytówka Google, i od tego zaczynamy projekt.",
      },
      {
        q: "Czy zbudujecie MVP lub platformę dla startupu?",
        a: "Tak. Plonio.pl to przykład platformy z katalogiem, kontami i formularzami, którą rozwijamy etapami. Budujemy w React/Next.js lub na WordPressie z własnym kodem – w zależności od tego, co ma sens dla budżetu i tempa rozwoju.",
      },
    ],
    related: [
      "strony-internetowe-lodz",
      "strony-internetowe-czestochowa",
      "strony-internetowe-dla-firm",
      "sklepy-internetowe-woocommerce",
    ],
    keywords: [
      "strony internetowe Wrocław",
      "projektowanie stron Wrocław",
      "sklep internetowy Wrocław",
      "strona dla salonu Wrocław",
      "aplikacje webowe Wrocław",
      "pozycjonowanie Wrocław",
    ],
    portfolio: ["SZYJA Hair Academy", "Plonio.pl", "Wypożycz Sukienkę"],
  },

  // ---------------------------------------------------------------------------
  // CZĘSTOCHOWA – ok. 70 km, Śląsk
  // ---------------------------------------------------------------------------
  {
    slug: "strony-internetowe-czestochowa",
    kind: "city",
    parent: "stronywww-aplikacje",
    title: "Strony internetowe Częstochowa – strony, sklepy i IT dla firm z Częstochowy",
    metaTitle: "Strony internetowe Częstochowa – OlekCodeTech",
    metaDescription:
      "Strony WWW, sklepy WooCommerce i automatyzacje dla firm z Częstochowy i Śląska. Z Wielunia to ok. 70 km – spotkanie u Was lub zdalnie. Bezpłatna konsultacja.",
    eyebrow: "Lokalnie · Częstochowa i północny Śląsk",
    city: "Częstochowa",
    cityLocative: "w Częstochowie",
    lead: [
      "Częstochowa jest ok. 70 km od naszej siedziby w Wieluniu – to pierwsze duże miasto po śląskiej stronie, do którego dojeżdżamy na spotkania bez problemu. Na Śląsku pracujemy m.in. dla UNI-System z Zawiercia, dla którego zrobiliśmy stronę z autorskim motywem, landingami lokalnymi i blogiem. Firmy z Częstochowy obsługujemy w tym samym modelu: spotkanie na starcie, reszta zdalnie.",
      "Częstochowa to przemysł i firmy techniczne, szeroko rozumiane usługi, a do tego ruch pielgrzymkowy i turystyczny, z którego żyją hotele, pensjonaty, restauracje i sklepy wokół Jasnej Góry. To dwa różne światy – dla firm przemysłowych robimy strony B2B z ofertą techniczną, dla branży noclegowej i gastronomii strony z rezerwacją, menu i wizytówką Google, która ma przyciągać gości z całej Polski.",
    ],
    sections: [
      {
        title: "Strony internetowe dla firm z Częstochowy",
        text: "Firmom przemysłowym i technicznym z Częstochowy budujemy strony B2B: oferta z parametrami, realizacje, certyfikaty, zapytanie ofertowe trafiające prosto do handlowca. Dla hoteli, pensjonatów i restauracji – strony z rezerwacją, menu, galerią i wersjami językowymi dla gości z zagranicy. Firmom usługowym – strony pod frazy lokalne. Pracujemy na WordPressie z autorskim motywem lub w Next.js; strona jest szybka, bezpieczna i gotowa pod SEO w dniu startu.",
        bullets: [
          "Strony B2B dla przemysłu i usług technicznych",
          "Strony dla hoteli, pensjonatów i gastronomii z rezerwacją i menu",
          "Wersje językowe dla obsługi gości i klientów z zagranicy",
          "Landingi lokalne dla firm obsługujących kilka miast na Śląsku",
          "Blog firmowy – jak dla UNI-System – pod frazy informacyjne",
          "Przeniesienie starej strony bez utraty pozycji",
        ],
      },
      {
        title: "Sklepy internetowe i e-commerce Częstochowa",
        text: "Sklepom i hurtowniom z Częstochowy wdrażamy WooCommerce z integracją magazynu, płatnościami, kurierami i paczkomatami. Firmom przemysłowym – sklepy B2B z cennikami dla kontrahentów i zamówieniami na konto; sklepom z dewocjonaliami, pamiątkami i produktami regionalnymi – klasyczny sklep detaliczny przygotowany pod sprzedaż w całej Polsce. Wszystko na autorskim motywie, bez ciężkich dodatków spowalniających koszyk.",
        bullets: [
          "WooCommerce z autorskim motywem i szybkim checkoutem",
          "Sklepy B2B dla przemysłu: cenniki, limity, zamówienia na konto",
          "Sklepy detaliczne z wysyłką w całą Polskę",
          "Integracje z magazynem, programem sprzedażowym i księgowością",
          "Feedy produktowe do Google Shopping i porównywarek",
        ],
      },
      {
        title: "Pozycjonowanie lokalne Częstochowa – wizytówka Google i frazy z miastem",
        text: "W Częstochowie liczą się dwa rodzaje fraz: lokalne, jak „serwis Częstochowa” czy „biuro rachunkowe Częstochowa”, oraz te wpisywane przez przyjezdnych – „nocleg Częstochowa”, „restauracja blisko Jasnej Góry”. Strona dostaje osobne podstrony pod usługi i obszary, a Profil Firmy w Google – pełną konfigurację z opiniami, zdjęciami i aktualnościami, bo to z niego często wychodzi pierwszy kontakt. Firmom obsługującym kilka miast na Śląsku budujemy landingi lokalne, tak jak dla UNI-System.",
        bullets: [
          "Profil Firmy w Google: konfiguracja, zdjęcia, opinie, posty",
          "Podstrony pod frazy „<usługa> Częstochowa” i sąsiednie miasta",
          "Landingi lokalne dla firm działających na całym Śląsku",
          "Dane strukturalne LocalBusiness, Hotel/Restaurant, FAQ",
          "Podgląd wyników w Search Console",
        ],
      },
      {
        title: "Obsługa IT i automatyzacje dla firm z Częstochowy",
        text: "Firmom przemysłowym i usługowym z Częstochowy automatyzujemy obieg zapytań i zamówień w n8n/Make: formularz ze strony trafia do CRM, oferta generuje się z szablonu, klient dostaje potwierdzenie, a handlowiec przypomnienie. Branży noclegowej łączymy rezerwacje ze stroną i kalendarzem. Konfigurujemy Microsoft 365 i Google Workspace, zabezpieczamy pocztę i konta. Strony i sklepy utrzymujemy zdalnie: aktualizacje, kopie, monitoring.",
        bullets: [
          "Automatyzacje n8n/Make: zapytania, oferty, zamówienia, przypomnienia",
          "Integracje strony z CRM, rezerwacjami i programami księgowymi",
          "Microsoft 365 / Google Workspace: wdrożenie i administracja",
          "Opieka nad stroną i sklepem: aktualizacje, backupy, monitoring",
          "Wsparcie zdalne, dojazd z Wielunia w razie potrzeby",
        ],
      },
      {
        title: "Jak wygląda współpraca z firmą z Częstochowy",
        text: "Zaczynamy od bezpłatnej 30-minutowej konsultacji – telefonicznie, na wideorozmowie albo u Was w Częstochowie. Po niej dostajecie wycenę ze stałą ceną i harmonogramem. Projekt prowadzimy etapami z podglądem na roboczym adresie; przy sklepach i integracjach dochodzą testy zamówień. Po uruchomieniu szkolimy zespół, przekazujemy dostępy i – jeśli chcecie – prowadzimy stałą opiekę.",
        bullets: [
          "Konsultacja (30 min) – zdalnie lub u Was",
          "Wycena ze stałą ceną i harmonogramem",
          "Etapy z podglądem roboczym i testami",
          "Szkolenie i przekazanie dostępów",
          "Opieka po wdrożeniu",
        ],
      },
    ],
    faq: [
      {
        q: "Czy robicie strony dla firm z Częstochowy?",
        a: "Tak. Częstochowa jest ok. 70 km od Wielunia, więc dojazd na spotkanie to dla nas godzina drogi. Na Śląsku mamy m.in. realizację dla UNI-System z Zawiercia – stronę z autorskim motywem, landingami lokalnymi i blogiem.",
      },
      {
        q: "Czy spotkanie musi być na miejscu w Częstochowie?",
        a: "Nie. Zwykle spotykamy się na żywo na starcie i przy odbiorze, a resztę prowadzimy zdalnie. Jeśli wolicie w pełni online – od pierwszej rozmowy po uruchomienie – też tak pracujemy, tak było przy części realizacji na Śląsku.",
      },
      {
        q: "Ile kosztuje strona internetowa w Częstochowie?",
        a: "Zależy od zakresu: liczby podstron, treści, rezerwacji lub sklepu, wersji językowych i integracji. Firmy z Częstochowy płacą tyle samo, co firmy z Wielunia – nie liczymy dopłat za lokalizację ani dojazd. Wycenę ze stałą ceną dostajecie po bezpłatnej konsultacji.",
      },
      {
        q: "Czy robicie strony dla hoteli i pensjonatów?",
        a: "Tak. Dla branży noclegowej ważne są rezerwacja online, czytelne pokoje i cennik, wersje językowe, mapa i wizytówka Google z opiniami. Strony budujemy tak, żeby gość mógł zarezerwować z telefonu w kilka kroków, a właściciel sam aktualizował ceny i dostępność.",
      },
      {
        q: "Obsługujemy klientów w kilku miastach na Śląsku. Jak to ująć na stronie?",
        a: "Landingami lokalnymi: osobne podstrony dla każdego miasta z unikalną treścią, realizacjami z tego terenu i danymi kontaktowymi. Tak zrobiliśmy dla UNI-System z Zawiercia. To działa lepiej niż jedna strona z listą miast w stopce.",
      },
    ],
    related: [
      "strony-internetowe-wielun",
      "strony-internetowe-wroclaw",
      "strony-internetowe-dla-firm",
      "seo-techniczne",
    ],
    keywords: [
      "strony internetowe Częstochowa",
      "projektowanie stron Częstochowa",
      "sklep internetowy Częstochowa",
      "pozycjonowanie Częstochowa",
      "strona dla hotelu Częstochowa",
      "obsługa IT Częstochowa",
    ],
    portfolio: [
      "UNI-System – systemy dozorowania",
      "TCHX - Usługi przemysłowe",
      "Restauracja Incognito",
    ],
  },
];

export const getCityLanding = (slug: string) =>
  cityLandings.find((l) => l.slug === slug);
