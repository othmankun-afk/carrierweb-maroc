import type { Dictionary } from "@/lib/dictionaries";

/* Ces marques sont des constructeurs de véhicules compatibles avec les
   boîtiers CarrierWeb — pas des « partenaires/clients ». Claim factuel pour
   un équipementier télématique. */

const brands = ["RENAULT", "SCANIA", "VOLVO", "HYUNDAI", "ISUZU", "MAN"];

export default function PartnersLogos({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="compatibilite"
      className="relative py-12 bg-cw-black border-y border-white/5"
      aria-label={dict.partners.line}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-cw-gray-500 mb-8 font-[family-name:var(--font-jakarta)]">
          {dict.partners.line}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {brands.map((brand) => (
            <div
              key={brand}
              className="partner-logo text-2xl sm:text-3xl font-black text-cw-gray-600 tracking-wider hover:text-cw-gray-300 transition-all cursor-default select-none"
              dir="ltr"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
