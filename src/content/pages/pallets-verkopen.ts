import type { ServiceTemplatePage } from "../types";

export const palletsVerkopen: ServiceTemplatePage = {
  path: "/pallets-verkopen",
  template: "service",

  title: "Pallets verkopen",
  h1: "Verkoop uw gebruikte pallets",
  heroSubtitle:
    "Wij kopen in van bedrijven én particulieren — partijen groot en klein, met snelle betaling en ophalen op locatie.",
  imageFilename: "pallets-verkopen.webp",

  intro: {
    eyebrow: "Snelle inkoop",
    title: "Eenvoudig pallets verkopen aan De Palletman",
    text: "Heeft u overtollige pallets? De Palletman koopt gebruikte pallets in van bedrijven en particulieren. Stuur type, aantal en conditie — wij geven u snel een eerlijke prijsopgave en halen de partij op met eigen transport.",
  },

  seoText: {
    types: {
      eyebrow: "Inkoop",
      title: "Soorten pallets die wij inkopen",
      intro:
        "Wij kopen diverse pallettypes in. Informeer naar de actuele vraag en prijs voor uw partij.",
      items: [
        {
          title: "Europallets",
          text: "Wij kopen europallets in alle gangbare condities — van nette A-kwaliteit tot gebruikte B-kwaliteit.",
          href: "/europallets",
          linkLabel: "Meer over Europallets",
        },
        {
          title: "Blokpallets",
          text: "Overtollige blokpallets? Wij beoordelen partijen voor industriële en zware toepassingen.",
          href: "/blokpallets",
          linkLabel: "Meer over Blokpallets",
        },
        {
          title: "Wegwerppallets",
          text: "Ook wegwerppallets nemen wij graag in. Groot of klein, wij komen met een passend aanbod.",
          href: "/wegwerppallets",
          linkLabel: "Meer over Wegwerppallets",
        },
      ],
    },
    qualities: {
      eyebrow: "Beoordeling",
      title: "Condities die wij accepteren",
      intro:
        "Wij beoordelen elke partij eerlijk op type, conditie en aantal. Hieronder een indicatie van gangbare condities.",
      items: [
        {
          title: "Eerste keus / A-kwaliteit",
          text: "Lichte of blanke pallets in nette conditie. Vaak interessant voor ons — u ontvangt een passende prijs.",
        },
        {
          title: "Tweede keus / B-kwaliteit",
          text: "Gebruikte pallets met normale slijtage. Technisch bruikbaar en altijd welkom voor inkoop.",
        },
        {
          title: "Gemengde partijen",
          text: "Verschillende condities in één partij? Geen probleem. Wij beoordelen en geven een transparante offerte.",
        },
      ],
    },
  },

  usps: {
    eyebrow: "Waarom De Palletman",
    title: "Voordelen bij verkoop",
    intro: "Waarom bedrijven en particulieren kiezen om pallets aan ons te verkopen.",
    items: [
      {
        title: "Snelle betaling",
        text: "Bij inkoop betalen wij snel en betrouwbaar. Geen lange wachttijden of ingewikkelde procedures.",
      },
      {
        title: "Grote én kleine partijen",
        text: "Van enkele pallets tot een volle vrachtwagen — wij beoordelen elke aanvraag en komen met een passend aanbod.",
      },
      {
        title: "Ophalen met eigen transport",
        text: "Wij halen pallets op bij u op in ons werkgebied. Efficiënt en zonder extra moeite voor u.",
      },
      {
        title: "Eerlijke beoordeling",
        text: "Transparante prijsopgave op basis van type, conditie en hoeveelheid. Geen verrassingen achteraf.",
      },
    ],
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Alles wat u wilt weten over pallets verkopen",
    intro:
      "Antwoorden op de meest gestelde vragen van bedrijven en particulieren die pallets willen verkopen.",
    items: [
      {
        question: "Kopen jullie ook van particulieren?",
        answer:
          "Ja. Wij kopen pallets in van bedrijven én particulieren. Stuur type, aantal en conditie voor een snelle prijsopgave.",
      },
      {
        question: "Welke pallettypes nemen jullie in?",
        answer:
          "Wij kopen europallets, blokpallets en wegwerppallets in. Informeer naar de actuele vraag en prijs.",
      },
      {
        question: "Hoe snel wordt er betaald?",
        answer:
          "Bij inkoop betalen wij snel en betrouwbaar. De exacte procedure bespreken wij met u bij de prijsopgave.",
      },
      {
        question: "Halen jullie pallets op?",
        answer:
          "Ja. Wij halen pallets op met eigen transport in Noord-Brabant, Zuid-Holland, Zeeland, Limburg, Utrecht en Gelderland.",
      },
      {
        question: "Kopen jullie ook kleine partijen?",
        answer:
          "Ja. Of u nu enkele pallets heeft of een volle lading — wij beoordelen elke partij en komen met een passend aanbod.",
      },
      {
        question: "Hoe vraag ik een prijsopgave aan?",
        answer:
          "Neem contact op via telefoon, WhatsApp of onze contactpagina. Vermeld type, aantal en conditie van uw pallets.",
      },
    ],
  },

  cta: {
    title: "Pallets te koop?",
    text: "Vraag vandaag nog een prijsopgave aan. Wij reageren snel en halen op met eigen transport.",
    primaryLabel: "Offerte aanvragen",
    primaryHref: "/contact",
    secondaryLabel: "Pallets kopen",
    secondaryHref: "/pallets-kopen",
  },

  seo: {
    metaTitle: "Pallets verkopen | De Palletman koopt uw pallets in",
    metaDescription:
      "Pallets verkopen aan De Palletman. Wij kopen in van bedrijven en particulieren — europallets, blokpallets en wegwerppallets. Snelle betaling en ophalen met eigen transport.",
    openGraph: {
      title: "Pallets verkopen | De Palletman koopt uw pallets in",
      description:
        "Pallets verkopen aan De Palletman. Wij kopen in van bedrijven en particulieren — europallets, blokpallets en wegwerppallets. Snelle betaling en ophalen met eigen transport.",
    },
    schema: "auto",
  },
};
