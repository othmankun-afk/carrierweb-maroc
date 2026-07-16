import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { BookOpen, ChevronRight, Clock } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { getDict } from "@/lib/dictionaries";
import { localizePath, intlLocale, type Locale } from "@/lib/i18n";

export default async function ResourcesView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.resources;
  const lp = (p: string) => localizePath(locale, p);
  const articles = await getAllArticles(locale);

  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString(intlLocale[locale], {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

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

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((art) => (
              <Link
                key={art.slug}
                href={lp(`/ressources/${art.slug}`)}
                className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 flex flex-col justify-between hover:border-cw-red/30 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="bg-cw-red/10 text-cw-red-light border border-cw-red/20 px-2.5 py-1 rounded-md font-semibold text-[10px]">
                      {art.category}
                    </span>
                    <span className="text-cw-gray-500 text-[10px] inline-flex items-center gap-1">
                      <Clock size={10} aria-hidden />
                      {art.readingMinutes} {t.minRead}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-cw-fg group-hover:text-cw-red-light transition-colors leading-snug font-[family-name:var(--font-jakarta)]">
                    {art.title}
                  </h3>

                  <p className="text-cw-gray-400 text-[11px] leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.04] flex items-center justify-between">
                  <time dateTime={art.publishedAt} className="text-[10px] text-cw-gray-500">
                    {formatDate(art.publishedAt)}
                  </time>
                  <span className="text-cw-red-light text-[11px] font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t.read}
                    <ChevronRight size={12} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto space-y-5 mt-16">
            <div className="w-12 h-12 rounded-xl bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light mx-auto">
              <BookOpen size={24} />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-cw-fg font-[family-name:var(--font-jakarta)]">{t.newsletterTitle}</h3>
              <p className="text-cw-gray-400 text-xs max-w-md mx-auto leading-relaxed">
                {t.newsletterDesc}
              </p>
            </div>
            <div className="pt-2">
              <a
                href="mailto:info@carrierweb.ma?subject=Newsletter%20CarrierWeb%20Maroc"
                className="cta-primary text-xs py-2.5 px-6 justify-center inline-flex"
              >
                {t.newsletterCta}
              </a>
            </div>
          </div>

        </section>
      </main>

      <Footer locale={locale} dict={dict} />
    </>
  );
}
