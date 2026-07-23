import { validateCityContentMaster } from "../cityTypes";
import { bulkGenerateCities } from "./bulkGenerate";
import { generateCityPage } from "./generateCityPage";
import type { CityInputRecord } from "./types";

/**
 * Verifiëert dat de generator geldige CityContentMaster-pagina's produceert.
 * Draait bij build — faalt vroeg bij template- of validatiefouten.
 */
export function verifyCityGenerator(): void {
  const sampleInput: CityInputRecord = {
    cityName: "GeneratorTest",
    provinceName: "Noord-Brabant",
    regionLabel: "Testregio",
    industrialAreas: ["Testterrein"],
    surroundingPlaces: ["Testplaats"],
    sectors: ["logistiek", "productie"],
  };

  const page = generateCityPage(sampleInput);
  validateCityContentMaster(page);

  const bulk = bulkGenerateCities([
    sampleInput,
    {
      cityName: "Tilburg",
      provinceName: "Noord-Brabant",
      industrialAreas: ["De Reeshof"],
      surroundingPlaces: ["Goirle", "Oisterwijk"],
    },
  ]);

  if (bulk.pages.length !== 2) {
    throw new Error(
      `City generator self-check: verwacht 2 pagina's, kreeg ${bulk.pages.length}.`,
    );
  }

  if (bulk.skipped.length > 0) {
    throw new Error(`City generator self-check: onverwachte skips: ${JSON.stringify(bulk.skipped)}`);
  }
}
