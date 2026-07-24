/**
 * Content Master — Europallets
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
import {
  EUROPALLET_A_IMAGE_ALT,
  EUROPALLET_A_QUALITY_TEXT,
  EUROPALLET_A_QUALITY_TITLE,
  EUROPALLET_B_IMAGE_ALT,
  EUROPALLET_B_QUALITY_TEXT,
  EUROPALLET_B_QUALITY_TITLE,
  europalletQualityDifferenceAnswer,
  europalletQualitySectionItems,
} from "../shared/europalletQuality";

export const europallets: ServiceTemplatePage = {
  path: "/europallets",
  template: "service",

  title: "Europallets",
  h1: "Gebruikte europallets kopen voor uw bedrijf",
  heroSubtitle:
    "EUR-pallets in A-kwaliteit (1e keus) en B-kwaliteit (2e keus) — wij leveren uitsluitend aan bedrijven, met eigen transport en HT-gestempeld voor export buiten de EU.",
  imageFilename: "hero-europallets.webp",
  imageAlt: "Gebruikte europallets kopen — A- en B-kwaliteit voor bedrijven",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Europallets" },
  ],

  intro: {
    eyebrow: "Logistieke standaard",
    title: "Europallets voor transport, opslag en export",
    text: `Europallets zijn de meest gebruikte pallets in Europa (800 × 1200 mm). De Palletman levert gebruikte europallets uitsluitend aan bedrijven in ${PROVINCES} — in A-kwaliteit (1e keus) en B-kwaliteit (2e keus). Ook HT-gestempeld voor export buiten de EU. Wij denken mee, geven een heldere offerte en bezorgen met eigen transport.`,
  },

  extended: {
    conversion: serviceConversion(
      "Vraag een offerte aan voor europallets — wij reageren doorgaans binnen 24 uur met prijs, beschikbaarheid en levertijd.",
    ),

    whenToChoose: {
      eyebrow: "Toepassing",
      title: "Wanneer kiest u voor europallets?",
      intro: "Europallets zijn de logistieke standaard in Europa. Dit past bij u wanneer:",
      columns: 2,
      items: [
        { title: "Standaard logistiek", text: "EUR-formaat (800 × 1200 mm) past in trailers, containers en magazijnstellingen." },
        { title: "Internationaal transport", text: "Europallets worden Europe-breed herkend en geaccepteerd in de supply chain." },
        { title: "Opslag en racking", text: "Geschikt voor europallet-racking en block-stacking in magazijnen." },
        { title: "Retail en distributie", text: "A-kwaliteit (1e keus) voor presentatie; B-kwaliteit (2e keus) voor intern gebruik." },
        { title: "Export buiten de EU", text: "HT-gestempelde europallets volgens ISPM 15 — verplicht voor verscheping buiten Europa." },
        { title: "Kostenefficiënt alternatief", text: "Gebruikte europallets bieden dezelfde functionaliteit tegen lagere kosten dan nieuw." },
      ],
    },

    trust: serviceTrust(
      "Bedrijven in Zuid- en Midden-Nederland vertrouwen op De Palletman voor betrouwbare europallet-levering:",
    ),

    europalletInfo: {
      eyebrow: "Europallets",
      title: "Europallet-kwaliteiten uitgelegd",
      intro:
        "Het verschil tussen A-kwaliteit (1e keus) en B-kwaliteit (2e keus) zit uitsluitend in uitstraling, gebruikssporen en kleur — beide kwaliteiten zijn technisch volledig inzetbaar.",
      imageCards: [
        {
          filename: "kwaliteit-a.webp",
          alt: EUROPALLET_A_IMAGE_ALT,
          title: EUROPALLET_A_QUALITY_TITLE,
          text: EUROPALLET_A_QUALITY_TEXT,
        },
        {
          filename: "kwaliteit-b.webp",
          alt: EUROPALLET_B_IMAGE_ALT,
          title: EUROPALLET_B_QUALITY_TITLE,
          text: EUROPALLET_B_QUALITY_TEXT,
        },
      ],
    },

    specifications: {
      eyebrow: "Technisch",
      title: "Specificaties europallets",
      intro: "Gangbare specificaties van gebruikte europallets — exacte conditie vermelden wij in de offerte.",
      columns: 2,
      items: [
        { title: "Formaat", text: "800 × 1200 mm (EUR-norm) — standaard in Europese logistiek." },
        { title: "Materiaal", text: "Naaldhout (grenen/dennenhout), verbonden met nagels." },
        { title: "Hoogte", text: "Circa 144 mm — past onder roldeuren en heftrucktoepassingen." },
        { title: "Draagvermogen", text: "Doorgaans 1.000–1.500 kg dynamisch bij technisch goede conditie." },
        { title: "HT-gestempeld", text: "Voor export buiten de EU: Heat Treatment volgens ISPM 15. Stempel op het hout." },
        { title: "Inspectie", text: "Elke partij wordt visueel gecontroleerd vóór levering." },
      ],
    },

    dimensions: {
      eyebrow: "Formaten",
      title: "Beschikbare afmetingen",
      intro: "Europallets hebben een vast standaardformaat.",
      columns: 3,
      items: [
        { title: "Breedte", text: "800 mm — past in standaard trailers en containers." },
        { title: "Lengte", text: "1200 mm — europallet-racking compatibel." },
        { title: "Hoogte", text: "Circa 144 mm standaard." },
        { title: "Stapelbaarheid", text: "Onderling stapelbaar in racking en block-stacking." },
        { title: "Gewicht", text: "Circa 20–25 kg per pallet, afhankelijk van conditie." },
        { title: "Andere formaten", text: "Voor afwijkende formaten: bekijk blokpallets of wegwerppallets." },
      ],
    },

    practical: {
      eyebrow: "Praktisch",
      title: "Praktische informatie",
      intro: "Alles over europallet-levering en bestelling.",
      columns: 2,
      items: [
        { title: "Minimale afname", text: "Flexibel — van enkele pallets tot volle ladingen." },
        { title: "Levergebieden", text: `Bezorgen in ${PROVINCES} — uitsluitend aan bedrijven (B2B).` },
        { title: "Levertijden", text: "Dankzij voorraad vaak snel leverbaar." },
        { title: "HT voor export", text: "Informeer tijdig bij export buiten de EU." },
        { title: "Kwaliteitskeuze", text: "A-kwaliteit (1e keus) of B-kwaliteit (2e keus)." },
        { title: "Offerte binnen 24 uur", text: "Vraag aan via telefoon, WhatsApp, e-mail of het formulier." },
      ],
    },

    delivery: {
      eyebrow: "Logistiek",
      title: "Levering europallets",
      intro: "Wij bezorgen uitsluitend aan bedrijven op locatie.",
      columns: 2,
      items: [
        { title: "Eigen transport", text: "Bezorgen met ons eigen wagenpark." },
        { title: "B2B-only", text: "Levering uitsluitend aan bedrijven." },
        { title: "Lossen op locatie", text: "Laadperron, magazijn of bedrijventerrein." },
        { title: "Volumes", text: "Grote én kleine partijen welkom." },
      ],
    },

    transport: serviceTransport(
      "Europallets bezorgen wij met eigen transport door Zuid- en Midden-Nederland.",
      [
        { title: "Bezorgen aan bedrijven", text: "Levering op uw locatie — A- of B-kwaliteit, eventueel HT-gestempeld." },
        { title: "Ophalen overtollige europallets", text: "Te veel europallets? Wij kopen in en halen op.", href: "/pallets-verkopen", linkLabel: "Pallets verkopen" },
        { title: "Flexibele planning", text: "Stem het levermoment af op uw planning." },
        { title: "Werkgebied", text: PROVINCES, href: "/werkgebied", linkLabel: "Ophalen en bezorgen" },
      ],
    ),

    pickup: {
      eyebrow: "Inkoop",
      title: "Europallets verkopen",
      intro: "Overtollige europallets? Wij kopen in van bedrijven én particulieren.",
      columns: 2,
      items: [
        { title: "Inkoop europallets", text: "A- en B-kwaliteit — eerlijke prijsopgave.", href: "/pallets-verkopen", linkLabel: "Pallets verkopen" },
        { title: "Ophalen op locatie", text: "Eigen transport." },
        { title: "Snelle betaling", text: "Betrouwbare afhandeling." },
        { title: "Grote én kleine partijen", text: "Flexibel meedenken." },
      ],
    },

    largeBatches: {
      eyebrow: "Volume",
      title: "Grote partijen europallets",
      text: "Regelmatig grote volumes nodig? Structurele levering, vaste prijsafspraken en efficiënte planning — van wekelijkse aanvulling tot bulkleveringen.",
    },

    smallBatches: {
      eyebrow: "Flexibel",
      title: "Kleine partijen europallets",
      text: "Ook enkele europallets welkom — wij leveren flexibel mee voor kleine bedrijven of incidentele vraag.",
    },

    ctaBanner: serviceCtaBanner(
      "Europallets nodig?",
      "Vraag een offerte aan voor A- of B-kwaliteit — ook HT-gestempeld voor export buiten de EU.",
      "cta-pallets.webp",
      "Europallets kopen bij De Palletman",
    ),

    quoteForm: serviceQuoteForm(
      "Offerteformulier — europallets",
      "Vul het formulier in. Vermeld kwaliteit (A/B), aantal, HT-export indien nodig en uw locatie.",
    ),
  },

  seoText: {
    types: {
      eyebrow: "Gerelateerd",
      title: "Andere pallettypes",
      intro: "Naast europallets leveren wij ook andere pallettypes.",
      items: [
        { title: "Blokpallets", text: "Voor zware industriële ladingen.", href: "/blokpallets", linkLabel: "Meer over Blokpallets" },
        { title: "Wegwerppallets", text: "Lichtgewicht voor eenmalig transport.", href: "/wegwerppallets", linkLabel: "Meer over Wegwerppallets" },
        { title: "Pallets kopen", text: "Overzicht van al onze inkoopdiensten.", href: "/pallets-kopen", linkLabel: "Pallets kopen" },
      ],
    },
    qualities: {
      eyebrow: "Kwaliteit",
      title: "Kwaliteiten europallets",
      intro: "Gebruikte europallets in duidelijke kwaliteitsklassen — eerlijk omschreven.",
      items: [
        ...europalletQualitySectionItems(),
        { title: "Verschil 1e en 2e keus", text: "Uitstraling, gebruikssporen en kleur — beide kwaliteiten zijn technisch volledig inzetbaar." },
        { title: "HT-gestempeld export buiten EU", text: "Verplicht volgens ISPM 15. Op aanvraag." },
        { title: "Kwaliteitscontrole", text: "Visuele inspectie voor levering." },
        { title: "Eerlijke omschrijving", text: "Conditie staat helder in de offerte." },
      ],
    },
  },

  usps: {
    eyebrow: "Voordelen",
    title: "Voordelen europallets bij De Palletman",
    intro: "Waarom bedrijven europallets bij ons inkopen:",
    columns: 2,
    items: [
      { title: "A- en B-kwaliteit", text: "1e keus en 2e keus — passend bij toepassing en budget." },
      { title: "HT voor export", text: "HT-gestempeld voor verscheping buiten de EU." },
      { title: "Eigen transport", text: "Bezorgen op locatie." },
      { title: "Grote voorraad", text: "Vaak snel leverbaar." },
      { title: "B2B-levering", text: "Uitsluitend aan bedrijven." },
      { title: "Eerlijke prijzen", text: "Transparante offerte." },
      { title: "Persoonlijk advies", text: "Wij denken mee over A of B." },
      { title: "Offerte binnen 24 uur", text: "Snelle reactie." },
    ],
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "FAQ — Europallets",
    intro: "Antwoorden op veelgestelde vragen over europallets.",
    items: [
      { question: "Wat is het verschil tussen A-kwaliteit en B-kwaliteit?", answer: europalletQualityDifferenceAnswer() },
      { question: "Leveren jullie HT-gestempelde europallets voor export buiten de EU?", answer: "Ja, op aanvraag volgens ISPM 15." },
      { question: "Wat zijn de afmetingen van een europallet?", answer: "800 × 1200 mm, hoogte circa 144 mm." },
      { question: "Leveren jullie aan particulieren?", answer: "Nee. Uitsluitend B2B-levering aan bedrijven." },
      { question: "Kopen jullie ook europallets in?", answer: "Ja, van bedrijven én particulieren — wij halen op." },
      { question: "Hoe snel kunnen jullie leveren?", answer: "Vaak binnen enkele werkdagen." },
      { question: "Kan ik kleine partijen bestellen?", answer: "Ja. Van enkele pallets tot volle ladingen." },
      { question: "In welk gebied bezorgen jullie?", answer: `In ${PROVINCES}.` },
      { question: "Hoe vraag ik een offerte aan?", answer: "Via telefoon, WhatsApp, e-mail of het formulier." },
      { question: "Wat is HT-gestempeld?", answer: "Heat Treatment volgens ISPM 15 — verplicht voor export buiten de EU." },
    ],
  },

  cta: {
    title: "Europallets bestellen?",
    text: "Vraag een offerte aan — wij reageren snel, doorgaans binnen 24 uur.",
    ...defaultCta,
  },

  internalLinks: standardInternalLinks,

  seo: {
    metaTitle: "Europallets kopen | A- & B-kwaliteit, HT export | De Palletman",
    metaDescription:
      "Gebruikte europallets kopen? A-kwaliteit (1e keus) en B-kwaliteit (2e keus), HT-gestempeld voor export buiten EU. B2B, eigen transport in Zuid- en Midden-Nederland.",
    openGraph: {
      title: "Europallets kopen | De Palletman",
      description: "Gebruikte europallets in A- en B-kwaliteit — HT voor export, B2B-levering.",
      image: "https://www.depalletman.nl/images/hero-europallets.webp",
    },
    schema: "auto",
  },
};
