import type { Metadata } from "next";
import SolutionsListingView from "../../_shared/SolutionsListingView";
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
    path: "/solutions",
    title: dict.meta.solutions.title,
    description: dict.meta.solutions.description,
  });
}

export default async function LocaleSolutions({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocaleParam((await params).locale);
  return <SolutionsListingView locale={locale} />;
}
