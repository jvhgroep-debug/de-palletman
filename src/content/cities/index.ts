import { breda } from "./breda";
import { tilburg } from "./tilburg";
import { eindhoven } from "./eindhoven";
import type { CityContentMaster } from "../cityTypes";

/** Premium pSEO-stadspagina's (Opdracht 24) — volledig unieke content per stad. */
export const PREMIUM_CITY_PAGES: CityContentMaster[] = [breda, tilburg, eindhoven];

export const PREMIUM_CITY_SLUGS = PREMIUM_CITY_PAGES.map((p) => p.slug);
