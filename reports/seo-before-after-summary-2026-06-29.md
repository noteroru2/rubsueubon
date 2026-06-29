# รายงานสรุป SEO ก่อน-หลังแก้ไข

วันที่ตรวจล่าสุด: 2026-06-29
เว็บไซต์: รับซื้ออุบล.com
ขอบเขตงาน: ตรวจ broken links, รูปภาพที่อ้างอิงหาย, โครงสร้าง SEO หลัก, และแก้ไขให้พร้อมใช้งานจริง

## สรุปผู้บริหาร

ก่อนแก้ เว็บไซต์มีปัญหาที่กระทบทั้งประสบการณ์ใช้งานและ SEO เชิงเทคนิค ได้แก่ ลิงก์ภายในเสียหลายจุด, รูปภาพอ้างอิงหายจำนวนมาก, และบางหน้ามีโครงสร้างหัวข้อซ้ำกัน

หลังแก้ เว็บไซต์ผ่านการตรวจรอบใหม่ครบทุกหน้าที่ใช้งานจริง และหน้า 404 ถูกเก็บรายละเอียดเพิ่มเติมจนผ่านเกณฑ์ตรวจทั้งหมด

คะแนนสรุป:

| ช่วงตรวจ | คะแนน |
| --- | ---: |
| ก่อนแก้ | 76/100 |
| หลังแก้รอบแรก | 99/100 |
| หลังเก็บหน้า 404 | 100/100 |

## สิ่งที่พบก่อนแก้

| รายการตรวจ | ผลก่อนแก้ |
| --- | ---: |
| Broken internal links | 13 |
| รูปภาพอ้างอิงหาย | 30 |
| Missing title | 0 |
| Missing meta description | 0 |
| Missing canonical | 1 |
| Canonical path mismatch | 1 |
| Missing JSON-LD | 1 |
| Missing H1 | 0 |
| Duplicate H1 | 8 |

ปัญหาหลักที่พบ:

- ลิงก์บางหน้าชี้ไปยัง slug เก่าหรือ path ที่ไม่มีอยู่จริง
- หน้าบางชุดอ้างอิงไฟล์ภาพที่ยังไม่มีใน `public/images/services`
- หลายหน้าในกลุ่ม example/service มี H1 ซ้ำ ทำให้โครงสร้างหัวข้อหลักไม่สะอาด
- หน้า `404` ยังไม่มี canonical และ structured data

## สิ่งที่แก้ไข

### 1. แก้ broken links

- แก้ URL ที่อ้างถึงรุ่น iPhone, iPad, MacBook ให้ตรงกับ route ที่ build จริง
- ปรับ slug ของหน้า notebook broken ให้ตรงกันทั้งระบบ
- แก้ลิงก์ในบทความและหน้าบริการที่ชี้ไป path เก่า

ไฟล์หลักที่แก้:

- `src/config/home-hub.ts`
- `src/config/urls.ts`
- `src/content/blog/check-notebook-before-selling.md`
- กลุ่มไฟล์ใน `src/content/services/` ที่อ้างอิงหน้า notebook broken และ iPad

### 2. เติมรูปภาพที่หายให้ครบ

- สร้างภาพใหม่ตาม intent ของหน้า เช่น MacBook, notebook เสีย, iPhone จอแตก, iPad/MacBook สำหรับโซนมหาวิทยาลัย, Nintendo Switch, PS5, Samsung, กล้องแต่ละแบรนด์, เลนส์ และหน้าพื้นที่
- จัดชุดไฟล์ภาพสำรองให้กับหน้าที่ต้องการเพียงภาพ intent ใกล้เคียง เช่น notebook, PC parts, speaker, camera area page
- เติมไฟล์ภาพที่อ้างอิงจริงใน `public/images/services/` จนครบ

ผลลัพธ์:

- รูปภาพอ้างอิงหายจาก 30 เหลือ 0

### 3. ปรับโครงสร้าง SEO

- แก้หน้า content/example ที่มี H1 ซ้ำให้เหลือหัวข้อหลักเพียงหนึ่งรายการ
- เก็บ canonical ของหน้า `404` ให้เรนเดอร์ได้แม้อยู่ในสถานะ noindex
- เพิ่ม JSON-LD ให้หน้า `404` เพื่อให้ผ่านเกณฑ์ตรวจโครงสร้างครบชุด

ไฟล์หลักที่แก้:

- `src/components/SEO.astro`
- `src/pages/404.astro`
- กลุ่มไฟล์ example/service ที่มี H1 ซ้ำ

## ผลหลังแก้

ผลตรวจหลังแก้จากการ build และสแกนไฟล์ `dist` ทั้งเว็บจำนวน 156 หน้า:

| รายการตรวจ | ผลหลังแก้ |
| --- | ---: |
| Broken internal links | 0 |
| รูปภาพอ้างอิงหาย | 0 |
| Missing title | 0 |
| Missing meta description | 0 |
| Missing canonical | 0 |
| Canonical path mismatch | 0 |
| Missing JSON-LD | 0 |
| Missing H1 | 0 |
| Duplicate H1 | 0 |

คะแนนสรุปหลังแก้: `100/100`

## วิธีตรวจ

- Build เว็บไซต์แบบ static ใหม่ทั้งโปรเจกต์
- Crawl ไฟล์ใน `dist` เพื่อตรวจลิงก์ภายใน, asset references, title, description, canonical, JSON-LD และจำนวน H1
- ตรวจซ้ำหลังแก้ทุกจุดจนผลลัพธ์เป็นศูนย์ทั้งหมด

## หมายเหตุสำหรับทีม SEO / ลูกค้า

- รายงานนี้เป็นผลตรวจเชิงเทคนิคจากไฟล์เว็บไซต์ที่ build แล้ว
- คะแนนนี้ไม่ใช่ Google Lighthouse แต่เป็นคะแนน checklist SEO เชิงโครงสร้างและความพร้อมในการ crawl
- หากต้องการรอบถัดไป แนะนำทำเพิ่มเรื่อง Core Web Vitals, ภาพ OG เฉพาะหน้า, และ internal linking เชิง conversion
