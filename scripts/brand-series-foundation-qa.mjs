import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const foundationPath = path.join(root, 'data', 'seo', 'brand-series-foundation.json');
const ownershipPath = path.join(root, 'data', 'seo', 'url-ownership-master.json');
const blueprintPath = path.join(root, 'data', 'seo', '400-page-blueprint.json');
const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const normalize = (value) => value && value !== '/' ? (value.endsWith('/') ? value : `${value}/`) : value;

for (const file of [foundationPath, ownershipPath, blueprintPath]) {
  assert(fs.existsSync(file), `Missing required file: ${path.relative(root, file)}`);
}

if (errors.length === 0) {
  const foundation = readJson(foundationPath);
  const ownership = readJson(ownershipPath);
  const blueprint = readJson(blueprintPath);
  const brands = foundation.brand_parents ?? [];
  const series = foundation.series_candidates ?? [];
  const current = ownership.records.filter((r) => r.current_http_behavior === 'GENERATED_CANONICAL_ROUTE');
  const currentByUrl = new Map(current.map((r) => [normalize(r.url), r]));
  const redirects = new Set(ownership.records.filter((r) => String(r.current_http_behavior).includes('REDIRECT')).map((r) => normalize(r.url)));
  const blueprintById = new Map(blueprint.records.map((r) => [r.candidate_id, r]));

  assert(brands.length === 12, `Expected 12 locked brand parents, found ${brands.length}`);
  assert(series.length === 47, `Expected 47 series candidates, found ${series.length}`);
  assert(new Set(brands.map((b) => b.brand)).size === brands.length, 'Duplicate brand in foundation registry.');
  assert(new Set(series.map((s) => s.candidate_id)).size === series.length, 'Duplicate series candidate_id.');
  assert(new Set(series.map((s) => normalize(s.proposed_url))).size === series.length, 'Duplicate series proposed URL.');

  const expectedBrandClusters = new Map([
    ['ASUS','notebook'],['Acer','notebook'],['Lenovo','notebook'],['HP','notebook'],['Dell','notebook'],['MSI','notebook'],
    ['Sony','camera'],['Canon','camera'],['Nikon','camera'],['Fujifilm','camera'],['NVIDIA','pc_hardware'],['AMD','pc_hardware'],
  ]);
  for (const b of brands) {
    const url = normalize(b.brand_owner_url);
    assert(currentByUrl.has(url), `Brand parent is not a current canonical route: ${b.brand} -> ${url}`);
    assert(!redirects.has(url), `Brand parent is also a redirect source: ${url}`);
    assert(b.lock_state === 'LOCKED_PARENT', `Brand parent not locked: ${b.brand}`);
    assert(expectedBrandClusters.get(b.brand) === b.core_cluster, `Wrong core cluster for ${b.brand}: ${b.core_cluster}`);
  }

  const waveCounts = {W2A:0,W2B:0,W2C:0};
  const clusterCounts = {notebook:0,camera:0,pc_hardware:0};
  const w2aClusters = {notebook:0,camera:0,pc_hardware:0};
  for (const s of series) {
    assert(['W2A','W2B','W2C'].includes(s.release_wave), `Invalid release wave for ${s.candidate_id}: ${s.release_wave}`);
    waveCounts[s.release_wave] += 1;
    clusterCounts[s.core_cluster] = (clusterCounts[s.core_cluster] ?? 0) + 1;
    if (s.release_wave === 'W2A') w2aClusters[s.core_cluster] = (w2aClusters[s.core_cluster] ?? 0) + 1;
    const parent = normalize(s.parent_url);
    const proposed = normalize(s.proposed_url);
    assert(currentByUrl.has(parent), `Series parent is not current canonical: ${s.candidate_id} -> ${parent}`);
    assert(!redirects.has(proposed), `Series candidate/released URL is a redirect source: ${s.proposed_url}`);
    assert(Number(s.positive_score) >= 15, `Series score below threshold: ${s.proposed_url}`);
    assert(Number(s.cannibalization_risk) <= 2, `Series cannibalization risk too high: ${s.proposed_url}`);
    assert(Number(s.doorway_risk) <= 2, `Series doorway risk too high: ${s.proposed_url}`);
    assert(Number(s.thin_content_risk) <= 2, `Series thin-content risk too high: ${s.proposed_url}`);
    const bp = blueprintById.get(s.candidate_id);
    assert(Boolean(bp), `Series candidate missing from blueprint: ${s.candidate_id}`);
    assert(bp?.release_wave === s.release_wave, `Release-wave mismatch: ${s.candidate_id}`);
    assert(bp?.locked_core_cluster === s.core_cluster, `Core-cluster mismatch: ${s.candidate_id}`);
    if (s.release_wave === 'W2A') {
      assert(currentByUrl.has(proposed), `Released W2A series is not current canonical: ${s.proposed_url}`);
      assert(s.foundation_status === 'RELEASED_PRODUCTION', `W2A foundation status not released: ${s.candidate_id}`);
      assert(bp?.status === 'EXISTING_OWNER', `Released W2A is not EXISTING_OWNER in blueprint: ${s.candidate_id}`);
    } else {
      assert(!currentByUrl.has(proposed), `Unreleased ${s.release_wave} series already exists as current route: ${s.proposed_url}`);
      assert(bp?.status === 'READY', `Unreleased series is not READY in blueprint: ${s.candidate_id}`);
    }
  }

  assert(waveCounts.W2A === 18, `Expected W2A=18, found ${waveCounts.W2A}`);
  assert(waveCounts.W2B === 17, `Expected W2B=17, found ${waveCounts.W2B}`);
  assert(waveCounts.W2C === 12, `Expected W2C=12, found ${waveCounts.W2C}`);
  assert(clusterCounts.notebook === 33, `Expected 33 notebook series, found ${clusterCounts.notebook}`);
  assert(clusterCounts.camera === 8, `Expected 8 camera series, found ${clusterCounts.camera}`);
  assert(clusterCounts.pc_hardware === 6, `Expected 6 GPU series, found ${clusterCounts.pc_hardware}`);
  assert(w2aClusters.notebook === 10, `Expected W2A notebook=10, found ${w2aClusters.notebook}`);
  assert(w2aClusters.camera === 4, `Expected W2A camera=4, found ${w2aClusters.camera}`);
  assert(w2aClusters.pc_hardware === 4, `Expected W2A GPU=4, found ${w2aClusters.pc_hardware}`);

  const nestedModelViolation = blueprint.records.filter((r) =>
    r.status === 'READY' && r.release_wave === 'W2A' && r.page_type === 'model' &&
    series.some((s) => normalize(s.proposed_url) === normalize(r.parent_url))
  );
  assert(nestedModelViolation.length === 0, `Model children released in W2A before series parents: ${nestedModelViolation.map((r) => r.proposed_url).join(', ')}`);

  assert(blueprint.projected_canonical_after_ready === 401, `Projected canonical changed: ${blueprint.projected_canonical_after_ready}`);
  assert(blueprint.batch2_brand_series_foundation?.production_routes_created === 0, 'Batch 2 historical foundation must remain architecture-only.');
  assert(blueprint.batch3_w2a_production_release?.routes_created === 18, 'Batch 3 must declare 18 W2A production routes.');

  console.log(`Locked brand parents: ${brands.length}`);
  console.log(`Locked series candidates: ${series.length}`);
  console.log(`W2A/W2B/W2C: ${waveCounts.W2A}/${waveCounts.W2B}/${waveCounts.W2C}`);
  console.log(`Series by cluster: notebook=${clusterCounts.notebook}, camera=${clusterCounts.camera}, pc_hardware=${clusterCounts.pc_hardware}`);
  console.log(`W2A by cluster: notebook=${w2aClusters.notebook}, camera=${w2aClusters.camera}, pc_hardware=${w2aClusters.pc_hardware}`);
  console.log(`Projected canonical after all READY: ${blueprint.projected_canonical_after_ready}`);
}

if (errors.length) {
  console.error(errors.map((e) => `ERROR: ${e}`).join('\n'));
  process.exit(1);
}
console.log('Brand & series expansion foundation QA passed.');
