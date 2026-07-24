/**
 * Tekstfragmenten voor de Local Content Engine.
 * Placeholders: {city} {province} {region} {areas} {roads} {places} {sectors} {port} {hotspot} {dc} {transport}
 */
import {
  europalletQualityFaqAnswerTemplate,
  europalletQualityFragments,
} from "../shared/europalletQuality.ts";
export const FRAGMENT_COUNTS = {
  h1: 14,
  heroSubtitle: 10,
  opening: 12,
  introBody: 12,
  cityDescription: 12,
  localEconomy: 14,
  services: 12,
  palletTypes: 10,
  transport: 12,
  quality: 6,
  export: 6,
  ctaTitle: 10,
  ctaClosing: 12,
  faqQuestions: 12,
  faqAnswers: 14,
  h2Intro: 10,
  h2Buy: 10,
  h2Sell: 8,
  h2PalletTypes: 8,
  h2Transport: 8,
  h2Industrial: 8,
  h2Surrounding: 8,
  h2Faq: 8,
  industrialItem: 8,
  surroundingItem: 8,
  sellBody: 8,
  processSteps: 6,
} as const;

export const H1_FRAGMENTS = [
  "Pallets kopen en verkopen in {city}",
  "Gebruikte pallets in {city} — betrouwbaar geregeld",
  "Palletservice voor bedrijven in {city}",
  "Pallets in {city}: inkopen, verkopen en ophalen",
  "Uw palletpartner in {city} en omgeving",
  "Palletinkoop en -levering in {city}",
  "Europallets en blokpallets in {city}",
  "Pallets nodig in {city}? De Palletman regelt het",
  "Zakelijke palletvoorziening in {city}",
  "Pallets ophalen en bezorgen in {city}",
  "Tweedehands pallets voor {city} en {region}",
  "Pallet handel in {city} — B2B en inkoop",
  "Sterke palletvoorraad voor {city}",
  "Lokaal pallets kopen in {city}",
];

export const HERO_SUBTITLE_FRAGMENTS = [
  "De Palletman in {city} — bezorgen aan bedrijven, ophalen bij bedrijven en particulieren. Eigen transport, heldere prijs.",
  "Actief in {city} en {region}: pallets kopen voor uw bedrijf of verkopen met snelle ophaalservice.",
  "Van {areas} tot {places}: wij rijden in {city} voor palletinkoop en B2B-levering.",
  "Pallets in {city} geregeld via één aanspreekpunt — geen gedoe, wel duidelijke afspraken.",
  "Lokaal in {province}: De Palletman helpt bedrijven en particulieren in {city} met pallets.",
  "Bereikbaar via {roads} — wij staan klaar voor ophalen en bezorgen in {city}.",
  "Of u nu pallets nodig heeft of wilt verkopen: in {city} denken wij mee over type, kwaliteit en planning.",
  "De Palletman rijdt dagelijks in {region} — ook op bedrijventerreinen rond {city}.",
  "Palletinkoop en -verkoop in {city}, met transport dat past bij uw planning.",
  "Zakelijke levering en particuliere inkoop — De Palletman is actief in {city} en omgeving.",
];

export const OPENING_FRAGMENTS = [
  "In {city} draait veel op logistiek: laden, lossen, opslaan en doorsturen. Dan moeten pallets gewoon beschikbaar zijn — in de juiste hoeveelheid en kwaliteit.",
  "Bedrijven in {city} weten het: pallets zijn geen detail. Zonder goede voorraad stokt de flow op de werkvloer of bij outbound transport.",
  "Rond {city} zie je het aan {roads}: vrachtverkeer, distributie en productie lopen hier op elkaar in. Pallets horen daarbij — elke dag opnieuw.",
  "Of u nu aan {areas} werkt of in het centrum van {city} zit: pallets kopen of verkopen moet praktisch en voorspelbaar zijn.",
  "{city} ligt in {region} — een regio waar {sectors} samenkomen. Daarbij hoort een betrouwbare palletvoorziening.",
  "Transportbedrijven, groothandels en producenten in {city} vragen regelmatig om europallets, blokpallets of wegwerppallets. Wij regelen dat lokaal.",
  "Nabij {hotspot} en langs {roads} is de vraag naar pallets continu. De Palletman ondersteunt bedrijven en particulieren in {city}.",
  "Pallets staan vaak ongemerkt in de basis van elke zending. In {city} en omgeving helpen wij u die basis op orde te houden.",
  "Vanuit {city} vertrekken en arriveren dagelijks partijen goederen. Wij zorgen dat u de pallets heeft — of er juist vanaf bent.",
  "De Palletman kent het ritme van {region}: piekdagen, vaste routes en ad-hoc opdrachten. In {city} passen wij ons daarop aan.",
  "Zakelijke klanten in {city} willen weten waar ze aan toe zijn. Particulieren willen snel van overtollige pallets af. Wij doen beide.",
  "In {city} telt elke laadkuil en elke stapelruimte. Wij leveren pallets die passen bij uw operatie — niet andersom.",
];

