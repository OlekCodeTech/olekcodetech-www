import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("automatyzacja-procesow-biznesowych")!;

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: { canonical: "/automatyzacja-procesow-biznesowych/" },
};

export default function Page() {
  return <ServicePage service={service} />;
}
