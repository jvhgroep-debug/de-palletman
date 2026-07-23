import type { LocalCityContent, LocalCityInput, LocalGeoContext, LocalSectionTitles } from "./types.ts";
import { createCityRng } from "./seed.ts";
import { resolveGeoContext, resolveInternalLinkTargets } from "./geoData.ts";
import {
  CTA_CLOSING_FRAGMENTS,
  CTA_TITLE_FRAGMENTS,
  CITY_DESCRIPTION_FRAGMENTS,
  EXPORT_FRAGMENTS,
  FAQ_ANSWER_TEMPLATES,
  FAQ_QUESTION_TEMPLATES,
  H1_FRAGMENTS,
  H2_BUY,
  H2_FAQ,
  H2_INDUSTRIAL,
  H2_INTRO,
  H2_PALLET_TYPES,
  H2_SELL,
  H2_SURROUNDING,
  H2_TRANSPORT,
  HERO_SUBTITLE_FRAGMENTS,
  INDUSTRIAL_INTRO_FRAGMENTS,
  INTRO_BODY_FRAGMENTS,
  LOCAL_ECONOMY_FRAGMENTS,
  META_DESC_FRAGMENTS,
  META_TITLE_FRAGMENTS,
  OPENING_FRAGMENTS,
  PALLET_TYPES_FRAGMENTS,
  QUALITY_FRAGMENTS,
  SERVICES_FRAGMENTS,
  SURROUNDING_INTRO_FRAGMENTS,
  SURROUNDING_ITEM_FRAGMENTS,
  INDUSTRIAL_ITEM_FRAGMENTS,
  SELL_BODY_FRAGMENTS,
  TRANSPORT_FRAGMENTS,
  fillFragment,
} from "./fragments.ts";

