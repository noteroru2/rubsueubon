import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const read = file => fs.readFileSync(path.join(root,file),'utf8');
const urls = [...read('dist/sitemap-0.xml').matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>decodeURI(new URL(m[1]).pathname));
const baseline = JSON.parse(read('reports/live-local-score-audit-2026-09-03.json')).pages.map(p=>p.path);
const photoPages = ['ภาพจริง-โน้ตบุ๊ก-asus-acer-อุบล','ภาพจริง-คอมประกอบ-อุบล','ภาพจริง-macbook-air-อุบล','ภาพจริง-insta360-x5-อุบล'].map(slug=>`/ผลงาน/${slug}/`);
const errors=[];
const assert=(ok,message)=>{if(!ok)errors.push(message);};
assert(urls.length===233,'Expected 229 original pages plus 4 photo articles');
for(const url of baseline)assert(urls.includes(url),`Original URL removed: ${url}`);
for(const url of photoPages)assert(urls.includes(url),`New photo article missing: ${url}`);
let promisePages=0, serviceCount=0, faqCount=0, evidenceCount=0, areaCount=0, pickupCount=0;
let combined='';
for(const url of urls){
  const html=read(path.join('dist',decodeURI(url),'index.html'));
  combined+=html;
  if(/(?:ภายใน|ไวใน|เร็วที่สุดใน|เบื้องต้นใน|ตีราคาใน)\s*5\s*(?:[-–]\s*10)?\s*นาที/.test(html)){promisePages++;errors.push(`Unconfirmed estimate time: ${url}`);}
  if(url.startsWith('/บริการ/')&&url!=='/บริการ/'){
    serviceCount++;
    if(html.includes('ต้องส่งข้อมูลอะไรเพื่อประเมิน?')&&html.includes('เป็นราคาสุดท้ายหรือไม่?'))faqCount++;
    if(/href="[^"#]*ผลงาน\/[^"#]+/.test(html)||html.includes('aria-label="ภาพสินค้าและผลงานที่เกี่ยวข้อง"'))evidenceCount++;
  }
  if(url.startsWith('/พื้นที่/')&&url!=='/พื้นที่/'){
    areaCount++;
    if(html.includes('สถานที่นัดรับร่วมกัน')&&html.includes('ตรวจสินค้าจริงและยืนยันราคาก่อนชำระเงิน'))pickupCount++;
  }
  if(photoPages.includes(url)){
    assert(html.includes('ภาพสินค้าจริงจากร้าน · วันที่เผยแพร่ภาพ'),`Photo incorrectly labelled: ${url}`);
    assert(html.includes('ImageObject'),`Photo schema missing: ${url}`);
    assert(!/>เคสจริง<\/p>/.test(html),`Photo article labelled completed case: ${url}`);
  }
}
const ids=JSON.parse(read('reports/owner-photo-sources-2026-09-03.json')).map(p=>p.id);
for(const id of ids)assert(combined.includes(`/_astro/${id}.`),`Owner photo not rendered: ${id}`);
assert(faqCount===serviceCount,'Some service pages lack product-specific FAQ');
assert(areaCount===26&&pickupCount===26,'All 26 area pages must show confirmed pickup steps');
const result={checkedAt:new Date().toISOString(),sitemap:urls.length,originalPagesRetained:baseline.length,newPhotoArticles:photoPages.length,ownerPhotos:ids.length,unconfirmedEstimateTimePages:promisePages,servicePages:serviceCount,servicePagesWithProductFaq:faqCount,servicePagesWithEvidence:evidenceCount,areaPages:areaCount,areaPagesWithPickupSteps:pickupCount,errors};
fs.writeFileSync(path.join(root,'reports/owner-photos-qa-2026-09-03.json'),JSON.stringify(result,null,2));
console.log(JSON.stringify(result,null,2));
if(errors.length)process.exitCode=1;
