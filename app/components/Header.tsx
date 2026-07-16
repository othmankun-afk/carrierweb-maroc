"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ExternalLink,
  ArrowRight,
  LogIn,
  MapPin,
  Fuel,
  Thermometer,
  MessageSquare,
  BarChart3,
  Settings2,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { localizePath, stripLocale, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const CLIENT_PORTAL_URL = "https://portalus1.carrierweb.com/website/web.redirect.php";

// Icônes + slugs fixes ; les libellés/descriptions viennent du dictionnaire
// (dict.header.solutionItems / sectorItems), dans le même ordre.
const solutionMeta = [
  { href: "/solutions/gestion-flotte", icon: <BarChart3 size={16} /> },
  { href: "/solutions/suivi-gps", icon: <MapPin size={16} /> },
  { href: "/solutions/gestion-carburant", icon: <Fuel size={16} /> },
  { href: "/solutions/controle-temperature", icon: <Thermometer size={16} /> },
  { href: "/solutions/communication-chauffeurs", icon: <MessageSquare size={16} /> },
  { href: "/solutions/integration", icon: <Settings2 size={16} /> },
];

const sectorHrefs = [
  "/secteurs/transport-routier",
  "/secteurs/logistique",
  "/secteurs/btp",
  "/secteurs/distribution",
];

/** Logo officiel (public/logo.webp) : texte noir sur blanc — affiché dans
 *  une pastille blanche pour rester lisible sur le fond sombre du site. */
function Logo({ locale, label, compact = false }: { locale: Locale; label: string; compact?: boolean }) {
  return (
    <Link
      href={localizePath(locale, "/")}
      aria-label={label}
      className="flex items-center gap-2 flex-shrink-0 group"
    >
      <span className="flex items-center bg-white rounded-lg px-2.5 py-2 ring-1 ring-white/20 transition-shadow duration-300 group-hover:shadow-[0_0_18px_rgba(191,32,38,0.35)]">
        <Image
          src="/logo.webp"
          alt="CarrierWeb"
          width={560}
          height={54}
          priority
          className={compact ? "h-[12px] w-auto" : "h-[13px] w-auto sm:h-[15px]"}
        />
      </span>
      <span className="inline-flex items-center rounded-md bg-cw-red px-1.5 py-[3px] text-[9px] font-bold tracking-[0.18em] text-white leading-none font-[family-name:var(--font-jakarta)]">
        MAROC
      </span>
    </Link>
  );
}

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.header;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Éléments de navigation assemblés à partir du dictionnaire.
  const solutionItems = solutionMeta.map((m, i) => ({
    ...m,
    label: t.solutionItems[i].label,
    desc: t.solutionItems[i].desc,
  }));
  const navItems = [
    { key: "home", label: t.nav.home, href: "/" },
    { key: "solutions", label: t.nav.solutions, href: "/solutions", hasMega: true },
    {
      key: "sectors",
      label: t.nav.sectors,
      href: "/secteurs",
      children: sectorHrefs.map((href, i) => ({ label: t.sectorItems[i], href })),
    },
    { key: "why", label: t.nav.why, href: "/pourquoi-carrierweb" },
    { key: "references", label: t.nav.references, href: "/references" },
    { key: "resources", label: t.nav.resources, href: "/ressources" },
    { key: "contact", label: t.nav.contact, href: "/contact" },
  ];

  const lp = (path: string) => localizePath(locale, path);

  // Page courante (sans préfixe de locale) pour marquer l'onglet actif.
  const barePath = stripLocale(usePathname() || "/");
  const isActive = (href: string) =>
    href === "/" ? barePath === "/" : barePath.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Barre « flottante » (floating pill) : détachée du bord haut, arrondie,
          fond plat opaque (pas de flou — plus lisible sur le hero photo).
          Se compresse légèrement au scroll. */}
      <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          style={{
            backgroundColor: "var(--cw-surface)",
            borderColor: "var(--border-medium)",
          }}
          className={`w-full mx-auto flex items-center justify-between gap-3 rounded-[28px] border pl-4 pr-3 sm:pl-5 shadow-[0_10px_40px_-8px_rgba(0,0,0,0.55)] transition-all duration-500 ${
            scrolled ? "h-[58px]" : "h-[68px]"
          }`}
        >
          {/* Logo à gauche ; la navigation occupe le centre (flex-1) pour
              répartir l'espace — pas de grand vide entre nav et actions. */}
          <div className="shrink-0">
            <Logo locale={locale} label={t.logoAria} />
          </div>

          <nav aria-label={t.nav.solutions} className="hidden xl:flex flex-1 items-center justify-center gap-0 2xl:gap-1.5 min-w-0">
            {navItems.map((item) => {
              const hasSub = Boolean(item.children || item.hasMega);
              const isOpen = openDropdown === item.key;
              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => hasSub && setOpenDropdown(item.key)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenDropdown(null);
                    }
                  }}
                >
                  <Link
                    href={lp(item.href)}
                    onFocus={() => hasSub && setOpenDropdown(item.key)}
                    aria-expanded={hasSub ? isOpen : undefined}
                    aria-haspopup={hasSub ? "menu" : undefined}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`nav-link flex items-center gap-1 py-2.5 whitespace-nowrap ${
                      isActive(item.href) ? "active" : ""
                    }`}
                  >
                    {item.label}
                    {hasSub && (
                      <ChevronDown
                        size={13}
                        aria-hidden
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    )}
                  </Link>

                  {/* Mega Menu — Solutions (panneau plat, pas de flou) */}
                  {item.hasMega && isOpen && (
                    <div className="absolute top-full left-0 pt-4 z-50">
                      <div className="solid-panel w-[600px] shadow-2xl overflow-hidden">
                        <div className="p-5 grid grid-cols-2 gap-1">
                          {solutionItems.map((sol) => (
                            <Link
                              key={sol.href}
                              href={lp(sol.href)}
                              className="flex items-center gap-3.5 px-3.5 py-4 rounded-2xl hover:bg-white/[0.05] focus-visible:bg-white/[0.06] transition-colors group/item"
                            >
                              <div className="w-10 h-10 rounded-full bg-cw-red/10 flex items-center justify-center text-cw-red-light group-hover/item:bg-cw-red group-hover/item:text-white transition-colors flex-shrink-0">
                                {sol.icon}
                              </div>
                              <div className="min-w-0">
                                <div className="text-[15px] font-semibold text-cw-gray-100 group-hover/item:text-white transition-colors truncate">
                                  {sol.label}
                                </div>
                                <div className="text-[13px] text-cw-gray-500 mt-0.5 truncate">
                                  {sol.desc}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <Link
                          href={lp("/solutions")}
                          className="flex items-center justify-center gap-2 border-t py-4 text-sm font-semibold text-cw-red-light hover:text-cw-fg hover:bg-cw-red/10 transition-colors"
                          style={{ borderColor: "var(--border-subtle)" }}
                        >
                          {t.seeAllSolutions}
                          <ArrowRight size={15} aria-hidden />
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Standard Dropdown — Secteurs (panneau plat, pas de flou) */}
                  {item.children && isOpen && (
                    <div className="absolute top-full left-0 pt-4 z-50">
                      <div className="solid-panel p-3 min-w-[280px] shadow-2xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={lp(child.href)}
                            className="block px-4 py-3.5 text-[15px] text-cw-gray-300 hover:text-cw-fg hover:bg-white/[0.05] focus-visible:bg-white/[0.06] transition-colors rounded-xl"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right: Lang + Thème + Auth + CTA + Mobile Toggle */}
          <div className="flex items-center gap-1 shrink-0">
            {/* Séparateur entre la nav centrée et les actions (cf. maquette) */}
            <span className="hidden xl:block w-px h-5 mr-1" style={{ background: "var(--border-medium)" }} aria-hidden />

            {/* Sélecteur de langue FR / AR / EN */}
            <div className="hidden xl:flex items-center px-0.5">
              <LanguageSwitcher current={locale} ariaLabel={t.langSwitchAria} />
            </div>

            <ThemeToggle />

            {/* Séparateur discret entre réglages et actions */}
            <span className="hidden md:block w-px h-5 mx-0.5" style={{ background: "var(--border-medium)" }} aria-hidden />

            <Link
              href={lp("/connexion")}
              className="hidden md:inline-flex items-center text-sm font-medium text-cw-gray-300 hover:text-cw-fg hover:bg-white/[0.06] px-3 py-2.5 rounded-full transition-colors font-[family-name:var(--font-jakarta)] whitespace-nowrap"
            >
              {t.login}
            </Link>

            <Link
              href={lp("/contact")}
              className="cta-primary text-xs px-4 py-2.5 rounded-xl !hidden sm:!inline-flex whitespace-nowrap"
              id="demo-btn"
            >
              {dict.common.requestDemo}
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 rounded-lg hover:bg-white/[0.06] transition-colors text-cw-fg"
              aria-label={t.openMenu}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={24} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Full-Screen Mobile Menu ─── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.solutions}
        className={`mobile-menu ${mobileOpen ? "open" : ""}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <Logo locale={locale} label={t.logoAria} compact />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2.5 rounded-xl hover:bg-white/[0.06] text-cw-fg transition-colors"
              aria-label={t.closeMenu}
            >
              <X size={22} aria-hidden />
            </button>
          </div>

          <nav aria-label={t.nav.solutions} className="flex flex-col gap-0.5 flex-1 overflow-y-auto">
            {navItems.map((item, idx) => {
              const subLinks = item.hasMega
                ? solutionItems.map(({ label, href }) => ({ label, href }))
                : item.children;
              const isExpanded = expandedSection === item.key;
              return (
                <div
                  key={item.key}
                  style={{ animationDelay: `${idx * 60}ms` }}
                  className={mobileOpen ? "animate-fadeInUp" : "opacity-0"}
                >
                  <div className="flex items-center">
                    <Link
                      href={lp(item.href)}
                      onClick={() => setMobileOpen(false)}
                      className="flex-1 px-4 py-3.5 text-cw-gray-200 hover:text-cw-fg hover:bg-white/[0.04] rounded-xl transition-all font-medium text-base font-[family-name:var(--font-jakarta)]"
                    >
                      {item.label}
                    </Link>
                    {subLinks && (
                      <button
                        onClick={() =>
                          setExpandedSection(isExpanded ? null : item.key)
                        }
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? t.collapse : t.expand} ${item.label}`}
                        className="p-3 mr-1 rounded-lg text-cw-gray-500 hover:text-cw-fg hover:bg-white/[0.06] transition-all"
                      >
                        <ChevronDown
                          size={18}
                          aria-hidden
                          className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>
                  {subLinks && isExpanded && (
                    <div className="ml-5 border-l border-white/[0.06] pl-4 mb-2 animate-fadeIn">
                      {subLinks.map((child) => (
                        <Link
                          key={child.href}
                          href={lp(child.href)}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2.5 text-sm text-cw-gray-400 hover:text-cw-fg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/[0.06] space-y-3 mt-auto">
            <div className="flex items-center justify-between">
              <LanguageSwitcher current={locale} ariaLabel={t.langSwitchAria} />
              <ThemeToggle />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href={lp("/connexion")}
                onClick={() => setMobileOpen(false)}
                className="cta-secondary w-full justify-center text-sm"
              >
                <LogIn size={14} aria-hidden />
                {t.login}
              </Link>
              <Link
                href={lp("/inscription")}
                onClick={() => setMobileOpen(false)}
                className="cta-outline w-full justify-center text-sm"
              >
                {t.createAccount}
              </Link>
            </div>
            <a
              href={CLIENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 text-xs text-cw-gray-400 hover:text-cw-fg transition-colors py-1"
            >
              <ExternalLink size={13} aria-hidden />
              <span>{t.clientPortal}</span>
            </a>
            <Link
              href={lp("/contact")}
              onClick={() => setMobileOpen(false)}
              className="cta-primary w-full justify-center text-sm"
            >
              {dict.common.requestDemo}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
