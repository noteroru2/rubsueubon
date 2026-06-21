import fs from 'fs';
import path from 'path';

const servicesDir = path.join('src/content/services');
const modelsDir = path.join('src/content/model-services');

function writeIfMissing(filePath, content) {
  if (fs.existsSync(filePath)) {
    console.log('skip (exists):', filePath);
    return false;
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('created:', filePath);
  return true;
}

function serviceFrontmatter({
  title,
  description,
  subheadline,
  navLabel,
  geoLinkLabel,
  keywords,
  category,
  image = '/images/services/notebook-ubon.webp',
  brands = [],
  accepted,
  rejected,
  order,
  slug,
  parentSlug,
  parentLabel,
  faqs,
}) {
  const brandsYaml = brands.length ? `\nbrands: [${brands.map((b) => `'${b}'`).join(', ')}]` : '';
  const faqYaml = faqs
    .map(
      (f) => `  - question: '${f.q.replace(/'/g, "''")}'\n    answer: '${f.a.replace(/'/g, "''")}'`,
    )
    .join('\n');

  return `---
title: '${title.replace(/'/g, "''")}'
description: '${description.replace(/'/g, "''")}'
subheadline: '${subheadline.replace(/'/g, "''")}'
navLabel: '${navLabel.replace(/'/g, "''")}'
geoLinkLabel: '${geoLinkLabel.replace(/'/g, "''")}'
keywords:
${keywords.map((k) => `  - '${k.replace(/'/g, "''")}'`).join('\n')}
category: '${category}'
featuredImage: '${image}'${brandsYaml}
acceptedConditions:
${accepted.map((a) => `  - '${a.replace(/'/g, "''")}'`).join('\n')}
rejectedConditions:
${rejected.map((r) => `  - '${r.replace(/'/g, "''")}'`).join('\n')}
order: ${order}
slug: '${slug}'
tier: brand
parentSlug: ${parentSlug}
parentLabel: '${parentLabel.replace(/'/g, "''")}'
faqs:
${faqYaml}
---
`;
}

function modelFrontmatter({ title, description, slug, brand, modelName, productType, serviceType, parentService, faqs }) {
  const faqYaml = faqs
    .map(
      (f) => `  - question: "${f.q.replace(/"/g, '\\"')}"\n    answer: "${f.a.replace(/"/g, '\\"')}"`,
    )
    .join('\n');

  return `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
slug: "${slug}"
category: "model-service"
brand: "${brand}"
modelName: "${modelName}"
productType: "${productType}"
serviceType: "${serviceType}"
areaServed: "อุบลราชธานี"
parentService: "${parentService}"
isModelPage: true
ctaText: "ส่งรูปประเมินราคาทาง LINE"
faqs:
${faqYaml}
---
`;
}

const commonRejected = [
  'เครื่องที่มีรหัสผ่าน BIOS/ระบบที่ปลดล็อคไม่ได้',
  'เครื่องที่มีหลักฐานว่าเป็นของโจรกรรม',
];

const notebookRelated = `
## ลิงก์บริการโน้ตบุ๊กที่เกี่ยวข้อง

- [รับซื้อโน้ตบุ๊ก อุบล](/บริการ/รับซื้อโน้ตบุ๊ก-อุบล/) — หน้าหลักหมวดโน้ตบุ๊ก
- [รับซื้อโน้ตบุ๊กเกมมิ่ง อุบล](/บริการ/รับซื้อโน้ตบุ๊ก-gaming-อุบล/)
- [รับซื้อโน้ตบุ๊กเสีย อุบล](/บริการ/รับซื้อโน้ตบุ๊กเสีย-อุบล/)
- [รับซื้อโน้ตบุ๊กจอแตก อุบล](/บริการ/รับซื้อโน้ตบุ๊กจอแตก-อุบล/)
- [รับซื้อโน้ตบุ๊กเปิดไม่ติด อุบล](/บริการ/รับซื้อโน้ตบุ๊กเปิดไม่ติด-อุบล/)
- [รับซื้อโน้ตบุ๊ก ASUS อุบล](/บริการ/รับซื้อโน้ตบุ๊ก-asus-อุบล/)
- [รับซื้อโน้ตบุ๊ก Acer อุบล](/บริการ/รับซื้อโน้ตบุ๊ก-acer-อุบล/)
- [รับซื้อ MacBook อุบล](/บริการ/รับซื้อ-macbook-อุบล/)
`;

