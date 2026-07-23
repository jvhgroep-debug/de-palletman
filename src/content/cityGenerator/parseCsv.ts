import type { CityInputRecord } from "./types";
import { CSV_COLUMN_MAP, type CsvColumnKey } from "./types";
import { parsePipeList } from "./utils";

const LIST_FIELDS = new Set<CsvColumnKey>(["industrialAreas", "surroundingPlaces", "sectors"]);

/**
 * Parseert CSV-tekst naar CityInputRecord[].
 * Ondersteunt kopregel, komma-gescheiden velden en quoted values.
 * Meervoudige waarden: pipe-gescheiden (|).
 */
export function parseCsvCityRecords(csvText: string): CityInputRecord[] {
  const lines = csvText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length === 0) return [];

  const headerCells = parseCsvLine(lines[0]).map(normalizeHeader);
  const hasHeader = headerCells.includes("cityname") || headerCells.includes("cityName".toLowerCase());

  const dataLines = hasHeader ? lines.slice(1) : lines;
  const headers = hasHeader
    ? parseCsvLine(lines[0])
    : ["cityName", "provinceName"];

  return dataLines.map((line, index) => {
    const cells = parseCsvLine(line);
    const row: Record<string, string> = {};

    headers.forEach((header, cellIndex) => {
      row[normalizeHeader(header)] = cells[cellIndex]?.trim() ?? "";
    });

    return rowToCityInputRecord(row, index + (hasHeader ? 2 : 1));
  });
}

function normalizeHeader(header: string): string {
  const trimmed = header.trim();
  const lower = trimmed.toLowerCase();

  for (const key of Object.keys(CSV_COLUMN_MAP) as CsvColumnKey[]) {
    if (key.toLowerCase() === lower) return key;
  }

  return trimmed;
}

function rowToCityInputRecord(row: Record<string, string>, lineNumber: number): CityInputRecord {
  const cityName = row.cityName?.trim();
  const provinceName = row.provinceName?.trim();

  if (!cityName || !provinceName) {
    throw new Error(
      `CSV regel ${lineNumber}: cityName en provinceName zijn verplicht (gevonden: cityName="${cityName ?? ""}", provinceName="${provinceName ?? ""}").`,
    );
  }

  const record: CityInputRecord = { cityName, provinceName };

  for (const key of Object.keys(CSV_COLUMN_MAP) as CsvColumnKey[]) {
    if (key === "cityName" || key === "provinceName") continue;

    const value = row[key]?.trim();
    if (!value) continue;

    if (LIST_FIELDS.has(key)) {
      (record as Record<string, unknown>)[key] = parsePipeList(value);
    } else {
      (record as Record<string, unknown>)[key] = value;
    }
  }

  return record;
}

function parseCsvLine(line: string): string[] {
  const cells: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      cells.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  cells.push(current);
  return cells;
}
