# ARCHITECTURE BATCH 0 — FINAL REPORT

## Verdict

**PASS_WITH_WARNING**

Architecture ownership and 400-page planning gates pass. No production content URL, canonical target, redirect rule, navigation, robots rule, or sitemap source was changed in this batch.

Warnings are limited to execution/provenance verification and one unresolved historical URL:

1. The uploaded ZIP does not contain `.git/`, so branch/status/origin cannot be independently verified.
2. A fresh Astro production build could not be completed because `npm ci` did not complete within this execution environment. The architecture inventory is therefore source-derived.
3. GSC contains one unresolved historical path: `/บริการ/รับซื้อโน้ตบุ๊กเสีย-อุบล/` (0 clicks / 1 impression / position 43). Current source appears to use `/บริการ/notebook-broken-ubon/`; live verification is required before any redirect change.
4. The supplied GSC workbook has aggregate Queries and aggregate Pages, but no Query × Page export, so query-level cannibalization cannot be proven from GSC alone.

## Git / Provenance

- Uploaded archive: `rubsueubon-main.zip`
- Archive provenance SHA: `bd491fa3d8340a97f9f3568d865de74f928459c3`
- Git branch: **N/A — `.git/` not included**
- Start SHA: **archive provenance only**
- End SHA: **N/A — no commit created**
- Working tree before/after: **N/A — no Git metadata**
- Work performed in separate copy: `/mnt/data/rubsueubon-batch0`
- Uploaded source copy preserved: **YES**
- Commit: **NO**
- Push: **NO**
- Deploy: **NO**

## Production Baseline

Current source-derived canonical routes: **211**

| Collection / route group | Count |
|---|---:|
| Services | 104 |
| Areas | 26 |
| Blog | 27 |
| Examples | 16 |
| Updates / proof | 18 |
| Model services | 3 |
| Camera models | 5 |
| Static/index/utility routes | 12 |
| **Source-derived canonical routes** | **211** |

Fresh generated pages / sitemap URL count: **NOT RE-VERIFIED** because dependency installation was incomplete in this environment.

Static redirect inspection:

- unique redirect source patterns: **78**
- repeated redirect sources across config systems: **10**
- conflicting destinations: **0**
- detected concrete redirect chains: **0**
- current canonical routes overlapping redirect sources: **0**

## GSC Baseline

Date range: **2026-06-09 → 2026-08-31 (84 days)**

| Window | Clicks | Impressions | CTR | Avg position |
|---|---:|---:|---:|---:|
| Full period | 351 | 4,266 | 8.23% | 7.35 |
| Previous 28d | 115 | 1,658 | 6.94% | 7.48 |
| Latest 28d | 178 | 2,273 | 7.83% | 7.11 |

Latest 28d vs previous 28d:

- clicks: **+54.8%**
- impressions: **+37.1%**
- CTR: **+0.89 percentage points**
- average position: **improved by ~0.37**

The site is showing positive momentum, therefore current winners are protected rather than restructured for URL aesthetics.

## Protected Winners

P0 protected URLs: **18**

- `/`
- `/บริการ/รับซื้อมือถือ-อุบล/`
- `/บริการ/รับซื้อ-เครื่องเกม-อุบล/`
- `/บริการ/รับซื้อ-อะไหล่คอม-อุบล/`
- `/บริการ/รับซื้อ-ipad-อุบล/`
- `/บริการ/รับซื้อ-iphone-อุบล/`
- `/บริการ/รับซื้อกล้อง-อุบล/`
- `/บริการ/รับซื้อคอมพิวเตอร์-อุบล/`
- `/บริการ/รับซื้อ-macbook-อุบล/`
- `/พื้นที่/warin-chamrap/`
- `/พื้นที่/det-udom/`
- `/พื้นที่/khueang-nai/`
- `/พื้นที่/khemarat/`
- `/พื้นที่/nam-yuen/`
- `/พื้นที่/khong-chiam/`
- `/พื้นที่/mueang-ubon-ratchathani/`
- `/พื้นที่/sirindhorn/`
- `/พื้นที่/trakan-phuet-phon/`

## URL Ownership Audit

Master registry rows: **311**

| Ownership status | Count |
|---|---:|
| PROTECT_WINNER | 18 |
| KEEP_OWNER | 123 |
| KEEP_SUPPORT | 70 |
| REDIRECT_LEGACY | 99 |
| HOLD_REVIEW | 1 |

