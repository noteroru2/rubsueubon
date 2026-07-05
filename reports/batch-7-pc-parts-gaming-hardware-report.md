# Batch 7 Report — PC Parts / Gaming Hardware Cluster

**วันที่:** 2026-07-05  
**โปรเจกต์:** รับซื้ออุบล.com  
**Batch:** 7 — PC Parts / Gaming Hardware Cluster

---

## สรุปงานที่ทำ

### 1. Slug Registry Updates (`src/config/urls.ts`)
- เพิ่ม `'ram-ubon': 'รับซื้อ-ram-อุบล'` (ใหม่)
- เพิ่ม `'ssd-ubon': 'รับซื้อ-ssd-อุบล'` (ใหม่)
- เพิ่ม `'monitor-gaming-ubon': 'รับซื้อจอเกมมิ่ง-อุบล'` (ใหม่)
- อัปเดต `'gpu-rtx-ubon': 'รับซื้อ-rtx-อุบล'` (เปลี่ยนจาก `รับซื้อการ์ดจอ-rtx-อุบล`)
- อัปเดต `'pc-parts-bundle-ubon': 'รับซื้ออุปกรณ์คอม-อุบล'` (เปลี่ยนจาก `รับซื้อ-cpu-ram-ssd-อุบล`)
- ลบ `'ram-ssd-ubon'` ออกจาก registry

### 2. Legacy Redirects (`vercel.json`)
| Source (301) | Destination |
|---|---|
| `/บริการ/รับซื้อการ์ดจอ-rtx-อุบล/` | `/บริการ/รับซื้อ-rtx-อุบล/` |
| `/บริการ/รับซื้อ-ram-ssd-อุบล/` | `/บริการ/รับซื้อ-ram-อุบล/` |
| `/บริการ/รับซื้อ-cpu-ram-ssd-อุบล/` | `/บริการ/รับซื้ออุปกรณ์คอม-อุบล/` |

### 3. ไฟล์ที่ลบ
- `src/content/services/ram-ssd-ubon.md` — ลบเพื่อป้องกัน keyword cannibalization

### 4. ไฟล์ที่สร้างใหม่
| ไฟล์ | Slug | เป้าหมาย |
|---|---|---|
| `src/content/services/ram-ubon.md` | `/บริการ/รับซื้อ-ram-อุบล/` | RAM มือสอง DDR4/DDR5 |
| `src/content/services/ssd-ubon.md` | `/บริการ/รับซื้อ-ssd-อุบล/` | SSD NVMe/SATA |
| `src/content/services/monitor-gaming-ubon.md` | `/บริการ/รับซื้อจอเกมมิ่ง-อุบล/` | Gaming Monitor 144Hz+ |

### 5. ไฟล์ที่อัปเดต
| ไฟล์ | การเปลี่ยนแปลง |
|---|---|
| `src/content/services/cpu-ubon.md` | ปรับ slug, ล้าง claim risk, อัปเดต internal links |
| `src/content/services/gpu-ubon.md` | ล้าง claim risk, เพิ่มลิงก์ไปยัง RTX sub-page |
| `src/content/services/gpu-rtx-ubon.md` | อัปเดต slug เป็น `รับซื้อ-rtx-อุบล`, ล้าง claim risk |
| `src/content/services/monitor-ubon.md` | แยก gaming content ไป monitor-gaming-ubon |
| `src/content/services/pc-parts-bundle-ubon.md` | อัปเดต slug เป็น `รับซื้ออุปกรณ์คอม-อุบล` |
| `src/content/services/pc-parts-ubon.md` | อัปเดต internal links ทั้งหมด |
| `src/content/services/pc-ubon.md` | ล้าง claim risk, อัปเดต internal links |

### 6. Internal Link Updates (Blogs & Services)
- `src/content/blog/check-pc-spec-before-selling.md`
- `src/content/blog/gpu-mining-before-selling.md`
- `src/content/blog/gpu-second-hand.md`
- `src/content/blog/sell-gaming-pc.md`
- `src/content/services/notebook-msi-ubon.md`
- `src/content/services/pc-custom-build-ubon.md`
- `src/content/services/pc-gaming-ubon.md`
- `scripts/generate-money-pages.mjs`

### 7. Services Index Filter (`src/pages/บริการ/index.astro`)
เพิ่ม filter ให้ซ่อน sub-parts pages จาก services catalog:
- `parentSlug !== 'รับซื้อ-อะไหล่คอม-อุบล'` (ซ่อน GPU, CPU, RAM, SSD, PC Bundle)
- `parentSlug !== 'รับซื้อการ์ดจอ-อุบล'` (ซ่อน RTX sub-page)
- `parentSlug !== 'รับซื้อจอคอม-อุบล'` (ซ่อน Gaming Monitor sub-page)

---

## Cluster Structure (Batch 7)

```
รับซื้ออะไหล่คอม-อุบล (Hub)
├── รับซื้อการ์ดจอ-อุบล (GPU Hub)
│   └── รับซื้อ-rtx-อุบล (RTX Sub-page)
├── รับซื้อ-cpu-อุบล (CPU)
├── รับซื้อ-ram-อุบล (RAM)
├── รับซื้อ-ssd-อุบล (SSD)
└── รับซื้ออุปกรณ์คอม-อุบล (Peripherals Bundle)

รับซื้อจอคอม-อุบล (Monitor Hub)
└── รับซื้อจอเกมมิ่ง-อุบล (Gaming Monitor Sub-page)
```

---

## QA Results

| Test | Result |
|---|---|
| `npm run build` | ✅ 199 pages, 0 errors |
| `npm run seo:qa` | ✅ 198 URLs, 0 errors, 0 warnings |
| `node scripts/check-sitemap-urls.mjs` | ✅ 198 URLs, 0 errors |
| `node scripts/qa-home.mjs` | ✅ allOk: true |
| Claim Risk Scan (Batch 7 files) | ✅ 0 matches |

---

## หมายเหตุ

- ยังไม่ได้ commit / push / deploy
- Batch 7 พร้อม commit เมื่อผู้ใช้อนุมัติ
