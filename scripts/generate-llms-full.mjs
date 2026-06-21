/**
 * สร้าง public/llms-full.txt จาก sitemap หลัง build
 * รัน: node scripts/generate-llms-full.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const SITE = 'https://รับซื้ออุบล.com';

const PRIORITY_PATHS = [
  '/',
  '/บริการ/',
  '/พื้นที่/',
  '/ผลงาน/',
  '/ตัวอย่างเคสประเมิน/',
  '/วิธีประเมินราคา/',
  '/ติดต่อ/',
  '/คำถามที่พบบ่อย/',
];

function collectUrlsFromSitemap() {
  const sitemapPath = join(ROOT, 'dist', 'sitemap-0.xml');
  if (!existsSync(sitemapPath)) {
    console.warn('dist/sitemap-0.xml not found — run npm run build first');
    return PRIORITY_PATHS.map((p) => `${SITE}${p}`);
  }

  const xml = readFileSync(sitemapPath, 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  return [...new Set([...PRIORITY_PATHS.map((p) => `${SITE}${p}`), ...urls])].sort();
}

const urls = collectUrlsFromSitemap();

const content = `# รับซื้ออุบล.com — Full URL Index

> เว็บบริการรับซื้อและรับเทิร์นสินค้าไอทีมือหนึ่ง-มือสองในจังหวัดอุบลราชธานี
> ดำเนินการโดย WINNER IT / บริษัท อำพล เทรดดิ้ง จำกัด

## ติดต่อ
- LINE OA: @buyhub
- โทร: 095-547-9408
- เวลา: 09:00–19:30

## หมายเหตุ
- /ผลงาน/ = เคสรับซื้อจริง
- /ตัวอย่างเคสประเมิน/ = ตัวอย่างสมมติ ไม่ใช่ผลงานจริง

## URLs (${urls.length})

${urls.map((u) => `- ${u}`).join('\n')}

## Sitemap
- ${SITE}/sitemap-index.xml
`;

writeFileSync(join(ROOT, 'public', 'llms-full.txt'), content, 'utf8');
console.log(`Wrote public/llms-full.txt (${urls.length} URLs)`);
