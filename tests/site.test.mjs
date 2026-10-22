import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const css = readFileSync(new URL("css/site.css", root), "utf8");
const script = readFileSync(new URL("js/main.js", root), "utf8");
const pages = [
  "index.html",
  "about/index.html",
  "devlog/index.html",
  "favorites/index.html",
  "football/index.html",
  "travel/index.html",
];

assert.match(css, /prefers-reduced-motion/);
assert.match(css, /:focus-visible/);
assert.match(css, /\[hidden\]\{display:none!important\}/);
assert.doesNotMatch(script, /glassSurfaceSelector|glass-refraction/);

for (const page of pages) {
  const html = readFileSync(new URL(page, root), "utf8");
  assert.match(html, /site\.css\?v=/, `${page} should load the shared stylesheet`);
  assert.doesNotMatch(html, /(?:liquid-glass|style)\.css/, `${page} should not load competing legacy styles`);
  assert.match(html, /class="theme-toggle"/);
  assert.match(html, /class="lang-toggle"/);
  assert.doesNotMatch(html, /数据与算法实习生|Glassmorphism UI/);
}

console.log("Shared site and accessibility checks passed.");
