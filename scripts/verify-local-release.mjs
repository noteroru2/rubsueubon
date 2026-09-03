import fs from 'node:fs/promises';

const origin = 'https://xn--c3c3ab7an0ca2a0dm8p.com';
const profile = JSON.parse(await fs.readFile('src/config/business-profile.json', 'utf8'));
const config = JSON.parse(await fs.readFile('vercel.json', 'utf8'));
const audit = JSON.parse(await fs.readFile('reports/live-local-postdeploy-2026-09-03.json', 'utf8'));
const w2a = JSON.parse(await fs.readFile('data/seo/w2a-observation-gate.json', 'utf8')).w2a_pages;
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const livePages = new Map(audit.pages.map(p => [p.path, p]));
check(audit.summary.sitemapCount === 229 && audit.summary.sitemapErrors.length === 0, 'Live sitemap QA failed');
for (const item of w2a) {
  const page = livePages.get(item.url);
  check(page?.inSitemap && page.status === 200, `W2A not live: ${item.url}`);
}
const businesses = audit.pages.flatMap(p => p.schemas.filter(s => [s['@type']].flat().includes('LocalBusiness')).map(s => ({path:p.path, schema:s})));
for (const {path, schema} of businesses) {
  check(schema.address?.streetAddress === profile.address.streetAddress, `Address mismatch: ${path}`);
  check(schema.hasMap === profile.mapUrl, `Map mismatch: ${path}`);
  check(schema.geo?.latitude === profile.geo.latitude && schema.geo?.longitude === profile.geo.longitude, `Coordinates mismatch: ${path}`);
  check(schema.sameAs?.includes(profile.facebookUrl), `Facebook missing: ${path}`);
}
const indexText = audit.resources['/llms-full.txt'].text;
const indexUrls = indexText.split(/## URLs \(\d+\)/)[1]?.split('## Sitemap')[0].trim().split('\n').map(l => l.replace(/^- /, '').trim()).filter(Boolean) ?? [];
const sitemapUrls = new Set(audit.pages.filter(p => p.inSitemap).map(p => new URL(p.url).href));
check(indexUrls.length === 229 && new Set(indexUrls).size === 229 && indexUrls.every(u => sitemapUrls.has(new URL(u).href)), 'LLMs index differs from sitemap');
check(audit.resources['/__audit_nonexistent_20260903__/'].status === 404, 'Unknown URL must return 404');

const exactRules = [...new Map(config.redirects.filter(r => !r.has && !r.source.includes(':') && r.source.endsWith('/')).map(r => [decodeURI(r.source), r])).values()];
const redirects = [];
let cursor = 0;
await Promise.all(Array.from({length:4}, async () => {
  while (cursor < exactRules.length) {
    const rule = exactRules[cursor++];
    const source = new URL(rule.source, origin);
    try {
      const res = await fetch(source, {redirect:'manual', signal:AbortSignal.timeout(20000)});
      const location = res.headers.get('location');
      const expected = new URL(rule.destination, origin).href;
      const actual = location ? new URL(location, origin).href : '';
      const ok = [301,308].includes(res.status) && decodeURI(actual) === decodeURI(expected);
      check(ok, `Redirect failed: ${decodeURI(source.pathname)} (${res.status})`);
      redirects.push({path:decodeURI(source.pathname),status:res.status,location:location ? decodeURI(location) : null,ok});
    } catch (error) {
      errors.push(`Redirect request failed: ${source.pathname}: ${error}`);
    }
  }
}));
const result = {checkedAt:new Date().toISOString(),sitemapPages:sitemapUrls.size,w2aPages:w2a.length,localBusinessPages:businesses.length,llmsUrls:indexUrls.length,redirectsChecked:exactRules.length,redirects,errors};
await fs.writeFile('reports/local-release-verification-2026-09-03.json',JSON.stringify(result,null,2));
console.log(JSON.stringify({...result,redirects:undefined},null,2));
if (errors.length) process.exitCode = 1;