const notebookVariants = [
  {
    file: 'notebook-gaming-ubon.md',
    slug: 'รับซื้อโน้ตบุ๊ก-gaming-อุบล',
    navLabel: 'รับซื้อโน้ตบุ๊กเกมมิ่ง',
    title: 'รับซื้อโน้ตบุ๊กเกมมิ่ง อุบลราชธานี ประเมินตามสเปค GPU และสภาพจริง',
    description:
      'รับซื้อโน้ตบุ๊กเกมมิ่ง ASUS ROG, Acer Predator, MSI, Lenovo Legion ในอุบลราชธานี ประเมินตามการ์ดจอ CPU RAM และสภาพจริง ส่งรูปสเปกทาง LINE @buyhub',
    keywords: ['รับซื้อโน้ตบุ๊กเกมมิ่ง อุบล', 'ขายโน้ตบุ๊คเกมมิ่ง อุบล', 'รับซื้อ ASUS ROG อุบล'],
    brands: ['ASUS', 'Acer', 'MSI', 'Lenovo', 'HP'],
    accepted: ['โน้ตบุ๊กเกมมิ่ง RTX/GTX ทุกรุ่น', 'เครื่องสเปคสูง RAM 16GB ขึ้นไป', 'เครื่องมีรอยใช้งานปกติ'],
    intro:
      'โน้ตบุ๊กเกมมิ่งมีมูลค่าสูงเมื่อสเปคยังตรงความต้องการตลาด เรารับพิจารณาเครื่องเกมมิ่งในอุบลราชธานีโดยดู GPU, CPU, RAM, SSD และสภาพระบบระบายความร้อนเป็นหลัก',
    send: 'ส่งรูปหน้าจอ System Information / Task Manager แสดง GPU, รูปตัวเครื่อง และแจ้งอาการความร้อนหรือเสียงพัดลม (ถ้ามี)',
    faqs: [
      { q: 'โน้ตบุ๊กเกม RTX 4060/4070 รับซื้อไหม?', a: 'รับครับ ราคาประเมินขึ้นอยู่กับรุ่น GPU, CPU, RAM, SSD และสภาพจอ/แบต ส่งสเปกมาทาง LINE เพื่อราคาเบื้องต้น' },
      { q: 'เครื่องร้อนง easily ลดราคาไหม?', a: 'อาการความร้อนสูงหรือพัดลมดังอาจมีผลต่อราคาเล็กน้อย แจ้งอาการตรงๆ มาช่วยให้ประเมินแม่นขึ้น' },
      { q: 'ไม่มีกล่อง ขายได้ไหม?', a: 'ได้ครับ มูลค่าหลักอยู่ที่ตัวเครื่องและสายชาร์จแท้ กล่องไม่มีผลมาก' },
    ],
  },
  {
    file: 'notebook-broken-ubon.md',
    slug: 'รับซื้อโน้ตบุ๊กเสีย-อุบล',
    navLabel: 'รับซื้อโน้ตบุ๊กเสีย',
    title: 'รับซื้อโน้ตบุ๊กเสีย อุบลราชธานี ประเมินตามชิ้นส่วนที่ใช้ได้',
    description:
      'รับซื้อโน้ตบุ๊กเสีย เปิดไม่ติด จอดำ เมนบอร์ดมีปัญหา ในอุบลราชธานี ประเมินตามมูลค่าอะไหล่ RAM SSD การ์ดจอ ส่งรูปและอาการทาง LINE',
    keywords: ['รับซื้อโน้ตบุ๊กเสีย อุบล', 'ขายโน้ตบุ๊กพัง อุบล', 'รับซื้อโน้ตบุ๊กเปิดไม่ติด อุบล'],
    accepted: ['เครื่องเปิดไม่ติด', 'จอดำ แต่ตัวเครื่องยังมีชิ้นส่วนมีค่า', 'เมนบอร์ดเสียแต่ SSD/RAM ใช้ได้'],
    intro:
      'โน้ตบุ๊กเสียยังมีมูลค่าจากชิ้นส่วนภายใน เช่น SSD, RAM, การ์ดจอ (บางรุ่น) เรารับพิจารณาตามสภาพจริงและอธิบายอาการที่พบ',
    send: 'ส่งรูปตัวเครื่อง แจ้งอาการ (เปิดไม่ติด/มีไฟ/มีเสียง) และสเปกที่จำได้ หรือรูปสติกเกอร์ใต้เครื่อง',
    faqs: [
      { q: 'เปิดไม่ติดเลย รับไหม?', a: 'รับพิจารณาครับ โดยประเมินตามรุ่นและชิ้นส่วนที่น่าจะยังมีมูลค่า' },
      { q: 'เมนบอร์ดเสีย ยังได้เงินไหม?', a: 'ได้ครับ หาก SSD RAM หรือการ์ดจอยังใช้งานได้ อาจมีมูลค่าแยกต่างหาก' },
    ],
  },
  {
    file: 'notebook-cracked-screen-ubon.md',
    slug: 'รับซื้อโน้ตบุ๊กจอแตก-อุบล',
    navLabel: 'รับซื้อโน้ตบุ๊กจอแตก',
    title: 'รับซื้อโน้ตบุ๊กจอแตก อุบลราชธานี ประเมินตามสภาพจอและตัวเครื่อง',
    description:
      'รับซื้อโน้ตบุ๊กจอแตก จอเป็นรอย จอเสีย ในอุบลราชธานี ประเมินราคาตามระดับความเสียหายและสเปคเครื่อง ส่งรูปจอทาง LINE',
    keywords: ['รับซื้อโน้ตบุ๊กจอแตก อุบล', 'ขายโน้ตบุ๊กจอเสีย อุบล'],
    accepted: ['จอแตกแต่เครื่องทำงานได้', 'จอมีรอย/จุดดำ/Backlight เสีย', 'ทุกแบรนด์'],
    intro:
      'จอแตกไม่ได้หมายความว่าเครื่องไม่มีมูลค่า เราประเมินตามสเปค สภาพจอ และความพร้อมใช้งานส่วนอื่น',
    send: 'ถ่ายรูปจอที่เปิดอยู่ (ถ้าเปิดได้) และรูปรอยแตกชัดเจน พร้อมแจ้งรุ่น/สเปค',
    faqs: [
      { q: 'จอแตกแต่ใช้งานได้ ลดราคาเยอะไหม?', a: 'มีผลต่อราคาตามค่าซ่อมจอ แต่ยังรับซื้อได้ ส่งรูปมาประเมินเบื้องต้นก่อน' },
    ],
  },
  {
    file: 'notebook-no-power-ubon.md',
    slug: 'รับซื้อโน้ตบุ๊กเปิดไม่ติด-อุบล',
    navLabel: 'รับซื้อโน้ตบุ๊กเปิดไม่ติด',
    title: 'รับซื้อโน้ตบุ๊กเปิดไม่ติด อุบลราชธานี ประเมินตามอาการและสเปค',
    description:
      'รับซื้อโน้ตบุ๊กเปิดไม่ติด กด Power ไม่ขึ้น ในอุบลราชธานี ประเมินตามรุ่นและชิ้นส่วนที่เหลือ ส่งรูปและอธิบายอาการทาง LINE',
    keywords: ['รับซื้อโน้ตบุ๊กเปิดไม่ติด อุบล', 'โน้ตบุ๊กกดเปิดไม่ติด ขาย อุบล'],
    accepted: ['กดเปิดไม่ติด', 'มีไฟแต่ไม่บูต', 'เคยใช้งานได้ปกติก่อนหน้า'],
    intro:
      'อาการเปิดไม่ติดมีหลายสาเหตุ เรารับพิจารณาโดยดูรุ่น สเปค และอาการที่แจ้ง เพื่อประเมินมูลค่าเบื้องต้น',
    send: 'แจ้งอาการ (ไฟ/เสียง/กลิ่น) ส่งรูปตัวเครื่องและสติกเกอร์สเปค ถ้ามี',
    faqs: [
      { q: 'เสียบชาร์จแล้วไม่ติด รับไหม?', a: 'รับพิจารณาครับ อาจเป็นที่แบต อะแดปเตอร์ หรือเมนบอร์ด แจ้งอาการมาให้ครบ' },
    ],
  },
  {
    file: 'notebook-asus-ubon.md',
    slug: 'รับซื้อโน้ตบุ๊ก-asus-อุบล',
    navLabel: 'รับซื้อโน้ตบุ๊ก ASUS',
    title: 'รับซื้อโน้ตบุ๊ก ASUS อุบลราชธานี ROG, TUF, Vivobook, ZenBook',
    description:
      'รับซื้อโน้ตบุ๊ก ASUS ทุกซีรีส์ในอุบลราชธานี รวม ROG, TUF Gaming, Vivobook, ZenBook ประเมินตามรุ่นและสภาพ ส่งรูปทาง LINE',
    keywords: ['รับซื้อโน้ตบุ๊ก ASUS อุบล', 'รับซื้อ ASUS ROG อุบล', 'ขายโน้ตบุ๊ก asus อุบล'],
    brands: ['ASUS'],
    accepted: ['ASUS ROG / TUF / Vivobook / ZenBook', 'ทุกสภาพการใช้งาน'],
    intro: 'ASUS เป็นยี่ห้อที่หมุนเวียนเร็วในอุบล โดยเฉพาะสาย ROG และ TUF เราประเมินตามรุ่น GPU CPU และสภาพจริง',
    send: 'ส่งรูปสติกเกอร์สเปค หน้าจอ System Information และรูปตัวเครื่อง',
    faqs: [{ q: 'ROG Strix กับ TUF ต่างกันไหมในการประเมิน?', a: 'ROG สเปคสูงมักมีมูลค่าตาม GPU/CPU สูงกว่า TUF ส่งสเปกมาเพื่อราคาเบื้องต้น' }],
  },
  {
    file: 'notebook-acer-ubon.md',
    slug: 'รับซื้อโน้ตบุ๊ก-acer-อุบล',
    navLabel: 'รับซื้อโน้ตบุ๊ก Acer',
    title: 'รับซื้อโน้ตบุ๊ก Acer อุบลราชธานี Nitro, Predator, Aspire',
    description: 'รับซื้อโน้ตบุ๊ก Acer ในอุบลราชธานี รวม Nitro, Predator, Aspire ประเมินตามสเปคและสภาพ ส่งรูป LINE @buyhub',
    keywords: ['รับซื้อโน้ตบุ๊ก Acer อุบล', 'ขาย acer nitro อุบล'],
    brands: ['Acer'],
    accepted: ['Acer Nitro / Predator / Aspire / Swift'],
    intro: 'Acer Nitro และ Predator เป็นที่นิยมในตลาดมือสอง เรารับพิจารณาตามสเปคและสภาพจริง',
    send: 'ส่งรูปสเปคและสภาพตัวเครื่อง',
    faqs: [{ q: 'Acer Nitro 5 รับซื้อไหม?', a: 'รับครับ ส่งสเปค GPU และรูปสภาพมาประเมินได้' }],
  },
  {
    file: 'notebook-lenovo-ubon.md',
    slug: 'รับซื้อโน้ตบุ๊ก-lenovo-อุบล',
    navLabel: 'รับซื้อโน้ตบุ๊ก Lenovo',
    title: 'รับซื้อโน้ตบุ๊ก Lenovo อุบลราชธานี ThinkPad, IdeaPad, Legion',
    description: 'รับซื้อโน้ตบุ๊ก Lenovo ThinkPad, IdeaPad, Legion ในอุบล ประเมินตามรุ่นและสภาพ ส่งรูปทาง LINE',
    keywords: ['รับซื้อโน้ตบุ๊ก Lenovo อุบล', 'รับซื้อ ThinkPad อุบล'],
    brands: ['Lenovo'],
    accepted: ['ThinkPad / IdeaPad / Legion / Yoga'],
    intro: 'Lenovo ThinkPad ยังมีความต้องการในตลาดงาน ส่วน Legion เป็นสายเกมมิ่งที่เรารับประเมินตาม GPU',
    send: 'ส่งรูปสเปคและแบตเตอรี่ (ถ้าเป็น ThinkPad แจ้ง Cycle ได้จะดี)',
    faqs: [{ q: 'ThinkPad รุ่นเก่ายังรับไหม?', a: 'รับพิจารณาครับ ตามสเปค CPU RAM SSD และสภาพ' }],
  },
  {
    file: 'notebook-dell-ubon.md',
    slug: 'รับซื้อโน้ตบุ๊ก-dell-อุบล',
    navLabel: 'รับซื้อโน้ตบุ๊ก Dell',
    title: 'รับซื้อโน้ตบุ๊ก Dell อุบลราชธานี XPS, Inspiron, Latitude',
    description: 'รับซื้อโน้ตบุ๊ก Dell XPS, Inspiron, Latitude ในอุบล ประเมินตามสเปคและสภาพ ส่งรูป LINE @buyhub',
    keywords: ['รับซื้อโน้ตบุ๊ก Dell อุบล', 'รับซื้อ Dell XPS อุบล'],
    brands: ['Dell'],
    accepted: ['Dell XPS / Inspiron / Latitude / G Series'],
    intro: 'Dell XPS และ Latitude มักมีมูลค่าดีเมื่อสภาพสมบูรณ์ เราประเมินตามสเปคและสภาพจอ/แบต',
    send: 'ส่งรูป Service Tag สเปค และสภาพตัวเครื่อง',
    faqs: [{ q: 'Dell XPS จอ Touch รับไหม?', a: 'รับครับ แจ้งรุ่นจอและสภาพมาด้วย' }],
  },
  {
    file: 'notebook-hp-ubon.md',
    slug: 'รับซื้อโน้ตบุ๊ก-hp-อุบล',
    navLabel: 'รับซื้อโน้ตบุ๊ก HP',
    title: 'รับซื้อโน้ตบุ๊ก HP อุบลราชธานี Pavilion, Envy, Omen',
    description: 'รับซื้อโน้ตบุ๊ก HP Pavilion, Envy, Omen ในอุบล ประเมินตามสเปคและสภาพ ส่งรูปทาง LINE',
    keywords: ['รับซื้อโน้ตบุ๊ก HP อุบล', 'รับซื้อ HP Omen อุบล'],
    brands: ['HP'],
    accepted: ['HP Pavilion / Envy / Omen / EliteBook'],
    intro: 'HP Omen เป็นสายเกมมิ่งที่เรารับบ่อย ประเมินตาม GPU และสภาพการใช้งานจริง',
    send: 'ส่งรูปสเปคและสภาพตัวเครื่อง',
    faqs: [{ q: 'HP Omen การ์ดจอ RTX รับไหม?', a: 'รับครับ ส่งสเปคและรูปมาประเมินเบื้องต้น' }],
  },
];

