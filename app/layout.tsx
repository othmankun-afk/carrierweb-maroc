import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Titres : Plus Jakarta Sans — pairing SaaS B2B classique ; caractère
// moderne/pro qui matche la typographie grasse italique du logo
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  // Base pour résoudre les URLs relatives (OG images, canonicals)
  metadataBase: new URL("https://www.carrierweb.ma"),
  title: {
    default: "CarrierWeb Maroc — Gestion de Flotte, Suivi GPS & IoT Logistique",
    // Les pages enfants n'ont plus à répéter le suffixe de marque
    template: "%s",
  },
  description:
    "Découvrez le nouveau CarrierWeb Maroc. Solutions de télématique avancée, suivi GPS en temps réel, contrôle de carburant et chaîne du froid (ReeferMate™) pour flottes de transport au Maroc.",
  keywords: [
    "CarrierWeb Maroc",
    "gestion de flotte Maroc",
    "suivi GPS Maroc",
    "télématique transport Maroc",
    "contrôle carburant Maroc",
    "ReeferMate Maroc",
    "géolocalisation camion Casablanca",
    "logistique Maroc",
    "IoT transport Maroc",
  ],
  authors: [{ name: "CarrierWeb Maroc" }],
  creator: "CarrierWeb Maroc",
  publisher: "CarrierWeb Maroc",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://www.carrierweb.ma",
    siteName: "CarrierWeb Maroc",
    title: "CarrierWeb Maroc — Gestion de Flotte & Télématique Transport",
    description:
      "Pilotez votre flotte en temps réel. Géolocalisation, gestion du carburant, suivi de température et communication chauffeurs. La référence au Maroc et en Afrique.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CarrierWeb Maroc — Plateforme de gestion de flotte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CarrierWeb Maroc — Gestion de Flotte & Télématique",
    description:
      "La plateforme de référence pour la gestion de flotte, le suivi GPS et la télématique au Maroc.",
  },
  alternates: {
    canonical: "https://www.carrierweb.ma",
  },
  // Vérification Google Search Console : mettre le jeton dans la variable
  // d'environnement GOOGLE_SITE_VERIFICATION (méthode « balise HTML »),
  // puis soumettre /sitemap.xml — procédure détaillée dans le README.
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Pose le thème sur <html> AVANT le premier rendu (anti-flash) : choix
  // stocké > préférence système > sombre par défaut (identité de marque).
  const themeInitScript = `(function(){try{var t=localStorage.getItem('cw-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* favicon géré par app/icon.png (convention Next.js) */}
        <meta name="geo.region" content="MA" />
        <meta name="geo.placename" content="Casablanca" />
        <meta name="theme-color" content="#050708" />
      </head>
      <body className="min-h-screen flex flex-col bg-cw-black text-cw-gray-300 font-sans">
        {/* Lien d'évitement : premier élément focusable de chaque page */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {/* Progression de lecture + retour en haut (engagement) */}
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
