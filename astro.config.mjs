// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://รับซื้ออุบล.com',
  trailingSlash: 'always',
  compressHTML: true,
  redirects: {
    // P0 Redirects
    '/บริการ/รับซื้อ-macbook/macbook-pro-m2/': '/บริการ/รับซื้อ-macbook-อุบล/macbook-pro-m2/',
    '/พื้นที่/ม่วงสามสิบ/': '/พื้นที่/muang-sam-sip/',
    '/พื้นที่/วารินชำราบ/': '/พื้นที่/warin-chamrap/',
    '/บริการ/รับซื้อโทรศัพท์-อุบล/': '/บริการ/รับซื้อมือถือ-อุบล/',

    // Other model services under old macbook path
    '/บริการ/รับซื้อ-macbook/': '/บริการ/รับซื้อ-macbook-อุบล/',
    '/บริการ/รับซื้อ-macbook/macbook-air-m1/': '/บริการ/รับซื้อ-macbook-อุบล/macbook-air-m1/',
    '/บริการ/รับซื้อ-macbook/macbook-air-m2/': '/บริการ/รับซื้อ-macbook-อุบล/macbook-air-m2/',
    '/บริการ/รับซื้อ-macbook/macbook-air-m3/': '/บริการ/รับซื้อ-macbook-อุบล/macbook-air-m3/',
    '/บริการ/รับซื้อ-macbook/macbook-pro-m1/': '/บริการ/รับซื้อ-macbook-อุบล/macbook-pro-m1/',
    '/บริการ/รับซื้อ-macbook/macbook-pro-m3/': '/บริการ/รับซื้อ-macbook-อุบล/macbook-pro-m3/',
    '/บริการ/รับซื้อ-macbook/macbook-intel/': '/บริการ/รับซื้อ-macbook-อุบล/macbook-intel/',

    // Old area paths
    '/พื้นที่/เมืองอุบลราชธานี/': '/พื้นที่/mueang-ubon-ratchathani/',
    '/พื้นที่/เดชอุดม/': '/พื้นที่/det-udom/',
    '/พื้นที่/พิบูลมังสาหาร/': '/พื้นที่/phibun-mangsahan/',
    '/พื้นที่/ตระการพืชผล/': '/พื้นที่/trakan-phuet-phon/',
    '/พื้นที่/เขื่องใน/': '/พื้นที่/khueang-nai/',
    '/พื้นที่/โขงเจียม/': '/พื้นที่/khong-chiam/',
    '/พื้นที่/น้ำยืน/': '/พื้นที่/nam-yuen/',
    '/พื้นที่/บุณฑริก/': '/พื้นที่/buntharik/',
  },
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
