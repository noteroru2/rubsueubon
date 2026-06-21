import type { FAQItem, QuickAnswer } from '../data/business';
import { mergeFaqs } from './service-aeo';

type Conditions = { accepted: string[]; rejected: string[] };

const MODEL_CONDITIONS: Record<string, Conditions> = {
  'iphone-ubon': {
    accepted: [
      'iPhone ทุกรุ่น สภาพดีถึงมีรอยใช้งาน',
      'เครื่องที่เคยเปลี่ยนหน้าจอ/แบตนอกศูนย์ (ปรับราคาตามจริง)',
      'ไม่มีกล่องหรืออุปกรณ์ครบก็รับพิจารณา',
      'แบตต่ำกว่า 80% รับได้ (หักตามสัดส่วน)',
    ],
    rejected: [
      'ติด iCloud / Find My iPhone ปลดไม่ได้',
      'จำรหัสผ่านหรือล็อคเครื่องไม่ได้',
      'เครื่องที่มีหลักฐานว่าเป็นของโจรกรรม',
      'MDM องค์กรที่ปลดล็อคไม่ได้',
    ],
  },
  'macbook-ubon': {
    accepted: [
      'MacBook Air/Pro ทุกชิป M-series และ Intel',
      'แบตเสื่อมหรือ Cycle Count สูง (ปรับราคา)',
      'เครื่องมีรอยใช้งานปกติ',
      'ไม่มีกล่องหรือสายชาร์จก็รับพิจารณา',
    ],
    rejected: [
      'ติด Find My Mac / Activation Lock',
      'ไม่ Sign Out Apple ID ได้',
      'เครื่องที่มีหลักฐานว่าเป็นของโจรกรรม',
      'MDM ที่ปลดล็อคไม่ได้',
    ],
  },
  'ipad-ubon': {
    accepted: [
      'iPad Pro / Air / mini / Gen ทุกรุ่น',
      'Wi-Fi และ Cellular',
      'มีรอยใช้งานหรือเคยเปลี่ยนอะไหล่ (ปรับราคา)',
      'ไม่มีกล่องหรือ Apple Pencil ก็ขายได้',
    ],
    rejected: [
      'ติด iCloud / Find My iPad',
      'ล็อคเครื่องหรือจำรหัสไม่ได้',
      'เครื่องที่มีหลักฐานว่าเป็นของโจรกรรม',
    ],
  },
  'camera-ubon': {
    accepted: [
      'กล้อง Mirrorless / DSLR สภาพดีถึงมีรอย',
      'ชัตเตอร์สูง (ปรับราคาตามจริง)',
      'ขายแยกบอดี้หรือพร้อมเลนส์',
      'ไม่มีกล่องก็รับพิจารณา',
    ],
    rejected: [
      'กล้องที่มีหลักฐานว่าเป็นของโจรกรรม',
      'เครื่องที่ซ่อมบอร์ดหนักจนไม่คุ้มราคา (แจ้งอาการมาก่อน)',
    ],
  },
  'b2b-lot-ubon': {
    accepted: [
      'คอมบริษัท Desktop/Notebook ยกล็อต',
      'เครื่องสำนักงานที่ลบข้อมูลแล้ว',
      'หลายเครื่องพร้อมกัน (ส่งรายการมาก่อน)',
      'เครื่องเปิดไม่ติดบางส่วน (ประเมินตามชิ้นส่วน)',
    ],
    rejected: [
      'ทรัพย์สินที่ไม่มีอนุมัติจำหน่ายจากองค์กร',
      'เครื่องที่มีข้อมูลองค์กรสำคัญค้างอยู่',
      'ของที่มีหลักฐานว่าเป็นของโจรกรรม',
    ],
  },
};

const QUICK_ANSWER_TEMPLATES: Record<string, (modelName: string) => QuickAnswer> = {
  'iphone-ubon': (modelName) => ({
    question: `ขาย ${modelName} มือสองในอุบลต้องทำยังไง?`,
    answer: `ส่งรูป ${modelName} ความจุ Battery Health และสภาพจอ/ตัวเครื่องทาง LINE @buyhub ปิด Find My iPhone และ Sign Out iCloud ก่อนส่งมอบ ประเมินราคาเบื้องต้นฟรี นัดรับในอุบลหรือเข้าร้าน WINNER IT หลังตรวจเครื่องจริง`,
  }),
  'macbook-ubon': (modelName) => ({
    question: `ขาย ${modelName} มือสองในอุบลต้องทำยังไง?`,
    answer: `ส่งรูป ${modelName} ชิป RAM/Storage และ Cycle Count จาก System Information ทาง LINE @buyhub ปิด Find My Mac ก่อนขาย ประเมินเบื้องต้นฟรี เข้าร้านอำพล เทรดดิ้ง / WINNER IT ในเมืองอุบลได้`,
  }),
  'ipad-ubon': (modelName) => ({
    question: `ขาย ${modelName} มือสองในอุบลต้องทำยังไง?`,
    answer: `ส่งรูป ${modelName} ความจุและสภาพทาง LINE @buyhub ปิด Find My iPad ก่อนส่งมอบ ประเมินราคาเบื้องต้นฟรี นัดรับในอุบลหรือเข้าร้านหลังตรวจจริง`,
  }),
  'camera-ubon': (modelName) => ({
    question: `ขาย ${modelName} มือสองในอุบลต้องทำยังไง?`,
    answer: `ส่งรูป ${modelName} บอดี้ เลนส์ ชัตเตอร์ count และอุปกรณ์ที่มีทาง LINE @buyhub ประเมินเบื้องต้นฟรี ตกลงแล้วนัดรับในอุบล จ่ายหลังตรวจสภาพจริง`,
  }),
  'b2b-lot-ubon': (modelName) => ({
    question: `ขาย${modelName}ยกล็อตในอุบลต้องทำยังไง?`,
    answer: `ส่งรายการจำนวนเครื่อง สเปกเบื้องต้น และรูปตัวอย่างทาง LINE @buyhub ประเมินล็อตเบื้องต้นฟรี นัดดูสินค้าจริงตามเงื่อนไข ดำเนินการโดย WINNER IT / อำพล เทรดดิ้ง`,
  }),
};

export type ModelPageInput = {
  parentService?: string;
  productType?: string;
  modelName: string;
  quickAnswer?: QuickAnswer;
  acceptedConditions?: string[];
  rejectedConditions?: string[];
  faqs?: FAQItem[];
};

function resolveParentKey(parentService?: string, productType?: string): string {
  if (parentService) return parentService;
  if (productType?.toLowerCase().includes('กล้อง') || productType?.toLowerCase().includes('camera')) {
    return 'camera-ubon';
  }
  return 'iphone-ubon';
}

export function resolveModelPageContext(data: ModelPageInput) {
  const parentKey = resolveParentKey(data.parentService, data.productType);
  const defaults = MODEL_CONDITIONS[parentKey] ?? MODEL_CONDITIONS['iphone-ubon'];
  const template = QUICK_ANSWER_TEMPLATES[parentKey];

  return {
    parentKey,
    quickAnswer: data.quickAnswer ?? (template ? template(data.modelName) : undefined),
    acceptedConditions: data.acceptedConditions?.length ? data.acceptedConditions : defaults.accepted,
    rejectedConditions: data.rejectedConditions?.length ? data.rejectedConditions : defaults.rejected,
    displayFaqs: mergeFaqs(data.faqs),
  };
}
