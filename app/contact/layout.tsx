import type { Metadata } from "next";
import { buildMetadata } from "../_shared/meta";
import { getDict } from "@/lib/dictionaries";

// La page contact est un Client Component (state du formulaire) :
// ses metadata SEO vivent donc dans ce layout serveur.
export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/contact",
    title: dict.meta.contact.title,
    description: dict.meta.contact.description,
  });
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
