import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const selectionPath = path.join(root, 'data', 'seo', 'w2b-release-candidate-selection.json');
const foundationPath = path.join(root, 'data', 'seo', 'brand-series-foundation.json');
const ownershipPath = path.join(root, 'data', 'seo', 'url-ownership-master.json');
const blueprintPath = path.join(root, 'data', 'seo', '400-page-blueprint.json');
const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const normalize = (value) => value && value !== '/' ? (value.endsWith('/') ? value : `${value}/`) : value;

for (const file of [selectionPath, foundationPath, ownershipPath, blueprintPath]) {
  assert(fs.existsSync(file), `Missing required file: ${path.relative(root, file)}`);
}

if (errors.length === 0) {
  const selection = readJson(selectionPath);
  const foundation = readJson(foundationPath);
  const ownership = readJson(ownershipPath);
  const blueprint = readJson(blueprintPath);
  const records = selection.records ?? [];
  const w2b = foundation.series_candidates.filter((r) => r.release_wave === 'W2B');
  const selected = records.filter((r) => r.decision === 'RC_SELECTED_PENDING_W2A_OBSERVATION');
  const holds = records.filter((r) => r.decision === 'HOLD_NEXT_WAVE');
  const current = ownership.records.filter((r) => r.current_http_behavior === 'GENERATED_CANONICAL_ROUTE');
  const currentByUrl = new Map(current.map((r) => [normalize(r.url), r]));
  const redirects = new Set(ownership.records.filter((r) => String(r.current_http_behavior).includes('REDIRECT')).map((r) => normalize(r.url)));
  const bpById = new Map(blueprint.records.map((r) => [r.candidate_id, r]));
  const foundationById = new Map(w2b.map((r) => [r.candidate_id, r]));

  assert(selection.selection_only === true, 'Batch 4 must remain selection-only.');
  assert(selection.production_routes_created === 0, 'Batch 4 must create zero production routes.');
  assert(records.length === 17, `Expected 17 W2B reviewed candidates, found ${records.length}`);
  assert(w2b.length === 17, `Foundation W2B count changed: ${w2b.length}`);
  assert(selected.length >= 10 && selected.length <= 12, `Selected RC count must be 10-12, found ${selected.length}`);
  assert(selected.length === 12, `Expected curated RC set of 12, found ${selected.length}`);
  assert(holds.length === 5, `Expected HOLD count 5, found ${holds.length}`);
  assert(new Set(records.map((r) => r.candidate_id)).size === records.length, 'Duplicate candidate_id in selection.');
  assert(new Set(records.map((r) => normalize(r.proposed_url))).size === records.length, 'Duplicate proposed URL in selection.');

  const ranks = selected.map((r) => Number(r.release_rank)).sort((a,b)=>a-b);
  assert(ranks.every((v,i) => v === i+1), `Release ranks must be continuous 1-${selected.length}: ${ranks.join(',')}`);

  for (const r of records) {
    const f = foundationById.get(r.candidate_id);
    const bp = bpById.get(r.candidate_id);
    assert(Boolean(f), `Selection candidate missing from W2B foundation: ${r.candidate_id}`);
    assert(Boolean(bp), `Selection candidate missing from blueprint: ${r.candidate_id}`);
    assert(bp?.status === 'READY', `W2B selection candidate must remain READY in blueprint until release: ${r.candidate_id}`);
    assert(normalize(f?.proposed_url) === normalize(r.proposed_url), `URL mismatch foundation/selection: ${r.candidate_id}`);
    assert(normalize(f?.parent_url) === normalize(r.parent_url), `Parent mismatch foundation/selection: ${r.candidate_id}`);
    assert(currentByUrl.has(normalize(r.parent_url)), `Parent is not current canonical: ${r.candidate_id} -> ${r.parent_url}`);
    assert(!currentByUrl.has(normalize(r.proposed_url)), `W2B route already exists in production during selection-only batch: ${r.proposed_url}`);
    assert(!redirects.has(normalize(r.proposed_url)), `W2B route is a redirect source: ${r.proposed_url}`);
    assert(String(r.content_brief ?? '').trim().length >= 80, `Content brief too thin: ${r.candidate_id}`);
    assert(String(r.decision_reason ?? '').trim().length >= 80, `Decision reason too thin: ${r.candidate_id}`);
    assert(Number(r.cannibalization_risk) <= 2, `Cannibalization risk >2: ${r.candidate_id}`);
    assert(Number(r.thin_content_risk) <= 2, `Thin-content risk >2: ${r.candidate_id}`);

    if (r.decision === 'RC_SELECTED_PENDING_W2A_OBSERVATION') {
      assert(f?.foundation_status === 'RC_SELECTED', `Selected foundation status mismatch: ${r.candidate_id}`);
      assert(f?.release_gate === 'PENDING_W2A_OBSERVATION', `Selected release gate mismatch: ${r.candidate_id}`);
      assert(Number(r.quality_score) >= 25, `Selected candidate quality score below 25: ${r.candidate_id}`);
      assert(String(r.release_prerequisite).includes('W2A'), `Selected candidate missing W2A prerequisite: ${r.candidate_id}`);
    } else if (r.decision === 'HOLD_NEXT_WAVE') {
      assert(f?.foundation_status === 'LOCKED_LATER_RELEASE', `Hold foundation status mismatch: ${r.candidate_id}`);
      assert(f?.release_gate === 'HOLD_NEXT_WAVE', `Hold release gate mismatch: ${r.candidate_id}`);
      assert(Number(r.quality_score) < 25, `Hold candidate quality score should be below RC threshold 25: ${r.candidate_id}`);
    } else {
      assert(false, `Invalid decision: ${r.candidate_id} -> ${r.decision}`);
    }
  }

  const selectedByCluster = selected.reduce((a,r)=>{a[r.core_cluster]=(a[r.core_cluster]??0)+1;return a;},{});
  assert((selectedByCluster.camera ?? 0) === 3, `Expected 3 camera RCs, found ${selectedByCluster.camera ?? 0}`);
  assert((selectedByCluster.notebook ?? 0) === 8, `Expected 8 notebook RCs, found ${selectedByCluster.notebook ?? 0}`);
  assert((selectedByCluster.pc_hardware ?? 0) === 1, `Expected 1 PC hardware RC, found ${selectedByCluster.pc_hardware ?? 0}`);

  assert(blueprint.projected_canonical_after_ready === 401, `Projected canonical changed: ${blueprint.projected_canonical_after_ready}`);
  assert(blueprint.batch4_w2b_candidate_quality_gate?.production_routes_created === 0, 'Blueprint Batch 4 metadata must declare zero production routes.');
  assert(blueprint.batch4_w2b_candidate_quality_gate?.release_candidates_selected === 12, 'Blueprint Batch 4 RC count mismatch.');

  console.log(`W2B reviewed candidates: ${records.length}`);
  console.log(`RC selected pending W2A observation: ${selected.length}`);
  console.log(`HOLD next wave: ${holds.length}`);
  console.log(`RC by cluster: notebook=${selectedByCluster.notebook ?? 0}, camera=${selectedByCluster.camera ?? 0}, pc_hardware=${selectedByCluster.pc_hardware ?? 0}`);
  console.log(`Current canonical routes unchanged: ${current.length}`);
  console.log(`Projected canonical after all READY: ${blueprint.projected_canonical_after_ready}`);
}

if (errors.length) {
  console.error(errors.map((e) => `ERROR: ${e}`).join('\n'));
  process.exit(1);
}
console.log('W2B release-candidate selection quality QA passed.');
