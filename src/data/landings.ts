import type { LandingPage } from "./types";
import { serviceLandings as baseServiceLandings } from "./landings-services";
import { appLandings } from "./landings-apps";
import { cityLandings } from "./landings-cities";

/** Wszystkie podstrony usługowe (w tym aplikacje dedykowane). */
const serviceLandings: LandingPage[] = [...appLandings, ...baseServiceLandings];

export const landings: LandingPage[] = [...serviceLandings, ...cityLandings];

export const getLanding = (slug: string) => landings.find((l) => l.slug === slug);

/** Podstrony usługowe należące do danej usługi nadrzędnej. */
export const landingsByParent = (parent: string) => serviceLandings.filter((l) => l.parent === parent);

export { serviceLandings, cityLandings, appLandings };
