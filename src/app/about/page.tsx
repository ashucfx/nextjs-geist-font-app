"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animations/FadeInView';
import { PremiumButton } from '@/components/animations/PremiumButton';

export default function About() {
    
  const principles = [
    {
      title: "No BS, Just Results",
      description: "We don't oversell. We tell you exactly what's possible in your timeline and budget, then deliver it.",
      icon: (
        <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Code First, Marketing Second",
      description: "We're engineers who can communicate, not marketers who dabble in code. Technical depth is our foundation.",
      icon: (
        <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Your Success = Our Success",
      description: "We measure success by your production uptime, not our project count. Long-term partnerships over one-off gigs.",
      icon: (
        <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    },
    {
      title: "Transparent Pricing",
      description: "Fixed-price milestones or hourly rates. You'll know what you're paying before we start. No surprise invoices.",
      icon: (
        <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const stats = [
    { number: "2024", label: "Founded" },
    { number: "50+", label: "Production Apps" },
    { number: "99.9%", label: "Avg. Uptime" },
    { number: "12", label: "Countries" }
  ];

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative min-h-[40vh] sm:min-h-[45vh] md:min-h-[50vh] flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
        <div className="relative z-10 max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              About Ripple Nexus
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl leading-relaxed">
              We build production systems for companies navigating complex technical transitions. 
              Founded by engineers, run by engineers, focused on engineering excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <FadeInView>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Why We Exist
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I started Ripple Nexus after watching companies burn millions on projects that should have cost thousands. 
                The problem? Most agencies overpromise and underdeliver. They chase vanity metrics instead of production results.
              </p>
              <p>
                We're different. We're engineers first. We've scaled systems to millions of users, migrated legacy monoliths 
                without downtime, and deployed AI that actually works in production. We know what it takes because we've done it.
              </p>
              <p>
                Our model is simple: transparent pricing, weekly deployments, direct access to senior engineers. 
                No account managers. No layers. Just you and the people writing code.
              </p>
              <p className="text-[#1e56d6] font-semibold">
                - Ashutosh Shukla, Founder
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-extrabold text-[#1e56d6] mb-2\">{stat.number}</div>
                  <div className="text-gray-400\">{stat.label}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              These aren't values we hang on a wall. They're how we actually operate.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-[#1e56d6]/50 transition-colors">
                  <div className="mb-4">{principle.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Certified & Registered
            </h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <svg className="w-12 h-12 text-[#1e56d6]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white">Udyam Certified MSME</h3>
                  <p className="text-gray-400">Ministry of Micro, Small & Medium Enterprises, Govt. of India</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Registered Office: Cospazes, A-116 Urbtech Trade Centre, Sec-132, Noida - 201304, India
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1e56d6] to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Work With Engineers Who Get It
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              30-minute technical consultation. No sales pitch—actual technical discussion.
            </p>
            <Link href="/contact">
              <PremiumButton variant="secondary" size="lg">
                Schedule Call
              </PremiumButton>
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}