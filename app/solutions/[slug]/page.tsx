import type { Metadata } from "next";
import SolutionDetailView from "../../_shared/SolutionDetailView";
import { buildMetadata } from "../../_shared/meta";
import { getSolutions, getSolution } from "@/lib/content";

export async function generateStaticParams() {
  const solutions = await getSolutions("fr");
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = await getSolution("fr", slug);
  if (!solution) return {};
  return buildMetadata({
    locale: "fr",
    path: `/solutions/${slug}`,
    title: solution.title,
    description: solution.shortDescription || solution.tagline,
    ogDescription: solution.tagline,
  });
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <SolutionDetailView locale="fr" slug={slug} />;
}
