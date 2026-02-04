// Schema.org JSON-LD structured data for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ripple Nexus',
  alternateName: 'The Ripple Nexus',
  url: 'https://theripplenexus.com',
  logo: 'https://theripplenexus.com/images/logo.svg',
  description: 'Engineering teams for companies navigating complex technical transitions. Production-grade web/mobile development, AI automation, and cloud infrastructure.',
  email: 'info@theripplenexus.com',
  telephone: '+917599756826',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Vill. Kalyanpur, Post - Chaura',
    addressLocality: 'Gorakhpur',
    addressRegion: 'UP',
    postalCode: '273158',
    addressCountry: 'IN',
  },
  founder: {
    '@type': 'Person',
    name: 'Ashutosh Upadhyay',
    jobTitle: 'Founder & Lead Engineer',
  },
  sameAs: [
    'https://www.linkedin.com/company/ripple-nexus',
    'https://github.com/ripple-nexus',
  ],
  knowsAbout: [
    'Web Development',
    'Mobile App Development',
    'AI & Machine Learning',
    'Cloud Infrastructure',
    'DevOps',
    'Digital Marketing',
    'Next.js',
    'React',
    'TypeScript',
  ],
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
};

export const servicesSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Web & Mobile Development',
    description: 'Production-ready Next.js, React, and React Native applications that scale to millions of users.',
    provider: {
      '@type': 'Organization',
      name: 'Ripple Nexus',
    },
    serviceType: 'Software Development',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    offers: {
      '@type': 'Offer',
      priceRange: '$15,000 - $150,000',
      priceCurrency: 'USD',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI & Automation',
    description: 'AI systems with LangChain agents, RAG systems, and custom ML pipelines.',
    provider: {
      '@type': 'Organization',
      name: 'Ripple Nexus',
    },
    serviceType: 'AI & Machine Learning',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    offers: {
      '@type': 'Offer',
      priceRange: '$10,000 - $100,000',
      priceCurrency: 'USD',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cloud & DevOps',
    description: 'Zero-downtime migrations to AWS, GCP, Azure with 50+ successful migrations.',
    provider: {
      '@type': 'Organization',
      name: 'Ripple Nexus',
    },
    serviceType: 'Cloud Infrastructure & DevOps',
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    offers: {
      '@type': 'Offer',
      priceRange: '$20,000 - $80,000',
      priceCurrency: 'USD',
    },
  },
];

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ripple Nexus',
  url: 'https://theripplenexus.com',
  description: 'Engineering teams for companies navigating complex technical transitions.',
  publisher: {
    '@type': 'Organization',
    name: 'Ripple Nexus',
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `https://theripplenexus.com${item.url}`,
  })),
});
