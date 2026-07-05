# รายงานผลการดำเนินการ Batch 2: Ubon University / Student Intent Cluster — รับซื้ออุบล.com

รายงานนี้จัดทำขึ้นโดย Senior Thai Local SEO Strategist และ Astro Content Developer เพื่อรายงานผลการสร้างหน้า Local Money Page และวางแผนโครงสร้างลิงก์สำหรับพื้นที่มหาวิทยาลัยอุบลราชธานี (ม.อุบล)

---

## 1. Executive Summary

- **วัตถุประสงค์**: เพื่อรองรับเจตนาการค้นหา (Search Intent) ของกลุ่มนักศึกษาและบุคลากรในย่านมหาวิทยาลัยอุบลราชธานี ที่ต้องการขายหรือเทิร์นสินค้าไอทีมือสอง
- **ผลลัพธ์หลัก**:
  - สร้างหน้าแลนด์มาร์กใหม่: `/พื้นที่/ubon-university/` (ผ่าน Astro Content Collection)
  - เพิ่มลิงก์ทางเข้าบนหน้าสารบัญพื้นที่: `/พื้นที่/` ในหมวดแลนด์มาร์กพิเศษเพื่อไม่ให้ปะปนกับอำเภอหลัก
  - ดำเนินการเชื่อมลิงก์ภายใน (Internal Linking) จากบล็อกแนะนำเดิม เคสรีวิว และรายงานผลงานจริงที่เกี่ยวข้องกับ ม.อุบล
  - ปรับปรุงการเชื่อมโยงจากหน้ารับซื้อรายสินค้าของ ม.อุบล ได้แก่ `รับซื้อ iPad ม.อุบล` และ `รับซื้อ MacBook ม.อุบล` ให้ระบุ `relatedArea` และลิงก์กลับมายังหน้าแลนด์มาร์กนี้ เพื่อแบ่งแยก Intent และความแตกต่างให้เด่นชัด (ป้องกันปัญหา Keyword Cannibalization)
  - ดำเนินการสร้างระบบตรวจสอบความถูกต้อง (SEO QA) และผ่านผลการตรวจสอบ 100% ปราศจากหน้ารั่วไหลหรือ 404
  - หลีกเลี่ยงการใช้ข้อความโฆษณาเกินจริง (Claim Clean-up) เช่น "จ่ายเงินทันที", "อันดับ 1", "การันตี", "ดีที่สุด"

---

## 2. Page Created (หน้าเพจที่สร้างใหม่)

- **URL**: `/พื้นที่/ubon-university/`
- **ไฟล์เนื้อหา**: [ubon-university.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/areas/ubon-university.md)
- **คุณลักษณะทาง SEO**:
  - **Title Unique**: `รับซื้อ iPad MacBook Notebook iPhone มหาวิทยาลัยอุบลราชธานี (ม.อุบล)`
  - **Meta Description**: `ร้านรับซื้อ iPad, MacBook, iPhone, Notebook และสินค้าไอทีรอบมหาวิทยาลัยอุบลราชธานี (ม.อุบล) ส่งรูปประเมินราคาเบื้องต้นผ่าน LINE นัดตรวจเครื่องตามเงื่อนไขที่ตกลง` (ลบประโยคที่มีสิทธิ์ก่อความเสี่ยงในคำเคลมออกแล้ว)
  - **H1 Unique**: `รับซื้อ iPad MacBook Notebook iPhone มหาวิทยาลัยอุบลราชธานี`
  - **Canonical self**: `/พื้นที่/ubon-university/` (สร้างแบบไดนามิกผ่านโครงสร้าง `[district].astro`)
  - **Indexability**: ไม่มีแท็ก `noindex` และอยู่ใน sitemap โดยสมบูรณ์

---

## 3. Keyword Targets (คีย์เวิร์ดเป้าหมาย)

หน้านี้สร้างขึ้นเพื่อจับอันดับในคีย์เวิร์ดที่เป็นนักศึกษาและพื้นที่ ม.อุบล ดังนี้:
- `รับซื้อ iPad ม.อุบล` (เจาะจง Intent: iPad)
- `รับซื้อ MacBook ม.อุบล` (เจาะจง Intent: MacBook)
- `รับซื้อโน้ตบุ๊ก ม.อุบล` (เจาะจง Intent: Notebook)
- `รับซื้อ iPhone ม.อุบล` (เจาะจง Intent: iPhone)
- `รับซื้อสินค้าไอที นักศึกษาอุบล` (เจาะจง Intent: ภาพรวมไอทีของกลุ่มเป้าหมายนักศึกษา)

