/** เส้นทางหลักของเว็บไซต์ (ภาษาไทย — ตรงคีย์เวิร์ด SEO) */

export const PATHS = {

  services: '/บริการ',

  areas: '/พื้นที่',

  updates: '/ผลงาน',

  contact: '/ติดต่อ',

  about: '/เกี่ยวกับเรา',

  pricing: '/วิธีประเมินราคา',

  conditions: '/เงื่อนไขรับซื้อ',

  faq: '/คำถามที่พบบ่อย',

  privacy: '/นโยบายความเป็นส่วนตัว',

} as const;



/** slug ภาษาไทยของแต่ละบริการ (key = content id) */

export const SERVICE_SLUGS: Record<string, string> = {

  'smartphone-ubon': 'รับซื้อโทรศัพท์-อุบล',

  'notebook-ubon': 'รับซื้อโน้ตบุ๊ก-อุบล',

  'camera-ubon': 'รับซื้อกล้อง-อุบล',

  'trade-in-ubon': 'รับเทิร์นไอที-อุบล',

  'iphone-ubon': 'รับซื้อ-iphone-อุบล',

  'samsung-ubon': 'รับซื้อ-samsung-อุบล',

  'macbook-ubon': 'รับซื้อ-macbook-อุบล',

  'sony-camera-ubon': 'รับซื้อ-กล้อง-sony-อุบล',

};



/** slug ภาษาไทยของแต่ละอำเภอ (key = district id) */

export const AREA_SLUGS: Record<string, string> = {

  'mueang-ubon': 'เมืองอุบลราชธานี',

  'warin-chamrap': 'วารินชำราบ',

  'det-udom': 'เดชอุดม',

  'phibun-mangsahan': 'พิบูลมังสาหาร',

  'trakan-phuet-phon': 'ตระการพืชผล',

  'muang-sam-sip': 'ม่วงสามสิบ',

  samrong: 'สำโรง',

  khunhan: 'ขุนหาญ',

  'na-chaluai': 'นาจะหลวง',

  sirindhorn: 'สิรินธร',

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


