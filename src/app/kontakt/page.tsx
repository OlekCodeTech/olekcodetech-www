import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ContactInfo } from "@/components/sections";
import { Card, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Kontakt – OlekCodeTech | Usługi IT dla firm",
  description:
    "Skontaktuj się z OlekCodeTech. Porozmawiajmy o stronach WWW, automatyzacjach, integracjach systemów i stałej obsłudze IT dla Twojej firmy.",
  alternates: { canonical: "/kontakt/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Porozmawiajmy o współpracy"
        crumbs={[{ label: "Kontakt", href: "/kontakt/" }]}
        lead="Napisz lub zadzwoń – odpowiadamy zwykle w ciągu jednego dnia roboczego. Pierwsza konsultacja jest bezpłatna i niezobowiązująca."
      />
      <section className="pb-16 lg:pb-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <ContactInfo />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7">
            <Card className="sm:p-10">
              <h2 className="text-2xl sm:text-3xl">Skontaktuj się z nami!</h2>
              <p className="mt-3 text-body">Opisz krótko, czego potrzebujesz. Wrócimy z pytaniami lub propozycją kolejnego kroku.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
