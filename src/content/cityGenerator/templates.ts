import type { CityInputRecord } from "./types";
import { formatList } from "./utils";
import {
  EUROPALLET_HT_EXPORT_NOTE,
  EUROPALLET_QUALITY_COMBINED_TEXT,
  europalletQualityDifferenceAnswer,
} from "../shared/europalletQuality";

interface TemplateContext {
  cityName: string;
  provinceName: string;
  provinceSlug: string;
  slug: string;
  regionLabel: string;
  industrialAreas: string[];
  surroundingPlaces: string[];
  sectors: string[];
  cityDescription?: string;
  localEconomy?: string;
}

export function resolveRegionLabel(input: CityInputRecord, cityName: string): string {
  if (input.regionLabel?.trim()) return input.regionLabel.trim();
  return cityName;
}

export function resolveSectors(input: CityInputRecord): string[] {
  if (input.sectors?.length) return input.sectors;
  return ["logistiek", "productie", "opslag", "groothandel", "retail"];
}

export function buildDefaultCityDescription(ctx: TemplateContext): string {
  if (ctx.cityDescription) return ctx.cityDescription;

  const sectorText = formatList(ctx.sectors);
  return `${ctx.cityName} is een belangrijke locatie voor ${sectorText} in ${ctx.provinceName}. Bedrijven in en rond ${ctx.cityName} hebben regelmatig behoefte aan betrouwbare palletvoorziening voor opslag, distributie en transport.`;
}

export function buildDefaultLocalEconomy(ctx: TemplateContext): string {
  if (ctx.localEconomy) return ctx.localEconomy;

  const sectorText = formatList(ctx.sectors);
  const areas =
    ctx.industrialAreas.length > 0
      ? ` op bedrijventerreinen zoals ${formatList(ctx.industrialAreas)}`
      : "";

  return `In ${ctx.cityName} en omgeving zijn ${sectorText} sterk vertegenwoordigd${areas}. Daardoor is er vraag naar europallets, blokpallets en wegwerppallets — voor opslag, productie of export.`;
}

export function buildMetaTitle(cityName: string): string {
  return `Pallets kopen en verkopen in ${cityName} | De Palletman`;
}

export function buildMetaDescription(ctx: TemplateContext): string {
  return `Gebruikte pallets in ${ctx.cityName}: kopen voor bedrijven, verkopen door bedrijven en particulieren. Europallets, blokpallets en wegwerppallets. Ophalen en bezorgen in ${ctx.provinceName}.`;
}

export function buildH1(cityName: string): string {
  return `Pallets kopen en verkopen in ${cityName}`;
}

export function buildHeroSubtitle(ctx: TemplateContext): string {
  return `De Palletman helpt bedrijven en particulieren in ${ctx.cityName} — bezorgen uitsluitend aan bedrijven, ophalen bij iedereen.`;
}

export function buildIntroduction(ctx: TemplateContext) {
  return {
    eyebrow: `Lokaal in ${ctx.cityName}`,
    title: `Uw palletpartner in ${ctx.regionLabel}`,
    text: `De Palletman is actief in ${ctx.cityName} en de omliggende regio in ${ctx.provinceName}. Of u pallets nodig heeft voor uw bedrijf of overtollige pallets wilt verkopen: wij denken met u mee, geven een heldere prijs en regelen ophalen of bezorgen met eigen transport.`,
  };
}

export function buildPalletServices(ctx: TemplateContext) {
  return {
    buy: {
      eyebrow: "Voor bedrijven",
      title: `Pallets kopen voor bedrijven in ${ctx.cityName}`,
      text: `De Palletman levert gebruikte pallets uitsluitend aan bedrijven in ${ctx.cityName} en omgeving. U kunt bij ons terecht voor europallets, blokpallets en wegwerppallets — in grote én kleine partijen. Wij adviseren over het juiste type en de gewenste kwaliteit, geven een transparante offerte en bezorgen op uw locatie met eigen transport.`,
    },
    sell: {
      eyebrow: "Inkoop",
      title: "Pallets verkopen door bedrijven en particulieren",
      text: `Heeft u overtollige pallets staan in ${ctx.cityName}? De Palletman koopt pallets in van bedrijven én particulieren. Geef het type, de kwaliteit en het aantal door — wij komen langs om op te halen en handelen de verkoop snel af.`,
    },
  };
}

