"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const MailIcon = () => (<svg className="w-6 h-6 text-[#1e56d6] flex-shrink-0 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const LocationIcon = () => (<svg className="w-6 h-6 text-gray-400 flex-shrink-0 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
const ClockIcon = () => (<svg className="w-6 h-6 text-[#1e56d6] flex-shrink-0 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const WhatsappIcon = () => (<svg className="w-6 h-6 text-[#25D366] flex-shrink-0 mr-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.036 21.75c-1.393 0-2.483-.87-2.61-1.954-.037-.3-.024-.593.04-.882.203-.923.704-1.854 1.41-2.738.312-.39.673-.75.986-1.118a.38.38 0 00.08-.43c-.156-.37-.5-.653-.88-.93a.384.384 0 00-.472-.04 10.74 10.74 0 01-1.353-.615c-.477-.282-.93-.604-1.312-.99-.344-.34-.635-.74-.836-1.19-.24-.555-.386-1.16-.407-1.782-.014-.4.07-.81.25-1.2.22-.48.55-.91.95-1.31.29-.29.62-.53.99-.74.38-.21.79-.32 1.2-.32.4 0 .79.11 1.13.33.37.23.68.52.93.9.15.23.27.48.37.75.14.37.22.75.25 1.14.03.38.04.77 0 1.15-.02.4-.1.79-.24 1.16-.14.37-.36.72-.65 1.05-.33.38-.69.73-1.07 1.04-.4.32-.78.68-1.11 1.06-.41.48-.71.95-.83 1.54-.15.7-.1 1.42.14 2.1.2.56.57 1.05 1.05 1.45.38.32.79.57 1.2.73.4.15.8.23 1.2.23s.8-.08 1.2-.23c.4-.16.8-.41 1.13-.73.48-.4.85-.89 1.05-1.45.24-.68.29-1.4.14-2.1-.2.56-.57 1.05-1.05 1.45-.38.32-.79.57-1.2.73-.4.15-.8.23-1.2.23s-.8-.08-1.2-.23c-.4-.16-.8-.41-1.13-.73-.48-.4-.85-.89-1.05-1.45-.24-.68-.29-1.4-.14-2.1.12-.59.42-1.06.83-1.54.33-.38.69-.73 1.07-1.04.29-.33.51-.68.65-1.05.14-.37.22-.76.24-1.16.03-.38.02-.77.03-1.15.03-.38.11-.77.25-1.14.15-.37.37-.74.65-1.05.33-.38.69-.73 1.07-1.04.4-.32.78-.68 1.11-1.06.41.48.71.95.83 1.54.15.7.1 1.42-.14 2.1-.2.56-.57 1.05-1.05 1.45-.38.32-.79.57-1.2.73-.4.15-.8.23-1.2.23z"/></svg>);


const ContactCard: React.FC<{ icon: React.ReactNode, title: string, content: React.ReactNode, hideOnMobile?: boolean }> = ({ icon, title, content, hideOnMobile = false }) => (
    <motion.div
      whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(30, 86, 214, 0.1)' }}
      className={`bg-gray-800 px-6 py-5 rounded-xl shadow-xl border border-gray-700 transition-all duration-300 ${hideOnMobile ? 'hidden sm:block' : ''}`}
    >
      <div className="flex items-start">
        {icon}
        <div>
          <h3 className="text-xl font-bold text-white mb-1 transition-colors">{title}</h3>
          <p className="text-gray-400 transition-colors">{content}</p>
        </div>
      </div>
    </motion.div>
);

export default function Contact() {
  const calendlyUrl = "https://calendly.com/ripplenexus/book-a-consultation"; 
  
  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-gray-950 to-gray-900 border-b border-gray-800">
        
        <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <p className="text-lg font-semibold uppercase tracking-widest text-[#1e56d6] mb-2">Secure Engagement</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              Schedule Your Strategy Session
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl">
              Digital First: We operate virtually to maximize efficiency. Connect with us via our preferred digital channels below.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-16 sm:py-20 md:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-8 sm:space-y-10"
            >
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Digital Channels</h2>
              
              <div className="space-y-6">
                <ContactCard
                    icon={<MailIcon />}
                    title="Primary Contact (Email)"
                    content={
                        <a href="mailto:info@theripplenexus.com" className="text-[#1e56d6] font-medium transition-colors hover:text-blue-500">
                            info@theripplenexus.com (Recommended)
                        </a>
                    }
                />

                <ContactCard
                    icon={<WhatsappIcon />}
                    title="Direct Messaging (WhatsApp)"
                    content={
                        <a href="https://wa.me/917599756826" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium transition-colors hover:text-green-500">
                            +91 7599756826 (Quick Response)
                        </a>
                    }
                />

                <ContactCard
                    icon={<ClockIcon />}
                    title="Virtual Hours"
                    content={
                        <>
                            Monday - Friday: 9:00 AM - 5:00 PM (IST)<br />
                            Weekends: By Appointment Only
                        </>
                    }
                />
                
                <ContactCard
                    icon={<LocationIcon />}
                    title="Registered Address"
                    content={
                        <>
                            Cospazes, A-116 Urbtech Trade Centre<br />
                            Sec -132, Noida - 201304, India
                        </>
                    }
                    hideOnMobile={true}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-1 lg:col-span-2 flex flex-col justify-center items-center text-center"
            >
              <div className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl border-gray-700 border w-full max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                    Book Your Strategy Session
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-10">
                    The fastest way to engage our team. Select a convenient time for a 30-minute confidential consultation.
                </p>
                
                <a 
                    href={calendlyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-[#1e56d6] text-white font-extrabold rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-sm sm:text-base md:text-lg"
                >
                    Schedule Now
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
                <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
                    *Link opens our secure scheduling tool in a new window.
                </p>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h2>
          
          <a 
              href="mailto:info@theripplenexus.com"
              className="inline-flex items-center px-6 py-3 bg-[#1e56d6] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
              Send Us a Project Inquiry
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>
      
    </div>
  );
}