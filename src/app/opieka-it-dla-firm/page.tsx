import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";

const service = getService("opieka-it-dla-firm")!;

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  alternates: { canonical: "/opieka-it-dla-firm/" },
};

export default function Page() {
  return <ServicePage service={service} />;
}