Current canonical ownership:

- protected / owner routes: **141**
- support routes: **70**
- total current canonical routes: **211**

Created:

- `docs/seo/url-ownership-master.csv`
- `data/seo/url-ownership-master.json`

## Historical GSC Legacy vs Current Cannibalization

GSC page rows: **161**

After trailing-slash normalization:

- unique normalized paths: **159**
- current canonical route: **132**
- historical GSC path with current redirect: **26**
- unresolved legacy/unknown: **1**

Literal source scan found **0 current source links** pointing to the 26 historical GSC loser paths.

### Confirmed current technical duplicate ownership conflicts

**0**

The supplied artifact does not prove that two current indexable canonical URLs own the exact same intent.

### Historical false-positive families already consolidated

- Smartphone / phone synonym
- iPhone nested model variants
- iPad legacy/nested variants
- MacBook M2/M3 legacy nested variants
- Camera legacy variants
- B2B legacy nested variants
- old CPU/RAM/SSD combined path

These remain historical GSC evidence and should not be recreated as indexable URLs.

### Watchlist

- broad notebook-broken page vs specific notebook condition pages
- Apple ecosystem hub vs iPhone/iPad/MacBook product hubs
- PC parts hub vs product owners such as GPU/CPU/RAM/SSD
- B2B asset-class hierarchy
- Mueang Ubon district × service pages vs province/city-wide `...อุบล` core money pages

## 400-Page Blueprint

Blueprint rows: **423**

| Status | Count |
|---|---:|
| EXISTING_OWNER | 141 |
| EXISTING_SUPPORT | 70 |
| READY | 190 |
| HOLD | 17 |
| REJECT | 5 |

Current canonical routes: **211**  
READY expansion candidates: **190**  
Projected canonical total: **401**

Result:

- minimum target 350+: **PASS**
- preferred 380–420 architecture band: **PASS**

### READY distribution

| Cluster | READY |
|---|---:|
| Local / District × Service | 57 |
| Notebook Series | 33 |
| Condition / Problem | 20 |
| iPhone Model | 19 |
| Guide | 14 |
| iPad Model | 12 |
| Samsung Model | 8 |
| Camera Series | 8 |
| GPU Series | 6 |
| B2B | 6 |
| Gaming Model | 5 |
| Watch Series | 2 |
| **Total** | **190** |

### Release waves

| Wave | Scope | READY |
|---|---|---:|
| W2 | Brand / Series | 47 |
| W3 | High-intent Model | 46 |
| W4 | Condition / Problem | 20 |
| W5 | Local Tier A | 34 |
| W6 | Local Tier B | 23 |
| W7 | B2B | 6 |
| W8 | Guide Authority | 14 |
| **Total** |  | **190** |

## Local Tiering

### Tier A — READY priority

- Warin Chamrap
- Det Udom
- Khueang Nai
- Khemarat
- Nam Yuen
- Khong Chiam
- Sirindhorn
- Trakan Phuet Phon
- Phibun Mangsahan

Only missing, qualified high-intent product children are proposed. Existing winners are preserved.

### Tier B — limited READY expansion

- Buntharik
- Na Chaluai
- Samrong
- Kut Khaopun
- Si Mueang Mai
- Nam Khun
- Pho Sai

Generally limited to 2–3 commercial children per district.

### Tier C — HOLD

- Tan Sum
- Sawang Wirawong
- Lao Suea Kok
- Thung Si Udom
- Na Tan
- Na Yia
- Don Mot Daeng

No mass matrix is recommended at this stage.

### Mueang Ubon — HOLD for District × Service

New `เมืองอุบล × service` pages are deliberately not READY because the current `...อุบล` money pages already overlap city intent strongly. Query × Page or new GSC evidence should be required before splitting these intents.

## Doorway / Thin-Page Guard

READY local pages are required to have:

- an existing district parent
- an existing commercial parent
- GSC/local evidence
- product-specific evaluation workflow
- a concrete unique local operational-content plan
- cannibalization risk ≤ 2
- doorway risk ≤ 2
- thin-content risk ≤ 2

Changing only the district name is not sufficient.

Five sample landmark pages were explicitly **REJECTED** without demand evidence:

- Central Ubon
- Ubon airport
- Big C Ubon
- Lotus Ubon
- Warin market

Five proof/case placeholders are **HOLD** until real evidence exists.

