import { MAIN_LOCAL_BUSINESS_ID, SITE } from '../config/site';

type FAQItem = {
  question: string;
  answer: string;
};

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': MAIN_LOCAL_BUSINESS_ID,
    name: SITE.name,
    alternateName: [SITE.businessName, SITE.storeName],
    legalName: SITE.companyName,
    description:
      'ร้านอำพล เทรดดิ้ง อุบลราชธานี ให้บริการรับซื้อ รับเทิร์น และรับตรวจซ่อมโทรศัพท์มือถือ iPhone iPad คอมพิวเตอร์ และโน้ตบุ๊ก ติดต่อสอบถามอาการเบื้องต้นทาง LINE @buyhub',
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
    hasMap: SITE.mapUrl,
    geo: { '@type': 'GeoCoordinates', ...SITE.geo },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'อุบลราชธานี',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: SITE.storeHours.days,
        opens: SITE.storeHours.opens,
        closes: SITE.storeHours.closes,
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'บริการรับซื้อ รับเทิร์น และซ่อมสินค้าไอที',
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
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ซ่อมโทรศัพท์มือถือ iPhone และ iPad',
            areaServed: 'อุบลราชธานี',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'ซ่อมคอมพิวเตอร์และโน้ตบุ๊ก',
            areaServed: 'อุบลราชธานี',
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
      '@id': MAIN_LOCAL_BUSINESS_ID,
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
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      postalCode: SITE.address.postalCode,
      addressCountry: 'TH',
    },
  };
}

export const homepageFAQs: FAQItem[] = [
  {
    question: 'ร้านรับเทิร์นไอที อุบล อยู่ที่ไหน?',
    answer: `${SITE.storeName} (${SITE.businessName}) อยู่ที่ ${SITE.addressText} ${SITE.landmark} เข้ามาที่ร้านได้${SITE.storeHoursLabel} หรือติดต่อ LINE ${SITE.lineOA} ได้ ${SITE.lineHours}`,
  },
  {
    question: 'รับซื้อโทรศัพท์มือถือมือสอง อุบลราชธานี ราคาเท่าไหร่?',
    answer: `ราคารับซื้อขึ้นอยู่กับรุ่น สภาพ และอุปกรณ์ที่มาพร้อมเครื่อง ส่งรูปและรายละเอียดมาที่ LINE ${SITE.lineOA} ได้ ${SITE.lineHours} ประเมินราคาเบื้องต้นฟรี ${SITE.estimateNote}`,
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
