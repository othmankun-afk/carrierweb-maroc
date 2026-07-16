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

const sections = [
  {
    title: "Éditeur du site",
    body: "CarrierWeb Maroc, société à responsabilité limitée à associé unique (SARL AU) au capital de 194 900 dirhams, dont le siège social est situé au 39 rue de Normandie, 4ᵉ étage, 20000 Casablanca, Maroc. Téléphone : +212 (0)5 22 36 19 88 — E-mail : info@carrierweb.ma. Immatriculée au Registre de Commerce de Casablanca sous le n° [à compléter] — ICE : [à compléter] — Identifiant fiscal : [à compléter].",
  },
  {
    title: "Directeur de la publication",
    body: "[À compléter : nom et fonction du directeur de la publication.]",
  },
  {
    title: "Hébergement",
    body: "[À compléter : nom, adresse et coordonnées de l'hébergeur du site — en attente du choix de l'hébergement de production.]",
  },
  {
    title: "Activité",
    body: "Conception, développement et commercialisation de solutions télématiques : systèmes de suivi de véhicules, solutions de gestion de flotte et applications de géolocalisation. CarrierWeb Maroc est la filiale marocaine du groupe CarrierWeb.",
  },
  {
    title: "Propriété intellectuelle",
    body: "L'ensemble des contenus de ce site (textes, visuels, logo CarrierWeb®) est protégé. Toute reproduction sans autorisation écrite préalable est interdite. CarrierWeb® est une marque déposée du groupe CarrierWeb.",
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
            Restent à compléter avant mise en production : n° RC, ICE, identifiant fiscal, directeur de la publication et hébergeur.
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