export function buildPalletTypes(ctx: TemplateContext) {
  return {
    eyebrow: "Assortiment",
    title: `Beschikbare palletsoorten in ${ctx.cityName}`,
    intro: `Voor bedrijven in ${ctx.cityName} en ${ctx.provinceName} leveren wij onder meer de volgende pallettype. Wij denken graag mee welk type past bij uw toepassing.`,
    items: [
      {
        title: "Europallets",
        text: `De meest gevraagde pallet voor opslag en distributie in ${ctx.cityName}. Geschikt voor logistiek, groothandel en retail.`,
        href: "/europallets",
        linkLabel: "Meer over Europallets",
      },
      {
        title: "Blokpallets",
        text: `Stevige pallets voor zware ladingen en industriële toepassingen in en rond ${ctx.cityName}.`,
        href: "/blokpallets",
        linkLabel: "Meer over Blokpallets",
      },
      {
        title: "Wegwerppallets",
        text: "Praktisch voor eenmalig transport of export. Betaalbaar en snel beschikbaar voor bedrijven in de regio.",
        href: "/wegwerppallets",
        linkLabel: "Meer over Wegwerppallets",
      },
    ],
  };
}

export const QUALITY_TEXT = EUROPALLET_QUALITY_COMBINED_TEXT;

export const EXPORT_TEXT =
  "Voor export buiten de Europese Unie kunnen HT-gestempelde pallets volgens ISPM 15 nodig zijn. Vraag ons naar beschikbaarheid en planning voor uw zending.";

export function buildTransportSection(ctx: TemplateContext) {
  return {
    eyebrow: "Logistiek",
    title: `Ophalen en bezorgen in ${ctx.cityName}`,
    intro: `Met eigen transport zijn wij actief in ${ctx.cityName} en ${ctx.provinceName}. Zo werken wij samen:`,
    items: [
      {
        title: "Ophalen",
        text: `Wij halen pallets op bij bedrijven én particulieren in ${ctx.cityName} en omgeving. Geef door waar en hoeveel pallets klaarstaan.`,
      },
      {
        title: "Bezorgen",
        text: `Bezorgen doen wij uitsluitend aan bedrijven — van enkele pallets tot grotere partijen op uw adres in ${ctx.cityName}.`,
      },
    ],
  };
}

export function buildIndustrialAreas(ctx: TemplateContext) {
  const items =
    ctx.industrialAreas.length > 0
      ? ctx.industrialAreas.map((area) => ({
          title: area,
          text: `Bedrijventerrein in en rond ${ctx.cityName} — wij halen hier op en bezorgen aan bedrijven op het terrein.`,
        }))
      : [
          {
            title: `Bedrijventerreinen in ${ctx.cityName}`,
            text: `De Palletman is actief op bedrijventerreinen in en rond ${ctx.cityName}. Neem contact op voor ophalen of levering op uw locatie.`,
          },
        ];

  return {
    eyebrow: "Bedrijventerreinen",
    title: `Lokale bedrijventerreinen in ${ctx.cityName}`,
    intro: `De Palletman is actief op en rond bedrijventerreinen in ${ctx.cityName}. Onder meer:`,
    items,
  };
}

export function buildSurroundingPlaces(ctx: TemplateContext) {
  const items =
    ctx.surroundingPlaces.length > 0
      ? ctx.surroundingPlaces.map((place) => ({
          title: place,
          text: `Omliggende kern bij ${ctx.cityName} — ophalen en bezorgen op aanvraag.`,
        }))
      : [
          {
            title: `Omgeving van ${ctx.cityName}`,
            text: `Ook in de omliggende regio in ${ctx.provinceName} rijden wij voor palletinkoop en -levering aan bedrijven.`,
          },
        ];

  return {
    eyebrow: "Regio",
    title: `Omliggende plaatsen rond ${ctx.cityName}`,
    intro: `Naast ${ctx.cityName} rijden wij ook in omliggende kernen in ${ctx.provinceName}. Denk aan:`,
    items,
  };
}

