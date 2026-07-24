import { getCanonicalUrl, SITE_CONFIG } from "./siteConfig";
import { getHeroImageAbsoluteUrl } from "./shared/heroImage";
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

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      name: page.seo.metaTitle,
      description: page.seo.metaDescription,
      url: canonical,
    },
    {
      "@type": "Service",
      name: page.h1,
      description: page.seo.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      areaServed: [
        "Noord-Brabant",
        "Zuid-Holland",
        "Zeeland",
        "Limburg",
        "Utrecht",
        "Gelderland",
      ],
    },
    faqSchema,
  ];

  if (page.breadcrumbs && page.breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: page.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        ...(item.href ? { item: `${SITE_CONFIG.url}${item.href}` } : { item: canonical }),
      })),
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function resolvePageSeo(page: ContentMasterPage): ResolvedPageSeo {
  const canonical = page.seo.canonical ?? getCanonicalUrl(page.path);
  const ogTitle = page.seo.openGraph?.title ?? page.seo.metaTitle;
  const ogDescription = page.seo.openGraph?.description ?? page.seo.metaDescription;
  const ogImage = getHeroImageAbsoluteUrl(SITE_CONFIG.url);

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
