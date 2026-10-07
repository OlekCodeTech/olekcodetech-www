import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { Container } from "@/components/ui";
import { basePath } from "@/lib/utils";

/** Stary adres bloga z WordPressa – przekierowanie na /aktualnosci/ (na serwerze dodatkowo 301 w .htaccess). */
export const metadata: Metadata = pageMeta({
  path: "/aktualnosci/",
  title: "Aktualności – przeniesione | OlekCodeTech",
  description: "Blog OlekCodeTech przeniósł się pod adres /aktualnosci/.",
  noindex: true,
});

export default function BlogStandardRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0;url=${basePath}/aktualnosci/`} />
      <Container className="py-24 text-center">
        <p className="text-body">
          Blog przeniósł się pod nowy adres.{" "}
          <Link href="/aktualnosci/" className="text-cyan underline">
            Przejdź do aktualności
          </Link>
          .
        </p>
      </Container>
    </>
  );
}
