# Batch 12: Support Articles / Buyer Education Cluster Report

## 1. Executive Summary

Batch 12 สร้างและอัปเดตบทความ support เพื่อเสริม topical authority ของเว็บรับซื้อสินค้าไอทีมือสองในอุบล โดยใช้ collection เดิม `src/content/blog` และ route เดิม `/บทความ/` ไม่สร้าง content structure ใหม่

งานนี้สร้างบทความใหม่ 3 หน้า และอัปเดตบทความเดิม 7 หน้าเพื่อเลี่ยง duplicate content ตามข้อกำหนด "ห้ามสร้างบทความซ้ำ" พร้อมเพิ่ม internal links ไปยัง money pages สำคัญ เช่น iPhone, iPad, MacBook, Notebook, B2B, Camera, GPU, Game Console และหน้า ม.อุบล

## 2. Articles Created or Updated

Created:

- `/บทความ/ลบข้อมูลก่อนขาย-iphone-ipad-macbook/`
  - File: `src/content/blog/ลบข้อมูลก่อนขาย-iphone-ipad-macbook.md`
- `/บทความ/เช็ก-cycle-count-macbook-ก่อนขาย/`
  - File: `src/content/blog/เช็ก-cycle-count-macbook-ก่อนขาย.md`
- `/บทความ/วิธีถ่ายรูปสินค้าไอทีส่งประเมินราคา/`
  - File: `src/content/blog/วิธีถ่ายรูปสินค้าไอทีส่งประเมินราคา.md`

Updated existing articles to avoid duplicate intent:

- Battery Health iPhone/iPad topic
  - Existing URL kept: `/บทความ/check-ipad-battery/`
  - File: `src/content/blog/check-ipad-battery.md`
- Notebook spec check topic
  - Existing URL kept: `/บทความ/check-notebook-before-selling/`
  - File: `src/content/blog/check-notebook-before-selling.md`
- Corporate PC preparation topic
  - Existing URL kept: `/บทความ/เตรียมขายคอมบริษัทเก่า-ลบข้อมูลอย่างไร/`
  - File: `src/content/blog/prepare-sell-corporate-pc-data-deletion.md`
- Camera second-hand check topic
  - Existing URL kept: `/บทความ/check-mirrorless-camera-before-selling/`
  - File: `src/content/blog/check-mirrorless-camera-before-selling.md`
- GPU second-hand preparation topic
  - Existing URL kept: `/บทความ/gpu-second-hand/`
  - File: `src/content/blog/gpu-second-hand.md`
- PS5 / Nintendo Switch preparation topic
  - Existing URL kept: `/บทความ/check-game-console-before-selling/`
  - File: `src/content/blog/check-game-console-before-selling.md`
- Ubon University student device topic
  - Existing URL kept: `/บทความ/ubon-university-student-device-selling-guide/`
  - File: `src/content/blog/ubon-university-student-device-selling-guide.md`

## 3. Keyword Targets

- ลบข้อมูลก่อนขาย iPhone / iPad / MacBook
- เช็ก Battery Health iPhone / iPad ก่อนขาย
- เช็ก Cycle Count MacBook ก่อนขาย
- เช็กสเปกโน๊ตบุ๊คก่อนขาย
- เตรียมขายคอมบริษัทเก่าในอุบล
- วิธีถ่ายรูปสินค้าไอทีส่งประเมินราคา
- ขายกล้องมือสองต้องเช็กอะไร
- ขายการ์ดจอมือสอง
- ขาย PS5 / Nintendo Switch มือสอง
- ขาย iPad / MacBook ม.อุบล

## 4. Internal Links Added

Added contextual links from support articles to:

- iPhone hub and model pages
- iPad hub and iPad model pages
- MacBook hub and MacBook M-series / battery page
- Notebook, PC, and notebook lot pages
- Corporate PC, B2B lot, and office PC pages
- Camera hub, Sony, Canon, Fujifilm, Nikon, and lens pages
- GPU, RTX, and PC game cafe pages
- Game console, PS5, Nintendo Switch, and Switch OLED pages
- Ubon University area page

