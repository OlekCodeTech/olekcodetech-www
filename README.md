# olekcodetech.pl – strona w React (Next.js)

Przebudowa strony firmowej OlekCodeTech z WordPressa (Elementor / motyw Syntrix) na statyczną stronę w React.

- **Stack:** Next.js 16 (App Router, `output: "export"`), React 19, TypeScript, Tailwind CSS 4, lucide-react
- **Treść:** wszystkie podstrony przeniesione 1:1 z WP, blog w Markdown (`content/posts/*.md`), realizacje w `src/data/portfolio.ts`
- **Adresy URL:** identyczne jak w WordPressie (`/o-nas/`, `/oferta/`, `/stronywww-aplikacje/`, `/<slug-wpisu>/`, `/category/<slug>/`, `/privacy-policy/`), więc SEO nie traci nic przy migracji. Stary `/blog-standard/` przekierowuje na `/aktualnosci/`.

## Uruchomienie

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # statyczny eksport do katalogu out/
```

Zmienne środowiskowe: patrz `.env.example` (skopiuj do `.env.local`).

## Struktura

```
content/posts/*.md        wpisy bloga (frontmatter: title, date, updated, categories, excerpt, image)
content/pages/*.md        polityka prywatności
public/images/            grafiki (WebP), logo
public/video/             showreel hero (hero-720.mp4, 2 MB) i animacja tła CTA (cta-720.mp4, 1 MB) + postery WebP
public/.htaccess          przekierowania + cache dla hostingu Apache/LiteSpeed
src/app/                  strony (App Router)
src/components/           Header, Footer, Hero, sekcje, formularz, baner cookies
src/data/                 site.ts (dane firmy, menu, liczby), services.ts (6 usług) + services-faq.ts, portfolio.ts (czyta content/portfolio.json – 45 realizacji),
                          landings-apps.ts (6 podstron aplikacji dedykowanych), landings-services.ts (13 podstron usług), landings-cities.ts (7 stron lokalnych), cases.ts (12 case studies), types.ts
src/lib/posts.ts          wczytywanie Markdown (gray-matter + marked)
scripts/                  import wpisów z WP REST, optymalizacja obrazów (sharp), generowanie ikon
```

## Struktura SEO

- `/<usluga>/` – 6 stron usług (aplikacje dedykowane wyróżnione jako główny obszar) (FAQ + FAQPage schema, Service schema, sekcja „Zakres w szczegółach” z podstronami).
- `/<podstrona>/` – 19 podstron usługowych (6 o aplikacjach) (np. `/sklepy-internetowe-woocommerce/`) i 7 stron lokalnych (`/strony-internetowe-wielun/` …) z `src/data/landings-*.ts`; render `src/components/LandingView.tsx`, routing w `src/app/[slug]/page.tsx` (wspólny segment z wpisami bloga).
- `/portfolio/<slug>/` – case studies z `src/data/cases.ts` (`CaseView.tsx`); karty realizacji z case study linkują do niego zamiast na zewnątrz.
- Dane strukturalne: Organization/LocalBusiness (layout), Person (O nas), Service, FAQPage, BreadcrumbList, BlogPosting, CreativeWork.
- `sitemap.xml`, `robots.txt`, `llms.txt` generowane przy buildzie z danych.
- Obrazy przez własny loader (`src/lib/image-loader.ts`), który dokleja `NEXT_PUBLIC_BASE_PATH` – wymagane dla podglądu na GitHub Pages.

- Karty Open Graph 1200×630 dla każdej strony w `public/og/` – generowane `npx tsx scripts/gen-og.mts` (uruchom po dodaniu/zmianie strony i zacommituj wynik). Metadane stron tworzy `pageMeta()` z `src/lib/seo.ts`.
- Audyt SEO eksportu: `npm run build && python scripts/seo-audit.py out` (title/description, H1, canonical, og:image, alt, martwe linki, duplikaty, sieroty).
- Kategorie bloga mają `noindex,follow`, dopóki mają po kilka wpisów.

Nową podstronę SEO dodajesz jako obiekt w `landings-services.ts` / `landings-cities.ts` (typ `LandingPage` w `types.ts`); case study – w `cases.ts` (pole `portfolioTitle` musi odpowiadać tytułowi w `portfolio.ts`).

## Panel treści /admin/ – nowe realizacje i wpisy

Adres: **https://olekcodetech.pl/admin/** (na podglądzie: https://olekcodetech.github.io/olekcodetech-www/admin/).
Panel (Sveltia CMS) zapisuje zmiany jako commity w tym repozytorium, a GitHub Actions przebudowuje stronę w ok. 2–3 minuty.

**Pierwsze logowanie (raz):**
1. GitHub → Settings → Developer settings → Personal access tokens → **Fine-grained tokens** → Generate new token.
2. Repository access: *Only select repositories* → `OlekCodeTech/olekcodetech-www`. Permissions → Repository → **Contents: Read and write**. Ważność np. 1 rok.
3. Na `/admin/` kliknij **„Zaloguj się za pomocą tokenu dostępu”** i wklej token (zapamięta go przeglądarka).

**Nowa realizacja:** Realizacje → Lista realizacji → „Dodaj” (pojawi się na górze) → nazwa, typ, krótki opis, link, zdjęcie → Zapisz.
Zdjęcie jest automatycznie konwertowane do WebP i zmniejszane do 1600 px. Pojawi się w portfolio, a jeśli ma być wyróżnione na stronie głównej
albo dostać case study / logo w pasku klientów – to zmiana w kodzie (`src/app/page.tsx`, `src/data/cases.ts`, `scripts/gen-clients.mjs`).

**Nowy wpis w Aktualnościach:** Aktualności → „Nowy wpis” → tytuł (z niego powstaje adres URL), data, kategorie, zdjęcie, zajawka,
tytuł i opis SEO, treść (nagłówki H2/H3, listy) → Zapisz. Karta do udostępniania (OG) generuje się sama przy buildzie, wpis trafia do
mapy strony, listy aktualności i pliku llms.txt.

Pliki pod spodem: `content/posts/*.md` (wpisy) i `content/portfolio.json` (realizacje) – można je też edytować ręcznie.

## Dodawanie wpisu ręcznie (bez panelu)

1. Utwórz `content/posts/moj-slug.md`:

   ```md
   ---
   title: "Tytuł wpisu"
   date: "2026-10-01"
   updated: "2026-10-01"
   categories: ["SEO i widoczność w Google"]
   excerpt: "Krótki opis do kart i meta description."
   image: "/images/blog/moj-obrazek.webp"
   ---

   Treść w Markdown…
   ```

2. Wrzuć grafikę do `public/images/blog/` (najlepiej WebP, do 1600 px).
3. `npm run build` i wgraj `out/`.

Kategorie i ich slugi są w `src/lib/posts.ts` (stała `categories`).

## Logotypy klientów

Pasek „Zaufały nam” na stronie głównej (`ClientsMarquee.tsx`) używa białych wersji logotypów z `public/images/clients/`.
Źródła (pobrane ze stron klientów) leżą w `scripts/logo-sources/`. Nowe logo: wrzuć plik jako `<domena>.png|svg|webp`,
uruchom `node scripts/process-logos.mjs scripts/logo-sources public/images/clients`, dopisz mapowanie w `scripts/gen-clients.mjs`
i uruchom `node scripts/gen-clients.mjs`. Gdy automatyczny tryb źle zamieni kolory, utwórz `<slug>.mode` z `knockout|light|silhouette|hard`.

## Wideo

Oba filmy pochodzą ze starej strony (`final-comp.mp4` 41 MB i animacja obwodów) i zostały przekodowane ffmpeg-iem do lekkich wersji bez dźwięku
(H.264, 720p, CRF 27–28; hero od 3. sekundy, 26 s pętli; w animacji CTA wycięty znak wodny). Odtwarzają się automatycznie bez dźwięku,
pauzują poza ekranem i nie startują przy `prefers-reduced-motion`. Komponent: `src/components/VideoPlayer.tsx`.

## Formularz kontaktowy

Produkcja: formularz wysyła `POST` JSON na **`/api/contact.php`** (PHP na Hostingerze, `public/api/contact.php`), który wysyła wiadomość
na **biuro@olekcodetech.pl** z polem „Odpowiedz do” ustawionym na adres klienta. Zabezpieczenia: pułapka na boty, walidacja,
limit 5 wiadomości/h z jednego IP, kontrola źródła, blokada wstrzykiwania nagłówków. Log błędów nie zawiera haseł ani treści.

**Konfiguracja na serwerze (raz):** poczta domeny jest w Google Workspace (SPF dopuszcza tylko Google), więc wysyłamy przez SMTP Google:
1. Konto biuro@olekcodetech.pl → Zarządzaj kontem Google → Bezpieczeństwo → włącz weryfikację dwuetapową → **Hasła aplikacji** → utwórz.
2. Skopiuj `public/api/contact-config.example.php` jako `contact-config.php` **katalog wyżej niż public_html** (lub do `public_html/api/` – .htaccess blokuje do niego dostęp) i wpisz hasło aplikacji.
3. Wyślij testową wiadomość z /kontakt/.

Bez pliku konfiguracyjnego skrypt użyje PHP `mail()` – zadziała, ale wiadomości mogą trafiać do spamu (SPF).
Podgląd na GitHub Pages nie ma PHP, więc tam formularz otwiera klienta poczty.
Newsletter (`NEXT_PUBLIC_NEWSLETTER_ENDPOINT`) jest ukryty, dopóki nie podasz endpointu.

## Analityka i cookies

Google tag (`NEXT_PUBLIC_GTAG_ID`, domyślnie `GT-57SWRFDN`, ten sam co w WP) ładuje się dopiero po kliknięciu „Akceptuję wszystkie” w banerze cookies. Zgoda jest zapisywana w `localStorage` pod kluczem `oct-consent`.

## Wdrożenie produkcyjne (Hostinger)

**Strona jest na produkcji od 07.10.2026** (konto Hostinger `u911698365`, katalog `~/domains/olekcodetech.pl/public_html`).
Każdy push na `main` (także zapis w panelu /admin/) automatycznie: buduje stronę, robi audyt SEO, wysyła ją na serwer i sprawdza, czy odpowiada.

- **Jak:** job `production` w `.github/workflows/deploy-pages.yml` pakuje `out/` i wysyła przez SSH. Klucz CI (`SSH_DEPLOY_KEY`) ma na serwerze
  wymuszoną komendę `tar xzf - -C …/olekcodetech.pl/public_html` – nie da się nim zalogować ani dotknąć innych stron na koncie.
- **Włączanie/wyłączanie:** zmienna repozytorium `DEPLOY_HOSTINGER` (`true` = wdrażaj). Sekrety: `SSH_DEPLOY_KEY`, `SSH_KNOWN_HOSTS`, `SSH_HOST`, `SSH_PORT`, `SSH_USER`.
- **Pliki usunięte z projektu** nie są kasowane z serwera (rozpakowanie nadpisuje i dodaje). Przy większych porządkach usuń je ręcznie przez SSH.
- **CDN Hostingera** (hcdn) może przez jakiś czas serwować starą wersję strony głównej – hPanel → Wydajność → CDN → Wyczyść pamięć podręczną.
- **Formularz:** `~/domains/olekcodetech.pl/contact-config.php` (poza public_html) – wpisz hasło aplikacji Google w `pass`.

**Kopia WordPressa (sprzed przełączenia):**
- `~/domains/olekcodetech.pl/_wp_public_html_20261007/` – cała stara instalacja (nieaktywna, poza public_html),
- `~/domains/olekcodetech.pl/_backup_wp_20261007/` – `db.sql.gz` (baza) + `files.tar.gz` (pliki).

**Powrót do WordPressa (awaryjnie, ~2 min):** przez SSH:
```bash
cd ~/domains/olekcodetech.pl && mv public_html _next_public_html && mv _wp_public_html_20261007 public_html
```
i ustaw `DEPLOY_HOSTINGER=false`, żeby CI nie nadpisało plików.

Ręcznie (bez CI): `npm run build` i `tar czf - -C out . | ssh -p 65002 u911698365@195.200.10.47 "tar xzf - -C domains/olekcodetech.pl/public_html"`.
