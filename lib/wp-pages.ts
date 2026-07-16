// Pages fixes éditables dans WordPress (Gutenberg).
//
// Chaque page fixe du site (ex. « Pourquoi CarrierWeb ») peut exister comme
// page WordPress éditée par blocs Gutenberg. Le front lit son HTML rendu via
// WPGraphQL ; si la page n'existe pas (ou si WP est indisponible), la vue
// retombe sur le contenu codé en dur (dictionnaires) — même philosophie de
// repli que lib/wordpress.ts. WordPress ne portant que le contenu FRANÇAIS,
// seules les pages `fr` interrogent WP.

import { fetchGraphQL } from "./wordpress";
import type { Locale } from "./i18n";

const GET_PAGE_BY_URI = /* GraphQL */ `
  query GetPageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      content
    }
  }
`;

/**
 * HTML Gutenberg d'une page WordPress, ou `null` — WP indisponible, page non
 * créée, contenu vide, ou locale non française. L'appelant garde son rendu
 * codé en dur comme repli.
 */
export async function getWPPageContent(
  locale: Locale,
  uri: string
): Promise<string | null> {
  if (locale !== "fr") return null;

  const data = await fetchGraphQL<{ page: { content: string | null } | null }>(
    GET_PAGE_BY_URI,
    { uri }
  );

  const html = data?.page?.content?.trim();
  return html ? html : null;
}
