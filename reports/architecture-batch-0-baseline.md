# ARCHITECTURE BATCH 0 — BASELINE

Date: **2026-09-03**  
Source archive: `rubsueubon-main.zip`  
Archive provenance SHA: `bd491fa3d8340a97f9f3568d865de74f928459c3`

## Scope

Batch 0 is architecture-only. No production content page, canonical rule, redirect rule, navigation, robots rule, or sitemap source was intentionally changed.

Work was performed in a separate copy:

`/mnt/data/rubsueubon-batch0`

The uploaded source copy remains unchanged.

## Git Baseline

The uploaded ZIP does **not** contain a `.git/` directory.

Therefore the following cannot be independently verified from this artifact:

- branch name
- git status
- start/end working-tree diff through Git
- `origin/main`
- commit history

The ZIP central-directory metadata exposes the source SHA:

`bd491fa3d8340a97f9f3568d865de74f928459c3`

This SHA is used only as archive provenance, not as a substitute for a live Git repository.

## Current Source Inventory

| Collection / route group | Count |
|---|---:|
| Services | 104 |
| Areas | 26 |
| Blog | 27 |
| Examples | 16 |
| Updates / proof | 18 |
| Model services currently allowed as nested owners | 3 |
| Camera models | 5 |
| Static/index/utility canonical routes | 12 |
| **Source-derived canonical routes** | **211** |

The source-derived count of **211** is consistent with the repository history: a previous report recorded 227 sitemap URLs before the URL-ownership consolidation and 16 loser pages were subsequently retired.

Because dependencies could not be completely installed within this execution environment, the 211 count is **source-derived**, not a fresh `dist/sitemap` count.

## GSC Baseline

Uploaded workbook:

`xn--c3c3ab7an0ca2a0dm8p.com-Performance-on-Search-2026-09-03.xlsx`

Date range:

**2026-06-09 → 2026-08-31 (84 days)**

| Window | Clicks | Impressions | CTR | Avg position |
|---|---:|---:|---:|---:|
| Full period | 351 | 4266 | 8.23% | 7.35 |
| Previous 28d | 115 | 1658 | 6.94% | 7.48 |
| Latest 28d | 178 | 2273 | 7.83% | 7.11 |

Latest 28d vs previous 28d:

- clicks: **+54.8%**
- impressions: **+37.1%**
- CTR: **+0.89 percentage points**
- average position improved by **0.37 positions**

## GSC URL Normalization

GSC exported 161 page rows.

After normalizing trailing-slash variants:

- unique normalized GSC paths: **159**
- map to current source-derived canonical route: **132**
- historical path with a current redirect: **26**
- unresolved legacy/unknown path: **1**

The unresolved path is:

`/บริการ/รับซื้อโน้ตบุ๊กเสีย-อุบล/`

It had only **1 impression / 0 clicks / position 43**, but no current redirect rule was found. The likely current owner is `/บริการ/notebook-broken-ubon/`; this must be live-verified before changing redirects in a later batch.

## Fresh Build Gate

`npm ci` could not complete inside the execution window of this environment, so Astro dependencies were not available for a trustworthy fresh production build.

Status:

- `npm ci`: **ENVIRONMENT_TIMEOUT / INCOMPLETE**
- `npm run build`: **NOT_RUN_AFTER_INCOMPLETE_INSTALL**
- `npm run seo:qa`: **NOT_RUN — requires fresh dist**
- `npm run seo:url-ownership`: **NOT_RUN — requires fresh dist**
- `npm run seo:architecture`: **PASS**

This is an execution-environment warning, not evidence of a source-code build failure.
