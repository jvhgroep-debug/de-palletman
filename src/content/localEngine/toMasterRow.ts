import { buildExpectedCanonical, buildExpectedImageFilename } from "../masterCsv/columns.ts";
import type { MasterCityRow } from "../masterCsv/types.ts";
import type { LocalCityContent, LocalCityInput } from "./types.ts";

/** Zet LocalCityContent om naar een Master CSV-rij. */
export function localContentToMasterRow(
  input: LocalCityInput,
  content: LocalCityContent,
): MasterCityRow {
  const { provinceSlug, slug } = input;

  return {
    province: provinceSlug,
    city: input.cityName,
    slug,
    heroTitle: content.heroTitle,
    heroSubtitle: content.heroSubtitle,
    intro: content.intro,
    cityDescription: content.cityDescription,
    localEconomy: content.localEconomy,
    industrialAreas: content.industrialAreas.join("|"),
    surroundingPlaces: content.surroundingPlaces.join("|"),
    services: content.services,
    palletTypes: content.palletTypes,
    transport: content.transport,
    quality: content.quality,
    export: content.export,
    ctaTitle: content.ctaTitle,
    ctaText: content.ctaText,
    faq1Question: content.faq[0]?.question ?? "",
    faq1Answer: content.faq[0]?.answer ?? "",
    faq2Question: content.faq[1]?.question ?? "",
    faq2Answer: content.faq[1]?.answer ?? "",
    faq3Question: content.faq[2]?.question ?? "",
    faq3Answer: content.faq[2]?.answer ?? "",
    metaTitle: content.metaTitle,
    metaDescription: content.metaDescription,
    canonical: buildExpectedCanonical(provinceSlug, slug),
    imageFilename: buildExpectedImageFilename(slug),
  };
}
