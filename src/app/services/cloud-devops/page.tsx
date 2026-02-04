"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FadeInView, StaggerContainer, StaggerItem } from '@/components/animations/FadeInView';
import { PremiumButton, PremiumCard } from '@/components/animations/PremiumButton';

export default function CloudDevOps() {
  const services = [
    {
      title: "Zero-Downtime Migrations",
      description: "Move from on-prem to AWS, GCP, or Azure without user disruption. Blue-green deployments, data sync, rollback plans.",
      stat: "50+ migrations, zero data loss"
    },
    {
      title: "Kubernetes Orchestration",
      description: "K8s cluster setup, Helm charts, auto-scaling policies. We handle complexity so you don't have to.",
      stat: "Managing 100+ pods in production"
    },
    {
      title: "CI/CD Pipelines",
      description: "GitHub Actions, GitLab CI, Jenkins—your choice. Automated testing, staging deploys, production releases.",
      stat: "Deploy to prod in <10 minutes"
    },
    {
      title: "Infrastructure as Code",
      description: "Terraform, CloudFormation, or Pulumi. Version-controlled infrastructure with audit trails.",
      stat: "100% reproducible environments"
    },
    {
      title: "Monitoring & Alerting",
      description: "Prometheus, Grafana, Datadog, or CloudWatch. Know when something breaks before your users do.",
      stat: "< 5 min mean time to alert"
    },
    {
      title: "Cost Optimization",
      description: "Right-sizing instances, reserved capacity, spot instances. Typical 30-40% cost reduction post-audit.",
      stat: "Average 35% cost savings"
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
              <span className="text-[#1e56d6] font-semibold text-sm uppercase tracking-wide">Infrastructure</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Cloud & DevOps Engineering
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mb-8 leading-relaxed">
              Zero-downtime migrations to AWS, GCP, Azure. Kubernetes, CI/CD, infrastructure as code. 
              We've done 50+ cloud migrations without losing a single byte of data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <PremiumButton variant="primary" size="lg">
                  Start Cloud Migration
                </PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Cloud infrastructure, DevOps automation, and site reliability engineering. Production-grade systems that scale.
            </p>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 h-full hover:border-[#1e56d6]/50 transition-colors">
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-sm text-[#1e56d6] font-semibold">{service.stat}</div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInView className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-lg text-gray-400">
              Moving to the cloud isn't magic. It's planning, testing, and executing with precision.
            </p>
          </FadeInView>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1: Assessment (Week 1-2)",
                details: "Infrastructure audit, dependency mapping, cost estimation, risk analysis."
              },
              {
                phase: "Phase 2: Architecture (Week 2-3)",
                details: "Cloud design, security review, disaster recovery planning, compliance check."
              },
              {
                phase: "Phase 3: Pilot Migration (Week 3-4)",
                details: "Migrate non-critical services first, validate monitoring, test rollback procedures."
              },
              {
                phase: "Phase 4: Production Migration (Week 5-8)",
                details: "Staged rollout, data sync, DNS cutover, 24/7 monitoring during transition."
              },
              {
                phase: "Phase 5: Optimization (Week 9+)",
                details: "Cost tuning, performance optimization, team training, documentation handoff."
              }
            ].map((step, index) => (
              <FadeInView key={index} delay={index * 0.1}>
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#1e56d6] mb-2">{step.phase}</h3>
                  <p className="text-gray-300">{step.details}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Migration & DevOps Pricing
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Cloud migrations: $20K-80K depending on complexity. Ongoing DevOps support: $5K-15K/month. 
              Fixed-price projects available after assessment.
            </p>
            <Link href="/contact">
              <PremiumButton variant="primary" size="lg">
                Get Migration Quote
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
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Free infrastructure assessment. We'll analyze your current setup and provide a detailed migration plan.
            </p>
            <Link href="/contact">
              <PremiumButton variant="secondary" size="lg">
                Schedule Assessment
              </PremiumButton>
            </Link>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
