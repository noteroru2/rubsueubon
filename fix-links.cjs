const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/content/areas');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

const replacements = {
  '/บริการ/รับซื้อ-มือถือ-อุบล': '/บริการ/รับซื้อโทรศัพท์-อุบล',
  '/บริการ/รับซื้อ-โน้ตบุ๊ก-อุบล': '/บริการ/รับซื้อโน้ตบุ๊ก-อุบล',
  '/บริการ/รับซื้อ-คอมบริษัท-อุบล': '/บริการ/b2b-lot-ubon',
  '/บริการ/รับซื้อ-กล้อง-อุบล': '/บริการ/รับซื้อกล้อง-อุบล',
  '/บริการ/รับซื้อ-คอม-อุบล': '/บริการ/รับซื้อทีวี-จอคอม-อุบล',
  '/บริการ/รับซื้อ-ipad-อุบล': '/บริการ/ipad-ubon',
  '/บริการ/รับซื้อ-เลนส์กล้อง-อุบล': '/บริการ/camera-lens-ubon',
  '/บริการ/รับซื้อ-pc-parts-อุบล': '/บริการ/รับซื้อ-อะไหล่คอม-อุบล',
  '/พื้นที่/trakan-phuetphon/': '/พื้นที่/trakan-phuet-phon/'
};

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [wrong, right] of Object.entries(replacements)) {
    if (content.includes(wrong)) {
      content = content.replaceAll(wrong, right);
      changed = true;
    }
  }

  // Also replace frontmatter slug if it's trakan-phuetphon
  if (content.includes('slug: "trakan-phuetphon"')) {
    content = content.replace('slug: "trakan-phuetphon"', 'slug: "trakan-phuet-phon"');
    changed = true;
  }
  if (content.includes("slug: 'trakan-phuetphon'")) {
    content = content.replace("slug: 'trakan-phuetphon'", "slug: 'trakan-phuet-phon'");
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
