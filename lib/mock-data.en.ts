import { Solution, Sector } from "./types";

// English content for /en — same shape as lib/mock-data.ts. WordPress only
// serves the French content for now: the AR/EN versions read these local
// files (a multilingual WP via Polylang can replace them later without
// touching the pages).

export const mockSolutionsEn: Solution[] = [
  {
    slug: "gestion-flotte",
    title: "Fleet Management",
    icon: "bar-chart-3",
    tagline: "End-to-end optimisation and lower operating costs in Morocco.",
    shortDescription:
      "A complete dashboard to analyse usage, optimise routes and plan preventive maintenance for your vehicles in Morocco.",
    description:
      "Full visibility over all your assets to make informed decisions, improve productivity and reduce the TCO (Total Cost of Ownership) of your vehicle fleet.",
    stats: [
      { value: "−25%", label: "Cost reduction", icon: "trending-down" },
      { value: "500+", label: "Fleets managed in Morocco", icon: "bar-chart-3" },
      { value: "24/7", label: "Continuous monitoring", icon: "clock" },
      { value: "99.9%", label: "Platform availability", icon: "shield" },
    ],
    features: [
      { title: "Live Dashboard", desc: "See your entire fleet on a single screen, in real time.", icon: "bar-chart-3" },
      { title: "Automated Reports", desc: "Review driving hours, stops and kilometres travelled.", icon: "zap" },
      { title: "Preventive Maintenance", desc: "Schedule servicing based on actual mileage and reduce breakdowns.", icon: "shield" },
      { title: "Driver Analysis", desc: "Identify risky behaviour to improve road safety.", icon: "check-circle-2" },
    ],
    specs: [
      { label: "Update frequency", value: "Every 10 seconds" },
      { label: "History retained", value: "24 months" },
      { label: "Report formats", value: "PDF / Excel / API" },
      { label: "Mobile access", value: "iOS & Android" },
      { label: "Number of vehicles", value: "Unlimited" },
      { label: "Custom alerts", value: "Yes (SMS, Email, Push)" },
    ],
    testimonial: {
      quote:
        "CarrierWeb helped us cut our operating budget by 22% in the first year. The dashboard is clear and our fleet managers were trained in half a day.",
      author: "Logistics Director",
      company: "Transport company — Casablanca",
    },
    faq: [
      { question: "How long does installation take?", answer: "Installing a CarrierWeb GPS unit takes between 30 minutes and 2 hours per vehicle. Our Casablanca-based technicians work directly in your yard." },
      { question: "Can several branches be managed from one account?", answer: "Yes, the CarrierWeb platform supports a multi-site architecture. You can manage several depots, branches and sub-accounts from a single main dashboard." },
      { question: "How does billing work?", answer: "Billing is monthly per connected vehicle. We offer annual plans with a discount for fleets of more than 20 vehicles." },
    ],
    benefits: [
      { title: "Cost reduction", desc: "Cut unnecessary kilometres and optimise vehicle utilisation." },
      { title: "Local compliance", desc: "Compliant with road transport standards in Morocco (ANRT, MTIT)." },
    ],
    seoRichContent:
      "CarrierWeb Morocco provides an advanced fleet management system specifically adapted to Moroccan roads and logistics constraints. Our platform helps companies in Casablanca, Tangier and Agadir digitise their fleet management with measurable ROI within the first months.",
  },
  {
    slug: "suivi-gps",
    title: "Real-Time GPS Tracking",
    icon: "map-pin",
    tagline: "Precise location and route tracking anywhere in Morocco.",
    shortDescription:
      "See the exact geographic position of every truck in your fleet in real time, anywhere in Morocco.",
    description:
      "Track your vehicles minute by minute on high-precision interactive maps. Improve customer satisfaction with reliable estimated arrival times (ETA).",
    stats: [
      { value: "<5m", label: "Location accuracy", icon: "map-pin" },
      { value: "0", label: "Dead zones in Morocco", icon: "shield" },
      { value: "10s", label: "Update frequency", icon: "zap" },
      { value: "12 mo", label: "Trip history", icon: "clock" },
    ],
    features: [
      { title: "Second-by-Second Position", desc: "High-fidelity geolocation for total visibility over your routes.", icon: "map-pin" },
      { title: "Full History", desc: "Review and replay any trip from the last 12 months.", icon: "clock" },
      { title: "Geofencing Alerts", desc: "Be notified as soon as a vehicle enters or leaves a defined zone.", icon: "shield" },
      { title: "Real-time ETA", desc: "Automatically keep your customers informed of estimated arrival times.", icon: "zap" },
    ],
    specs: [
      { label: "GPS technology", value: "GPS + GLONASS + Galileo" },
      { label: "Accuracy", value: "< 5 metres" },
      { label: "Network coverage", value: "100% Morocco + International" },
      { label: "Polling frequency", value: "Every 10 seconds" },
      { label: "Offline mode", value: "Yes (on-board memory)" },
      { label: "Geofencing", value: "Unlimited zones per account" },
    ],
    testimonial: {
      quote:
        "Thanks to CarrierWeb GPS tracking, we resolved a customer dispute in minutes simply by showing the exact trip history. The proof was indisputable.",
      author: "Transport Manager",
      company: "Distribution company — Tangier",
    },
    faq: [
      { question: "Does tracking work in mountainous areas (Atlas, Rif)?", answer: "Yes. Our multi-carrier technology (Maroc Telecom, Orange, Inwi) guarantees coverage even in remote areas thanks to automatic switching to the most available network." },
      { question: "Can trip history be viewed on a map?", answer: "Absolutely. The platform lets you replay any trip from the last 12 months with a precise route line, stops and speed at each point." },
      { question: "Is it compatible with diesel and electric trucks?", answer: "Our GPS unit is universal and compatible with all drivetrains. Installation only requires a 12V/24V power supply." },
    ],
    benefits: [
      { title: "Increased security", desc: "Quickly locate any vehicle deviating from its route." },
      { title: "Customer responsiveness", desc: "Answer delivery status requests instantly." },
    ],
    seoRichContent:
      "Thanks to our GPS chip and nationwide multi-carrier connectivity in Morocco, CarrierWeb real-time GPS tracking has no blind spots. Ideal for securing high-value freight on national motorway corridors.",
  },
  {
    slug: "gestion-carburant",
    title: "Fuel Management",
    icon: "fuel",
    tagline: "Monitor and reduce your fuel consumption.",
    shortDescription:
      "Monitor and cut your trucks' fuel consumption by 15% to 25% while eliminating fuel fraud and theft.",
    description:
      "Instantly detect abnormal fuel level drops, analyse driving behaviour and save up to 25%.",
    stats: [
      { value: "−25%", label: "Avg. fuel savings", icon: "trending-down" },
      { value: "±1L", label: "Measurement accuracy", icon: "zap" },
      { value: "<30s", label: "Theft alert delay", icon: "clock" },
      { value: "100%", label: "Tank compatibility", icon: "shield" },
    ],
    features: [
      { title: "Precise Level Measurement", desc: "Calibrated probes measuring to ±1 litre in real time.", icon: "fuel" },
      { title: "Theft Detection", desc: "Automatic SMS/Email alert on any suspicious level drop within 30 seconds.", icon: "shield" },
      { title: "Eco-Driving", desc: "Analyse excessive idling, harsh braking and acceleration.", icon: "trending-down" },
      { title: "Detailed Reports", desc: "Average consumption by trip, driver and road type, exportable to PDF.", icon: "bar-chart-3" },
    ],
    specs: [
      { label: "Probe type", value: "Resistive or ultrasonic" },
      { label: "Measurement accuracy", value: "±1 litre" },
      { label: "Alert delay", value: "< 30 seconds" },
      { label: "Tank compatibility", value: "All types (steel, plastic)" },
      { label: "Configurable alert threshold", value: "Yes (% or litres)" },
      { label: "Eco-driving report", value: "Score / 100 per driver" },
    ],
    testimonial: {
      quote:
        "In 6 months we saved 180,000 MAD on our diesel budget. The CarrierWeb fuel probe also identified two theft cases on site.",
      author: "Administrative Director",
      company: "Construction company — Casablanca",
    },
    faq: [
      { question: "Does the fuel probe damage the tank?", answer: "No. The probe is installed via calibrated drilling with professional sealing gaskets by our certified technicians. No risk of leaks or structural changes." },
      { question: "How does the system detect fuel theft?", answer: "If the level drops abnormally (beyond a threshold you define) while the engine is off, an SMS and email alert is sent immediately to the fleet manager." },
      { question: "Can consumption be compared between drivers?", answer: "Yes. The platform generates an eco-driving ranking per driver with a score out of 100 based on idling, braking and acceleration." },
    ],
    benefits: [
      { title: "Immediate savings", desc: "Identify costly behaviour and fuel anomalies." },
      { title: "Environmental impact", desc: "Reduce your company's overall carbon footprint." },
    ],
    seoRichContent:
      "Fuel is the largest expense item for carriers in Morocco. Our technology enables ultra-precise monitoring to eliminate waste.",
  },
  {
    slug: "controle-temperature",
    title: "Temperature Monitoring",
    icon: "thermometer",
    tagline: "The ReeferMate™ module to secure the cold chain.",
    shortDescription:
      "Secure and certify refrigerated transport with constant real-time temperature monitoring via the ReeferMate™ module.",
    description:
      "Technology dedicated to refrigerated transport. Continuously record and monitor your trailers' temperature to guarantee the integrity of your temperature-sensitive products.",
    stats: [
      { value: "±0.5°", label: "Measurement accuracy", icon: "thermometer" },
      { value: "−40°C", label: "Min. detectable temperature", icon: "zap" },
      { value: "100%", label: "ONSSA compliance", icon: "shield" },
      { value: "<60s", label: "Threshold alert delay", icon: "clock" },
    ],
    features: [
      { title: "Continuous Monitoring", desc: "ISO-calibrated temperature probes with automatic readings every 5 minutes.", icon: "thermometer" },
      { title: "Immediate Alerts", desc: "SMS and Email within 60 seconds if temperature exceeds defined thresholds.", icon: "shield" },
      { title: "Multi-Zone", desc: "Monitor up to 6 different temperature zones in a single trailer.", icon: "zap" },
      { title: "Certified Reports", desc: "Certified temperature charts for ONSSA audits and customer requirements.", icon: "check-circle-2" },
    ],
    specs: [
      { label: "Certification standard", value: "EN 12830 / HACCP" },
      { label: "Measurement range", value: "−40°C to +85°C" },
      { label: "Accuracy", value: "±0.5°C" },
      { label: "Probes / vehicle", value: "Up to 6 zones" },
      { label: "Reefer unit compatibility", value: "Carrier, Thermo King, Zanotti" },
      { label: "Report format", value: "PDF, CSV, API" },
    ],
    testimonial: {
      quote:
        "Since ReeferMate™, zero cold chain disputes. Our customers automatically receive the temperature report with every delivery. It's a real sales argument.",
      author: "Managing Director",
      company: "Refrigerated transport — Agadir",
    },
    faq: [
      { question: "Are the temperature reports accepted by ONSSA?", answer: "Yes. Our reports comply with EN 12830, are timestamped and digitally signed. They are accepted by ONSSA and European customers for exports." },
      { question: "Can the system connect to the reefer unit?", answer: "Yes. ReeferMate™ integrates directly with the main reefer units on the market (Carrier, Thermo King, Zanotti) to read engine parameters in addition to temperature." },
      { question: "What happens if the network connection is lost?", answer: "The unit stores data locally in on-board memory and syncs automatically once the connection is restored. No data loss." },
    ],
    benefits: [
      { title: "Quality guarantee", desc: "Zero disputes over the quality and freshness of delivered goods." },
      { title: "ONSSA compliance", desc: "Meet Moroccan and European sanitary requirements." },
    ],
    seoRichContent:
      "With the growth of Moroccan agricultural and agri-food exports, CarrierWeb's ReeferMate™ temperature monitoring has become the reference solution.",
  },
  {
    slug: "communication-chauffeurs",
    title: "Driver Communication",
    icon: "message-square",
    tagline: "Stay connected with your drivers via our MDT terminals.",
    shortDescription:
      "Stay in constant contact with your drivers in the field via our secure in-cab MDT touch terminals.",
    description:
      "Improve your drivers' productivity and safety with our in-cab touch terminals. Send detailed missions and communicate at no extra cost.",
    stats: [
      { value: "0 MAD", label: "Communication cost", icon: "trending-down" },
      { value: "7\"", label: "HD touch screen", icon: "zap" },
      { value: "100%", label: "Locked while driving", icon: "shield" },
      { value: "4G", label: "Network connectivity", icon: "clock" },
    ],
    features: [
      { title: "Secure Messaging", desc: "Free two-way text messaging between driver and dispatcher over the data network.", icon: "message-square" },
      { title: "Mission Management", desc: "Send transport orders, PODs and delivery notes directly to the in-cab screen.", icon: "check-circle-2" },
      { title: "Truck Navigation", desc: "Professional built-in GPS adapted to vehicle size (bridge height, axle weight, restricted zones).", icon: "map-pin" },
      { title: "Screen Safety", desc: "Interface locks automatically as soon as the vehicle exceeds 5 km/h.", icon: "shield" },
    ],
    specs: [
      { label: "Screen size", value: "7-inch HD touch" },
      { label: "Connectivity", value: "4G LTE + WiFi" },
      { label: "Durability", value: "IP54 dust/water resistant" },
      { label: "Power supply", value: "12V / 24V vehicle" },
      { label: "Navigation", value: "Morocco + Europe maps" },
      { label: "Driving safety", value: "Locks > 5 km/h" },
    ],
    testimonial: {
      quote:
        "Before the MDT, our drivers called 10 times a day. Now missions are sent straight to the screen and statuses come back automatically. Huge time savings.",
      author: "Operations Manager",
      company: "National carrier — Rabat",
    },
    faq: [
      { question: "Does the MDT terminal replace the driver's personal phone?", answer: "Yes. The CarrierWeb MDT terminal handles all professional communication (missions, messages, navigation) without needing the driver's phone. It also prevents phone use while driving." },
      { question: "Are map updates automatic?", answer: "Morocco and Europe maps update automatically over WiFi or 4G without any action on your part." },
      { question: "What if the terminal breaks down?", answer: "Our terminals are covered by a 2-year warranty and our technical team in Casablanca intervenes within 24h for replacement or repair." },
    ],
    benefits: [
      { title: "Zero paper", desc: "Simplify the transmission of transport documents and orders." },
      { title: "Road safety", desc: "The interface locks automatically while the truck is moving." },
    ],
    seoRichContent:
      "CarrierWeb MDT on-board computers connect your back office to your field teams in real time across Morocco.",
  },
  {
    slug: "integration",
    title: "Back-Office Integration",
    icon: "settings-2",
    tagline: "Connect your fleet data to your TMS, ERP or WMS.",
    shortDescription:
      "Seamlessly connect all your GPS, fuel and temperature telematics data to your company TMS or ERP.",
    description:
      "A robust, documented API to automate information flows. Eliminate double entry and enrich your management software with our telematics data.",
    stats: [
      { value: "REST", label: "Standardised API", icon: "zap" },
      { value: "<200ms", label: "API response time", icon: "clock" },
      { value: "99.99%", label: "Server availability", icon: "shield" },
      { value: "Free", label: "Documentation access", icon: "trending-down" },
    ],
    features: [
      { title: "Secure RESTful API", desc: "Access all your logistics data via standardised requests with OAuth2 authentication.", icon: "settings-2" },
      { title: "Real-Time Webhooks", desc: "Receive alerts, statuses and positions directly on your server in real time.", icon: "zap" },
      { title: "SDK & Connectors", desc: "Ready-made connectors for SAP, Sage, Microsoft Dynamics and major TMS platforms.", icon: "check-circle-2" },
      { title: "Automated Exports", desc: "Schedule automatic daily, weekly or monthly exports in PDF/CSV.", icon: "bar-chart-3" },
    ],
    specs: [
      { label: "API type", value: "REST (JSON/XML)" },
      { label: "Authentication", value: "OAuth 2.0 / API Key" },
      { label: "Response time", value: "< 200ms" },
      { label: "Documentation", value: "Swagger / OpenAPI 3.0" },
      { label: "Webhooks", value: "Yes (real-time events)" },
      { label: "Test sandbox", value: "Available free of charge" },
    ],
    testimonial: {
      quote:
        "The CarrierWeb API connected to our SAP ERP in 2 days. GPS positions and mileage now flow automatically into our invoicing system.",
      author: "CIO",
      company: "Logistics group — Casablanca",
    },
    faq: [
      { question: "Is there a test environment (sandbox)?", answer: "Yes. We provide free sandbox access with simulated data so your technical team can integrate and test the API before going live." },
      { question: "Which programming languages are supported?", answer: "Our REST API works with all languages (PHP, Python, JavaScript, Java, C#). Code samples in the main languages are provided in our documentation." },
      { question: "Are there API rate limits?", answer: "Rate limits depend on your subscription plan. Enterprise plans have no request limits. Contact our team for details." },
    ],
    benefits: [
      { title: "Full automation", desc: "Invoicing and driver payroll calculated automatically." },
      { title: "Consolidated data", desc: "Centralise all your logistics on a single screen." },
    ],
    seoRichContent:
      "CarrierWeb stands out with its open-system philosophy. Our API lets clients in Morocco easily integrate GPS data into their ERPs.",
  },
];

