import type { Metadata } from "next";
import SectorsListingView from "../../_shared/SectorsListingView";
import { buildMetadata } from "../../_shared/meta";
import { resolveLocaleParam } from "../../_shared/locale-param";
import { getDict } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = resolveLocaleParam((await params).locale);
  const dict = getDict(locale);
  return buildMetadata({
    locale,
    path: "/secteurs",
    title: dict.meta.sectors.title,
    description: dict.meta.sectors.description,
  });
}

export default async function LocaleSectors({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocaleParam((await params).locale);
  return <SectorsListingView locale={locale} />;
}
