import type { ProvinceContentMaster } from "./provinceTypes";

/** Intern view-model voor ProvincePageTemplate — afgeleid van Province Content Master. */
export interface ProvincePageViewModel {
  path: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    imageFilename: string;
  };
  intro: ProvinceContentMaster["intro"];
  whyPalletman: ProvinceContentMaster["whyPalletman"] & { id: string };
  services: ProvinceContentMaster["services"] & { id: string };
  palletTypes: ProvinceContentMaster["palletTypes"] & { id: string };
  pickupDelivery: ProvinceContentMaster["pickupDelivery"] & { id: string };
  workArea: ProvinceContentMaster["workArea"] & { id: string };
  faq: ProvinceContentMaster["faq"] & { id: string };
  cta: ProvinceContentMaster["cta"];
}

const SECTION_IDS = {
  whyPalletman: "waarom-palletman-heading",
  services: "diensten-provincie-heading",
  palletTypes: "palletsoorten-heading",
  pickupDelivery: "ophalen-bezorgen-heading",
  workArea: "werkgebied-provincie-heading",
  faq: "faq-heading",
} as const;

export function mapContentMasterToProvincePage(
  page: ProvinceContentMaster,
): ProvincePageViewModel {
  return {
    path: page.path,
    hero: {
      eyebrow: page.title,
      title: page.h1,
      subtitle: page.heroSubtitle,
      imageFilename: page.imageFilename,
    },
    intro: page.intro,
    whyPalletman: {
      id: SECTION_IDS.whyPalletman,
      columns: 2,
      ...page.whyPalletman,
    },
    services: {
      id: SECTION_IDS.services,
      variant: "white",
      columns: 2,
      ...page.services,
    },
    palletTypes: {
      id: SECTION_IDS.palletTypes,
      columns: 3,
      ...page.palletTypes,
    },
    pickupDelivery: {
      id: SECTION_IDS.pickupDelivery,
      variant: "white",
      columns: 2,
      ...page.pickupDelivery,
    },
    workArea: {
      id: SECTION_IDS.workArea,
      columns: 3,
      ...page.workArea,
    },
    faq: {
      id: SECTION_IDS.faq,
      variant: "white",
      ...page.faq,
    },
    cta: page.cta,
  };
}
