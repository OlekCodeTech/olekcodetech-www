"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { portfolioTypes, type PortfolioItem, type PortfolioType } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type Filter = "all" | PortfolioType;

export default function PortfolioGrid({ items, filters = false, columns = 3 }: { items: PortfolioItem[]; filters?: boolean; columns?: 2 | 3 }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? items : items.filter((i) => i.type === filter);
  const counts = items.reduce<Record<string, number>>((acc, i) => ({ ...acc, [i.type]: (acc[i.type] ?? 0) + 1 }), {});

  return (
    <div>
      {filters && (
        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filtruj realizacje">
          {(["all", "strona", "sklep", "system"] as Filter[]).map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-pill border px-4 py-2 font-display text-sm font-semibold transition",
                filter === f ? "border-cyan bg-cyan text-ink" : "border-line text-body hover:border-cyan hover:text-cyan",
              )}
            >
              {f === "all" ? "Wszystkie" : portfolioTypes[f]}
              <span className={cn("ml-2 text-xs", filter === f ? "text-ink/70" : "text-muted")}>{f === "all" ? items.length : counts[f] ?? 0}</span>
            </button>
          ))}
        </div>
      )}
      <ul className={cn("grid gap-6 sm:grid-cols-2", columns === 3 && "lg:grid-cols-3")}>
        {visible.map((item) => {
          const Wrapper = item.url ? "a" : "div";
          const props = item.url ? { href: item.url, target: "_blank", rel: "noopener noreferrer" } : {};
          return (
            <li key={item.title}>
              <Wrapper
                {...props}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line/70 bg-ink-2/60 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-pill bg-ink/80 px-3 py-1 text-xs font-semibold text-cyan backdrop-blur">
                    {portfolioTypes[item.type]}
                  </span>
                </div>
                <div className="flex flex-1 items-start justify-between gap-3 p-5">
                  <div>
                    <h3 className="text-lg leading-snug">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.tags}</p>
                  </div>
                  {item.url && <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted transition group-hover:text-cyan" />}
                </div>
              </Wrapper>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
