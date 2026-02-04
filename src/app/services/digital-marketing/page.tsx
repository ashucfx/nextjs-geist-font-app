"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animations/FadeInView';
import { PremiumButton, PremiumCard } from '@/components/animations/PremiumButton';

export default function DigitalMarketing() {
  const services = [
    {
      title: "Technical SEO for B2B SaaS",
      description: "We rank for keywords that matter. Not vanity metrics—actual qualified leads from search.",
      results: "Average 40% organic growth in 6 months"
    },
    {
      title: "Content Strategy for Technical Buyers",
      description: "Write for engineers and technical decision-makers. Long-form technical content that ranks and converts.",
      results: "300% increase in qualified demo requests"
    },
    {
      title: "LinkedIn for Technical Founders",
      description: "Position CTOs and technical founders as thought leaders. Strategic posting, not spam.",
      results: "5x profile views, 3x inbound leads"
    },
    {
      title: "Developer Marketing",
      description: "Reach developers where they are: GitHub, Stack Overflow, dev.to, Reddit. Authentic engagement, not ads.",
      results: "10K+ dev community engagement"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-[#1e56d6]/10">
        <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#1e56d6]/10 border border-[#1e56d6]/30 rounded-full mb-6">
              <span className="text-[#1e56d6] font-semibold text-sm uppercase tracking-wide">Growth Strategy</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing & SEO for Technical Companies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-8 leading-relaxed">
              SEO and content strategy that drives qualified leads for B2B SaaS, dev tools, and technical services. 
              We write for engineers, not everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <PremiumButton variant="primary" size="lg">
                  Discuss Growth Strategy
                </PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Marketing for companies selling to technical buyers. No fluff, no vanity metrics—just qualified leads.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-[#1e56d6]/50 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-sm text-[#1e56d6] font-semibold">{service.results}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why We're Different
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Most marketing agencies don't understand technical products. We do. Our team includes engineers who can write code and content.
            </p>
          </FadeInView>

          <div className="space-y-6">
            {[
              {
                title: "We understand your product",
                description: "We can read API docs, understand system architecture, and explain technical concepts clearly."
              },
              {
                title: "We write for developers",
                description: "Technical blog posts, documentation-style guides, and code examples that actually help."
              },
              {
                title: "We track what matters",
                description: "Not impressions or clicks—qualified demo requests, trial signups, and closed deals."
              }
            ].map((point, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Marketing Retainer Pricing
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              SEO + Content: $3K-8K/month. Includes keyword research, content creation, technical SEO, and monthly reporting. 
              Minimum 3-month commitment (SEO takes time).
            </p>
            <Link href="/contact">
              <PremiumButton variant="primary" size="lg">
                Get Custom Proposal
              </PremiumButton>
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1e56d6] to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Drive Qualified Leads?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Free SEO audit and content strategy session. We'll show you exactly what's working and what's not.
            </p>
            <Link href="/contact">
              <PremiumButton variant="secondary" size="lg">
                Get Free SEO Audit
              </PremiumButton>
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
