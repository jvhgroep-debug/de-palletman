/**
 * Definitieve Master CSV-kolommen voor stadspagina's.
 * Eén rij = één stad. Volgorde is normatief.
 */
export const MASTER_CSV_COLUMNS = [
  "province",
  "city",
  "slug",
  "heroTitle",
  "heroSubtitle",
  "intro",
  "cityDescription",
  "localEconomy",
  "industrialAreas",
  "surroundingPlaces",
  "services",
  "palletTypes",
  "transport",
  "quality",
  "export",
  "ctaTitle",
  "ctaText",
  "faq1Question",
  "faq1Answer",
  "faq2Question",
  "faq2Answer",
  "faq3Question",
  "faq3Answer",
  "metaTitle",
  "metaDescription",
  "canonical",
  "imageFilename",
] as const;

export type MasterCsvColumn = (typeof MASTER_CSV_COLUMNS)[number];

/** Velden die niet leeg mogen zijn (imageFilename en canonical mogen afgeleid worden). */
export const REQUIRED_MASTER_CSV_COLUMNS = [
  "province",
  "city",
  "slug",
  "heroTitle",
  "heroSubtitle",
  "intro",
  "cityDescription",
  "localEconomy",
  "industrialAreas",
  "surroundingPlaces",
  "services",
  "palletTypes",
  "transport",
  "quality",
  "export",
  "ctaTitle",
  "ctaText",
  "faq1Question",
  "faq1Answer",
  "faq2Question",
  "faq2Answer",
  "faq3Question",
  "faq3Answer",
  "metaTitle",
  "metaDescription",
] as const satisfies ReadonlyArray<MasterCsvColumn>;

/** Pipe-gescheiden lijstvelden in de CSV. */
export const PIPE_LIST_COLUMNS = ["industrialAreas", "surroundingPlaces"] as const;

export const MASTER_CSV_PATH = "src/data/master-cities.csv";

export const IMAGE_FILENAME_PATTERN = /^pallets-[a-z0-9-]+\.webp$/;

export function buildExpectedImageFilename(slug: string): string {
  return `pallets-${slug}.webp`;
}

export function buildExpectedPath(provinceSlug: string, citySlug: string): string {
  return `/${provinceSlug}/pallets-${citySlug}`;
}

export function buildExpectedCanonical(provinceSlug: string, citySlug: string): string {
  return `https://de-palletman.pages.dev/${provinceSlug}/pallets-${citySlug}/`;
}
