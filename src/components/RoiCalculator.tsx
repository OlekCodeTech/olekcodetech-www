"use client";

import Link from "next/link";
import { useId, useState, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

/** Dni robocze w roku przyjęte do wyliczeń (ok. 52 tygodnie × 5 dni minus święta i urlop). */
const WORK_DAYS = 250;

const fmt = (n: number) => new Intl.NumberFormat("pl-PL", { maximumFractionDigits: 0 }).format(n);
const fmtHours = (n: number) => new Intl.NumberFormat("pl-PL", { minimumFractionDigits: 0, maximumFractionDigits: 1 }).format(n);

type SliderProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  minLabel: string;
  maxLabel: string;
  onChange: (v: number) => void;
};

function Slider({ label, value, min, max, step, display, minLabel, maxLabel, onChange }: SliderProps) {
  const id = useId();
  const fill = `${((value - min) / (max - min)) * 100}%`;
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-base text-snow">
          {label}
        </label>
        <output htmlFor={id} className="shrink-0 rounded-pill border border-cyan/40 bg-cyan-dim px-3.5 py-1 font-display text-base font-semibold text-cyan">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ "--fill": fill } as CSSProperties}
        className="oct-range mt-2"
      />
      <div aria-hidden className="flex justify-between text-xs text-muted">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

/**
 * Kalkulator opłacalności automatyzacji: godziny dziennie × osoby × koszt godziny × dni robocze.
 * Liczy wyłącznie koszt ręcznej pracy – nie obiecuje konkretnej oszczędności.
 */
export default function RoiCalculator() {
  const [hours, setHours] = useState(2);
  const [people, setPeople] = useState(1);
  const [rate, setRate] = useState(45);

  const yearlyHours = hours * people * WORK_DAYS;
  const yearlyCost = yearlyHours * rate;
  const fte = yearlyHours / (WORK_DAYS * 8);

  return (
    <div className="grid items-stretch gap-8 rounded-[2rem] border border-line/70 bg-ink-2/70 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12">
      <div className="flex flex-col justify-center space-y-7">
        <Slider label="Ile godzin dziennie zajmuje ta czynność?" value={hours} min={0.5} max={8} step={0.5} display={`${fmtHours(hours)} godz.`} minLabel="0,5 godz." maxLabel="8 godz." onChange={setHours} />
        <Slider label="Ile osób ją wykonuje?" value={people} min={1} max={20} step={1} display={people === 1 ? "1 osoba" : `${people} os.`} minLabel="1" maxLabel="20" onChange={setPeople} />
        <Slider label="Koszt godziny pracy (z narzutami pracodawcy)" value={rate} min={30} max={200} step={5} display={`${rate} zł`} minLabel="30 zł" maxLabel="200 zł" onChange={setRate} />
        <p className="text-sm text-muted">Przyjmujemy {WORK_DAYS} dni roboczych w roku. To koszt samej ręcznej pracy – bez pomyłek, poprawek i opóźnień, które zwykle idą w parze.</p>
      </div>

      <div className="flex flex-col justify-between gap-8 rounded-3xl border border-cyan/30 bg-cyan-dim p-6 sm:p-8">
        <div aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">Koszt ręcznej pracy w roku</p>
          <p className="mt-3 font-display text-5xl font-semibold tracking-tight text-cyan sm:text-6xl">{fmt(yearlyCost)} zł</p>
          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-cyan/20 pt-6">
            <div>
              <dt className="text-sm text-body">Godzin rocznie</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-snow sm:text-3xl">{fmt(yearlyHours)}</dd>
            </div>
            <div>
              <dt className="text-sm text-body">Równowartość</dt>
              <dd className="mt-1 font-display text-2xl font-semibold text-snow sm:text-3xl">{fmtHours(fte)} etatu</dd>
            </div>
          </dl>
        </div>
        <p className="text-body">
          Program buduje się raz. Na konsultacji policzymy, ile z tego da się realnie oddać automatowi i po jakim czasie inwestycja się zwróci.
        </p>
        <Link
          href="/kontakt/"
          className="inline-flex items-center justify-center gap-2 self-start rounded-pill bg-cyan px-6 py-3 font-display text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-2 hover:shadow-glow"
        >
          Policzmy to dla Twojej firmy
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
