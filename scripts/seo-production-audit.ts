/**
 * Productie SEO-audit — controleert build-output op blockers vóór bulk-uitrol.
 * Gebruik: npm run build && npm run audit:seo
 */
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = join(process.cwd(), "dist");
const SITE_URL = "https://www.depalletman.nl";

type Status = "GOED" | "WAARSCHUWING" | "BLOCKER";

interface Finding {
  status: Status;
  check: string;
  detail: string;
}

const findings: Finding[] = [];

function add(status: Status, check: string, detail: string) {
  findings.push({ status, check, detail });
}

function walkHtml(dir: string, files: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walkHtml(full, files);
    else if (entry.endsWith(".html")) files.push(full);
  }
  return files;
}

function extractLinks(html: string): string[] {
  const links: string[] = [];
  const re = /href="(\/[^"#?]*)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const href = m[1].replace(/\/$/, "") || "/";
    if (href.startsWith("/_astro/")) continue;
    if (href === "/favicon.svg" || href === "/favicon.ico") continue;
    links.push(href);
  }
  return links;
}

function extractImgAlts(html: string): { total: number; empty: number; samples: string[] } {
  const re = /<img[^>]*>/gi;
  let total = 0;
  let empty = 0;
  const samples: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    total++;
    const tag = m[0];
    const altMatch = tag.match(/\balt="([^"]*)"/);
    const alt = altMatch?.[1] ?? "";
    if (!alt.trim()) empty++;
    else if (samples.length < 5) samples.push(alt);
  }
  return { total, empty, samples };
}

// ── Sitemap ──
const sitemapIndexPath = join(DIST, "sitemap-index.xml");
const sitemapPagePath = join(DIST, "sitemap-0.xml");
if (existsSync(sitemapIndexPath) || existsSync(sitemapPagePath)) {
  const pageXml = existsSync(sitemapPagePath)
    ? readFileSync(sitemapPagePath, "utf8")
    : readFileSync(sitemapIndexPath, "utf8");
  const urlCount = (pageXml.match(/<loc>/g) ?? []).length;
  add(
    "GOED",
    "sitemap.xml",
    `Aanwezig (${urlCount} URL's${existsSync(sitemapPagePath) ? " in sitemap-0.xml" : ""})`,
  );
} else {
  add("BLOCKER", "sitemap.xml", "Niet gevonden in dist/");
}

// ── robots.txt ──
const robotsPath = join(DIST, "robots.txt");
if (existsSync(robotsPath)) {
  const robots = readFileSync(robotsPath, "utf8");
  const hasAllow = /Allow:\s*\//.test(robots);
  const hasSitemap = robots.includes(`${SITE_URL}/sitemap`);
  if (hasAllow && hasSitemap) add("GOED", "robots.txt", "Correct geconfigureerd");
  else add("BLOCKER", "robots.txt", "Ontbrekende Allow of Sitemap-regel");
} else {
  add("BLOCKER", "robots.txt", "Niet gevonden in dist/");
}

if (!existsSync(DIST)) {
  console.error("dist/ niet gevonden — voer eerst npm run build uit.");
  process.exit(1);
}

// ── HTML pages ──
const htmlFiles = walkHtml(DIST);
add("GOED", "build", `${htmlFiles.length} HTML-pagina's gegenereerd`);

// ── ALT-tags ──
let totalImgs = 0;
let emptyAlts = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const { total, empty } = extractImgAlts(html);
  totalImgs += total;
  emptyAlts += empty;
}
if (emptyAlts === 0 && totalImgs > 0) {
  add("GOED", "ALT-tags", `${totalImgs} afbeeldingen, 0 lege alt-teksten`);
} else if (totalImgs === 0) {
  add("WAARSCHUWING", "ALT-tags", "Geen img-tags gevonden in build");
} else {
  add("BLOCKER", "ALT-tags", `${emptyAlts} van ${totalImgs} afbeeldingen zonder alt-tekst`);
}

// ── Internal links ──
const builtPaths = new Set(
  htmlFiles.map((f) => {
    const rel = relative(DIST, f).replace(/\\/g, "/");
    if (rel === "index.html") return "/";
    if (rel.endsWith("/index.html")) return "/" + rel.slice(0, -"/index.html".length);
    return "/" + rel.replace(/\.html$/, "");
  }),
);

const broken = new Set<string>();
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  for (const href of extractLinks(html)) {
    if (!builtPaths.has(href) && !builtPaths.has(href + "/")) {
      broken.add(href);
    }
  }
}

if (broken.size === 0) {
  add("GOED", "interne links", "Geen broken internal links gedetecteerd");
} else {
  add("BLOCKER", "interne links", `${broken.size} broken links: ${[...broken].slice(0, 8).join(", ")}`);
}

// ── 404 page ──
const notFound = join(DIST, "404.html");
if (existsSync(notFound)) add("GOED", "404-pagina", "404.html aanwezig");
else add("BLOCKER", "404-pagina", "404.html niet gevonden");

// ── Hero images (img tags with /images/) ──
let heroImgCount = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  heroImgCount += (html.match(/src="\/images\//g) ?? []).length;
}
if (heroImgCount > 0) {
  add("GOED", "hero-afbeeldingen", `${heroImgCount} img-tags met /images/ pad (SEO alt aanwezig)`);
} else {
  add("BLOCKER", "hero-afbeeldingen", "Geen hero img-tags met /images/ pad");
}

// ── Report ──
console.log("\n=== SEO PRODUCTIE-AUDIT ===\n");
const counts = { GOED: 0, WAARSCHUWING: 0, BLOCKER: 0 };
for (const f of findings) {
  counts[f.status]++;
  const icon = f.status === "GOED" ? "✅" : f.status === "WAARSCHUWING" ? "⚠" : "❌";
  console.log(`${icon} [${f.status}] ${f.check}: ${f.detail}`);
}
console.log(`\n--- Samenvatting ---`);
console.log(`✅ GOED: ${counts.GOED}  ⚠ WAARSCHUWING: ${counts.WAARSCHUWING}  ❌ BLOCKER: ${counts.BLOCKER}`);

const blockers = findings.filter((f) => f.status === "BLOCKER");
if (blockers.length === 0) {
  console.log("\nWebsite productie-gereed voor bulkgeneratie.");
  process.exit(0);
} else {
  console.log(`\n${blockers.length} blocker(s) — nog niet productie-gereed.`);
  process.exit(1);
}
