import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyDetailClient from './CaseStudyDetailClient';
import {
  caseStudies,
  getCaseStudyBySlug,
  slugifyCaseStudy,
} from '@/data/caseStudies';

export const generateStaticParams = async () => {
  return caseStudies.map((study) => ({ slug: slugifyCaseStudy(study.title) }));
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: 'Case Study | Ripple Nexus',
      description: 'Enterprise case study detailing measurable impact and delivery execution.',
    };
  }

  return {
    title: `${study.title} | Ripple Nexus Case Study`,
    description: `${study.previewResult} — ${study.previewMetric}.`,
    openGraph: {
      title: `${study.title} | Ripple Nexus`,
      description: study.previewResult,
      images: [{ url: study.image }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} | Ripple Nexus`,
      description: study.previewResult,
      images: [study.image],
    },
  };
};

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const index = caseStudies.findIndex((item) => item.id === study.id);
  const previous = index > 0 ? caseStudies[index - 1] : null;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    name: study.title,
    description: study.previewResult,
    about: study.category,
    industry: study.industry,
    image: study.image,
    publisher: {
      '@type': 'Organization',
      name: 'Ripple Nexus',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CaseStudyDetailClient
        study={study}
        previous={previous ? { slug: slugifyCaseStudy(previous.title), title: previous.title } : null}
        next={next ? { slug: slugifyCaseStudy(next.title), title: next.title } : null}
      />
    </>
  );
}