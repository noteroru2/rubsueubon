import type { FAQItem, QuickAnswer } from '../data/business';

/** คำตอบสั้น AEO ตามหมวดบริการ */
const QUICK_ANSWERS: Record<string, QuickAnswer> = {
  notebook: {
    question: 'ขายโน้ตบุ๊กมือสองในอุบลต้องทำยังไง?',
    answer:
      'ส่งรูปตัวเครื่อง รุ่น สเปก สภาพ แบตเตอรี่ และอุปกรณ์ที่มีมาทาง LINE @buyhub เพื่อประเมินราคาเบื้องต้นฟรี หากตกลงราคา สามารถนัดรับในอุบลราชธานีหรือเข้ามาที่ร้านได้ โดยจ่ายเงินทันทีหลังตรวจเช็กเครื่องตรงตามข้อมูลที่แจ้ง',
  },
  smartphone: {
    question: 'ขายมือถือมือสองในอุบลต้องทำยังไง?',
    answer:
      'ถ่ายรูปหน้าจอ ด้านหลัง และหน้า About/Battery Health ส่งมาพร้อมรุ่น ความจุ และสภาพทาง LINE @buyhub รับประเมินราคาเบื้องต้นฟรี ตกลงแล้วนัดรับในอุบลหรือเข้าร้าน จ่ายเงินสด/โอนหลังตรวจเครื่อง',
  },
  iphone: {
    question: 'ขาย iPhone มือสองในอุบลต้องทำยังไง?',
    answer:
      'ส่งรูปเครื่อง รุ่น ความจุ Battery Health และสภาพจอ/ตัวเครื่องทาง LINE @buyhub ต้องปิด Find My iPhone และ Sign Out iCloud ก่อนส่งมอบ ประเมินราคาเบื้องต้นฟรี ไม่มีข้อผูกมัด',
  },
  macbook: {
    question: 'ขาย MacBook มือสองในอุบลต้องทำยังไง?',
    answer:
      'ส่งรูปเครื่อง รุ่น ชิป RAM/Storage และ Cycle Count จาก System Information ทาง LINE @buyhub ปิด Find My Mac และ Sign Out Apple ID ก่อนขาย ประเมินราคาเบื้องต้นฟรี นัดรับในอุบลหรือเข้าร้าน',
  },
  camera: {
    question: 'ขายกล้องมือสองในอุบลต้องทำยังไง?',
    answer:
      'ส่งรูปบอดี้ ฝาครอบเลนส์ หน้าจอ จำนวนชัตเตอร์ และเลนส์ที่มาพร้อมกันทาง LINE @buyhub ประเมินราคาเบื้องต้นฟรี ตกลงแล้วนัดรับในอุบล จ่ายเงินหลังตรวจสภาพจริง',
  },
  'pc-gaming': {
    question: 'ขาย PC Gaming ในอุบลต้องทำยังไง?',
    answer:
      'ส่งรูปเคส สเปก CPU/GPU/RAM/SSD และอาการ (ถ้ามี) ทาง LINE @buyhub รับทั้งเครื่องเปิดไม่ติดและแยกชิ้น เช่น การ์ดจอ ประเมินเบื้องต้นฟรี นัดรับในอุบลหรือเข้าร้าน',
  },
  b2b: {
    question: 'ขายคอมยกล็อตจากบริษัทในอุบลต้องทำยังไง?',
    answer:
      'ส่งรายการจำนวนเครื่อง ประเภท Desktop/Notebook สเปกเบื้องต้น และรูปตัวอย่างทาง LINE @buyhub รับประเมินล็อตเบื้องต้นฟรี นัดดูสินค้าจริงตามเงื่อนไข ชำระตามที่ตกลง',
  },
  tablet: {
    question: 'ขาย iPad มือสองในอุบลต้องทำยังไง?',
    answer:
      'ส่งรูปหน้าจอ ด้านหลัง รุ่น ความจุ และสภาพทาง LINE @buyhub ปิด Find My iPad ก่อนส่งมอบ ประเมินราคาเบื้องต้นฟรี นัดรับในอุบลหรือเข้าร้าน',
  },
};

