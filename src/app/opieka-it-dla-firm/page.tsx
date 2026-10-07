import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("opieka-it-dla-firm")!;

export const metadata: Metadata = pageMeta({
  path: "/opieka-it-dla-firm/",
  title: service.seo.title,
  description: service.seo.description,
});

export default function Page() {
  return <ServicePage service={service} />;
}
