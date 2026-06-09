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
      question: `รับซื้อไอที อำเภอ${name} มีบริการถึงที่ไหม?`,
      answer: `มีครับ เราให้บริการรับซื้อและรับเทิร์นสินค้าไอทีในอำเภอ${name} อุบลราชธานี สามารถนัดรับสินค้าถึงที่หรือตกลงจุดนัดพบที่สะดวก แอด LINE @buyhub เพื่อประเมินราคาฟรีได้ทันที`,
    },
    {
      question: `รับซื้อโทรศัพท์มือถือ อำเภอ${name} ราคาเท่าไหร่?`,
      answer: `ราคารับซื้อขึ้นอยู่กับรุ่น สภาพ และอุปกรณ์ที่มาพร้อมเครื่อง ส่งรูปมาที่ LINE @buyhub เราประเมินราคาฟรีให้ภายในไม่กี่นาที รับประกันราคายุติธรรมสำหรับลูกค้าในอำเภอ${name}`,
    },
    {
      question: `รับเทิร์นโน้ตบุ๊ก อำเภอ${name} ต้องทำอย่างไร?`,
      answer: `ถ่ายรูปโน้ตบุ๊กและแจ้งรุ่น/สภาพ ส่งมาที่ LINE @buyhub เราจะแจ้งราคารับซื้อหรือรับเทิร์นทันที หากตกลงราคา นัดรับเงินสดในอำเภอ${name} ได้เลยครับ`,
    },
    {
      question: `รับซื้อกล้องมือสอง อำเภอ${name} จ่ายเงินเมื่อไหร่?`,
      answer: `เมื่อตกลงราคาแล้ว เราจ่ายเงินสดทันทีเมื่อรับสินค้า ไม่มีค่าธรรมเนียมแอบแฝง เหมาะสำหรับผู้ที่ต้องการขายกล้องหรืออุปกรณ์ไอทีด่วนในอำเภอ${name} อุบลราชธานี`,
    },
  ];
}
