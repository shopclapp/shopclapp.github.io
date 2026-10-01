/**
 * GitHub Pages SPA fallback.
 *
 * This site uses react-router's BrowserRouter, but GitHub Pages serves static
 * files only: a request for /privacy-policy looks for a file at that path and
 * returns GitHub's own 404 page when it doesn't exist. The app never boots, so
 * every deep link is dead on arrival.
 *
 * Two things are emitted after `vite build`:
 *
 *   1. dist/404.html          - a copy of the built index.html. GitHub Pages
 *                               serves it for any unmatched path, so the app
 *                               boots and the router renders the right page.
 *                               The HTTP status is still 404, which is fine for
 *                               humans but not for strict crawlers.
 *
 *   2. dist/<route>/index.html - a copy for each route listed below. Pages
 *                               serves these with a real 200, which matters for
 *                               URLs submitted to third parties (Meta app
 *                               review fetches the privacy policy URL directly).
 *
 * Add a route to PRERENDER_ROUTES whenever a path needs to survive a direct
 * load or be handed to an external reviewer.
 */
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const indexHtml = join(dist, "index.html");

// Routes that must return HTTP 200 on a direct request.
const PRERENDER_ROUTES = [
  "privacy-policy",
  "privacy",
  "terms",
  "security",
  "support",
];

if (!existsSync(indexHtml)) {
  console.error(`postbuild: ${indexHtml} not found - did vite build run?`);
  process.exit(1);
}

copyFileSync(indexHtml, join(dist, "404.html"));
console.log("postbuild: wrote dist/404.html");

for (const route of PRERENDER_ROUTES) {
  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  copyFileSync(indexHtml, join(dir, "index.html"));
  console.log(`postbuild: wrote dist/${route}/index.html`);
}
