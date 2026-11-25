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
            <div className="lg:col-span-7">
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

            <div className="lg:col-span-5">
              <div className="flex min-h-28 flex-col items-center justify-center rounded-3xl border border-line bg-snow p-6">
                {logo ? (
                  <>
                    <Image src={logo} alt="InsERT – logo producenta programów nexo" width={300} height={100} className="h-24 w-auto" unoptimized />
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink/70">Partner InsERT</p>
                  </>
                ) : (
                  <p className="text-center font-display text-2xl font-semibold tracking-tight text-ink">
                    Partner InsERT
                    <span className="mt-1 block text-sm font-medium tracking-normal text-ink/60">sprzedaż · wdrożenia · integracje</span>
                  </p>
                )}
              </div>
              {/* Oficjalny baner InsERT – moduł producenta, osadzony bez zmian (wymóg sieci partnerskiej). */}
              <div className="mt-4 flex justify-center overflow-hidden rounded-3xl border border-line bg-ink/60 p-3">
                <iframe
                  id="insert_aktualna_promocja_rectangle"
                  name="insert_aktualna_promocja_rectangle"
                  title="InsERT – aktualna promocja"
                  src="https://bannery.insert.com.pl/aktualna_promocja_rectangle"
                  width={300}
                  height={250}
                  loading="lazy"
                  scrolling="no"
                  style={{ border: 0, maxWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
