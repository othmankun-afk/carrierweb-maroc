// Configuration i18n du site. Trois locales :
//  - fr : langue par défaut, URLs SANS préfixe (/solutions) — les URL
//    historiques ne changent pas ;
//  - ar / en : URLs préfixées (/ar/solutions, /en/solutions).
// Le routage est assuré par proxy.ts (rewrite interne / → /fr) et
// l'arborescence app/[locale]/. Importable côté serveur ET client.

export const locales = ["fr", "ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Sens d'écriture — pose dir= sur <html> et active les styles RTL. */
export function dirFor(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/** Préfixe d'URL de la locale ("" pour le français, "/ar", "/en"). */
export function prefix(locale: Locale): string {
  return locale === defaultLocale ? "" : `/${locale}`;
}

/** Localise un chemin interne : localizePath("ar", "/solutions") → "/ar/solutions". */
export function localizePath(locale: Locale, path: string): string {
  const p = prefix(locale);
  if (path === "/") return p === "" ? "/" : p;
  return `${p}${path}`;
}

/**
 * Retire le préfixe de locale d'un chemin pour retrouver le chemin « nu ».
 * "/ar/solutions" → "/solutions", "/en" → "/", "/solutions" → "/solutions".
 * Sert au sélecteur de langue (basculer la même page vers une autre langue).
 */
export function stripLocale(pathname: string): string {
  for (const l of locales) {
    if (l === defaultLocale) continue;
    if (pathname === `/${l}`) return "/";
    if (pathname.startsWith(`/${l}/`)) return pathname.slice(l.length + 1);
  }
  return pathname;
}

/** Code BCP 47 pour <html lang> et Open Graph. */
export const htmlLang: Record<Locale, string> = {
  fr: "fr",
  ar: "ar",
  en: "en",
};

export const ogLocale: Record<Locale, string> = {
  fr: "fr_MA",
  ar: "ar_MA",
  en: "en_US",
};

/** Libellés du sélecteur de langue. */
export const localeLabels: Record<Locale, string> = {
  fr: "FR",
  ar: "AR",
  en: "EN",
};

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  ar: "العربية",
  en: "English",
};

const BASE = "https://www.carrierweb.ma";

/**
 * Canonical + hreflang pour une page donnée. `path` est le chemin SANS
 * préfixe de locale (ex. "/solutions/suivi-gps"). Chaque version linguistique
 * déclare les deux autres + x-default (fr).
 */
export function pageAlternates(locale: Locale, path: string) {
  return {
    canonical: `${BASE}${localizePath(locale, path)}`,
    languages: {
      fr: `${BASE}${localizePath("fr", path)}`,
      ar: `${BASE}${localizePath("ar", path)}`,
      en: `${BASE}${localizePath("en", path)}`,
      "x-default": `${BASE}${localizePath("fr", path)}`,
    },
  };
}

/** Locale de formatage des dates/nombres. */
export const intlLocale: Record<Locale, string> = {
  fr: "fr-MA",
  ar: "ar-MA",
  en: "en-GB",
};
