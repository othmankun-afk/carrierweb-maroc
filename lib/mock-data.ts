import { Solution, Sector } from "./types";

/**
 * Fallback content — identical to what used to be hardcoded directly in the
 * page components. This lets the site build and run correctly even before
 * WordPress is set up, and acts as a safety net if a WP request ever fails.
 *
 * Once WordPress is live, getAllSolutions()/getAllSectors() in
 * lib/wordpress.ts fetch real content and this file is no longer used
 * (but is kept around as the fallback).
 */

export const mockSolutions: Solution[] = [
  {
    slug: "gestion-flotte",
    title: "Gestion de Flotte",
    icon: "bar-chart-3",
    tagline: "Optimisation globale et réduction des coûts opérationnels au Maroc.",
    shortDescription:
      "Un tableau de bord complet pour analyser l'utilisation, optimiser les trajets et planifier la maintenance préventive de vos véhicules au Maroc.",
    description:
      "Une visibilité complète sur l'ensemble de vos actifs pour prendre des décisions éclairées, améliorer la productivité et réduire le TCO (Total Cost of Ownership) de votre parc de véhicules.",
    stats: [
      { value: "−25%", label: "Réduction des coûts", icon: "trending-down" },
      { value: "500+", label: "Flottes gérées au Maroc", icon: "bar-chart-3" },
      { value: "24/7", label: "Surveillance continue", icon: "clock" },
      { value: "99.9%", label: "Disponibilité plateforme", icon: "shield" },
    ],
    features: [
      { title: "Tableau de Bord Live", desc: "Visualisez toute votre flotte sur un écran unique, en temps réel.", icon: "bar-chart-3" },
      { title: "Rapports Automatisés", desc: "Consultez les heures de conduite, arrêts et kilométrage parcouru.", icon: "zap" },
      { title: "Maintenance Préventive", desc: "Planifiez les révisions selon le kilométrage réel et réduisez les pannes.", icon: "shield" },
      { title: "Analyse Conducteurs", desc: "Identifiez les comportements risqués pour améliorer la sécurité routière.", icon: "check-circle-2" },
    ],
    specs: [
      { label: "Fréquence de mise à jour", value: "Toutes les 10 secondes" },
      { label: "Historique conservé", value: "24 mois" },
      { label: "Format des rapports", value: "PDF / Excel / API" },
      { label: "Accès mobile", value: "iOS & Android" },
      { label: "Nombre de véhicules", value: "Illimité" },
      { label: "Alertes personnalisées", value: "Oui (SMS, Email, Push)" },
    ],
    testimonial: {
      quote:
        "CarrierWeb nous a permis de réduire notre budget opérationnel de 22% dès la première année. Le tableau de bord est clair et nos gestionnaires de flotte ont été formés en une demi-journée.",
      author: "Directeur Logistique",
      company: "Société de Transport — Casablanca",
    },
    faq: [
      { question: "Combien de temps dure l'installation ?", answer: "L'installation d'un boîtier GPS CarrierWeb prend entre 30 minutes et 2 heures par véhicule. Nos techniciens basés à Casablanca interviennent directement dans votre parc." },
      { question: "Peut-on gérer plusieurs agences depuis un seul compte ?", answer: "Oui, la plateforme CarrierWeb supporte une architecture multi-sites. Vous pouvez gérer plusieurs dépôts, agences et sous-comptes depuis un seul tableau de bord principal." },
      { question: "Comment se fait la facturation ?", answer: "Notre facturation est mensuelle par véhicule connecté. Nous proposons des formules annuelles avec une réduction pour les flottes de plus de 20 véhicules." },
    ],
    benefits: [
      { title: "Réduction des coûts", desc: "Diminuez les kilomètres inutiles et optimisez l'utilisation des véhicules." },
      { title: "Conformité locale", desc: "Conforme aux normes de transport routier au Maroc (ANRT, MTIT)." },
    ],
    seoRichContent:
      "CarrierWeb Maroc propose un système de gestion de flotte avancé spécialement adapté aux routes et contraintes logistiques marocaines. Notre plateforme aide les entreprises à Casablanca, Tanger et Agadir à numériser leur gestion de flotte pour un ROI mesurable dès les premiers mois.",
  },
  {
    slug: "suivi-gps",
    title: "Suivi GPS Temps Réel",
    icon: "map-pin",
    tagline: "Localisation précise et suivi d'itinéraire partout au Maroc.",
    shortDescription:
      "Visualisez en temps réel et avec une précision absolue la position géographique de chaque camion de votre parc n'importe où au Maroc.",
    description:
      "Suivez vos véhicules minute par minute sur des cartes interactives haute précision. Améliorez la satisfaction de vos clients en leur fournissant des heures d'arrivée (ETA) fiables.",
    stats: [
      { value: "<5m", label: "Précision de localisation", icon: "map-pin" },
      { value: "0", label: "Zone blanche au Maroc", icon: "shield" },
      { value: "10s", label: "Fréquence de mise à jour", icon: "zap" },
      { value: "12 mois", label: "Historique des trajets", icon: "clock" },
    ],
    features: [
      { title: "Position Seconde par Seconde", desc: "Géolocalisation haute fidélité pour une visibilité totale sur vos itinéraires.", icon: "map-pin" },
      { title: "Historique Complet", desc: "Consultez et rejouez n'importe quel trajet des 12 derniers mois.", icon: "clock" },
      { title: "Alertes Géofencing", desc: "Soyez notifié dès qu'un véhicule entre ou sort d'une zone définie.", icon: "shield" },
      { title: "ETA en temps réel", desc: "Informez vos clients de l'heure d'arrivée estimée automatiquement.", icon: "zap" },
    ],
    specs: [
      { label: "Technologie GPS", value: "GPS + GLONASS + Galileo" },
      { label: "Précision", value: "< 5 mètres" },
      { label: "Couverture réseau", value: "Maroc 100% + International" },
      { label: "Fréquence de relevé", value: "Toutes les 10 secondes" },
      { label: "Mode hors-ligne", value: "Oui (mémoire embarquée)" },
      { label: "Géofencing", value: "Zones illimitées par compte" },
    ],
    testimonial: {
      quote:
        "Grâce au suivi GPS CarrierWeb, nous avons résolu un litige client en quelques minutes simplement en montrant l'historique de trajet exact. La preuve était irréfutable.",
      author: "Responsable Transport",
      company: "Entreprise de distribution — Tanger",
    },
    faq: [
      { question: "Le suivi fonctionne-t-il dans les zones montagneuses (Atlas, Rif) ?", answer: "Oui. Notre technologie multi-opérateurs (Maroc Telecom, Orange, Inwi) garantit une couverture même dans les zones enclavées grâce au basculement automatique vers le réseau le plus disponible." },
      { question: "Peut-on visualiser l'historique des trajets sur carte ?", answer: "Absolument. La plateforme vous permet de rejouer n'importe quel trajet effectué sur les 12 derniers mois avec une ligne d'itinéraire précise, les arrêts et la vitesse à chaque point." },
      { question: "Est-ce compatible avec les camions diesel et électriques ?", answer: "Notre boîtier GPS est universel et compatible avec tous les types de motorisation. L'installation ne nécessite qu'une alimentation 12V/24V." },
    ],
    benefits: [
      { title: "Sécurité accrue", desc: "Retrouvez rapidement tout véhicule déviant de sa trajectoire." },
      { title: "Réactivité client", desc: "Répondez instantanément aux demandes de statut de livraison." },
    ],
    seoRichContent:
      "Grâce à notre puce GPS et connectivité nationale multi-opérateurs au Maroc, le suivi GPS en temps réel CarrierWeb ne subit aucune zone d'ombre. Idéal pour sécuriser le transport de marchandises de valeur sur les axes autoroutiers nationaux.",
  },
  {
    slug: "gestion-carburant",
    title: "Gestion du Carburant",
    icon: "fuel",
    tagline: "Contrôlez et réduisez votre consommation de carburant.",
    shortDescription:
      "Contrôlez et diminuez la consommation de carburant de vos camions de 15% à 25% tout en éliminant les fraudes ou vols de carburant.",
    description:
      "Détectez instantanément les baisses anormales de niveau de carburant, analysez le comportement de conduite et réalisez jusqu'à 25% d'économie.",
    stats: [
      { value: "−25%", label: "Économie de carburant moy.", icon: "trending-down" },
      { value: "±1L", label: "Précision de mesure", icon: "zap" },
      { value: "<30s", label: "Délai d'alerte vol", icon: "clock" },
      { value: "100%", label: "Compatibilité réservoirs", icon: "shield" },
    ],
    features: [
      { title: "Mesure Précise du Niveau", desc: "Sondes calibrées pour une mesure précise à ±1 litre près en temps réel.", icon: "fuel" },
      { title: "Détection des Vols", desc: "Alerte SMS/Email automatique en cas de baisse suspecte du niveau en moins de 30 secondes.", icon: "shield" },
      { title: "Éco-Conduite", desc: "Analysez le ralenti moteur excessif, les freinages brusques et les accélérations.", icon: "trending-down" },
      { title: "Rapports Détaillés", desc: "Consommation moyenne par trajet, chauffeur et type de route exportable en PDF.", icon: "bar-chart-3" },
    ],
    specs: [
      { label: "Type de sonde", value: "Résistive ou à ultrasons" },
      { label: "Précision de mesure", value: "±1 litre" },
      { label: "Délai d'alerte", value: "< 30 secondes" },
      { label: "Compatibilité réservoirs", value: "Tous types (acier, plastique)" },
      { label: "Seuil d'alerte configurable", value: "Oui (% ou litres)" },
      { label: "Rapport éco-conduite", value: "Score / 100 par conducteur" },
    ],
    testimonial: {
      quote:
        "En 6 mois, nous avons économisé 180 000 DH sur notre budget gazole. La sonde de carburant CarrierWeb a aussi permis d'identifier deux cas de vol sur chantier.",
      author: "Directeur Administratif",
      company: "Entreprise de BTP — Casablanca",
    },
    faq: [
      { question: "La sonde de carburant endommage-t-elle le réservoir ?", answer: "Non. L'installation de la sonde est effectuée par perçage calibré avec joints d'étanchéité professionnels par nos techniciens certifiés. Aucun risque de fuite ou de modification structurelle." },
      { question: "Comment le système détecte-t-il un vol de carburant ?", answer: "En cas de baisse anormale de niveau (supérieure à un seuil que vous définissez) alors que le moteur est éteint, une alerte SMS et email est envoyée immédiatement au gestionnaire de flotte." },
      { question: "Peut-on comparer la consommation entre différents conducteurs ?", answer: "Oui. La plateforme génère un classement éco-conduite par conducteur avec un score sur 100 tenant compte du ralenti, des freinages et des accélérations." },
    ],
    benefits: [
      { title: "Économies immédiates", desc: "Identifiez les comportements coûteux et les anomalies de carburant." },
      { title: "Impact environnemental", desc: "Réduisez l'empreinte carbone globale de votre entreprise." },
    ],
    seoRichContent:
      "Le carburant représente le premier poste de dépense des transporteurs au Maroc. Notre technologie permet un suivi ultra-précis pour éliminer le gaspillage.",
  },
  {
    slug: "controle-temperature",
    title: "Contrôle de Température",
    icon: "thermometer",
    tagline: "Le module ReeferMate™ pour sécuriser la chaîne du froid.",
    shortDescription:
      "Sécurisez et certifiez le transport frigorifique grâce à la surveillance constante de température en temps réel avec le module ReeferMate™.",
    description:
      "Une technologie dédiée au transport frigorifique. Enregistrez et contrôlez en continu la température de vos remorques pour garantir l'intégrité de vos produits thermosensibles.",
    stats: [
      { value: "±0.5°", label: "Précision de mesure", icon: "thermometer" },
      { value: "−40°C", label: "Température min. détectable", icon: "zap" },
      { value: "100%", label: "Conformité ONSSA", icon: "shield" },
      { value: "<60s", label: "Délai d'alerte dépassement", icon: "clock" },
    ],
    features: [
      { title: "Suivi en Continu", desc: "Sondes de température étalonnées ISO avec relevés automatiques toutes les 5 minutes.", icon: "thermometer" },
      { title: "Alertes Immédiates", desc: "SMS et Email en moins de 60 secondes si la température dépasse les seuils définis.", icon: "shield" },
      { title: "Multi-Zones", desc: "Suivez jusqu'à 6 zones de température différentes dans une même remorque.", icon: "zap" },
      { title: "Rapports Certifiés", desc: "Graphiques de température certifiés pour audits ONSSA et exigences clients.", icon: "check-circle-2" },
    ],
    specs: [
      { label: "Norme de certification", value: "EN 12830 / HACCP" },
      { label: "Plage de mesure", value: "−40°C à +85°C" },
      { label: "Précision", value: "±0.5°C" },
      { label: "Nombre de sondes / véhicule", value: "Jusqu'à 6 zones" },
      { label: "Compatibilité groupes frigo", value: "Carrier, Thermo King, Zanotti" },
      { label: "Format rapport", value: "PDF, CSV, API" },
    ],
    testimonial: {
      quote:
        "Depuis le ReeferMate™, aucun litige sur la chaîne du froid. Nos clients reçoivent automatiquement le rapport de température à chaque livraison. C'est un vrai argument commercial.",
      author: "Gérant",
      company: "Transport Frigorifique — Agadir",
    },
    faq: [
      { question: "Les rapports de température sont-ils acceptés par l'ONSSA ?", answer: "Oui. Nos rapports respectent les normes EN 12830 et sont horodatés avec une signature numérique. Ils sont acceptés par l'ONSSA et les clients européens pour les exportations." },
      { question: "Peut-on connecter le système au groupe frigorifique ?", answer: "Oui. Le ReeferMate™ s'intègre directement avec les principaux groupes frigorifiques du marché (Carrier, Thermo King, Zanotti) pour lire les paramètres moteur en plus de la température." },
      { question: "Que se passe-t-il si la connexion réseau est interrompue ?", answer: "Le boîtier enregistre les données localement en mémoire embarquée et les synchronise automatiquement dès que la connexion est rétablie. Aucune perte de données." },
    ],
    benefits: [
      { title: "Garantie qualité", desc: "Zéro litige sur la qualité et la fraîcheur des marchandises livrées." },
      { title: "Conformité ONSSA", desc: "Répondez aux exigences sanitaires marocaines et européennes." },
    ],
    seoRichContent:
      "Avec le développement de l'export agricole et agroalimentaire au Maroc, le contrôle de température par ReeferMate™ de CarrierWeb s'impose comme la solution de référence.",
  },
  {
    slug: "communication-chauffeurs",
    title: "Communication Chauffeurs",
    icon: "message-square",
    tagline: "Restez connecté avec vos conducteurs via nos terminaux MDT.",
    shortDescription:
      "Restez en contact permanent avec vos conducteurs routiers sur le terrain via nos terminaux tactiles embarqués sécurisés MDT.",
    description:
      "Améliorez la productivité et la sécurité de vos chauffeurs grâce à nos terminaux embarqués tactiles. Envoyez des missions détaillées et communiquez sans frais supplémentaires.",
    stats: [
      { value: "0 DH", label: "Coût de communication", icon: "trending-down" },
      { value: "7\"", label: "Écran tactile HD", icon: "zap" },
      { value: "100%", label: "Verrouillage en conduite", icon: "shield" },
      { value: "4G", label: "Connectivité réseau", icon: "clock" },
    ],
    features: [
      { title: "Messagerie Sécurisée", desc: "Messagerie texte bidirectionnelle gratuite entre conducteur et exploitant via réseau data.", icon: "message-square" },
      { title: "Gestion des Missions", desc: "Envoyez ordres de transport, POD et bons de livraison directement sur l'écran embarqué.", icon: "check-circle-2" },
      { title: "Navigation Poids-Lourd", desc: "GPS professionnel intégré adapté au gabarit (hauteur pont, poids axe, zones interdites).", icon: "map-pin" },
      { title: "Sécurité Écran", desc: "Verrouillage automatique de l'interface dès que le véhicule dépasse 5 km/h.", icon: "shield" },
    ],
    specs: [
      { label: "Taille d'écran", value: "7 pouces tactile HD" },
      { label: "Connectivité", value: "4G LTE + WiFi" },
      { label: "Résistance", value: "IP54 anti-poussière/eau" },
      { label: "Alimentation", value: "12V / 24V véhicule" },
      { label: "Navigation", value: "Cartes Maroc + Europe" },
      { label: "Sécurité conduite", value: "Verrouillage > 5 km/h" },
    ],
    testimonial: {
      quote:
        "Avant le MDT, nos chauffeurs appelaient 10 fois par jour. Aujourd'hui, les missions sont envoyées directement sur l'écran et les statuts remontent automatiquement. Énorme gain de temps.",
      author: "Responsable Exploitation",
      company: "Transporteur National — Rabat",
    },
    faq: [
      { question: "Le terminal MDT remplace-t-il le téléphone personnel du chauffeur ?", answer: "Oui. Le terminal CarrierWeb MDT gère toute la communication professionnelle (missions, messages, navigation) sans avoir besoin du téléphone du chauffeur. Cela permet aussi d'éviter l'utilisation du téléphone en conduisant." },
      { question: "Les mises à jour des cartes sont-elles automatiques ?", answer: "Les cartes du Maroc et de l'Europe se mettent à jour automatiquement par connexion WiFi ou réseau 4G sans intervention de votre part." },
      { question: "Que se passe-t-il si le terminal tombe en panne ?", answer: "Nos terminaux sont couverts par une garantie de 2 ans et notre équipe technique à Casablanca intervient sous 24h pour remplacement ou réparation." },
    ],
    benefits: [
      { title: "Zéro papier", desc: "Simplifiez la transmission des documents de transport et des ordres." },
      { title: "Sécurité routière", desc: "L'interface se bloque automatiquement lorsque le camion est en mouvement." },
    ],
    seoRichContent:
      "Les ordinateurs de bord CarrierWeb MDT connectent votre back-office à vos équipes sur le terrain en temps réel partout au Maroc.",
  },
  {
    slug: "integration",
    title: "Intégration Back-Office",
    icon: "settings-2",
    tagline: "Connectez vos données de flotte à votre TMS, ERP ou WMS.",
    shortDescription:
      "Connectez de manière fluide toutes vos données télématiques GPS, carburant et température dans votre TMS ou ERP d'entreprise.",
    description:
      "Une API robuste et documentée pour automatiser le flux d'informations. Éliminez la double saisie et enrichissez vos logiciels de gestion avec nos données télématiques.",
    stats: [
      { value: "REST", label: "API standardisée", icon: "zap" },
      { value: "<200ms", label: "Temps de réponse API", icon: "clock" },
      { value: "99.99%", label: "Disponibilité serveurs", icon: "shield" },
      { value: "Free", label: "Accès à la documentation", icon: "trending-down" },
    ],
    features: [
      { title: "API RESTful Sécurisée", desc: "Accédez à toutes vos données logistiques via des requêtes standardisées avec authentification OAuth2.", icon: "settings-2" },
      { title: "Webhooks Temps Réel", desc: "Recevez les alertes, statuts et positions directement sur votre serveur en temps réel.", icon: "zap" },
      { title: "SDK & Connecteurs", desc: "Connecteurs prêts à l'emploi pour SAP, Sage, Microsoft Dynamics et les principaux TMS.", icon: "check-circle-2" },
      { title: "Exports Automatisés", desc: "Planifiez des exports automatiques quotidiens, hebdomadaires ou mensuels en PDF/CSV.", icon: "bar-chart-3" },
    ],
    specs: [
      { label: "Type d'API", value: "REST (JSON/XML)" },
      { label: "Authentification", value: "OAuth 2.0 / API Key" },
      { label: "Temps de réponse", value: "< 200ms" },
      { label: "Documentation", value: "Swagger / OpenAPI 3.0" },
      { label: "Webhooks", value: "Oui (événements temps réel)" },
      { label: "Sandbox de test", value: "Disponible gratuitement" },
    ],
    testimonial: {
      quote:
        "L'API CarrierWeb s'est connectée à notre ERP SAP en 2 jours. Maintenant, les positions GPS et les kilométrages remontent automatiquement dans notre système de facturation.",
      author: "DSI",
      company: "Groupe Logistique — Casablanca",
    },
    faq: [
      { question: "Existe-t-il un environnement de test (sandbox) ?", answer: "Oui. Nous fournissons un accès sandbox gratuit avec des données simulées pour que votre équipe technique puisse intégrer et tester l'API avant la mise en production." },
      { question: "Quels langages de programmation sont supportés ?", answer: "Notre API REST est compatible avec tous les langages (PHP, Python, JavaScript, Java, C#). Nous fournissons des exemples de code dans les principaux langages dans notre documentation." },
      { question: "Y a-t-il des limites de requêtes API ?", answer: "Les limites de taux dépendent de votre formule d'abonnement. Les formules Enterprise n'ont pas de limites de requêtes. Contactez notre équipe pour les détails." },
    ],
    benefits: [
      { title: "Automatisation totale", desc: "Facturations et paies chauffeurs calculées automatiquement." },
      { title: "Données consolidées", desc: "Centralisez toute votre logistique sur un écran unique." },
    ],
    seoRichContent:
      "CarrierWeb se distingue par sa philosophie de système ouvert. Notre API permet à nos clients au Maroc d'intégrer facilement les données GPS dans leurs ERP.",
  },
];

