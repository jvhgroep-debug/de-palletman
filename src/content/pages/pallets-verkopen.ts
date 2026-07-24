/**
 * Content Master — Pallets verkopen
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
  EUROPALLET_A_QUALITY_TEXT,
  EUROPALLET_B_QUALITY_TEXT,
} from "../shared/europalletQuality";

export const palletsVerkopen: ServiceTemplatePage = {
  path: "/pallets-verkopen",
  template: "service",

  title: "Pallets verkopen",
  h1: "Verkoop uw overtollige pallets aan De Palletman",
  heroSubtitle:
    "Wij kopen in van bedrijven én particulieren — snelle betaling, ophalen op locatie en eerlijke prijzen voor grote én kleine partijen.",
  imageFilename: "hero-pallets-verkopen.webp",
  imageAlt: "Pallets verkopen aan De Palletman — inkoop van bedrijven en particulieren",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Pallets verkopen" },
  ],

  intro: {
    eyebrow: "Snelle inkoop",
    title: "Eenvoudig en voordelig pallets verkopen",
    text: `Heeft u overtollige europallets, blokpallets of wegwerppallets? De Palletman koopt gebruikte pallets in van bedrijven én particulieren in ${PROVINCES}. Stuur type, aantal en conditie — wij geven u snel een eerlijke prijsopgave, halen op met eigen transport en betalen betrouwbaar.`,
  },

  extended: {
    conversion: serviceConversion(
      "Bel direct, stuur een WhatsApp of vraag een prijsopgave aan. Wij reageren snel — doorgaans binnen 24 uur — met een heldere inkoopofferte.",
    ),

    whenToChoose: {
      eyebrow: "Toepassing",
      title: "Wanneer verkoopt u pallets aan De Palletman?",
      intro: "Veel bedrijven en particulieren hebben regelmatig overtollige pallets. Dit is het moment om te verkopen:",
      columns: 2,
      items: [
        {
          title: "Overtollige voorraad",
          text: "Na een project, seizoen of reorganisatie staan pallets ongebruikt op. Wij ruimen de partij op en betalen eerlijk.",
        },
        {
          title: "Verouderde of gemixte partijen",
          text: "Verschillende types of kwaliteiten door elkaar? Wij beoordelen de partij en geven een passende prijsopgave.",
        },
        {
          title: "Bedrijfsopruiming of verhuizing",
          text: "Bij bedrijfsverhuizing of inventarisatie wilt u snel van pallets af. Wij halen op en handelen de verkoop af.",
        },
        {
          title: "Particulier met pallets over",
          text: "Particulieren kunnen pallets aan ons verkopen. Wij halen op — bezorgen aan particulieren doen wij niet.",
        },
        {
          title: "Grote volumes",
          text: "Volle ladingen of structurele overschotten? Wij schakelen snel en regelen efficiënte ophaalplanning.",
        },
        {
          title: "Kleine partijen",
          text: "Ook enkele pallets of een kleine stapel? Geen probleem — wij denken flexibel mee.",
        },
      ],
    },

    trust: serviceTrust(
      "Bedrijven én particulieren in Zuid- en Midden-Nederland vertrouwen op De Palletman voor snelle, eerlijke palletinkoop:",
    ),

    specifications: {
      eyebrow: "Inkoop",
      title: "Specificaties bij verkoop",
      intro: "Geef bij uw aanvraag zoveel mogelijk informatie — zo kunnen wij u sneller een accurate prijsopgave doen.",
      columns: 2,
      items: [
        {
          title: "Type pallet",
          text: "Europallets, blokpallets of wegwerppallets — vermeld het type en eventuele mix in de partij.",
        },
        {
          title: "Aantal",
          text: "Geschat aantal pallets. Bij grote partijen volstaat een indicatie — wij tellen bij ophalen.",
        },
        {
          title: "Conditie",
          text: "Beschrijf de staat: licht/donker, vochtig of droog. Wij beoordelen eerlijk ter plaatse.",
        },
        {
          title: "Locatie",
          text: "Adres of bedrijventerrein voor ophalen. Wij rijden in ons werkgebied met eigen transport.",
        },
        {
          title: "Bereikbaarheid",
          text: "Is er een laadperron, heftruck of kraan beschikbaar? Dit helpt bij efficiënte planning.",
        },
        {
          title: "Foto's (optioneel)",
          text: "Stuur via WhatsApp een foto van de partij — wij geven vaak sneller een indicatieve prijs.",
        },
      ],
    },

    dimensions: {
      eyebrow: "Formaten",
      title: "Welke palletformaten kopen wij in?",
      intro: "Wij kopen de gangbare pallettypes in — informeer bij afwijkende formaten.",
      columns: 3,
      items: [
        { title: "Europallets", text: "800 × 1200 mm — standaard EUR-formaat, A- en B-kwaliteit." },
        { title: "Blokpallets", text: "Diverse formaten, doorgaans 1000 × 1200 mm of 1000 × 1000 mm." },
        { title: "Wegwerppallets", text: "Lichtgewicht pallets in diverse formaten voor eenmalig gebruik." },
        { title: "Gemixte partijen", text: "Verschillende types in één partij? Wij beoordelen en geven een passende offerte." },
        { title: "Beschadigde pallets", text: "Ook partijen met gebruikssporen of lichte schade — wij kijken naar hergebruik of verwerking." },
        { title: "Afwijkende formaten", text: "Neem contact op — wij geven eerlijk aan wat wij wel en niet inkopen.",
        },
      ],
    },

    practical: {
      eyebrow: "Praktisch",
      title: "Praktische informatie",
      intro: "Alles over verkoop, ophalen en betaling op een rij.",
      columns: 2,
      items: [
        {
          title: "Inkoop van bedrijven én particulieren",
          text: "Zowel bedrijven als particulieren kunnen pallets aan ons verkopen. Wij halen op met eigen transport.",
        },
        {
          title: "Snelle betaling",
          text: "Bij inkoop betalen wij snel en betrouwbaar. De exacte procedure bespreken wij bij de prijsopgave.",
        },
        {
          title: "Ophalen op locatie",
          text: `Wij halen op in ${PROVINCES}. Plan een ophaalmoment dat past bij uw bedrijf of particuliere locatie.`,
        },
        {
          title: "Grote partijen",
          text: "Volle ladingen of structurele overschotten — wij regelen efficiënte ophaalplanning en snelle afhandeling.",
        },
        {
          title: "Kleine partijen",
          text: "Ook enkele pallets welkom. Geen partij te klein — neem contact op en wij denken mee.",
        },
        {
          title: "Prijsopgave binnen 24 uur",
          text: "Vraag aan via telefoon, WhatsApp, e-mail of het formulier. Wij streven naar reactie binnen 24 uur.",
        },
      ],
    },

    delivery: {
      eyebrow: "Proces",
      title: "Zo werkt verkopen",
      intro: "In vier stappen van overtollige pallets naar snelle betaling.",
      columns: 2,
      items: [
        { title: "1. Contact opnemen", text: "Bel, app of vul het formulier in. Vermeld type, aantal, conditie en locatie." },
        { title: "2. Prijsopgave", text: "Wij geven een eerlijke, transparante prijsopgave — doorgaans binnen 24 uur." },
        { title: "3. Ophalen", text: "Wij plannen ophalen met eigen transport op een moment dat u schikt." },
        { title: "4. Betaling", text: "Na controle en laden handelen wij de verkoop af — snel en betrouwbaar." },
      ],
    },

    transport: serviceTransport(
      "De Palletman haalt pallets op bij bedrijven én particulieren met eigen transport. Flexibel, snel en betrouwbaar.",
      [
        {
          title: "Ophalen op locatie",
          text: "Wij laden op uw bedrijventerrein, magazijn of particuliere locatie — wij plannen vooraf met u af.",
        },
        {
          title: "Eigen wagenpark",
          text: "Geen externe transporteurs — korte lijnen en persoonlijk contact bij elke ophaalrit.",
        },
        {
          title: "Snelle planning",
          text: "Geef uw voorkeursdag door — wij proberen zo snel mogelijk te rijden.",
        },
        {
          title: "Werkgebied",
          text: PROVINCES,
          href: "/werkgebied",
          linkLabel: "Ophalen en bezorgen",
        },
      ],
    ),

    pickup: {
      eyebrow: "Combinatie",
      title: "Combineren met pallets kopen",
      intro: "Veel klanten verkopen overtollige pallets én nemen nieuwe af. Dat kan in één afspraak.",
      columns: 2,
      items: [
        {
          title: "In- en verkoop combineren",
          text: "Lever oude partijen in en neem tegelijk een nieuwe levering af — efficiënt en praktisch.",
          href: "/pallets-kopen",
          linkLabel: "Pallets kopen",
        },
        {
          title: "Alleen verkopen",
          text: "U hoeft niets te kopen — wij kopen uw pallets in en halen op.",
        },
        {
          title: "Vaste partner",
          text: "Regelmatig overschot? Wij kunnen structurele inkoopafspraken bespreken.",
        },
        {
          title: "Eerlijke beoordeling",
          text: "Wij beoordelen elke partij ter plaatse en handelen transparant af.",
        },
      ],
    },

    largeBatches: {
      eyebrow: "Volume",
      title: "Grote partijen verkopen",
      text: "Heeft u een volle lading of structureel overschot? De Palletman schakelt snel voor grote inkoopvolumes. Wij plannen efficiënte ophaalmomenten, geven een heldere prijsopgave vooraf en handelen de verkoop betrouwbaar af — ook bij honderden pallets.",
    },

    smallBatches: {
      eyebrow: "Flexibel",
      title: "Kleine partijen verkopen",
      text: "Ook enkele pallets of een kleine stapel? Particulieren en kleine bedrijven zijn welkom. Geef door wat u heeft staan — wij geven een eerlijke prijs en plannen ophalen wanneer het u uitkomt.",
    },

    ctaBanner: serviceCtaBanner(
      "Pallets verkopen? Wij halen op.",
      "Vraag vandaag een prijsopgave aan — snelle betaling, ophalen op locatie, bedrijven én particulieren welkom.",
      "cta-pallets.webp",
      "Pallets verkopen aan De Palletman — snelle inkoop en ophalen",
    ),

    quoteForm: serviceQuoteForm(
      "Offerteformulier — pallets verkopen",
      "Vul het formulier in voor een vrijblijvende inkoopofferte. Vermeld type, aantal, conditie en uw locatie — reactie binnen 24 uur.",
    ),
  },

  seoText: {
    types: {
      eyebrow: "Inkoop",
      title: "Welke pallettypes kopen wij in?",
      intro: "Wij kopen europallets, blokpallets en wegwerppallets in van bedrijven én particulieren.",
      items: [
        { title: "Europallets", text: "Standaard EUR-formaat — A- en B-kwaliteit, ook gemixte partijen.", href: "/europallets", linkLabel: "Meer over Europallets" },
        { title: "Blokpallets", text: "Zware industriële pallets in diverse formaten.", href: "/blokpallets", linkLabel: "Meer over Blokpallets" },
        { title: "Wegwerppallets", text: "Lichtgewicht pallets voor eenmalig gebruik.", href: "/wegwerppallets", linkLabel: "Meer over Wegwerppallets" },
      ],
    },
    qualities: {
      eyebrow: "Beoordeling",
      title: "Hoe beoordelen wij uw partij?",
      intro: "Wij kijken naar type, conditie en aantal — en geven een eerlijke prijs.",
      items: [
        { title: "Visuele inspectie", text: "Bij ophalen beoordelen wij type, kwaliteit en bruikbaarheid van elke partij." },
        { title: "Eerlijke prijs", text: "Onze prijsopgave is gebaseerd op type, conditie, aantal en locatie — transparant en zonder verrassingen." },
        { title: "A- en B-kwaliteit", text: `${EUROPALLET_A_QUALITY_TEXT} ${EUROPALLET_B_QUALITY_TEXT}` },
        { title: "Gemixte partijen", text: "Verschillende types of kwaliteiten? Wij beoordelen de totale partij." },
        { title: "Snelle afhandeling", text: "Na ophalen handelen wij de verkoop snel af — betaling volgens afspraak." },
        { title: "Geen gedoe", text: "Eén contactpersoon, duidelijke afspraken — van prijsopgave tot betaling." },
      ],
    },
  },

  usps: {
    eyebrow: "Voordelen",
    title: "Voordelen van verkopen aan De Palletman",
    intro: "Waarom bedrijven én particulieren kiezen voor De Palletman:",
    columns: 2,
    items: [
      { title: "Inkoop bedrijven én particulieren", text: "Iedereen kan pallets aan ons verkopen — wij halen op." },
      { title: "Snelle betaling", text: "Betrouwbare, snelle afhandeling na ophalen." },
      { title: "Ophalen op locatie", text: "Eigen transport — wij komen naar u toe." },
      { title: "Grote én kleine partijen", text: "Van enkele pallets tot volle ladingen." },
      { title: "Eerlijke prijsopgave", text: "Transparante offerte op basis van type, conditie en aantal." },
      { title: "Korte lijnen", text: "Direct contact — geen tussenpersonen." },
      { title: "Flexibele planning", text: "Ophalen op een moment dat u schikt." },
      { title: "Offerte binnen 24 uur", text: "Snelle reactie op uw aanvraag." },
    ],
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Alles over pallets verkopen aan De Palletman",
    intro: "Antwoorden op de meest gestelde vragen over onze inkoopservice.",
    items: [
      { question: "Kopen jullie pallets in van particulieren?", answer: "Ja. Wij kopen in van bedrijven én particulieren en halen op met eigen transport." },
      { question: "Hoe snel betaal jullie na ophalen?", answer: "Wij betalen snel en betrouwbaar. De exacte procedure bespreken wij bij de prijsopgave." },
      { question: "Halen jullie ook kleine partijen op?", answer: "Ja. Ook enkele pallets of kleine partijen — neem contact op." },
      { question: "In welk gebied halen jullie op?", answer: `In ${PROVINCES}.` },
      { question: "Welke pallettypes kopen jullie in?", answer: "Europallets, blokpallets en wegwerppallets — informeer bij afwijkende formaten." },
      { question: "Hoe vraag ik een prijsopgave aan?", answer: "Via telefoon, WhatsApp, e-mail of het formulier onderaan. Vermeld type, aantal, conditie en locatie." },
      { question: "Moet ik pallets kopen om te kunnen verkopen?", answer: "Nee. Verkoop staat op zich — in- en verkoop combineren kan wel in één afspraak." },
      { question: "Kopen jullie beschadigde pallets?", answer: "Wij beoordelen elke partij. Lichte schade is vaak geen probleem — wij geven een eerlijke prijs." },
      { question: "Hoe snel kunnen jullie ophalen?", answer: "Dat hangt af van planning en locatie. Wij proberen zo snel mogelijk te rijden na akkoord." },
      { question: "Kan ik een foto meesturen?", answer: "Ja, via WhatsApp. Dat helpt ons om sneller een indicatieve prijs te geven." },
    ],
  },

  cta: {
    title: "Klaar om pallets te verkopen?",
    text: "Bel direct, stuur een WhatsApp of vraag een prijsopgave aan. Snelle betaling en ophalen op locatie.",
    ...defaultCta,
  },

  internalLinks: standardInternalLinks,

  seo: {
    metaTitle: "Pallets verkopen | Inkoop bedrijven & particulieren | De Palletman",
    metaDescription:
      "Pallets verkopen aan De Palletman? Wij kopen in van bedrijven én particulieren — snelle betaling, ophalen op locatie, grote én kleine partijen in Zuid- en Midden-Nederland.",
    openGraph: {
      title: "Pallets verkopen | De Palletman",
      description: "Snelle inkoop van gebruikte pallets — bedrijven én particulieren, ophalen met eigen transport.",
      image: "https://www.depalletman.nl/images/hero-pallets-verkopen.webp",
    },
    schema: "auto",
  },
};
