import { Metadata } from 'next'
import React from 'react';

export const metadata: Metadata = {
  title: 'Terms of Service | Ripple Nexus',
  description: 'Terms of Service for Ripple Nexus services',
}

const TermsTitle = ({ number, title }: { number: number, title: string }) => (
  <h2 className="text-2xl font-extrabold text-white flex items-center mb-4 pt-4">
    <span className="w-8 h-8 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-base font-bold mr-3 flex-shrink-0">{number}</span>
    {title}
  </h2>
);

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-950 to-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
          
          <div className="bg-gradient-to-r from-[#1e56d6] to-blue-600 px-8 md:px-12 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <div className="text-blue-100 text-base">
              <p>Effective Date: May 20, 2025</p>
              <p>Last Updated: May 20, 2025</p>
            </div>
          </div>

          <div className="px-8 md:px-12 py-12">
            <div className="space-y-12">
              
              <section className="space-y-4">
                <p className="text-base text-gray-300 leading-relaxed">
                  Welcome to Ripple Nexus, a <strong>Sole Proprietorship</strong> business entity registered under applicable Indian laws with its registered office at:
                </p>
                <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-[#1e56d6]">
                  <div className="text-gray-300 text-base leading-relaxed">
                    <p className="flex items-start mb-2">
                      <span className="text-[#1e56d6] mr-2 flex-shrink-0">📍</span>
                      A-116, Urbtech Trade Centre, Sector-132, Noida - 201304, Uttar Pradesh, India
                    </p>
                    <p className="flex items-center mb-2">
                      <span className="text-[#1e56d6] mr-2">📧</span>
                      info@theripplenexus.com
                    </p>
                    <p className="flex items-center">
                      <span className="text-[#1e56d6] mr-2">🌐</span>
                      https://www.theripplenexus.com
                    </p>
                  </div>
                </div>
                <p className="text-base text-gray-300 leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "you", or "your") and Ripple Nexus ("Company", "we", "us", or "our") and govern your access to and use of our services.
                </p>
                <p className="text-base text-gray-300 leading-relaxed">
                  By engaging with Ripple Nexus or accessing our website, you agree to be bound by these Terms, our Privacy Policy, and any other agreement expressly incorporated herein.
                </p>
              </section>

              <section className="space-y-4">
                <TermsTitle number={1} title="Definitions" />
                <div className="space-y-3">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-[#1e56d6]">Company:</strong> Refers to Ripple Nexus - Sole Proprietorship, including its proprietor, employees, agents, and affiliates.
                    </p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-[#1e56d6]">Client:</strong> Any individual or entity engaging Ripple Nexus for services.
                    </p>
                  </div>
                  <div className="p-3 bg-gray-800 rounded-lg">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-[#1e56d6]">Services:</strong> All digital services provided by Ripple Nexus, including web development, app/software development, AI chatbot creation, branding, digital marketing, and <strong>Career and Personal Branding</strong> services.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <TermsTitle number={2} title="Acceptance of Terms" />
                <div className="space-y-3">
                  <p className="text-base text-gray-300 leading-relaxed">
                    By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our Services.
                  </p>
                  <p className="text-base text-gray-300 leading-relaxed">
                    These Terms may be updated from time to time, and your continued use of the Services constitutes acceptance of the updated Terms.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <TermsTitle number={3} title="Scope of Services" />
                <p className="text-base text-gray-300 leading-relaxed">
                  The specific details, deliverables, timelines, and fees for any project or service engagement will be outlined in a separate Statement of Work (SOW) or Service Agreement, which, upon execution, is incorporated by reference into these Terms.
                </p>
                
                <div className="pl-4 border-l-4 border-[#1e56d6] space-y-4 pt-2">
                  <h3 className="text-lg font-bold text-white">3.1 Detailed Service Categories</h3>
                  <ul className="list-disc pl-6 space-y-2 text-base text-gray-300">
                    <li><strong>Core Technology Solutions:</strong> Web Development, Mobile Development, Cloud Infrastructure, DevOps, and Enterprise Systems (ERP/CRM).</li>
                    <li><strong>Digital Strategy & Design:</strong> UI/UX Design, Digital Marketing, SEO, and Branding services.</li>
                    <li><strong>Career & Personal Branding:</strong> Resume revision, LinkedIn profile optimization, and cover letter creation.</li>
                  </ul>
                </div>
              </section>
              
              <section className="space-y-4">
                <TermsTitle number={4} title="Client Obligations" />
                <ul className="list-disc pl-6 space-y-2 text-base text-gray-300">
                  <li>Provide timely feedback and content required for the execution of the Services.</li>
                  <li>Ensure the accuracy and legality of all data, information, and intellectual property provided to the Company.</li>
                  <li>Promptly pay all fees and taxes as specified in the SOW.</li>
                </ul>
              </section>

              <section className="space-y-6">
                <TermsTitle number={5} title="Fees, Payments & Taxes" />
                <div className="space-y-4">
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e56d6] mb-2">5.1 Invoicing</h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      Invoices are raised digitally with service breakdown. Fees must be paid by the due date specified on the invoice.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1e56d6] mb-2">5.2 Accepted Payment Methods</h3>
                    <div className="grid gap-3 md:grid-cols-2">
                      <div className="p-3 bg-gray-800 rounded-lg">
                        <p className="text-sm text-gray-300">
                          <strong>Domestic (India):</strong> Bank transfer, UPI, Razorpay
                        </p>
                      </div>
                      <div className="p-3 bg-gray-800 rounded-lg">
                        <p className="text-sm text-gray-300">
                          <strong>International:</strong> Outward Remittance(Bank Transfer), PayPal, Stripe, Wise, Pioneer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1e56d6] mb-2">5.3 Taxes</h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      All taxes, VAT, or duties applicable in the Client's jurisdiction are the responsibility of the Client unless explicitly stated in the SOW.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#1e56d6] mb-2">5.4 Refund Policy</h3>
                    <ul className="list-disc pl-6 space-y-1 text-base text-gray-300">
                      <li>No refunds once services are initiated or delivered.</li>
                      <li>Partial refunds may be considered at our discretion for unfulfilled scopes due to internal limitations.</li>
                      <li>Refund requests must be submitted in writing with justification.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="space-y-4">
                <TermsTitle number={16} title="Contact Information" />
                <div className="space-y-4">
                  <p className="text-base text-gray-300 leading-relaxed">
                    For questions about these Terms, please contact:
                  </p>
                  <div className="bg-gradient-to-r from-[#1e56d6]/10 to-blue-600/10 rounded-xl p-4 border border-[#1e56d6]/20">
                    <div className="space-y-2 text-gray-300 text-base">
                      <p className="font-semibold text-white">Ripple Nexus - Legal Contact</p>
                      
                      <p className="flex items-center">
                        <span className="text-[#1e56d6] mr-2">📧</span>
                        <strong>Email:</strong> <span className="ml-2">info@theripplenexus.com</span>
                      </p>
                      
                      <p className="flex items-start">
                        <span className="text-[#1e56d6] mr-2 mt-1">🏢</span>
                        <span><strong>Registered Office:</strong> A-116, Urbtech Trade Centre, Sector-132, Noida - 201304, Uttar Pradesh, India</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-[#1e56d6] mr-2">🌐</span>
                        <strong>Website:</strong> <span className="ml-2">https://www.theripplenexus.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}