---

## 4. Internal Links Added (การเชื่อมโยงลิงก์ภายใน)

### การป้องกันคีย์เวิร์ดทับซ้อน (Keyword Cannibalization Mitigation):
เราได้วางโครงสร้างเจตนาการค้นหาและการเชื่อมโยงข้อมูลดังนี้เพื่อป้องกันการเลือกดัชนีผิดพลาดจาก Google:
1. **หน้าศูนย์กลาง ม.อุบล (`/พื้นที่/ubon-university/`)**: เน้นจับความต้องการปล่อยสินค้าไอทีแบบภาพรวมของนักศึกษา/หอพัก มีการลิงก์เชื่อมต่อไปยังหน้าเฉพาะทางรายสินค้าของ ม.อุบล
2. **หน้ารับซื้อ iPad ม.อุบล (`/บริการ/รับซื้อ-ipad-มหาวิทยาลัยอุบล/`)**: ปรับปรุงฟิลด์ `relatedArea` เป็น `/พื้นที่/ubon-university/` และเพิ่มลิงก์กลับมายังหน้าศูนย์กลาง เพื่อแสดงความสัมพันธ์ระดับย่อย (Service -> Area)
3. **หน้ารับซื้อ MacBook ม.อุบล (`/บริการ/รับซื้อ-macbook-มหาวิทยาลัยอุบล/`)**: ปรับปรุงฟิลด์ `relatedArea` เป็น `/พื้นที่/ubon-university/` และเพิ่มลิงก์กลับมายังหน้าศูนย์กลาง

### จากภายนอกเข้าสู่หน้า ม.อุบล:
1. **หน้าสารบัญพื้นที่หลัก**: [index.astro](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/pages/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88/index.astro) (เพิ่มหมวดหมู่พิเศษ "พื้นที่พิเศษและแลนด์มาร์กสำคัญ" ชี้มาที่ `/พื้นที่/ubon-university/`)
2. **บล็อกแนะนำการเตรียมตัวนักศึกษา**: [ubon-university-student-device-selling-guide.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/blog/ubon-university-student-device-selling-guide.md) (เพิ่มลิงก์แนะนำพื้นที่ในหมวดหน้าที่เกี่ยวข้อง)
3. **เคสตัวอย่างรับซื้อจริง (Update - Notebook ROG)**: [2026-03-notebook-ubon-university.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/updates/2026-03-notebook-ubon-university.md) (เพิ่มลิงก์บริบทในย่อหน้าสรุปตอนท้าย)
4. **เคสตัวอย่างรับซื้อจริง (Update - iPhone 13)**: [2025-11-iphone-13-mueang.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/updates/2025-11-iphone-13-mueang.md) (เพิ่มลิงก์บริบทท้ายผลงาน)
5. **เคสตัวอย่างประเมินราคา (Case Example - iPad Pro)**: [ipad-pro-ubon-university-example.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/examples/ipad-pro-ubon-university-example.md) (เพิ่มลิงก์ในส่วนของลิงก์ที่เกี่ยวข้อง)

---

## 5. Sitemap Status (สถานะ Sitemap)

- **ไฟล์ XML**: `dist/sitemap-0.xml`
- **การรวม**: URL `/พื้นที่/ubon-university/` ได้รับการจัดสร้างและบรรจุเข้าเป็นหนึ่งใน 171 URLs ของแผนผังไซต์แล้วโดยอัตโนมัติผ่านการตรวจพบไฟล์ markdown ใน Collection
- **ผลทดสอบ**: เป็นหน้า 200 OK และมีสถานะ Indexable (ไม่มีแท็ก noindex)

---

## 6. QA Results (ผลการทดสอบ QA)

