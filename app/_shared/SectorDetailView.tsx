import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import JsonLd from "../components/JsonLd";
import RelatedGrid from "../components/RelatedGrid";
import { Icon } from "@/lib/icon-map";
import { getSectors, getSector } from "@/lib/content";
import { getDict } from "@/lib/dictionaries";
import { localizePath, htmlLang, type Locale } from "@/lib/i18n";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const BASE = "https://www.carrierweb.ma";

export default async function SectorDetailView({ locale, slug }: { locale: Locale; slug: string }) {
  const dict = getDict(locale);
  const t = dict.sectorDetail;
  const [sector, allSectors] = await Promise.all([
    getSector(locale, slug),
    getSectors(locale),
  ]);

  if (!sector) notFound();

  const lp = (p: string) => localizePath(locale, p);
  const url = `${BASE}${lp(`/secteurs/${slug}`)}`;

  const otherSectors = allSectors
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({
      title: s.title,
      href: `/secteurs/${s.slug}`,
      desc: s.listingDescription,
      icon: s.icon,
    }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.common.home, item: `${BASE}${lp("/")}` },
      { "@type": "ListItem", position: 2, name: dict.header.nav.sectors, item: `${BASE}${lp("/secteurs")}` },
      { "@type": "ListItem", position: 3, name: sector.title, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${dict.header.nav.sectors} — ${sector.title}`,
    serviceType: dict.meta.solutions.title,
    description: sector.listingDescription || sector.tagline,
    url,
    inLanguage: htmlLang[locale],
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "Country", name: "Morocco" },
    audience: { "@type": "BusinessAudience", name: sector.title },
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <Header locale={locale} dict={dict} />

      <main id="main-content" className="bg-cw-black min-h-screen pt-32 pb-12">
        <section className="relative py-16 bg-gradient-to-b from-cw-red/10 to-cw-black overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-t from-cw-black via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-1.5 text-xs text-cw-gray-500 mb-6">
              <Link href={lp("/")} className="hover:text-cw-fg transition-colors">{dict.common.home}</Link>
              <ChevronRight size={10} />
              <Link href={lp("/secteurs")} className="hover:text-cw-fg transition-colors">{dict.header.nav.sectors}</Link>
              <ChevronRight size={10} />
              <span className="text-cw-gray-300">{sector.title}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cw-red/15 border border-cw-red/30 flex items-center justify-center text-cw-red-light flex-shrink-0 shadow-lg shadow-cw-red/5">
                  <Icon name={sector.icon} className="w-8 h-8" />
                </div>
                <div>
                  <span className="section-label mb-3">{t.badge}</span>
                  <h1 className="page-title">
                    {sector.title}
                  </h1>
                </div>
              </div>
              <p className="page-desc max-w-xl sm:text-right">
                {sector.tagline}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-black text-cw-fg">{t.useCasesTitle}</h2>
            <p className="text-cw-gray-400 text-xs mt-1">{t.useCasesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sector.useCases.map((uc, i) => (
              <div key={i} className="bg-cw-surface border border-white/5 rounded-2xl p-6 hover:border-cw-red/30 transition-all group space-y-3">
                <div className="w-9 h-9 rounded-lg bg-cw-red/10 flex items-center justify-center text-cw-red-light group-hover:bg-cw-red group-hover:text-white transition-colors">
                  <CheckCircle2 size={18} />
                </div>
                <h4 className="text-cw-fg font-bold text-sm">{uc.title}</h4>
                <p className="text-cw-gray-400 text-xs leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">

          <div className="lg:col-span-8 space-y-8">
            <div className="bg-cw-surface border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              <h3 className="text-lg font-bold text-cw-fg border-l-3 border-cw-red pl-3">{t.challengesTitle}</h3>
              <p className="text-cw-gray-300 text-sm leading-relaxed whitespace-pre-line">{sector.description}</p>
            </div>

            <div className="bg-cw-surface/50 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-lg font-bold text-cw-fg border-l-3 border-cw-red pl-3">{t.expertiseTitle}</h3>
              <p className="text-cw-gray-400 text-xs leading-relaxed">{sector.seoRichContent}</p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-cw-surface border border-white/5 rounded-2xl p-6 space-y-5">
              <h3 className="text-sm font-bold text-cw-fg border-b border-white/5 pb-3 uppercase tracking-wider">
                {t.recommendedTitle}
              </h3>
              <div className="space-y-3">
                {sector.recommendedSolutions.map((sol, i) => (
                  <Link
                    key={i}
                    href={lp(sol.href)}
                    className="flex items-center justify-between p-3 rounded-lg bg-cw-black hover:bg-cw-red/10 border border-white/5 hover:border-cw-red/20 text-xs text-cw-fg font-medium transition-all group"
                  >
                    <span>{sol.title}</span>
                    <ArrowRight size={14} className="text-cw-gray-500 group-hover:text-cw-red-light group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cw-red/15 to-cw-surface border border-cw-red/20 rounded-2xl p-6 text-center space-y-4 shadow-lg shadow-cw-red/5">
              <h3 className="text-base font-bold text-cw-fg">
                {t.expertBoxTitle}
              </h3>
              <p className="text-cw-gray-300 text-xs leading-relaxed">
                {t.expertBoxDesc}
              </p>
              <Link href={lp("/contact")} className="cta-primary text-xs w-full justify-center py-3">
                <span>{t.expertBoxCta}</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        <RelatedGrid
          locale={locale}
          label={t.relatedLabel}
          title={t.relatedTitle}
          exploreLabel={dict.common.explore}
          items={otherSectors}
        />

        <div className="mt-8">
          <CTASection locale={locale} dict={dict} />
        </div>
      </main>

      <Footer locale={locale} dict={dict} />
    </>
  );
}
