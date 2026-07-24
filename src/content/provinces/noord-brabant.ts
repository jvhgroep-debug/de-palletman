/**
 * Province Content Master — Noord-Brabant
 *
 * Voorbeeldprovincie met alle verplichte velden.
 * Nieuwe provincies kopiëren deze structuur en vullen alleen de content aan.
 */
import type { ProvinceTemplatePage } from "../provinceTypes";
import {
  EUROPALLET_HT_EXPORT_NOTE,
  EUROPALLET_QUALITY_COMBINED_TEXT,
  europalletQualityDifferenceAnswer,
} from "../shared/europalletQuality";

export const noordBrabant: ProvinceTemplatePage = {
  path: "/noord-brabant",
  template: "province",
  slug: "noord-brabant",

  province: {
    name: "Noord-Brabant",
    slug: "noord-brabant",
  },

  title: "Noord-Brabant",
  h1: "Pallets kopen en verkopen in Noord-Brabant",
  heroSubtitle:
    "De Palletman is actief in heel Noord-Brabant — ophalen bij bedrijven en particulieren, bezorgen uitsluitend aan bedrijven.",
  imageFilename: "pallets-noord-brabant.webp",

  intro: {
    eyebrow: "Werkgebied",
    title: "Uw palletpartner in Noord-Brabant",
    text: "Van Eindhoven tot Breda en van Tilburg tot Den Bosch: De Palletman helpt bedrijven en particulieren in Noord-Brabant met het kopen en verkopen van gebruikte pallets. Wij rijden met eigen transport door de provincie, geven snel een eerlijke prijs en regelen ophalen of bezorgen zonder gedoe.",
  },

  whyPalletman: {
    eyebrow: "Waarom De Palletman",
    title: "Betrouwbare partner in Noord-Brabant",
    intro:
      "Bedrijven en particulieren in Noord-Brabant kiezen voor De Palletman vanwege onze snelle service, heldere communicatie en jarenlange ervaring in de regio.",
    items: [
      {
        title: "Actief in heel de provincie",
        text: "Wij zijn dagelijks onderweg in Noord-Brabant — van Brainport Eindhoven tot de havens rond Moerdijk. Eén aanspreekpunt voor al uw palletvragen.",
      },
      {
        title: "Eigen transport",
        text: "Met ons eigen wagenpark halen wij pallets op en bezorgen wij op locatie. Geen tussenpersonen, wel korte lijnen en flexibele planning.",
      },
      {
        title: "Eerlijke prijzen",
        text: "U krijgt een transparante offerte op basis van type, kwaliteit en aantal. Geen verrassingen achteraf.",
      },
      {
        title: "B2B én inkoop van particulieren",
        text: "Verkoop uitsluitend aan bedrijven. Inkoop doen wij van bedrijven én particulieren — handig als u overtollige pallets heeft staan.",
      },
    ],
  },

  services: {
    eyebrow: "Onze diensten",
    title: "Diensten in Noord-Brabant",
    intro:
      "Of u pallets wilt inkopen voor uw bedrijf of overtollige pallets wilt verkopen: wij regelen het in Noord-Brabant.",
    items: [
      {
        title: "Pallets kopen",
        text: "Gebruikte europallets, blokpallets en wegwerppallets — geleverd aan bedrijven in Noord-Brabant met eigen transport.",
        href: "/pallets-kopen",
        linkLabel: "Pallets kopen",
      },
      {
        title: "Pallets verkopen",
        text: "Wij kopen pallets op bij bedrijven en particulieren door heel Noord-Brabant. Snelle afhandeling en eerlijke prijs.",
        href: "/pallets-verkopen",
        linkLabel: "Pallets verkopen",
      },
      {
        title: "Europallets",
        text: `${EUROPALLET_QUALITY_COMBINED_TEXT} ${EUROPALLET_HT_EXPORT_NOTE}`,
        href: "/europallets",
        linkLabel: "Europallets",
      },
      {
        title: "Blokpallets & wegwerppallets",
        text: "Blokpallets voor zware ladingen, wegwerppallets voor eenmalig transport. Grote én kleine partijen — wij denken mee over het juiste type.",
        href: "/blokpallets",
        linkLabel: "Blokpallets",
      },
    ],
  },

  palletTypes: {
    eyebrow: "Assortiment",
    title: "Veel voorkomende palletsoorten in Noord-Brabant",
    intro:
      "In logistiek, productie en handel in Noord-Brabant worden deze pallettype het meest gevraagd. Wij hebben ze regelmatig op voorraad.",
    items: [
      {
        title: "Europallets",
        text: `${EUROPALLET_QUALITY_COMBINED_TEXT} ${EUROPALLET_HT_EXPORT_NOTE}`,
        href: "/europallets",
        linkLabel: "Meer over Europallets",
      },
      {
        title: "Blokpallets",
        text: "Populair in de industrie en bij zware ladingen. Stevig, betrouwbaar en geschikt voor magazijnen en productiehallen.",
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
  },

  pickupDelivery: {
    eyebrow: "Logistiek",
    title: "Ophalen en bezorgen in Noord-Brabant",
    intro:
      "Wij rijden met eigen transport door heel Noord-Brabant. Zo werkt het bij ons:",
    items: [
      {
        title: "Ophalen",
        text: "Wij halen pallets op bij bedrijven én particulieren in Noord-Brabant. Geef door hoeveel pallets u heeft staan en wij plannen een ophaalmoment in.",
      },
      {
        title: "Bezorgen",
        text: "Bezorgen doen wij uitsluitend aan bedrijven. Van enkele pallets tot grote partijen — wij leveren op uw locatie in de provincie.",
      },
    ],
  },

  workArea: {
    eyebrow: "Regio",
    title: "Werkgebied binnen Noord-Brabant",
    intro:
      "De Palletman is actief in onder meer de volgende plaatsen en regio's. Staat uw locatie er niet bij? Neem gerust contact op.",
    items: [
      {
        title: "Eindhoven",
        text: "Brainport en omgeving — ophalen en bezorgen voor bedrijven in en rond Eindhoven.",
        href: "/noord-brabant/pallets-eindhoven",
        linkLabel: "Pallets in Eindhoven",
      },
      {
        title: "Tilburg",
        text: "Logistiek, productie en distributie in Tilburg en Midden-Brabant.",
        href: "/noord-brabant/pallets-tilburg",
        linkLabel: "Pallets in Tilburg",
      },
      {
        title: "Breda",
        text: "Logistiek en bedrijvigheid in West-Brabant — snelle service in en rond Breda.",
        href: "/noord-brabant/pallets-breda",
        linkLabel: "Pallets in Breda",
      },
      {
        title: "'s-Hertogenbosch",
        text: "Centraal in Noord-Brabant, actief in en rond Den Bosch.",
      },
      {
        title: "Helmond",
        text: "Industrie en distributie in Helmond en omliggende gemeenten.",
      },
      {
        title: "Roosendaal & Oss",
        text: "Ook in Zuidwest-Brabant en het oosten van de provincie rijden wij regelmatig.",
      },
    ],
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "FAQ — Pallets in Noord-Brabant",
    intro: "Antwoorden op veelgestelde vragen over onze diensten in Noord-Brabant.",
    items: [
      {
        question: "Leveren jullie ook aan particulieren in Noord-Brabant?",
        answer:
          "Verkoop (bezorgen) doen wij uitsluitend aan bedrijven. Inkoop (ophalen) doen wij wél van bedrijven én particulieren in Noord-Brabant.",
      },
      {
        question: "Hoe snel kunnen jullie pallets bezorgen in Noord-Brabant?",
        answer:
          "Dat hangt af van type, aantal en uw locatie. Neem contact op voor een concrete planning — wij proberen zo snel mogelijk te leveren.",
      },
      {
        question: "Halen jullie pallets op in heel Noord-Brabant?",
        answer:
          "Ja, wij halen pallets op door heel Noord-Brabant bij bedrijven en particulieren. Geef het aantal en type door, dan maken wij een afspraak.",
      },
      {
        question: "Welke palletsoorten zijn het meest gevraagd in Noord-Brabant?",
        answer:
          "Europallets zijn het meest gevraagd, gevolgd door blokpallets en wegwerppallets. Wij adviseren graag welk type past bij uw toepassing.",
      },
    ],
  },

  cta: {
    title: "Pallets nodig in Noord-Brabant?",
    text: "Neem contact op voor een offerte, ophaalafspraak of meer informatie over onze diensten in Noord-Brabant.",
    primaryLabel: "Neem contact op",
    primaryHref: "/contact",
    secondaryLabel: "Bekijk alle diensten",
    secondaryHref: "/pallets-kopen",
  },

  seo: {
    metaTitle: "Pallets kopen en verkopen in Noord-Brabant | De Palletman",
    metaDescription:
      "De Palletman is actief in Noord-Brabant. Pallets kopen (B2B), verkopen (bedrijven & particulieren), ophalen en bezorgen met eigen transport in Eindhoven, Tilburg, Breda en omgeving.",
    openGraph: {
      title: "Pallets in Noord-Brabant | De Palletman",
      description:
        "Kopen, verkopen, ophalen en bezorgen van gebruikte pallets in heel Noord-Brabant.",
    },
    schema: "auto",
  },
};
