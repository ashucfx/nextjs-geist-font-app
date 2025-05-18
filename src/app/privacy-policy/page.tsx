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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Table of Contents - Left Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/4"
          >
            <div className="sticky top-24 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm rounded-xl p-6 border border-white/5 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-white/10">Contents</h2>
              <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto pr-4 custom-scrollbar -mx-2 px-2">
                {toc.map(({ id, title }, index) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 text-sm relative ${
                      activeSection === id
                        ? 'bg-[#1e56d6]/5 text-[#1e56d6] font-medium after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:w-1 after:h-4 after:bg-[#1e56d6] after:rounded-r'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
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
            <div className="prose prose-invert max-w-none">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
              <div className="text-gray-400 mb-12">
                <p>Effective Date: 1 August 2024</p>
                <p>Last Updated: 17 May 2025</p>
              </div>

              <section id="introduction" data-title="Introduction" className="mb-12">
                <p className="text-gray-300">
                  Ripple Nexus (hereinafter referred to as "we," "our," or "us"), operated under the legal entity NEXWAVE WEB SOLUTIONS (OPC) PRIVATE LIMITED, registered at A-116, URBTECH TRADE CENTRE, SECTOR 132, NOIDA - 201304, INDIA, is committed to protecting your privacy and processing your personal data with utmost transparency, integrity, and compliance with international data protection laws.
                </p>
              </section>

              <section id="scope" data-title="Scope and Application" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">1. Scope and Application</h2>
                <p className="text-gray-300">
                  This Privacy Policy applies to all users who access our website, digital platforms, and services (excluding Career Booster Services), and to the processing of all personal data collected by Ripple Nexus. By continuing to use our services, you acknowledge and consent to the terms outlined in this policy.
                </p>
              </section>

              <section id="definitions" data-title="Definitions" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">2. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>"Personal Data" refers to any information that identifies or can reasonably identify an individual, either directly or indirectly.</li>
                  <li>"Processing" means any operation performed on personal data, including collection, storage, use, sharing, or deletion.</li>
                  <li>"Applicable Laws" refers to relevant data protection laws including but not limited to the EU GDPR, UK GDPR, Swiss FADP, Singapore PDPA, Indian IT Act, UAE Data Protection Law, and others.</li>
                </ul>
              </section>

              <section id="information-collected" data-title="Information We Collect" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">3. Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e56d6] mb-3">3.1 Personal Information</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Name, email address, phone number, and postal address</li>
                      <li>Company or organization details (if applicable)</li>
                      <li>Payment data (collected through secure third-party processors)</li>
                      <li>Communication history and feedback</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e56d6] mb-3">3.2 Automatically Collected Data</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>IP address, browser type, device specifications, operating system</li>
                      <li>Usage data including navigation paths, pages viewed, session duration</li>
                      <li>Location data based on IP address or device settings</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="legal-basis" data-title="Legal Basis for Processing" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">4. Legal Basis for Processing</h2>
                <p className="text-gray-300 mb-4">We process personal data under the following lawful bases:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Performance of Contract – when you engage our services</li>
                  <li>Consent – for marketing communications and optional features</li>
                  <li>Legal Obligation – compliance with regulatory requirements</li>
                  <li>Legitimate Interest – security, fraud prevention, and service improvements</li>
                </ul>
              </section>

              <section id="use-of-information" data-title="Use of Your Information" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">5. Use of Your Information</h2>
                <p className="text-gray-300 mb-4">We use your personal data to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Deliver, operate, and manage our digital services</li>
                  <li>Process transactions and maintain business records</li>
                  <li>Enhance user experience and personalize content</li>
                  <li>Communicate with you about updates or support</li>
                  <li>Meet legal or regulatory obligations</li>
                  <li>Prevent fraud, abuse, and unauthorized access</li>
                </ul>
              </section>

              <section id="data-transfers" data-title="International Data Transfers" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">6. International Data Transfers</h2>
                <p className="text-gray-300 mb-4">Your data may be transferred to and processed in countries outside your own jurisdiction. Wherever such transfers occur, we ensure:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Appropriate safeguards such as Standard Contractual Clauses (SCCs)</li>
                  <li>Data minimization and strict retention policies</li>
                  <li>Encryption and secure channels for data transport</li>
                </ul>
              </section>

              <section id="data-retention" data-title="Data Retention" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                <p className="text-gray-300 mb-4">We retain your data only as long as:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Necessary for the purpose it was collected</li>
                  <li>Required to meet legal or regulatory obligations</li>
                  <li>Needed for dispute resolution, audit, or compliance</li>
                </ul>
              </section>

              <section id="data-sharing" data-title="Data Sharing and Disclosure" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">8. Data Sharing and Disclosure</h2>
                <p className="text-gray-300 mb-4">We do not sell your personal information. However, we may share data with:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Trusted service providers (e.g., hosting, analytics, payment gateways)</li>
                  <li>Legal authorities or government bodies if required by law</li>
                  <li>Corporate entities in the case of a merger, acquisition, or asset transfer</li>
                </ul>
              </section>

              <section id="security" data-title="Data Security Measures" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">9. Data Security Measures</h2>
                <p className="text-gray-300 mb-4">We implement technical and organizational safeguards including:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>SSL/TLS encrypted transmission</li>
                  <li>Secure storage and encrypted databases</li>
                  <li>Access control protocols and multi-factor authentication</li>
                  <li>Regular security audits and vulnerability assessments</li>
                </ul>
              </section>

              <section id="your-rights" data-title="Your Rights" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">10. Your Rights</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e56d6] mb-3">10.1 For EU/EEA/UK/Swiss Users (GDPR/FADP)</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Right to Access</li>
                      <li>Right to Rectification</li>
                      <li>Right to Erasure (Right to be Forgotten)</li>
                      <li>Right to Restrict Processing</li>
                      <li>Right to Data Portability</li>
                      <li>Right to Object</li>
                      <li>Right to Lodge a Complaint with a Supervisory Authority</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="cookies" data-title="Cookies & Tracking" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">12. Cookies & Tracking Technologies</h2>
                <p className="text-gray-300 mb-4">Our website uses cookies to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Enable basic site functionality</li>
                  <li>Track user behavior for analytics</li>
                  <li>Optimize performance</li>
                </ul>
              </section>

              <section id="changes" data-title="Changes to Policy" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">14. Changes to This Policy</h2>
                <p className="text-gray-300">
                  We reserve the right to update this Privacy Policy at any time. Updates will be posted on our website, and significant changes will be communicated via email where applicable.
                </p>
              </section>
              
              <section id="contact" data-title="Contact Information" className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
                <p className="text-gray-300">
                  For questions, concerns, or to exercise your data rights, please contact:
                </p>
                <div className="mt-4 p-6 bg-white/5 rounded-xl">
                  <p className="text-gray-300">
                    <strong>Data Protection Officer</strong><br />
                    Ripple Nexus (A Brand of NEXWAVE WEB SOLUTIONS (OPC) PRIVATE LIMITED)<br />
                    📍 A-116, URBTECH TRADE CENTRE, SECTOR 132, NOIDA - 201304, INDIA<br />
                    📩 privacy@ripplenexus.tech
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
