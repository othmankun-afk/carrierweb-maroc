import type { Metadata } from "next";
import WhyView from "../../_shared/WhyView";
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
    path: "/pourquoi-carrierweb",
    title: dict.meta.why.title,
    description: dict.meta.why.description,
  });
}

export default async function LocaleWhy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocaleParam((await params).locale);
  return <WhyView locale={locale} />;
}
