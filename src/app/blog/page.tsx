import React, { Suspense } from 'react';
import { Metadata } from 'next';
import BlogClient from './BlogClient';
import { fetchAllArticles } from '@/lib/sanity';
import { BlogArticle } from '@/data/blogData';

export const metadata: Metadata = {
    title: 'The Ripple Nexus Blog | Digital Strategy & Enterprise Insights',
    description: 'Deep dives and analysis on digital transformation, cloud governance, scalable enterprise architecture, and expert career branding strategies.',
};

const BlogLoadingFallback: React.FC = () => (
    <section className="py-20 bg-gray-900 min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">Latest Insights</h2>
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

const getAllCategories = (articles: BlogArticle[]): string[] => {
    const categories = new Set<string>();
    articles.forEach(article => article.category && categories.add(article.category));
    return Array.from(categories).sort();
};

export default async function BlogPageWrapper() {
    const articles: BlogArticle[] = await fetchAllArticles();
    const categories: string[] = getAllCategories(articles);

    return (
        <Suspense fallback={<BlogLoadingFallback />}>
            <BlogClient initialArticles={articles} allCategories={categories} />
        </Suspense>
    );
}