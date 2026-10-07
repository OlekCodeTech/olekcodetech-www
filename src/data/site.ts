export const site = {
  name: "OlekCodeTech",
  legalName: "OlekCodeTech Sp. z o.o.",
  tagline: "Strony WWW, automatyzacje i obsługa IT dla firm",
  description:
    "Tworzymy strony internetowe, sklepy online i aplikacje dedykowane, wdrażamy automatyzacje i zapewniamy kompleksową obsługę IT dla firm w całej Polsce.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://olekcodetech.pl",
  phone: "+48 882 715 667",
  phoneHref: "tel:+48882715667",
  email: "biuro@olekcodetech.pl",
  address: {
    street: "ul. Liliowa 3",
    postal: "98-300",
    city: "Wieluń",
    region: "łódzkie",
    country: "PL",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=ul.+Liliowa+3,+98-300+Wielu%C5%84",
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
      { label: "Strony internetowe i sklepy", href: "/stronywww-aplikacje/", short: "WordPress, WooCommerce, autorskie motywy" },
      { label: "Aplikacje dedykowane", href: "/aplikacje-dedykowane/", short: "CRM, panele klienta, rezerwacje, mobile" },
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

