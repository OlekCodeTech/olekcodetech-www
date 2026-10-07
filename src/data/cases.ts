import type { CaseStudy } from "./types";

/**
 * Case studies realizacji – /portfolio/<slug>/.
 * `portfolioTitle` musi być dokładnym tytułem wpisu z src/data/portfolio.ts
 * (stamtąd bierze się obrazek i link).
 */
export const cases: CaseStudy[] = [
  {
    slug: "wta-perfekt-sklep-internetowy",
    client: "WTA Perfekt Sp. z o.o.",
    title:
      "Sklep internetowy z ponad 1000 produktów i ujednoliconymi opisami – WTA Perfekt",
    metaTitle: "WTA Perfekt – sklep z 1000+ produktów | Case study",
    metaDescription:
      "Jak zbudowaliśmy i rozwijamy katalog B2B WTA Perfekt: ponad 1000 produktów, ujednolicone opisy, powiązane produkty, sortowanie, blog i SEO na WooCommerce.",
    portfolioTitle: "WTA Perfekt",
    url: "https://wtaperfekt.pl",
    type: "sklep",
    industry: "Hurtownia środków czystości i wyposażenia dla firm",
    location: "Tarczyn / Rozalin",
    year: "2026",
    summary:
      "WTA Perfekt to hurtownia profesjonalnej chemii, papierów, maszyn czyszczących i wyposażenia dla firm, gastronomii i obiektów. Zbudowaliśmy katalog na WooCommerce z Elementor Pro, a potem przez kilka miesięcy rozwijaliśmy go w trybie opieki: ujednoliciliśmy opisy wszystkich produktów, dołożyliśmy kurowane „Powiązane produkty”, ustawiliśmy kolejność w kategoriach, uporządkowaliśmy formularze i poczty, uruchomiliśmy blog poradnikowy i stronę pod zamienniki Tork/Katrin.",
    challenge: [
      "Katalog liczył ponad 1000 produktów o bardzo różnej jakości opisów: część miała kilka zdań, część tylko nazwę. Klient chciał jednego wzoru dla całego asortymentu (opis, zastosowanie, cechy, sposób użycia, właściwości, opakowanie) i zero zmyślonych danych – braki miały być doszukane u producentów albo zgłoszone do potwierdzenia.",
      "Do tego dochodziły typowe problemy rozwijanego sklepu: losowo dobierane produkty powiązane, alfabetyczna kolejność w kategoriach, formularze wysyłające zapytania na niewłaściwy adres, brak rekordów SPF/DMARC i brak treści, które mogłyby pozycjonować sklep na frazy branżowe.",
    ],
    scope: [
      "Sklep-katalog na WooCommerce + Elementor Pro (tryb ofertowy, zapytania przez formularze zamiast koszyka), hosting Hostinger z LiteSpeed Cache.",
      "Ujednolicenie opisów wszystkich 1041 produktów według wzoru klienta: opis główny z sekcjami + krótki opis pod meta description; pipeline z automatyczną kontrolą liczb (każda wartość w nowym opisie musi mieć pokrycie w źródle).",
      "Raporty braków dla klienta: rozbieżności nazwa vs opis, prawdopodobne duplikaty, brakujące dane o opakowaniu zbiorczym – do decyzji, nie do zgadywania.",
      "Sekcja „Powiązane produkty” oparta na ręcznie kurowanych upsellach dla całego katalogu (komplementarne + z tej samej kategorii, z preferencją marki) zamiast losowego doboru WooCommerce.",
      "Kolejność produktów w kategoriach ustawiona przez menu_order według rodzaju i producenta, ze skryptem do przeliczenia po dodaniu nowych pozycji.",
      "Naprawa formularzy (adres docelowy, nadawca, reply-to), rekordy SPF i DMARC dla domeny, globalne wyłączenie komentarzy.",
      "Baner cookies zgodny z Consent Mode v2 wstrzyknięty przez Elementor Custom Code, bez dodatkowych wtyczek.",
      "Strona i sekcje FAQ pod zamienniki Tork/Katrin z danymi strukturalnymi FAQPage, meta Rank Math ustawiane przez REST API.",
      "Blog poradnikowy publikowany co tydzień (chemia profesjonalna, HACCP, maszyny, worki, odświeżacze) z grafiką i postem na Facebooka.",
    ],
    stack: [
      "WordPress",
      "WooCommerce",
      "Elementor Pro",
      "Rank Math SEO PRO",
      "WP REST API",
      "Python",
      "LiteSpeed Cache",
    ],
    results: [
      "Cały katalog ma dziś opisy w jednej strukturze oraz krótkie opisy, z których Rank Math buduje meta description. Każda strona produktu pokazuje dobrane ręcznie produkty komplementarne, a listy w kategoriach układają się według rodzaju i producenta – tak, jak klient prezentuje ofertę handlowcom.",
      "Zapytania z formularzy trafiają na skrzynkę klienta, a sklep ma proces na dodawanie nowych produktów (opis według wzoru, upselle, sortowanie) i regularny blog, który systematycznie poszerza widoczność na frazy branżowe.",
    ],
    services: [
      "stronywww-aplikacje",
      "seo-content-marketing",
      "opieka-it-dla-firm",
      "automatyzacja-procesow-biznesowych",
    ],
    landings: [
      "sklepy-internetowe-woocommerce",
      "content-marketing-b2b",
      "opieka-nad-strona-wordpress",
    ],
  },
  {
    slug: "ms-nadruki-sklep-z-nadrukami",
    client: "MS Nadruki",
    title:
      "Sklep z nadrukami: kreator projektów, katalog dla firm i gotowe wzory – MS Nadruki",
    metaTitle: "MS Nadruki – sklep z nadrukami i kreator | Case study",
    metaDescription:
      "Sklep msnadruki.pl na WooCommerce: kreator nadruku, katalog odzieży firmowej w trybie wyceny, ponad 200 produktów z gotowymi wzorami, płatności i wydajność.",
    portfolioTitle: "MS Nadruki",
    url: "https://msnadruki.pl",
    type: "sklep",
    industry: "Nadruki i haft na odzieży, gadżety reklamowe",
    location: "Wójcin",
    year: "2026",
    summary:
      "MS Nadruki łączy trzy modele sprzedaży w jednym sklepie: kreator własnego nadruku (Fancy Product Designer), katalog odzieży firmowej pod haft i nadruk w trybie zapytania o wycenę oraz sklep detaliczny z gotowymi wzorami na koszulkach, kubkach i torbach. Zbudowaliśmy i skonfigurowaliśmy wszystkie trzy gałęzie, uporządkowaliśmy strony prawne, formularze, cookies i wydajność.",
    challenge: [
      "Sklep startował z szablonu demo: angielskie strony prawne, formularze wysyłające na nieistniejące adresy, waluta w dolarach, puste FAQ z „lorem ipsum”. Klient potrzebował gałęzi B2B bez cen (wycena indywidualna) i równolegle normalnego e-commerce z cenami i koszykiem – na tym samym motywie, który wymusza przycisk „Dodaj do koszyka” nawet przy pustej cenie.",
      "Gotowe wzory istniały tylko jako duże pliki PNG w folderach Google Drive (kategoria → wzór → makiety w kolorach), bez listy produktów, wariantów ani zdjęć w rozmiarze nadającym się na stronę.",
    ],
    scope: [
      "Katalog „Dla firm”: 35 produktów odzieży w trybie wyceny (typ external, przycisk „Zapytaj o wycenę” zamiast koszyka), kategorie, filtry haft/nadruk i płeć, formularz ofertowy z automatycznym podstawianiem produktu i koloru.",
      "Siatka kolorów na stronach produktów z lightboxem (Fancybox) i przyciskiem wyceny w wybranym kolorze; ujednolicone miniatury i wersja mobilna.",
      "Sklep „Gotowe projekty”: ponad 200 produktów wariantowych (rozmiar × kolor, zdjęcie wariantu według koloru) zbudowanych skryptami prosto z Google Drive – skalowanie grafik, upload mediów, tworzenie produktów i wariantów przez WooCommerce REST API.",
      "Konfiguracja sprzedaży: strefy i stawki dostawy, dane sprzedawcy, maile transakcyjne, regulamin podpięty w checkoucie, polityki prywatności i zwrotów pod model produktów personalizowanych.",
      "Własny baner cookies oparty na API WooCommerce Order Attribution (opt-in, bez wtyczki), przycisk ponownego otwarcia, wersja mobilna.",
      "Wydajność: aktywacja i weryfikacja LiteSpeed Cache (czas odpowiedzi serwera z cache spadł z ok. 1 s do ok. 0,2 s), wykluczenia koszyka i checkoutu.",
      "Naprawa awarii koszyka po aktualizacji WooCommerce (nieaktualny JS w CDN) i trwałe zabezpieczenie wersjonowaniem skryptów w mu-pluginie.",
      "SEO: meta tytuły i opisy Rank Math dla stron, kategorii i produktów ustawiane przez REST API; menu dwupoziomowe i osobne filtry dla każdej gałęzi sklepu.",
      "Instrukcja PDF dla klienta, jak samodzielnie dodawać odzież do katalogu firmowego.",
    ],
    stack: [
      "WordPress",
      "WooCommerce",
      "Fancy Product Designer",
      "Elementor Pro",
      "Contact Form 7",
      "Rank Math SEO",
      "LiteSpeed Cache",
      "Python",
    ],
    results: [
      "Sklep działa w trzech trybach naraz: klient firmowy przegląda katalog i wysyła zapytanie z wybranym modelem i kolorem, klient detaliczny kupuje gotowy wzór z wyborem rozmiaru i koloru, a osoba z własnym projektem korzysta z kreatora. Płatności Przelewy24 i InPost są podpięte, regulamin akceptowany w checkoucie.",
      "Nowe wzory dodajemy tym samym potokiem z Google Drive, a klient sam dokłada odzież do katalogu firmowego według instrukcji. Sklep ma poprawne strony prawne, baner cookies i cache, więc jest gotowy na skoki ruchu z kampanii i współprac z twórcami.",
    ],
    services: [
      "stronywww-aplikacje",
      "automatyzacja-procesow-biznesowych",
      "opieka-it-dla-firm",
      "seo-content-marketing",
    ],
    landings: ["sklepy-internetowe-woocommerce", "opieka-nad-strona-wordpress"],
  },
  {
    slug: "ijk-transport-strona-i-merch",
    client: "IJK Transport – Krzysztof Maślanka",
    title:
      "Strona twórcy i sklep z merchem dla 500 tys. obserwujących – IJK Transport",
    metaTitle: "IJK Transport – strona i merch twórcy | Case study",
    metaDescription:
      "Landing page dla twórcy IJK Transport i kolekcja merchu (koszulki, kubki, torby) w sklepie WooCommerce z panelem sprzedaży dla klienta. Jak to zbudowaliśmy.",
    portfolioTitle: "IJK Transport – Krzysztof Maślanka",
    url: "https://ijkmaslanka.pl/",
    type: "sklep",
    industry: "Twórca internetowy, branża transportowa",
    year: "2026",
    summary:
      "Krzysztof Maślanka (IJK Transport) prowadzi profil o tematyce truckerskiej z około 500 tysiącami obserwujących na Facebooku. Przygotowaliśmy stronę twórcy z mocną typografią i klimatem naklejek oraz kolekcję merchu z jego hasłami, sprzedawaną w sklepie msnadruki.pl – wraz z panelem sprzedaży, do którego klient wchodzi bez logowania do WordPressa.",
    challenge: [
      "Projekt miał dwa cele: wizytówkę twórcy, która oddaje jego styl, i sprzedaż merchu bez budowania osobnego sklepu. Kolekcja musiała wejść do istniejącego sklepu partnera z nadrukami, z własną kategorią, krótkim linkiem dla widzów i gotowością na skoki ruchu po publikacjach.",
      "Grafiki przychodziły partiami z Google Drive w różnych konwencjach nazw, a część produktów klient dodawał samodzielnie w panelu – jako produkty proste bez wariantów, więc na stronie nie dało się wybrać rozmiaru ani koloru.",
    ],
    scope: [
      "Landing page ijkmaslanka.pl: mocna typografia, motyw naklejek, przekierowanie do kolekcji merchu.",
      "Kategoria „IJK Transport” w sklepie msnadruki.pl, wyróżniona w menu, czysta siatka produktów bez filtrów, krótki link msnadruki.pl/ijk.",
      "Koszulki jako produkty wariantowe (rozmiary S–XXL, do 22 kolorów, zdjęcie wariantu wg koloru), wersje dziecięce, kubki, fartuchy, torby jedno- i dwustronne – budowane skryptami z jawnym mapowaniem plik → kolor.",
      "Produkt łączony dorosły + dziecięcy w jednym (atrybut rodzaju odzieży) i podniesienie progu AJAX wariantów WooCommerce w mu-pluginie, żeby listy rozwijane filtrowały się poprawnie.",
      "Naprawa produktów dodanych ręcznie przez klienta: konwersja na wariantowe i dogranie wariantów przez REST API.",
      "Przeróbka kompozytowych grafik kubków na kwadratowe packshoty pod miniatury sklepu.",
      "Panel sprzedaży kolekcji w PHP: logowanie hasłem, dane na żywo z WooCommerce REST API, przychód i sztuki, podział na produkty i dni, bez danych osobowych klientów.",
    ],
    stack: [
      "WordPress",
      "WooCommerce",
      "WooCommerce REST API",
      "PHP",
      "Python",
      "LiteSpeed Cache",
    ],
    results: [
      "Kolekcja jest dostępna pod krótkim linkiem z profilu twórcy, a każde nowe hasło Krzyśka dokładamy tym samym potokiem. Klient widzi sprzedaż swojej kolekcji w osobnym panelu z przyciskiem odświeżania, bez dostępu do panelu sklepu.",
      "Produkty dodawane samodzielnie przez klienta działają jak reszta kolekcji (wybór rozmiaru i koloru), a sklep ma cache i zabezpieczenia na wypadek nagłego ruchu po publikacji.",
    ],
    services: [
      "stronywww-aplikacje",
      "automatyzacja-procesow-biznesowych",
      "integracje-systemow-it",
    ],
    landings: ["sklepy-internetowe-woocommerce", "strony-internetowe-dla-firm"],
  },
  {
    slug: "wypozyczsukienke-platforma-rezerwacji",
    client: "Wypożycz Sukienkę",
    title:
      "Wypożyczalnia sukienek z własnym silnikiem rezerwacji terminowej – Wypożycz Sukienkę",
    metaTitle: "Wypożycz Sukienkę – silnik rezerwacji | Case study",
    metaDescription:
      "Wypożyczalnia na WooCommerce z własnym silnikiem rezerwacji per rozmiar i data, kalendarzem, ok. 700 produktami, migracją produkcyjną, Przelewy24 i Furgonetką.",
    portfolioTitle: "Wypożycz Sukienkę",
    url: "https://wypozyczsukienke.com/",
    type: "sklep",
    industry: "Wypożyczalnia sukienek",
    year: "2026",
    summary:
      "Klientka prowadziła wypożyczalnię na zamkniętej platformie SaaS i chciała własny sklep, w którym sukienka jest rezerwowana na konkretny weekend, w konkretnym rozmiarze. Zbudowaliśmy motyw WordPress z silnikiem rezerwacji terminowej na WooCommerce, przenieśliśmy katalog, zmigrowaliśmy sklep na docelową domenę i hosting oraz podpięliśmy płatności i paczkomaty.",
    challenge: [
      "Standardowy WooCommerce sprzedaje sztuki, a nie terminy. Potrzebna była dostępność liczona per rozmiar i data z uwzględnieniem wysyłki, zwrotu i bufora między wypożyczeniami, bez podwójnych rezerwacji tej samej sukienki na ten sam weekend – także w okresie, gdy stary sklep jeszcze przyjmował zamówienia.",
      "Katalog to około 700 modeli z tabelą rozmiarów i kilkanaście tysięcy zdjęć. Migracja z Hostingera na LH.pl musiała odbyć się bez przestoju i z możliwością natychmiastowego powrotu do starej platformy, a narzędzia do kopii zapasowych nie radziły sobie z rozmiarem danych.",
    ],
    scope: [
      "Własny motyw WordPress (WSR Carlotte) z silnikiem rezerwacji: dostępność per wariant (rozmiar) i data, bufory, wysyłki i zwroty, obsługa blokowego checkoutu (Store API).",
      "Kalendarz rezerwacji w trzech wariantach, REST API dostępności oraz podpowiedzi wyszukiwarki na żywo (własny endpoint).",
      "9 dedykowanych podstron (strona główna, showroom, kalendarz, FAQ i pomoc, sklep, koszyk, zamówienie, konto, kontakt) i markowa strona 404 po zmianie adresów.",
      "Import 736 produktów z eksportu XLSX z atrybutami producenta, koloru i rozmiaru; skrypt re-importu z kopią zapasową i weryfikacją.",
      "Migracja produkcyjna: baza (zrzut, import, search-replace świadomy serializacji), 17,5 tys. zdjęć przeniesionych w kawałkach, domena, certyfikat SSL, przepięcie DNS z punktem rollbacku.",
      "Import 216 aktywnych rezerwacji ze starej platformy jako blokady terminów, z markerami pozwalającymi je cofnąć jednym ruchem.",
      "Panel obsługi: lista rezerwacji z filtrem daty odbioru, statusem realizacji (do wysłania / wysłana / zwrócona), danymi klienta, ręczne dodawanie rezerwacji z rozmiarem, podgląd stanów i dostępności.",
      "Płatności Przelewy24 (w tym BLIK), Furgonetka z mapą paczkomatów, dopiski w mailach i blokada samodzielnego anulowania zamówień.",
      "Poprawki stanów magazynowych pod model wypożyczalni (WooCommerce nie zmniejsza stanu przy zamówieniu), favicon, meta Rank Math.",
    ],
    stack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "WP REST API",
      "Przelewy24",
      "Furgonetka",
      "LiteSpeed Cache",
    ],
    results: [
      "Sklep działa na docelowej domenie wypozyczsukienke.com: klientka rezerwuje konkretną sukienkę w konkretnym rozmiarze na wybrany weekend, płaci online i wybiera paczkomat. Dostępność liczy się z rezerwacji, więc jedna sukienka nie zostanie wypożyczona dwa razy na ten sam termin.",
      "Właścicielka obsługuje wysyłki z jednej listy: filtruje rezerwacje po dacie odbioru, oznacza wysłane i zwrócone, dodaje rezerwacje telefoniczne z rozmiarem. Stara platforma została jako punkt powrotu, poczta nie została naruszona.",
    ],
    services: [
      "stronywww-aplikacje",
      "integracje-systemow-it",
      "automatyzacja-procesow-biznesowych",
    ],
    landings: ["sklepy-internetowe-woocommerce", "integracje-api-crm-erp"],
  },
  {
    slug: "plonio-strona-platformy",
    client: "Plonio.pl",
    title:
      "Strona platformy łączącej klientów z lokalnymi rolnikami – Plonio.pl",
    metaTitle: "Plonio.pl – strona platformy rolniczej | Case study",
    metaDescription:
      "Własny motyw WordPress bez page buildera dla Plonio.pl: sekcja „Jak działa”, katalog sprzedawców, 3 formularze, dokumenty prawne pod App Store i SEO od startu.",
    portfolioTitle: "Plonio.pl",
    url: "https://plonio.pl/",
    type: "strona",
    industry: "Platforma / aplikacja mobilna, lokalna żywność",
    location: "Wrocław",
    year: "2026",
    summary:
      "Plonio to aplikacja łącząca klientów z lokalnymi gospodarstwami, startująca we Wrocławiu. Zbudowaliśmy stronę platformy jako własny motyw WordPress odwzorowujący projekt graficzny 1:1, z interaktywną sekcją „Jak działa Plonio”, katalogiem sprzedawców, formularzami dla trzech grup odbiorców i kompletem dokumentów prawnych wymaganych do publikacji aplikacji w sklepach.",
    challenge: [
      "Strona miała wiernie oddać projekt graficzny i jednocześnie pozostać lekka i łatwa do rozbudowy, bez page buildera. Potrzebna była sekcja pokazująca aplikację krok po kroku na realnych ekranach oraz katalog gospodarstw, który klient uzupełni sam z panelu.",
      "Do weryfikacji aplikacji w App Store i Google Play potrzebne były publiczne regulaminy, polityki prywatności i formularze reklamacyjne – dostarczone jako dokumenty Word, do przeniesienia na stronę w czytelnej formie i z plikami PDF.",
    ],
    scope: [
      "Własny klasyczny motyw WordPress (bez buildu i page buildera), design 1:1 z projektem, ustawienia w Customizerze (m.in. dane kontaktowe).",
      "Interaktywna sekcja „Jak działa Plonio” – 5 kroków na ekranach aplikacji w makiecie telefonu.",
      "Katalog sprzedawców jako własny typ treści z profilami gospodarstw (miasto, działalność, obszar, dni, link), kategorie produktów, galeria.",
      "Trzy formularze: dla kupujących, rolników i punktów odbioru, z konfigurowalnym adresem odbiorcy.",
      "8 podstron dokumentów prawnych (regulaminy, polityki prywatności aplikacji webowej i mobilnej, odstąpienie, reklamacje, lista dostawców) z przyciskami pobrania PDF.",
      "SEO od startu: Rank Math PRO, meta dla wszystkich stron i archiwów, dane strukturalne organizacji, obraz OG, mapa witryny, przekierowanie na https, przygotowanie pod Google Search Console.",
      "Publikacja treści (profile gospodarstw, meta) przez WP REST API; kod motywu w repozytorium GitHub.",
    ],
    stack: [
      "WordPress",
      "PHP",
      "własny motyw",
      "Rank Math SEO PRO",
      "WP REST API",
      "GitHub",
    ],
    results: [
      "Strona plonio.pl prezentuje aplikację i model działania, zbiera zgłoszenia od kupujących, rolników i punktów odbioru oraz pokazuje pierwsze gospodarstwa w katalogu. Komplet dokumentów prawnych jest publicznie dostępny pod stałymi adresami, co było warunkiem publikacji aplikacji.",
      "Klient dodaje kolejne gospodarstwa z panelu, a strona ma ustawione podstawy SEO (meta, dane strukturalne, mapa witryny), więc jest gotowa na skalowanie na kolejne miasta.",
    ],
    services: ["stronywww-aplikacje", "seo-content-marketing"],
    landings: [
      "strony-wordpress-autorski-motyw",
      "strony-internetowe-wroclaw",
      "seo-techniczne",
    ],
  },
  {
    slug: "uni-system-strona-firmowa",
    client: "UNI-System",
    title:
      "Strona firmowa z landingami lokalnymi dla instalatora systemów dozorowania – UNI-System",
    metaTitle: "UNI-System – strona instalatora CCTV | Case study",
    metaDescription:
      "Autorski motyw WordPress dla UNI-System z Zawiercia: oferta, realizacje, landingi lokalne, blog Baza Wiedzy, formularze, opinie Google i SEO ze Schema.org.",
    portfolioTitle: "UNI-System – systemy dozorowania",
    url: "https://systemydozorowania.pl/",
    type: "strona",
    industry: "Monitoring CCTV, alarmy, smart home, kontrola dostępu",
    location: "Zawiercie",
    year: "2026",
    summary:
      "UNI-System montuje monitoring, alarmy, inteligentny dom i kontrolę dostępu w Zawierciu i na Śląsku. Przygotowaliśmy nową identyfikację (nagłówek, logo) i autorski motyw WordPress z ofertą, realizacjami, landingami dla miast i blogiem, a treści publikujemy przez REST API w stałym rytmie.",
    challenge: [
      "Firma potrzebowała strony, która sprzedaje lokalnie: osobne wejścia dla Zawiercia, Katowic i Sosnowca, czytelna oferta ośmiu usług, zdjęcia z montaży jako dowód i blog, który odpowiada na pytania klientów przed telefonem. Wszystko bez page buildera, żeby strona była szybka i łatwa w utrzymaniu.",
    ],
    scope: [
      "Autorski motyw WordPress uni-system (bez Elementora) z nową identyfikacją: nagłówek, logo, kolorystyka.",
      "Własne typy treści: usługi (8 pozycji – alarmy, CCTV, inteligentny dom, kontrola dostępu, sieci, nagłośnienie, oferta dla wspólnot, serwis) i realizacje ze zdjęciami z montaży.",
      "Landingi lokalne: Zawiercie, Katowice, Sosnowiec.",
      "Formularze kontaktowe, opinie Google i mapy na stronie.",
      "Blog Baza Wiedzy: poradniki po 2500–3500 słów z sekcją kosztów, FAQ i danymi strukturalnymi Article + FAQPage; grafiki generowane; skrócone wersje pod wizytówkę Google.",
      "SEO: Rank Math PRO (meta, OG, Schema.org), Google Site Kit, polityki prywatności i RODO.",
      "Publikacja treści i meta przez WP REST API, hosting Hostinger z LiteSpeed Cache.",
    ],
    stack: [
      "WordPress",
      "PHP",
      "własny motyw",
      "Rank Math SEO PRO",
      "Google Site Kit",
      "WP REST API",
      "LiteSpeed Cache",
    ],
    results: [
      "Strona ma osobne wejścia dla trzech miast, pełną ofertę i 12 realizacji ze zdjęciami. Blog rośnie o kolejne poradniki (montaż monitoringu, alarmy, smart home, kontrola dostępu, wideodomofony), a każdy wpis ma wersję pod wizytówkę Google.",
      "Klient nie musi wchodzić w kod: nowe usługi, realizacje i wpisy dodajemy w ustalonym formacie, a dane strukturalne i meta są ustawiane w tym samym procesie.",
    ],
    services: ["stronywww-aplikacje", "seo-content-marketing"],
    landings: [
      "strony-wordpress-autorski-motyw",
      "strony-internetowe-dla-firm",
      "content-marketing-b2b",
    ],
  },
  {
    slug: "powerlab-strona-firmowa",
    client: "PowerLAB",
    title:
      "Strona serwisu chiptuningu i układów AdBlue z realizacjami dodawanymi przez API – PowerLAB",
    metaTitle: "PowerLAB – strona serwisu chiptuningu | Case study",
    metaDescription:
      "Autorski motyw WordPress dla PowerLAB: podstrony usług, realizacje dodawane przez API, blog, landingi pod Google Ads, formularze z reCAPTCHA v3 i wydajność.",
    portfolioTitle: "PowerLAB – chiptuning i serwis AdBlue",
    url: "https://power-lab.pl/",
    type: "strona",
    industry: "Serwis AdBlue, DPF, EGR, chiptuning maszyn rolniczych i ciężarowych",
    year: "2026",
    summary:
      "PowerLAB serwisuje układy oczyszczania spalin i wykonuje chiptuning maszyn rolniczych, budowlanych, ciężarowych i osobowych. Zbudowaliśmy autorski motyw WordPress w stylu inspirowanym motorsportem, z podstronami usług, realizacjami dodawanymi przez API, blogiem oraz landingami pod kampanię Google Ads, którą również przygotowaliśmy.",
    challenge: [
      "Firma ma dużo materiału dowodowego (wykresy z hamowni, zrzuty z testera, zdjęcia maszyn), który przychodzi partiami w archiwach. Ręczne wklepywanie realizacji nie miało sensu – potrzebny był powtarzalny sposób publikacji z galeriami i lightboxem.",
      "Reklama tej branży w Google jest ryzykowna: część fraz grozi zawieszeniem konta. Landingi i kampania musiały rozdzielić chiptuning od serwisu układu spalin i trzymać się bezpiecznego słownictwa.",
    ],
    scope: [
      "Autorski motyw WordPress powerlab-theme (Gutenberg, bez Elementora), design inspirowany motorsportem, wysoka wydajność na Hostinger + LiteSpeed.",
      "Podstrony usług, własny typ treści „realizacja” z taksonomiami operacji i kategorii maszyn.",
      "Realizacje publikowane skryptem z archiwów klienta (idempotentnie, z logiem), lightbox dla wszystkich galerii włączony przez REST API.",
      "Blog: wpisy po 2500–3000 słów z FAQ i danymi strukturalnymi Article + FAQPage, grafiki generowane, meta Rank Math przez REST.",
      "Formularze kontaktowe z reCAPTCHA v3, Google Site Kit.",
      "Dwa landingi pod kampanie: chiptuning maszyn rolniczych oraz serwis DPF/EGR/AdBlue, zbudowane na natywnych klasach motywu.",
      "Kampania Google Ads: pakiet importowy (słowa kluczowe, wykluczenia, reklamy RSA, linki), struktura kampanii i grup, publikacja kampanii w sieci wyszukiwania.",
    ],
    stack: [
      "WordPress",
      "PHP",
      "własny motyw",
      "Gutenberg",
      "Rank Math SEO",
      "WP REST API",
      "Google Ads",
      "reCAPTCHA v3",
    ],
    results: [
      "Strona pokazuje ponad 30 realizacji z galeriami, które klient może powiększyć do wykresów i zrzutów z testera. Kolejne partie realizacji publikujemy tym samym skryptem, a blog pokrywa pytania klientów o AdBlue, DPF, EGR, pomiar mocy i chiptuning.",
      "Kampania Google Ads na chiptuning maszyn rolniczych jest aktywna i kieruje na dedykowany landing; serwis układu spalin ma osobny landing i osobną kampanię z własnym budżetem.",
    ],
    services: [
      "stronywww-aplikacje",
      "seo-content-marketing",
      "automatyzacja-procesow-biznesowych",
    ],
    landings: [
      "strony-wordpress-autorski-motyw",
      "strony-internetowe-dla-firm",
      "content-marketing-b2b",
    ],
  },
  {
    slug: "szyja-hair-academy-sklep",
    client: "SZYJA Hair Academy",
    title:
      "Sklep i strona salonu z integracją Booksy – SZYJA Hair Academy",
    metaTitle: "SZYJA Hair Academy – sklep i Booksy | Case study",
    metaDescription:
      "Strona i sklep WooCommerce dla salonu i akademii koloryzacji SZYJA Hair Academy z Wrocławia: autorski projekt graficzny, integracja Booksy, Local SEO i RODO.",
    portfolioTitle: "SZYJA Hair Academy",
    url: "https://szyjahairacademy.pl/",
    type: "sklep",
    industry: "Salon fryzjerski i akademia koloryzacji",
    location: "Wrocław",
    year: "2026",
    summary:
      "SZYJA Hair Academy to wrocławski salon fryzjerski i akademia koloryzacji. Zaprojektowaliśmy autorską warstwę graficzną i zbudowaliśmy stronę ze sklepem WooCommerce, rezerwacją wizyt przez Booksy i podstawami pozycjonowania lokalnego.",
    challenge: [
      "Marka potrzebowała jednego miejsca, które łączy wizerunek salonu, sprzedaż produktów i zapisy na wizyty oraz szkolenia – bez przepisywania grafiku do strony, bo salon pracuje w Booksy. Większość klientek wchodzi z telefonu, więc wersja mobilna była priorytetem.",
    ],
    scope: [
      "Autorski projekt graficzny i strona na WordPressie pod markę salonu.",
      "Sklep WooCommerce z produktami do pielęgnacji i ofertą akademii.",
      "Integracja z Booksy (rezerwacja wizyt) i kanałami social media.",
      "Local SEO: dane firmy, Wrocław jako lokalizacja, mapy i wizytówka.",
      "Zgodność z RODO: polityki, zgody w formularzach i cookies.",
      "Optymalizacja mobilna i wydajnościowa.",
    ],
    stack: ["WordPress", "WooCommerce", "Booksy", "Elementor", "Rank Math SEO"],
    results: [
      "Klientki rezerwują wizyty i kupują produkty z jednej strony, a salon zarządza grafikiem nadal w Booksy. Strona jest przygotowana pod wyszukiwania lokalne we Wrocławiu i działa poprawnie na telefonie.",
    ],
    services: ["stronywww-aplikacje", "seo-content-marketing"],
    landings: ["sklepy-internetowe-woocommerce", "strony-internetowe-wroclaw"],
  },
  {
    slug: "ds-paliwa-strona-z-cenami-paliw",
    client: "DS Paliwa",
    title:
      "Strona firmowa z panelem aktualizacji cen paliw – DS Paliwa",
    metaTitle: "DS Paliwa – strona z cenami paliw | Case study",
    metaDescription:
      "Autorski motyw WordPress dla DS Paliwa z Wielunia: hero z filmem, panel aktualizacji cen paliw bez kodu, oferta hurtowa, animacje i formularz z reCAPTCHA.",
    portfolioTitle: "DS Paliwa",
    url: "https://www.dspaliwa.wielun.pl/",
    type: "strona",
    industry: "Stacja i hurtownia paliw",
    location: "Wieluń",
    year: "2026",
    summary:
      "DS Paliwa z Wielunia potrzebowało strony, która codziennie pokazuje aktualne ceny paliw i prezentuje ofertę hurtową. Zbudowaliśmy autorski motyw WordPress z hero z filmem i prostym panelem, w którym pracownik stacji zmienia ceny bez dotykania kodu.",
    challenge: [
      "Najważniejszy element strony – ceny paliw – zmienia się nawet codziennie i musi dać się edytować z panelu w kilka sekund, przez osobę nietechniczną. Reszta treści (oferta hurtowa, kontakt, aktualności) też miała być edytowalna bez programisty, a strona lekka mimo wideo w nagłówku.",
    ],
    scope: [
      "Autorski motyw WordPress bez page buildera, dopasowany do identyfikacji stacji.",
      "Hero z filmem w tle i wyraźnym blokiem aktualnych cen paliw.",
      "Panel aktualizacji cen paliw w kokpicie WordPressa – pola per rodzaj paliwa, bez kodu.",
      "Zarządzanie pozostałymi treściami (oferta hurtowa, kontakt, godziny) z poziomu panelu.",
      "Animacje i liczniki na stronie głównej.",
      "Formularz kontaktowy zabezpieczony reCAPTCHA.",
      "Podstawy SEO: meta, dane firmy, lokalizacja Wieluń.",
    ],
    stack: ["WordPress", "PHP", "własny motyw", "reCAPTCHA", "Rank Math SEO"],
    results: [
      "Stacja aktualizuje ceny samodzielnie, a klienci hurtowi i detaliczni widzą je od razu na stronie głównej. Treści ofertowe zmienia klient bez naszego udziału; strona działa szybko mimo wideo w nagłówku.",
    ],
    services: ["stronywww-aplikacje"],
    landings: [
      "strony-wordpress-autorski-motyw",
      "strony-internetowe-wielun",
      "strony-internetowe-dla-firm",
    ],
  },
  {
    slug: "rav-sklep-elektryczny-integracja-magazynu",
    client: "RAV – Usługi Elektryczne",
    title:
      "Sklep elektryczny z ~6000 produktów zintegrowany z magazynem hurtowni – RAV",
    metaTitle: "RAV – sklep elektryczny z integracją | Case study",
    metaDescription:
      "Sklep WooCommerce na własnym motywie dla RAV: ok. 6000 produktów z hurtowni TIM, przebudowa kategorii, pole NIP i rabat B2B w checkoucie, Przelewy24 i SEO.",
    portfolioTitle: "RAV - Sklep elektryczny",
    url: "https://sklep.ravsystems.pl",
    type: "sklep",
    industry: "Hurtownia i usługi elektryczne",
    year: "2026",
    summary:
      "RAV świadczy usługi elektryczne i sprzedaje osprzęt, aparaturę i oświetlenie. Zbudowaliśmy sklep na WooCommerce z własnym motywem rav-shop i integracją z magazynem zewnętrznej hurtowni (TIM), z której pochodzi około 6000 produktów. Potem uporządkowaliśmy kategorie, dołożyliśmy obsługę klientów firmowych w checkoucie i podstawy SEO.",
    challenge: [
      "Import z hurtowni dał tysiące produktów w kilku workowych kategoriach („Inne”, „Zabezpieczenia”), które nie nadawały się do nawigacji. Trzeba było je rozdzielić na sensowną strukturę bez ręcznego klikania każdego produktu.",
      "Sklep używa nowego, blokowego checkoutu WooCommerce, w którym klasyczne haki dodawania pól nie działają – pole NIP i rabat dla firm wymagały innego podejścia. Do tego pojawiały się znikające miniatury na listach, co okazało się problemem po stronie CDN, a nie zdjęć.",
    ],
    scope: [
      "Sklep na WooCommerce z własnym motywem rav-shop (bez Elementora), kod w repozytorium GitHub.",
      "Integracja z API magazynu hurtowni TIM – ok. 6000 produktów ze zdjęciami i stanami; dedykowane wtyczki WordPress.",
      "Przebudowa kategorii: rozbicie „Inne” i „Zabezpieczeń” na 16 podkategorii aparatury (MCB, RCD, RCBO, SPD, styczniki, przekaźniki, PLC, liczniki…) klasyfikacją po nazwach produktów.",
      "Pole NIP z walidacją sumy kontrolnej w blokowym checkoucie, zapis do zamówienia i konta klienta, logika rabatu B2B dla firm z NIP.",
      "Konfiguracja powiadomień e-mail, płatności Przelewy24, wyłączenie komentarzy.",
      "SEO: meta tytuły, opisy i obraz OG dla stron, kategorii i podkategorii przez Rank Math REST; brandowy obraz OG.",
      "Mega-menu kategorii i menu mobilne z ukrywaniem pustych kategorii.",
      "Diagnoza wydajności (CDN + LiteSpeed, HTTP/1.1, dławienie równoległych żądań) i naprawa galerii produktów z wieloma zdjęciami.",
    ],
    stack: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "własny motyw",
      "WooCommerce REST API",
      "Przelewy24",
      "Rank Math SEO PRO",
      "LiteSpeed Cache",
    ],
    results: [
      "Klient prowadzi sklep z pełnym asortymentem hurtowni bez ręcznego wprowadzania produktów, a kategorie odpowiadają temu, jak elektrycy szukają aparatury. Firmy podają NIP w zamówieniu i dostają rabat, a dane trafiają do zamówienia i konta.",
      "Strony i kategorie mają ustawione meta i obrazy do udostępniania; galerie produktów z wieloma zdjęciami działają poprawnie. Zalecenia dotyczące CDN i HTTP/2 przekazaliśmy klientowi do wdrożenia w panelu hostingu.",
    ],
    services: [
      "stronywww-aplikacje",
      "integracje-systemow-it",
      "seo-content-marketing",
    ],
    landings: ["sklepy-internetowe-woocommerce", "integracje-api-crm-erp"],
  },
  {
    slug: "komunalne-wielun-react",
    client: "Przedsiębiorstwo Komunalne Wieluń",
    title:
      "Przepisanie serwisu z Joomli na statyczny React z zachowaniem adresów – Komunalne Wieluń",
    metaTitle: "Komunalne Wieluń – rebuild Joomla → React | Case study",
    metaDescription:
      "Serwis „Wieluń sprzyja ekologii” przepisany z Joomli 3 na statyczny React (Vite): te same adresy, panel WCAG, harmonogramy odbioru i wdrożenie bez przestoju.",
    portfolioTitle: "Komunalne Wieluń",
    url: "https://eko.komunalne.wielun.pl/",
    type: "strona",
    industry: "Przedsiębiorstwo komunalne, sektor publiczny",
    location: "Wieluń",
    year: "2026",
    summary:
      "Serwis projektu ekologicznego Przedsiębiorstwa Komunalnego w Wieluniu działał na starej Joomli 3 z podatnościami. Przepisaliśmy go na statyczną aplikację React, zachowując adresy podstron, materiały (galerie, PDF-y) i panel dostępności, a potem wdrożyliśmy na dotychczasowy hosting bez przerwy w działaniu.",
    challenge: [
      "Strona musiała pozostać pod tymi samymi adresami (są w materiałach drukowanych i wynikach wyszukiwania), łącznie z zagnieżdżonymi linkami generowanymi przez Joomlę. Serwer starej strony blokował standardowe pobieranie, a treści, galerie konkursowe i dokumenty trzeba było przenieść w całości.",
      "Serwis publiczny wymaga dostępności: panel kontrastu i rozmiaru czcionki miał działać tak jak wcześniej. Harmonogramy odbioru odpadów i wyszukiwarka „co, gdzie wrzucić” pochodzą z zewnętrznego systemu i miały zostać osadzone bez zmian.",
    ],
    scope: [
      "Statyczna aplikacja React (Vite + React 18 + react-router) bez bazy i CMS – brak panelu logowania do zaatakowania.",
      "Zachowanie oryginalnych adresów 15 podstron oraz fallback dla starych zagnieżdżonych linków Joomli.",
      "Przeniesienie wszystkich zasobów (galerie, PDF-y, CSS szablonu) 1:1; kopia zapasowa pełnej Joomli i bazy przed migracją.",
      "Panel WCAG (kontrasty, rozmiar czcionki) odtworzony w React.",
      "Osadzenie harmonogramów i wyszukiwarki frakcji z systemu strefamieszkanca.pl, przewodnik po frakcjach i ściąga kolorów w sidebarze.",
      "Redesign: hero z gradientem, widgety „Na skróty”, sticky sidebar, ekran ładowania.",
      "Repozytorium GitHub z demem na GitHub Pages do akceptacji, deploy na home.pl przez FTPS z fallbackiem SPA w .htaccess.",
    ],
    stack: [
      "React 18",
      "Vite",
      "react-router",
      "GitHub Pages",
      "home.pl (FTPS)",
      "Python (deploy)",
    ],
    results: [
      "Serwis działa na statycznych plikach – bez Joomli, bazy i panelu administracyjnego, więc znika główny wektor ataku. Stare linki prowadzą w te same miejsca, panel dostępności i harmonogramy działają jak wcześniej.",
      "Klient zaakceptował wersję na demie przed wdrożeniem; aktualizacja to build i wgranie plików, a główna strona przedsiębiorstwa na tym samym koncie pozostała nienaruszona.",
    ],
    services: ["stronywww-aplikacje", "opieka-it-dla-firm"],
    landings: ["aplikacje-webowe-react-nextjs", "strony-internetowe-wielun"],
  },
  {
    slug: "silverclean-sklep-i-blog",
    client: "SilverClean",
    title:
      "Sklep ze środkami czystości i cotygodniowy blog ekspercki – SilverClean",
    metaTitle: "SilverClean – sklep i blog B2B | Case study",
    metaDescription:
      "Sklep WooCommerce SilverClean z profesjonalną chemią i maszynami sprzątającymi oraz cotygodniowy blog: poradniki z FAQ, dane strukturalne i posty na Facebooku.",
    portfolioTitle:
      "SilverClean | Profesjonalne środki czystości i maszyny sprzątające",
    url: "https://www.silverclean.pl/",
    type: "sklep",
    industry: "Profesjonalne środki czystości, maszyny sprzątające, wynajem",
    year: "2026",
    summary:
      "SilverClean sprzedaje i wynajmuje maszyny czyszczące, profesjonalną chemię oraz systemy dozowników i papierów dla firm. Zbudowaliśmy sklep na WooCommerce z Elementor Pro i prowadzimy dla niego stały content marketing: co tydzień ukazuje się obszerny poradnik z FAQ i danymi strukturalnymi, grafiką oraz postem na Facebooka.",
    challenge: [
      "Klienci B2B (firmy sprzątające, hotele, zakłady) szukają w Google odpowiedzi na konkretne pytania – jaką maszynę wybrać, wynajem czy zakup, mop płaski czy sznurkowy, suszarka czy ręczniki. Sklep potrzebował treści, które odpowiadają na te pytania i prowadzą do produktów oraz stron usług, publikowanych regularnie, bez obciążania zespołu klienta.",
    ],
    scope: [
      "Sklep WooCommerce z Elementor Pro, strony usług (wynajem maszyn, dozowniki Lucart, suszarki do rąk, ręczniki ZZ).",
      "Cotygodniowy wpis blogowy (środy) o długości 2500–2900 słów: nagłówki, tabele, listy, sekcja „Najczęstsze pytania”.",
      "Dane strukturalne Article + FAQPage w każdym wpisie, meta tytuł, opis i fraza kluczowa przez Rank Math REST.",
      "Gęste linkowanie wewnętrzne do stron usług i produktów.",
      "Grafiki wyróżniające generowane pod każdy temat, z opisem alternatywnym.",
      "Krótki post na Facebooka do każdego artykułu.",
      "Opieka techniczna: aktualizacje, zabezpieczenia logowania, konfiguracja SEO.",
    ],
    stack: [
      "WordPress",
      "WooCommerce",
      "Elementor Pro",
      "Rank Math SEO",
      "WP REST API",
      "Python",
    ],
    results: [
      "Blog pokrywa dziś kilkadziesiąt tematów: dobór i wynajem maszyn czyszczących (także lokalnie – Warszawa, Wrocław, Lublin), chemia profesjonalna vs marketowa, dozowniki bezdotykowe, systemy mopowania, dezynfekcja w sezonie infekcyjnym. Każdy wpis kieruje do odpowiednich produktów i usług.",
      "Publikacja działa w stałym rytmie bez udziału zespołu klienta – od wyboru tematu (bez powtórzeń), przez tekst i grafikę, po meta i post w social mediach.",
    ],
    services: [
      "seo-content-marketing",
      "stronywww-aplikacje",
      "opieka-it-dla-firm",
    ],
    landings: [
      "content-marketing-b2b",
      "sklepy-internetowe-woocommerce",
      "opieka-nad-strona-wordpress",
    ],
  },
];

export const getCase = (slug: string) => cases.find((c) => c.slug === slug);
