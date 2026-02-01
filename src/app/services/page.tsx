"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Service {
  id?: number; 
  title: string;
  description: string;
  image: string;
  features: string[];
  details: React.ReactNode; 
  tag: string; 
}

const allServices: Service[] = [
  {
    title: "Enterprise Web Development",
    description: "Custom, scalable websites and applications for major organizations.",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg", 
    tag: "Core Technology",
    details: (
      <>
        We build secure, high-traffic web platforms, focusing on complex integration and long-term maintainability essential for enterprise environments.
      </>
    ),
    features: [
      "Custom Web Application Development",
      "E-commerce & B2B Solutions",
      "API Development & Integration",
      "CMS Implementation & Headless Architecture",
      "Progressive Web Apps (PWA)",
      "Legacy System Integration"
    ]
  },
  {
    title: "Mobile Application Strategy",
    description: "Native and cross-platform excellence for robust mobile experiences.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    tag: "Core Technology",
    details: (
      <>
        Our mobile solutions focus on security, performance, and intuitive UI/UX design to deliver high-engagement user applications across iOS and Android.
      </>
    ),
    features: [
      "Native iOS & Android Development",
      "Cross-platform Development (React Native/Flutter)",
      "Mobile App UI/UX Design",
      "App Maintenance & Support",
      "App Store Optimization (ASO)",
      "Embedded Systems Integration"
    ]
  },
  {
    title: "Advanced Digital Marketing",
    description: "Data-driven strategies for compliant, measurable growth.",
    image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg",
    tag: "Strategy",
    details: (
      <>
        We deploy advanced analytics and SEO methodologies to ensure your digital footprint is authoritative, compliant, and reaches the right audience.
      </>
    ),
    features: [
      "Search Engine Optimization (SEO) & Audits",
      "Targeted Social Media Campaigns",
      "Content Strategy & Production",
      "PPC Management (Google/Bing)",
      "Analytics & Performance Reporting",
      "Lead Nurturing Automation"
    ]
  },
  {
    title: "UI/UX and Design Systems",
    description: "Creating highly intuitive and professional user experiences.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
    tag: "Design",
    details: (
      <>
        We specialize in developing scalable Design Systems and conducting rigorous usability testing to ensure flawless interaction across all platforms and devices.
      </>
    ),
    features: [
      "User Interface (UI) Design",
      "User Experience (UX) Architecture",
      "Wireframing & Prototyping",
      "Design System Development (Tokens/Components)",
      "Accessibility (WCAG) Compliance",
      "Usability Testing & Iteration"
    ]
  },
  {
    title: "Cloud Governance & DevOps",
    description: "Scalable, secure cloud infrastructure management.",
    image: "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg",
    tag: "Infrastructure",
    details: (
      <>
        Our Cloud Governance services cover architecture, migration, and continuous security monitoring across AWS, Azure, and GCP, ensuring operational resilience.
      </>
    ),
    features: [
      "Cloud Infrastructure Setup (AWS/Azure/GCP)",
      "Managed Cloud Migration",
      "CI/CD Pipeline Implementation (DevOps)",
      "Disaster Recovery Planning",
      "Cloud Security & Compliance Audits",
      "Serverless Architecture Consulting"
    ]
  },
  {
    title: "Enterprise Systems (ERP/CRM)",
    description: "Comprehensive business systems for internal efficiency.",
    image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tag: "Business Systems",
    details: (
      <>
        We design and implement custom ERP (Enterprise Resource Planning) and CRM solutions tailored to streamline core business functions and boost organizational output.
      </>
    ),
    features: [
      "Bespoke ERP & CRM Solutions",
      "CRM Development & Integration",
      "Business Intelligence",
      "Custom Software Development",
      "Legacy System Modernization",
      "Enterprise Data Integration"
    ]
  },
  {
    id: 7,
    title: "Career & Professional Branding",
    description: "Optimize your personal brand for career advancement.",
    image: "https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg",
    tag: "Personal Strategy",
    details: (
      <>
        Leverage our strategic expertise to present your professional journey with maximum impact. We help position you for career advancement, assisting both **Executive and Mid-Career professionals** through expert digital and document optimization.
      </>
    ),
    features: [
      "Executive & Mid-Career Resume Revision",
      "ATS Compliant Document Formatting",
      "LinkedIn Profile Optimization (Banner & Picture)",
      "Targeted Cover Letter Composition",
      "Personalized Career Branding Strategy",
      "Interview Strategy Coaching"
    ]
  }
];


const ServiceDetailModal: React.FC<{ service: Service, onClose: () => void }> = ({ service, onClose }) => {
    React.useEffect(() => {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm overflow-y-auto cursor-pointer p-4 pt-20 sm:p-8"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl cursor-default my-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white hover:text-[#1e56d6] transition-colors z-50 p-2 rounded-full bg-gray-700/50"
                    aria-label="Close service details"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <Image src={service.image} alt={service.title} fill className="object-cover" sizes="100vw" />
                    <div className="absolute inset-0 bg-black/70 flex items-center p-8"> 
                        <h2 className="text-3xl font-extrabold text-white leading-tight">{service.title}</h2>
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <p className="text-lg font-medium text-gray-300">{service.details}</p> 
                    
                    <div className="border-t pt-4 border-gray-700">
                        <h3 className="text-2xl font-bold text-[#1e56d6] mb-4">What's Included</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center pt-4">
                        <Link 
                          href="/contact" 
                          onClick={onClose} 
                          className="inline-block px-8 py-3 bg-[#1e56d6] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Inquire About This Service
                        </Link>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};


export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };
    
  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-center bg-gradient-to-br from-gray-950 to-gray-900 border-b border-gray-800 transition-colors duration-500">
        
        <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <p className="text-lg font-semibold uppercase tracking-widest text-[#1e56d6] mb-2">Strategic Solutions</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
              Our Service Portfolio
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl">
              From enterprise architecture to specialized professional branding, we offer secure and comprehensive digital services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white mb-3">Our Core Expertise</h2>
            <p className="text-xl text-gray-400">Services are categorized for clear identification of our primary focus areas.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-2xl hover:border-[#1e56d6] transition-all duration-300 cursor-pointer"
                onClick={() => handleOpenModal(service)}
              >
                <div className="relative h-48 sm:h-56 md:h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full text-white z-20 ${service.tag === 'Personal Strategy' ? 'bg-green-600' : 'bg-[#1e56d6]'}`}>
                    {service.tag}
                  </span>
                  <h3 className="absolute bottom-4 left-4 right-4 text-base sm:text-lg md:text-xl font-bold text-white z-20 line-clamp-2">{service.title}</h3>
                </div>
                <div className="p-4 sm:p-6 space-y-4">
                  <h3 className="sr-only">{service.title}</h3> 
                  <p className="text-sm sm:text-base text-gray-400 line-clamp-3">{service.description}</p>
                  
                  <div className="pt-4 border-t border-gray-700">
                    <button className="text-[#1e56d6] font-semibold flex items-center group-hover:translate-x-1 transition-transform text-sm sm:text-base" aria-label={`View details for ${service.title}`}>
                        View Details 
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedService && <ServiceDetailModal service={selectedService} onClose={handleCloseModal} />}
      </AnimatePresence>


      <section className="py-20 bg-gradient-to-br from-[#1e56d6] to-blue-900 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#1e56d6] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Schedule Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}