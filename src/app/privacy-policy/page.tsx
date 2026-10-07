import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import { getPage } from "@/lib/posts";

export const metadata: Metadata = pageMeta({
  path: "/privacy-policy/",
  title: "Polityka prywatności – OlekCodeTech",
  description: "Informacje o zasadach przetwarzania danych osobowych oraz plików cookies na stronie OlekCodeTech zgodnie z RODO.",
  noindex: true,
  image: "/og/home.jpg",
});

export default function PrivacyPage() {
  const page = getPage("polityka-prywatnosci");
  if (!page) notFound();
  return (
    <>
      <PageHero title={page.title} crumbs={[{ label: page.title, href: "/privacy-policy/" }]} lead={page.updated ? `Ostatnia aktualizacja: ${page.updated}` : undefined} />
      <Container className="max-w-3xl pb-16 lg:pb-24">
        <div className="prose-dark" dangerouslySetInnerHTML={{ __html: page.html }} />
      </Container>
    </>
  );
}
