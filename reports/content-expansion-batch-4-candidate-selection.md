# CONTENT / EXPANSION BATCH 4 — W2B Series Release Candidate Selection & Quality Gate

## Verdict

`PASS_WITH_WARNING`

This batch is **selection-only**. It creates **zero W2B production routes** and does not change production content, redirects, canonical URLs, sitemap behavior, or navigation.

## Baseline

- Current canonical routes: **229**
- Remaining READY candidates: **172**
- W2B candidates reviewed: **17**
- Projected canonical after all READY: **401**
- W2A production routes already present in source: **18**
- W2B production routes created in this batch: **0**

## Selection result

- `RC_SELECTED_PENDING_W2A_OBSERVATION`: **12**
- `HOLD_NEXT_WAVE`: **5**

### Selected release candidates

| Rank | Series | Cluster | Score | Parent GSC | Decision |
|---:|---|---|---:|---|---|
| 1 | Sony A6000 Series | camera | 30 | 1c / 23i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 2 | Fujifilm X100 Series | camera | 29 | 0c / 1i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 3 | AMD Radeon RX 9000 Series | pc_hardware | 29 | 0c / 1i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 4 | ASUS Zenbook | notebook | 28 | 0c / 5i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 5 | Nikon Z Series | camera | 28 | 0c / 0i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 6 | Acer Predator | notebook | 28 | 0c / 1i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 7 | HP Omen | notebook | 28 | 0c / 0i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 8 | Dell XPS | notebook | 27 | 0c / 0i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 9 | Lenovo Yoga | notebook | 27 | 0c / 0i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 10 | MSI Cyborg | notebook | 26 | 0c / 0i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 11 | HP EliteBook | notebook | 26 | 0c / 0i | RC_SELECTED_PENDING_W2A_OBSERVATION |
| 12 | Lenovo IdeaPad | notebook | 25 | 0c / 0i | RC_SELECTED_PENDING_W2A_OBSERVATION |

### Hold candidates

| Rank | Series | Cluster | Score | Parent GSC | Decision |
|---:|---|---|---:|---|---|
| — | Acer Aspire | notebook | 21 | 0c / 1i | HOLD_NEXT_WAVE |
| — | Acer Swift | notebook | 23 | 0c / 1i | HOLD_NEXT_WAVE |
| — | Dell G Series | notebook | 23 | 0c / 0i | HOLD_NEXT_WAVE |
| — | Dell Inspiron | notebook | 20 | 0c / 0i | HOLD_NEXT_WAVE |
| — | HP ProBook | notebook | 22 | 0c / 0i | HOLD_NEXT_WAVE |

## Why the 12 were selected

The Batch 2 architecture score was intentionally not used as the sole release signal because all W2B rows had the same generic positive score. Batch 4 re-ranked candidates using:

1. Existing GSC evidence from the supplied 2026-09-03 export.
2. Parent-page visibility and any related historical model/query evidence.
3. Commercial distinctiveness in a buyback context.
4. Ability to write genuinely series-specific valuation content.
5. Used-market/resale-value relevance.
6. Cannibalization and thin-content risk.
7. Current/established product-family validity.

The supplied GSC export does **not** include Query × Page data, so no candidate is claimed to have proven query-level demand. Selected rows are release candidates, not automatic production authorization.

## Evidence highlights

- **Sony A6000 Series:** Sony camera parent has 23 impressions; GSC also contains a historical Sony A6400 page impression and a `sony a6700 มือสอง` query impression.
- **ASUS Zenbook:** ASUS notebook parent has 5 impressions and already ranks around page one in the export.
- **Acer Predator:** Acer parent has only 1 impression, but Predator has much stronger commercial distinctiveness than broad Aspire/Swift intent.
- **Radeon RX 9000:** GPU parent already shows search visibility and the site has card/GPU commercial queries; the generation has clear VRAM/power/thermal/warranty valuation differences.
- **Fujifilm X100 / Nikon Z:** parent-level GSC is limited, but each family supports substantial unique evaluation content and strong product-family separation.

## Hold rationale

- **Acer Aspire:** broad mainstream intent; weaker differentiation and value signal than Predator.
- **Acer Swift:** valid family but releasing Aspire + Predator + Swift together would over-expand Acer before evidence.
- **Dell G Series:** valid gaming intent but overlaps the broader gaming-notebook cluster; XPS is the cleaner first Dell expansion.
- **Dell Inspiron:** broad consumer intent with weaker unique valuation angle than XPS.
- **HP ProBook:** overlaps EliteBook business intent; EliteBook should be released first and observed before deciding whether a separate ProBook owner is justified.

## Release prerequisite

The 12 selected candidates are **not authorized for production yet**. Before creation:

1. W2A must be integrated/deployed in the real Git repository.
2. W2A must pass real build + sitemap/canonical verification.
3. If observation data exists, review it before W2B production.
4. Re-run URL ownership and candidate QA immediately before creating W2B pages.
5. No HOLD candidate may be included in the first W2B release.

## Architecture state

- Current canonical: **229**
- RC selected: **12** (still READY, not current routes)
- HOLD W2B: **5** (still READY architecturally, but release-gated)
- Projected final architecture: **401**
- Current production URL count changed: **NO**

## Files added

- `docs/seo/w2b-release-candidate-selection.csv`
- `data/seo/w2b-release-candidate-selection.json`
- `scripts/w2b-release-candidate-quality-qa.mjs`
- `reports/content-expansion-batch-4-candidate-selection.md`
- `reports/content-expansion-batch-4-final-gate.md`

## Files modified

- `docs/seo/brand-series-foundation.csv` — W2B selection/hold gate only
- `data/seo/brand-series-foundation.json` — synchronized W2B gate + Batch 4 metadata
- `data/seo/400-page-blueprint.json` — Batch 4 metadata only; candidate statuses unchanged
- `package.json` — adds `seo:w2b-candidates`

## Production impact

- New indexable pages: **0**
- Existing service content changed: **0**
- Existing URL changed: **0**
- Canonical changed: **0**
- Redirect changed: **0**
- Navigation changed: **0**
- Sitemap behavior changed: **0**
- Push: **NO**
- Deploy: **NO**
