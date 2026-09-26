export const site = {
  name: "OlekCodeTech",
  legalName: "OlekCodeTech Sp. z o.o.",
  tagline: "Strony WWW, automatyzacje i obsługa IT dla firm",
  description:
    "Tworzymy nowoczesne strony internetowe, sklepy online, automatyzacje procesów i zapewniamy kompleksową obsługę IT dla firm w całej Polsce.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://olekcodetech.pl",
  phone: "+48 882 715 667",
  phoneHref: "tel:+48882715667",
  email: "biuro@olekcodetech.pl",
  address: {
    street: "ul. Chorwacka 11/2",
    postal: "98-300",
    city: "Wieluń",
    region: "łódzkie",
    country: "PL",
    mapsUrl: "https://maps.app.goo.gl/AhEZhKA74oSjK6xx7",
  },
  nip: "8322102213",
  krs: "0001210254",
  regon: "543452210",
  social: {
    facebook: "https://www.facebook.com/olekcodetech/",
    instagram: "https://www.instagram.com/olek_codetech/",
  },
  founded: "2020",
} as const;

export type NavItem = { label: string; href: string; children?: { label: string; href: string; short: string }[] };

export const nav: NavItem[] = [
  { label: "Strona główna", href: "/" },
  { label: "O nas", href: "/o-nas/" },
  {
    label: "Oferta",
    href: "/oferta/",
    children: [
      { label: "Strony internetowe, sklepy i aplikacje", href: "/stronywww-aplikacje/", short: "WordPress, WooCommerce, React" },
      { label: "Automatyzacja procesów biznesowych", href: "/automatyzacja-procesow-biznesowych/", short: "n8n, Make, CRM, formularze" },
      { label: "SEO i content marketing", href: "/seo-content-marketing/", short: "SEO techniczne, blog ekspercki" },
      { label: "Opieka IT dla firm", href: "/opieka-it-dla-firm/", short: "Helpdesk, aktualizacje, monitoring" },
      { label: "Integracje systemów IT", href: "/integracje-systemow-it/", short: "API, Microsoft 365, Google Workspace" },
    ],
  },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Aktualności", href: "/aktualnosci/" },
  { label: "Kontakt", href: "/kontakt/" },
];

export const stats = [
  { value: 50, suffix: "+", label: "Zrealizowanych projektów IT", sub: "strony WWW, sklepy, systemy, automatyzacje" },
  { value: 98, suffix: "%", label: "Zadowolonych klientów", sub: "długofalowa współpraca i rekomendacje" },
  { value: 7, suffix: "+", label: "Lat doświadczenia w IT", sub: "projektowanie, automatyzacja, systemy" },
  { value: 17, suffix: "+", label: "Partnerzy biznesowi", sub: "opieka IT i rozwój systemów" },
];

export const values = [
  {
    title: "Usługi IT dla firm",
    text: "Zapewniamy kompleksowe usługi IT dla firm – od stron internetowych i sklepów online, po systemy IT i stałą obsługę techniczną przedsiębiorstw.",
  },
  {
    title: "Strategia i rozwój IT",
    text: "Pomagamy firmom planować i rozwijać technologię: doradzamy, projektujemy rozwiązania IT oraz wdrażamy systemy dopasowane do realnych potrzeb biznesu.",
  },
  {
    title: "Dopasowana obsługa IT",
    text: "Zapewniamy indywidualną obsługę IT, wsparcie techniczne i helpdesk, dbając o bezpieczeństwo, stabilność i ciągłość działania systemów IT.",
  },
];

export const clients = [
  { name: "GOKO", logo: "/images/clients/goko_logo_white-768x273-1.webp" },
  { name: "Złomobet", logo: "/images/clients/ZlomobetWhite-1.webp" },
  { name: "Marsol Developer", logo: "/images/clients/Marsol-white-1-1024x1024-1.webp" },
  { name: "Klient", logo: "/images/clients/White.svg" },
  { name: "Restauracja Incognito", logo: "/images/clients/Projekt-bez-nazwy-69-1.webp" },
  { name: "Klient", logo: "/images/clients/logo-340x156-kolor.webp" },
];
