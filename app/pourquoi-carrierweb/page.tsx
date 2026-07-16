import type { Metadata } from "next";
import WhyView from "../_shared/WhyView";
import { buildMetadata } from "../_shared/meta";
import { getDict } from "@/lib/dictionaries";
import { getWPPageContent } from "@/lib/wp-pages";

export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/pourquoi-carrierweb",
    title: dict.meta.why.title,
    description: dict.meta.why.description,
  });
}

export default async function PourquoiCarrierWeb() {
  const wpHtml = await getWPPageContent("fr", "pourquoi-carrierweb");
  return <WhyView locale="fr" wpHtml={wpHtml} />;
}
