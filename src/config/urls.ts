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
  'iphone-16-pro-max-ubon': 'รับซื้อ-iphone-16-pro-max-อุบล',
  'iphone-16-pro-ubon': 'รับซื้อ-iphone-16-pro-อุบล',
  'iphone-15-pro-max-ubon': 'รับซื้อ-iphone-15-pro-max-อุบล',
  'iphone-15-pro-ubon': 'รับซื้อ-iphone-15-pro-อุบล',
  'iphone-14-pro-max-ubon': 'รับซื้อ-iphone-14-pro-max-อุบล',
  'iphone-13-pro-max-ubon': 'รับซื้อ-iphone-13-pro-max-อุบล',
  'iphone-bad-battery-ubon': 'รับซื้อ-iphone-แบตเสื่อม-อุบล',

  'samsung-ubon': 'รับซื้อ-samsung-อุบล',
  'oppo-ubon': 'รับซื้อ-oppo-อุบล',
  'vivo-ubon': 'รับซื้อ-vivo-อุบล',
  'xiaomi-ubon': 'รับซื้อ-xiaomi-อุบล',
  'redmi-ubon': 'รับซื้อ-redmi-อุบล',
  'poco-ubon': 'รับซื้อ-poco-อุบล',
  'realme-ubon': 'รับซื้อ-realme-อุบล',

  'macbook-ubon': 'รับซื้อ-macbook-อุบล',
  'macbook-air-m2-ubon': 'รับซื้อ-macbook-air-m2-อุบล',
  'macbook-air-m3-ubon': 'รับซื้อ-macbook-air-m3-อุบล',
  'macbook-air-m4-ubon': 'รับซื้อ-macbook-air-m4-อุบล',
  'macbook-pro-m2-ubon': 'รับซื้อ-macbook-pro-m2-อุบล',
  'macbook-pro-m3-ubon': 'รับซื้อ-macbook-pro-m3-อุบล',
  'macbook-pro-m4-ubon': 'รับซื้อ-macbook-pro-m4-อุบล',
  'macbook-broken-screen-ubon': 'รับซื้อ-macbook-จอแตก-อุบล',
  'macbook-bad-battery-ubon': 'รับซื้อ-macbook-แบตเสื่อม-อุบล',

  'sony-camera-ubon': 'รับซื้อกล้อง-sony-อุบล',
  'gopro-ubon': 'รับซื้อ-gopro-อุบล',
  'dji-osmo-ubon': 'รับซื้อ-dji-osmo-อุบล',
  'drone-dji-ubon': 'รับซื้อโดรน-dji-อุบล',
  'vlog-camera-ubon': 'รับซื้อกล้อง-vlog-อุบล',

  'tablet-ubon': 'รับซื้อแท็บเล็ต-อุบล',
  'ipad-ubon': 'รับซื้อ-ipad-อุบล',
  'ipad-pro-ubon': 'รับซื้อ-ipad-pro-อุบล',
  'ipad-air-ubon': 'รับซื้อ-ipad-air-อุบล',
  'ipad-mini-ubon': 'รับซื้อ-ipad-mini-อุบล',
  'ipad-gen-9-ubon': 'รับซื้อ-ipad-gen-9-อุบล',
  'ipad-gen-10-ubon': 'รับซื้อ-ipad-gen-10-อุบล',
  'apple-pencil-ubon': 'รับซื้อ-apple-pencil-อุบล',
  'magic-keyboard-ipad-ubon': 'รับซื้อ-magic-keyboard-ipad-อุบล',

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
  'notebook-broken-ubon': 'notebook-broken-ubon',
  'notebook-cracked-screen-ubon': 'รับซื้อโน้ตบุ๊กจอแตก-อุบล',
  'notebook-dell-ubon': 'รับซื้อโน้ตบุ๊ก-dell-อุบล',
  'notebook-gaming-ubon': 'รับซื้อโน้ตบุ๊ก-gaming-อุบล',
  'notebook-hp-ubon': 'รับซื้อโน้ตบุ๊ก-hp-อุบล',
  'notebook-lenovo-ubon': 'รับซื้อโน้ตบุ๊ก-lenovo-อุบล',
  'notebook-no-power-ubon': 'รับซื้อโน้ตบุ๊กเปิดไม่ติด-อุบล',
  'pc-corporate-ubon': 'รับซื้อคอมบริษัท-อุบล',
  'pc-custom-build-ubon': 'รับซื้อคอมประกอบ-อุบล',
  'pc-office-ubon': 'รับซื้อคอมสำนักงาน-อุบล',
  'pc-parts-bundle-ubon': 'รับซื้ออุปกรณ์คอม-อุบล',
  'pc-school-ubon': 'รับซื้อคอมโรงเรียน-อุบล',
  'pc-game-cafe-ubon': 'รับซื้อคอมร้านเกม-อุบล',
  'notebook-lot-ubon': 'รับซื้อโน้ตบุ๊กยกล็อต-อุบล',
  'it-lot-ubon': 'รับซื้ออุปกรณ์ไอทียกล็อต-อุบล',
  'camera-broken-ubon': 'รับซื้อกล้อง-เสีย-อุบล',
  'camera-canon-ubon': 'รับซื้อกล้อง-canon-อุบล',
  'camera-fujifilm-ubon': 'รับซื้อกล้อง-fujifilm-อุบล',
  'camera-nikon-ubon': 'รับซื้อกล้อง-nikon-อุบล',
  'camera-with-lens-ubon': 'รับซื้อกล้องพร้อมเลนส์-อุบล',
  'iphone-broken-screen-ubon': 'รับซื้อ-iphone-จอแตก-อุบล',
  'samsung-galaxy-s-ultra-ubon': 'รับซื้อ-samsung-galaxy-s-ultra-อุบล',
  'notebook-msi-ubon': 'รับซื้อโน้ตบุ๊ก-msi-อุบล',
  'gpu-rtx-ubon': 'รับซื้อ-rtx-อุบล',
  'cpu-ubon': 'รับซื้อ-cpu-อุบล',
  'ram-ubon': 'รับซื้อ-ram-อุบล',
  'ssd-ubon': 'รับซื้อ-ssd-อุบล',
  'monitor-gaming-ubon': 'รับซื้อจอเกมมิ่ง-อุบล',
  'lens-sony-fe-ubon': 'รับซื้อเลนส์-sony-fe-อุบล',
  'lens-canon-rf-ef-ubon': 'รับซื้อเลนส์-canon-rf-ef-อุบล',
  'console-ps5-ubon': 'รับซื้อ-ps5-อุบล',
  'console-nintendo-switch-ubon': 'รับซื้อ-nintendo-switch-อุบล',
  'console-nintendo-switch-oled-ubon': 'รับซื้อ-nintendo-switch-oled-อุบล',
  'rog-ally-ubon': 'รับซื้อ-rog-ally-อุบล',
  'steam-deck-ubon': 'รับซื้อ-steam-deck-อุบล',
  'xbox-ubon': 'รับซื้อ-xbox-อุบล',
  'handheld-game-console-ubon': 'รับซื้อเครื่องเกมพกพา-อุบล',
  'speaker-jbl-marshall-ubon': 'รับซื้อลำโพง-jbl-marshall-อุบล',
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
  'samrong': 'samrong',
  'สำโรง': 'samrong',
  'khemarat': 'khemarat',
  'เขมราฐ': 'khemarat',
  'sirindhorn': 'sirindhorn',
  'สิรินธร': 'sirindhorn',
  'na-chaluai': 'na-chaluai',
  'นาจะหลวย': 'na-chaluai',
  'don-mot-daeng': 'don-mot-daeng',
  'ดอนมดแดง': 'don-mot-daeng',
  'si-mueang-mai': 'si-mueang-mai',
  'ศรีเมืองใหม่': 'si-mueang-mai',
  'tan-sum': 'tan-sum',
  'ตาลสุม': 'tan-sum',
  'pho-sai': 'pho-sai',
  'โพธิ์ไทร': 'pho-sai',
  'kut-khaopun': 'kut-khaopun',
  'กุดข้าวปุ้น': 'kut-khaopun',
  'na-yia': 'na-yia',
  'นาเยีย': 'na-yia',
  'nam-khun': 'nam-khun',
  'น้ำขุ่น': 'nam-khun',
  'na-tan': 'na-tan',
  'นาตาล': 'na-tan',
  'sawang-wirawong': 'sawang-wirawong',
  'สว่างวีระวงศ์': 'sawang-wirawong',
  'lao-suea-kok': 'lao-suea-kok',
  'เหล่าเสือโก้ก': 'lao-suea-kok',
  'thung-si-udom': 'thung-si-udom',
  'ทุ่งศรีอุดม': 'thung-si-udom',
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
