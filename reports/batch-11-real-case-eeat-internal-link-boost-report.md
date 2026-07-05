# Batch 11: Real Case / E-E-A-T / Internal Link Boost Report

## 1. Executive Summary

Batch 11 เพิ่มกลุ่มหน้า "ตัวอย่างเคสประเมินราคา" เพื่อเสริม E-E-A-T โดยใช้ collection เดิม `src/content/examples` และ route เดิม `/ตัวอย่างเคสประเมิน/` ไม่สร้าง content structure ใหม่ เพิ่ม/อัปเดตหน้าเคสเป้าหมาย 12 หน้า พร้อม internal links ไปยัง money pages, area pages และ example hub ที่เกี่ยวข้อง

## 2. Case Pages Created or Updated

Created 10 new example-only pages:

- `src/content/examples/samsung-galaxy-s-ultra-warin-example.md`
- `src/content/examples/oppo-vivo-upgrade-phone-example.md`
- `src/content/examples/ipad-gen-10-apple-pencil-student-example.md`
- `src/content/examples/macbook-air-m2-ubon-university-example.md`
- `src/content/examples/office-computer-lot-mueang-ubon-example.md`
- `src/content/examples/notebook-lot-company-warin-example.md`
- `src/content/examples/gaming-cafe-pc-gpu-monitor-example.md`
- `src/content/examples/sony-camera-with-lens-ubon-example.md`
- `src/content/examples/fujifilm-canon-creator-camera-example.md`
- `src/content/examples/ps5-rog-ally-secondhand-ubon-example.md`

Updated 2 existing example pages:

- `src/content/examples/iphone-15-pro-max-mueang-ubon-example.md`
- `src/content/examples/ipad-pro-ubon-university-example.md`

## 3. Evidence / Real-vs-Example Wording Check

All 12 target pages use safe wording such as "ตัวอย่างเคสประเมินราคา" and `proofStatus: "example_only"`. No new page claims to be a real customer case, no customer names, phone numbers, addresses, serial numbers, exact transaction prices, or personal details were added.

## 4. Internal Links Added

Each new/updated example page links to relevant money pages, area pages, and `/ตัวอย่างเคสประเมิน/`. Examples include:

- iPhone 15 Pro Max -> iPhone hub, iPhone 15 Pro Max page, Mueang Ubon area
- Samsung S Ultra -> mobile hub, Samsung hub, S Ultra page, Warin Chamrap area
- iPad / MacBook student cases -> iPad/MacBook pages and Ubon University area
- B2B / office cases -> corporate PC, lot PC, office PC, Warin/Mueang areas
- Camera cases -> camera hub, Sony/Canon/Fujifilm/lens pages
- Game case -> game console hub, PS5, ROG Ally, handheld console pages

## 5. Money Pages Updated

Added "ตัวอย่างเคสประเมินราคาที่เกี่ยวข้อง" sections to:

- `src/content/services/iphone-ubon.md`
- `src/content/services/smartphone-ubon.md`
- `src/content/services/ipad-ubon.md`
- `src/content/services/macbook-ubon.md`
- `src/content/services/pc-corporate-ubon.md`
- `src/content/services/b2b-lot-ubon.md`
- `src/content/services/camera-ubon.md`
- `src/content/services/game-console-ubon.md`
- `src/content/areas/ubon-university.md`

## 6. Claim Risk Cleanup

Ran a claim-risk scan across `src/content` for:

`ราคาสูงสุด|รับทุกสภาพ|จ่ายทันทีทุกเคส|การันตี|100%|ดีที่สุด|อันดับ 1|รับแน่นอนทุกอาการ|ลบข้อมูลปลอดภัย 100%|เคสจริงจากลูกค้าจริง`

Cleanup removed or softened matches in blog, service, and model-service content. Follow-up scan returned no matches in `src/content`.

## 7. Sitemap Status

`npm run build` generated the new example pages and sitemap successfully. Sitemap QA loaded 224 URLs. Astro built 225 pages; the difference is expected because non-index pages such as 404 are built but not listed in sitemap.

## 8. QA Results

- `npm run build`: Passed, 225 pages built
- `npm run seo:qa`: Passed, 0 errors, 0 warnings
- `node scripts/check-sitemap-urls.mjs`: Passed, 0 errors
- `node scripts/qa-home.mjs`: Passed, `allOk: true`
- Claim-risk scan in `src/content`: Passed, no matches

## 9. Files Changed

New files:

- `src/content/examples/fujifilm-canon-creator-camera-example.md`
- `src/content/examples/gaming-cafe-pc-gpu-monitor-example.md`
- `src/content/examples/ipad-gen-10-apple-pencil-student-example.md`
- `src/content/examples/macbook-air-m2-ubon-university-example.md`
- `src/content/examples/notebook-lot-company-warin-example.md`
- `src/content/examples/office-computer-lot-mueang-ubon-example.md`
- `src/content/examples/oppo-vivo-upgrade-phone-example.md`
- `src/content/examples/ps5-rog-ally-secondhand-ubon-example.md`
- `src/content/examples/samsung-galaxy-s-ultra-warin-example.md`
- `src/content/examples/sony-camera-with-lens-ubon-example.md`

Modified files:

- `src/content/areas/ubon-university.md`
- `src/content/blog/camera-shutter-count.md`
- `src/content/blog/check-ipad-battery.md`
- `src/content/blog/prepare-iphone-for-sale.md`
- `src/content/blog/sell-broken-phone.md`
- `src/content/blog/sell-camera-lenses.md`
- `src/content/blog/sell-speaker-jbl-marshall.md`
- `src/content/examples/ipad-pro-ubon-university-example.md`
- `src/content/examples/iphone-15-pro-max-mueang-ubon-example.md`
- `src/content/model-services/iphone-14-pro-max.md`
- `src/content/model-services/iphone-15-pro-max.md`
- `src/content/services/apple-ubon.md`
- `src/content/services/b2b-lot-ubon.md`
- `src/content/services/camera-ubon.md`
- `src/content/services/gadget-ubon.md`
- `src/content/services/game-console-ubon.md`
- `src/content/services/ipad-ubon.md`
- `src/content/services/iphone-ubon.md`
- `src/content/services/macbook-ubon.md`
- `src/content/services/pc-corporate-ubon.md`
- `src/content/services/pc-gaming-ubon.md`
- `src/content/services/smartphone-ubon.md`
- `src/content/services/smartwatch-ubon.md`
- `src/content/services/speaker-ubon.md`
- `src/content/services/ssd-ubon.md`
- `src/content/services/trade-in-ubon.md`
- `src/content/services/tv-electronics-ubon.md`

Pre-existing unrelated working tree note:

- `src/components/SEO.astro` was already modified before this batch and was not edited in this task.

## 10. Remaining Risks

- The new pages are example-only content, not real case evidence. Future real case pages should only be published with documented consent, anonymized evidence, and no personal data.
- Existing `updates` pages still use "เคสจริง" positioning from the prior site pattern. This batch did not rewrite the updates collection because the requested scope focused on example pages and money-page links.

## 11. Recommended Next Batch

Batch 12 should focus on evidence-ready E-E-A-T assets: anonymized proof guidelines, photo redaction rules, a real-case publication checklist, and optional schema refinement for `examples` so the extra proof metadata is typed in `src/content.config.ts`.
