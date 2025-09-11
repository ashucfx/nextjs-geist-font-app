"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('');
  const [toc, setToc] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const tocItems = Array.from(sections).map(section => ({
      id: section.id,
      title: section.getAttribute('data-title') || ''
    }));
    setToc(tocItems);

    const handleScroll = () => {
      let currentSection = '';
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = rect.height;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b dark:from-gray-900 dark:to-black from-gray-50 to-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/4"
          >
            <div className="sticky top-24 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl p-6 border dark:border-gray-800/50 border-gray-200/50 shadow-xl">
              <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-6 pb-4 border-b dark:border-gray-800/50 border-gray-200/50">Contents</h2>
              <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-4 custom-scrollbar -mx-2 px-2">
                {toc.map(({ id, title }, index) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 text-sm relative ${
                      activeSection === id
                        ? 'bg-[#1e56d6]/10 text-[#1e56d6] font-medium after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-4 after:bg-[#1e56d6] after:rounded-r'
                        : 'dark:text-gray-300 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800/50 dark:hover:text-white hover:text-gray-900'
                    }`}
                  >
                    <span className="flex items-start group">
                      <span className="text-[#1e56d6]/60 mr-3 font-mono w-5 group-hover:text-[#1e56d6] transition-colors">{(index + 1).toString().padStart(2, '0')}</span>
                      <span className="flex-1 group-hover:translate-x-1 transition-transform">{title}</span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-3/4"
          >
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-xl shadow-2xl border dark:border-gray-800/50 border-gray-200/50 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#1e56d6] to-blue-600 px-8 md:px-12 py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                <div className="text-blue-100 text-lg">
                  <p>Effective Date: 20 May 2025</p>
                  <p>Last Updated: 20 May 2025</p>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 md:px-12 py-12">
                <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">

                  <section id="introduction" data-title="Introduction" className="mb-12">
                    <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed">
                      Ripple Nexus (hereinafter referred to as "we," "our," or "us"), a Sole Proprietorship business registered at A-116, URBTECH TRADE CENTRE, SECTOR 132, NOIDA - 201304, INDIA, is committed to protecting your privacy and processing your personal data with utmost transparency, integrity, and compliance with international data protection laws.
                    </p>
                  </section>

                  <section id="scope" data-title="Scope and Application" className="mb-12">
                    <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                      Scope and Application
                    </h2>
                    <p className="text-base dark:text-gray-300 text-gray-700 leading-relaxed ml-11">
                      This Privacy Policy applies to all users who access our website, digital platforms, and services (excluding Career Booster Services), and to the processing of all personal data collected by Ripple Nexus. By continuing to use our services, you acknowledge and consent to the terms outlined in this policy.
                    </p>
                  </section>

                  <section id="definitions" data-title="Definitions" className="mb-12">
                    <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                      Definitions
                    </h2>
                    <div className="ml-11 space-y-3">
                      <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <p className="dark:text-gray-300 text-gray-700">
                          <strong className="text-[#1e56d6]">"Personal Data"</strong> refers to any information that identifies or can reasonably identify an individual, either directly or indirectly.
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <p className="dark:text-gray-300 text-gray-700">
                          <strong className="text-[#1e56d6]">"Processing"</strong> means any operation performed on personal data, including collection, storage, use, sharing, or deletion.
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                        <p className="dark:text-gray-300 text-gray-700">
                          <strong className="text-[#1e56d6]">"Applicable Laws"</strong> refers to relevant data protection laws including but not limited to the EU GDPR, UK GDPR, Swiss FADP, Singapore PDPA, Indian IT Act, UAE Data Protection Law, and others.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="information-collected" data-title="Information We Collect" className="mb-12">
                    <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-6 flex items-center">
                      <span className="w-10 h-10 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">3</span>
                      Information We Collect
                    </h2>
                    <div className="ml-14 space-y-6">
                      <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl">
                        <h3 className="text-xl font-semibold text-[#1e56d6] mb-3">3.1 Personal Information</h3>
                        <ul className="space-y-2 dark:text-gray-300 text-gray-700">
                          <li>• Name, email address, phone number, and postal address</li>
                          <li>• Company or organization details (if applicable)</li>
                          <li>• Payment data (collected through secure third-party processors)</li>
                          <li>• Communication history and feedback</li>
                        </ul>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl">
                        <h3 className="text-xl font-semibold text-[#1e56d6] mb-3">3.2 Automatically Collected Data</h3>
                        <ul className="space-y-2 dark:text-gray-300 text-gray-700">
                          <li>• IP address, browser type, device specifications, operating system</li>
                          <li>• Usage data including navigation paths, pages viewed, session duration</li>
                          <li>• Location data based on IP address or device settings</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section id="legal-basis" data-title="Legal Basis for Processing" className="mb-12">
                    <h2 className="text-3xl font-bold dark:text-white text-gray-900 mb-6 flex items-center">
                      <span className="w-10 h-10 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">4</span>
                      Legal Basis for Processing
                    </h2>
                    <div className="ml-14">
                      <p className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed mb-4">We process personal data under the following lawful bases:</p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <p className="dark:text-gray-300 text-gray-700">
                            <strong className="text-[#1e56d6]">Performance of Contract</strong> – when you engage our services
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <p className="dark:text-gray-300 text-gray-700">
                            <strong className="text-[#1e56d6]">Consent</strong> – for marketing communications and optional features
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <p className="dark:text-gray-300 text-gray-700">
                            <strong className="text-[#1e56d6]">Legal Obligation</strong> – compliance with regulatory requirements
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <p className="dark:text-gray-300 text-gray-700">
                            <strong className="text-[#1e56d6]">Legitimate Interest</strong> – security, fraud prevention, and service improvements
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="contact" data-title="Contact Information" className="mb-12">
                    <h2 className="text-2xl font-bold dark:text-white text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">15</span>
                      Contact Information
                    </h2>
                    <div className="ml-11">
                      <p className="text-base dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                        For questions, concerns, or to exercise your data rights, please contact:
                      </p>
                      <div className="bg-gradient-to-r from-[#1e56d6]/10 to-blue-600/10 rounded-xl p-4 border border-[#1e56d6]/20">
                        <div className="space-y-2 dark:text-gray-300 text-gray-700">
                          <p>Ripple Nexus - Sole Proprietorship</p>
                          <p className="flex items-center">
                            <span className="text-[#1e56d6] mr-2">📍</span>
                            A-116, URBTECH TRADE CENTRE, SECTOR 132, NOIDA - 201304, INDIA
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
