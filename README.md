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
src/data/                 site.ts (dane firmy, menu, liczby), services.ts (6 usług) + services-faq.ts, portfolio.ts (45 realizacji),
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

## Dodawanie wpisu na blog

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

## Formularz kontaktowy i newsletter

Strona jest statyczna, więc formularz wysyła `POST` JSON na `NEXT_PUBLIC_FORM_ENDPOINT`
(np. webhook n8n / Make, Web3Forms, Formspree). Pola: `name, email, phone, subject, message, consent, source, sentAt`.
Bez ustawionego endpointu formularz otwiera klienta poczty z gotową wiadomością.
Newsletter (`NEXT_PUBLIC_NEWSLETTER_ENDPOINT`) jest ukryty, dopóki nie podasz endpointu.

## Analityka i cookies

Google tag (`NEXT_PUBLIC_GTAG_ID`, domyślnie `GT-57SWRFDN`, ten sam co w WP) ładuje się dopiero po kliknięciu „Akceptuję wszystkie” w banerze cookies. Zgoda jest zapisywana w `localStorage` pod kluczem `oct-consent`.

## Wdrożenie

**Podgląd (GitHub Pages):** push na `main` uruchamia `.github/workflows/deploy-pages.yml`. Adres: https://olekcodetech.github.io/olekcodetech-www/ (noindex).

**Produkcja (Hostinger, w miejsce WordPressa):**

1. `npm run build` (bez `NEXT_PUBLIC_BASE_PATH` i bez `NEXT_PUBLIC_NOINDEX`).
2. Zrób backup WP, wyczyść `public_html`, wgraj zawartość `out/` (w tym `.htaccess`).
3. Sprawdź `https://olekcodetech.pl/sitemap.xml` i zgłoś go w Search Console.

Alternatywa: Vercel / Netlify / Cloudflare Pages: podłącz repo, komenda `npm run build`, katalog `out`.