## 5. Money Pages Supported

- `/บริการ/รับซื้อ-iphone-อุบล/`
- `/บริการ/รับซื้อ-ipad-อุบล/`
- `/บริการ/รับซื้อ-macbook-อุบล/`
- `/บริการ/รับซื้อโน้ตบุ๊ก-อุบล/`
- `/บริการ/รับซื้อคอมพิวเตอร์-อุบล/`
- `/บริการ/รับซื้อโน้ตบุ๊กยกล็อต-อุบล/`
- `/บริการ/รับซื้อคอมบริษัท-อุบล/`
- `/บริการ/รับซื้อคอมยกล็อต-อุบล/`
- `/บริการ/รับซื้อคอมสำนักงาน-อุบล/`
- `/บริการ/รับซื้อกล้อง-อุบล/`
- `/บริการ/รับซื้อการ์ดจอ-อุบล/`
- `/บริการ/รับซื้อ-เครื่องเกม-อุบล/`
- `/พื้นที่/ubon-university/`

## 6. Claim Risk Cleanup

Ran claim-risk scan across `src/content` for:

`อันดับ 1|ดีที่สุด|ราคาสูงสุด|ให้ราคาสูง|รับทุกสภาพ|100%|การันตี|จ่ายทันที|จ่ายทันทีทุกเคส|ลบข้อมูลปลอดภัย 100%|กู้คืนไม่ได้แน่นอน|รับแน่นอนทุกอาการ`

Updated `src/content/services/notebook-broken-ubon.md` to soften a phrase that matched the "ราคาสูง" pattern. Final scan returned no matches in `src/content`.

## 7. Sitemap Status

`npm run build` completed successfully and generated sitemap output. Sitemap QA loaded 227 URLs. Astro built 228 pages; the difference is expected because generated pages such as 404 are built but not listed as indexable URLs.

## 8. QA Results

- `npm run build`: Passed, 228 pages built
- `npm run seo:qa`: Passed, 0 errors, 0 warnings
- `node scripts/check-sitemap-urls.mjs`: Passed, 0 errors
- `node scripts/qa-home.mjs`: Passed, `allOk: true`
- Claim-risk scan in `src/content`: Passed, no matches

## 9. Files Changed

New files:

- `src/content/blog/ลบข้อมูลก่อนขาย-iphone-ipad-macbook.md`
- `src/content/blog/เช็ก-cycle-count-macbook-ก่อนขาย.md`
- `src/content/blog/วิธีถ่ายรูปสินค้าไอทีส่งประเมินราคา.md`
- `reports/batch-12-support-articles-eeat-report.md`

Modified files:

- `src/content/blog/check-game-console-before-selling.md`
- `src/content/blog/check-ipad-battery.md`
- `src/content/blog/check-mirrorless-camera-before-selling.md`
- `src/content/blog/check-notebook-before-selling.md`
- `src/content/blog/gpu-second-hand.md`
- `src/content/blog/prepare-sell-corporate-pc-data-deletion.md`
- `src/content/blog/ubon-university-student-device-selling-guide.md`
- `src/content/services/notebook-broken-ubon.md`

## 10. Remaining Risks

- Some requested target URLs intentionally map to existing articles with older slugs because matching support intent already existed. This avoids duplicate articles and follows the "ห้ามเปลี่ยน slug เดิมโดยไม่จำเป็น" rule.
- Existing older blog pages outside the 10 target topics were not fully rewritten in this batch, beyond the claim-risk scan and one cleanup.

## 11. Recommended Next Batch

Batch 13 should focus on support-article internal link refinement and content hub UX: add related-article modules, connect support articles from relevant money pages, and create a lightweight editorial checklist for future buyer education content.
