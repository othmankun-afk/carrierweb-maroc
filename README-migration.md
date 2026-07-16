# Headless WordPress Migration — CarrierWeb Maroc

This document specifies exactly what must exist in WordPress (Custom Post Types
and **ACF Free** field groups) so that it matches the GraphQL queries the
Next.js front end issues (`lib/queries.ts`).

**ACF Pro is not required.** Every field is a plain Text, Textarea or Select —
no Repeater fields anywhere. See [Section 1.2](#12-working-without-repeater-fields)
for how repeating content is modelled instead.

---

## 1. How the front end works today

### 1.1 Centralised fetcher with automatic fallback

`lib/wordpress.ts` is the single entry point for all content reads. It queries
`WORDPRESS_API_URL` (environment variable) over WPGraphQL. If that variable is
unset, or if WordPress does not respond, the site automatically falls back to
the local dataset in `lib/mock-data.ts`, which holds the same content.

This means **the build and the dev server work with no WordPress instance
available** — useful before the CMS exists, and a safety net in production.

### 1.2 Working without Repeater fields

Repeater is an ACF Pro feature, so every list — `stats`, `features`, `specs`,
`faq`, `benefits`, `useCases`, `recommendedSolutions` — is stored in WordPress
as **numbered flat fields** instead:

```
stat_1_value, stat_1_label, stat_1_icon,
stat_2_value, stat_2_label, stat_2_icon, …
```

These are ordinary Text/Textarea/Select fields available in ACF Free.
`lib/wordpress.ts` reassembles them into arrays and **automatically filters out
any row left blank** — so you never have to fill in all 4/6/3 entries if you
only need two.

### 1.3 Icon handling

WordPress cannot store JSX (`<BarChart3 />`), so every icon in WordPress and in
the mock data is a plain **string key** (for example `"bar-chart-3"`).
`lib/icon-map.tsx` resolves each key to its React component.

### 1.4 Rendering strategy

`app/solutions/page.tsx`, `app/solutions/[slug]/page.tsx`,
`app/secteurs/page.tsx` and `app/secteurs/[slug]/page.tsx` are **Server
Components**. They read content through `generateStaticParams` (pre-rendered at
build time) and `generateMetadata` (SEO).

**ISR:** revalidation is set to 60 seconds (`REVALIDATE_SECONDS` in
`lib/wordpress.ts`). An edit in WordPress therefore appears on the live site in
under a minute, with no redeployment.

### 1.5 The internal contract

`lib/types.ts` and `lib/mock-data.ts` **must not be modified.** They are the
internal contract the pages consume, and they are deliberately isolated from
how WordPress happens to store the data (Repeater, numbered fields, or anything
else — the pages neither know nor care).

---

## 2. Custom Post Types to create in WordPress

| CPT slug   | Label     | Created with              |
| ---------- | --------- | ------------------------- |
| `solution` | Solutions | Custom Post Type UI (or code) |
| `secteur`  | Secteurs  | Custom Post Type UI (or code) |

Each one must be **public**, have **Custom Fields** support enabled, and declare
the correct **GraphQL Single/Plural Name** (`solution` / `solutions` and
`secteur` / `secteurs`) so WPGraphQL exposes them under the names the queries
expect.

Display order on the listing pages follows the post **Order** attribute
(`menu_order`).

---

## 3. ACF Free fields — Solutions (group name: `solutionFields`)

All fields are Text, Textarea or Select. No Repeater.

| ACF field name                        | Type     | Notes                                                                                                                                                          |
| ------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `icon`                                | Select   | Options: `map-pin`, `fuel`, `thermometer`, `message-square`, `bar-chart-3`, `settings-2`, `trending-down`, `shield`, `clock`, `zap`, `check-circle-2` (must match the keys in `lib/icon-map.tsx`) |
| `tagline`                             | Text     | Banner subtitle on the detail page                                                                                                                             |
| `shortDescription`                    | Textarea | Card text on the `/solutions` listing                                                                                                                          |
| `description`                         | Textarea | Long body text on the detail page                                                                                                                              |
| `stat_1_value` … `stat_4_value`       | Text     | Up to 4 rows (e.g. `−25%`)                                                                                                                                     |
| `stat_1_label` … `stat_4_label`       | Text     | (e.g. `Réduction des coûts`)                                                                                                                                   |
| `stat_1_icon` … `stat_4_icon`         | Select   | Same options as `icon` above                                                                                                                                   |
| `feature_1_title` … `feature_4_title` | Text     | Up to 4 rows                                                                                                                                                   |
| `feature_1_desc` … `feature_4_desc`   | Textarea |                                                                                                                                                                |
| `feature_1_icon` … `feature_4_icon`   | Select   |                                                                                                                                                                |
| `spec_1_label` … `spec_6_label`       | Text     | Up to 6 rows (technical specification table)                                                                                                                   |
| `spec_1_value` … `spec_6_value`       | Text     |                                                                                                                                                                |
| `testimonialQuote`                    | Textarea |                                                                                                                                                                |
| `testimonialAuthor`                   | Text     |                                                                                                                                                                |
| `testimonialCompany`                  | Text     |                                                                                                                                                                |
| `faq_1_question` … `faq_3_question`   | Text     | Up to 3 rows                                                                                                                                                   |
| `faq_1_answer` … `faq_3_answer`       | Textarea |                                                                                                                                                                |
| `benefit_1_title` … `benefit_2_title` | Text     | Up to 2 rows                                                                                                                                                   |
| `benefit_1_desc` … `benefit_2_desc`   | Textarea |                                                                                                                                                                |
| `seoRichContent`                      | Textarea | SEO paragraph at the foot of the page                                                                                                                          |

> **Partial rows are fine.** If a given solution only has 2 statistics or 3
> features, simply leave the remaining fields (`stat_3_*`, `stat_4_*`, …)
> **empty** in WordPress. They are filtered out automatically and will not
> appear on the site.

---

## 4. ACF Free fields — Sectors (group name: `secteurFields`)

| ACF field name                        | Type     | Notes                                                                                     |
| ------------------------------------- | -------- | ----------------------------------------------------------------------------------------- |
| `icon`                                | Select   | Options: `truck`, `container`, `hard-hat`, `package` (or any other key added to `lib/icon-map.tsx`) |
| `tagline`                             | Text     | Banner subtitle on the detail page                                                        |
| `listingDescription`                  | Textarea | Card text on the `/secteurs` listing                                                      |
| `description`                         | Textarea | "Vos Enjeux Métiers" section on the detail page                                           |
| `usecase_1_title` … `usecase_4_title` | Text     | Up to 4 rows                                                                              |
| `usecase_1_desc` … `usecase_4_desc`   | Textarea |                                                                                           |
| `recsol_1_title` … `recsol_3_title`   | Text     | Typically 2–3 rows                                                                        |
| `recsol_1_href` … `recsol_3_href`     | Text     | e.g. `/solutions/suivi-gps` — entered manually as text                                    |
| `seoRichContent`                      | Textarea | SEO paragraph                                                                             |

> **Note on `recsol_*_href`:** the URL is currently typed in by hand as plain
> text, to keep the editing experience simple. A true relationship field linking
> a sector to a real solution post would require ACF Pro; it can be added later
> if the constraint is lifted.

---

## 5. Required plugins

- **WPGraphQL**
- **Advanced Custom Fields (ACF) — Free edition** (the wordpress.org version; no
  Pro, no licence key)
- **WPGraphQL for ACF** — exposes the `solutionFields` / `secteurFields` groups
  in the GraphQL schema under the exact names the queries in `lib/queries.ts`
  expect.

---

## 6. Front-end setup

```bash
cp .env.local.example .env.local
# Set WORDPRESS_API_URL to your GraphQL endpoint
```

If `WORDPRESS_API_URL` is left empty, the site runs on the local mock data
(`lib/mock-data.ts`) — ideal for developing or testing the front end before
WordPress is ready.

```bash
npm install
npm run dev
```

---

## 7. Remaining setup steps

- [ ] Set up a local WordPress instance (LocalWP or Docker) and install ACF
      **Free** (not Pro)
- [ ] Create the `solution` and `secteur` CPTs
- [ ] Create the two ACF field groups (`solutionFields` / `secteurFields`) using
      the tables above — numbered fields, no Repeater
- [ ] Create the 6 solutions and 4 sectors in WordPress (the values can be
      copied directly from `lib/mock-data.ts`, which holds the current site
      content)
- [ ] Test the GraphQL queries in the WPGraphQL GraphiQL IDE
      (`/wp-admin` → GraphQL → GraphiQL IDE) to confirm the field names match
- [ ] Set `WORDPRESS_API_URL` in `.env.local` and in the host's environment
      variables (Vercel or equivalent)

---

## 8. Site settings — header / footer / home page

The home page, header and footer are **translatable** via the dictionaries in
`lib/dictionaries/{fr,ar,en}.ts`. For **French**, part of this content is also
**editable in WordPress without ACF Pro**.

ACF Free has no Options Page (that is a Pro feature), so the settings live on a
`reglage` CPT holding **exactly one published post** (slug **`reglages-site`**).
`lib/site-settings.ts` reads that post; **any empty field falls back to the
dictionary**, so the site works correctly even before the post is created.

### CPT to create

| CPT slug  | Label    | Public | Custom Fields | GraphQL Single/Plural |
| --------- | -------- | ------ | ------------- | --------------------- |
| `reglage` | Réglages | yes    | yes           | `reglage` / `reglages` |

### ACF Free field group — group name `reglagesFields`

All plain Text / Textarea (no Repeater):

| ACF field name       | Type     | Fallback when empty (dictionary) |
| -------------------- | -------- | -------------------------------- |
| `footerBlurb`        | Textarea | `footer.blurb`                   |
| `contactPhone`       | Text     | `+212 (0)5 22 36 19 88`          |
| `contactEmail`       | Text     | `info@carrierweb.ma`             |
| `contactAddress`     | Text     | `contact.addressValue`           |
| `linkedinUrl`        | Text     | `https://linkedin.com`           |
| `heroTitleLine1`     | Text     | `hero.titleA`                    |
| `heroTitleHighlight` | Text     | `hero.titleBhl`                  |
| `heroTitleLine3`     | Text     | `hero.titleC`                    |
| `heroSubtitle`       | Textarea | `hero.subtitle`                  |

Then create **one** `reglage` post titled "Réglages du site" with the slug
**`reglages-site`**, publish it, and fill in whichever fields are needed.

> The query is `GET_SITE_SETTINGS` in `lib/queries.ts`. Only the `fr` locale
> queries WordPress; `ar` and `en` use the dictionaries, since WordPress holds
> French content only (same rule as for solutions and sectors).

### What stays hard-coded (by design)

Navigation labels, section titles and descriptions, and the home-page marketing
copy live in the dictionaries — edited by a developer, across all three
languages. Moving them into WordPress × 3 languages would require a multilingual
WordPress setup (Polylang or WPML), which is a later step if the need arises.

---

## 9. Testimonials and Articles — auto-provisioned CPTs (mu-plugins)

Unlike `solution` and `secteur` (created through CPT UI and stored in the
database), the following CPTs are **defined entirely in code** as must-use
plugins, with their ACF Free fields exposed to WPGraphQL and their content
**auto-seeded on first load**. Nothing to click: when WordPress starts, the CPTs
appear in the admin already populated.

| mu-plugin                                  | CPT          | GraphQL       | Front end (WordPress first, local fallback)                       |
| ------------------------------------------ | ------------ | ------------- | ----------------------------------------------------------------- |
| `wp-content/mu-plugins/cw-temoignages.php` | `temoignage` | `temoignages` | `Testimonials.tsx` (home) ← `getTestimonialsFromWP()`             |
| `wp-content/mu-plugins/cw-articles.php`    | `article`    | `articles`    | `/ressources` + `/ressources/[slug]` ← `lib/articles.ts`          |

**Testimonial** — fields: `quote` (Textarea), `author`, `role`, `company`.
Order follows the post "Order" attribute (`menu_order`). Fallback:
`dict.testimonials.items`.

**Article** — Repeater-free structure: `category`, `excerpt`, `metaDescription`,
`publishedDate` (YYYY-MM-DD, falls back to the WordPress post date),
`readingMinutes`, `intro`, **6 sections** (`section{N}Heading`,
`section{N}Paragraphs` = paragraphs separated by **a blank line**,
`section{N}Bullets` = **one bullet per line**), `keyTakeaways` (one idea per
line), and **3 related solutions** (`related{N}Title` + `related{N}Href`).
`mapArticle()` in `lib/wordpress.ts` rebuilds these into arrays, ignoring empty
lines. Fallback: `lib/articles.ts` (plus `.ar` / `.en`).

WordPress holds **French only**: `ar` and `en` always read the local translation
files (same rule as solutions and sectors).

> **To re-seed** after changing the starting content: delete the
> `cw_temoignages_seeded_v1` / `cw_articles_seeded_v1` option from the
> `wp_options` table.

---

## 10. Contact form — e-mail delivery (SMTP / Nodemailer)

Independent of WordPress. The `app/api/contact/route.ts` route (POST) sends the
enquiry over SMTP. `ContactView.tsx` automatically falls back to a `mailto:`
link if SMTP is not configured (HTTP 503) or if the send fails, so an enquiry is
never lost.

Environment variables (see `.env.local.example`):

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587            # 587 (STARTTLS) or 465 (SSL)
SMTP_SECURE=false        # true when using port 465
SMTP_USER=your-address@gmail.com
SMTP_PASS=…              # Gmail app password (16 characters)
CONTACT_EMAIL_TO=…       # recipient of the enquiries
CONTACT_EMAIL_FROM=…     # displayed sender (defaults to SMTP_USER)
```

> For Gmail: enable 2-step verification on the account, then create an
> **app password** (Google → Security → App passwords) and use it as
> `SMTP_PASS`. A production mailbox should be configured before go-live, as the
> route falls back to a hard-coded default recipient otherwise.
