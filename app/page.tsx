import type { Metadata } from "next";
import HomeView from "./_shared/HomeView";
import { buildMetadata } from "./_shared/meta";
import { getDict } from "@/lib/dictionaries";

export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/",
    title: dict.meta.rootTitle,
    description: dict.meta.rootDescription,
    ogTitle: dict.meta.ogTitle,
    ogDescription: dict.meta.ogDescription,
  });
}

export default function Home() {
  return <HomeView locale="fr" />;
}
