import fs from 'node:fs';

const html = fs.readFileSync('dist/index.html', 'utf8');

const banned = [
  'สูงที่สุด',
  'ดีที่สุด',
  'อันดับ 1',
  'เปย์หนัก',
  'เงินก้อนโต',
  'รับจบทุกเคส',
  'ภายใน 5 นาที',
  'ไม่ลดราคาหน้างาน',
  'รับทุกรุ่น',
  'รับทุกสภาพ',
  'การันตีราคาสูงสุด',
  'จ่ายเงินสดทันที',
  'ฟรีทันที',
];

// ตรวจเฉพาะเนื้อหา ไม่รวม CSS (100% ใน style) หรือ attribute width
const withoutStyle = html.replace(/<style[\s\S]*?<\/style>/gi, '');
const checkText = withoutStyle.replace(/\bwidth="100%"/g, '');

const bannedFound = banned.filter((w) => checkText.includes(w));
const marketing100 = /\b100%\b/.test(checkText.replace(/<[^>]+>/g, ' '));
if (marketing100) bannedFound.push('100% (marketing)');

const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
const h1Texts = h1Matches.map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());

const sectionCDup = html.includes('ปัญหาที่พบบ่อยวิธีที่เราแก้ไข');

function countInBlock(block, label) {
  const re = new RegExp(label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  return (block.match(re) || []).length;
}

const headerBlock = html.split('<!-- Mobile menu -->')[0] || '';
const mobileBlock = (html.match(/aria-label="เมนูมือถือ"[\s\S]*?<\/nav>/) || [''])[0];
const footerBlock = (html.match(/<footer[\s\S]*?<\/footer>/) || [''])[0];

const macHeader = countInBlock(headerBlock, 'รับซื้อ MacBook/iMac/Apple');
const macMobile = countInBlock(mobileBlock, 'รับซื้อ MacBook/iMac/Apple');
const macFooterSvc = countInBlock(
  footerBlock.split('แบรนด์ยอดนิยม')[0] || footerBlock,
  'รับซื้อ MacBook/iMac/Apple',
);

const lineHref = html.includes('https://line.me/R/ti/p/@buyhub');
const lineCta = html.includes('ส่งรูปประเมินราคาทาง LINE @buyhub');

const areas = [
  'mueang-ubon-ratchathani',
  'warin-chamrap',
  'det-udom',
  'phibun-mangsahan',
  'khueang-nai',
  'khong-chiam',
  'nam-yuen',
  'buntharik',
  'trakan-phuet-phon',
  'muang-sam-sip',
];
const areasBlock = (html.match(/id="areas"[\s\S]*?(?=id="|$)/) || [''])[0];
const missingAreas = areas.filter((s) => !areasBlock.includes(`/พื้นที่/${s}/`));

const expectedH1 = 'รับซื้อสินค้าไอที อุบลราชธานี ส่งรูปประเมินราคาก่อนได้';

const checks = {
  h1_count: h1Matches.length,
  h1_text: h1Texts[0] || '',
  h1_ok: h1Matches.length === 1 && h1Texts[0]?.includes(expectedH1),
  banned_found: bannedFound,
  banned_ok: bannedFound.length === 0,
  section_c_dup: sectionCDup,
  section_c_ok: !sectionCDup,
  mac_header: macHeader,
  mac_mobile: macMobile,
  mac_footer: macFooterSvc,
  menu_ok: macHeader <= 1 && macMobile <= 1 && macFooterSvc <= 1,
  line_href_ok: lineHref,
  line_cta_ok: lineCta,
  line_ok: lineHref && lineCta,
  missing_areas: missingAreas,
  areas_ok: missingAreas.length === 0,
};

const allOk = Object.entries(checks)
  .filter(([k]) => k.endsWith('_ok'))
  .every(([, v]) => v === true);

console.log(JSON.stringify({ allOk, checks }, null, 2));
process.exit(allOk ? 0 : 1);
