/** แปลงข้อความเคลมแรงเป็นภาษาปลอดภัยกว่า — ใช้บนหน้าแรกเท่านั้น */
const REPLACEMENTS: [RegExp, string][] = [
  [/จ่ายเงินสดทันที/g, 'จ่ายเงินสดหรือโอนเมื่อตกลงราคา'],
  [/ฟรีทันที/g, 'ฟรีในเวลาทำการ'],
  [/ภายใน 5 นาที/g, 'ในเวลาทำการ'],
  [/ไม่ลดราคาหน้างาน/g, 'ยืนยันราคาหลังตรวจเครื่องจริง'],
  [/รับทุกรุ่น/g, 'รับพิจารณาหลายรุ่น'],
  [/รับทุกสภาพ/g, 'รับพิจารณาตามสภาพ'],
];

export function softenHomeCopy(text: string): string {
  return REPLACEMENTS.reduce((acc, [pattern, replacement]) => acc.replace(pattern, replacement), text);
}
