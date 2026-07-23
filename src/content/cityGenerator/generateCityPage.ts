import type { CityContentMaster } from "../cityTypes";
import { validateCityContentMaster } from "../cityTypes";
import { getCanonicalUrl } from "../siteConfig";
import { resolveProvinceName, resolveProvinceSlug } from "./provinces";
import type { CityGeneratorOptions, CityInputRecord } from "./types";
import {
  buildCta,
  buildDefaultCityDescription,
  buildDefaultLocalEconomy,
  buildFaq,
  buildH1,
  buildHeroSubtitle,
  buildIndustrialAreas,
  buildInternalLinks,
  buildIntroduction,
  buildMetaDescription,
  buildMetaTitle,
  buildOpenGraph,
  buildPalletServices,
  buildPalletTypes,
  buildProcessSteps,
  buildSurroundingPlaces,
  buildTransportSection,
  EXPORT_TEXT,
  QUALITY_TEXT,
  resolveRegionLabel,
  resolveSectors,
  type TemplateContext,
} from "./templates";
import {
  buildCityImageFilename,
  buildCityPath,
  slugifyCityName,
} from "./utils";

export type GeneratedCityPage = CityContentMaster;

export function generateCityPage(
  input: CityInputRecord,
  options: CityGeneratorOptions = {},
): GeneratedCityPage {
  const cityName = input.cityName.trim();
  if (!cityName) {
    throw new Error("City generator: cityName is verplicht.");
  }

  const provinceSlug = resolveProvinceSlug(input.provinceName, input.provinceSlug);
  const provinceName = resolveProvinceName(provinceSlug, input.provinceName);
  const slug = input.slug?.trim() || slugifyCityName(cityName);
  const path = buildCityPath(provinceSlug, slug);

  const ctx: TemplateContext = {
    cityName,
    provinceName,
    provinceSlug,
    slug,
    regionLabel: resolveRegionLabel(input, cityName),
    industrialAreas: input.industrialAreas ?? [],
    surroundingPlaces: input.surroundingPlaces ?? [],
    sectors: resolveSectors(input),
    cityDescription: input.cityDescription,
    localEconomy: input.localEconomy,
  };

  const cta = buildCta(ctx);

  const page: CityContentMaster = {
    cityName,
    provinceName,
    provinceSlug,
    slug,
    path,

    canonicalUrl: getCanonicalUrl(path),
    metaTitle: input.metaTitle?.trim() || buildMetaTitle(cityName),
    metaDescription: input.metaDescription?.trim() || buildMetaDescription(ctx),

    h1: input.h1?.trim() || buildH1(cityName),
    heroSubtitle: input.heroSubtitle?.trim() || buildHeroSubtitle(ctx),
    heroEyebrow: cityName,

    introduction: buildIntroduction(ctx),
    cityDescription: buildDefaultCityDescription(ctx),
    localEconomy: buildDefaultLocalEconomy(ctx),

    industrialAreas: buildIndustrialAreas(ctx),
    surroundingPlaces: buildSurroundingPlaces(ctx),

    palletServices: buildPalletServices(ctx),
    palletTypes: buildPalletTypes(ctx),

    transportText: buildTransportSection(ctx),
    qualityText: QUALITY_TEXT,
    exportText: EXPORT_TEXT,

    processSteps: buildProcessSteps(ctx),
    faq: buildFaq(ctx),

    ctaTitle: cta.ctaTitle,
    ctaText: cta.ctaText,
    ctaPrimaryLabel: "Neem contact op",
    ctaPrimaryHref: "/contact",
    ctaSecondaryLabel: "Pallets verkopen",
    ctaSecondaryHref: "/pallets-verkopen",

    imageFilename: buildCityImageFilename(slug),
    internalLinks: buildInternalLinks(provinceName, provinceSlug),

    openGraph: buildOpenGraph(cityName),
    schema: "auto",
  };

  if (!options.skipValidation) {
    validateCityContentMaster(page);
  }

  return page;
}
