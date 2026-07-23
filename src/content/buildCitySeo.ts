import { getCanonicalUrl, getDefaultOgImageUrl, SITE_CONFIG } from "./siteConfig";
import type { CityContentMaster } from "./cityTypes";
import type { ResolvedPageSeo } from "./buildSeo";

export function buildCityPageSchema(page: CityContentMaster, canonical: string) {
  if (page.schema && page.schema !== "auto") {
    return page.schema;
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

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_CONFIG.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.provinceName,
        item: `${SITE_CONFIG.url}/${page.provinceSlug}/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Pallets ${page.cityName}`,
        item: canonical,
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.metaTitle,
        description: page.metaDescription,
        url: canonical,
      },
      {
        "@type": "Service",
        name: `Pallets kopen en verkopen in ${page.cityName}`,
        provider: {
          "@type": "LocalBusiness",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
        areaServed: {
          "@type": "City",
          name: page.cityName,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: page.provinceName,
          },
        },
      },
      breadcrumbSchema,
      faqSchema,
    ],
  };
}

export function resolveCityPageSeo(page: CityContentMaster): ResolvedPageSeo {
  const canonical = page.canonicalUrl ?? getCanonicalUrl(page.path);
  const ogTitle = page.openGraph?.title ?? page.metaTitle;
  const ogDescription = page.openGraph?.description ?? page.metaDescription;
  const ogImage = getDefaultOgImageUrl();

  return {
    metaTitle: page.metaTitle,
    metaDescription: page.metaDescription,
    canonical,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      image: ogImage,
      url: canonical,
      type: "website",
      locale: SITE_CONFIG.locale,
      siteName: SITE_CONFIG.name,
    },
    schema: buildCityPageSchema(page, canonical),
  };
}
