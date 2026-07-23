import { noordBrabant } from "./provinces/noord-brabant";
import { zuidHolland } from "./provinces/zuid-holland";
import { zeeland } from "./provinces/zeeland";
import { limburg } from "./provinces/limburg";
import { utrecht } from "./provinces/utrecht";
import { gelderland } from "./provinces/gelderland";
import type { ProvinceContentMaster } from "./provinceTypes";

/** Centraal register van alle provinciepagina's. */
export const provincePages = {
  "noord-brabant": noordBrabant,
  "zuid-holland": zuidHolland,
  zeeland,
  limburg,
  utrecht,
  gelderland,
} satisfies Record<string, ProvinceContentMaster>;

export type ProvincePageSlug = keyof typeof provincePages;

export function getProvincePage(slug: ProvincePageSlug): ProvinceContentMaster {
  return provincePages[slug];
}

export const PROVINCE_SLUGS = Object.keys(provincePages) as ProvincePageSlug[];
