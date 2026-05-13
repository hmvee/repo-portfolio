# Portfolio

Personal portfolio site built with [Astro](https://astro.build). Static, fast,
deploys to Vercel or Netlify with zero config.

## Stack choice

| Decision | Choice | Why |
|---|---|---|
| Framework | Astro 4 | Zero-JS output by default; content collections for project markdown; single-binary deploy to any static host |
| Styling | Plain CSS + custom properties | No build-time knowledge required; token system is directly editable; nothing to version-bump |
| JS | Minimal vanilla | Dark mode toggle (~30 lines), scroll reveal (IntersectionObserver), filter buttons. No framework needed. |
| Fonts | Fraunces + Inter (Google Fonts, variable) | Fraunces is an optical-size-aware serif with genuine personality; Inter is the right workhorse sans |
| Sitemap | @astrojs/sitemap | Auto-generated from pages; zero config |

Total JS shipped to the browser: ~2KB.

---

## Getting started

**Prerequisites:** Node.js 18+

```bash
cd portfolio
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # preview the build locally
```

---

## Deploying

### Vercel
Push to GitHub, connect the repo in Vercel — it detects Astro automatically.
No config needed.

### Netlify
Same: connect repo, Netlify detects the framework. Or use the CLI:
```bash
npx netlify-cli deploy --build
```

**Before deploying**, update two things:
1. `astro.config.mjs` — change `site` to your real URL
2. `public/robots.txt` — change the sitemap URL to your real URL

---

## Updating your content

### Name, bio, contact info, social links
Everything personal lives in one file:

```
src/data/site.ts
```

Open it and edit the `site` object. Fields are commented. You don't need to touch
any component code.

### Adding or editing a project
Each project is a markdown file in `src/content/projects/`. To add a project,
create a new `.md` file with this frontmatter:

```markdown
---
title: Your Project Title
description: One or two sentence description shown on cards.
type: Web Application   # Web Application | Design | Writing | Open Source | Side Project | Client Work
tech: [React, TypeScript]
year: 2024
featured: false         # Set to true to show on the home page (max 3)
url: https://yourproject.com   # Optional external link
color: "#2D4A6B"        # Hex color for the card visual block
colorText: light        # "light" or "dark" — title text color on the block
---

Your project body goes here in markdown.
```

Then write the project body in markdown below the frontmatter. It will be rendered
on the project detail page.

### Changing the accent color
In `src/styles/global.css`, find the `:root` block and update:
```css
--accent: #B45309;          /* light mode */
```
And in `[data-theme="dark"]`:
```css
--accent: #F59E0B;          /* dark mode */
```
Check that your chosen color meets 4.5:1 contrast on both backgrounds.

### Swapping in a real photo (About page)
In `src/pages/about.astro`, find the `.photo-placeholder` div and replace it with:
```html
<img
  src="/photo.jpg"
  alt="Jordan Ellis"
  width="120"
  height="120"
  class="photo-real"
/>
```
Add the image to `public/photo.jpg`. Add a `.photo-real` style rule matching
`.photo-placeholder` dimensions.

### Contact form
The form on the Contact page is wired to a placeholder Formspree endpoint.
To activate it:
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy the form ID
3. In `src/pages/contact.astro`, replace `YOUR_FORM_ID` in the `action` attribute:
   ```html
   action="https://formspree.io/f/YOUR_ACTUAL_ID"
   ```

### OG image
Add a 1200×630 PNG at `public/og.png`. If you skip this, the OG tag will point
to a missing file — not a problem for search engines, but social cards won't
show an image.

---

## Project structure

```
src/
  data/
    site.ts           ← single source of truth for personal content
  content/
    config.ts         ← content collection schema
    projects/         ← one .md file per project
  styles/
    global.css        ← design tokens, reset, base styles
  layouts/
    Base.astro        ← HTML shell, meta tags, font loading
  components/
    Header.astro
    Footer.astro
    ProjectCard.astro
    ThemeToggle.astro
  pages/
    index.astro       ← home
    about.astro
    contact.astro
    projects/
      index.astro     ← project grid with filter
      [slug].astro    ← project detail template
public/
  robots.txt
  favicon.svg         ← replace with your own
```

---

## Customization notes

- **Spacing system:** 8pt grid via `--sp-*` tokens in `global.css`
- **Type scale:** fluid sizes via `clamp()` for headings; `--text-*` tokens for fixed sizes
- **Dark mode:** uses `data-theme` attribute on `<html>`; stored in localStorage; respects `prefers-color-scheme` on first visit
- **Scroll animations:** `.reveal` class + IntersectionObserver in `Base.astro`; automatically disabled for `prefers-reduced-motion`
- **Focus states:** globally defined in `global.css` using `:focus-visible`
