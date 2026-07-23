import { defineCityPage } from "../cityTypes";
import type { CityPageExtended } from "../cityTypes";
import { getCanonicalUrl } from "../siteConfig";
import { cityQuoteForm } from "./shared/cityQuoteForm";

const cityName = "Breda";
const provinceName = "Noord-Brabant";
const provinceSlug = "noord-brabant";
const slug = "breda";
const path = `/${provinceSlug}/pallets-${slug}`;

const extended: CityPageExtended = {
  trust: {
    eyebrow: "West-Brabant",
    title: "Waarom pallets belangrijk zijn in Breda",
    intro:
      "Breda is al decennia een logistiek kruispunt in Zuid-Nederland. Van de havens van Moerdijk tot de distributiecentra op Hazeldonk: vrijwel elke goederenstroom in West-Brabant draait op pallets. Zonder betrouwbare palletvoorziening stokt opslag, transport en export.",
    columns: 3,
    items: [
      {
        title: "Logistiek kruispunt sinds de jaren '70",
        text: "Toen Hazeldonk uitgroeide tot distributieknooppunt, vestigden zich steeds meer transport- en logistiekbedrijven in Breda. De stad ontwikkelde zich tot een van de belangrijkste logistieke centra van Noord-Brabant — met continue vraag naar europallets en blokpallets.",
      },
      {
        title: "Moerdijk als exportpoort",
        text: "De binnenhaven van Moerdijk — op een kwartier van Breda — verwerkt jaarlijks miljoenen tonnen goederen. Bedrijven in Breda die exporteren via zee- of binnenvaart hebben pallets nodig die voldoen aan internationale eisen, waaronder HT-stempels buiten de EU.",
      },
      {
        title: "Distributiecentra op Hazeldonk",
        text: "Hazeldonk is het kloppend hart van palletverkeer in Breda. Cross-docking, orderpicking en regionale distributie draaien hier op europallets in A- en B-kwaliteit — dag en nacht.",
      },
      {
        title: "Productie op Minervum en Emer",
        text: "Naast logistiek is Breda sterk in productie, metaal en bouw. Op Minervum en Emer vragen producenten om stevige blokpallets voor zware ladingen en machines.",
      },
      {
        title: "Transportbedrijven in de regio",
        text: "West-Brabant telt honderden transport- en expeditiebedrijven die dagelijks pallets laden en lossen. Een lokale palletpartner die snel levert en ophaalt, bespaart tijd en kosten.",
      },
      {
        title: "Retail en groothandel",
        text: "Retailers en groothandels rond Breda vragen om nette A-kwaliteit europallets voor presentatie en efficiënte magazijnopslag — een sector die blijft groeien in West-Brabant.",
      },
    ],
  },
  europallets: {
    eyebrow: "Europallets",
    title: "Europallets Breda",
    intro:
      "Europallets zijn in Breda veruit het meest gevraagde pallettype. Op Hazeldonk verwerken distributiecentra dagelijks duizenden europallets; groothandels en retailers in West-Brabant werken standaard met het 80×120 cm-formaat. De Palletman levert A-kwaliteit (1e keus) en B-kwaliteit (2e keus) uitsluitend aan bedrijven.",
    columns: 2,
    items: [
      {
        title: "A-kwaliteit — 1e keus",
        text: "Lichte of blanke europallets met een nette uitstraling. Ideaal voor retail-distributie op Hazeldonk, nette opslag bij groothandels en presentatie aan klanten in West-Brabant.",
        href: "/europallets",
        linkLabel: "Meer over europallets",
      },
      {
        title: "B-kwaliteit — 2e keus",
        text: "Donkere gebruikte europallets met normale slijtage. Technisch volledig bruikbaar en voordeliger — perfect voor intern transport, opslag op Minervum en logistieke processen waar uitstraling minder telt.",
        href: "/europallets",
        linkLabel: "Kwaliteitsverschil bekijken",
      },
      {
        title: "Lokale palletvraag Hazeldonk",
        text: "Distributiecentra op Hazeldonk vragen structureel om grote volumes europallets. Wij leveren flexibel — van enkele tientallen tot volle vrachten — met eigen transport op uw terrein.",
      },
      {
        title: "Advies op maat",
        text: "Twijfelt u tussen A- en B-kwaliteit? Wij adviseren op basis van uw sector, lading en bestemming in Breda. Geen verkooppraat, wel een eerlijk antwoord.",
      },
    ],
  },
  blokpallets: {
    eyebrow: "Blokpallets",
    title: "Blokpallets Breda",
    intro:
      "Op industrieterreinen Emer, Minervum-Noord en langs de A58 worden blokpallets dagelijks ingezet voor zware ladingen. Metaalbedrijven, bouwleveranciers en producenten in Breda kiezen voor de stevige constructie van blokpallets wanneer een europallet tekortschiet.",
    columns: 2,
    items: [
      {
        title: "Zware industrie Emer",
        text: "Emer huisvest metaalbewerking, bouw en productie. Blokpallets dragen rollen staal, betonproducten en machines — wij leveren gebruikte en nieuwe varianten in diverse afmetingen.",
        href: "/blokpallets",
        linkLabel: "Meer over blokpallets",
      },
      {
        title: "Productiebedrijven Minervum",
        text: "Producenten op Minervum vragen om blokpallets voor halffabricaten en zware componenten. Wij bezorgen uitsluitend aan bedrijven — ingepland op uw productielocatie.",
        href: "/blokpallets",
        linkLabel: "Afmetingen bekijken",
      },
      {
        title: "Maatwerk en advies",
        text: "Niet elke lading past op een standaardmaat. Wij helpen Bredase bedrijven de juiste blokpallet te kiezen op basis van gewicht, afmeting en toepassing.",
      },
    ],
  },
  wegwerppallets: {
    eyebrow: "Wegwerppallets",
    title: "Wegwerppallets Breda",
    intro:
      "West-Brabant exporteert via Moerdijk, Rotterdam en Antwerpen. Wegwerppallets zijn lichtgewicht, betaalbaar en geschikt voor eenmalig transport — populair bij exporteurs en handelsbedrijven in Breda die geen retourpallets nodig hebben.",
    columns: 2,
    items: [
      {
        title: "Export via Moerdijk en A16",
        text: "Bedrijven in Breda die containergoederen verschepen via Moerdijk kiezen vaak wegwerppallets. Lichtgewicht bespaart transportkosten; eenmalig gebruik voorkomt retourlogistiek.",
        href: "/wegwerppallets",
        linkLabel: "Meer over wegwerppallets",
      },
      {
        title: "Bulkpartijen voor seizoenspieken",
        text: "Wij leveren wegwerppallets in bulk aan bedrijven in Breda — van enkele tientallen tot honderden stuks. Ideaal bij piekperiodes in distributie of export.",
        href: "/wegwerppallets",
        linkLabel: "Bulkpartijen aanvragen",
      },
      {
        title: "Combinatie met HT-stempel",
        text: "Voor export buiten de EU kunnen wegwerppallets HT-gestempeld worden volgens ISPM 15. Vraag naar beschikbaarheid en planning vanuit Breda.",
      },
    ],
  },
  htExport: {
    title: "HT pallets voor export",
    text: "Exporteert uw bedrijf in Breda buiten de Europese Unie? Dan zijn HT-gestempelde pallets volgens ISPM 15 verplicht — het hout is hittebehandeld om plagen te bestrijden. De Palletman levert HT-gestempelde europallets en wegwerppallets aan bedrijven in West-Brabant, op aanvraag en afgestemd op uw zending richting Moerdijk, Rotterdam of Antwerpen. Geef door wanneer u vertrekt; wij plannen levering op tijd.",
  },
  largeBatches: {
    title: "Grote partijen",
    text: "Logistieke dienstverleners op Hazeldonk, groothandels langs de A58 en producenten op Emer werken regelmatig met honderden pallets tegelijk. De Palletman levert grote partijen europallets, blokpallets en wegwerppallets uitsluitend aan bedrijven — met eigen transport, flexibele planning en scherpe prijzen bij volume. Of u nu een volle vracht nodig heeft of een doorlopend contract: wij denken mee.",
  },
  smallBatches: {
    title: "Kleine partijen",
    text: "Niet elk bedrijf in Breda werkt met volle vrachten. Startende ondernemers op Minervum, lokale producenten in Prinsenbeek of een MKB'er in Ulvenhout met periodieke behoefte — wij leveren ook kleinere partijen uitsluitend aan bedrijven. Van tien europallets tot een enkele stapel blokpallets: geen order is te klein.",
  },
  pickup: {
    title: "Pallets ophalen Breda",
    text: "Heeft u overtollige pallets? De Palletman haalt op bij bedrijven én particulieren in Breda en West-Brabant. Geef door waar de pallets staan — op Hazeldonk, Minervum, Emer, in Prinsenbeek, Oosterhout of Etten-Leur — en wij plannen ophalen met eigen transport. Snelle betaling, eerlijke prijs, geen gedoe.",
  },
  delivery: {
    title: "Pallets bezorgen Breda",
    text: "Bezorgen doen wij uitsluitend aan bedrijven in Breda en omgeving. Wij rijden naar distributiecentra op Hazeldonk, productielocaties op Emer, groothandels op Minervum en elk bedrijfsadres in West-Brabant — ingepland wanneer het u uitkomt. Eigen wagenpark, korte lijnen, afspraak is afspraak.",
  },
  werkgebied: {
    eyebrow: "Werkgebied",
    title: "Werkgebied rondom Breda",
    intro:
      "De Palletman rijdt dagelijks met eigen transport in Breda en alle omliggende kernen in West-Brabant. Ophalen bij bedrijven en particulieren; bezorgen uitsluitend aan bedrijven.",
    columns: 3,
    items: [
      {
        title: "Prinsenbeek",
        text: "Ophalen bij particulieren en MKB-bedrijven in Prinsenbeek. Bezorgen aan lokale ondernemers en producenten.",
      },
      {
        title: "Etten-Leur",
        text: "Logistiek en industrie in Etten-Leur — wij halen pallets op en bezorgen aan bedrijven op industrieterreinen en in het centrum.",
      },
      {
        title: "Oosterhout",
        text: "Bedrijven en particulieren in Oosterhout profiteren van onze dagelijkse routes vanuit Breda. Snelle planning, korte lijnen.",
      },
      {
        title: "Zevenbergen",
        text: "Via de A17 rijden wij regelmatig naar Zevenbergen en omgeving — ophalen en B2B-levering voor lokale ondernemers.",
      },
      {
        title: "Made",
        text: "Ook in Made en omliggende dorpen halen wij pallets op bij particulieren en leveren wij aan bedrijven.",
      },
      {
        title: "Terheijden",
        text: "Terheijden ligt op korte afstand van Breda-centrum. Wij zijn beschikbaar voor ophalen en bezorgen aan lokale bedrijven.",
      },
      {
        title: "Ulvenhout",
        text: "Kleinere ondernemers en particulieren in Ulvenhout kunnen pallets aan ons verkopen; wij halen op met eigen transport.",
      },
      {
        title: "Bavel",
        text: "Bedrijven in Bavel en omliggende kernen vallen binnen ons werkgebied rond Breda — ophalen en B2B-bezorging.",
      },
      {
        title: "Teteringen",
        text: "Teteringen en de oostelijke rand van Breda zijn bereikbaar via onze routes. Neem contact op voor planning op uw locatie.",
      },
    ],
  },
  localAdvantages: {
    eyebrow: "Lokale economie",
    title: "Transport, distributie en palletvraag in Breda",
    intro:
      "Breda's economie draait op logistiek, transport, productie en distributie. Dat maakt de stad uniek in palletbehoefte — en vraagt om een partner die de regio kent.",
    columns: 3,
    items: [
      {
        title: "Transportbedrijven West-Brabant",
        text: "Expeditiebedrijven, koeriersdiensten en vrachtwagenchauffeurs laden dagelijks pallets op en af langs de A16 en A58. Zij — en hun klanten — hebben behoefte aan snelle palletlevering en -ophaling.",
      },
      {
        title: "Distributiecentra Hazeldonk",
        text: "Hazeldonk telt tientallen distributiecentra van nationale en internationale spelers. Cross-docking, orderpicking en last-mile delivery draaien op een constante stroom europallets.",
      },
      {
        title: "Productiebedrijven Minervum",
        text: "Van voedingsmiddelen tot metaal: producenten op Minervum vragen om betrouwbare palletvoorziening voor opslag, intern transport en outbound logistiek.",
      },
      {
        title: "Industrie Emer",
        text: "Emer is hét industrieterrein voor zware sector in Breda. Blokpallets, grote volumes en stevige kwaliteit zijn hier de norm.",
      },
      {
        title: "Groothandel en handel",
        text: "Groothandels in en rond Breda verwerken dagelijks pallets met goederen voor retail, horeca en bouw. A-kwaliteit europallets zijn hier populair.",
      },
      {
        title: "Lokale palletvraag",
        text: "De combinatie van logistiek, productie en export via Moerdijk maakt Breda tot een van de meest palletintensieve steden van Noord-Brabant — met jaarronde vraag, geen seizoensgebonden dip.",
      },
    ],
  },
  accessibility: {
    eyebrow: "Bereikbaarheid",
    title: "A16, A27 en A58 — snelwegen rond Breda",
    intro:
      "Breda's ligging aan drie belangrijke snelwegen maakt de stad tot een logistiek knooppunt. Voor pallettransport en planning zijn deze corridors essentieel.",
    columns: 3,
    items: [
      {
        title: "A16 — Rotterdam tot Antwerpen",
        text: "De A16 is de belangrijkste noord-zuidcorridor door West-Brabant. Van Hazeldonk bereikt u Rotterdam in 40 minuten en Antwerpen in 35 minuten — cruciaal voor internationaal goederenvervoer.",
      },
      {
        title: "A58 — Eindhoven tot Vlissingen",
        text: "De A58 verbindt Breda oost-west met Tilburg, Eindhoven en de Zeeuwse havens. Logistieke bedrijven langs deze corridor vragen dagelijks om pallets.",
      },
      {
        title: "A27 — Breda tot Utrecht",
        text: "Via de A27 bereikt u Utrecht, Gorinchem en het rivierengebied. Handig voor distributie naar Midden-Nederland vanuit Breda.",
      },
      {
        title: "A17 — richting Moerdijk",
        text: "De A17 verbindt Breda met de havens van Moerdijk — een van de grootste binnenhavens van Europa. Essentieel voor export en import in West-Brabant.",
      },
      {
        title: "N629 en N217",
        text: "Regionale ontsluiting van bedrijventerreinen Hazeldonk, Minervum en Emer. Onze trucks rijden deze routes dagelijks.",
      },
      {
        title: "Grensoverschrijdend bereik",
        text: "Via A16/A58 bereikt u België en Duitsland snel. Breda is daarmee ideaal gelegen voor bedrijven met cross-border supply chains.",
      },
    ],
  },
  quoteForm: cityQuoteForm(cityName),

  whyChooseUs: {
    eyebrow: "De Palletman",
    title: "Waarom bedrijven in Breda voor De Palletman kiezen",
    intro:
      "West-Brabant kent tientallen palletleveranciers — maar weinig met eigen transport, lokale kennis van Hazeldonk en een vaste contactpersoon. Dit maakt het verschil voor bedrijven in Breda.",
    columns: 3,
    items: [
      {
        title: "Snelle levering",
        text: "Dankzij onze voorraad europallets, blokpallets en wegwerppallets leveren wij snel in Breda — vaak binnen enkele werkdagen op Hazeldonk, Minervum of Emer.",
      },
      {
        title: "Eigen transport",
        text: "Geen tussenpersonen: ons wagenpark haalt op en bezorgt op locatie in Breda en West-Brabant. U spreekt rechtstreeks met uw vaste contactpersoon.",
      },
      {
        title: "Grote voorraad",
        text: "Europallets in A- en B-kwaliteit, blokpallets en wegwerppallets direct beschikbaar — ook bij grotere volumes voor distributiecentra.",
      },
      {
        title: "Vaste contactpersoon",
        text: "Geen callcenter, geen wisselende accountmanagers. Eén aanspreekpunt die uw bedrijf en locatie in Breda kent — van eerste offerte tot levering.",
      },
      {
        title: "Grote én kleine partijen",
        text: "Volle vrachten voor logistieke hubs op Hazeldonk of tien europallets voor een MKB'er op Minervum — wij leveren uitsluitend aan bedrijven, in elk volume.",
      },
      {
        title: "Snelle betaling bij inkoop",
        text: "Verkoopt u pallets? Wij betalen snel en transparant — bij bedrijven én particulieren in Breda, Prinsenbeek, Oosterhout en omgeving.",
      },
    ],
  },

  targetIndustries: {
    eyebrow: "Doelgroepen",
    title: "Voor welke bedrijven?",
    intro:
      "Elke sector in Breda heeft eigen palletbehoefte. De Palletman levert maatwerk per branche — uitsluitend aan bedrijven, met kennis van uw terrein en proces.",
    columns: 3,
    items: [
      {
        title: "Transportbedrijven",
        text: "Expeditiebedrijven langs de A16 laden dagelijks pallets op en af. Wij leveren europallets en wegwerppallets op tijd — zodat uw planning doorgaat.",
      },
      {
        title: "Logistieke bedrijven",
        text: "Cross-docking, orderpicking en last-mile op Hazeldonk draaien op een constante stroom europallets. Wij zijn uw lokale voorraadpartner in Breda.",
      },
      {
        title: "Productiebedrijven",
        text: "Producenten op Minervum en Emer vragen om europallets voor outbound logistiek en blokpallets voor zware halffabricaten op de werkvloer.",
      },
      {
        title: "Bouwbedrijven",
        text: "Bouwmaterialen, betonproducten en machines op Emer vragen om stevige blokpallets. Wij leveren op locatie — ook bij grotere partijen.",
      },
      {
        title: "Groothandels",
        text: "Groothandels in Breda verwerken dagelijks pallets met goederen voor retail en horeca. A-kwaliteit europallets zijn hier populair voor nette opslag.",
      },
      {
        title: "Exporteurs",
        text: "Bedrijven die via Moerdijk, Rotterdam of Antwerpen exporteren kiezen wegwerppallets of HT-gestempelde europallets — op aanvraag vanuit Breda.",
      },
      {
        title: "Magazijnen",
        text: "Opslaglocaties en magazijnen op Hazeldonk en Minervum vragen om betrouwbare palletvoorziening voor stapelen, orderpicking en intern transport.",
      },
      {
        title: "Distributiecentra",
        text: "DC's op Hazeldonk zijn ons kerngebied. Wij leveren europallets in volume, op tijd en op het laadperron — met flexibele planning.",
      },
    ],
  },

  palletFormats: {
    eyebrow: "Formaten",
    title: "Palletformaten",
    intro:
      "Niet elke lading past op een standaard europallet. De Palletman levert de meest gevraagde formaten in Breda — met advies over welk type past bij uw situatie.",
    columns: 3,
    items: [
      {
        title: "Europallet 1200×800 mm",
        text: "Het standaardformaat (80×120 cm) voor logistiek en distributie in Europa. Meest gevraagd op Hazeldonk en bij groothandels in West-Brabant.",
        href: "/europallets",
        linkLabel: "Europallets bekijken",
      },
      {
        title: "Blokpallet",
        text: "Steviger dan een europallet — geschikt voor zware lading op Emer en Minervum. Beschikbaar in diverse afmetingen, gebruikt en nieuw.",
        href: "/blokpallets",
        linkLabel: "Blokpallets bekijken",
      },
      {
        title: "Industriepallet",
        text: "Zware variant voor machines, metaal en bouwmaterialen. Vaak groter of massiever dan een standaard europallet — op aanvraag.",
        href: "/blokpallets",
        linkLabel: "Meer over industriepallets",
      },
      {
        title: "Wegwerppallet",
        text: "Lichtgewicht, betaalbaar, eenmalig gebruik. Ideaal voor export via Moerdijk of zendingen zonder retourtransport.",
        href: "/wegwerppallets",
        linkLabel: "Wegwerppallets bekijken",
      },
      {
        title: "Maatwerk",
        text: "Past geen standaardformaat? Neem contact op — wij adviseren welke palletmaat of -constructie past bij uw product en locatie in Breda.",
        href: "/contact",
        linkLabel: "Advies aanvragen",
      },
    ],
  },

  qualities: {
    eyebrow: "Kwaliteit",
    title: "Kwaliteiten — het verschil uitgelegd",
    intro:
      "Bij europallets onderscheiden wij A-kwaliteit (1e keus) en B-kwaliteit (2e keus). Beide zijn technisch bruikbaar — het verschil zit in uitstraling, prijs en toepassing.",
    columns: 2,
    items: [
      {
        title: "A-kwaliteit — 1e keus",
        text: "Lichte of blanke europallets met een nette uitstraling. Minimale slijtage, geen scheuren of losse delen. Ideaal voor retail-distributie, nette opslag en situaties waar presentatie telt — zoals op Hazeldonk bij klanten die pallets zien.",
      },
      {
        title: "B-kwaliteit — 2e keus",
        text: "Donkere, gebruikte europallets met normale slijtage en gebruikssporen. Technisch volledig bruikbaar — stabiel, dragend en geschikt voor logistiek. Voordeliger dan A-kwaliteit. Perfect voor intern transport, opslag achter de schermen en processen waar uitstraling niet uitmaakt.",
      },
      {
        title: "Wanneer kiest u A-kwaliteit?",
        text: "Kiest u A-kwaliteit als uw pallets zichtbaar zijn voor klanten, u werkt in retail of presentatie, of u nette magazijnopslag wilt. Populair bij groothandels en distributeurs in Breda.",
      },
      {
        title: "Wanneer kiest u B-kwaliteit?",
        text: "Kiest u B-kwaliteit als pallets achter de schermen blijven, u puur op functionaliteit stuurt, of u kosten wilt besparen zonder in te leveren op draagkracht. Standaard op Minervum en Emer.",
      },
    ],
  },

  exportDetail: {
    eyebrow: "Export",
    title: "HT-gestempelde pallets — export buiten de EU",
    intro:
      "Exporteert uw bedrijf in Breda buiten de Europese Unie? Dan spelen HT-gestempelde pallets een cruciale rol. Hieronder wanneer ze verplicht zijn — en wanneer niet.",
    columns: 2,
    items: [
      {
        title: "HT-gestempelde pallets",
        text: "HT staat voor Heat Treatment (hittebehandeling). Het hout wordt verhit tot minimaal 56 °C in de kern — om houtplagen te bestrijden. HT-gestempelde pallets dragen het ISPM 15-keurmerk.",
      },
      {
        title: "Wanneer verplicht",
        text: "HT-stempel is verplicht bij export naar landen buiten de Europese Unie — zoals de VS, Canada, Australië, China en veel Aziatische en Zuid-Amerikaanse landen. Geldt voor houten pallets én verpakking.",
      },
      {
        title: "Wanneer niet",
        text: "Binnen de EU is HT-stempel niet verplicht voor europallets. Transport binnen Nederland, België en Duitsland kan meestal zonder HT — tenzij uw klant het eist.",
      },
      {
        title: "Export buiten EU vanuit Breda",
        text: "De Palletman levert HT-gestempelde europallets en wegwerppallets aan bedrijven in Breda — op aanvraag, afgestemd op uw zending via Moerdijk, Rotterdam of Antwerpen.",
        href: "/europallets",
        linkLabel: "Meer over HT-export",
      },
    ],
  },

  processMeta: {
    eyebrow: "Proces",
    title: "Zo werkt het — stap voor stap",
    intro:
      "Pallets kopen of verkopen in Breda? In vier heldere stappen geregeld — van aanvraag tot betaling.",
  },

  reviews: {
    eyebrow: "Reviews",
    title: "Wat klanten zeggen",
    intro:
      "Ervaringen van bedrijven in Breda en West-Brabant. Onderstaande reviews zijn placeholders — echte klantreviews volgen na lancering.",
    columns: 3,
    items: [
      {
        title: "Logistiek bedrijf, Hazeldonk — ★★★★★",
        text: "[Review placeholder] Snelle levering van europallets op ons terrein. Duidelijke communicatie en flexibele planning — precies wat wij nodig hadden.",
      },
      {
        title: "Groothandel, Minervum — ★★★★★",
        text: "[Review placeholder] Betrouwbare partner voor A-kwaliteit europallets. Levering op tijd, eerlijke prijzen en een vaste contactpersoon die onze locatie kent.",
      },
      {
        title: "Transportbedrijf, Breda — ★★★★★",
        text: "[Review placeholder] Wij verkopen regelmatig overtollige pallets. Snelle betaling en ophalen op locatie — geen gedoe, wel duidelijke afspraken.",
      },
    ],
  },

  secondaryCta: {
    title: "Klaar om pallets te bestellen of verkopen in Breda?",
    text: "Bel ons direct, vraag een offerte aan of plan een ophaalafspraak. De Palletman helpt bedrijven en particulieren in West-Brabant — met eigen transport en korte lijnen.",
    primaryLabel: "Vraag offerte aan",
    primaryHref: "#offerte-formulier-heading",
    secondaryLabel: "Bel direct",
    secondaryHref: "tel:+31612345678",
  },
};

