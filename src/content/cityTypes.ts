import type { ContentFaqItem, ContentItem, ContentSection } from "./types";

export interface CityInternalLink {
  label: string;
  href: string;
}

export interface CityTextBlock {
  eyebrow?: string;
  title: string;
  text: string;
}

export interface CityProcessStep {
  title: string;
  text: string;
}

export interface CityFaqSection {
  eyebrow: string;
  title: string;
  intro: string;
  items: ContentFaqItem[];
}

export interface CityPalletServices {
  buy: CityTextBlock;
  sell: CityTextBlock;
}

/** Uitgebreide premium-secties voor pSEO-stadspagina's (Opdracht 24). */
export interface CityPageExtended {
  trust: ContentSection;
  europallets: ContentSection;
  blokpallets: ContentSection;
  wegwerppallets: ContentSection;
  htExport: CityTextBlock;
  largeBatches: CityTextBlock;
  smallBatches: CityTextBlock;
  pickup: CityTextBlock;
  delivery: CityTextBlock;
  werkgebied: ContentSection;
  localAdvantages: ContentSection;
  accessibility: ContentSection;
  quoteForm: { title: string; intro: string };
  /** Master City — Waarom bedrijven voor De Palletman kiezen. */
  whyChooseUs?: ContentSection;
  /** Master City — Doelgroepen / sectoren. */
  targetIndustries?: ContentSection;
  /** Master City — Palletformaten en afmetingen. */
  palletFormats?: ContentSection;
  /** Master City — Kwaliteitsuitleg A/B of 1e/2e keus. */
  qualities?: ContentSection;
  /** Master City — HT-export uitgebreid. */
  exportDetail?: ContentSection;
  /** Master City — Review-placeholders. */
  reviews?: ContentSection;
  /** Master City — Proces-sectie metadata. */
  processMeta?: { eyebrow: string; title: string; intro: string };
  /** Master City — Extra CTA onderaan. */
  secondaryCta?: {
    title: string;
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
}

/**
 * City Content Master — centrale datastructuur per stadspagina.
 * Alle verplichte velden worden bij build gevalideerd via validateCityContentMaster().
 */
export interface CityContentMaster {
  cityName: string;
  provinceName: string;
  provinceSlug: string;
  slug: string;
  path: string;

  canonicalUrl?: string;
  metaTitle: string;
  metaDescription: string;

  h1: string;
  heroSubtitle: string;
  heroEyebrow?: string;

  introduction: CityTextBlock;
  cityDescription: string;
  localEconomy: string;

  industrialAreas: ContentSection;
  surroundingPlaces: ContentSection;

  palletServices: CityPalletServices;
  palletTypes: ContentSection;

  transportText: ContentSection;
  qualityText: string;
  exportText: string;

  processSteps: CityProcessStep[];
  faq: CityFaqSection;

  ctaTitle: string;
  ctaText: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;

  imageFilename: string;
  internalLinks: CityInternalLink[];

  /** Premium pSEO-secties — volledig unieke content per stad. */
  extended?: CityPageExtended;

  openGraph?: {
    title?: string;
    description?: string;
  };
  schema?: "auto" | Record<string, unknown>;
}

export type CityTemplatePage = CityContentMaster;

/** Velden die verplicht zijn en niet leeg mogen zijn. */
export const REQUIRED_CITY_STRING_FIELDS = [
  "cityName",
  "provinceName",
  "provinceSlug",
  "slug",
  "path",
  "metaTitle",
  "metaDescription",
  "h1",
  "heroSubtitle",
  "cityDescription",
  "localEconomy",
  "qualityText",
  "exportText",
  "ctaTitle",
  "ctaText",
  "imageFilename",
] as const satisfies ReadonlyArray<keyof CityContentMaster>;

export const REQUIRED_CITY_OBJECT_FIELDS = [
  "introduction",
  "industrialAreas",
  "surroundingPlaces",
  "palletServices",
  "palletTypes",
  "transportText",
  "faq",
] as const satisfies ReadonlyArray<keyof CityContentMaster>;

export const REQUIRED_CITY_ARRAY_FIELDS = [
  "processSteps",
  "internalLinks",
] as const satisfies ReadonlyArray<keyof CityContentMaster>;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function validateTextBlock(block: unknown, fieldPath: string): void {
  if (!block || typeof block !== "object") {
    throw new Error(`City Content Master: ${fieldPath} ontbreekt of is ongeldig.`);
  }
  const { title, text } = block as CityTextBlock;
  if (!isNonEmptyString(title) || !isNonEmptyString(text)) {
    throw new Error(`City Content Master: ${fieldPath}.title en ${fieldPath}.text zijn verplicht.`);
  }
}

function validateContentSection(section: unknown, fieldPath: string): void {
  if (!section || typeof section !== "object") {
    throw new Error(`City Content Master: ${fieldPath} ontbreekt of is ongeldig.`);
  }
  const { eyebrow, title, intro, items } = section as ContentSection;
  if (!isNonEmptyString(eyebrow) || !isNonEmptyString(title) || !isNonEmptyString(intro)) {
    throw new Error(`City Content Master: ${fieldPath} vereist eyebrow, title en intro.`);
  }
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error(`City Content Master: ${fieldPath}.items moet minimaal één item bevatten.`);
  }
  items.forEach((item, index) => {
    if (!isNonEmptyString(item.title) || !isNonEmptyString(item.text)) {
      throw new Error(`City Content Master: ${fieldPath}.items[${index}] vereist title en text.`);
    }
  });
}

export function validateCityContentMaster(page: CityContentMaster): void {
  for (const field of REQUIRED_CITY_STRING_FIELDS) {
    if (!isNonEmptyString(page[field])) {
      throw new Error(`City Content Master: verplicht veld "${field}" ontbreekt of is leeg.`);
    }
  }

  validateTextBlock(page.introduction, "introduction");
  validateContentSection(page.industrialAreas, "industrialAreas");
  validateContentSection(page.surroundingPlaces, "surroundingPlaces");
  validateContentSection(page.palletTypes, "palletTypes");
  validateContentSection(page.transportText, "transportText");

  validateTextBlock(page.palletServices.buy, "palletServices.buy");
  validateTextBlock(page.palletServices.sell, "palletServices.sell");

  if (!page.faq || !isNonEmptyString(page.faq.title) || !Array.isArray(page.faq.items)) {
    throw new Error("City Content Master: faq vereist title en items.");
  }
  if (page.faq.items.length === 0) {
    throw new Error("City Content Master: faq.items moet minimaal één vraag bevatten.");
  }

  if (!Array.isArray(page.processSteps) || page.processSteps.length === 0) {
    throw new Error("City Content Master: processSteps moet minimaal één stap bevatten.");
  }

  if (!Array.isArray(page.internalLinks) || page.internalLinks.length === 0) {
    throw new Error("City Content Master: internalLinks moet minimaal één link bevatten.");
  }

  page.internalLinks.forEach((link, index) => {
    if (!isNonEmptyString(link.label) || !isNonEmptyString(link.href)) {
      throw new Error(`City Content Master: internalLinks[${index}] vereist label en href.`);
    }
  });

  const expectedPath = `/${page.provinceSlug}/pallets-${page.slug}`;
  if (page.path !== expectedPath) {
    throw new Error(
      `City Content Master: path "${page.path}" komt niet overeen met verwacht patroon "${expectedPath}".`,
    );
  }
}

export function defineCityPage(page: CityContentMaster): CityContentMaster {
  validateCityContentMaster(page);
  return page;
}
