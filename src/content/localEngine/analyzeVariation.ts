import type { LocalCityContent, VariationAnalysis } from "./types.ts";
import { theoreticalCombinationCount } from "./fragments.ts";

function countDuplicateGroups(values: string[]): number {
  const groups = new Map<string, number>();
  for (const v of values) {
    groups.set(v, (groups.get(v) ?? 0) + 1);
  }
  return [...groups.values()].filter((c) => c > 1).length;
}

function citiesInDuplicateGroups(values: string[]): number {
  const groups = new Map<string, number>();
  for (const v of values) {
    groups.set(v, (groups.get(v) ?? 0) + 1);
  }
  return [...groups.values()].filter((c) => c > 1).reduce((a, c) => a + c, 0);
}

function faqSignature(content: LocalCityContent): string {
  return content.faq.map((f) => `${f.question}|||${f.answer}`).join(":::");
}

function fullBodyHash(content: LocalCityContent): string {
  return [
    content.intro,
    content.cityDescription,
    content.localEconomy,
    content.services,
    content.palletTypes,
    content.transport,
    content.faq.map((f) => f.answer).join("|"),
  ].join("###");
}

/** Analyseert uniekheid over een set samengestelde steden. */
export function analyzeLocalContentVariation(
  contents: LocalCityContent[],
  options: { internalLinksCorrect?: boolean; maxInternalCityLinks?: number } = {},
): VariationAnalysis {
  const intros = contents.map((c) => c.intro);
  const cityDescriptions = contents.map((c) => c.cityDescription);
  const economies = contents.map((c) => c.localEconomy);
  const services = contents.map((c) => c.services);
  const heroTitles = contents.map((c) => c.heroTitle);
  const metaTitles = contents.map((c) => c.metaTitle);
  const metaDescriptions = contents.map((c) => c.metaDescription);
  const faqSigs = contents.map(faqSignature);
  const bodyHashes = contents.map(fullBodyHash);
  const ctaTitles = contents.map((c) => c.ctaTitle);

  const duplicateGroups = {
    intro: countDuplicateGroups(intros),
    cityDescription: countDuplicateGroups(cityDescriptions),
    localEconomy: countDuplicateGroups(economies),
    services: countDuplicateGroups(services),
    heroTitle: countDuplicateGroups(heroTitles),
    metaTitle: countDuplicateGroups(metaTitles),
    metaDescription: countDuplicateGroups(metaDescriptions),
    faqSignature: countDuplicateGroups(faqSigs),
    fullBodyHash: countDuplicateGroups(bodyHashes),
    ctaTitle: countDuplicateGroups(ctaTitles),
  };

  const citiesWithDuplicates = {
    intro: citiesInDuplicateGroups(intros),
    fullBody: citiesInDuplicateGroups(bodyHashes),
    faq: citiesInDuplicateGroups(faqSigs),
  };

  const uniqueCounts = {
    intro: new Set(intros).size,
    heroTitle: new Set(heroTitles).size,
    metaTitle: new Set(metaTitles).size,
    metaDescription: new Set(metaDescriptions).size,
    faqSignature: new Set(faqSigs).size,
    fullBodyHash: new Set(bodyHashes).size,
  };

  const allFieldsUnique =
    duplicateGroups.intro === 0 &&
    duplicateGroups.cityDescription === 0 &&
    duplicateGroups.localEconomy === 0 &&
    duplicateGroups.services === 0 &&
    duplicateGroups.heroTitle === 0 &&
    duplicateGroups.metaTitle === 0 &&
    duplicateGroups.metaDescription === 0 &&
    duplicateGroups.faqSignature === 0 &&
    duplicateGroups.fullBodyHash === 0 &&
    duplicateGroups.ctaTitle === 0;

  const maxLinks = options.maxInternalCityLinks ?? Math.max(0, ...contents.map((c) => c.internalLinkSlugs.length));

  return {
    cityCount: contents.length,
    theoreticalCombinations: theoreticalCombinationCount(),
    duplicateGroups,
    citiesWithDuplicates,
    uniqueCounts,
    duplicateContentWarningsResolved: allFieldsUnique && citiesWithDuplicates.fullBody === 0,
    internalLinksCorrect: options.internalLinksCorrect ?? true,
    maxInternalCityLinks: maxLinks,
  };
}

/** Vergelijkt engine-output met drempels uit Opdracht 17 audit. */
export function compareWithLegacyAudit(analysis: VariationAnalysis): {
  introDuplicateRate: string;
  faqDuplicateRate: string;
  resolved: boolean;
} {
  const introRate = analysis.cityCount > 0
    ? ((analysis.cityCount - analysis.uniqueCounts.intro) / analysis.cityCount * 100).toFixed(1)
    : "0";
  const faqRate = analysis.cityCount > 0
    ? ((analysis.cityCount - analysis.uniqueCounts.faqSignature) / analysis.cityCount * 100).toFixed(1)
    : "0";

  return {
    introDuplicateRate: `${introRate}%`,
    faqDuplicateRate: `${faqRate}%`,
    resolved: analysis.duplicateContentWarningsResolved,
  };
}
