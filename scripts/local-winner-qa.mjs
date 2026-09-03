import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const src = path.join(root, 'src');
const siteOrigin = 'https://รับซื้ออุบล.com';
const mainBusinessId = `${siteOrigin}/#localbusiness`;
const targets = [
  {
    key: 'Warin',
    slug: 'warin-chamrap',
    district: 'วารินชำราบ',
    title: 'รับซื้อสินค้าไอที อำเภอวารินชำราบ อุบลราชธานี',
    h1: 'รับซื้อสินค้าไอที อำเภอวารินชำราบ อุบลราชธานี',
    cases: ['/ผลงาน/รับเทิร์น-iphone-14-วารินชำราบ/', '/ผลงาน/รับซื้อ-asus-rog-วารินชำราบ/'],
  },
  {
    key: 'Det Udom',
    slug: 'det-udom',
    district: 'เดชอุดม',
    title: 'รับซื้อสินค้าไอที อำเภอเดชอุดม อุบลราชธานี',
    h1: 'รับซื้อสินค้าไอที อำเภอเดชอุดม อุบลราชธานี',
    cases: ['/ผลงาน/รับซื้อกล้อง-sony-a7iii-เดชอุดม/', '/ผลงาน/รับเทิร์น-iphone-15-เดชอุดม/'],
  },
  {
    key: 'Khong Chiam',
    slug: 'khong-chiam',
    district: 'โขงเจียม',
    title: 'รับซื้อไอที โขงเจียม | ส่งรูปประเมินก่อนนัดตรวจสินค้า',
    h1: 'รับซื้อสินค้าไอที อำเภอโขงเจียม อุบลราชธานี',
    cases: [],
  },
  {
    key: 'Khueang Nai',
    slug: 'khueang-nai',
    district: 'เขื่องใน',
    title: 'รับซื้อสินค้าไอที อำเภอเขื่องใน อุบลราชธานี',
    h1: 'รับซื้อสินค้าไอที อำเภอเขื่องใน อุบลราชธานี',
    cases: [],
  },
  {
    key: 'Khemarat',
    slug: 'khemarat',
    district: 'เขมราฐ',
    title: 'รับซื้อไอที เขมราฐ | ส่งรูปและสเปกประเมินก่อนนัดหมาย',
    h1: 'รับซื้อสินค้าไอที อำเภอเขมราฐ อุบลราชธานี',
    cases: [],
  },
].map((target) => ({
  ...target,
  pathname: `/พื้นที่/${target.slug}/`,
  source: path.join(src, 'content', 'areas', `${target.slug}.md`),
}));

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
const containsValue = (node, value) => {
  if (node === value) return true;
  if (!node || typeof node !== 'object') return false;
  return Object.values(node).some((child) => containsValue(child, value));
};
const htmlPath = (pathname) => path.join(dist, ...decodeURIComponent(pathname).split('/').filter(Boolean), 'index.html');

assert(fs.existsSync(dist), 'dist/ is missing; run npm run build first');
const sourceExtensions = new Set(['.astro', '.md', '.mdx', '.ts', '.tsx', '.js', '.mjs']);
const sourceFiles = walk(src).filter((file) => sourceExtensions.has(path.extname(file)));
const sitemapFiles = fs.existsSync(dist) ? fs.readdirSync(dist).filter((name) => /^sitemap-\d+\.xml$/.test(name)) : [];
const sitemapPaths = new Set();
for (const file of sitemapFiles) {
  const xml = fs.readFileSync(path.join(dist, file), 'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapPaths.add(decodeURIComponent(new URL(match[1]).pathname));
}
assert(sitemapPaths.size === 229, `Sitemap regression: expected 229 URLs, found ${sitemapPaths.size}`);

const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
const redirectSources = new Set(vercel.redirects.map((redirect) => decodeURIComponent(redirect.source)));
const descriptions = new Set();
const titles = new Set();
const normalizedBodies = new Map();
const contentSimilarity = (left, right) => {
  const shingles = (value) => {
    const normalized = value.replace(/\[[^\]]+\]\([^)]+\)/g, 'LINK').replace(/\s+/g, '').toLowerCase();
    const result = new Set();
    for (let index = 0; index <= normalized.length - 5; index += 1) result.add(normalized.slice(index, index + 5));
    return result;
  };
  const leftSet = shingles(left);
  const rightSet = shingles(right);
  const intersection = [...leftSet].filter((value) => rightSet.has(value)).length;
  const union = new Set([...leftSet, ...rightSet]).size;
  return union ? intersection / union : 0;
};

