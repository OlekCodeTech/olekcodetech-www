import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseView from "@/components/CaseView";
import { cases } from "@/data/cases";
import { portfolio } from "@/data/portfolio";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  if (!item) return {};
  const image = item.image ?? portfolio.find((p) => p.title === item.portfolioTitle)?.image;
  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates: { canonical: `/portfolio/${item.slug}/` },
    openGraph: { type: "article", title: item.metaTitle, description: item.metaDescription, images: image ? [{ url: image }] : undefined },
  };
}

export default async function CasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  if (!item) notFound();
  return <CaseView item={item} />;
}
