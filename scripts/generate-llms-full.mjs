/**
 * สร้าง public/llms-full.txt และ dist/llms-full.txt จาก sitemap หลัง build
 * รัน: node scripts/generate-llms-full.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..');
const SITE = 'https://รับซื้ออุบล.com';
const profile = JSON.parse(readFileSync(join(ROOT, 'src/config/business-profile.json'), 'utf8'));
const address = `${profile.address.streetAddress} ${profile.address.addressLocality} จังหวัด${profile.address.addressRegion} ${profile.address.postalCode}`;
const contact = `- หน้าร้าน: ${profile.storeName} (${profile.operator})
- ที่อยู่: ${address}
- จุดสังเกต: ${profile.landmark}
- Google Maps: ${profile.mapUrl}
- Facebook: ${profile.facebookUrl}
- LINE OA: ${profile.lineOA} — ตอบ ${profile.lineHours}
- โทร: ${profile.phone}
- เวลาเปิดหน้าร้าน: ทุกวัน ${profile.storeHours.opens}–${profile.storeHours.closes} น.
- การเข้าร้านและนัดรับ: ${profile.visitNote}
- การประเมิน: ${profile.estimateNote}`;

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
    throw new Error('dist/sitemap-0.xml not found — run npm run build first');
  }

  const xml = readFileSync(sitemapPath, 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const canonicalUrls = [...new Set(urls.map((url) => new URL(url).href))];
  return canonicalUrls.sort((a, b) => {
    const priority = (url) => {
      const index = PRIORITY_PATHS.indexOf(decodeURI(new URL(url).pathname));
      return index === -1 ? PRIORITY_PATHS.length : index;
    };
    return priority(a) - priority(b) || a.localeCompare(b);
  });
}

const urls = collectUrlsFromSitemap();

const content = `# รับซื้ออุบล.com — Full URL Index

> เว็บบริการรับซื้อและรับเทิร์นสินค้าไอทีมือหนึ่ง-มือสองในจังหวัดอุบลราชธานี
> ดำเนินการโดย ${profile.operator} / ${profile.companyName}

## ติดต่อ
${contact}

## หมายเหตุ
- /ผลงาน/ = เคสรับซื้อจริง
- /ตัวอย่างเคสประเมิน/ = ตัวอย่างสมมติ ไม่ใช่ผลงานจริง

## URLs (${urls.length})

${urls.map((u) => `- ${u}`).join('\n')}

## Sitemap
- ${SITE}/sitemap-index.xml
`;

writeFileSync(join(ROOT, 'public', 'llms-full.txt'), content, 'utf8');
writeFileSync(join(ROOT, 'dist', 'llms-full.txt'), content, 'utf8');
const overview = `# รับซื้ออุบล.com

> รับซื้อและรับเทิร์นสินค้าไอทีในอุบลราชธานี ประเมินเบื้องต้นฟรีทาง LINE ${profile.lineOA}

## ข้อมูลร้าน
${contact}

## หน้าสำคัญ
${PRIORITY_PATHS.map((path) => `- ${SITE}${path}`).join('\n')}

## ขอบเขตข้อมูล
- /ผลงาน/ = เคสรับซื้อจริง
- /ตัวอย่างเคสประเมิน/ = ตัวอย่างสมมติเพื่ออธิบายการประเมิน ไม่ใช่รีวิวจากลูกค้าจริง
- ราคาขึ้นกับรุ่น สภาพ อุปกรณ์ และตลาดช่วงนั้น ยืนยันหลังตรวจสินค้าจริง

## Sitemap และรายการ URL
- ${SITE}/sitemap-index.xml
- ${SITE}/llms-full.txt
`;
writeFileSync(join(ROOT, 'public', 'llms.txt'), overview, 'utf8');
writeFileSync(join(ROOT, 'dist', 'llms.txt'), overview, 'utf8');
console.log(`Wrote public/llms-full.txt and dist/llms-full.txt (${urls.length} canonical URLs)`);
