import type { MetadataRoute } from "next";
import { getAllSolutions, getAllSectors } from "@/lib/wordpress";
import { getAllArticles } from "@/lib/articles";
import { locales, localizePath } from "@/lib/i18n";

const BASE = "https://www.carrierweb.ma";

// Une entrée par page ET par langue, avec les balises hreflang (alternates)
// pointant vers les deux autres versions + x-default (fr). Les slugs
// solutions/secteurs/articles sont identiques dans les 3 langues.
function entry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number,
  lastModified?: Date
): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = `${BASE}${localizePath(l, path)}`;
  languages["x-default"] = `${BASE}${localizePath("fr", path)}`;

  return locales.map((l) => ({
    url: `${BASE}${localizePath(l, path)}`,
    changeFrequency,
    priority,
    ...(lastModified ? { lastModified } : {}),
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [solutions, sectors, articles] = await Promise.all([
    getAllSolutions(),
    getAllSectors(),
    getAllArticles("fr"),
  ]);

  const staticPaths: [string, MetadataRoute.Sitemap[number]["changeFrequency"], number][] = [
    ["/", "weekly", 1],
    ["/solutions", "weekly", 0.9],
    ["/secteurs", "weekly", 0.9],
    ["/pourquoi-carrierweb", "monthly", 0.7],
    ["/ressources", "weekly", 0.6],
    ["/contact", "yearly", 0.8],
    ["/espace-client", "yearly", 0.5],
  ];

  return [
    ...staticPaths.flatMap(([p, f, pr]) => entry(p, f, pr)),
    ...solutions.flatMap((s) => entry(`/solutions/${s.slug}`, "monthly", 0.8)),
    ...sectors.flatMap((s) => entry(`/secteurs/${s.slug}`, "monthly", 0.8)),
    ...articles.flatMap((a) =>
      entry(`/ressources/${a.slug}`, "yearly", 0.6, new Date(`${a.publishedAt}T00:00:00Z`))
    ),
  ];
}
