/** Steden die momenteel uit de Master CSV worden gegenereerd. */
export const ACTIVE_CITY_SLUGS = ["breda", "tilburg", "eindhoven"] as const;

export type ActiveCitySlug = (typeof ACTIVE_CITY_SLUGS)[number];

export const ACTIVE_CITY_SLUG_SET = new Set<string>(ACTIVE_CITY_SLUGS);
