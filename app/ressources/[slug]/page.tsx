import type { Metadata } from "next";
import ArticleView from "../../_shared/ArticleView";
import { buildMetadata } from "../../_shared/meta";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";

export async function generateStaticParams() {
  return (await getAllArticles("fr")).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug("fr", slug);
  if (!article) return {};
  return buildMetadata({
    locale: "fr",
    path: `/ressources/${slug}`,
    title: article.title,
    description: article.metaDescription,
    ogDescription: article.excerpt,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleView locale="fr" slug={slug} />;
}
