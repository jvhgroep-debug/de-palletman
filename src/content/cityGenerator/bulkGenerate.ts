import type { CityContentMaster } from "../cityTypes";
import { generateCityPage } from "./generateCityPage";
import type { BulkGenerateResult, CityGeneratorOptions, CityInputRecord } from "./types";

/**
 * Genereert CityContentMaster-pagina's uit een array input-records.
 * Duplicaten op slug worden overgeslagen (eerste wint).
 */
export function bulkGenerateCities(
  records: CityInputRecord[],
  options: CityGeneratorOptions = {},
): BulkGenerateResult {
  const start = performance.now();
  const pages: CityContentMaster[] = [];
  const skipped: BulkGenerateResult["skipped"] = [];
  const seenSlugs = new Set<string>();

  for (const record of records) {
    try {
      const page = generateCityPage(record, options);
      const key = `${page.provinceSlug}/${page.slug}`;

      if (seenSlugs.has(key)) {
        skipped.push({
          cityName: record.cityName,
          reason: `Duplicaat slug "${key}" — overgeslagen.`,
        });
        continue;
      }

      seenSlugs.add(key);
      pages.push(page);
    } catch (error) {
      skipped.push({
        cityName: record.cityName || "(onbekend)",
        reason: error instanceof Error ? error.message : String(error),
      });
    }
  }

  return {
    pages,
    skipped,
    durationMs: performance.now() - start,
  };
}

/** Zet gegenereerde pagina's om naar een slug-keyed record voor het register. */
export function cityPagesToRegistry(
  pages: CityContentMaster[],
): Record<string, CityContentMaster> {
  return Object.fromEntries(pages.map((page) => [page.slug, page]));
}