export const breda = defineCityPage({
  cityName,
  provinceName,
  provinceSlug,
  slug,
  path,

  canonicalUrl: getCanonicalUrl(path),
  metaTitle: "Pallets Breda | Kopen, Verkopen & HT-Export | De Palletman",
  metaDescription:
    "Pallets in Breda: europallets, blokpallets, wegwerppallets. B2B op Hazeldonk, Minervum, Emer. HT-export via Moerdijk. Inkoop bedrijven & particulieren. Offerte binnen 24 uur.",

  h1: "Pallets kopen en verkopen in Breda",
  heroSubtitle:
    "De Palletman in West-Brabant — uw lokale palletpartner op Hazeldonk, Minervum en Emer. Bezorgen uitsluitend aan bedrijven, ophalen bij bedrijven en particulieren.",
  heroEyebrow: "West-Brabant · Hazeldonk",

  introduction: {
    eyebrow: "Pallets Breda",
    title: "Breda: logistieke stad aan het hart van West-Brabant",
    text: "Al sinds de jaren zeventig groeide Breda uit tot een van de belangrijkste logistieke steden van Zuid-Nederland. Waar ooit vooral textiel en hout de economie domineerden, vormt vandaag de dag logistiek en distributie het kloppend hart van West-Brabant. De Palletman is uw lokale partner voor het kopen en verkopen van gebruikte pallets — met eigen transport, heldere prijzen en kennis van elke bedrijvenlaan op Hazeldonk.",
  },

  cityDescription:
    "Breda's transformatie tot logistiek centrum begon met de ontwikkeling van bedrijventerrein Hazeldonk in de jaren '70 — destijds een van de eerste grootschalige distributielocaties van Nederland. Vandaag verbindt Breda Rotterdam, Antwerpen, Eindhoven en de havens van Moerdijk via de A16, A27 en A58. Transport- en expeditiebedrijven, distributiecentra en producenten creëerden een ecosystem waarin pallets de onmisbare schakel zijn tussen opslag, transport en export.",

  localEconomy:
    "De lokale economie van Breda draait op logistiek, transport, productie, groothandel en distributie. Op Hazeldonk opereren tientallen distributiecentra; Minervum huisvest producenten en groothandels; Emer is het industrieterrein voor metaal, bouw en zware productie. Transportbedrijven langs de A16 en A58 laden dagelijks pallets. De nabijheid van Moerdijk — een van de grootste binnenhavens van Europa — maakt export en internationale handel extra relevant. Europallets domineren het verkeer op distributieterreinen; blokpallets zijn standaard op Emer; wegwerppallets en HT-gestempelde pallets zijn gevraagd voor export via haven en weg.",

  palletServices: {
    buy: {
      eyebrow: "Voor bedrijven",
      title: "Gebruikte pallets kopen in Breda",
      text: "De Palletman verkoopt gebruikte pallets uitsluitend aan bedrijven in Breda en West-Brabant. Kies uit europallets (A-kwaliteit 1e keus of B-kwaliteit 2e keus), blokpallets in diverse afmetingen en wegwerppallets voor export. Wij leveren in grote én kleine partijen — op Hazeldonk, Minervum, Emer of uw eigen locatie. Advies over type, kwaliteit en planning is altijd inbegrepen. Geen lange wachttijden: dankzij onze voorraad schakelen wij snel.",
    },
    sell: {
      eyebrow: "Inkoop",
      title: "Pallets verkopen in Breda",
      text: "Stapelen er pallets ongebruikt op uw terrein in Breda, Prinsenbeek, Oosterhout of Etten-Leur? De Palletman koopt in van bedrijven én particulieren. Wij geven een eerlijke marktprijs, betalen snel en halen op met eigen transport — op Hazeldonk, in een woonwijk of op een industrieterrein. Geef door hoeveel pallets u heeft, welk type en waar ze staan. Wij regelen de rest.",
    },
  },

  palletTypes: {
    eyebrow: "Palletsoorten",
    title: "Veel voorkomende pallettypes in Breda",
    intro:
      "In West-Brabant worden drie pallettypes het meest gevraagd — elk met een eigen toepassing op de bedrijventerreinen van Breda.",
    columns: 3,
    items: [
      {
        title: "Europallets (80×120 cm)",
        text: "Standaard op Hazeldonk en bij elke distributeur in Breda. Meest gevraagd in A- en B-kwaliteit voor opslag, cross-docking en retail.",
        href: "/europallets",
        linkLabel: "Europallets bekijken",
      },
      {
        title: "Blokpallets",
        text: "Op Emer en Minervum-Noord voor zware lading, machines en bouwmaterialen. Steviger dan europallets, in diverse afmetingen.",
        href: "/blokpallets",
        linkLabel: "Blokpallets bekijken",
      },
      {
        title: "Wegwerppallets",
        text: "Lichtgewicht voor export via Moerdijk of eenmalig transport. Betaalbaar en beschikbaar in bulkpartijen.",
        href: "/wegwerppallets",
        linkLabel: "Wegwerppallets bekijken",
      },
    ],
  },

  transportText: {
    eyebrow: "Transport & distributie",
    title: "Transport en distributie in Breda",
    intro:
      "West-Brabant is een van de drukste logistieke regio's van Nederland. De Palletman ondersteunt transport- en distributiebedrijven in Breda met betrouwbare palletvoorziening en eigen transport.",
    columns: 2,
    items: [
      {
        title: "Cross-docking Hazeldonk",
        text: "Distributiecentra op Hazeldonk wisselen dagelijks duizenden pallets. Wij leveren europallets op tijd — zodat uw cross-dockproces doorloopt.",
      },
      {
        title: "Expeditie en transport",
        text: "Expeditiebedrijven langs de A16 laden pallets op voor nationale en internationale zendingen. Wij zijn hun lokale palletpartner in Breda.",
      },
    ],
  },

  qualityText:
    "Europallets leveren wij als A-kwaliteit (1e keus): lichte of blanke pallets met nette uitstraling. B-kwaliteit (2e keus): donkere gebruikte pallets met normale slijtage, technisch volledig bruikbaar en voordeliger.",

  exportText:
    "Voor export buiten de EU leveren wij HT-gestempelde pallets volgens ISPM 15. Beschikbaar op aanvraag voor bedrijven in Breda die exporteren via Moerdijk, Rotterdam of Antwerpen.",

  industrialAreas: {
    eyebrow: "Bedrijventerreinen",
    title: "Belangrijkste bedrijventerreinen in Breda",
    intro:
      "Breda telt meerdere grote bedrijventerreinen waar dagelijks intensief palletverkeer plaatsvindt. De Palletman is op al deze terreinen actief voor ophalen en bezorgen.",
    columns: 3,
    items: [
      {
        title: "Hazeldonk",
        text: "Het grootste logistieke terrein van Breda en een van de belangrijkste distributieknooppunten van Zuid-Nederland. Tientallen DC's, cross-dockfaciliteiten en expeditiebedrijven. Europallets zijn hier de absolute standaard.",
      },
      {
        title: "Minervum",
        text: "Gemengd bedrijventerrein met productie, groothandel, voedingsmiddelen en dienstverlening. Vraag naar europallets en blokpallets voor uiteenlopende toepassingen.",
      },
      {
        title: "Emer",
        text: "Industrieterrein aan de oostkant van Breda — metaalbewerking, bouwmaterialen, machines en zware productie. Blokpallets domineren het palletverkeer op Emer.",
      },
      {
        title: "Minervum-Noord",
        text: "Uitbreiding van Minervum met extra productiecapaciteit. Producenten en logistieke dienstverleners vragen om betrouwbare palletlevering op locatie.",
      },
      {
        title: "Breda-Noord (A58)",
        text: "Bedrijven langs de A58 profiteren van directe snelwegbereikbaarheid. Logistiek, handel en opslag vragen om snelle palletvoorziening.",
      },
      {
        title: "Teteringsedijk",
        text: "Bedrijventerrein aan de rand van Breda richting Teteringen. MKB-bedrijven, producenten en handelsbedrijven met regelmatige palletbehoefte.",
      },
    ],
  },

  surroundingPlaces: {
    eyebrow: "Omliggende plaatsen",
    title: "Gemeenten en kernen rondom Breda",
    intro:
      "Ons werkgebied strekt zich uit beyond Breda-centrum. Wij rijden dagelijks naar alle omliggende kernen in West-Brabant.",
    columns: 3,
    variant: "white",
    items: [
      {
        title: "Prinsenbeek",
        text: "Dorpse charme, maar ook MKB en producenten met palletbehoefte. Ophalen bij particulieren; bezorgen aan bedrijven.",
      },
      {
        title: "Etten-Leur",
        text: "Industrie en logistiek in Etten-Leur — op korte afstand van Hazeldonk. Wij halen op en bezorgen aan bedrijven in de gemeente.",
      },
      {
        title: "Oosterhout",
        text: "Groeiende gemeente met bedrijventerreinen en woonwijken. Particulieren verkopen pallets; bedrijven bestellen bij ons.",
      },
      {
        title: "Zevenbergen",
        text: "Via de A17 bereikbaar vanuit Breda. Lokale ondernemers en transportbedrijven in Zevenbergen vallen binnen ons werkgebied.",
      },
      {
        title: "Made",
        text: "Made en omliggende dorpen — wij halen pallets op bij particulieren en leveren aan lokale bedrijven.",
      },
      {
        title: "Terheijden",
        text: "Klein dorp aan de Mark, op minuten van Breda-centrum. Beschikbaar voor ophalen en B2B-bezorging.",
      },
      {
        title: "Ulvenhout",
        text: "Groene gemeente met MKB en particulieren die pallets verkopen. Wij rijden regelmatig naar Ulvenhout.",
      },
      {
        title: "Bavel",
        text: "Bavel en oostelijke kernen van Breda — bereikbaar via onze dagelijkse routes. Neem contact op voor planning.",
      },
      {
        title: "Teteringen",
        text: "Teteringen ligt aan de oostrand van Breda. Bedrijven op Teteringsedijk en omgeving zijn binnen ons werkgebied.",
      },
    ],
  },

  processSteps: [
    {
      title: "Aanvraag",
      text: "Neem contact op via telefoon, e-mail of het offerteformulier. Vertel wat u zoekt of wilt verkopen — type pallet, kwaliteit, aantal en uw locatie in Breda of West-Brabant.",
    },
    {
      title: "Prijs",
      text: "U ontvangt binnen 24 uur een heldere prijs op basis van type, kwaliteit, volume en locatie. Geen verrassingen — wel duidelijke afspraken en eerlijk advies.",
    },
    {
      title: "Ophalen of leveren",
      text: "Wij plannen ophalen op uw locatie of bezorgen op uw bedrijfsadres — op Hazeldonk, Minervum, Emer of in een omliggende kern. Met eigen transport, flexibel ingepland.",
    },
    {
      title: "Betaling",
      text: "Verkoopt u pallets? Snelle betaling na ophalen. Koopt u in? Levering op afspraak. Afspraak is afspraak — met uw vaste contactpersoon bij De Palletman.",
    },
  ],

  faq: {
    eyebrow: "FAQ",
    title: "Veelgestelde vragen",
    intro:
      "Antwoorden op de meest gestelde vragen over pallets kopen, verkopen en transport in Breda en West-Brabant.",
    items: [
      {
        question: "Leveren jullie pallets aan particulieren in Breda?",
        answer:
          "Nee, bezorgen doen wij uitsluitend aan bedrijven. Particulieren in Breda, Prinsenbeek, Oosterhout en omgeving kunnen wél pallets aan ons verkopen — wij halen op met eigen transport.",
      },
      {
        question: "Rijden jullie naar bedrijventerrein Hazeldonk?",
        answer:
          "Ja, Hazeldonk is ons kerngebied. Wij zijn dagelijks actief op het terrein voor ophalen en B2B-bezorging bij distributiecentra en logistieke bedrijven.",
      },
      {
        question: "Halen jullie pallets op in Etten-Leur, Oosterhout of Prinsenbeek?",
        answer:
          "Ja, wij rijden naar alle omliggende kernen: Etten-Leur, Oosterhout, Prinsenbeek, Zevenbergen, Made, Terheijden, Ulvenhout, Bavel en Teteringen.",
      },
      {
        question: "Welke snelwegen zijn het belangrijkst voor pallettransport in Breda?",
        answer:
          "De A16 (Rotterdam–Antwerpen), A58 (Eindhoven–Vlissingen) en A27 (Utrecht) zijn de drie belangrijkste corridors. Via de A17 bereikt u de havens van Moerdijk.",
      },
      {
        question: "Leveren jullie HT-gestempelde pallets voor export buiten de EU?",
        answer:
          "Ja, HT-gestempelde pallets volgens ISPM 15 zijn beschikbaar op aanvraag voor bedrijven in Breda die exporteren buiten de Europese Unie — via Moerdijk, Rotterdam of Antwerpen.",
      },
      {
        question: "Wat is het verschil tussen A-kwaliteit en B-kwaliteit europallets?",
        answer:
          "A-kwaliteit (1e keus) zijn lichte of blanke pallets met nette uitstraling — ideaal voor retail en presentatie. B-kwaliteit (2e keus) zijn donkere gebruikte pallets, technisch bruikbaar en voordeliger.",
      },
      {
        question: "Kunnen jullie grote partijen leveren op Hazeldonk?",
        answer:
          "Ja, wij leveren grote partijen europallets, blokpallets en wegwerppallets uitsluitend aan bedrijven — ook volle vrachten op distributieterreinen.",
      },
      {
        question: "Bezorgen jullie ook kleine partijen aan MKB-bedrijven?",
        answer:
          "Ja, ook kleinere partijen bezorgen wij uitsluitend aan bedrijven — van enkele europallets tot kleinere wekelijkse leveringen.",
      },
      {
        question: "Hoe snel betalen jullie bij inkoop van pallets in Breda?",
        answer:
          "Bij verkoop aan De Palletman betalen wij snel en transparant. Geef door hoeveel pallets u heeft; wij maken een eerlijk aanbod en plannen ophalen op locatie.",
      },
      {
        question: "Waarom is Breda interessant voor palletlevering?",
        answer:
          "Breda ligt op het kruispunt van A16, A27 en A58, nabij Moerdijk. De stad is een logistiek knooppunt met Hazeldonk als distributiecentrum — dat maakt lokale palletvoorziening essentieel.",
      },
      {
        question: "Wat kost een europallet in Breda?",
        answer:
          "De prijs hangt af van kwaliteit (A of B), aantal en type. Neem contact op voor een vrijblijvende offerte — wij geven binnen 24 uur een heldere prijs.",
      },
      {
        question: "Leveren jullie ook blokpallets op Emer?",
        answer:
          "Ja, wij bezorgen blokpallets uitsluitend aan bedrijven op Emer en andere industrieterreinen in Breda — in diverse afmetingen, gebruikt en nieuw.",
      },
      {
        question: "Kan ik pallets verkopen als particulier in Prinsenbeek?",
        answer:
          "Ja, inkoop doen wij van bedrijven én particulieren. Wij halen op in Prinsenbeek en omgeving met eigen transport en betalen snel.",
      },
      {
        question: "Wanneer heb ik HT-gestempelde pallets nodig?",
        answer:
          "HT-stempel is verplicht bij export buiten de EU. Binnen Europa en Nederland is HT meestal niet verplicht — tenzij uw klant het eist.",
      },
      {
        question: "Wat is een industriepallet?",
        answer:
          "Een industriepallet is een zwaardere variant — vaak groter of massiever dan een europallet. Geschikt voor machines, metaal en bouwmaterialen op Emer en Minervum.",
      },
    ],
  },

  ctaTitle: "Offerte voor pallets in Breda?",
  ctaText:
    "Vraag een vrijblijvende offerte aan, plan een ophaalafspraak of bel ons direct. De Palletman helpt bedrijven en particulieren in Breda en West-Brabant snel verder — met eigen transport en heldere afspraken.",
  ctaPrimaryLabel: "Vraag offerte aan",
  ctaPrimaryHref: "#offerte-formulier-heading",
  ctaSecondaryLabel: "Bel direct",
  ctaSecondaryHref: "tel:+31612345678",

  imageFilename: "pallets-breda.webp",

  internalLinks: [
    { label: "Noord-Brabant", href: "/noord-brabant" },
    { label: "Werkgebied", href: "/werkgebied" },
    { label: "Pallets kopen", href: "/pallets-kopen" },
    { label: "Pallets verkopen", href: "/pallets-verkopen" },
    { label: "Europallets", href: "/europallets" },
    { label: "Blokpallets", href: "/blokpallets" },
    { label: "Wegwerppallets", href: "/wegwerppallets" },
    { label: "Ophalen en bezorgen", href: "/werkgebied" },
    { label: "Pallets Tilburg", href: "/noord-brabant/pallets-tilburg" },
    { label: "Pallets Eindhoven", href: "/noord-brabant/pallets-eindhoven" },
  ],

  extended,

  openGraph: {
    title: "Pallets Breda | Kopen, Verkopen & HT-Export | De Palletman",
    description:
      "Gebruikte pallets in Breda: europallets A/B-kwaliteit, blokpallets, HT-export via Moerdijk. B2B Hazeldonk, Minervum, Emer.",
  },

  schema: "auto",
});
