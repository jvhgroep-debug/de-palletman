import type { CityContentMaster } from "./cityTypes";

export interface CityPageViewModel {
  path: string;
  breadcrumbs: Array<{ label: string; href?: string }>;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    imageFilename: string;
  };
  intro: {
    eyebrow?: string;
    title: string;
    text: string;
  };
  palletsBuy: CityContentMaster["palletServices"]["buy"] & { id: string };
  palletsSell: CityContentMaster["palletServices"]["sell"] & { id: string };
  palletTypes: CityContentMaster["palletTypes"] & { id: string; intro: string };
  transport: CityContentMaster["transportText"] & { id: string };
  industrialAreas: CityContentMaster["industrialAreas"] & { id: string };
  surroundingPlaces: CityContentMaster["surroundingPlaces"] & { id: string };
  processSteps: CityContentMaster["processSteps"];
  faq: CityContentMaster["faq"] & { id: string };
  cta: {
    title: string;
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  internalLinks: CityContentMaster["internalLinks"];
}

const SECTION_IDS = {
  palletsBuy: "pallets-kopen-heading",
  palletsSell: "pallets-verkopen-heading",
  palletTypes: "palletsoorten-heading",
  transport: "ophalen-bezorgen-heading",
  industrialAreas: "bedrijventerreinen-heading",
  surroundingPlaces: "omliggende-plaatsen-heading",
  faq: "faq-heading",
} as const;

export function mapContentMasterToCityPage(page: CityContentMaster): CityPageViewModel {
  const introText = [page.introduction.text, page.cityDescription, page.localEconomy]
    .filter(Boolean)
    .join("\n\n");

  const palletTypesIntro = [page.palletTypes.intro, page.qualityText, page.exportText]
    .filter(Boolean)
    .join(" ");

  return {
    path: page.path,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: page.provinceName, href: `/${page.provinceSlug}` },
      { label: page.cityName },
    ],
    hero: {
      eyebrow: page.heroEyebrow ?? page.cityName,
      title: page.h1,
      subtitle: page.heroSubtitle,
      imageFilename: page.imageFilename,
    },
    intro: {
      eyebrow: page.introduction.eyebrow,
      title: page.introduction.title,
      text: introText,
    },
    palletsBuy: {
      id: SECTION_IDS.palletsBuy,
      ...page.palletServices.buy,
    },
    palletsSell: {
      id: SECTION_IDS.palletsSell,
      ...page.palletServices.sell,
    },
    palletTypes: {
      id: SECTION_IDS.palletTypes,
      ...page.palletTypes,
      intro: palletTypesIntro,
    },
    transport: {
      id: SECTION_IDS.transport,
      ...page.transportText,
    },
    industrialAreas: {
      id: SECTION_IDS.industrialAreas,
      ...page.industrialAreas,
    },
    surroundingPlaces: {
      id: SECTION_IDS.surroundingPlaces,
      ...page.surroundingPlaces,
    },
    processSteps: page.processSteps,
    faq: {
      id: SECTION_IDS.faq,
      ...page.faq,
    },
    cta: {
      title: page.ctaTitle,
      text: page.ctaText,
      primaryLabel: page.ctaPrimaryLabel ?? "Neem contact op",
      primaryHref: page.ctaPrimaryHref ?? "/contact",
      secondaryLabel: page.ctaSecondaryLabel,
      secondaryHref: page.ctaSecondaryHref,
    },
    internalLinks: page.internalLinks,
  };
}
