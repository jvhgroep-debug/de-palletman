import type { ServicePageContent } from "../types/servicePage";

const SITE_URL = "https://de-palletman.pages.dev";

export function buildServicePageSchema(content: ServicePageContent) {
  const pageUrl = `${SITE_URL}${content.path}/`;

  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: content.faq.items.slice(0, 3).map((item) => ({
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
        name: content.seo.title,
        description: content.seo.description,
        url: pageUrl,
      },
      faqSchema,
    ],
  };
}

export function getServicePageUrl(path: string) {
  return `${SITE_URL}${path}/`;
}
