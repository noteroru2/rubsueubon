import { servicePath } from './urls';

export const MAIN_HUB_SERVICE_SLUGS = [
  'รับซื้อโทรศัพท์-อุบล',
  'รับซื้อโน้ตบุ๊ก-อุบล',
  'รับซื้อกล้อง-อุบล',
  'รับซื้อ-apple-อุบล',
  'รับซื้อ-pc-gaming-อุบล',
  'ipad-ubon',
  'รับซื้อ-เครื่องเกม-อุบล',
  'รับเทิร์นไอที-อุบล',
] as const;

export const popularProducts = [
  {
    label: 'iPhone 15 Pro Max',
    href: '/บริการ/รับซื้อ-iphone/iphone-15-pro-max/',
    image: '/images/services/smartphone-iphone-android.webp',
  },
  {
    label: 'iPhone 16 Pro Max',
    href: '/บริการ/รับซื้อ-iphone/iphone-16-pro-max/',
    image: '/images/services/smartphone-iphone-android.webp',
  },
  {
    label: 'MacBook Air M1',
    href: '/บริการ/รับซื้อ-macbook/macbook-air-m1/',
    image: '/images/services/apple-devices-macbook-imac.webp',
  },
  {
    label: 'iPad Pro',
    href: '/บริการ/รับซื้อ-ipad/ipad-pro/',
    image: '/images/services/ipad-tablet.webp',
  },
  {
    label: 'โน้ตบุ๊กเกมมิ่ง',
    href: '/บริการ/รับซื้อโน้ตบุ๊ก-gaming-อุบล/',
    image: '/images/services/notebook-ubon.webp',
  },
  {
    label: 'กล้อง Sony Alpha',
    href: servicePath('sony-camera-ubon'),
    image: '/images/services/camera-sony-canon-fujifilm.webp',
  },
  {
    label: 'PC Gaming',
    href: servicePath('pc-gaming-ubon'),
    image: '/images/services/pc-gaming-desktop.webp',
  },
  {
    label: 'คอมยกล็อต',
    href: servicePath('b2b-lot-ubon'),
    image: '/images/services/notebook-ubon.webp',
  },
] as const;

export const serviceClusters = [
  {
    title: 'กลุ่มมือถือ',
    links: [
      { label: 'รับซื้อ iPhone อุบล', href: servicePath('iphone-ubon') },
      { label: 'รับซื้อ Samsung อุบล', href: servicePath('samsung-ubon') },
      { label: 'รับซื้อมือถือ Android อุบล', href: servicePath('smartphone-ubon') },
      { label: 'รับซื้อ iPhone 16 Pro Max อุบล', href: '/บริการ/รับซื้อ-iphone/iphone-16-pro-max/' },
      { label: 'รับซื้อ iPhone 15 Pro Max อุบล', href: '/บริการ/รับซื้อ-iphone/iphone-15-pro-max/' },
      { label: 'รับซื้อ iPhone 14 Pro Max อุบล', href: '/บริการ/รับซื้อ-iphone/iphone-14-pro-max/' },
    ],
  },
  {
    title: 'กลุ่มคอม / โน้ตบุ๊ก',
    links: [
      { label: 'รับซื้อโน้ตบุ๊ก อุบล', href: servicePath('notebook-ubon') },
      { label: 'รับซื้อโน้ตบุ๊กเกมมิ่ง อุบล', href: '/บริการ/รับซื้อโน้ตบุ๊ก-gaming-อุบล/' },
      { label: 'รับซื้อโน้ตบุ๊กเปิดไม่ติด อุบล', href: '/บริการ/รับซื้อโน้ตบุ๊กเปิดไม่ติด-อุบล/' },
      { label: 'รับซื้อโน้ตบุ๊ก ASUS อุบล', href: '/บริการ/รับซื้อโน้ตบุ๊ก-asus-อุบล/' },
      { label: 'รับซื้อ PC Gaming อุบล', href: servicePath('pc-gaming-ubon') },
      { label: 'รับซื้อคอมประกอบ อุบล', href: '/บริการ/รับซื้อคอมประกอบ-อุบล/' },
      { label: 'รับซื้อคอมบริษัท อุบล', href: '/บริการ/รับซื้อคอมบริษัท-อุบล/' },
      { label: 'รับซื้อคอมยกล็อต อุบล', href: servicePath('b2b-lot-ubon') },
    ],
  },
  {
    title: 'กลุ่ม Apple',
    links: [
      { label: 'รับซื้อ MacBook อุบล', href: servicePath('macbook-ubon') },
      { label: 'รับซื้อ iPad อุบล', href: servicePath('ipad-ubon') },
      { label: 'รับซื้อ Apple Watch อุบล', href: servicePath('smartwatch-ubon') },
      { label: 'รับซื้อ iPad Pro อุบล', href: '/บริการ/รับซื้อ-ipad/ipad-pro/' },
      { label: 'รับซื้อ MacBook Air M1 อุบล', href: '/บริการ/รับซื้อ-macbook/macbook-air-m1/' },
      { label: 'รับซื้อ MacBook Air M3 อุบล', href: '/บริการ/รับซื้อ-macbook/macbook-air-m3/' },
      { label: 'รับซื้อ iMac อุบล', href: servicePath('imac-ubon') },
    ],
  },
  {
    title: 'กลุ่มกล้อง',
    links: [
      { label: 'รับซื้อกล้อง อุบล', href: servicePath('camera-ubon') },
      { label: 'รับซื้อเลนส์กล้อง อุบล', href: servicePath('camera-lens-ubon') },
      { label: 'รับซื้อกล้อง Sony อุบล', href: servicePath('sony-camera-ubon') },
      { label: 'รับซื้อกล้อง Canon อุบล', href: '/บริการ/รับซื้อกล้อง-canon-อุบล/' },
      { label: 'รับซื้อกล้องพร้อมเลนส์ อุบล', href: '/บริการ/รับซื้อกล้องพร้อมเลนส์-อุบล/' },
    ],
  },
] as const;

export const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.025200608903!2d104.844358!3d15.266421499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311687b7ef0583c9%3A0x90ad9a37b84af3a!2z4Lit4Liz4Lie4LilIOC5gOC4l-C4o-C4lOC4lOC4tOC5ieC4hyAtIOC4o-C4seC4muC4i-C4t-C5ieC4rSDguILguLLguKIg4LiL4LmI4Lit4LihIOC4hOC4reC4oeC4nuC4tOC4p-C5gOC4leC4reC4o-C5jCDguKHguLfguK3guJbguLfguK0g4LiB4Lil4LmJ4Lit4LiHIOC4peC4s-C5guC4nuC4hyDguKrguLTguJnguITguYnguLLguYTguK3guJfguLXguJfguLjguIHguIrguJnguLTguJQ!5e0!3m2!1sth!2sth!4v1781084191572!5m2!1sth!2sth';

export const MAP_URL = 'https://maps.app.goo.gl/uuwGbjpMeedTC1ik8';
