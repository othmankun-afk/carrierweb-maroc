// Shared content types. These are the "contract" both the mock data
// (lib/mock-data.ts) and the WPGraphQL mapping (lib/wordpress.ts) must
// satisfy, so pages never need to know whether data came from WordPress
// or from the local fallback.

export interface StatItem {
  value: string;
  label: string;
  icon: string; // icon-map.ts key
}

export interface FeatureItem {
  title: string;
  desc: string;
  icon: string; // icon-map.ts key
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  desc: string;
}

export interface Solution {
  slug: string;
  title: string;
  icon: string; // icon-map.ts key
  tagline: string;
  /** Short blurb shown on the /solutions listing card. */
  shortDescription: string;
  /** Longer body text shown on the detail page. */
  description: string;
  stats: StatItem[];
  features: FeatureItem[];
  specs: SpecItem[];
  testimonial: Testimonial;
  faq: FaqItem[];
  benefits: BenefitItem[];
  seoRichContent: string;
}

/** Slimmed-down shape used on the /solutions listing page. */
export interface SolutionSummary {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
}

export interface UseCase {
  title: string;
  desc: string;
}

export interface RecommendedSolution {
  title: string;
  href: string;
}

export interface Sector {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  /** Short blurb shown on the /secteurs listing card. */
  listingDescription: string;
  description: string;
  useCases: UseCase[];
  recommendedSolutions: RecommendedSolution[];
  seoRichContent: string;
}

export interface SectorSummary {
  slug: string;
  title: string;
  icon: string;
  listingDescription: string;
}
