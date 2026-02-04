"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animations/FadeInView';
import { PremiumButton, PremiumCard } from '@/components/animations/PremiumButton';

const RobotIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20m0 0l-.75 3M9 20H5m4 0h10m0 0l.75 3M19 20l-.75-3m0 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v11m0 0a2 2 0 002 2h10a2 2 0 002-2m0 0V9a2 2 0 00-2-2H7a2 2 0 00-2 2v11" /></svg>
);

const DataIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17s4.5 10.747 10 10.747c5.5 0 10-4.998 10-10.747S17.5 6.253 12 6.253z" /></svg>
);

const BrainIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.366 11.822c2.7-2.7 7.07-2.7 9.77 0m-13.08-3.503c3.89-3.89 10.236-3.89 14.127 0M9 12a3 3 0 11-6 0 3 3 0 016 0zm12 0a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

const AutomationIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
);

const MonitoringIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);

const SecurityIcon = () => (
  <svg className="w-12 h-12 text-[#1e56d6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);

export default function AIAutomation() {
  const capabilities = [
    {
      title: "LangChain & LangGraph Agents",
      description: "Production-ready AI agents with tool calling, memory, and reflection. We've deployed systems handling 100K+ conversations/month.",
      icon: RobotIcon
    },
    {
      title: "RAG Systems",
      description: "Retrieval-Augmented Generation with vector databases (Pinecone, Weaviate). Your data, your embeddings, your infrastructure.",
      icon: DataIcon
    },
    {
      title: "Custom ML Pipelines",
      description: "Training, fine-tuning, deployment. From Hugging Face models to custom PyTorch. MLOps with version control and A/B testing.",
      icon: BrainIcon
    },
    {
      title: "AI-Powered Automation",
      description: "Document processing, data extraction, classification. Cut manual work by 60-80% with production AI workflows.",
      icon: AutomationIcon
    },
    {
      title: "Production Monitoring",
      description: "Token usage tracking, latency monitoring, fallback systems. We make AI reliable and cost-effective.",
      icon: MonitoringIcon
    },
    {
      title: "On-Premise Options",
      description: "Not comfortable with OpenAI? We deploy Llama, Mistral, or other open-source models in your cloud.",
      icon: SecurityIcon
    }
  ];

  const useCases = [
    {
      title: "Customer Support Automation",
      description: "AI agents that handle L1 support tickets, escalate complex issues, learn from resolutions.",
      metric: "67% ticket reduction"
    },
    {
      title: "Document Intelligence",
      description: "Extract structured data from invoices, contracts, forms. Process thousands of documents automatically.",
      metric: "85% time savings"
    },
    {
      title: "Internal Knowledge Bases",
      description: "Chat with your company docs, codebases, wikis. RAG systems that actually understand context.",
      metric: "10x faster onboarding"
    },
    {
      title: "Sales & Marketing AI",
      description: "Lead qualification, email personalization, content generation at scale. Human oversight, AI execution.",
      metric: "3x conversion rates"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-gradient-to-br from-gray-950 via-gray-900 to-[#1e56d6]/10">
        <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-[#1e56d6]/10 border border-[#1e56d6]/30 rounded-full mb-6">
              <span className="text-[#1e56d6] font-semibold text-sm uppercase tracking-wide">AI Implementation</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              AI & Automation That Actually Works in Production
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-8 leading-relaxed">
              We build AI systems that run in your infrastructure, not ours. From LangChain agents to custom ML models, 
              we make AI practical and measurable. No hype, just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <PremiumButton variant="primary" size="lg">
                  Discuss Your AI Project
                </PremiumButton>
              </Link>
              <Link href="/casestudies">
                <PremiumButton variant="ghost" size="lg">
                  View AI Case Studies
                </PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What We Build
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Production AI systems with monitoring, fallbacks, and cost controls. Not proof-of-concepts—actual deployed systems.
            </p>
          </FadeInView>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {capabilities.map((capability, index) => (
              <StaggerItem key={index}>
                <PremiumCard className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-full hover:border-[#1e56d6]/50 transition-colors" hoverLift={4}>
                  <div className="mb-4">
                    <capability.icon />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{capability.description}</p>
                </PremiumCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              AI is only useful if it saves time or makes money. Here's how companies use our systems.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-[#1e56d6]/50 transition-colors">
                  <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="inline-block px-4 py-2 bg-[#1e56d6]/20 border border-[#1e56d6]/30 rounded-full">
                    <span className="text-[#1e56d6] font-bold text-sm">{useCase.metric}</span>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Why Not Just Use ChatGPT */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Not Just Use ChatGPT?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              ChatGPT is great for one-off tasks. Production AI needs custom models, your data, controlled environments, 
              monitoring, fallbacks, and integration with your existing systems. That's what we build.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-3">❌ Generic ChatGPT Wrapper</h3>
              <ul className="space-y-2 text-gray-400">
                <li>• No custom training on your data</li>
                <li>• Sends data to OpenAI servers</li>
                <li>• No control over costs or rate limits</li>
                <li>• Can't integrate with internal systems</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 border border-[#1e56d6]/50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-[#1e56d6]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                <h3 className="text-xl font-bold text-white">Custom AI System</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Fine-tuned on your specific use case</li>
                <li>• Runs in your infrastructure (on-prem option)</li>
                <li>• Cost controls and monitoring built-in</li>
                <li>• Full integration with your tech stack</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI Implementation Pricing
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Pilot projects start at $10K (4-6 weeks). Full production deployments: $30K-100K depending on complexity. 
              We'll scope exact costs after technical discovery.
            </p>
            <Link href="/contact">
              <PremiumButton variant="primary" size="lg">
                Schedule AI Consultation
              </PremiumButton>
            </Link>
          </FadeInView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1e56d6] to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy Production AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We'll review your use case, recommend the right approach, and give you a realistic timeline and budget.
            </p>
            <Link href="/contact">
              <PremiumButton variant="secondary" size="lg">
                Start Your AI Project
              </PremiumButton>
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
