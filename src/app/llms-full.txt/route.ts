import { buildLlmsFullTxt } from "@/lib/llms";

export const dynamic = "force-static";

/** llms-full.txt – pełna treść usług, podstron lokalnych, FAQ i case studies dla modeli językowych. */
export function GET() {
  return new Response(buildLlmsFullTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
