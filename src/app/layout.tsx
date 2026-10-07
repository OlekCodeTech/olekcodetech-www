import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin", "latin-ext"], variable: "--font-dm-sans", display: "swap" });

const noindex = process.env.NEXT_PUBLIC_NOINDEX === "1";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "OlekCodeTech – Strony WWW, aplikacje dedykowane i obsługa IT",
  description: "Strony internetowe, sklepy WooCommerce, aplikacje dedykowane, automatyzacje i opieka IT dla firm. OlekCodeTech z Wielunia – działamy w całej Polsce.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: site.name,
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "OlekCodeTech – strony WWW, automatyzacje i obsługa IT" }],
  },
  twitter: { card: "summary_large_image" },
  robots: noindex ? { index: false, follow: false } : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.webp`,
  image: `${siteUrl}/video/hero-poster.webp`,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  vatID: `PL${site.nip}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postal,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  sameAs: [site.social.facebook, site.social.instagram],
  priceRange: "$$",
  founder: { "@type": "Person", "@id": `${siteUrl}/o-nas/#piotr-olek`, name: "Piotr Olek", sameAs: ["https://www.linkedin.com/in/piotrolek/"] },
  foundingDate: "2019",
  areaServed: [
    { "@type": "Country", name: "Polska" },
    ...["Wieluń", "Sieradz", "Wieruszów", "Zduńska Wola", "Łódź", "Wrocław", "Częstochowa"].map((name) => ({ "@type": "City", name })),
  ],
  knowsAbout: ["Tworzenie stron internetowych", "Sklepy internetowe WooCommerce", "Aplikacje dedykowane i oprogramowanie na zamówienie", "Systemy CRM na zamówienie", "Aplikacje mobilne React Native", "Aplikacje webowe React i Next.js", "Automatyzacja procesów n8n i Make", "Integracje Microsoft 365 i SharePoint", "SEO techniczne", "Opieka IT dla firm"],
  hasMap: site.address.mapsUrl,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: site.name,
  inLanguage: "pl-PL",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${manrope.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-ink text-body">
        <Script id="js-class" strategy="beforeInteractive">{`document.documentElement.classList.add('js')`}</Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-pill focus:bg-cyan focus:px-4 focus:py-2 focus:text-ink"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="main" className="pt-[76px]">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <JsonLd data={[orgJsonLd, websiteJsonLd]} />
      </body>
    </html>
  );
}
