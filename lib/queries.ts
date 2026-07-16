// WPGraphQL queries. Field names here MUST match the ACF (Free) field group
// keys set up in WordPress — see README-migration.md for the full mapping
// table. No Repeater fields are used anywhere (ACF Free compatible): every
// "list" (stats, features, specs, faq, benefits, useCases,
// recommendedSolutions) is stored as a fixed set of numbered flat
// Text/Textarea fields (e.g. stat_1_value, stat_1_label, stat_1_icon,
// stat_2_value, ...) and reassembled into arrays in lib/wordpress.ts,
// skipping any row left empty in WP.

// Les listings sont triés par l'attribut "Ordre" (menu_order) défini dans WP,
// pas par date de publication — l'ordre éditorial reste stable quand Patricia
// ajoute un nouveau contenu.
export const GET_ALL_SOLUTIONS = /* GraphQL */ `
  query GetAllSolutions {
    solutions(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        slug
        title
        solutionFields {
          icon
          tagline
          shortDescription
        }
      }
    }
  }
`;

export const GET_SOLUTION_BY_SLUG = /* GraphQL */ `
  query GetSolutionBySlug($slug: ID!) {
    solution(id: $slug, idType: SLUG) {
      slug
      title
      solutionFields {
        icon
        tagline
        shortDescription
        description

       stat1Value
        stat1Label
stat1Icon

stat2Value
stat2Label
stat2Icon

stat3Value
stat3Label
stat3Icon

stat4Value
stat4Label
stat4Icon

        feature1Title
feature1Desc
feature1Icon
        feature2Title
        feature2Desc
        feature2Icon
        feature3Title
        feature3Desc
        feature3Icon
        feature4Title
        feature4Desc
        feature4Icon

        spec1Label
        spec1Value
        spec2Label
        spec2Value
        spec3Label
        spec3Value
        spec4Label
        spec4Value
        spec5Label
        spec5Value
        spec6Label
        spec6Value

        testimonialQuote
        testimonialAuthor
        testimonialCompany

        faq1Question
        faq1Answer
        faq2Question
        faq2Answer
        faq3Question
        faq3Answer

        benefit1Title
        benefit1Desc
        benefit2Title
        benefit2Desc

        seoRichContent
      }
    }
  }
`;

// « Réglages du site » — ACF Free n'a pas d'Options Page (réservé à Pro), on
// utilise donc un CPT `reglage` avec UN SEUL post publié (slug reglages-site)
// qui porte les champs éditables du header/footer/hero. Tous facultatifs :
// vides → repli sur le dictionnaire (lib/dictionaries).
export const GET_SITE_SETTINGS = /* GraphQL */ `
  query GetSiteSettings {
    reglage(id: "reglages-site", idType: SLUG) {
      reglagesFields {
        footerBlurb
        contactPhone
        contactEmail
        contactAddress
        linkedinUrl
        heroTitleLine1
        heroTitleHighlight
        heroTitleLine3
        heroSubtitle
      }
    }
  }
`;

// ── Témoignages (accueil) ──────────────────────────────────────────────
// CPT `temoignage` (voir mu-plugin cw-temoignages.php). Triés par « Ordre »
// (menu_order). WP ne porte que le FR ; ar/en gardent le dictionnaire.
export const GET_ALL_TESTIMONIALS = /* GraphQL */ `
  query GetAllTestimonials {
    temoignages(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        temoignageFields {
          quote
          author
          role
          company
        }
      }
    }
  }
`;

// ── Articles (Ressources) ──────────────────────────────────────────────
// CPT `article` (voir mu-plugin cw-articles.php). Structure « sans Repeater » :
// 6 sections numérotées (titre + paragraphes séparés par ligne vide + puces
// une par ligne), à-retenir et solutions liées en champs plats. `date` sert de
// repli quand publishedDate est laissé vide.
const ARTICLE_FIELDS = /* GraphQL */ `
  category
  excerpt
  metaDescription
  publishedDate
  readingMinutes
  intro
  section1Heading
  section1Paragraphs
  section1Bullets
  section2Heading
  section2Paragraphs
  section2Bullets
  section3Heading
  section3Paragraphs
  section3Bullets
  section4Heading
  section4Paragraphs
  section4Bullets
  section5Heading
  section5Paragraphs
  section5Bullets
  section6Heading
  section6Paragraphs
  section6Bullets
  keyTakeaways
  related1Title
  related1Href
  related2Title
  related2Href
  related3Title
  related3Href
`;

export const GET_ALL_ARTICLES = /* GraphQL */ `
  query GetAllArticles {
    articles(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        slug
        title
        date
        articleFields { ${ARTICLE_FIELDS} }
      }
    }
  }
`;

export const GET_ARTICLE_BY_SLUG = /* GraphQL */ `
  query GetArticleBySlug($slug: ID!) {
    article(id: $slug, idType: SLUG) {
      slug
      title
      date
      articleFields { ${ARTICLE_FIELDS} }
    }
  }
`;

export const GET_ALL_SECTORS = /* GraphQL */ `
  query GetAllSectors {
    secteurs(first: 100, where: { orderby: { field: MENU_ORDER, order: ASC } }) {
      nodes {
        slug
        title
        secteurFields {
          icon
          tagline
          listingDescription
        }
      }
    }
  }
`;

export const GET_SECTOR_BY_SLUG = /* GraphQL */ `
  query GetSectorBySlug($slug: ID!) {
    secteur(id: $slug, idType: SLUG) {
      slug
      title
      secteurFields {
        icon
        tagline
        description

        usecase1Title
        usecase1Desc
        usecase2Title
        usecase2Desc
        usecase3Title
        usecase3Desc
        usecase4Title
        usecase4Desc

        recsol1Title
        recsol1Href
        recsol2Title
        recsol2Href
        recsol3Title
        recsol3Href

        seoRichContent
      }
    }
  }
`;
