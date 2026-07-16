import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/lib/i18n";

// Valide le segment [locale] des routes traduites. Le sous-arbre app/[locale]
// ne sert que ar/en (le fr vit à la racine) : tout autre valeur → 404.
export function resolveLocaleParam(locale: string): Locale {
  if (!isLocale(locale) || locale === "fr") notFound();
  return locale;
}
