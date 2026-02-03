// Schema.org structured data utilities for UpFreights

// Organization information - single source of truth
export const ORGANIZATION_INFO = {
  name: 'UpFreights',
  legalName: 'Zhejiang Twings Supply Chain Co., Ltd.',
  url: 'https://upfreights.com',
  logo: 'https://upfreights.com/logo.png',
  description: 'International freight forwarding services from China. Sea freight, air freight, door-to-door delivery, and customs clearance solutions.',
  foundingDate: '2016',
  address: {
    streetAddress: 'Room 1106, Fuyue Building, No.28 Zhonghuan West Road',
    addressLocality: 'Jiaxing',
    addressRegion: 'Zhejiang',
    postalCode: '314000',
    addressCountry: 'CN',
  },
  geo: {
    latitude: 30.7522,
    longitude: 120.7530,
  },
  telephone: '+86-573-82600785',
  email: 'quote@upfreights.com',
  sameAs: [
    'https://www.linkedin.com/company/upfreights',
  ],
  areaServed: [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'Australia',
    'Netherlands', 'France', 'Italy', 'Spain', 'Japan', 'South Korea',
  ],
};

// Team members for Person schema
export const TEAM_MEMBERS = [
  {
    name: 'David Fan',
    jobTitle: 'Co-founder & CEO',
    description: 'Co-founder and CEO of UpFreights with extensive experience in international logistics.',
  },
  {
    name: 'Victoria Lang',
    jobTitle: 'Chief Operational Officer',
    description: 'Chief Operational Officer overseeing all logistics operations.',
  },
  {
    name: 'Kaylee Zhang',
    jobTitle: 'Sales Manager',
    description: 'Sales Manager responsible for client relationships and business development.',
  },
  {
    name: 'Richard Wang',
    jobTitle: 'Senior Sales',
    description: 'Senior Sales representative specializing in freight forwarding solutions.',
  },
];

// Generate Organization schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${ORGANIZATION_INFO.url}/#organization`,
    name: ORGANIZATION_INFO.name,
    legalName: ORGANIZATION_INFO.legalName,
    url: ORGANIZATION_INFO.url,
    logo: {
      '@type': 'ImageObject',
      url: ORGANIZATION_INFO.logo,
    },
    description: ORGANIZATION_INFO.description,
    foundingDate: ORGANIZATION_INFO.foundingDate,
    address: {
      '@type': 'PostalAddress',
      ...ORGANIZATION_INFO.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...ORGANIZATION_INFO.geo,
    },
    telephone: ORGANIZATION_INFO.telephone,
    email: ORGANIZATION_INFO.email,
    sameAs: ORGANIZATION_INFO.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: ORGANIZATION_INFO.telephone,
      email: ORGANIZATION_INFO.email,
      contactType: 'customer service',
      availableLanguage: ['English', 'Chinese'],
    },
  };
}

// Generate WebSite schema
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${ORGANIZATION_INFO.url}/#website`,
    name: ORGANIZATION_INFO.name,
    url: ORGANIZATION_INFO.url,
    description: ORGANIZATION_INFO.description,
    publisher: {
      '@id': `${ORGANIZATION_INFO.url}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${ORGANIZATION_INFO.url}/all-routes?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Generate LocalBusiness schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${ORGANIZATION_INFO.url}/#localbusiness`,
    name: ORGANIZATION_INFO.name,
    image: ORGANIZATION_INFO.logo,
    url: ORGANIZATION_INFO.url,
    telephone: ORGANIZATION_INFO.telephone,
    email: ORGANIZATION_INFO.email,
    address: {
      '@type': 'PostalAddress',
      ...ORGANIZATION_INFO.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...ORGANIZATION_INFO.geo,
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    areaServed: ORGANIZATION_INFO.areaServed.map((country) => ({
      '@type': 'Country',
      name: country,
    })),
  };
}

