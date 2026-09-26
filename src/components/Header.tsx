"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Container } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSubOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled || open ? "border-b border-line/60 bg-ink/85 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <Container className="flex h-[76px] items-center justify-between gap-6">
        <Link href="/" className="relative z-50 flex shrink-0 items-center" aria-label="OlekCodeTech – strona główna">
          <Image src="/images/logo.webp" alt="OlekCodeTech" width={511} height={111} priority className="h-9 w-auto sm:h-10" />
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:block" aria-label="Menu główne">
          <ul className="flex items-center gap-1">
            {nav.map((item) =>
              item.children ? (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-pill px-4 py-2 font-display text-[15px] font-medium text-body transition hover:text-snow",
                      isActive(item.href) && "text-snow",
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 w-[420px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="rounded-3xl border border-line bg-ink-2/95 p-2 shadow-2xl backdrop-blur-xl">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className={cn(
                              "flex items-start justify-between gap-3 rounded-2xl px-4 py-3 transition hover:bg-ink-3",
                              isActive(c.href) && "bg-ink-3",
                            )}
                          >
                            <span>
                              <span className="block font-display font-semibold text-snow">{c.label}</span>
                              <span className="block text-sm text-muted">{c.short}</span>
                            </span>
                            <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex rounded-pill px-4 py-2 font-display text-[15px] font-medium text-body transition hover:text-snow",
                      isActive(item.href) && "text-snow",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="inline-flex items-center gap-2 font-display text-sm font-medium text-body transition hover:text-cyan">
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Link
            href="/kontakt/"
            className="inline-flex items-center rounded-pill bg-cyan px-5 py-2.5 font-display text-sm font-semibold text-ink transition hover:bg-cyan-2 hover:shadow-glow"
          >
            Skontaktuj się z nami
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-snow lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-ink transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <Container className="flex min-h-full flex-col py-6">
          <ul className="space-y-1">
            {nav.map((item) =>
              item.children ? (
                <li key={item.href}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={cn("flex-1 py-3 font-display text-2xl font-semibold text-snow", isActive(item.href) && "text-cyan")}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setSubOpen((v) => !v)}
                      aria-expanded={subOpen}
                      aria-label="Rozwiń ofertę"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-snow"
                    >
                      <ChevronDown className={cn("h-5 w-5 transition-transform", subOpen && "rotate-180")} />
                    </button>
                  </div>
                  <ul className={cn("space-y-1 overflow-hidden pl-4 transition-all", subOpen ? "max-h-[600px] py-2" : "max-h-0")}>
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className={cn("block py-2 font-display text-lg text-body", isActive(c.href) && "text-cyan")}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className={cn("block py-3 font-display text-2xl font-semibold text-snow", isActive(item.href) && "text-cyan")}>
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <div className="mt-auto space-y-3 border-t border-line pt-6">
            <a href={site.phoneHref} className="flex items-center gap-2 text-body">
              <Phone className="h-4 w-4 text-cyan" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block text-body">
              {site.email}
            </a>
            <Link
              href="/kontakt/"
              className="mt-2 inline-flex w-full items-center justify-center rounded-pill bg-cyan px-6 py-3.5 font-display font-semibold text-ink"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
