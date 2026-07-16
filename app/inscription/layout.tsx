import type { Metadata } from "next";
import { buildMetadata } from "../_shared/meta";
import { getDict } from "@/lib/dictionaries";

export function generateMetadata(): Metadata {
  const dict = getDict("fr");
  return buildMetadata({
    locale: "fr",
    path: "/inscription",
    title: dict.meta.register.title,
    description: dict.meta.register.description,
    robotsNoindex: true,
  });
}

export default function InscriptionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
