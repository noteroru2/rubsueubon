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
  'smartphone-ubon': 'รับซื้อโทรศัพท์-อุบล',

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

  'tablet-ubon': 'รับซื้อแท็บเล็ต-ไอแพด-อุบล',

  'tv-electronics-ubon': 'รับซื้อทีวี-จอคอม-อุบล',

  'gadget-ubon': 'รับซื้อสมาร์ทวอทช์-แก็ดเจ็ต-อุบล',
};

/** slug ภาษาไทยของแต่ละอำเภอ (key = district id) */

export const AREA_SLUGS: Record<string, string> = {};

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
