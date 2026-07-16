import type { Metadata } from "next";
import ReferencesView from "../_shared/ReferencesView";
import { buildMetadata } from "../_shared/meta";
import { getDict } from "@/lib/dictionaries";

export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/references",
    title: dict.meta.references.title,
    description: dict.meta.references.description,
  });
}

export default function References() {
  return <ReferencesView locale="fr" />;
}
