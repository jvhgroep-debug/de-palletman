/** Globale site-instellingen voor canonical, Open Graph en schema. */
export const SITE_CONFIG = {
  url: "https://www.depalletman.nl",
  name: "De Palletman",
  locale: "nl_NL",
  defaultOgImage: "/favicon.svg",
} as const;

export function getCanonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_CONFIG.url}${normalized}${normalized.endsWith("/") ? "" : "/"}`;
}

export function getDefaultOgImageUrl(): string {
  return `${SITE_CONFIG.url}${SITE_CONFIG.defaultOgImage}`;
}
