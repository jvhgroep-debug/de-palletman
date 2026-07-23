/**
 * Input-record voor de Bulk City Generator.
 * Minimaal vereist: cityName + provinceName (of provinceSlug).
 *
 * CSV-kolommen (komma-gescheiden, optionele kopregel):
 * cityName, provinceName, provinceSlug, slug, regionLabel, cityDescription,
 * localEconomy, industrialAreas, surroundingPlaces, sectors
 *
 * Meervoudige waarden in CSV: pipe-gescheiden (|), bijv. "Hazeldonk|Minervum"
 *
 * JSON: array van objecten met dezelfde velden.
 */
export interface CityInputRecord {
  /** Weergavenaam van de stad, bijv. "Breda". */
  cityName: string;

  /** Provincienaam, bijv. "Noord-Brabant". */
  provinceName: string;

  /** Optioneel — wordt afgeleid uit provinceName indien leeg. */
  provinceSlug?: string;

  /** Optioneel — wordt afgeleid uit cityName indien leeg. */
  slug?: string;

  /** Regionale context, bijv. "West-Brabant". */
  regionLabel?: string;

  /** Korte beschrijving van de stad (unieke content). */
  cityDescription?: string;

  /** Lokale economie en sectoren (unieke content). */
  localEconomy?: string;

  /** Bedrijventerreinen, bijv. ["Hazeldonk", "Minervum"]. */
  industrialAreas?: string[];

  /** Omliggende plaatsen, bijv. ["Etten-Leur", "Oosterhout"]. */
  surroundingPlaces?: string[];

  /** Relevante sectoren, bijv. ["logistiek", "productie", "retail"]. */
  sectors?: string[];

  /** SEO-override: meta title. */
  metaTitle?: string;

  /** SEO-override: meta description. */
  metaDescription?: string;

  /** SEO-override: H1. */
  h1?: string;

  /** SEO-override: hero subtitel. */
  heroSubtitle?: string;
}

export interface CityGeneratorOptions {
  /** Sla validatie over (niet aanbevolen). */
  skipValidation?: boolean;
}

import type { CityContentMaster } from "../cityTypes";

export interface BulkGenerateResult {
  pages: CityContentMaster[];
  skipped: Array<{ cityName: string; reason: string }>;
  durationMs: number;
}

/** Verplichte CSV/JSON-kolommen. */
export const REQUIRED_INPUT_FIELDS = ["cityName", "provinceName"] as const;

/** Ondersteunde CSV-kolommen (inclusief optionele). */
export const CSV_COLUMN_MAP = {
  cityName: "cityName",
  provinceName: "provinceName",
  provinceSlug: "provinceSlug",
  slug: "slug",
  regionLabel: "regionLabel",
  cityDescription: "cityDescription",
  localEconomy: "localEconomy",
  industrialAreas: "industrialAreas",
  surroundingPlaces: "surroundingPlaces",
  sectors: "sectors",
  metaTitle: "metaTitle",
  metaDescription: "metaDescription",
  h1: "h1",
  heroSubtitle: "heroSubtitle",
} as const;

export type CsvColumnKey = keyof typeof CSV_COLUMN_MAP;
