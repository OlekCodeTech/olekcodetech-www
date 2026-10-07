import data from "../../content/portfolio.json";

export type PortfolioType = "strona" | "sklep" | "system";

export type PortfolioItem = {
  title: string;
  type: PortfolioType;
  tags: string;
  url?: string;
  image: string;
};

export const portfolioTypes: Record<PortfolioType, string> = {
  strona: "Strony internetowe",
  sklep: "Sklepy internetowe",
  system: "Systemy i aplikacje",
};

/**
 * Realizacje – edytowane w panelu /admin/ (plik content/portfolio.json).
 * Kolejność w pliku = kolejność na stronie (najnowsze na górze).
 */
export const portfolio: PortfolioItem[] = (data.items as { title: string; type: string; tags?: string; url?: string; image: string }[])
  .filter((i) => i.title && i.image)
  .map((i) => ({
    title: i.title.trim(),
    type: (["strona", "sklep", "system"].includes(i.type) ? i.type : "strona") as PortfolioType,
    tags: i.tags?.trim() || portfolioTypes[(i.type as PortfolioType) ?? "strona"] || "",
    url: i.url?.trim() || undefined,
    image: i.image,
  }));
