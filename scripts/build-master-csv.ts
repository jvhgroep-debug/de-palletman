import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { MASTER_CSV_COLUMNS } from "../src/content/masterCsv/columns.ts";
import { escapeCsvValue } from "../src/content/masterCsv/csvUtils.ts";

const rows = [
  {
    province: "noord-brabant",
    city: "Breda",
    slug: "breda",
    heroTitle: "Pallets kopen en verkopen in Breda",
    heroSubtitle:
      "De Palletman helpt bedrijven en particulieren in Breda en West-Brabant — bezorgen uitsluitend aan bedrijven, ophalen bij iedereen.",
    intro:
      "De Palletman is actief in Breda en de omliggende regio in Noord-Brabant. Of u pallets nodig heeft voor uw bedrijf of overtollige pallets wilt verkopen: wij denken met u mee, geven een heldere prijs en regelen ophalen of bezorgen met eigen transport.",
    cityDescription:
      "Breda is een belangrijk logistiek en zakelijk centrum in West-Brabant. De stad combineert een historisch centrum met moderne bedrijventerreinen en een strategische ligging nabij de A16, A58 en de havens rond Moerdijk.",
    localEconomy:
      "In Breda en omgeving zijn logistiek, productie, opslag, groothandel en retail sterk vertegenwoordigd. Bedrijven op terreinen als Hazeldonk, Minervum en Emer hebben regelmatig behoefte aan europallets, blokpallets of wegwerppallets.",
    industrialAreas: "Hazeldonk|Minervum|Emer",
    surroundingPlaces: "Etten-Leur|Oosterhout|Prinsenbeek|Rijen",
    services:
      "De Palletman verkoopt gebruikte pallets uitsluitend aan bedrijven in Breda. Inkoop doen wij van bedrijven én particulieren. Wij leveren europallets, blokpallets en wegwerppallets in grote én kleine partijen.",
    palletTypes:
      "Europallets, blokpallets en wegwerppallets voor logistiek, productie, opslag en export. Wij adviseren welk type past bij uw bedrijf in Breda.",
    transport:
      "Met eigen transport halen wij pallets op bij bedrijven en particulieren in Breda en bezorgen uitsluitend aan bedrijven op locatie.",
    quality:
      "Europallets als A-kwaliteit (eerste keus): lichte of blanke pallets. B-kwaliteit (tweede keus): donkere gebruikte pallets, technisch bruikbaar.",
    export:
      "Voor export buiten de Europese Unie kunnen HT-gestempelde pallets volgens ISPM 15 nodig zijn. Vraag naar beschikbaarheid voor zendingen vanuit Breda.",
    ctaTitle: "Pallets nodig in Breda?",
    ctaText:
      "Neem contact op voor een offerte, ophaalafspraak of advies over palletsoorten in Breda en West-Brabant.",
    faq1Question: "Leveren jullie pallets aan particulieren in Breda?",
    faq1Answer:
      "Nee, bezorgen doen wij uitsluitend aan bedrijven. Particulieren kunnen wél pallets aan ons verkopen; wij halen dan op in Breda.",
    faq2Question: "Rijden jullie naar bedrijventerreinen als Hazeldonk en Minervum?",
    faq2Answer:
      "Ja, wij zijn actief op bedrijventerreinen in en rond Breda, waaronder Hazeldonk, Minervum en Emer.",
    faq3Question: "Welke kwaliteit europallets kan ik kopen?",
    faq3Answer:
      "A-kwaliteit (lichte of blanke pallets) of B-kwaliteit (donkere gebruikte pallets). Voor export buiten de EU: HT-gestempeld volgens ISPM 15.",
    metaTitle: "Pallets kopen en verkopen in Breda | De Palletman",
    metaDescription:
      "Gebruikte pallets in Breda: kopen voor bedrijven, verkopen door bedrijven en particulieren. Europallets, blokpallets, ophalen en bezorgen in West-Brabant.",
    canonical: "https://de-palletman.pages.dev/noord-brabant/pallets-breda/",
    imageFilename: "pallets-breda.webp",
  },
  {
    province: "noord-brabant",
    city: "Tilburg",
    slug: "tilburg",
    heroTitle: "Gebruikte pallets in Tilburg — kopen en verkopen",
    heroSubtitle:
      "Actief in Tilburg en Midden-Brabant. Bezorgen uitsluitend aan bedrijven, ophalen bij bedrijven en particulieren.",
    intro:
      "De Palletman ondersteunt bedrijven en particulieren in Tilburg met het kopen en verkopen van gebruikte pallets. Wij rijden met eigen transport door de regio en werken met grote én kleine partijen.",
    cityDescription:
      "Tilburg is een economisch centrum in Midden-Brabant met veel logistiek, productie en handel. De stad ligt gunstig ten opzichte van major roads en bedient een brede regio in Noord-Brabant.",
    localEconomy:
      "Tilburg kent een mix van logistiek, productie, opslag, groothandel en retail. Op bedrijventerreinen als De Reeshof, Heikant en Bedrijvenpark 013 is regelmatig vraag naar betrouwbare palletvoorziening.",
    industrialAreas: "De Reeshof|Heikant|Bedrijvenpark 013",
    surroundingPlaces: "Goirle|Oisterwijk|Dongen|Berkel-Enschot",
    services:
      "Verkoop van gebruikte pallets uitsluitend aan bedrijven in Tilburg. Inkoop van pallets bij bedrijven én particulieren. Europallets, blokpallets en wegwerppallets beschikbaar.",
    palletTypes:
      "Europallets voor distributie, blokpallets voor zware ladingen en wegwerppallets voor eenmalig transport — leverbaar aan bedrijven in Tilburg.",
    transport:
      "Ophalen bij bedrijven en particulieren in Tilburg en omgeving. Bezorgen uitsluitend aan bedrijven, flexibel ingepland met eigen transport.",
    quality:
      "A-kwaliteit (eerste keus): lichte of blanke europallets. B-kwaliteit (tweede keus): donkere gebruikte pallets met normale slijtage, technisch bruikbaar.",
    export:
      "HT-gestempelde europallets volgens ISPM 15 beschikbaar voor export buiten de EU. Vraag naar planning vanuit Tilburg.",
    ctaTitle: "Pallets nodig in Tilburg?",
    ctaText:
      "Vraag een offerte aan of plan ophalen in Tilburg. Wij helpen bedrijven en particulieren snel verder.",
    faq1Question: "Halen jullie pallets op in Tilburg?",
    faq1Answer:
      "Ja, wij halen pallets op bij bedrijven én particulieren in Tilburg en omgeving. Bezorgen doen wij uitsluitend aan bedrijven.",
    faq2Question: "Leveren jullie aan bedrijven op De Reeshof?",
    faq2Answer:
      "Ja, wij zijn actief op bedrijventerreinen in Tilburg, waaronder De Reeshof, Heikant en Bedrijvenpark 013.",
    faq3Question: "Werken jullie met kleine partijen?",
    faq3Answer:
      "Ja, naast grotere volumes werken wij ook met kleinere partijen voor bedrijven in Tilburg.",
    metaTitle: "Pallets kopen en verkopen in Tilburg | De Palletman",
    metaDescription:
      "Gebruikte pallets in Tilburg: B2B-levering, inkoop bij bedrijven en particulieren. Europallets, blokpallets, ophalen en bezorgen in Midden-Brabant.",
    canonical: "https://de-palletman.pages.dev/noord-brabant/pallets-tilburg/",
    imageFilename: "pallets-tilburg.webp",
  },
  {
    province: "noord-brabant",
    city: "Eindhoven",
    slug: "eindhoven",
    heroTitle: "Palletservice voor bedrijven in Eindhoven",
    heroSubtitle:
      "De Palletman in Brainport Eindhoven — bezorgen uitsluitend aan bedrijven, ophalen bij bedrijven en particulieren.",
    intro:
      "In Eindhoven en Brainport regio helpt De Palletman bedrijven en particulieren met gebruikte pallets. Wij bieden heldere prijzen, eigen transport en snelle afhandeling.",
    cityDescription:
      "Eindhoven is het hart van Brainport en een van de belangrijkste economische centra in Noord-Brabant. De stad trekt logistiek, high-tech productie, opslag en internationale handel aan.",
    localEconomy:
      "Rond Eindhoven domineren logistiek, productie, tech-industrie, opslag en groothandel. Bedrijventerreinen als Flight Forum, Ekkersrijt en Waalre zien continue vraag naar europallets en blokpallets.",
    industrialAreas: "Flight Forum|Ekkersrijt|Waalre",
    surroundingPlaces: "Best|Veldhoven|Son en Breugel|Nuenen",
    services:
      "Gebruikte pallets verkopen wij uitsluitend aan bedrijven in Eindhoven. Inkoop doen wij van bedrijven én particulieren. Alle gangbare pallettype leverbaar.",
    palletTypes:
      "Europallets, blokpallets en wegwerppallets voor bedrijven in Eindhoven — van distributiecentra tot productiehallen.",
    transport:
      "Eigen transport voor ophalen in Eindhoven en omgeving. Bezorgen uitsluitend aan bedrijven, ook op grotere bedrijventerreinen.",
    quality:
      "Eerste keus (A-kwaliteit): lichte of blanke europallets. Tweede keus (B-kwaliteit): donkere gebruikte pallets, technisch volledig bruikbaar.",
    export:
      "Voor internationale zendingen buiten de EU leveren wij HT-gestempelde pallets volgens ISPM 15. Beschikbaar op aanvraag in Eindhoven.",
    ctaTitle: "Pallets nodig in Eindhoven?",
    ctaText:
      "Neem contact op voor een offerte of ophaalafspraak in Eindhoven en Brainport regio.",
    faq1Question: "Bezorgen jullie pallets aan bedrijven in Eindhoven?",
    faq1Answer:
      "Ja, bezorgen doen wij uitsluitend aan bedrijven in Eindhoven en omgeving. Particulieren kunnen pallets aan ons verkopen.",
    faq2Question: "Zijn jullie actief op Flight Forum en Ekkersrijt?",
    faq2Answer:
      "Ja, wij rijden regelmatig naar bedrijventerreinen in Eindhoven, waaronder Flight Forum, Ekkersrijt en Waalre.",
    faq3Question: "Hebben jullie HT-gestempelde pallets voor export?",
    faq3Answer:
      "Ja, voor export buiten de EU leveren wij HT-gestempelde europallets volgens ISPM 15. Vraag naar beschikbaarheid.",
    metaTitle: "Pallets in Eindhoven kopen en verkopen | De Palletman",
    metaDescription:
      "Pallets in Eindhoven en Brainport: kopen (B2B), verkopen (bedrijven & particulieren), europallets, blokpallets, ophalen en bezorgen.",
    canonical: "https://de-palletman.pages.dev/noord-brabant/pallets-eindhoven/",
    imageFilename: "pallets-eindhoven.webp",
  },
];

const header = MASTER_CSV_COLUMNS.join(",");
const body = rows
  .map((row) => MASTER_CSV_COLUMNS.map((col) => escapeCsvValue(row[col as keyof typeof row])).join(","))
  .join("\n");

const outputPath = join(process.cwd(), "src/data/master-cities.csv");
writeFileSync(outputPath, `${header}\n${body}\n`, "utf-8");
console.log(`Geschreven: ${outputPath} (${rows.length} steden)`);
