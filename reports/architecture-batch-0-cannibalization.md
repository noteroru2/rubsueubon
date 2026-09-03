# ARCHITECTURE BATCH 0 — CANNIBALIZATION AUDIT

## Verdict

**No confirmed current indexable duplicate pair was proven from the supplied repo.**

The biggest apparent duplicate families in the 3-month GSC export are mainly **historical URLs that already redirect in current source**.

Important limitation:

The uploaded GSC workbook contains aggregate **Queries** and aggregate **Pages**, but no **Query × Page** table. Therefore query-level cannibalization cannot be proven purely from this export.

## GSC Classification

| Class | Normalized paths |
|---|---:|
| Current source-derived route | 132 |
| Historical GSC URL with current redirect | 26 |
| Unresolved legacy/unknown | 1 |
| **Total normalized GSC paths** | **159** |

## Historical GSC false-positive duplicates

These should not be counted as current cannibalization merely because they still appear in the 3-month export.

| Legacy GSC URL | Clicks | Impr. | Pos. | Current destination |
|---|---:|---:|---:|---|
| `/บริการ/ipad-ubon/` | 4 | 95 | 8.26 | `/บริการ/รับซื้อ-ipad-อุบล/` |
| `/บริการ/รับซื้อ-ipad-อุบล/ipad-pro/` | 2 | 26 | 10.65 | `/บริการ/รับซื้อ-ipad-pro-อุบล/` |
| `/บริการ/รับซื้อโทรศัพท์-อุบล/` | 7 | 25 | 11.96 | `/บริการ/รับซื้อมือถือ-อุบล/` |
| `/บริการ/รับซื้อ-macbook-อุบล/macbook-air-m3/` | 2 | 20 | 7.70 | `/บริการ/รับซื้อ-macbook-air-m3-อุบล/` |
| `/บริการ/รับซื้อ-ipad/ipad-air/` | 1 | 9 | 8.11 | `/บริการ/รับซื้อ-ipad-air-อุบล/` |
| `/บริการ/รับซื้อ-macbook/macbook-air-m3/` | 3 | 6 | 14.83 | `/บริการ/รับซื้อ-macbook-air-m3-อุบล/` |
| `/บริการ/รับซื้อ-macbook/macbook-air-m2/` | 0 | 4 | 11.50 | `/บริการ/รับซื้อ-macbook-air-m2-อุบล/` |
| `/บริการ/รับซื้อ-iphone/iphone-15-pro/` | 0 | 4 | 14.25 | `/บริการ/รับซื้อ-iphone-15-pro-อุบล/` |
| `/บริการ/b2b-lot-ubon/corporate-pc/` | 0 | 3 | 6.67 | `/บริการ/รับซื้อคอมบริษัท-อุบล/` |
| `/บริการ/b2b-lot-ubon/` | 0 | 3 | 7.67 | `/บริการ/รับซื้อคอมยกล็อต-อุบล/` |
| `/บริการ/รับซื้อ-iphone/iphone-15-pro-max/` | 0 | 3 | 14.00 | `/บริการ/รับซื้อ-iphone-15-pro-max-อุบล/` |
| `/บริการ/รับซื้อ-กล้อง-sony-อุบล/` | 0 | 3 | 14.67 | `/บริการ/รับซื้อกล้อง-sony-อุบล/` |
| `/บริการ/รับซื้อ-iphone/iphone-13-pro-max/` | 2 | 2 | 14.00 | `/บริการ/รับซื้อ-iphone-13-pro-max-อุบล/` |
| `/บริการ/รับซื้อ-cpu-ram-ssd-อุบล/` | 1 | 2 | 3.50 | `/บริการ/รับซื้ออุปกรณ์คอม-อุบล/` |
| `/บริการ/รับซื้อ-ipad-อุบล/ipad-air/` | 0 | 2 | 2.50 | `/บริการ/รับซื้อ-ipad-air-อุบล/` |
| `/บริการ/รับซื้อ-ipad/ipad-pro/` | 0 | 2 | 5.50 | `/บริการ/รับซื้อ-ipad-pro-อุบล/` |
| `/บริการ/รับซื้อ-iphone-อุบล/iphone-15-pro/` | 0 | 2 | 31.50 | `/บริการ/รับซื้อ-iphone-15-pro-อุบล/` |
| `/บริการ/รับซื้อ-iphone-อุบล/iphone-13-pro-max/` | 1 | 1 | 2.00 | `/บริการ/รับซื้อ-iphone-13-pro-max-อุบล/` |
| `/บริการ/รับซื้อ-macbook/macbook-pro-m1/` | 1 | 1 | 30.00 | `/บริการ/รับซื้อ-macbook-อุบล/macbook-pro-m1/` |
| `/บริการ/camera-lens-ubon/` | 0 | 1 | 2.00 | `/บริการ/รับซื้อเลนส์กล้อง-อุบล/` |
| `/บริการ/รับซื้อคอมยกล็อต-อุบล/corporate-pc/` | 0 | 1 | 5.00 | `/บริการ/รับซื้อคอมบริษัท-อุบล/` |
| `/บริการ/รับซื้อ-macbook-อุบล/macbook-air-m2/` | 0 | 1 | 7.00 | `/บริการ/รับซื้อ-macbook-air-m2-อุบล/` |
| `/บริการ/รับซื้อกล้อง/sony-zv-e10/` | 0 | 1 | 9.00 | `/บริการ/รับซื้อกล้อง-อุบล/sony-zv-e10/` |
| `/บริการ/รับซื้อ-ipad-อุบล/ipad-gen-9-10/` | 0 | 1 | 12.00 | `/บริการ/รับซื้อ-ipad-อุบล/` |
| `/บริการ/รับซื้อ-ipad/ipad-gen/` | 0 | 1 | 17.00 | `/บริการ/รับซื้อ-ipad-อุบล/` |
| `/บริการ/รับซื้อ-iphone/iphone-16-pro/` | 0 | 1 | 26.00 | `/บริการ/รับซื้อ-iphone-16-pro-อุบล/` |

