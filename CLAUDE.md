# CLAUDE.md

Guidance for working on this repo. See `README.md` for the basics (commands, where content lives, how to add a post).

## Stack

React 19, TypeScript (strict), Vite, react-router-dom v7 (`BrowserRouter`), `react-markdown` with `remark-gfm` and `rehype-highlight` for posts. Plain CSS files, no CSS framework. Fonts are self-hosted through `@fontsource` (Sora for text, Ubuntu for the nav, Geist Mono for code).

## Checks

- `npm run build` must pass (it runs `tsc --noEmit` first). There are no tests or linters.
- For visual changes, run the dev server and look at the result at **1440px and 390px wide**. Check there is no horizontal scroll.
- Code style: no semicolons, single quotes, 2-space indent.

## Design rules

- The home page was built from a Figma design (file key `BdSIxi3glDnxv3PMM8yuJR`, frame "Desktop - 1", 1440px wide). Colours, spacing, radii and type sizes come from `src/styles/tokens.css`. Use the tokens rather than new literal values.
- Only a desktop frame exists in Figma. Tablet and mobile layouts are derived from it, with breakpoints at 768px, 1024px and 1200px. Below 1024px the nav becomes a menu button with a drawer.
- There is no dark mode. The design uses a fixed mix of dark and light bands.
- Brand colour is `#0004FF`. Do not add new accent colours.
- Home sections have the ids `home`, `about`, `stats`, `technologies`, `experience`, `certifications`, `contacts`, `blog`, `links`, `projects` and `faq`. The nav and footer link only to the ones listed in `nav`; `stats`, `technologies` and `faq` have no nav item. Keep `nav` in `src/data/profile.ts` in sync when you add or rename a section.
- The page is clipped horizontally (`overflow-x: clip`) because the glows and the laptop image are wider than phone screens. Do not remove that without checking mobile.

- Animations: the hero has a rotating word; on desktop (1200px and up, motion allowed) it is pinned for 1800px of scrolling while scenes ("Now", "Stack", "Certified") fade in and out beside the laptop, driven by the `--p` scroll progress that `Hero.tsx` sets (the CSS in `home-top.css` does the rest, no animation library); the stats count up, and cards and headings fade in on scroll (`src/hooks/useReveal.ts`, which lists the elements it animates). All of it is switched off for `prefers-reduced-motion`. When adding a new card or heading, add its class to the list in `useReveal.ts`.

## Content

- Copy for the home page lives in `src/data/profile.ts`, not in the components. That includes the rotating words, hero scenes, stats and FAQ answers.
- Technology logos in the running line are CC0 SVGs from the `simple-icons` package, saved in `src/assets/tech/` with the fill set to `#303030` to match the Java logo. The Redis icon is from `simple-icons@9.21.0` because newer versions use the redesigned Redis mark. Java is a raster image because its icon is not in `simple-icons`.
- Blog post front matter fields: `title`, `date` (`YYYY-MM-DD`), `category`, `tags` (a JSON array), `summary`. Posts are sorted by date, newest first, and the home page shows the newest four.
- Verify `defaults`, Homebrew and other command-line instructions before putting them in a post. Homebrew packages can be checked with `https://formulae.brew.sh/api/cask/<name>.json`.

## Gotchas

- Images below the fold use `loading="lazy"`. In automated screenshots, scroll through the page first or they will show up blank.
- The floating nav covers content near the top of the viewport. Scroll targets need extra top margin (`section[id]` has `scroll-margin-top`).
- `npm run build` copies `dist/index.html` to `dist/404.html` for GitHub Pages deep links. Keep that step.

## Git

- Work on a branch and open a pull request. Pull requests are squash-merged into `main`, and each merge to `main` deploys the site.
- Do not commit `dist/` or `node_modules/` (both are in `.gitignore`).
