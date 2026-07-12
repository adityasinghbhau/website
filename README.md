# adityabhau.com — Personal Website

Premium, minimalist personal brand site built with **Astro 5**. Fully static, SEO-optimized, dark/light mode, blog with content collections.

## Run locally

```bash
cd website
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
```

## Deploy (free, ~5 minutes)

**Option A — Vercel (recommended):** push this folder to a GitHub repo → import at vercel.com → framework auto-detected → deploy. Add your custom domain (adityabhau.com) in project settings.

**Option B — Netlify Drop (no git needed):** the `dist/` folder is already built — drag it onto https://app.netlify.com/drop for an instant live site.

## Publish a new article

Add a markdown file to `src/content/blog/`:

```markdown
---
title: "Your Title"
description: "One-sentence summary (used for SEO + cards)."
pubDate: 2026-07-15
tags: ["AI Agents", "HR Technology"]
category: "Enterprise AI"
---

Your content here...
```

Reading time, related articles, RSS, sitemap, OG tags and schema markup are automatic.

## Newsletter (connected)

Signups post to Buttondown (buttondown.com/adityabhau). Write and send issues from the Buttondown dashboard. To change provider, edit the form action in `src/components/NewsletterForm.astro`.

## Contact form (connected)

Messages are delivered by Formspree (form `xqevoldv`) to your email. Manage at formspree.io. To change, edit the form action in `src/pages/contact.astro`.

## Analytics (recommended)

Add Plausible or Google Analytics: paste the script tag into `src/layouts/BaseLayout.astro` `<head>`.

## Where things live

| What | Where |
|---|---|
| Design tokens (colors, fonts, spacing) | `src/styles/global.css` |
| Header / nav / dark-mode toggle | `src/components/Header.astro` |
| SEO, schema, OG tags | `src/layouts/BaseLayout.astro` |
| Pages | `src/pages/` |
| Articles | `src/content/blog/` |

See `../PLAN.md` for the full strategy, design system and 5-year roadmap.
