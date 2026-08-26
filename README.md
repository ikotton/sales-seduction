# Sales Seduction

One-page sales site. Plain static HTML — no build step, no dependencies.

- `index.html` — the whole page
- `assets/` — images (see `assets/README.md` for filenames)
- `render.yaml` — Render static-site config

## Editing

Open `index.html` and edit the text directly. Sections are numbered in comments
(1 HERO through 12 FOOTER).

Things still to fill in:
- The three stats in "Why sales. Why now." are placeholders.
- Sylvia's bio is a placeholder.
- All three testimonials are placeholders.
- Terms / Privacy / Contact in the footer point nowhere yet.
- Every "Get Instant Access" button scrolls to the pricing block. The one on the
  pricing block itself is tagged `data-checkout` — point that `href` at the real
  checkout URL when it exists.

## Preview locally

    python3 -m http.server 4173

Then open http://localhost:4173
