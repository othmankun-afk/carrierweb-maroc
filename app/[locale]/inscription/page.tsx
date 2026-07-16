import type { Metadata } from "next";
import RegisterView from "../../_shared/RegisterView";
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
    path: "/inscription",
    title: dict.meta.register.title,
    description: dict.meta.register.description,
    robotsNoindex: true,
  });
}

export default async function LocaleRegister({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocaleParam((await params).locale);
  return <RegisterView locale={locale} dict={getDict(locale)} />;
}
