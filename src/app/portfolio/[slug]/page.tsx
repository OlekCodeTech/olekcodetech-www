import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseView from "@/components/CaseView";
import { cases } from "@/data/cases";
import { pageMeta } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  if (!item) return {};
  return pageMeta({ path: `/portfolio/${item.slug}/`, title: item.metaTitle, description: item.metaDescription, type: "article" });
}

export default async function CasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = cases.find((c) => c.slug === slug);
  if (!item) notFound();
  return <CaseView item={item} />;
}