let order = 21;
for (const v of notebookVariants) {
  const body = `${v.intro}

## สิ่งที่ควรส่งมาประเมิน

${v.send}

## ขั้นตอน

1. แอด LINE **@buyhub** ส่งรูปและรายละเอียด
2. รับราคาเบื้องต้นตามข้อมูลที่ส่งมา
3. นัดตรวจสอบและรับเงินตามเงื่อนไขที่ตกลง
${notebookRelated}
`;
  const content =
    serviceFrontmatter({
      title: v.title,
      description: v.description,
      subheadline: 'ส่งรูปประเมินราคาเบื้องต้นฟรี ครอบคลุมทุกอำเภอในอุบลราชธานี',
      navLabel: v.navLabel,
      geoLinkLabel: v.navLabel,
      keywords: v.keywords,
      category: 'notebook',
      brands: v.brands ?? [],
      accepted: v.accepted,
      rejected: commonRejected,
      order: order++,
      slug: v.slug,
      parentSlug: 'notebook-ubon',
      parentLabel: 'รับซื้อโน้ตบุ๊ก',
      faqs: v.faqs,
    }) + body;
  writeIfMissing(path.join(servicesDir, v.file), content);
}

// PC / B2B variants
const pcVariants = [
  {
    file: 'pc-custom-build-ubon.md',
    slug: 'รับซื้อคอมประกอบ-อุบล',
    navLabel: 'รับซื้อคอมประกอบ',
    title: 'รับซื้อคอมประกอม อุบลราชธานี ประเมินตามสเปคชิ้นส่วน',
    description: 'รับซื้อคอมประกอม คอมตั้งโต๊ะมือสอง ในอุบล ประเมินตาม CPU GPU RAM SSD Case ส่งรูปสเปกทาง LINE',
    keywords: ['รับซื้อคอมประกอม อุบล', 'ขายคอมประกอบ อุบล'],
    category: 'computer',
    image: '/images/services/pc-gaming-desktop.webp',
    parentSlug: 'pc-gaming-ubon',
    parentLabel: 'รับซื้อ PC Gaming',
    accepted: ['คอมประกอมครบชุด', 'ขายแยกชิ้น CPU GPU RAM SSD'],
  },
  {
    file: 'pc-office-ubon.md',
    slug: 'รับซื้อคอมสำนักงาน-อุบล',
    navLabel: 'รับซื้อคอมสำนักงาน',
    title: 'รับซื้อคอมสำนักงาน อุบลราชธานี Desktop All-in-One',
    description: 'รับซื้อคอมสำนักงาน คอมตั้งโต๊ะ All-in-One ในอุบล ประเมินตามสเปคและจำนวนเครื่อง ส่งรูปทาง LINE',
    keywords: ['รับซื้อคอมสำนักงาน อุบล', 'ขายคอมออฟฟิศ อุบล'],
    category: 'computer',
    image: '/images/services/pc-gaming-desktop.webp',
    parentSlug: 'b2b-lot-ubon',
    parentLabel: 'รับซื้อคอมยกล็อต',
    accepted: ['Desktop PC สำนักงาน', 'All-in-One', 'ยกล็อตหลายเครื่อง'],
  },
  {
    file: 'pc-corporate-ubon.md',
    slug: 'รับซื้อคอมบริษัท-อุบล',
    navLabel: 'รับซื้อคอมบริษัท',
    title: 'รับซื้อคอมบริษัท อุบลราชธานี รับยกล็อตสำนักงาน',
    description: 'รับซื้อคอมบริษัท คอมสำนักงานยกล็อต ในอุบล ประเมินตามสเปค จำนวน และสภาพ ส่งรายละเอียดทาง LINE',
    keywords: ['รับซื้อคอมบริษัท อุบล', 'รับซื้อคอมออฟฟิศ อุบล'],
    category: 'computer',
    image: '/images/services/notebook-ubon.webp',
    parentSlug: 'b2b-lot-ubon',
    parentLabel: 'รับซื้อคอมยกล็อต',
    accepted: ['คอมบริษัทยกล็อต 5 เครื่องขึ้นไป', 'มีรายการสเปกครบ'],
  },
  {
    file: 'pc-school-ubon.md',
    slug: 'รับซื้อคอมโรงเรียน-อุบล',
    navLabel: 'รับซื้อคอมโรงเรียน',
    title: 'รับซื้อคอมโรงเรียน อุบลราชธานี ห้องคอมยกล็อต',
    description: 'รับซื้อคอมโรงเรียน คอมห้องเรียนยกล็อต ในอุบล ประเมินตามจำนวนและสเปค ประสานหน่วยงานได้',
    keywords: ['รับซื้อคอมโรงเรียน อุบล', 'ขายคอมห้องคอม อุบล'],
    category: 'computer',
    image: '/images/services/notebook-ubon.webp',
    parentSlug: 'b2b-lot-ubon',
    parentLabel: 'รับซื้อคอมยกล็อต',
    accepted: ['คอมห้องคอมโรงเรียน', 'มีเอกสารอนุมัติหน่วยงาน'],
  },
  {
    file: 'pc-lot-ubon.md',
    slug: 'รับซื้อคอมยกล็อต-อุบล',
    navLabel: 'รับซื้อคอมยกล็อต',
    title: 'รับซื้อคอมยกล็อต อุบลราชธานี บริษัท โรงเรียน หน่วยงาน',
    description: 'รับซื้อคอมยกล็อต ในอุบล ประเมินราคารวมตามสเปคและจำนวน ส่งรายการและรูปทาง LINE @buyhub',
    keywords: ['รับซื้อคอมยกล็อต อุบล', 'รับซื้อคอมบริษัท อุบล'],
    category: 'computer',
    image: '/images/services/notebook-ubon.webp',
    parentSlug: 'b2b-lot-ubon',
    parentLabel: 'รับซื้อคอมยกล็อต',
    accepted: ['ยกล็อต 5 เครื่องขึ้นไป', 'มีรายการสเปก'],
  },
  {
    file: 'monitor-ubon.md',
    slug: 'รับซื้อจอคอม-อุบล',
    navLabel: 'รับซื้อจอคอม',
    title: 'รับซื้อจอคอม อุบลราชธานี Gaming Monitor 4K',
    description: 'รับซื้อจอคอม จอเกมมิ่ง จอ 4K ในอุบล ประเมินตามขนาด refresh rate และสภาพ ส่งรูปทาง LINE',
    keywords: ['รับซื้อจอคอม อุบล', 'ขายจอมอนิเตอร์ อุบล'],
    category: 'computer',
    image: '/images/services/pc-gaming-desktop.webp',
    parentSlug: 'tv-electronics-ubon',
    parentLabel: 'รับซื้อทีวี/จอคอม',
    accepted: ['จอ 24-32 นิ้ว', 'จอ Gaming 144Hz+', 'จอ 4K'],
  },
  {
    file: 'gpu-ubon.md',
    slug: 'รับซื้อการ์ดจอ-อุบล',
    navLabel: 'รับซื้อการ์ดจอ',
    title: 'รับซื้อการ์ดจอ อุบลราชธานี NVIDIA AMD มือสอง',
    description: 'รับซื้อการ์ดจอ VGA GPU มือสอง ในอุบล ประเมินตามรุ่นและสภาพการใช้งาน ส่งรูปและสเปกทาง LINE',
    keywords: ['รับซื้อการ์ดจอ อุบล', 'ขาย GPU อุบล'],
    category: 'computer',
    image: '/images/services/pc-parts-gpu-cpu.webp',
    parentSlug: 'pc-parts-ubon',
    parentLabel: 'รับซื้ออะไหล่คอม',
    accepted: ['NVIDIA RTX/GTX', 'AMD Radeon', 'การ์ดจอมือสองสภาพปกติ'],
  },
  {
    file: 'pc-parts-bundle-ubon.md',
    slug: 'รับซื้อ-cpu-ram-ssd-อุบล',
    navLabel: 'รับซื้อ CPU RAM SSD',
    title: 'รับซื้อ CPU RAM SSD อุบลราชธานี อะไหล่คอมมือสอง',
    description: 'รับซื้อ CPU RAM SSD อะไหล่คอม ในอุบล ประเมินตามรุ่นและสภาพ ส่งรูปและสเปกทาง LINE',
    keywords: ['รับซื้อ CPU อุบล', 'รับซื้อ RAM อุบล', 'รับซื้อ SSD อุบล'],
    category: 'computer',
    image: '/images/services/pc-parts-gpu-cpu.webp',
    parentSlug: 'pc-parts-ubon',
    parentLabel: 'รับซื้ออะไหล่คอม',
    accepted: ['CPU Intel/AMD', 'RAM DDR4/DDR5', 'SSD NVMe/SATA'],
  },
];

