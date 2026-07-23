import { getCanonicalUrl, getDefaultOgImageUrl, SITE_CONFIG } from "./siteConfig";
import type { ContentMasterPage } from "./types";

export interface ResolvedPageSeo {
  metaTitle: string;
  metaDescription: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    image: string;
    url: string;
    type: string;
    locale: string;
    siteName: string;
  };
  schema: Record<string, unknown>;
}

export function buildPageSchema(page: ContentMasterPage, canonical: string) {
  if (page.seo.schema && page.seo.schema !== "auto") {
    return page.seo.schema;
  }

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: page.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.seo.metaTitle,
        description: page.seo.metaDescription,
        url: canonical,
      },
      faqSchema,
    ],
  };
}

export function resolvePageSeo(page: ContentMasterPage): ResolvedPageSeo {
  const canonical = page.seo.canonical ?? getCanonicalUrl(page.path);
  const ogTitle = page.seo.openGraph?.title ?? page.seo.metaTitle;
  const ogDescription = page.seo.openGraph?.description ?? page.seo.metaDescription;
  const ogImage = page.seo.openGraph?.image ?? getDefaultOgImageUrl();

  return {
    metaTitle: page.seo.metaTitle,
    metaDescription: page.seo.metaDescription,
    canonical,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      image: ogImage,
      url: canonical,
      type: page.seo.openGraph?.type ?? "website",
      locale: SITE_CONFIG.locale,
      siteName: SITE_CONFIG.name,
    },
    schema: buildPageSchema(page, canonical),
  };
}
