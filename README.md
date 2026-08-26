# Sales Seduction

One-page sales site. Vite + React + TypeScript, Tailwind CSS v4, `motion/react` for animation.

    npm install
    npm run dev      # http://localhost:5173
    npm run build    # outputs to dist/

## Structure

- `src/App.tsx` — page order
- `src/components/Navbar.tsx`, `Hero.tsx` — the fixed nav and the video hero
- `src/components/*.tsx` — one file per section, in page order
- `src/index.css` — fonts and the `@theme` tokens (`--color-bg-base`, `--color-brand-green`)
- `public/assets/` — images (see `public/assets/README.md` for filenames)

## Still to fill in

- The hero video is the CloudFront URL from the reference design (a robot head). Replace the
  `src` in `src/components/Hero.tsx` with real footage.
- The three stats in "Why sales. Why now." are placeholders.
- Sylvia's bio is a placeholder.
- All three testimonials are placeholders.
- Terms / Privacy / Contact in the footer point nowhere yet.
- Every "get instant access" button scrolls to the pricing block. The one on the pricing block
  itself is tagged `data-checkout` — point that `href` at the real checkout URL when it exists.
- The `pl — en` pill on the hero's right edge is decorative; there is no second language yet.

## Deploy

Render static site, config in `render.yaml`. Build `npm ci && npm run build`, publish `./dist`.
