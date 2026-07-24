import { getCanonicalUrl, SITE_CONFIG } from "./siteConfig";
import { getHeroImageAbsoluteUrl } from "./shared/heroImage";
import type { ProvinceContentMaster } from "./provinceTypes";
import type { ResolvedPageSeo } from "./buildSeo";

export function buildProvincePageSchema(page: ProvinceContentMaster, canonical: string) {
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
      {
        "@type": "Service",
        name: `Pallets kopen en verkopen in ${page.province.name}`,
        provider: {
          "@type": "LocalBusiness",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: page.province.name,
        },
      },
      faqSchema,
    ],
  };
}

export function resolveProvincePageSeo(page: ProvinceContentMaster): ResolvedPageSeo {
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
    schema: buildProvincePageSchema(page, canonical),
  };
}