/** FAQ พื้�านที่ใช้ร่วมทุกหมวด — merge กับ FAQ เฉพาะหน้า */
export const STANDARD_FAQS: FAQItem[] = [
  {
    question: 'รับซื้อเครื่องเปิดไม่ติดไหม?',
    answer:
      'รับพิจารณาครับ ขึ้นอยู่กับประเภทสินค้าและมูลค่าชิ้นส่วนที่ยังใช้ได้ แจ้งอาการตรงๆ มาช่วยให้ประเมินแม่นขึ้น',
  },
  {
    question: 'ต้องมีใบเสร็จไหม?',
    answer: 'ไม่จำเป็นครับ มีใบเสร็จหรือกล่องอาจช่วยยืนยันที่มาได้ แต่ไม่มีก็ขายได้ตามสภาพเครื่อง',
  },
  {
    question: 'ติด iCloud / MDM รับไหม?',
    answer:
      'ไม่รับเครื่องที่ติด iCloud, Find My หรือ MDM ที่ปลดล็อคไม่ได้ ต้อง Sign Out และปิด Find My ให้เรียบร้อยก่อนส่งมอบ',
  },
  {
    question: 'เครื่องไม่มีอุปกรณ์รับไหม?',
    answer: 'รับครับ มูลค่าหลักอยู่ที่ตัวเครื่องและสภาพการใช้งาน ไม่มีกล่องหรือสายชาร์จอาจมีผลต่อราคาเล็กน้อย',
  },
  {
    question: 'ราคาที่ประเมินทาง LINE ใช้ได้นานกี่วัน?',
    answer:
      'ราคาเบื้องต้นอ้างอิงสภาพจากรูปและข้อมูลที่แจ้ง ราคาสุดท้ายยืนยันหลังตรวจเครื่องจริง ตลาดเปลี่ยนแปลงได้ แนะนำตัดสินใจภายใน 2–3 วันหลังประเมิน',
  },
  {
    question: 'อยู่ต่างอำเภอขายได้ไหม?',
    answer:
      'ได้ครับ ครอบคลุม 10 อำเภอหลักในอุบลราชธานี ส่งรูปประเมินก่อน แล้วนัดจุดรับหรือเข้าร้านตามความสะดวก',
  },
  {
    question: 'จ่ายเงินสดหรือโอน?',
    answer: 'จ่ายเงินสดหรือโอนเข้าบัญชีได้ ตามที่ตกลงกันหลังตรวจเครื่องจริง',
  },
  {
    question: 'ล้างข้อมูลให้ไหม?',
    answer:
      'แนะนำให้ลูกค้า Factory Reset เองก่อนส่งมอบ เพื่อความปลอดภัย ทีมงานช่วยแนะนำขั้นตอนได้ทาง LINE',
  },
];

const CATEGORY_MAP: Record<string, string> = {
  notebook: 'notebook',
  smartphone: 'smartphone',
  iphone: 'iphone',
  macbook: 'macbook',
  camera: 'camera',
  'pc-gaming': 'pc-gaming',
  b2b: 'b2b',
  tablet: 'tablet',
};

export function getQuickAnswer(category: string, serviceId?: string): QuickAnswer | undefined {
  if (serviceId && QUICK_ANSWERS[serviceId]) return QUICK_ANSWERS[serviceId];
  if (serviceId === 'b2b-lot-ubon') return QUICK_ANSWERS.b2b;
  if (serviceId === 'ipad-ubon') return QUICK_ANSWERS.tablet;
  const key = CATEGORY_MAP[category] ?? category;
  return QUICK_ANSWERS[key];
}

/** รวม FAQ หน้า + FAQ มาตรฐาน (ไม่ซ้ำคำถาม) */
export function mergeFaqs(pageFaqs: FAQItem[] = [], max = 8): FAQItem[] {
  const seen = new Set<string>();
  const merged: FAQItem[] = [];

  for (const faq of pageFaqs) {
    const key = faq.question.trim();
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(faq);
    }
  }

  for (const faq of STANDARD_FAQS) {
    if (merged.length >= max) break;
    const key = faq.question.trim();
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(faq);
    }
  }

  return merged.slice(0, max);
}