const pcRelated = `
## ลิงก์บริการคอมที่เกี่ยวข้อง

- [รับซื้อ PC Gaming อุบล](/บริการ/รับซื้อ-pc-gaming-อุบล/)
- [รับซื้อคอมประกอบ อุบล](/บริการ/รับซื้อคอมประกอบ-อุบล/)
- [รับซื้อคอมยกล็อต อุบล](/บริการ/รับซื้อคอมยกล็อต-อุบล/)
- [รับซื้อการ์ดจอ อุบล](/บริการ/รับซื้อการ์ดจอ-อุบล/)
- [รับซื้อโน้ตบุ๊ก อุบล](/บริการ/รับซื้อโน้ตบุ๊ก-อุบล/)
`;

order = 31;
for (const v of pcVariants) {
  const body = `บริการรับซื้อ${v.navLabel.replace('รับซื้อ', '')}ในอุบลราชธานี ประเมินตามสภาพและราคาตลาด ส่งรูปและรายละเอียดทาง LINE @buyhub เพื่อราคาเบื้องต้น

## สิ่งที่ควรส่งมาประเมิน

- รูปสินค้าชัดเจน
- รุ่น/สเปค/จำนวน (ถ้ามี)
- สภาพการใช้งานและอุปกรณ์ที่ครบ
${pcRelated}
`;
  const content =
    serviceFrontmatter({
      title: v.title,
      description: v.description,
      subheadline: 'ประเมินราคาเบื้องต้นฟรี จ่ายเงินตามเงื่อนไขที่ตกลง',
      navLabel: v.navLabel,
      geoLinkLabel: v.navLabel,
      keywords: v.keywords,
      category: v.category,
      image: v.image,
      accepted: v.accepted,
      rejected: commonRejected,
      order: order++,
      slug: v.slug,
      parentSlug: v.parentSlug,
      parentLabel: v.parentLabel,
      faqs: [
        { q: 'ต้องส่งรูปก่อนไหม?', a: 'แนะนำให้ส่งรูปและสเปกทาง LINE ก่อน เพื่อราคาเบื้องต้นและนัดหมายที่เหมาะสม' },
        { q: 'อยู่ต่างอำเภอ รับได้ไหม?', a: 'ได้ครับ ครอบคลุม 10 อำเภอหลักในอุบลราชธานี นัดจุดสะดวกตามตกลง' },
      ],
    }) + body;
  writeIfMissing(path.join(servicesDir, v.file), content);
}

