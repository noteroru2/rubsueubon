import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const sitemapPath = path.join(distDir, 'sitemap-0.xml');

console.log('--- Starting Sitemap & SEO QA Audit ---');

if (!fs.existsSync(sitemapPath)) {
  console.error(`Sitemap not found at: ${sitemapPath}. Please run npm run build first.`);
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const locs = [];
const locRegex = /<loc>(https:\/\/xn--c3c3ab7an0ca2a0dm8p\.com([^<]*))<\/loc>/g;
let match;
while ((match = locRegex.exec(sitemapContent)) !== null) {
  locs.push({
    fullUrl: match[1],
    pathname: decodeURIComponent(match[2]),
  });
}

console.log(`Found ${locs.length} URLs in sitemap.`);

let errors = 0;
let warnings = 0;

locs.forEach(({ fullUrl, pathname }) => {
  // Normalize pathname to find local index.html
  let localPath;
  if (pathname === '/' || pathname === '') {
    localPath = path.join(distDir, 'index.html');
  } else {
    // pathname should end with / and map to directory/index.html
    const normalizedPath = pathname.endsWith('/') ? pathname : pathname + '/';
    localPath = path.join(distDir, normalizedPath, 'index.html');
  }

  if (!fs.existsSync(localPath)) {
    console.error(`[ERROR] File not found for sitemap URL: ${fullUrl} -> Checked local path: ${localPath}`);
    errors++;
    return;
  }

  const html = fs.readFileSync(localPath, 'utf-8');

  // 1. Canonical Self Check
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  if (!canonicalMatch) {
    console.error(`[ERROR] Missing canonical link on: ${pathname}`);
    errors++;
  } else {
    const canonicalValue = canonicalMatch[1];
    // Normalize both for comparison (Astro converts non-ascii to punycode automatically)
    if (canonicalValue !== fullUrl && canonicalValue !== encodeURI(fullUrl)) {
      console.error(`[ERROR] Canonical mismatch on ${pathname}: Expected "${fullUrl}", got "${canonicalValue}"`);
      errors++;
    }
  }

  // 2. Robots Noindex Check
  const robotsMatch = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
  if (robotsMatch && robotsMatch[1].toLowerCase().includes('noindex')) {
    console.error(`[ERROR] Page in sitemap is flagged with noindex: ${pathname}`);
    errors++;
  }

  // 3. H1 Count Check
  const h1Matches = html.match(/<h1[\s>]/gi);
  const h1Count = h1Matches ? h1Matches.length : 0;
  if (h1Count === 0) {
    console.warn(`[WARNING] No H1 found on: ${pathname}`);
    warnings++;
  } else if (h1Count > 1) {
    console.warn(`[WARNING] Multiple H1 tags (${h1Count}) found on: ${pathname}`);
    warnings++;
  }

  // 4. Internal Link Integrity Check (Optional - basic check)
  const linkRegex = /<a\s+[^>]*href=["']([^"']+)["']/gi;
  let linkMatch;
  while ((linkMatch = linkRegex.exec(html)) !== null) {
    const href = linkMatch[1];
    if (href.startsWith('/') && !href.startsWith('//')) {
      const decodedHref = decodeURIComponent(href.split('#')[0].split('?')[0]);
      if (decodedHref !== '/' && decodedHref !== '') {
        const linkLocalPath = path.join(distDir, decodedHref.endsWith('/') ? decodedHref : decodedHref + '/', 'index.html');
        // We only check if it points to a standard page (skipping assets or images that don't match the route pattern)
        if (decodedHref.startsWith('/บริการ/') || decodedHref.startsWith('/พื้นที่/') || decodedHref.startsWith('/บทความ/')) {
          if (!fs.existsSync(linkLocalPath)) {
            console.warn(`[WARNING] Broken internal link on ${pathname}: points to non-existent local route "${href}"`);
            warnings++;
          }
        }
      }
    }
  }
});

console.log('--- QA Audit Summary ---');
console.log(`Errors: ${errors}`);
console.log(`Warnings: ${warnings}`);

if (errors > 0) {
  console.error('QA Audit Failed!');
  process.exit(1);
} else {
  console.log('QA Audit Passed successfully!');
}
