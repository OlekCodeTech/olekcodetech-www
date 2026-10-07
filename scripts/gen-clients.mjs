// Generuje src/data/clients.ts z plików w public/images/clients (wymiary) i portfolio.ts (nazwy, linki).
import fs from "node:fs";
import sharp from "sharp";

const map = {
  "plonio-pl": "Plonio.pl",
  "wypozyczsukienke-com": "Wypożycz Sukienkę",
  "systemydozorowania-pl": "UNI-System – systemy dozorowania",
  "power-lab-pl": "PowerLAB – chiptuning i serwis AdBlue",
  "ijkmaslanka-pl": "IJK Transport – Krzysztof Maślanka",
  "dspaliwa-wielun-pl": "DS Paliwa",
  "szyjahairacademy-pl": "SZYJA Hair Academy",
  "sklep-ravsystems-pl": "RAV - Sklep elektryczny",
  "ftspaw-pl": "Ogrodzenia i Balustrady FTSpaw",
  "wtaperfekt-pl": "WTA Perfekt",
  "complex-info-pl": "Complex - Rafał Gajda",
  "cmg-net-pl": "CMG - Cukiernia Marek Gagatek",
  "welcomefinance-pl": "WelcomeFinance",
  "msnadruki-pl": "MS Nadruki",
  "luxowalldesign-pl": "LUXO WALL DESIGN",
  "mgrecykling-eu": "MG Recykling",
  "art-marbud-pl": "ARTMAR - Usługi budowlane",
  "ochronaprzedupadkiem-pl": "ATEST - Piotr Sosnowski",
  "lidiostylmeble-pl": "LidioStyl - meble twarde i tapicerowane",
  "marsol-pl": "Marsol Developer",
  "tchx-pl": "TCHX - Usługi przemysłowe",
  "expofly-pl": "EXPOFLY - Inspekcje Dronowe",
  "podnosniki-wielun-pl": "EkoTech - Wynajem maszyn budowlanych",
  "ovatowana-pl": "oVATowana | Usługi Księgowe",
  "sygula-meble-pl": "Syguła Meble | Meble tapicerowane",
  "ekosanitarka-pl": "Ekosanitarka.pl",
  "kontrola-pojazdow-pl": "SKP Błonie | Stacja Kontroli Pojazdów",
  "silverclean-pl": "SilverClean | Profesjonalne środki czystości i maszyny sprzątające",
  "mspm-biogaz-pl": "MSPM - BIOGAZ",
  "myjemyto-pl": "MyjemyTo.pl",
  "apteka-burchacinscy-pl": "Apteki Burchaciński",
  "e-numerika-pl": "E-Numerika | Usługi Księgowe",
  "restauracjaincognito-pl": "Restauracja Incognito",
  "bkp-ubezpieczenia-pl": "BKP - Ubezpieczenia",
  "bkp-com-pl": "BKP | Biuro Księgowo Podatkowe",
  "ogrodzeniastarek-pl": "Ogrodzenia i Balustrady | STAREK",
  "s8pomocdrogowa-pl": "SimTrans - Pomoc Drogowa",
  "imperialkolobrzeg-pl": "Imperial Kołobrzeg",
  "zlomobet-eu": "Złomobet.eu",
  "wekart-opakowania-pl": "WEKART | Opakowania z tektury falistej",
  "komunalne-wielun-pl": "Komunalne Wieluń",
  "ravsystems-pl": "RAV - Usługi Elektryczne",
};
const src = fs.readFileSync("src/data/portfolio.ts", "utf8");
const lines = [];
for (const [slug, title] of Object.entries(map)) {
  const file = `public/images/clients/${slug}.webp`;
  if (!fs.existsSync(file)) { console.warn("brak", file); continue; }
  if (!src.includes(`title: ${JSON.stringify(title)}`)) { console.warn("brak w portfolio:", title); continue; }
  const { width, height } = await sharp(file).metadata();
  const name = title.split(/\s[|–-]\s/)[0].trim();
  lines.push(`  { name: ${JSON.stringify(name)}, portfolioTitle: ${JSON.stringify(title)}, logo: "/images/clients/${slug}.webp", width: ${width}, height: ${height} },`);
}
const out = `// Wygenerowane przez scripts/gen-clients.mjs – logotypy klientów (białe, pod ciemne tło).
// Źródła: scripts/logo-sources/, przetwarzanie: scripts/process-logos.mjs.
export type Client = { name: string; portfolioTitle: string; logo: string; width: number; height: number };

export const clients: Client[] = [
${lines.join("\n")}
];
`;
fs.writeFileSync("src/data/clients.ts", out);
console.log("clients.ts:", lines.length);
