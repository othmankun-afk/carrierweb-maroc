/** Injecte un bloc JSON-LD schema.org. Utilisé par les pages pour leurs
 *  données structurées spécifiques (BreadcrumbList, Service, FAQPage…). */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
