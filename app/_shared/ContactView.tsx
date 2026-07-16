"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronRight, MessageCircle } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const CLIENT_PORTAL_URL = "https://portalus1.carrierweb.com/website/web.redirect.php";

// `footerSlot` : le Footer est un Server Component asynchrone (il lit les
// Réglages WP) ; on ne peut pas l'importer dans ce composant « client », il
// est donc passé en prop depuis la page serveur.
export default function ContactView({
  locale,
  dict,
  footerSlot,
}: {
  locale: Locale;
  dict: Dictionary;
  footerSlot: React.ReactNode;
}) {
  const t = dict.contact;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // `true` quand l'envoi API a réussi ; `false` quand on est retombé sur le
  // repli mailto: (le message de confirmation diffère selon le cas).
  const [sentViaApi, setSentViaApi] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    tailleFlotte: t.fleetOptions[0],
    message: "",
  });

  const openMailtoFallback = () => {
    const body = [
      `${t.nameLabel} : ${formData.nom}`,
      `${t.companyLabel} : ${formData.entreprise}`,
      `${t.emailFieldLabel} : ${formData.email}`,
      `${t.phoneFieldLabel} : ${formData.telephone}`,
      `${t.fleetLabel} : ${formData.tailleFlotte}`,
      "",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:info@carrierweb.ma?subject=${encodeURIComponent(
      `${dict.common.requestDemo} — ${formData.entreprise || formData.nom}`
    )}&body=${encodeURIComponent(body)}`;
    setSentViaApi(false);
    setFormSubmitted(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSentViaApi(true);
        setFormSubmitted(true);
      } else {
        // API indisponible ou en erreur → repli sur le client mail local.
        openMailtoFallback();
      }
    } catch {
      openMailtoFallback();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header locale={locale} dict={dict} />

      <main id="main-content" className="bg-cw-black min-h-screen pt-[110px] pb-20">
        <section className="relative py-12 bg-gradient-to-b from-cw-red/10 to-cw-black overflow-hidden border-b border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-1.5 text-xs text-cw-gray-500 mb-6">
              <Link href={localizePath(locale, "/")} className="hover:text-cw-fg transition-colors">{dict.common.home}</Link>
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

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-cw-fg mb-4 font-[family-name:var(--font-jakarta)]">{t.infoTitle}</h2>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-cw-fg font-semibold text-xs font-[family-name:var(--font-jakarta)]">{t.addressLabel}</h4>
                    <p className="text-cw-gray-400 text-xs mt-1 leading-relaxed">
                      CarrierWeb Maroc<br />
                      {t.addressValue}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-cw-fg font-semibold text-xs font-[family-name:var(--font-jakarta)]">{t.phoneLabel}</h4>
                    <p className="text-cw-gray-400 text-xs mt-1" dir="ltr">
                      <a href="tel:+212522361988" className="hover:text-cw-fg transition-colors">
                        +212 (0)5 22 36 19 88
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-cw-fg font-semibold text-xs font-[family-name:var(--font-jakarta)]">{t.emailLabel}</h4>
                    <p className="text-cw-gray-400 text-xs mt-1" dir="ltr">
                      <a href="mailto:info@carrierweb.ma" className="hover:text-cw-fg transition-colors">
                        info@carrierweb.ma
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-cw-fg font-semibold text-xs font-[family-name:var(--font-jakarta)]">{t.availabilityLabel}</h4>
                    <p className="text-cw-gray-400 text-xs mt-1 leading-relaxed">
                      {t.availability1}<br />
                      {t.availability2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 text-center space-y-3">
              <h3 className="text-cw-fg font-semibold text-sm font-[family-name:var(--font-jakarta)]">{t.clientBoxTitle}</h3>
              <p className="text-cw-gray-400 text-xs leading-relaxed">
                {t.clientBoxDesc}
              </p>
              <a
                href={CLIENT_PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cw-red-light hover:underline pt-1"
              >
                <span>{t.clientBoxCta}</span>
                <span>→</span>
              </a>
            </div>

            <div className="bg-cw-green/5 border border-cw-green/20 rounded-2xl p-6 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-cw-green/10 flex items-center justify-center text-cw-green mx-auto">
                <MessageCircle size={20} />
              </div>
              <h3 className="text-cw-green font-semibold text-sm font-[family-name:var(--font-jakarta)]">{t.waTitle}</h3>
              <p className="text-cw-gray-500 text-xs leading-relaxed">
                {t.waDesc}
              </p>
              <a
                href="https://wa.me/212522361988"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-cw-green/20 hover:bg-cw-green/30 text-cw-green border border-cw-green/30 rounded-xl text-xs font-bold transition-all w-full"
              >
                <span>{t.waCta}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-cw-surface border border-white/[0.04] rounded-2xl p-6 sm:p-8">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cw-red/10 flex items-center justify-center text-cw-red-light mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl font-bold text-cw-fg font-[family-name:var(--font-jakarta)]">{sentViaApi ? t.sentTitle : t.successTitle}</h3>
                  <p className="text-cw-gray-300 text-xs max-w-sm mx-auto leading-relaxed">
                    {sentViaApi ? t.sentBody : t.successBody}{" "}
                    <a href="mailto:info@carrierweb.ma" className="text-cw-red-light hover:underline">info@carrierweb.ma</a>{" "}
                    {t.successOr} +212 (0)5 22 36 19 88.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="cta-outline text-xs mt-4"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-cw-fg mb-2 font-[family-name:var(--font-jakarta)]">{t.formTitle}</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="nom" className="text-[11px] text-cw-gray-400 font-medium">{t.nameLabel}</label>
                      <input
                        id="nom"
                        type="text"
                        required
                        className="form-input"
                        placeholder={t.namePh}
                        value={formData.nom}
                        onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="entreprise" className="text-[11px] text-cw-gray-400 font-medium">{t.companyLabel}</label>
                      <input
                        type="text"
                        required
                        className="form-input"
                        id="entreprise"
                        placeholder={t.companyPh}
                        value={formData.entreprise}
                        onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] text-cw-gray-400 font-medium">{t.emailFieldLabel}</label>
                      <input
                        type="email"
                        required
                        className="form-input"
                        id="email"
                        placeholder={t.emailPh}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        dir="ltr"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="telephone" className="text-[11px] text-cw-gray-400 font-medium">{t.phoneFieldLabel}</label>
                      <input
                        type="tel"
                        required
                        className="form-input"
                        id="telephone"
                        placeholder={t.phonePh}
                        value={formData.telephone}
                        onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="tailleFlotte" className="text-[11px] text-cw-gray-400 font-medium">{t.fleetLabel}</label>
                    <select
                      id="tailleFlotte"
                      className="form-input"
                      value={formData.tailleFlotte}
                      onChange={(e) => setFormData({ ...formData, tailleFlotte: e.target.value })}
                    >
                      {t.fleetOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[11px] text-cw-gray-400 font-medium">{t.messageLabel}</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      className="form-input resize-none"
                      placeholder={t.messagePh}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="cta-primary w-full justify-center py-3 text-xs mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{submitting ? t.sending : t.submit}</span>
                    <Send size={12} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-cw-surface border border-white/[0.04] rounded-2xl overflow-hidden h-[350px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7082165039327!2d-7.632230623439498!3d33.586940842013824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d296cfcdb0eb%3A0xc3fca29221160356!2s39%20Rue%20Normandie%2C%20Casablanca%2020250!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CarrierWeb Maroc — Casablanca"
            />
          </div>
        </section>

      </main>

      {footerSlot}
    </>
  );
}
