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
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE.url}/#localbusiness`,
    name: SITE.name,
    alternateName: SITE.businessName,
    legalName: SITE.companyName,
    description:
      'รับซื้อและรับเทิร์นสินค้าไอทีมือหนึ่งและมือสองในอุบลราชธานี โทรศัพท์มือถือ โน้ตบุ๊ก กล้อง และอุปกรณ์ไอทีอื่นๆ ส่งรูปประเมินราคาเบื้องต้นทาง LINE @buyhub',
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: [`${SITE.url}/images/logo.webp`, `${SITE.url}/images/winner-it-storefront.png`],
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/images/logo.webp`,
      width: 400,
      height: 114,
    },
    priceRange: SITE.priceRange,
    currenciesAccepted: 'THB',
    paymentAccepted: 'Cash, Bank Transfer',
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
    hasMap: 'https://maps.app.goo.gl/uJmRP43ZzN4hEceW9',
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      contactType: 'customer service',
      areaServed: 'TH',
      availableLanguage: 'Thai',
      contactOption: 'TollFree',
    },
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
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'รับซื้อแท็บเล็ต iPad มือสอง',
            areaServed: 'อุบลราชธานี',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'รับซื้อ MacBook iMac Apple',
            areaServed: 'อุบลราชธานี',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'รับเทิร์นสินค้าไอที อุบลราชธานี',
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
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${pageUrl}#localbusiness`,
    name: `${SITE.name} — อำเภอ${district.name}`,
    description: `รับซื้อและรับเทิร์นสินค้าไอทีมือหนึ่งและมือสองในอำเภอ${district.name} อุบลราชธานี โทรศัพท์มือถือ โน้ตบุ๊ก กล้อง และอุปกรณ์ไอที ประเมินราคาฟรี จ่ายเงินสดทันที`,
    url: pageUrl,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/images/logo.webp`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/images/logo.webp`,
      width: 400,
      height: 114,
    },
    priceRange: SITE.priceRange,
    currenciesAccepted: 'THB',
    paymentAccepted: 'Cash, Bank Transfer',
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
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE.phone,
      contactType: 'customer service',
      areaServed: 'TH',
      availableLanguage: 'Thai',
    },
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

export function buildPlaceSchema(name: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AdministrativeArea',
    '@id': `${pageUrl}#place`,
    name: `${name}, อุบลราชธานี`,
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: 'อุบลราชธานี',
    },
  };
}

export function buildItemListSchema(name: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
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
    description: SITE.tagline,
    publisher: {
      '@id': `${SITE.url}/#localbusiness`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/บริการ/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.businessName,
    legalName: SITE.companyName,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/images/logo.webp`,
      width: 400,
      height: 114,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone,
        contactType: 'customer service',
        areaServed: 'TH',
        availableLanguage: 'Thai',
      },
    ],
    sameAs: SITE.sameAs,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'อุบลราชธานี',
      addressRegion: 'อุบลราชธานี',
      postalCode: SITE.address.postalCode,
      addressCountry: 'TH',
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
      'ราคารับซื้อขึ้นอยู่กับรุ่น สภาพ และอุปกรณ์ที่มาพร้อมเครื่อง ส่งรูปและรายละเอียดมาที่ LINE @buyhub เราประเมินราคาเบื้องต้นฟรีและตอบกลับในเวลาทำการ ยืนยันราคาอีกครั้งหลังตรวจเครื่องจริงตามข้อมูลที่แจ้งไว้',
  },
  {
    question: 'รับเทิร์นโน้ตบุ๊ก อุบล ต้องเตรียมอะไรบ้าง?',
    answer:
      'เตรียมโน้ตบุ๊ก พร้อมอะแดปเตอร์ (ถ้ามี) และถ่ายรูปสภาพเครื่องให้ชัดเจน ส่งมาที่ LINE @buyhub เราจะแจ้งราคารับซื้อหรือรับเทิร์นเบื้องต้น หากตกลงราคา นัดรับเงินสดหรือโอนได้ตามที่ตกลง',
  },
  {
    question: 'รับซื้อกล้องมือสอง อุบลราชธานี จ่ายเงินเมื่อไหร่?',
    answer:
      'เมื่อตกลงราคาแล้ว เราจ่ายเงินสดหรือโอนเมื่อรับสินค้า ไม่มีค่าธรรมเนียมแอบแฝง กระบวนการโปร่งใส เหมาะสำหรับผู้ที่ต้องการขายกล้องหรืออุปกรณ์ไอทีในอุบลราชธานี',
  },
  {
    question: 'รับซื้ออุบล.com รับสินค้าไอทีอะไรบ้าง?',
    answer:
      'เรารับซื้อและรับเทิร์นโทรศัพท์มือถือ โน้ตบุ๊ก กล้อง แท็บเล็ต คอมพิวเตอร์ และอุปกรณ์ไอทีอื่นๆ ทั้งมือหนึ่งและมือสอง ติดต่อ LINE @buyhub เพื่อตรวจสอบรุ่นที่รับซื้อและรับใบเสนอราคาฟรี',
  },
];
