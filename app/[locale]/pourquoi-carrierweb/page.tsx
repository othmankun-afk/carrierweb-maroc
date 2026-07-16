import type { Metadata } from "next";
import WhyView from "../../_shared/WhyView";
import { buildMetadata } from "../../_shared/meta";
import { resolveLocaleParam } from "../../_shared/locale-param";
import { getDict } from "@/lib/dictionaries";
import { getWPPageContent } from "@/lib/wp-pages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocaleParam((await params).locale);
  const dict = getDict(locale);
  return buildMetadata({
    locale,
    path: "/pourquoi-carrierweb",
    title: dict.meta.why.title,
    description: dict.meta.why.description,
  });
}

export default async function LocaleWhy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocaleParam((await params).locale);
  // fr est servi à la racine ; ici (ar/en) getWPPageContent renvoie null et
  // la vue garde le contenu des dictionnaires — cohérent avec le reste du site.
  const wpHtml = await getWPPageContent(locale, "pourquoi-carrierweb");
  return <WhyView locale={locale} wpHtml={wpHtml} />;
}
