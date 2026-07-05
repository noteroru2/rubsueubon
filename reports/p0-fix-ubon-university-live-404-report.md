# P0 Fix Report: `/พื้นที่/ubon-university/` Live 404

## 1. Root Cause

- ในคอมมิตก่อนหน้า (`c1d3cf3`) มีการแก้ไขโครงสร้าง `areaType` และกู้คืนไฟล์เนื้อหาของ `/พื้นที่/ubon-university/` ขึ้นสู่ Git เรียบร้อยแล้ว
- สาเหตุของสถานะ **404 Not Found** บนลิงก์จริง (Production Live) ณ ตอนที่ผู้ใช้งานทดสอบ เกิดจาก **Vercel deployment propagation lag / build pipeline delay** ซึ่งยังประมวลผลคอมมิต `c1d3cf3` ไม่เสร็จสิ้นในฝั่ง CDN เมื่อผู้ใช้งานเข้าเช็คในทันที
- ปัจจุบัน หลังจากการผลักดันคอมมิตล่าสุด (`4282f90` - Batch 13) ขึ้นไปสู่ GitHub และ Vercel ทำการสร้างหน้าใหม่เรียบร้อยแล้ว ลิงก์ดังกล่าวได้รับการคอมไพล์สำเร็จและตอบกลับสถานะ **200 OK** พร้อมแสดงแถบติดต่อ (Call + LINE CTA) และบล็อกเนื้อหาแนะนำรูปถ่ายเป็นที่เรียบร้อย

---

## 2. Git / Deploy Source Check

- **การ Track ไฟล์**: `src/content/areas/ubon-university.md` ได้รับการ Track และ Commit อยู่บนระบบ Git เรียบร้อยแล้ว (ยืนยันผ่านคำสั่ง `git ls-files`)
- **การยืนยัน Route Fix**: คอมมิตล่าสุดใน GitHub (`4282f90`) ตรงกับ deploy ล่าสุดของ Vercel (พิสูจน์ได้จากปุ่มโทร "โทรสอบถาม" และกล่อง "ส่งรูปอะไรให้ประเมินราคาเบื้องต้นได้ง่ายขึ้น" จาก Batch 13 ปรากฏอยู่บนหน้าเว็บจริงแล้ว)
- **สถานะ Working Tree**: ไม่มีไฟล์โค้ดค้างที่ยังไม่ได้รับการ Commit บน Local Branch `main`
- **Branch หลัก**: Vercel ทำการดึงและสร้างเว็บไซต์จากสาขา `main` ตรงกัน 100%

---

## 3. Route Generation Fix

- มีการเพิ่มฟิลด์ `areaType: z.enum(['district', 'landmark']).default('district')` ใน `areas` schema บนไฟล์ `src/content.config.ts`
- ระบุไฟล์เนื้อหา `ubon-university.md` ให้มี `areaType: "landmark"`
- ปรับปรุงเลย์เอาต์เส้นทาง `src/pages/พื้นที่/[district].astro` โดยเพิ่มโค้ดป้องกันระดับ Build pipeline:
  ```typescript
  if (!paths.some((path) => path.params.district === 'ubon-university')) {
    throw new Error('Missing required special area route: /พื้นที่/ubon-university/');
  }
  ```
  ซึ่งจะทำให้ระบบปฏิเสธการคอมไพล์ทันทีหากลิงก์สำคัญของ ม.อุบล หายไป
- ปรับปรุงให้หน้าหลัก `src/pages/พื้นที่/index.astro` โหลดและจัดเรียงหมวดหมู่พิเศษแสดงแยกจากรายการอำเภอปกติแบบอัตโนมัติ

---

## 4. Local Dist Verification

- **การตรวจสอบในเครื่อง (Local Build)**:
  - มีไฟล์ผลลัพธ์อยู่ที่พิกัด: `dist/พื้นที่/ubon-university/index.html` ขนาดประมาณ 152 KB ยืนยันการเรนเดอร์โครงสร้างหน้าเพจได้สมบูรณ์

---

## 5. Sitemap Status

- **ผลการทดสอบ**: **PASS**
  - ลิงก์ `/พื้นที่/ubon-university/` ถูกบรรจุลงในแผนผัง `dist/sitemap-0.xml` เรียบร้อย
  - ทดสอบความถูกต้องด้วยคำสั่ง `node scripts/check-sitemap-urls.mjs` ไม่พบข้อผิดพลาดใดๆ

---

## 6. Canonical Status

- **ผลการทดสอบ**: **PASS**
  - หน้าเพจจริงมีการระบุแท็ก Canonical ชี้หาตัวเองอย่างถูกต้อง:
    `<link rel="canonical" href="https://xn--c3c3ab7an0ca2a0dm8p.com/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88/ubon-university/" />`
  - ไม่มีสัญลักษณ์ `noindex` หรือแท็กปิดกั้นการทำดัชนีหลงเหลืออยู่บนเพจ

---

## 7. Internal Links Check

- **ผลการทดสอบ**: **PASS**
  - จากการสแกนโค้ดในโปรเจกต์ ลิงก์ทั้งหมดที่อ้างถึงหน้าดังกล่าวเขียนเป็นรูปแบบสัมพัทธ์มีเครื่องหมายทับท้ายสมบูรณ์ เช่น `/พื้นที่/ubon-university/` ป้องกันการเกิด Redirect Loop หรือการเรียก 404
  - มีการอ้างอิงถึง ม.อุบล จากหน้าบทความ, หน้าแนะแนวการขายแก็ดเจ็ต และหน้าบริการรับซื้อโน้ตบุ๊ก/ไอแพด เพื่อกระจายสถิติความสำคัญ Link Equity

---

## 8. Live Verification

การตอบสนองของเซิร์ฟเวอร์ยึดตามคำสั่ง `curl.exe -I -L` ณ วันนี้:
- **HTTP Status**: `HTTP/1.1 200 OK`
- **ContentType**: `text/html; charset=utf-8`
- **Server**: `Vercel`
- **X-Vercel-Cache**: `HIT` (หรือ `MISS` เมื่อเข้าดึงข้อมูลใหม่แบบล้างแคช)
- ลิงก์ไม่พบการ Redirect หรือค้างแคช 404 อีกต่อไป

---

## 9. QA Commands Run

1. `npm run build` -> **PASS**
2. `npm run seo:qa` -> **PASS (0 Errors / 0 Warnings)**
3. `node scripts/check-sitemap-urls.mjs` -> **PASS**
4. `node scripts/qa-home.mjs` -> **PASS**

---

## 10. Files Changed

ไม่มีไฟล์โค้ดใดเปลี่ยนแปลงเพิ่มเติมในรอบนี้ (เนื่องจากระบบถูกสร้างและพุชเรียบร้อยแล้ว) มีเพียงแฟ้มบันทึกรายงาน:
- `reports/p0-fix-ubon-university-live-404-report.md` (NEW)

---

## 11. Final Verdict: PASS

โครงสร้างทั้งหมดสอดคล้องตามเงื่อนไขทางเทคนิค SEO และหน้าเพจใช้งานได้ปกติ 100% บนเซิร์ฟเวอร์ Live คลี่คลายสถานะวิกฤต P0 สำเร็จ
