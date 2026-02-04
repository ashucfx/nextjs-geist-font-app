"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animations/FadeInView';
import { PremiumButton, PremiumCard } from '@/components/animations/PremiumButton';

const ReactIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5M12 4C6.48 4 2 6.73 2 10c0 .63.09 1.24.25 1.84C1.45 13.47 1 14.7 1 16c0 1.76.67 3.41 1.9 4.7C4.28 23.27 8 25 12 25s7.72-1.73 9.1-3.3C22.33 19.41 23 17.76 23 16c0-1.3-.45-2.53-1.25-3.16.16-.6.25-1.21.25-1.84 0-3.27-4.48-6-10-6zm0-2c5.33 0 10 2.69 10 6s-4.67 6-10 6-10-2.69-10-6 4.67-6 10-6zm0 14c-5.33 0-10-2.69-10-6v2c0 3.31 4.67 6 10 6s10-2.69 10-6v-2c0 3.31-4.67 6-10 6z"/></svg>
);

const MobileIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
);

const SpeedIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

const APIIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
);

const CloudIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" /></svg>
);

const RealtimeIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

export default function WebMobileDevelopment() {
  const features = [
    {
      title: "Next.js & React Expertise",
      description: "We build with Next.js 15, App Router, and React 18. Server components, streaming, and edge runtime optimization.",
      icon: ReactIcon
    },
    {
      title: "Mobile-First Architecture",
      description: "React Native for cross-platform or native iOS/Android. Shared business logic, platform-specific UX.",
      icon: MobileIcon
    },
    {
      title: "Performance Obsessed",
      description: "Lighthouse scores 95+. Code splitting, lazy loading, image optimization. Every millisecond counts.",
      icon: SpeedIcon
    },
    {
      title: "API-First Design",
      description: "RESTful or GraphQL APIs. OpenAPI docs, versioning, rate limiting. Built for third-party integrations.",
      icon: APIIcon
    },
    {
      title: "Scalable Infrastructure",
      description: "Deploy to Vercel, AWS, or your cloud. Auto-scaling, CDN, edge caching. Handle traffic spikes without sweating.",
      icon: CloudIcon
    },
    {
      title: "Real-Time Features",
      description: "WebSockets, Server-Sent Events, real-time sync. Live dashboards, chat, collaborative editing.",
      icon: RealtimeIcon
    }
  ];

  const process = [
    {
      step: "01",
      title: "Technical Discovery",
      description: "We analyze your current stack, traffic patterns, and bottlenecks. Not a sales call—actual technical review."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "System diagrams, data flow, API contracts. You'll see exactly what we're building before we write code."
    },
    {
      step: "03",
      title: "Sprint Execution",
      description: "Weekly deployments to staging. You see working software every Friday, not mockups or promises."
    },
    {
      step: "04",
      title: "Production Launch",
      description: "Zero-downtime deployment. Monitoring, logging, rollback plan. We stay online during launch."
    }
  ];

  const deliverables = [
    "Production-ready codebase with comprehensive documentation",
    "CI/CD pipelines (GitHub Actions or preferred tool)",
    "Monitoring setup (Sentry, LogRocket, or custom)",
    "Performance baseline (Lighthouse, Web Vitals)",
    "Security audit report (OWASP Top 10 coverage)",
    "Knowledge transfer sessions with your team"
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
              <span className="text-[#1e56d6] font-semibold text-sm uppercase tracking-wide">Core Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Web & Mobile Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-8 leading-relaxed">
              Production-ready Next.js, React, and React Native applications that scale to millions of users. 
              No templates. No shortcuts. Just clean code deployed to production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <PremiumButton variant="primary" size="lg">
                  Start Your Project
                </PremiumButton>
              </Link>
              <Link href="/casestudies">
                <PremiumButton variant="ghost" size="lg">
                  View Case Studies
                </PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Full-stack web apps, mobile apps, and progressive web apps. If it runs in a browser or on a phone, we build it.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <PremiumCard className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-full hover:border-[#1e56d6]/50 transition-colors" hoverLift={4}>
                  <div className="mb-4">
                    <feature.icon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              No waterfall. No surprise delays. Just transparent, iterative development with weekly deployments.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="relative">
                  <div className="text-6xl font-black text-[#1e56d6]/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What You Get
            </h2>
            <p className="text-lg text-gray-400">
              More than just code. Complete production-ready systems with documentation and handoff.
            </p>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <ul className="space-y-4">
                {deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#1e56d6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Pricing Transparency */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We charge $75-125/hour based on engineer seniority. Most projects: $15K-50K for MVP, $50K-150K for full platform.
            </p>
            <p className="text-gray-400 mb-8">
              Fixed-price milestones available. No surprise invoices. Monthly cost breakdowns.
            </p>
            <Link href="/contact">
              <PremiumButton variant="primary" size="lg">
                Get Detailed Quote
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
              Ready to Build Something That Scales?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              30-minute technical consultation. We'll review your requirements and tell you exactly what's feasible.
            </p>
            <Link href="/contact">
              <PremiumButton variant="secondary" size="lg">
                Schedule Technical Call
              </PremiumButton>
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
