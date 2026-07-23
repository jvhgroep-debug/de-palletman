import { resolveProvinceName, resolveProvinceSlug } from "../cityGenerator/provinces.ts";
import { buildCityPath, parsePipeList } from "../cityGenerator/utils.ts";
import {
  composeIndustrialItemText,
  composeSurroundingItemText,
} from "../localEngine/composeLocalContent.ts";
import {
  internalLinksFromMasterRow,
  sectionTitlesFromMasterRow,
  sellBodyFromMasterRow,
} from "../localEngine/sectionTitlesFromRow.ts";
import { getCanonicalUrl } from "../siteConfig.ts";
import { validateCityContentMaster } from "../cityTypes.ts";
import type { CityContentMaster } from "../cityTypes.ts";
import type { CityInternalLink } from "../cityTypes.ts";
import { buildExpectedImageFilename } from "./columns.ts";
import { ACTIVE_CITY_SLUG_SET } from "./activeCitySlugs.ts";
import type { MasterCityRow } from "./types.ts";

export interface SiblingCity {
  name: string;
  slug: string;
  provinceSlug: string;
}

const MAX_SIBLING_INTERNAL_LINKS = 4;

const DEFAULT_PROCESS_STEPS = (cityName: string) => [
  {
    title: "Contact opnemen",
    text: `Bel, app of neem contact op via de website. Vertel ons wat u zoekt of wilt verkopen — en waar in ${cityName} of omgeving.`,
  },
  {
    title: "Offerte ontvangen",
    text: "U krijgt een heldere prijs op basis van type, kwaliteit en aantal. Geen verrassingen, wel duidelijke afspraken.",
  },
  {
    title: "Ophalen of bezorgen",
    text: `Wij plannen ophalen bij u op locatie of bezorgen op uw bedrijfsadres in ${cityName}. Met eigen transport, flexibel ingepland.`,
  },
  {
    title: "Snelle afhandeling",
    text: "Verkoopt u pallets? Wij handelen snel af. Koopt u in? Dan leveren wij voortvarend. Afspraak is afspraak.",
  },
];

function buildIndustrialAreaItems(cityName: string, areas: string[], slug: string) {
  return areas.map((area, index) => ({
    title: area,
    text: composeIndustrialItemText(cityName, area, slug, index),
  }));
}

function buildSurroundingPlaceItems(cityName: string, places: string[], slug: string) {
  return places.map((place, index) => ({
    title: place,
    text: composeSurroundingItemText(cityName, place, slug, index),
  }));
}

function buildPalletTypeItems(cityName: string) {
  return [
    {
      title: "Europallets",
      text: `De meest gevraagde pallet voor opslag en distributie in ${cityName}. Geschikt voor logistiek, groothandel en productie.`,
      href: "/europallets",
      linkLabel: "Meer over Europallets",
    },
    {
      title: "Blokpallets",
      text: `Stevige pallets voor zware ladingen en industriële toepassingen in en rond ${cityName}.`,
      href: "/blokpallets",
      linkLabel: "Meer over Blokpallets",
    },
    {
      title: "Wegwerppallets",
      text: "Praktisch voor eenmalig transport of export. Betaalbaar en snel beschikbaar voor bedrijven in de regio.",
      href: "/wegwerppallets",
      linkLabel: "Meer over Wegwerppallets",
    },
  ];
}

function buildInternalLinks(
  provinceName: string,
  provinceSlug: string,
  currentSlug: string,
  nearbyLinks: Array<{ name: string; slug: string; provinceSlug: string }>,
): CityInternalLink[] {
  const links: CityInternalLink[] = [
    { label: provinceName, href: `/${provinceSlug}` },
    { label: "Werkgebied", href: "/werkgebied" },
    { label: "Pallets kopen", href: "/pallets-kopen" },
    { label: "Pallets verkopen", href: "/pallets-verkopen" },
    { label: "Europallets", href: "/europallets" },
    { label: "Blokpallets", href: "/blokpallets" },
    { label: "Wegwerppallets", href: "/wegwerppallets" },
  ];

  for (const target of nearbyLinks.slice(0, MAX_SIBLING_INTERNAL_LINKS)) {
    if (target.slug === currentSlug) continue;
    if (!ACTIVE_CITY_SLUG_SET.has(target.slug)) continue;
    links.push({
      label: `Pallets ${target.name}`,
      href: `/${target.provinceSlug}/pallets-${target.slug}`,
    });
  }

  return links;
}

/**
 * Zet een Master CSV-rij om naar een volledige CityContentMaster.
 * Gebruikt alle CSV-kolommen — geen template-fallback voor contentvelden.
 */
