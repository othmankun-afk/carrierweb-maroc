import type { Article } from "./articles";

// English translations of the Resources articles (same slugs as the French
// source so /en/ressources/<slug> maps 1:1 to /ressources/<slug>).

export const articlesEn: Article[] = [
  {
    slug: "reduire-consommation-carburant-camions",
    title: "How to reduce your trucks' fuel consumption?",
    category: "Practical Tips",
    excerpt:
      "Fuel is the biggest expense for carriers in Morocco. Eco-driving, siphoning detection, idle monitoring: the concrete levers for savings.",
    metaDescription:
      "Practical guide to cutting the diesel budget of a truck fleet in Morocco: eco-driving, fuel probes, anti-siphoning, engine idling and route optimisation.",
    publishedAt: "2026-06-10",
    readingMinutes: 7,
    intro:
      "For a Moroccan road carrier, diesel is often the largest operating cost, ahead of wages and maintenance. Yet much of this budget is lost in invisible items: prolonged idling, fuel-hungry driving styles, unoptimised routes and, in some cases, fuel theft. The good news: each of these can be measured, and what gets measured can be corrected.",
    sections: [
      {
        heading: "Where do overconsumptions really come from?",
        paragraphs: [
          "Before acting, you need to know where the diesel goes. On an unequipped fleet, the manager only has one global figure: the litres bought at the station. It's impossible to tell apart what stems from the trip itself, driver behaviour, mechanical condition or an abnormal loss.",
          "Field experience surfaces four main sources of overconsumption, very unequal from one vehicle to another — and it's precisely this variability that makes individual measurement essential.",
        ],
        bullets: [
          "Engine idling: a truck running while stationary (dock waiting, air-conditioned break, loading) burns several litres per hour without covering a single kilometre.",
          "Driving style: harsh acceleration, late braking and over-revving can create a 10–20% gap between two drivers on the same trip.",
          "Unoptimised routes: unauthorised detours, empty kilometres and poorly ordered rounds inflate total mileage.",
          "Abnormal losses: siphoning in car parks, partially diverted fill-ups at the station, undetected mechanical leaks.",
        ],
      },
      {
        heading: "Measure first: the fuel probe",
        paragraphs: [
          "The first step is to instrument the tank. A calibrated probe continuously measures the actual level, to within ±1 litre, and streams the curve to the fleet management dashboard. You then know exactly when the tank fills, empties normally while driving… or drops sharply with the engine off.",
          "This simple visibility shifts the balance of power: on a suspicious drop, an SMS or e-mail alert goes out in under 30 seconds to the manager, with the vehicle's GPS position. Overnight siphoning in an unguarded car park, previously hard to prove, becomes a dated, located and documented event.",
          "The probe also lets you reconcile the litres actually entering the tank with station invoices: recurring gaps on certain fill-ups show up within a few weeks.",
        ],
      },
      {
        heading: "Then correct: eco-driving measured per driver",
        paragraphs: [
          "Once measurement is in place, the most profitable lever is human. The telematics unit records each driver's acceleration, harsh braking, over-revving and idling time, then derives an eco-driving score out of 100.",
          "This score changes the nature of the conversation with teams: you no longer blame an impression (\"you consume too much\"), you share an objective, comparable indicator. Companies that post a monthly ranking and reward the best drivers — bonus, recognition, targeted training for others — generally see a lasting improvement, without social conflict.",
          "Idling deserves special treatment: it's often the surprise of the first equipped month. Cumulative hours of an engine running while stationary appear in black and white in the reports, and a simple operating instruction (switch off the engine beyond a few minutes of waiting) delivers immediate savings.",
        ],
      },
      {
        heading: "Finally optimise: the kilometres you don't drive",
        paragraphs: [
          "The cheapest litre is the one you don't burn. Real-time GPS tracking lets you check that planned routes are followed, eliminate unauthorised detours and re-order delivery rounds to cut total mileage.",
          "On long-haul corridors (Casablanca–Tanger Med, Agadir–Marrakech, TIR links to Europe), comparing actual trips between drivers quickly reveals the most economical routes. On urban distribution, it's the sequencing of delivery points that weighs the most.",
        ],
      },
      {
        heading: "What return on investment can you expect?",
        paragraphs: [
          "The combined gains of these three levers — measurement, eco-driving, optimisation — typically range from 15 to 25% of the fuel budget depending on the fleet's starting point, with most achieved in the first six months. For a fleet of 20 trucks each covering 100,000 km per year, even the low estimate represents an amount far exceeding the cost of telematics hardware and subscription.",
          "That's why fuel management is almost always the first telematics building block installed by Moroccan carriers: it funds the next ones.",
        ],
      },
    ],
    keyTakeaways: [
      "Without per-vehicle measurement, it's impossible to know where the diesel goes: the fuel probe is the starting point.",
      "Abnormal-drop alerts (under 30 seconds) turn siphoning into a dated, located and documented event.",
      "The per-driver eco-driving score is the most profitable lever: a 10–20% gap between drivers on the same trip.",
      "Idling is the most underestimated overconsumption — and the easiest to correct with an operating instruction.",
      "Typical total gain: 15 to 25% of the fuel budget, most of it within the first six months.",
    ],
    relatedSolutions: [
      { title: "Fuel Management", href: "/solutions/gestion-carburant" },
      { title: "Real-Time GPS Tracking", href: "/solutions/suivi-gps" },
      { title: "Fleet Management", href: "/solutions/gestion-flotte" },
    ],
  },
  {
    slug: "transport-frigorifique-onssa-exigences-europeennes",
    title: "Moroccan refrigerated transport and ONSSA & European requirements",
    category: "Regulation",
    excerpt:
      "Respecting the cold chain is critical for exporting Moroccan fruit and vegetables. How the ReeferMate™ module ensures full traceability.",
    metaDescription:
      "Cold chain in Morocco: ONSSA obligations, EN 12830 standard, HACCP and European customer requirements. How refrigerated telematics certify your deliveries' temperature.",
    publishedAt: "2026-06-24",
    readingMinutes: 8,
    intro:
      "Morocco is a major agri-food exporter: tomatoes, citrus, seafood and early produce leave for Europe every day from the Souss, the Oriental and the Casablanca and Tanger Med platforms. For this entire chain, a single temperature break can mean a rejected shipment, a lost customer and a costly dispute. Regulation — Moroccan and European alike — no longer settles for the carrier's good faith: it demands proof.",
    sections: [
      {
        heading: "What ONSSA expects from refrigerated carriers",
        paragraphs: [
          "In Morocco, the National Office of Sanitary Safety of Food Products (ONSSA) governs the transport of perishable goods under law 28-07 on food safety. The principles are those of end-to-end cold chain control: temperature suited to the product, approved transport means able to maintain that temperature, and the ability to demonstrate that conditions were met throughout the journey.",
          "In practice, during an inspection or approval, the carrier must be able to present reliable, dated temperature records. A manual reading at departure and arrival is no longer enough once there is any doubt about what happened in between.",
        ],
      },
      {
        heading: "European customer requirements: EN 12830 and HACCP",
        paragraphs: [
          "For exporters, the bar is even higher. European importers and buying groups operate under HACCP frameworks and require their carriers to use temperature recorders compliant with the European EN 12830 standard, which defines the accuracy, recording and data-retention requirements for instruments used in temperature-controlled transport.",
          "Concretely, a Moroccan exporter who wants to secure contracts must be able to provide, for each shipment, a timestamped temperature curve produced by a compliant instrument covering the entire journey — including port waits and border crossings, the moments when breaks are most frequent.",
        ],
      },
      {
        heading: "Why the reefer unit's thermometer isn't enough",
        paragraphs: [
          "Many fleets rely on the reefer unit's display. This is a classic mistake: that display shows the setpoint and the temperature of the air blown at the unit's measurement point, not necessarily the actual temperature experienced by the goods at the back of the box, near the doors or in a multi-temperature zone.",
          "Serious instrumentation relies on independent, calibrated probes placed in the genuinely sensitive zones of the box — up to six distinct zones for compartmentalised trailers — with continuous, on-board, tamper-proof recording.",
        ],
      },
      {
        heading: "What ReeferMate™ refrigerated telematics brings",
        paragraphs: [
          "The CarrierWeb ReeferMate™ module connects the refrigerated trailer to the fleet management platform: calibrated probes (±0.5°C accuracy), automatic readings every 5 minutes, on-board memory in case of network loss, and direct integration with the main reefer units on the market (Carrier, Thermo King, Zanotti).",
          "The difference with a simple recorder: the data is used in real time. If the temperature leaves the thresholds defined for the cargo, the operator receives an alert in under 60 seconds — while there is still time to act (check the unit, reroute the vehicle, warn the customer), rather than on arrival facing a lost shipment.",
          "At each delivery, a certified, timestamped and digitally signed temperature report can be sent automatically to the customer. For disputes, it's the end of proof-less arguments; for sales, it's a differentiator against unequipped carriers.",
        ],
      },
      {
        heading: "Bringing your fleet into compliance: where to start?",
        paragraphs: [
          "Upgrading a refrigerated fleet is generally done in three stages: audit of the trailers and zones to instrument, installation of the probes and unit (without prolonged vehicle downtime), then configuration of thresholds per cargo type and of alert recipients.",
          "Configuration deserves as much attention as the hardware: thresholds that are too strict drown operations in false alerts, thresholds too loose let real breaks through. Standard profiles per product family (frozen, chilled, early produce) are a good starting point, refined afterwards on the first weeks of real data.",
        ],
      },
    ],
    keyTakeaways: [
      "ONSSA (law 28-07) and European customers (HACCP, EN 12830) alike require continuous temperature proof, not just readings at departure and arrival.",
      "The reefer unit's display doesn't reflect the actual temperature of the goods: you need independent, calibrated, multi-zone probes where needed.",
      "Real-time alerting (under 60 seconds) lets you save the cargo, not just record its loss.",
      "The certified report sent automatically at each delivery eliminates proof-less disputes and becomes a sales argument.",
      "Start with the trailer audit, then install, then configure thresholds per product family.",
    ],
    relatedSolutions: [
      { title: "Temperature Monitoring", href: "/solutions/controle-temperature" },
      { title: "Real-Time GPS Tracking", href: "/solutions/suivi-gps" },
      { title: "Fleet Management", href: "/solutions/gestion-flotte" },
    ],
  },
  {
    slug: "connecter-tms-donnees-gps-flotte",
    title: "Why connect your TMS to your fleet's GPS data?",
    category: "Technology",
    excerpt:
      "Feeding your live positions and sensors into your management software (ERP/TMS) eliminates manual entry and automates invoicing.",
    metaDescription:
      "Telematics-TMS/ERP integration: why connect your fleet's GPS, fuel and temperature data to your management software — REST API, webhooks, use cases and method.",
    publishedAt: "2026-07-08",
    readingMinutes: 6,
    intro:
      "In many Moroccan transport companies, two worlds coexist without talking to each other: the telematics platform that knows everything about the fleet (positions, kilometres, fuel, temperatures) on one side, the TMS or ERP that manages transport orders, invoicing and payroll on the other. In between: manual re-entry, intermediate spreadsheets and unexplained gaps. Integrating the two systems is the best effort-to-impact project in logistics digitisation.",
    sections: [
      {
        heading: "The hidden cost of double entry",
        paragraphs: [
          "As long as telematics remains a screen consulted separately, every useful piece of information must be recopied: mileage for driver payroll, arrival times for proof of delivery, litres consumed for management control. This re-entry costs administrative time, introduces errors, and above all delays information — an invoice issued from manually consolidated data often goes out several days late.",
          "The gap between the two systems also creates grey areas: when the TMS shows a delivery as \"done\" without a verifiable timestamp, any customer dispute is settled to the carrier's disadvantage.",
        ],
      },
      {
        heading: "What real-time integration changes",
        paragraphs: [
          "Once the telematics platform is connected to the TMS via API, data flows without human intervention, in both directions: the TMS sends missions, telematics returns the actual execution.",
        ],
        bullets: [
          "Automated invoicing: actual kilometres, dock waiting hours and timestamped deliveries feed the invoice directly, with no re-entry.",
          "Driver payroll: driving hours and mileage certified by the unit replace manual declarations.",
          "Reliable customer ETA: the real-time position updates the estimated arrival time in the customer portal without a phone call.",
          "Management control: consumption and costs per vehicle flow into the ERP for a TCO computed on real data.",
          "Proof of service: each step (arrival on site, door opening, temperature at delivery) is timestamped and enforceable.",
        ],
      },
      {
        heading: "How does it work technically?",
        paragraphs: [
          "Modern integration relies on two complementary mechanisms. The REST API lets your system query the platform on demand: current positions, a trip's history, a period's mileage, fuel level. Webhooks do the opposite: the platform pushes events to your server as soon as they happen — vehicle arrived in a delivery zone, temperature alert, suspicious fuel drop.",
          "The CarrierWeb API is documented in OpenAPI/Swagger, secured by OAuth 2.0, with a free test environment (sandbox) and ready-made connectors for the most widespread systems (SAP, Sage, Microsoft Dynamics and major TMS). An in-house technical team or a local integrator can generally set up a first flow within a few days.",
        ],
      },
      {
        heading: "Which flow to start with?",
        paragraphs: [
          "The classic trap is trying to integrate everything at once. The approach that works: pick the flow that hurts most today — almost always invoicing or payroll — put it into production, measure the gain, then extend.",
          "A first \"actual mileage → invoicing\" flow is quick to set up and its return on investment is immediately visible to management. The next flows (customer ETA, proof of delivery, fuel control) then benefit from an infrastructure already in place and established trust.",
        ],
      },
    ],
    keyTakeaways: [
      "Double entry between telematics and TMS costs time, errors and days of invoicing delay.",
      "Integration delivers enforceable data: timestamped deliveries, certified mileage, proven temperatures.",
      "REST API to query, webhooks to be notified in real time: the two mechanisms complement each other.",
      "Start with a single high-impact flow (invoicing or payroll), measure, then extend.",
      "Free sandbox and SAP/Sage/Dynamics connectors: a first flow can be built in a few days.",
    ],
    relatedSolutions: [
      { title: "Back-Office Integration", href: "/solutions/integration" },
      { title: "Fleet Management", href: "/solutions/gestion-flotte" },
      { title: "Real-Time GPS Tracking", href: "/solutions/suivi-gps" },
    ],
  },
];
