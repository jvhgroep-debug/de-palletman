import type {
  ContentCta,
  ContentFaqItem,
  ContentIntro,
  ContentSection,
  ContentSeo,
} from "./types";

/**
 * Province Content Master — centrale datastructuur per provinciepagina.
 * Elke provincie heeft alleen een eigen contentbestand nodig;
 * ProvincePageTemplate rendert alle secties automatisch.
 */
export interface ProvinceContentMaster {
  /** URL-pad, bijv. "/noord-brabant" of "/noord-brabant/eindhoven" (stad, later). */
  path: string;

  template: "province";

  /** URL-slug van de provincie, bijv. "noord-brabant". */
  slug: string;

  province: {
    name: string;
    slug: string;
  };

  /** Paginatitel (hero eyebrow). */
  title: string;

  /** H1 in de hero. */
  h1: string;

  /** Hero subtitel. */
  heroSubtitle: string;

  /** Placeholder-bestandsnaam voor hero-afbeelding. */
  imageFilename: string;

  /** Introductiesectie. */
  intro: ContentIntro;

  /** Waarom De Palletman in deze provincie. */
  whyPalletman: ContentSection;

  /** Diensten in de provincie (met links naar dienstenpagina's). */
  services: ContentSection;

  /** Veel voorkomende palletsoorten in de regio. */
  palletTypes: ContentSection;

  /** Ophalen en bezorgen — uitleg per provincie. */
  pickupDelivery: ContentSection;

  /** Werkgebied binnen de provincie (steden/regio's). */
  workArea: ContentSection;

  /** Veelgestelde vragen. */
  faq: ContentSection & { items: ContentFaqItem[] };

  /** Call-to-action. */
  cta: ContentCta;

  /** SEO metadata. */
  seo: ContentSeo;
}

export type ProvinceTemplatePage = ProvinceContentMaster;
