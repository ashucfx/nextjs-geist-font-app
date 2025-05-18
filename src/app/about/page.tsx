"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
      {/* About Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gradient-to-br from-gray-900 via-black to-[#1e56d6]/20">
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
              About Us
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Build Bold. Scale Smart. Bridging Ideas to Impact — At the Nexus of Innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1e56d6] mb-6">
              Company Vision
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg mx-auto text-gray-300 space-y-6"
          >
            <p className="text-xl leading-relaxed">
              At Ripple Nexus, we envision a world where technology is not just built — it evolves, expands, and elevates.
            </p>
            <p className="text-xl leading-relaxed">
              Our name is our mission: "Ripple" symbolizes the power of a single innovation to create waves of impact, and "Nexus" is the convergence point where bold ideas, smart technology, and meaningful strategy unite. Together, Ripple Nexus stands for extraordinary transformation born at the intersection of purpose and possibility.
            </p>
            <p className="text-xl leading-relaxed">
              As a brand of NEXWAVE WEB SOLUTIONS (OPC) PRIVATE LIMITED, we aim to be the silent force behind the world's most intuitive digital platforms, intelligent applications, and scalable cloud-based ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1e56d6]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description: "Pioneering solutions that shape the digital future"
              },
              {
                title: "Excellence",
                description: "Delivering precision and quality in every project"
              },
              {
                title: "Impact",
                description: "Creating meaningful change through technology"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-xl hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-[#1e56d6] text-white rounded-lg flex items-center justify-center text-xl font-bold mb-6">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-[#1e56d6] mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#1e56d6] mb-6">
              Our Certifications
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "ISO Certified",
                description: "Meeting international quality standards for software development and digital services"
              },
              {
                title: "Trademark Registered",
                description: "NEXWAVE WEB SOLUTIONS (OPC) PRIVATE LIMITED - Your trusted technology partner"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] p-8 rounded-xl hover:bg-white/10 transition-all duration-500"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6">
                    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#1e56d6]">
                      {index === 0 ? (
                        <>
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                          <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </>
                      ) : (
                        <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      )}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e56d6] mb-4">{cert.title}</h3>
                  <p className="text-gray-300">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e56d6] to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e56d6]/20 to-blue-900/20 opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to start your journey?
            </h2>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-white text-[#1e56d6] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Schedule Your Free Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
