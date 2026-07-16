import type { Metadata } from "next";
import { buildMetadata } from "../_shared/meta";
import { getDict } from "@/lib/dictionaries";

// Page connexion = Client Component (state du formulaire) → metadata ici.
export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/connexion",
    title: dict.meta.login.title,
    description: dict.meta.login.description,
    robotsNoindex: true,
  });
}

export default function ConnexionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
