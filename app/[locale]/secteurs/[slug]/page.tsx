import type { Metadata } from "next";
import SectorDetailView from "../../../_shared/SectorDetailView";
import { buildMetadata } from "../../../_shared/meta";
import { resolveLocaleParam } from "../../../_shared/locale-param";
import { getSectors, getSector } from "@/lib/content";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of ["ar", "en"] as const) {
    const sectors = await getSectors(locale);
    for (const s of sectors) params.push({ locale, slug: s.slug });
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
  const sector = await getSector(locale, slug);
  if (!sector) return {};
  return buildMetadata({
    locale,
    path: `/secteurs/${slug}`,
    title: sector.title,
    description: sector.listingDescription || sector.tagline,
    ogDescription: sector.tagline,
  });
}

export default async function LocaleSectorDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocaleParam(rawLocale);
  return <SectorDetailView locale={locale} slug={slug} />;
}
