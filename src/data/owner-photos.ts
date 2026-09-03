import image0 from '../assets/owner-photos/storefront.jpg';
import image1 from '../assets/owner-photos/notebook-lineup.jpg';
import image2 from '../assets/owner-photos/pc-white.jpg';
import image3 from '../assets/owner-photos/pc-black-side.jpg';
import image4 from '../assets/owner-photos/asus-vivobook.jpg';
import image5 from '../assets/owner-photos/pc-black-angle.jpg';
import image6 from '../assets/owner-photos/acer-aspire-lite.jpg';
import image7 from '../assets/owner-photos/acer-aspire.jpg';
import image8 from '../assets/owner-photos/macbook-air-silver.jpg';
import image9 from '../assets/owner-photos/asus-vivobook-s413.jpg';
import image10 from '../assets/owner-photos/asus-vivobook-s513.jpg';
import image11 from '../assets/owner-photos/macbook-air-m3.jpg';
import image12 from '../assets/owner-photos/insta360-x5.jpg';

export const ownerPhotos = {
  'storefront': { image: image0, alt: "ป้ายและทางเข้าร้านอำพล เทรดดิ้ง ถนนชยางกูร อุบลราชธานี" },
  'notebook-lineup': { image: image1, alt: "โน้ตบุ๊กหลายเครื่องบนโต๊ะภายในร้านอำพล เทรดดิ้ง" },
  'pc-white': { image: image2, alt: "คอมพิวเตอร์ประกอบเคสสีขาว พร้อมการ์ดจอและพัดลมภายในเคส" },
  'pc-black-side': { image: image3, alt: "คอมพิวเตอร์เคสสีดำ มุมด้านข้างเห็นการ์ดจอ GeForce RTX" },
  'asus-vivobook': { image: image4, alt: "ASUS VivoBook เปิดหน้าจอให้เห็นสภาพจอและแป้นพิมพ์" },
  'pc-black-angle': { image: image5, alt: "คอมพิวเตอร์เคสสีดำ มุมด้านหน้าและด้านข้าง" },
  'acer-aspire-lite': { image: image6, alt: "โน้ตบุ๊ก Acer Aspire Lite เปิดหน้าจอบนโต๊ะในร้าน" },
  'acer-aspire': { image: image7, alt: "โน้ตบุ๊ก Acer Aspire พร้อมแป้นพิมพ์และหน้าจอ" },
  'macbook-air-silver': { image: image8, alt: "MacBook Air สีเงินวางบนกล่อง เปิดหน้าจอ macOS" },
  'asus-vivobook-s413': { image: image9, alt: "ASUS VivoBook มุมเฉียง เห็นหน้าจอ แป้นพิมพ์ และพอร์ตด้านข้าง" },
  'asus-vivobook-s513': { image: image10, alt: "ASUS VivoBook มุมด้านหน้า เห็นหน้าจอและแป้นพิมพ์เต็มเครื่อง" },
  'macbook-air-m3': { image: image11, alt: "MacBook Air M3 เปิดหน้าจอและแป้นพิมพ์" },
  'insta360-x5': { image: image12, alt: "กล้อง Insta360 X5 วางในกล่องพร้อมเอกสารประกอบ" },
} as const;
export type OwnerPhotoId = keyof typeof ownerPhotos;
