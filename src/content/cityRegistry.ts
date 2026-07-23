import type { CityContentMaster } from "./cityTypes";
import { validateCityContentMaster } from "./cityTypes";
import { PREMIUM_CITY_PAGES } from "./cities";
import { ACTIVE_CITY_SLUGS } from "./masterCsv/activeCitySlugs";

/** Stadspagina's — premium pSEO-content (Opdracht 24). */
const premiumCityPages = PREMIUM_CITY_PAGES;

if (premiumCityPages.length !== ACTIVE_CITY_SLUGS.length) {
  throw new Error(
    `Premium city pages (${premiumCityPages.length}) komen niet overeen met ACTIVE_CITY_SLUGS (${ACTIVE_CITY_SLUGS.length}).`,
  );
}

for (const slug of ACTIVE_CITY_SLUGS) {
  if (!premiumCityPages.some((p) => p.slug === slug)) {
    throw new Error(`Premium city page ontbreekt voor slug "${slug}".`);
  }
}

export const cityPages = Object.fromEntries(
  premiumCityPages.map((page) => [page.slug, page]),
) satisfies Record<string, CityContentMaster>;

export type CityPageSlug = keyof typeof cityPages;

export function getCityPage(slug: CityPageSlug): CityContentMaster {
  return cityPages[slug];
}

export function validateAllCityPages(): void {
  for (const page of Object.values(cityPages)) {
    validateCityContentMaster(page);
  }
}

validateAllCityPages();

export const cityStaticPaths = Object.values(cityPages).map((page) => ({
  params: {
    province: page.provinceSlug,
    city: page.slug,
  },
  props: { page },
}));

export const cityRegistryStats = {
  source: "premium-cities" as const,
  activeSlugs: ACTIVE_CITY_SLUGS,
  totalCount: Object.keys(cityPages).length,
} as const;
