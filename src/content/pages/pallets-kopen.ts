/**
 * Content Master — Pallets kopen
 * Definitieve Master Service Page voor alle dienstenpagina's.
 */
import type { ServiceTemplatePage } from "../types";
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

export const palletsKopen: ServiceTemplatePage = {
  path: "/pallets-kopen",
  template: "service",

  title: "Pallets kopen",
  h1: "Gebruikte pallets inkopen voor uw bedrijf",
  heroSubtitle:
    "Betrouwbare B2B-leverancier van europallets, blokpallets en wegwerppallets — met eigen transport, heldere prijzen en snelle levering in Zuid- en Midden-Nederland.",
  imageFilename: "hero-pallets-kopen.webp",
  imageAlt: "Gebruikte pallets kopen voor bedrijven in Nederland",

  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Pallets kopen" },
  ],

  intro: {
    eyebrow: "B2B-leverancier",
    title: "Professionele palletlevering voor logistiek, productie en handel",
    text: "De Palletman levert al jarenlang gebruikte pallets aan bedrijven in Noord-Brabant, Zuid-Holland, Zeeland, Limburg, Utrecht en Gelderland. Of u regelmatig volumes nodig heeft of een eenmalige levering zoekt: wij denken met u mee over het juiste type, de passende kwaliteit en een efficiënte logistieke oplossing. U ontvangt een transparante offerte — doorgaans binnen 24 uur — wij rijden met eigen transport en houden de lijnen kort.",
  },

  extended: {
    conversion: {
      title: "Snelle offerte binnen 24 uur",
      text: "Bel direct, stuur een WhatsApp of vraag vrijblijvend een offerte aan. Wij reageren snel met een heldere prijsopgave op maat van uw situatie.",
    },

    whenToChoose: {
      eyebrow: "Toepassing",
      title: "Wanneer kiest u voor gebruikte pallets?",
      intro:
        "Gebruikte pallets zijn de slimme keuze wanneer u betaalbaar, betrouwbaar verpakkingmateriaal nodig heeft zonder concessies te doen aan functionele kwaliteit. Dit past bij u wanneer:",
      columns: 2,
      items: [
        {
          title: "Intern transport en opslag",
          text: "Uw magazijn, productielijn of distributiecentrum draait op pallets voor interne bewegingen. Gebruikte europallets en blokpallets bieden dezelfde draagkracht tegen lagere kosten dan nieuw hout.",
        },
        {
          title: "Outbound logistiek",
          text: "U verzendt goederen naar klanten of filialen en zoekt een standaardformaat dat past in trailers, containers en racking. Europallets (800 × 1200 mm) zijn hiervoor de meest gebruikte keuze.",
        },
        {
          title: "Seizoenspieken of projecten",
          text: "Tijdelijk extra capaciteit nodig voor een campagne, bouwproject of piekperiode? Met gebruikte pallets schaalt u flexibel op zonder grote investering in nieuw materiaal.",
        },
        {
          title: "Duurzaam en circulair ondernemen",
          text: "Door gebruikte pallets in te kopen draagt u bij aan hergebruik van hout en vermindert u afval. Functioneel, kostenefficiënt én verantwoord — passend bij moderne MVO-doelstellingen.",
        },
        {
          title: "Export en internationaal transport",
          text: "Verzendt u buiten de EU? Dan zijn HT-gestempelde pallets verplicht volgens ISPM 15. Wij leveren exportgeschikte pallets op aanvraag — informeer naar beschikbaarheid.",
        },
        {
          title: "Zware of industriële lading",
          text: "Voor zware goederen, machines of bulkproducten kiest u blokpallets. Deze dragen aanzienlijk meer gewicht dan standaard europallets en zijn ideaal voor industriële toepassingen.",
        },
      ],
    },

    trust: {
      eyebrow: "Vertrouwen",
      title: "Waarom De Palletman?",
      intro:
        "Bedrijven in Zuid- en Midden-Nederland kiezen al jarenlang voor De Palletman als vaste partner voor palletinkoop en -verkoop. Dit maakt ons uw betrouwbare keuze:",
      columns: 3,
      items: [
        {
          title: "Jarenlange ervaring",
          text: "Al jarenlang zijn wij dé specialist in gebruikte pallets. Wij kennen de markt, de kwaliteitsverschillen en de logistieke uitdagingen van bedrijven in de regio.",
        },
        {
          title: "Snelle betaling bij verkoop",
          text: "Verkoopt u pallets aan ons? Wij betalen snel en betrouwbaar. Bij inkoop van uw partij hanteren wij korte lijnen en duidelijke afspraken.",
        },
        {
          title: "Eigen transport",
          text: "Met ons eigen wagenpark halen wij pallets op en bezorgen wij op locatie. Geen tussenpersonen — u spreekt rechtstreeks met uw vaste contactpersoon.",
        },
        {
          title: "Grote voorraad",
          text: "Dankzij onze voorraad europallets en blokpallets kunnen wij vaak snel leveren. Informeer naar actuele beschikbaarheid en kwaliteitsklassen.",
        },
        {
          title: "Bedrijven in Zuid- en Midden-Nederland",
          text: "Wij zijn dagelijks actief voor bedrijven in Noord-Brabant, Zuid-Holland, Zeeland, Limburg, Utrecht en Gelderland — lokaal bereikbaar, korte reactietijd.",
        },
        {
          title: "Eerlijk en transparant",
          text: "Wij omschrijven conditie en kwaliteit helder. Geen verrassingen achteraf — u weet vooraf exact waar u aan toe bent.",
        },
      ],
    },

    europalletInfo: {
      eyebrow: "Europallets",
      title: "Europallet-kwaliteiten uitgelegd",
      intro:
        "Bij europallets kiest u de conditie die past bij uw toepassing en budget. Hieronder ziet u het verschil tussen A-kwaliteit (1e keus) en B-kwaliteit (2e keus). Beide zijn technisch volledig inzetbaar — het verschil zit uitsluitend in uitstraling, gebruikssporen en kleur.",
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
      title: "Specificaties van onze gebruikte pallets",
      intro:
        "Elke partij wordt visueel gecontroleerd en eerlijk omschreven. Hieronder vindt u de gangbare specificaties per type.",
      columns: 2,
      items: [
        {
          title: "Materiaal",
          text: "Vervaardigd uit naaldhout (doorgaans grenen of dennenhout). Technisch bruikbaar, met normale gebruikssporen passend bij de gekozen kwaliteitsklasse.",
        },
        {
          title: "Constructie europallets",
          text: "Bovenblad, onderblad en blokken, verbonden met nagels. Standaardformaat EUR-norm: 800 × 1200 mm.",
        },
        {
          title: "Constructie blokpallets",
          text: "Massieve blokkenconstructie met bredere draagbalken — geschikt voor zware, puntbelaste ladingen.",
        },
        {
          title: "Draagvermogen",
          text: "Een technisch goede europallet draagt doorgaans 1.000 tot 1.500 kg dynamisch. Blokpallets kunnen hogere belastingen aan.",
        },
        {
          title: "HT-behandeling (export)",
          text: "Pallets buiten de EU moeten HT-gestempeld zijn (Heat Treatment, ISPM 15). De stempel op het hout bevestigt de behandeling.",
        },
        {
          title: "Visuele inspectie",
          text: "Elke partij wordt visueel gecontroleerd vóór levering.",
        },
      ],
    },

    dimensions: {
      eyebrow: "Formaten",
      title: "Beschikbare afmetingen",
      intro: "Wij leveren de meest gangbare palletformaten. Heeft u een afwijkend formaat nodig? Neem contact op.",
      columns: 3,
      items: [
        {
          title: "Europallet (EUR)",
          text: "800 × 1200 mm — de Europese standaard. Past in trailers, containers en magazijnstellingen.",
        },
        {
          title: "Blokpallet",
          text: "Doorgaans 1000 × 1200 mm of 1000 × 1000 mm. Extra draagvlak voor zware ladingen.",
        },
        {
          title: "Wegwerppallet",
          text: "Diverse formaten, vaak 800 × 1200 mm. Lichtgewicht, geschikt voor eenmalig transport.",
        },
        {
          title: "Hoogte europallet",
          text: "Standaardhoogte circa 144 mm. Past onder roldeur- en heftrucktoepassingen.",
        },
        {
          title: "Stapelbaarheid",
          text: "Europallets zijn onderling stapelbaar in racking en block-stacking.",
        },
        {
          title: "Afwijkende formaten",
          text: "Beschrijf uw situatie — wij geven eerlijk aan wat wij op voorraad hebben.",
        },
      ],
    },

    practical: {
      eyebrow: "Praktisch",
      title: "Praktische informatie",
      intro: "Alles wat u moet weten over afname, levering en planning — overzichtelijk op een rij.",
      columns: 2,
      items: [
        {
          title: "Minimale afname",
          text: "Wij leveren flexibel — van enkele pallets tot volle vrachtwagenladingen. Er is geen starre minimumorder; neem contact op en wij denken mee over uw situatie.",
        },
        {
          title: "Levergebieden",
          text: "Bezorgen in Noord-Brabant, Zuid-Holland, Zeeland, Limburg, Utrecht en Gelderland. Staat uw locatie net buiten het werkgebied? Informeer naar de mogelijkheden.",
        },
        {
          title: "Transportmogelijkheden",
          text: "Wij rijden met eigen transport voor bezorgen (B2B) en ophalen (bedrijven én particulieren). Planning stemmen wij af op uw laadperron of magazijn.",
        },
        {
          title: "Levertijden",
          text: "Dankzij onze voorraad kunnen wij vaak snel leveren — soms binnen enkele werkdagen. Bij urgente orders geven wij prioriteit waar mogelijk.",
        },
        {
          title: "Ophalen op locatie",
          text: "Heeft u overtollige pallets? Wij halen op bij bedrijven én particulieren in ons werkgebied. Combineer in- en verkoop in één afspraak.",
        },
        {
          title: "Offerte binnen 24 uur",
          text: "Vraag een offerte aan via telefoon, WhatsApp, e-mail of het formulier onderaan. Wij streven naar reactie binnen 24 uur op werkdagen.",
        },
      ],
    },

    delivery: {
      eyebrow: "Logistiek",
      title: "Levering aan uw bedrijf",
      intro: "Wij bezorgen uitsluitend aan bedrijven op locatie in ons werkgebied.",
      columns: 2,
      items: [
        {
          title: "Eigen transport",
          text: "Wij rijden met ons eigen wagenpark door Zuid- en Midden-Nederland. Korte lijnen, flexibele planning.",
        },
        {
          title: "Planning op maat",
          text: "Geef door wanneer u de pallets nodig heeft. Wij stemmen het levermoment af op uw planning.",
        },
        {
          title: "Lossen op locatie",
          text: "Levering op laadperron, magazijn of bedrijventerrein — wij plannen de bereikbaarheid vooraf met u af.",
        },
        {
          title: "B2B-only",
          text: "Bezorgen doen wij uitsluitend aan bedrijven. Particulieren kunnen wel pallets aan ons verkopen.",
        },
      ],
    },

    transport: {
      eyebrow: "Transport",
      title: "Transportmogelijkheden met eigen wagenpark",
      intro:
        "De Palletman rijdt met eigen transport door Zuid- en Midden-Nederland. Zo regelen wij bezorgen en ophalen efficiënt en betrouwbaar.",
      imageFilename: "transport.webp",
      imageAlt: "Eigen transport voor palletlevering en -ophaling door De Palletman",
      columns: 2,
      items: [
        {
          title: "Bezorgen aan bedrijven",
          text: "Wij leveren europallets, blokpallets en wegwerppallets op uw locatie. Van kleine partijen tot volle ladingen.",
        },
        {
          title: "Ophalen op locatie",
          text: "Overtollige pallets? Wij halen op bij bedrijven én particulieren — ook combineren met een nieuwe levering.",
        },
        {
          title: "Flexibele planning",
          text: "Wij plannen ritten efficiënt in ons werkgebied. Geef uw voorkeursdag en tijdvenster door.",
        },
        {
          title: "Werkgebied",
          text: "Noord-Brabant, Zuid-Holland, Zeeland, Limburg, Utrecht en Gelderland.",
          href: "/werkgebied",
          linkLabel: "Bekijk werkgebied",
        },
      ],
    },

    pickup: {
      eyebrow: "Retour & inkoop",
      title: "Ophalen van overtollige pallets",
      intro:
        "Heeft u naast inkopen ook pallets die u wilt afstoten? De Palletman koopt in van bedrijven én particulieren.",
      columns: 2,
      items: [
        {
          title: "Inkoop bij bedrijven",
          text: "Overtollige europallets, blokpallets of wegwerppallets? Wij geven een eerlijke prijsopgave en halen op.",
          href: "/pallets-verkopen",
          linkLabel: "Pallets verkopen",
        },
        {
          title: "Inkoop bij particulieren",
          text: "Particulieren kunnen pallets aan ons verkopen. Bezorgen aan particulieren doen wij niet.",
          href: "/pallets-verkopen",
          linkLabel: "Meer over verkopen",
        },
        {
          title: "Combinatie in- en verkoop",
          text: "Veel klanten leveren oude partijen in en nemen tegelijk een nieuwe levering af.",
        },
        {
          title: "Snelle afhandeling",
          text: "Bij inkoop betalen wij snel en betrouwbaar — de procedure bespreken wij bij de prijsopgave.",
        },
      ],
    },

    largeBatches: {
      eyebrow: "Volume",
      title: "Grote partijen",
      text: "Regelmatig grote volumes nodig? De Palletman is uw vaste partner voor bulkleveringen. Wij denken mee over structurele voorraad, vaste prijsafspraken en efficiënte leverplanning — van wekelijkse aanvulling tot een eenmalige partij van honderden pallets.",
    },

    smallBatches: {
      eyebrow: "Flexibel",
      title: "Kleine partijen",
      text: "Ook voor enkele pallets of een kleine partij bent u welkom. Ideaal voor starters, kleine werkplaatsen of incidentele vraag. Geef type, aantal en kwaliteit door — wij sturen u snel een heldere offerte.",
    },

    ctaBanner: {
      title: "Vandaag nog pallets inkopen?",
      text: "Vraag een vrijblijvende offerte aan — wij reageren doorgaans binnen 24 uur. Europallets, blokpallets en wegwerppallets voor uw bedrijf.",
      primaryLabel: "Vraag offerte aan",
      primaryHref: "#offerte-formulier-heading",
      secondaryLabel: "Bel direct",
      secondaryHref: "tel:+31612345678",
      imageFilename: "cta-pallets.webp",
      imageAlt: "Gebruikte pallets kopen bij De Palletman — offerte aanvragen",
    },

    quoteForm: {
      title: "Offerteformulier — pallets kopen",
      intro:
        "Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte. Vermeld type pallet, gewenste kwaliteit, aantal en uw locatie.",
    },
  },

  seoText: {
    types: {
      eyebrow: "Assortiment",
      title: "Beschikbare pallettypes",
      intro: "Wij leveren drie hoofdcategorieën gebruikte pallets.",
      items: [
        {
          title: "Europallets",
          text: "De Europese standaard (800 × 1200 mm) in A- en B-kwaliteit. Ook HT-gestempeld voor export buiten de EU.",
          href: "/europallets",
          linkLabel: "Meer over Europallets",
        },
        {
          title: "Blokpallets",
          text: "Sterke constructie voor zware ladingen en industriële toepassingen.",
          href: "/blokpallets",
          linkLabel: "Meer over Blokpallets",
        },
        {
          title: "Wegwerppallets",
          text: "Praktisch en betaalbaar voor eenmalig transport of export.",
          href: "/wegwerppallets",
          linkLabel: "Meer over Wegwerppallets",
        },
      ],
    },
    qualities: {
      eyebrow: "Kwaliteit",
      title: "Kwaliteiten en condities",
      intro:
        "Bij europallets kiest u de conditie die past bij uw toepassing. Wij omschrijven elke kwaliteit helder — altijd technisch bruikbaar.",
      items: [
        ...europalletQualitySectionItems(),
        {
          title: "Verschil 1e en 2e keus",
          text: "Het verschil zit uitsluitend in uitstraling, gebruikssporen en kleur — beide kwaliteiten zijn technisch volledig inzetbaar.",
        },
        {
          title: "HT-gestempeld voor export buiten de EU",
          text: "Pallets buiten de Europese Unie moeten HT-gestempeld zijn volgens ISPM 15 (Heat Treatment). De stempel bevestigt de behandeling tegen ongedierte. Informeer naar beschikbaarheid.",
        },
        {
          title: "Kwaliteitscontrole",
          text: "Elke partij wordt visueel gecontroleerd vóór levering.",
        },
        {
          title: "Eerlijke omschrijving",
          text: "Wij beschrijven conditie en kwaliteit transparant in de offerte — u weet vooraf exact wat u krijgt.",
        },
      ],
    },
  },

  usps: {
    eyebrow: "Voordelen",
    title: "Voordelen voor uw bedrijf",
    intro: "Waarom bedrijven kiezen voor De Palletman wanneer zij gebruikte pallets willen inkopen:",
    columns: 2,
    items: [
      {
        title: "Uitsluitend B2B-levering",
        text: "Professionele afhandeling, zakelijke facturatie en duidelijke afspraken.",
      },
      {
        title: "Eerlijke, transparante prijzen",
        text: "Heldere offerte op basis van type, kwaliteit en aantal — geen verborgen kosten.",
      },
      {
        title: "Eigen transport",
        text: "Bezorgen op locatie met ons eigen wagenpark — flexibel en betrouwbaar.",
      },
      {
        title: "Grote én kleine partijen",
        text: "Van enkele pallets tot volle ladingen — wij schakelen mee met uw vraag.",
      },
      {
        title: "Snelle beschikbaarheid",
        text: "Grote voorraad europallets en blokpallets — vaak snel leverbaar.",
      },
      {
        title: "Duurzaam hergebruik",
        text: "Gebruikte pallets geven hout een tweede leven — circulair en kostenefficiënt.",
      },
      {
        title: "Persoonlijk advies",
        text: "Wij denken mee over type, kwaliteit en logistiek — één vaste contactpersoon.",
      },
      {
        title: "Offerte binnen 24 uur",
        text: "Vraag aan via telefoon, WhatsApp, e-mail of het formulier — snelle reactie gegarandeerd.",
      },
    ],
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Alles over pallets inkopen bij De Palletman",
    intro: "Antwoorden op de meest gestelde vragen van bedrijven die gebruikte pallets willen inkopen.",
    items: [
      {
        question: "Leveren jullie pallets aan particulieren?",
        answer:
          "Nee. De Palletman levert uitsluitend aan bedrijven (B2B). Particulieren kunnen wel pallets aan ons verkopen.",
      },
      {
        question: "Wat is het verschil tussen A-kwaliteit en B-kwaliteit?",
        answer: europalletQualityDifferenceAnswer(),
      },
      {
        question: "Wat is het minimale bestelbedrag of aantal?",
        answer:
          "Wij hanteren geen starre minimumorder. Van enkele pallets tot volle ladingen — neem contact op en wij denken mee.",
      },
      {
        question: "Hoe snel ontvang ik een offerte?",
        answer:
          "Wij streven naar reactie binnen 24 uur op werkdagen. Bellen of WhatsAppen kan vaak sneller.",
      },
      {
        question: "Leveren jullie HT-gestempelde pallets voor export buiten de EU?",
        answer:
          "Ja, op aanvraag. Pallets buiten de EU moeten HT-gestempeld zijn volgens ISPM 15. Informeer naar beschikbaarheid.",
      },
      {
        question: "In welk gebied bezorgen jullie?",
        answer:
          "In Noord-Brabant, Zuid-Holland, Zeeland, Limburg, Utrecht en Gelderland — met eigen transport.",
      },
      {
        question: "Hoe snel kan ik pallets geleverd krijgen?",
        answer:
          "Dankzij onze voorraad vaak binnen enkele werkdagen. Bij urgentie geven wij prioriteit waar mogelijk.",
      },
      {
        question: "Kan ik ook kleine partijen bestellen?",
        answer:
          "Ja. Wij leveren zowel grote als kleine partijen aan bedrijven.",
      },
      {
        question: "Halen jullie ook pallets op als ik te veel heb?",
        answer:
          "Ja. Wij kopen in van bedrijven én particulieren en halen op met eigen transport.",
      },
      {
        question: "Hoe vraag ik een offerte aan?",
        answer:
          "Via telefoon, WhatsApp, e-mail of het offerteformulier onderaan deze pagina. Vermeld type, kwaliteit, aantal en locatie.",
      },
    ],
  },

  cta: {
    title: "Klaar om pallets in te kopen?",
    text: "Bel direct, stuur een WhatsApp of vraag vrijblijvend een offerte aan. Wij reageren snel — doorgaans binnen 24 uur.",
    primaryLabel: "Vraag offerte aan",
    primaryHref: "#offerte-formulier-heading",
    secondaryLabel: "Bel direct",
    secondaryHref: "tel:+31612345678",
  },

  internalLinks: [
    { label: "Pallets verkopen", href: "/pallets-verkopen" },
    { label: "Europallets", href: "/europallets" },
    { label: "Blokpallets", href: "/blokpallets" },
    { label: "Wegwerppallets", href: "/wegwerppallets" },
    { label: "Ophalen en bezorgen", href: "/werkgebied" },
    { label: "Veelgestelde vragen", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],

  seo: {
    metaTitle: "Pallets kopen voor bedrijven | Gebruikte europallets & blokpallets | De Palletman",
    metaDescription:
      "Gebruikte pallets kopen voor uw bedrijf? De Palletman levert europallets, blokpallets en wegwerppallets in A- en B-kwaliteit. B2B-only, eigen transport, offerte binnen 24 uur in Zuid- en Midden-Nederland.",
    openGraph: {
      title: "Pallets kopen voor bedrijven | De Palletman",
      description:
        "Gebruikte europallets, blokpallets en wegwerppallets — B2B-levering met eigen transport. Offerte binnen 24 uur.",
      image: "https://www.depalletman.nl/images/hero-pallets-kopen.webp",
    },
    schema: "auto",
  },
};
