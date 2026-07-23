import type { CityContentMaster } from "./cityTypes";
import { validateCityContentMaster } from "./cityTypes";
import {
  ACTIVE_CITY_SLUGS,
  loadMasterCityPages,
} from "./masterCsv/loadMasterCityPages";

/** Stadspagina's gegenereerd uit src/data/master-cities.csv */
const masterCityPages = loadMasterCityPages();

export const cityPages = Object.fromEntries(
  masterCityPages.map((page) => [page.slug, page]),
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
  source: "master-cities.csv" as const,
  activeSlugs: ACTIVE_CITY_SLUGS,
  totalCount: Object.keys(cityPages).length,
} as const;
