export type PortfolioType = "strona" | "sklep" | "system";

export type PortfolioItem = {
  title: string;
  type: PortfolioType;
  tags: string;
  url?: string;
  image: string;
};

export const portfolioTypes: Record<PortfolioType, string> = {
  strona: "Strony internetowe",
  sklep: "Sklepy internetowe",
  system: "Systemy i aplikacje",
};

export const portfolio: PortfolioItem[] = [
  { title: "RAV - Sklep elektryczny", type: "sklep", tags: "Sklep internetowy · API magazynu zewnętrznego zintegrowane ze stroną · Custom wtyczki WP", url: "https://sklep.ravsystems.pl", image: "/images/portfolio/Projekt-bez-nazwy-2026-07-02T121552.927.webp" },
  { title: "Ogrodzenia i Balustrady FTSpaw", type: "strona", tags: "Strona Internetowa", url: "https://ftspaw.pl", image: "/images/portfolio/641426885_122211430610371702_438123290332549400_n.webp" },
  { title: "WTA Perfekt", type: "sklep", tags: "Sklep Internetowy ponad 1000 produktów", url: "https://wtaperfekt.pl", image: "/images/portfolio/Projekt-bez-nazwy-2026-07-02T121755.881.webp" },
  { title: "Complex - Rafał Gajda", type: "strona", tags: "Strona Internetowa", url: "https://complex.info.pl/", image: "/images/portfolio/Projekt-bez-nazwy-2026-07-02T121339.995.webp" },
  { title: "CMG - Cukiernia Marek Gagatek", type: "strona", tags: "Strona Internetowa", url: "https://cmg.net.pl/", image: "/images/portfolio/Projekt-bez-nazwy-2026-06-09T113243.641.webp" },
  { title: "WelcomeFinance", type: "strona", tags: "Strona Internetowa", url: "https://welcomefinance.pl/", image: "/images/portfolio/Projekt-bez-nazwy-2026-06-09T113025.572.webp" },
  { title: "MS Nadruki", type: "sklep", tags: "Sklep Internetowy", url: "https://msnadruki.pl", image: "/images/portfolio/Projekt-bez-nazwy-2026-06-09T113220.936.webp" },
  { title: "LUXO WALL DESIGN", type: "strona", tags: "Strona Internetowa", url: "https://luxowalldesign.pl", image: "/images/portfolio/Projekt-bez-nazwy-79.webp" },
  { title: "MG Recykling", type: "strona", tags: "Strona Internetowa", url: "https://mgrecykling.eu", image: "/images/portfolio/MG-Recykling-7.webp" },
  { title: "ARTMAR - Usługi budowlane", type: "strona", tags: "Strona Internetowa", url: "https://art-marbud.pl", image: "/images/portfolio/ART-MAR2.webp" },
  { title: "ATEST - Piotr Sosnowski", type: "strona", tags: "Strona Internetowa", url: "https://ochronaprzedupadkiem.pl", image: "/images/portfolio/ATEST-1.webp" },
  { title: "LidioStyl - meble twarde i tapicerowane", type: "sklep", tags: "Sklep Internetowy", url: "https://lidiostylmeble.pl/", image: "/images/portfolio/LidioStyl-1.webp" },
  { title: "CRM E-Numerika Biuro Księgowe", type: "system", tags: "System CRM", image: "/images/portfolio/657377083_122214217418371702_121111980413201762_n.webp" },
  { title: "Marsol Developer", type: "strona", tags: "Strona Internetowa", url: "https://marsol.pl/", image: "/images/portfolio/Marsol-Iphone-BG.webp" },
  { title: "TCHX - Usługi przemysłowe", type: "strona", tags: "Strona Internetowa", url: "https://tchx.pl/", image: "/images/portfolio/TCHX-3.webp" },
  { title: "Hurtownia Budowlana Panek", type: "strona", tags: "Strona Internetowa", url: "https://hurtowniapanekwielun.pl/", image: "/images/portfolio/Hurtownia-Budowlana-Panek-2.webp" },
  { title: "EXPOFLY - Inspekcje Dronowe", type: "strona", tags: "Strona Internetowa", url: "https://expofly.pl/", image: "/images/portfolio/EXPOFLY-1.webp" },
  { title: "EkoTech - Wynajem maszyn budowlanych", type: "strona", tags: "Strona Internetowa", url: "https://podnosniki-wielun.pl/", image: "/images/portfolio/EkoTech-3.webp" },
  { title: "oVATowana | Usługi Księgowe", type: "strona", tags: "Strona Internetowa", url: "https://ovatowana.pl/", image: "/images/portfolio/OVATOWANA-3.webp" },
  { title: "Esel Logistik", type: "strona", tags: "Strona Internetowa", url: "https://esel-logistik.pl/", image: "/images/portfolio/EselLogistik-2.webp" },
  { title: "Syguła Meble | Meble tapicerowane", type: "sklep", tags: "Sklep Internetowy", url: "https://sygula-meble.pl/", image: "/images/portfolio/SygulaMeble.webp" },
  { title: "Ekosanitarka.pl", type: "strona", tags: "Strona Internetowa", url: "https://ekosanitarka.pl/", image: "/images/portfolio/Ekosanitarka-3.webp" },
  { title: "Sweepio | Roboty sprzątające", type: "strona", tags: "Strona Internetowa", url: "https://sweepio.pl/", image: "/images/portfolio/Sweppio.webp" },
  { title: "SKP Błonie | Stacja Kontroli Pojazdów", type: "strona", tags: "Strona Internetowa", url: "https://kontrola-pojazdow.pl/", image: "/images/portfolio/SKP-BLONIE-1.webp" },
  { title: "SilverClean | Profesjonalne środki czystości i maszyny sprzątające", type: "sklep", tags: "Sklep Internetowy", url: "https://www.silverclean.pl/", image: "/images/portfolio/SilverClean-1.webp" },
  { title: "MSPM - BIOGAZ", type: "strona", tags: "Strona Internetowa", url: "https://mspm-biogaz.pl/", image: "/images/portfolio/MSPM-7.webp" },
  { title: "MyjemyTo.pl", type: "strona", tags: "Strona Internetowa", url: "https://myjemyto.pl/", image: "/images/portfolio/Myjemyto-1.webp" },
  { title: "Apteki Burchaciński", type: "strona", tags: "Strona Internetowa", url: "https://apteka-burchacinscy.pl/", image: "/images/portfolio/Apteki.webp" },
  { title: "E-Numerika | Usługi Księgowe", type: "sklep", tags: "Sklep Internetowy", url: "https://e-numerika.pl/", image: "/images/portfolio/E-Numerika-2.webp" },
  { title: "Restauracja Incognito", type: "strona", tags: "Strona Internetowa", url: "https://www.restauracjaincognito.pl/", image: "/images/portfolio/Restauracja-Incognito.webp" },
  { title: "BKP - Ubezpieczenia", type: "strona", tags: "Strona Internetowa", url: "https://bkp-ubezpieczenia.pl/", image: "/images/portfolio/BKP-UBE.webp" },
  { title: "Cukiernia EDEN", type: "strona", tags: "Strona Internetowa", url: "https://eden.wielun.pl/", image: "/images/portfolio/Cukiernia-EDEN.webp" },
  { title: "BKP | Biuro Księgowo Podatkowe", type: "sklep", tags: "Sklep Internetowy", url: "https://bkp.com.pl/", image: "/images/portfolio/BKP.webp" },
  { title: "Ogrodzenia i Balustrady | STAREK", type: "strona", tags: "Strona Internetowa", url: "https://ogrodzeniastarek.pl/", image: "/images/portfolio/Ogrodzenia-.webp" },
  { title: "SimTrans - Pomoc Drogowa", type: "strona", tags: "Strona Internetowa", url: "https://s8pomocdrogowa.pl/", image: "/images/portfolio/SIMTRANS.webp" },
  { title: "Imperial Kołobrzeg", type: "strona", tags: "Strona Internetowa", url: "https://www.imperialkolobrzeg.pl/", image: "/images/portfolio/Imperial.webp" },
  { title: "Złomobet.eu", type: "sklep", tags: "Sklep Internetowy", url: "https://www.zlomobet.eu/", image: "/images/portfolio/Zlomobet-1.webp" },
  { title: "Ślubna Historia", type: "strona", tags: "Strona Internetowa", url: "https://slubna-historia.pl/", image: "/images/portfolio/slubna.webp" },
  { title: "WEKART | Opakowania z tektury falistej", type: "strona", tags: "Strona Internetowa", url: "https://wekart-opakowania.pl/", image: "/images/portfolio/WEKART.webp" },
  { title: "Komunalne Wieluń", type: "strona", tags: "Strona Internetowa", url: "https://komunalne.wielun.pl/", image: "/images/portfolio/Komunalne-Wielun.webp" },
  { title: "RAV - Usługi Elektryczne", type: "sklep", tags: "Sklep Internetowy", url: "https://ravsystems.pl/", image: "/images/portfolio/RAV.webp" },
];
