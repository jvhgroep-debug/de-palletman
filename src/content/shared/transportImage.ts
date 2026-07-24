/** Centrale transportafbeelding voor alle pagina's met transport-sectie. */
export const TRANSPORT_IMAGE_FILENAME = "transport-de-palletman.png";
export const TRANSPORT_IMAGE_PATH = `/images/${TRANSPORT_IMAGE_FILENAME}`;
export const TRANSPORT_IMAGE_ALT =
  "Transport van gebruikte pallets door De Palletman met eigen Mercedes vrachtwagens.";

export function getTransportImageAbsoluteUrl(baseUrl = "https://www.depalletman.nl"): string {
  return `${baseUrl}${TRANSPORT_IMAGE_PATH}`;
}
