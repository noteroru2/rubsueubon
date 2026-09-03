# CONTENT / EXPANSION BATCH 3 — W2A Brand & Series Production Release

Date: 2026-09-03

## Scope

Released 18 W2A Brand/Series pages from the locked Batch 2 foundation.

### Notebook — 10

- `/บริการ/รับซื้อ-asus-rog-อุบล/`
- `/บริการ/รับซื้อ-asus-tuf-อุบล/`
- `/บริการ/รับซื้อ-asus-vivobook-อุบล/`
- `/บริการ/รับซื้อ-acer-nitro-อุบล/`
- `/บริการ/รับซื้อ-dell-latitude-อุบล/`
- `/บริการ/รับซื้อ-hp-victus-อุบล/`
- `/บริการ/รับซื้อ-lenovo-legion-อุบล/`
- `/บริการ/รับซื้อ-lenovo-loq-อุบล/`
- `/บริการ/รับซื้อ-lenovo-thinkpad-อุบล/`
- `/บริการ/รับซื้อ-msi-katana-อุบล/`

### Camera — 4

- `/บริการ/รับซื้อกล้อง-sony-a7-series-อุบล/`
- `/บริการ/รับซื้อกล้อง-sony-zv-series-อุบล/`
- `/บริการ/รับซื้อกล้อง-canon-eos-r-series-อุบล/`
- `/บริการ/รับซื้อกล้อง-fujifilm-x-series-อุบล/`

### GPU — 4

- `/บริการ/รับซื้อ-rtx-50-series-อุบล/`
- `/บริการ/รับซื้อ-rtx-40-series-อุบล/`
- `/บริการ/รับซื้อ-rtx-30-series-อุบล/`
- `/บริการ/รับซื้อ-radeon-rx-7000-series-อุบล/`

## Content Quality

Each released page contains series-specific valuation and inspection content rather than only a substituted brand/series name. The release covers distinctions such as gaming GPU/thermal/adapter checks, business notebook BIOS/asset-state checks, camera sensor/shutter/mount checks, and GPU VRAM/temperature/fan/warranty checks.

Static content QA:

- W2A source pages: 18/18
- YAML/frontmatter parse: PASS
- Unique title: 18/18
- Unique description: 18/18
- Custom FAQ minimum: 5/page
- Released body content: 46,824 non-space characters total
- Average body content: ~2,601 non-space characters/page
- Internal links scanned from new pages: 73
- Missing current internal targets: 0
- Required parent inlinks: PASS 18/18

Shared operational instructions remain limited boilerplate; the main product/inspection/condition content is series-specific.

## Hierarchy

The services collection now supports:

- `tier: main`
- `tier: brand`
- `tier: series`

The service route breadcrumb logic recognizes both brand and series pages with a parent URL.

No parent winner URL was changed.

## Parent Pages Updated

Only a dedicated W2A series-link section was appended to these 11 current parents:

- ASUS Notebook
- Acer Notebook
- Lenovo Notebook
- HP Notebook
- Dell Notebook
- MSI Notebook
- Sony Camera
- Canon Camera
- Fujifilm Camera
- RTX
- GPU / Graphics Card

No existing parent title, H1, slug, canonical or original body section was rewritten.

## Architecture State

Before Batch 3:

- Current canonical: 211
- READY: 190
- Projected: 401

After W2A source release:

- Current canonical ownership: 229
- Existing blueprint rows: 229
- Remaining READY: 172
- HOLD: 17
- REJECT: 5
- Projected after remaining READY: 401
- Unresolved legacy: 0

W2B remains 17 pages and W2C remains 12 pages. Neither was released in this batch.

## QA

PASS:

- `npm run seo:w2a-release`
- `npm run seo:brand-series`
- `npm run seo:architecture`
- `npm run seo:core-money-lock`

Build-dependent QA was not executed because fresh dependency installation could not complete in the current execution environment.

## Build Gate

`NOT_REVERIFIED_ENVIRONMENT`

Two fresh dependency-install attempts were made:

- `npm ci --no-audit --no-fund`
- `npm ci --ignore-scripts --no-audit --no-fund --prefer-offline`

Both were terminated by the container transport timeout. This is not classified as a source build failure. Partial `node_modules` was removed before packaging.

Therefore the following remain expected-but-not-freshly-verified:

- Astro production build
- generated sitemap count = 229
- rendered canonical self-check
- rendered H1 check
- rendered internal-link check from `dist`

## Production Safety

- Redirect rules changed: NO
- P0 winner URL changed: NO
- Existing canonical target changed: NO
- W2B/W2C released: NO
- Commit: NO
- Push: NO
- Deploy: NO

