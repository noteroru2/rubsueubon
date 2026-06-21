import { areaPath, servicePath } from './urls';

/** อำเภอหลัก 10 อำเภอ — ใช้ใน Section B */
export const HOME_SERVICE_DISTRICTS = [
  { label: 'เมืองอุบลราชธานี', slug: 'mueang-ubon-ratchathani' },
  { label: 'วารินชำราบ', slug: 'warin-chamrap' },
  { label: 'เดชอุดม', slug: 'det-udom' },
  { label: 'พิบูลมังสาหาร', slug: 'phibun-mangsahan' },
  { label: 'เขื่องใน', slug: 'khueang-nai' },
  { label: 'โขงเจียม', slug: 'khong-chiam' },
  { label: 'น้ำยืน', slug: 'nam-yuen' },
  { label: 'บุณฑริก', slug: 'buntharik' },
  { label: 'ตระการพืชผล', slug: 'trakan-phuet-phon' },
  { label: 'ม่วงสามสิบ', slug: 'muang-sam-sip' },
] as const;

/** แถวตาราง Section C */
export const WHY_LINE_ROWS = [
  {
    problem: 'ไม่รู้ว่าสินค้าควรขายได้ประมาณเท่าไหร่',
    solution: 'ส่งรูปประเมินราคาเบื้องต้นได้ฟรีก่อนตัดสินใจ',
  },
  {
    problem: 'โพสต์ขายเองแล้วรอนาน',
    solution: 'ติดต่อผ่าน LINE ได้ในเวลาทำการ ไม่ต้องรอคนซื้อหลายวัน',
  },
  {
    problem: 'นัดผู้ซื้อแล้วต่อรองใหม่หน้างาน',
    solution: 'ยืนยันราคาอีกครั้งหลังตรวจเครื่องจริงตามข้อมูลที่แจ้งไว้',
  },
  {
    problem: 'ต้องเดินทางก่อนรู้ราคา',
    solution: 'ส่งรูปผ่าน LINE ก่อน เพื่อรู้ช่วงราคาก่อนเดินทาง',
  },
  {
    problem: 'ไม่แน่ใจว่าเครื่องเสียยังขายได้ไหม',
    solution: 'แจ้งอาการเสียหรือส่งรูปอาการเบื้องต้นให้ร้านประเมินก่อนได้',
  },
] as const;

/** ลิงก์บริการสำหรับ Section A */
export const SERVICE_LINKS = {
  iphone: servicePath('iphone-ubon'),
  ipad: servicePath('ipad-ubon'),
  tablet: servicePath('tablet-ubon'),
  macbook: servicePath('macbook-ubon'),
  notebook: servicePath('notebook-ubon'),
  pcGaming: servicePath('pc-gaming-ubon'),
  camera: servicePath('camera-ubon'),
  cameraLens: servicePath('camera-lens-ubon'),
  smartwatch: servicePath('smartwatch-ubon'),
  apple: servicePath('apple-ubon'),
  gameConsole: servicePath('game-console-ubon'),
  speaker: servicePath('speaker-ubon'),
  tvMonitor: servicePath('tv-electronics-ubon'),
} as const;
