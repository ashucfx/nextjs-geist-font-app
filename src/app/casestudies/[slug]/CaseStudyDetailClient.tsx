"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { CaseStudy } from '@/data/caseStudies';

interface NavigationItem {
  id: string;
  label: string;
}

const sectionItems: NavigationItem[] = [
  { id: 'context', label: 'Business Context' },
  { id: 'challenge', label: 'The Challenge' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'implementation', label: 'Implementation' },
  { id: 'impact', label: 'Measurable Impact' },
  { id: 'cta', label: 'Next Step' },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function CaseStudyDetailClient({
  study,
  previous,
  next,
}: {
  study: CaseStudy;
  previous?: { slug: string; title: string } | null;
  next?: { slug: string; title: string } | null;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const progressItems = useMemo(() => sectionItems, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(100);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(Math.round((scrolled / total) * 100));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-gray-950 text-white">
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1224] via-gray-950 to-black" />
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(30,86,214,0.24),_transparent_55%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div variants={reveal} initial="hidden" animate="show" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200/80">Case Study</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">{study.title}</h1>
              <p className="text-base sm:text-lg text-gray-300">
                {study.previewResult}
              </p>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-300">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">{study.industry}</span>
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5">{study.category}</span>
                <span className="px-3 py-1 rounded-full border border-blue-400/40 bg-blue-500/10 text-blue-200">{study.previewMetric}</span>
              </div>
              <div className="text-sm text-gray-400">
                Client: <span className="text-gray-200">{study.client}</span>
              </div>
            </div>

            <div className="relative h-56 sm:h-72 lg:h-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={study.image}
                alt={study.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="space-y-10">
            <motion.section id="context" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Business Context</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">Why this transformation mattered</h2>
              <p className="text-gray-300 leading-relaxed">
                {study.challenge}
              </p>
            </motion.section>

            <motion.section id="challenge" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">The Challenge</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">Operational blockers and business risk</h2>
              <p className="text-gray-300 leading-relaxed">{study.challenge}</p>
            </motion.section>

            <motion.section id="strategy" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Ripple Nexus Strategy</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">Decisioning, architecture, and delivery plan</h2>
              <p className="text-gray-300 leading-relaxed">{study.solution}</p>
            </motion.section>

            <motion.section id="implementation" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Implementation</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">Systems built and technical wins</h2>
              <p className="text-gray-300 leading-relaxed">{study.solution}</p>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section id="impact" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Measurable Impact</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">Business outcomes delivered</h2>
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6">
                <p className="text-blue-100 text-lg font-semibold">{study.previewMetric}</p>
                <p className="text-gray-200 mt-2">{study.previewResult}</p>
              </div>
              <p className="text-gray-300 leading-relaxed">{study.results}</p>
            </motion.section>

            <motion.section id="cta" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Conversion Bridge</p>
              <h2 className="text-2xl sm:text-3xl font-semibold">Planning something similar?</h2>
              <p className="text-gray-300">Let’s explore the right architecture and execution plan for your business.</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#1e56d6] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Start a conversation
              </Link>
            </motion.section>
          </div>

          <aside className="hidden lg:block sticky top-28 h-fit rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400">Progress</p>
            <div className="mt-4 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-5 space-y-3 text-sm text-gray-300">
              {progressItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="block hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <Link href="/casestudies" className="text-sm text-blue-300 hover:text-white transition-colors">
            ← Back to all case studies
          </Link>
          <div className="flex gap-4 text-sm text-gray-300">
            {previous && (
              <Link href={`/casestudies/${previous.slug}`} className="hover:text-white transition-colors">
                Previous: {previous.title}
              </Link>
            )}
            {next && (
              <Link href={`/casestudies/${next.slug}`} className="hover:text-white transition-colors">
                Next: {next.title}
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}