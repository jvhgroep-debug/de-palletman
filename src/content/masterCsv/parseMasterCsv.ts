import {
  MASTER_CSV_COLUMNS,
  type MasterCsvColumn,
} from "./columns.ts";
import { parseCsvLine } from "./csvUtils.ts";
import type { MasterCityRow, ParsedMasterCsv } from "./types.ts";

function normalizeHeader(header: string): string {
  return header.trim().replace(/^\ufeff/, "");
}

function assertValidHeaders(headers: string[]): MasterCsvColumn[] {
  const normalized = headers.map(normalizeHeader);

  if (normalized.length !== MASTER_CSV_COLUMNS.length) {
    throw new Error(
      `Master CSV: verwacht ${MASTER_CSV_COLUMNS.length} kolommen, gevonden ${normalized.length}.`,
    );
  }

  for (let i = 0; i < MASTER_CSV_COLUMNS.length; i += 1) {
    if (normalized[i] !== MASTER_CSV_COLUMNS[i]) {
      throw new Error(
        `Master CSV: kolom ${i + 1} moet "${MASTER_CSV_COLUMNS[i]}" zijn, gevonden "${normalized[i]}".`,
      );
    }
  }

  return MASTER_CSV_COLUMNS;
}

/**
 * Parseert Master CSV-tekst naar getypeerde rijen.
 * Vereist exacte kopregel volgens MASTER_CSV_COLUMNS.
 */
export function parseMasterCsv(csvText: string): ParsedMasterCsv {
  const lines = csvText
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length === 0) {
    return { headers: MASTER_CSV_COLUMNS, rows: [] };
  }

  const headers = assertValidHeaders(parseCsvLine(lines[0]));
  const rows: MasterCityRow[] = [];

  for (let i = 1; i < lines.length; i += 1) {
    const cells = parseCsvLine(lines[i]);

    if (cells.length !== headers.length) {
      throw new Error(
        `Master CSV regel ${i + 1}: verwacht ${headers.length} kolommen, gevonden ${cells.length}.`,
      );
    }

    const row = {} as MasterCityRow;
    headers.forEach((header, index) => {
      row[header] = cells[index]?.trim() ?? "";
    });
    rows.push(row);
  }

  return { headers, rows };
}
