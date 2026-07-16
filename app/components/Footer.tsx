import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { getSiteSettings } from "@/lib/site-settings";

const CLIENT_PORTAL_URL = "https://portalus1.carrierweb.com/website/web.redirect.php";
const DEFAULT_PHONE = "+212 (0)5 22 36 19 88";
const DEFAULT_EMAIL = "info@carrierweb.ma";
const DEFAULT_LINKEDIN = "https://linkedin.com";

// Slugs fixes ; libellés depuis le dictionnaire (même ordre que le header).
const solutionHrefs = [
  "/solutions/gestion-flotte",
  "/solutions/suivi-gps",
  "/solutions/gestion-carburant",
  "/solutions/controle-temperature",
  "/solutions/communication-chauffeurs",
  "/solutions/integration",
];

// Server Component asynchrone : lit les « Réglages du site » depuis WordPress
// (ACF Free, locale fr) avec repli sur le dictionnaire si un champ est vide ou
// WP indisponible. Rendu uniquement par des composants serveur (les vues
// « client » comme ContactView reçoivent le footer via une prop `footerSlot`).
export default async function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.footer;
  const settings = await getSiteSettings(locale);
  const lp = (path: string) => localizePath(locale, path);

  const blurb = settings.footerBlurb ?? t.blurb;
  const address = settings.contactAddress ?? dict.contact.addressValue;
  const phone = settings.contactPhone ?? DEFAULT_PHONE;
  const email = settings.contactEmail ?? DEFAULT_EMAIL;
  const linkedin = settings.linkedinUrl ?? DEFAULT_LINKEDIN;
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer
      className="relative bg-cw-black-deep border-t border-white/[0.04] py-16 text-cw-gray-400 text-sm"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand Info & Contact */}
          <div className="space-y-4">
            <Link
              href={lp("/")}
              aria-label={dict.header.logoAria}
              className="inline-flex items-center gap-2"
            >
              <span className="flex items-center bg-white rounded-lg px-2.5 py-2">
                <Image
                  src="/logo.webp"
                  alt="CarrierWeb"
                  width={560}
                  height={54}
                  className="h-[14px] w-auto"
                />
              </span>
              <span className="inline-flex items-center rounded-md bg-cw-red px-1.5 py-[3px] text-[9px] font-bold tracking-[0.18em] text-white leading-none font-[family-name:var(--font-jakarta)]">
                MAROC
              </span>
            </Link>
            <p className="text-xs text-cw-gray-500 leading-relaxed">
              {blurb}
            </p>
            <div className="space-y-3 pt-2">
              <p className="flex items-start gap-2.5 text-xs">
                <MapPin size={16} className="text-cw-red-light mt-0.5 flex-shrink-0" />
                <span>{address}</span>
              </p>
              <p className="flex items-center gap-2.5 text-xs">
                <Phone size={16} className="text-cw-red-light flex-shrink-0" />
                <a href={telHref} className="hover:text-cw-fg transition-colors" dir="ltr">
                  {phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5 text-xs">
                <Mail size={16} className="text-cw-red-light flex-shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-cw-fg transition-colors" dir="ltr">
                  {email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-cw-fg font-bold text-sm uppercase tracking-wider mb-4 font-[family-name:var(--font-jakarta)]">
              {t.solutionsTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              {solutionHrefs.map((href, i) => (
                <li key={href}>
                  <Link href={lp(href)} className="hover:text-cw-fg transition-colors">
                    {dict.header.solutionItems[i].label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={lp("/solutions")} className="text-cw-red-light hover:text-cw-fg transition-colors font-medium">
                  {t.allSolutions}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-cw-fg font-bold text-sm uppercase tracking-wider mb-4 font-[family-name:var(--font-jakarta)]">
              {t.navTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={lp("/pourquoi-carrierweb")} className="hover:text-cw-fg transition-colors">
                  {t.navWhy}
                </Link>
              </li>
              <li>
                <Link href={lp("/references")} className="hover:text-cw-fg transition-colors">
                  {t.navReferences}
                </Link>
              </li>
              <li>
                <Link href={lp("/secteurs")} className="hover:text-cw-fg transition-colors">
                  {t.navSectors}
                </Link>
              </li>
              <li>
                <Link href={lp("/ressources")} className="hover:text-cw-fg transition-colors">
                  {t.navResources}
                </Link>
              </li>
              <li>
                <Link href={lp("/contact")} className="hover:text-cw-fg transition-colors">
                  {t.navContact}
                </Link>
              </li>
              <li>
                <a
                  href={CLIENT_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cw-fg transition-colors flex items-center gap-1"
                >
                  <span>{t.navClientArea}</span>
                  <ExternalLink size={10} aria-hidden />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp Support & Social */}
          <div className="space-y-5">
            <h4 className="text-cw-fg font-bold text-sm uppercase tracking-wider font-[family-name:var(--font-jakarta)]">
              {t.supportTitle}
            </h4>
            <a
              href={CLIENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-outline w-full justify-center text-xs py-3"
            >
              <ExternalLink size={14} aria-hidden />
              <span>{t.portalCta}</span>
            </a>
            <div className="bg-cw-surface border border-white/[0.04] p-4 rounded-xl space-y-3">
              <p className="text-[11px] leading-relaxed text-cw-gray-500">
                {t.supportBlurb}
              </p>
              <a
                href="https://wa.me/212522361988"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 bg-cw-green/10 hover:bg-cw-green/20 text-cw-green border border-cw-green/20 rounded-lg text-xs font-semibold transition-all"
              >
                <MessageCircle size={14} />
                <span>{t.whatsapp}</span>
              </a>
            </div>

            <div className="flex gap-3">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-cw-black border border-white/[0.04] flex items-center justify-center text-cw-gray-400 hover:border-cw-red hover:text-cw-red-light hover:bg-cw-red/5 transition-all animate-fadeIn"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cw-gray-500">
          <p>{t.rights}</p>
          <div className="flex gap-4">
            {/* Les pages légales font foi en français : liens toujours vers la racine. */}
            <Link href="/mentions-legales" className="hover:text-cw-fg transition-colors">
              {t.legal}
            </Link>
            <Link href="/confidentialite" className="hover:text-cw-fg transition-colors">
              {t.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
