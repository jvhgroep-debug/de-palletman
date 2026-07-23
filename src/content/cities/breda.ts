/**
 * City Content Master — Breda (testpagina)
 *
 * Voorbeeldstad met alle verplichte velden.
 * Nieuwe steden kopiëren deze structuur en vullen unieke lokale content in.
 */
import { defineCityPage } from "../cityTypes";

export const breda = defineCityPage({
  cityName: "Breda",
  provinceName: "Noord-Brabant",
  provinceSlug: "noord-brabant",
  slug: "breda",
  path: "/noord-brabant/pallets-breda",

  metaTitle: "Pallets kopen en verkopen in Breda | De Palletman",
  metaDescription:
    "Gebruikte pallets in Breda: kopen voor bedrijven, verkopen door bedrijven en particulieren. Europallets, blokpallets en wegwerppallets. Ophalen en bezorgen in West-Brabant.",

  h1: "Pallets kopen en verkopen in Breda",
  heroSubtitle:
    "De Palletman helpt bedrijven en particulieren in Breda en West-Brabant — bezorgen uitsluitend aan bedrijven, ophalen bij iedereen.",
  heroEyebrow: "Breda",

  introduction: {
    eyebrow: "Lokaal in Breda",
    title: "Uw palletpartner in West-Brabant",
    text: "De Palletman is actief in Breda en de omliggende regio. Of u pallets nodig heeft voor uw bedrijf of overtollige pallets wilt verkopen: wij denken met u mee, geven een heldere prijs en regelen ophalen of bezorgen met eigen transport.",
  },

  cityDescription:
    "Breda is een belangrijk logistiek en zakelijk centrum in West-Brabant. De stad combineert een historisch centrum met moderne bedrijventerreinen en een strategische ligging nabij de A16, A58 en de havens rond Moerdijk. Daardoor is er veel vraag naar betrouwbare palletvoorziening voor logistiek, productie en handel.",

  localEconomy:
    "In Breda en omgeving zijn logistiek, productie, opslag, groothandel en retail sterk vertegenwoordigd. Bedrijven op terreinen als Hazeldonk, Minervum en Emer hebben regelmatig behoefte aan europallets, blokpallets of wegwerppallets — voor opslag, distributie of export.",

  palletServices: {
    buy: {
      eyebrow: "Voor bedrijven",
      title: "Pallets kopen voor bedrijven in Breda",
      text: "De Palletman levert gebruikte pallets uitsluitend aan bedrijven in Breda en omgeving. U kunt bij ons terecht voor europallets, blokpallets en wegwerppallets — in grote én kleine partijen. Wij adviseren over het juiste type en de gewenste kwaliteit, geven een transparante offerte en bezorgen op uw locatie met eigen transport.",
    },
    sell: {
      eyebrow: "Inkoop",
      title: "Pallets verkopen door bedrijven en particulieren",
      text: "Heeft u overtollige pallets staan in Breda? De Palletman koopt pallets in van bedrijven én particulieren. Geef het type, de kwaliteit en het aantal door — wij komen langs om op te halen en handelen de verkoop snel af. Dat geldt zowel voor enkele europallets als voor grotere partijen op een bedrijventerrein.",
    },
  },

  palletTypes: {
    eyebrow: "Assortiment",
    title: "Beschikbare palletsoorten in Breda",
    intro:
      "Voor bedrijven in Breda en West-Brabant leveren wij onder meer de volgende pallettype. Wij denken graag mee welk type past bij uw toepassing.",
    items: [
      {
        title: "Europallets",
        text: "De meest gevraagde pallet voor opslag en distributie in Breda. Geschikt voor logistiek, groothandel en retail.",
        href: "/europallets",
        linkLabel: "Meer over Europallets",
      },
      {
        title: "Blokpallets",
        text: "Stevige pallets voor zware ladingen en industriële toepassingen op bedrijventerreinen in en rond Breda.",
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

  qualityText:
    "Europallets zijn beschikbaar als A-kwaliteit (eerste keus): lichte of blanke pallets met een nette uitstraling. Of als B-kwaliteit (tweede keus): donkere gebruikte pallets met normale gebruikssporen, technisch volledig bruikbaar en voordeliger.",

  exportText:
    "Voor export buiten de Europese Unie kunnen HT-gestempelde pallets volgens ISPM 15 nodig zijn. Vraag ons naar beschikbaarheid en planning voor uw zending vanuit Breda.",

  transportText: {
    eyebrow: "Logistiek",
    title: "Ophalen en bezorgen in Breda",
    intro:
      "Met eigen transport zijn wij actief in Breda en West-Brabant. Zo werken wij samen:",
    items: [
      {
        title: "Ophalen",
        text: "Wij halen pallets op bij bedrijven én particulieren in Breda en omliggende plaatsen. Geef door waar en hoeveel pallets klaarstaan.",
      },
      {
        title: "Bezorgen",
        text: "Bezorgen doen wij uitsluitend aan bedrijven — van enkele pallets tot grotere partijen op uw adres in Breda of op een bedrijventerrein.",
      },
    ],
  },

  industrialAreas: {
    eyebrow: "Bedrijventerreinen",
    title: "Lokale bedrijventerreinen in Breda",
    intro:
      "De Palletman is actief op en rond de belangrijkste bedrijventerreinen in Breda. Onder meer:",
    items: [
      {
        title: "Hazeldonk",
        text: "Het grootste bedrijventerrein van Breda — veel logistiek, distributie en productie. Wij halen hier op en bezorgen aan bedrijven op het terrein.",
      },
      {
        title: "Minervum",
        text: "Bedrijventerrein in het noorden van Breda met een mix van industrie, opslag en handel. Regelmatig rijden wij langs voor ophalen en levering.",
      },
      {
        title: "Emer",
        text: "Terrein in Breda-Noord met productie en logistieke bedrijven. Ook hier regelen wij palletinkoop en -levering.",
      },
    ],
  },

  surroundingPlaces: {
    eyebrow: "Regio",
    title: "Omliggende plaatsen rond Breda",
    intro:
      "Naast Breda zelf rijden wij ook in omliggende kernen in West-Brabant. Denk aan:",
    items: [
      {
        title: "Etten-Leur",
        text: "Logistiek en industrie ten noorden van Breda — ophalen en bezorgen op aanvraag.",
      },
      {
        title: "Oosterhout",
        text: "Bedrijven in Oosterhout en omgeving kunnen op ons rekenen voor in- en verkoop van pallets.",
      },
      {
        title: "Prinsenbeek",
        text: "Dichtbij Breda en goed bereikbaar — wij plannen ophalen of levering mee in de regio.",
      },
      {
        title: "Rijen",
        text: "Ook richting Rijen en Zuidwest-Brabant rijden wij voor palletinkoop en -levering aan bedrijven.",
      },
    ],
  },

  processSteps: [
    {
      title: "Contact opnemen",
      text: "Bel, app of neem contact op via de website. Vertel ons wat u zoekt of wilt verkopen — en waar in Breda of omgeving.",
    },
    {
      title: "Offerte ontvangen",
      text: "U krijgt een heldere prijs op basis van type, kwaliteit en aantal. Geen verrassingen, wel duidelijke afspraken.",
    },
    {
      title: "Ophalen of bezorgen",
      text: "Wij plannen ophalen bij u op locatie of bezorgen op uw bedrijfsadres in Breda. Met eigen transport, flexibel ingepland.",
    },
    {
      title: "Snelle afhandeling",
      text: "Verkoopt u pallets? Wij handelen snel af. Koopt u in? Dan leveren wij voortvarend. Afspraak is afspraak.",
    },
  ],

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "FAQ — Pallets in Breda",
    intro: "Antwoorden op veelgestelde vragen over onze diensten in Breda en West-Brabant.",
    items: [
      {
        question: "Leveren jullie pallets aan particulieren in Breda?",
        answer:
          "Nee, bezorgen doen wij uitsluitend aan bedrijven. Particulieren kunnen wél pallets aan ons verkopen; wij halen dan op in Breda of omgeving.",
      },
      {
        question: "Rijden jullie ook naar bedrijventerreinen als Hazeldonk en Minervum?",
        answer:
          "Ja, wij zijn actief op de belangrijkste bedrijventerreinen in Breda, waaronder Hazeldonk, Minervum en Emer. Neem contact op voor planning op uw locatie.",
      },
      {
        question: "Welke kwaliteit europallets kan ik kopen?",
        answer:
          "A-kwaliteit (eerste keus): lichte of blanke pallets. B-kwaliteit (tweede keus): donkere gebruikte pallets, technisch bruikbaar. Voor export buiten de EU: HT-gestempeld volgens ISPM 15.",
      },
      {
        question: "Halen jullie ook kleine partijen op in Breda?",
        answer:
          "Ja, wij werken met grote én kleine partijen. Of u nu enkele pallets heeft staan of een grotere partij wilt verkopen — wij kijken wat past.",
      },
      {
        question: "Zijn jullie ook actief in Etten-Leur en Oosterhout?",
        answer:
          "Ja, naast Breda rijden wij ook in omliggende plaatsen zoals Etten-Leur, Oosterhout, Prinsenbeek en Rijen voor ophalen en bezorgen.",
      },
    ],
  },

  ctaTitle: "Pallets nodig in Breda?",
  ctaText:
    "Neem contact op voor een offerte, ophaalafspraak of advies over palletsoorten in Breda en West-Brabant. Wij reageren snel en duidelijk.",

  ctaPrimaryLabel: "Neem contact op",
  ctaPrimaryHref: "/contact",
  ctaSecondaryLabel: "Pallets verkopen",
  ctaSecondaryHref: "/pallets-verkopen",

  imageFilename: "pallets-breda.webp",

  internalLinks: [
    { label: "Noord-Brabant", href: "/noord-brabant" },
    { label: "Pallets kopen", href: "/pallets-kopen" },
    { label: "Pallets verkopen", href: "/pallets-verkopen" },
    { label: "Europallets", href: "/europallets" },
    { label: "Blokpallets", href: "/blokpallets" },
    { label: "Werkgebied", href: "/werkgebied" },
  ],

  openGraph: {
    title: "Pallets in Breda | De Palletman",
    description:
      "Gebruikte pallets kopen en verkopen in Breda. Europallets, blokpallets, ophalen en bezorgen in West-Brabant.",
  },

  schema: "auto",
});
