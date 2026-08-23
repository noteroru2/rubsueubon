export const SITE = {
  name: 'รับซื้ออุบล.com',
  tagline: 'รับซื้อ-รับเทิร์นไอที อุบลราชธานี ราคาดี จ่ายเงินทันที',
  url: 'https://รับซื้ออุบล.com',
  locale: 'th_TH',
  language: 'th',
  lineOA: '@buyhub',
  lineMessage: 'ประเมินราคาฟรีทันที',
  phone: '095-547-9408',
  email: 'amphontrading@gmail.com',
  businessName: 'WINNER IT',
  companyName: 'บริษัท อำพล เทรดดิ้ง จำกัด',
  address: {
    addressLocality: 'อุบลราชธานี',
    addressRegion: 'อุบลราชธานี',
    postalCode: '34000',
    addressCountry: 'TH',
  },
  openingHours: ['Mo-Su 09:00-19:30'],
  priceRange: '฿฿',
  sameAs: ['https://line.me/R/ti/p/@buyhub'],
} as const;

/** Canonical entity ID for the single verified business entity used across the site. */
export const MAIN_LOCAL_BUSINESS_ID = `${SITE.url}/#localbusiness`;

export function getLineOALink(): string {
  return `https://line.me/R/ti/p/${SITE.lineOA}`;
}
