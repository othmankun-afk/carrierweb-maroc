"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeLabels, localizePath, stripLocale, type Locale } from "@/lib/i18n";

/**
 * Sélecteur de langue FR / AR / EN. Remplace l'ancien badge « AR » muet.
 * Bascule la MÊME page vers l'autre langue : on retire le préfixe de locale
 * du chemin courant puis on le re-préfixe pour chaque locale. La locale
 * active est mise en évidence (et non cliquable).
 */
export default function LanguageSwitcher({
  current,
  ariaLabel,
  className = "",
}: {
  current: Locale;
  ariaLabel: string;
  className?: string;
}) {
  const pathname = usePathname() || "/";
  const barePath = stripLocale(pathname);

  return (
    <div
      className={`flex items-center gap-1 text-xs ${className}`}
      role="group"
      aria-label={ariaLabel}
    >
      {locales.map((l, i) => {
        const active = l === current;
        return (
          <span key={l} className="flex items-center">
            {i > 0 && (
              <span className="text-cw-gray-700 mx-1" aria-hidden>
                |
              </span>
            )}
            {active ? (
              <span className="text-cw-fg font-semibold" aria-current="true">
                {localeLabels[l]}
              </span>
            ) : (
              <Link
                href={localizePath(l, barePath)}
                hrefLang={l}
                prefetch
                className="text-cw-gray-500 hover:text-cw-fg transition-colors"
              >
                {localeLabels[l]}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}
