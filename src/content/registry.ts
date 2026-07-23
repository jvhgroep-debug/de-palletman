import { palletsKopen } from "./pages/pallets-kopen";
import { palletsVerkopen } from "./pages/pallets-verkopen";
import { europallets } from "./pages/europallets";
import { blokpallets } from "./pages/blokpallets";
import { wegwerppallets } from "./pages/wegwerppallets";
import type { ContentMasterPage } from "./types";

/** Centraal register van alle dienstenpagina's. */
export const servicePages = {
  "pallets-kopen": palletsKopen,
  "pallets-verkopen": palletsVerkopen,
  europallets,
  blokpallets,
  wegwerppallets,
} satisfies Record<string, ContentMasterPage>;

export type ServicePageSlug = keyof typeof servicePages;

export function getServicePage(slug: ServicePageSlug): ContentMasterPage {
  return servicePages[slug];
}
