<div align="center">

# meshy.fun

**A constellation of small, beautiful design tools.**
Free forever. No signup. No watermarks.

[**meshy.fun**](https://meshy.fun) · [Brand Starter](https://meshy.fun/brand/) · [Mesh Gradient](https://meshy.fun/mesh/) · [OG Image](https://meshy.fun/og/) · [ASCII Magic](https://meshy.fun/ascii/)

</div>

---

## What's inside

**36 focused tools across 7 categories**, all built as plain HTML files with a shared design system. No build step, no framework — every tool is a single `index.html` that drops into a static host.

### Brand
[Brand Starter](https://meshy.fun/brand/) · [Logomark](https://meshy.fun/logomark/) · [Wordmark](https://meshy.fun/wordmark/) · [Avatar](https://meshy.fun/avatar/)

### Generators
[Mesh Gradient](https://meshy.fun/mesh/) · [Screenshot Beautifier](https://meshy.fun/screenshot/) · [Soft Shadow](https://meshy.fun/shadow/) · [Noise & Patterns](https://meshy.fun/noise/) · [Glassmorphism](https://meshy.fun/glass/) · [Blob](https://meshy.fun/blob/) · [OG Image](https://meshy.fun/og/) · [Blurry Gradients](https://meshy.fun/blurry/) · [Starry Sky](https://meshy.fun/stars/) · [Confetti](https://meshy.fun/confetti/) · [SVG Waves](https://meshy.fun/waves/) · [Doodle Background](https://meshy.fun/doodle/) · [SVG Charts](https://meshy.fun/charts/)

### Hand Drawn
[Stripe Notification](https://meshy.fun/stripe-notif/) · [MRR Chart](https://meshy.fun/mrr-chart/) · [Hand Emojis](https://meshy.fun/hand-emoji/) · [Hand Illustrations](https://meshy.fun/hand-illus/) · [Hand Arrows](https://meshy.fun/hand-arrows/) · [Hand Quote](https://meshy.fun/hand-quote/)

### Image FX
[CMYK Halftone](https://meshy.fun/halftone/) · [Dither](https://meshy.fun/dither/) · [God Rays](https://meshy.fun/god-rays/) · [Fractal Glass](https://meshy.fun/fractal-glass/)

### Color
[Palette from Image](https://meshy.fun/palette/) · [Tailwind Palette](https://meshy.fun/tailwind/) · [Contrast Checker](https://meshy.fun/contrast/) · [Color Namer](https://meshy.fun/color-name/)

### Typography
[Type Scale](https://meshy.fun/type-scale/) · [Font Pairing](https://meshy.fun/fonts/)

### Asset
[Favicon Generator](https://meshy.fun/favicon/) · [SVG Optimizer](https://meshy.fun/svg/) · [ASCII Magic](https://meshy.fun/ascii/)

---

## Run locally

```bash
git clone https://github.com/jaisalrathee/meshy.git
cd meshy
npm install
npm run dev
# → http://localhost:4901
```

That's it. No bundler, no compile step, no dev server hot-reload. Edit any `index.html`, refresh the browser.

## Architecture

```
meshy/
├── index.html              # Landing page (the constellation map)
├── shared.css              # Design system — used by every tool
├── shared.js               # Utilities + tool registry + hand-drawn helpers
├── mesh/index.html         # Mesh Gradient (self-contained, full studio app)
├── brand/index.html        # Brand Starter
├── halftone/index.html     # CMYK Halftone
└── …32 more tools, one folder each
```

Each tool is a single, self-contained `index.html` that:

- Imports `shared.css` for the design system (colors, layout, controls)
- Imports `shared.js` for `meshy.brandHtml()`, `meshy.toast()`, `meshy.copy()`, color helpers, hand-drawn SVG helpers, and the curated stock-photo library
- Renders its own state, controls, and preview — no router, no framework, no global state

**Why the constraint?** Two reasons:

1. **One tool, one file.** Anyone can copy a tool folder, drop it on any static host, and it works. No webpack config to fight.
2. **Zero learning curve to contribute.** If you can write HTML + JS, you can ship a tool here.

### The design system

`shared.css` defines the studio aesthetic:

- 3-column app shell (`.app` → `.sidebar` · `.canvas-wrap` · `.sidebar.right`)
- Brand block in the corner via `meshy.brandHtml(tag)`
- Italic-serif page title (`.toolbar .title`)
- Chips, sliders, color pickers, thumbnail grids, output boxes — consistent across all 36 tools

### Hand-drawn helpers

`meshy.wobblyLine()`, `wobblyRect()`, `wobblyCircle()`, `wobblyRoundRect()`, `hatchFill()` generate intentionally imperfect SVG paths for the Hand Drawn tools (Stripe Notification, MRR Chart, etc.). Pair with `seededRand(seed)` for consistent wobble across renders.

## Deploy

The site lives at [meshy.fun](https://meshy.fun) on **Cloudflare Pages**.

```bash
npx wrangler pages deploy . --project-name=meshy-fun --branch=main --commit-dirty=true
```

Or push to your own static host: any directory-of-HTML-files server (Netlify, Vercel, GitHub Pages, S3 + CloudFront, plain nginx) works without modification.

## Contributing

PRs welcome. The best way to add value:

### Add a new tool

1. Create `your-tool/index.html` — copy any existing tool as a template
2. Add an entry to the `TOOLS` array in `shared.js`
3. Add a thumbnail style + content snippet in the landing `index.html`
4. Open a PR

### Improve existing tools

- Better presets, more curated palettes
- Better mobile layouts
- Better keyboard shortcuts
- New export formats
- Performance fixes
- Accessibility improvements

### Issue first for big changes

For new categories, sweeping redesigns, or new shared infrastructure — please open an issue first so we can align before you build.

### Code style

- No build step. No dependencies beyond `serve` for local dev.
- Plain HTML, CSS, JS — no TypeScript, no React, no Tailwind. The whole point is that any designer or hobbyist can read and modify it.
- Reuse `shared.css` classes. Don't reinvent buttons, sliders, or chips.
- One tool = one file. No multi-page tools, no cross-imports.

## Tech

- Plain HTML / CSS / JS
- SVG-heavy rendering (canvas where pixel manipulation is needed — halftone, dither, ASCII)
- Cloudflare Pages for hosting
- [Pirsch](https://pirsch.io) for privacy-friendly analytics
- Google Fonts: Inter, Instrument Serif, Caveat, Kalam, Patrick Hand, and others

## Credits

Built by [Jaisal Rathee](https://x.com/ratheejaisal) at [Tiny Startup Studio](https://tinystartupstudio.com).

Stock photos via [Unsplash](https://unsplash.com). Icons inspired by [Lucide](https://lucide.dev). Fonts via [Google Fonts](https://fonts.google.com).

## License

[MIT](LICENSE). Use it, fork it, ship your own constellation.
