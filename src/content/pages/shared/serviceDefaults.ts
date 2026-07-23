import type {
  ContentSection,
  ServiceConversion,
  ServiceCtaBanner,
  ServiceQuoteForm,
  ServiceTransportSection,
} from "../types";

export const PROVINCES =
  "Noord-Brabant, Zuid-Holland, Zeeland, Limburg, Utrecht en Gelderland";

export function serviceConversion(text: string): ServiceConversion {
  return {
    title: "Snelle offerte binnen 24 uur",
    text,
  };
}

export function serviceTrust(intro: string): ContentSection {
  return {
    eyebrow: "Vertrouwen",
    title: "Waarom De Palletman?",
    intro,
    columns: 3,
    items: [
      {
        title: "Jarenlange ervaring",
        text: "Al jarenlang zijn wij dé specialist in gebruikte pallets. Wij kennen de markt, kwaliteitsverschillen en logistiek in de regio.",
      },
      {
        title: "Snelle betaling bij verkoop",
        text: "Verkoopt u pallets aan ons? Wij betalen snel en betrouwbaar — met korte lijnen en duidelijke afspraken.",
      },
      {
        title: "Eigen transport",
        text: "Met ons eigen wagenpark halen wij op en bezorgen wij op locatie. U spreekt rechtstreeks met uw vaste contactpersoon.",
      },
      {
        title: "Grote voorraad",
        text: "Dankzij onze voorraad europallets, blokpallets en wegwerppallets kunnen wij vaak snel schakelen.",
      },
      {
        title: "Bedrijven in Zuid- en Midden-Nederland",
        text: `Wij zijn dagelijks actief in ${PROVINCES} — lokaal bereikbaar, korte reactietijd.`,
      },
      {
        title: "Eerlijk en transparant",
        text: "Wij omschrijven conditie, prijs en planning helder. Geen verrassingen achteraf.",
      },
    ],
  };
}

export function serviceTransport(
  intro: string,
  items: ServiceTransportSection["items"],
): ServiceTransportSection {
  return {
    eyebrow: "Transport",
    title: "Transportmogelijkheden met eigen wagenpark",
    intro,
    imageFilename: "transport.webp",
    imageAlt: "Eigen transport voor palletlevering en -ophaling door De Palletman",
    columns: 2,
    items,
  };
}

export function serviceCtaBanner(
  title: string,
  text: string,
  imageFilename: string,
  imageAlt: string,
): ServiceCtaBanner {
  return {
    title,
    text,
    primaryLabel: "Vraag offerte aan",
    primaryHref: "#offerte-formulier-heading",
    secondaryLabel: "Bel direct",
    secondaryHref: "tel:+31612345678",
    imageFilename,
    imageAlt,
  };
}

export function serviceQuoteForm(title: string, intro: string): ServiceQuoteForm {
  return { title, intro };
}

export const defaultCta = {
  primaryLabel: "Vraag offerte aan",
  primaryHref: "#offerte-formulier-heading",
  secondaryLabel: "Bel direct",
  secondaryHref: "tel:+31612345678",
};

export const standardInternalLinks = [
  { label: "Pallets kopen", href: "/pallets-kopen" },
  { label: "Pallets verkopen", href: "/pallets-verkopen" },
  { label: "Europallets", href: "/europallets" },
  { label: "Blokpallets", href: "/blokpallets" },
  { label: "Wegwerppallets", href: "/wegwerppallets" },
  { label: "Ophalen en bezorgen", href: "/werkgebied" },
  { label: "Contact", href: "/contact" },
];
