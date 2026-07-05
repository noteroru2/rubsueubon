# P0 Fix Report: `/พื้นที่/ubon-university/` 404

## 1. Root Cause

The local source already had `src/content/areas/ubon-university.md`, and the current dynamic area route builds pages from the `areas` content collection. The production 404 is consistent with a stale or older deployed build where this special area was not present in the generated output.

To prevent this from recurring, the Ubon University page is now explicitly marked as a landmark/special area, the area index renders landmark entries from content instead of a hardcoded link, and the dynamic route now fails the build if `/พื้นที่/ubon-university/` is not included in generated paths.

## 2. Files Changed

- `src/content.config.ts`
- `src/content/areas/ubon-university.md`
- `src/pages/พื้นที่/[district].astro`
- `src/pages/พื้นที่/index.astro`
- `reports/p0-fix-ubon-university-404-report.md`

## 3. Route Generation Fix

- Added `areaType` to the `areas` content schema with allowed values `district` and `landmark`.
- Marked `ubon-university` as `areaType: "landmark"`.
- Kept `/พื้นที่/[district].astro` generating static paths from all entries in the `areas` collection, so landmark/special-area content can build through the same route template.
- Added a required route guard in `getStaticPaths()` so the build fails if `/พื้นที่/ubon-university/` is missing.
- Updated `/พื้นที่/` so landmark entries are shown in the “พื้นที่พิเศษและแลนด์มาร์กสำคัญ” section from content data, separate from the district list.

## 4. Sitemap Status

PASS.

- `npm run build` generated `dist/พื้นที่/ubon-university/index.html`.
- `dist/sitemap-0.xml` contains `ubon-university`.
- Specific sitemap check result: `SITEMAP_UBON_OK`, `SITEMAP_UBON_COUNT=4`.
- `node scripts/check-sitemap-urls.mjs` passed with 0 errors.

## 5. Canonical Status

PASS.

Generated page canonical is self-referencing:

`https://xn--c3c3ab7an0ca2a0dm8p.com/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88/ubon-university/`

This is the percent-encoded equivalent of:

`https://xn--c3c3ab7an0ca2a0dm8p.com/พื้นที่/ubon-university/`

Additional checks:

- `og:url` is self-referencing.
- No `noindex` was found on the generated page.

## 6. Internal Links Check

PASS.

- Built HTML contains internal links to `ubon-university`.
- Specific internal-link scan found `UBON_INTERNAL_LINK_COUNT=50`.
- Target page exists in `dist`.
- Specific result: `UBON_INTERNAL_LINK_OK`.

Cannibalization check also passed:

- `/พื้นที่/ubon-university/` title: `รับซื้อ iPad MacBook Notebook iPhone มหาวิทยาลัยอุบลราชธานี (ม.อุบล) | รับซื้ออุบล.com`
- `/พื้นที่/ubon-university/` H1: `รับซื้อ iPad MacBook Notebook iPhone มหาวิทยาลัยอุบลราชธานี`
- `/พื้นที่/warin-chamrap/` title: `รับซื้อสินค้าไอที อำเภอวารินชำราบ อุบลราชธานี | รับซื้ออุบล.com`
- `/พื้นที่/warin-chamrap/` H1: `รับซื้อสินค้าไอที อำเภอวารินชำราบ อุบลราชธานี`

The Ubon University page remains student/landmark intent, while Warin Chamrap remains district intent.

## 7. QA Commands Run

- `npm run build` - PASS
- `npm run seo:qa` - PASS
- `node scripts/check-sitemap-urls.mjs` - PASS
- `node scripts/qa-home.mjs` - PASS
- Specific dist output check for `ubon-university` - PASS
- Specific sitemap inclusion check for `ubon-university` - PASS
- Specific canonical/noindex/OG URL check for `ubon-university` - PASS
- Specific internal-link target check for `ubon-university` - PASS
- Cannibalization title/H1 comparison with `/พื้นที่/warin-chamrap/` - PASS

## 8. Final Verdict: PASS

Local static build, sitemap, canonical, internal links, and intent separation all pass.

No commit, push, or deploy was performed. The live 404 can only change after a QA-approved deploy of this passing build.
