import type { Metadata } from "next";
import ResourcesView from "../../_shared/ResourcesView";
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
    path: "/ressources",
    title: dict.meta.resources.title,
    description: dict.meta.resources.description,
  });
}

export default async function LocaleResources({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocaleParam((await params).locale);
  return <ResourcesView locale={locale} />;
}