// Camera variants
const cameraVariants = [
  {
    file: 'camera-canon-ubon.md',
    slug: 'รับซื้อกล้อง-canon-อุบล',
    navLabel: 'รับซื้อกล้อง Canon',
    title: 'รับซื้อกล้อง Canon อุบลราชธานี EOS R DSLR',
    description: 'รับซื้อกล้อง Canon EOS R, DSLR ในอุบล ประเมินตามรุ่น Shutter Count และสภาพ ส่งรูปทาง LINE',
    keywords: ['รับซื้อกล้อง Canon อุบล', 'ขาย Canon EOS อุบล'],
    parentSlug: 'camera-ubon',
    parentLabel: 'รับซื้อกล้อง',
  },
  {
    file: 'camera-fujifilm-ubon.md',
    slug: 'รับซื้อกล้อง-fujifilm-อุบล',
    navLabel: 'รับซื้อกล้อง Fujifilm',
    title: 'รับซื้อกล้อง Fujifilm อุบลราชธานี X-T X-S Series',
    description: 'รับซื้อกล้อง Fujifilm X-T, X-S ในอุบล ประเมินตามรุ่นและสภาพ ส่งรูปทาง LINE',
    keywords: ['รับซื้อกล้อง Fujifilm อุบล', 'ขาย fuji อุบล'],
    parentSlug: 'camera-ubon',
    parentLabel: 'รับซื้อกล้อง',
  },
  {
    file: 'camera-nikon-ubon.md',
    slug: 'รับซื้อกล้อง-nikon-อุบล',
    navLabel: 'รับซื้อกล้อง Nikon',
    title: 'รับซื้อกล้อง Nikon อุบลราชธานี Z Series DSLR',
    description: 'รับซื้อกล้อง Nikon Z, DSLR ในอุบล ประเมินตามรุ่นและสภาพ ส่งรูปทาง LINE',
    keywords: ['รับซื้อกล้อง Nikon อุบล'],
    parentSlug: 'camera-ubon',
    parentLabel: 'รับซื้อกล้อง',
  },
  {
    file: 'camera-broken-ubon.md',
    slug: 'รับซื้อกล้อง-เสีย-อุบล',
    navLabel: 'รับซื้อกล้องเสีย',
    title: 'รับซื้อกล้องเสีย อุบลราชธานี ประเมินตามอาการและรุ่น',
    description: 'รับซื้อกล้องเสีย ชัตเตอร์เสีย ในอุบล ประเมินตามรุ่นและอาการ ส่งรูปทาง LINE',
    keywords: ['รับซื้อกล้องเสีย อุบล', 'ขายกล้องพัง อุบล'],
    parentSlug: 'camera-ubon',
    parentLabel: 'รับซื้อกล้อง',
  },
  {
    file: 'camera-with-lens-ubon.md',
    slug: 'รับซื้อกล้องพร้อมเลนส์-อุบล',
    navLabel: 'รับซื้อกล้องพร้อมเลนส์',
    title: 'รับซื้อกล้องพร้อมเลนส์ อุบลราชธานี ชุด Body + Lens',
    description: 'รับซื้อกล้องพร้อมเลนส์ ชุด body+kit lens ในอุบล ประเมินแยก/รวมตามสภาพ ส่งรูปทาง LINE',
    keywords: ['รับซื้อกล้องพร้อมเลนส์ อุบล', 'ขายกล้องพร้อมเลนส์ อุบล'],
    parentSlug: 'camera-ubon',
    parentLabel: 'รับซื้อกล้อง',
  },
];

