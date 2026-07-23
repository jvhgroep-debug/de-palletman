import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import type { CityInputRecord } from "./types";
import { parseCsvCityRecords } from "./parseCsv";
import { parseJsonCityRecords } from "./parseJson";

/** Paden waar straks CSV/JSON geplaatst kan worden (nog niet aanwezig). */
export const CITY_DATA_PATHS = {
  csv: join(process.cwd(), "src/data/cities.csv"),
  json: join(process.cwd(), "src/data/cities.json"),
} as const;

/**
 * Laadt stad-input uit CSV of JSON wanneer het bestand bestaat.
 * JSON heeft voorrang boven CSV.
 * Retourneert een lege array zolang er geen databestand is.
 */
export function loadCityInputRecords(): CityInputRecord[] {
  if (existsSync(CITY_DATA_PATHS.json)) {
    const raw = readFileSync(CITY_DATA_PATHS.json, "utf-8");
    return parseJsonCityRecords(raw);
  }

  if (existsSync(CITY_DATA_PATHS.csv)) {
    const raw = readFileSync(CITY_DATA_PATHS.csv, "utf-8");
    return parseCsvCityRecords(raw);
  }

  return [];
}

/** Controleert of er een CSV/JSON-databestand aanwezig is. */
export function hasCityDataFile(): boolean {
  return existsSync(CITY_DATA_PATHS.json) || existsSync(CITY_DATA_PATHS.csv);
}
