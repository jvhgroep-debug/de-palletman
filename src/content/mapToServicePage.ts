import type { BreadcrumbItem, ContentMasterPage, InternalLinkItem, ServiceExtendedSections } from "./types";

/** Intern view-model voor ServicePageTemplate — afgeleid van Content Master. */
export interface ServicePageViewModel {
  path: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    imageFilename: string;
    imageAlt: string;
  };
  intro: ContentMasterPage["intro"];
  sectionTypes: ContentMasterPage["seoText"]["types"] & { id: string };
  sectionQualities: ContentMasterPage["seoText"]["qualities"] & { id: string };
  sectionBenefits: ContentMasterPage["usps"] & { id: string };
  faq: ContentMasterPage["faq"] & { id: string };
  cta: ContentMasterPage["cta"];
  extended?: ServiceExtendedSections;
  breadcrumbs?: BreadcrumbItem[];
  internalLinks?: InternalLinkItem[];
}

const SECTION_IDS = {
  types: "pallettypes-heading",
  qualities: "kwaliteiten-heading",
  benefits: "voordelen-heading",
  faq: "faq-heading",
} as const;

export function mapContentMasterToServicePage(page: ContentMasterPage): ServicePageViewModel {
  return {
    path: page.path,
    hero: {
      eyebrow: page.title,
      title: page.h1,
      subtitle: page.heroSubtitle,
      imageFilename: page.imageFilename,
      imageAlt: page.imageAlt,
    },
    intro: page.intro,
    sectionTypes: {
      id: SECTION_IDS.types,
      columns: 3,
      ...page.seoText.types,
    },
    sectionQualities: {
      id: SECTION_IDS.qualities,
      variant: "white",
      columns: 3,
      ...page.seoText.qualities,
    },
    sectionBenefits: {
      id: SECTION_IDS.benefits,
      columns: 2,
      ...page.usps,
    },
    faq: {
      id: SECTION_IDS.faq,
      variant: "white",
      ...page.faq,
    },
    cta: page.cta,
    extended: page.extended,
    breadcrumbs: page.breadcrumbs,
    internalLinks: page.internalLinks,
  };
}
