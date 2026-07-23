import { defineCityPage } from "../cityTypes";
import type { CityPageExtended } from "../cityTypes";
import { getCanonicalUrl } from "../siteConfig";
import { cityQuoteForm } from "./shared/cityQuoteForm";

const cityName = "Eindhoven";
const provinceName = "Noord-Brabant";
const provinceSlug = "noord-brabant";
const slug = "eindhoven";
const path = `/${provinceSlug}/pallets-${slug}`;

const extended: CityPageExtended = {
  trust: {
    eyebrow: "Vertrouwen",
    title: "Waarom De Palletman in Eindhoven?",
    intro:
      "Brainport Eindhoven draait op productie, tech en logistiek. De Palletman kent De Hurk, Flight Forum en GDC Acht — en levert pallets met eigen transport en korte lijnen.",
    columns: 3,
    items: [
      {
        title: "Brainport-regio",
        text: "Eindhoven is het hart van Brainport — high-tech, productie en logistiek. Wij begrijpen wat lokale bedrijven nodig hebben.",
      },
      {
        title: "Eigen transport",
        text: "Ons wagenpark rijdt dagelijks naar bedrijventerreinen en productiebedrijven in Eindhoven, Veldhoven en Best.",
      },
      {
        title: "Snelle betaling",
        text: "Verkoopt u pallets? Wij betalen snel — bij bedrijven én particulieren in de Brainport-regio.",
      },
      {
        title: "Grote voorraad",
        text: "Europallets, blokpallets en wegwerppallets direct beschikbaar — ook voor grotere volumes op De Hurk en GDC Acht.",
      },
      {
        title: "B2B-levering",
        text: "Bezorgen uitsluitend aan bedrijven. Inkoop doen wij van iedereen — met ophalen op locatie.",
      },
      {
        title: "Kwaliteit helder",
        text: "A-kwaliteit (1e keus) en B-kwaliteit (2e keus) duidelijk omschreven. Geen verrassingen bij levering.",
      },
    ],
  },
  europallets: {
    eyebrow: "Europallets",
    title: "Europallets in Eindhoven",
    intro:
      "Europallets zijn in Brainport het meest gevraagd — voor logistiek op De Hurk, opslag bij producenten en distributie richting Veldhoven. Wij leveren A-kwaliteit (1e keus) en B-kwaliteit (2e keus) uitsluitend aan bedrijven.",
    columns: 2,
    items: [
      {
        title: "A-kwaliteit — 1e keus",
        text: "Lichte of blanke europallets voor nette opslag en presentatie. Populair bij tech- en productiebedrijven in Eindhoven.",
        href: "/europallets",
        linkLabel: "Meer over europallets",
      },
      {
        title: "B-kwaliteit — 2e keus",
        text: "Donkere gebruikte europallets — technisch bruikbaar en voordeliger. Geschikt voor intern transport op Flight Forum en De Hurk.",
        href: "/europallets",
        linkLabel: "Kwaliteitsverschil bekijken",
      },
    ],
  },
  blokpallets: {
    eyebrow: "Blokpallets",
    title: "Blokpallets in Eindhoven",
    intro:
      "Industriële productie en zware componenten in Brainport vragen om stevige blokpallets — op De Hurk, Flight Forum en GDC Acht.",
    columns: 2,
    items: [
      {
        title: "Industriële productie",
        text: "Blokpallets dragen zware machines, componenten en halffabricaten. Wij leveren gebruikte en nieuwe varianten aan Eindhovense bedrijven.",
        href: "/blokpallets",
        linkLabel: "Meer over blokpallets",
      },
      {
        title: "Diverse afmetingen",
        text: "Niet elke tech-component past op een europallet. Wij adviseren de juiste blokpalletmaat voor uw productieproces.",
        href: "/blokpallets",
        linkLabel: "Afmetingen bekijken",
      },
    ],
  },
  wegwerppallets: {
    eyebrow: "Wegwerppallets",
    title: "Wegwerppallets in Eindhoven",
    intro:
      "Brainport-bedrijven die exporteren kiezen vaak lichtgewicht wegwerppallets — praktisch voor eenmalig transport naar internationale klanten.",
    columns: 2,
    items: [
      {
        title: "Export en eenmalig gebruik",
        text: "Wegwerppallets zijn betaalbaar en licht — ideaal als retourtransport niet nodig is. Levering aan bedrijven in Eindhoven.",
        href: "/wegwerppallets",
        linkLabel: "Meer over wegwerppallets",
      },
      {
        title: "Bulkpartijen",
        text: "Wij leveren wegwerppallets in bulk aan producenten en exporteurs — van tientallen tot grotere volumes.",
        href: "/wegwerppallets",
        linkLabel: "Bulkpartijen aanvragen",
      },
    ],
  },
  htExport: {
    title: "HT Export vanuit Eindhoven",
    text: "Exporteert uw Brainport-bedrijf buiten de Europese Unie? HT-gestempelde pallets volgens ISPM 15 zijn verplicht. De Palletman levert HT-gestempelde europallets en wegwerppallets aan bedrijven in Eindhoven, Veldhoven en omgeving — op aanvraag, met planning afgestemd op uw internationale zending.",
  },
  largeBatches: {
    title: "Grote partijen in Eindhoven",
    text: "Productiebedrijven op De Hurk, logistieke hubs op GDC Acht en groothandels in Brainport werken met grote palletvolumes. De Palletman levert grotere partijen europallets, blokpallets en wegwerppallets uitsluitend aan bedrijven — met eigen transport en flexibele planning.",
  },
  smallBatches: {
    title: "Kleine partijen in Eindhoven",
    text: "Ook startende tech-bedrijven, MKB'ers en kleinere producenten in Eindhoven, Best of Geldrop bestellen kleinere partijen. Bezorgen doen wij uitsluitend aan bedrijven — ook bij bescheiden volumes.",
  },
  pickup: {
    title: "Ophalen in Eindhoven",
    text: "Wij halen pallets op bij bedrijven én particulieren in Eindhoven en Brainport. Geef door waar de pallets staan — op De Hurk, Flight Forum, GDC Acht of thuis — en wij plannen ophalen met eigen transport.",
  },
  delivery: {
    title: "Bezorgen in Eindhoven",
    text: "Bezorgen doen wij uitsluitend aan bedrijven in Eindhoven en Brainport. Wij rijden naar bedrijventerreinen, productielocaties en distributiecentra — op het moment dat het u schikt.",
  },
  werkgebied: {
    eyebrow: "Werkgebied",
    title: "Ons werkgebied rond Eindhoven",
    intro:
      "De Palletman is actief in Eindhoven en omliggende gemeenten in Brainport. Wij rijden dagelijks met eigen transport.",
    columns: 3,
    items: [
      {
        title: "Eindhoven",
        text: "Kerngebied: De Hurk, Flight Forum, GDC Acht en centrum. Ophalen overal; bezorgen uitsluitend aan bedrijven.",
      },
      {
        title: "Veldhoven & Best",
        text: "Tech- en productiebedrijven in Veldhoven en Best profiteren van onze Brainport-routes voor ophalen en B2B-levering.",
      },
      {
        title: "Geldrop & Helmond",
        text: "Ook in Geldrop en Helmond zijn wij actief voor palletinkoop en levering aan lokale bedrijven.",
      },
    ],
  },
  localAdvantages: {
    eyebrow: "Lokaal voordeel",
    title: "Logistieke voordelen in Brainport",
    intro:
      "Eindhovens positie als tech- en industrieregio maakt betrouwbare palletvoorziening essentieel voor lokale bedrijven.",
    columns: 3,
    items: [
      {
        title: "High-tech productie",
        text: "Brainport-bedrijven in semicon, tech en maakindustrie vragen om betrouwbare palletlevering voor componenten en eindproducten.",
      },
      {
        title: "De Hurk distributie",
        text: "De Hurk is een van de grootste bedrijventerreinen van Eindhoven — intensief palletverkeer voor logistiek en opslag.",
      },
      {
        title: "GDC Acht",
        text: "Het distributiecentrum Acht is een belangrijk knooppunt voor regionale en internationale distributie in Brainport.",
      },
      {
        title: "Flight Forum",
        text: "Flight Forum huisvest tech-bedrijven, productie en dienstverlening — met continue vraag naar europallets en blokpallets.",
      },
      {
        title: "Internationale supply chains",
        text: "Brainport-bedrijven exporteren wereldwijd. HT-gestempelde pallets zijn beschikbaar voor zendingen buiten de EU.",
      },
      {
        title: "Korte lijnen",
        text: "Als lokale partner schakelen wij snel — direct contact, heldere afspraken en eigen transport in de regio.",
      },
    ],
  },
  accessibility: {
    eyebrow: "Bereikbaarheid",
    title: "Bereikbaarheid en snelwegen rond Eindhoven",
    intro:
      "Eindhoven is uitstekend bereikbaar via het Nederlandse en Belgische snelwegennet — cruciaal voor pallettransport in Brainport.",
    columns: 3,
    items: [
      {
        title: "A2",
        text: "Amsterdam – Eindhoven – Luik. De belangrijkste noord-zuidcorridor — direct toegang tot De Hurk en Flight Forum.",
      },
      {
        title: "A50 / A67",
        text: "Verbindt Eindhoven met Nijmegen, Venlo en Duitsland. Essentieel voor cross-border logistiek in Brainport.",
      },
      {
        title: "A58",
        text: "Richting Tilburg en Breda. Handig voor distributie naar West-Brabant en Zeeland.",
      },
      {
        title: "N2 / Randweg",
        text: "Lokale ontsluiting van bedrijventerreinen GDC Acht, De Hurk en omliggende terreinen.",
      },
    ],
  },
  quoteForm: cityQuoteForm(cityName),
};

