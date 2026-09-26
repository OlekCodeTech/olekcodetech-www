import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("seo-content-marketing")!;

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: { canonical: "/seo-content-marketing/" },
};

export default function Page() {
  return <ServicePage service={service} />;
}