export const INTRO_BODY_FRAGMENTS = [
  "De Palletman is actief in {city} en de omliggende regio in {province}. U kunt bij ons terecht voor het kopen van gebruikte pallets (uitsluitend B2B) of het verkopen van overtollige pallets (bedrijven én particulieren). Wij geven een heldere prijs en plannen ophalen of bezorgen met eigen transport.",
  "Wij helpen bedrijven in {city} met europallets, blokpallets en wegwerppallets — in grote én kleine partijen. Heeft u pallets over? Wij kopen in en halen op. Geen ingewikkelde constructies, wel duidelijke afspraken.",
  "In {city} en {region} rijden wij voor palletinkoop en -levering. Bezorgen doen wij uitsluitend aan bedrijven; ophalen kan bij bedrijven en particulieren. Vraag gerust advies over type en kwaliteit.",
  "De Palletman combineert lokale service met een no-nonsense aanpak. In {city} denken wij mee welk pallettype past bij opslag, productie of export — en wanneer ophalen of bezorgen het beste uitkomt.",
  "Van {areas} tot woonkernen rond {city}: wij zijn gewend om op bedrijventerreinen en bij particulieren te laden. U krijgt één aanspreekpunt voor inkoop én verkoop.",
  "Pallets regelen hoeft geen zoektocht te zijn. In {city} bent u bij De Palletman aan het juiste adres voor gebruikte europallets, blokpallets en wegwerppallets — met transport dat u kunt plannen.",
  "Wij zijn geen anoniem platform, maar een partner die {city} en {region} kent. Dat merkt u in de planning, de prijs en de manier waarop wij met partijen omgaan.",
  "Bedrijven in {city} kiezen De Palletman voor betrouwbaarheid: leveren wanneer afgesproken, ophalen zonder gedoe. Particulieren waarderen onze snelle afhandeling bij verkoop.",
  "Of u nu langs {roads} gevestigd bent of op een terrein in {city}: wij stemmen ophalen en bezorgen af op uw locatie en tijdvenster.",
  "De Palletman werkt in {province} uitsluitend binnen het afgesproken werkgebied — inclusief {city} en omliggende kernen zoals {places}.",
  "In {city} ondersteunen wij logistiek, productie en handel met een palletvoorraad die past bij de praktijk — A- en B-kwaliteit, helder aangegeven.",
  "Vraag een offerte, plan ophalen of leg uw situatie voor. In {city} reageren wij snel en duidelijk — per telefoon, WhatsApp of via het contactformulier.",
];

