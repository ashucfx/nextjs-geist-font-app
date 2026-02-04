import React, { Suspense } from 'react';
import { Metadata } from 'next';
import CaseStudiesClient from './CaseStudiesClient';

export const metadata: Metadata = {
    title: 'Case Studies | Ripple Nexus',
    description: 'Enterprise case studies showing measurable business outcomes, architecture decisions, and delivery impact across industries.',
};

const FilterLoadingFallback = () => (
    <section className="py-16 bg-gray-900 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-6">Case Study Library</h2>
            <div className="flex flex-wrap gap-3 mb-12">
                <div className="h-8 w-24 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-8 w-32 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="h-8 w-20 bg-gray-700 rounded-full animate-pulse"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-800 h-96 rounded-2xl animate-pulse shadow-lg"></div>
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