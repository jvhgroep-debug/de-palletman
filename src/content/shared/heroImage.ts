/** Centrale hero-afbeelding voor alle pagina's. */
export const HERO_IMAGE_FILENAME = "hero-de-palletman.png";
export const HERO_IMAGE_PATH = `/images/${HERO_IMAGE_FILENAME}`;
export const HERO_IMAGE_ALT =
  "Inkoop en verkoop van gebruikte pallets door De Palletman";

export function getHeroImageAbsoluteUrl(baseUrl = "https://www.depalletman.nl"): string {
  return `${baseUrl}${HERO_IMAGE_PATH}`;
}
