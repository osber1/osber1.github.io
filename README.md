# osber1.github.io

Personal site of Osvaldas Bernatavičius: a one-page portfolio (about, experience, certifications, blog, links, projects) plus a blog and a links page. Live at https://osber1.github.io.

Built with React 19, TypeScript, Vite and react-router. The design comes from a Figma file and the home page follows it closely.

## Run it

```bash
npm install
npm run dev       # dev server on http://localhost:5173
npm run build     # type check + production build into dist/
npm run preview   # serve dist/ locally
```

## Where things live

| What | Where |
| --- | --- |
| Home page copy (about, experience, certification, projects, footer) | `src/data/profile.ts` |
| Technology logos in the running line | `src/data/profile.ts` and `src/assets/tech/` |
| Blog posts | `src/content/posts/*.md` |
| Blog images | `public/images/blog/<post-slug>/` |
| Links page data | `src/data/links.json` |
| Colours, spacing, fonts | `src/styles/tokens.css` |
| Home sections | `src/components/home/` |
| Other pages | `src/pages/` |

## Write a blog post

Add a Markdown file to `src/content/posts/`. The file name becomes the URL (`mac-setup.md` is `/blog/mac-setup`).

```markdown
---
title: "Post title"
date: 2026-10-03
category: macos
tags: ["macos", "setup"]
summary: "One sentence shown on the blog cards."
---
Post body in Markdown. Code blocks are highlighted.
```

Put images in `public/images/blog/<post-slug>/` and reference them as `/images/blog/<post-slug>/name.webp`.

## Deploy

Every push to `main` runs the **Deploy to GitHub Pages** workflow (`.github/workflows/deploy.yml`). The build also copies `index.html` to `404.html`, so direct links like `/blog/mac-setup` work on GitHub Pages.
