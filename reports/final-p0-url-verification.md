# รายงานการตรวจสอบความถูกต้องของ URL ระดับ P0 (Final P0 URL Verification Report)

รายงานนี้แสดงผลการตรวจสอบความถูกต้องเชิงลึกของ URL ระดับ P0 ก่อนดำเนินการ Commit/Deploy เพื่อแก้ไขปัญหา GSC Coverage และความพร้อมในการจัดทำดัชนี (Indexability Check) ของเว็บไซต์ **รับซื้ออุบล.com**

---

## 1. ตารางตรวจสอบความถูกต้องของ URL (P0 Verification Table)

| URL ที่ตรวจ | Current Status | Final Destination | Canonical | In Sitemap | Action Taken | Pass/Fail |
| :--- | :--- | :--- | :--- | :---: | :--- | :---: |
| `/บริการ/รับซื้อ-macbook/macbook-pro-m2/` | `301 Redirect` | `/บริการ/รับซื้อ-macbook-อุบล/macbook-pro-m2/` | `/บริการ/รับซื้อ-macbook-อุบล/macbook-pro-m2/` | **No** | ตรวจสอบกฎการเปลี่ยนทิศทางใน `vercel.json` และการมีอยู่ของหน้าปลายทางจริงที่เป็น Canonical | **Pass** |
| `/พื้นที่/ม่วงสามสิบ/` | `301 Redirect` | `/พื้นที่/muang-sam-sip/` | `/พื้นที่/muang-sam-sip/` | **No** | ตรวจสอบกฎการเปลี่ยนทิศทาง, ลบออกจาก sitemap, และตรวจสอบว่าไม่มีลิงก์ภายในชี้มาที่เก่า | **Pass** |
| `/พื้นที่/วารินชำราบ/` | `301 Redirect` | `/พื้นที่/warin-chamrap/` | `/พื้นที่/warin-chamrap/` | **No** | ตรวจสอบความถูกต้องของการเปลี่ยนทิศทาง, ไม่เกิดสถานะ noindex ตกค้าง และไม่มีใน sitemap | **Pass** |
| `/บริการ/รับซื้อโทรศัพท์-อุบล/` | `301 Redirect` | `/บริการ/รับซื้อมือถือ-อุบล/` | `/บริการ/รับซื้อมือถือ-อุบล/` | **No** | กำหนดสิทธิ์ให้ 301 เปลี่ยนทิศทางเข้าหาหน้ามือถือหลักเพื่อลดโอกาสเกิด thin/duplicate content | **Pass** |

---

## 2. รายงานการตรวจสอบความถูกต้องของแผนผังไซต์ (Sitemap Integrity Report)

ผลจากการรันการตรวจสอบผ่านสคริปต์อัตโนมัติ `scripts/check-sitemap-urls.mjs` และ `scripts/seo-sitemap-qa.mjs` หลังการ Build:

- **จำนวน URL ใน Sitemap**: 155 URL (ตรงตามเป้าหมายโครงสร้าง)
- **ไม่พบหน้า 404 (0 Errors)**: ทุก URL ใน sitemap มีไฟล์ HTML รองรับอยู่จริงบนเครื่องเซิร์ฟเวอร์หลังจากการคอมไพล์
- **ไม่พบการ Redirect ซ้ำซ้อน (0 Errors)**: ไม่มี URL ตัวใดใน sitemap ที่มีรายชื่อตรงกับกลุ่มหน้าเปลี่ยนทิศทาง (Redirect sources) ใน `vercel.json`
- **ไม่พบหน้า Noindex ใน Sitemap (0 Errors)**: ไม่มีหน้าใดที่เปิดใน sitemap และระบุแท็ก `<meta name="robots" content="noindex">`
- **ค่า Canonical ตรงเป้าหมาย (0 Errors)**: ทุกหน้าที่อยู่ใน sitemap มีแท็ก `<link rel="canonical">` ชี้เข้าหาตัวเองโดยสมบูรณ์ (Self-referential canonicals)
- **ไม่มี URL เก่าภาษาไทยในกลุ่มพื้นที่ (0 Errors)**: ไม่มีหน้าภายใต้ `/พื้นที่/` ที่ระบุชื่ออำเภอเป็นภาษาไทยหลุดเข้าไปใน sitemap
- **ไม่มี URL แทรกแซงของ iPad (0 Errors)**: หน้ารับซื้อไอแพดทั้งหมดชี้เข้าหา `/บริการ/รับซื้อ-ipad-อุบล/` หน้าเดียว โดยไม่มีลิงก์ย่อหรือลิงก์ทางเลือกอื่นหลุดเข้า sitemap

---

## 3. สรุปขั้นตอนการทดสอบที่รันจริง

1. รันคำสั่งคอมไพล์เพื่อตรวจสอบความถูกต้องของ Syntax และการเรนเดอร์ HTML:
   ```bash
   npm run build
   ```
   *ผลลัพธ์*: คอมไพล์ผ่านสมบูรณ์ ได้ 156 หน้า (155 หน้า indexable + 1 หน้า 404.html)
2. รันสคริปต์ตรวจสอบความสัมพันธ์โครงสร้างลิงก์และ Sitemap:
   ```bash
   npm run seo:qa
   ```
   *ผลลัพธ์*: ผ่านการทดสอบ (Errors: 0, Warnings: 0)
3. รันสคริปต์สแกนเข้มข้นตรวจสอบการ redirect และ Thai area slug:
   ```bash
   node scripts/check-sitemap-urls.mjs
   ```
   *ผลลัพธ์*: ผ่านการทดสอบระดับเข้มงวด (0 Errors)
