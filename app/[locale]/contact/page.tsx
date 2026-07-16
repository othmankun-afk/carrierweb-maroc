import type { Metadata } from "next";
import ContactView from "../../_shared/ContactView";
import Footer from "../../components/Footer";
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
    path: "/contact",
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default async function LocaleContact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = resolveLocaleParam((await params).locale);
  const dict = getDict(locale);
  return <ContactView locale={locale} dict={dict} footerSlot={<Footer locale={locale} dict={dict} />} />;
}
