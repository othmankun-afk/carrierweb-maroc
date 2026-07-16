// Dictionnaire français — locale par défaut et RÉFÉRENCE DE STRUCTURE :
// le type `Dictionary` (lib/dictionaries/index.ts) est dérivé de ce fichier,
// ar.ts et en.ts doivent donc exposer exactement les mêmes clés.

const fr = {
  common: {
    skipToContent: "Aller au contenu principal",
    home: "Accueil",
    requestDemo: "Demander une Démo",
    requestDemoLong: "Demander une démo gratuite",
    talkToExpert: "Parler à un expert",
    learnMore: "En savoir plus",
    explore: "Explorer",
    backToTop: "Retour en haut de la page",
    themeLightAria: "Activer le thème clair",
    themeDarkAria: "Activer le thème sombre",
    breadcrumbAria: "Fil d'Ariane",
    legalFrenchOnly:
      "Document juridique — la version française fait foi.",
  },

  meta: {
    rootTitle: "CarrierWeb Maroc — Gestion de Flotte, Suivi GPS & IoT Logistique",
    rootDescription:
      "Découvrez le nouveau CarrierWeb Maroc. Solutions de télématique avancée, suivi GPS en temps réel, contrôle de carburant et chaîne du froid (ReeferMate™) pour flottes de transport au Maroc.",
    ogTitle: "CarrierWeb Maroc — Gestion de Flotte & Télématique Transport",
    ogDescription:
      "Pilotez votre flotte en temps réel. Géolocalisation, gestion du carburant, suivi de température et communication chauffeurs. La référence au Maroc et en Afrique.",
    solutions: {
      title: "Solutions Télématiques & IoT pour Flottes",
      description:
        "Suivi GPS temps réel, gestion du carburant, chaîne du froid ReeferMate™, communication chauffeurs et intégration ERP : les 6 solutions CarrierWeb pour les flottes marocaines.",
    },
    sectors: {
      title: "Secteurs d'Activité — Transport, Logistique, BTP, Distribution",
      description:
        "Solutions de gestion de flotte adaptées à chaque métier au Maroc : transport routier TIR, logistique & supply chain, BTP et distribution FMCG.",
    },
    why: {
      title: "Pourquoi CarrierWeb ? Technologie & Matériel",
      description:
        "Boîtiers GPS propriétaires, connectivité multi-opérateurs (IAM, Orange, Inwi), sonde ReeferMate™ et cloud sécurisé : découvrez la technologie CarrierWeb pour les flottes marocaines.",
    },
    resources: {
      title: "Ressources & Guides — Gestion de Flotte au Maroc | CarrierWeb",
      description:
        "Guides pratiques et analyses sur la télématique au Maroc : réduction du carburant, chaîne du froid ONSSA, intégration TMS/ERP.",
    },
    contact: {
      title: "Contact & Demande de Démo",
      description:
        "Demandez une démo gratuite ou une étude de rentabilité de votre flotte. CarrierWeb Maroc à Casablanca : +212 (0)5 22 36 19 88, info@carrierweb.ma, WhatsApp.",
    },
    clientArea: {
      title: "Espace Client — Accéder à ma flotte",
      description:
        "Connectez-vous à la plateforme CarrierWeb pour suivre vos véhicules en temps réel, consulter vos rapports carburant et gérer vos alertes. Support local à Casablanca.",
    },
    login: {
      title: "Connexion — Espace Client",
      description:
        "Connectez-vous à votre espace flotte CarrierWeb : suivi GPS temps réel, carburant, chaîne du froid et alertes.",
    },
    register: {
      title: "Créer un compte — Espace Client",
      description:
        "Demandez l'ouverture de votre Espace Client CarrierWeb pour piloter votre flotte en temps réel au Maroc.",
    },
  },

  header: {
    nav: {
      home: "Accueil",
      solutions: "Solutions",
      sectors: "Secteurs",
      why: "Pourquoi nous",
      resources: "Ressources",
      contact: "Contact",
    },
    solutionItems: [
      { label: "Gestion de Flotte", desc: "Optimisation et réduction des coûts" },
      { label: "Suivi GPS Temps Réel", desc: "Localisation précise de chaque véhicule" },
      { label: "Gestion du Carburant", desc: "Contrôle et détection des vols" },
      { label: "Contrôle de Température", desc: "Chaîne du froid ReeferMate™" },
      { label: "Communication Chauffeurs", desc: "Terminaux MDT embarqués" },
      { label: "Intégration Back-Office", desc: "API REST et connecteurs ERP" },
    ],
    sectorItems: [
      "Transport de Marchandises",
      "Logistique & Supply Chain",
      "BTP & Construction",
      "Distribution & FMCG",
    ],
    seeAllSolutions: "Voir toutes les solutions",
    login: "Connexion",
    createAccount: "Créer un compte",
    clientPortal: "Espace Client — plateforme temps réel",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    expand: "Déplier",
    collapse: "Replier",
    logoAria: "CarrierWeb Maroc — retour à l'accueil",
    langSwitchAria: "Changer de langue",
  },

  footer: {
    blurb:
      "Solutions de télématique embarquée avancée, géolocalisation et gestion de carburant pour les flottes de transport au Maroc.",
    solutionsTitle: "Solutions",
    allSolutions: "Toutes les solutions →",
    navTitle: "Navigation",
    navWhy: "Pourquoi CarrierWeb",
    navSectors: "Secteurs d'Activité",
    navResources: "Ressources & Guides",
    navContact: "Contactez-nous",
    navClientArea: "Espace Client",
    supportTitle: "Accès Client & Support",
    portalCta: "Espace Client — Accéder à ma flotte",
    supportBlurb:
      "Une question urgente ou besoin de support technique ? Nos équipes sont joignables directement.",
    whatsapp: "Contact WhatsApp",
    rights: "© 2026 CarrierWeb Maroc. Tous droits réservés.",
    legal: "Mentions Légales",
    privacy: "Politique de Confidentialité",
  },

  hero: {
    label: "Télématique & gestion de flotte au Maroc",
    titleA: "Pilotez votre flotte",
    titleBpre: "en ",
    titleBhl: "temps réel",
    titleC: "Réduisez vos coûts",
    subtitle:
      "Suivi GPS, contrôle du carburant, chaîne du froid certifiée et communication chauffeurs : CarrierWeb équipe les transporteurs et logisticiens marocains, de Casablanca à Tanger Med.",
    ctaPrimary: "Demander une démo gratuite",
    ctaSecondary: "Découvrir nos solutions",
    proofs: [
      "Jusqu'à −25 % de budget carburant",
      "Flotte suivie 24h/24 en temps réel",
      "Support local à Casablanca",
    ],
    imgAlt: "Camion de transport aux couleurs CarrierWeb sur une autoroute côtière marocaine",
    sectionAria: "Présentation CarrierWeb Maroc",
  },

  trustBar: [
    { label: "Homologué ANRT Maroc", desc: "Matériel certifié conforme" },
    { label: "Multi-Réseaux GSM", desc: "IAM / Orange / Inwi" },
    { label: "Support Local Casablanca", desc: "Assistance technique 24/7" },
    { label: "15+ Ans d'Expertise", desc: "Leader en IoT transport" },
  ],

  videoShowcase: {
    label: "La plateforme en vidéo",
    titlePre: "Voyez ",
    titleHl: "CarrierWeb",
    titlePost: " en action",
    desc: "Découvrez en quelques secondes comment notre plateforme centralise le suivi de votre flotte : géolocalisation temps réel, alertes et rapports, dans une interface pensée pour vos équipes.",
    videoAlt: "Démonstration vidéo de la plateforme CarrierWeb Maroc",
  },

  services: {
    label: "Solutions Télématiques",
    titlePre: "Quelles solutions pour ",
    titleHl: "rentabiliser votre flotte ?",
    desc: "Six solutions connectées, du suivi GPS à l'intégration ERP, pour réduire vos coûts d'exploitation et sécuriser vos opérations de transport au Maroc.",
    discover: "Découvrir la solution",
    items: [
      { title: "Gestion de Flotte", description: "Analysez l'utilisation globale, planifiez la maintenance préventive et optimisez vos budgets logistiques." },
      { title: "Suivi GPS Temps Réel", description: "Géolocalisation haute précision minute par minute sur tout le Maroc et cross-border (TIR)." },
      { title: "Gestion du Carburant", description: "Sondes de niveau précises à ±1L, détection immédiate des siphonnages et rapports éco-conduite." },
      { title: "Contrôle de Température", description: "Certifiez l'intégrité de la chaîne du froid (ReeferMate™) conforme ONSSA avec alertes." },
      { title: "Communication Chauffeurs", description: "Messagerie, navigation Poids-Lourds pro et ordres de transport via terminaux tactiles MDT." },
      { title: "Intégration Back-Office", description: "API REST sécurisée pour synchroniser toutes les données télématiques avec SAP, Sage ou TMS." },
    ],
  },

  why: {
    label: "Avantage Compétitif",
    titlePre: "La référence IoT pour le ",
    titleHl: "Transport Routier",
    paragraph:
      "Depuis 15 ans, CarrierWeb accompagne les plus grandes flottes marocaines de Casablanca, Tanger et Agadir avec une infrastructure technologique propriétaire, robuste et performante.",
    features: [
      { title: "Surveillance 24/7 de vos actifs", description: "Visualisez à tout moment la position, la vitesse et le statut opérationnel de chaque véhicule grâce au réseau GSM multi-opérateurs." },
      { title: "Réduction drastique des dépenses", description: "Éliminez les siphonnages de carburant, réduisez les kilomètres superflus et diminuez les temps d'arrêt moteur excessifs." },
      { title: "Rapports & analyses décisionnels", description: "Générez des rapports automatiques configurés pour vos services d'exploitation, de maintenance et de comptabilité." },
    ],
    metrics: [
      { val: "−25%", label: "De Budget Carburant", desc: "Grâce à notre sonde de réservoir brevetée" },
      { val: "500+", label: "Flottes au Maroc", desc: "Entreprises partenaires qui nous font confiance" },
      { val: "24h/7", label: "Support Proximité", desc: "Équipes techniques basées à Casablanca" },
    ],
    link: "Découvrir notre technologie en détail",
  },

  sectorsHome: {
    label: "Marchés Cibles",
    titlePre: "Quelle réponse pour votre ",
    titleHl: "Secteur d'Activité ?",
    desc: "Transport routier, logistique, BTP ou distribution : chaque métier a ses contraintes, nos modules télématiques et alertes sont configurés pour y répondre.",
    discover: "Découvrir",
    items: [
      { title: "Transport de Marchandises (TIR)", desc: "Solutions adaptées au fret national et international routier (Casablanca-Tanger-Europe)." },
      { title: "Logistique & Supply Chain", desc: "Suivi remorques, interfaçage TMS/WMS et optimisation des rotations inter-entrepôts." },
      { title: "BTP & Infrastructures", desc: "Contrôle d'utilisation moteur, géorepérage anti-vol de carburant et d'engins lourds." },
      { title: "Distribution & FMCG", desc: "Optimisation de tournées en zones urbaines et chaîne du froid des produits périssables." },
    ],
  },

  dashboard: {
    label: "Interface Client",
    titlePre: "Que voyez-vous dans votre ",
    titleHl: "Tableau de Bord ?",
    desc: "Visualisez instantanément toutes les données logistiques clés de votre entreprise sur une interface unique accessible en ligne.",
    features: [
      { text: "Surveillance 24h/24 & 7j/7", description: "Cartes en temps réel montrant les positions exactes, les trajets et les arrêts." },
      { text: "Alertes Intelligentes Immédiates", description: "Notifications instantanées par SMS et e-mail en cas de baisse suspecte de gazole." },
      { text: "Rapports d'Exploitation et Carburant", description: "Analysez le temps de conduite, les excès de vitesse et l'efficacité du parc." },
    ],
    kpiLabels: ["Véhicules en ligne", "Alertes carburant", "Chaîne du froid"],
    vehicleTag: "Camion 12 — 84 km/h",
    vehicleRoute: "Casablanca → Tanger",
    demoData: "Données de démonstration",
    badge: "Accès Web, iOS & Android",
  },

  partners: {
    line: "Boîtiers compatibles avec toutes les marques de camions et utilitaires",
  },

  testimonials: {
    label: "Avis Clients",
    titlePre: "Ils nous font ",
    titleHl: "Confiance",
    note: "Retours clients anonymisés — les identités sont communiquées sur demande, avec l'accord des intéressés.",
    prevAria: "Avis précédent",
    nextAria: "Avis suivant",
    goToAria: "Aller au témoignage",
    items: [
      {
        quote:
          "Les sondes carburant ont mis fin aux écarts inexpliqués entre le gazole acheté et les kilomètres parcourus. En trois mois, nous avons identifié deux cas de siphonnage et réduit sensiblement notre budget carburant.",
        author: "Directeur d'Exploitation",
        role: "Transport routier de marchandises",
        company: "Casablanca",
      },
      {
        quote:
          "Avec le ReeferMate™, chaque livraison frigorifique part avec son rapport de température certifié. Nos clients de la grande distribution ne contestent plus la chaîne du froid, et les audits ONSSA se passent sans stress.",
        author: "Responsable Qualité",
        role: "Logistique frigorifique",
        company: "Agadir",
      },
      {
        quote:
          "L'API CarrierWeb alimente directement notre TMS : positions, kilométrages et statuts de livraison remontent sans double saisie. Notre exploitation et notre facturation travaillent enfin sur les mêmes chiffres.",
        author: "Directeur des Systèmes d'Information",
        role: "Supply chain & distribution",
        company: "Tanger",
      },
    ],
  },

  homeFaq: {
    label: "Questions Fréquentes",
    titlePre: "Besoin d'un ",
    titleHl: "Éclaircissement ?",
    desc: "Retrouvez les réponses aux questions les plus courantes sur notre technologie et nos services d'accompagnement au Maroc.",
    items: [
      {
        q: "Comment optimiser la consommation de carburant de sa flotte au Maroc ?",
        a: "CarrierWeb installe des sondes capacitives calibrées de précision dans les réservoirs de vos camions. Reliées à l'ordinateur de bord, elles comparent la consommation théorique à la consommation réelle, détectent instantanément les siphonnages (alertes SMS en moins de 30s) et tracent les heures de ralenti moteur excessif.",
      },
      {
        q: "Quel est le coût d'un système de géolocalisation GPS pour camion au Maroc ?",
        a: "Le tarif est basé sur un abonnement mensuel par véhicule connecté qui comprend la location du matériel, l'accès à la plateforme en ligne illimitée, les alertes et le support technique. L'installation physique est réalisée par nos équipes à Casablanca ou directement dans vos dépôts.",
      },
      {
        q: "CarrierWeb est-il compatible avec les règles sanitaires de l'ONSSA ?",
        a: "Oui, notre boîtier ReeferMate™ est homologué et certifié conforme EN 12830 / HACCP. Il transmet en continu la température de vos remorques et génère des graphiques PDF certifiés infalsifiables, parfaits pour les audits réglementaires et l'exportation.",
      },
      {
        q: "Comment fonctionne le support technique et local au Maroc ?",
        a: "Notre service client et nos techniciens d'installation sont basés à Casablanca. Nous offrons une assistance téléphonique disponible 24h/24 et 7j/7 pour les urgences d'exploitation ainsi qu'une garantie matérielle totale avec remplacement sous 24 heures.",
      },
    ],
  },

  cta: {
    label: "Prêt à démarrer ?",
    titlePre: "Optimisez les opérations de votre flotte ",
    titleHl: "Dès Aujourd'hui",
    desc: "Rejoignez les leaders du transport et de la logistique au Maroc qui font confiance à CarrierWeb pour piloter, sécuriser et rentabiliser leur parc.",
    button: "Demander une Démo Gratuite",
  },

  listing: {
    solutions: {
      breadcrumb: "Solutions",
      label: "Nos Offres",
      h1Pre: "Solutions Télématiques & ",
      h1Hl: "IoT",
      desc: "Explorez nos outils de pointe conçus pour optimiser, sécuriser et rentabiliser votre flotte de transport et logistique sur le marché marocain.",
      crossTitle: "Vous préférez partir de votre métier ?",
      crossDesc: "Transport routier, logistique, BTP ou distribution : découvrez les solutions recommandées pour votre secteur d'activité.",
      crossCta: "Voir les secteurs",
    },
    sectors: {
      breadcrumb: "Secteurs",
      label: "Secteurs",
      h1Pre: "Nos Solutions par ",
      h1Hl: "Métier",
      desc: "Parce que chaque secteur a ses exigences propres, CarrierWeb conçoit des solutions de gestion de flotte spécialisées pour répondre aux défis du marché au Maroc.",
      seeMore: "Voir la solution métier",
      crossTitle: "Vous cherchez une technologie précise ?",
      crossDesc: "Suivi GPS, sonde carburant, ReeferMate™, terminaux chauffeurs ou API : parcourez nos 6 solutions télématiques.",
      crossCta: "Voir les solutions",
    },
  },

  solutionDetail: {
    badge: "Solution CarrierWeb",
    ctaDemo: "Demander une démo",
    featuresLabel: "Fonctionnalités",
    featuresTitle: "Ce que cette solution fait pour votre flotte",
    specsLabel: "Fiche technique",
    testimonialLabel: "Témoignage client",
    faqLabel: "Questions fréquentes",
    faqTitle: "Vous vous demandez peut-être…",
    seoLabel: "Expertise locale au Maroc",
    ctaBoxTitle: "Prêt à équiper votre flotte ?",
    ctaBoxDesc: "Étude gratuite de votre parc par notre agence de Casablanca.",
    relatedLabel: "Continuez votre exploration",
    relatedTitle: "Découvrez nos autres solutions télématiques",
  },

  sectorDetail: {
    badge: "SECTEUR",
    useCasesTitle: "Cas d'usages Recommandés",
    useCasesDesc: "Comment nos technologies répondent à vos contraintes opérationnelles.",
    challengesTitle: "Vos Enjeux Métiers",
    expertiseTitle: "Expertise Sectorielle Maroc",
    recommendedTitle: "Solutions adaptées",
    expertBoxTitle: "Parler à un Expert",
    expertBoxDesc: "Nos ingénieurs logistiques étudient avec vous les besoins techniques propres à votre métier.",
    expertBoxCta: "Demander un rendez-vous",
    relatedLabel: "Autres secteurs",
    relatedTitle: "CarrierWeb accompagne aussi ces métiers",
  },

  whyPage: {
    breadcrumb: "Pourquoi CarrierWeb",
    label: "MATÉRIEL & LOGICIEL",
    h1: "Notre Technologie",
    tagline: "Une infrastructure IoT performante et robuste pour piloter vos actifs au Maroc.",
    specsTitle: "Spécifications Matérielles & Réseau",
    specsDesc: "Conçu pour répondre aux contraintes du transport professionnel.",
    specs: [
      { title: "Technologie Embarquée Propriétaire", desc: "Ordinateurs de bord et boîtiers GPS conçus spécifiquement pour résister aux conditions routières extrêmes." },
      { title: "Connectivité Multi-Opérateurs", desc: "Basculement automatique entre les principaux réseaux télécoms marocains pour garantir zéro zone blanche." },
      { title: "Sécurité & Robustesse", desc: "Boîtiers renforcés et inviolables avec alertes instantanées en cas de sabotage ou de débranchement." },
      { title: "Hébergement Cloud Sécurisé", desc: "Serveurs redondés à haute disponibilité assurant un accès en ligne 24h/24 et 7j/7." },
    ],
    perfTitle: "Performance & Précision",
    perfP1: "Contrairement aux solutions de géolocalisation classiques basées sur de simples traceurs d'importation, CarrierWeb conçoit et développe son propre écosystème matériel (ordinateur de bord, sonde ReeferMate™) et logiciel.",
    perfP2: "Cette maîtrise totale garantit une collecte de données de haute précision sur l'état du véhicule, la température des remorques frigorifiques et la consommation réelle de gazole sans perturber l'ordinateur de bord d'origine du constructeur.",
    checks: [
      "Matériel certifié CE et homologué ANRT au Maroc",
      "Mises à jour firmware automatiques et à distance (OTA)",
      "Installation physique par nos techniciens qualifiés à Casablanca",
    ],
    sideTitle: "Pourquoi CarrierWeb",
    sideBlocks: [
      { title: "Rentabilité (ROI)", desc: "Réduisez le ralenti moteur et le budget carburant de votre flotte de 15% en moyenne." },
      { title: "API ouverte", desc: "Connectez facilement nos données de trajet et température à SAP, Sage ou votre TMS." },
      { title: "Support de proximité", desc: "Bénéficiez de la présence de nos équipes de techniciens d'assistance à Casablanca." },
    ],
  },

  resources: {
    breadcrumb: "Ressources",
    label: "Ressources",
    h1Pre: "Ressources & Guides ",
    h1Hl: "Télématiques",
    desc: "Analyses sectorielles, bonnes pratiques et guides d'optimisation logistique dédiés au marché du transport au Maroc et en Afrique.",
    minRead: "min",
    read: "Lire l'article",
    newsletterTitle: "Abonnez-vous à notre newsletter logistique",
    newsletterDesc: "Recevez directement dans votre boîte mail nos prochains conseils et actualités de la gestion de flotte au Maroc.",
    newsletterCta: "S'abonner par e-mail",
  },

  articlePage: {
    minRead: "min de lecture",
    takeaways: "À retenir",
    relatedTitle: "Solutions liées à cet article",
    ctaTitle: "Une question sur votre flotte ?",
    ctaDesc: "Étude gratuite de votre parc par notre agence de Casablanca.",
    ctaButton: "Demander une démo",
    continueReading: "Poursuivre la lecture",
  },

  contact: {
    breadcrumb: "Contact",
    label: "Contact",
    h1Pre: "Parlons de Votre ",
    h1Hl: "Projet",
    desc: "Une question, besoin d'une étude de rentabilité ou d'une démonstration personnalisée gratuite de notre plateforme ? Notre équipe à Casablanca vous répond.",
    infoTitle: "Coordonnées",
    addressLabel: "Adresse",
    addressValue: "39 rue Normandie, 20000 Casablanca, Maroc",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    availabilityLabel: "Disponibilité",
    availability1: "Support technique : 24h/24, 7j/7",
    availability2: "Bureaux commerciaux : Lundi au Samedi (09:00 - 18:00)",
    clientBoxTitle: "Déjà client CarrierWeb ?",
    clientBoxDesc: "Notre assistance technique à Casablanca se tient à votre entière disposition pour l'installation de matériel ou toute question sur la plateforme.",
    clientBoxCta: "Accéder à l'Espace Client",
    waTitle: "Contact direct WhatsApp",
    waDesc: "Envoyez un message rapide à notre service commercial. Réponses sous quelques minutes.",
    waCta: "Démarrer la discussion",
    formTitle: "Envoyer un message",
    nameLabel: "Nom complet",
    namePh: "Ex: Omar Bensalah",
    companyLabel: "Nom de l'entreprise",
    companyPh: "Ex: Transit Express",
    emailFieldLabel: "Adresse e-mail",
    emailPh: "Ex: contact@entreprise.ma",
    phoneFieldLabel: "Téléphone portable",
    phonePh: "Ex: +212 600 000 000",
    fleetLabel: "Taille de votre flotte (nombre de véhicules)",
    fleetOptions: ["De 1 à 5 véhicules", "De 6 à 20 véhicules", "De 21 à 50 véhicules", "Plus de 50 véhicules"],
    messageLabel: "Votre message",
    messagePh: "Comment pouvons-nous vous aider ?",
    submit: "Envoyer la demande",
    successTitle: "Votre messagerie s'est ouverte",
    successBody: "Votre demande a été pré-remplie dans votre client e-mail : il ne reste qu'à l'envoyer. Si rien ne s'est ouvert, écrivez-nous directement à",
    successOr: "ou appelez le",
    sendAnother: "Envoyer un autre message",
    sending: "Envoi en cours…",
    sentTitle: "Message envoyé",
    sentBody: "Merci ! Votre demande a bien été transmise à notre équipe. Nous vous répondrons dans les plus brefs délais. Pour toute urgence, écrivez-nous à",
  },

  clientArea: {
    breadcrumb: "Espace Client",
    label: "Espace Client",
    h1Pre: "Accès à la Plateforme ",
    h1Hl: "CarrierWeb",
    desc: "Bienvenue sur votre portail d'accès. Connectez-vous en toute sécurité pour superviser vos véhicules, analyser vos données de carburant et gérer vos missions logistiques.",
    portalTitle: "Connexion au portail",
    portalDesc: "Cette page est une passerelle : la connexion s'effectue sur la plateforme sécurisée CarrierWeb (nouvel onglet). Une fois connecté, vous retrouvez :",
    features: [
      "Position temps réel de chaque véhicule sur carte",
      "Rapports carburant, trajets et temps de conduite",
      "Alertes siphonnage, température et géorepérage",
      "Historique et exports pour votre exploitation",
    ],
    securityNote: "Vos identifiants et clés de sécurité de compte sont strictement confidentiels. Ne les communiquez jamais à des tiers.",
    openPortal: "Ouvrir l'Espace Client Sécurisé",
    helpTitle: "Difficultés de connexion ?",
    helpDesc: "Si vous avez perdu votre mot de passe, si votre compte est verrouillé ou si vous rencontrez une anomalie de connexion, contactez notre hotline d'assistance technique à Casablanca.",
    supportTitle: "Support Local Casablanca",
    byPhone: "Par téléphone :",
    byEmail: "Par e-mail :",
    supportNote: "Assistance technique disponible 24h/24 et 7j/7 pour les clients sous contrat.",
  },

  auth: {
    backHome: "Accueil",
    login: {
      title: "Connexion",
      subtitle: "Accédez à votre espace flotte : suivi GPS temps réel, carburant, chaîne du froid et alertes.",
      noAccount: "Pas encore de compte ?",
      createAccount: "Créer un compte",
      emailLabel: "Adresse e-mail",
      emailPh: "vous@entreprise.ma",
      passwordLabel: "Mot de passe",
      forgot: "Mot de passe oublié ?",
      remember: "Rester connecté sur cet appareil",
      showPwd: "Afficher le mot de passe",
      hidePwd: "Masquer le mot de passe",
      errEmail: "Veuillez saisir une adresse e-mail valide.",
      errPwd: "Le mot de passe doit contenir au moins 6 caractères.",
      loading: "Redirection sécurisée…",
      submit: "Se connecter",
      note: "L'authentification est assurée par la plateforme sécurisée CarrierWeb : vous y êtes redirigé pour vous connecter. Vos identifiants ne transitent pas par ce site.",
    },
    register: {
      title: "Créer un compte",
      subtitle: "Demandez l'ouverture de votre Espace Client pour piloter votre flotte en temps réel.",
      already: "Déjà client ?",
      signIn: "Se connecter",
      companyLabel: "Entreprise",
      companyPh: "Ex : Atlas Transports",
      nameLabel: "Nom complet",
      namePh: "Ex : Omar Bensalah",
      emailLabel: "E-mail professionnel",
      emailPh: "vous@entreprise.ma",
      phoneLabel: "Téléphone",
      phonePh: "+212 6 00 00 00 00",
      passwordLabel: "Mot de passe",
      passwordPh: "8 caractères minimum",
      confirmLabel: "Confirmer le mot de passe",
      confirmPh: "Ressaisir le mot de passe",
      errNames: "Merci d'indiquer votre entreprise et votre nom.",
      errEmail: "Veuillez saisir une adresse e-mail valide.",
      errPwdLen: "Le mot de passe doit contenir au moins 8 caractères.",
      errMatch: "Les deux mots de passe ne correspondent pas.",
      submit: "Créer mon compte",
      note: "Votre demande est transmise à notre équipe pour activation. Votre mot de passe n'est jamais envoyé par e-mail.",
      sentTitle: "Demande envoyée",
      sentSubtitle: "Votre demande de compte a bien été enregistrée.",
      backHomeLink: "Retour à l'accueil",
      sentBody: "Votre messagerie s'est ouverte avec votre demande pré-remplie : il ne reste qu'à l'envoyer. Un conseiller CarrierWeb à Casablanca activera votre accès à la plateforme et vous recontactera.",
      sentFallback: "Rien ne s'est ouvert ? Écrivez-nous à",
    },
  },
};

export default fr;
