import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const siteOrigin = 'https://xn--c3c3ab7an0ca2a0dm8p.com';

const ownership = new Map([
  ['/บริการ/รับซื้อ-iphone-อุบล/iphone-13-pro-max/', '/บริการ/รับซื้อ-iphone-13-pro-max-อุบล/'],
  ['/บริการ/รับซื้อ-iphone-อุบล/iphone-14-pro-max/', '/บริการ/รับซื้อ-iphone-14-pro-max-อุบล/'],
  ['/บริการ/รับซื้อ-iphone-อุบล/iphone-15-pro/', '/บริการ/รับซื้อ-iphone-15-pro-อุบล/'],
  ['/บริการ/รับซื้อ-iphone-อุบล/iphone-15-pro-max/', '/บริการ/รับซื้อ-iphone-15-pro-max-อุบล/'],
  ['/บริการ/รับซื้อ-iphone-อุบล/iphone-16-pro/', '/บริการ/รับซื้อ-iphone-16-pro-อุบล/'],
  ['/บริการ/รับซื้อ-iphone-อุบล/iphone-16-pro-max/', '/บริการ/รับซื้อ-iphone-16-pro-max-อุบล/'],
  ['/บริการ/รับซื้อ-ipad-อุบล/ipad-pro/', '/บริการ/รับซื้อ-ipad-pro-อุบล/'],
  ['/บริการ/รับซื้อ-ipad-อุบล/ipad-air/', '/บริการ/รับซื้อ-ipad-air-อุบล/'],
  ['/บริการ/รับซื้อ-ipad-อุบล/ipad-mini/', '/บริการ/รับซื้อ-ipad-mini-อุบล/'],
  ['/บริการ/รับซื้อ-ipad-อุบล/ipad-gen-9-10/', '/บริการ/รับซื้อ-ipad-อุบล/'],
  ['/บริการ/รับซื้อ-ipad-อุบล/ipad-gen/', '/บริการ/รับซื้อ-ipad-อุบล/'],
  ['/บริการ/รับซื้อ-macbook-อุบล/macbook-air-m2/', '/บริการ/รับซื้อ-macbook-air-m2-อุบล/'],
  ['/บริการ/รับซื้อ-macbook-อุบล/macbook-air-m3/', '/บริการ/รับซื้อ-macbook-air-m3-อุบล/'],
  ['/บริการ/รับซื้อ-macbook-อุบล/macbook-pro-m2/', '/บริการ/รับซื้อ-macbook-pro-m2-อุบล/'],
  ['/บริการ/รับซื้อ-macbook-อุบล/macbook-pro-m3/', '/บริการ/รับซื้อ-macbook-pro-m3-อุบล/'],
  ['/บริการ/รับซื้อคอมยกล็อต-อุบล/corporate-pc/', '/บริการ/รับซื้อคอมบริษัท-อุบล/'],
]);

