import { defineCityPage } from "../cityTypes";
import type { CityPageExtended } from "../cityTypes";
import { getCanonicalUrl } from "../siteConfig";
import { cityQuoteForm } from "./shared/cityQuoteForm";

const cityName = "Tilburg";
const provinceName = "Noord-Brabant";
const provinceSlug = "noord-brabant";
const slug = "tilburg";
const path = `/${provinceSlug}/pallets-${slug}`;

const extended: CityPageExtended = {
  trust: {
    eyebrow: "Vertrouwen",
    title: "Waarom De Palletman in Tilburg?",
    intro:
      "Tilburg is het logistieke hart van Midden-Brabant. De Palletman kent de terreinen Vossenberg, Kraaiven en Loven — en levert pallets met eigen transport en korte lijnen.",
    columns: 3,
    items: [
      {
        title: "Centrale ligging",
        text: "Tilburg verbindt Brabant, Zeeland en Limburg. Ideaal voor bedrijven die pallets nodig hebben voor regionale distributie.",
      },
      {
        title: "Eigen transport",
        text: "Ons wagenpark rijdt dagelijks naar bedrijventerreinen en MKB-bedrijven in Tilburg en omliggende gemeenten.",
      },
      {
        title: "Snelle betaling",
        text: "Verkoopt u pallets? Wij betalen snel — bij bedrijven én particulieren in Tilburg, Goirle en omgeving.",
      },
      {
        title: "Grote voorraad",
        text: "Europallets, blokpallets en wegwerppallets direct beschikbaar — ook voor grotere volumes op distributieterreinen.",
      },
      {
        title: "B2B-levering",
        text: "Bezorgen uitsluitend aan bedrijven. Inkoop doen wij van iedereen — met ophalen op locatie.",
      },
      {
        title: "Transparante kwaliteit",
        text: "A-kwaliteit (1e keus) en B-kwaliteit (2e keus) helder omschreven. Geen verrassingen bij levering.",
      },
    ],
  },
  europallets: {
    eyebrow: "Europallets",
    title: "Europallets in Tilburg",
    intro:
      "Europallets domineren het palletverkeer op Vossenberg en bij groothandels in Tilburg. Wij leveren A-kwaliteit (1e keus) en B-kwaliteit (2e keus) uitsluitend aan bedrijven.",
    columns: 2,
    items: [
      {
        title: "A-kwaliteit — 1e keus",
        text: "Lichte of blanke europallets voor nette opslag en presentatie. Populair bij groothandels en distributiebedrijven in Tilburg.",
        href: "/europallets",
        linkLabel: "Meer over europallets",
      },
      {
        title: "B-kwaliteit — 2e keus",
        text: "Donkere gebruikte europallets — technisch bruikbaar en voordeliger. Geschikt voor intern transport op terreinen als Kraaiven.",
        href: "/europallets",
        linkLabel: "Kwaliteitsverschil bekijken",
      },
    ],
  },
  blokpallets: {
    eyebrow: "Blokpallets",
    title: "Blokpallets in Tilburg",
    intro:
      "Productiebedrijven en industrie op Kraaiven en Loven vragen om stevige blokpallets voor zware ladingen en machines.",
    columns: 2,
    items: [
      {
        title: "Industriële toepassing",
        text: "Blokpallets op Loven en Kraaiven dragen zware producten, rollen en machines. Wij leveren gebruikte en nieuwe varianten.",
        href: "/blokpallets",
        linkLabel: "Meer over blokpallets",
      },
      {
        title: "Maatwerk",
        text: "Niet elke lading past op een europallet. Wij adviseren de juiste blokpalletmaat voor uw bedrijf in Tilburg.",
        href: "/blokpallets",
        linkLabel: "Afmetingen bekijken",
      },
    ],
  },
  wegwerppallets: {
    eyebrow: "Wegwerppallets",
    title: "Wegwerppallets in Tilburg",
    intro:
      "Tilburgse bedrijven die exporteren kiezen vaak lichtgewicht wegwerppallets — praktisch voor eenmalig transport en bulkzendingen.",
    columns: 2,
    items: [
      {
        title: "Eenmalig gebruik",
        text: "Wegwerppallets zijn betaalbaar en licht — ideaal als retourtransport niet nodig is. Levering aan bedrijven in Tilburg.",
        href: "/wegwerppallets",
        linkLabel: "Meer over wegwerppallets",
      },
      {
        title: "Bulkpartijen",
        text: "Wij leveren wegwerppallets in bulk aan producenten en handelsbedrijven — van tientallen tot honderden stuks.",
        href: "/wegwerppallets",
        linkLabel: "Bulkpartijen aanvragen",
      },
    ],
  },
  htExport: {
    title: "HT Export vanuit Tilburg",
    text: "Exporteert uw bedrijf buiten de Europese Unie? HT-gestempelde pallets volgens ISPM 15 zijn verplicht. De Palletman levert HT-gestempelde europallets en wegwerppallets aan bedrijven in Tilburg en Midden-Brabant — op aanvraag, met planning afgestemd op uw zending.",
  },
  largeBatches: {
    title: "Grote partijen in Tilburg",
    text: "Distributiecentra op Vossenberg, producenten op Kraaiven en logistieke hubs in Midden-Brabant werken met grote palletvolumes. De Palletman levert grotere partijen europallets, blokpallets en wegwerppallets uitsluitend aan bedrijven — met eigen transport en flexibele planning.",
  },
  smallBatches: {
    title: "Kleine partijen in Tilburg",
    text: "Ook MKB-bedrijven in Tilburg, Goirle of Oisterwijk bestellen kleinere partijen. Of u nu tien europallets nodig heeft of een kleinere wekelijkse levering — bezorgen doen wij uitsluitend aan bedrijven, ook bij bescheiden volumes.",
  },
  pickup: {
    title: "Ophalen in Tilburg",
    text: "Wij halen pallets op bij bedrijven én particulieren in Tilburg en omliggende gemeenten. Geef door waar de pallets staan — op Vossenberg, Kraaiven, Loven of thuis — en wij plannen ophalen met eigen transport.",
  },
  delivery: {
    title: "Bezorgen in Tilburg",
    text: "Bezorgen doen wij uitsluitend aan bedrijven in Tilburg en Midden-Brabant. Wij rijden naar bedrijventerreinen, productielocaties en groothandels — op het moment dat het u schikt.",
  },
  werkgebied: {
    eyebrow: "Werkgebied",
    title: "Ons werkgebied rond Tilburg",
    intro:
      "De Palletman is actief in Tilburg en omliggende gemeenten. Centraal in Brabant — wij rijden dagelijks met eigen transport.",
    columns: 3,
    items: [
      {
        title: "Tilburg",
        text: "Kerngebied: Vossenberg, Kraaiven, Loven en centrum. Ophalen overal; bezorgen uitsluitend aan bedrijven.",
      },
      {
        title: "Goirle & Oisterwijk",
        text: "Bedrijven en particulieren in Goirle en Oisterwijk profiteren van onze Tilburg-routes voor ophalen en B2B-levering.",
      },
      {
        title: "Dongen & Waalwijk",
        text: "Ook in Dongen en Waalwijk zijn wij actief voor palletinkoop en levering aan lokale bedrijven.",
      },
    ],
  },
  localAdvantages: {
    eyebrow: "Lokaal voordeel",
    title: "Logistieke voordelen in Midden-Brabant",
    intro:
      "Tilburgs centrale positie in Noord-Brabant maakt de stad een natuurlijk knooppunt voor palletverkeer en distributie.",
    columns: 3,
    items: [
      {
        title: "GDC Tilburg",
        text: "Het Green Logistics Center en omliggende distributiecapaciteit maken Tilburg interessant voor groothandels en logistieke dienstverleners.",
      },
      {
        title: "Textiel en productie",
        text: "Tilburgs industriële erfenis leeft voort in moderne productie en maakindustrie — met vraag naar betrouwbare palletvoorziening.",
      },
      {
        title: "Centraal in Brabant",
        text: "Vanuit Tilburg bereikt u snel Eindhoven, Breda, Den Bosch en de grens met België — ideaal voor regionale distributie.",
      },
      {
        title: "Vossenberg logistiek",
        text: "Vossenberg is een belangrijk logistiek terrein waar europallets de standaard zijn voor opslag en orderpicking.",
      },
      {
        title: "Groothandel Kraaiven",
        text: "Groothandels en handelsbedrijven op Kraaiven vragen regelmatig om A-kwaliteit europallets en snelle levering.",
      },
      {
        title: "Korte reactietijd",
        text: "Als lokale partner schakelen wij snel — geen lange wachttijden, wel direct contact en duidelijke afspraken.",
      },
    ],
  },
  accessibility: {
    eyebrow: "Bereikbaarheid",
    title: "Bereikbaarheid en snelwegen rond Tilburg",
    intro:
      "Tilburg is goed bereikbaar via meerdere A-wegen — essentieel voor efficiënt pallettransport in Midden-Brabant.",
    columns: 3,
    items: [
      {
        title: "A58",
        text: "Eindhoven – Vlissingen. De belangrijkste oost-westverbinding door Tilburg — direct toegang tot Vossenberg.",
      },
      {
        title: "A65",
        text: "Tilburg – 's-Hertogenbosch. Verbindt Tilburg met het rivierengebied en Midden-Nederland.",
      },
      {
        title: "A261 / N630",
        text: "Randweg en lokale ontsluiting van bedrijventerreinen Kraaiven en Loven.",
      },
      {
        title: "N629",
        text: "Noord-zuidverbinding richting Breda en de A16 — handig voor cross-border logistiek.",
      },
    ],
  },
  quoteForm: cityQuoteForm(cityName),
};

