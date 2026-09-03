import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const lockPath = path.join(root, 'data', 'seo', 'core-money-cluster-lock.json');
const ownershipPath = path.join(root, 'data', 'seo', 'url-ownership-master.json');
const blueprintPath = path.join(root, 'data', 'seo', '400-page-blueprint.json');
const servicesDir = path.join(root, 'src', 'content', 'services');

const errors = [];
const warnings = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const normalize = (value) => value && value !== '/' ? (value.endsWith('/') ? value : `${value}/`) : value;
const scalar = (text, key) => {
  const match = text.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
  if (!match) return '';
  return match[1].trim().replace(/^['"]|['"]$/g, '');
};

for (const file of [lockPath, ownershipPath, blueprintPath]) {
  assert(fs.existsSync(file), `Missing required file: ${path.relative(root, file)}`);
}

if (errors.length === 0) {
  const lock = readJson(lockPath);
  const ownership = readJson(ownershipPath);
  const blueprint = readJson(blueprintPath);
  const lockRows = lock.records ?? [];
  const clusterDefs = lock.clusters ?? [];
  const ownershipRows = ownership.records ?? [];
  const blueprintRows = blueprint.records ?? [];

  assert(lock.cluster_count === 16, `Expected 16 locked core clusters, found ${lock.cluster_count}`);
  assert(lockRows.length === 104, `Expected 104 current service lock rows, found ${lockRows.length}`);
  assert(clusterDefs.length === 16, `Expected 16 cluster definitions, found ${clusterDefs.length}`);

  const allServiceFiles = fs.readdirSync(servicesDir).filter((name) => name.endsWith('.md'));
  const baseServiceFiles = allServiceFiles.filter((name) => scalar(fs.readFileSync(path.join(servicesDir, name), 'utf8'), 'tier') !== 'series');
  assert(baseServiceFiles.length === 104, `Expected 104 pre-series core service files, found ${baseServiceFiles.length}`);
  assert(allServiceFiles.length === 122, `Expected 122 service source files after W2A release, found ${allServiceFiles.length}`);

  const serviceById = new Map();
  const idBySlug = new Map();
  for (const name of allServiceFiles) {
    const id = name.slice(0, -3);
    const text = fs.readFileSync(path.join(servicesDir, name), 'utf8');
    const slug = scalar(text, 'slug');
    const parentSlug = scalar(text, 'parentSlug');
    assert(Boolean(slug), `Missing slug: ${name}`);
    if (slug) {
      assert(!idBySlug.has(slug), `Duplicate service slug: ${slug}`);
      idBySlug.set(slug, id);
    }
    serviceById.set(id, { id, name, text, slug, parentSlug });
  }

  const resolveParentId = (parentSlug) => {
    if (!parentSlug) return null;
    if (serviceById.has(parentSlug)) return parentSlug;
    return idBySlug.get(parentSlug) ?? null;
  };

  // Parent graph must resolve and remain acyclic.
  for (const service of serviceById.values()) {
    if (service.parentSlug) {
      assert(Boolean(resolveParentId(service.parentSlug)), `${service.id}: unresolved parentSlug ${service.parentSlug}`);
    }
    const seen = new Set();
    let current = service.id;
    while (current) {
      assert(!seen.has(current), `Parent cycle detected from ${service.id}: ${[...seen, current].join(' -> ')}`);
      if (seen.has(current)) break;
      seen.add(current);
      const parentSlug = serviceById.get(current)?.parentSlug ?? '';
      current = resolveParentId(parentSlug);
    }
  }

  const lockByUrl = new Map(lockRows.map((row) => [normalize(row.url), row]));
  const lockById = new Map(lockRows.map((row) => [row.content_id, row]));
  assert(lockByUrl.size === lockRows.length, 'Duplicate URL in core-money lock registry.');
  assert(lockById.size === lockRows.length, 'Duplicate content_id in core-money lock registry.');

  const currentOwnership = new Map(
    ownershipRows
      .filter((row) => row.current_http_behavior === 'GENERATED_CANONICAL_ROUTE')
      .map((row) => [normalize(row.url), row]),
  );
  const redirectOwnership = new Map(
    ownershipRows
      .filter((row) => String(row.current_http_behavior).includes('REDIRECT'))
      .map((row) => [normalize(row.url), row]),
  );

  // Every locked current service must still be a canonical current route and not a redirect source.
  for (const row of lockRows) {
    const url = normalize(row.url);
    assert(currentOwnership.has(url), `Locked service missing from current canonical ownership: ${url}`);
    assert(!redirectOwnership.has(url), `Locked service is also a redirect source: ${url}`);
  }

  const expectedRoots = {
    mobile: '/บริการ/รับซื้อมือถือ-อุบล/',
    notebook: '/บริการ/รับซื้อโน้ตบุ๊ก-อุบล/',
    camera: '/บริการ/รับซื้อกล้อง-อุบล/',
    computer: '/บริการ/รับซื้อคอมพิวเตอร์-อุบล/',
    tablet: '/บริการ/รับซื้อแท็บเล็ต-อุบล/',
    pc_hardware: '/บริการ/รับซื้อ-อะไหล่คอม-อุบล/',
    gaming: '/บริการ/รับซื้อ-เครื่องเกม-อุบล/',
    apple_ecosystem: '/บริการ/รับซื้อ-apple-อุบล/',
    b2b_lot: '/บริการ/รับซื้อคอมยกล็อต-อุบล/',
    b2b_corporate: '/บริการ/รับซื้อคอมบริษัท-อุบล/',
  };
  const defById = new Map(clusterDefs.map((row) => [row.cluster_id, row]));
  for (const [cluster, url] of Object.entries(expectedRoots)) {
    assert(normalize(defById.get(cluster)?.root_url) === url, `Wrong root for ${cluster}: ${defById.get(cluster)?.root_url ?? 'missing'}`);
    assert(currentOwnership.has(url), `Core root is not a current canonical route: ${url}`);
  }

  // P0 money winners must remain protected and unchanged.
  const protectedMoney = [
    '/บริการ/รับซื้อมือถือ-อุบล/',
    '/บริการ/รับซื้อ-เครื่องเกม-อุบล/',
    '/บริการ/รับซื้อ-อะไหล่คอม-อุบล/',
    '/บริการ/รับซื้อ-ipad-อุบล/',
    '/บริการ/รับซื้อ-iphone-อุบล/',
    '/บริการ/รับซื้อกล้อง-อุบล/',
    '/บริการ/รับซื้อคอมพิวเตอร์-อุบล/',
    '/บริการ/รับซื้อ-macbook-อุบล/',
  ];
  for (const url of protectedMoney) {
    assert(currentOwnership.get(url)?.ownership_status === 'PROTECT_WINNER', `Protected money owner lost P0 status: ${url}`);
  }

  // Faceted Apple architecture: broad Apple remains a cross-hub, device owners keep their product taxonomy.
  assert(defById.get('apple_ecosystem')?.role === 'CROSS_CATEGORY_HUB', 'Apple ecosystem page must remain a CROSS_CATEGORY_HUB.');
  assert(lockByUrl.get('/บริการ/รับซื้อ-iphone-อุบล/')?.core_cluster === 'mobile', 'iPhone must stay in the mobile product cluster.');
  assert(lockByUrl.get('/บริการ/รับซื้อ-ipad-อุบล/')?.core_cluster === 'tablet', 'iPad must stay in the tablet product cluster.');
  assert(lockByUrl.get('/บริการ/รับซื้อ-macbook-อุบล/')?.core_cluster === 'notebook', 'MacBook must stay in the notebook product cluster.');
  assert(lockByUrl.get('/บริการ/รับซื้อ-apple-watch-อุบล/')?.core_cluster === 'apple_watch', 'Apple Watch must retain its own subcluster.');

  // Monitor hierarchy correction: PC monitor is no longer a child of TV/electronics.
  const monitor = serviceById.get('monitor-ubon');
  assert(monitor?.parentSlug === 'pc-ubon', `Monitor parent must be pc-ubon, found ${monitor?.parentSlug ?? 'missing'}`);
  assert(lockById.get('monitor-ubon')?.parent_url === '/บริการ/รับซื้อคอมพิวเตอร์-อุบล/', 'Monitor lock parent is not Computer.');
  assert(lockById.get('monitor-ubon')?.core_cluster === 'computer', 'Monitor did not move into the Computer cluster.');
  assert(!defById.get('tv_electronics')?.current_descendants?.includes('/บริการ/รับซื้อจอคอม-อุบล/'), 'TV cluster still owns the monitor page.');

  // B2B ownership must remain separated by intent.
  assert(defById.get('b2b_lot')?.root_url !== defById.get('b2b_corporate')?.root_url, 'B2B lot and corporate roots collapsed into one URL.');
  assert(lockByUrl.get('/บริการ/รับซื้อคอมสำนักงาน-อุบล/')?.core_cluster === 'b2b_corporate', 'Office-computer page is outside corporate B2B cluster.');
  assert(lockByUrl.get('/บริการ/รับซื้อโน้ตบุ๊กยกล็อต-อุบล/')?.core_cluster === 'b2b_lot', 'Notebook-lot page is outside lot B2B cluster.');

  // PC hardware children must not be retargeted to generic computer ownership.
  for (const url of ['/บริการ/รับซื้อการ์ดจอ-อุบล/', '/บริการ/รับซื้อ-cpu-อุบล/', '/บริการ/รับซื้อ-ram-อุบล/', '/บริการ/รับซื้อ-ssd-อุบล/']) {
    assert(lockByUrl.get(url)?.core_cluster === 'pc_hardware', `PC hardware owner escaped hardware cluster: ${url}`);
  }

  // Close the Batch 0 unresolved notebook legacy gap in all three redirect systems.
  const legacy = '/บริการ/รับซื้อโน้ตบุ๊กเสีย-อุบล/';
  const target = '/บริการ/notebook-broken-ubon/';
  const legacyOwnership = ownershipRows.find((row) => normalize(row.url) === legacy);
  assert(legacyOwnership?.ownership_status === 'REDIRECT_LEGACY', 'Notebook legacy URL is not marked REDIRECT_LEGACY.');
  assert(normalize(legacyOwnership?.redirect_target) === target, `Notebook legacy ownership points to ${legacyOwnership?.redirect_target ?? 'missing'}`);
  assert(ownershipRows.filter((row) => row.ownership_status === 'HOLD_REVIEW').length === 0, 'HOLD_REVIEW legacy rows remain after Batch 1.');

  const vercel = readJson(path.join(root, 'vercel.json'));
  const vercelRule = vercel.redirects.find((rule) => decodeURIComponent(rule.source).replace('/:path*', '/') === legacy);
  assert(vercelRule?.permanent === true, 'Missing permanent Vercel redirect for notebook legacy URL.');
  assert(normalize(vercelRule?.destination) === target, `Wrong Vercel notebook redirect target: ${vercelRule?.destination ?? 'missing'}`);
  const astro = fs.readFileSync(path.join(root, 'astro.config.mjs'), 'utf8');
  assert(astro.includes(`'${legacy}': '${target}'`), 'Missing Astro redirect for notebook legacy URL.');
  const redirectsText = fs.readFileSync(path.join(root, 'public', '_redirects'), 'utf8');
  assert(redirectsText.includes(`${legacy} ${target} 301`), 'Missing public/_redirects rule for notebook legacy URL.');

  // Legacy generic phone synonym must never become a current owner again.
  assert(!currentOwnership.has('/บริการ/รับซื้อโทรศัพท์-อุบล/'), 'Legacy generic phone synonym became a current canonical route.');
  assert(redirectOwnership.get('/บริการ/รับซื้อโทรศัพท์-อุบล/')?.redirect_target === '/บริการ/รับซื้อมือถือ-อุบล/', 'Phone synonym redirect no longer points at smartphone owner.');

  // Existing model route policy must stay locked: no new nested iPhone/iPad models.
  const modelOwnership = fs.readFileSync(path.join(root, 'src', 'config', 'model-url-ownership.ts'), 'utf8');
  assert(modelOwnership.includes("'iphone-ubon': []"), 'Nested iPhone model routes were reopened.');
  assert(modelOwnership.includes("'ipad-ubon': []"), 'Nested iPad model routes were reopened.');
  assert(modelOwnership.includes("'macbook-ubon': ['macbook-air-m1', 'macbook-pro-m1', 'macbook-intel']"), 'MacBook nested keep-list changed unexpectedly.');

  // Blueprint stays at 401 projected pages and every READY commercial candidate traces to a lock.
  const ready = blueprintRows.filter((row) => row.status === 'READY');
  assert(ready.length === 172, `READY count changed unexpectedly after W2A release: ${ready.length}`);
  assert(blueprint.projected_canonical_after_ready === 401, `Projected canonical count changed: ${blueprint.projected_canonical_after_ready}`);
  const unresolvedReady = ready.filter((row) => row.cluster_lock_state !== 'LOCKED' || row.locked_core_cluster === 'UNRESOLVED');
  assert(unresolvedReady.length === 0, `READY candidates without locked core ancestry: ${unresolvedReady.map((r) => r.proposed_url).join(', ')}`);
  const mueangReady = ready.filter((row) => row.page_type === 'local_service' && /เมืองอุบล|mueang-ubon/i.test(`${row.proposed_url} ${row.district ?? ''}`));
  assert(mueangReady.length === 0, `Mueang Ubon local-service split escaped HOLD: ${mueangReady.map((r) => r.proposed_url).join(', ')}`);

  console.log(`Service source files: ${allServiceFiles.length} (104 core + 18 released series)`);
  console.log(`Locked service records: ${lockRows.length}`);
  console.log(`Core cluster definitions: ${clusterDefs.length}`);
  console.log(`Current canonical ownership rows: ${currentOwnership.size}`);
  console.log(`Redirect legacy rows: ${ownershipRows.filter((row) => row.ownership_status === 'REDIRECT_LEGACY').length}`);
  console.log(`HOLD_REVIEW legacy rows: ${ownershipRows.filter((row) => row.ownership_status === 'HOLD_REVIEW').length}`);
  console.log(`READY candidates with locked ancestry: ${ready.length - unresolvedReady.length}/${ready.length}`);
  console.log(`Projected canonical after READY: ${blueprint.projected_canonical_after_ready}`);
}

if (warnings.length) console.warn(warnings.map((w) => `WARNING: ${w}`).join('\n'));
if (errors.length) {
  console.error(errors.map((e) => `ERROR: ${e}`).join('\n'));
  process.exit(1);
}
console.log('Core money ownership & cluster lock QA passed.');
