import { notFound } from "next/navigation";
import HtmlLangDir from "../components/HtmlLangDir";
import { dirFor, htmlLang, type Locale } from "@/lib/i18n";

// Sous-arbre des versions traduites (ar/en). Le français est servi depuis la
// racine de app/ (proxy.ts). Ici on ne peut pas re-rendre <html> (déjà posé
// par le root layout en fr) : on enveloppe le contenu dans un conteneur
// dir=rtl|ltr (alignement immédiat, sans flash) et un composant client
// <HtmlLangDir> ajuste lang/dir de <html> (y compris lors des changements de
// langue en navigation douce).

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "ar" && locale !== "en") notFound();

  const loc = locale as Locale;
  const dir = dirFor(loc);
  const lang = htmlLang[loc];

  return (
    <div lang={lang} dir={dir}>
      <HtmlLangDir lang={lang} dir={dir} />
      {children}
    </div>
  );
}
