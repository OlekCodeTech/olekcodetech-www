import { buildLlmsTxt } from "@/lib/llms";

export const dynamic = "force-static";

/** llms.txt – zwięzły opis strony dla modeli językowych i agentów AI. */
export function GET() {
  return new Response(buildLlmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
