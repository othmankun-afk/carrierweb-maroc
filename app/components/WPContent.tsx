// Rendu du contenu Gutenberg d'une page WordPress (HTML déjà rendu par WP).
// Les blocs cœur (headings, paragraphes, listes, colonnes, séparateurs,
// images, citations) sont stylés dans globals.css sous `.wp-content` pour
// rester cohérents avec le design du site — WordPress ne fournit que le
// contenu, jamais l'apparence.
export default function WPContent({ html }: { html: string }) {
  return (
    <div
      className="wp-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