export const CITY_DESCRIPTION_FRAGMENTS = [
  "{city} is een kern in {region} ({province}) met een mix van {sectors}. De stad trekt bedrijven aan die afhankelijk zijn van goede palletstromen voor opslag en transport.",
  "Gelegen {transport}, is {city} logistiek goed bereikbaar. Dat geldt voor productie, distributie en groothandel — sectoren die u hier terugziet.",
  "{city} verbindt omliggende plaatsen zoals {places} met bredere supply chains. Pallets zijn daarin de standaard drager — van inbound tot outbound.",
  "In {city} vindt u bedrijventerreinen, transportbedrijven en opslaglocaties. {transport} maakt de regio aantrekkelijk voor bedrijven die snel moeten schakelen.",
  "De economie rond {city} draait deels op {sectors}. Daarbij horen vaste palletstromen — voorraad opbouwen, uitladen en doorsturen.",
  "{city} profiteert van de ligging in {province}, met verbindingen via {roads}. Dat zorgt voor continue activiteit op terreinen en in magazijnen.",
  "Rond {hotspot} en in {city} zelf is logistieke activiteit duidelijk zichtbaar. Pallets wisselen van hand — en moeten op tijd beschikbaar zijn.",
  "Vanuit {city} worden goederen verspreid over {region} en verder. Europallets en blokpallets blijven daarbij het meest gevraagd.",
  "{city} kent zowel gevestigde industriëen als kleinere bedrijven die periodiek pallets nodig hebben. Flexibiliteit in partijgrootte is hier belangrijk.",
  "Met {port} in de regio en goede wegverbindingen is {city} een praktische uitvalsbasis voor logistiek en handel.",
  "Wie in {city} actief is, merkt dat palletkwaliteit verschil maakt — in uitstraling, draagkracht en prijs. Wij maken dat onderscheid helder.",
  "{city} hoort bij het werkgebied van De Palletman in {province}. Wij kennen de terreinen, routes en gewoontes in deze regio.",
];

export const LOCAL_ECONOMY_FRAGMENTS = [
  "In {city} en omgeving zijn {sectors} sterk vertegenwoordigd. Op terreinen als {areas} is regelmatig behoefte aan europallets en blokpallets — voor opslag, productie of export.",
  "{transport}. Daardoor draait er veel palletverkeer — zowel bij transporteurs als bij afnemers in {city}.",
  "De combinatie van {sectors} zorgt voor wisselende vraag: soms een grote partij, soms een aanvulling op voorraad. Wij leveren op maat voor bedrijven in {city}.",
  "Rond {dc} en {areas} ziet u distributie en cross-dock activiteit. Pallets zijn hier verbruiksartikel — beschikbaarheid telt.",
  "{palletUsage} In {city} en {region} helpen wij bedrijven die structureel of incidenteel pallets nodig hebben.",
  "Transportbedrijven langs {roads} en bedrijven op {areas} vragen regelmatig om snelle palletlevering of inkoop van gebruikte partijen.",
  "Export, regionale distributie en lokale productie komen in {city} samen. Per route en per klant vraagt dat soms andere palletsoorten.",
  "Groothandels en producenten in {city} willen weten waar pallets vandaan komen en wat ze kosten. Wij geven transparantie — geen verrassingen achteraf.",
  "Ook kleinere partijen komen voor in {city}: een stapel na een verbouwing, overschot na een project of reguliere inkoop. Wij schakelen mee.",
  "In {region} is seizoensinvloed merkbaar — denk aan piekperiodes in logistiek of landbouw. Wij anticiperen waar mogelijk op vraag in {city}.",
  "Bedrijven rond {hotspot} en {areas} profiteren van onze korte lijnen: ophalen, beoordelen, prijs geven, plannen. Dat past bij de dynamiek in {city}.",
  "Particulieren in {city} die pallets verkopen willen vaak één ding: snel duidelijkheid. Wij geven een eerlijke prijs en halen op wanneer het u uitkomt.",
  "De palletmarkt in {city} vraagt om kwaliteitskeuze: A-kwaliteit voor nette presentatie, B-kwaliteit voor intern gebruik. Wij leggen het verschil uit.",
  "Van {places} tot {city}: in heel deze hoek van {province} zien wij vraag naar betrouwbare palletpartners — geen doorverkoper, wel iemand die zelf rijdt.",
];

