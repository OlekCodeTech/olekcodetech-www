import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";
import { nav, site } from "@/data/site";
import { services } from "@/data/services";
import { Container } from "./ui";
import Newsletter from "./Newsletter";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-line/60 bg-ink">
      <Container className="py-16">
        <Newsletter />

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image src="/images/logo.webp" alt="OlekCodeTech" width={511} height={111} className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-body">{site.description}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-body transition hover:border-cyan hover:text-cyan"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-body transition hover:border-cyan hover:text-cyan"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg">Porozmawiajmy o współpracy</h3>
            <ul className="mt-5 space-y-3 text-body">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-snow">
                  {site.address.postal} {site.address.city}, {site.address.street}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cyan" />
                <a href={site.phoneHref} className="hover:text-snow">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-cyan" />
                <a href={`mailto:${site.email}`} className="hover:text-snow">
                  {site.email}
                </a>
              </li>
              <li className="pt-1 text-sm text-muted">NIP: {site.nip}</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg">Menu</h3>
            <ul className="mt-5 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-body transition hover:text-cyan">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg">Oferta</h3>
            <ul className="mt-5 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} className="text-body transition hover:text-cyan">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line/60 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} OlekCodeTech. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy/" className="hover:text-cyan">
              Polityka prywatności
            </Link>
            <Link href="/kontakt/" className="hover:text-cyan">
              Kontakt
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
