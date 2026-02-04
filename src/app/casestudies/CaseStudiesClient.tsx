"use client";

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  caseStudies,
  getAllCategories,
  getAllIndustries,
  getAllTags,
  slugifyCaseStudy,
} from '@/data/caseStudies';

const CheckIcon = () => (
  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function CaseStudiesClient() {
  const [industryFilter, setIndustryFilter] = useState<string>('All');
  const [serviceFilter, setServiceFilter] = useState<string>('All');
  const [techFilter, setTechFilter] = useState<string>('All');

  const industries = useMemo(() => ['All', ...getAllIndustries()], []);
  const services = useMemo(() => ['All', ...getAllCategories()], []);
  const technologies = useMemo(() => ['All', ...getAllTags()], []);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const industryMatch = industryFilter === 'All' || study.industry === industryFilter;
      const serviceMatch = serviceFilter === 'All' || study.category === serviceFilter;
      const techMatch = techFilter === 'All' || study.tags.includes(techFilter);
      return industryMatch && serviceMatch && techMatch;
    });
  }, [industryFilter, serviceFilter, techFilter]);

  const resetFilters = () => {
    setIndustryFilter('All');
    setServiceFilter('All');
    setTechFilter('All');
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-[#0b1224] border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,86,214,0.18),_transparent_55%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-22">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <p className="text-[#7aa7ff] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Enterprise Delivery Proof
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Business outcomes delivered through systems that scale.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-5">
              Each case study documents a real operational challenge, the strategy behind the build, and the measurable impact created for the business.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-gray-300">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Enterprise-Ready</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Security-First Delivery</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Measured Impact</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-14 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Filter by focus</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Case Study Library ({filteredStudies.length})</h2>
              </div>
              <button
                onClick={resetFilters}
                className="text-sm text-blue-300 hover:text-white transition-colors self-start lg:self-auto"
              >
                Reset filters
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <label className="space-y-2 text-sm text-gray-300">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Industry</span>
                <select
                  value={industryFilter}
                  onChange={(event) => setIndustryFilter(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-blue-400/60 focus:outline-none"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry} className="text-gray-900">
                      {industry}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 text-sm text-gray-300">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Service Focus</span>
                <select
                  value={serviceFilter}
                  onChange={(event) => setServiceFilter(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-blue-400/60 focus:outline-none"
                >
                  {services.map((service) => (
                    <option key={service} value={service} className="text-gray-900">
                      {service}
                    </option>
                  ))}
                </select>
              </label>

              <label className="space-y-2 text-sm text-gray-300">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Technology</span>
                <select
                  value={techFilter}
                  onChange={(event) => setTechFilter(event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:border-blue-400/60 focus:outline-none"
                >
                  {technologies.map((tech) => (
                    <option key={tech} value={tech} className="text-gray-900">
                      {tech}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-950 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={sectionReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.03 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent shadow-[0_0_0_1px_rgba(30,86,214,0.1)] hover:shadow-[0_24px_80px_rgba(15,23,42,0.5)]"
              >
                <div className="relative h-44 sm:h-52">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-200/80">{study.category}</p>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mt-2 line-clamp-2">{study.title}</h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300">
                    <span className="font-medium">{study.industry}</span>
                    <span className="text-gray-400">Client: {study.client}</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Business Challenge</p>
                    <p className="text-sm text-gray-200 line-clamp-2">{study.challenge}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Outcome Highlight</p>
                    <p className="text-sm text-white font-semibold">{study.previewResult}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-gray-200 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-green-300">
                    <CheckIcon />
                    Client-verified outcome
                  </div>

                  <Link
                    href={`/casestudies/${slugifyCaseStudy(study.title)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors"
                  >
                    View full study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
/*
"use client";

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  caseStudies,
  getAllCategories,
  getAllIndustries,
  getAllTags,
  slugifyCaseStudy,
} from '@/data/caseStudies';

const CheckIcon = () => (
  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function CaseStudiesClient() {
  const [industryFilter, setIndustryFilter] = useState<string>('All');
  const [serviceFilter, setServiceFilter] = useState<string>('All');
  const [techFilter, setTechFilter] = useState<string>('All');

  const industries = useMemo(() => ['All', ...getAllIndustries()], []);
  const services = useMemo(() => ['All', ...getAllCategories()], []);
  const technologies = useMemo(() => ['All', ...getAllTags()], []);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const industryMatch = industryFilter === 'All' || study.industry === industryFilter;
      const serviceMatch = serviceFilter === 'All' || study.category === serviceFilter;
      const techMatch = techFilter === 'All' || study.tags.includes(techFilter);
      return industryMatch && serviceMatch && techMatch;
    });
  }, [industryFilter, serviceFilter, techFilter]);

  const resetFilters = () => {
    setIndustryFilter('All');
    setServiceFilter('All');
    setTechFilter('All');
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-[#0b1224] border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,86,214,0.18),_transparent_55%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-22">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <p className="text-[#7aa7ff] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Enterprise Delivery Proof
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Business outcomes delivered through systems that scale.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-5">
              Each case study documents a real operational challenge, the strategy behind the build, and the measurable impact created for the business.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-gray-300">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Enterprise-Ready</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Security-First Delivery</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Measured Impact</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-14 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Filter by focus</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Case Study Library ({filteredStudies.length})</h2>
              </div>
              <button
                onClick={resetFilters}
                className="text-sm text-blue-300 hover:text-white transition-colors self-start lg:self-auto"
              >
                Reset filters
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Industry</p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setIndustryFilter(industry)}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                        industryFilter === industry
                          ? 'bg-[#1e56d6] text-white border-[#1e56d6]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400/60'
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Service Focus</p>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => setServiceFilter(service)}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                        serviceFilter === service
                          ? 'bg-[#1e56d6] text-white border-[#1e56d6]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400/60'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Technology</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setTechFilter(tech)}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                        techFilter === tech
                          ? 'bg-[#1e56d6] text-white border-[#1e56d6]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400/60'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-950 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={sectionReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.03 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent shadow-[0_0_0_1px_rgba(30,86,214,0.1)] hover:shadow-[0_24px_80px_rgba(15,23,42,0.5)]"
              >
                <div className="relative h-44 sm:h-52">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-200/80">{study.category}</p>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mt-2 line-clamp-2">{study.title}</h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300">
                    <span className="font-medium">{study.industry}</span>
                    <span className="text-gray-400">Client: {study.client}</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Business Challenge</p>
                    <p className="text-sm text-gray-200 line-clamp-2">{study.challenge}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Outcome Highlight</p>
                    <p className="text-sm text-white font-semibold">{study.previewResult}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-gray-200 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-green-300">
                    <CheckIcon />
                    Client-verified outcome
                  </div>

                  <Link
                    href={`/casestudies/${slugifyCaseStudy(study.title)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors"
                  >
                    View full study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}"use client";

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  caseStudies,
  getAllCategories,
  getAllIndustries,
  getAllTags,
  slugifyCaseStudy,
} from '@/data/caseStudies';

const CheckIcon = () => (
  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function CaseStudiesClient() {
  const [industryFilter, setIndustryFilter] = useState<string>('All');
  const [serviceFilter, setServiceFilter] = useState<string>('All');
  const [techFilter, setTechFilter] = useState<string>('All');

  const industries = useMemo(() => ['All', ...getAllIndustries()], []);
  const services = useMemo(() => ['All', ...getAllCategories()], []);
  const technologies = useMemo(() => ['All', ...getAllTags()], []);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const industryMatch = industryFilter === 'All' || study.industry === industryFilter;
      const serviceMatch = serviceFilter === 'All' || study.category === serviceFilter;
      const techMatch = techFilter === 'All' || study.tags.includes(techFilter);
      return industryMatch && serviceMatch && techMatch;
    });
  }, [industryFilter, serviceFilter, techFilter]);

  const resetFilters = () => {
    setIndustryFilter('All');
    setServiceFilter('All');
    setTechFilter('All');
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-[#0b1224] border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,86,214,0.18),_transparent_55%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-22">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <p className="text-[#7aa7ff] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Enterprise Delivery Proof
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Business outcomes delivered through systems that scale.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-5">
              Each case study documents a real operational challenge, the strategy behind the build, and the measurable impact created for the business.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-gray-300">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Enterprise-Ready</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Security-First Delivery</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Measured Impact</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-14 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Filter by focus</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Case Study Library ({filteredStudies.length})</h2>
              </div>
              <button
                onClick={resetFilters}
                className="text-sm text-blue-300 hover:text-white transition-colors self-start lg:self-auto"
              >
                Reset filters
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Industry</p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setIndustryFilter(industry)}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                        industryFilter === industry
                          ? 'bg-[#1e56d6] text-white border-[#1e56d6]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400/60'
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Service Focus</p>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => setServiceFilter(service)}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                        serviceFilter === service
                          ? 'bg-[#1e56d6] text-white border-[#1e56d6]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400/60'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Technology</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setTechFilter(tech)}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                        techFilter === tech
                          ? 'bg-[#1e56d6] text-white border-[#1e56d6]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400/60'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-950 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={sectionReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.03 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent shadow-[0_0_0_1px_rgba(30,86,214,0.1)] hover:shadow-[0_24px_80px_rgba(15,23,42,0.5)]"
              >
                <div className="relative h-44 sm:h-52">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-200/80">{study.category}</p>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mt-2 line-clamp-2">{study.title}</h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300">
                    <span className="font-medium">{study.industry}</span>
                    <span className="text-gray-400">Client: {study.client}</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Business Challenge</p>
                    <p className="text-sm text-gray-200 line-clamp-2">{study.challenge}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Outcome Highlight</p>
                    <p className="text-sm text-white font-semibold">{study.previewResult}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-gray-200 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-green-300">
                    <CheckIcon />
                    Client-verified outcome
                  </div>

                  <Link
                    href={`/casestudies/${slugifyCaseStudy(study.title)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors"
                  >
                    View full study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}"use client";

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  caseStudies,
  getAllCategories,
  getAllIndustries,
  getAllTags,
  slugifyCaseStudy,
} from '@/data/caseStudies';

const CheckIcon = () => (
  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const sectionReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function CaseStudiesClient() {
  const [industryFilter, setIndustryFilter] = useState<string>('All');
  const [serviceFilter, setServiceFilter] = useState<string>('All');
  const [techFilter, setTechFilter] = useState<string>('All');

  const industries = useMemo(() => ['All', ...getAllIndustries()], []);
  const services = useMemo(() => ['All', ...getAllCategories()], []);
  const technologies = useMemo(() => ['All', ...getAllTags()], []);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter((study) => {
      const industryMatch = industryFilter === 'All' || study.industry === industryFilter;
      const serviceMatch = serviceFilter === 'All' || study.category === serviceFilter;
      const techMatch = techFilter === 'All' || study.tags.includes(techFilter);
      return industryMatch && serviceMatch && techMatch;
    });
  }, [industryFilter, serviceFilter, techFilter]);

  const resetFilters = () => {
    setIndustryFilter('All');
    setServiceFilter('All');
    setTechFilter('All');
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-[#0b1224] border-b border-gray-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(30,86,214,0.18),_transparent_55%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 md:py-22">
          <motion.div
            variants={sectionReveal}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <p className="text-[#7aa7ff] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Enterprise Delivery Proof
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Business outcomes delivered through systems that scale.
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-5">
              Each case study documents a real operational challenge, the strategy behind the build, and the measurable impact created for the business.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-gray-300">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Enterprise-Ready</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Security-First Delivery</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Measured Impact</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 sm:py-14 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={sectionReveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">Filter by focus</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Case Study Library ({filteredStudies.length})</h2>
              </div>
              <button
                onClick={resetFilters}
                className="text-sm text-blue-300 hover:text-white transition-colors self-start lg:self-auto"
              >
                Reset filters
              </button>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Industry</p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setIndustryFilter(industry)}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                        industryFilter === industry
                          ? 'bg-[#1e56d6] text-white border-[#1e56d6]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400/60'
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Service Focus</p>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => setServiceFilter(service)}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                        serviceFilter === service
                          ? 'bg-[#1e56d6] text-white border-[#1e56d6]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400/60'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Technology</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => setTechFilter(tech)}
                      className={`px-3 py-1.5 rounded-full text-xs sm:text-sm border transition-all ${
                        techFilter === tech
                          ? 'bg-[#1e56d6] text-white border-[#1e56d6]'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-blue-400/60'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-950 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={sectionReveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.03 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-transparent shadow-[0_0_0_1px_rgba(30,86,214,0.1)] hover:shadow-[0_24px_80px_rgba(15,23,42,0.5)]"
              >
                <div className="relative h-44 sm:h-52">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-200/80">{study.category}</p>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mt-2 line-clamp-2">{study.title}</h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300">
                    <span className="font-medium">{study.industry}</span>
                    <span className="text-gray-400">Client: {study.client}</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Business Challenge</p>
                    <p className="text-sm text-gray-200 line-clamp-2">{study.challenge}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Outcome Highlight</p>
                    <p className="text-sm text-white font-semibold">{study.previewResult}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-gray-200 bg-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-green-300">
                    <CheckIcon />
                    Client-verified outcome
                  </div>

                  <Link
                    href={`/casestudies/${slugifyCaseStudy(study.title)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors"
                  >
                    View full study
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
*/