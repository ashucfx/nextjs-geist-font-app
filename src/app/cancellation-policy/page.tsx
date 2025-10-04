import { Metadata } from 'next';
import React from 'react';

// Next.js Metadata for SEO
export const metadata: Metadata = {
  title: 'Cancellation Policy | Ripple Nexus',
  description: 'Official Cancellation Policy for digital and consulting services provided by Ripple Nexus.',
}

// Utility component for clean section headings
const PolicyTitle = ({ number, title }: { number: number, title: string }) => (
    <h2 className="text-2xl font-extrabold dark:text-white text-gray-900 flex items-center mb-4 pt-4">
      <span className="w-8 h-8 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-base font-bold mr-3 flex-shrink-0">{number}</span>
      {title}
    </h2>
);

export default function CancellationPolicyPage() {
  return (
    // Uses the same clean styling as Terms of Service and Privacy Policy
    <div className="min-h-screen pt-20 bg-gradient-to-b dark:from-gray-900 dark:to-black from-gray-50 to-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border dark:border-gray-800 border-gray-200 overflow-hidden">
          
          {/* Header */}
          <div className className="bg-gradient-to-r from-[#1e56d6] to-blue-600 px-8 md:px-12 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Service Cancellation Policy</h1>
            <div className="text-blue-100 text-base">
              <p>Effective Date: 20 May 2025</p>
              <p>Policy Version: 1.0</p>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 md:px-12 py-12">
            <div className="space-y-12">
              
              {/* Introduction and Scope */}
              <section className="space-y-4">
                <h2 className="text-3xl font-extrabold dark:text-white text-gray-900">Introduction</h2>
                <p className="text-base dark:text-gray-300 text-gray-700 leading-relaxed">
                  This Cancellation Policy governs the terms under which a client may cancel services contracted with Ripple Nexus ("Company"). By engaging our services, you agree to this policy.
                </p>
              </section>

              {/* Section 1: Core Policy on Refunds (PROTECTIVE LANGUAGE) */}
              <section className="space-y-4">
                <PolicyTitle number={1} title="General Cancellation & Refund Policy" />
                
                <p className="text-base dark:text-gray-300 text-gray-700 leading-relaxed">
                  Due to the immediate allocation of resources, specialized talent, and planning involved in digital service contracts (including development, strategy, and branding), <strong>fees paid are generally non-refundable</strong>.
                </p>
                
                <div className="p-4 dark:bg-gray-800 bg-gray-100 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm dark:text-gray-300 text-gray-700">
                      <strong>Important Note:</strong> All initial consultation fees, booking charges, and payments for completed milestones (as defined in the Statement of Work/SOW) are <strong>non-refundable</strong>. This provision is non-negotiable and designed to safeguard the Company’s proprietary methodologies and time investment.
                    </p>
                </div>
              </section>

              {/* Section 2: Cancellation Stages (PROTECTIVE LANGUAGE) */}
              <section className="space-y-4">
                <PolicyTitle number={2} title="Cancellation By Project Stage" />
                <p className="text-base dark:text-gray-300 text-gray-700 leading-relaxed">
                  Cancellation terms are strictly dependent upon the stage of the project at the time the formal cancellation request is received in writing:
                </p>

                <div className="space-y-4">
                  {/* Stage 1 */}
                  <div className="p-4 dark:bg-gray-800 bg-gray-100 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#1e56d6] mb-1">2.1 Pre-Engagement (Before SOW Execution)</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm dark:text-gray-300 text-gray-700">
                      <li>Full refund of any preliminary holding deposit may be issued, excluding processing fees.</li>
                    </ul>
                  </div>

                  {/* Stage 2 - UPDATED: ABSOLUTE NON-REFUND, PLUS DISCRETIONARY CLAUSE */}
                  <div className="p-4 dark:bg-gray-800 bg-gray-100 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#1e56d6] mb-1">2.2 Service Initiated (Post SOW Execution)</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm dark:text-gray-300 text-gray-700">
                      <li>Upon formal execution of the SOW or receipt of the initial milestone payment, <strong>all fees paid are non-refundable.</strong></li>                  {/* NEW DISCRETIONARY CLAUSE ADDED HERE */}
                      <li>Partial refunds may be considered at our discretion for unfulfilled scopes due to internal limitations.</li>
                      <li>Any request for cancellation after this stage will result in the <strong>forfeiture of all payments made to date.</strong></li>
                    </ul>
                  </div>

                  {/* Stage 3 */}
                  <div className="p-4 dark:bg-gray-800 bg-gray-100 rounded-lg">
                    <h3 className="text-lg font-semibold text-[#1e56d6] mb-1">2.3 Project Completion (After Final Delivery)</h3>
                    <ul className="list-disc pl-6 space-y-1 text-sm dark:text-gray-300 text-gray-700">
                      <li><strong>No refunds</strong> will be granted after the final deliverable has been presented and accepted by the Client.</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 3: How to Cancel */}
              <section className="space-y-4">
                <PolicyTitle number={3} title="Cancellation Procedure" />
                
                <p className="text-base dark:text-gray-300 text-gray-700 leading-relaxed">
                  To initiate a cancellation, the Client must submit a formal request in writing to our official contact email.
                </p>
                
                <div className="bg-gradient-to-r from-[#1e56d6]/10 to-blue-600/10 rounded-xl p-4 border border-[#1e56d6]/20 dark:border-[#1e56d6]/30">
                  <p className="flex items-center text-base dark:text-gray-300 text-gray-700">
                    <strong className="mr-2">Official Email:</strong> 
                    <a href="mailto:info@theripplenexus.com" className="text-[#1e56d6] hover:text-blue-700 font-medium ml-2">info@theripplenexus.com</a>
                  </p>
                </div>
              </section>
              
              {/* Final Statement */}
              <section className="space-y-4 pt-4">
                <p className="text-sm italic dark:text-gray-400 text-gray-600">
                  By engaging with Ripple Nexus, you confirm that you have read, understood, and irrevocably agreed to this Service Cancellation Policy.
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}