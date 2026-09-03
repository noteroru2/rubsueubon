# ARCHITECTURE BATCH 0 — 400-PAGE BLUEPRINT

## Target

Current source-derived canonical routes: **211**

Qualified new READY candidates: **190**

Projected canonical total after all READY candidates:

# **401**

This reaches both:

- minimum target: 350+
- preferred architecture band: 380–420

No page has been created in production by this batch.

## Blueprint files

- `docs/seo/400-page-blueprint.csv`
- `data/seo/400-page-blueprint.json`

Blueprint rows:

| Status | Count |
|---|---:|
| EXISTING_OWNER | 141 |
| EXISTING_SUPPORT | 70 |
| READY | 190 |
| HOLD | 17 |
| REJECT | 5 |
| **Total blueprint rows** | **423** |

## READY distribution

| Cluster | READY |
|---|---:|
| Local/District×Service | 57 |
| Series/Notebook | 33 |
| Condition | 20 |
| Model/iPhone | 19 |
| Guide | 14 |
| Model/iPad | 12 |
| Model/Samsung | 8 |
| Series/Camera | 8 |
| Series/GPU | 6 |
| B2B | 6 |
| Model/Gaming | 5 |
| Series/Watch | 2 |

## Release waves

| Wave | Scope | READY |
|---|---|---:|
| W2 | Brand / Series | 47 |
| W3 | High-intent Model | 46 |
| W4 | Condition / Problem | 20 |
| W5 | Local Tier A | 34 |
| W6 | Local Tier B | 23 |
| W7 | B2B | 6 |
| W8 | Guide Authority | 14 |

## Local expansion policy

### Tier A / W5

Use strong GSC district evidence first.

Primary expansion districts in the READY set include:

- Warin Chamrap
- Det Udom
- Khueang Nai
- Khemarat
- Nam Yuen
- Khong Chiam
- Sirindhorn
- Trakan Phuet Phon
- Phibun Mangsahan

Existing local service owners are preserved; the blueprint only fills missing high-intent product children.

### Tier B / W6

Qualified limited expansion:

- Buntharik
- Na Chaluai
- Samrong
- Kut Khaopun
- Si Mueang Mai
- Nam Khun
- Pho Sai

Only 2–3 commercial child pages are proposed per district.

### Tier C / HOLD

No mass service matrix yet for:

- Tan Sum
- Sawang Wirawong
- Lao Suea Kok
- Thung Si Udom
- Na Tan
- Na Yia
- Don Mot Daeng

### Special: Mueang Ubon

District × Service candidates are HOLD because the core `...อุบล` money pages already overlap city intent heavily.

## Doorway prevention

Every READY Local/District×Service row requires:

- existing district parent
- existing commercial parent
- GSC/local evidence
- product-specific evaluation workflow
- unique local operational content plan
- cannibalization risk ≤ 2
- doorway risk ≤ 2
- thin-content risk ≤ 2

Changing only district names is not sufficient.

## Landmark policy

The following sample landmark candidates are explicitly **REJECT** in the blueprint:

- Central Ubon
- Ubon airport
- Big C Ubon
- Lotus Ubon
- Warin market

They are rejected because Batch 0 has no evidence that standalone landing pages are necessary.

## Proof policy

Five proof placeholders are HOLD.

No proof/case page becomes READY without real supporting evidence such as actual item details, date, location, images or transaction record.

## Candidate scoring gate

READY requires:

- positive score ≥ 15
- cannibalization risk ≤ 2
- doorway risk ≤ 2
- parent route exists
- local candidates must have a concrete uniqueness plan

`npm run seo:architecture` validates these gates.
