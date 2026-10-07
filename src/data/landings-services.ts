import type { LandingPage } from "./types";

/**
 * Podstrony usługowe pod SEO (kind: "service").
 * Każda ma rodzica w src/data/services.ts i 3 realizacje z src/data/portfolio.ts (dokładne tytuły).
 */
export const serviceLandings: LandingPage[] = [
  // 1. Strony internetowe dla firm
  {
    slug: "strony-internetowe-dla-firm",
    kind: "service",
    parent: "stronywww-aplikacje",
    title: "Strony internetowe dla firm – projektowanie i wdrożenie",
    metaTitle: "Strony internetowe dla firm – OlekCodeTech",
    metaDescription:
      "Projektujemy strony internetowe dla firm: szybkie, responsywne, gotowe pod SEO i rozbudowę. 7+ lat doświadczenia, 50+ projektów. Umów bezpłatną konsultację.",
    eyebrow: "Strony firmowe",
    lead: [
      "Projektujemy i wdrażamy strony internetowe dla firm, które mają pozyskiwać zapytania, a nie tylko „być w internecie”. Pracujemy z firmami usługowymi, produkcyjnymi i handlowymi z Wielunia, Sieradza, Łodzi, Wrocławia i całej Polski.",
      "Efekt to strona, która ładuje się szybko, dobrze wygląda na telefonie, jest przygotowana pod pozycjonowanie w Google i którą można rozwijać bez przebudowy od zera. Od 2019 roku zrealizowaliśmy ponad 50 takich projektów.",
    ],
    sections: [
      {
        title: "Dla kogo tworzymy strony firmowe",
        text: "Najczęściej pracujemy z małymi i średnimi firmami, które potrzebują strony jako narzędzia sprzedażowego: ma prezentować ofertę, budować wiarygodność i prowadzić do kontaktu. Rozumiemy specyfikę lokalnego biznesu, ale równie dobrze odnajdujemy się w projektach dla firm działających w całym kraju. Dopasowujemy zakres do etapu, na którym jest firma.",
        bullets: [
          "firmy usługowe (budownictwo, instalacje, transport, księgowość, ubezpieczenia)",
          "zakłady produkcyjne i hurtownie prezentujące ofertę B2B",
          "gabinety, apteki, restauracje i lokalne punkty obsługi klienta",
          "firmy, które mają stronę, ale jest wolna, przestarzała lub nie generuje zapytań",
          "nowe działalności, które startują od zera i potrzebują pełnego pakietu (domena, hosting, strona, poczta)",
        ],
      },
      {
        title: "Zakres prac przy projektowaniu strony internetowej",
        text: "Strona firmowa to nie tylko grafika. Zaczynamy od ustalenia, kto ma na nią trafiać i co ma zrobić. Dopiero na tej podstawie projektujemy strukturę podstron, treści i układ, a potem kodujemy i konfigurujemy wszystko po stronie serwera.",
        bullets: [
          "analiza oferty, konkurencji i fraz, na które strona ma się wyświetlać",
          "architektura informacji: strona główna, podstrony usług, oferta, realizacje, kontakt",
          "projekt graficzny dopasowany do identyfikacji firmy (lub jej uporządkowanie)",
          "wdrożenie na WordPressie lub w Next.js, w zależności od potrzeb",
          "formularze kontaktowe, mapy, integracja z Google Business Profile i analityką",
          "konfiguracja hostingu, SSL, poczty, kopii zapasowych i podstawowych zabezpieczeń",
        ],
      },
      {
        title: "Jak wygląda proces tworzenia strony",
        text: "Pracujemy w czterech etapach: analiza, projekt, wdrożenie, opieka. Po każdym etapie pokazujemy efekt i zbieramy uwagi, dzięki czemu nie ma zaskoczeń na końcu. Większość stron firmowych powstaje w ciągu kilku tygodni, a czas zależy głównie od tempa dostarczania treści i zdjęć po stronie klienta.",
        bullets: [
          "bezpłatna 30-minutowa konsultacja i ustalenie zakresu",
          "makieta i projekt graficzny do akceptacji",
          "kodowanie, wdrożenie treści, testy na urządzeniach mobilnych",
          "optymalizacja szybkości i podstawowe SEO on-page przed startem",
          "publikacja, szkolenie z obsługi panelu i przekazanie dostępów",
        ],
      },
      {
        title: "Technologie: WordPress czy Next.js?",
        text: "Dla większości firm rekomendujemy WordPressa na autorskim motywie, bo pozwala klientowi samodzielnie edytować treści i jest tani w utrzymaniu. Gdy liczy się maksymalna szybkość, bezpieczeństwo lub nietypowe funkcje, budujemy stronę w React / Next.js jako statyczny eksport. W obu przypadkach dbamy o Core Web Vitals, strukturę nagłówków i dane strukturalne.",
        bullets: [
          "WordPress z autorskim motywem, bez ciężkich page builderów",
          "React / Next.js dla stron statycznych i aplikacji",
          "Rank Math lub własna konfiguracja meta tagów i schema.org",
          "LiteSpeed Cache, optymalizacja obrazów WebP, lazy loading",
          "hosting w Polsce z kopią zapasową i certyfikatem SSL",
        ],
      },
      {
        title: "Od czego zależy cena strony internetowej dla firmy",
        text: "Nie podajemy jednej ceny, bo strona wizytówka dla jednoosobowej firmy i serwis z 30 podstronami usług, blogiem i katalogiem produktów to dwa różne projekty. Wycenę przygotowujemy po konsultacji, na podstawie konkretnego zakresu, i rozpisujemy ją na pozycje, żeby było jasne, za co klient płaci.",
        bullets: [
          "liczba podstron i rodzaj treści (teksty gotowe czy do napisania)",
          "projekt graficzny indywidualny czy adaptacja istniejącej identyfikacji",
          "funkcje dodatkowe: katalog, wyszukiwarka, kalkulator, wielojęzyczność",
          "integracje zewnętrzne (CRM, rezerwacje, systemy branżowe)",
          "zakres SEO i opieki po wdrożeniu",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje strona internetowa dla firmy?",
        a: "Koszt zależy od liczby podstron, projektu graficznego, treści i integracji. Prosta strona firmowa to inny budżet niż rozbudowany serwis z blogiem i katalogiem. Po bezpłatnej konsultacji przygotowujemy wycenę rozpisaną na konkretne pozycje, bez ukrytych kosztów.",
      },
      {
        q: "Ile trwa stworzenie strony internetowej?",
        a: "Zwykle od kilku do kilkunastu tygodni. Najwięcej czasu zajmuje przygotowanie treści i zdjęć po stronie klienta, dlatego pomagamy w ich opracowaniu. Harmonogram ustalamy na starcie i trzymamy się go.",
      },
      {
        q: "Czy będę mógł samodzielnie edytować stronę?",
        a: "Tak. Strony na WordPressie mają panel, w którym klient zmienia teksty, zdjęcia i dodaje wpisy bez znajomości kodu. Po wdrożeniu robimy krótkie szkolenie i przekazujemy instrukcję.",
      },
      {
        q: "Czy strona będzie widoczna w Google?",
        a: "Każdą stronę przygotowujemy technicznie pod SEO: struktura nagłówków, meta tagi, szybkość, mapa strony, dane strukturalne. Sama budowa nie gwarantuje wysokich pozycji, ale daje solidny fundament. Pozycjonowanie i content to osobna, długofalowa usługa.",
      },
      {
        q: "Co jest potrzebne, żeby zacząć?",
        a: "Wystarczy krótki opis firmy i oferty oraz informacja, co strona ma osiągać. Domenę, hosting, teksty i zdjęcia możemy zorganizować razem. Pierwszym krokiem jest bezpłatna 30-minutowa konsultacja.",
      },
    ],
    related: ["strony-wordpress-autorski-motyw", "landing-page", "seo-techniczne"],
    keywords: [
      "strony internetowe dla firm",
      "strona internetowa dla firmy",
      "projektowanie stron internetowych",
      "tworzenie stron www dla firm",
      "strona firmowa",
      "strony internetowe Wieluń",
    ],
    portfolio: ["DS Paliwa", "Hurtownia Budowlana Panek", "EXPOFLY - Inspekcje Dronowe"],
  },

  // 2. Sklepy internetowe WooCommerce
  {
    slug: "sklepy-internetowe-woocommerce",
    kind: "service",
    parent: "stronywww-aplikacje",
    title: "Sklep internetowy WooCommerce – wdrożenie od A do Z",
    metaTitle: "Sklep internetowy WooCommerce – OlekCodeTech",
    metaDescription:
      "Wdrażamy sklepy internetowe WooCommerce: płatności, kurierzy, integracje z magazynem i SEO. Sklepy z 1000+ produktów. Umów bezpłatną konsultację.",
    eyebrow: "E-commerce",
    lead: [
      "Budujemy sklepy internetowe na WooCommerce dla firm, które chcą sprzedawać online bez abonamentu za platformę SaaS i z pełną kontrolą nad danymi. Pracujemy zarówno z małymi sklepami, jak i z katalogami liczącymi ponad 1000 produktów.",
      "Zajmujemy się całością: konfiguracją płatności i wysyłek, importem produktów, integracjami z hurtownią lub magazynem, optymalizacją szybkości i przygotowaniem sklepu pod SEO. Po starcie możemy zostać jako stała opieka techniczna.",
    ],
    sections: [
      {
        title: "Dla kogo jest sklep na WooCommerce",
        text: "WooCommerce sprawdza się tam, gdzie liczy się elastyczność: nietypowe produkty, własne reguły cenowe, integracje z systemami zewnętrznymi. To rozwiązanie open source, więc nie ma miesięcznych opłat za platformę, a sklep jest własnością firmy. Wdrażaliśmy je m.in. dla producentów mebli, sklepów z chemią profesjonalną, nadrukami na odzieży, artykułami elektrycznymi i wypożyczalni.",
        bullets: [
          "producenci i hurtownie, które chcą sprzedawać detalicznie online",
          "sklepy z dużym asortymentem i wariantami (rozmiary, kolory, konfiguracje)",
          "firmy, które migrują z Shoper, Shopify lub innej platformy abonamentowej",
          "sprzedaż z personalizacją produktu (konfiguratory, projekty nadruków)",
          "modele nietypowe: wynajem, rezerwacje terminowe, sprzedaż B2B z cenami netto",
        ],
      },
      {
        title: "Zakres wdrożenia sklepu internetowego",
        text: "Standardowe wdrożenie obejmuje wszystko, co jest potrzebne do przyjęcia pierwszego zamówienia, i to, co zwykle jest pomijane: regulaminy, poprawne stawki VAT, konfigurację e-maili transakcyjnych i kopie zapasowe. Przy większych katalogach piszemy skrypty importu z arkuszy XLSX lub z API hurtowni.",
        bullets: [
          "projekt graficzny sklepu: strona główna, listing, karta produktu, koszyk, checkout",
          "konfiguracja płatności (Przelewy24, PayU, Tpay, BLIK) i metod dostawy (InPost, Furgonetka, kurierzy)",
          "import produktów, kategorii, atrybutów i zdjęć z pliku lub systemu klienta",
          "integracje: hurtownie, stany magazynowe, faktury, Allegro, Google Merchant",
          "regulamin, polityka prywatności, zgody w checkoucie, baner cookies",
          "LiteSpeed Cache, optymalizacja obrazów i Core Web Vitals",
        ],
      },
      {
        title: "Jak wygląda wdrożenie sklepu WooCommerce krok po kroku",
        text: "Zaczynamy od ustalenia modelu sprzedaży i listy integracji, bo to one najczęściej decydują o czasie i koszcie. Potem projektujemy ścieżkę zakupową, budujemy sklep na środowisku testowym i dopiero po testach zamówień przenosimy go na domenę docelową.",
        bullets: [
          "analiza: asortyment, warianty, logistyka, płatności, systemy do połączenia",
          "projekt UX i grafiki kluczowych widoków",
          "budowa sklepu i import danych na serwerze testowym",
          "testy zamówień testowych, płatności, e-maili i wydruków",
          "uruchomienie, szkolenie z obsługi zamówień i produktów",
          "opieka po starcie: aktualizacje, backupy, poprawki",
        ],
      },
      {
        title: "Integracje WooCommerce z systemami zewnętrznymi",
        text: "Największa wartość sklepu pojawia się, gdy przestaje być osobną wyspą. Łączymy WooCommerce z magazynem, programem do faktur, hurtowniami i narzędziami marketingowymi, pisząc własne wtyczki lub korzystając z REST API. Dla jednego ze sklepów elektrycznych zintegrowaliśmy stany z zewnętrznym magazynem, w wypożyczalni sukienek zbudowaliśmy własny silnik rezerwacji terminowej.",
        bullets: [
          "synchronizacja stanów i cen z magazynem lub hurtownią przez API",
          "automatyczne faktury i przekazywanie zamówień do systemu księgowego",
          "etykiety kurierskie i statusy wysyłki w panelu zamówienia",
          "feedy produktowe do Google Merchant, Ceneo i Facebook",
          "własne wtyczki WordPress pod nietypowe procesy",
        ],
      },
      {
        title: "Od czego zależy koszt sklepu internetowego",
        text: "Na wycenę najbardziej wpływają liczba i złożoność integracji oraz to, czy dane produktowe są gotowe. Sam szablon z kilkudziesięcioma produktami to inna skala niż sklep z 1000 produktów, wariantami i synchronizacją z hurtownią. Wycenę przygotowujemy po konsultacji i rozpisujemy na etapy.",
        bullets: [
          "liczba produktów, wariantów i jakość danych do importu",
          "indywidualny projekt graficzny czy dopasowanie motywu",
          "integracje z magazynem, hurtownią, fakturowaniem, marketplace",
          "funkcje specjalne: konfigurator, B2B, rezerwacje, wielojęzyczność",
          "zakres opieki technicznej po uruchomieniu",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje sklep internetowy na WooCommerce?",
        a: "Zależy od liczby produktów, integracji i projektu graficznego. Prosty sklep z gotowymi danymi to zupełnie inny budżet niż katalog z tysiącem produktów, synchronizacją z hurtownią i konfiguratorem. Po konsultacji dostajesz wycenę rozpisaną na pozycje.",
      },
      {
        q: "Ile trwa wdrożenie sklepu WooCommerce?",
        a: "Mały sklep z gotowym asortymentem można uruchomić w kilka tygodni. Przy dużych katalogach i integracjach z magazynem to zwykle kilka miesięcy, a najwięcej czasu zajmuje przygotowanie i import danych produktowych.",
      },
      {
        q: "WooCommerce czy Shoper / Shopify?",
        a: "Platformy abonamentowe są szybsze na start, ale ograniczają integracje i kosztują co miesiąc. WooCommerce daje pełną własność sklepu, dowolne integracje i brak opłat licencyjnych, wymaga za to hostingu i aktualizacji. Pomagamy wybrać na podstawie planowanej skali.",
      },
      {
        q: "Czy przeniesiecie produkty z mojego obecnego sklepu?",
        a: "Tak. Migrujemy produkty, kategorie, klientów i historię zamówień z innych platform oraz z arkuszy XLSX. Przy migracji dbamy o przekierowania 301, żeby nie stracić pozycji w Google.",
      },
      {
        q: "Jakie płatności i kurierów można podłączyć?",
        a: "Standardowo Przelewy24, PayU, Tpay, BLIK, PayPal oraz InPost, Furgonetka, DPD, DHL i inne. Konfigurujemy też płatności odroczone i faktury pro forma dla klientów B2B.",
      },
    ],
    related: ["integracje-api-crm-erp", "opieka-nad-strona-wordpress", "seo-techniczne"],
    keywords: [
      "sklep internetowy WooCommerce",
      "wdrożenie sklepu WooCommerce",
      "sklep internetowy dla firmy",
      "tworzenie sklepów internetowych",
      "integracja WooCommerce z hurtownią",
      "migracja sklepu na WooCommerce",
    ],
    portfolio: ["WTA Perfekt", "MS Nadruki", "SilverClean | Profesjonalne środki czystości i maszyny sprzątające"],
  },

  // 4. Landing page
  {
    slug: "landing-page",
    kind: "service",
    parent: "stronywww-aplikacje",
    title: "Landing page pod kampanie reklamowe i sprzedaż",
    metaTitle: "Landing page pod kampanie – OlekCodeTech",
    metaDescription:
      "Projektujemy landing page pod Google Ads, Meta Ads i kampanie sprzedażowe: jeden cel, szybkie ładowanie, mierzalna konwersja. Umów bezpłatną konsultację.",
    eyebrow: "Strony pod konwersję",
    lead: [
      "Budujemy landing page, czyli jednostronicowe strony z jednym celem: zapytanie, zapis, zakup lub telefon. Robimy je pod kampanie Google Ads i Meta Ads, premiery produktów, rekrutacje i oferty sezonowe dla firm z całej Polski.",
      "Dobry landing ładuje się w ułamku sekundy, prowadzi użytkownika do jednego przycisku i mierzy każdą konwersję. Właśnie tak projektujemy nasze strony, bo budżet reklamowy nie powinien się marnować na wolnej lub niejasnej stronie.",
    ],
    sections: [
      {
        title: "Kiedy potrzebujesz landing page zamiast strony firmowej",
        text: "Strona firmowa opowiada o całej działalności, landing sprzedaje jedną rzecz jednej grupie odbiorców. Jeśli planujesz kampanię płatną, promujesz nową usługę albo chcesz przetestować ofertę przed budową pełnej strony, landing page jest szybszy i skuteczniejszy. Robiliśmy je m.in. pod usługi chiptuningu, sklep z merchem i pomoc drogową.",
        bullets: [
          "kampanie Google Ads i Meta Ads, gdzie liczy się Quality Score i koszt konwersji",
          "promocja jednej usługi lub produktu dla konkretnej grupy klientów",
          "zapisy na webinar, szkolenie, newsletter lub listę oczekujących",
          "oferty lokalne: miasto + usługa, np. serwis w konkretnym regionie",
          "rekrutacja i kampanie wizerunkowe z jednym wezwaniem do działania",
        ],
      },
      {
        title: "Co zawiera skuteczny landing page",
        text: "Układ landingu wynika z tego, jak użytkownik podejmuje decyzję: najpierw musi zrozumieć ofertę, potem jej zaufać, na końcu zadziałać. Każdą sekcję projektujemy pod ten ciąg, a treści piszemy razem z klientem na podstawie realnych pytań jego klientów.",
        bullets: [
          "nagłówek z obietnicą dopasowaną do reklamy, z której użytkownik trafia",
          "korzyści i zakres oferty w formie, którą da się przeskanować w 10 sekund",
          "dowody: realizacje, opinie, certyfikaty, logotypy klientów",
          "formularz z minimalną liczbą pól lub kliknięcie do telefonu",
          "FAQ rozbijające typowe obiekcje",
          "stopka z danymi firmy i dokumentami wymaganymi przez prawo",
        ],
      },
      {
        title: "Proces: od briefu do działającej kampanii",
        text: "Landing powstaje szybciej niż pełna strona, ale wymaga precyzyjnego briefu. Ustalamy grupę docelową, jedną główną akcję i źródło ruchu, a potem projektujemy, kodujemy i podpinamy analitykę. Po starcie kampanii możemy wprowadzać poprawki na podstawie danych.",
        bullets: [
          "brief: cel, odbiorca, oferta, źródło ruchu, budżet reklamowy",
          "struktura i teksty landingu do akceptacji",
          "projekt graficzny i kodowanie (WordPress lub statyczny Next.js)",
          "konfiguracja GA4, Google Tag Manager, konwersji Ads i pikseli",
          "testy formularza, szybkości i wyświetlania na telefonach",
          "start i optymalizacja na podstawie wyników kampanii",
        ],
      },
      {
        title: "Szybkość i pomiar konwersji na landing page",
        text: "W kampaniach płatnych każda sekunda ładowania to utracone kliknięcia, za które już zapłaciłeś. Dlatego landingi budujemy lekkie, bez zbędnych wtyczek, z obrazami w WebP i mierzalnymi Core Web Vitals. Konwersje mierzymy po stronie strony i w narzędziach reklamowych, żeby wiedzieć, które słowa kluczowe i kreacje faktycznie przynoszą zapytania.",
        bullets: [
          "czas ładowania poniżej 2 sekund na urządzeniach mobilnych",
          "zdarzenia konwersji: wysłanie formularza, kliknięcie w telefon, pobranie pliku",
          "integracja formularza z CRM lub mailem przez n8n / Make",
          "wersje A/B nagłówków i sekcji przy większych budżetach",
          "zgodność z RODO: zgody, polityka prywatności, baner cookies",
        ],
      },
      {
        title: "Od czego zależy cena landing page",
        text: "Landing page jest zwykle tańszy niż pełna strona firmowa, bo ma jedną podstronę i jeden cel. Cena rośnie wraz z zakresem tekstów do napisania, indywidualną grafiką i liczbą integracji. Wycenę podajemy po krótkim briefie.",
        bullets: [
          "teksty gotowe od klienta czy pisane przez nas",
          "grafika indywidualna czy oparta na istniejącej identyfikacji",
          "liczba wariantów (np. różne miasta lub produkty)",
          "integracje z CRM, systemem mailingowym, kalendarzem",
          "wsparcie po starcie kampanii i testy A/B",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje landing page?",
        a: "Mniej niż pełna strona firmowa, bo to jedna podstrona z jednym celem. Na cenę wpływa zakres tekstów, grafika i integracje. Wycenę dostajesz po krótkim briefie, zwykle tego samego dnia.",
      },
      {
        q: "Ile trwa stworzenie landing page?",
        a: "Przy gotowych treściach i materiałach graficznych landing może być gotowy w ciągu jednego do dwóch tygodni. Jeśli piszemy teksty i projektujemy grafikę od zera, czas się wydłuża.",
      },
      {
        q: "Czym różni się landing page od strony internetowej?",
        a: "Strona internetowa prezentuje całą firmę i ma wiele podstron. Landing page to jedna strona z jednym wezwaniem do działania, zaprojektowana pod konkretną kampanię lub ofertę. Często obie istnieją równolegle.",
      },
      {
        q: "Czy landing page pomoże w Google Ads?",
        a: "Tak. Google ocenia trafność i szybkość strony docelowej, co wpływa na Quality Score i koszt kliknięcia. Landing dopasowany do reklamy obniża koszt pozyskania zapytania.",
      },
      {
        q: "Czy mogę mieć kilka landingów pod różne usługi?",
        a: "Tak, to częsta praktyka. Każda usługa lub region dostaje osobny landing z własnym przekazem, co poprawia wyniki kampanii. Przy kilku wariantach koszt kolejnych jest niższy.",
      },
    ],
    related: ["strony-internetowe-dla-firm", "automatyzacja-obslugi-leadow-crm", "seo-techniczne"],
    keywords: [
      "landing page",
      "landing page pod kampanie",
      "strona docelowa Google Ads",
      "projektowanie landing page",
      "landing page cena",
      "strona pod konwersję",
    ],
    portfolio: ["IJK Transport – Krzysztof Maślanka", "SimTrans - Pomoc Drogowa", "EkoTech - Wynajem maszyn budowlanych"],
  },

  // 5. Strony WordPress na autorskim motywie
  {
    slug: "strony-wordpress-autorski-motyw",
    kind: "service",
    parent: "stronywww-aplikacje",
    title: "Strona WordPress na autorskim motywie, bez page buildera",
    metaTitle: "Strona WordPress na autorskim motywie – OlekCodeTech",
    metaDescription:
      "Budujemy strony WordPress na autorskich motywach, bez Elementora: lekki kod, wysokie Core Web Vitals, łatwa edycja treści. Umów bezpłatną konsultację.",
    eyebrow: "WordPress bez builderów",
    lead: [
      "Tworzymy strony WordPress na autorskich motywach pisanych od zera pod konkretny projekt. Bez Elementora, bez WPBakery i bez kilkudziesięciu wtyczek, które spowalniają stronę i co miesiąc wymagają aktualizacji. Klient nadal edytuje treści w znanym panelu WordPressa.",
      "Takie strony są kilkukrotnie lżejsze od typowych stron zbudowanych w page builderze, osiągają wysokie wyniki Core Web Vitals i są bezpieczniejsze, bo mają mniej punktów podatnych na ataki. Zbudowaliśmy w ten sposób m.in. serwisy dla firm z branży motoryzacyjnej, systemów dozorowania i rolnictwa.",
    ],
    sections: [
      {
        title: "Dlaczego WordPress bez page buildera",
        text: "Page buildery przyspieszają budowę, ale kosztują wydajnością: generują nadmiarowy kod HTML i CSS, ładują skrypty na każdej podstronie i uzależniają stronę od jednej wtyczki. Autorski motyw zawiera tylko to, co jest potrzebne. Dla firm, które traktują stronę jako narzędzie sprzedażowe i chcą wysokich pozycji w Google, to wymierna różnica.",
        bullets: [
          "lżejszy kod: mniej zapytań, mniejsze pliki, szybsze ładowanie",
          "wysokie wyniki Core Web Vitals bez agresywnego cache'owania",
          "mniej wtyczek, czyli mniej aktualizacji i mniej luk bezpieczeństwa",
          "pełna kontrola nad strukturą HTML, nagłówkami i danymi strukturalnymi",
          "brak abonamentów za wtyczki premium",
        ],
      },
      {
        title: "Co zawiera autorski motyw WordPress",
        text: "Motyw projektujemy razem z klientem na podstawie makiet, a następnie kodujemy w PHP, HTML, CSS i JavaScript zgodnie ze standardami WordPressa. Treści edytuje się przez bloki Gutenberga lub pola ACF, więc klient nie musi dotykać kodu, a jednocześnie nie może „rozjechać” układu strony.",
        bullets: [
          "własne szablony podstron: strona główna, usługi, realizacje, blog, kontakt",
          "własne typy treści, np. realizacje, usługi, oferty pracy, cennik",
          "bloki Gutenberga lub pola ACF do edycji treści przez klienta",
          "optymalizacja obrazów, lazy loading, krytyczny CSS",
          "konfiguracja Rank Math, danych strukturalnych i mapy strony",
          "podstrony lokalne i landingi w ramach jednej instalacji",
        ],
      },
      {
        title: "Jak przebiega budowa strony na autorskim motywie",
        text: "Proces jest podobny jak przy każdej stronie firmowej, ale większy nacisk kładziemy na etap projektowania, bo układ nie jest „klikany” w edytorze, tylko kodowany. Po akceptacji projektu graficznego tworzymy motyw, uzupełniamy treści, testujemy wydajność i przekazujemy stronę razem ze szkoleniem.",
        bullets: [
          "analiza celów i fraz kluczowych dla struktury podstron",
          "makiety i projekt graficzny do akceptacji",
          "kodowanie motywu i konfiguracja typów treści",
          "wdrożenie treści, testy Core Web Vitals i dostępności",
          "publikacja na hostingu z LiteSpeed Cache i kopią zapasową",
          "szkolenie i opcjonalna opieka techniczna",
        ],
      },
      {
        title: "Przebudowa istniejącej strony z Elementora na autorski motyw",
        text: "Jeśli masz stronę w Elementorze, która ładuje się wolno lub co chwila się psuje po aktualizacjach, nie musisz zaczynać od zera. Przenosimy treści, zachowujemy adresy URL i przekierowania, a stronę odbudowujemy na lekkim motywie. Zwykle poprawia to zarówno wyniki wydajnościowe, jak i stabilność.",
        bullets: [
          "audyt obecnej strony: wtyczki, szybkość, błędy, struktura URL",
          "przeniesienie treści i mediów bez utraty pozycji w Google",
          "odwzorowanie lub odświeżenie projektu graficznego",
          "usunięcie zbędnych wtyczek i uporządkowanie bazy danych",
          "porównanie wyników przed i po przebudowie",
        ],
      },
      {
        title: "Od czego zależy cena strony na autorskim motywie",
        text: "Autorski motyw wymaga więcej pracy programistycznej niż gotowy szablon, ale zwraca się w niższych kosztach utrzymania i lepszych wynikach. Cena zależy od liczby unikalnych szablonów, typów treści i funkcji dodatkowych. Wycenę przedstawiamy po konsultacji.",
        bullets: [
          "liczba różnych układów podstron do zakodowania",
          "własne typy treści i ich złożoność",
          "integracje: formularze, API, systemy rezerwacji, newsletter",
          "przebudowa istniejącej strony czy nowy projekt",
          "zakres treści, zdjęć i SEO do przygotowania",
        ],
      },
    ],
    faq: [
      {
        q: "Czy strona WordPress bez Elementora będzie trudniejsza w edycji?",
        a: "Nie. Treści edytujesz w standardowym panelu WordPressa przez bloki lub proste pola. Nie możesz za to przypadkiem zepsuć układu strony, co w page builderach zdarza się często.",
      },
      {
        q: "Czym różni się autorski motyw od gotowego szablonu?",
        a: "Gotowy szablon zawiera setki opcji i funkcji, z których używasz kilku, ale wszystkie obciążają stronę. Autorski motyw ma tylko to, co jest potrzebne w Twoim projekcie, dlatego jest szybszy, bezpieczniejszy i łatwiejszy w utrzymaniu.",
      },
      {
        q: "Czy mogę przenieść istniejącą stronę z Elementora na autorski motyw?",
        a: "Tak. Przenosimy treści i media, zachowujemy adresy URL i konfigurujemy przekierowania, więc strona nie traci pozycji w Google. Zwykle wynik Core Web Vitals znacząco się poprawia.",
      },
      {
        q: "Ile trwa budowa strony na autorskim motywie?",
        a: "Zazwyczaj kilka tygodni, w zależności od liczby szablonów i gotowości treści. Projekt graficzny i jego akceptacja to etap, który najczęściej wydłuża harmonogram.",
      },
      {
        q: "Czy autorski motyw jest bezpieczniejszy?",
        a: "Tak, bo ma mniej zewnętrznego kodu. Większość włamań na WordPressa wynika z nieaktualnych wtyczek i motywów. Mniej wtyczek to mniej powierzchni ataku i mniej aktualizacji do pilnowania.",
      },
    ],
    related: ["strony-internetowe-dla-firm", "seo-techniczne", "opieka-nad-strona-wordpress"],
    keywords: [
      "strona WordPress autorski motyw",
      "WordPress bez Elementora",
      "dedykowany motyw WordPress",
      "szybka strona WordPress",
      "przebudowa strony z Elementora",
      "motyw WordPress na zamówienie",
    ],
    portfolio: ["PowerLAB – chiptuning i serwis AdBlue", "UNI-System – systemy dozorowania", "Plonio.pl"],
  },

  // 6. Automatyzacje n8n i Make
  {
    slug: "automatyzacja-n8n-make",
    kind: "service",
    parent: "automatyzacja-procesow-biznesowych",
    title: "Automatyzacje n8n i Make dla firm",
    metaTitle: "Automatyzacje n8n i Make dla firm – OlekCodeTech",
    metaDescription:
      "Projektujemy i wdrażamy automatyzacje w n8n i Make: formularze, CRM, e-mail, arkusze, API. Mniej ręcznej pracy, mniej błędów. Umów bezpłatną konsultację.",
    eyebrow: "Automatyzacja procesów",
    lead: [
      "Wdrażamy automatyzacje w n8n i Make (dawniej Integromat), które łączą narzędzia używane w firmie i wykonują powtarzalne zadania bez udziału człowieka. Pracujemy z firmami usługowymi, biurami rachunkowymi, sklepami i zespołami sprzedaży z całej Polski.",
      "Typowy efekt: dane z formularza same trafiają do CRM, klient dostaje potwierdzenie, handlowiec powiadomienie, a raport generuje się co poniedziałek rano. Zespół przestaje kopiować dane między systemami i zajmuje się pracą, która wymaga myślenia.",
    ],
    sections: [
      {
        title: "Co automatyzujemy w n8n i Make",
        text: "Automatyzacja opłaca się tam, gdzie proces jest powtarzalny, oparty na danych i wykonywany ręcznie częściej niż kilka razy w tygodniu. Zaczynamy od zmapowania takich procesów i wybrania tych, które przynoszą najszybszy zwrot. Dopiero potem budujemy scenariusze.",
        bullets: [
          "obsługa zapytań: formularz → CRM → e-mail → zadanie dla handlowca",
          "przetwarzanie zamówień i faktur między sklepem, magazynem i księgowością",
          "raporty cykliczne z kilku źródeł do arkusza, Slacka lub e-maila",
          "synchronizacja kontaktów między CRM, mailingiem i arkuszami",
          "publikacja treści: blog, media społecznościowe, Google Business Profile",
          "powiadomienia o zdarzeniach: nowy lead, nieopłacona faktura, przeterminowane zadanie",
        ],
      },
      {
        title: "n8n czy Make – które narzędzie wybrać",
        text: "Oba narzędzia pozwalają budować scenariusze bez pisania całej aplikacji, ale różnią się modelem kosztów i elastycznością. Make jest prostszy na start i rozliczany za liczbę operacji. n8n można postawić na własnym serwerze, bez limitów operacji, z pełną kontrolą nad danymi i możliwością pisania własnego kodu w scenariuszu. Pomagamy wybrać na podstawie skali, budżetu i wymagań dotyczących danych.",
        bullets: [
          "Make: szybki start, gotowe moduły, rozliczenie za operacje, dane w chmurze Make",
          "n8n: self-hosting na VPS, brak limitu operacji, kod JavaScript w scenariuszach",
          "n8n lepiej sprawdza się przy dużych wolumenach i wrażliwych danych",
          "Make bywa tańszy przy małej liczbie prostych scenariuszy",
          "oba łączą się z setkami aplikacji i dowolnym REST API",
        ],
      },
      {
        title: "Jak wygląda wdrożenie automatyzacji",
        text: "Nie zaczynamy od narzędzia, tylko od procesu. Spisujemy, skąd pochodzą dane, kto je przetwarza i gdzie mają trafić. Potem budujemy scenariusz na danych testowych, uruchamiamy równolegle z pracą ręczną i dopiero po weryfikacji przełączamy na tryb produkcyjny. Każdy scenariusz dostaje obsługę błędów i powiadomienia, gdy coś pójdzie nie tak.",
        bullets: [
          "mapa procesu i lista systemów do połączenia",
          "wybór narzędzia (n8n / Make) i model hostingu",
          "budowa scenariusza, obsługa wyjątków, logowanie",
          "testy na danych testowych i okres równoległy",
          "dokumentacja scenariusza i przekazanie dostępów",
          "monitoring i rozwój w ramach opieki",
        ],
      },
      {
        title: "Z jakimi systemami łączymy automatyzacje",
        text: "Większość narzędzi biznesowych ma gotowe moduły w n8n i Make. Tam, gdzie ich nie ma, korzystamy z REST API lub webhooków, a przy systemach bez API piszemy własne łączniki. Najczęściej integrujemy CRM, pocztę, arkusze, systemy fakturowania i sklepy.",
        bullets: [
          "CRM: HubSpot, Pipedrive, ClickUp, Bitrix24, systemy dedykowane",
          "Google Workspace: Gmail, Sheets, Drive, Kalendarz",
          "Microsoft 365: Outlook, SharePoint, Teams, Excel",
          "WordPress, WooCommerce, Przelewy24, Furgonetka, systemy fakturowe",
          "Slack, Telegram, SMS, e-mail transakcyjny",
          "własne API i bazy danych",
        ],
      },
      {
        title: "Ile kosztuje automatyzacja i od czego zależy wycena",
        text: "Na koszt wdrożenia wpływa liczba scenariuszy, liczba systemów do połączenia i to, czy mają dobre API. Prosty scenariusz formularz → CRM → e-mail to kilka godzin pracy, złożony obieg zamówień z obsługą wyjątków to projekt na tygodnie. Do tego dochodzą koszty narzędzia: abonament Make lub serwer dla n8n.",
        bullets: [
          "liczba i złożoność scenariuszy",
          "jakość API i dokumentacji łączonych systemów",
          "wolumen danych i wymagania dotyczące czasu reakcji",
          "hosting n8n na własnym serwerze czy abonament Make",
          "zakres monitoringu i wsparcia po wdrożeniu",
        ],
      },
    ],
    faq: [
      {
        q: "Czym różni się n8n od Make?",
        a: "Make to narzędzie chmurowe rozliczane za liczbę operacji, prostsze na start. n8n jest open source, można go postawić na własnym serwerze bez limitów operacji i dopisywać własny kod w scenariuszach. Przy dużych wolumenach lub wrażliwych danych zwykle rekomendujemy n8n.",
      },
      {
        q: "Ile kosztuje wdrożenie automatyzacji n8n lub Make?",
        a: "Zależy od liczby scenariuszy i systemów do połączenia. Prosty przepływ to kilka godzin pracy, złożony obieg z wieloma wyjątkami to projekt na tygodnie. Osobno trzeba policzyć koszt abonamentu Make lub serwera dla n8n.",
      },
      {
        q: "Czy automatyzacja jest bezpieczna dla danych firmy?",
        a: "Przy n8n na własnym serwerze dane nie opuszczają infrastruktury firmy. W Make dane przechodzą przez chmurę dostawcy w UE. W obu przypadkach używamy szyfrowanych połączeń, ograniczamy uprawnienia do minimum i nie przechowujemy danych dłużej niż to konieczne.",
      },
      {
        q: "Co się stanie, gdy automatyzacja przestanie działać?",
        a: "Każdy scenariusz budujemy z obsługą błędów i powiadomieniem, gdy coś pójdzie nie tak. W ramach opieki monitorujemy scenariusze i reagujemy na zmiany w API łączonych systemów.",
      },
      {
        q: "Czy mogę sam rozwijać automatyzacje po wdrożeniu?",
        a: "Tak. Przekazujemy dokumentację i dostępy, a scenariusze budujemy czytelnie, z opisanymi krokami. Wiele firm po wdrożeniu samodzielnie dodaje proste przepływy, a do nas wraca z bardziej złożonymi.",
      },
    ],
    related: ["automatyzacja-obslugi-leadow-crm", "integracje-api-crm-erp", "integracje-microsoft-365-sharepoint"],
    keywords: [
      "automatyzacja n8n",
      "automatyzacja Make",
      "wdrożenie n8n",
      "n8n czy Make",
      "automatyzacja procesów w firmie",
      "automatyzacje no-code",
    ],
    portfolio: ["CRM E-Numerika Biuro Księgowe", "PowerLAB – chiptuning i serwis AdBlue", "RAV - Sklep elektryczny"],
  },

  // 7. Automatyzacja obsługi leadów, formularzy i CRM
  {
    slug: "automatyzacja-obslugi-leadow-crm",
    kind: "service",
    parent: "automatyzacja-procesow-biznesowych",
    title: "Automatyzacja obsługi leadów, formularzy i CRM",
    metaTitle: "Automatyzacja leadów, formularzy i CRM – OlekCodeTech",
    metaDescription:
      "Automatyzujemy obsługę leadów: formularz, CRM, powiadomienia, follow-up i raporty. Żadne zapytanie nie ginie w skrzynce. Umów bezpłatną konsultację.",
    eyebrow: "Leady i CRM",
    lead: [
      "Projektujemy automatyzację obsługi leadów, która łączy formularze na stronie, pocztę, telefon i reklamy z systemem CRM. Każde zapytanie trafia w jedno miejsce, dostaje właściciela i termin, a klient otrzymuje odpowiedź w ciągu minut, nie dni.",
      "Pracujemy z firmami usługowymi, deweloperami, biurami rachunkowymi i sklepami, które tracą zapytania w skrzynkach e-mail. Efekt to pełna widoczność lejka sprzedażowego i mierzalny czas reakcji na każdego leada.",
    ],
    sections: [
      {
        title: "Gdzie giną leady i jak to naprawić",
        text: "Najczęstszy scenariusz: formularz wysyła e-mail do skrzynki biura, ktoś go przeczyta za dwa dni, odpowiedź trafia do spamu, a klient w międzyczasie wybrał konkurencję. Automatyzacja usuwa te luki: zapytanie jest rejestrowane, przypisane i śledzone od pierwszej sekundy, niezależnie od tego, z jakiego kanału przyszło.",
        bullets: [
          "formularze na stronie i landing page'ach, w tym wiele formularzy na jednej stronie",
          "zapytania z Google Ads, Meta Lead Ads i Google Business Profile",
          "e-maile na skrzynkę ofertową i wiadomości z Messengera",
          "połączenia telefoniczne i SMS (rejestracja nieodebranych)",
          "zapisy na newsletter, webinar, wycenę, bezpłatną konsultację",
        ],
      },
      {
        title: "Jak działa zautomatyzowany przepływ leada",
        text: "Projektujemy przepływ od momentu wysłania formularza do zamknięcia sprzedaży lub odrzucenia leada. Każdy krok ma jasnego właściciela i czas, po którym system przypomina lub eskaluje. Dane trafiają do CRM w ujednoliconym formacie, bez ręcznego przepisywania.",
        bullets: [
          "walidacja i deduplikacja: ten sam klient nie powstaje dwa razy",
          "automatyczne utworzenie kontaktu i szansy sprzedażowej w CRM",
          "przypisanie do handlowca według regionu, usługi lub kolejki",
          "natychmiastowe potwierdzenie do klienta i powiadomienie do zespołu",
          "przypomnienia o follow-upie i eskalacja, gdy lead czeka za długo",
          "zmiana statusów i raport z lejka na koniec tygodnia",
        ],
      },
      {
        title: "Integracja formularzy z CRM i narzędziami sprzedaży",
        text: "Łączymy formularze WordPress (Contact Form 7, WPForms, Gravity Forms, własne) oraz formularze z landingów z popularnymi CRM-ami i narzędziami do zarządzania zadaniami. Gdy firma nie ma CRM, pomagamy wybrać i skonfigurować odpowiedni, albo budujemy prosty, dedykowany, jeśli gotowe nie pasują do procesu.",
        bullets: [
          "CRM: HubSpot, Pipedrive, Bitrix24, Livespace, ClickUp, systemy dedykowane",
          "narzędzia: n8n, Make, webhooki, REST API, Google Sheets",
          "kalendarze: automatyczne umawianie spotkań po kwalifikacji leada",
          "e-mail i SMS: sekwencje follow-up, przypomnienia o ofercie",
          "Google Ads i Meta Ads: przesyłanie konwersji offline z CRM",
        ],
      },
      {
        title: "Proces wdrożenia automatyzacji leadów",
        text: "Zaczynamy od przejścia obecnego procesu z zespołem sprzedaży: skąd przychodzą zapytania, kto je obsługuje, gdzie są wąskie gardła. Potem projektujemy przepływ docelowy, konfigurujemy CRM i budujemy automatyzacje. Uruchamiamy je równolegle do obecnego trybu pracy i po weryfikacji przełączamy na stałe.",
        bullets: [
          "warsztat z zespołem sprzedaży i mapa obecnego lejka",
          "projekt przepływu docelowego, statusów i reguł przypisywania",
          "konfiguracja lub wdrożenie CRM, pola i etapy sprzedaży",
          "budowa automatyzacji w n8n / Make i testy na leadach testowych",
          "szkolenie zespołu i okres równoległy",
          "raport po pierwszym miesiącu i korekty",
        ],
      },
      {
        title: "Co wpływa na koszt automatyzacji obsługi leadów",
        text: "Koszt zależy od liczby źródeł leadów, złożoności reguł (kto, kiedy, co dostaje) i tego, czy CRM już istnieje. Prosty przepływ formularz → CRM → powiadomienie to szybkie wdrożenie. Pełny lejek z kwalifikacją, sekwencjami i raportowaniem to projekt na kilka tygodni. Wycenę przedstawiamy po warsztacie.",
        bullets: [
          "liczba kanałów pozyskiwania leadów do połączenia",
          "czy CRM jest wdrożony, czy trzeba go wybrać i skonfigurować",
          "złożoność reguł przypisywania i eskalacji",
          "sekwencje e-mail / SMS i integracja z kalendarzem",
          "raportowanie i przesyłanie konwersji do systemów reklamowych",
        ],
      },
    ],
    faq: [
      {
        q: "Jak zautomatyzować obsługę leadów z formularza?",
        a: "Formularz zamiast e-maila wysyła dane przez webhook do n8n lub Make, które tworzą kontakt w CRM, przypisują handlowca, wysyłają potwierdzenie klientowi i powiadomienie zespołowi. Całość działa w kilka sekund od wysłania formularza.",
      },
      {
        q: "Jaki CRM wybrać dla małej firmy?",
        a: "Dla małych zespołów sprawdzają się HubSpot (darmowy plan), Pipedrive lub Livespace. Jeśli firma zarządza projektami w ClickUp, można prowadzić lejek tam. Gdy proces jest nietypowy, budujemy prosty CRM dedykowany. Pomagamy wybrać na podstawie procesu, nie reklam.",
      },
      {
        q: "Czy automatyzacja leadów działa z Google Ads i Facebook Lead Ads?",
        a: "Tak. Leady z formularzy reklamowych trafiają do CRM automatycznie, a po zakwalifikowaniu lub sprzedaży możemy odesłać konwersję do Google Ads lub Meta, żeby algorytmy uczyły się na wartościowych leadach.",
      },
      {
        q: "Ile trwa wdrożenie automatyzacji CRM?",
        a: "Prosty przepływ z jednego formularza można uruchomić w kilka dni. Pełna automatyzacja lejka z kilkoma źródłami, kwalifikacją i raportowaniem to zwykle kilka tygodni, włącznie z konfiguracją CRM i szkoleniem zespołu.",
      },
      {
        q: "Czy to zgodne z RODO?",
        a: "Tak, jeśli zgody są zbierane w formularzu, a dane przetwarzane tylko w potrzebnym zakresie. Konfigurujemy zgody, retencję danych i uprawnienia w CRM. Przy n8n na własnym serwerze dane nie opuszczają infrastruktury firmy.",
      },
    ],
    related: ["automatyzacja-n8n-make", "landing-page", "aplikacje-webowe-react-nextjs"],
    keywords: [
      "automatyzacja obsługi leadów",
      "integracja formularza z CRM",
      "automatyzacja CRM",
      "automatyzacja sprzedaży",
      "wdrożenie CRM dla małej firmy",
      "automatyczna obsługa zapytań",
    ],
    portfolio: ["CRM E-Numerika Biuro Księgowe", "Plonio.pl", "BKP - Ubezpieczenia"],
  },

  // 8. SEO techniczne
  {
    slug: "seo-techniczne",
    kind: "service",
    parent: "seo-content-marketing",
    title: "SEO techniczne i Core Web Vitals – optymalizacja strony",
    metaTitle: "SEO techniczne i Core Web Vitals – OlekCodeTech",
    metaDescription:
      "SEO techniczne: Core Web Vitals, indeksacja, dane strukturalne, szybkość WordPress. Naprawiamy fundamenty widoczności. Umów bezpłatną konsultację.",
    eyebrow: "Fundamenty SEO",
    lead: [
      "Zajmujemy się SEO technicznym, czyli wszystkim, co decyduje o tym, czy Google w ogóle poprawnie odczyta i oceni stronę: szybkość, Core Web Vitals, indeksacja, struktura adresów, dane strukturalne, błędy serwera. Pracujemy głównie ze stronami na WordPressie, WooCommerce i Next.js.",
      "Łączymy kompetencje programistyczne i SEO, więc nie kończymy na raporcie z listą problemów. Wdrażamy poprawki w kodzie, konfiguracji serwera i cache, a potem mierzymy efekt w Search Console i PageSpeed Insights.",
    ],
    sections: [
      {
        title: "Co obejmuje SEO techniczne strony",
        text: "SEO techniczne to zestaw działań, które nie zmieniają treści, ale decydują o tym, jak wyszukiwarka ją przetwarza. Bez tego nawet dobry content nie osiągnie pełnego potencjału. Zaczynamy od audytu, ustalamy priorytety według wpływu na widoczność i wdrażamy poprawki od najważniejszych.",
        bullets: [
          "indeksacja: robots.txt, mapa strony XML, noindex, kanoniczne adresy URL",
          "struktura: nagłówki H1–H3, linkowanie wewnętrzne, breadcrumbs, paginacja",
          "szybkość i Core Web Vitals: LCP, INP, CLS",
          "dane strukturalne schema.org: Organization, LocalBusiness, Product, FAQ, Article",
          "błędy 404, przekierowania 301, pętle i łańcuchy przekierowań",
          "wersja mobilna, HTTPS, duplikaty treści, parametry URL",
        ],
      },
      {
        title: "Optymalizacja Core Web Vitals w WordPress i WooCommerce",
        text: "Core Web Vitals to trzy metryki Google mierzące realne doświadczenie użytkownika: czas wyświetlenia głównego elementu (LCP), reakcję na interakcję (INP) i stabilność układu (CLS). W WordPressie najczęstsze problemy to ciężkie motywy, zbyt wiele wtyczek, nieoptymalne obrazy i brak cache. Naprawiamy je u źródła, a nie tylko maskujemy wtyczką optymalizacyjną.",
        bullets: [
          "konfiguracja LiteSpeed Cache lub innego cache na poziomie serwera",
          "konwersja obrazów do WebP, wymiary, lazy loading, priorytet dla LCP",
          "usuwanie nieużywanego CSS i JavaScript, odroczone ładowanie skryptów",
          "krytyczny CSS, preload fontów, eliminacja przesunięć układu",
          "audyt wtyczek i zastąpienie ciężkich rozwiązań lżejszymi",
          "optymalizacja bazy danych i zapytań w WooCommerce",
        ],
      },
      {
        title: "SEO techniczne sklepu internetowego",
        text: "Sklepy mają własne problemy: tysiące adresów z filtrami i parametrami, duplikaty kart produktów w wielu kategoriach, cienkie treści na stronach wariantów. Porządkujemy to tak, żeby Google indeksował strony, które mają sprzedawać, i nie marnował budżetu indeksowania na kombinacje filtrów.",
        bullets: [
          "kanoniczne adresy dla produktów w wielu kategoriach",
          "noindex dla filtrów, sortowania i stron bez wartości",
          "dane strukturalne Product z ceną, dostępnością i ocenami",
          "struktura kategorii i linkowanie wewnętrzne wspierające frazy sprzedażowe",
          "szybkość listingu i karty produktu przy dużym katalogu",
          "obsługa produktów wycofanych: przekierowania zamiast błędów 404",
        ],
      },
      {
        title: "Jak pracujemy nad SEO technicznym",
        text: "Zaczynamy od audytu narzędziami (Search Console, PageSpeed Insights, Screaming Frog) i ręcznej analizy kodu. Problemy porządkujemy według wpływu i nakładu pracy, a następnie wdrażamy poprawki bezpośrednio w kodzie strony lub konfiguracji serwera. Po wdrożeniu porównujemy metryki przed i po.",
        bullets: [
          "audyt techniczny z listą problemów i priorytetami",
          "wdrożenie poprawek w motywie, wtyczkach, konfiguracji hostingu",
          "weryfikacja w Search Console i raportach Core Web Vitals",
          "monitoring po wdrożeniu i reakcja na nowe błędy",
          "dokumentacja zmian dla klienta lub jego agencji SEO",
        ],
      },
      {
        title: "Od czego zależy koszt optymalizacji technicznej",
        text: "Koszt zależy od stanu strony i tego, ile poprawek da się wdrożyć bez przebudowy. Strona na lekkim motywie wymaga kilku godzin konfiguracji, strona w ciężkim page builderze z 60 wtyczkami może wymagać częściowej przebudowy. Po audycie przedstawiamy zakres z podziałem na etapy, więc można zacząć od najważniejszych poprawek.",
        bullets: [
          "wielkość strony: liczba podstron i produktów",
          "technologia i jakość obecnego kodu",
          "zakres poprawek możliwych bez przebudowy motywu",
          "dostęp do hostingu i możliwość konfiguracji serwera",
          "czy potrzebny jest stały monitoring, czy jednorazowe wdrożenie",
        ],
      },
    ],
    faq: [
      {
        q: "Co to jest SEO techniczne?",
        a: "To optymalizacja strony pod kątem tego, jak wyszukiwarka ją odczytuje i ocenia: szybkość, indeksacja, struktura adresów, dane strukturalne, błędy. Nie dotyczy treści ani linków, ale bez niego treści nie osiągną pełnego potencjału w Google.",
      },
      {
        q: "Czym są Core Web Vitals i czy wpływają na pozycje?",
        a: "To metryki Google mierzące szybkość wyświetlenia (LCP), reakcję na interakcję (INP) i stabilność układu (CLS). Są jednym z czynników rankingowych i wpływają na konwersję: wolne strony tracą użytkowników, zanim ci zobaczą ofertę.",
      },
      {
        q: "Jak przyspieszyć stronę WordPress?",
        a: "Najczęściej: skonfigurować cache na poziomie serwera (np. LiteSpeed), zoptymalizować obrazy do WebP, ograniczyć liczbę wtyczek i skryptów oraz naprawić ładowanie fontów. W ciężkich motywach trwałą poprawę daje dopiero przebudowa na lżejszy motyw.",
      },
      {
        q: "Ile trwa optymalizacja SEO technicznego?",
        a: "Audyt zajmuje kilka dni. Wdrożenie podstawowych poprawek to zwykle tydzień lub dwa, większe zmiany w strukturze lub przebudowa motywu dłużej. Efekt w Search Console widać po kilku tygodniach od ponownego zaindeksowania.",
      },
      {
        q: "Czy robicie SEO techniczne dla stron, których nie budowaliście?",
        a: "Tak, to większość naszych zleceń w tym obszarze. Potrzebujemy dostępu do panelu WordPressa, hostingu i Search Console. Współpracujemy też z agencjami SEO, które potrzebują wdrożenia technicznego swoich zaleceń.",
      },
    ],
    related: ["audyt-seo", "strony-wordpress-autorski-motyw", "opieka-nad-strona-wordpress"],
    keywords: [
      "SEO techniczne",
      "Core Web Vitals optymalizacja",
      "optymalizacja szybkości strony WordPress",
      "SEO techniczne WooCommerce",
      "indeksacja strony Google",
      "dane strukturalne schema",
    ],
    portfolio: ["UNI-System – systemy dozorowania", "PowerLAB – chiptuning i serwis AdBlue", "WTA Perfekt"],
  },

  // 9. Audyt SEO
  {
    slug: "audyt-seo",
    kind: "service",
    parent: "seo-content-marketing",
    title: "Audyt SEO strony internetowej – co blokuje Twoją widoczność",
    metaTitle: "Audyt SEO strony internetowej – OlekCodeTech",
    metaDescription:
      "Audyt SEO strony: technika, treści, struktura, linkowanie, konkurencja. Konkretna lista poprawek z priorytetami. Zamów audyt lub bezpłatną konsultację.",
    eyebrow: "Diagnoza widoczności",
    lead: [
      "Wykonujemy audyty SEO stron firmowych i sklepów internetowych, które pokazują, dlaczego strona nie zdobywa ruchu z Google i co konkretnie trzeba zmienić. Sprawdzamy technikę, treści, strukturę i otoczenie konkurencyjne, a wynik dostarczamy jako listę zadań z priorytetami.",
      "Audyt robimy jako punkt wyjścia do dalszej pracy, nie jako dokument do szuflady. Każde zalecenie ma opis problemu, wpływ na widoczność i sposób naprawy, który możemy wdrożyć sami lub przekazać zespołowi klienta.",
    ],
    sections: [
      {
        title: "Kiedy warto zrobić audyt SEO",
        text: "Audyt ma sens, gdy strona istnieje od dłuższego czasu, a ruch z wyszukiwarki nie rośnie lub spadł, gdy planujesz przebudowę i chcesz nie stracić pozycji, albo gdy przejmujesz stronę po innej agencji i nie wiesz, w jakim jest stanie. Audytujemy także strony po włamaniach, bo spam SEO potrafi zrujnować widoczność na miesiące.",
        bullets: [
          "spadek ruchu organicznego po aktualizacji Google lub zmianach na stronie",
          "strona jest w sieci od lat, ale nie generuje zapytań z wyszukiwarki",
          "planowana migracja, zmiana domeny lub przebudowa strony",
          "przejęcie strony po poprzednim wykonawcy lub agencji",
          "podejrzenie włamania, spamu lub kary od Google",
          "nowy sklep, który ma wystartować z poprawną strukturą",
        ],
      },
      {
        title: "Zakres audytu SEO",
        text: "Sprawdzamy stronę w czterech obszarach: technika, treści on-page, struktura i linkowanie oraz konkurencja. Korzystamy z Search Console, GA4, PageSpeed Insights, Screaming Frog, Ahrefs lub Senuto, ale najważniejsza jest ręczna analiza, bo narzędzia nie widzą kontekstu biznesowego.",
        bullets: [
          "technika: indeksacja, Core Web Vitals, błędy, przekierowania, mobile, HTTPS",
          "on-page: tytuły, nagłówki, meta opisy, duplikaty, cienkie treści, kanibalizacja",
          "struktura: architektura podstron, linkowanie wewnętrzne, nawigacja, breadcrumbs",
          "frazy: na co strona się wyświetla, na co powinna, luki względem konkurencji",
          "profil linków: jakość, toksyczne linki, porównanie z konkurencją",
          "lokalne SEO: Google Business Profile, NAP, wizytówki, opinie",
        ],
      },
      {
        title: "Co dostajesz po audycie",
        text: "Wynikiem jest dokument z listą problemów uporządkowaną według wpływu na widoczność i nakładu pracy. Nie wysyłamy stustronicowego raportu wygenerowanego z narzędzia. Każdy punkt ma opis, przykład z Twojej strony, zalecenie i szacowany priorytet, dzięki czemu można zacząć działać od razu.",
        bullets: [
          "lista zadań z priorytetami: krytyczne, ważne, do rozważenia",
          "omówienie audytu na spotkaniu online (około godziny)",
          "plan działań na kolejne miesiące z podziałem na technikę i treści",
          "propozycja struktury nowych podstron i tematów na blog",
          "wycena wdrożenia poprawek, jeśli chcesz, żebyśmy je zrealizowali",
        ],
      },
      {
        title: "Audyt SEO sklepu internetowego",
        text: "Sklepy wymagają osobnego podejścia: liczą się kategorie, filtry, karty produktów i ich dane strukturalne. Sprawdzamy, czy Google indeksuje właściwe strony, czy kategorie mają treści wspierające frazy sprzedażowe i czy karty produktów nie są duplikatami opisów producenta. Dla sklepów z dużym katalogiem analizujemy też logi serwera i budżet indeksowania.",
        bullets: [
          "indeksacja kategorii, filtrów i wariantów produktów",
          "treści kategorii i unikalność opisów produktów",
          "dane strukturalne Product, Offer, Review, BreadcrumbList",
          "szybkość listingu, karty produktu i checkoutu",
          "obsługa produktów niedostępnych i wycofanych",
          "feedy produktowe i spójność z Google Merchant",
        ],
      },
      {
        title: "Od czego zależy cena audytu SEO",
        text: "Cena zależy od wielkości strony i zakresu analizy. Audyt strony firmowej z 20 podstronami to inny nakład pracy niż sklep z 5000 produktów i analizą konkurencji. Możliwy jest audyt podstawowy (technika + on-page) lub pełny (z frazami, linkami i planem treści). Zakres ustalamy na bezpłatnej konsultacji.",
        bullets: [
          "liczba podstron i produktów do analizy",
          "zakres: tylko technika czy pełny audyt z frazami i konkurencją",
          "liczba konkurentów do porównania",
          "analiza logów serwera i historii zmian w Search Console",
          "czy audyt ma być wstępem do wdrożenia i stałej współpracy",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje audyt SEO?",
        a: "Zależy od wielkości strony i zakresu. Podstawowy audyt techniczny i on-page małej strony to kilkanaście godzin pracy, pełny audyt sklepu z analizą fraz i konkurencji znacznie więcej. Zakres i cenę ustalamy po bezpłatnej konsultacji.",
      },
      {
        q: "Ile trwa audyt SEO strony?",
        a: "Zwykle od kilku dni do dwóch tygodni, zależnie od wielkości strony. Potrzebujemy dostępu do Search Console i GA4, żeby oprzeć wnioski na danych, nie tylko na skanie narzędziem.",
      },
      {
        q: "Czym różni się audyt SEO od darmowego raportu z narzędzia?",
        a: "Narzędzia pokazują listę błędów bez kontekstu: nie wiedzą, które podstrony sprzedają, ani jak wygląda konkurencja. Audyt ręczny ustala priorytety pod cele biznesowe i wskazuje, co faktycznie zmieni widoczność, a co można pominąć.",
      },
      {
        q: "Co po audycie – czy wdrożycie poprawki?",
        a: "Tak, możemy wdrożyć poprawki techniczne i treściowe sami, bo mamy zespół programistyczny. Możesz też przekazać audyt swojemu zespołowi lub agencji; dokument jest napisany tak, żeby był wykonalny.",
      },
      {
        q: "Czy audyt SEO wykryje włamanie lub spam na stronie?",
        a: "Tak. Sprawdzamy indeks Google pod kątem obcych podstron, ukrytych linków i przekierowań. Mieliśmy przypadki stron z japońskim spamem SEO, które odbudowywaliśmy od zera po audycie.",
      },
    ],
    related: ["seo-techniczne", "content-marketing-b2b", "opieka-nad-strona-wordpress"],
    keywords: [
      "audyt SEO",
      "audyt SEO strony internetowej",
      "audyt SEO sklepu",
      "audyt SEO cena",
      "analiza SEO strony",
      "audyt widoczności w Google",
    ],
    portfolio: ["ATEST - Piotr Sosnowski", "MG Recykling", "ARTMAR - Usługi budowlane"],
  },

  // 10. Content marketing B2B
  {
    slug: "content-marketing-b2b",
    kind: "service",
    parent: "seo-content-marketing",
    title: "Content marketing B2B i blog ekspercki dla firm",
    metaTitle: "Content marketing B2B i blog ekspercki – OlekCodeTech",
    metaDescription:
      "Prowadzimy blogi eksperckie i content marketing B2B: artykuły pod frazy, które wpisują Twoi klienci, z FAQ i schema. Regularnie, mierzalnie. Umów konsultację.",
    eyebrow: "Treści, które sprzedają",
    lead: [
      "Prowadzimy content marketing B2B dla firm, które chcą zdobywać klientów z Google poradnikami i artykułami eksperckimi, a nie tylko reklamą. Piszemy dla branż technicznych i usługowych: budownictwo, BHP, motoryzacja, systemy zabezpieczeń, chemia profesjonalna, energetyka, rolnictwo.",
      "Każdy artykuł powstaje pod konkretne frazy i intencję wyszukiwania, dostaje FAQ z danymi strukturalnymi, grafikę i optymalizację on-page, a potem jest publikowany i dystrybuowany. Prowadzimy blogi w rytmie tygodniowym lub dwutygodniowym, z listą pokrytych tematów, żeby nie powtarzać treści.",
    ],
    sections: [
      {
        title: "Dla kogo jest content marketing B2B",
        text: "Content działa najlepiej w branżach, w których klient przed zakupem szuka informacji: porównuje rozwiązania, sprawdza przepisy, chce zrozumieć, za co płaci. Jeśli Twoi klienci zadają te same pytania na każdej rozmowie handlowej, to są gotowe tematy na blog. Prowadzimy cykle poradników m.in. dla firm z branży ochrony przed upadkiem, biogazowni, chiptuningu i systemów dozorowania.",
        bullets: [
          "firmy usługowe B2B z dłuższym procesem decyzyjnym",
          "producenci i dystrybutorzy produktów technicznych",
          "firmy, które muszą edukować klienta (przepisy, normy, technologia)",
          "sklepy, które chcą zdobywać ruch na frazy informacyjne i przekuwać go w sprzedaż",
          "lokalne firmy budujące pozycję eksperta w regionie",
        ],
      },
      {
        title: "Jak tworzymy artykuły eksperckie na blog",
        text: "Nie piszemy „treści pod SEO” w sensie zapełniania strony słowami. Każdy artykuł zaczyna się od analizy, czego szuka użytkownik, co już jest w wynikach i czego tam brakuje. Treść konsultujemy z klientem, żeby zawierała jego doświadczenie i realne przypadki, a nie ogólniki. Dopiero potem optymalizujemy ją technicznie.",
        bullets: [
          "research fraz i intencji: informacyjne, porównawcze, transakcyjne",
          "plan treści na kwartał z listą tematów i fraz głównych",
          "artykuły 1500–3000 słów z nagłówkami, listami, tabelami i FAQ",
          "konsultacja merytoryczna z ekspertem po stronie klienta",
          "optymalizacja on-page: tytuł, meta, nagłówki, linkowanie wewnętrzne, schema FAQ",
          "grafika główna i ilustracje, publikacja w WordPressie, post na Facebook lub LinkedIn",
        ],
      },
      {
        title: "Content marketing a SEO: jak to się łączy",
        text: "Blog bez planu fraz to pamiętnik firmy; plan fraz bez dobrej treści to strona, której nikt nie czyta. Łączymy jedno z drugim: struktura podstron usługowych obsługuje frazy sprzedażowe, blog zbiera ruch z fraz informacyjnych i kieruje go linkami wewnętrznymi do oferty. Mierzymy nie tylko ruch, ale też zapytania, które z niego wynikają.",
        bullets: [
          "podział fraz: sprzedażowe na usługi, informacyjne na blog",
          "linkowanie wewnętrzne z artykułów do podstron ofertowych",
          "aktualizacja starszych wpisów, które tracą pozycje",
          "tematyczne klastry treści budujące autorytet w jednej dziedzinie",
          "pomiar: pozycje, ruch, konwersje z treści w GA4 i Search Console",
        ],
      },
      {
        title: "Proces współpracy przy prowadzeniu bloga",
        text: "Zaczynamy od warsztatu, na którym zbieramy pytania klientów, specyfikę branży i materiały źródłowe. Potem przygotowujemy plan tematów na pierwszy kwartał i ruszamy z publikacjami w stałym rytmie. Co miesiąc raportujemy, co weszło do indeksu, które artykuły zbierają ruch i co warto rozbudować.",
        bullets: [
          "warsztat startowy i lista pytań klientów",
          "plan tematów i fraz na kwartał do akceptacji",
          "cykl: szkic → konsultacja → publikacja, co tydzień lub co dwa tygodnie",
          "dystrybucja: media społecznościowe, Google Business Profile, newsletter",
          "miesięczny raport i korekta planu",
        ],
      },
      {
        title: "Ile kosztuje content marketing i od czego to zależy",
        text: "Koszt zależy od liczby artykułów w miesiącu, ich długości i stopnia specjalizacji. Teksty z branży technicznej wymagające konsultacji i researchu norm kosztują więcej niż ogólne poradniki. Pracujemy w modelu miesięcznym z ustaloną liczbą publikacji, co pozwala planować budżet.",
        bullets: [
          "liczba artykułów miesięcznie i ich długość",
          "stopień specjalizacji branży i potrzeba konsultacji",
          "grafiki: generowane, stockowe czy sesja zdjęciowa",
          "dystrybucja w mediach społecznościowych i newsletterze",
          "czy łączymy z SEO technicznym i optymalizacją podstron usługowych",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje prowadzenie bloga firmowego?",
        a: "Zależy od liczby artykułów w miesiącu, ich długości i specjalizacji branży. Rozliczamy się miesięcznie za ustaloną liczbę publikacji, więc budżet jest przewidywalny. Zakres ustalamy na bezpłatnej konsultacji.",
      },
      {
        q: "Jak często publikować artykuły na blogu firmowym?",
        a: "Regularność jest ważniejsza niż ilość. Dla większości firm B2B wystarczą 2–4 artykuły miesięcznie publikowane w stałym rytmie. Lepiej jeden dobry artykuł tygodniowo niż dziesięć słabych raz na kwartał.",
      },
      {
        q: "Po jakim czasie content marketing daje efekty?",
        a: "Pierwsze artykuły zaczynają zbierać ruch po kilku tygodniach od indeksacji, ale widoczny wzrost zapytań to zwykle perspektywa 3–6 miesięcy regularnej publikacji. Content kumuluje się: artykuły sprzed roku dalej pracują.",
      },
      {
        q: "Czy piszecie treści z użyciem AI?",
        a: "Używamy narzędzi AI do researchu i szkiców, ale każdy artykuł jest redagowany, weryfikowany merytorycznie i konsultowany z klientem. Nie publikujemy tekstów bez sprawdzenia faktów i dopasowania do realiów branży.",
      },
      {
        q: "Czym różni się content marketing B2B od B2C?",
        a: "W B2B decyzję podejmuje się dłużej i na podstawie argumentów, więc treści muszą być merytoryczne, konkretne i odpowiadać na pytania techniczne. W B2C liczą się emocje i szybka decyzja. Artykuły B2B są dłuższe, bardziej szczegółowe i częściej kierowane do specjalistów.",
      },
    ],
    related: ["audyt-seo", "seo-techniczne", "strony-internetowe-dla-firm"],
    keywords: [
      "content marketing B2B",
      "blog ekspercki dla firmy",
      "prowadzenie bloga firmowego",
      "artykuły SEO dla firm",
      "pisanie treści na stronę",
      "strategia content marketingu",
    ],
    portfolio: ["MSPM - BIOGAZ", "UNI-System – systemy dozorowania", "ATEST - Piotr Sosnowski"],
  },

  // 11. Opieka nad stroną WordPress / WooCommerce
  {
    slug: "opieka-nad-strona-wordpress",
    kind: "service",
    parent: "opieka-it-dla-firm",
    title: "Opieka nad stroną WordPress i sklepem WooCommerce",
    metaTitle: "Opieka nad stroną WordPress / WooCommerce – OlekCodeTech",
    metaDescription:
      "Stała opieka nad stroną WordPress i WooCommerce: aktualizacje, kopie zapasowe, bezpieczeństwo, monitoring, poprawki i rozwój. Umów bezpłatną konsultację.",
    eyebrow: "Utrzymanie WordPress",
    lead: [
      "Zapewniamy stałą opiekę techniczną nad stronami WordPress i sklepami WooCommerce: aktualizujemy, zabezpieczamy, robimy kopie zapasowe, monitorujemy dostępność i naprawiamy to, co się zepsuje. Opiekujemy się zarówno stronami, które sami zbudowaliśmy, jak i przejętymi po innych wykonawcach.",
      "Dla właściciela firmy oznacza to jedno: strona działa, jest aktualna i bezpieczna, a drobne zmiany są wprowadzane bez szukania wykonawcy za każdym razem. Mamy doświadczenie w odbudowie stron po włamaniach, więc wiemy, czego pilnować, żeby do nich nie dochodziło.",
    ],
    sections: [
      {
        title: "Dlaczego strona WordPress wymaga opieki",
        text: "WordPress napędza dużą część stron w internecie, dlatego jest też najczęściej atakowany. Większość włamań wynika z nieaktualnych wtyczek, słabych haseł i braku kopii zapasowych. Strona bez opieki działa do pierwszej awarii lub ataku, a wtedy koszt naprawy jest wielokrotnie wyższy niż koszt profilaktyki. Opieka to także szybkie drobne zmiany bez każdorazowej wyceny.",
        bullets: [
          "aktualizacje WordPressa, wtyczek i motywu wychodzą co tydzień",
          "nieaktualna wtyczka to najczęstsza droga włamania",
          "bez kopii zapasowej odbudowa po ataku oznacza stratę treści",
          "hosting wprowadza zmiany (PHP, serwer), które potrafią wyłączyć stronę",
          "sklep bez monitoringu może nie przyjmować zamówień przez wiele godzin, zanim ktoś zauważy",
        ],
      },
      {
        title: "Zakres opieki nad stroną WordPress",
        text: "Opieka obejmuje stałe czynności profilaktyczne, monitoring i pulę godzin na zmiany. Każdą aktualizację wykonujemy po kopii zapasowej i sprawdzamy, czy strona działa poprawnie po zmianie. W przypadku sklepów dodatkowo testujemy ścieżkę zakupową i płatności.",
        bullets: [
          "aktualizacje WordPressa, wtyczek, motywu i PHP z testem po aktualizacji",
          "kopie zapasowe codzienne lub tygodniowe, przechowywane poza serwerem",
          "monitoring dostępności i czasu odpowiedzi, alerty o awarii",
          "zabezpieczenia: firewall, limity logowań, uwierzytelnianie dwuskładnikowe, skan malware",
          "poprawki błędów, drobne zmiany treści i układu w ramach puli godzin",
          "raport miesięczny: co zaktualizowano, co naprawiono, stan strony",
        ],
      },
      {
        title: "Opieka nad sklepem WooCommerce",
        text: "Sklep to system, w którym awaria kosztuje realne pieniądze. Oprócz standardowej opieki pilnujemy zgodności wersji WooCommerce z bramką płatności, wtyczkami kurierskimi i fakturowaniem, sprawdzamy e-maile transakcyjne i optymalizujemy bazę danych, która w sklepach rośnie szybko. Przy większych sklepach aktualizacje testujemy najpierw na kopii.",
        bullets: [
          "środowisko testowe do sprawdzania aktualizacji przed wdrożeniem na produkcję",
          "test zamówienia, płatności i wysyłki po każdej większej aktualizacji",
          "czyszczenie bazy: sesje, transienty, logi, zamówienia porzucone",
          "monitoring synchronizacji z hurtownią lub magazynem",
          "wsparcie w obsłudze produktów, importach i korektach cen",
        ],
      },
      {
        title: "Przejęcie strony po innym wykonawcy",
        text: "Często przejmujemy strony, do których klient nie ma pełnych dostępów albo nie wie, co w nich jest zainstalowane. Zaczynamy od audytu: wersje, wtyczki, kopie, zabezpieczenia, stan hostingu. Porządkujemy dostępy, usuwamy nieużywane wtyczki i dopiero potem obejmujemy stronę stałą opieką.",
        bullets: [
          "audyt techniczny i bezpieczeństwa na start",
          "uporządkowanie dostępów: WordPress, hosting, domena, poczta",
          "usunięcie nieużywanych wtyczek, motywów i kont użytkowników",
          "oczyszczenie po włamaniu, jeśli strona była zainfekowana",
          "migracja na lepszy hosting, jeśli obecny jest zbyt wolny lub niestabilny",
        ],
      },
      {
        title: "Od czego zależy koszt opieki nad stroną",
        text: "Opieka jest rozliczana miesięcznym abonamentem, którego wysokość zależy od złożoności strony i puli godzin na zmiany. Prosta strona firmowa potrzebuje mniej uwagi niż sklep z integracjami i codziennym ruchem. Zakres ustalamy tak, żeby odpowiadał realnym potrzebom, bez płacenia za nieużywane godziny.",
        bullets: [
          "strona firmowa czy sklep WooCommerce z integracjami",
          "liczba wtyczek i integracji do pilnowania",
          "częstotliwość kopii zapasowych i aktualizacji",
          "pula godzin na zmiany i rozwój w miesiącu",
          "czas reakcji na zgłoszenia (standardowy czy priorytetowy)",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje opieka nad stroną WordPress?",
        a: "To miesięczny abonament zależny od złożoności strony i puli godzin na zmiany. Prosta strona firmowa to niższy koszt niż sklep WooCommerce z integracjami. Zakres i cenę ustalamy po bezpłatnej konsultacji i audycie strony.",
      },
      {
        q: "Jak często trzeba aktualizować WordPressa?",
        a: "Aktualizacje bezpieczeństwa warto wdrażać w ciągu kilku dni od wydania, pozostałe co 1–2 tygodnie. Zawsze po wcześniejszej kopii zapasowej i z testem strony po aktualizacji, bo nowe wersje wtyczek potrafią powodować konflikty.",
      },
      {
        q: "Co obejmuje opieka nad sklepem WooCommerce?",
        a: "Wszystko, co opieka nad stroną, plus testy ścieżki zakupowej po aktualizacjach, pilnowanie zgodności z bramką płatności i kurierami, optymalizację bazy danych i monitoring integracji z magazynem. Większe sklepy aktualizujemy najpierw na kopii testowej.",
      },
      {
        q: "Czy przejmiecie stronę, której nie robiliście?",
        a: "Tak. Zaczynamy od audytu i uporządkowania dostępów, usuwamy zbędne wtyczki i sprawdzamy bezpieczeństwo. Dopiero potem obejmujemy stronę stałą opieką. Przejmowaliśmy strony po agencjach, freelancerach i po włamaniach.",
      },
      {
        q: "Co zrobić, gdy strona WordPress została zhakowana?",
        a: "Nie usuwać niczego na ślepo. Najpierw zabezpieczyć dostępy, zrobić kopię obecnego stanu, zidentyfikować wektor ataku, oczyścić pliki i bazę lub odbudować stronę z czystej instalacji. Odbudowywaliśmy strony po włamaniach i spamie SEO, więc wiemy, jak to zrobić bez utraty treści.",
      },
    ],
    related: ["helpdesk-it-dla-firm", "seo-techniczne", "sklepy-internetowe-woocommerce"],
    keywords: [
      "opieka nad stroną WordPress",
      "utrzymanie strony WordPress",
      "opieka nad sklepem WooCommerce",
      "aktualizacje WordPress",
      "zabezpieczenie strony WordPress",
      "administracja WordPress",
    ],
    portfolio: ["WTA Perfekt", "MG Recykling", "Apteki Burchaciński"],
  },

  // 12. Helpdesk IT dla firm
  {
    slug: "helpdesk-it-dla-firm",
    kind: "service",
    parent: "opieka-it-dla-firm",
    title: "Helpdesk IT i stała obsługa informatyczna firm",
    metaTitle: "Helpdesk IT i obsługa informatyczna firm – OlekCodeTech",
    metaDescription:
      "Helpdesk IT i obsługa informatyczna dla małych i średnich firm: wsparcie użytkowników, Microsoft 365, Google Workspace, bezpieczeństwo. Umów konsultację.",
    eyebrow: "Wsparcie IT",
    lead: [
      "Prowadzimy helpdesk IT i stałą obsługę informatyczną dla małych i średnich firm, które nie mają własnego działu IT. Zespół zgłasza problem, my go rozwiązujemy: poczta, która nie działa, dostęp do pliku, konfiguracja nowego laptopa, zablokowane konto, dziwny e-mail, który wygląda na phishing.",
      "Obsługujemy firmy z Wielunia, Sieradza, Łodzi i całej Polski, zdalnie i na miejscu tam, gdzie to konieczne. Poza bieżącym wsparciem porządkujemy środowisko IT: dostępy, licencje, kopie zapasowe, zasady bezpieczeństwa, tak żeby problemów było z czasem mniej.",
    ],
    sections: [
      {
        title: "Dla kogo jest zewnętrzny helpdesk IT",
        text: "Zewnętrzna obsługa IT opłaca się firmom, które mają od kilku do kilkudziesięciu stanowisk i nie potrzebują informatyka na pełen etat, ale potrzebują, żeby ktoś odebrał zgłoszenie dziś, a nie „jak będzie miał chwilę”. Pracujemy z biurami rachunkowymi, kancelariami, firmami handlowymi, produkcyjnymi i jednostkami publicznymi.",
        bullets: [
          "firmy od 5 do 50 stanowisk bez własnego działu IT",
          "biura rachunkowe, kancelarie, agencje, firmy usługowe",
          "firmy produkcyjne i handlowe z biurem i magazynem",
          "jednostki publiczne i organizacje z wymogami dostępności i bezpieczeństwa",
          "firmy, które mają informatyka, ale potrzebują wsparcia w aplikacjach webowych i chmurze",
        ],
      },
      {
        title: "Zakres stałej obsługi informatycznej",
        text: "Obsługa obejmuje wsparcie użytkowników, administrację kontami i narzędziami chmurowymi, dbanie o bezpieczeństwo i kopie zapasowe oraz doradztwo przy zakupach. Zgłoszenia przyjmujemy przez e-mail, telefon lub system ticketowy, a każde ma status i osobę odpowiedzialną.",
        bullets: [
          "wsparcie użytkowników: komputery, drukarki, poczta, dostęp do plików, oprogramowanie",
          "administracja Microsoft 365 / Google Workspace: konta, licencje, grupy, uprawnienia",
          "wdrażanie nowych pracowników i odbieranie dostępów po odejściu",
          "kopie zapasowe stacji roboczych i danych w chmurze",
          "zabezpieczenia: uwierzytelnianie dwuskładnikowe, polityki haseł, antywirus, szkolenia z phishingu",
          "utrzymanie stron, sklepów i systemów webowych w ramach jednej umowy",
        ],
      },
      {
        title: "Jak działa helpdesk: zgłoszenie, reakcja, rozwiązanie",
        text: "Każde zgłoszenie dostaje numer, priorytet i czas reakcji ustalony w umowie. Większość problemów rozwiązujemy zdalnie w ciągu godzin, poważniejsze awarie są eskalowane. Co miesiąc klient dostaje zestawienie zgłoszeń, czasów reakcji i powtarzających się problemów, z rekomendacją, co zmienić, żeby ich nie było.",
        bullets: [
          "zgłoszenie przez e-mail, telefon lub panel (ClickUp)",
          "priorytety: awaria blokująca pracę, problem pilny, zmiana standardowa",
          "zdalna pomoc przez bezpieczne połączenie, wizyta na miejscu w razie potrzeby",
          "baza wiedzy z instrukcjami dla powtarzających się pytań",
          "miesięczny raport ze zgłoszeń i rekomendacjami",
        ],
      },
      {
        title: "Środowiska, które obsługujemy",
        text: "Specjalizujemy się w środowiskach chmurowych i webowych: Microsoft 365, Google Workspace, systemy CRM, aplikacje webowe, strony i sklepy. Współpracujemy ze specjalistami od sieci i sprzętu tam, gdzie potrzebna jest infrastruktura fizyczna, dzięki czemu klient ma jeden punkt kontaktu.",
        bullets: [
          "Microsoft 365: Outlook, Teams, SharePoint, OneDrive, Intune",
          "Google Workspace: Gmail, Drive, Kalendarz, administracja domeną",
          "Windows i macOS na stacjach roboczych",
          "systemy CRM, ERP, fakturowanie, narzędzia projektowe",
          "strony WordPress, sklepy WooCommerce, aplikacje webowe",
          "sieć biurowa, VPN, drukarki i sprzęt we współpracy z partnerami",
        ],
      },
      {
        title: "Ile kosztuje obsługa informatyczna firmy",
        text: "Rozliczamy się miesięcznym abonamentem zależnym od liczby stanowisk, zakresu systemów i gwarantowanego czasu reakcji. Możliwy jest też model godzinowy dla firm, które potrzebują wsparcia sporadycznie. Zakres ustalamy po audycie środowiska, żeby abonament odpowiadał realnym potrzebom.",
        bullets: [
          "liczba użytkowników i stanowisk",
          "zakres: tylko helpdesk czy także administracja chmurą i systemami webowymi",
          "gwarantowany czas reakcji i dostępność poza godzinami pracy",
          "wizyty na miejscu czy obsługa wyłącznie zdalna",
          "jednorazowe uporządkowanie środowiska na start",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje obsługa informatyczna małej firmy?",
        a: "To miesięczny abonament zależny od liczby stanowisk, zakresu systemów i czasu reakcji. Dla firm z kilkoma stanowiskami jest to znacznie taniej niż etat informatyka. Możliwe jest też rozliczenie godzinowe. Zakres ustalamy po bezpłatnej konsultacji.",
      },
      {
        q: "Czym różni się helpdesk IT od outsourcingu IT?",
        a: "Helpdesk to wsparcie użytkowników w bieżących problemach. Outsourcing IT to szersza obsługa: administracja systemami, bezpieczeństwo, kopie, doradztwo i rozwój. Oferujemy oba zakresy w jednej umowie, dopasowane do potrzeb firmy.",
      },
      {
        q: "Jak szybko reagujecie na zgłoszenia?",
        a: "Czas reakcji zależy od priorytetu zgłoszenia i jest zapisany w umowie. Awarie blokujące pracę obsługujemy w pierwszej kolejności, zwykle w ciągu godzin. Standardowe zmiany realizujemy w ustalonym terminie, o którym informujemy przy przyjęciu zgłoszenia.",
      },
      {
        q: "Czy obsługujecie firmy zdalnie?",
        a: "Tak, większość zgłoszeń rozwiązujemy zdalnie przez bezpieczne połączenie, co jest szybsze i tańsze. Dla firm z okolic Wielunia, Sieradza i Łodzi dojeżdżamy na miejsce, gdy problem dotyczy sprzętu lub sieci.",
      },
      {
        q: "Czy pomożecie wdrożyć Microsoft 365 lub Google Workspace?",
        a: "Tak. Wdrażamy i migrujemy pocztę, konfigurujemy domeny, konta, grupy i uprawnienia, a potem administrujemy środowiskiem w ramach obsługi. Pomagamy też wybrać między Microsoft 365 a Google Workspace na podstawie sposobu pracy zespołu.",
      },
    ],
    related: ["opieka-nad-strona-wordpress", "integracje-microsoft-365-sharepoint", "automatyzacja-n8n-make"],
    keywords: [
      "helpdesk IT dla firm",
      "obsługa informatyczna firm",
      "outsourcing IT",
      "wsparcie IT dla małych firm",
      "stała obsługa IT",
      "administracja Microsoft 365",
    ],
    portfolio: ["Komunalne Wieluń", "CRM E-Numerika Biuro Księgowe", "Hurtownia Budowlana Panek"],
  },

  // 13. Integracje Microsoft 365, SharePoint, Power Automate
  {
    slug: "integracje-microsoft-365-sharepoint",
    kind: "service",
    parent: "integracje-systemow-it",
    title: "Integracje Microsoft 365, SharePoint i Power Automate",
    metaTitle: "Integracje Microsoft 365 i SharePoint – OlekCodeTech",
    metaDescription:
      "Wdrażamy i integrujemy Microsoft 365: SharePoint, Power Automate. Obiegi dokumentów, listy, formularze, automatyzacje bez ręcznej pracy. Umów konsultację.",
    eyebrow: "Microsoft 365",
    lead: [
      "Projektujemy integracje i automatyzacje w środowisku Microsoft 365: porządkujemy SharePoint, budujemy obiegi w Power Automate, łączymy Outlook, Teams i Excel z systemami spoza Microsoftu. Pracujemy z firmami, które mają licencje Microsoft 365, ale używają z nich głównie poczty.",
      "Efektem jest środowisko, w którym dokumenty mają jedno miejsce i wersje, akceptacje nie krążą mailami, a dane z formularzy i systemów zewnętrznych trafiają tam, gdzie zespół ich szuka. Bez dodatkowych licencji, na tym, co firma już ma.",
    ],
    sections: [
      {
        title: "Co można zautomatyzować w Microsoft 365",
        text: "Większość firm wykorzystuje ułamek możliwości licencji Microsoft 365. SharePoint, Power Automate, Forms i Listy pozwalają zbudować obiegi dokumentów, rejestry i proste aplikacje bez kupowania osobnych narzędzi. Zaczynamy od procesów, które najbardziej obciążają zespół: akceptacje, wnioski, rejestry, raporty.",
        bullets: [
          "obieg akceptacji faktur, umów, wniosków urlopowych i zakupowych",
          "rejestry w Listach SharePoint zamiast arkuszy rozsyłanych mailem",
          "formularze Microsoft Forms z automatycznym zapisem i powiadomieniami",
          "automatyczne tworzenie folderów projektowych i nadawanie uprawnień",
          "raporty cykliczne z Excela i SharePointa do Teams lub Outlooka",
          "przypomnienia o terminach: umowy, przeglądy, certyfikaty, szkolenia",
        ],
      },
      {
        title: "Porządkowanie SharePoint i zarządzanie dokumentami",
        text: "SharePoint bez struktury szybko zamienia się w drugi dysk sieciowy, tylko wolniejszy. Projektujemy witryny, biblioteki i metadane pod sposób pracy firmy: kto czego szuka, kto może edytować, co musi mieć wersjonowanie i retencję. Migrujemy dane z dysków sieciowych, Dropboxa i Google Drive, zachowując uprawnienia.",
        bullets: [
          "struktura witryn: działy, projekty, klienci, dokumentacja",
          "metadane i widoki zamiast głębokich drzew folderów",
          "uprawnienia oparte na grupach, nie na osobach",
          "wersjonowanie, zatwierdzanie i retencja dokumentów",
          "migracja z dysków sieciowych, Google Drive, Dropbox",
          "integracja z Teams: kanały powiązane z bibliotekami",
        ],
      },
      {
        title: "Power Automate: obiegi i integracje z systemami zewnętrznymi",
        text: "Power Automate łączy aplikacje Microsoft 365 między sobą i z setkami systemów zewnętrznych. Budujemy przepływy z obsługą błędów, logowaniem i jasnymi właścicielami, a tam, gdzie Power Automate nie wystarcza lub jest za drogi przy dużych wolumenach, łączymy go z n8n lub własnym kodem przez Microsoft Graph API.",
        bullets: [
          "przepływy zatwierdzeń z Teams i Outlook, z historią decyzji",
          "integracja z CRM, systemem fakturowym, stroną WWW przez konektory lub API",
          "Microsoft Graph API dla operacji, których nie ma w konektorach",
          "połączenie z n8n przy dużych wolumenach lub nietypowej logice",
          "monitoring przepływów i powiadomienia o błędach",
        ],
      },
      {
        title: "Jak wdrażamy integracje w Microsoft 365",
        text: "Zaczynamy od przeglądu obecnego środowiska i rozmowy z osobami, które faktycznie wykonują proces. Potem projektujemy strukturę i przepływy, budujemy je na witrynie testowej i uruchamiamy z grupą pilotażową. Zespół dostaje instrukcje i krótkie szkolenie, a my zostajemy jako wsparcie administracyjne.",
        bullets: [
          "audyt środowiska M365: licencje, witryny, uprawnienia, istniejące przepływy",
          "warsztat z użytkownikami i mapa procesów",
          "projekt struktury SharePoint i przepływów Power Automate",
          "wdrożenie pilotażowe i korekty",
          "szkolenie, dokumentacja, administracja po wdrożeniu",
        ],
      },
      {
        title: "Co wpływa na koszt wdrożenia Microsoft 365",
        text: "Koszt zależy od liczby procesów do zautomatyzowania, ilości danych do migracji i tego, czy potrzebne są integracje spoza ekosystemu Microsoft. Prosty obieg akceptacji to kilka dni pracy, porządkowanie SharePointa dla całej firmy z migracją to projekt na tygodnie. Wszystko działa na licencjach, które firma już ma, więc nie ma dodatkowych kosztów narzędzi.",
        bullets: [
          "liczba procesów i przepływów do zbudowania",
          "wielkość i stan danych do migracji na SharePoint",
          "integracje z systemami spoza Microsoft 365",
          "liczba użytkowników i zakres szkoleń",
          "administracja po wdrożeniu w ramach obsługi IT",
        ],
      },
    ],
    faq: [
      {
        q: "Czy do automatyzacji w Microsoft 365 potrzebne są dodatkowe licencje?",
        a: "W większości przypadków nie. SharePoint, Power Automate (standardowe konektory), Forms i Listy są w planach Business Basic, Standard i Premium. Konektory premium lub duże wolumeny mogą wymagać dodatkowej licencji Power Automate; mówimy o tym na etapie projektu.",
      },
      {
        q: "Co to jest Power Automate i do czego służy?",
        a: "To narzędzie Microsoftu do budowania automatycznych przepływów: gdy coś się wydarzy (nowy plik, formularz, e-mail), wykonaj serię kroków (zapisz, powiadom, poproś o akceptację). Służy do obiegów dokumentów, powiadomień i łączenia aplikacji M365 z systemami zewnętrznymi.",
      },
      {
        q: "SharePoint czy OneDrive – gdzie trzymać dokumenty firmowe?",
        a: "OneDrive to prywatna przestrzeń pracownika, SharePoint to wspólna przestrzeń firmy z uprawnieniami, wersjonowaniem i retencją. Dokumenty firmowe powinny być w SharePoint, OneDrive służy do roboczych plików i synchronizacji bibliotek na komputer.",
      },
      {
        q: "Czy można połączyć Microsoft 365 z systemem spoza Microsoftu?",
        a: "Tak. Power Automate ma setki konektorów (CRM, fakturowanie, WordPress, Slack), a dla systemów bez konektora używamy REST API, Microsoft Graph lub n8n. Łączyliśmy M365 m.in. ze stronami WWW, formularzami i systemami dedykowanymi.",
      },
      {
        q: "Ile trwa wdrożenie SharePoint w firmie?",
        a: "Prosta struktura witryn z migracją danych to kilka tygodni, zależnie od ilości dokumentów i liczby działów. Obiegi w Power Automate dokładamy etapami, zaczynając od tego, który daje największą oszczędność czasu.",
      },
    ],
    related: ["integracje-api-crm-erp", "automatyzacja-n8n-make", "helpdesk-it-dla-firm"],
    keywords: [
      "integracje Microsoft 365",
      "wdrożenie SharePoint",
      "Power Automate automatyzacja",
      "obieg dokumentów SharePoint",
      "Microsoft 365 dla firm",
      "automatyzacja Microsoft 365",
    ],
    portfolio: ["CRM E-Numerika Biuro Księgowe", "oVATowana | Usługi Księgowe", "WelcomeFinance"],
  },

  // 14. Integracje API, CRM, ERP
  {
    slug: "integracje-api-crm-erp",
    kind: "service",
    parent: "integracje-systemow-it",
    title: "Integracje API, CRM i ERP – synchronizacja danych między systemami",
    metaTitle: "Integracje API, CRM i ERP – OlekCodeTech",
    metaDescription:
      "Integrujemy systemy przez API: CRM, ERP, sklep, magazyn, fakturowanie. Synchronizacja danych bez ręcznego przepisywania. Umów bezpłatną konsultację.",
    eyebrow: "Integracje API",
    lead: [
      "Budujemy integracje API, które łączą systemy używane w firmie: CRM z fakturowaniem, sklep z magazynem i ERP, formularze z bazą klientów, systemy branżowe ze stroną WWW. Dane są przesyłane automatycznie, według ustalonych reguł, z kontrolą błędów i logiem każdej operacji.",
      "Pracujemy z firmami handlowymi, produkcyjnymi i usługowymi z całej Polski. Programujemy integracje w PHP, Node.js i TypeScript, korzystamy z REST API, webhooków i narzędzi takich jak n8n, a przy systemach bez API budujemy własne łączniki.",
    ],
    sections: [
      {
        title: "Jakie systemy integrujemy",
        text: "Najczęstsze zlecenia to połączenie sklepu internetowego z zapleczem firmy: magazynem, hurtownią, fakturowaniem i kurierami. Drugą grupą są integracje CRM z narzędziami sprzedaży i marketingu. Trzecią integracje stron WWW z systemami branżowymi, np. pobieranie ofert, cenników lub realizacji z zewnętrznej bazy.",
        bullets: [
          "sklepy: WooCommerce, PrestaShop, Shoper z magazynem, hurtownią, ERP",
          "CRM: HubSpot, Pipedrive, Bitrix24, Livespace, systemy dedykowane",
          "ERP i fakturowanie: Comarch Optima, Subiekt, wFirma, Fakturownia, inFakt",
          "logistyka: Furgonetka, InPost, Apaczka, API kurierów",
          "płatności: Przelewy24, PayU, Tpay, Stripe",
          "Microsoft 365, Google Workspace, arkusze, bazy danych, systemy branżowe",
        ],
      },
      {
        title: "Synchronizacja danych między systemami: jak to działa",
        text: "Integracja to nie tylko „przesłanie danych”. Trzeba ustalić, który system jest źródłem prawdy dla każdej informacji, co się dzieje przy konflikcie, jak często synchronizować i co robić, gdy jeden z systemów jest niedostępny. Projektujemy te reguły na początku, bo to one decydują, czy integracja będzie działać stabilnie po roku.",
        bullets: [
          "mapowanie pól między systemami i reguły transformacji danych",
          "kierunek synchronizacji: jednostronna, dwustronna, z systemem nadrzędnym",
          "tryb: w czasie rzeczywistym (webhooki) lub cykliczny (harmonogram)",
          "obsługa błędów: kolejki, ponowienia, powiadomienia, log operacji",
          "deduplikacja i walidacja danych przed zapisem",
          "bezpieczeństwo: tokeny, uprawnienia minimalne, szyfrowanie",
        ],
      },
      {
        title: "Integracje WooCommerce i stron WWW z systemami firmy",
        text: "Dla sklepów budujemy własne wtyczki WordPress, które komunikują się z API magazynu lub ERP: pobierają stany i ceny, wysyłają zamówienia, aktualizują statusy wysyłki. Dla stron firmowych integrujemy treści z systemów zewnętrznych, np. automatyczne publikowanie realizacji, cenników lub ofert pracy. W jednym ze sklepów elektrycznych zintegrowaliśmy stany z zewnętrznym magazynem przez API, w innym zbudowaliśmy własny silnik rezerwacji połączony z płatnościami i kurierem.",
        bullets: [
          "własne wtyczki WordPress / WooCommerce pod API klienta",
          "synchronizacja stanów, cen i produktów z hurtownią lub ERP",
          "eksport zamówień do systemu magazynowego i fakturowego",
          "statusy wysyłki i numery śledzenia w panelu zamówienia",
          "publikowanie treści na stronie z systemów zewnętrznych przez REST API",
        ],
      },
      {
        title: "Jak prowadzimy projekt integracji",
        text: "Zaczynamy od analizy dokumentacji API obu systemów i sprawdzenia, czy udostępniają potrzebne operacje. To etap, który najczęściej ujawnia ograniczenia: brak webhooków, limity zapytań, niepełne dane. Potem projektujemy przepływ, budujemy integrację na środowisku testowym i uruchamiamy ją równolegle z obecnym procesem.",
        bullets: [
          "analiza API i dokumentacji, test dostępu i limitów",
          "projekt przepływu danych, mapowania i obsługi wyjątków",
          "implementacja w PHP / Node.js / n8n z logowaniem operacji",
          "testy na danych testowych i okres równoległy",
          "wdrożenie produkcyjne, monitoring, dokumentacja",
          "utrzymanie: reakcja na zmiany w API łączonych systemów",
        ],
      },
      {
        title: "Co wpływa na koszt integracji systemów",
        text: "Koszt zależy głównie od jakości API łączonych systemów i złożoności reguł synchronizacji. Dwa systemy z dobrą dokumentacją i webhookami łączy się szybko. System bez API, z eksportem tylko do CSV, wymaga budowy łącznika i obsługi wyjątków. Wycenę przedstawiamy po analizie dokumentacji, zwykle z podziałem na etapy.",
        bullets: [
          "liczba systemów i kierunków synchronizacji",
          "jakość API: dokumentacja, webhooki, limity, stabilność",
          "złożoność mapowania danych i reguł biznesowych",
          "wolumen danych i wymagany czas synchronizacji",
          "zakres monitoringu i utrzymania po wdrożeniu",
        ],
      },
    ],
    faq: [
      {
        q: "Co to jest integracja API?",
        a: "To połączenie dwóch systemów tak, żeby wymieniały dane automatycznie przez interfejs programistyczny (API), bez ręcznego eksportu i importu. Na przykład zamówienie ze sklepu samo trafia do programu magazynowego, a stan magazynu wraca do sklepu.",
      },
      {
        q: "Ile kosztuje integracja sklepu z systemem magazynowym lub ERP?",
        a: "Zależy od tego, czy oba systemy mają dobre API i jak złożone są reguły (warianty, ceny indywidualne, wiele magazynów). Prosta synchronizacja stanów to kilka dni pracy, pełna integracja zamówień, faktur i wysyłek to projekt na tygodnie. Wyceniamy po analizie dokumentacji API.",
      },
      {
        q: "Czy można zintegrować system, który nie ma API?",
        a: "Zwykle tak, choć jest to trudniejsze. Korzystamy z eksportów plików, bezpośredniego dostępu do bazy danych lub automatyzacji interfejsu. Ustalamy też, czy nie taniej będzie zastąpić taki system innym, który ma API.",
      },
      {
        q: "Jak zabezpieczacie dane przesyłane między systemami?",
        a: "Używamy szyfrowanych połączeń HTTPS, tokenów z minimalnymi uprawnieniami, rotacji kluczy i logowania operacji. Dane nie są przechowywane dłużej niż to konieczne, a integracje działają na serwerach w UE.",
      },
      {
        q: "Co się dzieje, gdy jeden z systemów zmieni API?",
        a: "Integracje monitorujemy i reagujemy na błędy, zanim zauważy je użytkownik. W ramach utrzymania aktualizujemy łączniki po zmianach API u dostawców. Każda integracja ma dokumentację, więc można ją też przekazać innemu zespołowi.",
      },
    ],
    related: ["sklepy-internetowe-woocommerce", "automatyzacja-n8n-make", "integracje-microsoft-365-sharepoint"],
    keywords: [
      "integracje API",
      "integracja CRM z ERP",
      "synchronizacja danych między systemami",
      "integracja WooCommerce z ERP",
      "integracja sklepu z magazynem",
      "integracje systemów IT",
    ],
    portfolio: ["RAV - Sklep elektryczny", "Wypożycz Sukienkę", "PowerLAB – chiptuning i serwis AdBlue"],
  },
];

export const getServiceLanding = (slug: string) => serviceLandings.find((l) => l.slug === slug);