for (const target of targets) {
  const output = htmlPath(target.pathname);
  assert(fs.existsSync(output), `${target.key}: generated page is missing`);
  if (!fs.existsSync(output)) continue;

  const html = fs.readFileSync(output, 'utf8');
  const title = stripTags(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '');
  const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? '';
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1] ?? '';
  const robots = html.match(/<meta\s+name="robots"\s+content="([^"]+)"/i)?.[1] ?? '';
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  const h1 = h1Matches[0] ? stripTags(h1Matches[0][1]) : '';
  const schemas = parseJsonLd(html, target.key);
  const service = schemas.find((schema) => types(schema).includes('Service'));
  const place = schemas.find((schema) => types(schema).includes('AdministrativeArea'));
  const faq = schemas.find((schema) => types(schema).includes('FAQPage'));
  const localBusinesses = schemas.filter((schema) => types(schema).includes('LocalBusiness'));
  const expectedPlaceId = `${siteOrigin}${target.pathname}#place`;

  assert(title === `${target.title} | รับซื้ออุบล.com`, `${target.key}: title mismatch (${title})`);
  assert(description.length >= 100, `${target.key}: meta description is too short`);
  assert(Boolean(canonical), `${target.key}: canonical is missing`);
  if (canonical) assert(decodeURIComponent(new URL(canonical).pathname) === target.pathname, `${target.key}: canonical is not self-referencing`);
  assert(!robots.toLowerCase().includes('noindex'), `${target.key}: page is noindex`);
  assert(h1Matches.length === 1, `${target.key}: expected one H1, found ${h1Matches.length}`);
  assert(h1 === target.h1, `${target.key}: H1 mismatch (${h1})`);
  assert(sitemapPaths.has(target.pathname), `${target.key}: canonical is missing from sitemap`);
  assert(!redirectSources.has(target.pathname), `${target.key}: canonical owner is configured as a redirect source`);
  for (const required of ['BreadcrumbList', 'WebPage', 'Service', 'AdministrativeArea', 'FAQPage']) {
    assert(schemas.some((schema) => types(schema).includes(required)), `${target.key}: missing ${required} schema`);
  }
  assert(service?.provider?.['@id'] === mainBusinessId, `${target.key}: Service provider mismatch`);
  assert(service?.areaServed?.['@id'] === expectedPlaceId, `${target.key}: Service areaServed mismatch`);
  assert(place?.['@id'] === expectedPlaceId, `${target.key}: AdministrativeArea @id mismatch`);
  assert(place?.name?.includes(target.district), `${target.key}: AdministrativeArea name mismatch`);
  assert(localBusinesses.length === 1, `${target.key}: expected one canonical LocalBusiness, found ${localBusinesses.length}`);
  assert(localBusinesses[0]?.['@id'] === mainBusinessId, `${target.key}: page-specific LocalBusiness found`);
  assert(!localBusinesses[0]?.geo && !localBusinesses[0]?.hasMap, `${target.key}: unverified geo/map found`);
  assert(!localBusinesses[0]?.address?.streetAddress, `${target.key}: unverified street address found`);
  assert(!schemas.some((schema) => containsValue(schema, 'GeoCoordinates')), `${target.key}: GeoCoordinates found`);
  assert(!schemas.some((schema) => types(schema).includes('Review') || types(schema).includes('AggregateRating')), `${target.key}: review/rating schema found`);
  assert(Array.isArray(faq?.mainEntity) && faq.mainEntity.length === 3, `${target.key}: expected three FAQ entities`);
  assert(html.includes('https://line.me/R/ti/p/@buyhub'), `${target.key}: LINE CTA is missing`);

  const brokenTargets = [];
  for (const match of html.matchAll(/href="(\/[^"#?]*)/g)) {
    const href = decodeURIComponent(match[1]);
    if (!href || /\.[a-z0-9]{2,5}$/i.test(href)) continue;
    const normalized = href.endsWith('/') ? href : `${href}/`;
    if (!fs.existsSync(htmlPath(normalized))) brokenTargets.push(href);
  }
  assert(brokenTargets.length === 0, `${target.key}: broken internal links: ${[...new Set(brokenTargets)].join(', ')}`);

  const sourceText = fs.readFileSync(target.source, 'utf8');
  const body = sourceText.split('---', 3)[2] ?? '';
  const frontmatter = sourceText.split('---', 3)[1] ?? '';
  const prohibited = [
    /~\s*\d/,
    /\d+\s*(?:นาที|ชม\.?)/i,
    /ปั๊ม|ตลาด|โรงพยาบาล|สถานี|ถนนคนเดิน/,
    /จุดนัดรับ|ระยะทาง|ทีมงานประจำ|สาขา|ภายใน\s*\d/,
  ];
  for (const pattern of prohibited) assert(!pattern.test(sourceText), `${target.key}: unverifiable local/timing pattern found (${pattern})`);
  const faqCount = (frontmatter.match(/^\s{2}- question:/gm) ?? []).length;
  assert(faqCount === 3, `${target.key}: source FAQ count is ${faqCount}, expected 3`);
  for (const casePath of target.cases) assert(body.includes(casePath), `${target.key}: verified case link missing (${casePath})`);
  if (target.cases.length === 0) assert(!body.includes('/ผลงาน/'), `${target.key}: unsupported case proof added`);

  let inboundSources = 0;
  for (const file of sourceFiles) {
    if (path.resolve(file) === path.resolve(target.source)) continue;
    if (fs.readFileSync(file, 'utf8').includes(target.pathname)) inboundSources += 1;
  }
  const outbound = new Set([
    ...[...sourceText.matchAll(/\]\((\/[^)#?]+\/?)(?:[?#][^)]*)?\)/g)].map((match) => match[1]),
    ...[...frontmatter.matchAll(/^\s+href:\s*["'](\/[^"']+)["']/gm)].map((match) => match[1]),
  ]);
  const sourceWords = body.split(/\s+/).filter(Boolean).length;
  const sections = [...body.matchAll(/^##\s+(.+)$/gm)].length;
  const normalizedBody = body.replace(/\[[^\]]+\]\([^)]+\)/g, 'LINK').replace(/\s+/g, ' ').trim();
  normalizedBodies.set(target.key, normalizedBody);
  descriptions.add(description);
  titles.add(title);

  console.log(`${target.key}: canonical=${target.pathname}`);
  console.log(`${target.key}: title=${title}`);
  console.log(`${target.key}: H1=${h1}`);
  console.log(`${target.key}: source words=${sourceWords}, sections=${sections}, inbound source files=${inboundSources}, outbound internal URLs=${outbound.size}, FAQ=${faqCount}`);
}

assert(titles.size === targets.length, `Target titles are not unique (${titles.size}/${targets.length})`);
assert(descriptions.size === targets.length, `Target descriptions are not unique (${descriptions.size}/${targets.length})`);
const bodyEntries = [...normalizedBodies.entries()];
for (let left = 0; left < bodyEntries.length; left += 1) {
  for (let right = left + 1; right < bodyEntries.length; right += 1) {
    assert(bodyEntries[left][1] !== bodyEntries[right][1], `${bodyEntries[left][0]} and ${bodyEntries[right][0]} have identical bodies`);
  }
}

const districtSlugs = new Set(
  JSON.parse(fs.readFileSync(path.join(src, 'data', 'districts.json'), 'utf8')).map(({ slug }) => slug),
);
const allAreaFiles = walk(path.join(src, 'content', 'areas')).filter(
  (file) => file.endsWith('.md') && districtSlugs.has(path.basename(file, '.md')),
);
const allAreaPages = allAreaFiles.map((file) => {
  const sourceText = fs.readFileSync(file, 'utf8');
  const frontmatter = sourceText.split('---', 3)[1] ?? '';
  return {
    slug: path.basename(file, '.md'),
    title: frontmatter.match(/^title:\s*["']([^"']+)["']/m)?.[1] ?? '',
    body: sourceText.split('---', 3)[2] ?? '',
  };
});
assert(allAreaPages.length === 25, `Expected 25 district content pages, found ${allAreaPages.length}`);
assert(new Set(allAreaPages.map(({ title }) => title)).size === 25, 'District titles are not unique across all 25 pages');
const similarityPairs = [];
for (let left = 0; left < allAreaPages.length; left += 1) {
  for (let right = left + 1; right < allAreaPages.length; right += 1) {
    similarityPairs.push({
      left: allAreaPages[left].slug,
      right: allAreaPages[right].slug,
      score: contentSimilarity(allAreaPages[left].body, allAreaPages[right].body),
    });
  }
}
const targetSlugs = new Set(targets.map(({ slug }) => slug));
const targetPairs = similarityPairs.filter(({ left, right }) => targetSlugs.has(left) && targetSlugs.has(right));
const highestAll = similarityPairs.sort((left, right) => right.score - left.score)[0];
const highestTargets = targetPairs.sort((left, right) => right.score - left.score)[0];

console.log(`Target pages checked: ${targets.length}/5`);
console.log(`Unique titles: ${titles.size}/5`);
console.log(`Unique descriptions: ${descriptions.size}/5`);
console.log(`All district titles: ${new Set(allAreaPages.map(({ title }) => title)).size}/25 unique`);
console.log(`Highest 25-page body similarity (5-character Jaccard, informational): ${highestAll.left}/${highestAll.right}=${highestAll.score.toFixed(3)}`);
console.log(`Highest target-pair body similarity (5-character Jaccard, informational): ${highestTargets.left}/${highestTargets.right}=${highestTargets.score.toFixed(3)}`);
console.log(`Sitemap URLs: ${sitemapPaths.size}`);

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log('Local winner QA passed.');
