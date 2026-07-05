# Batch 9 Camera / Creator Gear Cluster Report

## 1. Executive Summary

Batch 9 focused on strengthening the Camera / Creator Gear cluster for Ubon Ratchathani without creating duplicate intent against the existing camera hub and lens hub. The work updated the main camera hub, refreshed all target brand/type pages with clearer intent separation, tightened internal links from service and area pages, and cleaned legacy Sony links that could have produced broken internal paths.

The cluster now separates 4 camera-brand pages, 1 lens hub, and 4 creator-gear pages more clearly while keeping the parent camera hub as the central entry point. No commit, push, or deploy was performed.

## 2. Pages Created or Updated

Target cluster pages handled in this batch:

1. `/บริการ/รับซื้อกล้อง-sony-อุบล/`
2. `/บริการ/รับซื้อกล้อง-canon-อุบล/`
3. `/บริการ/รับซื้อกล้อง-fujifilm-อุบล/`
4. `/บริการ/รับซื้อกล้อง-nikon-อุบล/`
5. `/บริการ/รับซื้อเลนส์กล้อง-อุบล/`
6. `/บริการ/รับซื้อ-gopro-อุบล/`
7. `/บริการ/รับซื้อ-dji-osmo-อุบล/`
8. `/บริการ/รับซื้อโดรน-dji-อุบล/`
9. `/บริการ/รับซื้อกล้อง-vlog-อุบล/`

Supporting hub/link updates:

- `/บริการ/รับซื้อกล้อง-อุบล/`
- `/บริการ/`
- `/พื้นที่/mueang-ubon-ratchathani/`
- `/พื้นที่/warin-chamrap/`
- `/พื้นที่/ubon-university/`

Legacy internal-link cleanup:

- `src/content/services/camera-broken-ubon.md`
- `src/content/services/camera-with-lens-ubon.md`
- `src/content/services/lens-sony-fe-ubon.md`
- `src/content/blog/check-mirrorless-camera-before-selling.md`
- `src/content/blog/camera-shutter-count.md`

## 3. Keyword Targets

- รับซื้อกล้อง Sony อุบล
- รับซื้อกล้อง Canon อุบล
- รับซื้อกล้อง Fujifilm อุบล
- รับซื้อกล้อง Nikon อุบล
- รับซื้อเลนส์กล้อง อุบล
- รับซื้อ GoPro อุบล
- รับซื้อ DJI Osmo อุบล
- รับซื้อโดรน DJI อุบล
- รับซื้อกล้อง Vlog อุบล

Supporting parent keyword:

- รับซื้อกล้อง อุบล

## 4. Intent Separation

- `รับซื้อกล้อง-อุบล` remains the hub for mixed camera intent, multi-brand sets, and users who are not yet sure which sub-page fits.
- `รับซื้อกล้อง-sony-อุบล` focuses on Alpha / A7 / A6xxx / ZV and E-mount details such as shutter count, sensor, AF, and video usage.
- `รับซื้อกล้อง-canon-อุบล` focuses on EOS R, DSLR, RF / EF / EF-S structure, shutter, sensor, hot shoe, and Canon-specific body/lens context.
- `รับซื้อกล้อง-fujifilm-อุบล` focuses on X Series, X100, top dials, X Mount, and Fujifilm-specific usage patterns.
- `รับซื้อกล้อง-nikon-อุบล` focuses on Z Series, DSLR, Z/F mount, shutter, viewfinder, grip, and adapter context.
- `รับซื้อเลนส์กล้อง-อุบล` is lens-first and avoids body-led copy by centering mount, focal length, aperture, optics, fungus/fog, AF, and ring condition.
- `รับซื้อ-gopro-อุบล` is action-camera intent, not mirrorless intent.
- `รับซื้อ-dji-osmo-อุบล` is Osmo Pocket / Action intent with gimbal and accessory emphasis.
- `รับซื้อโดรน-dji-อุบล` is drone-specific and uses case-by-case wording for risk control.
- `รับซื้อกล้อง-vlog-อุบล` targets creator compact / flip-screen / mic-port use cases rather than general mirrorless pages.

## 5. Internal Links Added

- Camera hub now links clearly to Sony, Canon, Fujifilm, Nikon, lens, GoPro, DJI Osmo, drone DJI, and Vlog pages.
- Lens hub now links back to the camera hub and related camera-brand pages.
- Creator gear pages link back to the camera hub and cross-link to the relevant creator pages.
- `/บริการ/` now points users to the camera hub as the cluster entry point.
- `/พื้นที่/mueang-ubon-ratchathani/`, `/พื้นที่/warin-chamrap/`, and `/พื้นที่/ubon-university/` now include contextual links to the camera / Vlog cluster.
- Legacy internal links using `/บริการ/รับซื้อ-กล้อง-sony-อุบล/` were corrected to `/บริการ/รับซื้อกล้อง-sony-อุบล/`.

