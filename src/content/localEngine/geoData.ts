import { slugifyCityName } from "../cityGenerator/utils.ts";
import type { LocalCityInput, LocalGeoContext } from "./types.ts";
import { createCityRng } from "./seed.ts";

/** Bekende bedrijventerreinen per slug. */
export const CITY_INDUSTRIAL_OVERRIDES: Record<string, string[]> = {
  breda: ["Hazeldonk", "Minervum", "Emer"],
  tilburg: ["Vossenberg", "Kraaiven", "Loven"],
  eindhoven: ["De Hurk", "Flight Forum", "GDC Acht"],
  rotterdam: ["Botlek", "Europoort", "Maasvlakte"],
  "den-haag": ["Binckhorst", "Forepark", "Laan van Meerdervoort"],
  dordrecht: ["Sterrenburg", "Industrieterrein Dordrecht"],
  leiden: ["Bio Science Park", "Tachterop"],
  arnhem: ["Arnhem-Noord", "UIA"],
  nijmegen: ["Wijchense Vlakken", "Nijmegen-Noord"],
  apeldoorn: ["Apeldoorn-Zuid", "De Maten"],
  maastricht: ["Beatrixhaven", "Chemelot"],
  venlo: ["Trade Port Noord", "Greenport Venlo"],
  middelburg: ["Suikerterrein", "Middelburg-Zuid"],
  vlissingen: ["Scaldia", "Arnestein"],
  utrecht: ["Lage Weide", "De Meern"],
  amersfoort: ["Vathorst", "De Brand"],
  helmond: ["De Hurk Helmond", "Schelpenhoek"],
  oss: ["Oss-Oost", "Ravenstein"],
  roosendaal: ["Bedrijventerrein Roosendaal", "Nispen"],
  waalwijk: ["Waalwijk-Zuid", "De Els"],
  moerdijk: ["Moerdijk havengebied", "Geertruidenbergse kade"],
  "s-hertogenbosch": ["Empel", "Deutersestraat", "De Vlijt"],
  "bergschenhoek": ["Rotterdam The Hague Airport gebied", "Lindenholt"],
  spijkenisse: ["Voorne-Putten", "De Hoek"],
};

interface ProvinceGeoProfile {
  roads: string[];
  ports: string[];
  distributionCenters: string[];
  logisticsHotspots: string[];
  economySectors: string[];
  regionLabels: string[];
  industrialPatterns: string[];
}

export const PROVINCE_GEO: Record<string, ProvinceGeoProfile> = {
  "noord-brabant": {
    roads: ["A16", "A27", "A58", "A2", "A59", "A65", "A50", "N279"],
    ports: ["haven Moerdijk", "Braakmanhaven"],
    distributionCenters: ["GDC Tilburg", "distribution hubs Brainport", "cross-dock Waalwijk"],
    logisticsHotspots: ["Hazeldonk", "De Hurk", "Vossenberg", "Greenport Venlo (regio)"],
    economySectors: ["logistiek", "productie", "food", "technologie", "groothandel", "automotive"],
    regionLabels: ["West-Brabant", "Midden-Brabant", "Brainport", "Noordoost-Brabant", "De Peel"],
    industrialPatterns: [
      "{city}se Bedrijvenzone",
      "Handelsgebied {city}",
      "Industriepark {city}-Noord",
      "Logistiek Centrum {city}",
      "Bedrijventerrein {city}-West",
    ],
  },
  "zuid-holland": {
    roads: ["A4", "A12", "A13", "A15", "A20", "A29", "N209", "N470"],
    ports: ["Rotterdamse haven", "Dordrechtse havens", "Maassluis"],
    distributionCenters: ["Europoort-distributie", "Bleiswijk-logistiek", "GDC Rotterdam"],
    logisticsHotspots: ["Botlek", "Maasvlakte", "Alphen distributiezone", "Greenport Westland"],
    economySectors: ["logistiek", "tuinbouw", "maritiem", "groothandel", "productie", "dienstverlening"],
    regionLabels: ["Rijnmond", "Haaglanden", "Delfland", "Groene Hart", "Westland"],
    industrialPatterns: [
      "{city}se Havenzone",
      "Bedrijvenpark {city}",
      "Industrieterrein {city}",
      "Logistiek terrein {city}-Zuid",
      "Handelslocatie {city}",
    ],
  },
  zeeland: {
    roads: ["A58", "N62", "N257", "N59", "N661"],
    ports: ["haven Vlissingen", "Yerseke", "Terneuzen"],
    distributionCenters: ["Scaldia-logistiek", "Goes centraal"],
    logisticsHotspots: ["Scaldia", "Axel", "Ritthem"],
    economySectors: ["maritiem", "logistiek", "aquacultuur", "chemie", "toerisme", "landbouw"],
    regionLabels: ["Zuid-Beveland", "Walcheren", "Zeeuws-Vlaanderen", "Schouwen-Duiveland"],
    industrialPatterns: [
      "Industrieterrein {city}",
      "Havengebied {city}",
      "Bedrijventerrein {city}-Oost",
      "Scheldezone {city}",
    ],
  },
  limburg: {
    roads: ["A2", "A67", "A73", "A76", "N278", "N59"],
    ports: ["Chemelot", "Beatrixhaven Maastricht"],
    distributionCenters: ["Venlo Trade Port", "Geleen-logistiek", "Roermond cross-dock"],
    logisticsHotspots: ["Greenport Venlo", "Chemelot", "Beatrixhaven"],
    economySectors: ["logistiek", "chemie", "productie", "food", "recycling", "transport"],
    regionLabels: ["Midden-Limburg", "Noord-Limburg", "Zuid-Limburg", "Parkstad"],
    industrialPatterns: [
      "Industriepark {city}",
      "Bedrijventerrein {city}",
      "Logistiek Park {city}",
      "Handelszone {city}-Noord",
    ],
  },
  utrecht: {
    roads: ["A2", "A12", "A27", "A28", "N230", "N401"],
    ports: ["Amsterdam-Rijnkanaal (regio)"],
    distributionCenters: ["Lage Weide", "Utrecht Centraal logistiek", "Nieuwegein DC"],
    logisticsHotspots: ["De Meern", "Lage Weide", "Houten logistiek"],
    economySectors: ["logistiek", "dienstverlening", "IT", "groothandel", "productie", "zorg"],
    regionLabels: ["Utrechtse Heuvelrug", "Groene Hart", "Amersfoort regio", "Krommerijnstreek"],
    industrialPatterns: [
      "Bedrijvenpark {city}",
      "Industrieterrein {city}",
      "Logistiek terrein {city}",
      "Handelsgebied {city}-West",
    ],
  },
  gelderland: {
    roads: ["A1", "A12", "A15", "A50", "A325", "N348", "N791"],
    ports: ["Waalsfront (regio)", "Doesburgse kade"],
    distributionCenters: ["Distripark Duiven", "Apeldoorn-logistiek", "Nijmegen DC"],
    logisticsHotspots: ["Duiven Distripark", "UIA Arnhem", "Deventer logistiek"],
    economySectors: ["logistiek", "productie", "food", "papier", "technologie", "groothandel"],
    regionLabels: ["Achterhoek", "Veluwe", "Rivierenland", "Arnhem-Nijmegen", "Betuwe"],
    industrialPatterns: [
      "Bedrijventerrein {city}-Noord",
      "Industriepark {city}",
      "Logistiek Centrum {city}",
      "Handelszone {city}",
    ],
  },
};

