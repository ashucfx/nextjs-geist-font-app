import React from 'react';
import { BlogArticle, mockBlogArticles } from '@/data/blogData';

export async function fetchAllArticles(): Promise<BlogArticle[]> {
    await new Promise(resolve => setTimeout(resolve, 50)); 
    return mockBlogArticles;
}

export async function fetchArticleBySlug(slug: string): Promise<BlogArticle | null> {
    await new Promise(resolve => setTimeout(resolve, 50));
    const article = mockBlogArticles.find(a => a.slug === slug);

    if (article) {
        return {
            ...article,
            content: `<div class="prose prose-invert max-w-none text-gray-300">
                <p class="text-xl italic text-gray-400 mb-8">"${article.summary}"</p>
                <h2 class="text-3xl font-extrabold text-white mt-10 mb-4">Introduction & Core Thesis</h2>
                <p class="text-lg mb-6">The convergence of ${article.category.toLowerCase()} and modern cloud infrastructure is foundational to competitive advantage.</p>
                <h2 class="text-3xl font-extrabold text-white mt-10 mb-4">Deep Dive: Technology & Architecture</h2>
                <p class="text-lg mb-6">Our research indicates that organizations implementing Infrastructure as Code (IaC) see a 40% reduction in deployment failures.</p>
                <ul class="list-disc list-inside space-y-2 my-4">
                  <li><strong class="text-green-400">Performance Metrics:</strong> Utilizing services like Vercel or AWS Amplify for global deployment and edge caching.</li>
                  <li><strong class="text-green-400">Advanced Interactivity:</strong> This section would normally render your custom Sanity Portable Text components.</li>
                </ul>
                <h2 class="text-3xl font-extrabold text-white mt-10 mb-4 border-b border-gray-700 pb-2">Strategic Conclusion</h2>
                <p class="text-lg mb-6">
                    Success in the digital realm comes from unifying <strong class="text-blue-500">strategy, design, and reliable engineering.</strong> By adopting the methodologies discussed, your enterprise can achieve unprecedented stability and velocity.
                </p>
            </div>`,
            author: 'Ripple Nexus Research Team',
            date: 'October 15, 2025',
        } as BlogArticle;
    }
    return null;
}