export const SERVICES_FRAGMENTS = [
  "De Palletman levert gebruikte pallets uitsluitend aan bedrijven in {city}. U kunt bij ons terecht voor europallets, blokpallets en wegwerppallets — in grote én kleine partijen. Wij adviseren over type en kwaliteit, geven een transparante offerte en bezorgen op uw locatie met eigen transport. Inkoop doen wij van bedrijven én particulieren.",
  "Voor zakelijke klanten in {city} en {region} verzorgen wij palletlevering op maat. Particulieren en bedrijven kunnen overtollige pallets aan ons verkopen; wij halen op en handelen af op basis van type, kwaliteit en aantal.",
  "In {city} bent u welkom voor B2B-levering én inkoop. Wij rijden naar {areas} en andere locaties in de stad — flexibel ingepland, met duidelijke prijsafspraken vooraf.",
  "Bedrijven op terreinen als {areas} vragen ons regelmatig om europallets of blokpallets. Wij bezorgen uitsluitend aan bedrijven; verkoop aan ons kan door iedereen in {city}.",
  "De Palletman in {city}: kopen doet u als bedrijf, verkopen als bedrijf of particulier. Wij nemen de logistiek uit handen — ophalen of bezorgen met ons eigen wagenpark.",
  "Of u nu vanuit {roads} bereikbaar bent of aan de rand van {city}: wij komen langs voor ophalen of leveren. Advies over A- versus B-kwaliteit hoort daarbij.",
  "Geen lange wachttijden of vaagheid over prijzen. In {city} werken wij met vaste afspraken — u weet wat u krijgt en wat het kost.",
  "Van een enkele stapel tot een volle vracht: wij schakelen mee met bedrijven in {city}. Inkoop en verkoop via één lokale partner.",
  "Pallets voor opslag, productie of doorvoer — in {city} leveren wij wat past. HT-gestempeld voor export buiten de EU op aanvraag.",
  "De Palletman ondersteunt {sectors} in {city} met gebruikte pallets die technisch in orde zijn. Bezorgen aan bedrijven; ophalen overal waar het u uitkomt.",
  "In {region} kiezen bedrijven voor ons omdat wij zelf rijden en zelf beoordelen. In {city} betekent dat: korte lijnen en snelle afhandeling.",
  "Heeft u in {city} pallets nodig of juist te veel staan? Neem contact op — wij denken mee over de meest praktische oplossing.",
];

export const PALLET_TYPES_FRAGMENTS = [
  "Voor bedrijven in {city} leveren wij europallets, blokpallets en wegwerppallets. Europallets zijn het meest gevraagd voor logistiek; blokpallets voor zware lading; wegwerppallets voor eenmalig vervoer of export.",
  "In {city} en {region} adviseren wij graag welk type past: europallet voor standaardstromen, blokpallet voor zwaardere producten, wegwerppallet waar teruggave geen rol speelt.",
  "Bedrijven langs {roads} en op {areas} kiezen vaak europallets in A-kwaliteit voor klantgerichte opslag, of B-kwaliteit voor intern gebruik — voordeliger, technisch sound.",
  "Export vanuit {city} vraagt soms om HT-gestempelde europallets (ISPM 15). Binnen de EU volstaat meestal een betrouwbare gebruikte europallet.",
  "Blokpallets zien wij veel bij industriële afnemers in {city}. Europallets bij distributie en retailgerichte logistiek.",
  "Wegwerppallets zijn populair bij eenmalige zendingen of projecten in {city} — betaalbaar en zonder retourstroom.",
  "Partijgrootte maakt niet uit: van enkele pallets tot grotere volumes. In {city} stemmen wij type en kwaliteit af op uw proces.",
  "Wij leggen het verschil tussen A- en B-kwaliteit concreet uit — geen vage termen, wel duidelijke verwachtingen voor bedrijven in {city}.",
  "Voor {sectors} in {city} combineren bedrijven soms meerdere pallettypen. Wij leveren wat u nodig heeft, wanneer u het nodig heeft.",
  "Vraagt u zich af welk pallettype past bij uw situatie in {city}? Wij denken mee — praktisch, zonder verkooppraat.",
];

