import React, { Suspense } from 'react';
import { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
  title: 'Case Studies | Ripple Nexus',
  description: 'View successful projects demonstrating our expertise in full-stack enterprise development, secure cloud infrastructure, digital strategy, and career branding.',
};

const FilterLoadingFallback = () => (
    <section className="py-20 bg-gray-900 min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">Our Success Portfolio</h2>
            <div className="flex flex-wrap gap-3 mb-12">
                <div className="h-8 w-24 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-8 w-32 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-8 w-20 bg-gray-700 rounded-full animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[1, 2, 3].map(i => (
                    <div key={i} className="bg-gray-800 h-96 rounded-xl animate-pulse shadow-lg"></div>
                ))}
            </div>
        </div>
    </section>
);

export default function CaseStudiesPageWrapper() {
    return (
        <Suspense fallback={<FilterLoadingFallback />}>
            <CaseStudiesClient />
        </Suspense>
    );
}