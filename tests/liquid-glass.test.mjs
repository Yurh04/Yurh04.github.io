import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const css = readFileSync(new URL("css/liquid-glass.css", root), "utf8");
const script = readFileSync(new URL("js/main.js", root), "utf8");
const pages = [
  "index.html",
  "about/index.html",
  "devlog/index.html",
  "favorites/index.html",
  "football/index.html",
  "travel/index.html",
];

assert.match(css, /\.glass-refraction\s*\{/);
assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.glass-refraction/);
assert.match(script, /pointerType === "touch"/);
assert.match(script, /--reveal-delay/);
assert.match(script, /glassSurfaceSelector = \[[\s\S]*"\.hero"/);

for (const page of pages) {
  const html = readFileSync(new URL(page, root), "utf8");
  assert.match(html, /liquid-glass\.css\?v=4/, `${page} should load the v4 material`);
}

console.log("Liquid Glass v4 static checks passed.");
