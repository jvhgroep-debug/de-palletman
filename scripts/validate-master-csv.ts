import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parseMasterCsv } from "../src/content/masterCsv/parseMasterCsv.ts";
import { validateMasterCsvRows } from "../src/content/masterCsv/validateMasterCsv.ts";

const csvPath = join(process.cwd(), "src/data/master-cities.csv");
const csvText = readFileSync(csvPath, "utf-8");
const { rows } = parseMasterCsv(csvText);
const result = validateMasterCsvRows(rows);

console.log(`Master CSV: ${result.rowCount} stad(s) gevonden.`);

if (result.warnings.length > 0) {
  console.log("\nWaarschuwingen:");
  for (const warning of result.warnings) {
    console.log(`  Regel ${warning.row}${warning.city ? ` (${warning.city})` : ""}: ${warning.message}`);
  }
}

if (!result.valid) {
  console.error("\nFouten:");
  for (const error of result.errors) {
    console.error(`  Regel ${error.row}${error.city ? ` (${error.city})` : ""}: ${error.message}`);
  }
  process.exit(1);
}

console.log("\nMaster CSV validatie geslaagd.");
