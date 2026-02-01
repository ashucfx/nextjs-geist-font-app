import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { fetchArticleBySlug, fetchAllArticles } from '@/lib/sanity';
import type { BlogArticle } from '@/data/blogData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = await fetchAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article) {
    return { title: 'Post Not Found | Ripple Nexus' };
  }

  return {
    title: `${article.title} | Ripple Nexus Blog`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://www.theripplenexus.com/blog/${slug}`,
      images: [{ url: article.image }],
    },
  };
}


export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await fetchArticleBySlug(slug);

  if (!article || !article.content || !article.author || !article.date) {
    notFound(); 
  }

  const { title, summary, image, tags, author, date, readingTime, content } = article;

  return (
    <article className="pt-20 pb-20 bg-gray-900 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto mb-12">
          <Link href="/blog" className="text-[#1e56d6] hover:text-blue-500 transition-colors font-semibold mb-6 inline-block">
              &larr; Back to all Insights
          </Link>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-[#1e56d6] mb-6 font-semibold">{summary}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-400 border-t border-b border-gray-700 py-3">
            <span>By {author}</span>
            <span>|</span>
            <span>{date}</span>
            <span>|</span>
            <span>{readingTime} min read</span>
          </div>
        </div>

        <div className="relative w-full h-96 mb-12 rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover" 
            priority 
            sizes="(max-width: 1024px) 100vw, 75vw"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {content}
        </div>

        <div className="max-w-4xl mx-auto pt-10 mt-10 border-t border-gray-700">
          <div className="flex flex-wrap gap-2 mb-8">
              {tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-[#1e56d6]/10 text-[#1e56d6] text-sm font-medium rounded-full border border-[#1e56d6]/30">
                      {tag}
                  </span>
              ))}
          </div>
          
          <Link 
              href="/contact" 
              className="inline-block px-8 py-3 bg-[#1e56d6] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
              Discuss Your Strategy with Us
          </Link>
        </div>

      </div>
    </article>
  );
}