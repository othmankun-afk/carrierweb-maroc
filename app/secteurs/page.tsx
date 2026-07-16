import type { Metadata } from "next";
import SectorsListingView from "../_shared/SectorsListingView";
import { buildMetadata } from "../_shared/meta";
import { getDict } from "@/lib/dictionaries";

export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/secteurs",
    title: dict.meta.sectors.title,
    description: dict.meta.sectors.description,
  });
}

export default function SectorsPage() {
  return <SectorsListingView locale="fr" />;
}
