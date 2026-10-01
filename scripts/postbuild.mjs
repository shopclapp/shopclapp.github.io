/**
 * GitHub Pages SPA fallback + per-route metadata.
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
 *   2. dist/<route>/index.html - a copy for each route below, with its og:url,
 *                               canonical, title and description rewritten to
 *                               describe that page. Pages serves these with a
 *                               real 200.
 *
 * Why the rewrite matters: crawlers read og:url as the canonical address. If
 * every page ships og:url="https://clapp.in", then debugging
 * https://clapp.in/privacy-policy resolves it to the homepage and shows
 * homepage metadata - which is actively misleading when an external reviewer
 * (e.g. Meta app review) is checking that specific URL.
 *
 * Add a route here whenever a path needs to survive a direct load or be handed
 * to an external reviewer.
 */
import { copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const indexHtml = join(dist, "index.html");
const ORIGIN = "https://clapp.in";

/**
 * route     - path segment under dist/
 * canonical - the URL this page should claim as its own (a redirecting route
 *             points at its destination)
 */
const PRERENDER_ROUTES = [
  {
    route: "privacy-policy",
    title: "Privacy Policy — Clapp",
    description:
      "How Clapp collects, uses, and protects your data, including Meta platform data handling and instructions for requesting deletion.",
  },
  {
    // /privacy redirects to /privacy-policy, so it claims the same canonical.
    route: "privacy",
    canonical: `${ORIGIN}/privacy-policy`,
    title: "Privacy Policy — Clapp",
    description:
      "How Clapp collects, uses, and protects your data, including Meta platform data handling and instructions for requesting deletion.",
  },
  {
    route: "terms",
    title: "Terms of Service — Clapp",
    description: "The terms governing use of Clapp's AI orchestration platform.",
  },
  {
    route: "security",
    title: "Security — Clapp",
    description:
      "How Clapp secures customer data: encryption, access controls, audits, and compliance.",
  },
  {
    route: "support",
    title: "Support — Clapp",
    description: "Get help with Clapp - contact options and support resources.",
  },
];

if (!existsSync(indexHtml)) {
  console.error(`postbuild: ${indexHtml} not found - did vite build run?`);
  process.exit(1);
}

const template = readFileSync(indexHtml, "utf8");

/** Replace the content="..." of a meta tag matched by its property/name attribute. */
const setMeta = (html, attr, key, value) =>
  html.replace(
    new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`),
    `$1${value}$2`
  );

copyFileSync(indexHtml, join(dist, "404.html"));
console.log("postbuild: wrote dist/404.html");

for (const { route, title, description, canonical } of PRERENDER_ROUTES) {
  const url = canonical ?? `${ORIGIN}/${route}`;
  let html = template;

  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<title>)[^<]*(<\/title>)/, `$1${title}$2`);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "name", "twitter:url", url);
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);

  const dir = join(dist, route);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`postbuild: wrote dist/${route}/index.html (og:url ${url})`);
}
