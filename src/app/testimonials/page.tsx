"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechStart Inc.",
      content: "Ripple Nexus transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director, Growth Co.",
      content: "The team at Ripple Nexus delivered exceptional results. Their strategic approach to digital marketing helped us achieve our growth targets.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateTech",
      content: "Working with Ripple Nexus was a game-changer for our business. Their technical expertise and creative solutions are unmatched.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Emily Williams",
      role: "COO, Digital Solutions Ltd",
      content: "The dedication and professionalism of the Ripple Nexus team is remarkable. They truly understand modern business needs.",
      image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "David Rodriguez",
      role: "CTO, Cloud Innovations",
      content: "Their cloud solutions expertise helped us scale efficiently. The implementation was smooth, and the results were immediate. Highly recommended!",
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Lisa Chang",
      role: "E-commerce Director, StyleHub",
      content: "The e-commerce platform developed by Ripple Nexus boosted our sales by 200%. Their understanding of user experience and conversion optimization is outstanding.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Robert Anderson",
      role: "VP of Operations, DataFlow Systems",
      content: "Exceptional service and technical expertise. Their DevOps implementation transformed our deployment process and significantly reduced our time-to-market.",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Amanda Foster",
      role: "Digital Marketing Manager, BrandGrowth",
      content: "The SEO and content strategy developed by Ripple Nexus doubled our organic traffic in just 6 months. Their data-driven approach delivers real results.",
      image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
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
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience with Ripple Nexus
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e56d6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 64px"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1e56d6]">{testimonial.name}</h3>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote>
                    <p className="text-gray-300 text-lg leading-relaxed">"{testimonial.content}"</p>
                  </blockquote>
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
              Ready to Join Our Success Stories?
            </h2>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-white text-[#1e56d6] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Start Your Journey Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
