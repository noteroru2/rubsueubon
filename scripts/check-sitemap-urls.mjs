import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const sitemapPath = path.join(distDir, 'sitemap-0.xml');
const vercelConfigPath = path.join(projectRoot, 'vercel.json');

console.log('--- RUNNING RIGOROUS SITEMAP INTEGRITY CHECK ---');

if (!fs.existsSync(sitemapPath)) {
  console.error('Sitemap not found! Run npm run build first.');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const urls = [];
const locRegex = /<loc>(https:\/\/xn--c3c3ab7an0ca2a0dm8p\.com([^<]*))<\/loc>/g;
let match;
while ((match = locRegex.exec(sitemapContent)) !== null) {
  urls.push({
    fullUrl: match[1],
    pathname: decodeURIComponent(match[2]),
    encodedPathname: match[2]
  });
}

console.log(`Loaded ${urls.length} URLs from sitemap.`);

// Load redirects from vercel.json
const vercelConfig = JSON.parse(fs.readFileSync(vercelConfigPath, 'utf-8'));
const redirects = vercelConfig.redirects || [];

// Decode all vercel redirect sources for comparison
const redirectSourcesDecoded = redirects.map(r => {
  try {
    return decodeURIComponent(r.source).replace('/:path*', '').replace(':path*', '');
  } catch (e) {
    return r.source;
  }
});

let failed = false;

urls.forEach(({ fullUrl, pathname, encodedPathname }) => {
  // 1. Check for 404 (local file existence)
  const relativeDir = pathname === '/' || pathname === '' ? 'index.html' : path.join(pathname, 'index.html');
  const localFilePath = path.join(distDir, relativeDir);
  
  if (!fs.existsSync(localFilePath)) {
    console.error(`[FAIL] 404: Sitemap URL ${fullUrl} has no built file at ${localFilePath}`);
    failed = true;
    return;
  }

  const html = fs.readFileSync(localFilePath, 'utf-8');

  // 2. Check for redirect URL (is this URL in our redirect list?)
  let matchingSource = null;
  const matchesRedirect = redirectSourcesDecoded.some(source => {
    if (source === '/' || source === '') return false;
    // Perform a more precise match
    // Either exact match, or if it is a directory pattern, check pathname matches properly
    const matches = pathname === source || (source.endsWith('/') && pathname.startsWith(source));
    if (matches) {
      matchingSource = source;
    }
    return matches;
  });
  if (matchesRedirect) {
    console.error(`[FAIL] REDIRECT IN SITEMAP: ${pathname} matches redirect source "${matchingSource}" in vercel.json`);
    failed = true;
  }

  // 3. Check for noindex URL
  const hasNoindex = /<meta\s+name=["']robots["']\s+content=["'][^"']*noindex[^"']*["']/i.test(html);
  if (hasNoindex) {
    console.error(`[FAIL] NOINDEX IN SITEMAP: ${pathname} contains robots noindex meta tag`);
    failed = true;
  }

  // 4. Check for canonical to other page
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (canonicalMatch) {
    const canonicalVal = canonicalMatch[1];
    const canonicalPath = decodeURIComponent(new URL(canonicalVal).pathname);
    if (canonicalPath !== pathname && canonicalPath !== pathname + '/' && pathname !== canonicalPath + '/') {
      console.error(`[FAIL] CANONICAL MISMATCH: ${pathname} has canonical pointing to ${canonicalPath}`);
      failed = true;
    }
  } else {
    console.error(`[FAIL] MISSING CANONICAL: ${pathname} has no canonical tag`);
    failed = true;
  }

  // 5. Check for old Thai area slug
  const thaiAreaNames = ['เมืองอุบลราชธานี', 'วารินชำราบ', 'เดชอุดม', 'พิบูลมังสาหาร', 'ตระการพืชผล', 'ม่วงสามสิบ', 'เขื่องใน', 'โขงเจียม', 'น้ำยืน', 'บุณฑริก'];
  const hasThaiAreaName = pathname.startsWith('/พื้นที่/') && thaiAreaNames.some(name => pathname.includes(name));
  if (hasThaiAreaName) {
    console.error(`[FAIL] THAI AREA SLUG IN SITEMAP: ${pathname} contains Thai area name`);
    failed = true;
  }

  // 6. Check for duplicate iPad alias
  if (pathname === '/บริการ/ipad/' || pathname === '/บริการ/ipad-ubon/' || pathname === '/บริการ/รับซื้อ-ipad/') {
    console.error(`[FAIL] DUPLICATE IPAD ALIAS IN SITEMAP: ${pathname}`);
    failed = true;
  }
});

if (failed) {
  console.error('--- SITEMAP INTEGRITY CHECK FAILED ---');
  process.exit(1);
} else {
  console.log('--- SITEMAP INTEGRITY CHECK PASSED (0 ERRORS) ---');
}