export const mockSectorsEn: Sector[] = [
  {
    slug: "transport-routier",
    title: "Freight Transport",
    icon: "truck",
    tagline: "Optimise your national and international freight fleets.",
    listingDescription:
      "Solutions for national and international road freight (TIR) fleets managing long-distance routes.",
    description:
      "Road freight demands perfect punctuality, total cargo security and optimal fuel margin management. Our tools adapt precisely to your operational needs.",
    useCases: [
      { title: "National & TIR Tracking", desc: "Track deliveries in real time on the Casablanca–Tangier–Europe corridors." },
      { title: "Diesel Management", desc: "Measure actual consumption and detect suspicious level drops." },
      { title: "Missions & Orders", desc: "Send routes and documents directly to drivers." },
      { title: "Delay Alerts / ETA", desc: "Automatically share updated ETAs with your customers." },
    ],
    recommendedSolutions: [
      { title: "Real-Time GPS Tracking", href: "/solutions/suivi-gps" },
      { title: "Fuel Management", href: "/solutions/gestion-carburant" },
      { title: "Driver Communication", href: "/solutions/communication-chauffeurs" },
    ],
    seoRichContent:
      "Morocco is a strategic crossroads for freight transport. From Casablanca to Tanger Med, CarrierWeb Morocco gives national and international road carriers robust connected tools to maximise the profitability of long-haul routes.",
  },
  {
    slug: "logistique",
    title: "Logistics & Supply Chain",
    icon: "container",
    tagline: "Streamline your supply chain and manage trailers intelligently.",
    listingDescription:
      "Better trailer traceability, TMS/ERP integration and smoother inter-warehouse flows.",
    description:
      "Improve visibility over your logistics flows between warehouses, port terminals and end customers. Reduce dock waiting time and optimise your transport assets.",
    useCases: [
      { title: "Trailer Tracking (Tethered/Untethered)", desc: "Locate your trailers even when uncoupled." },
      { title: "WMS/TMS Integration", desc: "Automate the transmission of transport statuses to your ERP tools." },
      { title: "Load Management", desc: "Cut idle time and optimise rotations." },
      { title: "Multi-Site Supervision", desc: "Centralise flows across warehouses and logistics zones." },
    ],
    recommendedSolutions: [
      { title: "Fleet Management", href: "/solutions/gestion-flotte" },
      { title: "Back-Office Integration", href: "/solutions/integration" },
    ],
    seoRichContent:
      "The logistics platforms of Casablanca, the Tangier free zone and Morocco's industrial parks demand seamless data integration. CarrierWeb offers connected solutions for uninterrupted logistics.",
  },
  {
    slug: "btp",
    title: "Construction",
    icon: "hard-hat",
    tagline: "Secure your machinery and track its utilisation rate.",
    listingDescription:
      "Engine-hour monitoring, anti-theft geofencing and heavy equipment tracking on job sites.",
    description:
      "Locate your heavy machinery and utility vehicles, prevent equipment and fuel theft on site, and monitor actual engine operating hours.",
    useCases: [
      { title: "Virtual Fences (Geofencing)", desc: "Set geographic boundaries and get alerts on zone exits." },
      { title: "Engine-Hour Tracking", desc: "Measure the exact activity of your generators, excavators and bulldozers." },
      { title: "Security & Immobilisation", desc: "Protect your machinery and stop it remotely in case of illicit use." },
      { title: "Mixer Fleet Rotation", desc: "Optimise concrete delivery logistics on site." },
    ],
    recommendedSolutions: [
      { title: "Real-Time GPS Tracking", href: "/solutions/suivi-gps" },
      { title: "Fleet Management", href: "/solutions/gestion-flotte" },
    ],
    seoRichContent:
      "Morocco's construction sector requires strict equipment control on national infrastructure sites. CarrierWeb telematics prevents theft and rationalises heavy equipment use.",
  },
  {
    slug: "distribution",
    title: "Distribution & FMCG",
    icon: "package",
    tagline: "Optimise your urban and regional delivery rounds.",
    listingDescription:
      "Frequent urban route optimisation, door-opening detection and temperature traceability.",
    description:
      "Ensure frequent, scheduled deliveries while managing urban delivery constraints. Monitor door openings and guarantee the cold chain of consumer goods.",
    useCases: [
      { title: "Route Optimisation", desc: "Find the fastest distribution routes in urban areas." },
      { title: "Door-Opening Sensors", desc: "Secure goods and detect unexpected openings." },
      { title: "Cold Chain Control", desc: "ONSSA-certified probes for temperature-sensitive product traceability." },
      { title: "Delivery Statistics", desc: "Generate efficiency and punctuality reports for your points of sale." },
    ],
    recommendedSolutions: [
      { title: "Temperature Monitoring", href: "/solutions/controle-temperature" },
      { title: "Real-Time GPS Tracking", href: "/solutions/suivi-gps" },
    ],
    seoRichContent:
      "Urban distribution in Casablanca, Rabat and Morocco's major cities faces significant congestion challenges. Our tools help food and retail players make their deliveries reliable.",
  },
];
