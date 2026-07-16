import type { Metadata } from "next";
import WhyView from "../_shared/WhyView";
import { buildMetadata } from "../_shared/meta";
import { getDict } from "@/lib/dictionaries";

export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/pourquoi-carrierweb",
    title: dict.meta.why.title,
    description: dict.meta.why.description,
  });
}

export default function PourquoiCarrierWeb() {
  return <WhyView locale="fr" />;
}
