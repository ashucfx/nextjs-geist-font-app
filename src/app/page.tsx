"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Solution {
  title: string;
  description: string;
  image: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    title: "Enterprise Solutions & Digital Transformation",
    description: "Secure, scalable infrastructure and bespoke applications designed for enterprise environments and regulatory compliance.",
    image: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    features: ["System Architecture", "Regulatory Compliance", "Secure Data Migration"]
  },
  {
    title: "Data Intelligence & Analytics",
    description: "Leverage advanced analytics and AI/ML strategies to derive actionable insights and drive policy or market decisions.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    features: ["Predictive Modeling", "Data Governance", "BI Dashboarding"]
  },
  {
    title: "Cloud Governance & Security",
    description: "Robust cloud architecture, DevOps automation, and continuous security monitoring for mission-critical operations.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    features: ["AWS/Azure/GCP Audit", "24/7 Managed Services", "Disaster Recovery Planning"]
  }
];


const SolutionCard: React.FC<{ solution: Solution, index: number }> = ({ solution, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative bg-gray-800/80 backdrop-blur-md rounded-xl overflow-hidden
                  hover:shadow-2xl transition-all duration-500 shadow-xl shadow-blue-900/10 border border-[#1e56d6]/30"
    >
      <div className="relative h-56">
        <Image
          src={solution.image}
          alt={solution.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white z-10">{solution.title}</h3>
      </div>
      <div className="relative p-6">
        <p className="text-gray-300 mb-6 text-base leading-relaxed">{solution.description}</p>
        <ul className="space-y-3">
          {solution.features.map((feature, i) => (
            <li key={i} className="text-gray-200 flex items-center font-medium text-sm">
              <svg className="w-4 h-4 text-[#1e56d6] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              {feature}
            </li>
          ))}
        </ul>
        <Link href="/services" className="mt-6 inline-block text-[#1e56d6] hover:text-blue-500 font-semibold transition-colors">
          Learn More &rarr;
        </Link>
      </div>
    </motion.div>
  );
};


export default function Home() {
  const stats = [
    { number: "100+", label: "Successful Engagements" },
    { number: "50+", label: "Satisfied Clients" },
    { number: "1+", label: "Year in Operation" },
    { number: "Tier 1", label: "Partnerships (Cloud/Data)" }
  ];

  return (
    <div className="overflow-hidden">
      <section className="min-h-[90vh] flex flex-col justify-center items-center transition-colors duration-500 border-b border-gray-800 
                          bg-gradient-to-br from-gray-950 to-gray-900"> 
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <div className="mb-8 flex flex-col items-center">
              <div className="relative w-20 h-20 mb-6"> 
                <Image
                  src="/images/lg-01.png"
                  alt="Ripple Nexus Logo"
                  fill
                  className="object-contain brightness-110"
                  sizes="80px"
                  priority
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Bridging Secure Technology to <br />
              <span className="bg-gradient-to-r from-[#1e56d6] to-blue-600 bg-clip-text text-transparent">
                Enterprise Impact
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-medium">
              We deliver **auditable, compliant, and scalable digital transformation** solutions for organizations requiring stability and growth.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link
                  href="/contact"
                  className="group relative px-10 py-4 bg-[#1e56d6] text-white rounded-lg text-lg font-semibold overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 block h-full"
                >
                  <span className="relative z-10">Engage with Our Experts &rarr;</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e56d6] to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link
                  href="/about"
                  className="px-10 py-4 bg-gray-800/60 text-gray-200 rounded-lg text-lg font-medium backdrop-blur-sm hover:bg-gray-700/80 transition-all duration-300 border border-gray-700 shadow-md block h-full"
                >
                  Read Our Authority Statement
                </Link>
              </motion.div>

            </div>
            
            <div className="pt-20">
              <Link
                href="#solutions"
                className="text-white/80 text-center cursor-pointer hover:text-white transition-colors group"
              >
                <p className="text-sm font-medium mb-1 group-hover:text-white transition-colors">Our Core Services</p>
                <motion.svg
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
              </Link>
            </div>
            
          </motion.div>
        </div>
      </section>

      <section id="solutions" className="py-24 bg-gradient-to-br from-gray-900 to-[#1e56d6]/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core Competencies for Digital Governance
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              End-to-end digital transformation services tailored to your organizational mandate and strategic goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-gray-950/90 to-gray-800/90 transition-colors duration-500 border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Track Record and Commitment
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Verified metrics that establish trust and our dedication to your long-term success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/70 backdrop-blur-md p-8 rounded-xl text-center
                            hover:bg-gray-700/80 transition-all duration-300 shadow-lg shadow-blue-900/10 border border-gray-700/50"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-[#1e56d6] mb-2">{stat.number}</div>
                <div className="text-lg text-gray-300 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-28 bg-gradient-to-br from-[#1e56d6] to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("/images/tech-pattern.svg")' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
              Initiate Your Secure Digital Strategy
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Contact us today to begin a confidential assessment of your organization's digital roadmap.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-block px-10 py-5 bg-white text-[#1e56d6] rounded-lg text-xl font-extrabold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl"
              >
                Request a Consultation
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  );
}