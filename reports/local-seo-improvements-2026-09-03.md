# Local SEO / AEO / GEO — ปรับปรุง 3 กันยายน 2026

สถานะ: เผยแพร่บนรับซื้ออุบล.com แล้ว วันที่ 3 กันยายน 2026 และตรวจเว็บจริงผ่าน ผลด้านล่างแยกการตรวจ build กับผลหลังเผยแพร่ ไม่ใช่ผลอันดับ Google

## ข้อมูลร้าน

- ร้านอำพล เทรดดิ้ง: 740/8 ถนนชยางกูร ตำบลในเมือง อำเภอเมืองอุบลราชธานี จังหวัดอุบลราชธานี 34000
- จุดสังเกต: ติดปากซอยชยางกูร 32
- Maps: https://maps.app.goo.gl/pdpEaJRoV9F4bAng9
- Facebook: https://www.facebook.com/Amphontrading
- เวลาเปิดร้าน 09:00–19:30; ตอบ LINE 24 ชั่วโมง ตามข้อมูลเจ้าของร้าน
- วันเปิดทุกวันคงจากข้อมูลเดิม หากมีวันหยุดประจำให้แก้ใน business-profile.json
- พิกัดสถานที่ 15.2664215, 104.844358 มาจากสถานที่ปลายทางของลิงก์ Maps ที่เจ้าของส่ง
- โทร 095-547-9408, LINE @buyhub และผู้ดำเนินการ WINNER IT คงตามข้อมูลเดิมในโปรเจกต์
- เข้ามาหน้าร้านได้; นัดรับต่างอำเภอให้สอบถามพื้นที่และสินค้า ยังไม่ระบุค่าบริการ ยอดขั้นต่ำ หรือรับประกันเวลา

## สิ่งที่ปรับ

1. รวมข้อมูลร้านใน `src/config/business-profile.json` ให้หน้าเว็บ, schema และไฟล์ข้อมูลสำหรับ AI ใช้ข้อมูลตรงกัน
2. เพิ่มที่อยู่เต็ม, landmark, Maps, Facebook และแยกเวลาหน้าร้านกับ LINE ในหน้าติดต่อ หน้าเกี่ยวกับเรา ส่วนติดต่อหน้าแรก และแถบข้อมูลร้าน
3. เพิ่ม streetAddress, hasMap, geo และ sameAs ใน LocalBusiness หลัก โดยหน้าพื้นที่อ้างร้านเดียวกัน ไม่มีการสร้างสาขาหรือพิกัดปลอมรายอำเภอ
4. ปรับคำตอบสั้นและ FAQ บริการให้ตอบเรื่องสถานที่ การเตรียมสินค้า การประเมิน และนัดรับในอุบลชัดเจนขึ้น ถอนคำรับประกันประเมินภายใน 5 นาทีจากส่วนที่แก้ และระบุว่าราคาสุดท้ายยืนยันหลังตรวจสินค้า
5. ปรับ title/description กล้อง Sony 5 รุ่นให้มีอุบล เชื่อมหน้ารับซื้อ MacBook Intel จากหน้าหลัก ปรับคำตอบและ description ของบริการมือถือ/iPhone/iPad
6. ปรับข้อความที่เรียกตัวอย่างสมมติว่ารีวิวให้ชัดเจน และแทนศัพท์งาน SEO ที่หลุดในเนื้อหาด้วยคำอธิบายที่ลูกค้าอ่านเข้าใจ
7. แก้ permanent redirect ใน vercel.json ให้ครอบคลุม URL ลงท้ายด้วย / และรูปแบบภาษาไทยเข้ารหัส ตรวจเว็บจริงแล้ว 72 เส้นทางส่งต่อถาวรไปปลายทางถูกต้อง โดยคง Astro static redirect เป็น fallback
8. ให้ build สร้าง llms.txt และ llms-full.txt หลัง sitemap เสมอ เขียนทั้ง public และ dist และรวม URL รูปแบบเดียวไม่ซ้ำ ครบ 229 หน้า ไฟล์เหล่านี้เป็นข้อมูลเสริม ไม่ใช่หลักฐานว่าติดอันดับหรือถูก AI อ้างอิง
9. หน้าซีรีส์ W2A เดิม 18 หน้าซึ่ง audit เว็บจริงพบ 404 เผยแพร่แล้ว เปิดได้ HTTP 200 และอยู่ใน sitemap ครบ

