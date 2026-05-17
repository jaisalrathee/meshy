// meshy.fun — shared utilities (header is per-tool in sidebar)
const TOOLS = [
  { slug: 'brand',       name: 'Brand Starter',     short: 'Brand',     desc: 'Type a name. Get a full brand kit: logomark, wordmark, palette, font pair.', cat: 'Brand' },
  { slug: 'logo',        name: 'Logo Studio',       short: 'Logo',      desc: 'A serious logo generator. 24 pro templates, 5 layouts, 80 icons, full export pack.', cat: 'Brand' },
  { slug: 'logomark',    name: 'Logomark',          short: 'Logomark',  desc: 'Initial + shape + mesh gradient. Generative logomarks in seconds.', cat: 'Brand' },
  { slug: 'wordmark',    name: 'Wordmark',          short: 'Wordmark',  desc: 'Type a name, pick a treatment, get a polished SVG wordmark.', cat: 'Brand' },
  { slug: 'avatar',      name: 'Avatar Generator',  short: 'Avatar',    desc: 'Initials on a mesh-gradient circle. Beautiful avatars in one click.', cat: 'Brand' },
  { slug: 'mesh',        name: 'Mesh Gradient',     short: 'Mesh',      desc: 'Generate beautiful mesh gradients with curated presets, themes, and effects.', cat: 'Generators' },
  { slug: 'screenshot',  name: 'Screenshot Beautifier', short: 'Screenshot', desc: 'Drop a screenshot, get gradient background + soft shadow + perfect padding.', cat: 'Generators' },
  { slug: 'shadow',      name: 'Soft Shadow',       short: 'Shadow',    desc: 'Multi-layer realistic shadows with one elevation slider. Copy CSS.', cat: 'Generators' },
  { slug: 'noise',       name: 'Noise & Patterns',  short: 'Noise',     desc: 'SVG dot grids, wave dividers, grain overlays. Copy CSS or download SVG.', cat: 'Generators' },
  { slug: 'glass',       name: 'Glassmorphism',     short: 'Glass',     desc: 'Frosted glass card generator. Backdrop blur, tint, border. Live preview.', cat: 'Generators' },
  { slug: 'blob',        name: 'Blob & Squircle',   short: 'Blob',      desc: 'Organic SVG blobs with random seed and adjustable control points.', cat: 'Generators' },
  { slug: 'og',          name: 'OG Image',          short: 'OG',        desc: 'Pick template, drop title + logo, mesh background. Export 1200×630.', cat: 'Generators' },
  { slug: 'blurry',      name: 'Blurry Gradients',  short: 'Blurry',    desc: 'Soft dreamy blurred gradients. Pure CSS, copy & paste.', cat: 'Generators' },
  { slug: 'stars',       name: 'Starry Sky',        short: 'Stars',     desc: 'Generate beautiful star fields with constellations. Export SVG/PNG.', cat: 'Generators' },
  { slug: 'confetti',    name: 'Confetti',          short: 'Confetti',  desc: 'Confetti particle generator. Export SVG or copy CSS keyframes.', cat: 'Generators' },
  { slug: 'waves',       name: 'SVG Waves',         short: 'Waves',     desc: 'Section dividers — wavy, layered, animated. Drop-in SVG.', cat: 'Generators' },
  { slug: 'doodle',      name: 'Doodle Background', short: 'Doodle',    desc: 'Hand-drawn doodle pattern backgrounds. Customize density and color.', cat: 'Generators' },
  { slug: 'charts',      name: 'SVG Charts',        short: 'Charts',    desc: 'Quick bar, line, and donut charts from CSV. Beautiful by default.', cat: 'Generators' },
  { slug: 'halftone',    name: 'CMYK Halftone',     short: 'Halftone',  desc: 'Print-style halftone dots from any image. CMYK or mono.', cat: 'Image FX' },
  { slug: 'dither',      name: 'Dither',            short: 'Dither',    desc: 'Retro Bayer / Floyd-Steinberg dithering. 1-bit or color.', cat: 'Image FX' },
  { slug: 'god-rays',    name: 'God Rays',          short: 'Rays',      desc: 'Drop image, get cinematic light rays. Adjustable angle, length, color.', cat: 'Image FX' },
  { slug: 'fractal-glass', name: 'Fractal Glass',   short: 'Fractal',   desc: 'Fractal displacement glass effect. Like looking through textured glass.', cat: 'Image FX' },
  { slug: 'stripe-notif', name: 'Stripe Notification', short: 'Stripe',  desc: 'Hand-drawn fake Stripe payment notifications. Editable name, amount, time.', cat: 'Hand Drawn' },
  { slug: 'mrr-chart',   name: 'MRR Chart',         short: 'MRR',       desc: 'Hand-drawn MRR / revenue chart. Editable monthly data points + callouts.', cat: 'Hand Drawn' },
  { slug: 'hand-emoji',  name: 'Hand Emojis',       short: 'Emojis',    desc: 'Sketch-style emoji set. Copy SVG, customize color, download PNG.', cat: 'Hand Drawn' },
  { slug: 'hand-illus',  name: 'Hand Illustrations', short: 'Illus',    desc: 'Hand-drawn scenes — laptop, rocket, growth, celebration. Editable colors.', cat: 'Hand Drawn' },
  { slug: 'hand-arrows', name: 'Hand Arrows',       short: 'Arrows',    desc: 'Annotation arrows for screenshots. Curved, looped, wobbled.', cat: 'Hand Drawn' },
  { slug: 'hand-quote',  name: 'Hand Quote',        short: 'Quote',     desc: 'Hand-drawn testimonial / pull-quote graphics. Editable text + author.', cat: 'Hand Drawn' },
  { slug: 'palette',     name: 'Palette from Image', short: 'Palette',  desc: 'Extract a color palette from any image. Export to CSS, Tailwind, JSON.', cat: 'Color' },
  { slug: 'tailwind',    name: 'Tailwind Palette',  short: 'Tailwind',  desc: 'Generate a full 50–950 scale from a single hex color.', cat: 'Color' },
  { slug: 'contrast',    name: 'Contrast Checker',  short: 'Contrast',  desc: 'WCAG contrast checker with live editable preview.', cat: 'Color' },
  { slug: 'color-name',  name: 'Color Namer',       short: 'Name',      desc: 'Find the closest named color for any hex.', cat: 'Color' },
  { slug: 'type-scale',  name: 'Type Scale',        short: 'Type',      desc: 'Modular scale generator with live preview. Copy CSS variables.', cat: 'Typography' },
  { slug: 'fonts',       name: 'Font Pairing',      short: 'Fonts',     desc: 'Curated Google Fonts pairings with live preview.', cat: 'Typography' },
  { slug: 'favicon',     name: 'Favicon Generator', short: 'Favicon',   desc: 'Drop image, get every favicon and app icon size you need.', cat: 'Asset' },
  { slug: 'svg',         name: 'SVG Optimizer',     short: 'SVG',       desc: 'Paste SVG, get optimized output. Tunable precision.', cat: 'Asset' },
  { slug: 'ascii',       name: 'ASCII Art',         short: 'ASCII',     desc: 'Turn any image into ASCII art. Multiple charsets, color or mono, instant.', cat: 'Asset' },
];

