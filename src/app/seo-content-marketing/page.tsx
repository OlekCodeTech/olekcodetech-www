import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("seo-content-marketing")!;

export const metadata: Metadata = pageMeta({
  path: "/seo-content-marketing/",
  title: service.seo.title,
  description: service.seo.description,
});

export default function Page() {
  return <ServicePage service={service} />;
}
