# ARCHITECTURE BATCH 0 — URL OWNERSHIP

## Master Registry

Created:

- `docs/seo/url-ownership-master.csv`
- `data/seo/url-ownership-master.json`

The registry contains current canonical routes, historical GSC URLs, and redirect-rule ownership.

### Ownership counts

| Status | Count |
|---|---:|
| PROTECT_WINNER | 18 |
| KEEP_OWNER | 123 |
| KEEP_SUPPORT | 70 |
| REDIRECT_LEGACY | 99 |
| HOLD_REVIEW | 1 |

## Current Canonical Ownership

Current source-derived canonical routes: **211**

- Existing owner/protected routes: **141**
- Existing support routes: **70**
- P0 protected winners: **18**

P0 protection is based on actual GSC/local evidence and current ownership, not URL aesthetics.

## P0 Protected URLs

- `/` — 82 clicks / 1120 impressions / pos 6.61
- `/บริการ/รับซื้อ-ipad-อุบล/` — 11 clicks / 235 impressions / pos 7.99
- `/บริการ/รับซื้อ-iphone-อุบล/` — 8 clicks / 123 impressions / pos 8.83
- `/บริการ/รับซื้อ-macbook-อุบล/` — 6 clicks / 41 impressions / pos 7.66
- `/บริการ/รับซื้อ-อะไหล่คอม-อุบล/` — 15 clicks / 168 impressions / pos 7.79
- `/บริการ/รับซื้อ-เครื่องเกม-อุบล/` — 20 clicks / 132 impressions / pos 8.48
- `/บริการ/รับซื้อกล้อง-อุบล/` — 8 clicks / 70 impressions / pos 7.69
- `/บริการ/รับซื้อคอมพิวเตอร์-อุบล/` — 7 clicks / 106 impressions / pos 10.36
- `/บริการ/รับซื้อมือถือ-อุบล/` — 65 clicks / 870 impressions / pos 7.88
- `/พื้นที่/det-udom/` — 12 clicks / 221 impressions / pos 7.16
- `/พื้นที่/khemarat/` — 4 clicks / 71 impressions / pos 7.49
- `/พื้นที่/khong-chiam/` — 1 clicks / 56 impressions / pos 6.09
- `/พื้นที่/khueang-nai/` — 6 clicks / 140 impressions / pos 8.41
- `/พื้นที่/mueang-ubon-ratchathani/` — 4 clicks / 46 impressions / pos 7.65
- `/พื้นที่/nam-yuen/` — 7 clicks / 63 impressions / pos 7.59
- `/พื้นที่/sirindhorn/` — 2 clicks / 54 impressions / pos 7.13
- `/พื้นที่/trakan-phuet-phon/` — 2 clicks / 46 impressions / pos 7.59
- `/พื้นที่/warin-chamrap/` — 18 clicks / 214 impressions / pos 6.64

## Redirect Ownership

The current repo contains overlapping redirect configuration across:

- `vercel.json`
- `astro.config.mjs`
- `public/_redirects`

Static inspection found:

- 78 unique redirect source patterns across the three systems
- 10 duplicate rule sources repeated across configuration systems
- **0 conflicting destinations**
- **0 detected redirect destination chains** among concrete destinations
- **0 current canonical routes that also match a redirect source**

The duplicate rules are maintenance duplication, not a confirmed SEO conflict, because their destinations agree.

## Internal Links to Historical GSC Losers

For the 26 normalized historical GSC URLs that currently redirect, literal source scanning found:

**0 current source links pointing to those GSC loser paths**

This supports keeping the current winners rather than reopening old URL variants.

## Important Ownership Families

### Smartphone

Owner:

`/บริการ/รับซื้อมือถือ-อุบล/`

Historical loser:

`/บริการ/รับซื้อโทรศัพท์-อุบล/` → current owner

Do not restore the phone synonym as an indexable page.

### iPhone

Owner hub:

`/บริการ/รับซื้อ-iphone-อุบล/`

Standalone model owners already exist for the currently released model cluster in source.

Historical nested variants under:

- `/บริการ/รับซื้อ-iphone/...`
- `/บริการ/รับซื้อ-iphone-อุบล/...`

are redirects where applicable and must remain losers.

### iPad

Owner hub:

`/บริการ/รับซื้อ-ipad-อุบล/`

Standalone family/model owners include iPad Pro, Air, mini and selected generations.

Historical variants such as:

- `/บริการ/ipad-ubon/...`
- `/บริการ/ipad/...`
- `/บริการ/รับซื้อ-ipad/...`
- nested `/บริการ/รับซื้อ-ipad-อุบล/...`

are legacy redirect space, not a reason to recreate nested duplicates.

### MacBook

Owner hub:

`/บริการ/รับซื้อ-macbook-อุบล/`

Current nested owners intentionally retained only for:

- MacBook Air M1
- MacBook Pro M1
- MacBook Intel

M2/M3 and later mapped standalone pages must remain standalone winners where current ownership already points there.

### Camera

Owner hub:

`/บริการ/รับซื้อกล้อง-อุบล/`

Brand pages and five current Sony camera model pages are supporting/child owners.

Legacy `/บริการ/รับซื้อกล้อง/...` and alternate Sony spelling routes are redirects.

### Local

District hubs remain owners for broad district intent.

District × Service pages are children only when they add product-specific commercial intent and unique local operational content.

`เมืองอุบล` is treated specially because the province-wide money pages already strongly overlap city intent.

## Unresolved Migration Gap

`/บริการ/รับซื้อโน้ตบุ๊กเสีย-อุบล/`

GSC: 0 clicks / 1 impression / position 43.

Current source has:

`/บริการ/notebook-broken-ubon/`

and internal links point to the current English-slug path.

No redirect was found from the old Thai GSC path.

**Batch 0 action: HOLD_REVIEW only. No production redirect changed.**
