import type { Metadata } from "next";
import ArticleView from "../../../_shared/ArticleView";
import { buildMetadata } from "../../../_shared/meta";
import { resolveLocaleParam } from "../../../_shared/locale-param";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["ar", "en"] as const) {
    for (const a of await getAllArticles(locale)) params.push({ locale, slug: a.slug });
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocaleParam(rawLocale);
  const article = await getArticleBySlug(locale, slug);
  if (!article) return {};
  return buildMetadata({
    locale,
    path: `/ressources/${slug}`,
    title: article.title,
    description: article.metaDescription,
    ogDescription: article.excerpt,
  });
}

export default async function LocaleArticle({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocaleParam(rawLocale);
  return <ArticleView locale={locale} slug={slug} />;
}
