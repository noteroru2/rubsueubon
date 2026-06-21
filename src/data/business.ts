import { SITE, getLineOALink } from '../config/site';
import { MAP_URL } from '../config/home-hub';

/** NAP และข้อมูลธุรกิจกลาง — ใช้กระจายทุกหน้า service/area */
export const BUSINESS = {
  brand: SITE.name,
  operator: SITE.businessName,
  company: SITE.companyName,
  phone: SITE.phone,
  email: SITE.email,
  lineOA: SITE.lineOA,
  lineUrl: getLineOALink(),
  hours: '09:00–19:30 ทุกวัน',
  hoursShort: '09:00–19:30',
  province: 'อุบลราชธานี',
  serviceDistricts: [
    'เมืองอุบลราชธานี',
    'วารินชำราบ',
    'เดชอุดม',
    'พิบูลมังสาหาร',
    'เขื่องใน',
    'โขงเจียม',
    'น้ำยืน',
    'บุณฑริก',
    'ตระการพืชผล',
    'ม่วงสามสิบ',
  ],
  address: SITE.address,
  geo: SITE.geo,
  mapUrl: MAP_URL,
  storefrontImage: '/images/winner-it-storefront.png',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.025200608903!2d104.844358!3d15.266421499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311687b7ef0583c9%3A0x90ad9a37b84af3a!2z4Lit4Liz4Lie4LilIOC5gOC4l-C4o-C4lOC4lOC4tOC5ieC4hyAtIOC4o-C4seC4muC4i-C4t-C5ieC4rSDguILguLLguKIg4LiL4LmI4Lit4LihIOC4hOC4reC4oeC4nuC4tOC4p-C5gOC4leC4reC4o-C5jCDguKHguLfguK3guJbguLfguK0g4LiB4Lil4LmJ4Lit4LiHIOC4peC4s-C5guC4nuC4hyDguKrguLTguJnguITguYnguLLguYTguK3guJfguLXguJfguLjguIHguIrguJnguLTguJQ!5e0!3m2!1sth!2sth!4v1781084191572!5m2!1sth!2sth',
} as const;

export type QuickAnswer = {
  question: string;
  answer: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};
