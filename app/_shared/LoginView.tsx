"use client";

import { useState } from "react";
import Link from "next/link";
import AuthShell from "../components/AuthShell";
import { Mail, Lock, Eye, EyeOff, ArrowRight, ExternalLink, Loader2 } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const CLIENT_PORTAL_URL = "https://portalus1.carrierweb.com/website/web.redirect.php";

/*
 * Page de connexion. Ce site n'embarque pas de backend d'authentification :
 * le formulaire valide la saisie puis redirige vers le portail sécurisé
 * CarrierWeb. Le mot de passe n'est ni stocké ni transmis par le site.
 */
export default function LoginView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.auth.login;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.errEmail);
      return;
    }
    if (password.length < 6) {
      setError(t.errPwd);
      return;
    }

    setLoading(true);
    window.location.href = CLIENT_PORTAL_URL;
  };

  return (
    <AuthShell
      locale={locale}
      backHomeLabel={dict.auth.backHome}
      logoAria={dict.header.logoAria}
      title={t.title}
      subtitle={t.subtitle}
      footer={
        <>
          {t.noAccount}{" "}
          <Link href={localizePath(locale, "/inscription")} className="text-cw-red-light font-semibold hover:underline">
            {t.createAccount}
          </Link>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-cw-gray-300">
            {t.emailLabel}
          </label>
          <div className="relative">
            <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cw-gray-500" aria-hidden />
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPh}
              className="form-input pl-10"
              dir="ltr"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="text-xs font-medium text-cw-gray-300">
              {t.passwordLabel}
            </label>
            <a
              href={CLIENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cw-gray-500 hover:text-cw-fg transition-colors"
            >
              {t.forgot}
            </a>
          </div>
          <div className="relative">
            <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-cw-gray-500" aria-hidden />
            <input
              id="password"
              type={showPwd ? "text" : "password"}
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="form-input pl-10 pr-10"
              dir="ltr"
            />
            <button
              type="button"
              onClick={() => setShowPwd((v) => !v)}
              aria-label={showPwd ? t.hidePwd : t.showPwd}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-cw-gray-500 hover:text-cw-fg transition-colors"
            >
              {showPwd ? <EyeOff size={16} aria-hidden /> : <Eye size={16} aria-hidden />}
            </button>
          </div>
        </div>

        <label className="flex items-center gap-2 text-xs text-cw-gray-400 cursor-pointer select-none">
          <input type="checkbox" className="accent-cw-red w-4 h-4" />
          {t.remember}
        </label>

        {error && (
          <p role="alert" className="text-xs text-cw-red-light bg-cw-red/10 border border-cw-red/20 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="cta-primary w-full justify-center py-3.5 disabled:opacity-70">
          {loading ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden />
              {t.loading}
            </>
          ) : (
            <>
              {t.submit}
              <ArrowRight size={16} aria-hidden />
            </>
          )}
        </button>

        <p className="flex items-start gap-2 text-[11px] text-cw-gray-500 leading-relaxed">
          <ExternalLink size={13} className="text-cw-red-light flex-shrink-0 mt-0.5" aria-hidden />
          {t.note}
        </p>
      </form>
    </AuthShell>
  );
}
