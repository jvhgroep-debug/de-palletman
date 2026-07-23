/**
 * Content Master — Pallets kopen
 *
 * Voorbeeldpagina met alle verplichte velden.
 * Nieuwe pagina's kopiëren deze structuur en vullen alleen de content aan.
 */
import type { ServiceTemplatePage } from "../types";

export const palletsKopen: ServiceTemplatePage = {
  path: "/pallets-kopen",
  template: "service",

  title: "Pallets kopen",
  h1: "Gebruikte pallets kopen voor uw bedrijf",
  heroSubtitle:
    "Wij leveren uitsluitend aan bedrijven — van enkele pallets tot grote volumes, met eigen transport en snelle levering.",
  imageFilename: "pallets-kopen.webp",

  intro: {
    eyebrow: "B2B-leverancier",
    title: "Betrouwbare partner voor gebruikte pallets",
    text: "De Palletman levert al jarenlang gebruikte pallets aan bedrijven in logistiek, productie en handel. Of u nu europallets, blokpallets of wegwerppallets nodig heeft: wij denken met u mee, geven een heldere offerte en regelen levering met eigen transport. Grote én kleine partijen zijn welkom.",
  },

  seoText: {
    types: {
      eyebrow: "Assortiment",
      title: "Soorten pallets",
      intro:
        "Kies het pallettype dat past bij uw toepassing. Wij leveren uit voorraad en denken graag mee over de juiste keuze voor uw situatie.",
      items: [
        {
          title: "Europallets",
          text: "Gebruikte europallets in A- en B-kwaliteit. Ideaal voor logistiek, opslag en export. Ook HT-gestempeld voor buiten de EU.",
          href: "/europallets",
          linkLabel: "Meer over Europallets",
        },
        {
          title: "Blokpallets",
          text: "Sterke blokpallets voor zware ladingen en industriële toepassingen. Betrouwbaar, duurzaam en direct leverbaar.",
          href: "/blokpallets",
          linkLabel: "Meer over Blokpallets",
        },
        {
          title: "Wegwerppallets",
          text: "Praktische wegwerppallets voor eenmalig transport of export. Betaalbaar en snel beschikbaar voor uw bedrijf.",
          href: "/wegwerppallets",
          linkLabel: "Meer over Wegwerppallets",
        },
      ],
    },
    qualities: {
      eyebrow: "Kwaliteit",
      title: "Beschikbare kwaliteiten",
      intro:
        "Bij europallets kiest u de conditie die past bij uw toepassing en budget. Altijd technisch bruikbaar en eerlijk omschreven.",
      items: [
        {
          title: "A-kwaliteit (Eerste keus)",
          text: "Lichte of blanke pallets met een nette uitstraling. Geschikt wanneer presentatie en een verzorgde conditie belangrijk zijn.",
        },
        {
          title: "B-kwaliteit (Tweede keus)",
          text: "Donkere gebruikte pallets met normale gebruikssporen, technisch volledig bruikbaar. Een voordelige keuze voor logistiek en opslag.",
        },
        {
          title: "HT-gestempeld voor export",
          text: "Voor export buiten de Europese Unie zijn HT-gestempelde pallets leverbaar volgens de geldende ISPM 15-richtlijnen.",
        },
      ],
    },
  },

  usps: {
    eyebrow: "Waarom De Palletman",
    title: "Voordelen voor uw bedrijf",
    intro: "Waarom bedrijven kiezen voor De Palletman wanneer zij gebruikte pallets willen inkopen.",
    items: [
      {
        title: "Uitsluitend B2B",
        text: "Wij leveren gebruikte pallets uitsluitend aan bedrijven. Zo bent u verzekerd van een professionele, zakelijke afhandeling.",
      },
      {
        title: "Grote én kleine partijen",
        text: "Of u nu enkele pallets nodig heeft of regelmatig grotere volumes afneemt: wij denken flexibel mee en leveren passend bij uw vraag.",
      },
      {
        title: "Eigen transport",
        text: "Met eigen transport bezorgen wij pallets bij u op locatie. Snel, efficiënt en afgestemd op uw planning.",
      },
      {
        title: "Snelle levering",
        text: "Dankzij een grote voorraad europallets en blokpallets kunnen wij vaak snel leveren in ons werkgebied.",
      },
    ],
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Alles wat u wilt weten over pallets kopen",
    intro:
      "Antwoorden op de meest gestelde vragen van bedrijven die gebruikte pallets willen inkopen.",
    items: [
      {
        question: "Leveren jullie pallets aan particulieren?",
        answer:
          "Nee. De Palletman levert gebruikte pallets uitsluitend aan bedrijven (B2B). Particulieren kunnen wel pallets aan ons verkopen.",
      },
      {
        question: "Welke pallettypes kunnen wij inkopen?",
        answer:
          "Wij leveren europallets, blokpallets en wegwerppallets. Informeer naar de actuele beschikbaarheid en prijs voor uw situatie.",
      },
      {
        question: "In welke kwaliteiten zijn europallets leverbaar?",
        answer:
          "Wij leveren A-kwaliteit (eerste keus) en B-kwaliteit (tweede keus). Beide zijn technisch bruikbaar; A-kwaliteit heeft een nettere uitstraling.",
      },
      {
        question: "Leveren jullie HT-gestempelde pallets voor export?",
        answer:
          "Ja. Voor export buiten de Europese Unie zijn HT-gestempelde pallets leverbaar volgens de geldende ISPM 15-richtlijnen.",
      },
      {
        question: "Kunnen wij ook kleine partijen bestellen?",
        answer:
          "Ja. Wij leveren zowel grote als kleine partijen aan bedrijven. Vraag een offerte aan en wij denken mee over de beste oplossing.",
      },
      {
        question: "Bezorgen jullie met eigen transport?",
        answer:
          "Ja. Wij bezorgen pallets met eigen transport in ons werkgebied: Noord-Brabant, Zuid-Holland, Zeeland, Limburg, Utrecht en Gelderland.",
      },
      {
        question: "Hoe vraag ik een offerte aan?",
        answer:
          "Neem contact op via telefoon, WhatsApp of onze contactpagina. Vermeld type, aantal en gewenste kwaliteit — wij sturen u snel een heldere offerte.",
      },
    ],
  },

  cta: {
    title: "Offerte voor gebruikte pallets?",
    text: "Vraag vandaag nog een offerte aan. Wij reageren snel en leveren betrouwbaar — europallets, blokpallets en wegwerppallets voor uw bedrijf.",
    primaryLabel: "Offerte aanvragen",
    primaryHref: "/contact",
    secondaryLabel: "Bekijk Europallets",
    secondaryHref: "/europallets",
  },

  seo: {
    metaTitle: "Gebruikte pallets kopen | Europallets & blokpallets | De Palletman",
    metaDescription:
      "Gebruikte pallets kopen voor uw bedrijf? De Palletman levert europallets, blokpallets en wegwerppallets. B2B-only, eigen transport en snelle levering in Zuid- en Midden-Nederland.",
    openGraph: {
      title: "Gebruikte pallets kopen | De Palletman",
      description:
        "Pallets inkopen voor uw bedrijf? Europallets, blokpallets en wegwerppallets met snelle levering.",
    },
    schema: "auto",
  },
};