function formatList(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} en ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} en ${items[items.length - 1]}`;
}

function buildFragmentVars(input: LocalCityInput, geo: LocalGeoContext): Record<string, string> {
  return {
    city: input.cityName,
    province: input.provinceName,
    region: geo.regionLabel,
    areas: formatList(geo.industrialAreas),
    roads: formatList(geo.roads),
    places: formatList(geo.surroundingPlaces),
    sectors: formatList(geo.economySectors),
    port: geo.ports[0] ?? geo.distributionCenters[0] ?? geo.regionLabel,
    hotspot: geo.logisticsHotspots[0] ?? geo.industrialAreas[0] ?? input.cityName,
    dc: geo.distributionCenters[0] ?? geo.logisticsHotspots[0] ?? input.cityName,
    transport: geo.transportContext,
    palletUsage: geo.palletUsageContext,
  };
}

function composeSectionTitles(input: LocalCityInput, vars: Record<string, string>): LocalSectionTitles {
  const rng = createCityRng(input.slug, "h2");
  return {
    introEyebrow: fillFragment(rng.pick(["Lokaal in {city}", "Regio {city}", "Werkgebied {city}", "Service {city}"]), vars),
    introTitle: fillFragment(rng.pick(H2_INTRO), vars),
    buyEyebrow: rng.pick(["Voor bedrijven", "B2B", "Zakelijk", "Levering"]),
    buyTitle: fillFragment(rng.pick(H2_BUY), vars),
    sellEyebrow: rng.pick(["Inkoop", "Verkopen", "Ophalen", "Particulier & zakelijk"]),
    sellTitle: fillFragment(rng.pick(H2_SELL), vars),
    palletTypesEyebrow: rng.pick(["Assortiment", "Pallettypen", "Keuze", "Soorten"]),
    palletTypesTitle: fillFragment(rng.pick(H2_PALLET_TYPES), vars),
    transportEyebrow: rng.pick(["Logistiek", "Transport", "Ophalen & bezorgen", "Rijden"]),
    transportTitle: fillFragment(rng.pick(H2_TRANSPORT), vars),
    industrialEyebrow: rng.pick(["Bedrijventerreinen", "Terreinen", "Industrie", "Locaties"]),
    industrialTitle: fillFragment(rng.pick(H2_INDUSTRIAL), vars),
    industrialIntro: fillFragment(rng.pick(INDUSTRIAL_INTRO_FRAGMENTS), vars),
    surroundingEyebrow: rng.pick(["Regio", "Omgeving", "Buurt", "Werkgebied"]),
    surroundingTitle: fillFragment(rng.pick(H2_SURROUNDING), vars),
    surroundingIntro: fillFragment(rng.pick(SURROUNDING_INTRO_FRAGMENTS), vars),
    faqEyebrow: rng.pick(["Veelgestelde vragen", "FAQ", "Vragen", "Antwoorden"]),
    faqTitle: fillFragment(rng.pick(H2_FAQ), vars),
    faqIntro: fillFragment(
      rng.pick([
        "Antwoorden op veelgestelde vragen over onze diensten in {city} en omgeving.",
        "Praktische vragen over pallets in {city} — helder beantwoord.",
        "Wat bedrijven en particulieren in {city} ons vaak vragen.",
        "Alles wat u wilt weten over pallets in {city} en {region}.",
      ]),
      vars,
    ),
    processEyebrow: "Onze werkwijze",
    processTitle: rng.pick([
      "In vier stappen geregeld",
      "Zo werken wij samen",
      "Van vraag tot levering",
      "Onze aanpak in {city}".replace("{city}", input.cityName),
    ]),
  };
}

function composeFaqs(
  input: LocalCityInput,
  vars: Record<string, string>,
  geo: LocalGeoContext,
): Array<{ question: string; answer: string }> {
  const rng = createCityRng(input.slug, "faq");
  const questionPool = rng.shuffle(FAQ_QUESTION_TEMPLATES);
  const answerPool = rng.shuffle(FAQ_ANSWER_TEMPLATES);

  const faqs: Array<{ question: string; answer: string }> = [];
  const usedQuestions = new Set<string>();

  for (let i = 0; i < 3; i += 1) {
    let qTemplate = questionPool[i % questionPool.length];
    let attempts = 0;
    while (usedQuestions.has(qTemplate) && attempts < 20) {
      qTemplate = questionPool[(i + attempts + 1) % questionPool.length];
      attempts += 1;
    }
    usedQuestions.add(qTemplate);

    const answerVars = {
      ...vars,
      area: geo.industrialAreas[i % geo.industrialAreas.length] ?? input.cityName,
      place: geo.surroundingPlaces[i % geo.surroundingPlaces.length] ?? input.cityName,
    };

    faqs.push({
      question: fillFragment(qTemplate, answerVars),
      answer: fillFragment(answerPool[(i + rng.pickIndex(5)) % answerPool.length], answerVars),
    });
  }

  return faqs;
}

/** Stelt unieke lokale content samen voor één stad. */
export function composeLocalCityContent(input: LocalCityInput): LocalCityContent {
  const geo = resolveGeoContext(input);
  const vars = buildFragmentVars(input, geo);

  const rngIntro = createCityRng(input.slug, "intro");
  const rngMeta = createCityRng(input.slug, "meta");
  const rngCta = createCityRng(input.slug, "cta");

  const openingParagraph = fillFragment(rngIntro.pick(OPENING_FRAGMENTS), vars);
  const introBody = fillFragment(rngIntro.pick(INTRO_BODY_FRAGMENTS), vars);
  const intro = `${openingParagraph}\n\n${introBody}`;

  const sectionTitles = composeSectionTitles(input, vars);
  const faq = composeFaqs(input, vars, geo);

  return {
    heroTitle: fillFragment(createCityRng(input.slug, "h1").pick(H1_FRAGMENTS), vars),
    heroSubtitle: fillFragment(createCityRng(input.slug, "hero").pick(HERO_SUBTITLE_FRAGMENTS), vars),
    intro,
    openingParagraph,
    cityDescription: fillFragment(rngIntro.pick(CITY_DESCRIPTION_FRAGMENTS), vars),
    localEconomy: fillFragment(createCityRng(input.slug, "economy").pick(LOCAL_ECONOMY_FRAGMENTS), vars),
    industrialAreas: geo.industrialAreas,
    surroundingPlaces: geo.surroundingPlaces,
    services: fillFragment(createCityRng(input.slug, "services").pick(SERVICES_FRAGMENTS), vars),
    palletTypes: fillFragment(createCityRng(input.slug, "pallets").pick(PALLET_TYPES_FRAGMENTS), vars),
    transport: fillFragment(createCityRng(input.slug, "transport").pick(TRANSPORT_FRAGMENTS), vars),
    quality: fillFragment(createCityRng(input.slug, "quality").pick(QUALITY_FRAGMENTS), vars),
    export: fillFragment(createCityRng(input.slug, "export").pick(EXPORT_FRAGMENTS), vars),
    ctaTitle: fillFragment(rngCta.pick(CTA_TITLE_FRAGMENTS), vars),
    ctaText: fillFragment(rngCta.pick(CTA_CLOSING_FRAGMENTS), vars),
    closingParagraph: fillFragment(rngCta.pick(CTA_CLOSING_FRAGMENTS), vars),
    metaTitle: fillFragment(rngMeta.pick(META_TITLE_FRAGMENTS), vars),
    metaDescription: fillFragment(rngMeta.pick(META_DESC_FRAGMENTS), vars),
    sectionTitles,
    faq,
    internalLinkSlugs: resolveInternalLinkTargets(input, geo),
  };
}

export function composeIndustrialItemText(cityName: string, area: string, slug: string, index: number): string {
  const rng = createCityRng(slug, `ind-item-${index}`);
  return fillFragment(rng.pick(INDUSTRIAL_ITEM_FRAGMENTS), { city: cityName, area });
}

export function composeSurroundingItemText(cityName: string, place: string, slug: string, index: number): string {
  const rng = createCityRng(slug, `sur-item-${index}`);
  return fillFragment(rng.pick(SURROUNDING_ITEM_FRAGMENTS), { city: cityName, place });
}

export function composeSellBody(input: LocalCityInput): string {
  const geo = resolveGeoContext(input);
  const vars = buildFragmentVars(input, geo);
  const rng = createCityRng(input.slug, "sell");
  return fillFragment(rng.pick(SELL_BODY_FRAGMENTS), vars);
}

export { buildFragmentVars, resolveGeoContext };
