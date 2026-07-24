import type { ProvinceTemplatePage } from "../provinceTypes";
import {
  EUROPALLET_HT_EXPORT_NOTE,
  EUROPALLET_QUALITY_COMBINED_TEXT,
  europalletQualityDifferenceAnswer,
} from "../shared/europalletQuality";

export const zuidHolland: ProvinceTemplatePage = {
  path: "/zuid-holland",
  template: "province",
  slug: "zuid-holland",

  province: {
    name: "Zuid-Holland",
    slug: "zuid-holland",
  },

  title: "Zuid-Holland",
  h1: "Gebruikte pallets inkopen en verkopen in Zuid-Holland",
  heroSubtitle:
    "Actief in Zuid-Holland — bezorgen van gebruikte pallets uitsluitend aan bedrijven, ophalen bij bedrijven en particulieren.",
  imageFilename: "pallets-zuid-holland.webp",

  intro: {
    eyebrow: "Werkgebied",
    title: "Palletservice in de Randstad en daarbuiten",
    text: "De Palletman helpt bedrijven en particulieren in Zuid-Holland met gebruikte pallets. Van Rotterdam en Den Haag tot Dordrecht en Leiden: wij kopen pallets in, leveren aan bedrijven en rijden met eigen transport door de provincie. Grote én kleine partijen zijn welkom.",
  },

  whyPalletman: {
    eyebrow: "Waarom De Palletman",
    title: "Lokale partner in Zuid-Holland",
    intro:
      "In een drukke logistieke regio als Zuid-Holland telt snelheid en betrouwbaarheid. Daarom kiezen bedrijven en particulieren voor De Palletman.",
    items: [
      {
        title: "Snelle lijnen in de regio",
        text: "Wij zijn regelmatig onderweg in Zuid-Holland — van havens en distributiecentra tot productiebedrijven in de stedelijke agglomeratie.",
      },
      {
        title: "Flexibel voor elk volume",
        text: "Of u tien pallets nodig heeft of een volle vracht: wij schakelen snel en geven een heldere prijs vooraf.",
      },
      {
        title: "Eigen wagenpark",
        text: "Ophalen en bezorgen regelen wij met eigen transport. Dat scheelt tijd en misverstanden.",
      },
      {
        title: "B2B-levering, brede inkoop",
        text: "Levering uitsluitend aan bedrijven. Inkoop doen wij van bedrijven én particulieren in Zuid-Holland.",
      },
    ],
  },

  services: {
    eyebrow: "Onze diensten",
    title: "Diensten in Zuid-Holland",
    intro:
      "Alle palletdiensten die u nodig heeft — van inkoop tot levering — vanuit één aanspreekpunt in Zuid-Holland.",
    items: [
      {
        title: "Pallets kopen",
        text: "Gebruikte europallets, blokpallets en wegwerppallets, geleverd aan bedrijven in Zuid-Holland. Grote én kleine partijen.",
        href: "/pallets-kopen",
        linkLabel: "Pallets kopen",
      },
      {
        title: "Pallets verkopen",
        text: "Overtollige pallets? Wij kopen op bij bedrijven en particulieren en halen op wanneer het u uitkomt.",
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
        text: "Stevige blokpallets voor zware ladingen en praktische wegwerppallets voor eenmalig vervoer.",
        href: "/blokpallets",
        linkLabel: "Blokpallets",
      },
    ],
  },

  palletTypes: {
    eyebrow: "Assortiment",
    title: "Veel voorkomende palletsoorten in Zuid-Holland",
    intro:
      "In Zuid-Holland — met veel haven- en distributieactiviteit — worden vooral deze types veel gevraagd.",
    items: [
      {
        title: "Europallets",
        text: "De basis voor opslag en transport. Eerste keus (A) of tweede keus (B), plus HT-gestempeld voor internationale zendingen buiten de EU.",
        href: "/europallets",
        linkLabel: "Meer over Europallets",
      },
      {
        title: "Blokpallets",
        text: "Geschikt voor zware goederen en industriële toepassingen. Direct leverbaar aan bedrijven in de provincie.",
        href: "/blokpallets",
        linkLabel: "Meer over Blokpallets",
      },
      {
        title: "Wegwerppallets",
        text: "Ideaal voor eenmalige export of intern transport. Voordelig en snel beschikbaar.",
        href: "/wegwerppallets",
        linkLabel: "Meer over Wegwerppallets",
      },
    ],
  },

  pickupDelivery: {
    eyebrow: "Logistiek",
    title: "Ophalen en bezorgen in Zuid-Holland",
    intro:
      "Wij plannen ophalen en bezorgen flexibel afhankelijk van uw locatie en partijgrootte in Zuid-Holland.",
    items: [
      {
        title: "Ophalen",
        text: "Pallets ophalen bij bedrijven én particulieren in Zuid-Holland. Geef type en aantal door, wij regelen de rest.",
      },
      {
        title: "Bezorgen",
        text: "Bezorgen uitsluitend aan bedrijven — van enkele europallets tot grote volumes blokpallets op uw locatie.",
      },
    ],
  },

  workArea: {
    eyebrow: "Regio",
    title: "Werkgebied binnen Zuid-Holland",
    intro:
      "De Palletman rijdt door Zuid-Holland. Onder meer actief in:",
    items: [
      {
        title: "Rotterdam",
        text: "Haven, logistiek en industrie — ophalen en bezorgen in en rond Rotterdam.",
      },
      {
        title: "Den Haag",
        text: "Service voor bedrijven in en rond Den Haag en de Haagse regio.",
      },
      {
        title: "Leiden & Delft",
        text: "Actief in het noorden van de provincie, van Leiden tot Delft.",
      },
      {
        title: "Dordrecht & Gorinchem",
        text: "Ook in Zuid-Holland Zuid rijden wij regelmatig voor ophalen en levering.",
      },
      {
        title: "Gouda & Alphen",
        text: "Centraal in Zuid-Holland — snelle service tussen stedelijke en landelijke gebieden.",
      },
      {
        title: "Overige gemeenten",
        text: "Staat uw plaats er niet bij? Neem contact op — waarschijnlijk rijden wij ook bij u.",
      },
    ],
  },

  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "FAQ — Pallets in Zuid-Holland",
    intro: "Praktische vragen over onze diensten in Zuid-Holland.",
    items: [
      {
        question: "Leveren jullie pallets aan particulieren in Zuid-Holland?",
        answer:
          "Nee, bezorgen doen wij uitsluitend aan bedrijven. Particulieren kunnen wél pallets aan ons verkopen; wij halen dan op.",
      },
      {
        question: "Welke kwaliteiten europallets leveren jullie?",
        answer:
          `${europalletQualityDifferenceAnswer("Zuid-Holland")} Voor export buiten de EU leveren wij HT-gestempelde pallets volgens ISPM 15.`,
      },
      {
        question: "Kunnen jullie ook kleine partijen bezorgen?",
        answer:
          "Ja, naast grote volumes bezorgen wij ook kleinere partijen aan bedrijven in Zuid-Holland. Vraag gerust een offerte aan.",
      },
      {
        question: "Hoe werkt palletinkoop in Zuid-Holland?",
        answer:
          "U neemt contact op met type en aantal. Wij geven een prijs en plannen ophalen bij u op locatie — bij bedrijven én particulieren.",
      },
    ],
  },

  cta: {
    title: "Pallets nodig in Zuid-Holland?",
    text: "Vraag een offerte aan, plan een ophaalafspraak of stel uw vraag over onze diensten in Zuid-Holland.",
    primaryLabel: "Neem contact op",
    primaryHref: "/contact",
    secondaryLabel: "Pallets verkopen",
    secondaryHref: "/pallets-verkopen",
  },

  seo: {
    metaTitle: "Gebruikte pallets in Zuid-Holland kopen en verkopen | De Palletman",
    metaDescription:
      "Pallets kopen (B2B) en verkopen in Zuid-Holland. Europallets, blokpallets en wegwerppallets. Ophalen bij bedrijven en particulieren, bezorgen aan bedrijven. Rotterdam, Den Haag en omgeving.",
    openGraph: {
      title: "Pallets in Zuid-Holland | De Palletman",
      description:
        "Gebruikte pallets kopen en verkopen in Zuid-Holland. Eigen transport, A- en B-kwaliteit europallets.",
    },
    schema: "auto",
  },
};
