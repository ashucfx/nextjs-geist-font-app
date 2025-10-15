"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import React from 'react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('');
  const [toc, setToc] = useState<{ id: string; title: string }[]>([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        const sections = document.querySelectorAll('section[id]');
        const tocItems = Array.from(sections).map(section => ({
          id: section.id,
          title: section.getAttribute('data-title') || ''
        })).filter(item => item.title);
        setToc(tocItems);

        const handleScroll = () => {
          let currentSection = '';
          sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                currentSection = section.id;
            }
          });
          setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = window.scrollY + elementRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  const PolicyTitle = ({ number, title }: { number: number, title: string }) => (
    <h2 className="text-3xl font-extrabold text-white flex items-center mb-4 pt-4">
      <span className="w-9 h-9 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-lg font-bold mr-3 flex-shrink-0">{number}</span>
      {title}
    </h2>
  );


  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12"> 
            
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/4"
          >
            <div className="sticky top-24 bg-gray-900 rounded-xl p-6 border border-gray-700 shadow-xl">
              <h2 className="text-2xl font-extrabold text-white mb-6 pb-4 border-b border-gray-700">Contents</h2>
              <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto custom-scrollbar">
                {toc.map(({ id, title }, index) => (
                    <button
                        key={id}
                        onClick={() => scrollToSection(id)}
                        className={`block w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 text-sm relative ${
                            activeSection === id
                                ? 'bg-[#1e56d6]/10 text-[#1e56d6] font-semibold after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-5 after:bg-[#1e56d6] after:rounded-r-md'
                                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                    >
                        <span className="flex items-start group">
                            <span className="text-[#1e56d6]/60 mr-3 font-mono w-5 group-hover:text-[#1e56d6] transition-colors">{(index + 1).toString().padStart(2, '0')}</span>
                            <span className="flex-1">{title}</span>
                        </span>
                    </button>
                ))}
              </nav>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-3/4"
          >
            <div className="bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
              <div className="bg-gradient-to-r from-[#1e56d6] to-blue-600 px-8 md:px-12 py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
                <div className="text-blue-100 text-lg">
                  <p>Effective Date: 20 May 2025</p>
                  <p>Last Updated: 20 May 2025</p>
                </div>
              </div>

              <div className="px-8 md:px-12 py-12 space-y-10">

                <section id="introduction" data-title="Introduction" className="space-y-3">
                  <h2 className="text-3xl font-extrabold text-white">Introduction</h2>
                  <p className="text-base text-gray-300 leading-relaxed">
                      Ripple Nexus (hereinafter referred to as "we," "our," or "us"), a Sole Proprietorship business registered at A-116, Urbtech Trade Centre, Sector 132, Noida - 201304, India, is committed to protecting your privacy and processing your personal data with utmost transparency, integrity, and compliance with international data protection laws.
                  </p>
                </section>

                <section id="scope" data-title="Scope and Application" className="space-y-3">
                    <PolicyTitle number={1} title="Scope and Application" />
                    <p className="text-base text-gray-300 leading-relaxed">
                      This Privacy Policy applies to all users who access our website, digital platforms, and all services, and to the processing of all personal data collected by Ripple Nexus. By continuing to use our services, you acknowledge and consent to the terms outlined in this policy.
                    </p>
                </section>

                <section id="definitions" data-title="Definitions" className="space-y-3">
                  <PolicyTitle number={2} title="Definitions" />
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <p className="text-gray-300 text-sm">
                        <strong className="text-[#1e56d6]">"Personal Data"</strong> refers to any information that identifies or can reasonably identify an individual, either directly or indirectly.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <p className="text-gray-300 text-sm">
                        <strong className="text-[#1e56d6]">"Processing"</strong> means any operation performed on personal data, including collection, storage, use, sharing, or deletion.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                      <p className="text-gray-300 text-sm">
                        <strong className="text-[#1e56d6]">"Applicable Laws"</strong> refers to relevant data protection laws including but not limited to the EU GDPR, UK GDPR, Swiss FADP, Singapore PDPA, Indian IT Act, UAE Data Protection Law, and others.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="information-collected" data-title="Information We Collect" className="space-y-3">
                  <PolicyTitle number={3} title="Information We Collect" />
                  <p className="text-base text-gray-300 leading-relaxed">
                    We collect data in two primary ways: directly from you when you engage our services, and automatically when you use our website.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-700">
                      <h3 className="text-lg font-semibold text-[#1e56d6] mb-2">3.1 Personal Information</h3>
                      <ul className="space-y-1 text-gray-300 list-disc pl-5 text-sm">
                        <li>Name, email address, phone number, and postal address</li>
                        <li>Company or organization details (if applicable)</li>
                        <li>Payment data (collected through secure third-party processors)</li>
                        <li>Communication history and project feedback</li>
                      </ul>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl border border-gray-700">
                      <h3 className="text-lg font-semibold text-[#1e56d6] mb-2">3.2 Automatically Collected Data</h3>
                      <ul className="space-y-1 text-gray-300 list-disc pl-5 text-sm">
                        <li>IP address, browser type, device specifications, operating system</li>
                        <li>Usage data including navigation paths, pages viewed, session duration</li>
                        <li>Location data based on IP address or device settings</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="legal-basis" data-title="Legal Basis for Processing" className="space-y-3">
                  <PolicyTitle number={4} title="Legal Basis for Processing" />
                  <div className="space-y-4">
                    <p className="text-base text-gray-300 leading-relaxed mb-4">We process personal data under the following lawful bases:</p>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <p className="text-gray-300 text-sm">
                          <strong className="text-[#1e56d6]">Performance of Contract</strong> – when you engage our services
                        </p>
                      </div>
                      <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <p className="text-gray-300 text-sm">
                          <strong className="text-[#1e56d6]">Consent</strong> – for marketing communications and optional features
                        </p>
                      </div>
                      <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <p className="text-gray-300 text-sm">
                          <strong className="text-[#1e56d6]">Legal Obligation</strong> – compliance with regulatory requirements
                        </p>
                      </div>
                      <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <p className="text-gray-300 text-sm">
                          <strong className="text-[#1e56d6]">Legitimate Interest</strong> – security, fraud prevention, and service improvements
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                
                <section id="contact" data-title="Contact Information" className="space-y-4">
                  <PolicyTitle number={15} title="Contact Information" />
                  <p className="text-base text-gray-300 leading-relaxed mb-4">
                    For questions, concerns, or to exercise your data rights, please contact our Legal/Compliance team via:
                  </p>
                  <div className="bg-gradient-to-r from-[#1e56d6]/10 to-blue-600/10 rounded-xl p-6 border border-[#1e56d6]/20">
                    <div className="space-y-2 text-gray-300 text-base">
                      <p className="font-semibold text-white">Ripple Nexus - Legal Contact</p>
                      
                      <p className="flex items-center text-base">
                        <span className="text-2xl text-[#1e56d6] mr-3">📧</span>
                        Email: <a href="mailto:info@theripplenexus.com" className="text-[#1e56d6] hover:text-blue-500 font-medium">info@theripplenexus.com</a>
                      </p>
                      
                      <p className="flex items-center text-base">
                        <span className="text-[#1e56d6] mr-2">📍</span>
                        Mailing Address: A-116, Urbtech Trade Centre, Sector 132, Noida - 201304, India
                      </p>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}