import type { Metadata } from "next";
import ClientAreaView from "../_shared/ClientAreaView";
import { buildMetadata } from "../_shared/meta";
import { getDict } from "@/lib/dictionaries";

export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/espace-client",
    title: dict.meta.clientArea.title,
    description: dict.meta.clientArea.description,
  });
}

export default function EspaceClient() {
  return <ClientAreaView locale="fr" />;
}
