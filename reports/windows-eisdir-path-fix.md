# Windows Astro EISDIR path fix

Cause isolated in the exported archive: Thai path names had been escaped as literal `#Uxxxx` sequences (for example the `src/pages/บริการ/` directory was stored as `src/pages/#U0e1a#U0e23.../`). Astro route discovery on Windows then failed while creating the route manifest with `EISDIR`.

Fix applied:

- Decoded all `#Uxxxx` path components back to real Unicode/Thai names.
- Updated textual path references in QA/architecture files to match the corrected filenames.
- No SEO URL ownership, canonical target, redirect destination, or page content intent was intentionally changed.

Recommended local verification:

```powershell
Remove-Item -Recurse -Force node_modules, .astro, dist -ErrorAction SilentlyContinue
npm ci
npm run dev
```

Then in a second terminal:

```powershell
npm run build
npm run seo:w2a-release
npm run seo:architecture
```
