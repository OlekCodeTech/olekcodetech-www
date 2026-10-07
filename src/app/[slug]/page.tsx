import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, CalendarDays, RefreshCw } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import LandingView from "@/components/LandingView";
import PostCard from "@/components/PostCard";
import Reveal from "@/components/Reveal";
import { CtaBand } from "@/components/sections";
import { Button, Container } from "@/components/ui";
import { site } from "@/data/site";
import { getLanding, landings } from "@/data/landings";
import { services } from "@/data/services";
import { categoryService, categorySlug, formatDate, getAllPosts, getPost } from "@/lib/posts";
import { siteUrl } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

/** Jeden segment obsługuje wpisy bloga (adresy jak w WP) oraz podstrony SEO (usługi szczegółowe, miasta). */
export function generateStaticParams(): Params[] {
  return [...getAllPosts().map((p) => ({ slug: p.slug })), ...landings.map((l) => ({ slug: l.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (landing) {
    return pageMeta({ path: `/${landing.slug}/`, title: landing.metaTitle, description: landing.metaDescription, keywords: landing.keywords });
  }
  const post = getPost(slug);
  if (!post) return {};
  return pageMeta({
    path: `/${post.slug}/`,
    title: post.seoTitle.length > 48 ? post.seoTitle : `${post.seoTitle} | OlekCodeTech`,
    description: post.seoDescription,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated,
  });
}

/** Dobiera usługę do wpisu na podstawie kategorii – do boksu „powiązana usługa”. */
function serviceForPost(categories: string[]) {
  const slug = categories.map((c) => categoryService[c]).find(Boolean);
  return services.find((s) => s.slug === slug);
}

export default async function SlugPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const landing = getLanding(slug);
  if (landing) return <LandingView page={landing} />;

  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.categories.some((c) => post.categories.includes(c))) - Number(a.categories.some((c) => post.categories.includes(c))))
    .slice(0, 3);
  const service = serviceForPost(post.categories);

  return (
    <>
      <article>
        <header className="relative overflow-hidden">
          <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
          <Container className="max-w-4xl pb-10 pt-10 sm:pt-14 lg:pt-20">
            <Link href="/aktualnosci/" className="inline-flex items-center gap-2 text-sm text-muted hover:text-cyan">
              <ArrowLeft className="h-4 w-4" />
              Wszystkie wpisy
            </Link>
            <div className="mt-6 flex flex-wrap gap-2">
              {post.categories.map((c) => (
                <Link key={c} href={`/category/${categorySlug(c)}/`} className="rounded-pill bg-cyan-dim px-3 py-1 text-xs font-semibold text-cyan hover:bg-cyan hover:text-ink">
                  {c}
                </Link>
              ))}
            </div>
            <h1 className="mt-5 text-balance text-3xl sm:text-4xl lg:text-5xl">{post.title}</h1>
            {post.excerpt && <p className="mt-5 text-lg text-body">{post.excerpt}</p>}
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              {post.updated && post.updated !== post.date && (
                <span className="inline-flex items-center gap-1.5">
                  <RefreshCw className="h-4 w-4" />
                  aktualizacja {formatDate(post.updated)}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingMinutes} min czytania
              </span>
              <span>Autor: Piotr Olek, {site.name}</span>
            </div>
          </Container>
        </header>

        {post.image && (
          <Container className="max-w-5xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] border border-line/70">
              <Image src={post.image} alt={post.title} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
            </div>
          </Container>
        )}

        <Container className="max-w-3xl py-12 lg:py-16">
          <div className="prose-dark" dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="mt-14 rounded-3xl border border-cyan/30 bg-ink-2 p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">Potrzebujesz wsparcia?</p>
            <h2 className="mt-3 text-2xl">{service ? service.name : "Porozmawiajmy o Twoim projekcie"}</h2>
            <p className="mt-3 text-body">{service ? service.short : "Strona, sklep, automatyzacja albo opieka IT – powiedz, na czym Ci zależy, a zaproponujemy konkretny plan."}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/kontakt/">Bezpłatna konsultacja</Button>
              {service && (
                <Button href={`/${service.slug}/`} variant="outline">
                  Zobacz usługę
                </Button>
              )}
            </div>
          </div>
        </Container>
      </article>

      {post.faq.length > 0 && <Faq items={post.faq} title="Najczęstsze pytania" eyebrow="FAQ" lead="Krótkie odpowiedzi na pytania, które padają najczęściej w tym temacie." />}

      {related.length > 0 && (
        <section className="border-t border-line/60 py-16 lg:py-24">
          <Container>
            <h2 className="mb-10 text-3xl">Czytaj także</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand />

      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.image ? `${siteUrl}${post.image}` : undefined,
            datePublished: post.date,
            dateModified: post.updated || post.date,
            author: { "@type": "Person", name: "Piotr Olek", url: `${siteUrl}/o-nas/` },
            publisher: { "@id": `${siteUrl}/#organization` },
            mainEntityOfPage: `${siteUrl}/${post.slug}/`,
            inLanguage: "pl-PL",
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Strona główna", item: `${siteUrl}/` },
              { "@type": "ListItem", position: 2, name: "Aktualności", item: `${siteUrl}/aktualnosci/` },
              { "@type": "ListItem", position: 3, name: post.title, item: `${siteUrl}/${post.slug}/` },
            ],
          },
        ]}
      />
    </>
  );
}
