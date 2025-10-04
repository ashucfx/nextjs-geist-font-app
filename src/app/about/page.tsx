"use client";

import { motion } from 'framer-motion';
import React from 'react';

// --- Icons for Core Principles (Using SVG paths for stability) ---
const InnovationIcon = () => (<svg className="w-8 h-8 text-[#1e56d6] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);
const ExcellenceIcon = () => (<svg className="w-8 h-8 text-[#1e56d6] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const IntegrityIcon = () => (<svg className="w-8 h-8 text-[#1e56d6] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a3 3 0 003-3V6a3 3 0 00-3-3H6a3 3 0 00-3 3v12a3 3 0 003 3z" /></svg>);
const StrategyIcon = () => (<svg className="w-8 h-8 text-[#1e56d6] dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m6-12h2a2 2 0 012 2v10m-8-2h8m-12-4h12m-2-4h2a2 2 0 002-2V4a2 2 0 00-2-2h-2m-8 2h-2a2 2 0 00-2 2v4a2 2 0 002 2h2" /></svg>);

export default function About() {
    
  const corePrinciples = [
    {
      title: "Innovation & Foresight",
      description: "We don't just follow trends; we pioneer solutions that define the next generation of digital infrastructure.",
      icon: <InnovationIcon />
    },
    {
      title: "Security & Integrity",
      description: "Our foundation is trust. We uphold rigorous compliance and security standards in every enterprise solution.",
      icon: <IntegrityIcon />
    },
    {
      title: "Execution Excellence",
      description: "From strategy ideation to flawless deployment, we ensure precision, quality, and measurable impact.",
      icon: <ExcellenceIcon />
    },
    {
      title: "Strategic Partnership",
      description: "We embed ourselves as a long-term strategic partner, focusing on your sustainable growth, not just project completion.",
      icon: <StrategyIcon />
    }
  ];

  return (
    <div className="pt-20">
      {/* About Hero Section - Clean, High Contrast */}
      <section className="relative min-h-[40vh] flex items-center bg-gray-100 dark:bg-gray-950 border-b border-gray-300 dark:border-gray-800 transition-colors duration-500">
        
        <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <p className="text-lg font-semibold uppercase tracking-widest text-[#1e56d6] mb-2">Our Mission, Vision, and Values</p>
            <h1 className="text-5xl md:text-7xl font-extrabold dark:text-white text-gray-900 mb-4">
              The Authority Statement
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 dark:bg-gray-900 bg-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Vision Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                <h2 className="text-4xl font-extrabold text-[#1e56d6] dark:text-white mb-4">Our Vision</h2>
                <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                    At <strong>Ripple Nexus</strong>, we envision a future where complex <strong>digital governance</strong> and large-scale <strong>enterprise solutions</strong> are seamlessly merged into intuitive, compliant, and scalable ecosystems. We strive to be the <strong>convergence point</strong> where bold vision meets technical certainty.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    Our focus is on building robust architectures that stand up to the most rigorous security and performance demands of public and private sector clients. We deliver technology as a strategic asset, not just a service.
                </p>
            </motion.div>

            {/* Ethos/Identity Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
            >
                <h2 className="text-4xl font-extrabold text-[#1e56d6] dark:text-white mb-4">Our Ethos</h2>
                <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                    The name <strong>Ripple Nexus</strong> is our commitment: <strong>Ripple</strong> symbolizes the power of strategic innovation to create waves of measurable impact, and <strong>Nexus</strong> represents the convergence of specialized talent and technology.
                </p>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    As a digital-first, agile sole proprietorship, we maintain maximum focus and accountability, ensuring direct access to senior expertise for every engagement. We are dedicated to transparent processes and audited results.
                </p>
            </motion.div>

        </div>
      </section>

      {/* Core Principles/Values Section (Improved Icon-based Grid) */}
      <section className="py-24 bg-gray-100 dark:bg-gray-950 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-xl font-medium text-gray-500 dark:text-gray-400 mb-2">The Pillars of Our Work</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Our Foundational Principles
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group dark:bg-gray-800 bg-white p-8 rounded-xl shadow-lg dark:shadow-none border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:border-[#1e56d6]/50 transition-all duration-300"
              >
                <div className="mb-6">{principle.icon}</div>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3 transition-colors group-hover:text-[#1e56d6]">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Consistent Styling */}
      <section className="py-20 bg-gradient-to-br from-[#1e56d6] to-blue-900 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
              Verify Our Capabilities. Start a Dialogue.
            </h2>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#1e56d6] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Schedule Your Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}