export const TRANSPORT_FRAGMENTS = [
  "Met eigen transport rijden wij in {city} en {region}. Wij halen pallets op bij bedrijven én particulieren en bezorgen uitsluitend aan bedrijven — ook op {areas}.",
  "Planning via {roads} kennen wij. In {city} stemmen wij ophalen of bezorgen af op uw tijdvenster en locatie — bedrijventerrein of particulier adres.",
  "Geen externe transporteurs die u moet coördineren. De Palletman rijdt zelf in {city} — van ophalen tot levering.",
  "Ophalen in {places} of in {city} zelf: geef door waar de pallets staan en in welke hoeveelheid. Wij komen langs met geschikt transport.",
  "Bezorgen doen wij uitsluitend aan bedrijven in {city}. Particulieren kunnen pallets aan ons verkopen; wij halen dan op.",
  "Rond {hotspot} en {areas} zijn wij regelmatig te vinden. Neem contact op voor een concrete planning in {city}.",
  "Flexibel ingepland: vandaag vragen, morgen laden — waar mogelijk. In {city} proberen wij kort op de bal te spelen.",
  "Laadklep, stapel, type pallets — geef het door. Wij bereiden het ophalen of bezorgen in {city} goed voor.",
  "Transport is onderdeel van onze service, geen extra puzzel. Bedrijven in {city} merken dat in de uitvoering.",
  "Van {areas} tot woonwijken: in {city} en omgeving rijden wij voor inkoop. Levering op uw bedrijfsadres op afspraak.",
  "Wij rijden niet door heel Nederland — wel door {province}, inclusief {city} en omliggende kernen.",
  "Eigen wagenpark, eigen planning. In {city} bent u geen nummer in een landelijk systeem.",
];

export const QUALITY_FRAGMENTS = europalletQualityFragments();

export const EXPORT_FRAGMENTS = [
  "Voor export buiten de Europese Unie kunnen HT-gestempelde pallets volgens ISPM 15 vereist zijn. Vraag naar beschikbaarheid en planning vanuit {city}.",
  "Internationale zendingen vanuit {city}? Wij denken mee over ISPM 15 en het juiste pallettype voor uw bestemming.",
  "HT-stempel op europallets — nodig voor bepaalde landen buiten de EU. Beschikbaar op aanvraag voor bedrijven in {city}.",
  "Export via {roads} of {port}? Bespreek uw palletbehoefte op tijd — dan voorkomt u vertraging aan de grens.",
  "Wegwerppallets zijn soms een optie bij eenmalige export. Wij adviseren wat past bij uw zending vanuit {city}.",
  "ISPM 15 is geen marketingterm bij ons, maar een concrete eis. Vraag ernaar als u buiten de EU exporteert.",
];

export const CTA_TITLE_FRAGMENTS = [
  "Pallets nodig in {city}?",
  "Offerte voor {city} aanvragen?",
  "Pallets ophalen in {city}?",
  "Klaar om pallets te regelen in {city}?",
  "Vandaag nog pallets in {city}?",
  "Palletvraag in {city}? Neem contact op",
  "Start in {city} met De Palletman",
  "Pallets verkopen in {city}?",
  "Plan uw palletlevering in {city}",
  "Hulp nodig met pallets in {city}?",
];

export const CTA_CLOSING_FRAGMENTS = [
  "Neem contact op voor een offerte of ophaalafspraak in {city} en {region}. Wij reageren snel en duidelijk — per telefoon, WhatsApp of het contactformulier.",
  "Bel, app of mail ons. In {city} denken wij mee over type, kwaliteit en planning — zonder verplichtingen.",
  "Vraag vandaag nog een prijs aan. De Palletman is actief in {city} en rijdt met eigen transport.",
  "Of u nu koopt of verkoopt: in {city} regelen wij het praktisch. Neem contact op voor de volgende stap.",
  "Wij staan klaar voor bedrijven en particulieren in {city}. Eén bericht is genoeg om te starten.",
  "Geen lange formulieren nodig — vertel ons wat u zoekt in {city}. Wij nemen contact op met een concreet voorstel.",
  "In {region} werken wij met vaste afspraken. Neem contact op en u weet waar u aan toe bent.",
  "Pallets in {city} geregeld? Dat kan sneller dan u denkt. Neem contact op — wij plannen het in.",
  "De Palletman in {city}: heldere prijs, eigen transport, korte lijnen. Vraag uw offerte aan.",
  "Van {areas} tot uw adres: in {city} maken wij het concreet. Neem contact op.",
  "Particulier of zakelijk — in {city} helpen wij u verder. Wij horen graag wat u nodig heeft.",
  "Start met een kort gesprek. In {city} en omgeving rijden wij voor u — ophalen of bezorgen.",
];

