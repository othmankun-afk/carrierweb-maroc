// Point d'entrée des dictionnaires UI. Importable côté serveur ET client
// (le sélecteur de langue et les composants "use client" en ont besoin).
// Le type Dictionary est dérivé du français : TypeScript garantit que ar/en
// exposent exactement les mêmes clés.

import type { Locale } from "../i18n";
import fr from "./fr";
import ar from "./ar";
import en from "./en";

export type Dictionary = typeof fr;

const dictionaries: Record<Locale, Dictionary> = { fr, ar, en };

export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale] ?? fr;
}
