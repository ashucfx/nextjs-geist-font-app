"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animations/FadeInView';
import { PremiumButton, PremiumCard } from '@/components/animations/PremiumButton';

interface CoreCapability {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface TechStack {
  category: string;
  technologies: string[];
}

const coreCapabilities: CoreCapability[] = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Web & Mobile Apps",
    description: "Production-ready Next.js, React, and React Native applications that scale to millions of users.",
    href: "/services/web-mobile-development"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI & Automation",
    description: "Custom LangChain agents, RAG systems, and ML pipelines that actually work in production.",
    href: "/services/ai-automation"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud & DevOps",
    description: "Zero-downtime migrations to AWS, GCP, Azure. Kubernetes, CI/CD, and infrastructure as code.",
    href: "/services/cloud-devops"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Growth & SEO",
    description: "Technical SEO and content strategy that drives qualified leads for B2B SaaS companies.",
    href: "/services/digital-marketing"
  }
];

const techStack: TechStack[] = [
  { category: "Frontend", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", technologies: ["Python", "FastAPI", "Node.js", "PostgreSQL"] },
  { category: "AI/ML", technologies: ["LangChain", "OpenAI", "Pinecone", "Hugging Face"] },
  { category: "Cloud", technologies: ["AWS", "Vercel", "Cloudflare", "Docker"] }
];


const CapabilityCard: React.FC<{ capability: CoreCapability }> = ({ capability }) => {
  return (
    <Link href={capability.href}>
      <PremiumCard
        className="group relative bg-gray-800/80 backdrop-blur-md rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8
                    hover:shadow-2xl transition-all duration-300 shadow-xl shadow-blue-900/10 
                    border border-gray-700 hover:border-[#1e56d6]/50 h-full"
        hoverLift={4}
      >
        <div className="text-[#1e56d6] mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
          {capability.icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#1e56d6] transition-colors">
          {capability.title}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
          {capability.description}
        </p>
        <div className="flex items-center text-[#1e56d6] font-semibold text-xs sm:text-sm group-hover:translate-x-1 transition-transform">
          Learn More
          <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </PremiumCard>
    </Link>
  );
};


export default function Home() {
  const stats = [
    { number: "100+", label: "Successful Engagements" },
    { number: "50+", label: "Satisfied Clients" },
    { number: "1+", label: "Year in Operation" },
    { number: "Tier 1", label: "Partnerships (Cloud/Data)" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[80vh] md:min-h-[85vh] flex flex-col justify-center bg-[#070b14] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e56d6]/5 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-32">
          <div className="max-w-5xl">
            {/* Logo - Smaller, Less Dominant */}
            <FadeInView delay={0.1} className="mb-6 sm:mb-8">
              <div className="relative w-[70px] h-[105px] sm:w-[90px] sm:h-[135px] md:w-[100px] md:h-[150px] lg:w-[110px] lg:h-[165px]">
                <Image
                  src="/images/logo-vertical.svg"
                  alt="Ripple Nexus"
                  fill
                  className="object-contain opacity-90"
                  sizes="(max-width: 640px) 70px, (max-width: 768px) 90px, (max-width: 1024px) 100px, 110px"
                  priority
                />
              </div>
            </FadeInView>

            {/* Main Headline */}
            <FadeInView delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-5 md:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight">
                Engineering Teams for Companies{' '}
                <span className="bg-gradient-to-r from-[#1e56d6] to-blue-500 bg-clip-text text-transparent block sm:inline mt-2 sm:mt-0">
                  Navigating Complex Technical Transitions
                </span>
              </h1>
            </FadeInView>

            {/* Subheadline */}
            <FadeInView delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl leading-relaxed">
                From startup MVPs to enterprise cloud migrations, we build production systems that scale. Zero downtime. Zero data loss. Every deployment matters.
              </p>
            </FadeInView>

            {/* Social Proof */}
            <FadeInView delay={0.4}>
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">50+ Production Deployments</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Clients in 12 Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">99.9% Uptime Track Record</span>
                </div>
              </div>
            </FadeInView>

            {/* CTAs */}
            <FadeInView delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <PremiumButton variant="primary" size="lg" className="w-full sm:w-auto">
                    <span className="hidden sm:inline">Schedule Technical Consultation</span>
                    <span className="sm:hidden">Get Started</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </PremiumButton>
                </Link>

                <Link href="/services" className="w-full sm:w-auto">
                  <PremiumButton variant="ghost" size="lg" className="w-full sm:w-auto">
                    <span className="hidden sm:inline">View Our Stack & Services</span>
                    <span className="sm:hidden">Our Services</span>
                  </PremiumButton>
                </Link>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <FadeInView className="text-center mb-10 sm:mb-12 md:mb-16">
            <p className="text-[#1e56d6] font-semibold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-3">What We Build</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Core Capabilities
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
              We don't build websites. We build systems. Production-grade engineering for companies that need it to work.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6" staggerDelay={0.1}>
            {coreCapabilities.map((capability, index) => (
              <StaggerItem key={index}>
                <CapabilityCard capability={capability} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900 border-y border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <FadeInView className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Our Tech Stack
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 px-4">
              We use boring, proven technology. Innovation is in execution, not experimentation.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8" staggerDelay={0.08}>
            {techStack.map((stack, index) => (
              <StaggerItem key={index}>
                <div className="bg-gray-800/50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-gray-700 hover:border-[#1e56d6]/50 transition-colors">
                  <h3 className="text-base sm:text-lg font-bold text-[#1e56d6] mb-3 sm:mb-4">{stack.category}</h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {stack.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-700/50 text-gray-300 text-xs sm:text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Proof Points */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <FadeInView className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Built for Production
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Real metrics from real deployments. No vanity numbers.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8" staggerDelay={0.08}>
            <StaggerItem>
              <PremiumCard className="bg-gray-800/50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl text-center border border-gray-700" hoverLift={4}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e56d6] mb-1 sm:mb-2">99.9%</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">Average Uptime</div>
              </PremiumCard>
            </StaggerItem>
            <StaggerItem>
              <PremiumCard className="bg-gray-800/50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl text-center border border-gray-700" hoverLift={4}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e56d6] mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">Production Apps</div>
              </PremiumCard>
            </StaggerItem>
            <StaggerItem>
              <PremiumCard className="bg-gray-800/50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl text-center border border-gray-700" hoverLift={4}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e56d6] mb-1 sm:mb-2">Zero</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">Data Loss Events</div>
              </PremiumCard>
            </StaggerItem>
            <StaggerItem>
              <PremiumCard className="bg-gray-800/50 p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl text-center border border-gray-700" hoverLift={4}>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1e56d6] mb-1 sm:mb-2">12</div>
                <div className="text-xs sm:text-sm text-gray-300 font-medium">Countries Served</div>
              </PremiumCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#1e56d6] to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 px-4">
              Ready to Ship Production-Ready Code?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              30-minute technical consultation. No sales pitch. We'll tell you exactly what's possible.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <PremiumButton variant="secondary" size="lg" className="shadow-2xl w-full sm:w-auto">
                  Schedule Free Consultation
                </PremiumButton>
              </Link>
              <Link href="/casestudies" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-all duration-200">
                  View Case Studies
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}