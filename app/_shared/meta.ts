import type { Metadata } from "next";
import { ogLocale, pageAlternates, type Locale } from "@/lib/i18n";

// Construit les métadonnées (title/description/canonical/hreflang/OG) d'une
// page traduite. `path` est le chemin SANS préfixe de locale.
export function buildMetadata(opts: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  robotsNoindex?: boolean;
}): Metadata {
  const { locale, path, title, description, ogTitle, ogDescription, robotsNoindex } = opts;
  return {
    title,
    description,
    alternates: pageAlternates(locale, path),
    openGraph: {
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      url: pageAlternates(locale, path).canonical,
      locale: ogLocale[locale],
    },
    ...(robotsNoindex ? { robots: { index: false, follow: true } } : {}),
  };
}
