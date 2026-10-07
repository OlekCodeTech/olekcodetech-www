import { services } from "@/data/services";
import { landings } from "@/data/landings";
import { cases } from "@/data/cases";
import { site } from "@/data/site";
import { getAllPosts } from "@/lib/posts";
import { siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

/** llms.txt – zwięzły opis strony dla modeli językowych i agentów AI. */
export function GET() {
  const posts = getAllPosts();
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Firma: ${site.legalName}, ${site.address.street}, ${site.address.postal} ${site.address.city}, Polska. Kontakt: ${site.email}, ${site.phone}. Właściciel: Piotr Olek.`,
    "Obszary: strony internetowe i sklepy (WordPress, WooCommerce, autorskie motywy, React/Next.js), automatyzacje (n8n, Make), integracje (API, Microsoft 365, SharePoint, Google Workspace), SEO techniczne i content, opieka IT i helpdesk.",
    "",
    "## Usługi",
    ...services.map((s) => `- [${s.name}](${siteUrl}/${s.slug}/): ${s.seo.description}`),
    "",
    "## Podstrony usługowe",
    ...landings.filter((l) => l.kind === "service").map((l) => `- [${l.title}](${siteUrl}/${l.slug}/): ${l.metaDescription}`),
    "",
    "## Lokalnie",
    ...landings.filter((l) => l.kind === "city").map((l) => `- [${l.title}](${siteUrl}/${l.slug}/): ${l.metaDescription}`),
    "",
    "## Case studies",
    ...cases.map((c) => `- [${c.title}](${siteUrl}/portfolio/${c.slug}/): ${c.metaDescription}`),
    "",
    "## Blog",
    ...posts.map((p) => `- [${p.title}](${siteUrl}/${p.slug}/): ${p.excerpt}`),
    "",
    "## Pozostałe",
    `- [O nas](${siteUrl}/o-nas/)`,
    `- [Portfolio](${siteUrl}/portfolio/)`,
    `- [Kontakt](${siteUrl}/kontakt/)`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
