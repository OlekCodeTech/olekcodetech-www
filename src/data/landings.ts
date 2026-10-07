import type { LandingPage } from "./types";
import { serviceLandings } from "./landings-services";
import { cityLandings } from "./landings-cities";

export const landings: LandingPage[] = [...serviceLandings, ...cityLandings];

export const getLanding = (slug: string) => landings.find((l) => l.slug === slug);

/** Podstrony usługowe należące do danej usługi nadrzędnej. */
export const landingsByParent = (parent: string) => serviceLandings.filter((l) => l.parent === parent);

export { serviceLandings, cityLandings };
