import { Globe, AppWindow, Workflow, Search, ShieldCheck, Cable, type LucideProps } from "lucide-react";
import type { Service } from "@/data/services";

const map = {
  web: Globe,
  app: AppWindow,
  automation: Workflow,
  seo: Search,
  care: ShieldCheck,
  integration: Cable,
} as const;

export default function ServiceIcon({ icon, ...props }: { icon: Service["icon"] } & LucideProps) {
  const Icon = map[icon];
  return <Icon {...props} />;
}
