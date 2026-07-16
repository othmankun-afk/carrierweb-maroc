import type { Metadata } from "next";
import ClientAreaView from "../../_shared/ClientAreaView";
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
    path: "/espace-client",
    title: dict.meta.clientArea.title,
    description: dict.meta.clientArea.description,
  });
}

export default async function LocaleClientArea({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocaleParam((await params).locale);
  return <ClientAreaView locale={locale} />;
}
