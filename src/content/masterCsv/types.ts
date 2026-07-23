import type { MasterCsvColumn } from "./columns.ts";

/** Eén rij uit de Master CSV — volledige content voor één stadspagina. */
export type MasterCityRow = Record<MasterCsvColumn, string>;

export interface MasterCsvValidationError {
  row: number;
  city?: string;
  field?: MasterCsvColumn | "url" | "slug";
  message: string;
}

export interface MasterCsvValidationResult {
  valid: boolean;
  rowCount: number;
  errors: MasterCsvValidationError[];
  warnings: MasterCsvValidationError[];
}

export interface ParsedMasterCsv {
  headers: MasterCsvColumn[];
  rows: MasterCityRow[];
}
