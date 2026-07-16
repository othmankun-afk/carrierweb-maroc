# WordPress side (headless CMS)

This folder versions the code that lives in the WordPress installation
(`wp-content/mu-plugins/`). Copy these files into the WordPress instance's
`wp-content/mu-plugins/` directory — as *must-use* plugins they are always
active, need no activation step, and are deployed like code, not configured
by hand.

| File | What it provides |
|---|---|
| `cw-temoignages.php` | `temoignage` CPT + ACF Free fields + auto-seed of the 3 launch testimonials |
| `cw-articles.php` | `article` CPT + ACF Free fields + auto-seed of the launch articles |
| `cw-reglages.php` | `reglage` CPT (single settings post: hero, footer, contact) |
| `cw-pages.php` | Gutenberg-editable fixed pages — seeds the `pourquoi-carrierweb` page with the current content as core blocks |

Every seed is **idempotent**: it only runs when the content does not exist
yet, so editors' changes are never overwritten.

The `solution` / `secteur` CPTs and their ACF field groups are created via
the admin UI (Custom Post Type UI + ACF Free) — the full field-by-field
recipe is in [`../README-migration.md`](../README-migration.md).

## How the Gutenberg pages work

`cw-pages.php` seeds ordinary WordPress **Pages** whose slug matches a route
of the Next.js site (e.g. `pourquoi-carrierweb`). Editors edit them with the
native block editor — add, reorder or remove headings, paragraphs, lists,
columns, images, buttons…

The front end queries the rendered block HTML over WPGraphQL
(`lib/wp-pages.ts`) and displays it inside the site design: the styling for
core blocks is defined in `app/globals.css` under `.wp-content`, so WordPress
supplies the *content* and the site keeps its *appearance*. If the page does
not exist in WordPress (or WordPress is down), the route falls back to the
content hardcoded in the dictionaries — same fallback philosophy as the rest
of the data layer.

To make another fixed page editable: seed it in `cw-pages.php` (or create it
manually in WordPress), then pass `getWPPageContent(locale, "<slug>")` to the
page's view.
