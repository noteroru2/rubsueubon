import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const ownershipPath = path.join(root, 'data', 'seo', 'url-ownership-master.json');
const blueprintPath = path.join(root, 'data', 'seo', '400-page-blueprint.json');

const errors = [];
const warnings = [];
const assert = (condition, message) => {
  if (!condition) errors.push(message);
};

for (const file of [ownershipPath, blueprintPath]) {
  assert(fs.existsSync(file), `Missing required architecture file: ${path.relative(root, file)}`);
}

if (errors.length === 0) {
  const ownershipDoc = JSON.parse(fs.readFileSync(ownershipPath, 'utf8'));
  const blueprintDoc = JSON.parse(fs.readFileSync(blueprintPath, 'utf8'));
  const ownership = ownershipDoc.records ?? [];
  const blueprint = blueprintDoc.records ?? [];

  const current = ownership.filter((row) => row.current_http_behavior === 'GENERATED_CANONICAL_ROUTE');
  const currentUrls = new Set(current.map((row) => row.url));
  const redirectUrls = new Set(
    ownership
      .filter((row) => String(row.current_http_behavior).includes('REDIRECT'))
      .map((row) => row.url),
  );

  assert(current.length === currentUrls.size, 'Duplicate current canonical URL in ownership master.');
  assert(current.length === ownershipDoc.source_derived_current_canonical_routes,
    `Current route count mismatch: records=${current.length}, declared=${ownershipDoc.source_derived_current_canonical_routes}`);

  const protectedUrls = [
    '/',
    '/บริการ/รับซื้อมือถือ-อุบล/',
    '/บริการ/รับซื้อ-เครื่องเกม-อุบล/',
    '/บริการ/รับซื้อ-อะไหล่คอม-อุบล/',
    '/บริการ/รับซื้อ-ipad-อุบล/',
    '/บริการ/รับซื้อ-iphone-อุบล/',
    '/บริการ/รับซื้อกล้อง-อุบล/',
    '/บริการ/รับซื้อคอมพิวเตอร์-อุบล/',
    '/บริการ/รับซื้อ-macbook-อุบล/',
    '/พื้นที่/warin-chamrap/',
    '/พื้นที่/det-udom/',
    '/พื้นที่/khueang-nai/',
    '/พื้นที่/khemarat/',
    '/พื้นที่/nam-yuen/',
    '/พื้นที่/khong-chiam/',
    '/พื้นที่/mueang-ubon-ratchathani/',
    '/พื้นที่/sirindhorn/',
    '/พื้นที่/trakan-phuet-phon/',
  ];
  const ownershipByUrl = new Map(ownership.map((row) => [row.url, row]));
  for (const url of protectedUrls) {
    const row = ownershipByUrl.get(url);
    assert(Boolean(row), `Missing P0 protected URL: ${url}`);
    assert(row?.ownership_status === 'PROTECT_WINNER', `P0 URL not protected: ${url}`);
  }

  const candidateIds = blueprint.map((row) => row.candidate_id);
  const candidateUrls = blueprint.map((row) => row.proposed_url);
  assert(new Set(candidateIds).size === candidateIds.length, 'Duplicate candidate_id in blueprint.');
  assert(new Set(candidateUrls).size === candidateUrls.length, 'Duplicate proposed_url in blueprint.');

  const ready = blueprint.filter((row) => row.status === 'READY');
  const existing = blueprint.filter((row) => row.status === 'EXISTING_OWNER' || row.status === 'EXISTING_SUPPORT');
  const hold = blueprint.filter((row) => row.status === 'HOLD');
  const reject = blueprint.filter((row) => row.status === 'REJECT');

  for (const row of ready) {
    assert(!currentUrls.has(row.proposed_url), `READY candidate already exists: ${row.proposed_url}`);
    assert(!redirectUrls.has(row.proposed_url), `READY candidate is a redirect source: ${row.proposed_url}`);
    assert(Number(row.positive_score) >= 15, `READY score below threshold: ${row.proposed_url}`);
    assert(Number(row.cannibalization_risk) <= 2, `READY cannibalization risk too high: ${row.proposed_url}`);
    assert(Number(row.doorway_risk) <= 2, `READY doorway risk too high: ${row.proposed_url}`);
    assert(Boolean(row.parent_url), `READY candidate has no parent: ${row.proposed_url}`);
    assert(currentUrls.has(row.parent_url) || candidateUrls.includes(row.parent_url),
      `READY parent missing from architecture: ${row.proposed_url} -> ${row.parent_url}`);

    if (row.page_type === 'local_service') {
      assert(Boolean(row.district), `READY local page missing district: ${row.proposed_url}`);
      assert(String(row.uniqueness_source ?? '').length >= 40,
        `READY local page lacks uniqueness plan: ${row.proposed_url}`);
      assert(Number(row.thin_content_risk) <= 2, `READY local page thin-content risk too high: ${row.proposed_url}`);
    }
  }

  const readyIntents = new Map();
  for (const row of ready) {
    const key = String(row.primary_intent ?? '').trim().toLowerCase();
    if (!key) continue;
    if (readyIntents.has(key)) {
      errors.push(`Duplicate READY primary intent: ${key} => ${readyIntents.get(key)} | ${row.proposed_url}`);
    } else {
      readyIntents.set(key, row.proposed_url);
    }
  }

  const projected = current.length + ready.length;
  assert(projected >= 350, `Projected canonical count below 350: ${projected}`);
  assert(projected >= 380 && projected <= 420,
    `Projected canonical count outside architecture target 380–420: ${projected}`);
  assert(projected === blueprintDoc.projected_canonical_after_ready,
    `Projected count mismatch: computed=${projected}, declared=${blueprintDoc.projected_canonical_after_ready}`);

  const unresolvedLegacy = ownership.filter((row) => row.ownership_status === 'HOLD_REVIEW');
  if (unresolvedLegacy.length > 0) {
    warnings.push(`Unresolved legacy URLs: ${unresolvedLegacy.length}`);
  }

  console.log(`Current canonical routes: ${current.length}`);
  console.log(`Existing blueprint rows: ${existing.length}`);
  console.log(`READY candidates: ${ready.length}`);
  console.log(`HOLD candidates: ${hold.length}`);
  console.log(`REJECT candidates: ${reject.length}`);
  console.log(`Projected canonical after READY: ${projected}`);
  console.log(`Redirect/legacy ownership rows: ${ownership.filter((r) => r.ownership_status === 'REDIRECT_LEGACY').length}`);
  console.log(`Unresolved legacy rows: ${unresolvedLegacy.length}`);
}

if (warnings.length) {
  console.warn(warnings.map((warning) => `WARNING: ${warning}`).join('\n'));
}

if (errors.length) {
  console.error(errors.map((error) => `ERROR: ${error}`).join('\n'));
  process.exit(1);
}

console.log('Architecture ownership QA passed.');