const cameraRelated = `
## ลิงก์บริการกล้องที่เกี่ยวข้อง

- [รับซื้อกล้อง อุบล](/บริการ/รับซื้อกล้อง-อุบล/)
- [รับซื้อเลนส์กล้อง อุบล](/บริการ/รับซื้อเลนส์กล้อง-อุบล/)
- [รับซื้อกล้อง Sony อุบล](/บริการ/รับซื้อ-กล้อง-sony-อุบล/)
`;

order = 41;
for (const v of cameraVariants) {
  const body = `รับพิจารณา${v.navLabel.replace('รับซื้อ', '')}ในอุบลราชธานี ประเมินตามรุ่น สภาพ และอุปกรณ์ที่ครบ ส่งรูปทาง LINE @buyhub

## สิ่งที่ควรส่งมาประเมิน

- รูปตัวกล้องและเลนส์ (ถ้ามี)
- Shutter Count (ถ้าถ่ายได้)
- รายการอุปกรณ์ในกล่อง
${cameraRelated}
`;
  const content =
    serviceFrontmatter({
      title: v.title,
      description: v.description,
      subheadline: 'ประเมินราคาเบื้องต้นฟรี ครอบคลุมอุบลราชธานี',
      navLabel: v.navLabel,
      geoLinkLabel: v.navLabel,
      keywords: v.keywords,
      category: 'camera',
      image: '/images/services/camera-sony-canon-fujifilm.webp',
      accepted: ['กล้อง Mirrorless/DSLR', 'มีหรือไม่มีกล่อง', 'ทุกสภาพที่แจ้งตรง'],
      rejected: ['กล้องที่มีหลักฐานว่าเป็นของโจรกรรม'],
      order: order++,
      slug: v.slug,
      parentSlug: v.parentSlug,
      parentLabel: v.parentLabel,
      faqs: [
        { q: 'ต้องส่ง Shutter Count ไหม?', a: 'แนะนำให้ส่งถ้าถ่ายได้ ช่วยให้ประเมินแม่นขึ้น แต่ไม่บังคับในการขอราคาเบื้องต้น' },
        { q: 'เลนส์มีฝ้า รับไหม?', a: 'รับพิจารณาครับ ราคาปรับตามสภาพเลนส์' },
      ],
    }) + body;
  writeIfMissing(path.join(servicesDir, v.file), content);
}

