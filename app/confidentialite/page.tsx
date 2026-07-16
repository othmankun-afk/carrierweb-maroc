import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronRight } from "lucide-react";
import { getDict } from "@/lib/dictionaries";

const dict = getDict("fr");

// Politique alignée sur la loi marocaine 09-08 (protection des données
// personnelles). Reste à insérer le n° de récépissé une fois la déclaration
// CNDP déposée par l'entreprise. noindex tant que ce numéro est provisoire.
export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité et protection des données personnelles du site CarrierWeb Maroc.",
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "Responsable du traitement",
    body: "CarrierWeb Maroc, SARL à associé unique, 39 rue de Normandie, 4ᵉ étage, 20000 Casablanca, Maroc, est responsable des traitements de données à caractère personnel réalisés via ce site.",
  },
  {
    title: "Données collectées",
    body: "Le formulaire de contact transmet votre demande par e-mail à info@carrierweb.ma (nom, entreprise, e-mail, téléphone, taille de flotte, message). Ces données ne sont pas enregistrées dans une base de données du site. Le site ne dépose pas de cookies de suivi publicitaire ; seule votre préférence de thème (clair/sombre) est mémorisée localement dans votre navigateur, sans transmission à nos serveurs. [À valider : lister tout outil d'analyse d'audience ajouté ultérieurement.]",
  },
  {
    title: "Finalité du traitement",
    body: "Les informations transmises servent exclusivement à répondre à votre demande commerciale ou de support et à établir, le cas échéant, une proposition adaptée à votre flotte. Elles ne sont ni revendues ni communiquées à des tiers, et ne font l'objet d'aucune prospection automatisée.",
  },
  {
    title: "Durée de conservation",
    body: "Les demandes reçues par e-mail sont conservées le temps du traitement commercial de la demande, puis archivées ou supprimées conformément aux durées légales applicables aux documents commerciaux au Maroc.",
  },
  {
    title: "Conformité à la loi 09-08 et déclaration CNDP",
    body: "Conformément à la loi n° 09-08 du 18 février 2009 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, les traitements liés à ce site font l'objet d'une déclaration préalable auprès de la Commission Nationale de contrôle de la protection des Données à caractère Personnel (CNDP). Récépissé de déclaration n° [à compléter — dossier en cours de dépôt]. Pour en savoir plus sur vos droits : www.cndp.ma.",
  },
  {
    title: "Vos droits (accès, rectification, opposition)",
    body: "Conformément aux articles 7 à 9 de la loi 09-08, vous disposez d'un droit d'accès, de rectification et d'opposition sur les données vous concernant. Vous pouvez exercer ces droits à tout moment en écrivant à info@carrierweb.ma ou par courrier à l'adresse du siège (39 rue de Normandie, 4ᵉ étage, 20000 Casablanca), en joignant un justificatif d'identité. Une réponse vous sera apportée dans les meilleurs délais. Vous pouvez également saisir la CNDP de toute réclamation.",
  },
  {
    title: "Contact",
    body: "Pour toute question relative à vos données personnelles : info@carrierweb.ma ou +212 (0)5 22 36 19 88.",
  },
];

export default function Confidentialite() {
  return (
    <>
      <Header locale="fr" dict={dict} />
      <main id="main-content" className="bg-cw-black min-h-screen pt-[110px] pb-20">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex items-center gap-1.5 text-xs text-cw-gray-500 mb-8">
            <Link href="/" className="hover:text-cw-fg transition-colors">Accueil</Link>
            <ChevronRight size={10} aria-hidden />
            <span className="text-cw-gray-300">Politique de Confidentialité</span>
          </div>

          <h1 className="page-title mb-3">
            Politique de Confidentialité
          </h1>
          <p className="text-cw-gray-500 text-xs mb-10">
            Reste à compléter avant mise en production : numéro de récépissé de la déclaration CNDP.
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
