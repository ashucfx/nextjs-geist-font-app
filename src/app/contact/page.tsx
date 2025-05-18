"use client";

import { motion } from 'framer-motion';
import CalendlyWidget from '../../components/CalendlyWidget';

export default function Contact() {
  return (
    <div>
      {/* Contact Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-gray-900 via-black to-[#1e56d6]/20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-[#1e56d6]/20 opacity-20 mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#1e56d6] mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl hover:bg-white/10 transition-all duration-500"
                >
                  <h3 className="text-xl font-semibold text-[#1e56d6] mb-3">Address</h3>
                  <p className="text-gray-300">
                    Cospazes, A-116 Urbtech Trade Centre<br />
                    Sec -132, Noida - 201304
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl hover:bg-white/10 transition-all duration-500"
                >
                  <h3 className="text-xl font-semibold text-[#1e56d6] mb-3">Phone</h3>
                  <p className="text-gray-300">
                    <a href="tel:+917599756826" className="hover:text-[#1e56d6] transition-colors">
                      +91 7599756826
                    </a>
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl hover:bg-white/10 transition-all duration-500"
                >
                  <h3 className="text-xl font-semibold text-[#1e56d6] mb-3">Email</h3>
                  <p className="text-gray-300">
                    <a href="mailto:info@ripplenexus.com" className="hover:text-[#1e56d6] transition-colors">
                      info@ripplenexus.com
                    </a>
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group bg-gradient-to-br from-white/5 to-white/[0.02] p-6 rounded-xl hover:bg-white/10 transition-all duration-500"
                >
                  <h3 className="text-xl font-semibold text-[#1e56d6] mb-3">Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Calendly Widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold text-[#1e56d6] mb-8">Schedule a Consultation</h2>
              <CalendlyWidget />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
