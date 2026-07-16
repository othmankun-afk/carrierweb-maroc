import type { Metadata } from "next";
import ResourcesView from "../_shared/ResourcesView";
import { buildMetadata } from "../_shared/meta";
import { getDict } from "@/lib/dictionaries";

export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/ressources",
    title: dict.meta.resources.title,
    description: dict.meta.resources.description,
  });
}

export default function Ressources() {
  return <ResourcesView locale="fr" />;
}