const legacyOwnership = new Map([
  ['/บริการ/รับซื้อ-iphone/iphone-13-pro-max/', '/บริการ/รับซื้อ-iphone-13-pro-max-อุบล/'],
  ['/บริการ/รับซื้อ-iphone/iphone-14-pro-max/', '/บริการ/รับซื้อ-iphone-14-pro-max-อุบล/'],
  ['/บริการ/รับซื้อ-iphone/iphone-15-pro/', '/บริการ/รับซื้อ-iphone-15-pro-อุบล/'],
  ['/บริการ/รับซื้อ-iphone/iphone-15-pro-max/', '/บริการ/รับซื้อ-iphone-15-pro-max-อุบล/'],
  ['/บริการ/รับซื้อ-iphone/iphone-16-pro/', '/บริการ/รับซื้อ-iphone-16-pro-อุบล/'],
  ['/บริการ/รับซื้อ-iphone/iphone-16-pro-max/', '/บริการ/รับซื้อ-iphone-16-pro-max-อุบล/'],
  ['/บริการ/รับซื้อ-macbook/macbook-air-m2/', '/บริการ/รับซื้อ-macbook-air-m2-อุบล/'],
  ['/บริการ/รับซื้อ-macbook/macbook-air-m3/', '/บริการ/รับซื้อ-macbook-air-m3-อุบล/'],
  ['/บริการ/รับซื้อ-macbook/macbook-pro-m2/', '/บริการ/รับซื้อ-macbook-pro-m2-อุบล/'],
  ['/บริการ/รับซื้อ-macbook/macbook-pro-m3/', '/บริการ/รับซื้อ-macbook-pro-m3-อุบล/'],
  ['/บริการ/b2b-lot-ubon/corporate-pc/', '/บริการ/รับซื้อคอมบริษัท-อุบล/'],
  ...['/บริการ/ipad-ubon', '/บริการ/ipad', '/บริการ/รับซื้อ-ipad'].flatMap((prefix) => [
    [`${prefix}/ipad-pro/`, '/บริการ/รับซื้อ-ipad-pro-อุบล/'],
    [`${prefix}/ipad-air/`, '/บริการ/รับซื้อ-ipad-air-อุบล/'],
    [`${prefix}/ipad-mini/`, '/บริการ/รับซื้อ-ipad-mini-อุบล/'],
    [`${prefix}/ipad-gen-9-10/`, '/บริการ/รับซื้อ-ipad-อุบล/'],
    [`${prefix}/ipad-gen/`, '/บริการ/รับซื้อ-ipad-อุบล/'],
  ]),
]);

const standaloneWinners = [
  '/บริการ/รับซื้อ-iphone-13-pro-max-อุบล/',
  '/บริการ/รับซื้อ-iphone-14-pro-max-อุบล/',
  '/บริการ/รับซื้อ-iphone-15-pro-อุบล/',
  '/บริการ/รับซื้อ-iphone-15-pro-max-อุบล/',
  '/บริการ/รับซื้อ-iphone-16-pro-อุบล/',
  '/บริการ/รับซื้อ-iphone-16-pro-max-อุบล/',
  '/บริการ/รับซื้อ-ipad-pro-อุบล/',
  '/บริการ/รับซื้อ-ipad-air-อุบล/',
  '/บริการ/รับซื้อ-ipad-mini-อุบล/',
  '/บริการ/รับซื้อ-ipad-gen-9-อุบล/',
  '/บริการ/รับซื้อ-ipad-gen-10-อุบล/',
  '/บริการ/รับซื้อ-macbook-air-m2-อุบล/',
  '/บริการ/รับซื้อ-macbook-air-m3-อุบล/',
  '/บริการ/รับซื้อ-macbook-pro-m2-อุบล/',
  '/บริการ/รับซื้อ-macbook-pro-m3-อุบล/',
  '/บริการ/รับซื้อคอมบริษัท-อุบล/',
];

const keptNested = [
  '/บริการ/รับซื้อ-macbook-อุบล/macbook-air-m1/',
  '/บริการ/รับซื้อ-macbook-อุบล/macbook-pro-m1/',
  '/บริการ/รับซื้อ-macbook-อุบล/macbook-intel/',
];

const errors = [];
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};
const cleanPath = (value) => {
  const decoded = decodeURIComponent(value);
  const withoutWildcard = decoded.replace(/\/:path\*$/, '/');
  return withoutWildcard.endsWith('/') ? withoutWildcard : `${withoutWildcard}/`;
};
const htmlPath = (urlPath) => path.join(dist, ...urlPath.split('/').filter(Boolean), 'index.html');

const sitemapFiles = fs.readdirSync(dist).filter((name) => /^sitemap-\d+\.xml$/.test(name));
const sitemapUrls = new Set();
for (const name of sitemapFiles) {
  const xml = fs.readFileSync(path.join(dist, name), 'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    sitemapUrls.add(cleanPath(new URL(match[1]).pathname));
  }
}

const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
const redirects = vercel.redirects
  .filter((rule) => !rule.has && rule.destination.startsWith('/'))
  .map((rule) => ({
    source: cleanPath(rule.source),
    destination: cleanPath(rule.destination),
    permanent: rule.permanent === true,
  }));
