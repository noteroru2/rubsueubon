import { districts } from '../lib/districts';

import {
  aboutPage,
  areaPath,
  areasIndex,
  conditionsPage,
  contactPage,
  faqPage,
  pricingPage,
  privacyPage,
  servicePath,
  servicesIndex,
  updatesIndex,
  blogIndex,
} from './urls';

export const serviceNav = [
  {
    label: 'รับซื้อโทรศัพท์มือถือ',
    href: servicePath('smartphone-ubon'),
  },
  {
    label: 'รับซื้อ MacBook/iMac/Apple',
    href: servicePath('apple-ubon'),
  },
  {
    label: 'รับซื้อ iPad',
    href: servicePath('ipad-ubon'),
  },
  {
    label: 'รับซื้อแท็บเล็ต (Android)',
    href: servicePath('tablet-ubon'),
  },
  {
    label: 'รับซื้อ Apple Watch / Smart Watch',
    href: servicePath('smartwatch-ubon'),
  },
  {
    label: 'รับซื้อเครื่องเสียง JBL/Marshall',
    href: servicePath('speaker-ubon'),
  },
  {
    label: 'รับซื้อโน้ตบุ๊ก / คอมพิวเตอร์',
    href: servicePath('notebook-ubon'),
  },
  {
    label: 'รับซื้อ PC Gaming / คอมตั้งโต๊ะ',
    href: servicePath('pc-gaming-ubon'),
  },
  {
    label: 'รับซื้อการ์ดจอ / อะไหล่คอม',
    href: servicePath('pc-parts-ubon'),
  },
  {
    label: 'รับซื้อ PlayStation / Nintendo',
    href: servicePath('game-console-ubon'),
  },
  {
    label: 'รับซื้อกล้องและเลนส์',
    href: servicePath('camera-ubon'),
  },
  {
    label: 'รับซื้อทีวี / จอคอม',
    href: servicePath('tv-electronics-ubon'),
  },
  {
    label: 'รับเทิร์นสินค้าไอที',
    href: servicePath('trade-in-ubon'),
  },
] as const;

export const brandServiceNav = [
  { label: 'รับซื้อ iPhone อุบล', href: servicePath('iphone-ubon') },

  { label: 'รับซื้อ Samsung อุบล', href: servicePath('samsung-ubon') },

  { label: 'รับซื้อ iPad อุบล', href: servicePath('ipad-ubon') },

  { label: 'รับซื้อกล้อง Sony อุบล', href: servicePath('sony-camera-ubon') },
] as const;

export const areaNav = districts.filter(d => d.active).map((d) => ({
  label: `อ.${d.name}`,

  href: areaPath(d.slug),
}));

export const mainNav = [
  { label: 'หน้าแรก', href: '/' },

  { label: 'บทความ', href: blogIndex() },

  { label: 'ผลงานรับซื้อล่าสุด', href: updatesIndex() },

  { label: 'ติดต่อเรา', href: contactPage() },
] as const;

export const infoNav = [
  { label: 'เกี่ยวกับเรา', href: aboutPage() },

  { label: 'วิธีประเมินราคา', href: pricingPage() },

  { label: 'เงื่อนไขรับซื้อ', href: conditionsPage() },

  { label: 'คำถามที่พบบ่อย', href: faqPage() },
] as const;

export {
  aboutPage,
  areasIndex,
  conditionsPage,
  contactPage,
  faqPage,
  pricingPage,
  privacyPage,
  servicesIndex,
  updatesIndex,
  blogIndex,
};
