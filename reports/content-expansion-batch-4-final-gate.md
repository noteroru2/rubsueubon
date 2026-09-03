# CONTENT / EXPANSION BATCH 4 — FINAL GATE

## Verdict

`PASS_WITH_WARNING`

## Scope result

- W2B reviewed: **17/17**
- Release candidates selected: **12**
- Hold next wave: **5**
- Production routes created: **0**
- Current canonical remains: **229**
- Projected canonical remains: **401**

## Quality gates

- `npm run seo:w2b-candidates`: **PASS**
- `npm run seo:brand-series`: **PASS**
- `npm run seo:w2a-release`: **PASS**
- `npm run seo:architecture`: **PASS**
- `npm run seo:core-money-lock`: **PASS**
- Selected candidate count constrained to 10–12: **PASS (12)**
- Selected candidate parent current canonical: **PASS 12/12**
- Candidate URL already production route: **PASS 0/17**
- Candidate URL conflicts with redirect source: **PASS 0/17**
- Selected quality score >=25: **PASS 12/12**
- HOLD candidates below release threshold: **PASS 5/5**
- Content brief present: **PASS 17/17**
- Production `src/**` changed from Batch 3 baseline: **NO**
- Redirect/config production behavior changed: **NO**

## Warning

1. The supplied repository ZIP contains no `.git` metadata, so branch/HEAD/origin/push state cannot be independently verified.
2. GSC export has aggregate Query and Page sheets but no Query × Page export. Query-level cannibalization cannot be proven from this dataset alone.
3. W2A has not been deployed/observed by this environment. Selected W2B candidates therefore remain gated as `PENDING_W2A_OBSERVATION` rather than production-authorized.
4. A fresh Astro build is not required for this selection-only batch because no production route/source/redirect/canonical behavior changed. The existing Batch 3 environment build warning remains relevant before any release/deploy.

## Selected RC order

1. **Sony A6000 Series** — `/บริการ/รับซื้อกล้อง-sony-a6000-series-อุบล/`
2. **Fujifilm X100 Series** — `/บริการ/รับซื้อกล้อง-fujifilm-x100-series-อุบล/`
3. **AMD Radeon RX 9000 Series** — `/บริการ/รับซื้อ-radeon-rx-9000-series-อุบล/`
4. **ASUS Zenbook** — `/บริการ/รับซื้อ-asus-zenbook-อุบล/`
5. **Nikon Z Series** — `/บริการ/รับซื้อกล้อง-nikon-z-series-อุบล/`
6. **Acer Predator** — `/บริการ/รับซื้อ-acer-predator-อุบล/`
7. **HP Omen** — `/บริการ/รับซื้อ-hp-omen-อุบล/`
8. **Dell XPS** — `/บริการ/รับซื้อ-dell-xps-อุบล/`
9. **Lenovo Yoga** — `/บริการ/รับซื้อ-lenovo-yoga-อุบล/`
10. **MSI Cyborg** — `/บริการ/รับซื้อ-msi-cyborg-อุบล/`
11. **HP EliteBook** — `/บริการ/รับซื้อ-hp-elitebook-อุบล/`
12. **Lenovo IdeaPad** — `/บริการ/รับซื้อ-lenovo-ideapad-อุบล/`

## HOLD

- **Acer Aspire** — Broad consumer family; lower differentiation and resale-value signal than Predator/Zenbook/Yoga. Hold until W2A/W2B winners establish demand.
- **Acer Swift** — Valid premium-light family but Acer parent GSC is weak and release would add three Acer series at once. Hold to avoid breadth before evidence.
- **Dell G Series** — Gaming intent is valid but overlaps the broader gaming-notebook cluster; prioritize one Dell premium family (XPS) before adding another Dell series.
- **Dell Inspiron** — Very broad consumer intent with weaker unique valuation angle than XPS; hold until query/page evidence justifies a dedicated owner.
- **HP ProBook** — Business intent overlaps EliteBook. Release EliteBook first, then use GSC/query evidence to decide whether ProBook deserves a separate owner.

## Next gate

Recommended next step after W2A is integrated/deployed:

`CONTENT / EXPANSION BATCH 5 — W2A Observation Gate & W2B Release Authorization`

That gate should decide whether all 12 selected RCs are released, a smaller subset is released, or W2B waits for more data.

**DO NOT PUSH**

**DO NOT DEPLOY**