// Brand block markup (left sidebar, with tool-specific tag)
function brandHtml(tag) {
  return `
    <div class="brand">
      <a href="/" class="brand-link" style="display:flex;align-items:center;gap:10px;text-decoration:none;color:inherit;">
        <span class="brand-mark"></span>
        <div class="brand-stack">
          <span class="brand-name">meshy.fun</span>
          <a href="https://tinystartupstudio.com" target="_blank" rel="noopener" class="brand-by" onclick="event.stopPropagation()">by Tiny Startup Studio</a>
        </div>
      </a>
      ${tag ? `<span class="brand-tag">${tag}</span>` : ''}
    </div>
  `;
}

// Hint footer (bottom of sidebar)
function hintHtml(extra) {
  return `
    <div class="hint">
      ${extra ? extra + '<br/>' : ''}
      <a href="/" class="powered-by">Powered by Tiny Startup Studio</a>
    </div>
  `;
}

function mountToast() {
  if (document.querySelector('.toast')) return;
  const el = document.createElement('div');
  el.className = 'toast';
  el.id = '_toast';
  document.body.appendChild(el);
}
let _toastTimer;
function toast(msg) {
  mountToast();
  const el = document.getElementById('_toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

function copy(text, label = 'Copied') {
  navigator.clipboard.writeText(text).then(() => toast(label));
}

function init() { mountToast(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

// ---------- Color helpers ----------
function hslToHex(h, s, l) {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;
  const k = n => (n + h/30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = x => Math.round(x * 255).toString(16).padStart(2, '0');
  return '#' + toHex(f(0)) + toHex(f(8)) + toHex(f(4));
}

// Generate a beautiful random 5-color palette using harmony rules.
// Picks a base hue then applies analogous / complementary / triadic / tetradic /
// monochromatic / split-complementary relationships with curated S/L ranges.
function randomPalette(opts = {}) {
  const harmonies = ['analogous','complementary','triadic','tetradic','monochromatic','split','warm','cool','duotone'];
  const type = opts.harmony || harmonies[Math.floor(Math.random() * harmonies.length)];
  const baseHue = opts.baseHue != null ? opts.baseHue : Math.floor(Math.random() * 360);
  let hues;
  switch (type) {
    case 'analogous':       hues = [baseHue-30, baseHue-15, baseHue, baseHue+15, baseHue+30]; break;
    case 'complementary':   hues = [baseHue, baseHue+15, baseHue-15, baseHue+180, baseHue+195]; break;
    case 'triadic':         hues = [baseHue, baseHue+10, baseHue+120, baseHue+130, baseHue+240]; break;
    case 'tetradic':        hues = [baseHue, baseHue+60, baseHue+180, baseHue+240, baseHue+300]; break;
    case 'monochromatic':   hues = [baseHue, baseHue+5, baseHue-5, baseHue+10, baseHue-10]; break;
    case 'split':           hues = [baseHue, baseHue+20, baseHue+150, baseHue+180, baseHue+210]; break;
    case 'warm':            hues = [10, 25, 40, 350, 60].map(h => h + (Math.random()*15-7.5)); break;
    case 'cool':            hues = [180, 200, 220, 260, 290].map(h => h + (Math.random()*15-7.5)); break;
    case 'duotone': {
      const h2 = baseHue + 120 + Math.random()*60;
      hues = [baseHue, baseHue+5, baseHue-5, h2, h2+8];
      break;
    }
    default:                hues = [baseHue, baseHue+30, baseHue+60, baseHue+90, baseHue+120];
  }
  // Pleasing saturation/lightness ranges
  const dark = Math.random() < 0.2;
  const pastel = !dark && Math.random() < 0.25;
  return hues.map((h, i) => {
    let s, l;
    if (type === 'monochromatic') {
      s = 60 + Math.random() * 30;
      l = 22 + i * 14;
    } else if (pastel) {
      s = 55 + Math.random() * 25;
      l = 72 + Math.random() * 14;
    } else if (dark) {
      s = 50 + Math.random() * 35;
      l = 22 + Math.random() * 30;
    } else {
      s = 55 + Math.random() * 35;
      l = 48 + Math.random() * 22;
    }
    return hslToHex(h, s, l);
  });
}

// Random mesh stop positions: 5 (x,y) pairs that look balanced (not all in corner)
function randomStops() {
  const slots = [
    [Math.random()*30 + 10, Math.random()*30 + 10],
    [Math.random()*30 + 60, Math.random()*30 + 10],
    [Math.random()*30 + 35, Math.random()*30 + 35],
    [Math.random()*30 + 10, Math.random()*30 + 60],
    [Math.random()*30 + 60, Math.random()*30 + 60],
  ];
  return slots.map(([x,y]) => [Math.round(x), Math.round(y)]);
}

function pickOne(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function chance(p) { return Math.random() < p; }

// ---------- Stock photo samples (Unsplash) ----------
// Hand-picked photos that work well across halftone, dither, fractal-glass, god-rays, ascii.
// Loaded with crossOrigin so canvas pixel reads work.
const SAMPLE_PHOTOS = [
  { id: 'crystal',  name: 'Crystal',   url: 'https://images.unsplash.com/photo-1551404973-761c83cd8339?w=900&q=80&auto=format&fit=crop' },
  { id: 'statue',   name: 'Statue',    url: 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=900&q=80&auto=format&fit=crop' },
  { id: 'portrait', name: 'Portrait',  url: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&q=80&auto=format&fit=crop' },
  { id: 'dog',      name: 'Dog',       url: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80&auto=format&fit=crop' },
  { id: 'rose',     name: 'Rose',      url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=900&q=80&auto=format&fit=crop' },
  { id: 'mountain', name: 'Mountains', url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80&auto=format&fit=crop' },
  { id: 'marbled',  name: 'Marbled',   url: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=900&q=80&auto=format&fit=crop' },
  { id: 'bokeh',    name: 'Bokeh',     url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80&auto=format&fit=crop' },
  { id: 'car',      name: 'Car',       url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80&auto=format&fit=crop' },
  { id: 'sunset',   name: 'Sunset',    url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=900&q=80&auto=format&fit=crop' },
  { id: 'galaxy',   name: 'Galaxy',    url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=900&q=80&auto=format&fit=crop' },
  { id: 'forest',   name: 'Forest',    url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80&auto=format&fit=crop' },
];

const _imgCache = new Map();
function loadSample(idOrUrl) {
  const sample = SAMPLE_PHOTOS.find(s => s.id === idOrUrl);
  const url = sample ? sample.url : idOrUrl;
  if (_imgCache.has(url)) return Promise.resolve(_imgCache.get(url));
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => { _imgCache.set(url, img); resolve(img); };
    img.onerror = reject;
    img.src = url;
  });
}

// ---------- Hand-drawn SVG helpers ----------
// Seeded RNG for consistent wobble across re-renders
function seededRand(seed) {
  let s = seed || 1;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}

// Wobbly line — multiple intermediate points with small perturbations
function wobblyLine(x1, y1, x2, y2, wobble = 1.5, rnd = Math.random) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const steps = Math.max(3, Math.floor(len / 18));
  let d = `M ${x1.toFixed(1)} ${y1.toFixed(1)}`;
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    const px = x1 + dx * t + (rnd() - 0.5) * wobble;
    const py = y1 + dy * t + (rnd() - 0.5) * wobble;
    d += ` L ${px.toFixed(1)} ${py.toFixed(1)}`;
  }
  d += ` L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  return d;
}

// Wobbly rectangle — 4 wobbly lines
function wobblyRect(x, y, w, h, wobble = 1.5, rnd = Math.random) {
  return [
    wobblyLine(x, y, x + w, y, wobble, rnd),
    wobblyLine(x + w, y, x + w, y + h, wobble, rnd),
    wobblyLine(x + w, y + h, x, y + h, wobble, rnd),
    wobblyLine(x, y + h, x, y, wobble, rnd),
  ].join(' ');
}

// Wobbly circle — perturbed circle path
function wobblyCircle(cx, cy, r, wobble = 1.5, rnd = Math.random) {
  const steps = 24;
  let d = '';
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const rr = r + (rnd() - 0.5) * wobble;
    const x = cx + Math.cos(a) * rr;
    const y = cy + Math.sin(a) * rr;
    d += (i === 0 ? 'M' : ' L') + ` ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  d += ' Z';
  return d;
}

// Wobbly rounded rect with the 4 corners curved
function wobblyRoundRect(x, y, w, h, r, wobble = 1.5, rnd = Math.random) {
  const j = (p) => p + (rnd() - 0.5) * wobble;
  return `M ${j(x+r)} ${j(y)} L ${j(x+w-r)} ${j(y)} Q ${j(x+w)} ${j(y)} ${j(x+w)} ${j(y+r)} L ${j(x+w)} ${j(y+h-r)} Q ${j(x+w)} ${j(y+h)} ${j(x+w-r)} ${j(y+h)} L ${j(x+r)} ${j(y+h)} Q ${j(x)} ${j(y+h)} ${j(x)} ${j(y+h-r)} L ${j(x)} ${j(y+r)} Q ${j(x)} ${j(y)} ${j(x+r)} ${j(y)} Z`;
}

// Hatching fill — diagonal pencil-style strokes inside a rect
function hatchFill(x, y, w, h, spacing = 6, angle = 45, wobble = 1, rnd = Math.random) {
  const rad = angle * Math.PI / 180;
  const dx = Math.cos(rad), dy = Math.sin(rad);
  const diag = Math.abs(w * Math.sin(rad)) + Math.abs(h * Math.cos(rad));
  let d = '';
  for (let off = -diag; off < diag * 2; off += spacing) {
    // line from one side to another
    const x1 = x + off * Math.cos(rad - Math.PI/2);
    const y1 = y + off * Math.sin(rad - Math.PI/2);
    const x2 = x1 + dx * diag * 2;
    const y2 = y1 + dy * diag * 2;
    d += wobblyLine(x1, y1, x2, y2, wobble, rnd) + ' ';
  }
  return d;
}

window.meshy = { toast, copy, TOOLS, brandHtml, hintHtml, randomPalette, randomStops, hslToHex, pickOne, chance, SAMPLE_PHOTOS, loadSample, seededRand, wobblyLine, wobblyRect, wobblyCircle, wobblyRoundRect, hatchFill };
