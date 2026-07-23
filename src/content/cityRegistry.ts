import { breda } from "./cities/breda";
import type { CityContentMaster } from "./cityTypes";
import { validateCityContentMaster } from "./cityTypes";

/** Centraal register van alle stadspagina's. */
export const cityPages = {
  breda,
} satisfies Record<string, CityContentMaster>;

export type CityPageSlug = keyof typeof cityPages;

export function getCityPage(slug: CityPageSlug): CityContentMaster {
  return cityPages[slug];
}

/** Valideert alle geregistreerde stadspagina's bij import (build-time). */
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
