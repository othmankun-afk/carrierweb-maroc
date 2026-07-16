import Link from "next/link";
import { Icon } from "@/lib/icon-map";
import { ArrowRight } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n";

export type RelatedItem = {
  title: string;
  href: string;
  desc?: string;
  icon?: string;
};

/**
 * Grille de liens internes en fin de page. Sert le maillage interne (SEO) et
 * le temps de rétention. Les `href` sont des chemins « nus » (ex.
 * "/solutions/suivi-gps") localisés selon la locale courante.
 */
export default function RelatedGrid({
  locale,
  label,
  title,
  exploreLabel,
  items,
}: {
  locale: Locale;
  label: string;
  title: string;
  exploreLabel: string;
  items: RelatedItem[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-32 mb-24">
      <span className="section-label">{label}</span>
      <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-extrabold text-cw-fg tracking-[-0.03em] font-[family-name:var(--font-jakarta)] mb-10 max-w-2xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item) => (
          <Link key={item.href} href={localizePath(locale, item.href)} className="cw-card group p-6 flex flex-col">
            {item.icon && (
              <div className="w-11 h-11 rounded-xl bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light mb-4 group-hover:bg-cw-red group-hover:text-white transition-colors">
                <Icon name={item.icon} size={20} />
              </div>
            )}
            <h3 className="text-cw-fg font-bold text-base mb-1.5 font-[family-name:var(--font-jakarta)] group-hover:text-cw-red-light transition-colors">
              {item.title}
            </h3>
            {item.desc && (
              <p className="text-cw-gray-400 text-xs leading-relaxed mb-4 flex-1">{item.desc}</p>
            )}
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-cw-red-light mt-auto">
              {exploreLabel}
              <ArrowRight size={13} aria-hidden className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
