import { portfolio } from "@/data/portfolio";
import { Container } from "./ui";

/** Pasek „Zaufali nam” – nazwy klientów z portfolio w płynnej pętli. */
export default function ClientsMarquee() {
  const names = portfolio.map((p) => p.title.split(/\s[|–-]\s/)[0].trim()).filter((n, i, a) => a.indexOf(n) === i);
  const row = [...names, ...names];
  return (
    <section className="border-y border-line/60 bg-ink-2/30 py-10">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">Zaufały nam firmy z całej Polski</p>
      </Container>
      <div className="marquee mt-6 overflow-hidden" aria-hidden>
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap font-display text-xl font-semibold text-body/70" style={{ animationDuration: "90s" }}>
          {row.map((n, i) => (
            <span key={i} className="inline-flex items-center gap-10">
              {n}
              <span className="h-1 w-1 rounded-full bg-cyan/70" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
