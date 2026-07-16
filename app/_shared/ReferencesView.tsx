import Header from "../components/Header";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import Link from "next/link";
import { MapPin, Check, ChevronRight, Quote } from "lucide-react";
import { getDict } from "@/lib/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n";

export default function ReferencesView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.referencesPage;
  const lp = (p: string) => localizePath(locale, p);

  return (
    <>
      <Header locale={locale} dict={dict} />

      <main id="main-content" className="bg-cw-black min-h-screen pt-32 pb-12">
        <section className="relative py-16 bg-gradient-to-b from-cw-red/10 to-cw-black overflow-hidden border-b border-white/[0.04]">
          <div className="absolute inset-0 bg-gradient-to-t from-cw-black via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-1.5 text-xs text-cw-gray-500 mb-6">
              <Link href={lp("/")} className="hover:text-cw-fg transition-colors">{dict.common.home}</Link>
              <ChevronRight size={10} />
              <span className="text-cw-gray-300">{t.breadcrumb}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-cw-red/15 border border-cw-red/30 flex items-center justify-center text-cw-red-light flex-shrink-0 shadow-lg shadow-cw-red/5">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <span className="section-label mb-3">{t.label}</span>
                  <h1 className="page-title">
                    {t.h1}
                  </h1>
                </div>
              </div>
              <p className="page-desc max-w-xl sm:text-right">
                {t.tagline}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.metrics.map((m, i) => (
              <div key={i} className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 text-center hover:border-cw-red/30 transition-all space-y-1">
                <div className="text-3xl font-extrabold text-cw-red-light font-[family-name:var(--font-jakarta)]">{m.val}</div>
                <h4 className="text-cw-fg font-bold text-sm font-[family-name:var(--font-jakarta)]">{m.label}</h4>
                <p className="text-cw-gray-500 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              <h3 className="text-lg font-bold text-cw-fg border-l-3 border-cw-red pl-3 font-[family-name:var(--font-jakarta)]">{t.presenceTitle}</h3>
              <p className="text-cw-gray-300 text-sm leading-relaxed">{t.presenceP1}</p>
              <p className="text-cw-gray-300 text-sm leading-relaxed">{t.presenceP2}</p>

              <ul className="space-y-3 pt-4 border-t border-white/[0.04]">
                {t.checks.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-cw-gray-300">
                    <Check className="w-4.5 h-4.5 text-cw-red-light" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 sm:p-8 space-y-6 shadow-md">
              <h3 className="text-sm font-bold text-cw-fg border-b border-white/[0.04] pb-3 uppercase tracking-wider font-[family-name:var(--font-jakarta)]">{t.sideTitle}</h3>
              <div className="space-y-4">
                {t.sideBlocks.map((b, i) => (
                  <div key={i} className="space-y-1">
                    <h4 className="text-cw-red-light font-semibold text-xs">{b.title}</h4>
                    <p className="text-cw-gray-500 text-[11px] leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-bold text-cw-fg font-[family-name:var(--font-jakarta)]">{t.refsTitle}</h2>
            <p className="text-cw-gray-500 text-xs mt-1">{t.refsDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dict.testimonials.items.map((item, i) => (
              <figure key={i} className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 hover:border-cw-red/30 transition-all flex flex-col gap-4">
                <Quote className="w-6 h-6 text-cw-red-light flex-shrink-0" aria-hidden />
                <blockquote className="text-cw-gray-300 text-xs leading-relaxed flex-1">
                  {item.quote}
                </blockquote>
                <figcaption className="pt-4 border-t border-white/[0.04]">
                  <div className="text-cw-fg font-semibold text-xs">{item.author}</div>
                  <div className="text-cw-gray-500 text-[11px]">{item.role} — {item.company}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-cw-gray-600 text-[11px] text-center mt-6">{dict.testimonials.note}</p>
        </section>

        <div className="mt-16">
          <CTASection locale={locale} dict={dict} />
        </div>
      </main>

      <Footer locale={locale} dict={dict} />
    </>
  );
}
