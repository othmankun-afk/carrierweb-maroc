import type { Metadata } from "next";
import HomeView from "../_shared/HomeView";
import { buildMetadata } from "../_shared/meta";
import { resolveLocaleParam } from "../_shared/locale-param";
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
    path: "/",
    title: dict.meta.rootTitle,
    description: dict.meta.rootDescription,
    ogTitle: dict.meta.ogTitle,
    ogDescription: dict.meta.ogDescription,
  });
}

export default async function LocaleHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocaleParam((await params).locale);
  return <HomeView locale={locale} />;
}
