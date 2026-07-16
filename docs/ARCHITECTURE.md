# CarrierWeb Maroc — Code Overview

A technical walkthrough of how the marketing site is built, for anyone reading or picking up the codebase. The business/structure side is in the project report; this document is about the code.

---

## 1. Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Content (CMS) | Headless WordPress via WPGraphQL + ACF **Free** |
| Rendering | React Server Components + ISR (revalidate 60s) |
| Email | Nodemailer over SMTP (contact form) |
| Images | `sharp` (build-time optimization) |
| Icons | `lucide-react` |

The whole site is server-rendered and statically cached, then refreshed in the background (see §5). There is no client-side data fetching for content.

---

## 2. Project structure

```
project/
├─ app/                     # App Router — routes + UI
│  ├─ page.tsx              # French homepage (root, no prefix)
│  ├─ layout.tsx           # Root layout: SEO metadata, fonts, theme
│  ├─ solutions/…          # French routes at the root
│  ├─ secteurs/…
│  ├─ ressources/…
│  ├─ [locale]/            # Arabic + English routes (/ar, /en)
│  ├─ _shared/             # View components reused by FR and [locale]
│  ├─ components/          # UI building blocks (Header, Hero, …)
│  ├─ api/contact/route.ts # Contact form endpoint
│  ├─ sitemap.ts           # Generated sitemap.xml
│  └─ robots.ts            # Generated robots.txt
├─ lib/
│  ├─ wordpress.ts         # Data layer: WPGraphQL fetch + local fallback
│  ├─ queries.ts           # GraphQL queries
│  ├─ types.ts             # Shared content types (the "contract")
│  ├─ mock-data.ts         # Local fallback content (FR) + .ar / .en
│  ├─ articles.ts          # Resource articles (FR) + .ar / .en
│  ├─ site-settings.ts     # Editable header/footer/hero settings
│  ├─ dictionaries/        # UI strings per language (fr/ar/en)
│  ├─ i18n.ts              # Locale config, routing helpers, hreflang
│  └─ icon-map.tsx         # Maps string keys → lucide icons
├─ proxy.ts                # Locale routing (Next 16 middleware)
├─ next.config.ts          # Image domains
└─ .env.local.example      # Environment variables, documented
```

Mental model: **`lib/` is the data + language brain, `app/` is what the user sees.** A route file stays thin and delegates to a shared view.

**Assets.** Images in `public/` come from free-license stock sources cleared for commercial use; the logos and demo video are CarrierWeb brand assets. Final licensed brand imagery can be swapped in before launch without code changes.

---

## 3. Content: headless WordPress with an automatic local fallback

All content is read through a single module, `lib/wordpress.ts`.

**The fetcher never throws.** `fetchGraphQL()` returns `null` on any problem — `WORDPRESS_API_URL` not set, WordPress down, network error, or a GraphQL error — and every `getX()` function falls back to the local content in `lib/mock-data.ts`:

```ts
export async function getSolutionBySlug(slug: string): Promise<Solution | null> {
  const data = await fetchGraphQL<{ solution: WPSolutionNode | null }>(
    GET_SOLUTION_BY_SLUG, { slug }
  );
  if (!data || !data.solution) {
    return mockSolutions.find((s) => s.slug === slug) ?? null; // fallback
  }
  return mapSolution(data.solution);
}
```

Practical effect: the site **builds and renders with or without WordPress**. You can develop offline, and if the CMS ever goes down in production the site keeps serving the last known content instead of erroring.

**Which WordPress?** The CMS is a *new, purpose-built* headless WordPress provisioned specifically for this site — its custom post types and ACF Free field groups are created to match the GraphQL queries the front end sends (documented field-by-field in `README-migration.md`). It does **not** reuse an existing WordPress theme or content structure, and because of the fallback the front end can be built and previewed before the CMS is even provisioned.

### The "no-repeater" trick (ACF Free)

ACF Free has no *repeater* field, so a list can't be modelled the usual way. Instead each list is stored as a **fixed set of numbered flat fields** in WordPress — `stat_1_value`, `stat_1_label`, `stat_2_value`, … — and the code reassembles them into arrays, dropping any row the editor left empty:

```ts
const stats = compact([
  { raw: { v: f.stat1Value, l: f.stat1Label },
    value: { value: f.stat1Value ?? "", label: f.stat1Label ?? "",
             icon: selectValue(f.stat1Icon, "zap") } },
  { raw: { v: f.stat2Value, l: f.stat2Label }, value: { … } },
  // … up to stat_4
]);
```

`compact()` keeps a row only if at least one of its *raw* values is non-empty, so the editor doesn't have to fill every slot. `selectValue()` unwraps ACF Select fields (WPGraphQL returns them as single-element arrays like `["bar-chart-3"]`) and applies a sensible default icon. The complete field-to-field mapping is documented in `README-migration.md`.

### Content model in WordPress

- **Solutions** and **Sectors** — custom post types, each with an ACF field group.
- **Testimonials** and **Articles** — custom post types registered in code as *must-use plugins* (mu-plugins) that **auto-seed** their launch content on first load. This is deliberate: these two purely editorial types arrive pre-populated with no manual admin setup, yet stay fully editable in WordPress afterwards. The same content lives locally in `lib/mock-data.ts` / `lib/articles.ts` for the fallback path, so the two never drift at launch.
- **Site settings** — ACF Free has no Options Page, so a single post of a `reglage` CPT (slug `reglages-site`) holds the editable header/footer/hero fields (`lib/site-settings.ts`). Every field is optional and falls back to the dictionary, so the site works before that post even exists.
- Ordering everywhere follows WordPress's **menu_order** ("Order" field), not publish date, so the editorial order stays stable.

