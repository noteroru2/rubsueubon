# CONTENT / EXPANSION BATCH 5R — W2A Live Recheck

## Verdict

`SOURCE_NOT_DEPLOYED_TO_PRODUCTION_EVIDENCE`

Recheck date: `2026-09-03`

## Evidence

### Sony parent fingerprint

Batch 5 source file `src/content/services/sony-camera-ubon.md` contains `W2A_SERIES_LINKS` with links to:

- `/บริการ/รับซื้อกล้อง-sony-a7-series-อุบล/`
- `/บริการ/รับซื้อกล้อง-sony-zv-series-อุบล/`

The production Sony parent was crawled on 2026-09-03 and does not expose that new series-link section/links. Its visible content continues directly through the older Sony family content.

Result: `STALE_VS_BATCH5_SOURCE`

### ASUS parent fingerprint

Batch 5 source file `src/content/services/notebook-asus-ubon.md` contains `W2A_SERIES_LINKS` with links to:

- `/บริการ/รับซื้อ-asus-rog-อุบล/`
- `/บริการ/รับซื้อ-asus-tuf-อุบล/`
- `/บริการ/รับซื้อ-asus-vivobook-อุบล/`

The production ASUS parent was crawled on 2026-09-03 and does not expose the new section/links.

Result: `STALE_VS_BATCH5_SOURCE`

## GSC

Latest finalized date in the supplied export: `2026-08-31`.

W2A source release date: `2026-09-03`.

Finalized post-release GSC days: `0`.

Therefore even after deployment, a later observation cycle will still be required before W2B authorization.

## Decision

- W2A source quality: `PASS` from Batch 3 static gates.
- W2A production deployment: `NOT ESTABLISHED; stale live parent fingerprints provide evidence Batch 5 source is not the current production source.`
- W2B authorization: `0/12`.
- W2B source creation: `BLOCKED`.
- W2B deploy: `BLOCKED`.
