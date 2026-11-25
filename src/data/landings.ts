import type { LandingPage } from "./types";
import { serviceLandings as baseServiceLandings } from "./landings-services";
import { appLandings } from "./landings-apps";
import { cityLandings as baseCityLandings } from "./landings-cities";
import { cityLandings2 } from "./landings-cities-2";
import { insertLandings } from "./landings-insert";
import { devServiceLandings } from "./landings-dev-services";
import { devCityLandingsWielun } from "./landings-dev-wielun";
import { devCityLandingsWroclaw } from "./landings-dev-wroclaw";

/** Wszystkie podstrony usługowe (w tym aplikacje dedykowane). */
const serviceLandings: LandingPage[] = [...appLandings, ...devServiceLandings, ...insertLandings, ...baseServiceLandings];

/** Strony lokalne „strony internetowe + miasto”. */
const cityLandings: LandingPage[] = [...baseCityLandings, ...cityLandings2];

/** Strony lokalne „programista + miasto” (oprogramowanie na zamówienie, automatyzacje, integracje). */
const devCityLandings: LandingPage[] = [...devCityLandingsWielun, ...devCityLandingsWroclaw];

export const landings: LandingPage[] = [...serviceLandings, ...cityLandings, ...devCityLandings];

export const getLanding = (slug: string) => landings.find((l) => l.slug === slug);

/** Podstrony usługowe należące do danej usługi nadrzędnej. */
export const landingsByParent = (parent: string) => serviceLandings.filter((l) => l.parent === parent);

/** Krótka etykieta strony do linków, okruszków i stopki. */
export const landingLabel = (l: LandingPage) => l.navLabel ?? (l.kind === "city" ? `Strony internetowe ${l.city}` : l.title);

export { serviceLandings, cityLandings, devCityLandings, appLandings, insertLandings };
