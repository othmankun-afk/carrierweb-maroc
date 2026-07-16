import { Solution, SolutionSummary, Sector, SectorSummary } from "./types";
import type { Article } from "./articles";
import {
  GET_ALL_SOLUTIONS,
  GET_SOLUTION_BY_SLUG,
  GET_ALL_SECTORS,
  GET_SECTOR_BY_SLUG,
  GET_ALL_TESTIMONIALS,
  GET_ALL_ARTICLES,
  GET_ARTICLE_BY_SLUG,
} from "./queries";
import { mockSolutions, mockSectors } from "./mock-data";

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL;

// How long (in seconds) a generated page is cached before Next.js
// revalidates it in the background (ISR). Content edited in WP shows up on
// the live site within this window, with no redeploy needed.
const REVALIDATE_SECONDS = 60;

/**
 * Generic WPGraphQL fetcher.
 *
 * Returns `null` (instead of throwing) whenever WordPress isn't reachable —
 * WORDPRESS_API_URL not set, WP down, network error, or a GraphQL error.
 * Every getX() function below falls back to the local mock data in that
 * case, so the site always builds and renders correctly, WP or not.
 */
export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T | null> {
  if (!WORDPRESS_API_URL) {
    return null;
  }

  try {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    let res = await fetch(WORDPRESS_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({ query, variables }),
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (res.status === 405) {
      const params = new URLSearchParams({
        query,
        variables: JSON.stringify(variables ?? {}),
      });
      res = await fetch(`${WORDPRESS_API_URL}?${params.toString()}`, {
        headers: { Accept: "application/json" },
        next: { revalidate: REVALIDATE_SECONDS },
      });
    }

    if (!res.ok) {
      // WP indisponible → repli sur les mock-data (comportement attendu).
      // console.warn (et non .error) pour ne pas déclencher l'overlay d'erreur
      // Next.js en dev, puisque le site continue de fonctionner normalement.
      console.warn(
        `[CarrierWeb] WordPress injoignable (${res.status} ${res.statusText}) — utilisation des données de démonstration (lib/mock-data.ts).`
      );
      return null;
    }

    const json = await res.json();

    if (json.errors) {
      console.warn("[CarrierWeb] Réponse WPGraphQL avec erreurs — repli sur les mock-data :", JSON.stringify(json.errors));
      return null;
    }

    return json.data as T;
  } catch {
    console.warn(
      "[CarrierWeb] WordPress injoignable (réseau) — utilisation des données de démonstration (lib/mock-data.ts)."
    );
    return null;
  }
}

// ── Repeater-free helpers ──────────────────────────────────────────────
//
// ACF Free has no Repeater field. Instead, WP stores each "list" (stats,
// features, specs, faq, benefits, useCases, recommendedSolutions) as a
// fixed number of numbered flat Text/Textarea fields
// (e.g. stat_1_value/stat_1_label/stat_1_icon, stat_2_..., ...). This
// helper rebuilds the arrays our components expect, skipping any row that
// Patricia left empty in WP so she doesn't need to fill all of them.

// `raw` holds the values exactly as they came from WP (before any default
// fallback like `?? "zap"` is applied) so emptiness is judged on what
// Patricia actually typed, not on the defaults we backfill afterwards.
// `value` is the row that gets kept in the final array once it passes the
// emptiness check.
function compact<T extends Record<string, unknown>>(
  rows: { raw: Record<string, unknown>; value: T }[]
): T[] {
  return rows
    .filter(({ raw }) =>
      Object.values(raw).some((v) => v !== undefined && v !== null && v !== "")
    )
    .map(({ value }) => value);
}

// ACF Select fields arrive as `["bar-chart-3"]` (array) through WPGraphQL
// even when a single choice is selected. Unwrap to the plain string key our
// icon-map expects; `null`/`[]` fall through to the provided default.
type WPSelect = string | string[] | null | undefined;
function selectValue(v: WPSelect, fallback: string): string {
  const raw = Array.isArray(v) ? v[0] : v;
  return raw && raw !== "" ? raw : fallback;
}

// ── Mapping helpers: WPGraphQL response shape → our internal types ──

interface WPSolutionNode {
  slug: string;
  title: string;
  solutionFields: {
    icon: WPSelect;
    tagline: string;
    shortDescription: string;
    description?: string | null;

    stat1Value?: string | null;
    stat1Label?: string | null;
    stat1Icon?: WPSelect;
    stat2Value?: string | null;
    stat2Label?: string | null;
    stat2Icon?: WPSelect;
    stat3Value?: string | null;
    stat3Label?: string | null;
    stat3Icon?: WPSelect;
    stat4Value?: string | null;
    stat4Label?: string | null;
    stat4Icon?: WPSelect;

    feature1Title?: string | null;
    feature1Desc?: string | null;
    feature1Icon?: WPSelect;
    feature2Title?: string | null;
    feature2Desc?: string | null;
    feature2Icon?: WPSelect;
    feature3Title?: string | null;
    feature3Desc?: string | null;
    feature3Icon?: WPSelect;
    feature4Title?: string | null;
    feature4Desc?: string | null;
    feature4Icon?: WPSelect;

    spec1Label?: string | null;
    spec1Value?: string | null;
    spec2Label?: string | null;
    spec2Value?: string | null;
    spec3Label?: string | null;
    spec3Value?: string | null;
    spec4Label?: string | null;
    spec4Value?: string | null;
    spec5Label?: string | null;
    spec5Value?: string | null;
    spec6Label?: string | null;
    spec6Value?: string | null;

    testimonialQuote?: string | null;
    testimonialAuthor?: string | null;
    testimonialCompany?: string | null;

    faq1Question?: string | null;
    faq1Answer?: string | null;
    faq2Question?: string | null;
    faq2Answer?: string | null;
    faq3Question?: string | null;
    faq3Answer?: string | null;

    benefit1Title?: string | null;
    benefit1Desc?: string | null;
    benefit2Title?: string | null;
    benefit2Desc?: string | null;

    seoRichContent?: string | null;
  };
}

function mapSolution(node: WPSolutionNode): Solution {
  const f = node.solutionFields;

  const stats = compact([
    { raw: { v: f.stat1Value, l: f.stat1Label }, value: { value: f.stat1Value ?? "", label: f.stat1Label ?? "", icon: selectValue(f.stat1Icon, "zap") } },
    { raw: { v: f.stat2Value, l: f.stat2Label }, value: { value: f.stat2Value ?? "", label: f.stat2Label ?? "", icon: selectValue(f.stat2Icon, "zap") } },
    { raw: { v: f.stat3Value, l: f.stat3Label }, value: { value: f.stat3Value ?? "", label: f.stat3Label ?? "", icon: selectValue(f.stat3Icon, "zap") } },
    { raw: { v: f.stat4Value, l: f.stat4Label }, value: { value: f.stat4Value ?? "", label: f.stat4Label ?? "", icon: selectValue(f.stat4Icon, "zap") } },
  ]);

  const features = compact([
    { raw: { t: f.feature1Title, d: f.feature1Desc }, value: { title: f.feature1Title ?? "", desc: f.feature1Desc ?? "", icon: selectValue(f.feature1Icon, "check-circle-2") } },
    { raw: { t: f.feature2Title, d: f.feature2Desc }, value: { title: f.feature2Title ?? "", desc: f.feature2Desc ?? "", icon: selectValue(f.feature2Icon, "check-circle-2") } },
    { raw: { t: f.feature3Title, d: f.feature3Desc }, value: { title: f.feature3Title ?? "", desc: f.feature3Desc ?? "", icon: selectValue(f.feature3Icon, "check-circle-2") } },
    { raw: { t: f.feature4Title, d: f.feature4Desc }, value: { title: f.feature4Title ?? "", desc: f.feature4Desc ?? "", icon: selectValue(f.feature4Icon, "check-circle-2") } },
  ]);

  const specs = compact([
    { raw: { l: f.spec1Label, v: f.spec1Value }, value: { label: f.spec1Label ?? "", value: f.spec1Value ?? "" } },
    { raw: { l: f.spec2Label, v: f.spec2Value }, value: { label: f.spec2Label ?? "", value: f.spec2Value ?? "" } },
    { raw: { l: f.spec3Label, v: f.spec3Value }, value: { label: f.spec3Label ?? "", value: f.spec3Value ?? "" } },
    { raw: { l: f.spec4Label, v: f.spec4Value }, value: { label: f.spec4Label ?? "", value: f.spec4Value ?? "" } },
    { raw: { l: f.spec5Label, v: f.spec5Value }, value: { label: f.spec5Label ?? "", value: f.spec5Value ?? "" } },
    { raw: { l: f.spec6Label, v: f.spec6Value }, value: { label: f.spec6Label ?? "", value: f.spec6Value ?? "" } },
  ]);

  const faq = compact([
    { raw: { q: f.faq1Question, a: f.faq1Answer }, value: { question: f.faq1Question ?? "", answer: f.faq1Answer ?? "" } },
    { raw: { q: f.faq2Question, a: f.faq2Answer }, value: { question: f.faq2Question ?? "", answer: f.faq2Answer ?? "" } },
    { raw: { q: f.faq3Question, a: f.faq3Answer }, value: { question: f.faq3Question ?? "", answer: f.faq3Answer ?? "" } },
  ]);

  const benefits = compact([
    { raw: { t: f.benefit1Title, d: f.benefit1Desc }, value: { title: f.benefit1Title ?? "", desc: f.benefit1Desc ?? "" } },
    { raw: { t: f.benefit2Title, d: f.benefit2Desc }, value: { title: f.benefit2Title ?? "", desc: f.benefit2Desc ?? "" } },
  ]);

  return {
    slug: node.slug,
    title: node.title,
    icon: selectValue(f.icon, "settings-2"),
    tagline: f.tagline ?? "",
    shortDescription: f.shortDescription ?? "",
    description: f.description ?? f.shortDescription ?? "",
    stats,
    features,
    specs,
    testimonial: {
      quote: f.testimonialQuote ?? "",
      author: f.testimonialAuthor ?? "",
      company: f.testimonialCompany ?? "",
    },
    faq,
    benefits,
    seoRichContent: f.seoRichContent ?? "",
  };
}

interface WPSectorNode {
  slug: string;
  title: string;
  secteurFields: {
    icon: WPSelect;
    tagline: string;
    listingDescription?: string | null;
    description?: string | null;

    usecase1Title?: string | null;
    usecase1Desc?: string | null;
    usecase2Title?: string | null;
    usecase2Desc?: string | null;
    usecase3Title?: string | null;
    usecase3Desc?: string | null;
    usecase4Title?: string | null;
    usecase4Desc?: string | null;

    recsol1Title?: string | null;
    recsol1Href?: string | null;
    recsol2Title?: string | null;
    recsol2Href?: string | null;
    recsol3Title?: string | null;
    recsol3Href?: string | null;

    seoRichContent?: string | null;
  };
}

function mapSector(node: WPSectorNode): Sector {
  const f = node.secteurFields;

  const useCases = compact([
    { raw: { t: f.usecase1Title, d: f.usecase1Desc }, value: { title: f.usecase1Title ?? "", desc: f.usecase1Desc ?? "" } },
    { raw: { t: f.usecase2Title, d: f.usecase2Desc }, value: { title: f.usecase2Title ?? "", desc: f.usecase2Desc ?? "" } },
    { raw: { t: f.usecase3Title, d: f.usecase3Desc }, value: { title: f.usecase3Title ?? "", desc: f.usecase3Desc ?? "" } },
    { raw: { t: f.usecase4Title, d: f.usecase4Desc }, value: { title: f.usecase4Title ?? "", desc: f.usecase4Desc ?? "" } },
  ]);

  const recommendedSolutions = compact([
    { raw: { t: f.recsol1Title, h: f.recsol1Href }, value: { title: f.recsol1Title ?? "", href: f.recsol1Href ?? "" } },
    { raw: { t: f.recsol2Title, h: f.recsol2Href }, value: { title: f.recsol2Title ?? "", href: f.recsol2Href ?? "" } },
    { raw: { t: f.recsol3Title, h: f.recsol3Href }, value: { title: f.recsol3Title ?? "", href: f.recsol3Href ?? "" } },
  ]);

  return {
    slug: node.slug,
    title: node.title,
    icon: selectValue(f.icon, "settings-2"),
    tagline: f.tagline ?? "",
    listingDescription: f.listingDescription ?? "",
    description: f.description ?? "",
    useCases,
    recommendedSolutions,
    seoRichContent: f.seoRichContent ?? "",
  };
}

// ── Public data access functions — used directly by pages ──

export async function getAllSolutions(): Promise<SolutionSummary[]> {
  const data = await fetchGraphQL<{ solutions: { nodes: WPSolutionNode[] } }>(
    GET_ALL_SOLUTIONS
  );

  if (!data) {
    return mockSolutions.map(({ slug, title, icon, shortDescription }) => ({
      slug,
      title,
      icon,
      shortDescription,
    }));
  }

  return data.solutions.nodes.map((node) => ({
    slug: node.slug,
    title: node.title,
    icon: selectValue(node.solutionFields.icon, "settings-2"),
    shortDescription: node.solutionFields.shortDescription ?? "",
  }));
}

export async function getSolutionBySlug(slug: string): Promise<Solution | null> {
  const data = await fetchGraphQL<{ solution: WPSolutionNode | null }>(
    GET_SOLUTION_BY_SLUG,
    { slug }
  );

  if (!data || !data.solution) {
    return mockSolutions.find((s) => s.slug === slug) ?? null;
  }

  return mapSolution(data.solution);
}

export async function getAllSectors(): Promise<SectorSummary[]> {
  const data = await fetchGraphQL<{ secteurs: { nodes: WPSectorNode[] } }>(
    GET_ALL_SECTORS
  );

  if (!data) {
    return mockSectors.map(({ slug, title, icon, listingDescription }) => ({
      slug,
      title,
      icon,
      listingDescription,
    }));
  }

  return data.secteurs.nodes.map((node) => ({
    slug: node.slug,
    title: node.title,
    icon: selectValue(node.secteurFields.icon, "settings-2"),
    listingDescription: node.secteurFields.listingDescription ?? "",
  }));
}

export async function getSectorBySlug(slug: string): Promise<Sector | null> {
  const data = await fetchGraphQL<{ secteur: WPSectorNode | null }>(
    GET_SECTOR_BY_SLUG,
    { slug }
  );

  if (!data || !data.secteur) {
    return mockSectors.find((s) => s.slug === slug) ?? null;
  }

  return mapSector(data.secteur);
}

// ── Témoignages (accueil) ──────────────────────────────────────────────

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface WPTestimonialNode {
  temoignageFields: {
    quote?: string | null;
    author?: string | null;
    role?: string | null;
    company?: string | null;
  };
}

/**
 * Renvoie les témoignages depuis WordPress, ou `null` si WP est indisponible /
 * vide — l'appelant retombe alors sur les items du dictionnaire. On ne garde
 * que les avis dont la citation est réellement remplie.
 */
export async function getTestimonialsFromWP(): Promise<TestimonialItem[] | null> {
  const data = await fetchGraphQL<{ temoignages: { nodes: WPTestimonialNode[] } }>(
    GET_ALL_TESTIMONIALS
  );
  if (!data) return null;

  const items = data.temoignages.nodes
    .map((n) => ({
      quote: n.temoignageFields.quote ?? "",
      author: n.temoignageFields.author ?? "",
      role: n.temoignageFields.role ?? "",
      company: n.temoignageFields.company ?? "",
    }))
    .filter((t) => t.quote.trim() !== "");

  return items.length ? items : null;
}

// ── Articles (Ressources) ──────────────────────────────────────────────

interface WPArticleFields {
  category?: string | null;
  excerpt?: string | null;
  metaDescription?: string | null;
  publishedDate?: string | null;
  readingMinutes?: string | number | null;
  intro?: string | null;
  keyTakeaways?: string | null;
  related1Title?: string | null;
  related1Href?: string | null;
  related2Title?: string | null;
  related2Href?: string | null;
  related3Title?: string | null;
  related3Href?: string | null;
  [key: string]: string | number | null | undefined; // section{1..6}Heading/Paragraphs/Bullets
}

interface WPArticleNode {
  slug: string;
  title: string;
  date?: string | null;
  articleFields: WPArticleFields;
}

// Découpe une zone de texte en lignes non vides (puces, à-retenir).
function splitLines(v: string | null | undefined): string[] {
  if (!v) return [];
  return v
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l !== "");
}

