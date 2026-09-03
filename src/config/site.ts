import businessProfile from './business-profile.json';

export const SITE = {
  name: 'รับซื้ออุบล.com',
  tagline: 'รับซื้อ-รับเทิร์นไอที อุบลราชธานี ราคาดี จ่ายเงินทันที',
  url: 'https://รับซื้ออุบล.com',
  locale: 'th_TH',
  language: 'th',
  lineOA: businessProfile.lineOA,
  lineMessage: 'ประเมินราคาเบื้องต้นฟรี',
  phone: businessProfile.phone,
  email: businessProfile.email,
  businessName: businessProfile.operator,
  companyName: businessProfile.companyName,
  storeName: businessProfile.storeName,
  address: businessProfile.address,
  addressText: `${businessProfile.address.streetAddress} ${businessProfile.address.addressLocality} จังหวัด${businessProfile.address.addressRegion} ${businessProfile.address.postalCode}`,
  landmark: businessProfile.landmark,
  mapUrl: businessProfile.mapUrl,
  facebookUrl: businessProfile.facebookUrl,
  geo: businessProfile.geo,
  storeHours: businessProfile.storeHours,
  storeHoursLabel: `ทุกวัน ${businessProfile.storeHours.opens}–${businessProfile.storeHours.closes} น.`,
  lineHours: businessProfile.lineHours,
  estimateNote: businessProfile.estimateNote,
  visitNote: businessProfile.visitNote,
  pickupNote: businessProfile.pickupNote,
  openingHours: [`Mo-Su ${businessProfile.storeHours.opens}-${businessProfile.storeHours.closes}`],
  priceRange: '฿฿',
  sameAs: [`https://line.me/R/ti/p/${businessProfile.lineOA}`, businessProfile.mapUrl, businessProfile.facebookUrl],
} as const;

/** Canonical entity ID for the single verified business entity used across the site. */
export const MAIN_LOCAL_BUSINESS_ID = `${SITE.url}/#localbusiness`;

export function getLineOALink(): string {
  return `https://line.me/R/ti/p/${SITE.lineOA}`;
}
