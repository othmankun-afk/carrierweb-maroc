import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronRight } from "lucide-react";
import { getDict } from "@/lib/dictionaries";

const dict = getDict("fr");

// Identité juridique vérifiée via le registre public (fiche OMPIC/Charika,
// juillet 2026) : CarrierWeb Maroc, SARL à associé unique, capital
// 194 900 DH, immatriculée en avril 2025 — l'ancienne entité « CarrierWeb
// Services Maroc » a été radiée en juin 2025. Restent à compléter par
// l'entreprise : n° RC, ICE, IF, directeur de publication, hébergeur.
// noindex tant que ces derniers champs sont provisoires.
export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site CarrierWeb Maroc.",
  robots: { index: false, follow: true },
};

const LAST_UPDATED = "16 juillet 2026";

const sections = [
  {
    title: "Éditeur du site",
    body: "Le site www.carrierweb.ma est édité par CarrierWeb Maroc, société à responsabilité limitée à associé unique (SARL AU) au capital social de 194 900 dirhams, immatriculée au Registre du Commerce de Casablanca. Son siège social est situé au 39 rue de Normandie, 4ᵉ étage, 20000 Casablanca, Maroc. Téléphone : +212 (0)5 22 36 19 88 — E-mail : info@carrierweb.ma.",
  },
  {
    title: "Directeur de la publication",
    body: "Le directeur de la publication est le représentant légal de CarrierWeb Maroc. Toute demande peut lui être adressée à info@carrierweb.ma.",
  },
  {
    title: "Hébergement",
    body: "Le site est hébergé par un prestataire d'hébergement professionnel. Les coordonnées complètes de l'hébergeur peuvent être communiquées sur simple demande adressée à info@carrierweb.ma.",
  },
  {
    title: "Activité",
    body: "CarrierWeb Maroc conçoit, développe et commercialise des solutions télématiques : systèmes de suivi de véhicules, solutions de gestion de flotte et applications de géolocalisation. CarrierWeb Maroc est la filiale marocaine du groupe CarrierWeb.",
  },
  {
    title: "Propriété intellectuelle",
    body: "L'ensemble des éléments composant ce site (structure, textes, visuels, illustrations, logos et marques) est la propriété exclusive de CarrierWeb Maroc ou de ses partenaires, et est protégé par la législation marocaine et internationale relative à la propriété intellectuelle. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite et constitue une contrefaçon. CarrierWeb® est une marque déposée du groupe CarrierWeb.",
  },
  {
    title: "Responsabilité",
    body: "CarrierWeb Maroc s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site, sans pouvoir en garantir l'exhaustivité ou l'absence totale d'erreurs. L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant de l'accès au site ou de son utilisation, ni d'une éventuelle indisponibilité temporaire du service.",
  },
  {
    title: "Liens hypertextes",
    body: "Ce site peut contenir des liens vers des sites tiers. CarrierWeb Maroc n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leurs pratiques ou leur politique de confidentialité. La présence d'un lien ne vaut pas approbation de son contenu.",
  },
  {
    title: "Données personnelles",
    body: "Les traitements de données à caractère personnel réalisés via ce site (notamment le formulaire de contact) sont décrits dans notre Politique de Confidentialité, accessible depuis le pied de page ou à l'adresse /confidentialite.",
  },
  {
    title: "Droit applicable et juridiction",
    body: "Les présentes mentions légales sont régies par le droit marocain. Tout litige relatif à l'utilisation du site, à défaut de résolution amiable, relève de la compétence exclusive des tribunaux de Casablanca.",
  },
];

export default function MentionsLegales() {
  return (
    <>
      <Header locale="fr" dict={dict} />
      <main id="main-content" className="bg-cw-black min-h-screen pt-[110px] pb-20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex items-center gap-1.5 text-xs text-cw-gray-500 mb-8">
            <Link href="/" className="hover:text-cw-fg transition-colors">Accueil</Link>
            <ChevronRight size={10} aria-hidden />
            <span className="text-cw-gray-300">Mentions Légales</span>
          </div>

          <h1 className="page-title mb-3">
            Mentions Légales
          </h1>
          <p className="text-cw-gray-500 text-xs mb-10">
            Dernière mise à jour : {LAST_UPDATED}
          </p>

          <div className="space-y-6">
            {sections.map((s) => (
              <div key={s.title} className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 sm:p-8">
                <h2 className="text-base font-bold text-cw-fg mb-3 font-[family-name:var(--font-jakarta)]">
                  {s.title}
                </h2>
                <p className="text-cw-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer locale="fr" dict={dict} />
    </>
  );
}
