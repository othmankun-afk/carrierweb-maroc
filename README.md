# CarrierWeb Maroc — Marketing Website

Rebuild of [carrierweb.com/ma](https://www.carrierweb.com/ma/) as a fast, multilingual, headless-CMS site.

**Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Headless WordPress (WPGraphQL + ACF Free)**

The site is fully server-rendered and statically cached, reads its content from a headless WordPress, and **falls back to local content automatically** whenever WordPress is unavailable — so it always builds and always renders.

---

## Highlights

- **Headless WordPress, with a safety net.** All content is read through one data layer. If WordPress is down, misconfigured, or errors, the site silently serves local fallback content instead of breaking.
- **Runs on the *free* ACF.** No paid plugins. Repeater-style lists are modelled as numbered flat fields and reassembled in code — see [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) and [`README-migration.md`](README-migration.md).
- **Trilingual (FR / AR / EN)** with correct SEO: French at the root, Arabic & English under a prefix, right-to-left for Arabic, and per-page `canonical` + `hreflang`.
- **Fresh content without redeploys.** Incremental Static Regeneration (60s) means an edit in WordPress goes live within about a minute.
- **SEO built in.** Generated sitemap & robots, JSON-LD structured data, Open Graph, and Google Search Console verification.

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2 (App Router) |
| UI | React 19 · TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Content | Headless WordPress · WPGraphQL · ACF Free |
| Rendering | React Server Components + ISR (60s) |
| Email | Nodemailer (SMTP) — contact form |
| Images / Icons | `sharp` · `lucide-react` |

## Quick start

```bash
npm install
cp .env.local.example .env.local   # optional — see below
npm run dev                        # http://localhost:3000
```

Without `.env.local`, the site runs **entirely on local content** (`lib/mock-data.ts`) — no WordPress needed to develop or preview.

```bash
npm run build && npm run start     # production build
npm run lint                       # eslint
```

## Tests

Unit tests run with [Vitest](https://vitest.dev):

```bash
npm test          # run once
npm run test:watch
```

They cover the pure logic that's easy to get subtly wrong and double as living documentation:

- **i18n** (`lib/__tests__/i18n.test.ts`) — locale prefixing, `stripLocale`, and the `canonical` + `hreflang` alternates.
- **Data layer** (`lib/__tests__/wordpress.test.ts`) — the `compact()` reassembly of ACF-Free numbered fields, `selectValue()`, and the **automatic fallback to local content** when WordPress is absent.
- **Contact form** (`app/api/contact/__tests__/validation.test.ts`) — email validation and HTML escaping.

## Project structure

```
app/                     Routes + UI (App Router)
  page.tsx, layout.tsx   French homepage (root) + root layout
  [locale]/              Arabic & English routes (/ar, /en)
  _shared/               View components reused across all 3 languages
  components/            UI building blocks (Header, Hero, …)
  api/contact/route.ts   Contact form endpoint (SMTP)
  sitemap.ts, robots.ts  Generated SEO files
lib/
  wordpress.ts           Data layer: WPGraphQL fetch + local fallback
  queries.ts, types.ts   GraphQL queries + shared content types
  mock-data.ts           Local fallback content (+ .ar / .en)
  i18n.ts                Locale config, routing helpers, hreflang
  dictionaries/          UI strings per language
proxy.ts                 Locale routing (Next 16 middleware)
```

> **Deep dive:** [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) explains the data layer, the ACF-Free field model, i18n routing, ISR, the contact form, and SEO — with code.

## Environment variables

All optional; the site works with none of them set. See [`.env.local.example`](.env.local.example) for the full, documented list.

| Variable | Purpose |
|---|---|
| `WORDPRESS_API_URL` | WPGraphQL endpoint. Unset → 100 % local content. |
| `GOOGLE_SITE_VERIFICATION` | Google Search Console token. |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` / `SMTP_USER` / `SMTP_PASS` | Contact-form email over SMTP. |
| `CONTACT_EMAIL_TO` / `CONTACT_EMAIL_FROM` | Recipient / displayed sender. |

## Before going live

- Make the WordPress instance publicly reachable and set `WORDPRESS_API_URL`.
- Fill in the legal identifiers and remove `noindex` on the two legal pages.
- Point the `next.config.ts` image domains at the real WordPress media host.
- Add the Search Console token and submit `sitemap.xml`.

---

**Author:** Othman — [othmankun@gmail.com](mailto:othmankun@gmail.com)
