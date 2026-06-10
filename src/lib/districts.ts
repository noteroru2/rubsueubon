import districtsData from '../data/districts.json';

export type DistrictReview = {
  text: string;
  author: string;
  location: string;
};

export type District = {
  id: string;
  slug: string;
  name: string;
  latitude: number;
  longitude: number;
  postalCode: string;
  review?: DistrictReview;
};

export const districts = districtsData as District[];

export function getDistrictBySlug(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}

export function getDistrictById(id: string): District | undefined {
  return districts.find((d) => d.id === id);
}

export function buildDistrictH1(name: string): string {
  return `รับซื้อโน้ตบุ๊ก มือถือ ไอที ${name} อุบลราชธานี`;
}

export function buildDistrictPageTitle(name: string): string {
  return `${buildDistrictH1(name)} | รับซื้ออุบล.com`;
}

export function buildDistrictDescription(name: string): string {
  return `รับซื้อและรับเทิร์นโทรศัพท์มือถือ โน้ตบุ๊ก กล้อง และอุปกรณ์ไอทีมือหนึ่ง-มือสองในอำเภอ${name} อุบลราชธานี ประเมินราคาฟรีผ่าน LINE @buyhub จ่ายเงินสดทันที นัดรับถึงที่`;
}

export function buildDistrictKeywords(name: string): string[] {
  return [
    `รับซื้อไอที ${name}`,
    `รับเทิร์นมือถือ ${name}`,
    `รับซื้อโน้ตบุ๊ก ${name}`,
    `ร้านรับเทิร์น ${name} อุบล`,
    `ขายมือถือ ${name} อุบลราชธานี`,
    `รับซื้อกล้อง ${name}`,
  ];
}

export function buildDistrictFAQs(name: string) {
  return [
    {
      question: `รับซื้อไอที อำเภอ${name} มีบริการรับถึงที่ไหม?`,
      answer: `มีครับ เราให้บริการรับซื้อและรับเทิร์นสินค้าไอทีในอำเภอ${name} อุบลราชธานี สามารถนัดรับสินค้าถึงที่หรือตกลงจุดนัดพบที่สะดวก แอด LINE @buyhub เพื่อประเมินราคาฟรีได้ทันที ไม่มีค่าใช้จ่ายในการนัดรับ`,
    },
    {
      question: `รับซื้อโทรศัพท์มือถือ อำเภอ${name} ราคาเท่าไหร่?`,
      answer: `ราคารับซื้อขึ้นอยู่กับรุ่น สภาพ และอุปกรณ์ที่มาพร้อมเครื่อง ส่งรูปมาที่ LINE @buyhub เราประเมินราคาฟรีให้ภายใน 5 นาที รับประกันราคายุติธรรมตามตลาดปัจจุบัน ไม่กดราคาหลังนัดรับในอำเภอ${name}`,
    },
    {
      question: `รับเทิร์นโน้ตบุ๊ก อำเภอ${name} ต้องทำอย่างไร?`,
      answer: `ถ่ายรูปโน้ตบุ๊กและแจ้งรุ่น/สภาพ ส่งมาที่ LINE @buyhub เราจะแจ้งราคารับซื้อหรือรับเทิร์นทันที หากตกลงราคา นัดรับเงินสดในอำเภอ${name} ได้เลยครับ ไม่ต้องเสียเวลาโพสต์ขายเองหรือรอผู้ซื้อนาน`,
    },
    {
      question: `รับซื้อกล้องมือสอง อำเภอ${name} จ่ายเงินเมื่อไหร่?`,
      answer: `เมื่อตกลงราคาแล้ว เราจ่ายเงินสดทันทีเมื่อรับสินค้า ไม่มีค่าธรรมเนียมแอบแฝง กระบวนการโปร่งใส เหมาะสำหรับผู้ที่ต้องการขายกล้องหรืออุปกรณ์ไอทีด่วนในอำเภอ${name} อุบลราชธานี`,
    },
    {
      question: `iPhone ติด iCloud ขายได้ไหมในอำเภอ${name}?`,
      answer: `ไม่รับซื้อเครื่องที่ยังติด iCloud หรือ Find My ที่ปลดไม่ได้ครับ กรุณา Sign Out จาก iCloud และปิด Find My ก่อนนัดรับ เพื่อให้เครื่องพร้อมส่งต่อและได้ราคาเต็ม ทีมงานจะแนะนำขั้นตอนการปลดล็อคเบื้องต้นได้ผ่าน LINE`,
    },
    {
      question: `รับซื้อ iPad และแท็บเล็ตในอำเภอ${name} ไหม?`,
      answer: `รับซื้อครับ ทั้ง iPad Pro, iPad Air, iPad mini, iPad Gen 9/10 และ Samsung Galaxy Tab S series ส่งรูปและรุ่นมาที่ LINE @buyhub เราประเมินราคาตามความจุ สภาพ และอุปกรณ์ที่มาพร้อมในอำเภอ${name}`,
    },
    {
      question: `รับซื้อสินค้าหลายชิ้นพร้อมกันในอำเภอ${name} ได้ไหม?`,
      answer: `ได้ครับ ยิ่งขายหลายชิ้นพร้อมกันยิ่งสะดวก ส่งรูปทุกชิ้นมาที่ LINE @buyhub เราประเมินราคารวมให้ นัดรับครั้งเดียวจบในอำเภอ${name} จ่ายเงินสดทันที ไม่ต้องนัดหลายรอบ`,
    },
  ];
}
