import { breda } from "./cities/breda";
import type { CityContentMaster } from "./cityTypes";
import { validateCityContentMaster } from "./cityTypes";
import { bulkGenerateCities, cityPagesToRegistry } from "./cityGenerator/bulkGenerate";
import { hasCityDataFile, loadCityInputRecords } from "./cityGenerator/loadCityData";
import { verifyCityGenerator } from "./cityGenerator/selfCheck";

/** Handmatig onderhouden stadspagina's (hebben voorrang op gegenereerde). */
const manualCityPages = {
  breda,
} satisfies Record<string, CityContentMaster>;

/** Verifieer generator bij elke build — geen extra pagina's. */
verifyCityGenerator();

/** Bulk City Generator — leest CSV/JSON wanneer src/data/cities.csv of cities.json bestaat. */
const cityInputRecords = loadCityInputRecords();
const bulkResult = bulkGenerateCities(cityInputRecords);

if (bulkResult.skipped.length > 0 && hasCityDataFile()) {
  console.warn("[Bulk City Generator] Overgeslagen steden:", bulkResult.skipped);
}

/** Gegenereerde pagina's — leeg zolang er geen databestand is. */
const generatedCityPages = cityPagesToRegistry(
  bulkResult.pages.filter((page) => !(page.slug in manualCityPages)),
);

/** Centraal register: gegenereerd + handmatig (handmatig wint bij dubbele slug). */
export const cityPages = {
  ...generatedCityPages,
  ...manualCityPages,
} satisfies Record<string, CityContentMaster>;

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

/** Statistieken voor monitoring (bulk generator). */
export const cityRegistryStats = {
  manualCount: Object.keys(manualCityPages).length,
  generatedCount: Object.keys(generatedCityPages).length,
  totalCount: Object.keys(cityPages).length,
  bulkDurationMs: bulkResult.durationMs,
  bulkSkipped: bulkResult.skipped.length,
  hasDataFile: hasCityDataFile(),
} as const;
