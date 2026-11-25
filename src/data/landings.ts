import type { LandingPage } from "./types";
import { serviceLandings as baseServiceLandings } from "./landings-services";
import { appLandings } from "./landings-apps";
import { cityLandings as baseCityLandings } from "./landings-cities";
import { cityLandings2 } from "./landings-cities-2";
import { insertLandings } from "./landings-insert";
import { insertProducts1 } from "./landings-insert-products-1";
import { insertProducts2 } from "./landings-insert-products-2";
import { insertProducts3 } from "./landings-insert-products-3";
import { insertProducts4 } from "./landings-insert-products-4";
import { devServiceLandings } from "./landings-dev-services";
import { devCityLandingsWielun } from "./landings-dev-wielun";
import { devCityLandingsWroclaw } from "./landings-dev-wroclaw";

/** Wszystkie podstrony usługowe (w tym aplikacje dedykowane). */
/** Kolejność podstron produktów InsERT: linie nexo, nexo PRO, GT, potem usługi online. */
const productOrder = ["subiekt", "rachmistrz", "rewizor", "gratyfikant", "gestor"].flatMap((p) => [`${p}-nexo`, `${p}-nexo-pro`, `${p}-gt`]).concat(["subiekt-123", "vendero", "zarezerwuj-pl", "portal-dokumentow", "lekarz-plus"]);

/** Podstrony produktów InsERT (wymóg sieci partnerskiej: pełny opis każdego programu na osobnej stronie). */
const insertProducts: LandingPage[] = [...insertProducts1, ...insertProducts2, ...insertProducts3, ...insertProducts4].sort((a, b) => productOrder.indexOf(a.slug) - productOrder.indexOf(b.slug));

const serviceLandings: LandingPage[] = [...appLandings, ...devServiceLandings, ...insertLandings, ...insertProducts, ...baseServiceLandings];

/** Strony lokalne „strony internetowe + miasto”. */
const cityLandings: LandingPage[] = [...baseCityLandings, ...cityLandings2];

/** Strony lokalne „programista + miasto” (oprogramowanie na zamówienie, automatyzacje, integracje). */
const devCityLandings: LandingPage[] = [...devCityLandingsWielun, ...devCityLandingsWroclaw];

export const landings: LandingPage[] = [...serviceLandings, ...cityLandings, ...devCityLandings];

export const getLanding = (slug: string) => landings.find((l) => l.slug === slug);

/** Podstrony usługowe należące do danej usługi nadrzędnej. */
export const landingsByParent = (parent: string) => serviceLandings.filter((l) => l.parent === parent && !l.product);

/** Krótka etykieta strony do linków, okruszków i stopki. */
export const landingLabel = (l: LandingPage) => l.navLabel ?? (l.kind === "city" ? `Strony internetowe ${l.city}` : l.title);

export { serviceLandings, cityLandings, devCityLandings, appLandings, insertLandings, insertProducts };
