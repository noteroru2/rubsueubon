export const SITE = {
  name: 'รับซื้ออุบล.com',
  tagline: 'รับซื้อ-รับเทิร์นไอที อุบลราชธานี ราคาดี จ่ายเงินทันที',
  url: 'https://รับซื้ออุบล.com',
  locale: 'th_TH',
  language: 'th',
  lineOA: '@buyhub',
  lineMessage: 'ประเมินราคาฟรีทันที',
  phone: '000-000-0000',
  email: 'contact@รับซื้ออุบล.com',
  address: {
    streetAddress: 'อุบลราชธานี',
    addressLocality: 'อุบลราชธานี',
    addressRegion: 'อุบลราชธานี',
    postalCode: '34000',
    addressCountry: 'TH',
  },
  geo: {
    latitude: 15.228685,
    longitude: 104.856423,
  },
  openingHours: ['Mo-Sa 09:00-18:00'],
  priceRange: '฿฿',
  sameAs: ['https://line.me/R/ti/p/@buyhub'],
} as const;

export function getLineOALink(message = SITE.lineMessage): string {
  return `https://line.me/R/oaMessage/${SITE.lineOA}/?${encodeURIComponent(message)}`;
}
