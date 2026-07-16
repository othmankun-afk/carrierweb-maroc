import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Icon } from "@/lib/icon-map";
import { getSectors } from "@/lib/content";
import { getDict } from "@/lib/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n";

export default async function SectorsListingView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.listing.sectors;
  const sectors = await getSectors(locale);
  const lp = (p: string) => localizePath(locale, p);

  return (
    <>
      <Header locale={locale} dict={dict} />

      <main id="main-content" className="bg-cw-black min-h-screen pt-[110px] pb-20">
        <section className="relative py-12 bg-gradient-to-b from-cw-red/10 to-cw-black overflow-hidden border-b border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-1.5 text-xs text-cw-gray-500 mb-6">
              <Link href={lp("/")} className="hover:text-cw-fg transition-colors">{dict.common.home}</Link>
              <ChevronRight size={10} />
              <span className="text-cw-gray-300">{t.breadcrumb}</span>
            </div>

            <div className="space-y-3">
              <span className="section-label">{t.label}</span>
              <h1 className="page-title">
                {t.h1Pre}<span className="gradient-text">{t.h1Hl}</span>
              </h1>
              <p className="page-desc max-w-3xl">
                {t.desc}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sec) => (
              <div
                key={sec.slug}
                className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-cw-red/30 transition-all group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light mb-6 group-hover:bg-cw-red group-hover:text-white transition-all">
                    <Icon name={sec.icon} className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-cw-fg mb-3 group-hover:text-cw-red-light transition-colors font-[family-name:var(--font-jakarta)]">
                    {sec.title}
                  </h3>
                  <p className="text-cw-gray-400 text-xs leading-relaxed mb-6">
                    {sec.listingDescription}
                  </p>
                </div>
                <Link
                  href={lp(`/secteurs/${sec.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cw-red-light hover:gap-2.5 transition-all w-fit"
                >
                  <span>{t.seeMore}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-gradient-to-br from-cw-red/10 to-cw-surface border border-cw-red/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h2 className="text-lg font-bold text-cw-fg font-[family-name:var(--font-jakarta)] mb-1">
                {t.crossTitle}
              </h2>
              <p className="text-cw-gray-400 text-xs leading-relaxed max-w-xl">
                {t.crossDesc}
              </p>
            </div>
            <Link href={lp("/solutions")} className="cta-outline text-xs px-5 py-3 flex-shrink-0">
              {t.crossCta}
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </section>
      </main>

      <Footer locale={locale} dict={dict} />
    </>
  );
}
