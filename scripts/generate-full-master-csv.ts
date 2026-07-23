import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { slugifyCityName } from "../src/content/cityGenerator/utils.ts";
import {
  buildExpectedCanonical,
  buildExpectedImageFilename,
  MASTER_CSV_COLUMNS,
} from "../src/content/masterCsv/columns.ts";
import { escapeCsvValue } from "../src/content/masterCsv/csvUtils.ts";
import { composeLocalCityContent } from "../src/content/localEngine/composeLocalContent.ts";
import { localContentToMasterRow } from "../src/content/localEngine/toMasterRow.ts";
import {
  MUNICIPALITIES,
  PROVINCE_DISPLAY_NAMES,
} from "./data/municipalities.ts";
import { PREMIUM_CITY_ROWS } from "./data/premiumCityRows.ts";

function collectAllCities(): Array<{ provinceSlug: string; cityName: string }> {
  const seenSlugs = new Set<string>();
  const cities: Array<{ provinceSlug: string; cityName: string }> = [];

  for (const [provinceSlug, names] of Object.entries(MUNICIPALITIES)) {
    for (const cityName of names) {
      const slug = slugifyCityName(cityName);
      if (seenSlugs.has(slug)) continue;
      seenSlugs.add(slug);
      cities.push({ provinceSlug, cityName });
    }
  }

  return cities;
}

function buildCityRow(provinceSlug: string, cityName: string, allInProvince: string[]): Record<string, string> {
  const slug = slugifyCityName(cityName);

  if (PREMIUM_CITY_ROWS[slug]) {
    return { ...PREMIUM_CITY_ROWS[slug] };
  }

  const content = composeLocalCityContent({
    cityName,
    slug,
    provinceSlug,
    provinceName: PROVINCE_DISPLAY_NAMES[provinceSlug],
    allCitiesInProvince: allInProvince,
  });

  const row = localContentToMasterRow(
    {
      cityName,
      slug,
      provinceSlug,
      provinceName: PROVINCE_DISPLAY_NAMES[provinceSlug],
      allCitiesInProvince: allInProvince,
    },
    content,
  );

  return row as unknown as Record<string, string>;
}

const allCities = collectAllCities();
const rows: Record<string, string>[] = [];

for (const { provinceSlug, cityName } of allCities) {
  const allInProvince = MUNICIPALITIES[provinceSlug] ?? [];
  rows.push(buildCityRow(provinceSlug, cityName, allInProvince));
}

rows.sort((a, b) => {
  const provinceCompare = a.province.localeCompare(b.province);
  if (provinceCompare !== 0) return provinceCompare;
  return a.city.localeCompare(b.city, "nl");
});

const header = MASTER_CSV_COLUMNS.join(",");
const body = rows
  .map((row) => MASTER_CSV_COLUMNS.map((col) => escapeCsvValue(row[col] ?? "")).join(","))
  .join("\n");

const outputPath = join(process.cwd(), "src/data/master-cities.csv");
writeFileSync(outputPath, `${header}\n${body}\n`, "utf-8");

console.log(`Geschreven: ${outputPath} (${rows.length} steden) — Local Content Engine`);
