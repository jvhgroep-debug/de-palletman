import { APPROVED_PROVINCE_SLUGS, PROVINCE_NAME_TO_SLUG, PROVINCE_SLUG_TO_NAME } from "../cityGenerator/provinces.ts";
import { slugifyCityName } from "../cityGenerator/utils.ts";
import {
  buildExpectedCanonical,
  buildExpectedImageFilename,
  buildExpectedPath,
  IMAGE_FILENAME_PATTERN,
  REQUIRED_MASTER_CSV_COLUMNS,
} from "./columns.ts";
import { parseMasterCsv } from "./parseMasterCsv.ts";
import type { MasterCityRow, MasterCsvValidationError, MasterCsvValidationResult } from "./types.ts";

function isNonEmpty(value: string | undefined): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

function resolveProvinceSlug(province: string): string | null {
  const normalized = province.trim().toLowerCase();

  if (PROVINCE_SLUG_TO_NAME[normalized]) {
    return normalized;
  }

  const fromName = PROVINCE_NAME_TO_SLUG[province.trim().toLowerCase()];
  return fromName ?? null;
}

function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

/**
 * Valideert alle rijen uit de Master CSV.
 * Controleert lege velden, dubbele slugs/URL's, provincie, stad en bestandsnamen.
 */
export function validateMasterCsvRows(rows: MasterCityRow[]): MasterCsvValidationResult {
  const errors: MasterCsvValidationError[] = [];
  const warnings: MasterCsvValidationError[] = [];

  const slugIndex = new Map<string, number>();
  const urlIndex = new Map<string, number>();
  const heroTitleIndex = new Map<string, number>();
  const metaTitleIndex = new Map<string, number>();
  const metaDescriptionIndex = new Map<string, number>();
  const canonicalIndex = new Map<string, number>();

  rows.forEach((row, index) => {
    const rowNumber = index + 2; // +1 header, +1 1-based
    const cityLabel = row.city?.trim() || `(regel ${rowNumber})`;

    for (const column of REQUIRED_MASTER_CSV_COLUMNS) {
      if (!isNonEmpty(row[column])) {
        errors.push({
          row: rowNumber,
          city: cityLabel,
          field: column,
          message: `Verplicht veld "${column}" is leeg.`,
        });
      }
    }

    if (!isNonEmpty(row.province)) {
      return;
    }

    const provinceSlug = resolveProvinceSlug(row.province);
    if (!provinceSlug) {
      errors.push({
        row: rowNumber,
        city: cityLabel,
        field: "province",
        message: `Onbekende provincie "${row.province}". Toegestaan: ${APPROVED_PROVINCE_SLUGS.join(", ")} of provincienaam.`,
      });
      return;
    }

    if (!isNonEmpty(row.city)) {
      errors.push({
        row: rowNumber,
        field: "city",
        message: "Stadsnaam (city) ontbreekt.",
      });
    }

    if (!isNonEmpty(row.slug)) {
      return;
    }

    const slug = row.slug.trim().toLowerCase();

    if (!isValidSlug(slug)) {
      errors.push({
        row: rowNumber,
        city: cityLabel,
        field: "slug",
        message: `Ongeldige slug "${slug}". Alleen lowercase letters, cijfers en koppeltekens.`,
      });
    }

    const expectedSlugFromCity = slugifyCityName(row.city);
    if (expectedSlugFromCity && slug !== expectedSlugFromCity) {
      warnings.push({
        row: rowNumber,
        city: cityLabel,
        field: "slug",
        message: `Slug "${slug}" wijkt af van afgeleide slug "${expectedSlugFromCity}" op basis van stadsnaam.`,
      });
    }

    const previousSlugRow = slugIndex.get(slug);
    if (previousSlugRow !== undefined) {
      errors.push({
        row: rowNumber,
        city: cityLabel,
        field: "slug",
        message: `Dubbele slug "${slug}" (eerder op regel ${previousSlugRow}).`,
      });
    } else {
      slugIndex.set(slug, rowNumber);
    }

    const path = buildExpectedPath(provinceSlug, slug);
    const previousUrlRow = urlIndex.get(path);
    if (previousUrlRow !== undefined) {
      errors.push({
        row: rowNumber,
        city: cityLabel,
        field: "url",
        message: `Dubbele URL "${path}" (eerder op regel ${previousUrlRow}).`,
      });
    } else {
      urlIndex.set(path, rowNumber);
    }

    const expectedImage = buildExpectedImageFilename(slug);
    const imageFilename = row.imageFilename?.trim();

    if (!imageFilename) {
      warnings.push({
        row: rowNumber,
        city: cityLabel,
        field: "imageFilename",
        message: `Leeg — wordt automatisch "${expectedImage}".`,
      });
    } else if (imageFilename !== expectedImage) {
      errors.push({
        row: rowNumber,
        city: cityLabel,
        field: "imageFilename",
        message: `Bestandsnaam "${imageFilename}" moet "${expectedImage}" zijn (pallets-[stad].webp).`,
      });
    } else if (!IMAGE_FILENAME_PATTERN.test(imageFilename)) {
      errors.push({
        row: rowNumber,
        city: cityLabel,
        field: "imageFilename",
        message: `Ongeldige bestandsnaam "${imageFilename}". Verwacht patroon: pallets-[stad].webp.`,
      });
    }

    const expectedCanonical = buildExpectedCanonical(provinceSlug, slug);
    const canonical = row.canonical?.trim();

    if (!canonical) {
      warnings.push({
        row: rowNumber,
        city: cityLabel,
        field: "canonical",
        message: `Leeg — wordt automatisch "${expectedCanonical}".`,
      });
    } else if (canonical !== expectedCanonical) {
      warnings.push({
        row: rowNumber,
        city: cityLabel,
        field: "canonical",
        message: `Canonical "${canonical}" wijkt af van verwacht "${expectedCanonical}".`,
      });
    }

    if (isNonEmpty(row.heroTitle) && !row.heroTitle.includes(row.city)) {
      warnings.push({
        row: rowNumber,
        city: cityLabel,
        field: "heroTitle",
        message: "H1 (heroTitle) bevat de stadsnaam niet — controleer unieke lokale SEO.",
      });
    }

    const uniqueFields = [
      { field: "heroTitle" as const, index: heroTitleIndex, label: "H1 (heroTitle)" },
      { field: "metaTitle" as const, index: metaTitleIndex, label: "meta title" },
      { field: "metaDescription" as const, index: metaDescriptionIndex, label: "meta description" },
      { field: "canonical" as const, index: canonicalIndex, label: "canonical" },
    ];

    for (const { field, index, label } of uniqueFields) {
      const value = row[field]?.trim();
      if (!value) continue;

      const previousRow = index.get(value);
      if (previousRow !== undefined) {
        errors.push({
          row: rowNumber,
          city: cityLabel,
          field,
          message: `Dubbele ${label} (eerder op regel ${previousRow}).`,
        });
      } else {
        index.set(value, rowNumber);
      }
    }
  });

  return {
    valid: errors.length === 0,
    rowCount: rows.length,
    errors,
    warnings,
  };
}

/** Parseert en valideert Master CSV in één stap. Gooit bij fouten. */
export function parseAndValidateMasterCsv(csvText: string): MasterCsvValidationResult & { rows: MasterCityRow[] } {
  const { rows } = parseMasterCsv(csvText);
  const result = validateMasterCsvRows(rows);

  if (!result.valid) {
    const summary = result.errors.map((e) => `Regel ${e.row}${e.city ? ` (${e.city})` : ""}: ${e.message}`).join("\n");
    throw new Error(`Master CSV validatie mislukt:\n${summary}`);
  }

  return { ...result, rows };
}
