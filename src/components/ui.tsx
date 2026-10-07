import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  // Własne max-w-* z className zastępuje domyślne max-w-7xl (dwie klasy max-w naraz = wygrywa ta później w CSS, nie ta podana).
  const hasMaxW = /(^|\s)max-w-/.test(className ?? "");
  return <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", !hasMaxW && "max-w-7xl", className)}>{children}</div>;
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", size = "md", className, external }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-pill font-display font-semibold whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink";
  const sizes = { md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
  const variants = {
    primary: "bg-cyan text-ink hover:bg-cyan-2 hover:shadow-glow hover:-translate-y-0.5",
    outline: "border border-line text-snow hover:border-cyan hover:text-cyan",
    ghost: "text-cyan hover:text-cyan-2 px-0",
  };
  const cls = cn(base, sizes[size], variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan", className)}>
      <span aria-hidden className="h-px w-8 bg-cyan/60" />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({ eyebrow, title, lead, align = "left", as: Tag = "h2", className, titleClassName }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className={cn("mb-4", align === "center" && "justify-center")}>{eyebrow}</Eyebrow>}
      <Tag className={cn("text-balance text-3xl sm:text-4xl lg:text-5xl", titleClassName)}>{title}</Tag>
      {lead && <div className="mt-5 text-base leading-relaxed text-body sm:text-lg">{lead}</div>}
    </div>
  );
}

export function Card({ children, className, glow }: { children: ReactNode; className?: string; glow?: boolean }) {
  return (
    <div
      className={cn(
        "relative rounded-3xl border border-line/70 bg-ink-2/70 p-6 transition-all duration-300 sm:p-8",
        glow && "hover:-translate-y-1 hover:border-cyan/50 hover:shadow-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-body">
          <span aria-hidden className="mt-1.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-dim">
            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-cyan" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2.5 6.5 5 9l4.5-6" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
