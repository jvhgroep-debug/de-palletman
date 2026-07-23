import { parsePipeList, slugifyCityName } from "../cityGenerator/utils.ts";
import { resolveProvinceName } from "../cityGenerator/provinces.ts";
import type { MasterCityRow } from "../masterCsv/types.ts";
import { composeLocalCityContent, composeSellBody } from "./composeLocalContent.ts";
import type { LocalCityInput, LocalSectionTitles } from "./types.ts";

function masterRowToLocalInput(row: MasterCityRow, allInProvince: string[]): LocalCityInput {
  const provinceSlug = row.province.trim().toLowerCase();
  return {
    cityName: row.city.trim(),
    slug: row.slug.trim().toLowerCase(),
    provinceSlug,
    provinceName: resolveProvinceName(provinceSlug),
    allCitiesInProvince: allInProvince,
  };
}

/** Herleidt unieke H2-titels deterministisch via de Local Content Engine. */
export function sectionTitlesFromMasterRow(
  row: MasterCityRow,
  allInProvince: string[] = [],
): LocalSectionTitles {
  const input = masterRowToLocalInput(row, allInProvince);
  return composeLocalCityContent(input).sectionTitles;
}

/** Verkoop-sectie tekst — uniek per stad via engine. */
export function sellBodyFromMasterRow(row: MasterCityRow, allInProvince: string[] = []): string {
  const input = masterRowToLocalInput(row, allInProvince);
  return composeSellBody(input);
}

/** Interne link-doelen uit CSV surroundingPlaces — max 4, correcte provincie. */
export function internalLinksFromMasterRow(
  row: MasterCityRow,
): Array<{ name: string; slug: string; provinceSlug: string }> {
  const surrounding = parsePipeList(row.surroundingPlaces);
  const provinceSlug = row.province.trim().toLowerCase();
  return surrounding.map((name) => ({
    name,
    slug: slugifyCityName(name),
    provinceSlug,
  }));
}
