import type { LandingPage } from "./types";

/**
 * Lokalne strony „programista + miasto” dla Wielunia i sąsiednich miast.
 * Temat: oprogramowanie na zamówienie, automatyzacje i integracje systemów.
 * Każda strona ma własną treść (lokalne branże, inne przykłady, inne akcenty) –
 * to nie są kopie z podmienioną nazwą miasta.
 */
export const devCityLandingsWielun: LandingPage[] = [
  // ---------------------------------------------------------------------------
  // WIELUŃ – siedziba firmy
  // ---------------------------------------------------------------------------
  {
    slug: "programista-wielun",
    kind: "city",
    parent: "aplikacje-dedykowane",
    topic: "dev",
    navLabel: "Programista Wieluń",
    calculator: true,
    title: "Programista Wieluń – oprogramowanie na zamówienie, automatyzacje i integracje dla firm",
    metaTitle: "Programista Wieluń – programy dla firm | OlekCodeTech",
    metaDescription:
      "Programista z Wielunia: programy na zamówienie, automatyzacje i integracje systemów dla firm. Biuro przy ul. Liliowej 3. Umów bezpłatną konsultację 30 min.",
    eyebrow: "Lokalnie · Wieluń i powiat wieluński",
    city: "Wieluń",
    cityLocative: "w Wieluniu",
    lead: [
      "Szukacie programisty w Wieluniu, który przyjdzie do firmy, zobaczy, jak wygląda praca, i napisze program dokładnie pod nią? OlekCodeTech ma siedzibę przy ul. Liliowej 3 w Wieluniu. Od 2019 roku zrealizowaliśmy ponad 50 projektów: aplikacje dla firm, sklepy, integracje i automatyzacje. Nie sprzedajemy pudełkowego systemu – budujemy to, czego faktycznie brakuje w Waszej firmie.",
      "Najczęściej zaczyna się podobnie: zlecenia w zeszycie albo w kilku Excelach, dane przepisywane ręcznie między programami, raport składany co miesiąc przez pół dnia. Programista z Wielunia jest wtedy pod ręką – możemy usiąść obok osoby, która tę pracę wykonuje, i zaproponować narzędzie, które zrobi ją szybciej i bez pomyłek.",
    ],
    sections: [
      {
        title: "Oprogramowanie na zamówienie dla firm z Wielunia",
        text: "Program na zamówienie ma sens wtedy, gdy gotowe narzędzie nie pasuje do tego, jak naprawdę pracujecie, a Excel przestał wystarczać. Budujemy aplikacje działające w przeglądarce – bez instalowania czegokolwiek na komputerach – do których pracownicy logują się z biura, z hali albo z telefonu. Każdy widzi tylko to, czego potrzebuje: handlowiec swoich klientów i oferty, magazynier stany i wydania, właściciel podsumowanie całości. Piszemy w React, Next.js i TypeScript, dane trzymamy w bazie PostgreSQL, a gdy potrzebna jest aplikacja na telefon, robimy ją w React Native na iOS i Androida. Zakres ustalamy z Wami, a nie pod listę funkcji z cennika.",
        bullets: [
          "Aplikacje w przeglądarce dostępne z biura, hali i telefonu",
          "Panele dla pracowników z uprawnieniami dopasowanymi do stanowiska",
          "CRM: klienci, oferty, historia kontaktów, przypomnienia",
          "Systemy zleceń: przyjęcie, realizacja, rozliczenie, statusy",
          "Ewidencja magazynu, wydań i przyjęć",
          "Aplikacje mobilne na iOS i Androida dla pracowników w terenie",
        ],
      },
      {
        title: "Automatyzacja pracy w firmie – programista Wieluń od powtarzalnych zadań",
        text: "Dużo czasu w biurze zjadają czynności, które nie wymagają myślenia, tylko cierpliwości: przepisywanie zamówień z maila do programu, kopiowanie danych z jednego arkusza do drugiego, sprawdzanie co rano tych samych stron i portali, wysyłanie przypomnień. To da się zautomatyzować. Prostsze procesy łączymy w n8n lub Make, do trudniejszych piszemy własne skrypty w Pythonie albo Node.js. Jeśli pracujecie na Microsoft 365, wykorzystujemy Power Automate i SharePoint, które zwykle macie już opłacone. Efekt jest taki, że człowiek sprawdza wynik, zamiast go ręcznie wyklepywać, a raport jest gotowy, zanim ktokolwiek przyjdzie do pracy. Zaczynamy zwykle od jednej, najbardziej uciążliwej czynności.",
        bullets: [
          "Koniec ręcznego przepisywania danych między programami i arkuszami",
          "Raporty PDF i Excel generowane automatycznie, o stałej porze",
          "Pobieranie danych ze stron, portali i plików od kontrahentów",
          "Powiadomienia e-mail i SMS o zamówieniach, terminach i zaległościach",
          "Scenariusze n8n i Make albo własne skrypty w Pythonie",
          "Obieg dokumentów w Microsoft 365, SharePoint i Google Workspace",
        ],
      },
      {
        title: "Integracje systemów: sklep, magazyn, kurierzy i księgowość",
        text: "W wielu wieluńskich firmach działa kilka programów, które nic o sobie nie wiedzą: sklep internetowy osobno, program magazynowy osobno, kurier osobno. Ktoś musi więc poprawiać stany, przepisywać adresy do listów przewozowych i ręcznie wystawiać dokumenty. Łączymy te systemy. Dla sklepu elektrycznego RAV zbudowaliśmy integrację WooCommerce z magazynem w Subiekcie nexo, która synchronizuje stany i ceny. Podłączamy Allegro, płatności Przelewy24, przewoźników takich jak InPost, DPD czy Furgonetka, a jeśli program udostępnia API albo choćby eksport do pliku – również systemy branżowe, których używacie od lat. Dotychczasowe programy zostają na swoim miejscu, a pracownicy nie muszą uczyć się niczego od nowa.",
        bullets: [
          "Sklep WooCommerce połączony z programem magazynowym (np. Subiekt nexo)",
          "Synchronizacja stanów i cen między sklepem, Allegro i magazynem",
          "Etykiety kurierskie InPost, DPD i Furgonetka bez przepisywania adresów",
          "Płatności online Przelewy24 z automatyczną zmianą statusu zamówienia",
          "Przekazywanie danych sprzedaży do programu księgowego",
          "Połączenie z dowolnym systemem przez API lub wymianę plików",
        ],
      },
      {
        title: "Dla jakich firm z Wielunia i powiatu wieluńskiego piszemy programy",
        text: "Wieluń to zakłady produkcyjne, hurtownie, firmy transportowe, przetwórstwo rolne, usługi i jednostki komunalne. W każdej z tych branż wygląda to inaczej. Produkcja potrzebuje zwykle porządku w zleceniach i wiedzy, na jakim etapie jest zamówienie. Hurtownia – aktualnych stanów i zamówień od stałych odbiorców składanych przez internet. Transport – planowania aut i kontaktu z kierowcami; rozwijamy system TMS dla firmy transportowej, ze zleceniami, planem załadunku i aplikacją mobilną dla kierowców. Dla Przedsiębiorstwa Komunalnego w Wieluniu zbudowaliśmy serwis w React, a dla lokalnej stacji DS Paliwa stronę, która pokazuje aktualne ceny paliw. Firmom usługowym najczęściej pomagają kalendarz zleceń i automatyczne przypomnienia.",
        bullets: [
          "Produkcja: zlecenia, etapy realizacji, karty pracy, terminy",
          "Hurtownie: stany magazynowe i panel zamówień dla odbiorców",
          "Transport: zlecenia, kalendarz dostępności aut, aplikacja dla kierowców",
          "Przetwórstwo rolne: ewidencja dostaw, partii i rozliczeń z dostawcami",
          "Usługi: kalendarz zleceń, przypomnienia dla klientów, rozliczenia",
          "Jednostki komunalne: serwisy informacyjne i zgłoszenia od mieszkańców",
        ],
      },
      {
        title: "Ile kosztuje program na zamówienie i kiedy się zwraca",
        text: "Nie podajemy ceny z cennika, bo każdy program jest inny. Podajemy za to sposób liczenia, który możecie sprawdzić sami. Bierzemy czynność, którą chcecie usprawnić, i liczymy, ile godzin w miesiącu zajmuje dziś Waszym ludziom. Mnożymy to przez koszt godziny pracy i mamy kwotę, którą firma wydaje co miesiąc na ręczną robotę. Zestawiamy ją z wyceną i widać, po ilu miesiącach narzędzie się spłaci – możecie to wstępnie policzyć w kalkulatorze pod tekstem. Wycena jest stała i dostajecie ją po rozmowie. Zwykle proponujemy start od najmniejszego modułu, który daje odczuwalny efekt, a kolejne dokładamy etapami.",
        bullets: [
          "Liczymy godziny ręcznej pracy razy koszt godziny pracownika",
          "Wycena ze stałą ceną – po rozmowie i obejrzeniu procesu",
          "Podział na etapy, każdy osobno wyceniony i rozliczany",
          "Start od najmniejszego modułu, który realnie oszczędza czas",
          "Koszty utrzymania (serwer, opieka) znane przed podpisaniem umowy",
        ],
      },
      {
        title: "Jak pracujemy z firmą z Wielunia",
        text: "Zaczynamy od bezpłatnej konsultacji, która trwa około 30 minut – w naszym biurze przy ul. Liliowej 3, u Was albo przez telefon. Potem przychodzimy do firmy i oglądamy pracę na żywo: jakie dokumenty krążą, kto co wpisuje i gdzie giną informacje. Na tej podstawie przygotowujemy wycenę ze stałą ceną i terminem. Program budujemy etapami i po każdym pokazujemy działającą część, więc na bieżąco widzicie postęp i możecie zgłaszać uwagi. Po wdrożeniu szkolimy pracowników i zostajemy jako opieka techniczna. Kod źródłowy i prawa autorskie przechodzą na Was – program jest własnością firmy, a nie abonamentem.",
        bullets: [
          "Bezpłatna konsultacja 30 minut – w biurze, u klienta lub telefonicznie",
          "Wizyta w firmie i obejrzenie, jak wygląda praca na co dzień",
          "Wycena ze stałą ceną, zakresem i terminem",
          "Budowa etapami z pokazami działających części",
          "Wdrożenie i szkolenie pracowników na miejscu w Wieluniu",
          "Opieka po wdrożeniu oraz przekazanie kodu i praw autorskich",
        ],
      },
    ],
    faq: [
      {
        q: "Czym zajmuje się programista z Wielunia w OlekCodeTech?",
        a: "Piszemy programy na zamówienie dla firm: aplikacje w przeglądarce, panele dla pracowników, systemy zleceń, CRM i aplikacje mobilne. Automatyzujemy też powtarzalną pracę biurową i łączymy ze sobą programy, których już używacie – sklep, magazyn, kurierów, księgowość. Działamy od 2019 roku, a biuro mamy przy ul. Liliowej 3 w Wieluniu.",
      },
      {
        q: "Ile kosztuje program na zamówienie dla firmy z Wielunia?",
        a: "To zależy od zakresu: liczby modułów, użytkowników i integracji z innymi programami. Dlatego nie mamy cennika. Po bezpłatnej konsultacji i obejrzeniu, jak pracujecie, przygotowujemy wycenę ze stałą ceną i terminem. Większe projekty dzielimy na etapy, żeby można było zacząć od jednego modułu i ocenić efekt przed kolejnym wydatkiem.",
      },
      {
        q: "Czy da się połączyć nowe oprogramowanie z programem, który już mamy?",
        a: "W większości przypadków tak. Jeśli program udostępnia API, łączymy się przez nie. Jeśli nie – często wystarcza wymiana plików albo odczyt z bazy danych. Takie połączenie zrobiliśmy między sklepem WooCommerce a Subiektem nexo. Zanim cokolwiek wycenimy, sprawdzamy, jakie możliwości daje Wasz program, i mówimy wprost, co jest wykonalne.",
      },
      {
        q: "Co jeśli firma ma tylko Excela i zeszyt?",
        a: "To częsty punkt wyjścia i dobry materiał do pracy. Arkusz pokazuje, jakie dane zbieracie i czego Wam w nich brakuje. Przenosimy je do aplikacji, w której kilka osób pracuje jednocześnie, nic się nie nadpisuje, a historia zmian zostaje. Dotychczasowe dane z Excela importujemy, więc nie zaczynacie od pustego programu.",
      },
      {
        q: "Czy oprogramowanie dla firm z Wielunia wdrażacie na miejscu?",
        a: "Tak. Jesteśmy z Wielunia, więc spotkania, wdrożenie i szkolenie pracowników robimy u Was w firmie albo w naszym biurze. Bieżące sprawy załatwiamy telefonicznie i mailowo, a gdy coś wymaga obejrzenia na miejscu – po prostu przyjeżdżamy. Dotyczy to również firm z pozostałych gmin powiatu wieluńskiego.",
      },
      {
        q: "Kto jest właścicielem kodu po zakończeniu projektu?",
        a: "Wy. Po rozliczeniu projektu przekazujemy kod źródłowy, dostępy i majątkowe prawa autorskie do programu. Nie ma opłaty licencyjnej za użytkownika ani abonamentu za samo korzystanie. Możecie dalej rozwijać program z nami albo z innym programistą. Stałe koszty po wdrożeniu to serwer oraz opieka techniczna, jeśli się na nią zdecydujecie.",
      },
    ],
    related: [
      "strony-internetowe-wielun",
      "oprogramowanie-na-zamowienie",
      "automatyzacja-pracy-biurowej",
      "programista-wieruszow",
      "programista-sieradz",
    ],
    keywords: [
      "programista Wieluń",
      "oprogramowanie dla firm Wieluń",
      "programy na zamówienie Wieluń",
      "automatyzacja Wieluń",
      "aplikacje dla firm Wieluń",
      "informatyk dla firm Wieluń",
      "software house Wieluń",
      "integracje systemów Wieluń",
    ],
    portfolio: ["Komunalne Wieluń", "CRM E-Numerika Biuro Księgowe", "DS Paliwa"],
  },

  // ---------------------------------------------------------------------------
  // WIERUSZÓW – ok. 35 km
  // ---------------------------------------------------------------------------
  {
    slug: "programista-wieruszow",
    kind: "city",
    parent: "aplikacje-dedykowane",
    topic: "dev",
    navLabel: "Programista Wieruszów",
    calculator: true,
    title: "Programista Wieruszów – programy na zamówienie i automatyzacje dla produkcji, transportu i handlu",
    metaTitle: "Programista Wieruszów – aplikacje dla firm | OlekCodeTech",
    metaDescription:
      "Programista dla firm z Wieruszowa: systemy zleceń, automatyzacje i integracje sklepu z magazynem. Przyjeżdżamy z Wielunia. Umów bezpłatną konsultację.",
    eyebrow: "Lokalnie · Wieruszów i powiat wieruszowski",
    city: "Wieruszów",
    cityLocative: "w Wieruszowie",
    lead: [
      "Wieruszów żyje z produkcji: mebli, płyt drewnopochodnych i wszystkiego, co wokół nich, a do tego z transportu. W takich firmach najwięcej dzieje się na hali i na placu, a biuro próbuje za tym nadążyć w Excelu. Jako programista dla firm z Wieruszowa budujemy narzędzia, które porządkują ten przepływ: od przyjęcia zamówienia, przez produkcję, po załadunek i fakturę.",
      "OlekCodeTech działa od 2019 roku w Wieluniu, ok. 35 km od Wieruszowa. Przyjeżdżamy osobiście, oglądamy zakład i rozmawiamy z ludźmi, którzy będą z programu korzystać. Dopiero potem proponujemy, co warto zbudować, a czego nie opłaca się ruszać.",
    ],
    sections: [
      {
        title: "Programy na zamówienie dla firm z Wieruszowa",
        text: "Gotowe systemy dla produkcji bywają za duże i za drogie dla zakładu, który zatrudnia kilkanaście czy kilkadziesiąt osób, a jednocześnie nie obsługują akurat tego, co u Was jest nietypowe. Program na zamówienie robi dokładnie to, czego potrzebujecie, i nic ponad to. Działa w przeglądarce, więc brygadzista otwiera go na tablecie przy maszynie, a biuro na komputerze. Zlecenie wpisane raz jest widoczne dla wszystkich: wiadomo, co jest w kolejce, co w toku, a co czeka na wysyłkę. Technicznie opieramy się na React, Next.js i bazie PostgreSQL, a aplikacje mobilne piszemy w React Native.",
        bullets: [
          "System zleceń produkcyjnych ze statusami widocznymi dla hali i biura",
          "Panel na tablet lub telefon dla brygadzistów i magazynierów",
          "Ewidencja materiałów, płyt, półproduktów i wyrobów gotowych",
          "CRM dla działu handlowego: odbiorcy, oferty, ustalenia",
          "Aplikacja mobilna do zgłoszeń, zdjęć i potwierdzeń z terenu",
          "Podsumowania dla właściciela: zamówienia, terminy, zaległości",
        ],
      },
      {
        title: "Automatyzacja pracy biura w firmie produkcyjnej i transportowej",
        text: "Automatyzacja nie musi oznaczać robotów na hali. Częściej chodzi o to, żeby zamówienie od odbiorcy, które przyszło mailem albo w pliku Excel, samo trafiło do systemu, a nie było przepisywane wiersz po wierszu. Żeby zestawienie tygodniowe wygenerowało się w PDF i poszło do właściciela w poniedziałek rano. Żeby klient dostał SMS, że towar wyjechał. Takie rzeczy budujemy w n8n albo Make, a gdy trzeba przetworzyć nietypowe pliki lub pobrać dane z portalu kontrahenta – piszemy skrypt w Pythonie. Zaczynamy od jednej czynności, która najbardziej Was męczy, i sprawdzamy, ile czasu faktycznie oddaje.",
        bullets: [
          "Zamówienia z maili i plików Excel wczytywane bez przepisywania",
          "Tygodniowe i miesięczne zestawienia w PDF lub Excelu wysyłane automatycznie",
          "Pobieranie danych z portali odbiorców i dostawców",
          "SMS lub e-mail do klienta o wysyłce i terminie dostawy",
          "Przypomnienia o przeglądach, terminach i niezapłaconych fakturach",
          "Scenariusze n8n i Make oraz własne skrypty w Pythonie",
        ],
      },
      {
        title: "Integracje systemów – programista Wieruszów łączy sklep, magazyn i kurierów",
        text: "Coraz więcej producentów z okolic Wieruszowa sprzedaje też bezpośrednio: przez własny sklep internetowy i Allegro. Wtedy pojawia się kłopot z dwoma magazynami – tym prawdziwym i tym w internecie. Łączymy je, żeby stan zmieniał się w jednym miejscu, a reszta aktualizowała się sama. W sklepie elektrycznym RAV zrobiliśmy synchronizację stanów i cen między WooCommerce a Subiektem nexo. Dla platformy Wypożycz Sukienkę połączyliśmy kalendarz rezerwacji, płatności i zamawianie kuriera. Podłączamy Przelewy24, InPost, DPD i Furgonetkę, a jeśli korzystacie z własnego programu branżowego, sprawdzamy, czy ma API lub eksport danych. Na tej podstawie mówimy, co da się połączyć od razu, a co wymaga obejścia.",
        bullets: [
          "Jeden stan magazynowy dla sklepu, Allegro i sprzedaży bezpośredniej",
          "WooCommerce połączony z programem magazynowym, np. Subiektem nexo",
          "Nadawanie paczek i palet: InPost, DPD, Furgonetka",
          "Płatności Przelewy24 powiązane ze statusem zamówienia",
          "Automatyczne dokumenty sprzedaży po opłaceniu zamówienia",
          "Połączenia z programami branżowymi przez API lub pliki",
        ],
      },
      {
        title: "Oprogramowanie dla firm z Wieruszowa: meblarstwo, płyty, transport",
        text: "W meblarstwie i przy płytach drewnopochodnych liczą się wymiary, warianty i terminy – zamówienie rzadko jest standardowe, więc łatwo o pomyłkę przy przepisywaniu. Program może pilnować, żeby wymiar i wykończenie wpisane przez handlowca trafiły bez zmian na kartę zlecenia. Firmy transportowe potrzebują z kolei wiedzieć, które auto jest wolne i co da się na nie załadować. Rozwijamy system TMS dla firmy transportowej, który obejmuje zlecenia, kartoteki, plan załadunku pojazdu, kalendarz dostępności aut i aplikację mobilną dla kierowców. Dla pozostałych zakładów produkcyjnych z powiatu punktem wyjścia jest zwykle porządek w zleceniach i magazynie.",
        bullets: [
          "Meble: zamówienia z wymiarami i wariantami przekazywane prosto na kartę zlecenia",
          "Płyty drewnopochodne: stany, formatki, rezerwacje materiału pod zlecenie",
          "Transport: zlecenia, plan załadunku pojazdu, dostępność aut",
          "Kierowcy: aplikacja mobilna ze zleceniem, statusem i dokumentami",
          "Produkcja: kolejka zleceń, etapy, terminy realizacji",
          "Handel: panel zamówień dla stałych odbiorców",
        ],
      },
      {
        title: "Ile kosztuje programista dla firmy z Wieruszowa i jak policzyć zwrot",
        text: "Zamiast podawać cenę w ciemno, liczymy razem z Wami. Przykładowy tok rozumowania: ile osób zajmuje się daną czynnością, ile godzin w tygodniu im to zabiera i ile kosztuje firmę godzina ich pracy. Z tego wychodzi miesięczny koszt ręcznej roboty – często większy, niż się wydaje, bo dochodzą poprawki po pomyłkach. Tę kwotę porównujemy z wyceną programu i widać, kiedy inwestycja się zwróci. Wstępne obliczenie zrobicie w kalkulatorze poniżej. Wycenę ze stałą ceną dostajecie po rozmowie i wizycie w zakładzie. Projekt dzielimy na etapy, a pierwszy z nich to zawsze najmniejszy kawałek, który sam w sobie coś daje.",
        bullets: [
          "Punkt wyjścia: godziny ręcznej pracy i koszt godziny pracownika",
          "Do rachunku doliczamy czas tracony na poprawianie pomyłek",
          "Stała cena w wycenie – bez rozliczania „ile wyjdzie”",
          "Etapy, które można zamawiać po kolei",
          "Pierwszy moduł mały, ale dający efekt od razu",
        ],
      },
      {
        title: "Jak wygląda współpraca z firmą z Wieruszowa",
        text: "Pierwsza rozmowa jest bezpłatna i trwa około pół godziny – telefonicznie albo online. Jeśli temat ma sens, przyjeżdżamy do Wieruszowa; z Wielunia to ok. 35 km. Chcemy zobaczyć halę, magazyn i biuro, bo z samego opisu rzadko widać, gdzie naprawdę ucieka czas. Po wizycie dostajecie wycenę: zakres, stałą cenę i termin. Budujemy etapami, a po każdym pokazujemy działający fragment – u Was albo na wideorozmowie. Wdrożenie i szkolenie pracowników robimy na miejscu. Potem zapewniamy opiekę: poprawki, rozwój, kopie zapasowe. Kod i prawa autorskie przechodzą na Waszą firmę, więc program zostaje u Was niezależnie od dalszej współpracy z nami.",
        bullets: [
          "Bezpłatna konsultacja 30 minut przez telefon lub online",
          "Przyjazd do zakładu w Wieruszowie i obejrzenie procesu",
          "Wycena z zakresem, stałą ceną i terminem",
          "Pokazy po każdym etapie i miejsce na Wasze uwagi",
          "Wdrożenie i szkolenie pracowników na miejscu",
          "Opieka techniczna, a kod i prawa autorskie po Waszej stronie",
        ],
      },
    ],
    faq: [
      {
        q: "Czy programista z OlekCodeTech przyjeżdża do Wieruszowa?",
        a: "Tak. Siedzibę mamy w Wieluniu, ok. 35 km od Wieruszowa, więc przyjazd do klienta to dla nas normalna rzecz. Na miejscu oglądamy, jak wygląda praca, a później wdrażamy program i szkolimy pracowników. Bieżące ustalenia i pokazy kolejnych etapów prowadzimy zdalnie, żeby nie zabierać Wam czasu na spotkania.",
      },
      {
        q: "Jakie oprogramowanie dla firm z Wieruszowa robicie najczęściej?",
        a: "Systemy zleceń, panele dla pracowników, CRM, ewidencję magazynu, aplikacje mobilne oraz integracje sklepu internetowego z magazynem i kurierami. Dla firm transportowych rozwijamy system TMS z aplikacją dla kierowców. Zakres zawsze wynika z tego, co zobaczymy w firmie – nie mamy jednego produktu, który dopasowujemy na siłę do każdego klienta.",
      },
      {
        q: "Ile kosztuje program na zamówienie dla zakładu produkcyjnego?",
        a: "Cena zależy od tego, ile procesów program ma obsłużyć, ilu będzie użytkowników i z czym trzeba go połączyć. Po wizycie w zakładzie przygotowujemy wycenę ze stałą ceną. Dzielimy ją na etapy, więc możecie zamówić najpierw na przykład same zlecenia, a magazyn i raporty dołożyć później, gdy pierwszy moduł się sprawdzi.",
      },
      {
        q: "Czy połączycie nowy system z programem magazynowym, który już mamy?",
        a: "Zwykle tak. Mamy za sobą integrację sklepu WooCommerce z Subiektem nexo, w której synchronizują się stany i ceny. Przy innych programach sprawdzamy, czy mają API, eksport do pliku lub dostęp do bazy. Jeśli połączenie nie jest możliwe albo byłoby nieopłacalne, mówimy o tym przed wyceną, a nie w trakcie prac.",
      },
      {
        q: "Co jeśli całą produkcję prowadzimy w Excelu?",
        a: "To nie przeszkoda. Arkusze pokazują nam, jakie informacje są dla Was ważne i w jakiej kolejności je uzupełniacie. Na tej podstawie projektujemy program, w którym kilka osób pracuje naraz, a dane nie giną ani się nie dublują. Zawartość dotychczasowych arkuszy przenosimy do systemu, żeby zachować historię zleceń i klientów.",
      },
      {
        q: "Kto jest właścicielem kodu programu po wdrożeniu?",
        a: "Firma, która go zamówiła. Po zakończeniu i rozliczeniu projektu przekazujemy kod źródłowy, dostępy do serwera oraz prawa autorskie. Nie płacicie za licencje na stanowiska ani za liczbę użytkowników. Jeśli zechcecie, zostajemy przy projekcie jako opieka techniczna, ale nie jest to warunek korzystania z programu.",
      },
    ],
    related: [
      "strony-internetowe-wieruszow",
      "programista-wielun",
      "programista-kepno",
      "systemy-dla-firm-transportowych",
      "integracje-sklepow-internetowych",
    ],
    keywords: [
      "programista Wieruszów",
      "oprogramowanie dla firm Wieruszów",
      "programy na zamówienie Wieruszów",
      "automatyzacja Wieruszów",
      "aplikacje dla firm Wieruszów",
      "informatyk dla firm Wieruszów",
      "software house Wieruszów",
    ],
    portfolio: ["RAV - Sklep elektryczny", "Wypożycz Sukienkę", "BIFOR"],
  },

  // ---------------------------------------------------------------------------
  // KĘPNO – ok. 50 km
  // ---------------------------------------------------------------------------
  {
    slug: "programista-kepno",
    kind: "city",
    parent: "aplikacje-dedykowane",
    topic: "dev",
    navLabel: "Programista Kępno",
    calculator: true,
    title: "Programista Kępno – oprogramowanie dla producentów mebli, hurtowni i firm handlowych",
    metaTitle: "Programista Kępno – programy na zamówienie | OlekCodeTech",
    metaDescription:
      "Programista dla firm z Kępna: systemy zamówień, panele B2B, integracje sklepu, Allegro i magazynu. Dojeżdżamy z Wielunia. Umów bezpłatną konsultację 30 min.",
    eyebrow: "Lokalnie · Kępno i powiat kępiński",
    city: "Kępno",
    cityLocative: "w Kępnie",
    lead: [
      "Kępno i okolice to zagłębie meblowe: producenci mebli tapicerowanych, stolarnie, hurtownie tkanin i akcesoriów, firmy handlowe i eksporterzy. Wspólny problem tych firm to ogromna liczba wariantów – model, wymiar, tkanina, nóżki, funkcja spania – i zamówienia, które spływają mailem, telefonem i w plikach od odbiorców. Programista dla firm z Kępna ma więc przede wszystkim uporządkować zamówienia.",
      "OlekCodeTech to software house z Wielunia, ok. 50 km od Kępna. Od 2019 roku zrealizowaliśmy ponad 50 projektów, w tym sklepy z konfiguratorami produktów i integracje sklepów z magazynem. Do Kępna przyjeżdżamy osobiście, a codzienną pracę prowadzimy zdalnie.",
    ],
    sections: [
      {
        title: "Programy na zamówienie dla firm z Kępna",
        text: "Przy meblach tapicerowanych jedno zamówienie potrafi mieć kilkanaście parametrów, a pomyłka w tkaninie wychodzi dopiero u klienta. Program na zamówienie pozwala wpisać zamówienie raz, wybrać warianty z listy zamiast pisać je z pamięci i przekazać komplet informacji na produkcję, bez dzwonienia i dopytywania. Budujemy takie aplikacje w React, Next.js i TypeScript, z bazą PostgreSQL. Działają w przeglądarce, więc korzysta z nich biuro, hala i handlowiec w trasie. Mamy doświadczenie z konfiguratorami: dla firmy PROMYK zrobiliśmy konfigurator okien i drzwi, a dla MS Nadruki sklep, w którym klient sam projektuje nadruk. Ta sama zasada sprawdza się przy meblach.",
        bullets: [
          "System zamówień z wariantami: model, wymiar, tkanina, dodatki",
          "Konfigurator produktu dla handlowców lub klientów",
          "Karty zleceń dla produkcji generowane prosto z zamówienia",
          "Panel dla stolarni, szwalni i tapicerni ze statusem prac",
          "CRM: odbiorcy, salony, warunki handlowe, historia zamówień",
          "Aplikacja mobilna dla handlowców i kierowców",
        ],
      },
      {
        title: "Automatyzacja pracy w firmie meblowej i handlowej",
        text: "W firmie, która obsługuje wielu odbiorców, biuro spędza godziny na przepisywaniu: zamówienie z maila do programu, dane z programu do potwierdzenia, potwierdzenie do klienta, a na koniec jeszcze zestawienie dla szefa. Każdy z tych kroków może wykonać automat. Zamówienie w pliku od sieci handlowej wczytuje się samo. Potwierdzenie w PDF wysyła się po zatwierdzeniu. Odbiorca dostaje e-mail lub SMS, gdy meble są gotowe do odbioru. Cenniki dostawców tkanin i akcesoriów można pobierać z ich stron i portali, zamiast sprawdzać je ręcznie. Używamy n8n i Make, a tam, gdzie pliki są nietypowe, piszemy własne skrypty w Pythonie.",
        bullets: [
          "Wczytywanie zamówień z plików i maili od odbiorców",
          "Potwierdzenia zamówień i specyfikacje w PDF bez ręcznego składania",
          "Zestawienia sprzedaży i produkcji w Excelu o stałej porze",
          "Pobieranie cenników i dostępności ze stron dostawców",
          "E-mail i SMS o gotowości towaru i terminie dostawy",
          "Automaty w n8n i Make lub skrypty pisane pod Wasze pliki",
        ],
      },
      {
        title: "Integracje: sklep internetowy, Allegro, kurierzy i magazyn",
        text: "Hurtownie tkanin i akcesoriów oraz producenci sprzedający detalicznie mają zwykle tysiące pozycji i kilka kanałów sprzedaży jednocześnie. Bez połączenia systemów ktoś musi ręcznie pilnować, czy towar sprzedany na Allegro zniknął też ze sklepu. Łączymy sklep WooCommerce z programem magazynowo-księgowym – w sklepie RAV zrobiliśmy to z Subiektem nexo, tak że stany i ceny aktualizują się same. Zbudowaliśmy też sklep WTA Perfekt, w którym jest ponad tysiąc produktów, więc wiemy, jak wygląda praca z dużym asortymentem. Do tego dochodzą płatności Przelewy24 oraz przewoźnicy: InPost, DPD i Furgonetka, także dla przesyłek gabarytowych, jeśli przewoźnik udostępnia API.",
        bullets: [
          "Stany i ceny zsynchronizowane między magazynem, sklepem i Allegro",
          "WooCommerce połączony z Subiektem nexo lub innym programem magazynowym",
          "Import dużego asortymentu z arkuszy i plików dostawców",
          "Listy przewozowe InPost, DPD i Furgonetka generowane z zamówienia",
          "Przelewy24 i automatyczne potwierdzenie wpłaty",
          "Dowolne API: przewoźnicy, hurtownie, systemy odbiorców",
        ],
      },
      {
        title: "Programista Kępno dla branży meblowej, stolarni i hurtowni tkanin",
        text: "Producentowi mebli tapicerowanych najbardziej pomaga system, który spina zamówienie z produkcją i wysyłką – wiadomo, co jest krojone, co szyte, a co czeka na transport. Stolarnia zyskuje na prostym panelu zleceń z wymiarami i terminami zamiast kartek przypiętych do tablicy. Hurtownia tkanin i akcesoriów potrzebuje aktualnych stanów oraz panelu, w którym stali odbiorcy sami składają zamówienia i sprawdzają dostępność, zamiast dzwonić. Firmom, które eksportują, przydaje się jedno miejsce z zamówieniami od odbiorców z kraju i z zagranicy oraz komplet dokumentów do każdej wysyłki. Zakres dobieramy do wielkości firmy – nie każdemu potrzebny jest od razu cały system.",
        bullets: [
          "Meble tapicerowane: zamówienie, krojownia, szwalnia, tapicernia, wysyłka",
          "Stolarnie: zlecenia z wymiarami, terminami i zdjęciami",
          "Hurtownie tkanin: stany, rezerwacje, panel B2B dla odbiorców",
          "Akcesoria meblowe: sklep internetowy połączony z magazynem",
          "Handel i eksport: zamówienia i dokumenty wysyłkowe w jednym miejscu",
          "Salony i sieci: wczytywanie zamówień z plików odbiorcy",
        ],
      },
      {
        title: "Ile kosztuje oprogramowanie dla firmy z Kępna i kiedy się zwraca",
        text: "Uczciwa odpowiedź brzmi: tyle, ile wynika z zakresu, a zakres poznajemy dopiero po rozmowie. Możemy natomiast pokazać, jak ocenić, czy to się opłaca. Policzcie, ile godzin tygodniowo biuro poświęca na przepisywanie zamówień, potwierdzenia i zestawienia. Pomnóżcie przez koszt godziny pracy. Dodajcie koszt reklamacji, które wynikły z pomyłki przy przepisywaniu. To jest kwota, z którą porównujemy wycenę – kalkulator pod tekstem zrobi ten rachunek za Was. Wycena ma stałą cenę i jest podzielona na etapy. Zaczynamy od najmniejszego modułu, który daje efekt – często jest to samo przyjmowanie zamówień – i dopiero potem rozbudowujemy system.",
        bullets: [
          "Rachunek: godziny przepisywania razy koszt godziny pracy",
          "W bilansie także koszt pomyłek i reklamacji",
          "Stała cena ustalona po rozmowie, przed rozpoczęciem prac",
          "Projekt w etapach – płacicie za to, co kolejno zamawiacie",
          "Najpierw jeden moduł, potem rozbudowa",
        ],
      },
      {
        title: "Jak pracujemy z firmą z Kępna",
        text: "Zaczynamy od bezpłatnej, półgodzinnej konsultacji przez telefon lub wideorozmowę – wystarczy, żeby ocenić, czy możemy pomóc. Następnie przyjeżdżamy do Kępna, ok. 50 km od naszego biura w Wieluniu, i przechodzimy z Wami całą drogę zamówienia: od maila od klienta do załadunku. Po wizycie przygotowujemy wycenę ze stałą ceną i terminem. Prace prowadzimy etapami, a każdy kończy się pokazem działającej części, którą możecie sprawdzić na własnych danych. Na wdrożenie i szkolenie przyjeżdżamy ponownie. Po starcie zapewniamy opiekę techniczną: poprawki, kopie zapasowe i dalszą rozbudowę. Kod źródłowy i prawa autorskie należą do Was, bez opłat licencyjnych.",
        bullets: [
          "Konsultacja 30 minut bez opłat – telefon lub wideorozmowa",
          "Wizyta w firmie w Kępnie i prześledzenie drogi zamówienia",
          "Wycena: zakres, stała cena, termin",
          "Etapy zakończone pokazem na Waszych danych",
          "Wdrożenie i szkolenie na miejscu",
          "Opieka po starcie, kod i prawa autorskie przekazane firmie",
        ],
      },
    ],
    faq: [
      {
        q: "Czy programista dla firm przyjedzie do Kępna, czy wszystko odbywa się zdalnie?",
        a: "Przyjeżdżamy. Z Wielunia do Kępna jest ok. 50 km, więc wizyta w firmie przed wyceną oraz wdrożenie i szkolenie na miejscu to u nas standard. Pomiędzy tymi spotkaniami pracujemy zdalnie: pokazy kolejnych etapów robimy na wideorozmowach, a bieżące sprawy załatwiamy telefonicznie i mailowo.",
      },
      {
        q: "Ile kosztuje program na zamówienie dla producenta mebli?",
        a: "Zależy to od liczby wariantów produktów, działów, które mają z programu korzystać, oraz integracji z magazynem czy sklepem. Po rozmowie i wizycie w firmie dostajecie wycenę ze stałą ceną i terminem. Projekt dzielimy na etapy, więc pierwszy wydatek dotyczy tylko jednego modułu, a nie całego systemu naraz.",
      },
      {
        q: "Jakie oprogramowanie dla firm z Kępna ma największy sens na początek?",
        a: "Najczęściej to, które porządkuje zamówienia: jedno miejsce, do którego trafiają, z wariantami wybieranymi z listy i kartą zlecenia dla produkcji. W hurtowniach dobrym początkiem jest panel zamówień dla stałych odbiorców albo połączenie sklepu z magazynem. Ostateczny wybór zależy od tego, gdzie dziś tracicie najwięcej czasu.",
      },
      {
        q: "Czy da się połączyć nowy system z programem, który już mamy?",
        a: "Tak, jeśli program pozwala na wymianę danych – przez API, pliki lub bazę. Łączyliśmy już sklep WooCommerce z Subiektem nexo, synchronizując stany i ceny. Przy mniej popularnych programach branżowych najpierw sprawdzamy ich możliwości i dopiero wtedy mówimy, co da się zrobić i jakim nakładem.",
      },
      {
        q: "Co jeśli zamówienia prowadzimy w Excelu i na kartkach?",
        a: "Większość firm, z którymi zaczynamy pracę, jest dokładnie w tym miejscu. Z Waszych arkuszy i formularzy odczytujemy, jakie dane są potrzebne, i układamy je w programie tak, żeby wpisywanie było szybsze niż w Excelu. Listy modeli, tkanin i odbiorców importujemy, więc nikt nie musi wprowadzać ich od nowa.",
      },
      {
        q: "Kto jest właścicielem kodu i danych w programie?",
        a: "Wy. Dane od początku należą do Waszej firmy, a po rozliczeniu projektu przekazujemy również kod źródłowy i prawa autorskie. Nie pobieramy opłat licencyjnych za użytkowników. Program można dalej rozwijać z nami albo z dowolnym innym programistą – nie jesteście związani z jednym wykonawcą.",
      },
    ],
    related: [
      "programista-wieruszow",
      "programista-wroclaw",
      "panel-klienta-portal-b2b",
      "integracje-sklepow-internetowych",
      "oprogramowanie-na-zamowienie",
    ],
    keywords: [
      "programista Kępno",
      "oprogramowanie dla firm Kępno",
      "programy na zamówienie Kępno",
      "automatyzacja Kępno",
      "aplikacje dla firm Kępno",
      "informatyk dla firm Kępno",
      "software house Kępno",
      "oprogramowanie dla producentów mebli Kępno",
    ],
    portfolio: ["MS Nadruki", "WTA Perfekt", "PROMYK – okna i drzwi"],
  },

  // ---------------------------------------------------------------------------
  // KLUCZBORK – ok. 55 km (woj. opolskie)
  // ---------------------------------------------------------------------------
  {
    slug: "programista-kluczbork",
    kind: "city",
    parent: "aplikacje-dedykowane",
    topic: "dev",
    navLabel: "Programista Kluczbork",
    calculator: true,
    title: "Programista Kluczbork – aplikacje dla firm, automatyzacja biura i integracje programów",
    metaTitle: "Programista Kluczbork – systemy dla firm | OlekCodeTech",
    metaDescription:
      "Programista dla firm z Kluczborka: aplikacje na zamówienie, automatyczne raporty, integracje z magazynem i księgowością. Umów bezpłatną konsultację 30 minut.",
    eyebrow: "Lokalnie · Kluczbork i powiat kluczborski",
    city: "Kluczbork",
    cityLocative: "w Kluczborku",
    lead: [
      "Firmy z Kluczborka – zakłady z branży maszynowej i metalowej, przetwórnie spożywcze, gospodarstwa i firmy obsługujące rolnictwo, hurtownie – mają zwykle dobry program do faktur i magazynu, a całą resztę prowadzą w arkuszach, mailach i w głowach pracowników. Programista dla firm z Kluczborka przydaje się właśnie do tej reszty: zleceń, ofert, serwisu, raportów i połączenia programów ze sobą.",
      "OlekCodeTech działa od 2019 roku i ma siedzibę w Wieluniu, ok. 55 km od Kluczborka. Na pierwsze spotkanie i wdrożenie przyjeżdżamy osobiście, resztę prowadzimy zdalnie. Robimy rzeczy konkretne: program, który po kilku tygodniach używania oszczędza ludziom czas.",
    ],
    sections: [
      {
        title: "Aplikacje i programy na zamówienie dla firm z Kluczborka",
        text: "Zakład, który robi części, konstrukcje lub maszyny na zamówienie, ma inne potrzeby niż hurtownia czy przetwórnia, i żaden gotowy program nie obsłuży wszystkich dobrze. Dlatego piszemy aplikacje pod konkretną firmę. Są dostępne przez przeglądarkę, z logowaniem i uprawnieniami: kierownik widzi wszystkie zlecenia, pracownik swoje zadania, a serwisant na wyjeździe otwiera zgłoszenie w telefonie. Korzystamy z React, Next.js, Node.js i bazy PostgreSQL – to popularne technologie, więc program nie jest zależny od jednego wykonawcy. Gdy praca odbywa się poza biurem, dokładamy aplikację mobilną na iOS i Androida w React Native. Zaczynamy od jednego modułu i rozbudowujemy program, gdy pierwszy przyjmie się w firmie.",
        bullets: [
          "Rejestr zleceń i ofert z terminami oraz osobami odpowiedzialnymi",
          "Panel pracownika: zadania na dziś, czas pracy, uwagi do zlecenia",
          "Zgłoszenia serwisowe z historią napraw maszyn i urządzeń",
          "CRM dopasowany do Waszego sposobu sprzedaży",
          "Magazyn części, materiałów i narzędzi",
          "Aplikacja mobilna dla serwisantów i pracowników w terenie",
        ],
      },
      {
        title: "Automatyzacja pracy biurowej – programista Kluczbork od raportów i przepisywania",
        text: "Jeśli ktoś w Waszej firmie co tydzień otwiera trzy pliki, kopiuje z nich liczby do czwartego i wysyła go mailem, to jest to praca dla automatu. Podobnie jak przepisywanie zapytań ofertowych z formularza do arkusza, pilnowanie terminów przeglądów czy sprawdzanie cen surowców na portalach. Budujemy automatyzacje, które robią to same i o stałej porze. Jeśli firma korzysta z Microsoft 365, często wystarcza Power Automate z SharePointem. W innych przypadkach sięgamy po n8n, Make albo własny skrypt w Pythonie. Każdą automatyzację opisujemy, żebyście wiedzieli, co dokładnie się dzieje i kogo powiadomi, gdy coś pójdzie nie tak.",
        bullets: [
          "Raporty z kilku źródeł składane automatycznie do PDF lub Excela",
          "Zapytania ze strony i z maila zapisywane od razu w jednym miejscu",
          "Pobieranie notowań, cen i ogłoszeń ze stron i portali",
          "Przypomnienia e-mail i SMS o przeglądach, terminach i płatnościach",
          "Power Automate i SharePoint w firmach pracujących na Microsoft 365",
          "n8n, Make i skrypty w Pythonie tam, gdzie gotowe narzędzia nie wystarczają",
        ],
      },
      {
        title: "Integracje programów magazynowych, sklepu i kurierów",
        text: "Największe oszczędności dają zwykle nie nowe programy, tylko połączenie tych, które już macie. Program magazynowo-księgowy zna stany i ceny, sklep internetowy zna zamówienia, a przewoźnik potrzebuje adresów – i te informacje mogą krążyć bez udziału człowieka. Taką integrację wykonaliśmy dla sklepu elektrycznego RAV, łącząc WooCommerce z Subiektem nexo. Podłączamy też Allegro, płatności Przelewy24 oraz kurierów: InPost, DPD i Furgonetkę. Jeśli korzystacie z programu branżowego, którego nikt inny w okolicy nie zna, zaczynamy od sprawdzenia, czy ma API, eksport plików albo dostęp do bazy danych. Prawie zawsze znajduje się jakiś sposób, a jeśli nie – mówimy o tym przed wyceną.",
        bullets: [
          "Subiekt nexo i inne programy magazynowo-księgowe połączone ze sklepem",
          "Zamówienia z WooCommerce i Allegro w jednym miejscu",
          "Automatyczne etykiety InPost, DPD, Furgonetka",
          "Płatności Przelewy24 i statusy zamówień bez ręcznego odhaczania",
          "Wymiana danych z programami branżowymi przez API lub pliki",
          "Jedno źródło prawdy o stanach, cenach i kontrahentach",
        ],
      },
      {
        title: "Oprogramowanie dla firm z Kluczborka: przemysł, spożywka, rolnictwo, handel",
        text: "W przemyśle maszynowym i metalowym najczęściej brakuje jednego miejsca, w którym widać zlecenie od oferty do wysyłki, razem z rysunkami i ustaleniami z klientem. W przetwórstwie spożywczym ważna jest ewidencja partii i dostaw, tak żeby dało się szybko ustalić, co z czego powstało. Gospodarstwa i firmy obsługujące rolnictwo korzystają na prostych narzędziach do rozliczeń z dostawcami, planowania prac i zamówień sezonowych. Handel – na sklepie połączonym z magazynem i na panelu dla stałych odbiorców. Nie zakładamy z góry, czego potrzebujecie: najpierw oglądamy, jak wygląda dzień pracy, a potem proponujemy narzędzie dopasowane do wielkości firmy i liczby osób, które będą z niego korzystać.",
        bullets: [
          "Przemysł maszynowy: zlecenie od oferty do wysyłki, z dokumentacją",
          "Obróbka metalu: kolejka prac, obciążenie stanowisk, terminy",
          "Przetwórstwo spożywcze: partie, dostawy, powiązanie surowca z wyrobem",
          "Rolnictwo: rozliczenia z dostawcami, zamówienia sezonowe, plan prac",
          "Handel i hurt: sklep z magazynem, panel zamówień dla odbiorców",
          "Serwis maszyn: zgłoszenia, wyjazdy, historia napraw",
        ],
      },
      {
        title: "Ile kosztuje program dla firmy i po jakim czasie się zwraca",
        text: "Zamiast pytać „ile kosztuje program”, lepiej zacząć od pytania „ile kosztuje nas dzisiaj jego brak”. Wybieramy jeden proces i liczymy: ile godzin miesięcznie zabiera, ilu osobom i ile kosztuje godzina ich pracy. Wynik to miesięczny koszt ręcznej obsługi. Jeśli jest niski, mówimy otwarcie, że programu nie warto pisać albo że wystarczy prosta automatyzacja. Jeśli wysoki – zestawiamy go z wyceną i wychodzi czas zwrotu; kalkulator na tej stronie pozwala to oszacować. Wycenę ze stałą ceną przygotowujemy po rozmowie. Prace dzielimy na etapy i zaczynamy od najmniejszego modułu, który już sam przynosi korzyść.",
        bullets: [
          "Najpierw koszt obecnej, ręcznej pracy – dopiero potem wycena",
          "Godziny w miesiącu razy koszt godziny pracy",
          "Jeśli się nie opłaca, powiemy to przed startem",
          "Stała cena i jasny zakres każdego etapu",
          "Pierwszy etap to najmniejszy moduł, który daje efekt",
        ],
      },
      {
        title: "Jak wygląda współpraca programisty z firmą z Kluczborka",
        text: "Kluczbork leży ok. 55 km od naszego biura w Wieluniu, więc łączymy pracę na miejscu ze zdalną. Bezpłatną konsultację, około 30 minut, robimy telefonicznie lub online. Potem przyjeżdżamy do firmy, żeby zobaczyć, jak naprawdę przebiega praca – przy biurku, na hali, w magazynie. Na tej podstawie powstaje wycena ze stałą ceną i terminem. Program budujemy etapami i regularnie pokazujemy postępy na wideorozmowie. Na wdrożenie i szkolenie pracowników przyjeżdżamy ponownie. Po uruchomieniu prowadzimy opiekę techniczną. Kod źródłowy oraz prawa autorskie przekazujemy Wam – to zapis w umowie, a nie obietnica. Dzięki temu program pozostaje własnością firmy na stałe.",
        bullets: [
          "Bezpłatna konsultacja 30 minut – telefon lub online",
          "Wizyta w firmie w Kluczborku i obejrzenie pracy na żywo",
          "Wycena ze stałą ceną i terminem realizacji",
          "Etapy z pokazami postępów na wideorozmowach",
          "Wdrożenie i szkolenie pracowników na miejscu",
          "Opieka techniczna oraz przekazanie kodu i praw autorskich",
        ],
      },
    ],
    faq: [
      {
        q: "Czy przyjeżdżacie do Kluczborka, skoro firma jest z Wielunia?",
        a: "Tak. Z Wielunia do Kluczborka jest ok. 55 km. Przyjeżdżamy przed wyceną, żeby zobaczyć, jak pracujecie, oraz na wdrożenie i szkolenie. To, że jesteśmy z sąsiedniego województwa, niczego nie zmienia. Bieżącą pracę, pokazy etapów i pomoc po wdrożeniu prowadzimy zdalnie, co zwykle jest wygodniejsze dla obu stron.",
      },
      {
        q: "Ile kosztuje program na zamówienie dla firmy z Kluczborka?",
        a: "Nie ma jednej ceny, bo program do zgłoszeń serwisowych to inny zakres niż system zleceń z magazynem i integracjami. Po bezpłatnej konsultacji i wizycie w firmie przygotowujemy wycenę ze stałą ceną i terminem. Wskazujemy też, od którego modułu warto zacząć, żeby pierwszy etap był niewielki, a jego efekt widoczny.",
      },
      {
        q: "Czy da się połączyć nowe oprogramowanie z programem, który już mamy?",
        a: "Najczęściej tak. Sprawdzamy, czy Wasz program ma API, eksport do plików albo dostęp do bazy, i na tym budujemy połączenie. Mamy za sobą integrację sklepu WooCommerce z Subiektem nexo. Dotychczasowy program do faktur i magazynu zwykle zostaje – dokładamy do niego to, czego w nim brakuje.",
      },
      {
        q: "Co jeśli firma ma tylko Excela?",
        a: "Wtedy zaczynamy od Excela. Oglądamy arkusze, pytamy, kto i kiedy je uzupełnia i co w nich najbardziej przeszkadza. Czasem wystarczy automatyzacja, która sama wypełnia i rozsyła zestawienia. Częściej przenosimy dane do aplikacji, w której kilka osób pracuje równocześnie. Dotychczasowe dane importujemy, więc niczego nie tracicie.",
      },
      {
        q: "Czy oprogramowanie dla firm z Kluczborka będzie działać na telefonach?",
        a: "Tak. Aplikacje w przeglądarce projektujemy tak, żeby wygodnie korzystało się z nich na telefonie i tablecie. Jeśli pracownicy potrzebują osobnej aplikacji – na przykład serwisanci na wyjazdach – robimy aplikację mobilną na iOS i Androida w React Native. Taką aplikację ma rozwijany przez nas system TMS, z którego korzystają kierowcy.",
      },
      {
        q: "Kto jest właścicielem kodu napisanego programu?",
        a: "Zamawiający. W umowie zapisujemy, że po rozliczeniu projektu kod źródłowy i prawa autorskie przechodzą na Waszą firmę. Dostajecie też dostępy do serwera i bazy danych. Nie ma opłat za licencje ani za liczbę użytkowników, a program możecie w przyszłości rozwijać z dowolnym wykonawcą.",
      },
    ],
    related: [
      "programista-kepno",
      "programista-wroclaw",
      "automatyzacja-pracy-biurowej",
      "systemy-crm-dla-firm",
      "aplikacje-webowe-react-nextjs",
    ],
    keywords: [
      "programista Kluczbork",
      "oprogramowanie dla firm Kluczbork",
      "programy na zamówienie Kluczbork",
      "automatyzacja Kluczbork",
      "aplikacje dla firm Kluczbork",
      "informatyk dla firm Kluczbork",
      "software house Kluczbork",
    ],
    portfolio: ["CRM E-Numerika Biuro Księgowe", "RAV - Sklep elektryczny", "Plonio.pl"],
  },

  // ---------------------------------------------------------------------------
  // SIERADZ – ok. 45 km
  // ---------------------------------------------------------------------------
  {
    slug: "programista-sieradz",
    kind: "city",
    parent: "aplikacje-dedykowane",
    topic: "dev",
    navLabel: "Programista Sieradz",
    calculator: true,
    title: "Programista Sieradz – systemy na zamówienie, CRM i automatyzacje dla firm i instytucji",
    metaTitle: "Programista Sieradz – oprogramowanie dla firm | OlekCodeTech",
    metaDescription:
      "Programista dla firm z Sieradza: CRM, systemy rezerwacji i zleceń, automatyzacje i integracje ze sklepem oraz księgowością. Umów bezpłatną konsultację.",
    eyebrow: "Lokalnie · Sieradz i powiat sieradzki",
    city: "Sieradz",
    cityLocative: "w Sieradzu",
    lead: [
      "W Sieradzu obok zakładów przetwórstwa spożywczego i firm produkcyjnych działa dużo handlu, usług, biur i instytucji. To firmy, w których sporo pracy to obsługa klienta i papierów: zapytania, terminy, dokumenty, rozliczenia. Jako programista dla firm z Sieradza budujemy narzędzia, które tę obsługę skracają – tak, żeby pracownik zajmował się klientem, a nie przepisywaniem.",
      "Jesteśmy z Wielunia, ok. 45 km od Sieradza. OlekCodeTech działa od 2019 roku i ma na koncie ponad 50 projektów, między innymi CRM dla biura księgowego, platformę rezerwacji i sklepy połączone z magazynem. Przyjeżdżamy na miejsce, a potem pracujemy zdalnie.",
    ],
    sections: [
      {
        title: "Systemy i programy na zamówienie dla firm z Sieradza",
        text: "Firma usługowa albo handlowa rzadko potrzebuje wielkiego systemu. Potrzebuje jednego miejsca, w którym widać klientów, sprawy w toku i terminy – i żeby dało się tam zajrzeć także z telefonu. Takie aplikacje budujemy na zamówienie. Dla biura księgowego E-Numerika zrobiliśmy CRM dopasowany do pracy biura. Dla wypożyczalni Wypożycz Sukienkę – platformę z kalendarzem rezerwacji, płatnościami i wysyłką kurierem, która obsługuje ponad 700 produktów. Każdy projekt zaczynamy od tego, co pracownicy robią na co dzień, i dopiero do tego dobieramy ekrany oraz funkcje. Piszemy w React, Next.js i TypeScript, a aplikacje mobilne w React Native.",
        bullets: [
          "CRM dla biur i firm usługowych: klienci, sprawy, terminy, dokumenty",
          "Systemy rezerwacji z kalendarzem dostępności i płatnością online",
          "Systemy zleceń dla serwisów, ekip i firm produkcyjnych",
          "Panele dla pracowników z podziałem na role",
          "Magazyn i ewidencja towaru dla handlu",
          "Aplikacje mobilne na iOS i Androida",
        ],
      },
      {
        title: "Automatyzacja pracy w firmie – mniej przepisywania, mniej pomyłek",
        text: "Dobrym kandydatem do automatyzacji jest wszystko, co robicie regularnie i zawsze tak samo. Comiesięczne przypomnienie klientom o dokumentach. Raport sprzedaży składany z kilku plików. Przepisywanie zgłoszeń z formularza na stronie do arkusza. Sprawdzanie, czy na portalu pojawiło się nowe ogłoszenie albo zmieniła się cena. Automat wykona to o ustalonej godzinie, bez literówek i bez zapominania, a pracownik dostanie gotowy wynik do sprawdzenia. W biurach pracujących na Google Workspace lub Microsoft 365 wykorzystujemy to, co już macie. Do reszty używamy n8n i Make, a nietypowe przypadki obsługujemy własnymi skryptami w Pythonie. Każdą automatyzację da się później zmienić lub rozbudować.",
        bullets: [
          "Cykliczne przypomnienia e-mail i SMS do klientów",
          "Raporty PDF i Excel składane z kilku źródeł bez udziału pracownika",
          "Zgłoszenia ze strony trafiające prosto do CRM lub arkusza",
          "Monitorowanie stron i portali: ogłoszenia, ceny, terminy",
          "Automatyzacje w Google Workspace i Microsoft 365",
          "n8n, Make i własne skrypty tam, gdzie potrzeba czegoś więcej",
        ],
      },
      {
        title: "Integracje systemów – programista Sieradz połączy sklep, płatności i księgowość",
        text: "Sklep, który rośnie, szybko dochodzi do momentu, w którym ręczna obsługa zamówień przestaje się mieścić w dniu pracy. Wtedy pomaga połączenie systemów: zamówienie opłacone przez Przelewy24 samo zmienia status, etykieta InPost, DPD lub Furgonetki generuje się z danych klienta, a stan magazynowy spada w sklepie i na Allegro jednocześnie. Mamy to przećwiczone: w sklepie RAV działa synchronizacja stanów i cen z Subiektem nexo, a dla jednego ze sklepów przygotowaliśmy panel sprzedaży, w którym właściciel widzi wyniki bez logowania się do kilku systemów. Łączymy też programy spoza tej listy – wystarczy, że udostępniają API.",
        bullets: [
          "Przelewy24 z automatycznym potwierdzeniem i zmianą statusu",
          "Etykiety InPost, DPD i Furgonetka generowane z zamówienia",
          "Stany wspólne dla sklepu WooCommerce i Allegro",
          "Synchronizacja z programem magazynowo-księgowym, np. Subiektem nexo",
          "Panel sprzedaży z danymi z kilku źródeł w jednym widoku",
          "Integracje z innymi systemami przez API",
        ],
      },
      {
        title: "Dla jakich firm z Sieradza i powiatu sieradzkiego pracujemy",
        text: "Przetwórstwo spożywcze potrzebuje porządku w dostawach, partiach i zamówieniach od odbiorców – program może zastąpić kilka równoległych arkuszy i zeszyt na rampie. Firmy produkcyjne zyskują na systemie zleceń, który pokazuje terminy i obciążenie. W handlu najwięcej daje połączenie sklepu z magazynem. Usługi – biura rachunkowe, serwisy, gabinety, firmy organizujące wydarzenia – korzystają na CRM, rezerwacjach i automatycznych przypomnieniach; w tym obszarze przygotowaliśmy między innymi stronę sprzedażową systemu BIFOR do organizacji przyjęć. Instytucjom i jednostkom publicznym budujemy czytelne serwisy informacyjne, tak jak dla Przedsiębiorstwa Komunalnego w Wieluniu, oraz narzędzia do obsługi zgłoszeń. W każdym przypadku zaczynamy od jednego, najbardziej dokuczliwego procesu.",
        bullets: [
          "Przetwórstwo spożywcze: dostawy, partie, zamówienia odbiorców",
          "Produkcja: zlecenia, terminy, obciążenie stanowisk",
          "Handel: sklep internetowy zintegrowany z magazynem i Allegro",
          "Biura rachunkowe i doradcze: CRM, terminy, obieg dokumentów",
          "Usługi i wydarzenia: rezerwacje, kalendarze, przypomnienia",
          "Administracja i jednostki publiczne: serwisy i obsługa zgłoszeń",
        ],
      },
      {
        title: "Ile kosztuje programista dla firmy z Sieradza i kiedy program się zwraca",
        text: "Cenę programu wyznacza zakres, a zakres ustalamy z Wami – dlatego kwotę podajemy dopiero w wycenie, za to stałą. Opłacalność można natomiast oszacować od razu. Weźcie jedną powtarzalną czynność i policzcie, ile godzin w miesiącu zabiera wszystkim osobom, które się nią zajmują. Pomnóżcie to przez koszt godziny pracy. Jeżeli program lub automatyzacja ma zdjąć większość tych godzin, łatwo sprawdzić, po ilu miesiącach wydatek się zwróci. Kalkulator pod tekstem liczy to według tego samego wzoru. Projekt rozkładamy na etapy i zaczynamy od najmniejszego modułu, który daje efekt, żeby pierwsze korzyści pojawiły się szybko, a ryzyko było małe.",
        bullets: [
          "Wzór: godziny miesięcznie razy koszt godziny pracy",
          "Wycena stała, przygotowana po rozmowie",
          "Etapy rozliczane osobno",
          "Start od małego modułu z szybkim efektem",
          "Koszty po wdrożeniu (serwer, opieka) podane z góry",
        ],
      },
      {
        title: "Jak pracujemy z firmą z Sieradza",
        text: "Najpierw rozmowa: bezpłatna konsultacja, około 30 minut, przez telefon lub online. Opowiadacie, co Was spowalnia, a my mówimy, czy i jak da się to rozwiązać. Kolejny krok to wizyta w Sieradzu – z Wielunia mamy ok. 45 km – podczas której oglądamy pracę na stanowiskach i zbieramy przykładowe dokumenty. Wycena zawiera stałą cenę, zakres i termin. Budowa przebiega etapami, z pokazami, na których sami klikacie w działający program. Wdrażamy na miejscu i szkolimy pracowników, a potem zajmujemy się opieką: kopie zapasowe, poprawki, rozwój. Kod i prawa autorskie należą do Was od chwili rozliczenia projektu.",
        bullets: [
          "Konsultacja 30 minut, bezpłatnie – telefon lub online",
          "Wizyta w Sieradzu i obejrzenie pracy na stanowiskach",
          "Wycena ze stałą ceną, zakresem i terminem",
          "Budowa etapami z pokazami działającego programu",
          "Wdrożenie i szkolenie u Was w firmie",
          "Opieka po wdrożeniu, kod i prawa autorskie dla klienta",
        ],
      },
    ],
    faq: [
      {
        q: "Szukam programisty w Sieradzu – czy pracujecie z firmami z tego miasta?",
        a: "Tak. Nasze biuro jest w Wieluniu, ok. 45 km od Sieradza, i firmy z powiatu sieradzkiego traktujemy jak lokalne. Przyjeżdżamy na spotkanie przed wyceną, na wdrożenie i szkolenie. Pozostałe ustalenia prowadzimy telefonicznie, mailowo i na wideorozmowach, dzięki czemu projekt idzie sprawnie bez ciągłych dojazdów.",
      },
      {
        q: "Ile kosztuje program na zamówienie?",
        a: "Koszt wynika z zakresu: liczby funkcji, użytkowników i integracji. Prosta automatyzacja to zupełnie inny wydatek niż system z aplikacją mobilną. Dlatego najpierw rozmawiamy i oglądamy proces, a potem dajemy wycenę ze stałą ceną. Dzięki podziałowi na etapy sami decydujecie, ile zamawiacie na początek.",
      },
      {
        q: "Jakie oprogramowanie dla firm z Sieradza tworzycie?",
        a: "CRM, systemy rezerwacji i zleceń, panele dla pracowników, magazyn, aplikacje mobilne oraz integracje sklepów z płatnościami, kurierami i programami księgowymi. Do tego automatyzacje pracy biurowej: raporty, przypomnienia, przenoszenie danych między programami. Robimy zarówno małe narzędzia do jednej czynności, jak i większe systemy rozwijane przez dłuższy czas.",
      },
      {
        q: "Czy da się połączyć Wasz system z programem, który już mamy?",
        a: "Zazwyczaj tak. Jeżeli obecny program ma API, korzystamy z niego. Jeśli nie, sprawdzamy eksport do plików lub bezpośredni dostęp do bazy. Łączyliśmy w ten sposób sklep internetowy z Subiektem nexo. Przed wyceną mówimy jasno, co da się zintegrować w pełni, a co tylko częściowo.",
      },
      {
        q: "Co jeśli firma ma tylko Excela i pocztę?",
        a: "To wystarczy, żeby zacząć. Na arkuszach widać, jakie dane są ważne, a w poczcie – gdzie informacje się gubią. Często pierwszym krokiem nie jest duży program, tylko automatyzacja kilku czynności albo prosty CRM. Istniejące dane z Excela przenosimy, więc przejście na nowe narzędzie nie wymaga wpisywania wszystkiego od zera.",
      },
      {
        q: "Kto jest właścicielem kodu i co się dzieje po wdrożeniu?",
        a: "Właścicielem jest Wasza firma – po rozliczeniu projektu przekazujemy kod źródłowy, dostępy i prawa autorskie. Po wdrożeniu możemy prowadzić opiekę techniczną: aktualizacje, kopie zapasowe, poprawki i rozbudowę o nowe funkcje. Nie jest to obowiązkowe; program działa niezależnie od tego, czy korzystacie z naszej opieki.",
      },
    ],
    related: [
      "strony-internetowe-sieradz",
      "programista-wielun",
      "systemy-crm-dla-firm",
      "automatyzacja-pracy-biurowej",
      "oprogramowanie-na-zamowienie",
    ],
    keywords: [
      "programista Sieradz",
      "oprogramowanie dla firm Sieradz",
      "programy na zamówienie Sieradz",
      "automatyzacja Sieradz",
      "aplikacje dla firm Sieradz",
      "informatyk dla firm Sieradz",
      "software house Sieradz",
      "system CRM Sieradz",
    ],
    portfolio: ["BIFOR", "WTA Perfekt", "Wypożycz Sukienkę"],
  },
];
