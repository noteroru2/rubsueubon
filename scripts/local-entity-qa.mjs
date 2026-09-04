import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const source = path.join(root, 'src');
const mainBusinessId = 'https://รับซื้ออุบล.com/#localbusiness';
const verifiedProfile = JSON.parse(fs.readFileSync(path.join(root, 'src/config/business-profile.json'), 'utf8'));
const officialDistricts = [
  'เมืองอุบลราชธานี',
  'ศรีเมืองใหม่',
  'โขงเจียม',
  'เขื่องใน',
  'เขมราฐ',
  'เดชอุดม',
  'นาจะหลวย',
  'น้ำยืน',
  'บุณฑริก',
  'ตระการพืชผล',
  'กุดข้าวปุ้น',
  'ม่วงสามสิบ',
  'วารินชำราบ',
  'พิบูลมังสาหาร',
  'ตาลสุม',
  'โพธิ์ไทร',
  'สำโรง',
  'ดอนมดแดง',
  'สิรินธร',
  'ทุ่งศรีอุดม',
  'นาตาล',
  'เหล่าเสือโก้ก',
  'สว่างวีระวงศ์',
  'น้ำขุ่น',
  'นาเยีย',
];
const sampleSlugs = ['mueang-ubon-ratchathani', 'warin-chamrap', 'det-udom', 'khueang-nai', 'khong-chiam', 'na-chaluai'];
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
const containsValue = (node, value) => {
  if (node === value) return true;
  if (!node || typeof node !== 'object') return false;
  return Object.values(node).some((child) => containsValue(child, value));
};
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

assert(fs.existsSync(dist), 'dist/ is missing; run npm run build first');

const districts = JSON.parse(fs.readFileSync(path.join(source, 'data', 'districts.json'), 'utf8'));
assert(districts.length === 25, `District dataset must contain 25 entries, found ${districts.length}`);
assert(new Set(districts.map(({ slug }) => slug)).size === 25, 'District slugs must be unique');
assert(new Set(districts.map(({ name }) => name)).size === 25, 'District names must be unique');
assert(districts.every(({ active }) => active === true), 'All 25 official district pages must be active');
assert(
  officialDistricts.every((name) => districts.some((district) => district.name === name)),
  'District dataset does not match the 25 official Ubon district names',
);
assert(!districts.some(({ name }) => name === 'ขุนหาญ'), 'Khun Han must not be classified as an Ubon district');
assert(
  districts.every((district) => !('latitude' in district) && !('longitude' in district) && !('postalCode' in district)),
  'District dataset still contains branch-like geo/address fields',
);

const sourceFiles = walk(source).filter((file) => /\.(astro|ts|js|mjs|json|md|mdx)$/.test(file));
const sourceText = sourceFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
assert(!sourceText.includes('buildDistrictLocalBusinessSchema'), 'Fake district LocalBusiness builder still exists');
assert(!sourceText.includes('TollFree'), 'False TollFree claim still exists');

const typoOccurrences = [];
for (const file of sourceFiles) {
  const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, index) => {
    // Preserve the published update URL; URL migration is outside this batch.
    if (line.includes('นาจะหลวง') && !/^slug:\s/.test(line)) {
      typoOccurrences.push(`${path.relative(root, file)}:${index + 1}`);
    }
  });
}
assert(typoOccurrences.length === 0, `Incorrect geographic spelling remains: ${typoOccurrences.join(', ')}`);

const aboutText = fs.readFileSync(path.join(source, 'pages', 'เกี่ยวกับเรา.astro'), 'utf8');
const termsText = fs.readFileSync(path.join(source, 'pages', 'เงื่อนไขรับซื้อ.astro'), 'utf8');
assert(!aboutText.includes('ขุนหาญ') && !termsText.includes('ขุนหาญ'), 'Khun Han remains in Ubon coverage copy');
const khunHanCase = fs.readFileSync(path.join(source, 'content', 'updates', '2025-12-samsung-s24-khunhan.md'), 'utf8');
assert(khunHanCase.includes('จังหวัดศรีสะเกษ'), 'Genuine Khun Han case is not labelled as Sisaket');
assert(!khunHanCase.includes('relatedAreaSlug:'), 'Khun Han case still links to the Ubon district collection');