## ผลตรวจ build สุดท้าย

- `npm run build`: ผ่าน; 230 HTML pages รวม 404, sitemap 229 canonical URLs
- `npm run seo:qa`: ผ่าน 229 URLs, 0 errors, 0 warnings
- `npm run seo:local-entity`: ผ่าน 25/25 อำเภอ, ไม่มีธุรกิจหรือพิกัดสาขาปลอม
- `npm run seo:url-ownership`: ผ่าน, ไม่มี orphan winner pages หรือ internal links ไป loser URLs; ตรวจ batch redirects 42 รายการ
- `npm run seo:money-pages`: ผ่าน
- `npm run seo:w2a-release`: ผ่าน 18 หน้าซีรีส์, W2B/W2C ไม่เปลี่ยนสถานะ
- ตรวจ llms-full.txt: 229 URLs ไม่ซ้ำและตรง sitemap ทุก URL; public/dist ตรงกัน
- ตรวจหน้าติดต่อใน browser ทั้ง desktop และ mobile 390 × 844: ข้อมูลครบ ที่อยู่ตัดบรรทัดอ่านได้ ไม่พบ horizontal overflow

## ผลหลังเผยแพร่

- Vercel project: `amphons-projects-bb1ec3bf/rubsueubon` ผูกกับโดเมนจริงและเชื่อม CLI ในเครื่องแล้ว
- Production deployment: `dpl_EdT92YsPg9zXL4Jprd2jypv32Unn` สถานะ READY
- Dashboard: https://vercel.com/amphons-projects-bb1ec3bf/rubsueubon/EdT92YsPg9zXL4Jprd2jypv32Unn
- เว็บจริง: https://รับซื้ออุบล.com/
- ตรวจ 229 canonical URLs: HTTP 200, title/description/H1/canonical/robots/JSON-LD ผ่าน ไม่มี title หรือ description ซ้ำตรงกัน
- หน้าซีรีส์เดิม 404 จำนวน 18 หน้า เปิดได้และอยู่ใน sitemap ครบ
- LocalBusiness 28 หน้าอ้างที่อยู่ พิกัด Maps และ Facebook ตรงกับข้อมูลร้านที่ยืนยัน
- llms-full.txt ครบ 229 URLs ตรง sitemap; URL ที่ไม่มีอยู่ตอบ 404 ตามจริง
- URL เก่า 72 เส้นทางไม่ซ้ำส่งต่อด้วย permanent redirect ไปปลายทางถูกต้อง ตรวจเวลา 17:39 น. (Asia/Bangkok)
- เพิ่ม `.vercelignore` เพื่อไม่นำไฟล์ข้อมูลภายใน รายงาน และ `.env*` ไปอยู่ในชุดอัปโหลด source
- หลักฐาน: `reports/live-local-postdeploy-2026-09-03.json`, `reports/local-release-verification-2026-09-03.json`, `reports/vercel-final-deploy-2026-09-03.log`

## การวัดผลและการดูแลต่อ

- เผยแพร่จาก source ในเครื่องผ่าน Vercel CLI; Git remote คือ https://github.com/noteroru2/rubsueubon ยังไม่ได้ commit/push งานรวม ควรใช้ source ปัจจุบันนี้สำหรับการเผยแพร่ครั้งต่อไป
- ยังไม่มี GA4/GTM ID ที่ยืนยัน การวัดคลิก LINE/โทรจริงจึงยังไม่ได้เชื่อมเพิ่ม ส่ง Measurement ID `G-...` หรือ Container ID `GTM-...` ได้โดยไม่ส่งรหัสผ่าน
- หากต้องการวัดผลรายคีย์ ใช้ GSC หลังเผยแพร่ เทียบคลิก impressions CTR และอันดับของคู่ keyword/page ตามช่วงเวลาเดียวกัน
- ยังไม่ได้แก้ Google Business Profile หรือ Facebook ภายนอกเว็บไซต์

รายงาน audit ก่อนปรับ: `reports/local-seo-aeo-geo-audit-2026-09-03.md`
