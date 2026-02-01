"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter, usePathname } from 'next/navigation'; 
import React from 'react';
import { BlogArticle } from '@/data/blogData';

interface BlogClientProps {
    initialArticles: BlogArticle[];
    allCategories: string[];
}

const ArticleCard: React.FC<{ article: BlogArticle }> = ({ article }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-xl border border-gray-700/50 
                   hover:shadow-3xl hover:shadow-[#1e56d6]/20 transition-all duration-300 cursor-pointer 
                   hover:bg-gray-700/70"
    >
        <div className="relative h-48 w-full overflow-hidden">
            <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full text-white bg-[#1e56d6] z-20">{article.category}</span>
        </div>

        <div className="p-6 space-y-4">
            <h3 className="text-xl font-extrabold text-white leading-tight">
                {article.title}
            </h3>
            <p className="text-gray-400 text-sm">{article.summary}</p>
            
            <div className="pt-4 border-t border-gray-700">
                <div className="flex justify-between items-center text-sm text-gray-400">
                    <span className="font-medium text-gray-300">
                        {article.readingTime} min read
                    </span>
                    <Link 
                        href={`/blog/${article.slug}`} 
                        className="text-[#1e56d6] font-semibold flex items-center group-hover:text-blue-400 group-hover:translate-x-1 transition-transform"
                    >
                        Read Post
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                    {article.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-xs font-medium text-[#1e56d6] bg-[#1e56d6]/10 rounded border border-[#1e56d6]/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

export default function BlogClient({ initialArticles, allCategories }: BlogClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname(); 

    const currentFilter = searchParams.get('category') || 'All';
    const [searchQuery, setSearchQuery] = useState('');
    const articlesPerPage = 6;
    const [visibleCount, setVisibleCount] = useState(articlesPerPage);
    
    const uniqueCategories: string[] = ['All', ...allCategories];

    const handleFilterChange = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (category === 'All') {
            params.delete('category');
        } else {
            params.set('category', category);
        }
        const queryString = params.toString();
        const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
        router.replace(newUrl, { scroll: false });
        setVisibleCount(articlesPerPage);
        setSearchQuery('');
    };

    const filteredArticles: BlogArticle[] = useMemo(() => {
        const filteredByCat = initialArticles.filter(article => {
            if (currentFilter === 'All') return true;
            return article.category === currentFilter;
        });

        if (!searchQuery) return filteredByCat;

        const query = searchQuery.toLowerCase();
        return filteredByCat.filter(article => 
            article.title.toLowerCase().includes(query) ||
            article.summary.toLowerCase().includes(query) ||
            article.tags.some(tag => tag.toLowerCase().includes(query))
        );
    }, [currentFilter, searchQuery, initialArticles]);
    
    const articlesToShow = filteredArticles.slice(0, visibleCount);
    const hasMoreArticles = filteredArticles.length > visibleCount;

    return (
        <>
            <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-gray-950 to-gray-900 border-b border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/70"></div>
                <div className="relative z-10 max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <p className="text-[#1e56d6] font-extrabold text-lg uppercase tracking-[0.2em] mb-4">INSIGHT & AUTHORITY</p>
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                            The Ripple Nexus Blog
                        </h1>
                        <p className="text-xl text-gray-300 max-w-4xl font-medium">
                            Deep analysis on digital transformation, cloud governance, and strategic career advancement.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-white mb-8">Latest Insights ({filteredArticles.length} Posts)</h2>

                    <div className="mb-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-1/3">
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setVisibleCount(articlesPerPage);
                                }}
                                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-[#1e56d6] focus:ring-1 focus:ring-[#1e56d6] transition-colors"
                            />
                        </div>
                        
                        <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full md:w-2/3">
                            {uniqueCategories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => handleFilterChange(category)}
                                    className={`
                                        px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 whitespace-nowrap
                                        ${currentFilter === category 
                                            ? 'bg-[#1e56d6] text-white shadow-lg' 
                                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        }
                                    `}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {articlesToShow.map((article) => (
                                <ArticleCard key={article.slug} article={article} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {filteredArticles.length === 0 && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="lg:col-span-3 text-center py-12 text-gray-400"
                        >
                            <p className="text-2xl font-semibold mb-2">No Articles Found</p>
                            <p>Try clearing the search filter or checking back later for new content.</p>
                        </motion.div>
                    )}

                    {hasMoreArticles && (
                        <div className="text-center mt-12">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setVisibleCount(prev => prev + articlesPerPage)}
                                className="inline-block px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-[#1e56d6] transition-colors shadow-lg"
                            >
                                Load More Articles ({filteredArticles.length - visibleCount} left)
                            </motion.button>
                        </div>
                    )}
                </div>
            </section>

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
                            Need Custom Content or Strategy?
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white text-[#1e56d6] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
                        >
                            Request a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}