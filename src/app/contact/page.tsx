"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { FadeInView } from '@/components/animations/FadeInView';
import { PremiumButton } from '@/components/animations/PremiumButton';

const MailIcon = () => (<svg className="w-6 h-6 text-[#1e56d6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const PhoneIcon = () => (<svg className="w-6 h-6 text-[#1e56d6] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.87 5.26 6.71 6.71l1.17-1.17c.18-.18.43-.24.66-.12 1.37.69 2.8.97 4.28.97.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.83 21 3 13.17 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.48.28 2.91.97 4.28.12.23.06.48-.12.66l-1.17 1.17z"/></svg>);
const WhatsappIcon = () => (<svg className="w-6 h-6 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.713 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // Send form data to API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setStatus({
        type: 'success',
        message: result.message || 'Thank you! Your inquiry has been submitted successfully. We will contact you shortly.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setStatus({
        type: 'error',
        message: errorMessage + ' You can also email us directly at info@theripplenexus.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative min-h-[35vh] sm:min-h-[40vh] flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800">
        <div className="relative z-10 max-w-7xl mx-auto py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
              Let's Build Something
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl">
              30-minute technical consultation. No sales pitch. We'll discuss your requirements and give you honest feedback on what's feasible.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <FadeInView>
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MailIcon />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Email</h3>
                      <a href="mailto:info@theripplenexus.com" className="text-[#1e56d6] hover:text-blue-500 transition-colors">
                        info@theripplenexus.com
                      </a>
                      <p className="text-sm text-gray-400 mt-1">Preferred contact method</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <PhoneIcon />
                    <div>
                      <h3 className="text-white font-semibold mb-1">Phone</h3>
                      <a href="tel:+917599756826" className="text-[#1e56d6] hover:text-blue-500 transition-colors">
                        +91 7599756826
                      </a>
                      <p className="text-sm text-gray-400 mt-1">9 AM - 5 PM IST, Mon-Fri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <WhatsappIcon />
                    <div>
                      <h3 className="text-white font-semibold mb-1">WhatsApp</h3>
                      <a href="https://wa.me/917599756826" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:text-green-500 transition-colors">
                        +91 7599756826
                      </a>
                      <p className="text-sm text-gray-400 mt-1">Quick response</p>
                    </div>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-white font-bold mb-3">Prefer Calendly?</h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    Schedule a 30-minute technical consultation at a time that works for you.
                  </p>
                  <a 
                    href="https://calendly.com/ripplenexus/book-a-consultation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-6 py-3 bg-[#1e56d6] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Book on Calendly
                  </a>
                </div>
              </FadeInView>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeInView delay={0.1}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#1e56d6] transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#1e56d6] transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#1e56d6] transition-colors"
                          placeholder="Your company"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#1e56d6] transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#1e56d6] transition-colors"
                        >
                          <option value="">Select a service</option>
                          <option value="web-mobile">Web & Mobile Development</option>
                          <option value="ai-automation">AI & Automation</option>
                          <option value="cloud-devops">Cloud & DevOps</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="career-branding">Career Branding</option>
                          <option value="not-sure">Not Sure / Multiple</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-semibold text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#1e56d6] transition-colors"
                        >
                          <option value="">Select budget</option>
                          <option value="<10k">Less than $10K</option>
                          <option value="10-30k">$10K - $30K</option>
                          <option value="30-50k">$30K - $50K</option>
                          <option value="50-100k">$50K - $100K</option>
                          <option value="100k+">$100K+</option>
                          <option value="not-sure">Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#1e56d6] transition-colors resize-none"
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                      />
                    </div>

                    {status.message && (
                      <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-900/30 border border-green-500' : 'bg-red-900/30 border border-red-500'}`}>
                        <p className={status.type === 'success' ? 'text-green-300' : 'text-red-300'}>
                          {status.message}
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-[#1e56d6] text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>

                    <p className="text-sm text-gray-400 text-center">
                      We typically respond within 24 hours during business days.
                    </p>
                  </form>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location - Compact */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView>
            <h2 className="text-2xl font-bold text-white mb-4">Registered Office</h2>
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 inline-block">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="font-semibold text-white">Ripple Nexus</span><br />
                Cospazes, A-116 Urbtech Trade Centre<br />
                Sec-132, Noida - 201304, India<br />
                <span className="text-[#1e56d6] mt-2 inline-block">+91 7599756826</span>
              </p>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}