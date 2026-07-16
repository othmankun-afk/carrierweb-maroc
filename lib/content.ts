// Locale-aware content access. French (`fr`) is the source of truth and is
// served from WordPress (with the lib/mock-data.ts fallback via
// lib/wordpress.ts). WordPress currently only holds French content, so `ar`
// and `en` read the translated local files (lib/mock-data.ar.ts /
// lib/mock-data.en.ts). A multilingual WP (Polylang/WPML) can later feed
// ar/en here without touching any page.

import type { Locale } from "./i18n";
import type { Solution, SolutionSummary, Sector, SectorSummary } from "./types";
import {
  getAllSolutions as wpAllSolutions,
  getSolutionBySlug as wpSolutionBySlug,
  getAllSectors as wpAllSectors,
  getSectorBySlug as wpSectorBySlug,
} from "./wordpress";
import { mockSolutionsEn, mockSectorsEn } from "./mock-data.en";
import { mockSolutionsAr, mockSectorsAr } from "./mock-data.ar";

function localSolutions(locale: Locale): Solution[] {
  return locale === "ar" ? mockSolutionsAr : mockSolutionsEn;
}
function localSectors(locale: Locale): Sector[] {
  return locale === "ar" ? mockSectorsAr : mockSectorsEn;
}

const summarizeSolution = ({ slug, title, icon, shortDescription }: Solution): SolutionSummary => ({
  slug,
  title,
  icon,
  shortDescription,
});
const summarizeSector = ({ slug, title, icon, listingDescription }: Sector): SectorSummary => ({
  slug,
  title,
  icon,
  listingDescription,
});

export async function getSolutions(locale: Locale): Promise<SolutionSummary[]> {
  if (locale === "fr") return wpAllSolutions();
  return localSolutions(locale).map(summarizeSolution);
}

export async function getSolution(locale: Locale, slug: string): Promise<Solution | null> {
  if (locale === "fr") return wpSolutionBySlug(slug);
  return localSolutions(locale).find((s) => s.slug === slug) ?? null;
}

export async function getSectors(locale: Locale): Promise<SectorSummary[]> {
  if (locale === "fr") return wpAllSectors();
  return localSectors(locale).map(summarizeSector);
}

export async function getSector(locale: Locale, slug: string): Promise<Sector | null> {
  if (locale === "fr") return wpSectorBySlug(slug);
  return localSectors(locale).find((s) => s.slug === slug) ?? null;
}
