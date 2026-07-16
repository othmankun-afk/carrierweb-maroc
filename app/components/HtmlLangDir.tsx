"use client";

import { useEffect } from "react";

/**
 * Applique lang/dir sur <html> pour les locales traduites (ar/en). On ne peut
 * pas re-rendre <html> dans un layout imbriqué (déjà posé en fr par le root
 * layout), et un <script> inline ne se ré-exécute pas lors de la navigation
 * client (d'où l'avertissement React). Ce composant le fait dans un effet :
 *  - au montage / changement de locale → pose lang+dir ;
 *  - au démontage (retour vers le fr racine) → rétablit fr / ltr.
 * L'affichage visuel RTL est déjà assuré immédiatement par le conteneur
 * `dir=rtl` du layout, donc aucun flash.
 */
export default function HtmlLangDir({ lang, dir }: { lang: string; dir: "ltr" | "rtl" }) {
  useEffect(() => {
    const el = document.documentElement;
    el.lang = lang;
    el.dir = dir;
    return () => {
      el.lang = "fr";
      el.dir = "ltr";
    };
  }, [lang, dir]);

  return null;
}
