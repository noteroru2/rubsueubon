# Phase 0 — Repo & SEO Structure Audit Report

This report presents the initial audit of the repository's build system, route configuration, and GSC coverage alignment for **รับซื้ออุบล.com**.

## 1. Executive Summary

- **Framework / Build System**: Astro (v6.4.4)
- **Primary Canonical Host**: `https://xn--c3c3ab7an0ca2a0dm8p.com/` (punycode of `https://รับซื้ออุบล.com/`)
- **Total Sitemap URLs**: 155
- **Total Built Routes**: 156 (155 indexable pages + 404 page)
- **Active Redirect Configuration Files**:
  - `vercel.json` (contains Vercel-specific routing and 301 redirects)
  - `public/_redirects` (Netlify-style redirects fallback)
  - `public/.htaccess` (Apache fallbacks)

## 2. Detailed Findings

### sitemap.xml Audit
The generated sitemap `dist/sitemap-0.xml` contains **155 URLs**. All URLs use trailing slashes and the canonical punycode base URL `https://xn--c3c3ab7an0ca2a0dm8p.com/`.

### Routes Audit
The Astro build outputs **156 HTML files**. The extra route is `/404.html`, which is correctly not included in the sitemap index.

### Noindex Check
Only one page contains `noindex` configuration:
- `src/pages/404.astro` (contains `noindex={true}`)
This is the correct behavior for 404 error pages. No active content pages contain noindex tags.

### Redirect Mapping & Thai Slug Integrity
All Thai slug aliases (`/พื้นที่/เมืองอุบลราชธานี/`, `/พื้นที่/วารินชำราบ/`, etc.) have corresponding permanent 301 redirect mappings to their respective English equivalents (`/พื้นที่/mueang-ubon-ratchathani/`, `/พื้นที่/warin-chamrap/`) in both `vercel.json` and `public/_redirects`.

No duplicate slugs or key clashes were found in `src/config/urls.ts`.
