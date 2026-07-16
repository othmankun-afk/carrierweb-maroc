import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FAQItem from "../components/FAQItem";
import JsonLd from "../components/JsonLd";
import RelatedGrid from "../components/RelatedGrid";
import { Icon } from "@/lib/icon-map";
import { getSolutions, getSolution } from "@/lib/content";
import { getDict } from "@/lib/dictionaries";
import { localizePath, htmlLang, type Locale } from "@/lib/i18n";
import { ArrowRight, ChevronRight, Quote, PhoneCall } from "lucide-react";

const BASE = "https://www.carrierweb.ma";

export default async function SolutionDetailView({ locale, slug }: { locale: Locale; slug: string }) {
  const dict = getDict(locale);
  const t = dict.solutionDetail;
  const [solution, allSolutions] = await Promise.all([
    getSolution(locale, slug),
    getSolutions(locale),
  ]);

  if (!solution) notFound();

  const lp = (p: string) => localizePath(locale, p);
  const url = `${BASE}${lp(`/solutions/${slug}`)}`;

  const otherSolutions = allSolutions
    .filter((s) => s.slug !== slug)
    .slice(0, 3)
    .map((s) => ({
      title: s.title,
      href: `/solutions/${s.slug}`,
      desc: s.shortDescription,
      icon: s.icon,
    }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: dict.common.home, item: `${BASE}${lp("/")}` },
      { "@type": "ListItem", position: 2, name: dict.header.nav.solutions, item: `${BASE}${lp("/solutions")}` },
      { "@type": "ListItem", position: 3, name: solution.title, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    serviceType: solution.title,
    description: solution.shortDescription || solution.tagline,
    url,
    inLanguage: htmlLang[locale],
    provider: { "@id": `${BASE}/#organization` },
    areaServed: { "@type": "Country", name: "Morocco" },
  };

  const faqSchema = solution.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        inLanguage: htmlLang[locale],
        mainEntity: solution.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Header locale={locale} dict={dict} />

      <main id="main-content" className="bg-cw-black">
        <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-24">
          <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
          <div
            className="absolute top-0 right-0 w-[520px] h-[520px] bg-cw-red/[0.06] rounded-full blur-[130px] pointer-events-none"
            aria-hidden
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label={dict.common.breadcrumbAria} className="flex items-center gap-1.5 text-xs text-cw-gray-500 mb-10">
              <Link href={lp("/")} className="hover:text-cw-fg transition-colors">{dict.common.home}</Link>
              <ChevronRight size={12} aria-hidden />
              <Link href={lp("/solutions")} className="hover:text-cw-fg transition-colors">{dict.header.nav.solutions}</Link>
              <ChevronRight size={12} aria-hidden />
              <span className="text-cw-gray-300">{solution.title}</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <span className="section-label">{t.badge}</span>
                <h1 className="page-title">
                  {solution.title}
                </h1>
                <p className="page-desc max-w-xl mt-6">
                  {solution.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-9">
                  <Link href={lp("/contact")} className="cta-primary justify-center text-sm px-7 py-4">
                    {t.ctaDemo}
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                  <a href="tel:+212522361988" className="cta-secondary justify-center text-sm px-7 py-4" dir="ltr">
                    <PhoneCall size={15} className="text-cw-red-light" aria-hidden />
                    {dict.common.talkToExpert}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 hidden lg:flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-cw-red/20 blur-[60px] rounded-full" aria-hidden />
                  <div className="relative w-44 h-44 xl:w-52 xl:h-52 rounded-[2rem] bg-gradient-to-br from-cw-surface-2 to-cw-surface border border-cw-red/20 flex items-center justify-center text-cw-red-light shadow-2xl">
                    <Icon name={solution.icon} className="w-20 h-20 xl:w-24 xl:h-24" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {solution.stats.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {solution.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-cw-surface border border-white/[0.06] rounded-2xl p-6 hover:border-cw-red/30 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-cw-red-light mb-3">
                    <Icon name={stat.icon} size={18} />
                  </div>
                  <div className="text-[2.5rem] leading-none font-extrabold text-cw-fg tracking-tight font-[family-name:var(--font-jakarta)]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-cw-gray-400 uppercase tracking-[0.12em] mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-32">
          <span className="section-label">{t.featuresLabel}</span>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-cw-fg tracking-[-0.03em] font-[family-name:var(--font-jakarta)] mb-12 max-w-2xl">
            {t.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {solution.features.map((feature, i) => (
              <div key={i} className="service-card">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light">
                    <Icon name={feature.icon} size={20} />
                  </div>
                  <span
                    aria-hidden
                    className="text-4xl font-extrabold leading-none text-cw-fg/[0.05] font-[family-name:var(--font-jakarta)] select-none"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-cw-fg font-bold text-base mb-2 font-[family-name:var(--font-jakarta)]">
                  {feature.title}
                </h3>
                <p className="text-cw-gray-400 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-cw-surface border border-white/[0.06] rounded-2xl overflow-hidden">
            <div className="px-7 py-5 border-b border-white/[0.06]">
              <span className="section-label !mb-0">{t.specsLabel}</span>
            </div>
            <dl className="divide-y divide-white/[0.06]">
              {solution.specs.map((spec, i) => (
                <div key={i} className="flex items-center justify-between px-7 py-4 hover:bg-white/[0.02] transition-colors">
                  <dt className="text-sm text-cw-gray-400">{spec.label}</dt>
                  <dd className="text-sm text-cw-fg font-semibold text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative bg-gradient-to-br from-cw-surface-2 to-cw-surface border border-white/[0.06] rounded-2xl p-7 sm:p-9 flex flex-col justify-between overflow-hidden">
            <Quote size={130} className="absolute -top-4 -right-4 text-cw-red-light/[0.05] pointer-events-none" aria-hidden />
            <div className="relative">
              <span className="section-label">{t.testimonialLabel}</span>
              <blockquote className="text-cw-fg text-lg sm:text-xl leading-relaxed font-medium">
                « {solution.testimonial.quote} »
              </blockquote>
            </div>
            <div className="relative flex items-center gap-4 pt-8 mt-8 border-t border-white/[0.06]">
              <div className="w-12 h-12 rounded-full bg-cw-red/15 border border-cw-red/30 flex items-center justify-center text-cw-red-light font-bold text-base font-[family-name:var(--font-jakarta)]">
                {solution.testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="text-cw-fg font-semibold text-sm font-[family-name:var(--font-jakarta)]">
                  {solution.testimonial.author}
                </div>
                <div className="text-cw-gray-500 text-xs">{solution.testimonial.company}</div>
              </div>
            </div>
          </div>
        </section>

        {solution.faq.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-32">
            <span className="section-label">{t.faqLabel}</span>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-cw-fg tracking-[-0.03em] font-[family-name:var(--font-jakarta)] mb-12 max-w-2xl">
              {t.faqTitle}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {solution.faq.map((item, i) => (
                <FAQItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>
        )}

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 lg:mt-32 mb-24 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 bg-cw-surface border border-white/[0.06] rounded-2xl p-7 sm:p-9">
            <span className="section-label">{t.seoLabel}</span>
            <p className="text-cw-gray-300 text-sm leading-relaxed">{solution.seoRichContent}</p>
          </div>
          <div className="lg:col-span-4 bg-gradient-to-br from-cw-red to-cw-red-dark rounded-2xl p-8 flex flex-col justify-center text-center shadow-[var(--shadow-glow-red)]">
            <h2 className="text-2xl font-extrabold text-white font-[family-name:var(--font-jakarta)] tracking-tight">
              {t.ctaBoxTitle}
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mt-3 mb-6">
              {t.ctaBoxDesc}
            </p>
            <Link
              href={lp("/contact")}
              className="inline-flex items-center justify-center gap-2 bg-white text-cw-red font-bold text-sm rounded-xl px-6 py-3.5 hover:bg-cw-gray-100 transition-colors"
            >
              {t.ctaDemo}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </section>

        <RelatedGrid
          locale={locale}
          label={t.relatedLabel}
          title={t.relatedTitle}
          exploreLabel={dict.common.explore}
          items={otherSolutions}
        />
      </main>

      <Footer locale={locale} dict={dict} />
    </>
  );
}