## 6. Claim Risk Cleanup

- Rewrote the camera hub and Sony page substantially to remove aggressive money-page phrasing and unsafe claims.
- Replaced faster/harder sell language with safer wording around “ประเมินเบื้องต้น”, “ตรวจสภาพจริง”, and “ตามรุ่น สภาพ และอุปกรณ์”.
- Kept drone wording conservative by explicitly stating some cases may require additional inspection before price conclusion.
- Ran a targeted banned-phrase scan across Batch 9 cluster files and supporting area/hub pages. Result: no matches for the prohibited phrase set.

## 7. Cannibalization Check

- Camera hub remains the broad parent page.
- Sony / Canon / Fujifilm / Nikon pages are brand-specific and no longer read like minor variations of the same generic page.
- Lens hub is lens-specific and does not duplicate body-led evaluation flow.
- GoPro / DJI Osmo / Drone / Vlog pages are clearly framed as creator gear rather than overlapping with mirrorless body intent.
- Titles, descriptions, H1s, and FAQs were differentiated across the cluster.

## 8. Sitemap Status

- Build generated the expected cluster routes successfully.
- `node scripts/check-sitemap-urls.mjs` loaded **209 URLs** and passed with **0 errors**.
- Built output confirmed the following compiled files exist:
  - `dist/บริการ/รับซื้อกล้อง-sony-อุบล/index.html`
  - `dist/บริการ/รับซื้อกล้อง-canon-อุบล/index.html`
  - `dist/บริการ/รับซื้อกล้อง-fujifilm-อุบล/index.html`
  - `dist/บริการ/รับซื้อกล้อง-nikon-อุบล/index.html`
  - `dist/บริการ/รับซื้อเลนส์กล้อง-อุบล/index.html`
  - `dist/บริการ/รับซื้อ-gopro-อุบล/index.html`
  - `dist/บริการ/รับซื้อ-dji-osmo-อุบล/index.html`
  - `dist/บริการ/รับซื้อโดรน-dji-อุบล/index.html`
  - `dist/บริการ/รับซื้อกล้อง-vlog-อุบล/index.html`

## 9. QA Results

- `npm.cmd run build`
  - Pass
  - Astro built **210 pages**
- `npm.cmd run seo:qa`
  - Pass
  - Errors: **0**
  - Warnings: **0**
- `node scripts/check-sitemap-urls.mjs`
  - Pass
  - Loaded **209 URLs**
  - Errors: **0**
- `node scripts/qa-home.mjs`
  - Pass
  - `allOk: true`
- Claim scan
  - Used targeted `rg` scan because no dedicated claim-scan script for this batch was found in `scripts/`
  - Result: **0 prohibited matches** in the Batch 9 cluster scope

## 10. Files Changed

- `src/content/services/camera-ubon.md`
- `src/content/services/sony-camera-ubon.md`
- `src/content/services/camera-canon-ubon.md`
- `src/content/services/camera-fujifilm-ubon.md`
- `src/content/services/camera-nikon-ubon.md`
- `src/content/services/camera-lens-ubon.md`
- `src/content/services/gopro-ubon.md`
- `src/content/services/dji-osmo-ubon.md`
- `src/content/services/drone-dji-ubon.md`
- `src/content/services/vlog-camera-ubon.md`
- `src/pages/บริการ/index.astro`
- `src/content/areas/mueang-ubon-ratchathani.md`
- `src/content/areas/warin-chamrap.md`
- `src/content/areas/ubon-university.md`
- `src/content/services/camera-broken-ubon.md`
- `src/content/services/camera-with-lens-ubon.md`
- `src/content/services/lens-sony-fe-ubon.md`
- `src/content/blog/check-mirrorless-camera-before-selling.md`
- `src/content/blog/camera-shutter-count.md`

## 11. Remaining Risks

- There are still unrelated legacy claim-risk phrases elsewhere in the wider site outside this batch scope, especially in older service and blog content not touched here.
- `src/config/urls.ts` and `vercel.json` already had pre-existing working-tree changes and were intentionally left untouched in this batch.
- Four creator-gear markdown files (`gopro-ubon.md`, `dji-osmo-ubon.md`, `drone-dji-ubon.md`, `vlog-camera-ubon.md`) are present in the working tree and now compile correctly, but their git tracking state should be reviewed by the repo owner before any later commit.

## 12. Recommended Next Batch

Recommended next batch: extend the camera / creator ecosystem with supporting informational content and evidence pages, for example:

- camera-selling checklist articles for Canon / Fujifilm / Nikon users
- creator workflow articles around GoPro / DJI Osmo / Vlog setup before selling
- local proof / case content tied to camera and creator gear in key areas such as เมืองอุบล, วารินชำราบ, and ม.อุบล

Status note: no commit, no push, and no deploy were performed in this batch.
