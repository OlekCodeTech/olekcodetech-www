"use client";

import Link from "next/link";
import { useId, useState } from "react";
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
  onChange: (v: number) => void;
};

function Slider({ label, value, min, max, step, display, onChange }: SliderProps) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm text-body">
          {label}
        </label>
        <output htmlFor={id} className="font-display text-lg font-semibold text-snow">
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
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-pill bg-ink-3 accent-cyan"
      />
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
    <div className="grid gap-6 rounded-[2rem] border border-line/70 bg-ink-2/70 p-6 sm:p-10 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-7">
        <Slider label="Ile godzin dziennie zajmuje ta czynność?" value={hours} min={0.5} max={8} step={0.5} display={`${fmtHours(hours)} godz.`} onChange={setHours} />
        <Slider label="Ile osób ją wykonuje?" value={people} min={1} max={20} step={1} display={`${people}`} onChange={setPeople} />
        <Slider label="Koszt godziny pracy (z narzutami pracodawcy)" value={rate} min={30} max={200} step={5} display={`${rate} zł`} onChange={setRate} />
        <p className="text-sm text-muted">Przyjmujemy {WORK_DAYS} dni roboczych w roku. To koszt samej ręcznej pracy – bez pomyłek, poprawek i opóźnień, które zwykle idą w parze.</p>
      </div>

      <div className="flex flex-col justify-between gap-8 rounded-3xl border border-cyan/30 bg-cyan-dim p-6 sm:p-8">
        <div aria-live="polite" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div>
            <p className="font-display text-4xl font-semibold text-snow sm:text-5xl">{fmt(yearlyHours)}</p>
            <p className="mt-1 text-sm text-body">godzin rocznie</p>
          </div>
          <div>
            <p className="font-display text-4xl font-semibold text-cyan sm:text-5xl">{fmt(yearlyCost)} zł</p>
            <p className="mt-1 text-sm text-body">kosztu ręcznej pracy rocznie</p>
          </div>
        </div>
        <p className="text-body">
          To równowartość ok. <strong className="text-snow">{fmtHours(fte)} etatu</strong>. Program buduje się raz – na konsultacji policzymy, ile z tego da się realnie oddać automatowi i po jakim czasie inwestycja się zwróci.
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
