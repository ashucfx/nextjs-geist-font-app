import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Ripple Nexus',
  description: 'Terms of Service for Ripple Nexus services',
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="prose dark:prose-invert max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              Effective Date: May 20, 2025<br />
              Last Updated: May 20, 2025
            </p>

            <div className="space-y-8">
              <section>
                <p className="mb-6">
                  Welcome to Ripple Nexus, a brand of NEXWAVE WEB SOLUTIONS (OPC) PRIVATE LIMITED, a private limited company registered under the Companies Act, 2013 with its registered office at:
                </p>
                <p className="mb-6">
                  📍 A-116, URBTECH TRADE CENTRE, SECTOR-132, NOIDA - 201304, UTTAR PRADESH, INDIA<br />
                  📧 contact@ripplenexus.tech<br />
                  🌐 https://www.ripplenexus.tech
                </p>
                <p className="mb-6">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "you", or "your") and Ripple Nexus ("Company", "we", "us", or "our") and govern your access to and use of our services.
                </p>
                <p>
                  By engaging with Ripple Nexus or accessing our website, you agree to be bound by these Terms, our Privacy Policy, and any other agreement expressly incorporated herein.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">1. Definitions</h2>
                <p className="mb-4">
                  <strong>Company:</strong> Refers to Ripple Nexus, operating under NEXWAVE WEB SOLUTIONS (OPC) PRIVATE LIMITED, including its officers, employees, agents, and affiliates.
                </p>
                <p className="mb-4">
                  <strong>Client:</strong> Any individual or entity engaging Ripple Nexus for services.
                </p>
                <p className="mb-4">
                  <strong>Services:</strong> All digital services provided by Ripple Nexus, including web development, app/software development, AI chatbot creation, branding, and digital marketing (excluding career booster services).
                </p>
                <p className="mb-4">
                  <strong>Deliverables:</strong> The final outputs/products developed for the Client as part of the services rendered.
                </p>
                <p>
                  <strong>Agreement:</strong> These Terms, plus any work orders, service-level agreements, proposals, or electronic consent documentation.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">2. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our Services.
                </p>
                <p>
                  These Terms may be updated from time to time, and your continued use of the Services constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">3. Scope of Services</h2>
                <p className="mb-4">
                  Ripple Nexus delivers services remotely through digital platforms across international borders. Our offerings include but are not limited to:
                </p>

                <h3 className="text-lg font-medium mt-4 mb-2">3.1 Website Development</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Corporate, eCommerce, and Custom Websites using modern stacks</li>
                  <li>SEO-optimized, mobile-responsive, and secure designs</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">3.2 Software and SaaS Development</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Custom ERPs, CRMs, Admin Panels, Dashboards</li>
                  <li>Scalable and secure cloud-based SaaS platforms</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">3.3 Mobile and Cloud Applications</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Cross-platform mobile apps for Android and iOS</li>
                  <li>Real-time cloud apps with authentication and database support</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">3.4 Branding and Visual Identity</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Logo design, UI/UX, brand kits</li>
                  <li>Business collaterals and digital branding</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">3.5 AI Chatbot Development</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>NLP-integrated bots for websites, WhatsApp, and other platforms</li>
                  <li>Use cases include customer service, lead generation, FAQs, and more</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">3.6 Digital Marketing and SEO</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>Social media management, ads, and strategy</li>
                  <li>Technical SEO, content optimization, keyword targeting</li>
                </ul>

                <p className="text-sm italic">
                  Note: We no longer offer Career Booster services (including resume/CV, LinkedIn, or cover letter writing).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">4. Client Responsibilities</h2>
                <p className="mb-4">You agree to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide timely, truthful, and complete information</li>
                  <li>Respond promptly to requests, feedback, or approvals</li>
                  <li>Pay all fees as outlined in invoices without delay</li>
                  <li>Use deliverables lawfully and without violating third-party rights</li>
                  <li>Maintain confidentiality of proprietary tools, methods, or shared resources</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">5. Fees, Payments & Taxes</h2>
                
                <h3 className="text-lg font-medium mt-4 mb-2">5.1 Invoicing</h3>
                <p className="mb-4">
                  Invoices are raised digitally with service breakdown. Fees must be paid by the due date.
                </p>

                <h3 className="text-lg font-medium mt-4 mb-2">5.2 Accepted Payment Methods</h3>
                <p className="mb-4">
                  Bank transfer, UPI (India), Razorpay, PayPal, or Stripe (for international clients).
                </p>

                <h3 className="text-lg font-medium mt-4 mb-2">5.3 Taxes</h3>
                <p className="mb-4">
                  All taxes, VAT, or duties applicable in the Client's jurisdiction are the responsibility of the Client unless explicitly stated.
                </p>

                <h3 className="text-lg font-medium mt-4 mb-2">5.4 Refund Policy</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li>No refunds once services are initiated or delivered</li>
                  <li>Partial refunds may be considered at our discretion for unfulfilled scopes due to internal limitations</li>
                  <li>Refund requests must be submitted in writing with justification</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">6. Intellectual Property Rights</h2>
                <p className="mb-4">
                  All original code, designs, and materials created during the project remain the intellectual property of Ripple Nexus until full payment is received.
                </p>
                <p className="mb-4">
                  After full payment, ownership of customized deliverables is transferred to the Client, excluding tools, frameworks, or third-party licenses used in development.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">7. Confidentiality & Data Protection</h2>
                <p className="mb-4">
                  We are committed to protecting your confidential data in line with global standards including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>GDPR (EU)</li>
                  <li>DPA (UK)</li>
                  <li>PDPA (Singapore)</li>
                  <li>Federal Data Protection Act (Germany)</li>
                  <li>CCPA (California, USA)</li>
                  <li>ADGM and DIFC Laws (UAE)</li>
                  <li>Data laws applicable in France, Netherlands, Switzerland, Australia, Egypt, Myanmar, Qatar, and other jurisdictions relevant to our client base</li>
                </ul>

                <h3 className="text-lg font-medium mt-4 mb-2">7.1 Confidentiality</h3>
                <p className="mb-4">
                  Information shared for project purposes will not be disclosed without prior written consent unless legally compelled.
                </p>

                <h3 className="text-lg font-medium mt-4 mb-2">7.2 Data Handling</h3>
                <p className="mb-4">
                  We use encrypted storage and transmission protocols. Access to sensitive data is limited to authorized personnel only.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">8. Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Ripple Nexus shall not be liable for indirect, incidental, special, or consequential damages</li>
                  <li>We are not liable for loss of profits, business interruption, loss of data, or reputational harm</li>
                  <li>Our total liability is capped at the total fee paid by the Client for the specific service giving rise to the claim</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">9. Termination</h2>
                
                <h3 className="text-lg font-medium mt-4 mb-2">9.1 Termination by Client</h3>
                <p className="mb-4">
                  You may terminate services by written notice at any time. You will be liable for all fees incurred up to the termination date.
                </p>

                <h3 className="text-lg font-medium mt-4 mb-2">9.2 Termination by Company</h3>
                <p className="mb-4">
                  We reserve the right to terminate the contract without notice for:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Payment failure</li>
                  <li>Misuse or illegal activities</li>
                  <li>Breach of these Terms</li>
                </ul>
                <p className="mb-4">
                  Upon termination, access to services and deliverables may be revoked.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">10. Third-Party Tools and Integrations</h2>
                <p className="mb-4">
                  Ripple Nexus may integrate or rely on third-party services such as Firebase, AWS, Razorpay, Google APIs, Meta Business, and others. We are not liable for any outages, failures, or limitations caused by these third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">11. Non-Solicitation</h2>
                <p className="mb-4">
                  Clients shall not directly or indirectly solicit employment or freelance work from any current Ripple Nexus employee or subcontractor for a period of 12 months from the project end date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">12. Force Majeure</h2>
                <p className="mb-4">
                  Ripple Nexus shall not be held liable for delays or failure to perform due to causes beyond its reasonable control, including but not limited to acts of God, internet outages, cyberattacks, or changes in law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">13. Dispute Resolution</h2>
                <p className="mb-4">
                  All disputes shall first be attempted to be resolved amicably.
                </p>
                <p className="mb-4">
                  If unresolved, the dispute shall be subject to binding arbitration under the Arbitration and Conciliation Act, 1996 (India).
                </p>
                <p className="mb-4">
                  The seat of arbitration shall be Noida, Uttar Pradesh, and proceedings shall be conducted in English.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">14. Governing Law and Jurisdiction</h2>
                <p className="mb-4">
                  These Terms are governed by and construed in accordance with the laws of India. Any legal actions or proceedings shall lie exclusively with the competent courts of Noida, Uttar Pradesh.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">15. Modifications to Terms</h2>
                <p className="mb-4">
                  Ripple Nexus reserves the right to update these Terms at any time. Any changes will be effective immediately upon posting to our website.
                </p>
                <p>
                  Your continued use of the services constitutes acceptance of the revised Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">16. Contact Information</h2>
                <p>
                  📨 For questions about these Terms, please contact:<br />
                  📧 Email: contact@ripplenexus.tech<br />
                  🏢 Registered Office: A-116, URBTECH TRADE CENTRE, SECTOR-132, NOIDA - 201304, UTTAR PRADESH, INDIA<br />
                  🌐 Website: https://www.ripplenexus.tech
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
