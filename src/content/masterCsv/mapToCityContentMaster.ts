import { resolveProvinceName, resolveProvinceSlug } from "../cityGenerator/provinces.ts";
import { buildCityPath, parsePipeList } from "../cityGenerator/utils.ts";
import { getCanonicalUrl } from "../siteConfig.ts";
import { validateCityContentMaster } from "../cityTypes.ts";
import type { CityContentMaster } from "../cityTypes.ts";
import type { CityInternalLink } from "../cityTypes.ts";
import { buildExpectedImageFilename } from "./columns.ts";
import type { MasterCityRow } from "./types.ts";

export interface SiblingCity {
  name: string;
  slug: string;
}

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

function buildIndustrialAreaItems(cityName: string, areas: string[]) {
  return areas.map((area) => ({
    title: area,
    text: `Bedrijventerrein ${area} in en rond ${cityName} — wij halen pallets op en bezorgen aan bedrijven op het terrein.`,
  }));
}

function buildSurroundingPlaceItems(cityName: string, places: string[]) {
  return places.map((place) => ({
    title: place,
    text: `Omliggende kern bij ${cityName} — ophalen en bezorgen op aanvraag in ${place} en omgeving.`,
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
  siblings: SiblingCity[],
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

  for (const sibling of siblings) {
    if (sibling.slug !== currentSlug) {
      links.push({
        label: `Pallets ${sibling.name}`,
        href: `/${provinceSlug}/pallets-${sibling.slug}`,
      });
    }
  }

  return links;
}

/**
 * Zet een Master CSV-rij om naar een volledige CityContentMaster.
 * Gebruikt alle CSV-kolommen — geen template-fallback voor contentvelden.
 */
export function masterRowToCityContentMaster(
  row: MasterCityRow,
  siblings: SiblingCity[] = [],
): CityContentMaster {
  const provinceSlug = resolveProvinceSlug(row.province);
  const provinceName = resolveProvinceName(provinceSlug);
  const slug = row.slug.trim().toLowerCase();
  const cityName = row.city.trim();
  const path = buildCityPath(provinceSlug, slug);

  const industrialAreaNames = parsePipeList(row.industrialAreas);
  const surroundingPlaceNames = parsePipeList(row.surroundingPlaces);

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
      eyebrow: `Lokaal in ${cityName}`,
      title: `De Palletman in ${cityName}`,
      text: row.intro.trim(),
    },

    cityDescription: row.cityDescription.trim(),
    localEconomy: row.localEconomy.trim(),

    palletServices: {
      buy: {
        eyebrow: "Voor bedrijven",
        title: `Pallets kopen voor bedrijven in ${cityName}`,
        text: row.services.trim(),
      },
      sell: {
        eyebrow: "Inkoop",
        title: "Pallets verkopen door bedrijven en particulieren",
        text: `Heeft u overtollige pallets staan in ${cityName}? De Palletman koopt pallets in van bedrijven én particulieren. Geef type, kwaliteit en aantal door — wij halen op met eigen transport en handelen de verkoop snel af. Grote én kleine partijen zijn welkom.`,
      },
    },

    palletTypes: {
      eyebrow: "Assortiment",
      title: `Beschikbare palletsoorten in ${cityName}`,
      intro: row.palletTypes.trim(),
      items: buildPalletTypeItems(cityName),
    },

    transportText: {
      eyebrow: "Logistiek",
      title: `Ophalen en bezorgen in ${cityName}`,
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
      eyebrow: "Bedrijventerreinen",
      title: `Lokale bedrijventerreinen in ${cityName}`,
      intro: `De Palletman is actief op en rond de belangrijkste bedrijventerreinen in ${cityName}. Onder meer:`,
      items: buildIndustrialAreaItems(cityName, industrialAreaNames),
    },

    surroundingPlaces: {
      eyebrow: "Regio",
      title: `Omliggende plaatsen rond ${cityName}`,
      intro: `Naast ${cityName} rijden wij ook in omliggende kernen in ${provinceName}. Denk aan:`,
      items: buildSurroundingPlaceItems(cityName, surroundingPlaceNames),
    },

    processSteps: DEFAULT_PROCESS_STEPS(cityName),

    faq: {
      eyebrow: "Veelgestelde vragen",
      title: `FAQ — Pallets in ${cityName}`,
      intro: `Antwoorden op veelgestelde vragen over onze diensten in ${cityName} en omgeving.`,
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

    internalLinks: buildInternalLinks(provinceName, provinceSlug, slug, siblings),

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
  const siblings: SiblingCity[] = rows.map((row) => ({
    name: row.city.trim(),
    slug: row.slug.trim().toLowerCase(),
  }));

  return rows.map((row) => masterRowToCityContentMaster(row, siblings));
}
