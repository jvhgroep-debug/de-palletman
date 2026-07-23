/** Deterministische context voor één stad — input voor de Local Content Engine. */
export interface LocalCityInput {
  cityName: string;
  slug: string;
  provinceSlug: string;
  provinceName: string;
  /** Alle stadsnamen in dezelfde provincie (voor omliggende plaatsen). */
  allCitiesInProvince: string[];
}

/** Geo- en logistieke context per stad. */
export interface LocalGeoContext {
  industrialAreas: string[];
  surroundingPlaces: string[];
  roads: string[];
  ports: string[];
  distributionCenters: string[];
  logisticsHotspots: string[];
  economySectors: string[];
  regionLabel: string;
  transportContext: string;
  palletUsageContext: string;
}

/** Unieke sectietitels (H2-niveau) per pagina. */
export interface LocalSectionTitles {
  introTitle: string;
  introEyebrow: string;
  buyTitle: string;
  buyEyebrow: string;
  sellTitle: string;
  sellEyebrow: string;
  palletTypesTitle: string;
  palletTypesEyebrow: string;
  transportTitle: string;
  transportEyebrow: string;
  industrialTitle: string;
  industrialEyebrow: string;
  industrialIntro: string;
  surroundingTitle: string;
  surroundingEyebrow: string;
  surroundingIntro: string;
  faqTitle: string;
  faqEyebrow: string;
  faqIntro: string;
  processEyebrow: string;
  processTitle: string;
}

/** Volledige output van de Local Content Engine — klaar voor Master CSV of mapping. */
export interface LocalCityContent {
  heroTitle: string;
  heroSubtitle: string;
  intro: string;
  cityDescription: string;
  localEconomy: string;
  industrialAreas: string[];
  surroundingPlaces: string[];
  services: string;
  palletTypes: string;
  transport: string;
  quality: string;
  export: string;
  ctaTitle: string;
  ctaText: string;
  faq: Array<{ question: string; answer: string }>;
  metaTitle: string;
  metaDescription: string;
  sectionTitles: LocalSectionTitles;
  openingParagraph: string;
  closingParagraph: string;
  internalLinkSlugs: Array<{ name: string; slug: string; provinceSlug: string }>;
}

/** Fragment met placeholders: {city}, {province}, {region}, {areas}, {roads}, {places}, {sectors}, {port}, {hotspot} */
export type ContentFragment = string;

export interface VariationAnalysis {
  cityCount: number;
  theoreticalCombinations: number;
  duplicateGroups: {
    intro: number;
    cityDescription: number;
    localEconomy: number;
    services: number;
    heroTitle: number;
    metaTitle: number;
    metaDescription: number;
    faqSignature: number;
    fullBodyHash: number;
    ctaTitle: number;
  };
  citiesWithDuplicates: {
    intro: number;
    fullBody: number;
    faq: number;
  };
  uniqueCounts: {
    intro: number;
    heroTitle: number;
    metaTitle: number;
    metaDescription: number;
    faqSignature: number;
    fullBodyHash: number;
  };
  duplicateContentWarningsResolved: boolean;
  internalLinksCorrect: boolean;
  maxInternalCityLinks: number;
}
