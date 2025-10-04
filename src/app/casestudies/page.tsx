"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// --- ICONS for Verification ---
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);
const TimeIcon = () => (
  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const GoalIcon = () => (
  <svg className="w-5 h-5 text-[#1e56d6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const ErpIcon = () => (
  <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);


interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  previewResult: string;
  previewMetric: string;
  image: string;
  challenge: string;
  solution: string;
  results: string;
  tags: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Public Sector Data Modernization & Compliance",
    client: "National Regulatory Authority (NRA)",
    industry: "Public Sector Governance",
    previewResult: "Reduced citizen approval waiting times by 75%",
    previewMetric: "75% Efficiency Gain",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    challenge: "Outdated legacy systems caused excessive processing delays, high error rates, and difficulty in implementing new compliance standards. Auditing took weeks.",
    solution: "Implemented a custom, serverless cloud architecture (AWS) integrated with a modular microservices framework. Designed a secure, compliant data lake for real-time reporting and historical audit trails.",
    results: "Achieved the target 75% reduction in processing delays and established an instant audit retrieval system, dramatically improving public trust and operational efficiency.",
    tags: ["Cloud Security", "Real-Time Analytics", "Compliance"]
  },
  {
    id: 2,
    title: "High-Traffic E-Commerce Platform Scalability",
    client: "Ascend Fintech",
    industry: "Financial Services",
    previewResult: "Handled 400% traffic spike with guaranteed 99.99% uptime",
    previewMetric: "99.99% Uptime",
    image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg",
    challenge: "The prior platform suffered constant downtime during peak trading hours, leading to significant revenue loss and customer churn. Scaling was non-existent.",
    solution: "Re-engineered the platform using resilient Kubernetes orchestration and introduced CI/CD pipelines (DevOps). Implemented advanced load balancing and threat detection systems (Azure/GCP).",
    results: "The new architecture successfully managed a 400% increase in concurrent users during a major market event, ensuring transactional integrity and zero critical downtime.",
    tags: ["DevOps", "Kubernetes", "Scalability", "E-commerce"]
  },
  {
    id: 3,
    title: "Bespoke ERP Implementation & Integration",
    client: "Global Logistics Corp.",
    industry: "Logistics & Operations",
    previewResult: "Reduced overall operating logistics costs by 32%",
    previewMetric: "32% Cost Reduction",
    image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    challenge: "Global Logistics faced severe bottlenecks due to disparate systems and manual inventory. They needed a unified ERP to streamline resource planning and inventory.",
    solution: "Developed a custom ERP solution focusing on resource allocation, integrated manufacturing, and warehouse management. Implemented machine learning for predictive route planning.",
    results: "The unified ERP provided management with real-time operational oversight and enabled a 32% reduction in overall operating costs within nine months.",
    tags: ["ERP Software", "Mobile App Dev", "Machine Learning"]
  },
  {
    id: 4,
    title: "Enterprise Website Redesign for Conversion",
    client: "Fortress Insurance Group",
    industry: "Insurance & Services",
    previewResult: "Increased digital lead generation by 65%",
    previewMetric: "65% Lead Growth",
    // IMAGE FIX: Ensured the URL uses the correct format for high resolution
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg", 
    challenge: "The existing corporate website was outdated, non-responsive, and failed to guide users toward sales funnels, resulting in low digital conversion rates.",
    solution: "Executed a complete, secure website redesign focusing on UX/UI best practices, mobile responsiveness, and SEO optimization. Integrated a high-performance CMS for rapid content updates.",
    results: "The new website architecture successfully boosted organic traffic by 40% and improved lead conversion rates, leading to a 65% increase in qualified digital leads.",
    tags: ["Web Development", "UX/UI Design", "SEO", "CMS Integration"]
  },
  {
    id: 5,
    title: "Legacy API Modernization & Integration",
    client: "HealthBridge Solutions",
    industry: "Healthcare Technology",
    previewResult: "Achieved 99.9% API reliability and reduced latency by 80%",
    previewMetric: "80% Latency Reduction",
    // NEW CASE STUDY IMAGE: Focus on APIs/Integration
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg",
    challenge: "HealthBridge faced critical instability and scaling limits due to deprecated APIs built on monolithic architecture, hindering seamless data exchange between patient portals and clinical systems.",
    solution: "Implemented a full API modernization strategy, migrating services to a secure GraphQL gateway and containerizing microservices. Integrated advanced security protocols (OAuth 2.0).",
    results: "The modernized system delivered 99.9% API reliability, enabling smooth integration with partner systems and reducing data request latency by 80%, crucial for real-time patient data access.",
    tags: ["API Development", "Microservices", "GraphQL", "Security"]
  }
];

