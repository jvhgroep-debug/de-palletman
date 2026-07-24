/**
 * Centrale master-teksten voor A- en B-kwaliteit europallets.
 * Importeer overal waar kwaliteitsomschrijvingen nodig zijn — bestaande én toekomstige pagina's.
 */

export const EUROPALLET_A_QUALITY_TEXT =
  "Onze A-kwaliteit europallets zijn technisch volledig in orde en direct inzetbaar. Deze pallets zijn stevig, betrouwbaar en geschikt voor dagelijks gebruik in logistiek, opslag en transport. Ze verkeren in nette staat en behoren tot de hoogste kwaliteitsklasse binnen gebruikte pallets.";

export const EUROPALLET_B_QUALITY_TEXT =
  "Onze B-kwaliteit europallets zijn technisch volledig bruikbaar, maar hebben meer gebruikssporen dan A-kwaliteit. Vaak zijn ze wat donkerder van kleur of cosmetisch minder netjes. Ze zijn ideaal voor bedrijven die een voordelige, volledig bruikbare pallet zoeken.";

export const EUROPALLET_A_QUALITY_TITLE = "A-kwaliteit — 1e keus";
export const EUROPALLET_B_QUALITY_TITLE = "B-kwaliteit — 2e keus";

export const EUROPALLET_A_IMAGE_FILENAME = "kwaliteit-a-europallets.png";
export const EUROPALLET_B_IMAGE_FILENAME = "kwaliteit-b-europallets.png";
export const EUROPALLET_A_IMAGE_PATH = `/images/${EUROPALLET_A_IMAGE_FILENAME}`;
export const EUROPALLET_B_IMAGE_PATH = `/images/${EUROPALLET_B_IMAGE_FILENAME}`;

export const EUROPALLET_A_IMAGE_ALT =
  "A-kwaliteit eerste keus europallets in lichte en nette staat";
export const EUROPALLET_B_IMAGE_ALT =
  "B-kwaliteit tweede keus europallets met normale gebruikssporen";

export type EuropalletQualityGrade = "a" | "b";

export const EUROPALLET_QUALITY_IMAGE_DIMENSIONS = {
  a: { width: 1120, height: 747 },
  b: { width: 1120, height: 747 },
} as const;

/** Centrale image cards voor A- en B-kwaliteit europallets. */
export function europalletQualityImageCards(): {
  quality: EuropalletQualityGrade;
  title: string;
  text: string;
}[] {
  return [
    {
      quality: "a",
      title: EUROPALLET_A_QUALITY_TITLE,
      text: EUROPALLET_A_QUALITY_TEXT,
    },
    {
      quality: "b",
      title: EUROPALLET_B_QUALITY_TITLE,
      text: EUROPALLET_B_QUALITY_TEXT,
    },
  ];
}

export function getEuropalletQualityImage(quality: EuropalletQualityGrade) {
  return quality === "a"
    ? {
        src: EUROPALLET_A_IMAGE_PATH,
        alt: EUROPALLET_A_IMAGE_ALT,
        ...EUROPALLET_QUALITY_IMAGE_DIMENSIONS.a,
      }
    : {
        src: EUROPALLET_B_IMAGE_PATH,
        alt: EUROPALLET_B_IMAGE_ALT,
        ...EUROPALLET_QUALITY_IMAGE_DIMENSIONS.b,
      };
}

/** Gecombineerde kwaliteitstekst voor qualityText-velden en CSV-kolommen. */
export const EUROPALLET_QUALITY_COMBINED_TEXT = `${EUROPALLET_A_QUALITY_TEXT} ${EUROPALLET_B_QUALITY_TEXT}`;

/** Korte samenvatting voor pallettype-lijsten (A + B titels). */
export const EUROPALLET_QUALITY_SUMMARY =
  "A-kwaliteit (1e keus) en B-kwaliteit (2e keus), beide technisch volledig inzetbaar. Het verschil zit in uitstraling, gebruikssporen en kleur.";

export const EUROPALLET_HT_EXPORT_NOTE =
  "Ook HT-gestempeld voor export buiten de EU volgens ISPM 15.";

/** Antwoord op FAQ over het verschil tussen A- en B-kwaliteit. */
export function europalletQualityDifferenceAnswer(city?: string): string {
  const suffix = city
    ? ` In ${city} adviseren wij eerlijk welke kwaliteit het beste past bij uw toepassing. Het verschil zit uitsluitend in uitstraling, gebruikssporen en kleur.`
    : " Het verschil zit uitsluitend in uitstraling, gebruikssporen en kleur — beide kwaliteiten zijn technisch volledig inzetbaar.";
  return `${EUROPALLET_A_QUALITY_TEXT} ${EUROPALLET_B_QUALITY_TEXT}${suffix}`;
}

/** FAQ-antwoord met {city}-placeholder voor pSEO-generatie. */
export function europalletQualityFaqAnswerTemplate(): string {
  return `${EUROPALLET_A_QUALITY_TEXT} ${EUROPALLET_B_QUALITY_TEXT} In {city} adviseren wij eerlijk welke kwaliteit het beste past — het verschil zit uitsluitend in uitstraling, gebruikssporen en kleur.`;
}

/** Korte service-/provincietekst: beide kwaliteiten + HT-export. */
export function europalletProvinceServiceText(): string {
  return `${EUROPALLET_A_QUALITY_TEXT} ${EUROPALLET_B_QUALITY_TEXT} ${EUROPALLET_HT_EXPORT_NOTE}`;
}

/** Items voor kwaliteitssecties in service- en stadspagina's. */
export function europalletQualitySectionItems(): {
  title: string;
  text: string;
}[] {
  return [
    { title: EUROPALLET_A_QUALITY_TITLE, text: EUROPALLET_A_QUALITY_TEXT },
    { title: EUROPALLET_B_QUALITY_TITLE, text: EUROPALLET_B_QUALITY_TEXT },
  ];
}

/** Fragmenten voor pSEO-generatie (met {city}-placeholder). */
export function europalletQualityFragments(): string[] {
  return [
    EUROPALLET_QUALITY_COMBINED_TEXT,
    `Europallets in {city}: ${EUROPALLET_A_QUALITY_TEXT} ${EUROPALLET_B_QUALITY_TEXT}`,
    `A-kwaliteit (1e keus) en B-kwaliteit (2e keus) in {city}. ${EUROPALLET_A_QUALITY_TEXT} ${EUROPALLET_B_QUALITY_TEXT}`,
    `Wij leveren europallets in A- en B-kwaliteit in {city}. ${EUROPALLET_B_QUALITY_TEXT}`,
    `Het verschil tussen A- en B-kwaliteit zit uitsluitend in uitstraling, gebruikssporen en kleur — beide zijn technisch volledig inzetbaar. ${EUROPALLET_A_QUALITY_TEXT}`,
    `Vraag naar A-kwaliteit als uitstraling telt; kies B-kwaliteit voor interne stromen in {city}. ${EUROPALLET_B_QUALITY_TEXT}`,
  ];
}
