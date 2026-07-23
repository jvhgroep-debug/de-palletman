import { resolveProvinceName, resolveProvinceSlug } from "../cityGenerator/provinces.ts";
import { buildCityPath, parsePipeList } from "../cityGenerator/utils.ts";
import type { CityInputRecord } from "../cityGenerator/types.ts";
import { getCanonicalUrl } from "../siteConfig.ts";
import type { MasterCityRow } from "./types.ts";
import { buildExpectedImageFilename } from "./columns.ts";

/**
 * Zet een Master CSV-rij om naar CityInputRecord voor de Bulk City Generator.
 * Nog niet gekoppeld aan paginageneratie — voorbereid voor toekomstige bulk.
 */
export function masterRowToCityInputRecord(row: MasterCityRow): CityInputRecord {
  const provinceSlug = resolveProvinceSlug(row.province);
  const provinceName = resolveProvinceName(provinceSlug, row.province);
  const slug = row.slug.trim().toLowerCase();

  return {
    cityName: row.city.trim(),
    provinceName,
    provinceSlug,
    slug,
    cityDescription: row.cityDescription.trim(),
    localEconomy: row.localEconomy.trim(),
    industrialAreas: parsePipeList(row.industrialAreas),
    surroundingPlaces: parsePipeList(row.surroundingPlaces),
    metaTitle: row.metaTitle.trim(),
    metaDescription: row.metaDescription.trim(),
    h1: row.heroTitle.trim(),
    heroSubtitle: row.heroSubtitle.trim(),
  };
}

/** Bouwt het volledige pad uit een Master CSV-rij. */
export function masterRowToPath(row: MasterCityRow): string {
  const provinceSlug = resolveProvinceSlug(row.province);
  return buildCityPath(provinceSlug, row.slug.trim().toLowerCase());
}

/** Canonical URL — gebruikt CSV-waarde of vult automatisch aan. */
export function masterRowToCanonical(row: MasterCityRow): string {
  if (row.canonical?.trim()) {
    return row.canonical.trim();
  }
  return getCanonicalUrl(masterRowToPath(row));
}

/** Afbeelding — gebruikt CSV-waarde of vult automatisch aan. */
export function masterRowToImageFilename(row: MasterCityRow): string {
  if (row.imageFilename?.trim()) {
    return row.imageFilename.trim();
  }
  return buildExpectedImageFilename(row.slug.trim().toLowerCase());
}

/** FAQ-items uit faq1–faq3 kolommen. */
export function masterRowToFaqItems(row: MasterCityRow) {
  return [
    { question: row.faq1Question.trim(), answer: row.faq1Answer.trim() },
    { question: row.faq2Question.trim(), answer: row.faq2Answer.trim() },
    { question: row.faq3Question.trim(), answer: row.faq3Answer.trim() },
  ];
}
