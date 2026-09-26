import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Container, Eyebrow } from "./ui";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { siteUrl } from "@/lib/utils";

export const founder = {
  name: "Piotr Olek",
  role: "Założyciel OlekCodeTech · inżynier web, integracji i automatyzacji",
  linkedin: "https://www.linkedin.com/in/piotrolek/",
  photo: "/images/piotr-olek.webp",
  bio: [
    "Od ponad siedmiu lat buduję strony, sklepy i systemy dla firm – od pierwszej rozmowy o celach, przez architekturę i development, po wdrożenie i stałą opiekę. Zależy mi na tym, żeby technologia rozwiązywała konkretny problem biznesowy, a nie była kolejnym kosztem.",
    "Na co dzień łączę WordPress i WooCommerce z React i Next.js, integruję systemy przez API, automatyzuję procesy w n8n i Make oraz dbam o techniczne SEO. Doświadczenie w środowisku korporacyjnym zdobywam jako Senior Specialist ds. aplikacji Microsoft 365 w Grupie TAURON, dlatego integracje z M365, SharePoint i Power Automate to dla mnie codzienność.",
    "Prowadzę OlekCodeTech Sp. z o.o. z Wielunia i współtworzę agencję KOVERN, w której odpowiadam za software, automatyzacje i rozwiązania szyte pod klienta. Absolwent Wrocławskiej Wyższej Szkoły Informatyki Stosowanej. Pracuję z firmami z całej Polski: produkcją, e-commerce, usługami i biurami rachunkowymi.",
  ],
  facts: [
    { value: "7+", label: "lat w IT" },
    { value: "50+", label: "wdrożonych projektów" },
    { value: "1", label: "osoba kontaktowa od A do Z" },
  ],
  skills: ["WordPress / WooCommerce", "React / Next.js", "Integracje API", "n8n / Make", "Microsoft 365 / Google Workspace", "SEO techniczne"],
};

export default function Founder() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line/70 bg-ink-2 sm:rounded-[3rem]">
            <div aria-hidden className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-[140px]" />
            <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
              <div className="lg:col-span-4">
                <div className="relative mx-auto max-w-sm">
                  <div aria-hidden className="absolute -inset-3 -z-10 rounded-[2rem] bg-cyan/15 blur-2xl" />
                  <Image
                    src={founder.photo}
                    alt={`${founder.name} – ${founder.role}`}
                    width={385}
                    height={500}
                    sizes="(min-width: 1024px) 360px, 80vw"
                    className="h-auto w-full rounded-[1.75rem] border border-line/70 object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-8">
                <Eyebrow className="mb-4">Kto za tym stoi</Eyebrow>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl">{founder.name}</h2>
                <p className="mt-2 font-display text-lg text-cyan">{founder.role}</p>
                <div className="mt-6 space-y-4 text-body sm:text-lg">
                  {founder.bio.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {founder.skills.map((s) => (
                    <li key={s} className="rounded-pill border border-line/80 px-3.5 py-1.5 text-sm text-body">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                  {founder.facts.map((f) => (
                    <div key={f.label}>
                      <p className="font-display text-3xl font-semibold text-snow">{f.value}</p>
                      <p className="text-sm text-muted">{f.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-pill bg-cyan px-6 py-3 font-display text-sm font-semibold text-ink transition hover:bg-cyan-2 hover:shadow-glow"
                  >
                    LinkedIn
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 rounded-pill border border-line px-6 py-3 font-display text-sm font-semibold text-snow transition hover:border-cyan hover:text-cyan"
                  >
                    <Mail className="h-4 w-4" />
                    Napisz do mnie
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${siteUrl}/o-nas/#piotr-olek`,
            name: founder.name,
            jobTitle: "Założyciel / Web & Integration Engineer",
            image: `${siteUrl}${founder.photo}`,
            url: `${siteUrl}/o-nas/`,
            sameAs: [founder.linkedin],
            worksFor: { "@id": `${siteUrl}/#organization` },
            email: site.email,
          }}
        />
      </Container>
    </section>
  );
}