export const FAQ_QUESTION_TEMPLATES = [
  "Leveren jullie pallets aan particulieren in {city}?",
  "Bezorgen jullie ook op bedrijventerreinen in {city}?",
  "Halen jullie pallets op in {places}?",
  "Welke palletsoorten leveren jullie in {city}?",
  "Rijden jullie langs {roads} voor ophalen in {city}?",
  "Kunnen jullie kleine partijen bezorgen in {city}?",
  "Kopen jullie ook pallets van particulieren in {city}?",
  "Hoe snel kunnen jullie leveren in {city}?",
  "Wat is het verschil tussen A- en B-kwaliteit in {city}?",
  "Leveren jullie HT-gestempelde pallets vanuit {city}?",
  "Zijn jullie actief rond {areas}?",
  "Werken jullie met vaste prijzen in {city}?",
];

export const FAQ_ANSWER_TEMPLATES = [
  "Nee, bezorgen doen wij uitsluitend aan bedrijven. Particulieren kunnen wél pallets aan ons verkopen; wij halen op in {city} of omgeving.",
  "Ja, wij rijden naar bedrijventerreinen in en rond {city}, waaronder {areas}. Neem contact op voor planning op uw locatie.",
  "Ja, naast {city} zijn wij actief in omliggende plaatsen zoals {places} — voor ophalen en bezorgen aan bedrijven.",
  "Wij leveren europallets, blokpallets en wegwerppallets aan bedrijven in {city}. Particulieren kunnen aan ons verkopen.",
  "Ja, wij zijn gewend om via {roads} in {region} te rijden. Geef uw adres of terrein door voor een concrete planning.",
  "Ja, wij werken met grote én kleinere partijen. Bezorgen uitsluitend aan bedrijven in {city}.",
  "Ja, wij kopen pallets in van bedrijven én particulieren in {city}. Wij halen op met eigen transport.",
  "Dat hangt af van type, kwaliteit en onze planning. Neem contact op — in {city} proberen wij kort op de bal te spelen.",
  europalletQualityFaqAnswerTemplate(),
  "HT-gestempelde europallets volgens ISPM 15 zijn beschikbaar op aanvraag voor export buiten de EU vanuit {city}.",
  "Ja, wij zijn actief op en rond {areas} in {city}. Ophalen en bezorgen op afspraak.",
  "Wij geven een heldere prijs op basis van type, kwaliteit en aantal. Geen verrassingen achteraf voor klanten in {city}.",
  "Wij rijden in {province}, inclusief {city}. Geen landelijke doorverwijzing — wij komen zelf langs.",
  "Particulieren in {city} kunnen pallets verkopen; wij beoordelen ter plekke en handelen snel af.",
];

export const META_TITLE_FRAGMENTS = [
  "Pallets kopen en verkopen in {city} | De Palletman",
  "Pallets in {city} — B2B-levering en inkoop | De Palletman",
  "Gebruikte pallets {city} | De Palletman",
  "Palletinkoop {city} | De Palletman",
  "Europallets {city} kopen en verkopen | De Palletman",
  "Pallets {city} ({province}) | De Palletman",
  "Palletlevering in {city} | De Palletman",
  "Pallets ophalen in {city} | De Palletman",
  "Zakelijke pallets {city} | De Palletman",
  "De Palletman {city} — pallets kopen & verkopen",
  "Blokpallets en europallets {city} | De Palletman",
  "Palletservice {city} | De Palletman",
];

