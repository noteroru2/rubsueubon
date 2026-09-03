# ARCHITECTURE BATCH 1 — Core Money Ownership Audit

Date: 2026-09-03
Source provenance SHA: `bd491fa3d8340a97f9f3568d865de74f928459c3`

## Scope

Batch 1 locks the ownership and ancestry of current Core Money service pages before any indexable expansion. No new production landing page was created.

## Current baseline

- Source-derived canonical routes: **211**
- Current service source files: **104**
- Core cluster definitions: **16**
- READY blueprint candidates: **190**
- Projected canonical total after qualified READY release: **401**
- Historical/legacy redirect rows: **100**
- Unresolved legacy ownership rows: **0**

## Core cluster locks

| Cluster | Root owner | Role | Current descendants |
|---|---|---|---:|
| mobile | `/บริการ/รับซื้อมือถือ-อุบล/` | CORE_OWNER | 17 |
| notebook | `/บริการ/รับซื้อโน้ตบุ๊ก-อุบล/` | CORE_OWNER | 19 |
| camera | `/บริการ/รับซื้อกล้อง-อุบล/` | CORE_OWNER | 10 |
| computer | `/บริการ/รับซื้อคอมพิวเตอร์-อุบล/` | CORE_OWNER | 4 |
| trade_in | `/บริการ/รับเทิร์นไอที-อุบล/` | TRANSACTION_OWNER | 0 |
| tablet | `/บริการ/รับซื้อแท็บเล็ต-อุบล/` | CORE_OWNER | 8 |
| gadget | `/บริการ/รับซื้อสมาร์ทวอทช์-แก็ดเจ็ต-อุบล/` | CORE_OWNER | 0 |
| tv_electronics | `/บริการ/รับซื้อทีวี-อุบล/` | CORE_OWNER | 0 |
| apple_ecosystem | `/บริการ/รับซื้อ-apple-อุบล/` | CROSS_CATEGORY_HUB | 1 |
| apple_watch | `/บริการ/รับซื้อ-apple-watch-อุบล/` | SUBCLUSTER_OWNER | 0 |
| audio | `/บริการ/รับซื้อ-เครื่องเสียง-อุบล/` | CORE_OWNER | 1 |
| pc_hardware | `/บริการ/รับซื้อ-อะไหล่คอม-อุบล/` | CORE_OWNER | 6 |
| gaming | `/บริการ/รับซื้อ-เครื่องเกม-อุบล/` | CORE_OWNER | 7 |
| b2b_lot | `/บริการ/รับซื้อคอมยกล็อต-อุบล/` | B2B_OWNER | 2 |
| camera_lens | `/บริการ/รับซื้อเลนส์กล้อง-อุบล/` | SUBCLUSTER_OWNER | 2 |
| b2b_corporate | `/บริการ/รับซื้อคอมบริษัท-อุบล/` | B2B_OWNER | 3 |

## Ownership rules locked

- Generic mobile intent belongs to the Smartphone owner; iPhone and Android brands retain brand-specific ownership.
- Apple hub is a cross-category discovery hub only. It does not replace iPhone, iPad, MacBook, or Apple Watch owners.
- iPhone and iPad legacy nested model families remain closed according to the existing model ownership config.
- MacBook keeps the existing explicit nested keep-list. No aesthetic URL migration was introduced.
- GPU / CPU / RAM / SSD remain descendants of PC Hardware, not generic Computer.
- B2B lot acquisition and corporate-computer acquisition remain separate intent families.
- Mueang Ubon District × Service expansion remains HOLD because it can overlap province/city-wide `...อุบล` money pages.

## GSC evidence used to protect current roots

Attached GSC export range: 2026-06-09 → 2026-08-31.

Notable protected roots include:

- Smartphone: 65 clicks / 870 impressions / position ~7.88
- Gaming: 20 / 132 / ~8.48
- PC Hardware: 15 / 168 / ~7.79
- iPad: 11 / 235 / ~7.99
- iPhone: 8 / 122 / ~8.80
- Camera: 8 / 70 / ~7.69
- Computer: 7 / 106 / ~10.36
- MacBook: 6 / 41 / ~7.66

## Confirmed hierarchy correction

`monitor-ubon.md` previously attached the computer-monitor page to the TV/electronics parent.

Changed parent only:

- Before: `tv-electronics-ubon`
- After: `pc-ubon`

Canonical URL remains unchanged:

`/บริการ/รับซื้อจอคอม-อุบล/`

No title/H1/content rewrite was performed.

## Legacy migration gap closed

Historical URL:

`/บริการ/รับซื้อโน้ตบุ๊กเสีย-อุบล/`

is now explicitly 301-owned by:

`/บริการ/notebook-broken-ubon/`

The redirect was added consistently to:

- `astro.config.mjs`
- `public/_redirects`
- `vercel.json`

The Batch 0 HOLD_REVIEW count therefore moved from 1 to **0**.
