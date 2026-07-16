"use client";

import { useState } from "react";
import Link from "next/link";
import AuthShell from "../components/AuthShell";
import { Building2, User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

/*
 * Page d'inscription. Pas de backend de création de compte : la soumission
 * enregistre une DEMANDE d'accès (e-mail pré-rempli vers info@carrierweb.ma)
 * qu'un conseiller active sur la plateforme. Le mot de passe n'est jamais
 * transmis par e-mail.
 */
export default function RegisterView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.auth.register;
  const [form, setForm] = useState({
    entreprise: "",
    nom: "",
    email: "",
    telephone: "",
    password: "",
    confirm: "",
  });
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.entreprise.trim() || !form.nom.trim()) {
      setError(t.errNames);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError(t.errEmail);
      return;
    }
    if (form.password.length < 8) {
      setError(t.errPwdLen);
      return;
    }
    if (form.password !== form.confirm) {
      setError(t.errMatch);
      return;
    }

    const body = [
      `${t.title} — Espace Client`,
      ``,
      `${t.companyLabel} : ${form.entreprise}`,
      `${t.nameLabel} : ${form.nom}`,
      `${t.emailLabel} : ${form.email}`,
      `${t.phoneLabel} : ${form.telephone}`,
    ].join("\n");
    window.location.href = `mailto:info@carrierweb.ma?subject=${encodeURIComponent(
      `${t.title} — ${form.entreprise}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <AuthShell
        locale={locale}
        backHomeLabel={dict.auth.backHome}
        logoAria={dict.header.logoAria}
        title={t.sentTitle}
        subtitle={t.sentSubtitle}
        footer={
          <Link href={localizePath(locale, "/")} className="text-cw-red-light font-semibold hover:underline">
            {t.backHomeLink}
          </Link>
        }
      >
        <div className="text-center space-y-4 py-4">
          <div className="w-16 h-16 rounded-full bg-cw-red/10 border border-cw-red/20 flex items-center justify-center text-cw-red-light mx-auto">
            <CheckCircle2 size={34} aria-hidden />
          </div>
          <p className="text-cw-gray-300 text-sm leading-relaxed">
            {t.sentBody}
          </p>
          <p className="text-[11px] text-cw-gray-500">
            {t.sentFallback}{" "}
            <a href="mailto:info@carrierweb.ma" className="text-cw-red-light hover:underline">info@carrierweb.ma</a>.
          </p>
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell
      locale={locale}
      backHomeLabel={dict.auth.backHome}
      logoAria={dict.header.logoAria}
      title={t.title}
      subtitle={t.subtitle}
      footer={
        <>
          {t.already}{" "}
          <Link href={localizePath(locale, "/connexion")} className="text-cw-red-light font-semibold hover:underline">
            {t.signIn}
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field id="entreprise" label={t.companyLabel} icon={<Building2 size={16} />} value={form.entreprise} onChange={set("entreprise")} placeholder={t.companyPh} autoComplete="organization" />
          <Field id="nom" label={t.nameLabel} icon={<User size={16} />} value={form.nom} onChange={set("nom")} placeholder={t.namePh} autoComplete="name" />
        </div>
        <Field id="email" label={t.emailLabel} type="email" icon={<Mail size={16} />} value={form.email} onChange={set("email")} placeholder={t.emailPh} autoComplete="email" dir="ltr" />
        <Field id="telephone" label={t.phoneLabel} type="tel" icon={<Phone size={16} />} value={form.telephone} onChange={set("telephone")} placeholder={t.phonePh} autoComplete="tel" dir="ltr" />

        <div className="space-y-1.5">
          <label htmlFor="password" className="text-xs font-medium text-cw-gray-300">{t.passwordLabel}</label>
          <div className="relative">
            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cw-gray-500" aria-hidden />
            <input
              id="password"
              type={showPwd ? "text" : "password"}
              autoComplete="new-password"
              required
              value={form.password}
              onChange={set("password")}
              placeholder={t.passwordPh}
              className="form-input pl-10 pr-10"
              dir="ltr"
            />
            <button
              type="button"
              onClick={() => setShowPwd((v) => !v)}
              aria-label={showPwd ? dict.auth.login.hidePwd : dict.auth.login.showPwd}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-cw-gray-500 hover:text-cw-fg transition-colors"
            >
              {showPwd ? <EyeOff size={16} aria-hidden /> : <Eye size={16} aria-hidden />}
            </button>
          </div>
        </div>

        <Field id="confirm" label={t.confirmLabel} type={showPwd ? "text" : "password"} icon={<Lock size={16} />} value={form.confirm} onChange={set("confirm")} placeholder={t.confirmPh} autoComplete="new-password" dir="ltr" />

        {error && (
          <p role="alert" className="text-xs text-cw-red-light bg-cw-red/10 border border-cw-red/20 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <button type="submit" className="cta-primary w-full justify-center py-3.5">
          {t.submit}
          <ArrowRight size={16} aria-hidden />
        </button>

        <p className="flex items-start gap-2 text-[11px] text-cw-gray-500 leading-relaxed">
          <ShieldCheck size={13} className="text-cw-red-light flex-shrink-0 mt-0.5" aria-hidden />
          {t.note}
        </p>
      </form>
    </AuthShell>
  );
}

function Field({
  id, label, icon, value, onChange, placeholder, type = "text", autoComplete, dir,
}: {
  id: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-xs font-medium text-cw-gray-300">{label}</label>
      <div className="relative">
        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cw-gray-500">{icon}</span>
        <input
          id={id}
          type={type}
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          dir={dir}
          className="form-input pl-10"
        />
      </div>
    </div>
  );
}
