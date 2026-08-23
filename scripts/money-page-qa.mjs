import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const src = path.join(root, 'src');
const siteOrigin = 'https://รับซื้ออุบล.com';
const mainBusinessId = `${siteOrigin}/#localbusiness`;
const targets = [
  {
    key: 'Notebook',
    pathname: '/บริการ/รับซื้อโน้ตบุ๊ก-อุบล/',
    source: 'src/content/services/notebook-ubon.md',
    primaryText: 'รับซื้อโน้ตบุ๊ค อุบลราชธานี',
    minimumInboundSources: 20,
  },
  {
    key: 'Computer',
    pathname: '/บริการ/รับซื้อคอมพิวเตอร์-อุบล/',
    source: 'src/content/services/pc-ubon.md',
    primaryText: 'รับซื้อคอมพิวเตอร์ อุบล',
    minimumInboundSources: 20,
  },
];
const errors = [];
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};
const walk = (directory, files = []) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath, files);
    else files.push(fullPath);
  }
  return files;
};
const types = (node) => (Array.isArray(node?.['@type']) ? node['@type'] : [node?.['@type']]).filter(Boolean);
const stripTags = (value) => value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const parseJsonLd = (html, label) => {
  const schemas = [];
  for (const match of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      schemas.push(JSON.parse(match[1]));
    } catch (error) {
      errors.push(`${label}: invalid JSON-LD (${error.message})`);
    }
  }
  return schemas;
};
const htmlPath = (pathname) => path.join(dist, ...decodeURIComponent(pathname).split('/').filter(Boolean), 'index.html');
const sourceExtensions = new Set(['.astro', '.md', '.mdx', '.ts', '.tsx', '.js', '.mjs']);
const sourceFiles = walk(src).filter((file) => sourceExtensions.has(path.extname(file)));
const sitemapFiles = fs.existsSync(dist) ? fs.readdirSync(dist).filter((name) => /^sitemap-\d+\.xml$/.test(name)) : [];
const sitemapPaths = new Set();
for (const file of sitemapFiles) {
  const xml = fs.readFileSync(path.join(dist, file), 'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapPaths.add(decodeURIComponent(new URL(match[1]).pathname));
}
const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
const redirectSources = new Set(vercel.redirects.map((redirect) => decodeURIComponent(redirect.source)));

assert(sitemapPaths.size === 211, `Sitemap regression: expected 211 URLs, found ${sitemapPaths.size}`);

for (const target of targets) {
  const output = htmlPath(target.pathname);
  assert(fs.existsSync(output), `${target.key}: generated canonical page is missing`);
  if (!fs.existsSync(output)) continue;

  const html = fs.readFileSync(output, 'utf8');
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '';
  const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? '';
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? '';
  const robots = html.match(/<meta\s+name="robots"\s+content="([^"]+)"/i)?.[1] ?? '';
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1 = h1Matches[0] ? stripTags(h1Matches[0][1]) : '';
  const schemas = parseJsonLd(html, target.key);
  const service = schemas.find((schema) => types(schema).includes('Service'));
  const breadcrumb = schemas.find((schema) => types(schema).includes('BreadcrumbList'));
  const webpage = schemas.find((schema) => types(schema).includes('WebPage'));
  const faq = schemas.find((schema) => types(schema).includes('FAQPage'));
  const localBusinesses = schemas.filter((schema) => types(schema).includes('LocalBusiness'));

  assert(title.includes(target.primaryText), `${target.key}: title lost primary intent`);
  assert(description.length > 80, `${target.key}: meta description is missing or too short`);
  assert(Boolean(canonical), `${target.key}: canonical is missing`);
  if (canonical) assert(decodeURIComponent(new URL(canonical).pathname) === target.pathname, `${target.key}: canonical is not self-referencing`);
  assert(!robots.toLowerCase().includes('noindex'), `${target.key}: page is noindex`);
  assert(h1Matches.length === 1, `${target.key}: expected one H1, found ${h1Matches.length}`);
  assert(h1.includes(target.primaryText), `${target.key}: H1 lost primary intent`);
  assert(sitemapPaths.has(target.pathname), `${target.key}: canonical is missing from sitemap`);
  assert(!redirectSources.has(target.pathname), `${target.key}: canonical owner is configured as a redirect source`);
  assert(Boolean(breadcrumb), `${target.key}: BreadcrumbList schema is missing`);
  assert(Boolean(webpage), `${target.key}: WebPage schema is missing`);
  assert(Boolean(service), `${target.key}: Service schema is missing`);
  assert(Boolean(faq), `${target.key}: visible FAQPage schema is missing`);
  assert(service?.provider?.['@id'] === mainBusinessId, `${target.key}: Service provider does not reference main business`);
  assert(service?.areaServed?.name === 'อุบลราชธานี', `${target.key}: Service areaServed is incorrect`);
  assert(localBusinesses.length === 0, `${target.key}: unexpected page-specific LocalBusiness entity found`);
  assert(html.includes('https://line.me/R/ti/p/@buyhub'), `${target.key}: LINE valuation CTA is missing`);

  let inboundSources = 0;
  for (const file of sourceFiles) {
    if (path.resolve(file) === path.resolve(root, target.source)) continue;
    if (fs.readFileSync(file, 'utf8').includes(target.pathname)) inboundSources += 1;
  }
  assert(inboundSources >= target.minimumInboundSources, `${target.key}: only ${inboundSources} contextual source files link to the owner`);

  const brokenTargets = [];
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = decodeURIComponent(match[1].split('#')[0].split('?')[0]);
    if (!href || /\.[a-z0-9]{2,5}$/i.test(href)) continue;
    const normalized = href.endsWith('/') ? href : `${href}/`;
    if (!fs.existsSync(htmlPath(normalized))) brokenTargets.push(href);
  }
  assert(brokenTargets.length === 0, `${target.key}: broken internal links: ${[...new Set(brokenTargets)].join(', ')}`);

  const sourceText = fs.readFileSync(path.join(root, target.source), 'utf8');
  const body = sourceText.split('---', 3)[2] ?? '';
  const sourceWords = body.split(/\s+/).filter(Boolean).length;
  const sections = [...body.matchAll(/^##\s+(.+)$/gm)].map((match) => match[1]);
  console.log(`${target.key}: canonical=${target.pathname}`);
  console.log(`${target.key}: H1=${h1}`);
  console.log(`${target.key}: source words=${sourceWords}, sections=${sections.length}, inbound source files=${inboundSources}`);
}

const homeHub = fs.readFileSync(path.join(src, 'config', 'home-hub.ts'), 'utf8');
const mainHubList = homeHub.match(/MAIN_HUB_SERVICE_SLUGS\s*=\s*\[([\s\S]*?)\]/)?.[1] ?? '';
assert(mainHubList.includes("'รับซื้อโน้ตบุ๊ก-อุบล'"), 'Homepage main hub no longer targets the Notebook owner');
assert(mainHubList.includes("'รับซื้อคอมพิวเตอร์-อุบล'"), 'Homepage main hub does not target the Computer owner');
assert(!mainHubList.includes("'รับซื้อ-pc-gaming-อุบล'"), 'Homepage main hub still substitutes PC Gaming for the Computer owner');

const pcGaming = fs.readFileSync(path.join(src, 'content', 'services', 'pc-gaming-ubon.md'), 'utf8');
assert(pcGaming.includes("category: 'computer'"), 'PC Gaming child remains classified as Notebook');
assert(pcGaming.includes("parentSlug: 'pc-ubon'"), 'PC Gaming child does not reference the Computer parent');
assert(pcGaming.includes('/บริการ/รับซื้อคอมพิวเตอร์-อุบล/'), 'PC Gaming child lacks a visible parent link');

const brokenNotebook = fs.readFileSync(path.join(src, 'content', 'services', 'notebook-broken-ubon.md'), 'utf8');
assert(
  !brokenNotebook.match(/^title:\s*['"]รับซื้อโน้ตบุ๊กเปิดไม่ติด/m),
  'General broken-notebook page still overlaps the dedicated no-power page title',
);

const serviceFiles = walk(path.join(src, 'content', 'services')).filter((file) => file.endsWith('.md'));
let notebookCandidates = 0;
let computerCandidates = 0;
for (const file of serviceFiles) {
  const frontmatter = fs.readFileSync(file, 'utf8').split('---', 3)[1] ?? '';
  const title = frontmatter.match(/^title:\s*['"]?([^\r\n'"]+)/m)?.[1] ?? '';
  if (/โน[้๊]ตบุ|Notebook/i.test(title)) notebookCandidates += 1;
  if (/รับซื้อคอม|คอมพิวเตอร์|PC Gaming/i.test(title)) computerCandidates += 1;
}
console.log(`Ownership candidates reviewed: Notebook=${notebookCandidates}, Computer=${computerCandidates}`);
console.log(`Sitemap URLs: ${sitemapPaths.size}`);

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log('Money page QA passed.');
