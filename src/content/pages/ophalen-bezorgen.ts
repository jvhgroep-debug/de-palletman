/**
 * Content Master — Ophalen en bezorgen (werkgebied)
 */
import type { ServiceTemplatePage } from "../types";
import {
  PROVINCES,
  defaultCta,
  serviceConversion,
  serviceCtaBanner,
  serviceQuoteForm,
  serviceTransport,
  serviceTrust,
  standardInternalLinks,
} from "./shared/serviceDefaults";

export const ophalenBezorgen: ServiceTemplatePage = {
  path: "/werkgebied",
  template: "service",

  title: "Ophalen en bezorgen",
  h1: "Ophalen en bezorgen met eigen transport",
  heroSubtitle:
    "De Palletman rijdt met eigen wagenpark door Zuid- en Midden-Nederland — snelle planning, ophalen bij bedrijven en particulieren, bezorgen uitsluitend aan bedrijven.",
  imageFilename: "hero-ophalen-bezorgen.webp",
  imageAlt: "Pallets ophalen en bezorgen — eigen transport De Palletman",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Ophalen en bezorgen" },
  ],

  intro: {
    eyebrow: "Logistiek",
    title: "Eigen transport door Zuid- en Midden-Nederland",
    text: `De Palletman regelt ophalen en bezorgen met eigen transport in ${PROVINCES}. Wij halen pallets op bij bedrijven én particulieren en bezorgen uitsluitend aan bedrijven. Snelle planning, korte lijnen en persoonlijk contact — één vaste partner voor al uw palletlogistiek.`,
  },

  extended: {
    conversion: serviceConversion(
      "Plan ophalen of bezorgen — bel direct, stuur een WhatsApp of vraag een offerte aan. Reactie binnen 24 uur.",
    ),

    whenToChoose: {
      eyebrow: "Service",
      title: "Wanneer schakelt u ons transport in?",
      intro: "Onze transportdienst is ideaal wanneer:",
      columns: 2,
      items: [
        { title: "Pallets laten ophalen", text: "Overtollige pallets bij bedrijf of particulier — wij laden en rijden." },
        { title: "Pallets laten bezorgen", text: "Als bedrijf nieuwe partijen nodig heeft op locatie — wij leveren." },
        { title: "Combinatie in- en verkoop", text: "Ophalen én bezorgen in één rit — efficiënt en praktisch." },
        { title: "Regio Zuid- en Midden-NL", text: "Uw locatie ligt in ons werkgebied — wij rijden dagelijks." },
        { title: "Snelle planning nodig", text: "Korte lijnen — wij proberen snel in te plannen." },
        { title: "Geen eigen transport", text: "U heeft geen vrachtwagen — wij regelen het." },
      ],
    },

    trust: serviceTrust(
      "Bedrijven én particulieren vertrouwen op De Palletman voor betrouwbaar pallettransport:",
    ),

    specifications: {
      eyebrow: "Service",
      title: "Specificaties transportdienst",
      intro: "Zo werkt ophalen en bezorgen bij De Palletman.",
      columns: 2,
      items: [
        { title: "Eigen wagenpark", text: "Geen externe transporteurs — korte lijnen en persoonlijk contact." },
        { title: "Ophalen", text: "Bij bedrijven én particulieren — europallets, blokpallets, wegwerppallets." },
        { title: "Bezorgen", text: "Uitsluitend aan bedrijven (B2B)." },
        { title: "Planning", text: "Afspraak op maat — geef voorkeursdag en tijdvenster door." },
        { title: "Laadperron", text: "Wij plannen bereikbaarheid en laden/lossen vooraf met u af." },
        { title: "Volumes", text: "Van enkele pallets tot volle ladingen." },
      ],
    },

    dimensions: {
      eyebrow: "Regio",
      title: "Levergebieden per provincie",
      intro: "Wij zijn actief in de volgende provincies — klik door voor provincie-informatie.",
      columns: 3,
      items: [
        { title: "Noord-Brabant", text: "Ophalen en bezorgen in heel Brabant.", href: "/noord-brabant", linkLabel: "Pallets Noord-Brabant" },
        { title: "Zuid-Holland", text: "Actief in Rotterdam, Den Haag en omgeving.", href: "/zuid-holland", linkLabel: "Pallets Zuid-Holland" },
        { title: "Zeeland", text: "Palletservice in Zeeland.", href: "/zeeland", linkLabel: "Pallets Zeeland" },
        { title: "Limburg", text: "In- en verkoop in Limburg.", href: "/limburg", linkLabel: "Pallets Limburg" },
        { title: "Utrecht", text: "Ophalen en bezorgen in Utrecht.", href: "/utrecht", linkLabel: "Pallets Utrecht" },
        { title: "Gelderland", text: "Actief in Gelderland.", href: "/gelderland", linkLabel: "Pallets Gelderland" },
      ],
    },

    practical: {
      eyebrow: "Praktisch",
      title: "Praktische informatie",
      intro: "Alles over ophalen, bezorgen en planning.",
      columns: 2,
      items: [
        { title: "Eigen transport", text: "Ons eigen wagenpark — geen tussenpersonen." },
        { title: "Snelle planning", text: "Wij proberen snel in te plannen na akkoord." },
        { title: "Ophalen op locatie", text: "Bedrijventerrein, magazijn of particulier adres." },
        { title: "Bezorgen B2B", text: "Levering uitsluitend aan bedrijven." },
        { title: "Grote én kleine partijen", text: "Flexibel meedenken." },
        { title: "Offerte binnen 24 uur", text: "Snelle reactie op transportaanvragen." },
      ],
    },

    delivery: {
      eyebrow: "Bezorgen",
      title: "Pallets bezorgen aan uw bedrijf",
      intro: "Bezorgen doen wij uitsluitend aan bedrijven in ons werkgebied.",
      columns: 2,
      items: [
        { title: "B2B-levering", text: "Europallets, blokpallets, wegwerppallets op locatie." },
        { title: "Lossen", text: "Op laadperron of magazijn — vooraf afstemmen." },
        { title: "Levertijden", text: "Vaak binnen enkele werkdagen na akkoord." },
        { title: "Planning", text: "Flexibel levermoment." },
      ],
    },

    transport: serviceTransport(
      "Eigen transport is de kern van onze service — ophalen én bezorgen door Zuid- en Midden-Nederland.",
      [
        { title: "Eigen wagenpark", text: "Wij rijden zelf — korte lijnen, persoonlijk contact." },
        { title: "Snelle planning", text: "Efficiënte ritten — snel ingepland na akkoord." },
        { title: "Ophalen & bezorgen", text: "Beide diensten — ook combineren in één rit." },
        { title: "Werkgebied", text: PROVINCES },
      ],
    ),

    pickup: {
      eyebrow: "Ophalen",
      title: "Pallets ophalen op locatie",
      intro: "Wij halen op bij bedrijven én particulieren.",
      columns: 2,
      items: [
        { title: "Bedrijven", text: "Overtollige pallets op bedrijventerrein — wij laden.", href: "/pallets-verkopen", linkLabel: "Pallets verkopen" },
        { title: "Particulieren", text: "Ook particulieren kunnen laten ophalen." },
        { title: "Snelle betaling", text: "Bij inkoop betalen wij snel na ophalen." },
        { title: "Alle types", text: "Europallets, blokpallets, wegwerppallets." },
      ],
    },

    largeBatches: {
      eyebrow: "Volume",
      title: "Grote partijen transport",
      text: "Volle vrachtwagenladingen ophalen of bezorgen? Wij plannen efficiënte ritten voor grote volumes — structurele afname of eenmalige bulkpartijen.",
    },

    smallBatches: {
      eyebrow: "Flexibel",
      title: "Kleine partijen transport",
      text: "Ook enkele pallets ophalen of bezorgen? Geen partij te klein — wij denken flexibel mee binnen ons werkgebied.",
    },

    ctaBanner: serviceCtaBanner(
      "Ophalen of bezorgen plannen?",
      "Eigen transport, snelle planning — in Zuid-Holland, Noord-Brabant, Zeeland, Limburg, Utrecht en Gelderland.",
      "cta-pallets.webp",
      "Ophalen en bezorgen — De Palletman transport",
    ),

    quoteForm: serviceQuoteForm(
      "Offerteformulier — ophalen of bezorgen",
      "Vul het formulier in voor ophalen, bezorgen of beide. Vermeld type, aantal en locatie — reactie binnen 24 uur.",
    ),
  },

  seoText: {
    types: {
      eyebrow: "Diensten",
      title: "Onze palletdiensten",
      intro: "Ophalen en bezorgen in combinatie met onze in- en verkoop.",
      items: [
        { title: "Pallets kopen", text: "Bezorgen aan bedrijven.", href: "/pallets-kopen", linkLabel: "Pallets kopen" },
        { title: "Pallets verkopen", text: "Ophalen op locatie.", href: "/pallets-verkopen", linkLabel: "Pallets verkopen" },
        { title: "Europallets", text: "A- en B-kwaliteit.", href: "/europallets", linkLabel: "Europallets" },
      ],
    },
    qualities: {
      eyebrow: "Service",
      title: "Kwaliteit van onze transportdienst",
      intro: "Betrouwbaar, snel en persoonlijk — dat mag u verwachten.",
      items: [
        { title: "Eigen transport", text: "Geen uitbesteding — direct contact." },
        { title: "Snelle planning", text: "Korte lijnen — snel ingepland." },
        { title: "Betrouwbare afspraken", text: "Wij komen onze planning na." },
        { title: "Flexibel", text: "Grote én kleine partijen." },
        { title: "Regio-expertise", text: "Dagelijks op de weg in ons werkgebied." },
        { title: "Persoonlijk contact", text: "Één vaste aanspreekpunt." },
      ],
    },
  },

  usps: {
    eyebrow: "Voordelen",
    title: "Voordelen van ons transport",
    intro: "Waarom klanten kiezen voor ophalen en bezorgen via De Palletman:",
    columns: 2,
    items: [
      { title: "Eigen transport", text: "Ons wagenpark — geen tussenpersonen." },
      { title: "Snelle planning", text: "Efficiënt ingepland na akkoord." },
      { title: "6 provincies", text: PROVINCES },
      { title: "Ophalen particulier", text: "Ook particulieren laten ophalen." },
      { title: "Bezorgen B2B", text: "Levering aan bedrijven." },
      { title: "Combinatie mogelijk", text: "Ophalen én bezorgen in één rit." },
      { title: "Korte lijnen", text: "Direct contact met uw vaste persoon." },
      { title: "Offerte binnen 24 uur", text: "Snelle reactie." },
    ],
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "FAQ — Ophalen en bezorgen",
    intro: "Antwoorden op veelgestelde vragen over ons transport.",
    items: [
      { question: "In welke provincies zijn jullie actief?", answer: `In ${PROVINCES}.` },
      { question: "Halen jullie ook op bij particulieren?", answer: "Ja. Ophalen bij bedrijven én particulieren." },
      { question: "Bezorgen jullie aan particulieren?", answer: "Nee. Bezorgen uitsluitend aan bedrijven (B2B)." },
      { question: "Hoe snel kunnen jullie ophalen of bezorgen?", answer: "Vaak binnen enkele werkdagen na akkoord — afhankelijk van planning." },
      { question: "Rijden jullie met eigen transport?", answer: "Ja. Ons eigen wagenpark — geen externe transporteurs." },
      { question: "Kan ik ophalen en bezorgen combineren?", answer: "Ja. Veel klanten doen beide in één afspraak." },
      { question: "Wat kost transport?", answer: "Afhankelijk van locatie, aantal en type. Vraag een offerte aan." },
      { question: "Halen jullie ook kleine partijen op?", answer: "Ja. Flexibel meedenken." },
      { question: "Bezorgen jullie in heel Zuid-Holland?", answer: "Ja, Zuid-Holland is onderdeel van ons werkgebied." },
      { question: "Hoe plan ik ophalen of bezorgen?", answer: "Via telefoon, WhatsApp, e-mail of het formulier onderaan." },
    ],
  },

  cta: {
    title: "Ophalen of bezorgen plannen?",
    text: "Bel direct of vraag een offerte aan — eigen transport, snelle planning in Zuid- en Midden-Nederland.",
    ...defaultCta,
  },

  internalLinks: standardInternalLinks,

  seo: {
    metaTitle: "Ophalen en bezorgen pallets | Eigen transport | De Palletman",
    metaDescription:
      "Pallets ophalen en bezorgen met eigen transport. Actief in Zuid-Holland, Noord-Brabant, Zeeland, Limburg, Utrecht en Gelderland. Snelle planning, ophalen bij particulieren.",
    openGraph: {
      title: "Ophalen en bezorgen | De Palletman",
      description: "Eigen transport door Zuid- en Midden-Nederland — snelle planning, ophalen en bezorgen.",
      image: "https://www.depalletman.nl/images/hero-ophalen-bezorgen.webp",
    },
    schema: "auto",
  },
};
