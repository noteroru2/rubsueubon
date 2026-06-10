import { SITE } from '../config/site';
import { areaPath } from '../config/urls';
import type { District } from './districts';

type FAQItem = {
  question: string;
  answer: string;
};

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.name,
    description:
      'รับซื้อและรับเทิร์นสินค้าไอทีมือหนึ่งและมือสองในอุบลราชธานี โทรศัพท์มือถือ โน้ตบุ๊ก กล้อง และอุปกรณ์ไอทีอื่นๆ ประเมินราคาฟรี จ่ายเงินสดทันที',
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/og-default.svg`,
    priceRange: SITE.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: {
      '@type': 'City',
      name: 'อุบลราชธานี',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:30',
      },
    ],
    sameAs: SITE.sameAs,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'บริการรับซื้อ-รับเทิร์นไอที',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'รับซื้อโทรศัพท์มือถือมือหนึ่งและมือสอง',
            areaServed: 'อุบลราชธานี',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'รับซื้อโน้ตบุ๊กมือหนึ่งและมือสอง',
            areaServed: 'อุบลราชธานี',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'รับซื้อกล้องและอุปกรณ์ไอที',
            areaServed: 'อุบลราชธานี',
          },
        },
      ],
    },
  };
}

export function buildDistrictLocalBusinessSchema(district: District) {
  const pageUrl = `${SITE.url}${areaPath(district.slug)}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${pageUrl}#localbusiness`,
    name: `${SITE.name} — อำเภอ${district.name}`,
    description: `รับซื้อและรับเทิร์นสินค้าไอทีมือหนึ่งและมือสองในอำเภอ${district.name} อุบลราชธานี โทรศัพท์มือถือ โน้ตบุ๊ก กล้อง และอุปกรณ์ไอที ประเมินราคาฟรี จ่ายเงินสดทันที`,
    url: pageUrl,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/og-default.svg`,
    priceRange: SITE.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `อำเภอ${district.name}`,
      addressLocality: district.name,
      addressRegion: 'อุบลราชธานี',
      postalCode: district.postalCode,
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: district.latitude,
      longitude: district.longitude,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${district.name}, อุบลราชธานี`,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:30',
      },
    ],
    sameAs: SITE.sameAs,
    parentOrganization: {
      '@id': `${SITE.url}/#localbusiness`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `บริการรับซื้อ-รับเทิร์นไอที อำเภอ${district.name}`,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `รับซื้อโทรศัพท์มือถือ อำเภอ${district.name}`,
            areaServed: `${district.name}, อุบลราชธานี`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `รับซื้อโน้ตบุ๊ก อำเภอ${district.name}`,
            areaServed: `${district.name}, อุบลราชธานี`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `รับซื้อกล้องและอุปกรณ์ไอที อำเภอ${district.name}`,
            areaServed: `${district.name}, อุบลราชธานี`,
          },
        },
      ],
    },
  };
}

export function buildFAQPageSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'th-TH',
    publisher: {
      '@id': `${SITE.url}/#localbusiness`,
    },
  };
}

export const homepageFAQs: FAQItem[] = [
  {
    question: 'ร้านรับเทิร์นไอที อุบล อยู่ที่ไหน?',
    answer:
      'รับซื้ออุบล.com ให้บริการรับซื้อและรับเทิร์นสินค้าไอทีในอุบลราชธานี สามารถติดต่อผ่าน LINE OA @buyhub เพื่อนัดหมายและประเมินราคาได้ทันที ไม่ต้องเดินทางหากสะดวกส่งรูปออนไลน์',
  },
  {
    question: 'รับซื้อโทรศัพท์มือถือมือสอง อุบลราชธานี ราคาเท่าไหร่?',
    answer:
      'ราคารับซื้อขึ้นอยู่กับรุ่น สภาพ และอุปกรณ์ที่มาพร้อมเครื่อง ส่งรูปและรายละเอียดมาที่ LINE @buyhub เราประเมินราคาฟรีให้ภายในไม่กี่นาที รับประกันราคายุติธรรมตามตลาดอุบลราชธานี',
  },
  {
    question: 'รับเทิร์นโน้ตบุ๊ก อุบล ต้องเตรียมอะไรบ้าง?',
    answer:
      'เตรียมโน้ตบุ๊ก พร้อมอะแดปเตอร์ (ถ้ามี) และถ่ายรูปสภาพเครื่องให้ชัดเจน ส่งมาที่ LINE @buyhub เราจะแจ้งราคารับซื้อหรือรับเทิร์นทันที หากตกลงราคา นัดรับเงินสดได้เลย',
  },
  {
    question: 'รับซื้อกล้องมือสอง อุบลราชธานี จ่ายเงินเมื่อไหร่?',
    answer:
      'เมื่อตกลงราคาแล้ว เราจ่ายเงินสดทันทีเมื่อรับสินค้า ไม่มีค่าธรรมเนียมแอบแฝง กระบวนการโปร่งใส รวดเร็ว เหมาะสำหรับผู้ที่ต้องการขายกล้องหรืออุปกรณ์ไอทีด่วนในอุบลราชธานี',
  },
  {
    question: 'รับซื้ออุบล.com รับสินค้าไอทีอะไรบ้าง?',
    answer:
      'เรารับซื้อและรับเทิร์นโทรศัพท์มือถือ โน้ตบุ๊ก กล้อง แท็บเล็ต คอมพิวเตอร์ และอุปกรณ์ไอทีอื่นๆ ทั้งมือหนึ่งและมือสอง ติดต่อ LINE @buyhub เพื่อตรวจสอบรุ่นที่รับซื้อและรับใบเสนอราคาฟรี',
  },
];