function formatList(items: string[]): string {
  if (items.length === 0) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} en ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} en ${items[items.length - 1]}`;
}

function applyPattern(pattern: string, cityName: string): string {
  return pattern.replace(/\{city\}/g, cityName);
}

export function resolveIndustrialAreas(
  input: LocalCityInput,
  rng: ReturnType<typeof createCityRng>,
): string[] {
  const override = CITY_INDUSTRIAL_OVERRIDES[input.slug];
  if (override) return override.slice(0, 3);

  const profile = PROVINCE_GEO[input.provinceSlug];
  const patterns = rng.pickMany(profile.industrialPatterns, 3).map((p) => applyPattern(p, input.cityName));
  return patterns;
}

export function resolveSurroundingPlaces(input: LocalCityInput, rng: ReturnType<typeof createCityRng>): string[] {
  const others = input.allCitiesInProvince.filter((name) => slugifyCityName(name) !== input.slug);
  if (others.length === 0) return [];
  return rng.pickMany(others, Math.min(4, others.length));
}

export function resolveGeoContext(input: LocalCityInput): LocalGeoContext {
  const rng = createCityRng(input.slug, "geo");
  const profile = PROVINCE_GEO[input.provinceSlug];

  const industrialAreas = resolveIndustrialAreas(input, rng);
  const surroundingPlaces = resolveSurroundingPlaces(input, rng);
  const roads = rng.pickMany(profile.roads, 3);
  const ports = profile.ports.length > 0 ? rng.pickMany(profile.ports, Math.min(2, profile.ports.length)) : [];
  const distributionCenters = rng.pickMany(profile.distributionCenters, 2);
  const logisticsHotspots = rng.pickMany(profile.logisticsHotspots, 2);
  const economySectors = rng.pickMany(profile.economySectors, 4);
  const regionLabel = rng.pick(profile.regionLabels);

  const transportContext = [
    ports.length > 0 ? `nabij ${formatList(ports)}` : null,
    `aan ${formatList(roads)}`,
    logisticsHotspots.length > 0 ? `in de buurt van ${formatList(logisticsHotspots)}` : null,
  ]
    .filter(Boolean)
    .join(", ");

  const palletUsageContext = rng.pick([
    `Opslag en outbound-logistiek langs ${formatList(roads)} vragen regelmatig om pallets.`,
    `Productiebedrijven en groothandels in ${input.cityName} gebruiken pallets dagelijks voor inbound en outbound.`,
    `Distributiecentra in de regio draaien op een constante instroom van europallets en blokpallets.`,
    `Transporteurs rond ${input.cityName} laden dagelijks in en uit — pallets wisselen snel van eigenaar.`,
    `Seasonal pieken in logistiek zorgen voor extra vraag naar betrouwbare palletvoorziening.`,
  ]);

  return {
    industrialAreas,
    surroundingPlaces,
    roads,
    ports,
    distributionCenters,
    logisticsHotspots,
    economySectors: economySectors as string[],
    regionLabel,
    transportContext,
    palletUsageContext,
  };
}

export function resolveInternalLinkTargets(
  input: LocalCityInput,
  geo: LocalGeoContext,
): Array<{ name: string; slug: string; provinceSlug: string }> {
  return geo.surroundingPlaces.map((name) => ({
    name,
    slug: slugifyCityName(name),
    provinceSlug: input.provinceSlug,
  }));
}

/** Telt fragment-varianten voor theoretische combinaties. */
export function countFragmentVariants(): Record<string, number> {
  return {
    note: "Zie FRAGMENT_COUNTS in fragments.ts",
  };
}
