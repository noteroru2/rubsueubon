export interface SeoMetaOverride {
  title?: string;
  description?: string;
}

/**
 * UBON U1: narrow, GSC-backed SERP refinements.
 * Keep this list intentionally small. These overrides must not change URL ownership,
 * canonicals, redirects, or the homepage generic/near-me role.
 */
export const SERVICE_META_OVERRIDES: Record<string, SeoMetaOverride> = {
  'รับซื้อมือถือ-อุบล': {
    description:
      'รับซื้อมือถือมือสอง อุบลราชธานี ทั้ง Samsung, OPPO, vivo, Xiaomi, Redmi, POCO และ realme ส่งรุ่น ความจุ รูปสภาพและตำหนิทาง LINE @buyhub เพื่อประเมินเบื้องต้น',
  },
  'รับซื้อคอมพิวเตอร์-อุบล': {
    description:
      'รับซื้อคอมพิวเตอร์มือสอง อุบลราชธานี ทั้งคอมประกอบ PC Gaming คอมสำนักงาน และ Desktop ส่ง CPU, GPU, RAM, SSD พร้อมรูปสภาพทาง LINE @buyhub เพื่อประเมินก่อนนัดตรวจ',
  },
};

export const BLOG_META_OVERRIDES: Record<string, SeoMetaOverride> = {
  'iphone-icloud-before-selling': {
    title: 'iPhone ติด iCloud ขายได้ไหม? วิธีปลด Find My ก่อนขาย',
    description:
      'iPhone ยังติด iCloud หรือ Find My ขายได้ไหม? เช็ก Activation Lock วิธี Sign Out Apple ID สำรองข้อมูล และล้างเครื่องให้พร้อมก่อนขายอย่างปลอดภัย',
  },
};
