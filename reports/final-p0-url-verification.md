# รายงานการตรวจสอบความถูกต้องของ URL ระดับ P0 (Final P0 URL Verification Report)

รายงานนี้แสดงผลการตรวจสอบความถูกต้องเชิงลึกของ URL ระดับ P0 ก่อนดำเนินการ Commit/Deploy เพื่อแก้ไขปัญหา GSC Coverage และความพร้อมในการจัดทำดัชนี (Indexability Check) ของเว็บไซต์ **รับซื้ออุบล.com**

---

## 1. ตารางตรวจสอบความถูกต้องของ URL (P0 Verification Table)

| URL | current status | final destination | canonical | in sitemap หรือไม่ | action taken | pass/fail |
| :--- | :--- | :--- | :--- | :---: | :--- | :---: |
| `/บริการ/รับซื้อ-macbook/macbook-pro-m2/` | `301 Redirect` | `/บริการ/รับซื้อ-macbook-อุบล/macbook-pro-m2/` | `https://xn--c3c3ab7an0ca2a0dm8p.com/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD-macbook-%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5/macbook-pro-m2/` | **No** (เฉพาะหน้าปลายทางเท่านั้นที่มีใน sitemap) | ตรวจสอบกฎการเปลี่ยนทิศทางใน `vercel.json` และยืนยันการมีอยู่จริงของหน้าปลายทางที่มี canonical self-referencing | **Pass** |
| `/พื้นที่/ม่วงสามสิบ/` | `301 Redirect` | `/พื้นที่/muang-sam-sip/` | `https://xn--c3c3ab7an0ca2a0dm8p.com/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88/muang-sam-sip/` | **No** | ตรวจสอบกฎการเปลี่ยนทิศทาง, ไม่มีไฟล์ HTML ตกค้าง, ลบออกจาก sitemap, และตรวจสอบว่าไม่มีลิงก์ภายในชี้มาที่เก่า | **Pass** |
| `/พื้นที่/วารินชำราบ/` | `301 Redirect` | `/พื้นที่/warin-chamrap/` | `https://xn--c3c3ab7an0ca2a0dm8p.com/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88/warin-chamrap/` | **No** | ตรวจสอบการเปลี่ยนทิศทาง, ยืนยันว่าหน้าปลายทางไม่มี meta robots noindex หลงเหลือ และไม่มีหน้าวารินชำราบภาษาไทยใน sitemap | **Pass** |
| `/บริการ/รับซื้อโทรศัพท์-อุบล/` | `301 Redirect` | `/บริการ/รับซื้อมือถือ-อุบล/` | `https://xn--c3c3ab7an0ca2a0dm8p.com/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%96%E0%B8%B7%E0%B8%AD-%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5/` | **No** | ตั้งค่า 301 เปลี่ยนทิศทางเข้าหน้าหลักมือถือ เพื่อลดโอกาสเกิด thin/duplicate content กับรุ่นย่อย | **Pass** |

---

## 2. รายงานการตรวจสอบความถูกต้องของแผนผังไซต์ (Sitemap Integrity Report)

ผลจากการรันการตรวจสอบผ่านสคริปต์อัตโนมัติ `scripts/check-sitemap-urls.mjs`, `scripts/seo-sitemap-qa.mjs` และ `scripts/qa-home.mjs` หลังการ Build:

- **จำนวน URL ใน Sitemap**: 155 URL (ตรงตามเป้าหมายโครงสร้างลิงก์ภายในที่กำหนดไว้)
- **ไม่พบหน้า 404 (0 Errors)**: ทุก URL ใน sitemap มีไฟล์ HTML รองรับอยู่จริงจากการ Build
- **ไม่พบการ Redirect ซ้ำซ้อน (0 Errors)**: ไม่มี URL ใน sitemap ที่ชนกับ redirect rules ใน `vercel.json`
- **ไม่พบหน้า Noindex ใน Sitemap (0 Errors)**: ไม่มีหน้าใดที่ระบุ meta robots noindex ตกค้างใน sitemap
- **ค่า Canonical ตรงเป้าหมาย (0 Errors)**: ทุกหน้าที่ระบุใน sitemap มีแท็ก `<link rel="canonical">` ชี้กลับมาที่ตัวเองอย่างถูกต้อง (Self-referential canonicals)
- **ไม่มี URL เก่าภาษาไทยในกลุ่มพื้นที่ (0 Errors)**: ไม่มีชื่ออำเภอภาษาไทยในโฟลเดอร์ `/พื้นที่/` หลุดรอดเข้าไปใน sitemap
- **ไม่มี URL แทรกแซงของ iPad (0 Errors)**: ไม่มี alias หรือลิงก์ซ้ำซ้อนของ iPad หลุดรอดเข้า sitemap

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
4. รันสคริปต์ตรวจสอบหน้าแรก (Home Page Quality Check):
   ```bash
   node scripts/qa-home.mjs
   ```
   *ผลลัพธ์*: ผ่านการทดสอบทั้งหมด (allOk: true)

