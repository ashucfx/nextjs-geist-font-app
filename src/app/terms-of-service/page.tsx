import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Ripple Nexus',
  description: 'Terms of Service for Ripple Nexus services',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b dark:from-gray-900 dark:to-black from-gray-50 to-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border dark:border-gray-800/50 border-gray-200/50 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1e56d6] to-blue-600 px-8 md:px-12 py-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>
            <div className="text-blue-100 text-base">
              <p>Effective Date: May 20, 2025</p>
              <p>Last Updated: May 20, 2025</p>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 md:px-12 py-12">
            <div className="prose prose-base dark:prose-invert max-w-none">
              <div className="space-y-10">
                {/* Introduction */}
                <section>
                  <p className="text-base dark:text-gray-300 text-gray-700 leading-relaxed mb-6">
                    Welcome to Ripple Nexus, a Sole Proprietorship business entity registered under applicable Indian laws with its registered office at:
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-xl p-6 border-l-4 border-[#1e56d6] mb-6">
                    <div className="dark:text-gray-300 text-gray-700 text-base leading-relaxed">
                      <p className="flex items-center mb-2">
                        <span className="text-[#1e56d6] mr-2">📍</span>
                        A-116, URBTECH TRADE CENTRE, SECTOR-132, NOIDA - 201304, UTTAR PRADESH, INDIA
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
                  <p className="text-base dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                    These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "you", or "your") and Ripple Nexus ("Company", "we", "us", or "our") and govern your access to and use of our services.
                  </p>
                  <p className="text-base dark:text-gray-300 text-gray-700 leading-relaxed">
                    By engaging with Ripple Nexus or accessing our website, you agree to be bound by these Terms, our Privacy Policy, and any other agreement expressly incorporated herein.
                  </p>
                </section>

                {/* Section 1 */}
                <section>
                  <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-4 flex items-center">
                    <span className="w-7 h-7 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                    Definitions
                  </h2>
                  <div className="space-y-3 ml-10">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <p className="dark:text-gray-300 text-gray-700 text-sm">
                        <strong className="text-[#1e56d6]">Company:</strong> Refers to Ripple Nexus - Sole Proprietorship, including its proprietor, employees, agents, and affiliates.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <p className="dark:text-gray-300 text-gray-700 text-sm">
                        <strong className="text-[#1e56d6]">Client:</strong> Any individual or entity engaging Ripple Nexus for services.
                      </p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                      <p className="dark:text-gray-300 text-gray-700 text-sm">
                        <strong className="text-[#1e56d6]">Services:</strong> All digital services provided by Ripple Nexus, including web development, app/software development, AI chatbot creation, branding, and digital marketing (excluding career booster services).
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section>
                  <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-4 flex items-center">
                    <span className="w-7 h-7 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                    Acceptance of Terms
                  </h2>
                  <div className="ml-10 space-y-3">
                    <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed">
                      By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our Services.
                    </p>
                    <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed">
                      These Terms may be updated from time to time, and your continued use of the Services constitutes acceptance of the updated Terms.
                    </p>
                  </div>
                </section>

                {/* Section 5 - Payment Methods */}
                <section>
                  <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-4 flex items-center">
                    <span className="w-7 h-7 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                    Fees, Payments & Taxes
                  </h2>
                  <div className="ml-10 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[#1e56d6] mb-2">5.1 Invoicing</h3>
                      <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed mb-3">
                        Invoices are raised digitally with service breakdown. Fees must be paid by the due date.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#1e56d6] mb-2">5.2 Accepted Payment Methods</h3>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg">
                          <p className="text-sm dark:text-gray-300 text-gray-700">
                            <strong>Domestic (India):</strong> Bank transfer, UPI, Razorpay
                          </p>
                        </div>
                        <div className="p-3 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800/50 dark:to-gray-700/50 rounded-lg">
                          <p className="text-sm dark:text-gray-300 text-gray-700">
                            <strong>International:</strong> Outward Remittance(Bank Transfer), PayPal, Stripe, Wise, Pioneer
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#1e56d6] mb-2">5.3 Taxes</h3>
                      <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed mb-3">
                        All taxes, VAT, or duties applicable in the Client's jurisdiction are the responsibility of the Client unless explicitly stated.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-[#1e56d6] mb-2">5.4 Refund Policy</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm dark:text-gray-300 text-gray-700">
                        <li>No refunds once services are initiated or delivered</li>
                        <li>Partial refunds may be considered at our discretion for unfulfilled scopes due to internal limitations</li>
                        <li>Refund requests must be submitted in writing with justification</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Contact Section */}
                <section>
                  <h2 className="text-xl font-bold dark:text-white text-gray-900 mb-4 flex items-center">
                    <span className="w-7 h-7 bg-[#1e56d6] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">16</span>
                    Contact Information
                  </h2>
                  <div className="ml-10">
                    <div className="bg-gradient-to-r from-[#1e56d6]/10 to-blue-600/10 rounded-xl p-4 border border-[#1e56d6]/20">
                      <p className="text-sm dark:text-gray-300 text-gray-700 leading-relaxed mb-3">
                        For questions about these Terms, please contact:
                      </p>
                      <div className="space-y-2 dark:text-gray-300 text-gray-700 text-sm">
                        <p className="flex items-center">
                          <span className="text-[#1e56d6] mr-2">📧</span>
                          <strong>Email:</strong> <span className="ml-2">info@theripplenexus.com</span>
                        </p>
                        <p className="flex items-start">
                          <span className="text-[#1e56d6] mr-2 mt-1">🏢</span>
                          <span><strong>Registered Office:</strong> A-116, URBTECH TRADE CENTRE, SECTOR-132, NOIDA - 201304, UTTAR PRADESH, INDIA</span>
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
    </div>
  )
}
