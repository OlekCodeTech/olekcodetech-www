import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PostCard from "@/components/PostCard";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/sections";
import { Container } from "@/components/ui";
import { categories, categorySlug, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Aktualności IT i Blog – OlekCodeTech",
  description:
    "Aktualności ze świata IT, porady techniczne, SEO, automatyzacje oraz nowości z OlekCodeTech. Praktyczna wiedza dla firm.",
  alternates: { canonical: "/aktualnosci/" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const [first, ...rest] = posts;
  const used = new Set(posts.flatMap((p) => p.categories.map(categorySlug)));
  const cats = categories.filter((c) => used.has(c.slug));

  return (
    <>
      <PageHero
        eyebrow="Baza wiedzy IT"
        title="Wiedza, technologia i praktyka IT"
        crumbs={[{ label: "Aktualności", href: "/aktualnosci/" }]}
        lead="Praktyczne poradniki o stronach internetowych, SEO, automatyzacjach i IT w firmie – pisane na podstawie realnych wdrożeń."
      >
        {cats.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {cats.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}/`} className="inline-flex rounded-pill border border-line px-4 py-2 font-display text-sm font-semibold text-body transition hover:border-cyan hover:text-cyan">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </PageHero>

      <section className="pb-16 lg:pb-24">
        <Container className="space-y-8">
          {first && (
            <Reveal>
              <PostCard post={first} featured />
            </Reveal>
          )}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
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
