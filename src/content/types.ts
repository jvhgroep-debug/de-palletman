/** Herbruikbare contentblokken voor de Content Master. */

export interface ContentItem {
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

export interface ContentFaqItem {
  question: string;
  answer: string;
}

export interface ContentCta {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export interface ContentSection {
  eyebrow: string;
  title: string;
  intro: string;
  items: ContentItem[];
  columns?: 2 | 3;
  variant?: "gray" | "white";
}

export interface ContentIntro {
  eyebrow: string;
  title: string;
  text: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface InternalLinkItem {
  label: string;
  href: string;
}

import type { EuropalletQualityGrade } from "./shared/europalletQuality";

export interface ServiceImageCard {
  quality: EuropalletQualityGrade;
  title: string;
  text: string;
}

export interface ServiceCtaBanner {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  imageFilename: string;
  imageAlt: string;
}

export interface ServiceTransportSection extends ContentSection {
  imageFilename: string;
  imageAlt: string;
}

export interface ServiceConversion {
  title: string;
  text: string;
}

export interface ServiceQuoteForm {
  title: string;
  intro: string;
}

/** Optionele extra secties voor volledig uitgewerkte dienstenpagina's. */
export interface ServiceExtendedSections {
  whenToChoose?: ContentSection;
  specifications?: ContentSection;
  dimensions?: ContentSection;
  delivery?: ContentSection;
  pickup?: ContentSection;
  largeBatches?: ContentIntro;
  smallBatches?: ContentIntro;
  trust?: ContentSection;
  practical?: ContentSection;
  europalletInfo?: ContentSection & { imageCards: ServiceImageCard[] };
  transport?: ServiceTransportSection;
  conversion?: ServiceConversion;
  ctaBanner?: ServiceCtaBanner;
  quoteForm?: ServiceQuoteForm;
}

export interface ContentOpenGraph {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export interface ContentSeo {
  metaTitle: string;
  metaDescription: string;
  /** Laat leeg voor automatische canonical op basis van path. */
  canonical?: string;
  openGraph?: ContentOpenGraph;
  /** 'auto' genereert WebPage + FAQPage schema. Of geef een custom object. */
  schema?: "auto" | Record<string, unknown>;
}

/**
 * Content Master — centrale datastructuur per pagina.
 * Alle teksten en SEO worden hier beheerd; de template rendert automatisch.
 *
 * Uitbreidbaar voor toekomstige pagina's (provincie, stad, etc.) via `template`.
 */
export interface ContentMasterPage {
  /** URL-pad, bijv. "/pallets-kopen" of "/pallets-kopen/eindhoven" */
  path: string;

  /** Template-type — bepaalt welke layout gebruikt wordt. */
  template: "service" | "location";

  /** Paginatitel (hero eyebrow / korte titel). */
  title: string;

  /** H1 in de hero. */
  h1: string;

  /** Hero subtitel (onder H1). */
  heroSubtitle: string;

  /** Placeholder-bestandsnaam voor hero-afbeelding. */
  imageFilename: string;

  /** SEO alt-tekst voor hero-afbeelding. */
  imageAlt: string;

  /** Introductiesectie. */
  intro: ContentIntro;

  /**
   * SEO-tekst — twee contentsecties (soorten + kwaliteiten).
   * Worden gerenderd als PageContent-blokken in de template.
   */
  seoText: {
    types: ContentSection;
    qualities: ContentSection;
  };

  /** USP's / voordelen — derde contentsectie. */
  usps: ContentSection;

  /** Veelgestelde vragen. */
  faq: ContentSection & { items: ContentFaqItem[] };

  /** Call-to-action. */
  cta: ContentCta;

  /** Optionele extra secties (dienstenpagina's). */
  extended?: ServiceExtendedSections;

  /** Optionele broodkruimels — ook gebruikt voor BreadcrumbList schema. */
  breadcrumbs?: BreadcrumbItem[];

  /** Optionele interne links onderaan de pagina. */
  internalLinks?: InternalLinkItem[];

  /** SEO metadata. */
  seo: ContentSeo;
}

export type ServiceTemplatePage = ContentMasterPage & { template: "service" };

export type LocationTemplatePage = ContentMasterPage & {
  template: "location";
  location: {
    province?: string;
    city?: string;
  };
};
