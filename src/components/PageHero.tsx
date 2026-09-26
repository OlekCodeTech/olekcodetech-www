import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Container, Eyebrow } from "./ui";
import JsonLd from "./JsonLd";
import { siteUrl } from "@/lib/utils";

export type Crumb = { label: string; href: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: string | string[];
  crumbs?: Crumb[];
  children?: ReactNode;
  wide?: boolean;
};

export default function PageHero({ eyebrow, title, lead, crumbs, children, wide }: Props) {
  const leads = Array.isArray(lead) ? lead : lead ? [lead] : [];
  const allCrumbs: Crumb[] = [{ label: "Strona główna", href: "/" }, ...(crumbs ?? [])];
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -top-32 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]" />
      <Container className="pb-12 pt-10 sm:pt-14 lg:pb-16 lg:pt-20">
        {crumbs && (
          <nav aria-label="Okruszki" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-muted">
            {allCrumbs.map((c, i) => (
              <span key={c.href} className="inline-flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                {i < allCrumbs.length - 1 ? (
                  <Link href={c.href} className="hover:text-cyan">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-body">{c.label}</span>
                )}
              </span>
            ))}
            <JsonLd
              data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: allCrumbs.map((c, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: c.label,
                  item: `${siteUrl}${c.href}`,
                })),
              }}
            />
          </nav>
        )}
        <div className={wide ? "max-w-5xl" : "max-w-3xl"}>
          {eyebrow && <Eyebrow className="mb-5">{eyebrow}</Eyebrow>}
          <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {leads.length > 0 && (
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-body">
              {leads.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          )}
          {children}
        </div>
      </Container>
    </section>
  );
}