## Trust / Proof Audit Warning

`src/data/districts.json` contains **25 review objects** without an evidence/verification status field.

A template-normalization scan found **16 reviews** collapsing to the same generic pattern after replacing the district name:

`นำมือถือมาขายที่{district} สะดวกมาก ให้ราคาเป็นธรรม แนะนำเลยครับ`

Other district data also contains strong operational claims such as pickup/payment/timing guarantees.

Batch 0 did **not** rewrite these claims, but future content/Local batches should introduce a verification status and avoid presenting template-generated text as verified customer testimony.

## QA

### Architecture QA

Command:

`npm run seo:architecture`

Result: **PASS_WITH_WARNING**

Output:

- current canonical routes: 211
- existing blueprint rows: 211
- READY candidates: 190
- HOLD candidates: 17
- REJECT candidates: 5
- projected canonical after READY: 401
- redirect/legacy ownership rows: 99
- unresolved legacy rows: 1
- duplicate candidate ID: 0
- duplicate candidate URL: 0
- READY candidate overlapping current route: 0
- READY candidate overlapping redirect source: 0
- projected total outside 380–420: 0

### Fresh production build

- `npm ci`: **ENVIRONMENT_TIMEOUT / INCOMPLETE**
- `npm run build`: **NOT RUN as a trustworthy gate after incomplete install**
- `npm run seo:qa`: **NOT RUN — fresh dist unavailable**
- `npm run seo:url-ownership`: **NOT RUN — fresh dist unavailable**

This is a runtime-environment limitation; it is not recorded as a source-code build failure.

## Files Added

- `.batch0-provenance`
- `docs/seo/url-ownership-master.csv`
- `docs/seo/400-page-blueprint.csv`
- `data/seo/url-ownership-master.json`
- `data/seo/400-page-blueprint.json`
- `scripts/architecture-ownership-qa.mjs`
- `reports/architecture-batch-0-baseline.md`
- `reports/architecture-batch-0-url-ownership.md`
- `reports/architecture-batch-0-cannibalization.md`
- `reports/architecture-batch-0-400-page-blueprint.md`
- `reports/architecture-batch-0-final-gate.md`

## Files Modified

- `package.json` — added only `seo:architecture` script

No other pre-existing file differs from the uploaded source copy when excluding the incomplete `node_modules` installation directory.

## Production Impact

- production pages created: **0**
- production URLs changed: **0**
- canonical rules changed: **0**
- redirect rules changed: **0**
- page content changed: **0**
- navigation changed: **0**
- sitemap source changed: **0**
- robots changed: **0**
- commit: **NO**
- push: **NO**
- deploy: **NO**

## Acceptance Gate

- current architecture inventory: **PASS (source-derived)**
- important current URL ownership map: **PASS**
- P0 winners protected: **PASS**
- historical GSC legacy separated from current duplicates: **PASS**
- iPhone ownership mapped: **PASS**
- iPad ownership mapped: **PASS**
- MacBook ownership mapped: **PASS**
- Smartphone ownership mapped: **PASS**
- Camera ownership mapped: **PASS**
- PC/B2B ownership mapped: **PASS**
- District hierarchy mapped: **PASS**
- 350+ qualified architecture: **PASS**
- preferred 380–420 target evaluated: **PASS — projected 401**
- READY candidates have parents: **PASS**
- mass doorway strategy avoided: **PASS**
- cannibalization risk classified: **PASS_WITH_WARNING — no Query × Page export**
- machine-readable registry: **PASS**
- architecture QA: **PASS**
- production URL impact: **NONE**
- deploy: **NO**
- push: **NO**

## Next Recommended Batch

**ARCHITECTURE BATCH 1 — Core Money Ownership & Cluster Lock**

Recommended scope before releasing new pages:

1. Live-verify the unresolved historical notebook-broken URL and add a redirect only if confirmed necessary.
2. Run a clean dependency install and fresh production build in the real repository/runtime.
3. Re-run sitemap/canonical/redirect/internal-link gates against built output.
4. Lock Core Money → Brand/Series/Model parent-child ownership for the first release waves.
5. Do not release all 190 pages at once; proceed by controlled waves, beginning with the strongest Brand/Series and high-intent Model candidates after baseline verification.

Recommended production pages to create in Batch 1: **0 initially**. Batch 1 should finish the live/build ownership gate first, then hand off the first qualified expansion set to the next production content batch.
