import type { Metadata } from "next";
import SolutionsListingView from "../_shared/SolutionsListingView";
import { buildMetadata } from "../_shared/meta";
import { getDict } from "@/lib/dictionaries";

export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/solutions",
    title: dict.meta.solutions.title,
    description: dict.meta.solutions.description,
  });
}

export default function SolutionsPage() {
  return <SolutionsListingView locale="fr" />;
}
