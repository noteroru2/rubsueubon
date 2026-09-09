# UBON U0 — GSC Query×Page Ownership Audit

Date: 2026-09-09 (Asia/Bangkok)
Base main SHA: `6711321e3e1f471410c8e21a7c5ff527b4452b48`
Latest finalized GSC date: `2026-09-06`

## Verdict

`AUDIT_PASS / BASELINE_FROZEN / PRODUCTION_UNCHANGED`

U0 is audit-only. No production route, title, H1, canonical, redirect, schema, robots, sitemap, or visible customer copy is changed by this batch.

## Sitewide 28-day movement

Current: 2026-08-10 → 2026-09-06
- Clicks: 192
- Impressions: 2,397
- CTR: 8.01%
- Average position: 7.1264

Previous: 2026-07-13 → 2026-08-09
- Clicks: 133
- Impressions: 1,907
- CTR: 6.97%
- Average position: 7.3277

Movement:
- Clicks: +44.36%
- Impressions: +25.70%
- CTR: +1.04 percentage points
- Average position: improved by ~0.20 positions

The site is growing and already averages page-one visibility. Do not rebuild the architecture broadly.

## Page ownership classification

### PROTECT

- `/` — 122 clicks / 1,429 impressions / CTR 8.54% / position 6.62
  - Current strong owner for generic local / near-me demand.
  - Also currently wins generic notebook queries at positions ~3–4.
  - `PROTECT_NEAR_ME_OWNER`.
- `/พื้นที่/warin-chamrap/` — 3 / 65 / 4.62% / 6.78
- `/พื้นที่/mueang-ubon-ratchathani/` — 3 / 59 / 5.08% / 6.41
- `/บริการ/camera-ubon/` — 6 / 42 / 14.29% / 5.76
- `/พื้นที่/ubon-university/` — 5 / 37 / 13.51% / 5.70
- `/บริการ/trade-in-ubon/` — 3 / 26 / 11.54% / 5.85
- `/บริการ/b2b-lot-ubon/` — 1 / 14 / 7.14% / 3.86

### PROTECT_AND_PUSH

- `/บริการ/pc-ubon/` — 3 / 85 / 3.53% / 7.42
  - Strong page-one visibility with CTR headroom.
- `/บริการ/smartphone-ubon/` — 3 / 40 / 7.50% / 9.25
- `/บริการ/iphone-ubon/` — 2 / 30 / 6.67% / 8.40
- `/บริการ/macbook-ubon/` — 1 / 29 / 3.45% / 7.52
- `/บริการ/ipad-ubon/` — 1 / 24 / 4.17% / 7.50
- `/บริการ/notebook-dell-ubon/` — 1 / 22 / 4.55% / 8.05

### PUSH_CTR

- `/พื้นที่/det-udom/` — 3 / 97 / 3.09% / 7.11
- `/บทความ/iphone-icloud-before-selling/` — 2 / 117 / 1.71% / 9.70
- `/บริการ/pc-gaming-ubon/` — 0 / 28 / 0% / 8.54
- `/บริการ/iphone-16-pro-max-ubon/` — 0 / 19 / 0% / 9.42
- `/พื้นที่/thung-si-udom/` — 0 / 17 / 0% / 7.47
- `/บริการ/iphone-15-pro-max-ubon/` — 0 / 17 / 0% / 9.53

### RECOVER / HOLD

- `/บริการ/notebook-acer-ubon/` — 0 / 17 / 0% / 12.41 → `RECOVER_NEAR_PAGE_ONE`
- `/บริการ/notebook-asus-ubon/` — 1 / 13 / 7.69% / 10.31 → `RECOVER_NEAR_PAGE_ONE`
- `/บริการ/macbook-pro-m3-ubon/` — 0 / 18 / 0% / 24.22 → `HOLD_LOW_VISIBILITY`
- `/บริการ/camera-nikon-ubon/` — 0 / 18 / 0% / 27.83 → `HOLD_LOW_VISIBILITY`
- `/วิธีประเมินราคา/` — 0 / 13 / 0% / 24.54 → `HOLD_INFORMATIONAL`

## Critical notebook ownership drift

Architecture Batch 1 previously locked the notebook root owner as:

`/บริการ/รับซื้อโน้ตบุ๊ก-อุบล/` → `CORE_OWNER`

The dedicated source entry still exists and is explicitly targeted at “รับซื้อโน้ตบุ๊ก อุบล” intent.

However, current GSC shows Google selecting the homepage for exposed generic notebook queries:

- `รับซื้อโน้ตบุ๊กอุบล` → `/` — 13 impressions / position 3.92 / 0 clicks
- `รับซื้อโน๊ตบุ๊ค อุบล` → `/` — 12 impressions / position 3.08 / 0 clicks
- `ร้านรับซื้อโน๊ตบุ๊คใกล้ฉัน` → `/` — 10 impressions / position 6.40 / 1 click

The dedicated notebook service page is not a meaningful visible owner in the current query set.

Classification:

`OWNERSHIP_DRIFT_BUT_CURRENT_WINNER / HOLD_NO_FORCED_TRANSFER`

Do not force the query back to the notebook root via destructive title/H1/canonical/redirect changes while the homepage is already ranking around positions 3–4. This is a measurement and intent-separation problem, not confirmed destructive cannibalization.

Future notebook work should distinguish:
- generic local / near-me intent → protect homepage while it wins;
- explicit service/category intent → strengthen the notebook owner carefully only if GSC shows demand and without weakening homepage relevance.

## Generic phone / computer near-me ownership

Current examples:

- `ร้านรับซื้อโทรศัพท์ ใกล้ฉัน` → `/` — 41 impressions / position 6.95
- `รับซื้อโทรศัพท์เสีย ใกล้ฉัน` → `/` leads, with a small supporting article overlap
- `ร้านรับซื้อโทรศัพท์มือถือใกล้ฉัน` → `/` — 22 impressions / position 7.36
- `ร้านรับซื้อคอมพิวเตอร์ ใกล้ฉัน` → `/` — position ~3.83

Decision:

`HOMEPAGE_GENERIC_NEAR_ME_OWNER / PROTECT`

Small informational/supporting overlaps are not sufficient evidence for consolidation.

## Cannibalization decision

`NO_CONFIRMED_DESTRUCTIVE_CANNIBALIZATION`

- Notebook has ownership drift, but the current homepage owner is performing strongly.
- Phone-related supporting articles occasionally share low-volume query rows, but homepage remains the dominant commercial owner.
- No broad redirect, canonical consolidation, mass noindex, or route retirement is justified by current GSC evidence.

## U1 recommended scope

`UBON U1 — Page-One CTR + Ownership-Safe Push`

Priority order:
1. Det Udom CTR improvement.
2. iCloud article snippet/intent improvement.
3. PC Gaming page-one CTR push.
4. iPhone 16 Pro Max and iPhone 15 Pro Max CTR push.
5. Thung Si Udom CTR push.
6. PC / MacBook / iPad service-page snippet refinement where rankings are already page one.
7. Notebook ownership: observe and strengthen only in ways that do not suppress homepage generic near-me ownership.

Guardrails for U1:
- preserve homepage generic/near-me relevance;
- no notebook canonical transfer;
- no mass rewrite;
- no new indexable expansion;
- no destructive consolidation without new Query×Page evidence.