const redirectBySource = new Map(redirects.map((rule) => [rule.source, rule]));

for (const [loser, winner] of ownership) {
  const rule = redirectBySource.get(loser);
  assert(rule?.permanent, `Missing permanent redirect: ${loser}`);
  assert(rule?.destination === winner, `Wrong redirect: ${loser} -> ${rule?.destination ?? 'missing'}`);
  assert(!sitemapUrls.has(loser), `Loser remains in sitemap: ${loser}`);
  assert(!fs.existsSync(htmlPath(loser)), `Loser HTML still generated: ${loser}`);
}

for (const [legacy, winner] of legacyOwnership) {
  const rule = redirectBySource.get(legacy);
  assert(rule?.permanent, `Missing permanent legacy redirect: ${legacy}`);
  assert(rule?.destination === winner, `Wrong legacy redirect: ${legacy} -> ${rule?.destination ?? 'missing'}`);
}

for (const urlPath of [...standaloneWinners, ...keptNested]) {
  const output = htmlPath(urlPath);
  assert(fs.existsSync(output), `Missing generated winner/keep page: ${urlPath}`);
  assert(sitemapUrls.has(urlPath), `Missing sitemap winner/keep URL: ${urlPath}`);
  if (fs.existsSync(output)) {
    const html = fs.readFileSync(output, 'utf8');
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    assert(Boolean(canonical), `Missing canonical: ${urlPath}`);
    if (canonical) assert(cleanPath(new URL(canonical, siteOrigin).pathname) === urlPath, `Non-self canonical: ${urlPath}`);
  }
}

const sourceExtensions = new Set(['.astro', '.html', '.md', '.mdx', '.ts', '.tsx', '.js', '.jsx']);
const sourceFiles = [];
const walk = (directory, output, filter = () => true) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath, output, filter);
    else if (filter(fullPath)) output.push(fullPath);
  }
};
walk(path.join(root, 'src'), sourceFiles, (file) => sourceExtensions.has(path.extname(file)));
let loserInternalLinks = 0;
for (const file of sourceFiles) {
  const text = fs.readFileSync(file, 'utf8');
  for (const loser of ownership.keys()) loserInternalLinks += text.split(loser).length - 1;
}
assert(loserInternalLinks === 0, `Internal links to loser URLs: ${loserInternalLinks}`);

const htmlFiles = [];
walk(dist, htmlFiles, (file) => file.endsWith('.html'));
const inbound = new Map(standaloneWinners.map((winner) => [winner, 0]));
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const relative = path.relative(dist, file);
  const sourceUrl = relative === 'index.html' ? '/' : cleanPath(`/${path.dirname(relative).replaceAll('\\', '/')}/`);
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    if (!match[1].startsWith('/')) continue;
    const target = cleanPath(new URL(match[1], siteOrigin).pathname);
    if (target !== sourceUrl && inbound.has(target)) inbound.set(target, inbound.get(target) + 1);
  }
}
const orphanWinners = [...inbound].filter(([, count]) => count === 0).map(([urlPath]) => urlPath);
assert(orphanWinners.length === 0, `Orphan winner pages: ${orphanWinners.join(', ')}`);

for (const [loser] of new Map([...ownership, ...legacyOwnership])) {
  const seen = new Set([loser]);
  let current = loser;
  while (redirectBySource.has(current)) {
    current = redirectBySource.get(current).destination;
    assert(!seen.has(current), `Redirect loop from ${loser}`);
    if (seen.has(current)) break;
    seen.add(current);
  }
  assert(seen.size === 2, `Redirect chain from ${loser}: ${[...seen].join(' -> ')}`);
}

console.log(`Sitemap URLs: ${sitemapUrls.size}`);
console.log(`Loser internal links: ${loserInternalLinks}`);
console.log(`Orphan winner pages: ${orphanWinners.length}`);
console.log(`Batch redirects checked: ${ownership.size + legacyOwnership.size}`);

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log('URL ownership QA passed.');