export const META_DESC_FRAGMENTS = [
  "Pallets in {city}: kopen voor bedrijven, verkopen door bedrijven en particulieren. Europallets, blokpallets, ophalen via {roads}. De Palletman in {region}.",
  "De Palletman in {city} — B2B-levering, inkoop met ophalen, A- en B-kwaliteit europallets. Actief op {areas} en in {region}.",
  "Gebruikte pallets in {city} ({province}): europallets, blokpallets, wegwerppallets. Eigen transport, heldere prijzen, ook rond {places}.",
  "Palletinkoop en -levering in {city}. Bezorgen aan bedrijven, ophalen bij iedereen. Bereikbaar via {roads} in {region}.",
  "Zoekt u pallets in {city}? De Palletman levert aan bedrijven en koopt in van bedrijven en particulieren — ook rond {hotspot}.",
  "Pallets kopen of verkopen in {city}: De Palletman rijdt in {region} met eigen transport. {sectors} — wij denken mee over type en kwaliteit.",
  "Lokaal in {city}: europallets en blokpallets, ophalen en bezorgen. De Palletman — werkgebied {province}, o.a. {areas}.",
  "Betrouwbare pallets voor {city} en omgeving. B2B bezorgen, inkoop met ophalen. Actief in {region} langs {roads}.",
  "Palletpartner voor {city}: kopen (bedrijven), verkopen (iedereen). HT-gestempeld op aanvraag. De Palletman in {province}.",
  "In {city} en {places}: pallets geregeld via De Palletman. Europallets, blokpallets, eigen transport in {region}.",
  "Palletservice {city} — De Palletman. Levering aan bedrijven, ophalen bij particulieren en bedrijven. {transport}.",
  "Gebruikte europallets in {city}? De Palletman: heldere prijs, snelle afhandeling, actief op {areas} en in heel {region}.",
];

export const H2_INTRO = [
  "De Palletman in {city}",
  "Pallets in {city} en {region}",
  "Lokaal geregeld in {city}",
  "Uw partner voor pallets in {city}",
  "Palletoplossingen in {city}",
  "Actief in {city}",
  "Service in {city} en omgeving",
  "Pallets voor {city}",
  "De Palletman — {city}",
  "Palletvraag in {city}?",
];

export const H2_BUY = [
  "Pallets kopen voor bedrijven in {city}",
  "Zakelijke palletlevering in {city}",
  "B2B-pallets in {city}",
  "Pallets inkopen in {city}",
  "Levering aan bedrijven in {city}",
  "Palletinkoop voor {city}",
  "Bedrijven in {city}: pallets kopen",
  "Gebruikte pallets voor uw bedrijf in {city}",
  "Palletvoorraad voor {city}",
  "Inkopen in {city} — europallets en meer",
];

export const H2_SELL = [
  "Pallets verkopen in {city}",
  "Overtollige pallets? Wij kopen in",
  "Palletverkoop in {city}",
  "Inkoop van pallets — {city}",
  "Pallets kwijt in {city}?",
  "Verkopen aan De Palletman",
  "Ophalen in {city}",
  "Particulier of zakelijk verkopen",
];

export const H2_PALLET_TYPES = [
  "Palletsoorten in {city}",
  "Europallets, blokpallets en meer",
  "Welk pallettype in {city}?",
  "Assortiment voor {city}",
  "Beschikbare pallets in {city}",
  "Onze pallettypen",
  "Pallets voor elke toepassing",
  "Keuze in type en kwaliteit",
];

export const H2_TRANSPORT = [
  "Ophalen en bezorgen in {city}",
  "Transport in {city} en {region}",
  "Eigen transport in {city}",
  "Logistiek rond {city}",
  "Planning in {city}",
  "Wij rijden in {city}",
  "Ophalen op locatie — {city}",
  "Bezorgen aan bedrijven in {city}",
];

export const H2_INDUSTRIAL = [
  "Bedrijventerreinen in {city}",
  "Terreinen rond {city}",
  "Industrieterreinen in {city}",
  "Zakelijke locaties in {city}",
  "Actief op terreinen in {city}",
  "Bedrijvenzones {city}",
  "Logistiek op terrein in {city}",
  "Pallets op bedrijventerrein",
];

export const H2_SURROUNDING = [
  "Omliggende plaatsen rond {city}",
  "Regio {city}",
  "Ook actief bij {places}",
  "Buren van {city}",
  "Werkgebied rond {city}",
  "Meer dan alleen {city}",
  "Kernen in {region}",
  "In de buurt van {city}",
];

