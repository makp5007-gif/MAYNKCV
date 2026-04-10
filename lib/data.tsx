import React from 'react';
import { Target, TrendingUp, BarChart3, Zap, Activity, LineChart, Bot, Sparkles, BrainCircuit } from 'lucide-react';

export const performanceData = [
  { name: 'Jan', roas: 2.1, cpl: 45 },
  { name: 'Feb', roas: 2.5, cpl: 42 },
  { name: 'Mar', roas: 2.8, cpl: 38 },
  { name: 'Apr', roas: 3.2, cpl: 35 },
  { name: 'May', roas: 3.8, cpl: 30 },
  { name: 'Jun', roas: 4.2, cpl: 28 },
];

export const skills = [
  {
    category: "Paid Media",
    icon: <Target className="w-6 h-6 text-primary" />,
    items: ["Google Ads (Search, Display, YouTube, PMax)", "Meta Ads", "TikTok Ads"]
  },
  {
    category: "Strategy",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    items: ["Full Funnel Marketing", "ROAS Optimization", "A/B Testing", "Retargeting"]
  },
  {
    category: "Analytics",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
    items: ["GA4", "GTM", "Conversion Tracking", "UTM Tracking"]
  },
  {
    category: "Creative & AI",
    icon: <Zap className="w-6 h-6 text-primary" />,
    items: ["AI Ad Creative Testing", "Landing Page CRO", "Prompt Engineering"]
  }
];

export const experience = [
  {
    company: "Roadtoworld FZ LLC",
    location: "Dubai, UAE",
    role: "Performance Marketing Specialist",
    period: "2022 – Present",
    achievements: [
      "Manage AED 20K+ monthly budgets across multiple platforms.",
      "Execute full funnel strategies driving consistent growth.",
      "Optimize CPA, CPL, and ROAS for maximum profitability.",
      "Implement advanced GA4 + GTM tracking systems."
    ]
  },
  {
    company: "Freelance",
    location: "India",
    role: "Digital Marketing Consultant",
    period: "2017 – 2022",
    achievements: [
      "Managed multi-industry campaigns for diverse clients.",
      "Built high-converting ad funnels from scratch.",
      "Consistently improved ROAS and reduced CPL by 20% average.",
      "Consulted on landing page CRO and creative strategy."
    ]
  }
];

export const caseStudies = [
  {
    title: "UAE Real Estate Lead Gen",
    industry: "Real Estate",
    budget: "AED 50K/mo",
    result: "+120% Leads",
    cpl: "-35% CPL",
    strategy: "Google Search + Meta Lead Forms + CRM Integration",
    description: "Revamped off-plan property campaigns targeting HNWIs. Shifted from broad targeting to intent-based search and lookalike audiences.",
    beforeLabel: "Previous CPL",
    beforeValue: "AED 150",
    beforeWidth: "80%",
    afterLabel: "New CPL",
    afterValue: "AED 97",
    afterWidth: "45%",
    metrics: [
      { label: "Conversion Rate", value: "4.2%" },
      { label: "Lead Quality", value: "High" }
    ]
  },
  {
    title: "E-commerce Scaling (GCC)",
    industry: "Retail / E-com",
    budget: "AED 25K/mo",
    result: "4.2x ROAS",
    cpl: "+45% Revenue",
    strategy: "PMax + Meta Advantage+ + Feed Optimization",
    description: "Scaled an e-commerce brand across GCC by leveraging Google PMax and Meta Advantage+ shopping campaigns, heavily optimizing the product feed.",
    beforeLabel: "Previous ROAS",
    beforeValue: "2.1x",
    beforeWidth: "40%",
    afterLabel: "New ROAS",
    afterValue: "4.2x",
    afterWidth: "90%",
    metrics: [
      { label: "CPA Reduction", value: "32%" },
      { label: "AOV Increase", value: "+15%" }
    ]
  },
  {
    title: "B2B SaaS Demo Bookings",
    industry: "Software",
    budget: "AED 15K/mo",
    result: "3x Demos",
    cpl: "-40% CPA",
    strategy: "LinkedIn Ads + Google Search + Retargeting",
    description: "Targeted enterprise decision-makers with gated content leading to demo requests. Optimized LinkedIn lead gen forms and Google intent keywords.",
    beforeLabel: "Previous CPA",
    beforeValue: "AED 400",
    beforeWidth: "85%",
    afterLabel: "New CPA",
    afterValue: "AED 240",
    afterWidth: "50%",
    metrics: [
      { label: "Demo Show Rate", value: "75%" },
      { label: "Pipeline Value", value: "+210%" }
    ]
  },
  {
    title: "Aesthetic Clinic Footfall",
    industry: "Healthcare",
    budget: "AED 20K/mo",
    result: "+80% Bookings",
    cpl: "-25% CPL",
    strategy: "Local SEO + Meta Video Ads + Offer Funnels",
    description: "Drove local foot traffic to a premium aesthetic clinic in Dubai using highly visual before/after video ads and geo-targeted search campaigns.",
    beforeLabel: "Previous CPL",
    beforeValue: "AED 120",
    beforeWidth: "70%",
    afterLabel: "New CPL",
    afterValue: "AED 90",
    afterWidth: "40%",
    metrics: [
      { label: "Show-up Rate", value: "65%" },
      { label: "Walk-ins", value: "+40%" }
    ]
  },
  {
    title: "EdTech Student Acquisition",
    industry: "Education",
    budget: "AED 40K/mo",
    result: "2.5x Enrollments",
    cpl: "-30% CAC",
    strategy: "YouTube Ads + Meta Lead Gen + Retargeting",
    description: "Scaled student enrollments for an online certification program. Utilized YouTube video ads for top-of-funnel awareness and Meta lead forms for high-intent capture.",
    beforeLabel: "Previous CAC",
    beforeValue: "AED 850",
    beforeWidth: "85%",
    afterLabel: "New CAC",
    afterValue: "AED 590",
    afterWidth: "55%",
    metrics: [
      { label: "Conversion Rate", value: "3.8%" },
      { label: "Lead to Student", value: "12%" }
    ]
  },
  {
    title: "FinTech App Installs",
    industry: "Finance",
    budget: "AED 60K/mo",
    result: "+150% Installs",
    cpl: "-45% CPI",
    strategy: "Apple Search Ads + Google App Campaigns",
    description: "Drove high-quality user acquisition for a new personal finance app. Focused on Apple Search Ads for high-intent users and Google UAC for volume.",
    beforeLabel: "Previous CPI",
    beforeValue: "AED 45",
    beforeWidth: "90%",
    afterLabel: "New CPI",
    afterValue: "AED 24",
    afterWidth: "45%",
    metrics: [
      { label: "App Rating", value: "4.8/5" },
      { label: "Retention D7", value: "35%" }
    ]
  }
];

export const tools = [
  { name: "GOOGLE ADS" },
  { name: "META ADS" },
  { name: "TIKTOK ADS" },
  { name: "SNAPCHAT ADS" },
  { name: "LINKEDIN ADS" },
  { name: "GA4" },
  { name: "GTM" },
  { name: "LOOKER STUDIO" },
  { name: "CHATGPT" },
  { name: "MIDJOURNEY" },
  { name: "JASPER AI" },
  { name: "CLAUDE" }
];