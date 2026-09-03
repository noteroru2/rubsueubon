import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const obsPath = path.join(root, 'data', 'seo', 'w2a-observation-gate.json');
const authPath = path.join(root, 'data', 'seo', 'w2b-release-authorization.json');
const selectionPath = path.join(root, 'data', 'seo', 'w2b-release-candidate-selection.json');
const ownershipPath = path.join(root, 'data', 'seo', 'url-ownership-master.json');
const blueprintPath = path.join(root, 'data', 'seo', '400-page-blueprint.json');
const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const normalize = (value) => value && value !== '/' ? (value.endsWith('/') ? value : `${value}/`) : value;

for (const file of [obsPath, authPath, selectionPath, ownershipPath, blueprintPath]) {
  assert(fs.existsSync(file), `Missing required file: ${path.relative(root, file)}`);
}

if (!errors.length) {
  const obs = readJson(obsPath);
  const auth = readJson(authPath);
  const selection = readJson(selectionPath);
  const ownership = readJson(ownershipPath);
  const blueprint = readJson(blueprintPath);
  const w2a = obs.w2a_pages ?? [];
  const selected = selection.records.filter((r) => r.decision === 'RC_SELECTED_PENDING_W2A_OBSERVATION');
  const selectionHolds = selection.records.filter((r) => r.decision === 'HOLD_NEXT_WAVE');
  const authSelected = auth.records.filter((r) => r.selection_decision === 'RC_SELECTED_PENDING_W2A_OBSERVATION');
  const authorized = auth.records.filter((r) => r.authorization_status === 'AUTHORIZED_FOR_RELEASE');
  const authHolds = auth.records.filter((r) => r.authorization_status === 'HOLD_NEXT_WAVE');
  const current = ownership.records.filter((r) => r.current_http_behavior === 'GENERATED_CANONICAL_ROUTE');
  const currentUrls = new Set(current.map((r) => normalize(r.url)));

  assert(w2a.length === 18, `Expected 18 W2A pages, found ${w2a.length}`);
  assert(w2a.every((r) => r.source_release_status === 'RELEASED_SOURCE'), 'Every W2A row must remain RELEASED_SOURCE.');
  assert(w2a.every((r) => currentUrls.has(normalize(r.url))), 'Every W2A source URL must remain current canonical in ownership registry.');
  assert(obs.gsc_latest_finalized_date === '2026-08-31', `Unexpected latest GSC date: ${obs.gsc_latest_finalized_date}`);
  assert(obs.w2a_source_release_date === '2026-09-03', `Unexpected W2A source release date: ${obs.w2a_source_release_date}`);
  assert(Number(obs.post_release_finalized_days) === 0, `Expected 0 finalized post-release days, found ${obs.post_release_finalized_days}`);
  assert(obs.deployment_confirmed === false, 'Deployment must remain unconfirmed for this gate run.');
  assert(obs.authorization_policy?.current_gate === 'WAIT_FOR_DEPLOYMENT_AND_NEW_GSC_DATA', 'Observation gate must wait for deployment/new GSC data.');
  assert(w2a.every((r) => r.observation_status === 'NOT_OBSERVABLE_YET'), 'W2A pages must remain NOT_OBSERVABLE_YET with zero post-release data.');

  assert(selected.length === 12, `Expected 12 selected W2B RCs, found ${selected.length}`);
  assert(selectionHolds.length === 5, `Expected 5 W2B holds, found ${selectionHolds.length}`);
  assert(auth.records.length === 17, `Expected 17 authorization records, found ${auth.records.length}`);
  assert(authSelected.length === 12, `Expected 12 selected auth rows, found ${authSelected.length}`);
  assert(authHolds.length === 5, `Expected 5 hold auth rows, found ${authHolds.length}`);
  assert(authorized.length === 0, `No W2B candidate may be authorized yet; found ${authorized.length}`);
  assert(auth.overall_authorization === 'NOT_AUTHORIZED', `Overall authorization must be NOT_AUTHORIZED: ${auth.overall_authorization}`);
  assert(auth.verdict === 'WAIT_FOR_DEPLOYMENT_AND_NEW_GSC_DATA', `Unexpected auth verdict: ${auth.verdict}`);
  assert(authSelected.every((r) => r.authorization_status === 'NOT_AUTHORIZED_WAIT_FOR_W2A_OBSERVATION'), 'All 12 selected RCs must remain not authorized.');
  assert(authSelected.every((r) => r.authorized_for_source_creation === 'NO' && r.authorized_for_deploy === 'NO'), 'Selected RCs must not be source/deploy authorized.');

  // W2B candidates must not already exist as current canonical routes.
  for (const r of authSelected) {
    assert(!currentUrls.has(normalize(r.proposed_url)), `W2B route unexpectedly exists as current canonical: ${r.proposed_url}`);
  }

  assert(current.length === 229, `Current canonical count changed: ${current.length}`);
  assert(blueprint.projected_canonical_after_ready === 401, `Projected canonical changed: ${blueprint.projected_canonical_after_ready}`);
  const ready = blueprint.records.filter((r) => r.status === 'READY').length;
  assert(ready === 172, `READY count changed: ${ready}`);

  console.log(`W2A source pages: ${w2a.length}`);
  console.log(`W2A deployment confirmed: ${obs.deployment_confirmed ? 'YES' : 'NO'}`);
  console.log(`GSC latest finalized date: ${obs.gsc_latest_finalized_date}`);
  console.log(`Finalized GSC days after W2A source release: ${obs.post_release_finalized_days}`);
  console.log(`W2B selected RCs: ${selected.length}`);
  console.log(`W2B authorized now: ${authorized.length}`);
  console.log(`W2B held: ${authHolds.length}`);
  console.log(`Current canonical routes: ${current.length}`);
  console.log(`Remaining READY: ${ready}`);
  console.log(`Projected canonical: ${blueprint.projected_canonical_after_ready}`);
}

if (errors.length) {
  console.error(errors.map((e) => `ERROR: ${e}`).join('\n'));
  process.exit(1);
}
console.log('W2A observation & W2B authorization QA passed: WAIT gate enforced.');
