import type { Dictionary } from "./index";

// English dictionary — same structure as fr.ts (type-checked against it).

const en: Dictionary = {
  common: {
    skipToContent: "Skip to main content",
    home: "Home",
    requestDemo: "Request a Demo",
    requestDemoLong: "Request a free demo",
    talkToExpert: "Talk to an expert",
    learnMore: "Learn more",
    explore: "Explore",
    backToTop: "Back to top",
    themeLightAria: "Switch to light theme",
    themeDarkAria: "Switch to dark theme",
    breadcrumbAria: "Breadcrumb",
    legalFrenchOnly: "Legal document — the French version prevails.",
  },

  meta: {
    rootTitle: "CarrierWeb Morocco — Fleet Management, GPS Tracking & Logistics IoT",
    rootDescription:
      "Discover the new CarrierWeb Morocco. Advanced telematics, real-time GPS tracking, fuel monitoring and certified cold chain (ReeferMate™) for transport fleets in Morocco.",
    ogTitle: "CarrierWeb Morocco — Fleet Management & Transport Telematics",
    ogDescription:
      "Run your fleet in real time. GPS tracking, fuel management, temperature monitoring and driver communication. The reference in Morocco and Africa.",
    solutions: {
      title: "Telematics & IoT Solutions for Fleets",
      description:
        "Real-time GPS tracking, fuel management, ReeferMate™ cold chain, driver communication and ERP integration: the 6 CarrierWeb solutions for Moroccan fleets.",
    },
    sectors: {
      title: "Industries — Transport, Logistics, Construction, Distribution",
      description:
        "Fleet management solutions tailored to each industry in Morocco: TIR road transport, logistics & supply chain, construction and FMCG distribution.",
    },
    why: {
      title: "Why CarrierWeb? Technology & Hardware",
      description:
        "Proprietary GPS units, multi-carrier connectivity (IAM, Orange, Inwi), ReeferMate™ probe and secure cloud: discover CarrierWeb technology for Moroccan fleets.",
    },
    resources: {
      title: "Resources & Guides — Fleet Management in Morocco | CarrierWeb",
      description:
        "Practical guides and analyses on telematics in Morocco: fuel savings, ONSSA cold chain compliance, TMS/ERP integration.",
    },
    contact: {
      title: "Contact & Demo Request",
      description:
        "Request a free demo or a profitability study for your fleet. CarrierWeb Morocco in Casablanca: +212 (0)5 22 36 19 88, info@carrierweb.ma, WhatsApp.",
    },
    clientArea: {
      title: "Client Area — Access my fleet",
      description:
        "Log in to the CarrierWeb platform to track your vehicles in real time, review fuel reports and manage alerts. Local support in Casablanca.",
    },
    login: {
      title: "Sign in — Client Area",
      description:
        "Sign in to your CarrierWeb fleet area: real-time GPS tracking, fuel, cold chain and alerts.",
    },
    register: {
      title: "Create an account — Client Area",
      description:
        "Request your CarrierWeb Client Area to run your fleet in real time in Morocco.",
    },
  },

  header: {
    nav: {
      home: "Home",
      solutions: "Solutions",
      sectors: "Industries",
      why: "Why us",
      resources: "Resources",
      contact: "Contact",
    },
    solutionItems: [
      { label: "Fleet Management", desc: "Optimisation and cost reduction" },
      { label: "Real-Time GPS Tracking", desc: "Precise location of every vehicle" },
      { label: "Fuel Management", desc: "Monitoring and theft detection" },
      { label: "Temperature Monitoring", desc: "ReeferMate™ cold chain" },
      { label: "Driver Communication", desc: "In-cab MDT terminals" },
      { label: "Back-Office Integration", desc: "REST API and ERP connectors" },
    ],
    sectorItems: [
      "Freight Transport",
      "Logistics & Supply Chain",
      "Construction",
      "Distribution & FMCG",
    ],
    seeAllSolutions: "See all solutions",
    login: "Sign in",
    createAccount: "Create an account",
    clientPortal: "Client Area — real-time platform",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    expand: "Expand",
    collapse: "Collapse",
    logoAria: "CarrierWeb Morocco — back to home",
    langSwitchAria: "Change language",
  },

  footer: {
    blurb:
      "Advanced on-board telematics, GPS tracking and fuel management solutions for transport fleets in Morocco.",
    solutionsTitle: "Solutions",
    allSolutions: "All solutions →",
    navTitle: "Navigation",
    navWhy: "Why CarrierWeb",
    navSectors: "Industries",
    navResources: "Resources & Guides",
    navContact: "Contact us",
    navClientArea: "Client Area",
    supportTitle: "Client Access & Support",
    portalCta: "Client Area — Access my fleet",
    supportBlurb:
      "Urgent question or technical support needed? Our teams can be reached directly.",
    whatsapp: "WhatsApp Contact",
    rights: "© 2026 CarrierWeb Morocco. All rights reserved.",
    legal: "Legal Notice",
    privacy: "Privacy Policy",
  },

  hero: {
    label: "Telematics & fleet management in Morocco",
    titleA: "Run your fleet",
    titleBpre: "in ",
    titleBhl: "real time",
    titleC: "Cut your costs",
    subtitle:
      "GPS tracking, fuel monitoring, certified cold chain and driver communication: CarrierWeb equips Moroccan carriers and logistics providers, from Casablanca to Tanger Med.",
    ctaPrimary: "Request a free demo",
    ctaSecondary: "Discover our solutions",
    proofs: [
      "Up to −25% on fuel spend",
      "Fleet tracked 24/7 in real time",
      "Local support in Casablanca",
    ],
    imgAlt: "CarrierWeb-branded transport truck on a Moroccan coastal highway",
    sectionAria: "CarrierWeb Morocco overview",
  },

  trustBar: [
    { label: "ANRT Morocco approved", desc: "Certified compliant hardware" },
    { label: "Multi-network GSM", desc: "IAM / Orange / Inwi" },
    { label: "Local support in Casablanca", desc: "24/7 technical assistance" },
    { label: "15+ years of expertise", desc: "Transport IoT leader" },
  ],

  videoShowcase: {
    label: "The platform in video",
    titlePre: "See ",
    titleHl: "CarrierWeb",
    titlePost: " in action",
    desc: "In just a few seconds, discover how our platform centralises your fleet monitoring: real-time tracking, alerts and reports, in an interface built for your teams.",
    videoAlt: "Video demonstration of the CarrierWeb Maroc platform",
  },

  services: {
    label: "Telematics Solutions",
    titlePre: "Which solutions make ",
    titleHl: "your fleet profitable?",
    desc: "Six connected solutions, from GPS tracking to ERP integration, to cut operating costs and secure your transport operations in Morocco.",
    discover: "Discover the solution",
    items: [
      { title: "Fleet Management", description: "Analyse overall usage, plan preventive maintenance and optimise your logistics budgets." },
      { title: "Real-Time GPS Tracking", description: "High-precision minute-by-minute tracking across Morocco and cross-border (TIR)." },
      { title: "Fuel Management", description: "Tank probes accurate to ±1L, instant siphoning detection and eco-driving reports." },
      { title: "Temperature Monitoring", description: "Certify cold chain integrity (ReeferMate™), ONSSA-compliant, with alerts." },
      { title: "Driver Communication", description: "Messaging, professional truck navigation and transport orders via MDT touch terminals." },
      { title: "Back-Office Integration", description: "Secure REST API to sync all telematics data with SAP, Sage or your TMS." },
    ],
  },

  why: {
    label: "Competitive Advantage",
    titlePre: "The IoT reference for ",
    titleHl: "Road Transport",
    paragraph:
      "For 15 years, CarrierWeb has supported Morocco's largest fleets in Casablanca, Tangier and Agadir with proprietary, robust and high-performance technology.",
    features: [
      { title: "24/7 monitoring of your assets", description: "See the position, speed and operational status of every vehicle at any time thanks to the multi-carrier GSM network." },
      { title: "Drastic cost reduction", description: "Eliminate fuel siphoning, cut unnecessary kilometres and reduce excessive engine idling." },
      { title: "Decision-ready reports & analytics", description: "Generate automatic reports configured for your operations, maintenance and accounting teams." },
    ],
    metrics: [
      { val: "−25%", label: "Fuel budget", desc: "Thanks to our patented tank probe" },
      { val: "500+", label: "Fleets in Morocco", desc: "Partner companies that trust us" },
      { val: "24/7", label: "Local support", desc: "Technical teams based in Casablanca" },
    ],
    link: "Discover our technology in detail",
  },

  sectorsHome: {
    label: "Target Markets",
    titlePre: "What answer for your ",
    titleHl: "Industry?",
    desc: "Road transport, logistics, construction or distribution: every business has its constraints — our telematics modules and alerts are configured to meet them.",
    discover: "Discover",
    items: [
      { title: "Freight Transport (TIR)", desc: "Solutions for national and international road freight (Casablanca–Tangier–Europe)." },
      { title: "Logistics & Supply Chain", desc: "Trailer tracking, TMS/WMS integration and optimised inter-warehouse rotations." },
      { title: "Construction & Infrastructure", desc: "Engine-hour monitoring, geofencing against fuel and heavy equipment theft." },
      { title: "Distribution & FMCG", desc: "Urban route optimisation and cold chain for perishable goods." },
    ],
  },

  dashboard: {
    label: "Client Interface",
    titlePre: "What do you see in your ",
    titleHl: "Dashboard?",
    desc: "Instantly visualise all your company's key logistics data on a single online interface.",
    features: [
      { text: "24/7 monitoring", description: "Real-time maps showing exact positions, routes and stops." },
      { text: "Instant smart alerts", description: "Immediate SMS and e-mail notifications on suspicious fuel drops." },
      { text: "Operations & fuel reports", description: "Analyse driving time, speeding and fleet efficiency." },
    ],
    kpiLabels: ["Vehicles online", "Fuel alerts", "Cold chain"],
    vehicleTag: "Truck 12 — 84 km/h",
    vehicleRoute: "Casablanca → Tangier",
    demoData: "Demo data",
    badge: "Web, iOS & Android access",
  },

  partners: {
    line: "Units compatible with all truck and van brands",
  },

  testimonials: {
    label: "Client Reviews",
    titlePre: "They put their ",
    titleHl: "Trust in us",
    note: "Anonymised client feedback — identities shared on request, with their consent.",
    prevAria: "Previous review",
    nextAria: "Next review",
    goToAria: "Go to testimonial",
    items: [
      {
        quote:
          "The fuel probes put an end to unexplained gaps between diesel purchased and kilometres driven. Within three months we identified two siphoning cases and significantly reduced our fuel budget.",
        author: "Operations Director",
        role: "Road freight transport",
        company: "Casablanca",
      },
      {
        quote:
          "With ReeferMate™, every refrigerated delivery leaves with its certified temperature report. Our retail clients no longer dispute the cold chain, and ONSSA audits go smoothly.",
        author: "Quality Manager",
        role: "Refrigerated logistics",
        company: "Agadir",
      },
      {
        quote:
          "The CarrierWeb API feeds our TMS directly: positions, mileage and delivery statuses flow in with no double entry. Operations and invoicing finally work with the same figures.",
        author: "Chief Information Officer",
        role: "Supply chain & distribution",
        company: "Tangier",
      },
    ],
  },

  homeFaq: {
    label: "Frequently Asked Questions",
    titlePre: "Need some ",
    titleHl: "Clarity?",
    desc: "Find answers to the most common questions about our technology and support services in Morocco.",
    items: [
      {
        q: "How can I optimise my fleet's fuel consumption in Morocco?",
        a: "CarrierWeb installs precision-calibrated capacitive probes in your trucks' tanks. Linked to the on-board computer, they compare theoretical vs actual consumption, instantly detect siphoning (SMS alerts in under 30s) and log excessive engine idling hours.",
      },
      {
        q: "How much does a GPS tracking system for trucks cost in Morocco?",
        a: "Pricing is a monthly subscription per connected vehicle covering hardware rental, unlimited online platform access, alerts and technical support. Physical installation is carried out by our teams in Casablanca or directly at your depots.",
      },
      {
        q: "Is CarrierWeb compliant with ONSSA sanitary rules?",
        a: "Yes, our ReeferMate™ unit is approved and certified EN 12830 / HACCP compliant. It continuously transmits your trailers' temperature and generates certified tamper-proof PDF charts, ideal for regulatory audits and exports.",
      },
      {
        q: "How does local technical support work in Morocco?",
        a: "Our customer service and installation technicians are based in Casablanca. We provide 24/7 phone assistance for operational emergencies plus a full hardware warranty with replacement within 24 hours.",
      },
    ],
  },

  cta: {
    label: "Ready to start?",
    titlePre: "Optimise your fleet operations ",
    titleHl: "Starting Today",
    desc: "Join Morocco's transport and logistics leaders who trust CarrierWeb to run, secure and monetise their fleet.",
    button: "Request a Free Demo",
  },

  listing: {
    solutions: {
      breadcrumb: "Solutions",
      label: "Our Offering",
      h1Pre: "Telematics & ",
      h1Hl: "IoT Solutions",
      desc: "Explore our advanced tools designed to optimise, secure and monetise your transport and logistics fleet on the Moroccan market.",
      crossTitle: "Prefer to start from your industry?",
      crossDesc: "Road transport, logistics, construction or distribution: discover the recommended solutions for your sector.",
      crossCta: "See industries",
    },
    sectors: {
      breadcrumb: "Industries",
      label: "Industries",
      h1Pre: "Our Solutions by ",
      h1Hl: "Industry",
      desc: "Because every sector has its own requirements, CarrierWeb builds specialised fleet management solutions to meet the challenges of the Moroccan market.",
      seeMore: "See the industry solution",
      crossTitle: "Looking for a specific technology?",
      crossDesc: "GPS tracking, fuel probe, ReeferMate™, driver terminals or API: browse our 6 telematics solutions.",
      crossCta: "See solutions",
    },
  },

  solutionDetail: {
    badge: "CarrierWeb Solution",
    ctaDemo: "Request a demo",
    featuresLabel: "Features",
    featuresTitle: "What this solution does for your fleet",
    specsLabel: "Technical specs",
    testimonialLabel: "Client testimonial",
    faqLabel: "Frequently asked questions",
    faqTitle: "You may be wondering…",
    seoLabel: "Local expertise in Morocco",
    ctaBoxTitle: "Ready to equip your fleet?",
    ctaBoxDesc: "Free fleet study by our Casablanca office.",
    relatedLabel: "Keep exploring",
    relatedTitle: "Discover our other telematics solutions",
  },

  sectorDetail: {
    badge: "INDUSTRY",
    useCasesTitle: "Recommended Use Cases",
    useCasesDesc: "How our technologies address your operational constraints.",
    challengesTitle: "Your Business Challenges",
    expertiseTitle: "Sector Expertise in Morocco",
    recommendedTitle: "Recommended solutions",
    expertBoxTitle: "Talk to an Expert",
    expertBoxDesc: "Our logistics engineers study the technical needs specific to your business with you.",
    expertBoxCta: "Request an appointment",
    relatedLabel: "Other industries",
    relatedTitle: "CarrierWeb also supports these sectors",
  },

  whyPage: {
    breadcrumb: "Why CarrierWeb",
    label: "HARDWARE & SOFTWARE",
    h1: "Our Technology",
    tagline: "A high-performance, robust IoT infrastructure to run your assets in Morocco.",
    specsTitle: "Hardware & Network Specifications",
    specsDesc: "Built to meet the constraints of professional transport.",
    specs: [
      { title: "Proprietary On-Board Technology", desc: "On-board computers and GPS units designed specifically to withstand extreme road conditions." },
      { title: "Multi-Carrier Connectivity", desc: "Automatic switching between Morocco's main telecom networks to guarantee zero dead zones." },
      { title: "Security & Robustness", desc: "Hardened, tamper-proof units with instant alerts in case of sabotage or disconnection." },
      { title: "Secure Cloud Hosting", desc: "Redundant high-availability servers ensuring 24/7 online access." },
    ],
    perfTitle: "Performance & Precision",
    perfP1: "Unlike standard tracking solutions based on simple imported trackers, CarrierWeb designs and develops its own hardware ecosystem (on-board computer, ReeferMate™ probe) and software.",
    perfP2: "This full control guarantees high-precision data collection on vehicle status, refrigerated trailer temperature and actual diesel consumption without interfering with the manufacturer's original on-board computer.",
    checks: [
      "CE-certified hardware, ANRT-approved in Morocco",
      "Automatic over-the-air (OTA) firmware updates",
      "Physical installation by our qualified technicians in Casablanca",
    ],
    sideTitle: "Why CarrierWeb",
    sideBlocks: [
      { title: "Profitability (ROI)", desc: "Cut your fleet's engine idling and fuel budget by 15% on average." },
      { title: "Open API", desc: "Easily connect our trip and temperature data to SAP, Sage or your TMS." },
      { title: "Local support", desc: "Benefit from our assistance technicians based in Casablanca." },
    ],
  },

  resources: {
    breadcrumb: "Resources",
    label: "Resources",
    h1Pre: "Telematics ",
    h1Hl: "Resources & Guides",
    desc: "Sector analyses, best practices and logistics optimisation guides dedicated to the transport market in Morocco and Africa.",
    minRead: "min",
    read: "Read the article",
    newsletterTitle: "Subscribe to our logistics newsletter",
    newsletterDesc: "Receive our upcoming fleet management tips and news for Morocco straight to your inbox.",
    newsletterCta: "Subscribe by e-mail",
  },

  articlePage: {
    minRead: "min read",
    takeaways: "Key takeaways",
    relatedTitle: "Solutions related to this article",
    ctaTitle: "A question about your fleet?",
    ctaDesc: "Free fleet study by our Casablanca office.",
    ctaButton: "Request a demo",
    continueReading: "Continue reading",
  },

  contact: {
    breadcrumb: "Contact",
    label: "Contact",
    h1Pre: "Let's talk about your ",
    h1Hl: "Project",
    desc: "A question, a profitability study or a free personalised demo of our platform? Our Casablanca team is here to help.",
    infoTitle: "Contact details",
    addressLabel: "Address",
    addressValue: "39 rue Normandie, 20000 Casablanca, Morocco",
    phoneLabel: "Phone",
    emailLabel: "E-mail",
    availabilityLabel: "Availability",
    availability1: "Technical support: 24/7",
    availability2: "Sales offices: Monday to Saturday (09:00 - 18:00)",
    clientBoxTitle: "Already a CarrierWeb client?",
    clientBoxDesc: "Our technical support in Casablanca is at your full disposal for hardware installation or any question about the platform.",
    clientBoxCta: "Go to the Client Area",
    waTitle: "Direct WhatsApp contact",
    waDesc: "Send a quick message to our sales team. Replies within minutes.",
    waCta: "Start the conversation",
    formTitle: "Send a message",
    nameLabel: "Full name",
    namePh: "E.g. Omar Bensalah",
    companyLabel: "Company name",
    companyPh: "E.g. Transit Express",
    emailFieldLabel: "E-mail address",
    emailPh: "E.g. contact@company.ma",
    phoneFieldLabel: "Mobile phone",
    phonePh: "E.g. +212 600 000 000",
    fleetLabel: "Your fleet size (number of vehicles)",
    fleetOptions: ["1 to 5 vehicles", "6 to 20 vehicles", "21 to 50 vehicles", "More than 50 vehicles"],
    messageLabel: "Your message",
    messagePh: "How can we help you?",
    submit: "Send the request",
    successTitle: "Your e-mail client has opened",
    successBody: "Your request has been pre-filled in your e-mail client: just hit send. If nothing opened, write to us directly at",
    successOr: "or call",
    sendAnother: "Send another message",
    sending: "Sending…",
    sentTitle: "Message sent",
    sentBody: "Thank you! Your request has been sent to our team. We will get back to you shortly. For anything urgent, write to us at",
  },

  clientArea: {
    breadcrumb: "Client Area",
    label: "Client Area",
    h1Pre: "Access the ",
    h1Hl: "CarrierWeb Platform",
    desc: "Welcome to your access portal. Log in securely to supervise your vehicles, analyse fuel data and manage your logistics missions.",
    portalTitle: "Portal sign-in",
    portalDesc: "This page is a gateway: sign-in happens on the secure CarrierWeb platform (new tab). Once logged in, you get:",
    features: [
      "Real-time position of every vehicle on the map",
      "Fuel, trip and driving-time reports",
      "Siphoning, temperature and geofencing alerts",
      "History and exports for your operations",
    ],
    securityNote: "Your credentials and account security keys are strictly confidential. Never share them with third parties.",
    openPortal: "Open the Secure Client Area",
    helpTitle: "Trouble signing in?",
    helpDesc: "If you lost your password, your account is locked, or you experience a sign-in issue, contact our technical support hotline in Casablanca.",
    supportTitle: "Local Support in Casablanca",
    byPhone: "By phone:",
    byEmail: "By e-mail:",
    supportNote: "Technical assistance available 24/7 for clients under contract.",
  },

  auth: {
    backHome: "Home",
    login: {
      title: "Sign in",
      subtitle: "Access your fleet area: real-time GPS tracking, fuel, cold chain and alerts.",
      noAccount: "No account yet?",
      createAccount: "Create an account",
      emailLabel: "E-mail address",
      emailPh: "you@company.ma",
      passwordLabel: "Password",
      forgot: "Forgot your password?",
      remember: "Stay signed in on this device",
      showPwd: "Show password",
      hidePwd: "Hide password",
      errEmail: "Please enter a valid e-mail address.",
      errPwd: "The password must contain at least 6 characters.",
      loading: "Secure redirect…",
      submit: "Sign in",
      note: "Authentication is handled by the secure CarrierWeb platform: you are redirected there to sign in. Your credentials never pass through this site.",
    },
    register: {
      title: "Create an account",
      subtitle: "Request your Client Area to run your fleet in real time.",
      already: "Already a client?",
      signIn: "Sign in",
      companyLabel: "Company",
      companyPh: "E.g. Atlas Transports",
      nameLabel: "Full name",
      namePh: "E.g. Omar Bensalah",
      emailLabel: "Business e-mail",
      emailPh: "you@company.ma",
      phoneLabel: "Phone",
      phonePh: "+212 6 00 00 00 00",
      passwordLabel: "Password",
      passwordPh: "8 characters minimum",
      confirmLabel: "Confirm password",
      confirmPh: "Re-enter the password",
      errNames: "Please provide your company and your name.",
      errEmail: "Please enter a valid e-mail address.",
      errPwdLen: "The password must contain at least 8 characters.",
      errMatch: "The two passwords do not match.",
      submit: "Create my account",
      note: "Your request is sent to our team for activation. Your password is never sent by e-mail.",
      sentTitle: "Request sent",
      sentSubtitle: "Your account request has been recorded.",
      backHomeLink: "Back to home",
      sentBody: "Your e-mail client opened with your pre-filled request: just hit send. A CarrierWeb advisor in Casablanca will activate your platform access and get back to you.",
      sentFallback: "Nothing opened? Write to us at",
    },
  },
};

export default en;