export const eindhoven = defineCityPage({
  cityName,
  provinceName,
  provinceSlug,
  slug,
  path,

  canonicalUrl: getCanonicalUrl(path),
  metaTitle: "Pallets in Eindhoven kopen en verkopen | De Palletman",
  metaDescription:
    "Pallets in Eindhoven en Brainport: B2B-levering op De Hurk, Flight Forum en GDC Acht. Inkoop bij bedrijven en particulieren. Europallets, HT-export.",

  h1: "Palletservice voor bedrijven in Eindhoven",
  heroSubtitle:
    "De Palletman in de Brainport-regio — tech, industrie en logistiek. Bezorgen uitsluitend aan bedrijven, ophalen bij bedrijven en particulieren.",
  heroEyebrow: "Brainport",

  introduction: {
    eyebrow: "Palletservice Eindhoven",
    title: "Palletpartner voor Brainport",
    text: "Eindhoven is het hart van Brainport — technologie, industrie, logistiek en productie in Noord-Brabant. De Palletman helpt bedrijven en particulieren in Eindhoven met gebruikte pallets — van europallets tot blokpallets, met eigen transport en snelle afhandeling.",
  },

  cityDescription:
    "Eindhoven en de Brainport-regio staan bekend om high-tech industrie, productie, logistiek en innovatie. De stad trekt bedrijven aan die behoefte hebben aan betrouwbare palletvoorziening voor opslag, assemblage, distributie en export. De Hurk, Flight Forum en GDC Acht zijn de drie belangrijkste bedrijventerreinen.",

  localEconomy:
    "Technologie, industrie, logistiek en productie domineren de economie rond Eindhoven. Semicon, maakindustrie, automotive en logistieke dienstverlening vragen dagelijks om pallets. De Brainport-ecosysteem — met bedrijven in Eindhoven, Veldhoven en Best — drijft continue vraag naar europallets, blokpallets en wegwerppallets.",

  palletServices: {
    buy: {
      eyebrow: "Voor bedrijven",
      title: "Pallets inkopen in Eindhoven",
      text: "De Palletman verkoopt gebruikte pallets uitsluitend aan bedrijven in Eindhoven en Brainport. Wij leveren europallets (A- en B-kwaliteit), blokpallets en wegwerppallets — in grote én kleine partijen. Bezorgen op De Hurk, Flight Forum, GDC Acht of uw eigen locatie.",
    },
    sell: {
      eyebrow: "Inkoop",
      title: "Pallets verkopen in Eindhoven",
      text: "Heeft u overtollige pallets in Eindhoven? Wij kopen in van bedrijven én particulieren. Eerlijke prijs, snelle betaling en ophalen met eigen transport — ook in Veldhoven, Best, Geldrop en Helmond.",
    },
  },

  palletTypes: {
    eyebrow: "Palletsoorten",
    title: "Veel gebruikte pallets in Brainport",
    intro:
      "In Eindhoven en Brainport zijn europallets, blokpallets en wegwerppallets het meest gevraagd — per sector en toepassing.",
    columns: 3,
    items: [
      {
        title: "Europallets",
        text: "Standaard voor logistiek op De Hurk, opslag bij producenten en distributie in Brainport.",
        href: "/europallets",
        linkLabel: "Europallets bekijken",
      },
      {
        title: "Blokpallets",
        text: "Voor zware industriële lading op Flight Forum en GDC Acht. Stevig en geschikt voor productie.",
        href: "/blokpallets",
        linkLabel: "Blokpallets bekijken",
      },
      {
        title: "Wegwerppallets",
        text: "Lichtgewicht voor export en eenmalig transport. Bulkpartijen voor Brainport-exporteurs.",
        href: "/wegwerppallets",
        linkLabel: "Wegwerppallets bekijken",
      },
    ],
  },

  transportText: {
    eyebrow: "Transport",
    title: "Ophalen en bezorgen in Eindhoven",
    intro:
      "Met eigen transport zijn wij dagelijks actief in Eindhoven, Veldhoven, Best en omliggende kernen in Brainport.",
    columns: 2,
    items: [
      {
        title: "Ophalen",
        text: "Wij halen pallets op bij bedrijven én particulieren in Eindhoven, Veldhoven, Best, Geldrop en Helmond.",
      },
      {
        title: "Bezorgen",
        text: "Bezorgen uitsluitend aan bedrijven — op De Hurk, Flight Forum, GDC Acht en overal in Brainport.",
      },
    ],
  },

  qualityText:
    "Eerste keus (A-kwaliteit): lichte of blanke europallets. Tweede keus (B-kwaliteit): donkere gebruikte pallets met normale slijtage, technisch volledig bruikbaar voor productie en logistiek.",

  exportText:
    "Voor internationale zendingen buiten de EU leveren wij HT-gestempelde pallets volgens ISPM 15. Beschikbaar op aanvraag voor bedrijven in Eindhoven en Brainport.",

  industrialAreas: {
    eyebrow: "Bedrijventerreinen",
    title: "Bedrijventerreinen in Eindhoven",
    intro:
      "Eindhoven kent grote bedrijventerreinen met intensief palletverkeer. De Palletman is hier dagelijks actief.",
    columns: 3,
    items: [
      {
        title: "De Hurk",
        text: "Een van de grootste bedrijventerreinen van Nederland — logistiek, productie en distributie. Europallets domineren het verkeer.",
      },
      {
        title: "Flight Forum",
        text: "Tech, productie en dienstverlening op een modern terrein. Vraag naar europallets en blokpallets voor diverse toepassingen.",
      },
      {
        title: "GDC Acht",
        text: "Distributiecentrum Acht — regionaal en internationaal knooppunt. Intensief palletverkeer voor opslag en cross-docking.",
      },
    ],
  },

  surroundingPlaces: {
    eyebrow: "Omliggende gemeenten",
    title: "Gemeenten rondom Eindhoven",
    intro:
      "Brainport strekt zich uit beyond Eindhoven. Wij zijn actief in omliggende gemeenten voor ophalen en B2B-levering.",
    columns: 2,
    variant: "white",
    items: [
      {
        title: "Veldhoven",
        text: "Tech- en semiconbedrijven in Veldhoven vragen om betrouwbare palletlevering. Wij halen op en bezorgen aan bedrijven.",
      },
      {
        title: "Best",
        text: "Producenten en logistieke bedrijven in Best profiteren van onze Brainport-routes.",
      },
      {
        title: "Geldrop",
        text: "Ook in Geldrop en omliggende kernen zijn wij beschikbaar voor palletinkoop en B2B-levering.",
      },
      {
        title: "Helmond",
        text: "Automotive en productie in Helmond — wij leveren pallets en halen op met eigen transport.",
      },
    ],
  },

  processSteps: [
    {
      title: "Contact opnemen",
      text: "Bel, app of mail ons. Vertel wat u zoekt of wilt verkopen — en waar in Eindhoven of Brainport.",
    },
    {
      title: "Offerte ontvangen",
      text: "Heldere prijs op basis van type, kwaliteit en aantal. Geen verrassingen.",
    },
    {
      title: "Ophalen of bezorgen",
      text: "Ophalen op uw locatie of bezorgen op uw bedrijfsadres — ook op De Hurk, Flight Forum of GDC Acht.",
    },
    {
      title: "Snelle afhandeling",
      text: "Verkoopt u pallets? Snelle betaling. Koopt u in? Voortvarende levering.",
    },
  ],

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "FAQ — Pallets in Eindhoven",
    intro: "Antwoorden op veelgestelde vragen over palletinkoop, -verkoop en transport in Eindhoven en Brainport.",
    items: [
      {
        question: "Leveren jullie pallets aan tech- en productiebedrijven in Eindhoven?",
        answer:
          "Ja, wij bezorgen uitsluitend aan bedrijven — waaronder tech-, industrie- en productiebedrijven in Eindhoven en Brainport. Particulieren kunnen pallets aan ons verkopen.",
      },
      {
        question: "Zijn jullie actief op De Hurk, Flight Forum en GDC Acht?",
        answer:
          "Ja, wij rijden regelmatig naar bedrijventerreinen in Eindhoven, waaronder De Hurk, Flight Forum en GDC Acht, voor ophalen en bezorgen.",
      },
      {
        question: "Rijden jullie ook naar Veldhoven, Best of Helmond?",
        answer:
          "Ja, naast Eindhoven zijn wij actief in Veldhoven, Best, Geldrop en Helmond voor palletinkoop en B2B-levering.",
      },
      {
        question: "Welke snelwegen zijn relevant voor Eindhoven?",
        answer:
          "Eindhoven ligt aan de A2 (Amsterdam–Luik), A50/A67 (richting Duitsland) en A58 (richting Tilburg). Ideaal voor Brainport-logistiek.",
      },
      {
        question: "Leveren jullie HT-gestempelde pallets voor export buiten de EU?",
        answer:
          "Ja, HT-gestempelde pallets volgens ISPM 15 zijn beschikbaar op aanvraag voor bedrijven in Eindhoven die internationaal exporteren.",
      },
      {
        question: "Wat is het verschil tussen A- en B-kwaliteit europallets?",
        answer:
          "A-kwaliteit (1e keus) zijn lichte of blanke pallets. B-kwaliteit (2e keus) zijn donkere gebruikte pallets — technisch bruikbaar en voordeliger.",
      },
      {
        question: "Kunnen jullie ook kleine partijen bezorgen in Eindhoven?",
        answer:
          "Ja, wij bezorgen ook kleinere partijen uitsluitend aan bedrijven — naast grotere volumes voor producenten en logistieke hubs.",
      },
      {
        question: "Kopen jullie pallets in van particulieren in Brainport?",
        answer:
          "Ja, inkoop doen wij van bedrijven én particulieren. Wij halen op met eigen transport en betalen snel.",
      },
    ],
  },

  ctaTitle: "Pallets nodig in Eindhoven?",
  ctaText:
    "Neem contact op voor een offerte of ophaalafspraak in Eindhoven en de Brainport-regio. Wij reageren snel en duidelijk.",
  ctaPrimaryLabel: "Vraag offerte aan",
  ctaPrimaryHref: "#offerte-formulier-heading",
  ctaSecondaryLabel: "Bel direct",
  ctaSecondaryHref: "tel:+31612345678",

  imageFilename: "pallets-eindhoven.webp",

  internalLinks: [
    { label: "Noord-Brabant", href: "/noord-brabant" },
    { label: "Werkgebied", href: "/werkgebied" },
    { label: "Pallets kopen", href: "/pallets-kopen" },
    { label: "Europallets", href: "/europallets" },
    { label: "Pallets verkopen", href: "/pallets-verkopen" },
    { label: "Pallets Breda", href: "/noord-brabant/pallets-breda" },
    { label: "Pallets Tilburg", href: "/noord-brabant/pallets-tilburg" },
  ],

  extended,

  openGraph: {
    title: "Pallets in Eindhoven kopen en verkopen | De Palletman",
    description:
      "B2B palletlevering in Brainport. Actief op De Hurk, Flight Forum en GDC Acht. Europallets, blokpallets, HT-export.",
  },

  schema: "auto",
});
