import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const servicesDir = path.join(root, 'src', 'content', 'services');
const foundation = JSON.parse(fs.readFileSync(path.join(root, 'data', 'seo', 'brand-series-foundation.json'), 'utf8'));
const ownership = JSON.parse(fs.readFileSync(path.join(root, 'data', 'seo', 'url-ownership-master.json'), 'utf8'));
const blueprint = JSON.parse(fs.readFileSync(path.join(root, 'data', 'seo', '400-page-blueprint.json'), 'utf8'));
const errors = [];
const assert = (ok, msg) => { if (!ok) errors.push(msg); };
const norm = (u) => u && u !== '/' ? (u.endsWith('/') ? u : `${u}/`) : u;
const scalar = (text, key) => {
  const m = text.match(new RegExp(`^${key}:\\s*["']?(.+?)["']?\\s*$`, 'm'));
  return m ? m[1].trim() : '';
};

const currentRows = ownership.records.filter((r) => r.current_http_behavior === 'GENERATED_CANONICAL_ROUTE');
const currentByUrl = new Map(currentRows.map((r) => [norm(r.url), r]));
const blueprintById = new Map(blueprint.records.map((r) => [r.candidate_id, r]));
const allFiles = fs.readdirSync(servicesDir).filter((n) => n.endsWith('.md'));
const bySlug = new Map();
for (const name of allFiles) {
  const text = fs.readFileSync(path.join(servicesDir, name), 'utf8');
  const slug = scalar(text, 'slug');
  if (slug) {
    assert(!bySlug.has(slug), `Duplicate service slug: ${slug}`);
    bySlug.set(slug, { name, text });
  }
}

const w2a = foundation.series_candidates.filter((s) => s.release_wave === 'W2A');
const w2b = foundation.series_candidates.filter((s) => s.release_wave === 'W2B');
const w2c = foundation.series_candidates.filter((s) => s.release_wave === 'W2C');
assert(w2a.length === 18, `Expected 18 W2A rows, found ${w2a.length}`);
assert(w2b.length === 17, `Expected 17 W2B rows, found ${w2b.length}`);
assert(w2c.length === 12, `Expected 12 W2C rows, found ${w2c.length}`);
assert(allFiles.length === 122, `Expected 122 service files after release, found ${allFiles.length}`);

let releasedChars = 0;
const releaseTitles = new Set();
const releaseDescriptions = new Set();
for (const s of w2a) {
  const url = norm(s.proposed_url);
  const slug = url.split('/').filter(Boolean).at(-1);
  const src = bySlug.get(slug);
  assert(Boolean(src), `Missing W2A service source for ${url}`);
  if (!src) continue;
  const { text, name } = src;
  assert(scalar(text, 'tier') === 'series', `${name}: tier must be series`);
  assert(scalar(text, 'parentSlug') === s.parent_url.replace(/^\/บริการ\//, '').replace(/\/$/, ''), `${name}: parentSlug mismatch`);
  const title = scalar(text, 'title');
  const description = scalar(text, 'description');
  assert(title.length >= 25, `${name}: title too short`);
  assert(description.length >= 80, `${name}: description too short`);
  assert(!releaseTitles.has(title), `${name}: duplicate W2A title`);
  assert(!releaseDescriptions.has(description), `${name}: duplicate W2A description`);
  releaseTitles.add(title);
  releaseDescriptions.add(description);
  assert(text.includes('quickAnswer:'), `${name}: missing quickAnswer`);
  assert((text.match(/  - question:/g) ?? []).length >= 5, `${name}: fewer than 5 custom FAQs`);
  const body = text.split('---').slice(2).join('---');
  const chars = body.replace(/\s+/g, '').length;
  releasedChars += chars;
  assert(chars >= 1800, `${name}: unique body too thin (${chars} non-space chars)`);
  assert(body.includes(`/บริการ/${s.parent_url.replace(/^\/บริการ\//, '').replace(/\/$/, '')}/`) || body.includes(s.parent_url), `${name}: missing parent link in body`);

  const parentSlug = s.parent_url.replace(/^\/บริการ\//, '').replace(/\/$/, '');
  const parent = bySlug.get(parentSlug);
  assert(Boolean(parent), `Parent source missing for ${s.parent_url}`);
  assert(parent?.text.includes(url), `Parent page missing required W2A inlink: ${s.parent_url} -> ${url}`);

  assert(currentByUrl.has(url), `Ownership master missing released current route: ${url}`);
  assert(currentByUrl.get(url)?.page_type === 'series', `Ownership page_type is not series: ${url}`);
  const bp = blueprintById.get(s.candidate_id);
  assert(bp?.status === 'EXISTING_OWNER', `Blueprint W2A not EXISTING_OWNER: ${s.candidate_id}`);
  assert(s.foundation_status === 'RELEASED_PRODUCTION', `Foundation W2A not RELEASED_PRODUCTION: ${s.candidate_id}`);
}

for (const s of [...w2b, ...w2c]) {
  const url = norm(s.proposed_url);
  assert(!currentByUrl.has(url), `Unreleased series leaked into production ownership: ${url}`);
  assert(blueprintById.get(s.candidate_id)?.status === 'READY', `Unreleased series lost READY state: ${s.candidate_id}`);
}

const config = fs.readFileSync(path.join(root, 'src', 'content.config.ts'), 'utf8');
assert(config.includes("'series'"), 'Content schema does not allow tier=series.');
const routeFile = path.join(root, 'src', 'pages', 'บริการ', '[slug].astro');
const routeText = fs.readFileSync(routeFile, 'utf8');
assert(routeText.includes("tier === 'series'"), 'Service route breadcrumb does not recognize series tier.');

assert(currentRows.length === 229, `Expected 229 current canonical ownership rows, found ${currentRows.length}`);
const ready = blueprint.records.filter((r) => r.status === 'READY');
assert(ready.length === 172, `Expected 172 remaining READY rows, found ${ready.length}`);
assert(currentRows.length + ready.length === 401, `Projected canonical changed: ${currentRows.length}+${ready.length}`);
assert(blueprint.projected_canonical_after_ready === 401, `Declared projected canonical changed: ${blueprint.projected_canonical_after_ready}`);
assert(blueprint.batch3_w2a_production_release?.routes_created === 18, 'Batch 3 metadata does not declare 18 released routes.');

console.log(`W2A released series: ${w2a.length}`);
console.log(`Service source files: ${allFiles.length}`);
console.log(`Current canonical ownership: ${currentRows.length}`);
console.log(`Remaining READY: ${ready.length}`);
console.log(`Projected canonical: ${currentRows.length + ready.length}`);
console.log(`Released content non-space chars: ${releasedChars}`);
console.log(`W2B/W2C untouched: ${w2b.length}/${w2c.length}`);

if (errors.length) {
  console.error(errors.map((e) => `ERROR: ${e}`).join('\n'));
  process.exit(1);
}
console.log('W2A production release static QA passed.');
