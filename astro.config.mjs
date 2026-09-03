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
    '/พื้นที่/ม่วงสามสิบ/': '/พื้นที่/muang-sam-sip/',
    '/พื้นที่/วารินชำราบ/': '/พื้นที่/warin-chamrap/',
    '/บริการ/รับซื้อโทรศัพท์-อุบล/': '/บริการ/รับซื้อมือถือ-อุบล/',
    '/บริการ/รับซื้อโน้ตบุ๊กเสีย-อุบล/': '/บริการ/notebook-broken-ubon/',

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
