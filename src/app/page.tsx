"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const solutions = [
    {
      title: "Custom Development",
      description: "Tailored web and mobile solutions that perfectly align with your business objectives",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Responsive Design", "Scalable Architecture", "Modern Tech Stack"]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies to boost your online presence and drive growth",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["SEO Optimization", "Content Strategy", "Social Media"]
    },
    {
      title: "Cloud Solutions",
      description: "Secure and scalable cloud infrastructure for your growing business",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["AWS/Azure/GCP", "DevOps", "24/7 Support"]
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-[#1e56d6]/20 from-slate-50 via-white to-blue-50/50 transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br dark:from-gray-900/80 dark:via-black/60 dark:to-[#1e56d6]/10 from-white/40 via-blue-50/20 to-indigo-100/30 opacity-60 mix-blend-overlay"></div>
          {/* Professional animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#1e56d6]/8 dark:bg-[#1e56d6]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/8 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#1e56d6]/6 to-blue-600/6 dark:from-[#1e56d6]/3 dark:to-blue-600/3 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-8 flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="relative w-20 h-20 mb-6"
              >
                <Image
                  src="/images/lg-01.png"
                  alt="Ripple Nexus Logo"
                  fill
                  className="object-contain brightness-110 drop-shadow-2xl"
                  sizes="80px"
                  priority
                />
              </motion.div>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span 
                  className="text-[#1e56d6] hover:text-[#2563eb] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  RIPPLE
                </motion.span>
                <span className="mx-2"></span>
                <motion.span 
                  className="dark:text-white text-gray-800 hover:text-[#1e56d6] dark:hover:text-gray-200 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  NEXUS
                </motion.span>
              </motion.h1>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold dark:text-white text-gray-900 mb-8 leading-tight tracking-tight">
              Elevate Your Digital <br />
              <span className="bg-gradient-to-r from-[#1e56d6] to-[#1e56d6]/70 bg-clip-text text-transparent">
                Business Presence
              </span>
            </h1>
            <p className="text-xl md:text-2xl dark:text-gray-300 text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We craft innovative digital solutions that transform businesses and drive growth in the modern digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-[#1e56d6] text-white rounded-lg text-lg font-medium overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e56d6] to-blue-700 transition-transform duration-300 group-hover:scale-110"></div>
                <span className="relative">Schedule a Free Consultation</span>
              </motion.a>
              <motion.a
                href="#solutions"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-white/10 dark:bg-white/10 bg-gray-100/80 dark:text-white text-gray-700 rounded-lg text-lg font-medium backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/20 hover:bg-gray-200/80 transition-all duration-300 border border-white/20 dark:border-white/20 border-gray-300/50"
              >
                Discover Our Solutions
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="dark:text-white/80 text-gray-600/80 text-center cursor-pointer dark:hover:text-white hover:text-gray-900 transition-colors"
            onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <p className="text-sm font-medium mb-2">Explore More</p>
            <svg 
              className="w-6 h-6 mx-auto" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 bg-gradient-to-b dark:from-gray-900 dark:to-black from-gray-100 to-gray-200 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-xl dark:text-gray-400 text-gray-600 max-w-3xl mx-auto">
              End-to-end digital transformation services tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative bg-gradient-to-br dark:from-white/5 dark:to-white/[0.02] from-white/80 to-white/60 backdrop-blur-sm rounded-xl overflow-hidden dark:hover:bg-white/10 hover:bg-white/90 transition-all duration-500 shadow-lg dark:shadow-none hover:shadow-xl border dark:border-white/10 border-gray-200/50"
              >
                <div className="relative h-48">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-semibold dark:text-white text-gray-900 mb-4">{solution.title}</h3>
                  <p className="dark:text-gray-400 text-gray-600 mb-6">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="dark:text-gray-300 text-gray-700 flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1e56d6]/70 group-hover:bg-[#1e56d6] mr-3 transition-colors"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Why Choose Us */}
<section className="py-24 bg-gradient-to-br from-blue-50/50 to-indigo-100/30 dark:bg-slate-900/90 transition-colors duration-500 border-t border-b border-slate-700 dark:border-slate-600">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-6">
        Why Choose Ripple Nexus?
      </h2>
      <p className="text-xl dark:text-gray-400 text-gray-600 max-w-3xl mx-auto">
        We combine innovation with expertise to deliver exceptional results
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { number: "100+", label: "Successful Projects" },
        { number: "50+", label: "Happy Clients" },
        { number: "5+", label: "Years Experience" },
        { number: "24/7", label: "Expert Support" }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white/20 dark:bg-slate-700/70 backdrop-blur-md p-8 rounded-xl text-center hover:bg-white/30 dark:hover:bg-slate-600/90 transition-all duration-300 shadow-lg dark:shadow-lg hover:shadow-xl border border-white/20 dark:border-slate-500"
        >
          <div className="text-4xl md:text-5xl font-bold text-[#1e56d6] mb-2">{stat.number}</div>
          <div className="text-lg dark:text-gray-300 text-gray-700">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#1e56d6] to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e56d6]/20 to-blue-900/20 opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your digital goals
            </p>
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
