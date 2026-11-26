import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { insertLandings } from "@/data/landings";
import { Button, Container, Eyebrow } from "./ui";
import Reveal from "./Reveal";

/**
 * Oficjalny znak Partnera InsERT (z serwisu partnerzy.insert.com.pl) – wystarczy wgrać plik
 * pod jedną z tych nazw do public/images/partners/, a sekcja pokaże go zamiast etykiety tekstowej.
 */
const LOGO_CANDIDATES = ["insert-partner.svg", "insert-partner.webp", "insert-partner.png"];

function partnerLogo() {
  const dir = path.join(process.cwd(), "public", "images", "partners");
  const file = LOGO_CANDIDATES.find((f) => fs.existsSync(path.join(dir, f)));
  return file ? `/images/partners/${file}` : null;
}

const programs = [
  { name: "Subiekt nexo", desc: "sprzedaż i magazyn" },
  { name: "Rachmistrz nexo", desc: "KPiR i ryczałt" },
  { name: "Rewizor nexo", desc: "pełna księgowość" },
  { name: "Gratyfikant nexo", desc: "kadry i płace" },
];

/** Sekcja „Partner InsERT” na stronie głównej. */
export default function InsertPartner() {
  const logo = partnerLogo();
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="grid items-center gap-10 rounded-[2rem] border border-line/70 bg-ink-2/70 p-6 sm:p-10 lg:grid-cols-12 lg:gap-14 lg:p-14">
            <div className="lg:col-span-8">
              <Eyebrow className="mb-4">Partner InsERT</Eyebrow>
              <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl">Programy InsERT nexo z wdrożeniem i integracją</h2>
              <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">
                Jesteśmy Partnerem InsERT. Sprzedajemy i wdrażamy programy z linii nexo, łączymy je ze sklepem internetowym i innymi systemami, a biurom rachunkowym zapewniamy wsparcie informatyczne – od instalacji i kopii zapasowych po KSeF.
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-3">
                {programs.map((p) => (
                  <li key={p.name} className="rounded-2xl border border-line bg-ink/60 px-4 py-3">
                    <span className="block font-display text-sm font-semibold text-snow">{p.name}</span>
                    <span className="block text-sm text-muted">{p.desc}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {insertLandings.slice(1).map((l) => (
                  <li key={l.slug}>
                    <Link href={`/${l.slug}/`} className="text-body underline-offset-4 transition hover:text-cyan hover:underline">
                      {l.navLabel ?? l.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/programy-insert-nexo/" size="lg">
                  Programy InsERT nexo
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href="/wsparcie-it-dla-biur-rachunkowych/" variant="outline" size="lg">
                  Wsparcie dla biur rachunkowych
                </Button>
              </div>
            </div>

            {/* Jedna karta partnera: logo InsERT i pod nim oficjalny baner producenta (moduł osadzony bez zmian – wymóg sieci partnerskiej). */}
            <div className="lg:col-span-4 lg:justify-self-end">
              <div className="mx-auto w-[300px] max-w-full overflow-hidden rounded-3xl border border-line bg-snow shadow-[0_30px_80px_-40px_rgba(8,251,250,0.35)]">
                <div className="flex flex-col items-center px-6 pb-4 pt-5">
                  {logo ? (
                    <Image src={logo} alt="InsERT – logo producenta programów nexo" width={300} height={100} className="h-16 w-auto" unoptimized />
                  ) : (
                    <p className="font-display text-2xl font-semibold tracking-tight text-ink">InsERT</p>
                  )}
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">Partner InsERT</p>
                </div>
                <iframe
                  id="insert_aktualna_promocja_rectangle"
                  name="insert_aktualna_promocja_rectangle"
                  title="InsERT – aktualna promocja"
                  src="https://bannery.insert.com.pl/aktualna_promocja_rectangle"
                  width={300}
                  height={250}
                  loading="lazy"
                  scrolling="no"
                  style={{ border: 0, display: "block", maxWidth: "100%" }}
                />
              </div>
              <p className="mx-auto mt-3 w-[300px] max-w-full text-center text-xs text-muted">Aktualna promocja producenta. Zakup i wdrożenie zrealizujesz u nas.</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
