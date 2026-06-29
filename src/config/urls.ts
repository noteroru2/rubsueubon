/** เส้นทางหลักของเว็บไซต์ (ภาษาไทย — ตรงคีย์เวิร์ด SEO) */

export const PATHS = {
  services: '/บริการ',
  areas: '/พื้นที่',
  updates: '/ผลงาน',
  examples: '/ตัวอย่างเคสประเมิน',
  contact: '/ติดต่อ',
  about: '/เกี่ยวกับเรา',
  pricing: '/วิธีประเมินราคา',
  conditions: '/เงื่อนไขรับซื้อ',
  faq: '/คำถามที่พบบ่อย',
  privacy: '/นโยบายความเป็นส่วนตัว',
  blog: '/บทความ',
} as const;

/** slug ภาษาไทยของแต่ละบริการ (key = content id) */

export const SERVICE_SLUGS: Record<string, string> = {
  'smartphone-ubon': 'รับซื้อมือถือ-อุบล',

  'notebook-ubon': 'รับซื้อโน้ตบุ๊ก-อุบล',

  'camera-ubon': 'รับซื้อกล้อง-อุบล',

  'pc-gaming-ubon': 'รับซื้อ-pc-gaming-อุบล',

  'apple-ubon': 'รับซื้อ-apple-อุบล',

  'smartwatch-ubon': 'รับซื้อ-apple-watch-อุบล',

  'speaker-ubon': 'รับซื้อ-เครื่องเสียง-อุบล',

  'pc-parts-ubon': 'รับซื้อ-อะไหล่คอม-อุบล',

  'game-console-ubon': 'รับซื้อ-เครื่องเกม-อุบล',

  'trade-in-ubon': 'รับเทิร์นไอที-อุบล',

  'iphone-ubon': 'รับซื้อ-iphone-อุบล',

  'samsung-ubon': 'รับซื้อ-samsung-อุบล',

  'macbook-ubon': 'รับซื้อ-macbook-อุบล',

  'sony-camera-ubon': 'รับซื้อ-กล้อง-sony-อุบล',

  'tablet-ubon': 'รับซื้อแท็บเล็ต-อุบล',
  'ipad-ubon': 'รับซื้อ-ipad-อุบล',

  'tv-electronics-ubon': 'รับซื้อทีวี-อุบล',

  'gadget-ubon': 'รับซื้อสมาร์ทวอทช์-แก็ดเจ็ต-อุบล',

  'b2b-lot-ubon': 'รับซื้อคอมยกล็อต-อุบล',

  'camera-lens-ubon': 'รับซื้อเลนส์กล้อง-อุบล',

  'imac-ubon': 'รับซื้อ-imac-อุบล',

  // New and missing service mappings
  'pc-ubon': 'รับซื้อคอมพิวเตอร์-อุบล',
  'gpu-ubon': 'รับซื้อการ์ดจอ-อุบล',
  'monitor-ubon': 'รับซื้อจอคอม-อุบล',
  'notebook-acer-ubon': 'รับซื้อโน้ตบุ๊ก-acer-อุบล',
  'notebook-asus-ubon': 'รับซื้อโน้ตบุ๊ก-asus-อุบล',
  'notebook-broken-ubon': 'รับซื้อโน้ตบุ๊กเสีย-อุบล',
  'notebook-cracked-screen-ubon': 'รับซื้อโน้ตบุ๊กจอแตก-อุบล',
  'notebook-dell-ubon': 'รับซื้อโน้ตบุ๊ก-dell-อุบล',
  'notebook-gaming-ubon': 'รับซื้อโน้ตบุ๊ก-gaming-อุบล',
  'notebook-hp-ubon': 'รับซื้อโน้ตบุ๊ก-hp-อุบล',
  'notebook-lenovo-ubon': 'รับซื้อโน้ตบุ๊ก-lenovo-อุบล',
  'notebook-no-power-ubon': 'รับซื้อโน้ตบุ๊กเปิดไม่ติด-อุบล',
  'pc-corporate-ubon': 'รับซื้อคอมบริษัท-อุบล',
  'pc-custom-build-ubon': 'รับซื้อคอมประกอบ-อุบล',
  'pc-office-ubon': 'รับซื้อคอมสำนักงาน-อุบล',
  'pc-parts-bundle-ubon': 'รับซื้อ-cpu-ram-ssd-อุบล',
  'pc-school-ubon': 'รับซื้อคอมโรงเรียน-อุบล',
  'camera-broken-ubon': 'รับซื้อกล้อง-เสีย-อุบล',
  'camera-canon-ubon': 'รับซื้อกล้อง-canon-อุบล',
  'camera-fujifilm-ubon': 'รับซื้อกล้อง-fujifilm-อุบล',
  'camera-nikon-ubon': 'รับซื้อกล้อง-nikon-อุบล',
  'camera-with-lens-ubon': 'รับซื้อกล้องพร้อมเลนส์-อุบล',
};

