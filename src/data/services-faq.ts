import type { Faq } from "./types";

/** FAQ do stron usług (FAQPage schema). Klucz = slug usługi z services.ts */
export const servicesFaq: Record<string, Faq[]> = {
  "stronywww-aplikacje": [
    {
      q: "Ile kosztuje strona internetowa dla firmy?",
      a: "Zależy od zakresu: liczby podstron, projektu graficznego, integracji i treści. Prosta strona firmowa to inny budżet niż sklep z setkami produktów czy aplikacja z logowaniem. Po bezpłatnej konsultacji przygotowujemy wycenę z rozpisanym zakresem, żeby było jasne, za co płacisz.",
    },
    {
      q: "WordPress czy React – co wybrać?",
      a: "WordPress (z autorskim motywem lub WooCommerce) sprawdza się, gdy treści mają być łatwo edytowane przez zespół i liczy się szybkie wdrożenie. React i Next.js wybieramy do aplikacji, systemów z logiką biznesową i stron, gdzie kluczowa jest wydajność. Często łączymy oba podejścia.",
    },
    {
      q: "Ile trwa stworzenie strony lub sklepu?",
      a: "Strona firmowa zwykle 3–6 tygodni, sklep internetowy 6–12 tygodni, aplikacja webowa zależnie od zakresu. Największy wpływ na termin ma dostępność treści i materiałów po stronie klienta oraz liczba iteracji projektu.",
    },
    {
      q: "Czy strona będzie przygotowana pod SEO?",
      a: "Tak. Każda realizacja ma poprawną strukturę nagłówków, meta tagi, dane strukturalne, mapę strony, szybkie ładowanie (Core Web Vitals) i responsywność. Na życzenie dokładamy strategię treści i lokalne SEO.",
    },
    {
      q: "Co po wdrożeniu – czy pomagacie dalej?",
      a: "Tak. Oferujemy opiekę nad stroną: aktualizacje, kopie zapasowe, monitoring, poprawki i rozwój. Możesz też zlecić nam tylko wdrożenie i prowadzić stronę samodzielnie – dostaniesz instrukcję i krótkie szkolenie.",
    },
  ],
  "automatyzacja-procesow-biznesowych": [
    {
      q: "Od czego zacząć automatyzację w małej firmie?",
      a: "Od procesów, które powtarzają się codziennie i pochłaniają czas: obsługa zapytań z formularzy, przepisywanie danych między systemami, raporty, powiadomienia. Robimy krótką analizę, wybieramy 1–2 procesy o największym efekcie i wdrażamy je w pierwszej kolejności.",
    },
    {
      q: "n8n czy Make – które narzędzie jest lepsze?",
      a: "Make jest prostszy na start i dobry przy niewielkiej liczbie operacji. n8n daje większą kontrolę, własny hosting i przewidywalne koszty przy dużej skali. Dobieramy narzędzie do liczby operacji, wymagań bezpieczeństwa i tego, kto będzie utrzymywał automatyzacje.",
    },
    {
      q: "Ile kosztuje wdrożenie automatyzacji?",
      a: "Na koszt składa się analiza, budowa scenariuszy, integracje z systemami i testy. Proste automatyzacje (np. formularz → CRM → powiadomienie) wdrażamy szybko; rozbudowane procesy z wieloma systemami wyceniamy etapami. Do tego dochodzą ewentualne abonamenty narzędzi.",
    },
    {
      q: "Czy automatyzacje są bezpieczne dla danych firmy?",
      a: "Tak, jeśli są dobrze zaprojektowane: ograniczamy uprawnienia do minimum, używamy bezpiecznych połączeń API, logujemy błędy i dokumentujemy przepływy. Przy wrażliwych danych rekomendujemy n8n na własnym serwerze.",
    },
    {
      q: "Co się stanie, gdy automatyzacja przestanie działać?",
      a: "Każdy scenariusz ma obsługę błędów i powiadomienia. W ramach opieki IT monitorujemy przepływy i reagujemy na zgłoszenia, a dokumentacja pozwala szybko odtworzyć proces po zmianach w zewnętrznych systemach.",
    },
  ],
  "seo-content-marketing": [
    {
      q: "Po jakim czasie SEO przynosi efekty?",
      a: "Techniczne poprawki widać w kilka tygodni, wzrost widoczności na nowe frazy zwykle po 3–6 miesiącach regularnej pracy nad treścią i linkowaniem. Lokalne SEO (wizytówka Google, frazy z miastem) często daje efekty szybciej.",
    },
    {
      q: "Czym różni się SEO techniczne od pozycjonowania?",
      a: "SEO techniczne to fundament: szybkość, indeksacja, struktura, dane strukturalne, błędy. Pozycjonowanie to szerszy proces obejmujący również treści, linkowanie i analizę konkurencji. Zaczynamy od techniki, bo bez niej treści nie pracują na pełnych obrotach.",
    },
    {
      q: "Czy piszecie treści na bloga firmowego?",
      a: "Tak. Planujemy tematy na podstawie analizy fraz i intencji, piszemy artykuły eksperckie i poradniki B2B, optymalizujemy nagłówki, linkowanie i dane strukturalne. Treści konsultujemy z klientem, żeby były merytorycznie poprawne.",
    },
    {
      q: "Czy potrzebuję audytu SEO przed współpracą?",
      a: "Audyt to najlepszy punkt startu: pokazuje, co blokuje widoczność i co daje najszybszy efekt. Jeśli strona jest nowa lub przebudowywana, SEO techniczne wdrażamy od razu w projekcie.",
    },
    {
      q: "Jak raportujecie wyniki?",
      a: "Pracujemy na danych z Google Search Console i Google Analytics: widoczność, kliknięcia, pozycje dla kluczowych fraz, konwersje. Raport jest krótki i mówi, co zrobiliśmy, co się zmieniło i co planujemy dalej.",
    },
  ],
  "opieka-it-dla-firm": [
    {
      q: "Co obejmuje stała opieka IT dla firmy?",
      a: "Aktualizacje systemów i wtyczek, kopie zapasowe, monitoring dostępności i bezpieczeństwa, helpdesk dla zespołu, zarządzanie dostępami oraz drobne poprawki i rozwój. Zakres ustalamy w umowie, żeby był przewidywalny.",
    },
    {
      q: "Jak szybko reagujecie na zgłoszenia?",
      a: "Pilne awarie (strona nie działa, włamanie, brak poczty) obsługujemy priorytetowo, zwykle tego samego dnia. Pozostałe zgłoszenia realizujemy w ustalonym czasie reakcji zapisanym w umowie opieki.",
    },
    {
      q: "Czy opiekujecie się stronami, których nie robiliście?",
      a: "Tak. Zaczynamy od audytu technicznego i bezpieczeństwa, porządkujemy aktualizacje, kopie i dostępy, a potem przejmujemy bieżącą obsługę. Pomagamy też odbudować strony po włamaniach.",
    },
    {
      q: "Ile kosztuje opieka IT?",
      a: "Najczęściej jest to stały miesięczny abonament zależny od liczby systemów, użytkowników i czasu reakcji. Dla małych firm przygotowujemy pakiety podstawowe, dla większych – zakres szyty na miarę.",
    },
    {
      q: "Czy wspieracie Microsoft 365 i Google Workspace?",
      a: "Tak. Konfigurujemy konta, uprawnienia, SharePoint, Teams, pocztę i zabezpieczenia, a także automatyzujemy pracę na dokumentach i integrujemy te środowiska z innymi systemami firmy.",
    },
  ],
  "integracje-systemow-it": [
    {
      q: "Jakie systemy można ze sobą zintegrować?",
      a: "Praktycznie każde, które udostępniają API lub eksport danych: CRM, ERP, sklepy internetowe, systemy magazynowe, formularze, Microsoft 365, Google Workspace, narzędzia projektowe i księgowe. Gdy API nie ma, projektujemy wymianę plikami lub przez bazę danych.",
    },
    {
      q: "Czy integracja wymaga wymiany obecnych systemów?",
      a: "Nie. Celem integracji jest połączenie tego, czego już używasz, tak aby dane przepływały automatycznie. Wymianę systemu rekomendujemy tylko wtedy, gdy obecny realnie blokuje rozwój.",
    },
    {
      q: "Jak zabezpieczacie wymianę danych?",
      a: "Używamy autoryzacji tokenami lub OAuth, szyfrowanych połączeń, minimalnych uprawnień i logowania operacji. Dane osobowe przetwarzamy zgodnie z RODO, a dostęp do integracji ma tylko wskazany zespół.",
    },
    {
      q: "Ile trwa wdrożenie integracji?",
      a: "Prosta integracja dwóch systemów to zwykle 1–3 tygodnie. Złożone synchronizacje (np. sklep ↔ magazyn ↔ ERP) dzielimy na etapy i wdrażamy przyrostowo, testując każdy przepływ na danych klienta.",
    },
    {
      q: "Co z utrzymaniem integracji po zmianach w systemach?",
      a: "Dokumentujemy każdą integrację i monitorujemy błędy. W ramach opieki IT aktualizujemy połączenia po zmianach API dostawców, żeby przepływ danych nie przerwał się bez ostrzeżenia.",
    },
  ],
};
