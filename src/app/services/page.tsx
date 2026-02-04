import React from 'react';
import Link from 'next/link';
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animations/FadeInView';
import { PremiumButton } from '@/components/animations/PremiumButton';

export const metadata = {
  title: 'Services | Ripple Nexus - Engineering Teams for Complex Technical Transitions',
  description: 'Production-grade web/mobile development, AI automation, cloud infrastructure, digital marketing, and career branding. Transparent pricing. Engineering teams you can trust.',
  openGraph: {
    title: 'Services | Ripple Nexus',
    description: 'Production-grade web/mobile development, AI automation, cloud infrastructure, digital marketing, and career branding.',
    type: 'website',
  },
};

const services = [
  {
    title: 'Web & Mobile Development',
    href: '/services/web-mobile-development',
    description: 'Production-ready Next.js, React, and React Native applications that scale to millions of users.',
    capabilities: ['Next.js 15 + App Router', 'React Native Apps', 'Real-Time Features', 'API-First Design'],
    pricing: '$15K-150K',
    icon: (
      <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'AI & Automation',
    href: '/services/ai-automation',
    description: 'AI systems that run in your infrastructure. LangChain agents, RAG systems, and custom ML pipelines.',
    capabilities: ['LangChain/LangGraph', 'RAG Systems', 'Custom ML Models', 'Production Monitoring'],
    pricing: '$10K-100K',
    icon: (
      <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    href: '/services/cloud-devops',
    description: 'Zero-downtime migrations to AWS, GCP, Azure. We have done 50+ cloud migrations without losing a byte.',
    capabilities: ['50+ Migrations', 'Kubernetes', '<10min Deployments', '35% Cost Savings'],
    pricing: '$20K-80K',
    icon: (
      <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    href: '/services/digital-marketing',
    description: 'SEO and content for technical products. We write for engineers, not everyone.',
    capabilities: ['Technical SEO', 'B2B Content', 'LinkedIn Growth', 'Developer Marketing'],
    pricing: '$3K-8K/mo',
    icon: (
      <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Career Branding',
    href: '/services/career-branding',
    description: 'Position yourself for VP/C-level roles with LinkedIn optimization and executive resume writing.',
    capabilities: ['LinkedIn Profiles', 'Executive Resumes', 'Personal Branding', 'Portfolio Review'],
    pricing: '$500-1.2K',
    icon: (
      <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-950 pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <FadeInView delay={0.1}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Engineering Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl">
              We build production systems for companies navigating complex technical transitions.
              No templates. No shortcuts. Just engineering you can trust.
            </p>
          </FadeInView>

          <FadeInView delay={0.2} className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            <Link href="/contact">
              <PremiumButton variant="primary" className="w-full sm:w-auto">
                Schedule Consultation
              </PremiumButton>
            </Link>
            <Link href="#pricing">
              <PremiumButton variant="secondary" className="w-full sm:w-auto">
                View Pricing
              </PremiumButton>
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {services.map((service, index) => (
                <StaggerItem key={service.href}>
                  <Link href={service.href}>
                    <div className="group h-full bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-[#1e56d6] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1e56d6]/20">
                      {/* Icon */}
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#1e56d6] transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Capabilities */}
                      <div className="space-y-2 mb-6">
                        {service.capabilities.map((cap) => (
                          <div key={cap} className="flex items-center text-sm text-gray-500">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {cap}
                          </div>
                        ))}
                      </div>

                      {/* Pricing */}
                      <div className="pt-6 border-t border-gray-800">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Starting at</span>
                          <span className="text-lg font-bold text-white">{service.pricing}</span>
                        </div>
                      </div>

                      {/* CTA Arrow */}
                      <div className="mt-6 flex items-center text-[#1e56d6] font-semibold group-hover:translate-x-2 transition-transform">
                        View Details
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section id="pricing" className="py-24 bg-gray-900 border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Transparent Pricing
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                We don't hide our pricing behind "schedule a call". Every service page shows clear pricing ranges
                so you can make informed decisions.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$75-125</div>
                  <div className="text-sm text-gray-500">Hourly Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">$15K-150K</div>
                  <div className="text-sm text-gray-500">Project Range</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">3-9 weeks</div>
                  <div className="text-sm text-gray-500">Typical Timeline</div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeInView delay={0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-gray-500">Production Apps</div>
              </div>
            </FadeInView>
            <FadeInView delay={0.2}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-gray-500">Avg. Uptime</div>
              </div>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">12</div>
                <div className="text-sm text-gray-500">Countries</div>
              </div>
            </FadeInView>
            <FadeInView delay={0.4}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">Zero</div>
                <div className="text-sm text-gray-500">Data Loss</div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1e56d6] to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Schedule a technical consultation. No sales pitch. Just engineering.
            </p>
            <Link href="/contact">
              <PremiumButton variant="secondary" className="bg-white text-[#1e56d6] hover:bg-gray-100">
                Schedule Consultation
              </PremiumButton>
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
