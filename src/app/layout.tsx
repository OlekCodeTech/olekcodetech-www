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
  title: "OlekCodeTech – Strony WWW, Automatyzacje i Obsługa IT",
  description: site.description,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: site.name,
    images: [{ url: "/video/hero-poster.webp", width: 1600, height: 900, alt: "Realizacje OlekCodeTech" }],
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
  areaServed: "PL",
  sameAs: [site.social.facebook, site.social.instagram],
  priceRange: "$$",
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
        <JsonLd data={orgJsonLd} />
      </body>
    </html>
  );
}