export function masterRowToCityContentMaster(
  row: MasterCityRow,
  allCitiesInProvince: string[] = [],
): CityContentMaster {
  const provinceSlug = resolveProvinceSlug(row.province);
  const provinceName = resolveProvinceName(provinceSlug);
  const slug = row.slug.trim().toLowerCase();
  const cityName = row.city.trim();
  const path = buildCityPath(provinceSlug, slug);

  const industrialAreaNames = parsePipeList(row.industrialAreas);
  const surroundingPlaceNames = parsePipeList(row.surroundingPlaces);
  const sectionTitles = sectionTitlesFromMasterRow(row, allCitiesInProvince);
  const nearbyLinks = internalLinksFromMasterRow(row);

  const page: CityContentMaster = {
    cityName,
    provinceName,
    provinceSlug,
    slug,
    path,

    canonicalUrl: row.canonical?.trim() || getCanonicalUrl(path),
    metaTitle: row.metaTitle.trim(),
    metaDescription: row.metaDescription.trim(),

    h1: row.heroTitle.trim(),
    heroSubtitle: row.heroSubtitle.trim(),
    heroEyebrow: cityName,

    introduction: {
      eyebrow: sectionTitles.introEyebrow,
      title: sectionTitles.introTitle,
      text: row.intro.trim(),
    },

    cityDescription: row.cityDescription.trim(),
    localEconomy: row.localEconomy.trim(),

    palletServices: {
      buy: {
        eyebrow: sectionTitles.buyEyebrow,
        title: sectionTitles.buyTitle,
        text: row.services.trim(),
      },
      sell: {
        eyebrow: sectionTitles.sellEyebrow,
        title: sectionTitles.sellTitle,
        text: sellBodyFromMasterRow(row, allCitiesInProvince),
      },
    },

    palletTypes: {
      eyebrow: sectionTitles.palletTypesEyebrow,
      title: sectionTitles.palletTypesTitle,
      intro: row.palletTypes.trim(),
      items: buildPalletTypeItems(cityName),
    },

    transportText: {
      eyebrow: sectionTitles.transportEyebrow,
      title: sectionTitles.transportTitle,
      intro: row.transport.trim(),
      items: [
        {
          title: "Ophalen",
          text: `Wij halen pallets op bij bedrijven én particulieren in ${cityName} en omgeving. Geef door waar en hoeveel pallets klaarstaan.`,
        },
        {
          title: "Bezorgen",
          text: `Bezorgen doen wij uitsluitend aan bedrijven — van enkele pallets tot grotere partijen op uw adres in ${cityName}.`,
        },
      ],
    },

    qualityText: row.quality.trim(),
    exportText: row.export.trim(),

    industrialAreas: {
      eyebrow: sectionTitles.industrialEyebrow,
      title: sectionTitles.industrialTitle,
      intro: sectionTitles.industrialIntro,
      items: buildIndustrialAreaItems(cityName, industrialAreaNames, slug),
    },

    surroundingPlaces: {
      eyebrow: sectionTitles.surroundingEyebrow,
      title: sectionTitles.surroundingTitle,
      intro: sectionTitles.surroundingIntro,
      items: buildSurroundingPlaceItems(cityName, surroundingPlaceNames, slug),
    },

    processSteps: DEFAULT_PROCESS_STEPS(cityName),

    faq: {
      eyebrow: sectionTitles.faqEyebrow,
      title: sectionTitles.faqTitle,
      intro: sectionTitles.faqIntro,
      items: [
        { question: row.faq1Question.trim(), answer: row.faq1Answer.trim() },
        { question: row.faq2Question.trim(), answer: row.faq2Answer.trim() },
        { question: row.faq3Question.trim(), answer: row.faq3Answer.trim() },
      ],
    },

    ctaTitle: row.ctaTitle.trim(),
    ctaText: row.ctaText.trim(),
    ctaPrimaryLabel: "Neem contact op",
    ctaPrimaryHref: "/contact",
    ctaSecondaryLabel: "Pallets verkopen",
    ctaSecondaryHref: "/pallets-verkopen",

    imageFilename: row.imageFilename?.trim() || buildExpectedImageFilename(slug),

    internalLinks: buildInternalLinks(provinceName, provinceSlug, slug, nearbyLinks),

    openGraph: {
      title: `Pallets in ${cityName} | De Palletman`,
      description: row.metaDescription.trim(),
    },

    schema: "auto",
  };

  validateCityContentMaster(page);
  return page;
}

export function masterRowsToCityContentMaster(
  rows: MasterCityRow[],
): CityContentMaster[] {
  const byProvince = new Map<string, string[]>();
  for (const row of rows) {
    const province = row.province.trim().toLowerCase();
    const list = byProvince.get(province) ?? [];
    list.push(row.city.trim());
    byProvince.set(province, list);
  }

  return rows.map((row) =>
    masterRowToCityContentMaster(row, byProvince.get(row.province.trim().toLowerCase()) ?? []),
  );
}