// Découpe les paragraphes : séparés par une ligne vide (double saut).
function splitParagraphs(v: string | null | undefined): string[] {
  if (!v) return [];
  return v
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.trim())
    .filter((p) => p !== "");
}

function mapArticle(node: WPArticleNode): Article {
  const f = node.articleFields;

  const sections = [];
  for (let i = 1; i <= 6; i++) {
    const heading = (f[`section${i}Heading`] as string | null | undefined) ?? "";
    const paragraphs = splitParagraphs(f[`section${i}Paragraphs`] as string | null | undefined);
    const bullets = splitLines(f[`section${i}Bullets`] as string | null | undefined);
    // Une section n'est retenue que si elle a un titre ET au moins un paragraphe.
    if (heading.trim() !== "" && paragraphs.length) {
      sections.push(bullets.length ? { heading, paragraphs, bullets } : { heading, paragraphs });
    }
  }

  const relatedSolutions = compact([
    { raw: { t: f.related1Title, h: f.related1Href }, value: { title: f.related1Title ?? "", href: f.related1Href ?? "" } },
    { raw: { t: f.related2Title, h: f.related2Href }, value: { title: f.related2Title ?? "", href: f.related2Href ?? "" } },
    { raw: { t: f.related3Title, h: f.related3Href }, value: { title: f.related3Title ?? "", href: f.related3Href ?? "" } },
  ]);

  const publishedAt =
    (f.publishedDate && String(f.publishedDate).trim()) ||
    (node.date ? String(node.date).slice(0, 10) : "");

  return {
    slug: node.slug,
    title: node.title,
    category: f.category ?? "",
    excerpt: f.excerpt ?? "",
    metaDescription: f.metaDescription ?? f.excerpt ?? "",
    publishedAt,
    readingMinutes: Number(f.readingMinutes) || 0,
    intro: f.intro ?? "",
    sections,
    keyTakeaways: splitLines(f.keyTakeaways),
    relatedSolutions,
  };
}

/** Tous les articles depuis WP, ou `null` si WP indisponible / vide. */
export async function getArticlesFromWP(): Promise<Article[] | null> {
  const data = await fetchGraphQL<{ articles: { nodes: WPArticleNode[] } }>(
    GET_ALL_ARTICLES
  );
  if (!data) return null;
  const articles = data.articles.nodes.map(mapArticle);
  return articles.length ? articles : null;
}

/** Un article par slug depuis WP, ou `null` (indisponible ou introuvable). */
export async function getArticleFromWP(slug: string): Promise<Article | null> {
  const data = await fetchGraphQL<{ article: WPArticleNode | null }>(
    GET_ARTICLE_BY_SLUG,
    { slug }
  );
  if (!data || !data.article) return null;
  return mapArticle(data.article);
}