การตรวจสอบสิทธิ์ความปลอดภัยเชิงโครงสร้าง:
1. **`npm run build`**: ผ่านเรียบร้อยดี (172 หน้าเสร็จสมบูรณ์)
2. **`npm run seo:qa`**: ผ่านเรียบร้อยดี (0 Errors, 0 Warnings)
3. **`node scripts/check-sitemap-urls.mjs`**: ผ่านเรียบร้อยดี (0 Errors — ยืนยันว่าไม่มีลิงก์ 404 หรือหน้าเปลี่ยนทิศทางหลุดไปใน sitemap)
4. **`node scripts/qa-home.mjs`**: ผ่านเรียบร้อยดี (0 Errors)

---

## 7. Files Changed (ไฟล์ที่มีการเปลี่ยนแปลง)

- **[ubon-university.md] [NEW]**: [ubon-university.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/areas/ubon-university.md)
- **[index.astro] [MODIFY]**: [index.astro](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/pages/%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88/index.astro)
- **[ubon-university-student-device-selling-guide.md] [MODIFY]**: [ubon-university-student-device-selling-guide.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/blog/ubon-university-student-device-selling-guide.md)
- **[2026-03-notebook-ubon-university.md] [MODIFY]**: [2026-03-notebook-ubon-university.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/updates/2026-03-notebook-ubon-university.md)
- **[2025-11-iphone-13-mueang.md] [MODIFY]**: [2025-11-iphone-13-mueang.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/updates/2025-11-iphone-13-mueang.md)
- **[ipad-pro-ubon-university-example.md] [MODIFY]**: [ipad-pro-ubon-university-example.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/examples/ipad-pro-ubon-university-example.md)
- **[รับซื้อ-ipad-มหาวิทยาลัยอุบล.md] [MODIFY]**: [รับซื้อ-ipad-มหาวิทยาลัยอุบล.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/services/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD-ipad-%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.md)
- **[รับซื้อ-macbook-มหาวิทยาลัยอุบล.md] [MODIFY]**: [รับซื้อ-macbook-มหาวิทยาลัยอุบล.md](file:///c:/Users/User/Desktop/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%80%E0%B8%88%E0%B8%84/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.com/src/content/services/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%8B%E0%B8%B7%E0%B9%89%E0%B8%AD-macbook-%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%AD%E0%B8%B8%E0%B8%9A%E0%B8%A5.md)

---

## 8. Remaining Risks (ความเสี่ยงที่คงเหลือ)

- **ความทับซ้อนกับหน้าหลักวารินชำราบ**: เพื่อไม่ให้บอทของกูเกิลสับสนหรือเกิด Thin Content หน้าของ ม.อุบล ได้เน้นย้ำถึงกลุ่ม "นักศึกษาและสเปกเครื่องสำหรับใช้เรียน" เป็นแกนหลักของการเขียนเนื้อหา ในขณะที่หน้าอำเภอวารินชำราบหลักจะมุ่งเน้นความเป็นอำเภอโดยรวม ตลาดสินค้า และเส้นทางการคมนาคม
- **การจัดทำดัชนีช่วงเริ่มต้น**: เนื่องจากหน้าเพิ่งจัดทำขึ้นใหม่ ต้องใช้การคลานจากกูเกิลบอทผ่านลิงก์บริบทที่เราสร้างเสริมไว้เพื่อเหนี่ยวนำอันดับและเร่งการดัชนี

---

## 9. Recommended Next Batch (คำแนะนำสำหรับกลุ่มคีย์เวิร์ดถัดไป)

- **คีย์เวิร์ดแนะนำสำหรับ Batch 3**: **B2B / Office Liquidation Cluster**
  - เน้นไปที่หน้า `/บริการ/รับซื้อคอมบริษัท-อุบล/` และ `/บริการ/รับซื้อคอมยกล็อต-อุบล/`
  - สร้างหน้าเพจย่อยเพื่อจับกลุ่มสำนักงาน/โรงเรียน/หน่วยงานราชการที่เตรียมโละทิ้งหรือประมูลของไอทีเก่าพร้อมๆ กัน
  - เพิ่มเนื้อหาและใบรับรองในเรื่อง **ความปลอดภัยของการลบข้อมูลส่วนบุคคลและข้อมูลลูกค้า (Secure Data Sanitization)** ซึ่งเป็นปัจจัยกระตุ้นการตัดสินใจของผู้ขายระดับองค์กร