/** slug ภาษาไทยของแต่ละอำเภอ (key = district id) */

export const AREA_SLUGS: Record<string, string> = {
  // Active districts mapping (IDs, Thai names, and slugs to English slugs)
  'mueang-ubon': 'mueang-ubon-ratchathani',
  'mueang-ubon-ratchathani': 'mueang-ubon-ratchathani',
  'เมืองอุบล': 'mueang-ubon-ratchathani',
  'เมืองอุบลราชธานี': 'mueang-ubon-ratchathani',
  'warin-chamrap': 'warin-chamrap',
  'วารินชำราบ': 'warin-chamrap',
  'det-udom': 'det-udom',
  'เดชอุดม': 'det-udom',
  'phibun-mangsahan': 'phibun-mangsahan',
  'พิบูลมังสาหาร': 'phibun-mangsahan',
  'trakan-phuet-phon': 'trakan-phuet-phon',
  'ตระการพืชผล': 'trakan-phuet-phon',
  'muang-sam-sip': 'muang-sam-sip',
  'ม่วงสามสิบ': 'muang-sam-sip',
  'khueang-nai': 'khueang-nai',
  'เขื่องใน': 'khueang-nai',
  'khong-chiam': 'khong-chiam',
  'โขงเจียม': 'khong-chiam',
  'nam-yuen': 'nam-yuen',
  'น้ำยืน': 'nam-yuen',
  'buntharik': 'buntharik',
  'บุณฑริก': 'buntharik',
};

export function servicesIndex(): string {
  return `${PATHS.services}/`;
}

export function areasIndex(): string {
  return `${PATHS.areas}/`;
}

export function updatesIndex(): string {
  return `${PATHS.updates}/`;
}

export function contactPage(): string {
  return `${PATHS.contact}/`;
}

export function aboutPage(): string {
  return `${PATHS.about}/`;
}

export function pricingPage(): string {
  return `${PATHS.pricing}/`;
}

export function conditionsPage(): string {
  return `${PATHS.conditions}/`;
}

export function faqPage(): string {
  return `${PATHS.faq}/`;
}

export function privacyPage(): string {
  return `${PATHS.privacy}/`;
}

export function servicePath(slugOrId: string): string {
  const slug = SERVICE_SLUGS[slugOrId] ?? slugOrId;

  return `${PATHS.services}/${slug}/`;
}

export function areaPath(slugOrId: string): string {
  const slug = AREA_SLUGS[slugOrId] ?? slugOrId;

  return `${PATHS.areas}/${slug}/`;
}

export function updatePath(slug: string): string {
  return `${PATHS.updates}/${slug}/`;
}

export function blogIndex(): string {
  return `${PATHS.blog}/`;
}

export function blogPath(slug: string): string {
  return `${PATHS.blog}/${slug}/`;
}

export function examplesIndex(): string {
  return `${PATHS.examples}/`;
}

export function examplePath(slug: string): string {
  return `${PATHS.examples}/${slug}/`;
}
