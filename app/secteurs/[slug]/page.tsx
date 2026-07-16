import type { Metadata } from "next";
import SectorDetailView from "../../_shared/SectorDetailView";
import { buildMetadata } from "../../_shared/meta";
import { getSectors, getSector } from "@/lib/content";

export async function generateStaticParams() {
  const sectors = await getSectors("fr");
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = await getSector("fr", slug);
  if (!sector) return {};
  return buildMetadata({
    locale: "fr",
    path: `/secteurs/${slug}`,
    title: `${sector.title} — Gestion de Flotte`,
    description: sector.listingDescription || sector.tagline,
    ogTitle: sector.title,
    ogDescription: sector.tagline,
  });
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SectorDetailView locale="fr" slug={slug} />;
}
