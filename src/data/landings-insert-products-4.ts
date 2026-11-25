import type { LandingPage } from "./types";

/**
 * Podstrony produktów InsERT (część 4): Gestor nexo, Gestor nexo PRO, Gestor GT,
 * zarezerwuj.pl i Lekarz PLUS.
 * Wymagania sieci sprzedaży InsERT: H1 = "Nazwa - przeznaczenie", <title> = "H1 | OlekCodeTech",
 * każdy nagłówek h2 zawiera nazwę produktu, treść napisana własnymi słowami, bez cen.
 */
export const insertProducts4: LandingPage[] = [
  // 1. Gestor nexo
  {
    slug: "gestor-nexo",
    navLabel: "Gestor nexo",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Gestor nexo",
      line: "nexo",
      image: "/images/insert/gestor-nexo.webp",
      producerUrl: "https://www.insert.com.pl/programy_dla_firm/sprzedaz/gestor_nexo/opis.html",
    },
    title: "Gestor nexo - system CRM do obsługi klientów i organizacji pracy",
    metaTitle: "Gestor nexo - system CRM do obsługi klientów i organizacji pracy | OlekCodeTech",
    metaDescription:
      "Gestor nexo to CRM dla małej firmy: historia kontaktów, oferty, poczta, SMS-y, zadania i zlecenia serwisowe. Kupisz go i wdrożysz z OlekCodeTech z Wielunia.",
    eyebrow: "InsERT nexo · CRM",
    lead: [
      "Gestor nexo to program CRM z rodziny InsERT nexo. Zbiera w jednym miejscu to, co firma wie o swoich klientach – kontakty, ustalenia, oferty i korespondencję – a przy okazji porządkuje pracę zespołu: zadania, terminy i zlecenia serwisowe. Jest pomyślany dla małych i średnich firm handlowych oraz usługowych, w których o kliencie pamięta dziś głównie ten, kto z nim ostatnio rozmawiał.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, więc Gestora nexo możecie u nas kupić, uruchomić i połączyć z resztą narzędzi w firmie – przede wszystkim z Subiektem nexo, ale też z pocztą czy stroną internetową. Pomagamy przenieść dotychczasową bazę klientów i uczymy zespół pracy w programie, na miejscu w Wieluniu i okolicy albo zdalnie.",
    ],
    sections: [
      {
        title: "Dla kogo jest Gestor nexo",
        text: "Gestor nexo przyda się w firmie, w której wiedza o klientach jest rozproszona między skrzynkami mailowymi, notatnikami i pamięcią pracowników. Jeśli handlowiec idzie na urlop i nikt nie wie, co obiecał klientowi, a oferty krążą w załącznikach bez ładu, to dobry moment na CRM. Program sprawdza się w małych i średnich firmach handlowych oraz usługowych, w biurach obsługi klienta, a dzięki modułowi zleceń serwisowych także w serwisach przyjmujących naprawy i reklamacje. Może z niego korzystać jedna osoba albo kilkuosobowy zespół pracujący na wspólnych danych. Nie trzeba mieć rozbudowanego działu sprzedaży – wystarczy, że chcecie pilnować terminów, ofert i ustaleń w jednym miejscu, a nie w kilku naraz.",
        bullets: [
          "firmy handlowe i usługowe, które regularnie przygotowują oferty",
          "serwisy obsługujące naprawy i reklamacje",
          "zespoły, które dzielą się zadaniami i chcą widzieć postęp prac",
          "firmy pracujące już w Subiekcie nexo",
          "biura wysyłające do klientów dużo maili i SMS-ów",
          "praca na jednym stanowisku albo na kilku w sieci",
        ],
      },
      {
        title: "Gestor nexo – najważniejsze funkcje",
        text: "W codziennej pracy Gestor nexo zastępuje kilka osobnych narzędzi. Kartoteka klientów trzyma dane kontaktowe razem z historią: kto i w jakiej sprawie się kontaktował, jakie oferty dostał klient i jakie dokumenty mu wystawiono. Oferty przygotowujecie w programie, również w obcej walucie i po kilka w ramach jednych negocjacji. Zadania, spotkania i telefony planujecie w kalendarzu, przydzielacie pracownikom, a program przypomina o terminach. Poczta działa w środku: wbudowany klient obsługuje skrzynki IMAP, pozwala przygotować wysyłkę zbiorczą z polami uzupełnianymi automatycznie i pilnuje, żeby nie zapomnieć o załączniku. Do tego dochodzą SMS-y pojedyncze i masowe, rezerwacja wspólnych zasobów, na przykład aut służbowych, raporty oraz narzędzia do obsługi RODO.",
        bullets: [
          "kartoteka klientów z pełną historią kontaktów, ofert i dokumentów",
          "oferty w wielu walutach i procesy ofertowe z kilkoma ofertami",
          "kalendarz z kilkoma widokami, przypomnienia i delegowanie zadań",
          "poczta w programie: IMAP, wysyłki zbiorcze, reguły wiadomości",
          "SMS-y do klientów, kontrahentów i pracowników",
          "zlecenia serwisowe z automatycznymi powiadomieniami e-mail i SMS",
        ],
      },
      {
        title: "Gestor nexo a inne programy InsERT",
        text: "Gestor nexo należy do linii InsERT nexo i najwięcej daje w parze z Subiektem nexo. Oba programy korzystają wtedy z tych samych kartotek klientów i asortymentu, z tych samych cenników i promocji, więc handlowiec przygotowuje ofertę na aktualnych danych, a nie na przepisanej tabelce. Gdy klient ofertę zaakceptuje, można ją zamienić w dokument handlowy albo magazynowy bez wpisywania pozycji od nowa – do tego potrzebna jest licencja na Subiekta nexo. W historii klienta widać również dokumenty sprzedaży, więc przed rozmową wiadomo, co i kiedy kupował. Jeżeli pracowaliście dotąd w starszej linii, producent przewidział przeniesienie danych z Gestora GT. Zakres takiej migracji sprawdzamy wcześniej na kopii bazy.",
        bullets: [
          "wspólna z Subiektem nexo kartoteka klientów i asortymentu",
          "te same cenniki i promocje w ofertach i w sprzedaży",
          "oferta zamieniana w dokument handlowy lub magazynowy",
          "dokumenty sprzedaży widoczne w historii klienta",
          "przeniesienie danych z Gestora GT",
        ],
      },
      {
        title: "Gestor nexo, Gestor nexo PRO i Gestor GT – czym się różnią",
        text: "Gestor nexo to wersja standardowa: ma komplet funkcji CRM, pocztę, SMS-y, kalendarz, zasoby, zlecenia serwisowe i obsługę RODO. Gestor nexo PRO zawiera to samo, a dodatkowo moduł umów z klientami, oferty wielowariantowe, własne pola, raporty, wydruki i role użytkowników, oddziały oraz Sferę, czyli możliwość dopisywania własnych rozwiązań. W wersji standardowej biblioteka załączników ma ograniczoną pojemność, w PRO tego ograniczenia nie ma. Gestor GT to z kolei CRM ze starszej linii, przeznaczony do pracy z Subiektem GT – ma sens głównie tam, gdzie cała firma zostaje przy programach GT. Dla większości małych firm, które pracują w typowy sposób, wersja standardowa wystarcza. Po PRO warto sięgnąć, gdy program trzeba dopasować do nietypowych procesów.",
        bullets: [
          "Gestor nexo: pełny CRM dla firmy pracującej w typowy sposób",
          "Gestor nexo PRO: umowy z klientami i oferty wielowariantowe",
          "Gestor nexo PRO: własne pola, raporty, wydruki i role",
          "Gestor nexo PRO: Sfera do własnych rozszerzeń i integracji",
          "Gestor GT: CRM dla firm zostających przy Subiekcie GT",
          "przed zakupem sprawdzamy, których funkcji naprawdę użyjecie",
        ],
      },
      {
        title: "Zakup i wdrożenie – Gestor nexo w OlekCodeTech",
        text: "Sam zakup licencji to najkrótsza część pracy. CRM zaczyna działać dopiero wtedy, gdy są w nim prawdziwe dane i gdy zespół faktycznie z niego korzysta. Dlatego zaczynamy od bezpłatnej 30-minutowej konsultacji, na której ustalamy, jak dziś wygląda u Was obsługa klienta i co ma się zmienić. Potem instalujemy program, zakładamy użytkowników, podłączamy skrzynki pocztowe i przygotowujemy wzorce ofert. Importujemy bazę klientów z arkuszy lub poprzedniego programu, żeby nikt nie przepisywał jej ręcznie. Szkolimy pracowników na Waszych danych, a po starcie zostajemy pod telefonem. Jesteśmy też firmą programistyczną, więc możemy połączyć Gestora nexo z innymi narzędziami firmy. Pracujemy na miejscu w Wieluniu i okolicy oraz zdalnie.",
        bullets: [
          "bezpłatna 30-minutowa konsultacja przed wyceną",
          "instalacja, użytkownicy i uprawnienia",
          "podłączenie skrzynek pocztowych i wzorce ofert",
          "import bazy klientów z arkuszy lub poprzedniego programu",
          "szkolenie zespołu na własnych danych firmy",
          "opieka po wdrożeniu, kopie zapasowe i integracje",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Gestor nexo?",
        a: "Gestor nexo jest dla małych i średnich firm handlowych oraz usługowych, które chcą uporządkować kontakty z klientami: mieć w jednym miejscu historię rozmów, oferty, korespondencję i zadania. Przyda się też serwisom, bo ma moduł zleceń serwisowych do obsługi napraw i reklamacji. Może w nim pracować jedna osoba albo cały zespół na kilku stanowiskach.",
      },
      {
        q: "Czym Gestor nexo różni się od Gestora nexo PRO?",
        a: "Gestor nexo PRO ma wszystko, co Gestor nexo, a do tego między innymi moduł umów z klientami, oferty wielowariantowe, własne pola, raporty, wydruki i role użytkowników oraz Sferę do tworzenia własnych rozszerzeń. Wersja standardowa wystarcza firmom, które pracują w typowy sposób. PRO wybiera się wtedy, gdy program trzeba dopasować do nietypowych procesów lub połączyć z innym systemem.",
      },
      {
        q: "Czy Gestor nexo współpracuje z Subiektem nexo?",
        a: "Tak. Gestor nexo i Subiekt nexo korzystają ze wspólnych kartotek klientów i asortymentu oraz z tych samych cenników i promocji. Ofertę przygotowaną w Gestorze można przekształcić w dokument handlowy lub magazynowy – do tego potrzebna jest licencja na Subiekta nexo. W historii klienta widać też wystawione mu dokumenty sprzedaży, więc handlowiec ma pełny obraz współpracy.",
      },
      {
        q: "Ile kosztuje Gestor nexo?",
        a: "Cena licencji na Gestora nexo jest zgodna z aktualnym cennikiem producenta i zależy między innymi od liczby stanowisk. Wdrożenie wyceniamy osobno, bo jego zakres bywa różny: inaczej wygląda uruchomienie programu dla jednej osoby, a inaczej dla zespołu z importem bazy klientów i szkoleniem. Kwotę podajemy po bezpłatnej 30-minutowej konsultacji, gdy wiemy, czego potrzebujecie.",
      },
      {
        q: "Czy pomożecie wdrożyć Gestor nexo i przenieść dane klientów?",
        a: "Tak. Instalujemy i konfigurujemy Gestora nexo, podłączamy pocztę, przygotowujemy wzorce ofert i szkolimy zespół. Bazę klientów importujemy z arkuszy lub z poprzedniego programu, a przy przejściu z Gestora GT korzystamy z przewidzianego przez producenta przeniesienia danych – zawsze po próbie na kopii bazy. Pracujemy na miejscu w Wieluniu i okolicy oraz zdalnie.",
      },
    ],
    related: [
      "gestor-nexo-pro",
      "gestor-gt",
      "subiekt-nexo",
      "programy-insert-nexo",
      "systemy-crm-dla-firm",
    ],
    keywords: [
      "Gestor nexo",
      "Gestor nexo CRM",
      "Gestor nexo wdrożenie",
      "Gestor nexo Wieluń",
      "Gestor nexo zlecenia serwisowe",
      "Gestor nexo a Subiekt nexo",
    ],
  },

  // 2. Gestor nexo PRO
  {
    slug: "gestor-nexo-pro",
    navLabel: "Gestor nexo PRO",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Gestor nexo PRO",
      line: "nexo PRO",
      image: "/images/insert/gestor-nexo-pro.webp",
      producerUrl: "https://www.insert.com.pl/programy_dla_firm/sprzedaz/gestor_nexo_pro/opis.html",
    },
    title: "Gestor nexo PRO - elastyczny CRM dopasowany do procesów firmy",
    metaTitle: "Gestor nexo PRO - elastyczny CRM dopasowany do procesów firmy | OlekCodeTech",
    metaDescription:
      "Gestor nexo PRO to rozbudowany CRM: umowy z klientami, oferty wielowariantowe, własne pola i raporty, Sfera. Sprzedaż i wdrożenie w OlekCodeTech z Wielunia.",
    eyebrow: "InsERT nexo PRO · CRM",
    lead: [
      "Gestor nexo PRO to rozszerzona wersja programu CRM z linii InsERT nexo. Oprócz tego, co ma wersja standardowa – historii kontaktów, ofert, poczty, zadań i zleceń serwisowych – daje narzędzia do dopasowania programu do własnych procesów: moduł umów z klientami, własne pola i raporty oraz możliwość dopisywania własnych rozwiązań. To wybór dla firm, którym gotowy schemat pracy przestaje wystarczać.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, a jednocześnie piszemy oprogramowanie. Przy Gestorze nexo PRO to ważne połączenie: możecie u nas kupić licencję, skonfigurować program i zlecić integrację z innymi narzędziami firmy, na przykład ze sklepem internetowym lub własnym systemem. Wdrażamy na miejscu w Wieluniu i okolicy oraz zdalnie.",
    ],
    sections: [
      {
        title: "Dla kogo jest Gestor nexo PRO",
        text: "Gestor nexo PRO wybierają firmy, które wiedzą już, że ich obsługa klienta nie mieści się w standardowych rubrykach. Przykład: serwis, który oprócz napraw prowadzi stałe umowy przeglądowe i chce, żeby program sam przypominał o ich końcu. Albo firma handlowa, która w jednej ofercie przedstawia klientowi kilka wariantów i potrzebuje własnych pól przy kliencie czy zleceniu. Wersja PRO pasuje też tam, gdzie pracuje kilka oddziałów, gdzie trzeba precyzyjnie ustalić, kto co widzi, i gdzie szef chce mieć zapis zmian wprowadzanych w dokumentach. Wreszcie – to wersja dla firm, które planują połączyć CRM z innym oprogramowaniem. Jeżeli żadna z tych sytuacji Was nie dotyczy, uczciwie doradzimy wersję standardową.",
        bullets: [
          "firmy ze stałymi umowami z klientami, na przykład serwisowymi",
          "handel i usługi z ofertami w kilku wariantach",
          "organizacje z oddziałami i rozbudowanymi uprawnieniami",
          "serwisy, które chcą śledzić zmiany w zleceniach",
          "firmy planujące integrację CRM z własnym systemem",
        ],
      },
      {
        title: "Gestor nexo PRO – najważniejsze funkcje",
        text: "Podstawa jest taka sama jak w wersji standardowej: kartoteka klientów z historią kontaktów, oferty, kalendarz działań, poczta z wysyłkami zbiorczymi, SMS-y, rezerwacja firmowych zasobów i zlecenia serwisowe. Gestor nexo PRO dokłada do tego moduł umów z klientami, w którym trzymacie zarówno umowy z odbiorcami, jak i te dotyczące samej firmy, choćby na media czy przeglądy. Do umowy można przypiąć cykliczne, automatyczne wystawianie dokumentów oraz przypomnienie, że zbliża się jej koniec. Są też oferty wielowariantowe, własne pola ze słownikami, własne raporty, wydruki i flagi, widoki dopasowane do modułów, role użytkowników, oddziały oraz ślad rewizyjny pokazujący, kto i co zmienił. Asortyment można porządkować klasyfikatorami i przypisywać mu zamienniki.",
        bullets: [
          "moduł umów z klientami z cyklicznym wystawianiem dokumentów",
          "przypomnienia o kończących się umowach",
          "oferty wielowariantowe",
          "własne pola, słowniki, raporty, wydruki i flagi",
          "własne role użytkowników i podział na oddziały",
          "ślad rewizyjny zmian w dokumentach i zleceniach serwisowych",
        ],
      },
      {
        title: "Gestor nexo PRO a inne programy InsERT",
        text: "Gestor nexo PRO jest ściśle powiązany z Subiektem nexo. Programy dzielą kartoteki klientów i asortymentu, cenniki oraz promocje, a zaakceptowaną ofertę można przekształcić w dokument handlowy lub magazynowy – wymaga to licencji na Subiekta nexo. W praktyce handlowiec, magazyn i osoba od faktur patrzą na te same dane, tylko każdy z własnej strony. Wersja PRO ma też Sferę dla Gestora, czyli mechanizm pozwalający programistom tworzyć własne rozwiązania działające razem z programem, oraz punkty rozszerzania, w których można dopisać własną logikę, na przykład własne akcje automatyczne lub dynamiczne zestawy klientów. Tak jak w wersji standardowej, dane z Gestora GT da się przenieść do nowego programu.",
        bullets: [
          "wspólne z Subiektem nexo kartoteki, cenniki i promocje",
          "oferta przekształcana w dokument handlowy lub magazynowy",
          "Sfera dla Gestora do tworzenia własnych rozwiązań",
          "punkty rozszerzania: własne akcje automatyczne i zestawy klientów",
          "wielu dostawców i zamienniki w danych asortymentu",
          "przeniesienie danych z Gestora GT",
        ],
      },
      {
        title: "Gestor nexo PRO, Gestor nexo i Gestor GT – czym się różnią",
        text: "Najprościej: Gestor nexo to gotowy CRM, a Gestor nexo PRO to ten sam CRM, który można przebudować pod siebie. Wersja standardowa nie ma modułu umów, ofert wielowariantowych, własnych pól zaawansowanych, własnych ról ani Sfery, a jej biblioteka załączników ma ograniczoną pojemność. Jeśli tych rzeczy nie potrzebujecie, dopłata do PRO nie ma sensu. Gestor GT to program ze starszej linii, współpracujący z Subiektem GT – ma własny zestaw funkcji, między innymi szanse sprzedaży i zestawienia handlowe, ale nie jest częścią rodziny nexo. Wybiera się go zwykle wtedy, gdy firma zostaje przy programach GT. Przy nowych wdrożeniach porównujemy raczej obie wersje nexo i sprawdzamy na Waszych przykładach, która wystarczy.",
        bullets: [
          "Gestor nexo PRO: umowy, oferty wielowariantowe, Sfera",
          "Gestor nexo PRO: własne pola, raporty, wydruki, role, oddziały",
          "Gestor nexo: komplet funkcji CRM bez rozbudowanych dostosowań",
          "Gestor GT: CRM do pracy z Subiektem GT",
          "wybór wersji po analizie realnych potrzeb, nie na zapas",
        ],
      },
      {
        title: "Zakup i wdrożenie – Gestor nexo PRO w OlekCodeTech",
        text: "Przy wersji PRO wdrożenie decyduje o tym, czy dodatkowe możliwości zostaną wykorzystane. Zaczynamy od bezpłatnej 30-minutowej konsultacji i spisania, jak u Was wygląda droga klienta: od zapytania, przez ofertę i umowę, po serwis. Na tej podstawie konfigurujemy Gestora nexo PRO – role i uprawnienia, własne pola, wzorce wydruków, raporty, automatyczne przypomnienia. Importujemy bazę klientów i, jeśli trzeba, umowy prowadzone dotąd w arkuszach. Szkolimy osobno handlowców, serwis i osobę zarządzającą. Jako firma programistyczna przygotowujemy też rozszerzenia i integracje, gdy standard nie wystarcza. Po starcie zapewniamy opiekę: aktualizacje, kopie zapasowe bazy i pomoc dla użytkowników. Pracujemy na miejscu w Wieluniu, Wieruszowie, Sieradzu, Kępnie i Kluczborku oraz zdalnie.",
        bullets: [
          "bezpłatna 30-minutowa konsultacja i analiza procesów",
          "konfiguracja ról, pól własnych, wydruków i raportów",
          "import klientów i umów z arkuszy lub poprzedniego programu",
          "szkolenia dopasowane do ról w firmie",
          "rozszerzenia i integracje pisane przez nasz zespół",
          "opieka po wdrożeniu: aktualizacje, kopie zapasowe, pomoc",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Gestor nexo PRO?",
        a: "Gestor nexo PRO jest dla firm, którym standardowy CRM nie wystarcza: prowadzą stałe umowy z klientami, przygotowują oferty w kilku wariantach, mają oddziały albo chcą dodać do programu własne pola, raporty i wydruki. To także wersja dla tych, którzy planują połączyć CRM z innym systemem. Mniejszym firmom o typowych potrzebach zwykle polecamy wersję standardową.",
      },
      {
        q: "Czym Gestor nexo PRO różni się od Gestora nexo?",
        a: "Gestor nexo PRO zawiera pełną funkcjonalność Gestora nexo i dodaje między innymi moduł umów z klientami, oferty wielowariantowe, zaawansowane pola własne, własne raporty i wydruki, role użytkowników, oddziały, ślad rewizyjny oraz Sferę do tworzenia rozszerzeń. Nie ma też ograniczenia pojemności biblioteki załączników, które obowiązuje w wersji standardowej. Wybór zależy od tego, ile chcecie w programie dopasować.",
      },
      {
        q: "Czy Gestor nexo PRO współpracuje z Subiektem nexo?",
        a: "Tak, Gestor nexo PRO jest ściśle zintegrowany z Subiektem nexo. Oba programy korzystają ze wspólnych kartotek klientów i asortymentu, cenników oraz promocji. Ofertę z Gestora można przekształcić w dokument handlowy lub magazynowy, o ile firma ma licencję na Subiekta nexo. Dzięki temu dane klienta i towarów wprowadza się raz, a nie osobno w każdym programie.",
      },
      {
        q: "Ile kosztuje Gestor nexo PRO?",
        a: "Licencję na Gestora nexo PRO sprzedajemy w cenie zgodnej z aktualnym cennikiem producenta. Koszt wdrożenia liczymy osobno, bo w wersji PRO bardzo zależy od zakresu konfiguracji: liczby ról, pól własnych, raportów i ewentualnych integracji. Dokładną wycenę przygotowujemy po bezpłatnej 30-minutowej konsultacji, na której ustalamy, co faktycznie ma robić program w Waszej firmie.",
      },
      {
        q: "Czy pomożecie wdrożyć Gestor nexo PRO i przenieść dane?",
        a: "Tak. Konfigurujemy Gestora nexo PRO pod Wasze procesy, importujemy bazę klientów i umowy z arkuszy lub poprzedniego programu, a dane z Gestora GT przenosimy po wcześniejszej próbie na kopii bazy. Szkolimy zespół i zostajemy do pomocy po starcie. Jeśli potrzebne są rozszerzenia albo integracje, przygotowują je nasi programiści. Działamy w Wieluniu i okolicy oraz zdalnie.",
      },
    ],
    related: [
      "gestor-nexo",
      "gestor-gt",
      "subiekt-nexo",
      "programy-insert-nexo",
      "systemy-crm-dla-firm",
    ],
    keywords: [
      "Gestor nexo PRO",
      "Gestor nexo PRO CRM",
      "Gestor nexo PRO wdrożenie",
      "Gestor nexo PRO umowy z klientami",
      "Gestor nexo PRO Sfera",
      "Gestor nexo PRO Wieluń",
    ],
  },

  // 3. Gestor GT
  {
    slug: "gestor-gt",
    navLabel: "Gestor GT",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Gestor GT",
      line: "GT",
      image: "/images/insert/gestor-gt.webp",
      producerUrl: "https://www.insert.com.pl/programy_dla_firm/sprzedaz/gestor_gt/opis.html",
    },
    title: "Gestor GT - program CRM współpracujący z Subiektem GT",
    metaTitle: "Gestor GT - program CRM współpracujący z Subiektem GT | OlekCodeTech",
    metaDescription:
      "Gestor GT to CRM dla firm pracujących w Subiekcie GT: historia klienta, szanse sprzedaży, kalendarz, poczta i zestawienia. Sprzedaż i wdrożenie – OlekCodeTech.",
    eyebrow: "InsERT GT · CRM",
    lead: [
      "Gestor GT to program CRM z linii InsERT GT. Pomaga działowi handlowemu, obsłudze klienta i sekretariatowi trzymać w porządku kontakty z klientami: kto się czym zajmuje, co ustalono i jakie transakcje są w toku. Może działać samodzielnie, ale najwięcej zyskują na nim firmy, które sprzedają w Subiekcie GT i chcą korzystać z tych samych danych kontrahentów i towarów.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, w tym linię GT. Gestora GT możecie u nas kupić, skonfigurować i połączyć z Subiektem GT oraz innymi narzędziami firmy. Jeśli zastanawiacie się, czy zostać przy GT, czy przejść na nexo – porównamy z Wami obie drogi, zanim wydacie pieniądze.",
    ],
    sections: [
      {
        title: "Dla kogo jest Gestor GT",
        text: "Gestor GT jest dla firm, w których klient stoi w centrum codziennej pracy, a sprzedaż prowadzona jest w programach linii GT. Korzystają z niego handlowcy pilnujący rozmów i transakcji, osoby od marketingu wybierające grupę odbiorców do wysyłki, obsługa klienta oraz sekretariat. Przydaje się też właścicielowi lub kierownikowi, który chce wiedzieć, co dzieje się w sprzedaży, bez dopytywania każdego z osobna. Program nie jest przypisany do jednej branży – da się go dostosować do firmy handlowej, usługowej czy produkcyjnej. Najbardziej naturalnym odbiorcą jest przedsiębiorstwo, które od lat pracuje w Subiekcie GT, ma tam bazę kontrahentów i nie planuje teraz zmiany całego systemu.",
        bullets: [
          "firmy sprzedające w Subiekcie GT",
          "działy handlowe śledzące szanse sprzedaży",
          "marketing przygotowujący wysyłki do wybranych grup klientów",
          "obsługa klienta i sekretariat",
          "właściciele i menedżerowie, którzy chcą widzieć pracę zespołu",
          "kilku użytkowników pracujących jednocześnie w sieci",
        ],
      },
      {
        title: "Gestor GT – najważniejsze funkcje",
        text: "Sercem programu jest kartoteka klientów, do której trafia wszystko, co się z danym klientem wydarzyło: zaplanowane i wykonane działania, wiadomości, szanse sprzedaży, a przy współpracy z Subiektem GT także wystawione dokumenty. Gestor GT pozwala planować spotkania, zadania i telefony, pokazuje je w kalendarzu miesięcznym, tygodniowym lub dziennym i przypomina o terminach. Wbudowana poczta sama przypisuje e-maile do właściwych klientów i umożliwia mailing oparty na szablonach. Kierownik może przydzielać zadania i sprawdzać postępy. Zestawienia, takie jak lejek sprzedaży, prognoza sprzedaży czy skuteczność handlowców, pomagają ocenić, gdzie uciekają transakcje. Do tego biblioteka dokumentów, notatki, obsługa walut oraz pola własne i edytowalne słowniki.",
        bullets: [
          "pełna historia kontaktów z klientem w jednym miejscu",
          "szanse sprzedaży, lejek i prognoza sprzedaży",
          "kalendarz dzienny, tygodniowy i miesięczny z przypomnieniami",
          "poczta z automatycznym przypisywaniem wiadomości do klientów",
          "mailing na podstawie szablonów i pól autotekstu",
          "przydzielanie zadań i kontrola postępu prac",
        ],
      },
      {
        title: "Gestor GT a inne programy InsERT",
        text: "Gestor GT jest częścią linii InsERT GT i może pracować sam albo razem z Subiektem GT. W drugim przypadku oba programy korzystają ze wspólnej kartoteki kontrahentów i towarów, łącznie z poziomami cen, rabatami i promocjami. Handlowiec widzi w historii klienta dokumenty wystawione w Subiekcie, a z poziomu CRM łatwiej wystawić dokument handlowy, także w firmie z kilkoma magazynami. Część zestawień powstaje na danych sprzedażowych z Subiekta GT, na przykład sprzedaż według asortymentu. Jeśli w przyszłości zdecydujecie się na linię nexo, producent przewidział przeniesienie danych z Gestora GT do Gestora nexo. Warto o tym wiedzieć już przy zakupie, bo wpływa to na sposób porządkowania kartotek.",
        bullets: [
          "praca samodzielna albo razem z Subiektem GT",
          "wspólna kartoteka kontrahentów i towarów",
          "poziomy cen, rabaty i promocje z Subiekta GT",
          "wystawianie dokumentów handlowych i obsługa wielu magazynów",
          "zestawienia oparte na danych sprzedażowych z Subiekta GT",
          "możliwość późniejszego przeniesienia danych do Gestora nexo",
        ],
      },
      {
        title: "Gestor GT, Gestor nexo i Gestor nexo PRO – czym się różnią",
        text: "Gestor GT należy do starszej linii programów InsERT i współpracuje z Subiektem GT. Gestor nexo oraz Gestor nexo PRO to nowsza rodzina, powiązana z Subiektem nexo. Programów z różnych linii nie łączy się w pary, więc pierwsze pytanie brzmi: w czym sprzedajecie? Jeśli w Subiekcie GT i nie planujecie zmian, Gestor GT będzie naturalnym uzupełnieniem. Jeśli dopiero wybieracie system albo myślicie o przejściu na nexo, lepiej od razu rozważyć Gestora nexo. Producent opisuje przy nim między innymi moduł zleceń serwisowych, wysyłkę SMS-ów, rezerwację zasobów i narzędzia do obsługi RODO. Wersja nexo PRO dodaje umowy z klientami i szerokie możliwości dostosowań. Powiemy wprost, która droga będzie dla Was tańsza w dłuższym czasie.",
        bullets: [
          "Gestor GT: do pary z Subiektem GT",
          "Gestor nexo: do pary z Subiektem nexo, ze zleceniami serwisowymi",
          "Gestor nexo PRO: umowy z klientami i własne rozszerzenia",
          "o wyborze decyduje linia, w której prowadzicie sprzedaż",
          "dane z Gestora GT można później przenieść do nexo",
        ],
      },
      {
        title: "Zakup i wdrożenie – Gestor GT w OlekCodeTech",
        text: "Wdrożenie zaczynamy od bezpłatnej 30-minutowej konsultacji. Sprawdzamy, jak pracujecie w Subiekcie GT, kto ma korzystać z CRM i czy Gestor GT jest dla Was lepszym wyborem niż przejście na nexo. Następnie instalujemy program, konfigurujemy pracę kilku stanowisk w sieci, zakładamy użytkowników i podłączamy pocztę. Porządkujemy kartotekę klientów, a kontakty trzymane dotąd w arkuszach importujemy, żeby nikt nie wpisywał ich ręcznie. Ustawiamy słowniki, pola własne i wydruki, a potem szkolimy zespół na Waszych danych. Po uruchomieniu zapewniamy opiekę: pomoc dla użytkowników, aktualizacje i kopie zapasowe bazy. Jeśli potrzebujecie połączyć program z innym narzędziem, zajmą się tym nasi programiści. Działamy w Wieluniu i okolicy oraz zdalnie.",
        bullets: [
          "bezpłatna 30-minutowa konsultacja: GT czy nexo",
          "instalacja i konfiguracja pracy w sieci",
          "uporządkowanie i import danych klientów",
          "słowniki, pola własne i wydruki dopasowane do firmy",
          "szkolenie handlowców i osoby zarządzającej",
          "opieka po wdrożeniu, kopie zapasowe i integracje",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Gestor GT?",
        a: "Gestor GT jest dla firm, które chcą uporządkować relacje z klientami i pracują w programach linii InsERT GT, przede wszystkim w Subiekcie GT. Korzystają z niego działy handlowe, marketing, obsługa klienta i sekretariat, a także menedżerowie, którzy chcą widzieć, co dzieje się w sprzedaży. Program można dostosować do firm z różnych branż.",
      },
      {
        q: "Czym Gestor GT różni się od Gestora nexo?",
        a: "Gestor GT należy do starszej linii i współpracuje z Subiektem GT, a Gestor nexo jest częścią nowszej rodziny InsERT nexo i łączy się z Subiektem nexo. Przy Gestorze nexo producent opisuje między innymi zlecenia serwisowe, wysyłkę SMS-ów i narzędzia do obsługi RODO. O wyborze decyduje głównie to, w której linii prowadzicie sprzedaż i czy planujecie zmianę systemu.",
      },
      {
        q: "Czy Gestor GT współpracuje z Subiektem GT?",
        a: "Tak. Gestor GT może działać samodzielnie, ale po połączeniu z Subiektem GT korzysta ze wspólnej kartoteki kontrahentów i towarów razem z poziomami cen, rabatami i promocjami. W historii klienta widać dokumenty wystawione w Subiekcie, łatwiej też wystawić dokument handlowy. Część zestawień, na przykład sprzedaż według asortymentu, powstaje na danych z Subiekta GT.",
      },
      {
        q: "Ile kosztuje Gestor GT?",
        a: "Cena licencji na Gestora GT jest zgodna z aktualnym cennikiem producenta i zależy między innymi od liczby stanowisk. Wdrożenie wyceniamy osobno, po bezpłatnej 30-minutowej konsultacji, bo jego zakres zależy od liczby użytkowników, stanu kartoteki klientów i tego, czy program ma pracować razem z Subiektem GT. Na konsultacji porównujemy też koszt alternatywy, czyli przejścia na nexo.",
      },
      {
        q: "Czy pomożecie wdrożyć Gestor GT i przenieść dane klientów?",
        a: "Tak. Instalujemy Gestora GT, konfigurujemy stanowiska, pocztę, słowniki i wydruki, a kontakty z arkuszy lub innego programu importujemy do kartoteki klientów. Szkolimy zespół i pomagamy po starcie. Jeżeli za jakiś czas zdecydujecie się na linię nexo, przeprowadzimy przeniesienie danych z Gestora GT do Gestora nexo, zaczynając od próby na kopii bazy.",
      },
    ],
    related: [
      "gestor-nexo",
      "gestor-nexo-pro",
      "subiekt-nexo",
      "programy-insert-nexo",
      "systemy-crm-dla-firm",
    ],
    keywords: [
      "Gestor GT",
      "Gestor GT CRM",
      "Gestor GT wdrożenie",
      "Gestor GT Subiekt GT",
      "Gestor GT Wieluń",
      "Gestor GT a Gestor nexo",
    ],
  },

  // 4. zarezerwuj.pl
  {
    slug: "zarezerwuj-pl",
    navLabel: "zarezerwuj.pl",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "zarezerwuj.pl",
      line: "online",
      image: "/images/insert/zarezerwuj-pl.webp",
      producerUrl: "https://zarezerwuj.pl/firma/",
    },
    title: "zarezerwuj.pl - system rezerwacji online dla firm usługowych",
    metaTitle: "zarezerwuj.pl - system rezerwacji online dla firm usługowych | OlekCodeTech",
    metaDescription:
      "zarezerwuj.pl to rezerwacje online dla salonu, gabinetu, wypożyczalni i obiektu noclegowego: terminarz, SMS-y, płatności. Uruchomisz go z pomocą OlekCodeTech.",
    eyebrow: "InsERT · rezerwacje online",
    lead: [
      "zarezerwuj.pl to działająca w przeglądarce usługa InsERT do przyjmowania rezerwacji, zapisów, wypożyczeń i wynajmu. Klient sam wybiera termin przez formularz, a Wy widzicie wszystko w jednym terminarzu – razem z rezerwacjami przyjętymi przez telefon i na miejscu. Korzystają z niej salony, gabinety, warsztaty, wypożyczalnie, obiekty noclegowe i organizatorzy zajęć.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, a do tego budujemy strony internetowe. Możemy więc nie tylko uruchomić zarezerwuj.pl, ale też osadzić formularz rezerwacji na Waszej stronie, podpiąć go w mediach społecznościowych i połączyć usługę z programem do sprzedaży. Pomagamy na miejscu w Wieluniu i okolicy oraz zdalnie.",
    ],
    sections: [
      {
        title: "Dla kogo jest zarezerwuj.pl",
        text: "Usługa zarezerwuj.pl jest dla firm, w których telefon z pytaniem o wolny termin dzwoni wtedy, gdy macie zajęte ręce. Producent wskazuje wiele branż: salony fryzjerskie i beauty, fizjoterapeutów, psychologów, optyków, gabinety, warsztaty samochodowe i myjnie, wypożyczalnie, restauracje, pensjonaty i apartamenty, biura rachunkowe, a także firmy szkoleniowe i urzędy. Wspólny mianownik jest prosty – macie ograniczoną liczbę terminów, miejsc albo sprzętu i chcecie, by klient zajmował je sam, o dowolnej porze. Na starcie wybiera się rodzaj terminarza dopasowany do działalności: godzinowy dla wizyt, dzienny dla wypożyczeń, dobowy dla noclegów lub wydarzeniowy dla zajęć i szkoleń. Dzięki temu ta sama usługa obsłuży i salon, i wypożyczalnię maszyn.",
        bullets: [
          "salony fryzjerskie, kosmetyczne i gabinety",
          "warsztaty samochodowe, wulkanizacje i myjnie",
          "wypożyczalnie sprzętu i maszyn",
          "pensjonaty, apartamenty i domki",
          "zajęcia grupowe, szkolenia i wydarzenia",
          "biura i urzędy umawiające spotkania",
        ],
      },
      {
        title: "zarezerwuj.pl – najważniejsze funkcje",
        text: "Podstawą jest kalendarz, w którym widać wszystkie rezerwacje, niezależnie od tego, czy klient zrobił je sam, czy zapisaliście go po rozmowie. Formularz rezerwacji można umieścić na własnej stronie albo podlinkować na Facebooku, LinkedIn i w wizytówce Google. Usługa zarezerwuj.pl wysyła SMS-y: potwierdzenia, przypomnienia o wizycie, a po wizycie na przykład podziękowanie lub kod rabatowy. Koszyk pozwala klientowi zarezerwować kilka usług za jednym razem, a płatności online – pobrać zaliczkę, zadatek lub całą kwotę przed terminem. Dla pojedynczej rezerwacji można zmienić cenę i czas trwania albo powielić ją na inny termin. Są też raporty o przychodach i popularności usług, grafiki pracy, cenniki, rejestr zgód klientów oraz uprawnienia dla poszczególnych pracowników.",
        bullets: [
          "terminarz godzinowy, dzienny, dobowy lub wydarzeniowy",
          "formularz rezerwacji na stronie i w mediach społecznościowych",
          "SMS-y z potwierdzeniem, przypomnieniem i wiadomością po wizycie",
          "koszyk usług i płatności online z przedpłatą",
          "raporty, grafiki pracy i cenniki",
          "zgody klientów z datą wyrażenia i indywidualne uprawnienia",
        ],
      },
      {
        title: "zarezerwuj.pl a inne programy InsERT",
        text: "Jeśli sprzedaż prowadzicie w programie InsERT, zarezerwuj.pl może przekazywać do niego rezerwacje. Producent wymienia integrację z Subiektem GT, Subiektem nexo PRO oraz systemem Navireo. Na podstawie wybranych rezerwacji powstają wtedy dokumenty: faktury, paragony, zamówienia lub faktury proforma, które można od razu wysłać klientowi e-mailem jako PDF. Sami ustalacie, kiedy dokument ma się utworzyć – w chwili rezerwacji, po zmianie jej statusu albo po opłaceniu przez klienta – i dalej dzieje się to automatycznie. To duża ulga przy wielu drobnych płatnościach. Wśród pozostałych integracji producent podaje między innymi płatności internetowe, kalendarz Google i spotkania online. Mechanizmy rejestracji z zarezerwuj.pl wykorzystuje też program Lekarz PLUS dla gabinetów.",
        bullets: [
          "integracja z Subiektem GT, Subiektem nexo PRO i Navireo",
          "faktury, paragony, zamówienia i proformy z rezerwacji",
          "wysyłka dokumentów do klienta e-mailem w PDF",
          "automatyczne tworzenie dokumentów według własnych kryteriów",
          "kalendarz Google, płatności internetowe, spotkania online",
          "wspólne mechanizmy rejestracji z programem Lekarz PLUS",
        ],
      },
      {
        title: "zarezerwuj.pl czy system rezerwacji pisany na zamówienie",
        text: "Budujemy również własne systemy rezerwacji, więc możemy porównać obie drogi bez naciągania. Gotowa usługa zarezerwuj.pl wygrywa, gdy Wasz sposób pracy mieści się w jednym z czterech typów terminarza: uruchamia się ją szybko, nie wymaga serwera ani programisty, a rozwija ją producent. Dla salonu, gabinetu, warsztatu czy niedużej wypożyczalni to zwykle najlepszy wybór. System na zamówienie ma sens dopiero wtedy, gdy zasady rezerwacji są nietypowe. Przykład z naszej pracy: platforma wypożyczalni sukienek, w której termin zależy od rozmiaru, czasu na pranie i wysyłkę, a rezerwacja jest częścią sklepu internetowego. Takie rozwiązanie kosztuje więcej i powstaje dłużej. Dlatego najpierw sprawdzamy, czy wystarczy gotowa usługa.",
        bullets: [
          "zarezerwuj.pl: szybki start bez własnego serwera",
          "zarezerwuj.pl: typowe wizyty, wypożyczenia, noclegi i zajęcia",
          "system dedykowany: nietypowe reguły dostępności i cen",
          "system dedykowany: rezerwacja wbudowana w sklep lub portal",
          "system dedykowany: wyższy koszt i dłuższy czas budowy",
          "najpierw sprawdzamy, czy gotowa usługa wystarczy",
        ],
      },
      {
        title: "Zakup i wdrożenie – zarezerwuj.pl w OlekCodeTech",
        text: "Konto w zarezerwuj.pl da się założyć samodzielnie, ale dobre ustawienie usługi wymaga kilku przemyślanych decyzji. Na bezpłatnej 30-minutowej konsultacji ustalamy, jaki typ terminarza pasuje do Waszej pracy i jak opisać usługi, czas trwania oraz przerwy. Potem konfigurujemy pracowników i uprawnienia, treść SMS-ów, zgody, płatności online i zasady przedpłat. Formularz osadzamy na Waszej stronie internetowej – a jeśli strony nie macie, możemy ją zbudować albo przygotować stronę wizytówkową dostępną w usłudze. Podpinamy rezerwacje pod Facebooka i wizytówkę Google. W sprawie przeniesienia danych klientów z poprzedniego systemu kontaktujemy się z producentem i przygotowujemy pliki. Jeżeli korzystacie z Subiekta, uruchamiamy integrację. Szkolimy zespół na miejscu w Wieluniu i okolicy albo zdalnie.",
        bullets: [
          "bezpłatna 30-minutowa konsultacja i dobór terminarza",
          "konfiguracja usług, pracowników, uprawnień i powiadomień",
          "płatności online i zasady przedpłat",
          "formularz na stronie, Facebooku i w wizytówce Google",
          "pomoc w przeniesieniu danych klientów z innego systemu",
          "integracja z Subiektem, szkolenie i dalsza opieka",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest zarezerwuj.pl?",
        a: "Usługa zarezerwuj.pl jest dla firm, które umawiają klientów na terminy albo wynajmują sprzęt i miejsca: salonów fryzjerskich i beauty, gabinetów, fizjoterapeutów, warsztatów, wypożyczalni, pensjonatów, organizatorów zajęć i szkoleń. Do wyboru są cztery typy terminarza – godzinowy, dzienny, dobowy i wydarzeniowy – więc usługę dopasowuje się do sposobu pracy, a nie odwrotnie.",
      },
      {
        q: "Kiedy wybrać zarezerwuj.pl, a kiedy system rezerwacji na zamówienie?",
        a: "Usługa zarezerwuj.pl wystarczy większości firm usługowych: działa od razu, nie wymaga serwera i obsługuje typowe wizyty, wypożyczenia, noclegi oraz zapisy. System pisany na zamówienie warto rozważyć dopiero przy nietypowych regułach, na przykład gdy dostępność zależy od wielu warunków albo rezerwacja ma być częścią sklepu internetowego. Budujemy oba rozwiązania i doradzamy tańsze, jeśli spełnia potrzeby.",
      },
      {
        q: "Czy zarezerwuj.pl współpracuje z Subiektem?",
        a: "Tak. Producent podaje integrację zarezerwuj.pl z Subiektem GT, Subiektem nexo PRO oraz systemem Navireo. Dla wybranych rezerwacji można wystawiać faktury, paragony, zamówienia i faktury proforma oraz wysyłać je klientom e-mailem. Dokumenty mogą powstawać automatycznie: przy pojawieniu się rezerwacji, zmianie jej statusu albo po płatności. Integrację konfigurujemy i testujemy razem z Wami.",
      },
      {
        q: "Ile kosztuje zarezerwuj.pl?",
        a: "Usługa zarezerwuj.pl działa w abonamencie, a jego cena jest zgodna z aktualnym cennikiem producenta. Przed decyzją można ją wypróbować bezpłatnie. Naszą pracę – konfigurację, osadzenie formularza na stronie, integrację z programem sprzedażowym i szkolenie – wyceniamy osobno po bezpłatnej 30-minutowej konsultacji. Jej koszt zależy od liczby usług, pracowników i tego, co ma być połączone.",
      },
      {
        q: "Czy pomożecie uruchomić zarezerwuj.pl i przenieść dane klientów?",
        a: "Tak. Ustawiamy terminarz, usługi, pracowników, powiadomienia SMS i płatności online, a formularz rezerwacji osadzamy na Waszej stronie i w mediach społecznościowych. Przeniesienie danych z poprzedniego systemu jest możliwe po kontakcie z producentem – pomagamy przygotować dane i dopilnować całej operacji. Szkolimy zespół na miejscu w Wieluniu i okolicy lub zdalnie.",
      },
    ],
    related: [
      "lekarz-plus",
      "systemy-rezerwacji-online",
      "subiekt-nexo",
      "subiekt-123",
      "programy-insert-nexo",
    ],
    keywords: [
      "zarezerwuj.pl",
      "zarezerwuj.pl system rezerwacji online",
      "zarezerwuj.pl wdrożenie",
      "zarezerwuj.pl dla salonu",
      "zarezerwuj.pl integracja z Subiektem",
      "zarezerwuj.pl Wieluń",
    ],
  },

  // 5. Lekarz PLUS
  {
    slug: "lekarz-plus",
    navLabel: "Lekarz PLUS",
    kind: "service",
    parent: "opieka-it-dla-firm",
    product: {
      name: "Lekarz PLUS",
      line: "online",
      image: "/images/insert/lekarz-plus.webp",
      producerUrl: "https://lekarzplus.pl/",
    },
    title: "Lekarz PLUS - program online dla gabinetów i przychodni",
    metaTitle: "Lekarz PLUS - program online dla gabinetów i przychodni | OlekCodeTech",
    metaDescription:
      "Lekarz PLUS to program online dla gabinetu: wizyty, dokumentacja medyczna, e-recepty, rejestracja pacjentów i SMS-y. Pomoc we wdrożeniu – OlekCodeTech Wieluń.",
    eyebrow: "InsERT · program dla gabinetu",
    lead: [
      "Lekarz PLUS to działający w przeglądarce program InsERT do prowadzenia gabinetu lekarskiego, przychodni lub kliniki. Łączy część medyczną – opis wizyty, kartotekę pacjenta, e-recepty, e-skierowania i e-zwolnienia – z rejestracją pacjentów i przypomnieniami o wizytach. Korzystają z niego lekarze różnych specjalizacji, stomatolodzy, fizjoterapeuci, pielęgniarki i inni specjaliści ochrony zdrowia.",
      "W OlekCodeTech sprzedajemy i wdrażamy programy InsERT, a na co dzień zajmujemy się też obsługą informatyczną firm. Pomożemy Wam uruchomić Lekarza PLUS, przygotować komputery i sieć w gabinecie oraz połączyć program z innymi narzędziami, na przykład ze stroną internetową i programem do faktur. Nie doradzamy w kwestiach medycznych ani prawnych – odpowiadamy za stronę techniczną.",
    ],
    sections: [
      {
        title: "Dla kogo jest Lekarz PLUS",
        text: "Lekarz PLUS sprawdzi się zarówno w jednoosobowej praktyce, jak i w placówce, w której przyjmuje kilku specjalistów i pracuje rejestracja. Producent kieruje go do lekarzy wielu specjalizacji oraz do innych zawodów związanych z ochroną zdrowia: stomatologów, fizjoterapeutów, pielęgniarek, psychologów, psychoterapeutów, dietetyków, logopedów czy optometrystów. Program działa online, więc nie potrzebujecie serwera w gabinecie – wystarczy komputer, tablet lub telefon z dostępem do internetu, a aktualizacje instaluje dostawca. To wygodne dla osób, które przyjmują w kilku miejscach. Z programu korzysta też personel niemedyczny: rejestratorka zapisuje pacjentów, przekłada i odwołuje wizyty, a dostępu do tego, co widzi lekarz, pilnują role użytkowników.",
        bullets: [
          "prywatne gabinety jednoosobowe",
          "przychodnie i kliniki z kilkoma specjalistami",
          "stomatolodzy, fizjoterapeuci, pielęgniarki, psycholodzy",
          "specjaliści przyjmujący w kilku lokalizacjach",
          "placówki z rejestracją prowadzoną przez osobny personel",
          "gabinety, które nie chcą utrzymywać własnego serwera",
        ],
      },
      {
        title: "Lekarz PLUS – najważniejsze funkcje",
        text: "W trakcie wizyty lekarz opisuje w programie wywiad, badanie, rozpoznanie i zalecenia, a następnie wystawia e-receptę, e-skierowanie lub e-zwolnienie. Lekarz PLUS pozwala przygotować szablony całych wizyt albo ich fragmentów oraz własne sekcje dopasowane do specjalizacji, co skraca pisanie powtarzalnych opisów. Kartoteka pacjenta przechowuje historię wizyt, rozpoznania, wystawione dokumenty i załączone pliki. Wbudowana baza leków, oparta na Pharmindeksie, podpowiada informacje o lekach i refundacji oraz ułatwia wystawianie recept na leki recepturowe. Według producenta program jest zintegrowany z systemami P1, eWUŚ i ZUS oraz raportuje zdarzenia medyczne do P1. Część organizacyjną tworzą rejestracja pacjentów online, SMS-y z przypomnieniami, płatności online, grafiki pracy i raporty.",
        bullets: [
          "opis wizyty: wywiad, badanie, rozpoznanie, zalecenia",
          "e-recepty, e-skierowania i e-zwolnienia",
          "szablony wizyt i własne sekcje dla danej specjalizacji",
          "kartoteka pacjenta z historią wizyt i plikami",
          "baza leków oparta na Pharmindeksie",
          "rejestracja online, SMS-y i płatności online",
        ],
      },
      {
        title: "Lekarz PLUS a inne programy InsERT",
        text: "Lekarz PLUS korzysta z rozwiązań innych produktów InsERT. Moduł rejestracji pacjentów opiera się na mechanizmach usługi zarezerwuj.pl, stąd terminarz, formularz zapisów na stronie, potwierdzenia i przypomnienia. Tym samym narzędziem można obsłużyć wypożyczalnię sprzętu rehabilitacyjnego albo zapisy na zajęcia, na przykład w szkole rodzenia. Druga sprawa to sprzedaż. Producent podaje integrację z Subiektem GT, Subiektem nexo PRO i systemem Navireo: dla wybranych rejestracji powstają faktury, paragony, zamówienia lub proformy, które można wysłać pacjentowi e-mailem. Dokument może utworzyć się przy rejestracji, po zmianie jej statusu albo po płatności. E-faktury i ich wysyłkę do KSeF obsługują wymienione programy sprzedażowe, więc te sprawy konfiguruje się po ich stronie.",
        bullets: [
          "rejestracja oparta na mechanizmach zarezerwuj.pl",
          "integracja z Subiektem GT, Subiektem nexo PRO i Navireo",
          "faktury, paragony i proformy tworzone z rejestracji",
          "wysyłka dokumentów do pacjenta e-mailem",
          "e-faktury i KSeF po stronie programu sprzedażowego",
          "wypożyczenia sprzętu i zapisy na zajęcia w tym samym narzędziu",
        ],
      },
      {
        title: "Lekarz PLUS czy system dla gabinetu pisany na zamówienie",
        text: "Piszemy oprogramowanie na zamówienie, ale przy gabinecie medycznym mówimy otwarcie: w większości przypadków gotowy program jest rozsądniejszy. Lekarz PLUS ma to, czego własny system długo by nie miał – połączenia z państwowymi systemami e-zdrowia, bazę leków i aktualizacje wprowadzane przez producenta, gdy zmieniają się wymagania. Budowanie i utrzymywanie tego samodzielnie byłoby kosztowne i ryzykowne. System dedykowany ma sens obok, a nie zamiast: gdy placówka potrzebuje czegoś spoza prowadzenia wizyt, na przykład własnego portalu z ofertą, nietypowego procesu zapisów na programy i pakiety albo CRM do obsługi kontrahentów i firm. Takie rozwiązania tworzymy jako dedykowane systemy CRM i rezerwacji. Na konsultacji oddzielamy to, co da gotowy program, od tego, co wymaga pracy programisty.",
        bullets: [
          "Lekarz PLUS: gotowe połączenia z systemami e-zdrowia",
          "Lekarz PLUS: aktualizacje po stronie producenta",
          "Lekarz PLUS: praca online bez własnego serwera",
          "system dedykowany: portal placówki i nietypowe zapisy",
          "system dedykowany: CRM dla kontrahentów i firm",
          "część medyczną zostawiamy gotowemu programowi",
        ],
      },
      {
        title: "Zakup i wdrożenie – Lekarz PLUS w OlekCodeTech",
        text: "Producent zapewnia własną pomoc techniczną, a my uzupełniamy ją o to, czego zdalny konsultant nie zrobi na miejscu. Zaczynamy od bezpłatnej 30-minutowej konsultacji: ilu specjalistów przyjmuje, kto prowadzi rejestrację, z jakiego programu korzystaliście dotąd. Przygotowujemy komputery, sieć i drukarki w gabinecie, pomagamy założyć użytkowników i przypisać role, ustawić terminarz, powiadomienia SMS oraz płatności online. Formularz rejestracji osadzamy na stronie internetowej placówki albo budujemy taką stronę. Lekarz PLUS przewiduje przeniesienie danych z poprzedniego systemu – odbywa się to w porozumieniu z producentem, a my pomagamy przygotować dane. Jeśli fakturujecie w Subiekcie, uruchamiamy integrację. Szkolimy lekarzy i rejestrację, na miejscu w Wieluniu i okolicy lub zdalnie.",
        bullets: [
          "bezpłatna 30-minutowa konsultacja przed zakupem",
          "przygotowanie komputerów, sieci i drukarek w gabinecie",
          "użytkownicy, role, terminarz i powiadomienia",
          "formularz rejestracji na stronie internetowej placówki",
          "pomoc w przeniesieniu danych z poprzedniego systemu",
          "integracja z Subiektem, szkolenie i opieka IT",
        ],
      },
    ],
    faq: [
      {
        q: "Dla kogo jest Lekarz PLUS?",
        a: "Lekarz PLUS jest dla prywatnych gabinetów lekarskich, przychodni i klinik. Korzystają z niego lekarze wielu specjalizacji, stomatolodzy, fizjoterapeuci, pielęgniarki, psycholodzy i inni specjaliści ochrony zdrowia, a także personel rejestracji. Nadaje się dla jednoosobowej praktyki, a większe placówki mogą rozszerzać licencję o kolejnych specjalistów. Program działa online, na komputerze, tablecie i telefonie.",
      },
      {
        q: "Kiedy wybrać Lekarz PLUS, a kiedy system pisany na zamówienie?",
        a: "Do prowadzenia wizyt i dokumentacji polecamy gotowy program: Lekarz PLUS ma połączenia z systemami e-zdrowia, bazę leków i aktualizacje po stronie producenta. System na zamówienie warto rozważyć jako dodatek – na przykład portal placówki, nietypowe zapisy na pakiety albo CRM dla kontrahentów. Budujemy takie rozwiązania, ale części medycznej nie proponujemy pisać od zera.",
      },
      {
        q: "Czy Lekarz PLUS współpracuje z Subiektem?",
        a: "Tak. Producent podaje integrację Lekarza PLUS z Subiektem GT, Subiektem nexo PRO oraz systemem Navireo. Dla wybranych rejestracji można automatycznie wystawiać faktury, paragony, zamówienia lub faktury proforma i wysyłać je pacjentom e-mailem. Wystawianie e-faktur i ich wysyłkę do KSeF realizuje program sprzedażowy. Pomagamy skonfigurować to połączenie i sprawdzić je na próbnych dokumentach.",
      },
      {
        q: "Ile kosztuje Lekarz PLUS?",
        a: "Lekarz PLUS jest sprzedawany w formie licencji okresowej, którą można rozszerzać o kolejnych specjalistów, a jej cena jest zgodna z aktualnym cennikiem producenta. Program można wcześniej wypróbować bezpłatnie. Nasze usługi – przygotowanie sprzętu i sieci, konfigurację, osadzenie rejestracji na stronie i szkolenie – wyceniamy osobno po bezpłatnej 30-minutowej konsultacji.",
      },
      {
        q: "Czy pomożecie wdrożyć Lekarz PLUS i przenieść dane pacjentów?",
        a: "Tak, w części technicznej. Przygotowujemy stanowiska w gabinecie, pomagamy ustawić użytkowników, role, terminarz i powiadomienia oraz szkolimy zespół. Przeniesienie danych z poprzedniego systemu jest możliwe po kontakcie z producentem i odbywa się w uzgodnieniu z nim – pomagamy przygotować dane. Nie udzielamy porad prawnych dotyczących dokumentacji medycznej; te kwestie pozostają po stronie placówki.",
      },
    ],
    related: [
      "zarezerwuj-pl",
      "systemy-rezerwacji-online",
      "subiekt-nexo",
      "programy-insert-nexo",
      "systemy-crm-dla-firm",
    ],
    keywords: [
      "Lekarz PLUS",
      "Lekarz PLUS program dla gabinetu",
      "Lekarz PLUS wdrożenie",
      "Lekarz PLUS rejestracja pacjentów",
      "Lekarz PLUS e-recepty",
      "Lekarz PLUS Wieluń",
    ],
  },
];
