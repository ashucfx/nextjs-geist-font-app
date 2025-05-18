"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites that drive results",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Custom Website Development",
        "E-commerce Solutions",
        "Progressive Web Apps (PWA)",
        "Web Application Development",
        "CMS Development",
        "API Development & Integration"
      ]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform excellence",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-platform Development",
        "Mobile App UI/UX Design",
        "App Maintenance & Support",
        "App Store Optimization"
      ]
    },
    {
      title: "Digital Marketing",
      description: "Data-driven growth strategies",
      image: "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "PPC Advertising",
        "Analytics & Reporting"
      ]
    },
    {
      title: "UI/UX Design",
      description: "Intuitive user experiences",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Wireframing & Prototyping",
        "Design Systems",
        "Responsive Design",
        "Usability Testing"
      ]
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "Cloud Infrastructure Setup",
        "Cloud Migration",
        "DevOps Services",
        "Cloud Security",
        "Serverless Computing",
        "Cloud Consulting"
      ]
    },
    {
      title: "Enterprise Solutions",
      description: "Comprehensive business systems",
      image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: [
        "ERP Solutions",
        "CRM Development",
        "Business Intelligence",
        "Custom Software Development",
        "Legacy System Modernization",
        "Enterprise Integration"
      ]
    }
  ];

  return (
    <div>
      {/* Services Hero Section */}
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
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-[#1e56d6] mb-4">{service.title}</h2>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
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
              Ready to Transform Your Business?
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
