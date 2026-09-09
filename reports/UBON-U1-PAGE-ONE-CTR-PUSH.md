# UBON U1 — Page-One CTR + Ownership-Safe Push

Date: 2026-09-09 (Asia/Bangkok)
Parent main SHA: `f4105fbe0c6646f2db762760d17fedb173d486c0`
Latest finalized GSC date: `2026-09-06`

## Decision

`LOW_RISK_CTR_PUSH / CURRENT_ROUTE_OWNERSHIP_PRESERVED`

U1 uses the most recent finalized 7-day GSC window (2026-08-31 → 2026-09-06) to avoid acting on stale 28-day URL ownership. The current page rows now show Thai service canonicals carrying visibility. No route, redirect, canonical, homepage, notebook owner, or sitemap behavior is changed.

## Fresh 7-day evidence

- Homepage: 8 clicks / 167 impressions / CTR 4.79% / position 6.37 → `PROTECT_GENERIC_NEAR_ME_OWNER`
- รับซื้อมือถือ อุบล: 4 / 93 / 4.30% / 8.14 → `DESCRIPTION_CTR_PUSH`
- iCloud article: 1 / 59 / 1.69% / 8.46 → `SERP_TITLE_DESCRIPTION_PUSH`
- รับซื้อคอมพิวเตอร์ อุบล: 0 / 25 / 0% / 9.64 → `DESCRIPTION_CTR_PUSH`
- เดชอุดม: 0 / 24 / 0% / 6.88 → `LOCAL_TITLE_DESCRIPTION_PUSH`
- ม่วงสามสิบ: 0 / 15 / 0% / 4.60 → `LOCAL_CTR_AND_COPY_HYGIENE`
- PC Gaming current Thai canonical: 1 / 3 / 33.33% / 4.67 → `PROTECT_NO_U1_EDIT`

The older U0 28-day set had PC Gaming and iPhone model ASCII URLs as CTR targets. The fresh 7-day set no longer justifies editing those legacy-looking owners. U1 therefore narrows scope rather than forcing an outdated plan.

## Changes

### 1. Service snippet refinements

A small measured override map is added in `src/config/u1-seo-overrides.ts`.

Only two service pages receive a description refinement:
- `/บริการ/รับซื้อมือถือ-อุบล/`
- `/บริการ/รับซื้อคอมพิวเตอร์-อุบล/`

Their titles, H1s, slugs, canonicals, route ownership, internal-link identity and content bodies remain unchanged.

### 2. iCloud article SERP refinement

`/บทความ/iphone-icloud-before-selling/` receives a more direct SERP title and description around the actual question: whether an iPhone still tied to iCloud / Find My can be sold and what must be done before selling.

The visible article H1 remains the original editorial title. Only metadata changes.

### 3. Det Udom CTR push

The Det Udom page keeps the same route, canonical and H1. Its page title and description are tightened around the main commercial categories: phone, notebook, computer, camera/lens.

### 4. Muang Sam Sip CTR + content hygiene

The Muang Sam Sip page keeps the same route and canonical. The title and description are tightened, while route-like language such as “จุดแวะเส้นทาง” and wording that could imply a branch in the district are removed. The page now tells customers to send product details first, then agree on a date, time and inspection location.

## Protected scope

U1 intentionally does not edit:
- homepage content or metadata;
- notebook root ownership or canonical;
- PC Gaming page;
- iPhone 15/16 Pro Max pages;
- redirects;
- canonical generation;
- robots or sitemap;
- any new indexable page.

## Measurement policy

Use this baseline after production is confirmed. Compare CTR and position on the exact target pages after at least 7 new finalized GSC days. Do not interpret same-day or partially finalized data as a result.

Primary expected signal: higher clicks/CTR without material loss of page-one position or route ownership.
