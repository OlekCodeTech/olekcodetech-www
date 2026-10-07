import Link from "next/link";
import Image from "next/image";
import { clients } from "@/data/clients";
import { cases } from "@/data/cases";
import { Container } from "./ui";

/** Pasek „Zaufały nam” – logotypy klientów w płynnej, zapętlonej animacji. */
export default function ClientsMarquee() {
  const caseSlugs = Object.fromEntries(cases.map((c) => [c.portfolioTitle, c.slug]));

  const row = (copy: number) =>
    clients.map((c) => {
      const href = caseSlugs[c.portfolioTitle] ? `/portfolio/${caseSlugs[c.portfolioTitle]}/` : "/portfolio/";
      // Wysokość wizualna ~36–44 px, szerokie logotypy niżej, żeby pasek był optycznie równy.
      const ratio = c.width / c.height;
      const h = ratio > 4 ? 30 : ratio > 2.5 ? 38 : 48;
      const w = Math.round(h * ratio);
      return (
        <li key={`${copy}-${c.logo}`} className="flex shrink-0 items-center" aria-hidden={copy > 0 || undefined}>
          <Link
            href={href}
            tabIndex={copy > 0 ? -1 : undefined}
            title={c.name}
            className="block opacity-55 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100"
          >
            <Image src={c.logo} alt={`${c.name} – logo klienta OlekCodeTech`} width={w} height={h} loading="lazy" style={{ width: w, height: h }} />
          </Link>
        </li>
      );
    });

  return (
    <section className="border-y border-line/60 bg-ink-2/30 py-12 sm:py-14" aria-labelledby="clients-heading">
      <Container>
        <h2 id="clients-heading" className="text-center font-sans text-xs font-semibold uppercase tracking-[0.22em] text-muted">
          Zaufały nam firmy z całej Polski
        </h2>
      </Container>
      <div className="marquee relative mt-9 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <ul className="marquee-track flex w-max items-center gap-14 sm:gap-20" style={{ animationDuration: "120s" }}>
          {row(0)}
          {row(1)}
        </ul>
      </div>
    </section>
  );
}