// iMac service
writeIfMissing(
  path.join(servicesDir, 'imac-ubon.md'),
  serviceFrontmatter({
    title: 'รับซื้อ iMac อุบลราชธานี ประเมินตามรุ่นและสภาพจริง',
    description: 'รับซื้อ iMac มือสอง ในอุบล ประเมินตามรุ่น ชิป RAM SSD และสภาพจอ ส่งรูปทาง LINE @buyhub',
    subheadline: 'รับ iMac Intel และ Apple Silicon ประเมินเบื้องต้นฟรี',
    navLabel: 'รับซื้อ iMac',
    geoLinkLabel: 'รับซื้อ iMac',
    keywords: ['รับซื้อ iMac อุบล', 'ขาย iMac อุบล'],
    category: 'apple',
    image: '/images/services/apple-devices-macbook-imac.webp',
    brands: ['Apple'],
    accepted: ['iMac Intel', 'iMac M1/M3', 'ทุกขนาดหน้าจอ'],
    rejected: commonRejected,
    order: 50,
    slug: 'รับซื้อ-imac-อุบล',
    parentSlug: 'apple-ubon',
    parentLabel: 'รับซื้อ Apple',
    faqs: [
      { q: 'iMac 24 M1 รับซื้อไหม?', a: 'รับครับ ส่งรูป About This Mac และสภาพจอมา' },
      { q: 'ต้องปิด iCloud ก่อนไหม?', a: 'ต้อง Sign Out iCloud และปิด Find My ก่อนส่งมอบ' },
    ],
  }) +
    `รับซื้อ iMac ในอุบลราชธานี ประเมินตามรุ่น ชิป ความจุ และสภาพจอ

## ลิงก์ที่เกี่ยวข้อง

- [รับซื้อ MacBook อุบล](/บริการ/รับซื้อ-macbook-อุบล/)
- [รับซื้อ Apple อุบล](/บริการ/รับซื้อ-apple-อุบล/)
`,
);

