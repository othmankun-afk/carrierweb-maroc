import JsonLd from "./JsonLd";
import { localizePath, htmlLang, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

/* Données structurées de la page d'accueil (par locale).
   Adresse officielle unifiée sur tout le site : 39 rue Normandie,
   20000 Casablanca, Maroc (footer, contact, mentions légales, carte Google). */

const BASE = "https://www.carrierweb.ma";

export default function StructuredData({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const homeUrl = `${BASE}${localizePath(locale, "/")}`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    // Entité active au registre du commerce depuis avril 2025 (l'ancienne
    // « CarrierWeb Services Maroc » a été radiée en juin 2025).
    name: "CarrierWeb Maroc",
    legalName: "CarrierWeb Maroc SARL AU",
    url: BASE,
    logo: `${BASE}/logo.png`,
    description:
      "CarrierWeb Maroc fournit des solutions de gestion de flotte, de télématique et de suivi GPS en temps réel pour le transport routier au Maroc et en Afrique.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "39 rue Normandie",
      addressLocality: "Casablanca",
      postalCode: "20000",
      addressCountry: "MA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+212-5-22-36-19-88",
      email: "info@carrierweb.ma",
      contactType: "customer service",
      availableLanguage: ["French", "Arabic", "English"],
      areaServed: ["MA", "DZ", "TN", "SN", "CI"],
    },
    sameAs: ["https://www.carrierweb.com"],
    parentOrganization: {
      "@type": "Organization",
      name: "CarrierWeb Group of Companies",
      url: "https://www.carrierweb.com",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/#localbusiness`,
    name: "CarrierWeb Maroc",
    image: `${BASE}/og-image.png`,
    url: BASE,
    telephone: "+212-5-22-36-19-88",
    email: "info@carrierweb.ma",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "39 rue Normandie",
      addressLocality: "Casablanca",
      postalCode: "20000",
      addressCountry: "MA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.5869,
      longitude: -7.6299,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    parentOrganization: { "@id": `${BASE}/#organization` },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    name: "CarrierWeb Maroc",
    url: BASE,
    inLanguage: htmlLang[locale],
    publisher: { "@id": `${BASE}/#organization` },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: dict.meta.solutions.title,
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "Country", name: "Morocco" },
    description: dict.meta.ogDescription,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Solutions CarrierWeb",
      itemListElement: dict.header.solutionItems.map((s, i) => {
        const hrefs = [
          "/solutions/gestion-flotte",
          "/solutions/suivi-gps",
          "/solutions/gestion-carburant",
          "/solutions/controle-temperature",
          "/solutions/communication-chauffeurs",
          "/solutions/integration",
        ];
        return {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.label, url: `${BASE}${localizePath(locale, hrefs[i])}` },
        };
      }),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: htmlLang[locale],
    mainEntity: dict.homeFaq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={{ ...webSiteSchema, url: homeUrl }} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
