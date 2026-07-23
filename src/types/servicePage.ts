export interface ServicePageItem {
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

export interface ServicePageFaqItem {
  question: string;
  answer: string;
}

export interface ServicePageSection {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  columns?: 2 | 3;
  variant?: "gray" | "white";
  items: ServicePageItem[];
}

export interface ServicePageContent {
  path: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    imageFilename: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    text: string;
  };
  sectionTypes: ServicePageSection;
  sectionQualities: ServicePageSection;
  sectionBenefits: ServicePageSection;
  faq: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    variant?: "gray" | "white";
    items: ServicePageFaqItem[];
  };
  cta: {
    title: string;
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
}
