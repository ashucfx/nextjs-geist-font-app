"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animations/FadeInView';
import { PremiumButton, PremiumCard } from '@/components/animations/PremiumButton';

const DocumentIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);

const LinkedinIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const BrandIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);

const GitHubIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
);

export default function CareerBranding() {
  const services = [
    {
      title: "Executive Resume Optimization",
      description: "ATS-compliant resumes for VP/C-level technical leaders. Highlight impact, not just responsibilities.",
      icon: DocumentIcon
    },
    {
      title: "LinkedIn Profile Transformation",
      description: "Turn your profile into a lead magnet for recruiters. Optimized headline, summary, and experience sections.",
      icon: LinkedinIcon
    },
    {
      title: "Personal Brand Strategy",
      description: "Position yourself as a thought leader in your domain. Content strategy, posting cadence, engagement tactics.",
      icon: BrandIcon
    },
    {
      title: "Portfolio & GitHub Optimization",
      description: "Showcase your best work. Clean repos, detailed READMEs, contribution graphs that impress.",
      icon: GitHubIcon
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
              <span className="text-[#1e56d6] font-semibold text-sm uppercase tracking-wide">Career Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Career Branding for Technical Leaders
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-8 leading-relaxed">
              Position yourself for VP/C-level roles with optimized LinkedIn profiles, ATS-compliant resumes, 
              and personal branding strategy. From Senior Engineer to CTO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <PremiumButton variant="primary" size="lg">
                  Upgrade Your Brand
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
              What We Offer
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Career branding services designed specifically for technical professionals climbing the leadership ladder.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <PremiumCard className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-full hover:border-[#1e56d6]/50 transition-colors" hoverLift={4}>
                  <div className="mb-4">
                    <service.icon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>
                </PremiumCard>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Typical Results
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our clients see measurable improvements in recruiter outreach, interview rates, and offer quality.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: "5x", label: "LinkedIn Profile Views" },
              { metric: "85%", label: "Interview Conversion Rate" },
              { metric: "3-5x", label: "Recruiter Outreach" }
            ].map((stat, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center">
                  <div className="text-4xl font-extrabold text-[#1e56d6] mb-2">{stat.metric}</div>
                  <div className="text-gray-300">{stat.label}</div>
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
              Career Branding Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">LinkedIn + Resume</h3>
                <div className="text-4xl font-extrabold text-[#1e56d6] mb-4">$500</div>
                <ul className="text-left space-y-3 text-gray-300 mb-6">
                  <li>• ATS-optimized resume</li>
                  <li>• LinkedIn profile optimization</li>
                  <li>• Custom banner design</li>
                  <li>• 1 round of revisions</li>
                </ul>
                <Link href="/contact">
                  <PremiumButton variant="primary" size="md" className="w-full">
                    Get Started
                  </PremiumButton>
                </Link>
              </div>
              <div className="bg-gray-800/50 border border-[#1e56d6] rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Full Brand Package</h3>
                <div className="text-4xl font-extrabold text-[#1e56d6] mb-4">$1,200</div>
                <ul className="text-left space-y-3 text-gray-300 mb-6">
                  <li>• Everything in basic package</li>
                  <li>• 3-month content strategy</li>
                  <li>• GitHub/portfolio optimization</li>
                  <li>• Interview prep coaching</li>
                </ul>
                <Link href="/contact">
                  <PremiumButton variant="primary" size="md" className="w-full">
                    Upgrade Career
                  </PremiumButton>
                </Link>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1e56d6] to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Your Next Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Free 15-minute career consultation. We'll review your current profile and recommend improvements.
            </p>
            <Link href="/contact">
              <PremiumButton variant="secondary" size="lg">
                Book Consultation
              </PremiumButton>
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
