import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("integracje-systemow-it")!;

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: { canonical: "/integracje-systemow-it/" },
};

export default function Page() {
  return <ServicePage service={service} />;
}
