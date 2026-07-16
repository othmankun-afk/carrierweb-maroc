// « Réglages du site » éditables dans WordPress sans ACF Pro.
//
// ACF Free ne fournit pas d'Options Page : on lit donc un post unique du CPT
// `reglage` (slug « reglages-site ») via WPGraphQL. Chaque champ est
// facultatif — un champ vide (ou WP indisponible) retombe sur la valeur du
// dictionnaire (lib/dictionaries), donc le site fonctionne AVANT même que
// Patricia crée le post de réglages.
//
// WordPress ne portant que le contenu FRANÇAIS, seule la locale `fr` interroge
// WP ; `ar`/`en` renvoient un objet vide (→ 100 % dictionnaire), exactement
// comme pour les solutions/secteurs.

import { cache } from "react";
import { GET_SITE_SETTINGS } from "./queries";
import { fetchGraphQL } from "./wordpress";
import type { Locale } from "./i18n";

export interface SiteSettings {
  footerBlurb?: string;
  contactPhone?: string;
  contactEmail?: string;
  contactAddress?: string;
  linkedinUrl?: string;
  heroTitleLine1?: string;
  heroTitleHighlight?: string;
  heroTitleLine3?: string;
  heroSubtitle?: string;
}

interface WPSettingsResponse {
  reglage: {
    reglagesFields: {
      footerBlurb?: string | null;
      contactPhone?: string | null;
      contactEmail?: string | null;
      contactAddress?: string | null;
      linkedinUrl?: string | null;
      heroTitleLine1?: string | null;
      heroTitleHighlight?: string | null;
      heroTitleLine3?: string | null;
      heroSubtitle?: string | null;
    } | null;
  } | null;
}

// Ne garde que les chaînes réellement remplies (ni null, ni vide), pour que
// `?? fallback` s'applique champ par champ.
function clean(v: string | null | undefined): string | undefined {
  return v && v.trim() !== "" ? v : undefined;
}

// `cache()` : dédupe l'appel WP au sein d'un même rendu (ex. l'accueil où le
// Hero ET le Footer lisent les réglages → une seule requête).
export const getSiteSettings = cache(async (locale: Locale): Promise<SiteSettings> => {
  if (locale !== "fr") return {};

  const data = await fetchGraphQL<WPSettingsResponse>(GET_SITE_SETTINGS);
  const f = data?.reglage?.reglagesFields;
  if (!f) return {};

  return {
    footerBlurb: clean(f.footerBlurb),
    contactPhone: clean(f.contactPhone),
    contactEmail: clean(f.contactEmail),
    contactAddress: clean(f.contactAddress),
    linkedinUrl: clean(f.linkedinUrl),
    heroTitleLine1: clean(f.heroTitleLine1),
    heroTitleHighlight: clean(f.heroTitleHighlight),
    heroTitleLine3: clean(f.heroTitleLine3),
    heroSubtitle: clean(f.heroSubtitle),
  };
});