export const tilburg = defineCityPage({
  cityName,
  provinceName,
  provinceSlug,
  slug,
  path,

  canonicalUrl: getCanonicalUrl(path),
  metaTitle: "Pallets kopen en verkopen in Tilburg | De Palletman",
  metaDescription:
    "Pallets in Tilburg: B2B-levering op Vossenberg, Kraaiven en Loven. Inkoop bij bedrijven en particulieren. Europallets, blokpallets, HT-export in Midden-Brabant.",

  h1: "Gebruikte pallets in Tilburg — kopen en verkopen",
  heroSubtitle:
    "Centraal in Noord-Brabant: De Palletman in Tilburg. Bezorgen uitsluitend aan bedrijven, ophalen bij bedrijven en particulieren.",
  heroEyebrow: "Midden-Brabant",

  introduction: {
    eyebrow: "Palletservice Tilburg",
    title: "Palletpartner voor Midden-Brabant",
    text: "Tilburg ligt centraal in Noord-Brabant en is een hub voor logistiek, productie en groothandel. De Palletman ondersteunt bedrijven en particulieren in Tilburg met het kopen en verkopen van gebruikte pallets — met eigen transport, heldere prijzen en snelle afhandeling.",
  },

  cityDescription:
    "Tilburg heeft door zijn centrale ligging in Noord-Brabant een sterke positie voor logistiek en distributie. De stad verbindt regio's en trekt bedrijven in productie, opslag en groothandel aan. Bedrijventerreinen Vossenberg, Kraaiven en Loven zijn het kloppend hart van het lokale palletverkeer.",

  localEconomy:
    "Logistiek, productie, distributie en groothandel domineren de Tilburgse economie. Op Vossenberg draait dagelijks distributie; Kraaiven en Loven huisvesten productie, handel en dienstverlening. Textielgeschiedenis heeft plaatsgemaakt voor moderne maakindustrie en logistieke dienstverlening.",

  palletServices: {
    buy: {
      eyebrow: "Voor bedrijven",
      title: "Pallets inkopen in Tilburg",
      text: "De Palletman levert gebruikte pallets uitsluitend aan bedrijven in Tilburg — europallets (A- en B-kwaliteit), blokpallets en wegwerppallets, in grote én kleine partijen. Wij adviseren over type en kwaliteit en bezorgen op Vossenberg, Kraaiven, Loven of uw eigen locatie.",
    },
    sell: {
      eyebrow: "Inkoop",
      title: "Pallets verkopen in Tilburg",
      text: "Heeft u overtollige pallets in Tilburg? Wij kopen in van bedrijven én particulieren. Eerlijke prijs, snelle betaling en ophalen met eigen transport — ook bij kleinere partijen in Goirle, Oisterwijk of Dongen.",
    },
  },

  palletTypes: {
    eyebrow: "Palletsoorten",
    title: "Veel gebruikte pallets in Midden-Brabant",
    intro:
      "In Tilburg en omgeving kiezen bedrijven afhankelijk van sector en lading voor europallets, blokpallets of wegwerppallets.",
    columns: 3,
    items: [
      {
        title: "Europallets",
        text: "Standaard voor distributie op Vossenberg en groothandel in Tilburg. Meest gevraagd in A- en B-kwaliteit.",
        href: "/europallets",
        linkLabel: "Europallets bekijken",
      },
      {
        title: "Blokpallets",
        text: "Voor zware lading op Kraaiven en Loven. Stevig en geschikt voor productie en industrie.",
        href: "/blokpallets",
        linkLabel: "Blokpallets bekijken",
      },
      {
        title: "Wegwerppallets",
        text: "Lichtgewicht voor export en eenmalig transport. Bulkpartijen voor handelsbedrijven in Tilburg.",
        href: "/wegwerppallets",
        linkLabel: "Wegwerppallets bekijken",
      },
    ],
  },

  transportText: {
    eyebrow: "Transport",
    title: "Ophalen en bezorgen in Tilburg",
    intro:
      "Met eigen transport zijn wij dagelijks actief in Tilburg en omliggende gemeenten in Midden-Brabant.",
    columns: 2,
    items: [
      {
        title: "Ophalen",
        text: "Wij halen pallets op bij bedrijven én particulieren in Tilburg, Goirle, Oisterwijk, Dongen en Waalwijk.",
      },
      {
        title: "Bezorgen",
        text: "Bezorgen uitsluitend aan bedrijven — op Vossenberg, Kraaiven, Loven en overal in de regio.",
      },
    ],
  },

  qualityText:
    "A-kwaliteit (1e keus): lichte of blanke europallets. B-kwaliteit (2e keus): donkere gebruikte pallets, technisch bruikbaar en voordeliger voor logistiek in Tilburg.",

  exportText:
    "HT-gestempelde europallets volgens ISPM 15 zijn beschikbaar voor export buiten de EU. Op aanvraag voor bedrijven in Tilburg en Midden-Brabant.",

  industrialAreas: {
    eyebrow: "Bedrijventerreinen",
    title: "Bedrijventerreinen in Tilburg",
    intro:
      "Tilburg kent grote bedrijventerreinen met intensief palletverkeer. De Palletman rijdt hier regelmatig voor ophalen en bezorgen.",
    columns: 3,
    items: [
      {
        title: "Vossenberg",
        text: "Logistiek en distributiecentrum van Tilburg — europallets zijn hier de standaard voor opslag en orderverwerking.",
      },
      {
        title: "Kraaiven",
        text: "Gemengd terrein met groothandel, productie en dienstverlening. Vraag naar europallets en blokpallets.",
      },
      {
        title: "Loven",
        text: "Industrieterrein met productie en maakindustrie. Blokpallets worden hier veel ingezet voor zware lading.",
      },
    ],
  },

  surroundingPlaces: {
    eyebrow: "Omliggende gemeenten",
    title: "Gemeenten rondom Tilburg",
    intro:
      "Naast Tilburg zijn wij actief in omliggende gemeenten voor ophalen en B2B-levering.",
    columns: 2,
    variant: "white",
    items: [
      {
        title: "Goirle",
        text: "Bedrijven en particulieren in Goirle profiteren van onze Tilburg-routes. Ophalen en levering aan MKB.",
      },
      {
        title: "Oisterwijk",
        text: "Oisterwijk ligt op korte afstand van Tilburg — wij halen pallets op en bezorgen aan lokale bedrijven.",
      },
      {
        title: "Dongen",
        text: "Producenten en handelsbedrijven in Dongen bestellen pallets via onze Tilburg-service.",
      },
      {
        title: "Waalwijk",
        text: "Ook in Waalwijk en omliggende kernen zijn wij beschikbaar voor palletinkoop en B2B-levering.",
      },
    ],
  },

  processSteps: [
    {
      title: "Contact opnemen",
      text: "Bel, app of mail ons. Vertel wat u zoekt of wilt verkopen — en waar in Tilburg of omgeving.",
    },
    {
      title: "Offerte ontvangen",
      text: "Heldere prijs op basis van type, kwaliteit en aantal. Geen verrassingen.",
    },
    {
      title: "Ophalen of bezorgen",
      text: "Ophalen op uw locatie of bezorgen op uw bedrijfsadres — ook op Vossenberg, Kraaiven of Loven.",
    },
    {
      title: "Snelle afhandeling",
      text: "Verkoopt u pallets? Snelle betaling. Koopt u in? Voortvarende levering.",
    },
  ],

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "FAQ — Pallets in Tilburg",
    intro: "Antwoorden op veelgestelde vragen over palletinkoop, -verkoop en transport in Tilburg en Midden-Brabant.",
    items: [
      {
        question: "Waarom is Tilburg interessant voor palletlevering?",
        answer:
          "Tilburg ligt centraal in Noord-Brabant en is een knooppunt voor logistiek, productie en distributie. Wij rijden regelmatig naar Vossenberg, Kraaiven en Loven.",
      },
      {
        question: "Bezorgen jullie ook kleine partijen in Tilburg?",
        answer:
          "Ja, naast grotere volumes bezorgen wij ook kleinere partijen uitsluitend aan bedrijven in Tilburg en omgeving.",
      },
      {
        question: "Rijden jullie ook naar Goirle, Oisterwijk of Waalwijk?",
        answer:
          "Ja, naast Tilburg zijn wij actief in Goirle, Oisterwijk, Dongen en Waalwijk voor ophalen en levering aan bedrijven.",
      },
      {
        question: "Welke snelwegen zijn relevant voor Tilburg?",
        answer:
          "Tilburg ligt aan de A58 (Eindhoven–Vlissingen) en A65 ('s-Hertogenbosch). Via de A261 bereikt u bedrijventerreinen Vossenberg en Kraaiven.",
      },
      {
        question: "Leveren jullie HT-gestempelde pallets voor export?",
        answer:
          "Ja, HT-gestempelde pallets volgens ISPM 15 zijn beschikbaar op aanvraag voor bedrijven in Tilburg die exporteren buiten de EU.",
      },
      {
        question: "Wat is het verschil tussen 1e en 2e keus europallets?",
        answer:
          "1e keus (A-kwaliteit) zijn lichte of blanke pallets. 2e keus (B-kwaliteit) zijn donkere gebruikte pallets — technisch bruikbaar en voordeliger.",
      },
      {
        question: "Kopen jullie pallets in van particulieren in Tilburg?",
        answer:
          "Ja, inkoop doen wij van bedrijven én particulieren. Wij halen op met eigen transport en betalen snel.",
      },
      {
        question: "Zijn jullie actief op distributieterreinen in Tilburg?",
        answer:
          "Ja, wij rijden regelmatig naar Vossenberg en andere distributieterreinen in Tilburg voor ophalen en B2B-bezorging.",
      },
    ],
  },

  ctaTitle: "Pallets nodig in Tilburg?",
  ctaText:
    "Vraag een offerte aan of plan ophalen in Tilburg. Wij helpen bedrijven en particulieren in Midden-Brabant snel verder.",
  ctaPrimaryLabel: "Vraag offerte aan",
  ctaPrimaryHref: "#offerte-formulier-heading",
  ctaSecondaryLabel: "Bel direct",
  ctaSecondaryHref: "tel:+31612345678",

  imageFilename: "pallets-tilburg.webp",

  internalLinks: [
    { label: "Noord-Brabant", href: "/noord-brabant" },
    { label: "Werkgebied", href: "/werkgebied" },
    { label: "Pallets kopen", href: "/pallets-kopen" },
    { label: "Pallets verkopen", href: "/pallets-verkopen" },
    { label: "Blokpallets", href: "/blokpallets" },
    { label: "Pallets Breda", href: "/noord-brabant/pallets-breda" },
    { label: "Pallets Eindhoven", href: "/noord-brabant/pallets-eindhoven" },
  ],

  extended,

  openGraph: {
    title: "Pallets kopen en verkopen in Tilburg | De Palletman",
    description:
      "B2B palletlevering in Midden-Brabant. Actief op Vossenberg, Kraaiven en Loven. Europallets, blokpallets, HT-export.",
  },

  schema: "auto",
});
