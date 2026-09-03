import fs from 'node:fs/promises';

const origin = 'https://xn--c3c3ab7an0ca2a0dm8p.com';
const reportPath = process.argv[2] ?? 'reports/live-local-audit-2026-09-03.json';
const decode = (s) => { try { return decodeURI(s); } catch { return s; } };
const clean = (s = '') => s.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const attr = (tag, key) => tag.match(new RegExp(`\\b${key}=["']([^"']*)["']`, 'i'))?.[1] ?? '';
async function get(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(25000) });
    return { status: res.status, finalUrl: decode(res.url), headers: Object.fromEntries(['x-robots-tag', 'content-type', 'location'].map(k => [k, res.headers.get(k)])), html: await res.text() };
  } catch (error) { return { status: 0, error: String(error), html: '' }; }
}
const sitemap = await get(`${origin}/sitemap-0.xml`);
const urls = [...sitemap.html.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
const w2a = JSON.parse(await fs.readFile('data/seo/w2a-observation-gate.json', 'utf8')).w2a_pages.map(p => origin + p.url);
const queue = [...new Set([...urls, ...w2a.map(u => new URL(u).href)])];
const pages = [];
let cursor = 0;
async function worker() {
  while (cursor < queue.length) {
    const url = queue[cursor++];
    const r = await get(url);
    const metas = [...r.html.matchAll(/<meta\b[^>]*>/gi)].map(m => m[0]);
    const links = [...r.html.matchAll(/<link\b[^>]*>/gi)].map(m => m[0]);
    const schemas = []; let invalidJsonLd = 0;
    for (const m of r.html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
      try { const obj = JSON.parse(m[1]); schemas.push(...(Array.isArray(obj) ? obj : obj['@graph'] ?? [obj])); } catch { invalidJsonLd++; }
    }
    const anchors = [...r.html.matchAll(/<a\b[^>]*>/gi)].map(m => attr(m[0], 'href')).filter(Boolean);
    const internal = [...new Set(anchors.flatMap(h => { try { const u = new URL(h, url); return u.hostname === new URL(origin).hostname ? [decode(u.pathname)] : []; } catch { return []; } }))];
    const body = clean(r.html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ''));
    pages.push({ url: decode(url), path: decode(new URL(url).pathname), inSitemap: urls.includes(url), status: r.status, finalUrl: r.finalUrl, error: r.error, headers: r.headers,
      title: clean(r.html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]),
      description: attr(metas.find(m => attr(m, 'name') === 'description') ?? '', 'content'),
      robots: attr(metas.find(m => attr(m, 'name') === 'robots') ?? '', 'content'),
      canonical: decode(attr(links.find(m => attr(m, 'rel') === 'canonical') ?? '', 'href')),
      h1: [...r.html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => clean(m[1])),
      headings: [...r.html.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/gi)].map(m => clean(m[1])),
      schemaTypes: schemas.map(s => s['@type']), schemas, invalidJsonLd, internal, body,
      images: [...r.html.matchAll(/<img\b[^>]*>/gi)].map(m => ({ src: attr(m[0], 'src'), alt: attr(m[0], 'alt') })),
      htmlBytes: Buffer.byteLength(r.html), missingAlt: [...r.html.matchAll(/<img\b[^>]*>/gi)].filter(m => !/\balt=/.test(m[0])).length,
    });
  }
}
await Promise.all(Array.from({ length: 5 }, worker));
const resources = {};
for (const path of ['/robots.txt', '/llms.txt', '/llms-full.txt', '/sitemap-index.xml', '/__audit_nonexistent_20260903__/']) {
  const r = await get(origin + path); resources[path] = { status: r.status, finalUrl: r.finalUrl, text: path.endsWith('.txt') ? r.html : r.html.slice(0,800) };
}
const variants = [];
for (const url of ['http://xn--c3c3ab7an0ca2a0dm8p.com/', 'https://www.xn--c3c3ab7an0ca2a0dm8p.com/', origin + '/พื้นที่/วารินชำราบ/', origin + '/พื้นที่/ม่วงสามสิบ/', origin + '/บริการ/รับซื้อโทรศัพท์-อุบล/']) {
  try { const r = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(20000) }); variants.push({url:decode(url),status:r.status,location:decode(r.headers.get('location') ?? '')}); } catch (e) { variants.push({url,error:String(e)}); }
}
const indexed = pages.filter(p => p.inSitemap);
const dup = (key) => Object.entries(Object.groupBy(indexed, p => p[key])).filter(([k,v]) => k && v.length > 1).map(([value, rows]) => ({value, paths:rows.map(p=>p.path)}));
const summary = {
  checkedAt: new Date().toISOString(), sitemapStatus: sitemap.status, sitemapCount: urls.length, crawled: pages.length,
  sitemapErrors: indexed.filter(p => p.status !== 200 || /noindex/i.test(p.robots + p.headers?.['x-robots-tag']) || p.h1.length !== 1 || p.canonical !== p.url || !p.title || !p.description || p.invalidJsonLd).map(p => ({path:p.path,status:p.status,h1:p.h1.length,canonical:p.canonical,robots:p.robots})),
  duplicateTitles: dup('title'), duplicateDescriptions: dup('description'),
  groups: Object.fromEntries(Object.entries(Object.groupBy(indexed, p => p.path.split('/')[1] || 'home')).map(([k,v]) => [k,v.length])),
  w2a: pages.filter(p => !p.inSitemap).map(p => ({path:p.path,status:p.status,canonical:p.canonical})),
  schemaCounts: Object.fromEntries(Object.entries(Object.groupBy(indexed.flatMap(p => p.schemaTypes.flat()), x=>x)).map(([k,v])=>[k,v.length])),
  missingAlt: indexed.reduce((a,p)=>a+p.missingAlt,0), variants,
};
await fs.writeFile(reportPath, JSON.stringify({summary,resources,pages},null,2));
console.log(JSON.stringify(summary,null,2));
