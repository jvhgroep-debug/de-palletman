/**
 * Content Master — Blokpallets
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

export const blokpallets: ServiceTemplatePage = {
  path: "/blokpallets",
  template: "service",

  title: "Blokpallets",
  h1: "Gebruikte blokpallets kopen voor zware ladingen",
  heroSubtitle:
    "Sterke blokpallets in diverse afmetingen — gebruikt en nieuw beschikbaar, grote voorraad, B2B-levering met eigen transport.",
  imageFilename: "hero-blokpallets.webp",
  imageAlt: "Blokpallets kopen — gebruikt en nieuw voor bedrijven",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Blokpallets" },
  ],

  intro: {
    eyebrow: "Industriële kracht",
    title: "Blokpallets voor zware ladingen en productie",
    text: `Blokpallets zijn ideaal voor zware goederen, industriële opslag en productie. De Palletman levert gebruikte en nieuwe blokpallets uitsluitend aan bedrijven in ${PROVINCES}. Dankzij onze grote voorraad kunnen wij vaak snel leveren — wij denken mee over het juiste formaat en regelen transport met eigen wagenpark.`,
  },

  extended: {
    conversion: serviceConversion(
      "Vraag een offerte aan voor blokpallets — reactie binnen 24 uur met prijs, formaat en beschikbaarheid.",
    ),

    whenToChoose: {
      eyebrow: "Toepassing",
      title: "Wanneer kiest u voor blokpallets?",
      intro: "Blokpallets zijn de sterke keuze wanneer europallets niet volstaan:",
      columns: 2,
      items: [
        { title: "Zware ladingen", text: "Machines, metaal, bouwmaterialen — blokpallets dragen aanzienlijk meer gewicht." },
        { title: "Industriële opslag", text: "Massieve constructie voor magazijnen en productiehallen." },
        { title: "Puntbelasting", text: "Bredere draagbalken en blokkenconstructie voor zware, geconcentreerde lasten." },
        { title: "Grote oppervlakte", text: "Formaten tot 1000 × 1200 mm of 1000 × 1000 mm voor stabiliteit." },
        { title: "Intern transport", text: "Heftruck- en kraanverplaatsing in zware industrie." },
        { title: "Langdurig gebruik", text: "Robuuste constructie — geschikt voor intensief hergebruik." },
      ],
    },

    trust: serviceTrust(
      "Industriële bedrijven in Zuid- en Midden-Nederland kiezen voor De Palletman voor blokpallets:",
    ),

    specifications: {
      eyebrow: "Technisch",
      title: "Specificaties blokpallets",
      intro: "Blokpallets onderscheiden zich door massieve constructie en hoge draagkracht.",
      columns: 2,
      items: [
        { title: "Constructie", text: "Massieve blokken met brede draagbalken — sterker dan standaard europallets." },
        { title: "Materiaal", text: "Naaldhout, zwaarder uitgevoerd dan europallets." },
        { title: "Gebruikt en nieuw", text: "Wij leveren gebruikte blokpallets en informeren naar nieuwe voorraad." },
        { title: "Draagvermogen", text: "Aanzienlijk hoger dan europallets — geschikt voor zware industriële ladingen." },
        { title: "Inspectie", text: "Visuele controle op breuken, vervorming en losse onderdelen." },
        { title: "Advies op maat", text: "Twijfel over formaat of draagkracht? Wij denken mee." },
      ],
    },

    dimensions: {
      eyebrow: "Formaten",
      title: "Diverse afmetingen blokpallets",
      intro: "Blokpallets zijn beschikbaar in meerdere formaten — informeer naar actuele voorraad.",
      columns: 3,
      items: [
        { title: "1000 × 1200 mm", text: "Veelgekozen formaat voor industriële toepassingen." },
        { title: "1000 × 1000 mm", text: "Compact vierkant formaat — stabiel voor zware ladingen." },
        { title: "800 × 1200 mm", text: "Blokpallet in europallet-formaat — extra draagkracht." },
        { title: "Afwijkende formaten", text: "Informeer naar specifieke maten — wij geven eerlijk aan wat beschikbaar is." },
        { title: "Hoogte", text: "Varieert per type — doorgaans hoger dan standaard europallets." },
        { title: "Custom", text: "Neem contact op voor speciale afmetingen of grote volumes." },
      ],
    },

    practical: {
      eyebrow: "Praktisch",
      title: "Praktische informatie",
      intro: "Alles over blokpallet-levering.",
      columns: 2,
      items: [
        { title: "Gebruikt en nieuw", text: "Primair gebruikte blokpallets — informeer naar nieuwe voorraad." },
        { title: "Grote voorraad", text: "Dankzij onze voorraad vaak snel leverbaar." },
        { title: "Minimale afname", text: "Flexibel — grote én kleine partijen." },
        { title: "Levergebieden", text: `Bezorgen in ${PROVINCES} — B2B-only.` },
        { title: "Levertijden", text: "Vaak binnen enkele werkdagen — afhankelijk van formaat en aantal." },
        { title: "Offerte binnen 24 uur", text: "Vraag aan via telefoon, WhatsApp, e-mail of formulier." },
      ],
    },

    delivery: {
      eyebrow: "Logistiek",
      title: "Levering blokpallets",
      intro: "Bezorgen uitsluitend aan bedrijven met eigen transport.",
      columns: 2,
      items: [
        { title: "Eigen transport", text: "Levering op locatie — ook zware partijen." },
        { title: "Lossen", text: "Laadperron of bedrijventerrein — bereikbaarheid vooraf afstemmen." },
        { title: "Planning", text: "Flexibel levermoment." },
        { title: "B2B-only", text: "Uitsluitend aan bedrijven." },
      ],
    },

    transport: serviceTransport(
      "Blokpallets bezorgen en ophalen wij met eigen transport.",
      [
        { title: "Bezorgen", text: "Levering op uw locatie — diverse formaten." },
        { title: "Ophalen", text: "Overtollige blokpallets? Wij kopen in.", href: "/pallets-verkopen", linkLabel: "Pallets verkopen" },
        { title: "Zware ladingen", text: "Ons wagenpark is ingericht op pallettransport." },
        { title: "Werkgebied", text: PROVINCES, href: "/werkgebied", linkLabel: "Ophalen en bezorgen" },
      ],
    ),

    pickup: {
      eyebrow: "Inkoop",
      title: "Blokpallets verkopen",
      intro: "Overtollige blokpallets? Wij kopen in.",
      columns: 2,
      items: [
        { title: "Inkoop", text: "Eerlijke prijsopgave — wij halen op.", href: "/pallets-verkopen", linkLabel: "Pallets verkopen" },
        { title: "Bedrijven én particulieren", text: "Inkoop van iedereen — ophalen op locatie." },
        { title: "Grote partijen", text: "Volle ladingen welkom." },
        { title: "Snelle betaling", text: "Betrouwbare afhandeling." },
      ],
    },

    largeBatches: {
      eyebrow: "Volume",
      title: "Grote partijen blokpallets",
      text: "Structurele vraag naar blokpallets? Wij regelen bulkleveringen met vaste prijsafspraken en efficiënte planning — ook honderden pallets per levering.",
    },

    smallBatches: {
      eyebrow: "Flexibel",
      title: "Kleine partijen blokpallets",
      text: "Ook enkele blokpallets welkom — wij leveren flexibel voor kleinere industriële toepassingen.",
    },

    ctaBanner: serviceCtaBanner(
      "Blokpallets nodig?",
      "Grote voorraad, diverse afmetingen — gebruikt en nieuw. Vraag vandaag een offerte aan.",
      "cta-pallets.webp",
      "Blokpallets kopen bij De Palletman",
    ),

    quoteForm: serviceQuoteForm(
      "Offerteformulier — blokpallets",
      "Vermeld gewenst formaat, aantal, gebruikt/nieuw en uw locatie — reactie binnen 24 uur.",
    ),
  },

  seoText: {
    types: {
      eyebrow: "Gerelateerd",
      title: "Andere pallettypes",
      intro: "Naast blokpallets leveren wij ook europallets en wegwerppallets.",
      items: [
        { title: "Europallets", text: "Standaard 800 × 1200 mm.", href: "/europallets", linkLabel: "Meer over Europallets" },
        { title: "Wegwerppallets", text: "Lichtgewicht voor export.", href: "/wegwerppallets", linkLabel: "Meer over Wegwerppallets" },
        { title: "Pallets kopen", text: "Volledig assortiment.", href: "/pallets-kopen", linkLabel: "Pallets kopen" },
      ],
    },
    qualities: {
      eyebrow: "Kwaliteit",
      title: "Kwaliteiten blokpallets",
      intro: "Gebruikte en nieuwe blokpallets — eerlijk omschreven.",
      items: [
        { title: "Gebruikte blokpallets", text: "Technisch gecontroleerd — normale slijtage, volledig bruikbaar." },
        { title: "Nieuwe blokpallets", text: "Informeer naar beschikbaarheid nieuw hout." },
        { title: "Industriële conditie", text: "Beoordeeld op draagkracht en stabiliteit." },
        { title: "Visuele inspectie", text: "Geen losse blokken of gebroken balken." },
        { title: "Formaatkeuze", text: "Wij adviseren het juiste formaat voor uw lading." },
        { title: "Eerlijke omschrijving", text: "Conditie vermeld in de offerte." },
      ],
    },
  },

  usps: {
    eyebrow: "Voordelen",
    title: "Voordelen blokpallets bij De Palletman",
    intro: "Waarom bedrijven blokpallets bij ons inkopen:",
    columns: 2,
    items: [
      { title: "Diverse afmetingen", text: "1000 × 1200, 1000 × 1000 en meer — informeer naar voorraad." },
      { title: "Gebruikt en nieuw", text: "Flexibel aanbod passend bij uw budget." },
      { title: "Grote voorraad", text: "Vaak snel leverbaar." },
      { title: "Hoge draagkracht", text: "Ideaal voor zware industriële ladingen." },
      { title: "Eigen transport", text: "Bezorgen op locatie." },
      { title: "B2B-levering", text: "Professionele afhandeling." },
      { title: "Persoonlijk advies", text: "Wij denken mee over formaat en toepassing." },
      { title: "Offerte binnen 24 uur", text: "Snelle reactie." },
    ],
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "FAQ — Blokpallets",
    intro: "Antwoorden op veelgestelde vragen over blokpallets.",
    items: [
      { question: "Welke afmetingen blokpallets leveren jullie?", answer: "Doorgaans 1000 × 1200 mm en 1000 × 1000 mm — informeer naar actuele voorraad." },
      { question: "Leveren jullie nieuwe blokpallets?", answer: "Ja, op aanvraag — informeer naar beschikbaarheid." },
      { question: "Wanneer kies ik blokpallets in plaats van europallets?", answer: "Bij zware ladingen, puntbelasting of industriële toepassingen waar extra draagkracht nodig is." },
      { question: "Leveren jullie aan particulieren?", answer: "Nee. Uitsluitend B2B." },
      { question: "Hoe snel kunnen jullie leveren?", answer: "Dankzij grote voorraad vaak snel — informeer naar uw formaat." },
      { question: "Kopen jullie ook blokpallets in?", answer: "Ja — wij halen op." },
      { question: "Wat is het draagvermogen?", answer: "Aanzienlijk hoger dan europallets — exact advies per toepassing." },
      { question: "In welk gebied bezorgen jullie?", answer: `In ${PROVINCES}.` },
      { question: "Kan ik kleine partijen bestellen?", answer: "Ja. Flexibel meedenken." },
      { question: "Hoe vraag ik een offerte aan?", answer: "Via telefoon, WhatsApp, e-mail of het formulier." },
    ],
  },

  cta: {
    title: "Blokpallets bestellen?",
    text: "Vraag een offerte aan — diverse afmetingen, gebruikt en nieuw, grote voorraad.",
    ...defaultCta,
  },

  internalLinks: standardInternalLinks,

  seo: {
    metaTitle: "Blokpallets kopen | Gebruikt & nieuw, diverse maten | De Palletman",
    metaDescription:
      "Blokpallets kopen? Gebruikt en nieuw, diverse afmetingen, grote voorraad. B2B-levering met eigen transport in Zuid- en Midden-Nederland.",
    openGraph: {
      title: "Blokpallets kopen | De Palletman",
      description: "Sterke blokpallets voor zware ladingen — gebruikt en nieuw, grote voorraad.",
      image: "https://www.depalletman.nl/images/hero-blokpallets.webp",
    },
    schema: "auto",
  },
};
