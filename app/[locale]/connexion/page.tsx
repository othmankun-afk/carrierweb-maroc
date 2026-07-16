import type { Metadata } from "next";
import LoginView from "../../_shared/LoginView";
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
    path: "/connexion",
    title: dict.meta.login.title,
    description: dict.meta.login.description,
    robotsNoindex: true,
  });
}

export default async function LocaleLogin({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocaleParam((await params).locale);
  return <LoginView locale={locale} dict={getDict(locale)} />;
}