// --- Modal Component for Detailed Study View ---
const CaseStudyModal: React.FC<{ study: CaseStudy, onClose: () => void }> = ({ study, onClose }) => {
  const SectionTitle: React.FC<{ icon: React.ReactNode, title: string }> = ({ icon, title }) => (
    <h3 className="flex items-center text-2xl font-bold text-[#1e56d6] border-b dark:border-gray-700 border-gray-300 pb-2 mb-4">
      {icon} {title}
    </h3>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm overflow-y-auto cursor-pointer p-4 pt-20 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.4 }}
        // UI FIX: Set background color dynamically for both modes
        className="relative max-w-4xl mx-auto dark:bg-gray-800 bg-white rounded-xl shadow-2xl cursor-default my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          // UI FIX: Adjusted close button contrast for light mode
          className="absolute top-4 right-4 dark:text-white text-gray-900 hover:text-[#1e56d6] transition-colors z-50 p-2 rounded-full dark:bg-gray-700/50 bg-gray-100/50"
          aria-label="Close case study"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-xl">
          <Image src={study.image} alt={study.title} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/70 flex items-end p-8"> 
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{study.title}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8 dark:text-gray-300 text-gray-700">
          
          <div className="flex flex-col sm:flex-row justify-between text-base border-b dark:border-gray-700 border-gray-300 pb-4">
            <div className="flex-1 min-w-[40%]">
              <p className="font-semibold dark:text-white text-gray-900">Client:</p>
              <p className="text-lg font-medium">{study.client}</p>
            </div>
            <div className="flex-1 min-w-[40%] mt-4 sm:mt-0">
              <p className="font-semibold dark:text-white text-gray-900">Industry:</p>
              <p className="text-lg font-medium">{study.industry}</p>
            </div>
          </div>

          <div className="space-y-6">
            <SectionTitle icon={<TimeIcon />} title="The Challenge: The Operational Hurdle" />
            <p className="leading-relaxed">{study.challenge}</p>

            <SectionTitle icon={<ErpIcon />} title="The Ripple Nexus Solution: Strategic Implementation" />
            <p className="leading-relaxed">{study.solution}</p>

            <SectionTitle icon={<CheckIcon />} title="Verified Outcomes: Measurable Impact" />
            <p className="leading-relaxed font-semibold text-green-500 text-lg mb-4">{study.previewResult} with high client satisfaction.</p>
            <p className="leading-relaxed">{study.results}</p>
          </div>

          <div className="pt-4 border-t dark:border-gray-700 border-gray-300">
            <p className="text-sm font-semibold dark:text-white text-gray-900 mb-3">Key Focus Areas:</p>
            <div className="flex flex-wrap gap-2">
              {study.tags.map(tag => (
                // UI FIX: Tag background color adjusted for light mode
                <span key={tag} className="px-3 py-1 dark:bg-gray-700 bg-gray-200 text-xs font-medium dark:text-white text-gray-800 rounded-full border dark:border-gray-600 border-gray-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-6">
            <Link 
              href="/contact" 
              onClick={onClose} 
              className="inline-block px-8 py-3 bg-[#1e56d6] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start A Project Like This
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};


// --- Main Page Component ---
export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const handleOpenModal = (study: CaseStudy) => {
    setSelectedStudy(study);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedStudy(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Hero Section - UI FIX: Set background colors for both modes */}
      <section className="relative min-h-[50vh] flex items-center bg-gray-100 dark:bg-gray-950 border-b dark:border-gray-800 border-gray-300">
        <div className="absolute inset-0 dark:bg-gradient-to-br from-black/80 to-black/70"></div> {/* Dark overlay only in dark mode */}
        <div className="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <p className="text-[#1e56d6] font-extrabold text-lg uppercase tracking-[0.2em] mb-4 dark:text-[#387ff1] text-[#1e56d6]">AUTHORITY IN DIGITAL TRANSFORMATION</p>
            <h1 className="text-5xl md:text-7xl font-extrabold dark:text-white text-gray-900 mb-6 leading-tight">
              Our Verified Case Studies
            </h1>
            <p className="text-xl dark:text-gray-300 text-gray-700 max-w-4xl font-medium">
              We translate complex challenges into compliant, scalable, and measurable enterprise solutions. See our methodology and tangible proof of impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid - UI FIX: Main content background adjusted */}
      <section className="py-20 dark:bg-gray-900 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header for light mode visibility */}
          <h2 className="text-4xl font-bold dark:text-white text-gray-900 mb-10">Our Success Portfolio</h2> 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // CARD BG FIX: Card background MUST be explicitly set for light mode (white text on dark background)
                className="group relative dark:bg-gray-800 bg-white shadow-lg dark:shadow-2xl 
                           hover:shadow-blue-900/50 transition-all duration-300 cursor-pointer border border-gray-300 dark:border-gray-700/50 hover:border-[#1e56d6]/50"
                onClick={() => handleOpenModal(study)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Image overlay for contrast - dark in BOTH modes */}
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>

                <div className="relative p-6 space-y-4">
                  <div className="flex justify-between items-start mb-2">
                    {/* Card Title - UI FIX: Dark in light mode, white in dark mode */}
                    <h3 className="text-xl font-extrabold dark:text-white text-gray-900 group-hover:text-[#1e56d6] transition-colors leading-tight">
                      {study.title}
                    </h3>
                  </div>
                  
                  {/* VERIFIED BADGE and METRIC GROUP */}
                  <div className="border-t dark:border-gray-700 border-gray-300 pt-4">
                      <div className="flex items-center text-sm text-green-500 mb-2 font-semibold">
                          <CheckIcon />
                          Verified Client Outcomes
                      </div>
                      <p className="text-2xl font-bold dark:text-white text-gray-900 leading-snug">{study.previewMetric}</p>
                      <p className="text-sm dark:text-gray-400 text-gray-500">{study.previewResult}</p>
                  </div>

                  {/* READ MORE BUTTON */}
                  <div className="mt-6 pt-4 dark:border-gray-700 border-gray-300 border-t">
                      <button className="text-[#1e56d6] font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                          View Full Study 
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Study Modal */}
      <AnimatePresence>
        {selectedStudy && <CaseStudyModal study={selectedStudy} onClose={handleCloseModal} />}
      </AnimatePresence>
      
      {/* Page-level CTA */}
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
              Ready to Define Your Success Story?
            </h2>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#1e56d6] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Consult Our Strategy Team
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}