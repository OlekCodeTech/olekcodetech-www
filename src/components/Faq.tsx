import { ChevronDown } from "lucide-react";
import type { Faq as FaqItem } from "@/data/types";
import JsonLd from "./JsonLd";
import { Container, SectionHeading } from "./ui";
import Reveal from "./Reveal";

export default function Faq({ items, title = "Najczęstsze pytania", eyebrow = "FAQ", lead }: { items: FaqItem[]; title?: string; eyebrow?: string; lead?: string }) {
  if (!items?.length) return null;
  return (
    <section className="py-16 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-line/70 rounded-3xl border border-line/70 bg-ink-2/60">
            {items.map((f, i) => (
              <Reveal key={f.q} delay={i * 40} as="div">
                <details className="group px-6 py-5 sm:px-8" {...(i === 0 ? { open: true } : {})}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-semibold text-snow [&::-webkit-details-marker]:hidden">
                    <span>{f.q}</span>
                    <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-cyan transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 max-w-3xl text-body">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </section>
  );
}
