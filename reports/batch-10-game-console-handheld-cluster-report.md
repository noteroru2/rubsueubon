# Batch 10 Game Console / Handheld Cluster Report

## 1. Executive Summary

Batch 10 created and connected the Game Console / Handheld SEO cluster for รับซื้ออุบล.com. The cluster now has a safer main hub for "รับซื้อเครื่องเกม อุบล", dedicated pages for PS5, Nintendo Switch, Switch OLED, ROG Ally, Steam Deck, Xbox, and a handheld hub. Copy was rewritten to avoid risky price or acceptance claims and to separate intent by device type.

No commit, push, or deploy was performed.

## 2. Pages Created or Updated

- Updated: `/บริการ/รับซื้อ-เครื่องเกม-อุบล/`
- Updated: `/บริการ/รับซื้อ-ps5-อุบล/`
- Updated: `/บริการ/รับซื้อ-nintendo-switch-อุบล/`
- Created: `/บริการ/รับซื้อ-nintendo-switch-oled-อุบล/`
- Created: `/บริการ/รับซื้อ-rog-ally-อุบล/`
- Created: `/บริการ/รับซื้อ-steam-deck-อุบล/`
- Created: `/บริการ/รับซื้อ-xbox-อุบล/`
- Created: `/บริการ/รับซื้อเครื่องเกมพกพา-อุบล/`

## 3. Keyword Targets

- รับซื้อเครื่องเกม อุบล
- รับซื้อ PS5 อุบล
- รับซื้อ Nintendo Switch อุบล
- รับซื้อ Nintendo Switch OLED อุบล
- รับซื้อ ROG Ally อุบล
- รับซื้อ Steam Deck อุบล
- รับซื้อ Xbox อุบล
- รับซื้อเครื่องเกมพกพา อุบล

## 4. Intent Separation

- Main game console hub explains the whole category and routes users to model-specific pages.
- PS5 page focuses on Disc/Digital/Slim, DualSense, HDMI, cooling, and PSN.
- Nintendo Switch page focuses on V2, Lite, Joy-Con, Dock, Adapter, and Nintendo Account.
- Switch OLED page isolates OLED-specific intent around screen condition, Dock, and OLED model details.
- Handheld hub targets portable gaming devices and links Switch, Switch OLED, ROG Ally, and Steam Deck.
- ROG Ally and Steam Deck use "ส่งรูปและรายละเอียดให้ประเมินเป็นรายกรณี" wording.
- Xbox uses "ส่งรูปและรายละเอียดให้ประเมินเป็นรายกรณี" wording.

## 5. Internal Links Added

- Game console hub links to all 7 target pages.
- All 7 target pages link back to the game console hub.
- Handheld hub links to Switch, Switch OLED, ROG Ally, and Steam Deck.
- PS5 links to Xbox and the game console hub.
- Switch links to Switch OLED and the handheld hub.
- ROG Ally links to Steam Deck, handheld hub, game console hub, PC game cafe, and PC parts.
- Steam Deck links to ROG Ally and handheld hub.
- Service index links to the game console hub and handheld hub.
- Area pages for เมืองอุบล, วารินชำราบ, and ม.อุบล now include contextual game/handheld links.
- Game-console blog posts now link to Switch OLED and handheld pages.
- PC game cafe page links out to ROG Ally, Steam Deck, handheld, and game console pages.

## 6. Claim Risk Cleanup

Scanned target files against the prohibited claim list from the Batch 10 brief, plus extra hype wording found during cleanup.

Result: no matches in Batch 10 target page files after cleanup.

## 7. Cannibalization Check

The main hub targets broad "รับซื้อเครื่องเกม อุบล" intent. Device pages focus on model-specific details and internal links back to the hub. The handheld hub separates portable-device searches from console searches. Xbox, ROG Ally, and Steam Deck avoid broad hard-sell claims and use case-by-case assessment wording.

## 8. Sitemap Status

`npm run build` generated the new pages successfully. The sitemap integrity check loaded 214 URLs and passed with 0 errors. New game-console URLs appeared in generated output, including PS5, Switch OLED, ROG Ally, Steam Deck, Xbox, the existing game hub, and the handheld hub.

## 9. QA Results

- `npm run build`: passed, 215 pages built.
- `npm run seo:qa`: passed, 0 errors and 0 warnings.
- `node scripts/check-sitemap-urls.mjs`: passed, 0 errors.
- `node scripts/qa-home.mjs`: passed, `allOk: true`.
- Claim-risk scan: passed for Batch 10 target files.

## 10. Files Changed

- `src/content/services/game-console-ubon.md`
- `src/content/services/console-ps5-ubon.md`
- `src/content/services/console-nintendo-switch-ubon.md`
- `src/content/services/console-nintendo-switch-oled-ubon.md`
- `src/content/services/rog-ally-ubon.md`
- `src/content/services/steam-deck-ubon.md`
- `src/content/services/xbox-ubon.md`
- `src/content/services/handheld-game-console-ubon.md`
- `src/content/services/pc-game-cafe-ubon.md`
- `src/content/areas/mueang-ubon-ratchathani.md`
- `src/content/areas/warin-chamrap.md`
- `src/content/areas/ubon-university.md`
- `src/content/blog/check-game-console-before-selling.md`
- `src/content/blog/game-console-condition.md`
- `src/pages/บริการ/index.astro`
- `src/config/urls.ts`
- `reports/batch-10-game-console-handheld-cluster-report.md`

## 11. Remaining Risks

- The repo already had unrelated uncommitted Batch 9 changes before this work; they were not committed or reverted.
- Existing site-wide content may still contain older sales wording outside the Batch 10 target files.
- ROG Ally, Steam Deck, and Xbox are intentionally phrased as case-by-case assessment because acceptance certainty was not assumed.

## 12. Recommended Next Batch

Recommended next batch: clean and expand the gaming hardware cluster around PC Gaming, gaming notebook, gaming monitor, GPU, and handheld Windows devices, while auditing old game-related blog copy for overclaim wording.