export const H2_FAQ = [
  "FAQ — Pallets in {city}",
  "Veelgestelde vragen {city}",
  "Vragen over pallets in {city}",
  "Antwoorden voor {city}",
  "Praat met ons over {city}",
  "Wat u wilt weten — {city}",
  "Palletvragen {city}",
  "Service & vragen — {city}",
];

export const INDUSTRIAL_INTRO_FRAGMENTS = [
  "De Palletman is actief op bedrijventerreinen in en rond {city}. Onder meer:",
  "Wij rijden regelmatig naar de belangrijkste terreinen in {city}, zoals:",
  "Op onderstaande locaties in {city} halen wij op en bezorgen wij aan bedrijven:",
  "Bedrijven op deze terreinen in {city} kunnen op ons rekenen:",
];

export const SURROUNDING_INTRO_FRAGMENTS = [
  "Naast {city} rijden wij ook in omliggende kernen in {province}. Denk aan:",
  "In {region} zijn wij actief in meerdere plaatsen rond {city}:",
  "Ook buiten {city} halen wij op en leveren wij — onder andere in:",
  "De Palletman in {province} — naast {city} ook in:",
];

export const INDUSTRIAL_ITEM_FRAGMENTS = [
  "Op {area} laden en lossen wij regelmatig — ophalen en bezorgen op afspraak.",
  "{area} is een van de terreinen in {city} waar wij zakelijke klanten bedienen.",
  "Bedrijven op {area} in {city} kunnen ons inschakelen voor palletinkoop en -levering.",
  "Wij kennen {area} — planning en laden verlopen soepel voor klanten in {city}.",
  "Van {area} tot uw laadperron: wij rijden in {city} met eigen transport.",
  "Palletvraag op {area}? Neem contact op — wij plannen het in.",
  "Logistiek op {area} vraagt om betrouwbare pallets. Wij leveren aan bedrijven in {city}.",
  "Ophalen op {area} kan bij bedrijven én particulieren in de buurt van {city}.",
];

export const SURROUNDING_ITEM_FRAGMENTS = [
  "Omliggende kern bij {city} — ophalen en bezorgen op aanvraag in {place}.",
  "Vanuit {place} rijden wij door naar {city} en andersom — flexibel ingepland.",
  "Ook in {place} halen wij pallets op en leveren wij aan bedrijven.",
  "Tussen {place} en {city}: korte lijnen met De Palletman.",
  "Actief in {place} — onderdeel van ons werkgebied rond {city}.",
  "Bedrijven in {place} kunnen ons inschakelen net als in {city}.",
  "Particulieren in {place}? Wij kopen pallets in en halen op.",
  "Regio {city} inclusief {place} — één aanspreekpunt voor pallets.",
];

export const SELL_BODY_FRAGMENTS = [
  "Heeft u overtollige pallets staan in {city}? De Palletman koopt in van bedrijven én particulieren. Geef type, kwaliteit en aantal door — wij halen op met eigen transport en handelen de verkoop snel af. Grote én kleine partijen zijn welkom.",
  "Pallets over na een klus of verbouwing in {city}? Wij komen langs, beoordelen ter plekke en geven een eerlijke prijs. Ophalen met eigen transport.",
  "Verkoop in {city} werkt eenvoudig: contact opnemen, afspraak plannen, wij laden en handelen af. Bedrijven en particulieren welkom.",
  "Overtollige europallets of blokpallets in {city}? Wij kopen in — ook als het geen ronde aantallen zijn.",
  "In {city} en {places} halen wij op bij wie pallets kwijt wil. Geen gedoe met zelf transport regelen.",
  "Wij beoordelen wat u heeft staan en maken een concreet voorstel. Verkoop in {city} is zo geregeld.",
  "Particulier in {city}? U mag verkopen. Wij halen op — bezorgen aan particulieren doen wij niet.",
  "Bedrijven in {city} met overschot: wij ruimen op en betalen naar afspraak. Snelle afhandeling.",
];

export function fillFragment(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => vars[key] ?? `{${key}}`);
}

export function theoreticalCombinationCount(): number {
  const counts = Object.values(FRAGMENT_COUNTS);
  return counts.reduce((product, n) => product * n, 1);
}
