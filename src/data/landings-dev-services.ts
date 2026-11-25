import type { LandingPage } from "./types";

/**
 * Podstrony usługowe (kind: "service") o programowaniu na zamówienie:
 * oprogramowanie dla firm, automatyzacja pracy biurowej, integracje sklepów internetowych.
 * Każda ma 3 realizacje z src/data/portfolio.ts (dokładne tytuły).
 */
export const devServiceLandings: LandingPage[] = [
  // 1. Oprogramowanie na zamówienie
  {
    slug: "oprogramowanie-na-zamowienie",
    kind: "service",
    parent: "aplikacje-dedykowane",
    title: "Oprogramowanie na zamówienie – programy dla firm pisane pod Wasz sposób pracy",
    metaTitle: "Oprogramowanie na zamówienie dla firm – OlekCodeTech",
    metaDescription:
      "Oprogramowanie na zamówienie dla firm: programy do zleceń, magazynu, wycen i CRM zamiast Excela. Stała wycena, budowa etapami, kod na własność. Napisz do nas.",
    eyebrow: "Programy na zamówienie",
    lead: [
      "Oprogramowanie na zamówienie to program napisany dla jednej firmy, dokładnie pod jej sposób pracy – zamiast gotowego systemu, do którego trzeba się dopasować. Ma sens wtedy, gdy gotowy program nie pasuje do Waszego procesu, firma prowadzi kluczowe sprawy w Excelu albo korzysta z kilku programów, które nie widzą nawzajem swoich danych.",
      "W OlekCodeTech piszemy programy na zamówienie dla firm od 2019 roku: aplikacje działające w przeglądarce, systemy do zleceń i magazynu, kalkulatory wycen, CRM oraz aplikacje mobilne. Pracujemy z Wielunia dla klientów z całej Polski. Budujemy etapami, ze stałą wyceną każdego etapu, a kod przekazujemy na własność.",
    ],
    sections: [
      {
        title: "Co to jest oprogramowanie na zamówienie i kiedy ma sens",
        text: "Program na zamówienie powstaje od rozmowy o tym, jak naprawdę pracujecie: kto przyjmuje zlecenie, co musi wpisać, kto to potem sprawdza i gdzie informacja ginie. Dopiero na tej podstawie projektujemy ekrany i funkcje. Dzięki temu w programie jest dokładnie to, czego używacie, pod nazwami, które znacie, bez dziesiątek zbędnych pól i modułów. Dedykowane oprogramowanie dla firm sprawdza się najlepiej tam, gdzie proces jest dla firmy ważny i wykonywany codziennie, a obecne narzędzia zaczęły go hamować. Najczęstszy sygnał to arkusz Excela, który rozrósł się do roli systemu: kilka osób pracuje na kopiach, nikt nie wie, która wersja jest aktualna, a jedna pomyłka w formule psuje wycenę albo zamówienie. Program na zamówienie porządkuje to w jednym miejscu, do którego wszyscy mają dostęp i w którym widać, kto co zmienił.",
        bullets: [
          "gotowy program nie obsługuje Waszego procesu w całości i wymaga obejść",
          "kluczowe dane firmy żyją w Excelu, na kartkach i w wiadomościach",
          "macie kilka programów, między którymi ktoś ręcznie przepisuje dane",
          "te same informacje wpisywane są dwa lub trzy razy przez różne osoby",
          "szef dowiaduje się o stanie zleceń, pytając ludzi, zamiast spojrzeć na ekran",
          "opłaty za licencje rosną z każdym nowym pracownikiem",
        ],
      },
      {
        title: "Jakie programy na zamówienie budujemy",
        text: "Najczęściej budujemy aplikacje działające w przeglądarce. Nie trzeba ich instalować, działają na komputerze, tablecie i telefonie, a każdy pracownik loguje się na swoje konto i widzi tylko to, co powinien. Gdy praca odbywa się w terenie, dokładamy aplikację mobilną. Dla firmy transportowej rozwijamy system TMS ze zleceniami, kartotekami, planem załadunku pojazdu, kalendarzem dostępności aut i aplikacją mobilną dla kierowców. Dla wypożyczalni sukienek zbudowaliśmy platformę rezerwacji z kalendarzem terminów, płatnościami online i obsługą kuriera. Dla biura księgowego powstał CRM, a dla sal weselnych BIFOR – system do organizacji przyjęć. Każdy z tych programów zaczął się od jednego modułu, który rozwiązywał najbardziej dokuczliwy problem. Tak samo podchodzimy do każdego nowego zlecenia, niezależnie od branży i wielkości firmy.",
        bullets: [
          "programy do obsługi zleceń, zamówień i harmonogramów pracy",
          "programy magazynowe: stany, przyjęcia, wydania, rezerwacje",
          "ofertowanie i kalkulatory wycen liczące według Waszych reguł",
          "panele dla pracowników oraz panele dla klientów i kontrahentów",
          "systemy CRM: klienci, kontakty, historia współpracy, przypomnienia",
          "aplikacje mobilne dla pracowników w terenie i kierowców",
        ],
      },
      {
        title: "Program na zamówienie a gotowy system – kiedy co wybrać",
        text: "Nie każda firma potrzebuje własnego programu i mówimy o tym wprost już na pierwszej rozmowie. Jeśli gotowy system obsługuje Wasz proces w całości, zwykle lepiej go kupić: działa od ręki, ma sprawdzone funkcje i kosztuje mniej na początku. Tak jest z fakturowaniem, księgowością, kadrami czy pocztą – to obszary uregulowane i podobne w każdej firmie, więc pisanie ich od nowa nie ma sensu. Program na zamówienie wygrywa tam, gdzie pracujecie inaczej niż wszyscy i właśnie na tym zarabiacie: nietypowy sposób wyceny, własny obieg zleceń, specyficzne planowanie. Często najlepsze jest połączenie obu podejść – gotowy program do faktur i magazynu, a obok aplikacja na zamówienie, która wymienia z nim dane. Na konsultacji pomagamy ocenić, która z tych dróg będzie dla Was rozsądniejsza.",
        bullets: [
          "gotowy system: gdy proces jest typowy i program pokrywa go w całości",
          "gotowy system: gdy potrzebujecie rozwiązania od zaraz, bez czekania na budowę",
          "na zamówienie: gdy obchodzicie ograniczenia programu arkuszami i notatkami",
          "na zamówienie: gdy żaden gotowy system nie liczy tak, jak Wy wyceniacie",
          "na zamówienie: gdy program ma łączyć kilka systemów, które już macie",
          "połączenie: gotowy program księgowy plus własna aplikacja do codziennej pracy",
        ],
      },
      {
        title: "Ile kosztuje program na zamówienie i od czego zależy cena",
        text: "Cena programu na zamówienie zależy od zakresu, dlatego nie podajemy jej bez rozmowy. Po bezpłatnej konsultacji i krótkiej analizie dostajecie wycenę stałą – kwotę za konkretny, opisany zakres, a nie szacunek godzin, który potem rośnie. Żeby ograniczyć ryzyko, dzielimy pracę na etapy. Pierwszy etap to MVP, czyli najmniejsza wersja programu, która już rozwiązuje jeden realny problem i z której zespół zaczyna korzystać. Kolejne moduły wyceniamy osobno i dokładamy wtedy, gdy są potrzebne. Dzięki temu płacicie za to, co faktycznie działa, a decyzję o dalszej rozbudowie podejmujecie na podstawie doświadczeń z używania programu, nie na podstawie założeń sprzed startu. Do ceny budowy dochodzi koszt utrzymania programu na serwerze, o którym mówimy od razu, w tej samej wycenie.",
        bullets: [
          "liczba procesów, które program ma obsłużyć",
          "liczba ról użytkowników i poziomów uprawnień",
          "połączenia z innymi programami: księgowość, magazyn, sklep, kurierzy",
          "przeniesienie danych z Excela lub starego systemu",
          "aplikacja mobilna albo praca bez dostępu do internetu",
          "raporty, wydruki i dokumenty generowane przez program",
        ],
      },
      {
        title: "Jak powstaje program na zamówienie: od rozmowy do opieki",
        text: "Zaczynamy od rozmowy, na której opowiadacie, jak dziś wygląda praca i co najbardziej przeszkadza. Potem robimy analizę: rozpisujemy proces krok po kroku, role użytkowników i dane, a wynik dostajecie w formie opisu zakresu i makiet ekranów. Na tej podstawie przygotowujemy stałą wycenę. Budowa idzie etapami, a po każdym pokazujemy działający fragment – klikacie w prawdziwy program, nie oglądacie prezentacji. Uwagi z pokazów trafiają do kolejnego etapu, więc niespodzianek na końcu jest mało. Przed startem przenosimy dane, szkolimy zespół i jesteśmy pod ręką w pierwszych dniach pracy. Po wdrożeniu możemy zostać jako opieka: poprawki, kopie, aktualizacje i kolejne moduły. O postępach informujemy na bieżąco, więc w każdej chwili wiecie, co jest gotowe, a co jeszcze przed nami.",
        bullets: [
          "bezpłatna rozmowa o potrzebach i obecnym sposobie pracy",
          "analiza procesu, opis zakresu i makiety ekranów",
          "stała wycena z podziałem na etapy",
          "budowa etapami z pokazem działającego programu po każdym etapie",
          "przeniesienie danych, wdrożenie i szkolenie zespołu",
          "opieka po wdrożeniu i rozbudowa o kolejne moduły",
        ],
      },
      {
        title: "Własność kodu, bezpieczeństwo, kopie zapasowe i hosting",
        text: "Program na zamówienie jest Wasz. Po rozliczeniu przekazujemy kod źródłowy, dostęp do repozytorium i prawa autorskie, więc możecie rozwijać system z nami albo z dowolnym innym zespołem. Piszemy w popularnych technologiach – React, Next.js, TypeScript, Node.js, PostgreSQL, a aplikacje mobilne w React Native – żeby znalezienie programisty do dalszej pracy nie było problemem. Bezpieczeństwo ustalamy na etapie analizy: kto co widzi, kto może edytować, a kto tylko czytać. Każdy użytkownik ma własne konto, połączenie jest szyfrowane, a baza danych ma regularne kopie zapasowe. Program może działać na serwerze, którym się opiekujemy, albo na Waszej infrastrukturze – decyzja należy do Was. Razem z programem dostajecie dokumentację techniczną i instrukcję dla użytkowników, żeby nowy pracownik mógł szybko zacząć z niego korzystać.",
        bullets: [
          "kod źródłowy, repozytorium i prawa autorskie przekazane klientowi",
          "popularne technologie, które przejmie inny zespół programistów",
          "osobne konta i uprawnienia dopasowane do stanowisk",
          "szyfrowane połączenie i regularne kopie zapasowe bazy danych",
          "hosting pod naszą opieką albo na Waszym serwerze",
          "dokumentacja techniczna i instrukcja dla użytkowników",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje program na zamówienie dla małej firmy?",
        a: "To zależy od zakresu: liczby procesów, użytkowników i połączeń z innymi programami. Dlatego nie podajemy kwot bez rozmowy. Po bezpłatnej konsultacji przygotowujemy wycenę stałą, czyli cenę za konkretny, opisany zakres. Małym firmom proponujemy start od najmniejszego modułu, który rozwiązuje jeden problem. Kolejne części wyceniamy osobno i dokładamy dopiero wtedy, gdy pierwsza sprawdzi się w codziennej pracy.",
      },
      {
        q: "Ile trwa napisanie programu na zamówienie?",
        a: "Pierwsza działająca wersja prostego programu powstaje zwykle w ciągu kilku tygodni, rozbudowany system z wieloma modułami w kilka miesięcy. Budujemy etapami, więc nie czekacie na całość – zespół zaczyna pracować na pierwszym module, a kolejne dochodzą w trakcie. Dokładny harmonogram podajemy razem z wyceną, po analizie zakresu, bo dopiero wtedy wiadomo, ile jest pracy.",
      },
      {
        q: "Czym różni się oprogramowanie na zamówienie od gotowego programu?",
        a: "Gotowy program jest taki sam dla wszystkich klientów: kupujecie dostęp i dopasowujecie do niego swoją pracę. Oprogramowanie na zamówienie powstaje dla jednej firmy, więc ma dokładnie te funkcje, pola i raporty, których potrzebujecie. Gotowy system działa od razu i jest tańszy na starcie. Program na zamówienie wymaga czasu na budowę, ale nie zmusza do obejść i należy do Was, razem z kodem.",
      },
      {
        q: "Czy da się zastąpić Excela aplikacją?",
        a: "Tak, to jedno z naszych najczęstszych zleceń. Aplikacja zamiast Excela ma jedną wspólną bazę danych, więc znika problem kopii pliku i pytania, która wersja jest aktualna. Kilka osób pracuje jednocześnie, każda z własnymi uprawnieniami, a obliczenia są zaszyte w programie i nie da się ich przypadkiem skasować. Dane z dotychczasowych arkuszy przenosimy do nowego programu przed startem.",
      },
      {
        q: "Czy program na zamówienie będzie moją własnością?",
        a: "Tak. Po rozliczeniu przekazujemy kod źródłowy, dostęp do repozytorium, dokumentację i prawa autorskie. Nie jesteście związani z nami abonamentem za samo korzystanie z programu. Możecie rozwijać system z nami albo zlecić to innemu zespołowi. Piszemy w popularnych technologiach, takich jak React, Next.js, Node.js i PostgreSQL, żeby przejęcie kodu przez innego programistę było możliwe bez przepisywania.",
      },
      {
        q: "Czy program na zamówienie można połączyć z programem księgowym lub magazynowym?",
        a: "W większości przypadków tak. Jeśli program księgowy lub magazynowy ma API, łączymy się przez nie. Jeśli nie ma, korzystamy z plików CSV lub XML albo z dostępu do bazy danych. Możliwości sprawdzamy na etapie analizy, przed wyceną. Mamy doświadczenie między innymi z połączeniem sklepu WooCommerce z magazynem w Subiekt nexo, a także z płatnościami, kurierami i Microsoft 365.",
      },
      {
        q: "Co się dzieje z programem po wdrożeniu?",
        a: "Program działa na serwerze i wymaga podstawowej opieki: kopii zapasowych, aktualizacji i reakcji, gdy coś przestanie działać. Możemy się tym zająć w ramach stałej opieki albo przekazać całość Waszemu informatykowi razem z dokumentacją. W praktyce po kilku tygodniach używania pojawiają się pomysły na usprawnienia i nowe moduły. Wyceniamy je osobno, jako kolejne etapy, w tym samym trybie co budowę.",
      },
    ],
    related: [
      "aplikacje-webowe-react-nextjs",
      "systemy-crm-dla-firm",
      "aplikacje-mobilne-dla-firm",
      "automatyzacja-pracy-biurowej",
      "programista-wielun",
    ],
    keywords: [
      "oprogramowanie na zamówienie",
      "programy na zamówienie dla firm",
      "program na zamówienie",
      "dedykowane oprogramowanie dla firm",
      "aplikacja zamiast Excela",
      "pisanie programów na zamówienie",
      "oprogramowanie dla małej firmy",
    ],
    portfolio: ["CRM E-Numerika Biuro Księgowe", "BIFOR", "Wypożycz Sukienkę"],
  },

  // 2. Automatyzacja pracy biurowej
  {
    slug: "automatyzacja-pracy-biurowej",
    kind: "service",
    parent: "automatyzacja-procesow-biznesowych",
    calculator: true,
    title: "Automatyzacja pracy biurowej – powtarzalne czynności oddajcie programowi",
    metaTitle: "Automatyzacja pracy biurowej w firmie – OlekCodeTech",
    metaDescription:
      "Automatyzacja pracy biurowej: przepisywanie danych, raporty PDF i Excel, pobieranie danych ze stron, powiadomienia. Policz opłacalność w kalkulatorze.",
    eyebrow: "Automatyzacja biura",
    lead: [
      "Automatyzacja pracy biurowej polega na tym, że powtarzalne czynności wykonywane przy komputerze – przepisywanie danych, zbieranie informacji ze stron, przygotowywanie raportów, wysyłanie powiadomień – przejmuje program. Jest dla firm, w których pracownicy codziennie lub co tydzień robią to samo, według tych samych reguł, i tracą na to czas potrzebny do ważniejszych zadań.",
      "W OlekCodeTech piszemy takie programy na zamówienie: od prostych połączeń w n8n i Make po własne skrypty w Pythonie i Node.js, które logują się do portali, pobierają dane i generują gotowe dokumenty. Niżej opisujemy, co da się zautomatyzować, jak to wycenić i jak sprawdzić w kalkulatorze, czy to się opłaca.",
    ],
    sections: [
      {
        title: "Jakie czynności biurowe da się oddać programowi",
        text: "Automatyzacja pracy w firmie zaczyna się zwykle od jednej, konkretnej czynności, która wszystkich męczy. Ktoś codziennie rano otwiera kilka portali i spisuje nowe ogłoszenia do arkusza. Ktoś inny przepisuje zamówienia z poczty do programu magazynowego albo co poniedziałek składa raport z trzech plików. To praca, którą program wykona tak samo każdego dnia, bez literówek i bez przypominania. Robot do przepisywania danych nie jest niczym egzotycznym – to skrypt, który czyta dane w jednym miejscu i wpisuje je w drugim. Budowaliśmy między innymi dashboard sprzedaży tworzony automatycznie z danych zamówień sklepu oraz generatory dokumentów i etykiet w Pythonie. Człowiek zostaje tam, gdzie trzeba podjąć decyzję. Zaczynamy od jednej czynności, a kolejne dokładamy, gdy pierwsza sprawdzi się w praktyce.",
        bullets: [
          "przepisywanie danych między programami, arkuszami i pocztą",
          "zbieranie ofert, aukcji, ogłoszeń i cen ze stron oraz portali",
          "automatyczne raporty PDF i Excel wysyłane o ustalonej porze",
          "powiadomienia e-mail i SMS o zdarzeniach oraz przypomnienia o terminach",
          "faktury, oferty, umowy i etykiety wypełniane danymi z systemu",
          "obsługa zapytań ze strony: zapis, potwierdzenie dla klienta, zadanie dla pracownika",
        ],
      },
      {
        title: "Jak rozpoznać, że czynność nadaje się do automatyzacji",
        text: "Nie wszystko warto automatyzować. Dobry kandydat to czynność, którą da się opisać jak instrukcję dla nowego pracownika: otwórz to, skopiuj tamto, jeśli wartość jest większa niż X, zrób Y. Jeżeli potraficie spisać takie kroki na kartce, program też je wykona. Liczy się również częstotliwość – automatyzacja powtarzalnych czynności zwraca się najszybciej przy zadaniach wykonywanych codziennie lub co tydzień, a nie raz na kwartał. Trzeci warunek to dane w postaci cyfrowej: strona internetowa, plik, e-mail, baza, program z eksportem. Gorzej nadają się zadania wymagające oceny sytuacji, negocjacji albo rozmowy z klientem. Tu program może przygotować dane, ale decyzja zostaje u człowieka. Jeśli nie macie pewności, pokażcie nam czynność na konsultacji, a powiemy, czy warto się nią zajmować.",
        bullets: [
          "czynność jest powtarzalna i za każdym razem wygląda podobnie",
          "da się ją opisać regułami typu „jeśli – to”",
          "wykonujecie ją codziennie, co tydzień lub przy każdym zamówieniu",
          "dane są cyfrowe: strona, plik, e-mail, arkusz, baza danych",
          "pomyłka przy ręcznym wykonaniu kosztuje czas lub pieniądze",
          "wynik da się łatwo sprawdzić, np. porównać z dotychczasowym raportem",
        ],
      },
      {
        title: "Gotowe klocki czy własny program: n8n i Make a Python i Node.js",
        text: "Narzędzie dobieramy do zadania, nie odwrotnie. Jeśli trzeba połączyć popularne usługi – formularz, pocztę, arkusz, CRM – zwykle wystarczą n8n lub Make. To narzędzia, w których automatyzację układa się z gotowych klocków, więc wdrożenie jest szybkie, a drobne zmiany można później robić samodzielnie. Własny skrypt lub program w Pythonie albo Node.js piszemy wtedy, gdy klocki nie wystarczają: trzeba zalogować się do portalu, który nie ma API, przejść przez kilka ekranów, zastosować nietypową logikę albo przetworzyć bardzo dużo rekordów. Własny program daje też pełną kontrolę nad tym, gdzie działają i gdzie są zapisywane dane. Często łączymy oba podejścia w jednym rozwiązaniu. O wyborze decydujemy po analizie zadania i wyjaśniamy, dlaczego proponujemy takie, a nie inne rozwiązanie.",
        bullets: [
          "n8n i Make: łączenie popularnych usług, które mają gotowe moduły",
          "n8n i Make: proste przepływy, które zespół chce potem sam modyfikować",
          "własny skrypt: logowanie do portalu i pobieranie danych bez API",
          "własny skrypt: nietypowe reguły, obliczenia i wyjątki",
          "własny skrypt: duże wolumeny danych i praca według harmonogramu",
          "Python: raporty PDF i Excel, dokumenty, etykiety, przetwarzanie plików",
        ],
      },
      {
        title: "Pobieranie danych ze stron (web scraping) – zgodnie z zasadami",
        text: "Pobieranie danych ze stron, czyli web scraping, dla firm oznacza najczęściej śledzenie cen, ofert, przetargów, aukcji lub ogłoszeń bez codziennego klikania po portalach. Zanim napiszemy pierwszą linijkę kodu, sprawdzamy, na jakich zasadach wolno to robić. Czytamy regulamin serwisu i szukamy oficjalnego API – jeśli serwis je udostępnia, korzystamy z niego, bo jest stabilniejsze i nie budzi wątpliwości. Program piszemy tak, żeby nie obciążał cudzego serwera: pobiera tylko potrzebne dane, w rozsądnych odstępach. Osobną sprawą są dane osobowe, które podlegają RODO niezależnie od tego, że są widoczne publicznie. To ogólne dobre praktyki, a nie porada prawna – w wątpliwych przypadkach zalecamy konsultację z prawnikiem. Jeśli regulamin serwisu nie pozwala na automatyczne pobieranie, mówimy o tym wprost i szukamy innego źródła danych.",
        bullets: [
          "sprawdzenie regulaminu serwisu przed rozpoczęciem prac",
          "oficjalne API zamiast czytania strony, jeśli serwis je udostępnia",
          "pobieranie tylko potrzebnych danych, w rozsądnych odstępach czasu",
          "ostrożność przy danych osobowych i zgodność z RODO",
          "logowanie do portalu wyłącznie na Wasze konto i w ramach Waszych uprawnień",
          "wynik w wygodnej formie: arkusz, raport, powiadomienie lub baza danych",
        ],
      },
      {
        title: "Jak policzyć, czy automatyzacja się opłaca",
        text: "Opłacalność automatyzacji da się policzyć przed startem, na Waszych liczbach. Wzór jest prosty: liczba godzin, które czynność zajmuje dziennie, razy liczba osób, które ją wykonują, razy koszt godziny pracy, razy liczba dni roboczych w miesiącu. Wynik to miesięczny koszt ręcznej pracy, który porównujecie z jednorazowym kosztem napisania programu i niewielkim kosztem jego utrzymania. Niżej na tej stronie znajdziecie kalkulator, który liczy to za Was – wystarczy wpisać swoje wartości. Do rachunku warto dodać rzeczy, których wzór nie pokazuje: pomyłki przy przepisywaniu, opóźnione raporty, zastępstwa w czasie urlopów i to, że program pracuje także w nocy oraz w weekendy. Jeśli rachunek wychodzi na granicy opłacalności, zwykle lepiej zacząć od innej, częściej wykonywanej czynności.",
        bullets: [
          "godziny dziennie poświęcane na daną czynność",
          "liczba osób, które ją wykonują",
          "koszt godziny pracy pracownika, razem z kosztami pracodawcy",
          "liczba dni roboczych w miesiącu",
          "koszt pomyłek, poprawek i opóźnień przy pracy ręcznej",
          "jednorazowy koszt wdrożenia i koszt utrzymania programu",
        ],
      },
      {
        title: "Wdrożenie i utrzymanie: co, gdy portal zmieni wygląd",
        text: "Wdrożenie zaczynamy od tego, że pokazujecie nam czynność na żywo, krok po kroku. Spisujemy reguły i wyjątki, a potem wyceniamy zakres stałą kwotą. Program testujemy na prawdziwych danych i przez pewien czas uruchamiamy obok pracy ręcznej, żeby porównać wyniki. Dopiero gdy się zgadzają, przejmuje zadanie w całości. Automatyzacja wymaga też opieki, bo świat wokół niej się zmienia: portal przebudowuje stronę, dostawca zmienia format pliku, program dostaje aktualizację. Dlatego każdy skrypt zapisuje, co zrobił, i wysyła powiadomienie, gdy coś pójdzie inaczej niż zwykle. W ramach opieki poprawiamy program po takich zmianach, żeby przerwa w działaniu była jak najkrótsza. Kod i dokumentację przekazujemy Wam, więc programem może się potem zająć także Wasz informatyk lub inny zespół.",
        bullets: [
          "pokaz czynności na żywo i spisanie reguł oraz wyjątków",
          "stała wycena, start od jednej, najbardziej uciążliwej czynności",
          "testy na prawdziwych danych i okres pracy równoległej",
          "dziennik działań programu i powiadomienia o błędach",
          "poprawki, gdy portal zmieni wygląd lub dostawca format danych",
          "dokumentacja i przekazanie kodu oraz dostępów",
        ],
      },
    ],
    faq: [
      {
        q: "Czy automatyzacja opłaca się w małej firmie?",
        a: "Często tak, bo w małej firmie każda godzina pracownika jest bardziej odczuwalna. Wystarczy jedna czynność wykonywana codziennie, żeby rachunek zaczął się spinać. Policzcie to wzorem: godziny dziennie razy liczba osób, razy koszt godziny, razy dni robocze. Na tej stronie jest kalkulator, który zrobi to za Was. Jeśli wynik wyjdzie niski, powiemy uczciwie, że automatyzacja w tym miejscu nie ma sensu.",
      },
      {
        q: "Ile kosztuje automatyzacja pracy biurowej?",
        a: "Zależy od zakresu: liczby czynności, programów, z którymi trzeba się połączyć, oraz liczby wyjątków od reguły. Dlatego kwotę podajemy dopiero po bezpłatnej konsultacji, na której pokazujecie nam czynność na żywo. Wycena jest stała i dotyczy opisanego zakresu. Proponujemy start od najmniejszego modułu, czyli jednej, najbardziej uciążliwej czynności. Kolejne dokładacie, gdy zobaczycie, że pierwsza działa.",
      },
      {
        q: "Jakie czynności w biurze można zautomatyzować?",
        a: "Te, które są powtarzalne, wykonywane według stałych reguł i oparte na danych cyfrowych. Najczęściej są to: przepisywanie danych między programami, zbieranie ofert i cen ze stron, generowanie raportów PDF i Excel, wystawianie dokumentów, wysyłka powiadomień e-mail i SMS, przypomnienia o terminach oraz obsługa zapytań ze strony. Zadania wymagające oceny sytuacji lub rozmowy z klientem zostają przy człowieku, a program tylko przygotowuje do nich dane.",
      },
      {
        q: "Czy pobieranie danych ze stron internetowych jest legalne?",
        a: "To zależy od serwisu, rodzaju danych i sposobu ich wykorzystania, dlatego nie ma jednej odpowiedzi. Przed rozpoczęciem prac sprawdzamy regulamin serwisu i to, czy udostępnia oficjalne API – jeśli tak, korzystamy z niego. Szczególnej ostrożności wymagają dane osobowe, które podlegają RODO. Stosujemy dobre praktyki, ale nie udzielamy porad prawnych. W wątpliwych sytuacjach zalecamy konsultację z prawnikiem przed startem projektu.",
      },
      {
        q: "Czy program może sam logować się do portalu i pobierać dane?",
        a: "Tak, piszemy programy, które logują się na Wasze konto w portalu, przechodzą przez kolejne ekrany i pobierają potrzebne dane, na przykład nowe zlecenia, oferty lub dokumenty. Robimy to wtedy, gdy portal nie udostępnia API i gdy pozwala na to jego regulamin. Program działa według harmonogramu, a wynik trafia do arkusza, raportu, bazy danych albo jako powiadomienie na e-mail.",
      },
      {
        q: "Co się stanie, gdy strona lub portal zmieni wygląd?",
        a: "Program pobierający dane ze strony może wtedy przestać działać poprawnie i trzeba go dostosować. Dlatego każdy nasz skrypt zapisuje przebieg pracy i wysyła powiadomienie, gdy wynik odbiega od oczekiwanego, na przykład gdy nie znajdzie żadnych danych. W ramach opieki poprawiamy program po takiej zmianie. Jeśli portal ma API, wybieramy je w pierwszej kolejności, bo zmienia się znacznie rzadziej niż wygląd strony.",
      },
      {
        q: "Czym różni się własny skrypt od automatyzacji w n8n lub Make?",
        a: "n8n i Make to narzędzia, w których automatyzację układa się z gotowych modułów dla popularnych usług. Sprawdzają się przy typowych połączeniach, na przykład formularza z pocztą i arkuszem. Własny skrypt w Pythonie lub Node.js piszemy, gdy potrzebne jest logowanie do portalu bez API, nietypowa logika, generowanie dokumentów albo praca na dużej liczbie rekordów. Dobieramy rozwiązanie do zadania i często łączymy oba podejścia.",
      },
    ],
    related: [
      "automatyzacja-n8n-make",
      "automatyzacja-obslugi-leadow-crm",
      "oprogramowanie-na-zamowienie",
      "integracje-microsoft-365-sharepoint",
      "integracje-api-crm-erp",
    ],
    keywords: [
      "automatyzacja pracy biurowej",
      "automatyzacja pracy w firmie",
      "automatyzacja powtarzalnych czynności",
      "automatyczne raporty PDF Excel",
      "pobieranie danych ze stron",
      "web scraping dla firm",
      "robot do przepisywania danych",
    ],
    portfolio: ["CRM E-Numerika Biuro Księgowe", "MS Nadruki", "Plonio.pl"],
  },

  // 3. Integracje sklepów internetowych
  {
    slug: "integracje-sklepow-internetowych",
    kind: "service",
    parent: "integracje-systemow-it",
    title: "Integracja sklepu internetowego z magazynem, Allegro, kurierami i fakturami",
    metaTitle: "Integracje sklepów internetowych – OlekCodeTech",
    metaDescription:
      "Integracja sklepu internetowego z magazynem, Allegro, kurierami i fakturami. Synchronizacja stanów, WooCommerce z Subiekt nexo, etykiety bez przepisywania.",
    eyebrow: "Integracje e-commerce",
    lead: [
      "Integracja sklepu internetowego to połączenie go z programami, na których pracuje firma – magazynem, fakturami, kurierami, Allegro i płatnościami – tak, żeby zamówienia, stany i ceny przenosiły się same. Jest dla sklepów, w których ktoś ręcznie przepisuje zamówienia, poprawia stany po każdej sprzedaży albo osobno wystawia faktury i etykiety.",
      "W OlekCodeTech łączymy sklepy z zapleczem firmy od 2019 roku. Pracujemy głównie z WooCommerce, ale także z innymi systemami, które mają API lub eksport plików. Przygotowaliśmy między innymi integrację sklepu elektrycznego z magazynem w Subiekt nexo oraz platformę wypożyczalni z płatnościami Przelewy24 i kurierem przez Furgonetkę.",
    ],
    sections: [
      {
        title: "Jakie integracje sklepu internetowego robimy",
        text: "Sklep internetowy rzadko działa sam. Towar jest w programie magazynowym, faktury wystawia się w innym miejscu, paczki nadaje przez panel kuriera, a część sprzedaży idzie przez Allegro. Dopóki zamówień jest kilka dziennie, da się to spinać ręcznie. Gdy ich przybywa, każde przepisanie numeru, adresu czy ilości staje się okazją do pomyłki. Integracja sklepu z magazynem i fakturami sprawia, że dana informacja jest wpisywana raz, a pozostałe programy dostają ją automatycznie. Łączymy sklep z tymi systemami, których faktycznie używacie, i zaczynamy od połączenia, które dziś zabiera najwięcej czasu – zwykle są to stany magazynowe albo etykiety kurierskie. Kolejne połączenia dokładamy etapami, bez zatrzymywania sprzedaży, a każde z nich wyceniamy osobno, stałą kwotą.",
        bullets: [
          "sklep i magazyn lub ERP: stany, ceny, produkty, zamówienia",
          "sklep i kurierzy: etykiety, statusy przesyłek, wybór paczkomatu (InPost, DPD, Furgonetka)",
          "sklep i Allegro oraz inne platformy sprzedaży: oferty, stany, zamówienia",
          "płatności online: Przelewy24, PayU i automatyczna zmiana statusu zamówienia",
          "faktury i księgowość: dokument sprzedaży tworzony z zamówienia",
          "CRM i mailing: klienci oraz historia zakupów w jednym miejscu",
        ],
      },
      {
        title: "Zamówienie bez przepisywania: od koszyka do paczki",
        text: "Dobrze zintegrowany sklep obsługuje typowe zamówienie bez udziału człowieka aż do momentu pakowania. Klient płaci, a sklep od razu wie, że płatność doszła. Zamówienie trafia do programu magazynowego, gdzie powstaje dokument sprzedaży i towar schodzi ze stanu. Na podstawie adresu i wybranej dostawy generuje się etykieta kurierska, a numer przesyłki wraca do sklepu. Klient dostaje wiadomość ze statusem i linkiem do śledzenia. Nowy stan magazynowy trafia do sklepu i na Allegro, więc nie sprzedacie towaru, którego już nie ma. Pracownik drukuje etykietę i pakuje paczkę. Zajmuje się tylko wyjątkami: zamówieniem z uwagami, brakiem towaru, zwrotem. Reszta dzieje się w tle, także wieczorem i w weekendy, kiedy nikogo nie ma w biurze, a klienci nadal kupują.",
        bullets: [
          "zamówienie i potwierdzona płatność w sklepie",
          "dokument sprzedaży lub faktura w programie magazynowym",
          "etykieta kurierska wygenerowana z danych zamówienia",
          "zdjęcie towaru ze stanu i aktualizacja stanów we wszystkich kanałach",
          "powiadomienie klienta ze statusem i numerem przesyłki",
          "lista wyjątków do ręcznego sprawdzenia przez pracownika",
        ],
      },
      {
        title: "Gotowa wtyczka lub integrator czy integracja na zamówienie",
        text: "Nie każdą integrację trzeba pisać od zera i mówimy o tym otwarcie. Dla popularnych połączeń istnieją gotowe wtyczki i integratory – przy standardowym sklepie i typowych potrzebach bywają najszybszym i najtańszym wyjściem. Wtedy pomagamy je dobrać, skonfigurować i przetestować. Integracja pisana na zamówienie ma sens, gdy gotowe rozwiązanie nie obsługuje Waszych reguł. Dla sklepu elektrycznego RAV przygotowaliśmy połączenie WooCommerce z magazynem w Subiekt nexo tak, by oprócz stanów i cen działały rabaty przypisane do konkretnych klientów – tego typu zasady rzadko mieszczą się w gotowej wtyczce. Własna integracja nie wiąże się też z abonamentem liczonym od liczby zamówień i należy do Was razem z kodem. Na konsultacji porównujemy obie drogi i mówimy, która wyjdzie korzystniej.",
        bullets: [
          "gotowa wtyczka: standardowy sklep, typowe połączenie, niewiele wyjątków",
          "gotowa wtyczka: gdy liczy się szybki start i niski koszt wejścia",
          "na zamówienie: indywidualne cenniki i rabaty per klient",
          "na zamówienie: nietypowe warianty, zestawy lub kilka magazynów",
          "na zamówienie: system, do którego nie ma gotowego integratora",
          "na zamówienie: gdy abonament integratora rośnie z liczbą zamówień",
        ],
      },
      {
        title: "Najczęstsze problemy w integracjach sklepów i jak je rozwiązujemy",
        text: "Większość kłopotów z integracjami bierze się z kilku powtarzających się przyczyn. Rozjechane stany to zwykle efekt tego, że dwa systemy uważają się za najważniejsze – dlatego na początku ustalamy, który jest źródłem prawdy dla stanów, a który dla cen i opisów. Zdublowane zamówienia pojawiają się, gdy integracja ponawia wysyłkę po błędzie, więc każde zamówienie dostaje unikalny identyfikator i jest sprawdzane przed zapisem. Warianty produktów wymagają dokładnego powiązania każdego rozmiaru i koloru z osobną pozycją w magazynie. Stawki VAT mapujemy jawnie, zamiast zakładać jedną dla wszystkiego. Limity API obsługujemy kolejką, która wysyła dane partiami i ponawia próbę po przerwie. Każdy z tych przypadków sprawdzamy na próbnych zamówieniach jeszcze przed uruchomieniem integracji na działającym sklepie.",
        bullets: [
          "rozjechane stany: jeden system nadrzędny i cykliczne uzgadnianie różnic",
          "dublowanie zamówień: unikalny identyfikator i kontrola przed zapisem",
          "warianty produktów: powiązanie każdego wariantu z pozycją magazynową",
          "różne stawki VAT: jawne mapowanie stawek między systemami",
          "limity API: kolejka, wysyłka partiami i ponawianie po błędzie",
          "brak informacji o błędach: dziennik operacji i powiadomienia e-mail",
        ],
      },
      {
        title: "Nie tylko WooCommerce: API, pliki CSV i XML, baza danych",
        text: "Najwięcej integracji robimy dla sklepów WooCommerce, bo na tej platformie budujemy też same sklepy – między innymi WTA Perfekt z ponad tysiącem produktów czy MS Nadruki z konfiguratorem nadruków. Sposób pracy jest jednak taki sam dla każdego systemu, który potrafi wymieniać dane. Jeśli platforma sklepowa lub program magazynowy ma API, łączymy się przez nie. Jeśli potrafi tylko eksportować i importować pliki, budujemy wymianę opartą na plikach CSV lub XML, uruchamianą według harmonogramu. Gdy nie ma ani API, ani eksportu, sprawdzamy, czy da się bezpiecznie czytać dane bezpośrednio z bazy. Możliwości weryfikujemy przed wyceną, żebyście wiedzieli, co jest realne. Podobnie łączymy sklep z cennikami i stanami, które dostawcy oraz hurtownie udostępniają w plikach.",
        bullets: [
          "WooCommerce: własne wtyczki pisane pod konkretną integrację",
          "inne platformy sklepowe i programy z dostępnym REST API",
          "wymiana przez pliki CSV i XML według harmonogramu",
          "odczyt z bazy danych, gdy program nie ma API ani eksportu",
          "cenniki i stany od dostawców oraz hurtowni w plikach",
          "sprawdzenie możliwości technicznych przed wyceną",
        ],
      },
      {
        title: "Jak prowadzimy integrację: testy na kopii i monitoring po wdrożeniu",
        text: "Integracja dotyka zamówień i pieniędzy, dlatego nie testujemy jej na działającym sklepie. Zaczynamy od rozmowy i spisania, jakie dane mają płynąć, w którą stronę i jak często. Sprawdzamy API oraz dostępy, a potem przedstawiamy stałą wycenę. Budujemy i testujemy na kopii sklepu oraz na testowej bazie magazynu: składamy próbne zamówienia, sprawdzamy warianty, rabaty, zwroty i sytuacje, gdy jeden z systemów chwilowo nie odpowiada. Wdrożenie planujemy na spokojniejszy moment i przez pierwsze dni porównujemy wyniki z ręczną kontrolą. Po starcie integracja jest monitorowana – zapisuje każdą operację i powiadamia o błędach, a my reagujemy, gdy któryś z dostawców zmieni swoje API. Całość opisujemy w dokumentacji, którą dostajecie razem z kodem integracji.",
        bullets: [
          "rozmowa i spisanie przepływu danych między systemami",
          "sprawdzenie API, dostępów i ograniczeń przed wyceną",
          "stała wycena, start od najważniejszego połączenia",
          "budowa i testy na kopii sklepu z próbnymi zamówieniami",
          "wdrożenie i kontrola wyników w pierwszych dniach",
          "monitoring, dziennik operacji i opieka po zmianach API",
        ],
      },
    ],
    faq: [
      {
        q: "Czy da się połączyć sklep WooCommerce z Subiektem nexo?",
        a: "Tak. Przygotowaliśmy taką integrację dla sklepu elektrycznego: stany i ceny z magazynu w Subiekt nexo trafiają do sklepu WooCommerce, razem z rabatami przypisanymi do konkretnych klientów. Zakres można rozszerzyć o przekazywanie zamówień i dokumentów sprzedaży. Sposób połączenia zależy od wersji programu i dostępnych dodatków, dlatego przed wyceną sprawdzamy, jak Subiekt jest u Was zainstalowany i jakie dane ma wymieniać ze sklepem.",
      },
      {
        q: "Jak zintegrować sklep z Allegro, żeby stany się zgadzały?",
        a: "Kluczowe jest jedno źródło prawdy o stanach – najlepiej program magazynowy, a gdy go nie ma, sklep. Każda sprzedaż, w sklepie i na Allegro, zdejmuje towar z tego jednego miejsca, a nowy stan jest od razu rozsyłany do pozostałych kanałów. Dodatkowo integracja cyklicznie porównuje stany i wyrównuje różnice. Dzięki temu nie sprzedajecie towaru, którego już nie ma na półce.",
      },
      {
        q: "Ile kosztuje integracja sklepu internetowego z magazynem?",
        a: "Zależy od zakresu: czy mają się synchronizować same stany, czy także ceny, zamówienia i faktury, ile jest wariantów produktów oraz czy program magazynowy ma API. Dlatego kwotę podajemy po bezpłatnej konsultacji i sprawdzeniu możliwości technicznych. Wycena jest stała. Zaczynamy od najmniejszego modułu, zwykle synchronizacji stanów, a kolejne połączenia dokładamy jako osobne etapy.",
      },
      {
        q: "Czy lepsza jest gotowa wtyczka, czy integracja pisana na zamówienie?",
        a: "Jeśli macie standardowy sklep, a gotowa wtyczka lub integrator obsługuje Wasze połączenie bez obejść, zwykle warto z niej skorzystać – jest szybsza i tańsza na starcie. Integracja na zamówienie ma sens przy indywidualnych cennikach, rabatach per klient, nietypowych wariantach albo systemie, do którego nie ma gotowego rozwiązania. Na konsultacji mówimy uczciwie, która droga będzie dla Was rozsądniejsza.",
      },
      {
        q: "Czy sklep może automatycznie generować etykiety kurierskie InPost i DPD?",
        a: "Tak. Po opłaceniu zamówienia integracja wysyła dane odbiorcy i paczki do przewoźnika, pobiera gotową etykietę i zapisuje numer przesyłki przy zamówieniu. Klient dostaje wiadomość z linkiem do śledzenia. Łączymy sklepy bezpośrednio z InPost i DPD albo przez Furgonetkę, która obsługuje wielu przewoźników w jednym miejscu. Pracownik drukuje etykiety i pakuje paczki, bez przepisywania adresów.",
      },
      {
        q: "Co zrobić, gdy program magazynowy nie ma API?",
        a: "Najpierw sprawdzamy, czy potrafi eksportować i importować pliki CSV lub XML – wtedy budujemy wymianę danych uruchamianą według harmonogramu, na przykład co kilkanaście minut. Jeśli nie ma także eksportu, oceniamy, czy da się bezpiecznie czytać dane bezpośrednio z bazy programu. Zdarza się, że żadna z tych dróg nie jest możliwa. Mówimy o tym przed wyceną, a nie w trakcie prac.",
      },
      {
        q: "Czy integracja może zepsuć zamówienia w działającym sklepie?",
        a: "Ograniczamy to ryzyko sposobem pracy. Integrację budujemy i testujemy na kopii sklepu, z próbnymi zamówieniami, a nie na wersji, na której kupują klienci. Wdrożenie planujemy na spokojniejszy moment, wcześniej robimy kopię zapasową, a przez pierwsze dni porównujemy wyniki z ręczną kontrolą. Każda operacja jest zapisywana w dzienniku, więc w razie błędu widać, co się stało, i można to szybko poprawić.",
      },
    ],
    related: [
      "sklepy-internetowe-woocommerce",
      "integracje-api-crm-erp",
      "automatyzacja-pracy-biurowej",
      "oprogramowanie-na-zamowienie",
      "panel-klienta-portal-b2b",
    ],
    keywords: [
      "integracja sklepu internetowego",
      "integracja sklepu z Allegro",
      "integracja sklepu z kurierami InPost",
      "integracja WooCommerce z Subiekt nexo",
      "integracja sklepu z magazynem i fakturami",
      "synchronizacja stanów magazynowych",
      "integracje e-commerce",
    ],
    portfolio: ["RAV - Sklep elektryczny", "Wypożycz Sukienkę", "WTA Perfekt"],
  },
];