export function buildProcessSteps(ctx: TemplateContext) {
  return [
    {
      title: "Contact opnemen",
      text: `Bel, app of neem contact op via de website. Vertel ons wat u zoekt of wilt verkopen — en waar in ${ctx.cityName} of omgeving.`,
    },
    {
      title: "Offerte ontvangen",
      text: "U krijgt een heldere prijs op basis van type, kwaliteit en aantal. Geen verrassingen, wel duidelijke afspraken.",
    },
    {
      title: "Ophalen of bezorgen",
      text: `Wij plannen ophalen bij u op locatie of bezorgen op uw bedrijfsadres in ${ctx.cityName}. Met eigen transport, flexibel ingepland.`,
    },
    {
      title: "Snelle afhandeling",
      text: "Verkoopt u pallets? Wij handelen snel af. Koopt u in? Dan leveren wij voortvarend. Afspraak is afspraak.",
    },
  ];
}

export function buildFaq(ctx: TemplateContext) {
  const areaQuestion =
    ctx.industrialAreas.length > 0
      ? `Rijden jullie ook naar bedrijventerreinen in ${ctx.cityName}?`
      : `Rijden jullie door ${ctx.cityName}?`;

  const areaAnswer =
    ctx.industrialAreas.length > 0
      ? `Ja, wij zijn actief op bedrijventerreinen in en rond ${ctx.cityName}, waaronder ${formatList(ctx.industrialAreas)}. Neem contact op voor planning op uw locatie.`
      : `Ja, wij zijn actief in ${ctx.cityName} en omgeving in ${ctx.provinceName}. Neem contact op voor ophalen of bezorgen.`;

  const surroundingQuestion =
    ctx.surroundingPlaces.length > 0
      ? `Zijn jullie ook actief in de omgeving van ${ctx.cityName}?`
      : null;

  const surroundingAnswer =
    ctx.surroundingPlaces.length > 0
      ? `Ja, naast ${ctx.cityName} rijden wij ook in omliggende plaatsen zoals ${formatList(ctx.surroundingPlaces)} voor ophalen en bezorgen.`
      : null;

  const items = [
    {
      question: `Leveren jullie pallets aan particulieren in ${ctx.cityName}?`,
      answer:
        "Nee, bezorgen doen wij uitsluitend aan bedrijven. Particulieren kunnen wél pallets aan ons verkopen; wij halen dan op in de regio.",
    },
    {
      question: areaQuestion,
      answer: areaAnswer,
    },
    {
      question: "Welke kwaliteit europallets kan ik kopen?",
      answer: `${europalletQualityDifferenceAnswer(ctx.cityName)} ${EUROPALLET_HT_EXPORT_NOTE}`,
    },
    {
      question: `Halen jullie ook kleine partijen op in ${ctx.cityName}?`,
      answer:
        "Ja, wij werken met grote én kleine partijen. Of u nu enkele pallets heeft staan of een grotere partij wilt verkopen — wij kijken wat past.",
    },
  ];

  if (surroundingQuestion && surroundingAnswer) {
    items.push({ question: surroundingQuestion, answer: surroundingAnswer });
  }

  return {
    eyebrow: "Veelgestelde vragen",
    title: `FAQ — Pallets in ${ctx.cityName}`,
    intro: `Antwoorden op veelgestelde vragen over onze diensten in ${ctx.cityName} en omgeving.`,
    items,
  };
}

export function buildCta(ctx: TemplateContext) {
  return {
    ctaTitle: `Pallets nodig in ${ctx.cityName}?`,
    ctaText: `Neem contact op voor een offerte, ophaalafspraak of advies over palletsoorten in ${ctx.cityName} en ${ctx.provinceName}. Wij reageren snel en duidelijk.`,
  };
}

export function buildInternalLinks(provinceName: string, provinceSlug: string) {
  return [
    { label: provinceName, href: `/${provinceSlug}` },
    { label: "Pallets kopen", href: "/pallets-kopen" },
    { label: "Pallets verkopen", href: "/pallets-verkopen" },
    { label: "Europallets", href: "/europallets" },
    { label: "Blokpallets", href: "/blokpallets" },
    { label: "Werkgebied", href: "/werkgebied" },
  ];
}

export function buildOpenGraph(cityName: string) {
  return {
    title: `Pallets in ${cityName} | De Palletman`,
    description: `Gebruikte pallets kopen en verkopen in ${cityName}. Europallets, blokpallets, ophalen en bezorgen.`,
  };
}

export type { TemplateContext };
