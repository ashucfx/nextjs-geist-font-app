import React from 'react';

export interface BlogArticle {
    slug: string;
    title: string;
    category: string;
    summary: string;
    readingTime: number;
    image: string;
    tags: string[];
    content?: React.ReactNode; 
    author?: string;
    date?: string;
}

export const mockBlogArticles: BlogArticle[] = [
  {
    slug: 'digital-transformation-audit-checklist',
    title: 'The Essential Audit Checklist for Digital Transformation in 2025',
    category: 'Digital Strategy',
    summary: 'A detailed breakdown of the 10 critical checks every enterprise must complete before launching a major digital transformation project.',
    readingTime: 12,
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Strategy', 'Compliance', 'Enterprise', 'Audit'],
  },
  {
    slug: 'optimizing-linkedin-for-executive-roles',
    title: '5 Ways to Optimize Your LinkedIn Profile for Executive Recruiter Outreach',
    category: 'Personal Branding',
    summary: 'Turn your LinkedIn profile from a passive resume into an active thought leadership platform capable of attracting C-suite opportunities.',
    readingTime: 7,
    image: 'https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Career', 'LinkedIn', 'Executive', 'Optimization'],
  },
  {
    slug: 'serverless-devops-for-scale',
    title: 'Why Serverless Architecture is the Future of Scalable DevOps Pipelines',
    category: 'Core Technology',
    summary: 'Explore how moving CI/CD pipelines to a serverless model reduces maintenance overhead and drastically increases deployment speed.',
    readingTime: 15,
    image: 'https://images.pexels.com/photos/6238692/pexels-photo-6238692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['DevOps', 'Cloud', 'Architecture', 'Scalability'],
  },
  {
    slug: 'data-security-without-friction',
    title: 'Achieving Data Security and Compliance Without Sacrificing UX/UI',
    category: 'Design',
    summary: 'A guide to integrating robust security protocols and compliance measures directly into the user experience for seamless interaction.',
    readingTime: 9,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['UX/UI', 'Security', 'Design', 'Compliance'],
  },
  {
    slug: 'headless-ecommerce-pros-and-cons',
    title: 'Headless Commerce: The Pros and Cons for Enterprise E-commerce Platforms',
    category: 'Core Technology',
    summary: 'An analysis of why decoupling the frontend from the backend is driving conversion rates but adding complexity for large retail organizations.',
    readingTime: 11,
    image: 'https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['WebDev', 'E-commerce', 'Strategy', 'Architecture'],
  },
  {
    slug: 'driving-b2b-leads-with-seo',
    title: 'Driving High-Value B2B Leads Using Niche SEO Content Strategy',
    category: 'Digital Marketing',
    summary: 'How to move beyond generic keywords and target long-tail, high-intent industrial keywords to secure qualified enterprise leads.',
    readingTime: 8,
    image: 'https://images.pexels.com/photos/5673487/pexels-photo-5673487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['SEO', 'Marketing', 'B2B', 'Content'],
  },
  {
    slug: 'ai-in-erp-future',
    title: 'The AI Overhaul: Integrating Predictive Intelligence into Enterprise ERP Systems',
    category: 'Core Technology',
    summary: 'Examining the necessary technological steps for infusing AI into legacy ERP systems to automate decision-making and forecasting.',
    readingTime: 14,
    image: 'https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['ERP', 'AI', 'Integration', 'Forecasting'],
  },
  {
    slug: 'mobile-app-ux-for-field-ops',
    title: 'Designing Mobile UX for Field Operations: Key Principles for Adoption',
    category: 'Design',
    summary: 'Best practices for creating rugged, intuitive mobile apps that guarantee 100% paperless adoption among field service and maintenance teams.',
    readingTime: 10,
    image: 'https://images.pexels.com/photos/1036329/pexels-photo-1036329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['MobileApp', 'UX/UI', 'FieldService', 'Adoption'],
  },
  {
    slug: 'cfo-branding-for-board-seats',
    title: 'From CFO to Board Member: Rebranding Your Profile for Corporate Governance',
    category: 'Personal Branding',
    summary: 'How to transition your professional narrative from an operational leader to a strategic voice sought after for non-executive director roles.',
    readingTime: 6,
    image: 'https://images.pexels.com/photos/3861751/pexels-photo-3861751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Executive', 'Governance', 'Rebranding'],
  },
  {
    slug: 'kubernetes-vs-serverless-2025',
    title: 'Kubernetes vs. Serverless: Choosing the Right Container Strategy for Scale',
    category: 'Infrastructure',
    summary: 'A deep comparative analysis of two leading cloud deployment strategies: when to choose complex orchestration and when to go fully serverless.',
    readingTime: 18,
    image: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Cloud', 'Kubernetes', 'DevOps', 'Architecture'],
  },
  {
    slug: 'ir-site-compliance-guide',
    title: 'Building Compliant Investor Relations Websites: A Technical Guide',
    category: 'Digital Strategy',
    summary: 'Ensuring your Investor Relations microsite meets all SEC, stock exchange, and data compliance mandates using audited architecture.',
    readingTime: 13,
    image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['WebDev', 'Finance', 'Compliance', 'Security'],
  },
  {
    slug: 'maximizing-ppc-roi',
    title: 'Maximizing PPC ROI in Highly Regulated Industries: A Compliance Focus',
    category: 'Digital Marketing',
    summary: 'Strategies for running high-converting pay-per-click campaigns while adhering strictly to financial and health sector advertising regulations.',
    readingTime: 7,
    image: 'https://images.pexels.com/photos/3184393/pexels-photo-3184393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['PPC', 'Marketing', 'Compliance', 'ROI'],
  },
  {
    slug: 'from-military-to-tech-pm',
    title: 'Translating Military Leadership to Civilian Tech PM: A Resume Guide',
    category: 'Personal Branding',
    summary: 'A step-by-step guide on restructuring a military service record to highlight transferrable skills crucial for project management roles in tech.',
    readingTime: 8,
    image: 'https://images.pexels.com/photos/5699195/pexels-photo-5699195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Career', 'Resume', 'Transition'],
  },
  {
    slug: 'nextjs-performance-tuning',
    title: 'Next.js Performance Tuning: 7 Advanced Tips for Enterprise Applications',
    category: 'Core Technology',
    summary: 'Beyond basic optimization: Deep dive into advanced caching strategies, server-side data fetching, and bundle analysis for ultra-fast Next.js apps.',
    readingTime: 16,
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
    tags: ['WebDev', 'Performance', 'Architecture'],
  },
  {
    slug: 'ui-ux-design-system-value',
    title: 'The ROI of Design Systems: Calculating the Value of UI Consistency',
    category: 'Design',
    summary: 'Quantifying the time and cost savings realized by implementing a unified, token-based design system across multiple application teams.',
    readingTime: 9,
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
    tags: ['UX/UI', 'Design System', 'ROI'],
  },
];