export const mockSectors: Sector[] = [
  {
    slug: "transport-routier",
    title: "Transport de Marchandises",
    icon: "truck",
    tagline: "Optimisez vos flottes de transport de marchandises et de fret national/international.",
    listingDescription:
      "Solutions adaptées aux flottes de transport de fret national et international (TIR) pour gérer les trajets longues distances.",
    description:
      "Le transport routier de marchandises exige une ponctualité parfaite, une sécurité totale de la cargaison et une gestion optimale des marges de carburant. Nos outils s'adaptent précisément à vos besoins opérationnels.",
    useCases: [
      { title: "Suivi National & TIR", desc: "Suivez les livraisons en temps réel sur les axes Casablanca-Tanger-Europe." },
      { title: "Gestion du Gazole", desc: "Mesurez la consommation réelle et détectez les baisses suspectes de niveau." },
      { title: "Missions & Ordres", desc: "Communiquez directement les trajets et documents aux chauffeurs." },
      { title: "Alertes Retards / ETA", desc: "Partagez automatiquement l'ETA actualisé avec vos clients." },
    ],
    recommendedSolutions: [
      { title: "Suivi GPS Temps Réel", href: "/solutions/suivi-gps" },
      { title: "Gestion du Carburant", href: "/solutions/gestion-carburant" },
      { title: "Communication Chauffeurs", href: "/solutions/communication-chauffeurs" },
    ],
    seoRichContent:
      "Le Maroc est un carrefour stratégique pour le transport de marchandises. De Casablanca à Tanger Med, CarrierWeb Maroc fournit aux transporteurs routiers nationaux et internationaux des outils connectés robustes pour maximiser la rentabilité de leurs trajets longue distance.",
  },
  {
    slug: "logistique",
    title: "Logistique & Supply Chain",
    icon: "container",
    tagline: "Fluidifiez votre chaîne d'approvisionnement et gérez vos remorques intelligemment.",
    listingDescription:
      "Amélioration de la traçabilité des remorques, interfaçage TMS/ERP et fluidification des flux inter-entrepôts.",
    description:
      "Améliorez la visibilité de vos flux logistiques entre les entrepôts, les terminaux portuaires et les clients finaux. Réduisez le temps d'attente à quai et optimisez vos actifs de transport.",
    useCases: [
      { title: "Suivi Remorques (Tethered/Un-tethered)", desc: "Localisez vos remorques même lorsqu'elles ne sont pas accouplées." },
      { title: "Intégration Systèmes WMS/TMS", desc: "Automatisez la transmission des statuts de transport dans vos outils ERP." },
      { title: "Gestion de Chargement", desc: "Réduisez les temps d'inactivité et optimisez les rotations." },
      { title: "Supervision Multi-Plateformes", desc: "Centralisez les flux inter-entrepôts et zones logistiques." },
    ],
    recommendedSolutions: [
      { title: "Gestion de Flotte", href: "/solutions/gestion-flotte" },
      { title: "Intégration Back-Office", href: "/solutions/integration" },
    ],
    seoRichContent:
      "Les plateformes logistiques de Casablanca, de la zone franche de Tanger et des parcs industriels marocains exigent une intégration parfaite des données. CarrierWeb propose des solutions connectées pour une logistique fluide sans interruption.",
  },
  {
    slug: "btp",
    title: "BTP & Construction",
    icon: "hard-hat",
    tagline: "Sécurisez et suivez le taux d'utilisation de vos engins de chantier.",
    listingDescription:
      "Suivi des heures de fonctionnement moteur, géofencing anti-vol et suivi d'engins lourds sur chantiers.",
    description:
      "Localisez vos engins lourds et véhicules utilitaires, prévenez le vol d'équipements et de carburant sur site, et surveillez les heures réelles de fonctionnement moteur.",
    useCases: [
      { title: "Clôtures Virtuelles (Geofencing)", desc: "Configurez des barrières géographiques et soyez alerté des sorties de zone." },
      { title: "Suivi d'Heures Moteur", desc: "Mesurez l'activité exacte de vos générateurs, pelleteuses et bulldozers." },
      { title: "Sécurité & Anti-Démarrage", desc: "Protégez vos engins et stoppez-les à distance en cas d'utilisation illicite." },
      { title: "Rotation Flotte Toupie", desc: "Optimisez la logistique de livraison de béton sur chantier." },
    ],
    recommendedSolutions: [
      { title: "Suivi GPS Temps Réel", href: "/solutions/suivi-gps" },
      { title: "Gestion de Flotte", href: "/solutions/gestion-flotte" },
    ],
    seoRichContent:
      "Le secteur du bâtiment et des travaux publics au Maroc (BTP) requiert un contrôle strict du matériel sur les chantiers d'infrastructure nationaux. La télématique CarrierWeb Maroc prévient les vols et rationalise l'usage du matériel lourd.",
  },
  {
    slug: "distribution",
    title: "Distribution & FMCG",
    icon: "package",
    tagline: "Optimisez vos tournées de distribution urbaines et régionales.",
    listingDescription:
      "Optimisation de tournées urbaines fréquentes, détection d'ouverture de portes et traçabilité de température.",
    description:
      "Assurez des livraisons fréquentes et planifiées tout en gérant les contraintes de livraison urbaines. Surveillez l'ouverture des portes et garantissez la chaîne du froid des produits de grande consommation.",
    useCases: [
      { title: "Optimisation de Tournées", desc: "Déterminez les trajets de distribution les plus rapides en milieu urbain." },
      { title: "Capteurs d'Ouverture de Portes", desc: "Sécurisez les marchandises et détectez les ouvertures imprévues." },
      { title: "Contrôle Chaîne du Froid", desc: "Sondes certifiées ONSSA pour la traçabilité des produits thermosensibles." },
      { title: "Statistiques de Livraison", desc: "Générez des rapports d'efficacité et de ponctualité sur vos points de vente." },
    ],
    recommendedSolutions: [
      { title: "Contrôle de Température", href: "/solutions/controle-temperature" },
      { title: "Suivi GPS Temps Réel", href: "/solutions/suivi-gps" },
    ],
    seoRichContent:
      "La distribution urbaine à Casablanca, Rabat et dans les grandes métropoles marocaines fait face à d'importants défis d'encombrement. Nos outils aident les acteurs de l'agroalimentaire et de la grande distribution à fiabiliser leurs livraisons.",
  },
];