> WordPress only holds the **French** content. Arabic and English come from the dictionaries and local data (see §4), so `ar`/`en` skip WordPress entirely.

**What happens to Arabic/English when French content changes?** Editing or adding French content in WordPress updates the French site within the ISR window (~60s). Arabic and English are maintained in the codebase (dictionaries + local data), so a new WordPress page or a French edit does **not** automatically create or update its AR/EN versions — those are changed deliberately in code. This is a conscious trade-off: the two translated languages stay stable and human-reviewed, rather than partially auto-translated or left half-populated when a new French page appears.

---

## 4. Internationalization (FR / AR / EN)

Three locales, configured in `lib/i18n.ts`:

- **French** is the default and served from the **root** (`/solutions`) — existing URLs never change.
- **Arabic** and **English** are served under a prefix (`/ar/…`, `/en/…`) from `app/[locale]/`.

### Routing — `proxy.ts`

`proxy.ts` (Next 16's replacement for `middleware.ts`) does one job: keep French canonical at the root.

```ts
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // /fr/… → redirect to the prefix-less URL (avoid duplicate content)
  if (hasPrefix(pathname, "fr")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next(); // /ar, /en and root FR pass through
}
```

### Shared views — one source, three languages

To avoid maintaining three near-identical copies of every page, all page content lives in `app/_shared/*View.tsx`. A route is just a thin wrapper:

```tsx
// app/page.tsx (French homepage)
export default function Home() {
  return <HomeView locale="fr" />;
}
// app/[locale]/page.tsx does the same with locale="ar" | "en"
```

`HomeView` takes the `locale`, pulls its dictionary, and renders. One file to change, all languages updated.

### RTL, hreflang, formatting

- `dirFor("ar")` returns `"rtl"`, set as `dir` on `<html>`, which flips the layout.
- `pageAlternates(locale, path)` builds the **canonical + hreflang** links (fr / ar / en + `x-default`) for every page.
- `intlLocale` gives per-language date/number formatting (`fr-MA`, `ar-MA`, `en-GB`).
- Dictionaries are type-safe: `Dictionary = typeof fr`, so TypeScript **forces** `ar` and `en` to expose exactly the same keys — a missing translation is a compile error, not a runtime blank.

---

## 5. Rendering & caching (ISR)

Pages are React Server Components, statically generated and cached, with **Incremental Static Regeneration** set to 60 seconds:

```ts
const REVALIDATE_SECONDS = 60;
// used in every fetch: next: { revalidate: REVALIDATE_SECONDS }
```

So an edit in WordPress appears on the live site within ~1 minute, in the background, with **no redeploy**. Within a single render, `getSiteSettings` is wrapped in React's `cache()` so the Hero and the Footer reading the same settings only trigger one request.

---

## 6. Contact form — `app/api/contact/route.ts`

A Node.js route handler that emails the submission over SMTP with Nodemailer.

- **Validation**: required fields + email format, checked server-side.
- **Escaping**: user input is HTML-escaped before it goes into the email body.
- **Graceful degradation**: if SMTP env vars are missing the route returns `503`, and the front-end falls back to a `mailto:` link — the form is never a dead end.

Config is entirely through environment variables (`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`).

---

## 7. SEO

- `app/sitemap.ts` and `app/robots.ts` generate `sitemap.xml` / `robots.txt` from code.
- Per-page metadata + canonical/hreflang via `app/_shared/meta.ts` and `pageAlternates`.
- JSON-LD structured data (`StructuredData` / `JsonLd` components).
- Open Graph + Twitter cards in `app/layout.tsx`.
- Google Search Console verification through the `GOOGLE_SITE_VERIFICATION` env var (injected into the layout when present).
- Legal pages (`mentions-legales`, `confidentialite`) ship as `noindex` until the final legal identifiers are added.

---

## 8. Environment variables

All optional — the site runs on local data with none of them set. See `.env.local.example` for the documented list.

| Variable | Purpose |
|---|---|
| `WORDPRESS_API_URL` | WPGraphQL endpoint. Unset → 100% local content. |
| `GOOGLE_SITE_VERIFICATION` | Search Console token (HTML-tag method). |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` | SMTP server for the contact form. |
| `SMTP_USER` / `SMTP_PASS` | SMTP credentials (Gmail: use an App Password). |
| `CONTACT_EMAIL_TO` / `CONTACT_EMAIL_FROM` | Recipient / displayed sender. |

---

## 9. Running it

```bash
npm install
cp .env.local.example .env.local   # optional; fill in WORDPRESS_API_URL etc.
npm run dev                        # http://localhost:3000
```

```bash
npm run build && npm run start     # production build
npm run lint                       # eslint
```

With no `.env.local`, the site runs entirely on `lib/mock-data.ts` — handy for a first look without setting up WordPress.

---

## 10. Before going live (checklist)

- Make the WordPress instance publicly reachable and set `WORDPRESS_API_URL`.
- Fill in the legal identifiers and remove `noindex` on the two legal pages.
- Confirm the real client-portal URL in the header.
- Add the Search Console token and submit `sitemap.xml`.
- Point `next.config.ts` image domains at the real WordPress media host.
