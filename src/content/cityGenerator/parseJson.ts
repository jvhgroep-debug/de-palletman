import type { CityInputRecord } from "./types";
import { REQUIRED_INPUT_FIELDS } from "./types";

/**
 * Parseert JSON-tekst naar CityInputRecord[].
 * Accepteert een array of een object met `cities`-property.
 */
export function parseJsonCityRecords(jsonText: string): CityInputRecord[] {
  const parsed: unknown = JSON.parse(jsonText);

  let rows: unknown[];
  if (Array.isArray(parsed)) {
    rows = parsed;
  } else if (parsed && typeof parsed === "object" && Array.isArray((parsed as { cities?: unknown }).cities)) {
    rows = (parsed as { cities: unknown[] }).cities;
  } else {
    throw new Error('JSON moet een array zijn of een object met een "cities"-array.');
  }

  return rows.map((row, index) => objectToCityInputRecord(row, index + 1));
}

function objectToCityInputRecord(row: unknown, index: number): CityInputRecord {
  if (!row || typeof row !== "object") {
    throw new Error(`JSON item ${index}: verwacht een object.`);
  }

  const record = row as Record<string, unknown>;

  for (const field of REQUIRED_INPUT_FIELDS) {
    if (typeof record[field] !== "string" || !record[field].trim()) {
      throw new Error(`JSON item ${index}: verplicht veld "${field}" ontbreekt of is leeg.`);
    }
  }

  const cityName = (record.cityName as string).trim();
  const provinceName = (record.provinceName as string).trim();

  const result: CityInputRecord = { cityName, provinceName };

  const stringFields = [
    "provinceSlug",
    "slug",
    "regionLabel",
    "cityDescription",
    "localEconomy",
    "metaTitle",
    "metaDescription",
    "h1",
    "heroSubtitle",
  ] as const;

  for (const field of stringFields) {
    if (typeof record[field] === "string" && record[field].trim()) {
      result[field] = record[field].trim();
    }
  }

  const listFields = ["industrialAreas", "surroundingPlaces", "sectors"] as const;
  for (const field of listFields) {
    const value = record[field];
    if (Array.isArray(value)) {
      result[field] = value.map(String).filter(Boolean);
    } else if (typeof value === "string" && value.trim()) {
      result[field] = value.split("|").map((item) => item.trim()).filter(Boolean);
    }
  }

  return result;
}
