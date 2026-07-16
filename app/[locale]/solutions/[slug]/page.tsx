import type { Metadata } from "next";
import SolutionDetailView from "../../../_shared/SolutionDetailView";
import { buildMetadata } from "../../../_shared/meta";
import { resolveLocaleParam } from "../../../_shared/locale-param";
import { getSolutions, getSolution } from "@/lib/content";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["ar", "en"] as const) {
    const solutions = await getSolutions(locale);
    for (const s of solutions) params.push({ locale, slug: s.slug });
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
  const solution = await getSolution(locale, slug);
  if (!solution) return {};
  return buildMetadata({
    locale,
    path: `/solutions/${slug}`,
    title: solution.title,
    description: solution.shortDescription || solution.tagline,
    ogDescription: solution.tagline,
  });
}

export default async function LocaleSolutionDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocaleParam(rawLocale);
  return <SolutionDetailView locale={locale} slug={slug} />;
}
