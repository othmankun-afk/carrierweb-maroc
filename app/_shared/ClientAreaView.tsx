import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LogIn, Info, HelpCircle, PhoneCall, ChevronRight, CheckCircle2 } from "lucide-react";
import { getDict } from "@/lib/dictionaries";
import { localizePath, type Locale } from "@/lib/i18n";

const CLIENT_PORTAL_URL = "https://portalus1.carrierweb.com/website/web.redirect.php";

export default function ClientAreaView({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const t = dict.clientArea;
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

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">

          <div className="md:col-span-7 bg-cw-surface border border-white/[0.04] rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-cw-fg font-[family-name:var(--font-jakarta)]">{t.portalTitle}</h2>
              <p className="text-cw-gray-400 text-xs leading-relaxed">
                {t.portalDesc}
              </p>

              <ul className="space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-xs text-cw-gray-300">
                    <CheckCircle2 size={14} className="text-cw-red-light flex-shrink-0" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3 bg-cw-red/5 border border-cw-red/10 rounded-xl p-4 text-xs text-cw-gray-400">
                <Info size={16} className="text-cw-red-light flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {t.securityNote}
                </p>
              </div>
            </div>

            <a
              href={CLIENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary justify-center text-xs py-4 w-full mt-6"
            >
              <LogIn size={18} />
              <span>{t.openPortal}</span>
            </a>
          </div>

          <div className="md:col-span-5 space-y-6">
            <div className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-white/[0.04] pb-3">
                <HelpCircle size={18} className="text-cw-red-light" />
                <h3 className="text-cw-fg font-semibold text-sm font-[family-name:var(--font-jakarta)]">{t.helpTitle}</h3>
              </div>
              <p className="text-cw-gray-400 text-xs leading-relaxed">
                {t.helpDesc}
              </p>
            </div>

            <div className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 border-b border-white/[0.04] pb-3">
                <PhoneCall size={18} className="text-cw-red-light" />
                <h3 className="text-cw-fg font-semibold text-sm font-[family-name:var(--font-jakarta)]">{t.supportTitle}</h3>
              </div>
              <div className="space-y-2 text-xs">
                <p className="text-cw-gray-400">
                  {t.byPhone} <a href="tel:+212522361988" className="text-cw-fg hover:text-cw-red-light transition-colors font-medium" dir="ltr">+212 (0)5 22 36 19 88</a>
                </p>
                <p className="text-cw-gray-400">
                  {t.byEmail} <a href="mailto:support@carrierweb.ma" className="text-cw-fg hover:text-cw-red-light transition-colors font-medium" dir="ltr">support@carrierweb.ma</a>
                </p>
                <p className="text-cw-gray-500 italic mt-2">
                  {t.supportNote}
                </p>
              </div>
            </div>
          </div>

        </section>
      </main>

      <Footer locale={locale} dict={dict} />
    </>
  );
}
