"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams, usePathname } from 'next/navigation'; 
import React from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);
const TimeIcon = () => (
  <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const GoalIcon = () => (
  <svg className="w-5 h-5 text-[#1e56d6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const ErpIcon = () => (
  <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);


interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  previewResult: string;
  previewMetric: string;
  image: string;
  challenge: string;
  solution: string;
  results: string;
  tags: string[];
  category: 'Website Development' | 'App Development' | 'UI/UX' | 'Enterprise Solutions' | 'Digital Marketing' | 'Professional & Career Branding';
}

const caseStudies: CaseStudy[] = [
  { id: 1, title: "Public Sector Data Modernization & Compliance", client: "National Regulatory Authority (NRA)", industry: "Public Sector Governance", previewResult: "Reduced citizen approval waiting times by 75%", previewMetric: "75% Efficiency Gain", image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Outdated legacy systems caused excessive processing delays...", solution: "Implemented a custom, serverless cloud architecture...", results: "Achieved the target 75% reduction...", tags: ["Cloud Security", "Real-Time Analytics", "Compliance"], category: 'Enterprise Solutions', },
  { id: 2, title: "High-Traffic E-Commerce Platform Scalability", client: "Ascend Fintech", industry: "Financial Services", previewResult: "Handled 400% traffic spike with guaranteed 99.99% uptime", previewMetric: "99.99% Uptime", image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg", challenge: "The prior platform suffered constant downtime during peak trading hours...", solution: "Re-engineered the platform using resilient Kubernetes orchestration...", results: "The new architecture successfully managed a 400% increase...", tags: ["DevOps", "Kubernetes", "Scalability", "E-commerce"], category: 'Enterprise Solutions', },
  { id: 3, title: "Bespoke ERP Implementation & Integration", client: "Global Logistics Corp.", industry: "Logistics & Operations", previewResult: "Reduced overall operating logistics costs by 32%", previewMetric: "32% Cost Reduction", image: "https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Global Logistics faced severe bottlenecks due to disparate systems...", solution: "Developed a custom ERP solution focusing on resource allocation...", results: "The unified ERP provided management with real-time operational oversight...", tags: ["ERP Software", "Mobile App Dev", "Machine Learning"], category: 'Enterprise Solutions', },
  { id: 5, title: "Legacy API Modernization & Integration", client: "HealthBridge Solutions", industry: "Healthcare Technology", previewResult: "Achieved 99.9% API reliability and reduced latency by 80%", previewMetric: "80% Latency Reduction", image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg", challenge: "HealthBridge faced critical instability and scaling limits due to deprecated APIs...", solution: "Implemented a full API modernization strategy, migrating services to a secure GraphQL gateway...", results: "The modernized system delivered 99.9% API reliability...", tags: ["API Development", "Microservices", "GraphQL", "Security"], category: 'Enterprise Solutions', },
  { id: 20, title: "AI-Driven Supply Chain Predictability", client: "National Retail Chain", industry: "Retail & Logistics", previewResult: "Reduced inventory holding costs by 18%", previewMetric: "18% Cost Reduction", image: "https://images.pexels.com/photos/6238692/pexels-photo-6238692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Inaccurate demand forecasting led to frequent stockouts and excessive warehouse costs...", solution: "Developed and integrated a custom ML model to analyze historical sales...", results: "The AI system provided 95% forecast accuracy...", tags: ["Machine Learning", "Cloud Analytics", "Supply Chain"], category: 'Enterprise Solutions', },
  { id: 21, title: "Secure Cloud Migration for Fintech", client: "Apex Trust Bank", industry: "Banking & Finance", previewResult: "Achieved 0 security breaches during 10TB data migration", previewMetric: "Zero Downtime/Breaches", image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Client needed to migrate all core banking applications and 10TB of sensitive customer data to a private cloud...", solution: "Implemented a phased, hybrid cloud strategy (Azure) with end-to-end encryption...", results: "The migration was completed ahead of schedule with zero data loss...", tags: ["Cloud Security", "Compliance", "DevOps"], category: 'Enterprise Solutions', },
  { id: 22, title: "DevOps Transformation for Software Delivery", client: "Innovate Labs", industry: "B2B SaaS", previewResult: "Reduced mean time to deployment (MTTD) from 7 days to 4 hours", previewMetric: "97% Deployment Speed Increase", image: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Manual release pipelines caused slow deployments, leading to delayed features and frequent rollback emergencies.", solution: "Implemented robust CI/CD pipelines (GitLab/Jenkins) using Kubernetes and Terraform...", results: "Feature delivery became fully automated and non-disruptive...", tags: ["DevOps", "Kubernetes", "CI/CD", "IaC"], category: 'Enterprise Solutions', },

  { id: 4, title: "Enterprise Website Redesign for Conversion", client: "Fortress Insurance Group", industry: "Insurance & Services", previewResult: "Increased digital lead generation by 65%", previewMetric: "65% Lead Growth", image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg", challenge: "The existing corporate website was outdated, non-responsive...", solution: "Executed a complete, secure website redesign focusing on UX/UI best practices...", results: "The new website architecture successfully boosted organic traffic...", tags: ["Web Development", "UX/UI Design", "SEO", "CMS Integration"], category: 'Website Development', },
  { id: 24, title: "Headless E-commerce Platform Build", client: "Luxury Goods Boutique", industry: "High-End Retail", previewResult: "Achieved 95+ Google PageSpeed Score (Desktop/Mobile)", previewMetric: "95+ PageSpeed Score", image: "https://images.pexels.com/photos/1766604/pexels-photo-1766604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The client needed an extremely fast, high-security e-commerce site...", solution: "Built a headless architecture (Next.js frontend, Shopify API backend)...", results: "The site's superior performance significantly reduced bounce rate...", tags: ["Web Development", "Headless CMS", "E-commerce", "Performance Optimization"], category: 'Website Development', },
  { id: 25, title: "Custom Booking Portal for Healthcare", client: "Regional Clinic Network", industry: "Healthcare Services", previewResult: "Automated 85% of patient scheduling via the web", previewMetric: "85% Scheduling Automation", image: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Clinic staff were overwhelmed by appointment calls, and the existing website offered no integrated, HIPAA-compliant booking option.", solution: "Developed a custom, secure web portal integrated directly with the clinic's EMR system...", results: "The portal drastically reduced administrative overhead...", tags: ["Web Development", "API Integration", "Security", "Compliance"], category: 'Website Development', },
  { id: 26, title: "Multilingual Corporate Blog & CMS Setup", client: "Global Manufacturing Group", industry: "Industrial Manufacturing", previewResult: "Successfully launched content in 5 languages", previewMetric: "5-Language Rollout", image: "https://images.pexels.com/photos/6683838/pexels-photo-6683838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Managing corporate news and technical content across multiple regions required separate, poorly integrated websites...", solution: "Implemented a central, robust CMS (Contentful/Strapi) designed for multilingual content management...", results: "Streamlined content operations, allowing regional managers to publish localized updates efficiently...", tags: ["CMS Integration", "Web Development", "Multilingual"], category: 'Website Development', },
  { id: 27, title: "High-Performance Microsite for Event Registration", client: "Industry Conference Organizer", industry: "Events & Media", previewResult: "Converted 25% more visitors into registered attendees", previewMetric: "25% Conversion Boost", image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The previous registration page was slow and had a complex checkout flow...", solution: "Designed and built an ultra-fast, single-page microsite optimized for mobile...", results: "The optimized flow resulted in a measurable 25% lift in completed registrations...", tags: ["Web Development", "Performance Optimization", "UX/UI Design"], category: 'Website Development', },

  { id: 17, title: "SaaS Product Dashboard UX/UI Optimization", client: "Nexus Analytics", industry: "B2B Software", previewResult: "Reduced critical task completion time by 30%", previewMetric: "30% Time Savings", image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The B2B SaaS dashboard was visually complex, causing high user frustration...", solution: "Conducted extensive user research, established a design system, and implemented a simplified dashboard structure...", results: "The enhanced UI/UX dramatically improved customer satisfaction scores...", tags: ["UI/UX Design", "User Research", "Design System"], category: 'UI/UX', },
  { id: 28, title: "Mobile App Onboarding Flow Redesign", client: "Fitness Tracker Startup", industry: "Health & Wellness", previewResult: "Cut new user abandonment rate during signup by 20%", previewMetric: "20% Drop-off Reduction", image: "https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "A complicated 7-step onboarding process led to a high percentage of new users abandoning the app...", solution: "Streamlined the flow to 3 essential steps, using clear visual feedback...", results: "The simplified and more engaging UX reduced friction...", tags: ["UI/UX Design", "Mobile App Dev", "User Flow Optimization"], category: 'UI/UX', },
  { id: 29, title: "Accessibility Audit & Remediation (WCAG 2.1)", client: "Municipal Government Portal", industry: "Public Sector", previewResult: "Achieved full WCAG 2.1 AA compliance", previewMetric: "100% Compliance", image: "https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Client needed to meet strict legal accessibility standards (WCAG) for their public-facing citizen services portal.", solution: "Conducted a comprehensive audit across all UI elements, provided detailed remediation reports...", results: "The portal achieved full compliance, opening up essential services to all citizens...", tags: ["UI/UX Design", "Accessibility (A11Y)", "Compliance"], category: 'UI/UX', },
  { id: 30, title: "E-commerce Checkout Flow Conversion Boost", client: "Home Decor Retailer", industry: "E-commerce", previewResult: "Increased successful checkout rate by 12%", previewMetric: "12% Revenue Uplift", image: "https://images.pexels.com/photos/4132338/pexels-photo-4132338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The complex and lengthy checkout process resulted in a high number of abandoned carts...", solution: "Performed A/B testing on a simplified one-page checkout concept...", results: "The iterative UX changes reduced cart abandonment significantly...", tags: ["UI/UX Design", "Conversion Rate Optimization (CRO)", "E-commerce"], category: 'UI/UX', },
  { id: 31, title: "Enterprise Software Interface Modernization", client: "Legacy HR Platform", industry: "Human Resources", previewResult: "Reduced training time for new users by 40%", previewMetric: "40% Training Time Reduction", image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The outdated HR software interface was counter-intuitive, necessitating extensive, costly training...", solution: "Applied modern, minimal UI principles to simplify navigation...", results: "The intuitive new interface made the platform largely self-explanatory...", tags: ["UI/UX Design", "Enterprise Software", "Design System"], category: 'UI/UX', },
  
  { id: 18, title: "Cross-Platform Mobile App for Field Services", client: "QuickFix Maintenance", industry: "Field Operations", previewResult: "Enabled 100% paperless field reporting", previewMetric: "100% Digital Adoption", image: "https://images.pexels.com/photos/1036329/pexels-photo-1036329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Field technicians relied on paper forms, leading to data entry errors...", solution: "Developed an intuitive cross-platform (iOS/Android) mobile application integrated with their existing ERP...", results: "Field reports are now instant and error-free...", tags: ["Mobile App Dev", "iOS/Android", "Integration"], category: 'App Development', },
  { id: 32, title: "Wearable Device Data Synchronization App", client: "Sports Tech Innovator", industry: "Health & Wearables", previewResult: "Achieved 99.9% data transfer reliability", previewMetric: "99.9% Reliability", image: "https://images.pexels.com/photos/668297/pexels-photo-668297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Developing a reliable, low-latency mobile app to pair with and stream real-time sensor data from a new fitness wearable was complex.", solution: "Utilized native mobile development (Swift/Kotlin) and Bluetooth Low Energy (BLE) protocols...", results: "The app provides instant data visualization and transfer...", tags: ["Mobile App Dev", "IoT/Wearables", "Native Development"], category: 'App Development', },
  { id: 33, title: "Hyperlocal Service Marketplace App", client: "Community Connect", industry: "Local Services", previewResult: "Onboarded 5,000 service providers in launch region", previewMetric: "5,000 Providers", image: "https://images.pexels.com/photos/317383/pexels-photo-317383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Building a complex two-sided marketplace app (user/provider) with dynamic pricing and location-based matching was a significant development hurdle.", solution: "Developed a secure backend infrastructure with geo-spatial queries and a robust React Native frontend...", results: "The stable platform facilitated rapid scaling...", tags: ["Mobile App Dev", "Marketplace", "React Native", "Geo-Location"], category: 'App Development', },
  { id: 34, title: "Augmented Reality (AR) Product Visualization App", client: "Furniture Manufacturer", industry: "E-commerce/Retail", previewResult: "Reduced product returns due to size/fit issues by 22%", previewMetric: "22% Return Reduction", image: "https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Customers often returned furniture because they couldn't accurately visualize how large items would fit in their homes.", solution: "Developed an AR application feature that uses the phone's camera to place 3D models of furniture directly into the user's space.", results: "The AR feature provided accurate visualization...", tags: ["Mobile App Dev", "Augmented Reality (AR)", "3D Rendering"], category: 'App Development', },
  { id: 35, title: "Educational Content Delivery App (EdTech)", client: "Global Language School", industry: "Education Technology", previewResult: "Achieved 4.8/5.0 average user rating in both app stores", previewMetric: "4.8/5.0 Rating", image: "https://images.pexels.com/photos/317381/pexels-photo-317381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Client needed a highly engaging, offline-capable mobile app to deliver their premium course content worldwide.", solution: "Built a robust content management system API and a cross-platform app optimized for offline data synchronization...", results: "The app's seamless performance and reliability led to overwhelmingly positive user reviews...", tags: ["Mobile App Dev", "EdTech", "Offline Sync", "Content Delivery"], category: 'App Development', },

  { id: 19, title: "Lead Generation Campaign for Niche Industry", client: "Precision Metals Inc.", industry: "Specialized Manufacturing", previewResult: "Reduced Cost Per Qualified Lead (CPQL) by 45%", previewMetric: "45% CPQL Reduction", image: "https://images.pexels.com/photos/5673487/pexels-photo-5673487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The client's previous digital campaigns targeted too broadly, leading to high ad spend...", solution: "Implemented a hyper-targeted SEO and PPC strategy focused on long-tail industrial keywords...", results: "The focused strategy slashed wasted ad spend and delivered a 45% reduction in CPQL...", tags: ["SEO", "PPC/SEM", "Content Strategy"], category: 'Digital Marketing', },
  { id: 36, title: "Local SEO Strategy for Multi-Location Retail", client: "City Auto Services", industry: "Automotive Services", previewResult: "Achieved 'Map Pack' ranking for 80% of regional locations", previewMetric: "80% Map Pack Success", image: "https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Each of the client's 15 service locations lacked visibility in local search results and Google Maps listings.", solution: "Implemented a comprehensive Local SEO strategy, including GMB optimization, citation building...", results: "Increased local organic traffic by over 120% and secured high visibility for most key locations...", tags: ["SEO", "Local Marketing", "Content Strategy"], category: 'Digital Marketing', },
  { id: 37, title: "Social Media Funnel for Subscription Service", client: "Gourmet Meal Kits", industry: "Food & Beverage", previewResult: "Acquired 15,000 new subscribers in 6 months", previewMetric: "15,000 New Subs", image: "https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The brand struggled to convert social media followers into paying, long-term subscription customers.", solution: "Designed a multi-stage social media funnel (Facebook/Instagram/TikTok) from awareness video content...", results: "The optimized funnel drove massive volume and high-quality traffic...", tags: ["Digital Marketing", "Social Media Marketing", "Content Strategy", "CRO"], category: 'Digital Marketing', },
  { id: 38, title: "Email Marketing Automation and Segmentation", client: "Travel & Hospitality Group", industry: "Tourism", previewResult: "Increased email revenue contribution by 35%", previewMetric: "35% Revenue Increase", image: "https://images.pexels.com/photos/3184393/pexels-photo-3184393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Generic, non-segmented email campaigns were ignored by subscribers, leading to low open and click-through rates.", solution: "Integrated a new email marketing platform and implemented dynamic segmentation based on user purchase history...", results: "Personalized emails saw a 150% increase in open rates and a 35% growth in total revenue...", tags: ["Digital Marketing", "Marketing Automation", "CRM Integration"], category: 'Digital Marketing', },
  { id: 39, title: "Content Marketing Strategy for B2B Authority", client: "Cyber Security Firm", industry: "Enterprise Security", previewResult: "Tripled organic impressions and doubled demo requests", previewMetric: "2x Demo Requests", image: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The security firm needed to establish itself as a trusted thought leader to attract high-value enterprise clients...", solution: "Developed an 'Authority Content' strategy focused on white papers, detailed guides, and proprietary research...", results: "The new content strategy rapidly drove high-intent organic traffic...", tags: ["Digital Marketing", "Content Strategy", "SEO", "Thought Leadership"], category: 'Digital Marketing', },

  { id: 6, title: "CTO Thought Leadership Platform Launch", client: "E. Patel, Tech Innovator", industry: "Executive Positioning", previewResult: "Increased verified LinkedIn engagement by 150%", previewMetric: "+150% Engagement", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "A C-Suite executive needed to transition their industry reputation into a measurable digital presence...", solution: "Developed a comprehensive digital strategy, including a custom personal website...", results: "The project successfully positioned the client as a leading industry voice...", tags: ["Career Branding", "Professional Branding", "Executive Positioning", "LinkedIn Strategy"], category: 'Professional & Career Branding', },
  { id: 7, title: "Mid-Career Pivot Digital Profile Re-Alignment", client: "S. Chen, Finance to AI", industry: "Professional Rebranding", previewResult: "Secured 8 high-level interviews in 90 days", previewMetric: "8 Interviews Secured", image: "https://images.pexels.com/photos/5212359/pexels-photo-5212359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Client struggled to align existing career history with a desired pivot into the AI sector...", solution: "Executed a targeted personal brand overhaul focusing on transferrable skills...", results: "Achieved immediate interest from target companies...", tags: ["Career Branding", "Professional Branding", "Resume/CV Optimization", "LinkedIn Strategy"], category: 'Professional & Career Branding', },
  { id: 8, title: "Consultant-to-Founder Brand Transition", client: "A. Lee, Management Consultant", industry: "Startup Founder Branding", previewResult: "Fundraising pitch conversion rate increased by 40%", previewMetric: "40% Pitch Conversion", image: "https://images.pexels.com/photos/3184307/pexels-photo-3184307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The founder's personal brand still reflected a corporate consultant...", solution: "Crafted a narrative-driven personal website and pitch deck...", results: "The clearer, bolder brand narrative resonated with investors...", tags: ["Career Branding", "Startup Consulting", "Executive Positioning", "Content Strategy"], category: 'Professional & Career Branding', },
  { id: 9, title: "Academic-to-Industry Transition Branding", client: "Dr. K. Sharma, Research Scientist", industry: "R&D and Pharma", previewResult: "Successfully entered the industry at Senior Director Level", previewMetric: "Seamless Transition", image: "https://images.pexels.com/photos/4033095/pexels-photo-4033095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "A leading scientist needed to translate complex academic achievements into tangible, commercial-facing business value...", solution: "Developed an industry-focused professional portfolio...", results: "The client was immediately recognized as a high-potential leader...", tags: ["Career Branding", "Professional Branding", "Resume/CV Optimization"], category: 'Professional & Career Branding', },
  { id: 10, title: "Remote CEO Global Digital Footprint", client: "Global SaaS Startup", industry: "Technology Leadership", previewResult: "Secured 3 International Keynote Speaking Engagements", previewMetric: "Global Recognition", image: "https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The CEO was physically remote, limiting networking and thought leadership opportunities...", solution: "Implemented a focused social media content strategy (primarily LinkedIn)...", results: "The CEO's digital presence grew, leading to invitations for major industry conferences...", tags: ["Career Branding", "Executive Positioning", "LinkedIn Strategy", "Content Strategy"], category: 'Professional & Career Branding', },
  { id: 11, title: "Board Member Profile Enhancement & Networking", client: "M. Ramirez, Former CFO", industry: "Corporate Governance", previewResult: "Joined 2 new corporate boards within 6 months", previewMetric: "100% Goal Achievement", image: "https://images.pexels.com/photos/3861751/pexels-photo-3861751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Client aimed to expand their non-executive director portfolio...", solution: "Focused on highlighting governance expertise, risk management...", results: "The targeted messaging successfully attracted interest from nominating committees...", tags: ["Professional Branding", "Executive Positioning"], category: 'Professional & Career Branding', },
  { id: 12, title: "Federal Government Resume Overhaul", client: "J. Davies, Senior Analyst", industry: "Public Service", previewResult: "Passed critical ATS screening and received initial interview", previewMetric: "100% ATS Compliance", image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Client's detailed public sector CV failed to pass Applicant Tracking System (ATS) checks...", solution: "Reformatted and keyword-optimized the CV to meet specific federal hiring ATS requirements...", results: "The updated document achieved full ATS compliance...", tags: ["Resume/CV Optimization", "ATS Compliance", "Career Coaching"], category: 'Professional & Career Branding', },
  { id: 13, title: "Tech Sales Director Portfolio Refresh", client: "R. Sharma, Sales VP", industry: "SaaS Technology", previewResult: "Reduced job search time by 4 weeks and increased salary negotiation leverage", previewMetric: "4 Week Search Reduction", image: "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The client's resume focused too heavily on day-to-day tasks instead of quantifiable revenue achievements...", solution: "Re-centered the resume on revenue figures, leadership impact, and market expansion metrics...", results: "The metrics-driven portfolio immediately attracted high-growth companies...", tags: ["Resume/CV Optimization", "Executive Positioning", "Career Branding"], category: 'Professional & Career Branding', },
  { id: 14, title: "Non-Profit Executive Director CV Conversion", client: "L. Kinsley, Program Director", industry: "Non-Profit Sector", previewResult: "Successfully translated philanthropic success into corporate value terminology", previewMetric: "Executive Director Placement", image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Client struggled to articulate their fundraising and community success in a way that appealed to corporate boards...", solution: "Created a dual-purpose resume emphasizing strategic planning, budget management...", results: "The client was hired as the Executive Director of a large national foundation...", tags: ["Resume/CV Optimization", "Professional Branding"], category: 'Professional & Career Branding', },
  { id: 15, title: "Military Veteran Resume Translation", client: "Cpt. A. Johnson, Project Manager", industry: "Defense to Civilian Tech", previewResult: "Secured first civilian tech project management role", previewMetric: "1st Civilian Role Secured", image: "https://images.pexels.com/photos/5699195/pexels-photo-5699195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Military jargon and highly specific defense experience were confusing civilian recruiters...", solution: "Systematically translated all military titles, experience, and jargon into relevant civilian project management...", results: "The modernized resume allowed the client's skills to be clearly understood...", tags: ["Resume/CV Optimization", "Career Coaching"], category: 'Professional & Career Branding', },
  { id: 16, title: "Early Career Technical Resume Design", client: "M. Wu, Recent Computer Science Grad", industry: "Entry-Level Software", previewResult: "Increased response rate from Tier-1 tech companies by 50%", previewMetric: "+50% Response Rate", image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Client's resume was cluttered with academic details and lacked focus on practical coding projects...", solution: "Redesigned the CV to prioritize hands-on projects, quantifiable contributions to team goals...", results: "The professional, project-focused resume successfully passed screening...", tags: ["Resume/CV Optimization", "Web Development"], category: 'Professional & Career Branding', },
  { id: 40, title: "Fractional Executive Profile Development", client: "C. Jones, Portfolio Consultant", industry: "Consulting & Interim Leadership", previewResult: "Increased new contract acquisition rate by 30%", previewMetric: "30% Contract Boost", image: "https://images.pexels.com/photos/3861963/pexels-photo-3861963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The client needed a specialized brand identity to market themselves as a fractional/interim executive...", solution: "Developed multi-format executive biographies and a clear service positioning framework...", results: "The targeted branding clarified the client's unique value...", tags: ["Executive Positioning", "Professional Branding", "Niche Marketing"], category: 'Professional & Career Branding', },
  { id: 41, title: "Post-Acquisition Integration Leadership Branding", client: "Acquired Startup CEO", industry: "M&A Transition", previewResult: "Retained key leadership position post-merger", previewMetric: "Leadership Retention", image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The acquired CEO faced uncertainty about their role in the merged entity...", solution: "Crafted a strategic internal and external communication plan that highlighted the CEO's critical role...", results: "The focused communication ensured the CEO was retained...", tags: ["Executive Positioning", "Career Branding", "Strategic Communication"], category: 'Professional & Career Branding', },
  { id: 42, title: "LinkedIn Influence Strategy for Recruiter Outreach", client: "G. Lopez, Software Developer", industry: "Tech Recruitment", previewResult: "Received 5x more inbound recruiter messages per week", previewMetric: "5x Inbound Interest", image: "https://images.pexels.com/photos/3184422/pexels-photo-3184422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The client was actively job searching but their LinkedIn profile was passive, yielding few inbound opportunities...", solution: "Fully optimized the LinkedIn headline, summary, and experience sections for target keywords...", results: "The profile became a passive income generator of job leads...", tags: ["LinkedIn Strategy", "Resume/CV Optimization", "Career Coaching"], category: 'Professional & Career Branding', },
  { id: 43, title: "Technical Architect Career Path Definition", client: "D. Singh, Senior Engineer", industry: "Cloud Architecture", previewResult: "Secured promotion and 25% salary increase", previewMetric: "25% Salary Increase", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Client was stuck in a senior engineer role and needed a clear strategy and documentation to move into a high-level Architect position.", solution: "Developed a focused 'Career Roadmap' outlining necessary skill gaps, created a targeted promotion dossier...", results: "The clear, professionally articulated plan successfully led to an internal promotion...", tags: ["Career Coaching", "Executive Positioning", "Professional Branding"], category: 'Professional & Career Branding', },
  { id: 44, title: "High-Security Client Data Portal for Legal Firm", client: "Justice & Partners LLP", industry: "Legal Services & Compliance", previewResult: "Achieved zero unauthorized access incidents post-launch", previewMetric: "Zero Security Incidents", image: "https://images.pexels.com/photos/3861757/pexels-photo-3861757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The firm needed a secure portal for clients to share highly sensitive legal documents, replacing insecure email chains.", solution: "Developed a modern, encrypted portal using Next.js and secure API endpoints, implementing role-based access control (RBAC) and multi-factor authentication (MFA).", results: "The new portal ensured complete compliance with data protection laws (GDPR/CCPA) and streamlined client communication.", tags: ["Web Development", "Security", "Compliance", "API Integration"], category: 'Website Development', },
  { id: 45, title: "Public Sector Grant Application System Overhaul", client: "State Economic Development Agency", industry: "Government & Public Services", previewResult: "Reduced application submission time from 45 mins to 8 mins", previewMetric: "82% Time Reduction", image: "https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The legacy grant application system was complex, causing high drop-off rates and confusion among public users.", solution: "Executed a complete redesign and rebuild, simplifying the multi-step application form into an intuitive, guided web flow with clear progress indicators.", results: "The agency saw a 50% increase in completed applications, enabling faster fund allocation.", tags: ["Web Development", "UX/UI Design", "Government", "Forms/Workflow"], category: 'Website Development', },
  { id: 46, title: "Real-Time Inventory and Dealer Locator Web Portal", client: "Industrial Equipment Supplier", industry: "B2B Manufacturing", previewResult: "Integrated 200+ dealer inventories for real-time customer search", previewMetric: "100% Data Synchronization", image: "https://images.pexels.com/photos/3862635/pexels-photo-3862635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Customers could not easily find local dealer stock, leading to lost sales and reliance on manual inquiries.", solution: "Built a central web portal utilizing Elasticsearch and robust API integration to pull and display real-time inventory from hundreds of decentralized dealer systems.", results: "Significantly improved customer self-service capabilities and reduced sales team call volume by 30%.", tags: ["Web Development", "API Integration", "Search Optimization", "B2B"], category: 'Website Development', },
  { id: 47, title: "Custom Knowledge Base & Documentation Platform", client: "Global SaaS Platform", industry: "Software & Technology", previewResult: "Reduced customer support tickets related to documentation by 25%", previewMetric: "25% Ticket Reduction", image: "https://images.pexels.com/photos/3861960/pexels-photo-3861960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "Product documentation was scattered across various formats and hard to search, frustrating users and increasing support overhead.", solution: "Designed and developed a dedicated, high-speed knowledge base platform with advanced full-text search and integrated version control.", results: "Improved user retention rates by providing immediate access to reliable information.", tags: ["Web Development", "Technical Content", "Search Optimization", "SaaS"], category: 'Website Development', },
  { id: 48, title: "Investor Relations (IR) Microsite with Dynamic Data", client: "Venture-Backed Biotech Firm", industry: "Biotechnology & Finance", previewResult: "Achieved 99.9% data accuracy for regulatory financial reporting", previewMetric: "99.9% Data Accuracy", image: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", challenge: "The firm needed a dedicated, highly reliable microsite to serve financial data, SEC filings, and investor updates securely and accurately.", solution: "Developed a dynamic, security-audited Investor Relations site with automated financial feed integration and secure document hosting, built for performance and compliance.", results: "Successfully served as the public-facing platform during a critical funding round, establishing trust and transparency.", tags: ["Web Development", "Finance/IR", "Security", "Compliance"], category: 'Website Development', },
];


const CaseStudyModal: React.FC<{ study: CaseStudy, onClose: () => void }> = ({ study, onClose }) => {
  const SectionTitle: React.FC<{ icon: React.ReactNode, title: string }> = ({ icon, title }) => (
    <h3 className="flex items-center text-2xl font-bold text-[#1e56d6] border-b border-gray-700 pb-2 mb-4">
      {icon} {title}
    </h3>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm overflow-y-auto cursor-pointer p-4 pt-20 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="relative max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-2xl cursor-default my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-[#1e56d6] transition-colors z-50 p-2 rounded-full bg-gray-700/50"
          aria-label="Close case study"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-xl">
          <Image src={study.image} alt={study.title} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/70 flex items-end p-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{study.title}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-8 text-gray-300"> 

          <div className="flex flex-col sm:flex-row justify-between text-base border-b border-gray-700 pb-4">
            <div className="flex-1 min-w-[40%]">
              <p className="font-semibold text-white">Client:</p>
              <p className="text-lg font-medium">{study.client}</p>
            </div>
            <div className="flex-1 min-w-[40%] mt-4 sm:mt-0">
              <p className="font-semibold text-white">Industry:</p>
              <p className="text-lg font-medium">{study.industry}</p>
            </div>
          </div>

          <div className="space-y-6">
            <SectionTitle icon={<TimeIcon />} title="The Challenge: The Operational Hurdle" />
            <p className="leading-relaxed">{study.challenge}</p>

            <SectionTitle icon={<ErpIcon />} title="The Ripple Nexus Solution: Strategic Implementation" />
            <p className="leading-relaxed">{study.solution}</p>

            <SectionTitle icon={<CheckIcon />} title="Verified Outcomes: Measurable Impact" />
            <p className="leading-relaxed font-semibold text-green-500 text-lg mb-4">{study.previewResult} with high client satisfaction.</p>
            <p className="leading-relaxed">{study.results}</p>
          </div>

          <div className="pt-4 border-t border-gray-700">
            <p className="text-sm font-semibold text-white mb-3">Key Focus Areas (Tags):</p>
            <div className="flex flex-wrap gap-2">
              {study.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-gray-700 text-xs font-medium text-white rounded-full border border-gray-600">
                  {tag}
                </span>
              ))}
            </div>
              <p className="text-sm font-semibold text-white mt-4 mb-1">Primary Category:</p>
              <span className="px-3 py-1 bg-[#1e56d6]/10 text-[#1e56d6] text-xs font-bold rounded-full border border-[#1e56d6]/50">
                {study.category}
            </span>
          </div>

          <div className="text-center pt-6">
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-block px-8 py-3 bg-[#1e56d6] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start A Project Like This
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const getAllCategories = (studies: CaseStudy[]): CaseStudy['category'][] => {
  const allCategories = new Set<CaseStudy['category']>();
  studies.forEach(study => allCategories.add(study.category));
  return Array.from(allCategories).sort();
};


export default function CaseStudies() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname(); 

  const currentFilter = searchParams.get('category') || 'All'; 

  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  
  const uniqueCategories = useMemo(() => getAllCategories(caseStudies), []);
  
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
  };

  const filteredCaseStudies = caseStudies.filter(study => {
    if (currentFilter === 'All') {
      return true;
    }
    return study.category === currentFilter;
  });

  const handleOpenModal = (study: CaseStudy) => {
    setSelectedStudy(study);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedStudy(null);
    document.body.style.overflow = 'unset';
  };

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
            <p className="text-[#1e56d6] font-extrabold text-lg uppercase tracking-[0.2em] mb-4">AUTHORITY IN DIGITAL TRANSFORMATION</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Our Verified Case Studies
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl font-medium">
              We translate complex challenges into compliant, scalable, and measurable enterprise solutions. Filter by service to see relevant impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Our Success Portfolio ({filteredCaseStudies.length} Studies)</h2>

          <div className="flex flex-wrap gap-3 mb-12">
            {['All', ...uniqueCategories].map(category => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`
                  px-5 py-2 text-sm font-semibold rounded-full transition-colors duration-200 whitespace-nowrap
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredCaseStudies.length > 0 ? (
              <AnimatePresence>
                {filteredCaseStudies.map((study, index) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    
                    className="group relative bg-gray-800 shadow-lg hover:shadow-blue-900/50 transition-all duration-300 cursor-pointer border border-gray-700/50 hover:border-[#1e56d6]/50"
                    onClick={() => handleOpenModal(study)}
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/60"></div>
                    </div>

                    <div className="relative p-6 space-y-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-extrabold text-white group-hover:text-[#1e56d6] transition-colors leading-tight">
                          {study.title}
                        </h3>
                      </div>

                      <div className="border-t border-gray-700 pt-4">
                        <div className="flex items-center text-sm text-green-500 mb-2 font-semibold">
                          <CheckIcon />
                          Verified Client Outcomes
                        </div>
                        <p className="text-2xl font-bold text-white leading-snug">{study.previewMetric}</p>
                        <p className="text-sm text-gray-400">{study.previewResult}</p>
                      </div>

                      <div className="mt-6 pt-4 border-gray-700 border-t">
                        <button className="text-[#1e56d6] font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                          View Full Study
                          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            ) : (
              <motion.div 
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 text-center py-12 text-gray-400"
              >
                <p className="text-2xl font-semibold mb-2">No Case Studies Found</p>
                <p>There are no case studies matching the category: **{currentFilter}**.</p>
                <Link href="/contact" className="text-[#1e56d6] hover:underline mt-4 inline-block font-medium">Let's discuss your custom solution.</Link>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedStudy && <CaseStudyModal study={selectedStudy} onClose={handleCloseModal} />}
      </AnimatePresence>

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
              Ready to Transform Your Business?
            </h2>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-[#1e56d6] rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Schedule Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}