// Generate BreadcrumbList schema
export function generateBreadcrumbSchema(
  items: { name: string; url?: string }[]
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

// Generate Service schema
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  features?: string[];
  areaServed?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${service.url}/#service`,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@id': `${ORGANIZATION_INFO.url}/#organization`,
    },
    areaServed: (service.areaServed || ORGANIZATION_INFO.areaServed).map((country) => ({
      '@type': 'Country',
      name: country,
    })),
    ...(service.features && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.name} Features`,
        itemListElement: service.features.map((feature, index) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: feature,
          },
        })),
      },
    }),
  };
}

// Generate BlogPosting schema
export function generateBlogPostingSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  category?: string;
  content: string;
  readingTime?: string;
}) {
  const wordCount = post.content.split(/\s+/).length;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${ORGANIZATION_INFO.url}/blog/${post.slug}/#blogpost`,
    headline: post.title,
    description: post.excerpt,
    url: `${ORGANIZATION_INFO.url}/blog/${post.slug}`,
    author: {
      '@id': `${ORGANIZATION_INFO.url}/#organization`,
    },
    publisher: {
      '@id': `${ORGANIZATION_INFO.url}/#organization`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${ORGANIZATION_INFO.url}/blog/${post.slug}`,
    },
    ...(post.category && { articleSection: post.category }),
    wordCount: wordCount,
    inLanguage: 'en-US',
    isAccessibleForFree: true,
  };
}

// Generate AboutPage schema
export function generateAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${ORGANIZATION_INFO.url}/about/#webpage`,
    name: 'About UpFreights',
    description: 'Learn about UpFreights - your trusted partner for international freight forwarding from China.',
    url: `${ORGANIZATION_INFO.url}/about`,
    mainEntity: {
      '@id': `${ORGANIZATION_INFO.url}/#organization`,
    },
  };
}

// Generate ContactPage schema
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${ORGANIZATION_INFO.url}/contact/#webpage`,
    name: 'Contact UpFreights',
    description: 'Get in touch with UpFreights for freight forwarding quotes and logistics support.',
    url: `${ORGANIZATION_INFO.url}/contact`,
    mainEntity: {
      '@id': `${ORGANIZATION_INFO.url}/#localbusiness`,
    },
  };
}

// Generate Person schema for team members
export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
}) {
  return {
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    worksFor: {
      '@id': `${ORGANIZATION_INFO.url}/#organization`,
    },
  };
}

// Generate CollectionPage schema for blog listing
export function generateBlogCollectionSchema(posts: { title: string; slug: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${ORGANIZATION_INFO.url}/blog/#webpage`,
    name: 'Shipping Insights - UpFreights Blog',
    description: 'Expert insights on international shipping, freight forwarding, and logistics from UpFreights.',
    url: `${ORGANIZATION_INFO.url}/blog`,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: posts.length,
      itemListElement: posts.slice(0, 10).map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${ORGANIZATION_INFO.url}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };
}

// Generate route-specific Service schema
export function generateRouteServiceSchema(route: {
  origin: string;
  destination: string;
  originCountry: string;
  destinationCountry: string;
  slug: string;
  serviceType: 'sea-freight' | 'air-freight';
  transitTime?: string;
  frequency?: string;
}) {
  const serviceName = route.serviceType === 'sea-freight' ? 'Sea Freight' : 'Air Freight';
  const url = `${ORGANIZATION_INFO.url}/${route.serviceType}/${route.slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}/#service`,
    name: `${serviceName} from ${route.origin} to ${route.destination}`,
    description: `Professional ${serviceName.toLowerCase()} shipping services from ${route.origin}, ${route.originCountry} to ${route.destination}, ${route.destinationCountry}. Reliable logistics solutions with competitive rates.`,
    url: url,
    provider: {
      '@id': `${ORGANIZATION_INFO.url}/#organization`,
    },
    serviceType: serviceName,
    areaServed: [
      { '@type': 'Country', name: route.originCountry },
      { '@type': 'Country', name: route.destinationCountry },
    ],
    ...(route.transitTime && {
      termsOfService: `Transit time: ${route.transitTime}`,
    }),
  };
}
