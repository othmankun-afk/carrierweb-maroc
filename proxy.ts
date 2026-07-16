import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Routage des locales (convention Next 16 : proxy.ts remplace middleware.ts).
 *
 * Architecture : le français est servi DEPUIS LA RACINE de app/ (/, /solutions,
 * /secteurs/…) — ces routes passent donc inchangées. Les versions traduites
 * vivent sous app/[locale] et ne couvrent que ar/en.
 *
 * - `/ar/…` et `/en/…` : segments réels de app/[locale], laissés tels quels.
 * - `/fr/…` explicite : redirigé (301) vers la version sans préfixe pour
 *   éviter tout contenu dupliqué (le fr canonique est sans préfixe).
 * - tout le reste (`/`, `/solutions`, …) : laissé passer vers l'arbre racine.
 */

function hasPrefix(pathname: string, locale: string): boolean {
  return pathname === `/${locale}` || pathname.startsWith(`/${locale}/`);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /fr(/…) → même chemin sans préfixe (le français canonique est à la racine).
  if (hasPrefix(pathname, "fr")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 301);
  }

  // Tout le reste (ar/en préfixés OU chemins racine français) passe tel quel.
  return NextResponse.next();
}

export const config = {
  // Tout sauf les internals Next, les routes API éventuelles et les fichiers
  // statiques (tout chemin contenant un point : sitemap.xml, llms.txt,
  // images, favicon…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