let checked = 0;
for (const district of districts) {
  const output = path.join(dist, 'พื้นที่', district.slug, 'index.html');
  assert(fs.existsSync(output), `Missing generated district page: ${district.slug}`);
  if (!fs.existsSync(output)) continue;

  const html = fs.readFileSync(output, 'utf8');
  const schemas = parseJsonLd(html, district.slug);
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
  assert(Boolean(canonical), `${district.slug}: missing canonical`);
  if (canonical) {
    assert(decodeURIComponent(new URL(canonical).pathname) === `/พื้นที่/${district.slug}/`, `${district.slug}: canonical is not self-referencing`);
  }

  const topLevelIds = schemas.map((schema) => schema?.['@id']).filter(Boolean);
  assert(new Set(topLevelIds).size === topLevelIds.length, `${district.slug}: duplicate top-level JSON-LD @id`);
  for (const requiredType of ['BreadcrumbList', 'WebPage', 'Service', 'AdministrativeArea']) {
    assert(schemas.some((schema) => types(schema).includes(requiredType)), `${district.slug}: missing ${requiredType} schema`);
  }

  const localBusinesses = schemas.filter((schema) => types(schema).includes('LocalBusiness'));
  assert(localBusinesses.length === 1, `${district.slug}: expected 1 LocalBusiness, found ${localBusinesses.length}`);
  const mainBusiness = localBusinesses[0];
  assert(mainBusiness?.['@id'] === mainBusinessId, `${district.slug}: LocalBusiness does not use the canonical main ID`);
  assert(mainBusiness?.hasMap === verifiedProfile.mapUrl, `${district.slug}: main store map differs from the owner-confirmed profile`);
  assert(mainBusiness?.geo?.latitude === verifiedProfile.geo.latitude && mainBusiness?.geo?.longitude === verifiedProfile.geo.longitude, `${district.slug}: main store coordinates differ from the verified map`);
  assert(Object.entries(verifiedProfile.address).every(([key, value]) => mainBusiness?.address?.[key] === value), `${district.slug}: main store address differs from the owner-confirmed profile`);

  const service = schemas.find((schema) => types(schema).includes('Service'));
  const place = schemas.find((schema) => types(schema).includes('AdministrativeArea'));
  const expectedPlaceId = `https://รับซื้ออุบล.com/พื้นที่/${district.slug}/#place`;
  assert(service?.provider?.['@id'] === mainBusinessId, `${district.slug}: Service provider does not reference main LocalBusiness`);
  assert(service?.areaServed?.['@id'] === expectedPlaceId, `${district.slug}: Service areaServed does not reference page AdministrativeArea`);
  assert(place?.['@id'] === expectedPlaceId, `${district.slug}: AdministrativeArea @id mismatch`);
  assert(place?.name?.includes(district.name), `${district.slug}: AdministrativeArea name mismatch`);
  assert(!schemas.filter((schema) => schema !== mainBusiness).some((schema) => containsValue(schema, 'GeoCoordinates')), `${district.slug}: coordinates must belong only to the verified main store, never to a district branch`);
  assert(!schemas.some((schema) => containsValue(schema, 'TollFree')), `${district.slug}: false TollFree value remains`);
  checked += 1;
}

const sitemapFiles = fs.existsSync(dist) ? fs.readdirSync(dist).filter((name) => /^sitemap-\d+\.xml$/.test(name)) : [];
let sitemapCount = 0;
for (const file of sitemapFiles) {
  sitemapCount += [...fs.readFileSync(path.join(dist, file), 'utf8').matchAll(/<loc>/g)].length;
}
assert(sitemapCount === 236, `Sitemap regression: expected 236 URLs (233 existing + 3 repair pages), found ${sitemapCount}`);

console.log(`Official district records: ${districts.length}`);
console.log(`District pages checked: ${checked}/25`);
console.log(`Sample pages checked: ${sampleSlugs.filter((slug) => districts.some((district) => district.slug === slug)).join(', ')}`);
console.log('Main LocalBusiness per district page: 1');
console.log('Fake district LocalBusiness entities: 0');
console.log('District GeoCoordinates entities: 0');
console.log(`Sitemap URLs: ${sitemapCount}`);

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exit(1);
}

console.log('Local entity QA passed.');
