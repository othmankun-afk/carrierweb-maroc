import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Fuel, MapPin, Headset } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import type { SiteSettings } from "@/lib/site-settings";

/* Hero statique (Server Component) — remplace l'ancien carrousel
   auto-rotatif : un seul message fort, meilleur LCP (une seule image
   priorisée), pas de layout shift ni de texte qui défile.

   Le titre et le sous-titre peuvent être surchargés depuis WordPress
   (« Réglages du site », locale fr) ; sinon repli sur le dictionnaire. */

const proofIcons = [
  <Fuel key="f" size={15} aria-hidden />,
  <MapPin key="m" size={15} aria-hidden />,
  <Headset key="h" size={15} aria-hidden />,
];

export default function Hero({
  locale,
  dict,
  settings = {},
}: {
  locale: Locale;
  dict: Dictionary;
  settings?: SiteSettings;
}) {
  const t = dict.hero;
  const titleA = settings.heroTitleLine1 ?? t.titleA;
  const titleHl = settings.heroTitleHighlight ?? t.titleBhl;
  const titleC = settings.heroTitleLine3 ?? t.titleC;
  const subtitle = settings.heroSubtitle ?? t.subtitle;
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-[72px]"
      aria-label={t.sectionAria}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/page-home-2.webp"
          alt={t.imgAlt}
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADwAQCdASoQABAABUB8JZgCdAEDmLvJemAA/tpyg4VD6Cue1HBAMG44X75HYoJWPMRKhL+i6PRTpMV+fgAAAA=="
          className="object-cover object-[center_65%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cw-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="section-label animate-fadeInDown">{t.label}</p>

          <h1 className="page-title page-title--hero mb-7 animate-fadeInUp">
            {titleA}
            <br />
            {t.titleBpre}
            <span className="text-cw-red-light">{titleHl}</span>
            <span className="text-cw-red">.</span>
            <br />
            {titleC}
            <span className="text-cw-red">.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl animate-fadeInUp" style={{ animationDelay: "120ms" }}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 animate-fadeInUp" style={{ animationDelay: "220ms" }}>
            <Link href={localizePath(locale, "/contact")} className="cta-primary justify-center text-sm sm:text-base px-7 sm:px-8 py-4">
              {t.ctaPrimary}
              <ArrowRight size={17} aria-hidden />
            </Link>
            <Link
              href={localizePath(locale, "/solutions")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-4 hover:bg-white/20 transition-colors font-[family-name:var(--font-jakarta)]"
            >
              {t.ctaSecondary}
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 animate-fadeInUp" style={{ animationDelay: "320ms" }}>
            {t.proofs.map((text, i) => (
              <li key={text} className="flex items-center gap-2 text-xs sm:text-sm text-white/85">
                <span className="w-6 h-6 rounded-md bg-cw-red/15 border border-cw-red/25 flex items-center justify-center text-cw-red-light flex-shrink-0">
                  {proofIcons[i]}
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cw-black to-transparent z-10" />
    </section>
  );
}
