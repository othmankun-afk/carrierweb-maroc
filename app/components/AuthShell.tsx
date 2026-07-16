import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { localizePath, type Locale } from "@/lib/i18n";

/**
 * Coquille visuelle des pages d'authentification : image de marque floutée
 * en fond + carte en verre dépoli centrée (thème-aware). Purement
 * présentationnel — le formulaire est passé en `children`.
 */
export default function AuthShell({
  locale,
  backHomeLabel,
  logoAria,
  title,
  subtitle,
  children,
  footer,
}: {
  locale: Locale;
  backHomeLabel: string;
  logoAria: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <main id="main-content" className="relative min-h-dvh flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-cw-black">
      <div className="absolute inset-0 z-0" aria-hidden>
        <Image
          src="/page-home-2.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAQAgCdASoQABAAA4BaJZgCdAEOxPtWg+BQAP7s3ghVl9cxZjyqt8dsz7n795tuIOHqrQmCoxkEFglnWqRqcyyzTBbhRZBeUBiJEn/nereRR3kDsk6AAA=="
          className="object-cover object-center scale-110 blur-2xl"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--overlay-scrim)" }}
        />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      <div className="relative z-10 w-full max-w-md mb-6 flex items-center justify-between">
        <Link
          href={localizePath(locale, "/")}
          className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} aria-hidden />
          {backHomeLabel}
        </Link>
        <Link href={localizePath(locale, "/")} aria-label={logoAria} className="inline-flex items-center gap-2">
          <span className="flex items-center bg-white rounded-lg px-2 py-1.5">
            <Image src="/logo.webp" alt="CarrierWeb" width={560} height={54} className="h-[13px] w-auto" />
          </span>
          <span className="inline-flex items-center rounded-md bg-cw-red px-1.5 py-[3px] text-[9px] font-bold tracking-[0.18em] text-white leading-none font-[family-name:var(--font-jakarta)]">
            MAROC
          </span>
        </Link>
      </div>

      <div className="glass relative z-10 w-full max-w-md p-7 sm:p-9 shadow-2xl">
        <h1 className="page-title page-title--sm">
          {title}
        </h1>
        <p className="page-desc mt-2 mb-7">{subtitle}</p>

        {children}
      </div>

      <div className="relative z-10 w-full max-w-md mt-6 text-center text-sm text-white/70">
        {footer}
      </div>
    </main>
  );
}
