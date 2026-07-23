/** Goedgekeurde provincies — slug ↔ naam. */
export const PROVINCE_SLUG_TO_NAME: Record<string, string> = {
  "noord-brabant": "Noord-Brabant",
  "zuid-holland": "Zuid-Holland",
  zeeland: "Zeeland",
  limburg: "Limburg",
  utrecht: "Utrecht",
  gelderland: "Gelderland",
};

export const PROVINCE_NAME_TO_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(PROVINCE_SLUG_TO_NAME).map(([slug, name]) => [name.toLowerCase(), slug]),
);

export const APPROVED_PROVINCE_SLUGS = Object.keys(PROVINCE_SLUG_TO_NAME);

export function resolveProvinceSlug(provinceName: string, provinceSlug?: string): string {
  if (provinceSlug?.trim()) {
    const normalized = provinceSlug.trim().toLowerCase();
    if (!PROVINCE_SLUG_TO_NAME[normalized]) {
      throw new Error(
        `Onbekende provinceSlug "${provinceSlug}". Toegestaan: ${APPROVED_PROVINCE_SLUGS.join(", ")}`,
      );
    }
    return normalized;
  }

  const fromName = PROVINCE_NAME_TO_SLUG[provinceName.trim().toLowerCase()];
  if (!fromName) {
    throw new Error(
      `Onbekende provincie "${provinceName}". Toegestaan: ${Object.values(PROVINCE_SLUG_TO_NAME).join(", ")}`,
    );
  }
  return fromName;
}

export function resolveProvinceName(provinceSlug: string, provinceName?: string): string {
  const canonical = PROVINCE_SLUG_TO_NAME[provinceSlug];
  if (!canonical) {
    throw new Error(`Onbekende provinceSlug "${provinceSlug}".`);
  }
  return provinceName?.trim() || canonical;
}