// Model services - iPhone
const iphoneModels = [
  ['iphone-16-pro-max', 'iPhone 16 Pro Max'],
  ['iphone-16-pro', 'iPhone 16 Pro'],
  ['iphone-14-pro-max', 'iPhone 14 Pro Max'],
  ['iphone-13-pro-max', 'iPhone 13 Pro Max'],
];

for (const [slug, modelName] of iphoneModels) {
  writeIfMissing(
    path.join(modelsDir, `${slug}.md`),
    modelFrontmatter({
      title: `รับซื้อ ${modelName} อุบล ประเมินราคาตามสภาพจริง`,
      description: `บริการรับซื้อ ${modelName} มือสอง ในอุบลราชธานี ตรวจสุขภาพแบต สภาพตัวเครื่อง และอุปกรณ์ ส่งรูปประเมินทาง LINE`,
      slug,
      brand: 'Apple',
      modelName,
      productType: 'iPhone',
      serviceType: 'รับซื้อ iPhone',
      parentService: 'iphone-ubon',
      faqs: [
        { q: `${modelName} รับซื้อรุ่นความจุไหนบ้าง?`, a: 'รับทุกความจุที่มีในตลาด ส่งรูป About และ Battery Health มาประเมิน' },
        { q: 'จอมีรอย ลดราคาไหม?', a: 'มีผลตามระดับรอย ส่งรูปมาเพื่อราคาเบื้องต้น' },
        { q: 'ติด iCloud รับไหม?', a: 'ไม่รับเครื่องที่ปลด iCloud ไม่ได้' },
      ],
    }) +
      `รับซื้อ ${modelName} ในอุบลราชธานี ประเมินตามความจุ สี สภาพตัวเครื่อง Battery Health และอุปกรณ์ครบ

## ลิงก์ที่เกี่ยวข้อง

- [รับซื้อ iPhone อุบล](/บริการ/รับซื้อ-iphone-อุบล/)
- [รับซื้อ iPhone 15 Pro Max อุบล](/บริการ/รับซื้อ-iphone/iphone-15-pro-max/)
`,
  );
}

// iPad models
for (const [slug, modelName] of [
  ['ipad-mini', 'iPad mini'],
  ['ipad-gen', 'iPad (Gen)'],
]) {
  writeIfMissing(
    path.join(modelsDir, `${slug}.md`),
    modelFrontmatter({
      title: `รับซื้อ ${modelName} อุบล ประเมินราคาตามสภาพจริง`,
      description: `รับซื้อ ${modelName} มือสอง ในอุบล ประเมินตามรุ่น ความจุ และสภาพ ส่งรูปทาง LINE`,
      slug,
      brand: 'Apple',
      modelName,
      productType: 'iPad',
      serviceType: 'รับซื้อ iPad',
      parentService: 'ipad-ubon',
      faqs: [
        { q: `${modelName} ทุกรุ่นรับไหม?`, a: 'รับพิจารณาตามรุ่นและสภาพ ส่งรูปมาประเมิน' },
        { q: 'ต้องปิด iCloud ไหม?', a: 'ต้อง Sign Out iCloud ก่อนส่งมอบ' },
      ],
    }) +
      `รับซื้อ ${modelName} ในอุบลราชธานี

## ลิงก์ที่เกี่ยวข้อง

- [รับซื้อ iPad อุบล](/บริการ/ipad-ubon/)
- [รับซื้อ iPad Pro อุบล](/บริการ/รับซื้อ-ipad/ipad-pro/)
- [รับซื้อ iPad Air อุบล](/บริการ/รับซื้อ-ipad/ipad-air/)
`,
  );
}

// MacBook models
for (const [slug, modelName] of [
  ['macbook-air-m2', 'MacBook Air M2'],
  ['macbook-air-m3', 'MacBook Air M3'],
  ['macbook-pro-m2', 'MacBook Pro M2'],
  ['macbook-pro-m3', 'MacBook Pro M3'],
  ['macbook-intel', 'MacBook Intel'],
]) {
  writeIfMissing(
    path.join(modelsDir, `${slug}.md`),
    modelFrontmatter({
      title: `รับซื้อ ${modelName} อุบล ประเมินราคาตามสภาพจริง`,
      description: `รับซื้อ ${modelName} มือสอง ในอุบล ประเมินตามสเปค Cycle Count และสภาพจอ ส่งรูปทาง LINE`,
      slug,
      brand: 'Apple',
      modelName,
      productType: 'MacBook',
      serviceType: 'รับซื้อ MacBook',
      parentService: 'macbook-ubon',
      faqs: [
        { q: 'Cycle Count ส่งยังไง?', a: 'ถ่ายรูป System Information > Power หรือ About This Mac' },
        { q: 'แบตเสื่อม รับไหม?', a: 'รับครับ ราคาปรับตามสุขภาพแบต' },
      ],
    }) +
      `รับซื้อ ${modelName} ในอุบลราชธานี

## ลิงก์ที่เกี่ยวข้อง

- [รับซื้อ MacBook อุบล](/บริการ/รับซื้อ-macbook-อุบล/)
- [รับซื้อ MacBook Air M1 อุบล](/บริการ/รับซื้อ-macbook/macbook-air-m1/)
`,
  );
}

console.log('Done generating money pages.');
