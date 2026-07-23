/**
 * Maakt een URL-slug van een stadsnaam.
 * Lowercase, geen spaties, geen bijzondere tekens.
 */
export function slugifyCityName(cityName: string): string {
  return cityName
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function buildCityPath(provinceSlug: string, citySlug: string): string {
  return `/${provinceSlug}/pallets-${citySlug}`;
}

export function buildCityImageFilename(citySlug: string): string {
  return `pallets-${citySlug}.webp`;
}

export function parsePipeList(value: string | undefined): string[] {
  if (!value?.trim()) return [];
  return value
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function formatList(items: string[], conjunction = "en"): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} ${conjunction} ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} ${conjunction} ${items[items.length - 1]}`;
}
