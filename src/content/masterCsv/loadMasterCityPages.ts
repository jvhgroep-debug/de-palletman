import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { CityContentMaster } from "../cityTypes.ts";
import { MASTER_CSV_PATH } from "./columns.ts";
import { masterRowsToCityContentMaster } from "./mapToCityContentMaster.ts";
import { parseMasterCsv } from "./parseMasterCsv.ts";
import { validateMasterCsvRows } from "./validateMasterCsv.ts";
import type { MasterCityRow } from "./types.ts";
import { ACTIVE_CITY_SLUGS, type ActiveCitySlug } from "./activeCitySlugs.ts";

export { ACTIVE_CITY_SLUGS, type ActiveCitySlug } from "./activeCitySlugs.ts";

function assertUniqueMeta(rows: MasterCityRow[]): void {
  const titles = new Set<string>();
  const descriptions = new Set<string>();

  for (const row of rows) {
    const title = row.metaTitle.trim();
    const description = row.metaDescription.trim();

    if (titles.has(title)) {
      throw new Error(`Master CSV: dubbele metaTitle "${title}".`);
    }
    titles.add(title);

    if (descriptions.has(description)) {
      throw new Error(`Master CSV: dubbele metaDescription voor ${row.city}.`);
    }
    descriptions.add(description);
  }
}

/**
 * Laadt en valideert de Master CSV en genereert CityContentMaster-pagina's.
 * Gooit bij validatiefouten — build stopt dan automatisch.
 */
export function loadMasterCityPages(): CityContentMaster[] {
  const csvPath = join(process.cwd(), MASTER_CSV_PATH);
  const csvText = readFileSync(csvPath, "utf-8");

  const { rows } = parseMasterCsv(csvText);
  const validation = validateMasterCsvRows(rows);

  if (!validation.valid) {
    const summary = validation.errors
      .map((e) => `Regel ${e.row} (${e.city ?? "?"}): ${e.message}`)
      .join("\n");
    throw new Error(`Master CSV validatie mislukt:\n${summary}`);
  }

  const activeRows = rows.filter((row) =>
    ACTIVE_CITY_SLUGS.includes(row.slug.trim().toLowerCase() as ActiveCitySlug),
  );

  if (activeRows.length !== ACTIVE_CITY_SLUGS.length) {
    const found = activeRows.map((r) => r.slug).join(", ");
    throw new Error(
      `Master CSV: verwacht ${ACTIVE_CITY_SLUGS.length} actieve steden (${ACTIVE_CITY_SLUGS.join(", ")}), gevonden: ${found || "geen"}.`,
    );
  }

  assertUniqueMeta(activeRows);

  return masterRowsToCityContentMaster(activeRows);
}