## Confirmed current conflicts

**0**

Static architecture checks found no two current source-derived canonical routes with the same URL and no current canonical URL that is also a redirect source.

This does **not** prove zero search-query overlap; it means there is no confirmed technical duplicate ownership conflict from the supplied artifact.

## Watchlist — intent overlap, not confirmed cannibalization

### 1. Notebook broken vs specific conditions

Current broad page:

`/บริการ/notebook-broken-ubon/`

Specific condition pages already include:

- notebook no-power
- notebook cracked screen

Future condition expansion must use the broad broken page as a parent/support page, not duplicate the same condition text across multiple URLs.

### 2. Apple hub vs product hubs

`/บริการ/รับซื้อ-apple-อุบล/` is a broad ecosystem hub.

iPhone / iPad / MacBook / Apple Watch pages own their product-specific intent.

Do not retarget the Apple hub to an individual product keyword.

### 3. PC parts hierarchy

Broad pages:

- `/บริการ/รับซื้อ-อะไหล่คอม-อุบล/`
- `/บริการ/รับซื้ออุปกรณ์คอม-อุบล/`

Child product owners:

- GPU
- CPU
- RAM
- SSD
- monitor

Future series/model pages must stay under a clear parent and not rewrite the broad hubs into the same exact intent.

### 4. B2B

Current pages distinguish:

- company computers
- office computers
- school computers
- game-cafe computers
- notebook lots
- IT lots
- computer lots

Additional B2B pages are only READY when the asset class creates a distinct evaluation workflow.

### 5. เมืองอุบล District × Service

New city-specific service pages are **HOLD**, not READY.

Reason:

`รับซื้อ iPhone อุบล`, `รับซื้อโน้ตบุ๊ก อุบล`, etc. already strongly represent city/province intent. Adding `...เมืองอุบล` pages without Query×Page evidence risks real cannibalization.

## Current recommendation

Do not reopen the resolved iPhone/iPad/MacBook legacy paths.

The first ownership cleanup candidate for a later batch is the unresolved old notebook-broken path, after live verification.
