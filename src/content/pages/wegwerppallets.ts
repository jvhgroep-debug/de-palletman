/**
 * Content Master — Wegwerppallets
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

export const wegwerppallets: ServiceTemplatePage = {
  path: "/wegwerppallets",
  template: "service",

  title: "Wegwerppallets",
  h1: "Wegwerppallets kopen voor export en eenmalig gebruik",
  heroSubtitle:
    "Lichtgewicht wegwerppallets voor eenmalig transport en export — bulkpartijen beschikbaar, B2B-levering met eigen transport.",
  imageFilename: "hero-wegwerppallets.webp",
  imageAlt: "Wegwerppallets kopen — lichtgewicht voor export en eenmalig gebruik",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Wegwerppallets" },
  ],

  intro: {
    eyebrow: "Praktische oplossing",
    title: "Wegwerppallets voor eenmalig transport",
    text: `Wegwerppallets zijn de betaalbare keuze wanneer hergebruik geen prioriteit is. De Palletman levert wegwerppallets uitsluitend aan bedrijven in ${PROVINCES} — ideaal voor export, eenmalige zendingen en bulkpartijen. Lichtgewicht, praktisch en snel beschikbaar.`,
  },

  extended: {
    conversion: serviceConversion(
      "Vraag een offerte aan voor wegwerppallets — reactie binnen 24 uur, ook voor bulkpartijen.",
    ),

    whenToChoose: {
      eyebrow: "Toepassing",
      title: "Wanneer kiest u voor wegwerppallets?",
      intro: "Wegwerppallets zijn de praktische keuze wanneer:",
      columns: 2,
      items: [
        { title: "Eenmalig transport", text: "De pallet hoeft niet retour — kostenbesparend voor eenmalige zendingen." },
        { title: "Export", text: "Lichtgewicht houten pallets voor internationaal transport — ook HT op aanvraag." },
        { title: "Bulkpartijen", text: "Grote volumes voor productie of distributiecampagnes." },
        { title: "Lichtgewicht producten", text: "Ideaal voor producten waarbij palletgewicht telt in transportkosten." },
        { title: "Tijdelijke projecten", text: "Bouw, evenementen of seizoenscampagnes — geen investering in herbruikbare pallets." },
        { title: "Kostenbesparing", text: "Goedkoper dan europallets wanneer retourlogistiek niet nodig is." },
      ],
    },

    trust: serviceTrust(
      "Bedrijven in Zuid- en Midden-Nederland kiezen voor De Palletman voor wegwerppallets:",
    ),

    specifications: {
      eyebrow: "Technisch",
      title: "Specificaties wegwerppallets",
      intro: "Lichtgewicht en praktisch — specificaties per partij vermelden wij in de offerte.",
      columns: 2,
      items: [
        { title: "Lichtgewicht", text: "Minder zwaar dan europallets en blokpallets — lagere transportkosten." },
        { title: "Materiaal", text: "Naaldhout, eenvoudigere constructie dan herbruikbare pallets." },
        { title: "Eenmalig gebruik", text: "Ontworpen voor single-use transport — geen retour nodig." },
        { title: "Export", text: "HT-gestempeld op aanvraag voor verscheping buiten de EU." },
        { title: "Bulkpartijen", text: "Leverbaar in grote volumes voor productie en distributie." },
        { title: "Inspectie", text: "Visuele controle — technisch geschikt voor de beoogde lading." },
      ],
    },

    dimensions: {
      eyebrow: "Formaten",
      title: "Beschikbare afmetingen",
      intro: "Wegwerppallets in gangbare formaten — informeer naar actuele voorraad.",
      columns: 3,
      items: [
        { title: "800 × 1200 mm", text: "Standaardformaat — compatibel met veel logistiek." },
        { title: "Kleinere formaten", text: "Compacte wegwerppallets voor lichte producten." },
        { title: "Afwijkende maten", text: "Informeer naar specifieke formaten." },
        { title: "Hoogte", text: "Doorgaans lager en lichter dan europallets." },
        { title: "Bulk", text: "Grote partijen in één levering mogelijk." },
        { title: "Custom", text: "Neem contact op voor speciale wensen." },
      ],
    },

    practical: {
      eyebrow: "Praktisch",
      title: "Praktische informatie",
      intro: "Alles over wegwerppallet-levering.",
      columns: 2,
      items: [
        { title: "Bulkpartijen", text: "Grote volumes welkom — efficiënte levering." },
        { title: "Export", text: "HT-gestempeld op aanvraag voor buiten EU." },
        { title: "Minimale afname", text: "Flexibel — ook kleinere partijen." },
        { title: "Levergebieden", text: `Bezorgen in ${PROVINCES} — B2B.` },
        { title: "Levertijden", text: "Vaak snel leverbaar." },
        { title: "Offerte binnen 24 uur", text: "Snelle reactie op aanvraag." },
      ],
    },

    delivery: {
      eyebrow: "Logistiek",
      title: "Levering wegwerppallets",
      intro: "Bezorgen aan bedrijven met eigen transport.",
      columns: 2,
      items: [
        { title: "Bulkleveringen", text: "Grote partijen efficiënt geleverd." },
        { title: "Eigen transport", text: "Ons wagenpark door de regio." },
        { title: "B2B-only", text: "Uitsluitend aan bedrijven." },
        { title: "Planning", text: "Flexibel levermoment." },
      ],
    },

    transport: serviceTransport(
      "Wegwerppallets bezorgen wij met eigen transport — ook bulkpartijen.",
      [
        { title: "Bezorgen", text: "Levering op locatie — lichtgewicht pallets." },
        { title: "Bulk", text: "Volle ladingen wegwerppallets mogelijk." },
        { title: "Export", text: "HT-gestempeld op aanvraag." },
        { title: "Werkgebied", text: PROVINCES, href: "/werkgebied", linkLabel: "Ophalen en bezorgen" },
      ],
    ),

    pickup: {
      eyebrow: "Inkoop",
      title: "Wegwerppallets verkopen",
      intro: "Overtollige wegwerppallets? Wij kopen in.",
      columns: 2,
      items: [
        { title: "Inkoop", text: "Eerlijke prijs — wij halen op.", href: "/pallets-verkopen", linkLabel: "Pallets verkopen" },
        { title: "Particulieren welkom", text: "Ook particulieren kunnen verkopen." },
        { title: "Grote partijen", text: "Bulkinkoop welkom." },
        { title: "Snelle betaling", text: "Betrouwbare afhandeling." },
      ],
    },

    largeBatches: {
      eyebrow: "Bulk",
      title: "Bulkpartijen wegwerppallets",
      text: "Grote volumes voor export, productie of distributie? Wij leveren bulkpartijen wegwerppallets efficiënt — met vaste prijsafspraken en planning op maat voor terugkerende afname.",
    },

    smallBatches: {
      eyebrow: "Flexibel",
      title: "Kleine partijen wegwerppallets",
      text: "Ook kleinere partijen welkom — ideaal voor eenmalige projecten of proefzendingen.",
    },

    ctaBanner: serviceCtaBanner(
      "Wegwerppallets nodig?",
      "Lichtgewicht, export, bulkpartijen — vraag vandaag een offerte aan.",
      "cta-pallets.webp",
      "Wegwerppallets kopen bij De Palletman",
    ),

    quoteForm: serviceQuoteForm(
      "Offerteformulier — wegwerppallets",
      "Vermeld aantal, export (HT ja/nee) en locatie — reactie binnen 24 uur.",
    ),
  },

  seoText: {
    types: {
      eyebrow: "Gerelateerd",
      title: "Andere pallettypes",
      intro: "Voor hergebruik: europallets of blokpallets.",
      items: [
        { title: "Europallets", text: "Herbruikbaar, standaard formaat.", href: "/europallets", linkLabel: "Meer over Europallets" },
        { title: "Blokpallets", text: "Zware ladingen.", href: "/blokpallets", linkLabel: "Meer over Blokpallets" },
        { title: "Pallets kopen", text: "Volledig overzicht.", href: "/pallets-kopen", linkLabel: "Pallets kopen" },
      ],
    },
    qualities: {
      eyebrow: "Kwaliteit",
      title: "Kwaliteit wegwerppallets",
      intro: "Praktisch en functioneel — passend bij eenmalig gebruik.",
      items: [
        { title: "Lichtgewicht", text: "Minder gewicht — lagere transportkosten." },
        { title: "Eenmalig gebruik", text: "Geschikt voor single-use transport." },
        { title: "Export-klaar", text: "HT-gestempeld op aanvraag (ISPM 15)." },
        { title: "Bulkkwaliteit", text: "Consistente partijen voor grote volumes." },
        { title: "Inspectie", text: "Visuele controle voor levering." },
        { title: "Eerlijke omschrijving", text: "Conditie in offerte vermeld." },
      ],
    },
  },

  usps: {
    eyebrow: "Voordelen",
    title: "Voordelen wegwerppallets bij De Palletman",
    intro: "Waarom bedrijven wegwerppallets bij ons inkopen:",
    columns: 2,
    items: [
      { title: "Lichtgewicht", text: "Lagere transportkosten per zending." },
      { title: "Export", text: "HT-gestempeld op aanvraag." },
      { title: "Eenmalig gebruik", text: "Geen retourlogistiek nodig." },
      { title: "Bulkpartijen", text: "Grote volumes efficiënt geleverd." },
      { title: "Betaalbaar", text: "Kostenefficiënt voor single-use." },
      { title: "Eigen transport", text: "Bezorgen op locatie." },
      { title: "B2B-levering", text: "Professionele afhandeling." },
      { title: "Offerte binnen 24 uur", text: "Snelle reactie." },
    ],
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "FAQ — Wegwerppallets",
    intro: "Antwoorden op veelgestelde vragen over wegwerppallets.",
    items: [
      { question: "Wanneer kies ik wegwerppallets?", answer: "Bij eenmalig transport, export of wanneer retour geen optie is — kostenbesparend." },
      { question: "Leveren jullie bulkpartijen?", answer: "Ja. Grote volumes welkom — efficiënte levering." },
      { question: "Zijn wegwerppallets geschikt voor export?", answer: "Ja. HT-gestempeld op aanvraag voor buiten de EU." },
      { question: "Leveren jullie aan particulieren?", answer: "Nee. B2B-only voor levering." },
      { question: "Hoe zwaar zijn wegwerppallets?", answer: "Lichter dan europallets — exact gewicht varieert per type." },
      { question: "Kopen jullie wegwerppallets in?", answer: "Ja — wij halen op bij bedrijven en particulieren." },
      { question: "In welk gebied bezorgen jullie?", answer: `In ${PROVINCES}.` },
      { question: "Kan ik kleine partijen bestellen?", answer: "Ja. Flexibel meedenken." },
      { question: "Hoe snel kunnen jullie leveren?", answer: "Vaak snel — informeer naar volume." },
      { question: "Hoe vraag ik een offerte aan?", answer: "Via telefoon, WhatsApp, e-mail of het formulier." },
    ],
  },

  cta: {
    title: "Wegwerppallets bestellen?",
    text: "Lichtgewicht, export, bulk — vraag een offerte aan.",
    ...defaultCta,
  },

  internalLinks: standardInternalLinks,

  seo: {
    metaTitle: "Wegwerppallets kopen | Lichtgewicht, export & bulk | De Palletman",
    metaDescription:
      "Wegwerppallets kopen? Lichtgewicht voor eenmalig gebruik en export, bulkpartijen beschikbaar. B2B-levering met eigen transport in Zuid- en Midden-Nederland.",
    openGraph: {
      title: "Wegwerppallets kopen | De Palletman",
      description: "Lichtgewicht wegwerppallets voor export en eenmalig transport — bulkpartijen.",
      image: "https://www.depalletman.nl/images/hero-wegwerppallets.webp",
    },
    schema: "auto",
  },
};
