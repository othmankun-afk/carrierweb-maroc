import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import JsonLd from "../components/JsonLd";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { getDict } from "@/lib/dictionaries";
import { localizePath, intlLocale, htmlLang, type Locale } from "@/lib/i18n";
import { ArrowRight, ChevronRight, CheckCircle2, Clock } from "lucide-react";

const BASE = "https://www.carrierweb.ma";

export default async function ArticleView({ locale, slug }: { locale: Locale; slug: string }) {
  const dict = getDict(locale);
  const t = dict.articlePage;
  const article = await getArticleBySlug(locale, slug);
  if (!article) notFound();

  const lp = (p: string) => localizePath(locale, p);
  const url = `${BASE}${lp(`/ressources/${slug}`)}`;
  const others = (await getAllArticles(locale)).filter((a) => a.slug !== slug);

  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString(intlLocale[locale], {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    inLanguage: htmlLang[locale],
    mainEntityOfPage: url,
    author: { "@id": `${BASE}/#organization` },
    publisher: { "@id": `${BASE}/#organization` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.common.home, item: `${BASE}${lp("/")}` },
      { "@type": "ListItem", position: 2, name: dict.resources.breadcrumb, item: `${BASE}${lp("/ressources")}` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <Header locale={locale} dict={dict} />

      <main id="main-content" className="bg-cw-black min-h-screen pt-[110px] pb-20">
        <section className="relative py-12 bg-gradient-to-b from-cw-red/10 to-cw-black overflow-hidden border-b border-white/[0.04]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <nav aria-label={dict.common.breadcrumbAria} className="flex items-center gap-1.5 text-xs text-cw-gray-500 mb-6 flex-wrap">
              <Link href={lp("/")} className="hover:text-cw-fg transition-colors">{dict.common.home}</Link>
              <ChevronRight size={10} aria-hidden />
              <Link href={lp("/ressources")} className="hover:text-cw-fg transition-colors">{dict.resources.breadcrumb}</Link>
              <ChevronRight size={10} aria-hidden />
              <span className="text-cw-gray-300 line-clamp-1">{article.title}</span>
            </nav>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs flex-wrap">
                <span className="bg-cw-red/10 text-cw-red-light border border-cw-red/20 px-2.5 py-1 rounded-md font-semibold text-[10px]">
                  {article.category}
                </span>
                <span className="text-cw-gray-500 inline-flex items-center gap-1.5">
                  <Clock size={12} aria-hidden />
                  {article.readingMinutes} {t.minRead}
                </span>
                <time dateTime={article.publishedAt} className="text-cw-gray-500">
                  {formatDate(article.publishedAt)}
                </time>
              </div>
              <h1 className="page-title">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <p className="text-cw-gray-300 text-base sm:text-lg leading-relaxed font-medium border-l-2 border-cw-red pl-5">
            {article.intro}
          </p>

          <div className="mt-12 space-y-12">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl sm:text-2xl font-bold text-cw-fg tracking-tight font-[family-name:var(--font-jakarta)] mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-cw-gray-400 text-sm sm:text-[15px] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-cw-gray-400 text-sm leading-relaxed">
                        <CheckCircle2 size={16} className="text-cw-red-light mt-0.5 flex-shrink-0" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-14 bg-cw-surface border border-white/[0.06] rounded-2xl p-7 sm:p-9">
            <span className="section-label">{t.takeaways}</span>
            <ul className="space-y-3 mt-2">
              {article.keyTakeaways.map((k, i) => (
                <li key={i} className="flex items-start gap-3 text-cw-gray-300 text-sm leading-relaxed">
                  <CheckCircle2 size={16} className="text-cw-red-light mt-0.5 flex-shrink-0" aria-hidden />
                  <span>{k}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            <div className="lg:col-span-7 bg-cw-surface border border-white/[0.06] rounded-2xl p-7">
              <span className="section-label">{t.relatedTitle}</span>
              <ul className="space-y-3 mt-2">
                {article.relatedSolutions.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={lp(s.href)}
                      className="inline-flex items-center gap-2 text-sm text-cw-gray-300 hover:text-cw-red-light transition-colors font-medium"
                    >
                      <ArrowRight size={14} aria-hidden />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 bg-gradient-to-br from-cw-red to-cw-red-dark rounded-2xl p-7 flex flex-col justify-center text-center shadow-[var(--shadow-glow-red)]">
              <h2 className="text-xl font-extrabold text-white font-[family-name:var(--font-jakarta)] tracking-tight">
                {t.ctaTitle}
              </h2>
              <p className="text-white/80 text-xs leading-relaxed mt-2 mb-5">
                {t.ctaDesc}
              </p>
              <Link
                href={lp("/contact")}
                className="inline-flex items-center justify-center gap-2 bg-white text-cw-red font-bold text-sm rounded-xl px-6 py-3 hover:bg-cw-gray-100 transition-colors"
              >
                {t.ctaButton}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>

          {others.length > 0 && (
            <div className="mt-16 pt-10 border-t border-white/[0.06]">
              <h2 className="text-lg font-bold text-cw-fg font-[family-name:var(--font-jakarta)] mb-6">
                {t.continueReading}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {others.map((a) => (
                  <Link
                    key={a.slug}
                    href={lp(`/ressources/${a.slug}`)}
                    className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 hover:border-cw-red/30 transition-all group block"
                  >
                    <span className="bg-cw-red/10 text-cw-red-light border border-cw-red/20 px-2.5 py-1 rounded-md font-semibold text-[10px]">
                      {a.category}
                    </span>
                    <h3 className="text-sm font-bold text-cw-fg group-hover:text-cw-red-light transition-colors leading-snug font-[family-name:var(--font-jakarta)] mt-3">
                      {a.title}
                    </h3>
                    <p className="text-cw-gray-500 text-[11px] leading-relaxed mt-2 line-clamp-2">{a.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer locale={locale} dict={dict} />
    </>
  );
}
