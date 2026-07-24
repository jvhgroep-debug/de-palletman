/** Centrale CTA-afbeelding voor alle pagina's met CTA-sectie. */
export const CTA_IMAGE_FILENAME = "cta-offerte-magazijn-pallets.png";
export const CTA_IMAGE_PATH = `/images/${CTA_IMAGE_FILENAME}`;
export const CTA_IMAGE_ALT =
  "Magazijn met pallets en kartonnen dozen — offerte aanvragen bij De Palletman";

export function getCtaImageAbsoluteUrl(baseUrl = "https://www.depalletman.nl"): string {
  return `${baseUrl}${CTA_IMAGE_PATH}`;
}
