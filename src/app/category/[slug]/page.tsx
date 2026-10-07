import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/sections";
import { Container } from "@/components/ui";
import { categories, categorySlug, getAllPosts, getPostsByCategory } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  const used = new Set(getAllPosts().flatMap((p) => p.categories.map(categorySlug)));
  return categories.filter((c) => used.has(c.slug)).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return {};
  // Kategorie mają po 1–3 wpisy – noindex,follow do czasu rozbudowy bloga (unikamy „thin content”).
  return pageMeta({
    path: `/category/${cat.slug}/`,
    title: `${cat.name} – blog OlekCodeTech`,
    description: `${cat.description} Poradniki i artykuły z kategorii „${cat.name}” na blogu OlekCodeTech – praktyka z realnych wdrożeń dla firm.`,
    noindex: true,
    image: "/og/aktualnosci.jpg",
  });
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) notFound();
  const posts = getPostsByCategory(slug);

  return (
    <>
      <PageHero
        eyebrow="Kategoria"
        title={cat.name}
        lead={cat.description}
        crumbs={[
          { label: "Aktualności", href: "/aktualnosci/" },
          { label: cat.name, href: `/category/${cat.slug}/` },
        ]}
      />
      <section className="pb-16 lg:pb-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 80}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
