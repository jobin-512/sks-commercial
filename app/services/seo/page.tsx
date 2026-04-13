"use client"
import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Search,
  Zap,
  Shield,
  Users,
  BarChart,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Award,
  Heart,
  Globe,
  LineChart,
  TrendingUp,
  Target,
  Link,
  FileSearch,
  Settings,
  Smartphone,
  Eye,
  Activity,
  ThumbsUp,
  MapPin,
} from "lucide-react";
import SEOPackages from "../../components/services/seo";


const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// ─── Reusable Animated Wrappers ──────────────────────────────────────────────

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedItem({
  children,
  className = "",
  ...rest
}: { children: React.ReactNode; className?: string } & React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      variants={fadeInUp}
      className={className}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── Accordion ───────────────────────────────────────────────────────────────

function SEOApproachAccordion() {
  const steps = [
    {
      title: "SEO Audit & Discovery",
      description:
        "We start with a thorough audit of your website — uncovering technical issues, content gaps, and backlink opportunities — to build an SEO roadmap that targets real growth.",
      checklist: ["Technical Website Crawl", "Competitor Keyword Gap Analysis", "Penalty & Health Check"],
    },
    {
      title: "Keyword Research & Strategy",
      description:
        "Data-driven keyword selection that aligns search intent with your business goals, ensuring every page is optimized to attract high-value traffic.",
      checklist: ["Intent-Based Keyword Mapping", "Long-Tail Opportunity Targeting", "SERP Feature Analysis"],
    },
    {
      title: "On-Page & Technical SEO",
      description:
        "We optimize every element of your pages — from meta tags to site speed — while resolving technical issues that hinder search engine crawling and indexing.",
      checklist: ["Meta & Schema Optimization", "Core Web Vitals Improvement", "XML Sitemap & Robots.txt Setup"],
    },
    {
      title: "Link Building & Reporting",
      description:
        "Authority-building through white-hat link acquisition, combined with transparent monthly reporting on rankings, traffic, and ROI — so you always know what's working.",
      checklist: ["High-DA Backlink Acquisition", "Monthly Ranking Reports", "Performance & ROI Dashboards"],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {steps.map((step, idx) => (
        <div key={idx}>
          <button
            className={`w-full flex justify-between items-center px-6 py-4 bg-[#181828] text-white font-semibold text-lg border-b border-[#23234a] focus:outline-none ${
              openIndex === idx ? "rounded-t-2xl" : "rounded-2xl"
            }`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span>{step.title}</span>
            <span className={`transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}>▼</span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === idx && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="bg-[#10101A] border border-t-0 border-[#3D43D4]/30 text-white rounded-b-2xl px-6 py-6 flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-white/80 text-base">{step.description}</p>
                  </div>
                  <ul className="min-w-[230px] space-y-2 text-base">
                    {step.checklist.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 font-medium">
                        <span className="text-[#5B61F6]">✔</span>
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

// ─── Engagement Models ────────────────────────────────────────────────────────

function EngagementModels() {
  const models = [
    {
      label: "Monthly Retainer",
      title: "Monthly Retainer",
      description:
        "Perfect for businesses seeking consistent, ongoing SEO growth. Pay monthly and benefit from continuous optimization, reporting, and strategy refinement aligned with Google's evolving algorithms.",
      checklist: ["Ongoing keyword monitoring", "Monthly performance reports", "Algorithm update adaptations"],
    },
    {
      label: "Project-Based SEO",
      title: "Project-Based SEO",
      description:
        "Ideal for one-time needs like site migrations, penalty recovery, or a complete SEO overhaul. Defined scope, clear deliverables, and fixed budgets for maximum control.",
      checklist: ["Fixed deliverables & timelines", "No long-term commitment", "Dedicated project manager"],
    },
    {
      label: "Performance-Based SEO",
      title: "Performance-Based SEO",
      description:
        "Pay for proven results. Our performance model ties fees to actual ranking improvements and traffic milestones — putting our goals perfectly in line with yours.",
      checklist: ["Results-driven pricing", "Ranking-based milestones", "Full transparency & reporting"],
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Choose a Model That Fits Your Business</h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          We offer flexible SEO engagement models designed to match your goals, budget, and timeline.
        </p>
      </div>
      <div className="flex flex-col items-center">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10 justify-center">
          {models.map((model, idx) => (
            <button
              key={model.label}
              onClick={() => setActive(idx)}
              className={`relative px-7 py-3 rounded-lg font-semibold text-base border transition-all duration-200 focus:outline-none ${
                active === idx
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white border-white/40 hover:bg-white/10"
              }`}
            >
              {model.label}
              {active === idx && (
                <span className="absolute left-1/2 -bottom-3 -translate-x-1/2">
                  <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                    <path d="M12 12L0 0H24L12 12Z" fill="white" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
        {/* Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl bg-[#10101A] border border-white/20 rounded-3xl flex flex-col md:flex-row items-center p-8 gap-8"
          >
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="w-full h-60 rounded-2xl bg-gradient-to-br from-[#3D43D4]/30 to-[#5B61F6]/10 flex items-center justify-center border border-[#3D43D4]/30">
                <div className="text-center space-y-3">
                  <div className="text-6xl">{["📅", "🎯", "🚀"][active]}</div>
                  <p className="text-[#5B61F6] font-semibold text-lg">{models[active].title}</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-2xl font-bold text-white mb-4">{models[active].title}</h3>
              <p className="text-white/75 mb-6 leading-relaxed">{models[active].description}</p>
              <ul className="space-y-3">
                {models[active].checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white font-medium">
                    <span className="text-[#5B61F6]">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function seo() {
  return (
    <div className="bg-[#08060F] text-white overflow-hidden">
      {/* ── Hero ── */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#171629]/95 to-[#08060F] z-0" />
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(91,97,246,0.4) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#3D43D4]/20 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5B61F6]/10 rounded-full blur-3xl z-0" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl w-full text-center space-y-8 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="px-4 py-2 rounded-full bg-[#171629] border border-[#3D43D4]/30 text-[#5B61F6] text-sm font-medium">
              Enterprise SEO Services
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] leading-tight">
            Rank Higher. Drive More. <br className="hidden md:block" />
            Grow Faster.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We engineer data-driven SEO strategies that put your brand at the top of search results — and keep it there through every algorithm update.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: <Search className="w-5 h-5" />, text: "Keyword Mastery" },
              { icon: <TrendingUp className="w-5 h-5" />, text: "Organic Growth" },
              { icon: <Shield className="w-5 h-5" />, text: "White-Hat Only" },
              { icon: <BarChart className="w-5 h-5" />, text: "Measurable ROI" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-[#171629]/70 px-4 py-2 rounded-full border border-[#3D43D4]/30"
              >
                <span className="text-[#5B61F6]">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <a
              href="#packages"
              className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
            >
              View SEO Packages <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="border border-[#3D43D4] hover:bg-[#3D43D4]/10 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
            >
              Get Free Audit
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Star className="w-8 h-8 text-[#5B61F6]" />, value: "500+", label: "Keywords Ranked #1" },
            { icon: <Heart className="w-8 h-8 text-[#5B61F6]" />, value: "98%", label: "Client Retention Rate" },
            { icon: <Award className="w-8 h-8 text-[#5B61F6]" />, value: "10+", label: "Years of SEO Excellence" },
            { icon: <Users className="w-8 h-8 text-[#5B61F6]" />, value: "200+", label: "Businesses Grown" },
          ].map((stat, index) => (
            <AnimatedItem key={index} className="space-y-4">
              <div className="flex justify-center">{stat.icon}</div>
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-[#5B61F6]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      {/* ── What We Do ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Block 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual */}
            <motion.div
              variants={fadeInUp}
              className="relative w-full h-[300px] md:h-[400px] rounded-[50%_40%_30%_60%/60%_30%_50%_40%] overflow-hidden shadow-lg bg-gradient-to-br from-[#3D43D4]/30 to-[#5B61F6]/10 border border-[#3D43D4]/30 flex items-center justify-center"
            >
              <div className="text-center space-y-4 p-8">
                <div className="text-7xl">🔍</div>
                <p className="text-[#5B61F6] font-semibold text-xl">Technical SEO Experts</p>
                <p className="text-gray-400 text-sm">From crawl to conversion — we handle it all</p>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-3xl font-bold text-[#5B61F6]">Full-Stack SEO Expertise</h3>
              <p className="text-gray-300 leading-relaxed">
                Our SEO services are engineered to build long-term digital authority. Whether you need technical fixes, content strategy, or a powerful backlink profile, we align every tactic to your revenue goals.
              </p>
              <ul className="space-y-3">
                {["Technical SEO Audits & Fixes", "Content-Led Authority Building", "Analytics-Driven Decision Making"].map(
                  (feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                      <CheckCircle2 className="w-6 h-6 text-[#3D43D4] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
              <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Block 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-3xl font-bold text-[#5B61F6]">Scalable SEO Infrastructure</h3>
              <p className="text-gray-300 leading-relaxed">
                We build SEO systems that grow with you — modular strategies for local, national, or global reach — ensuring your digital presence scales efficiently alongside your business.
              </p>
              <ul className="space-y-3">
                {["Local, National & Global SEO", "E-Commerce & Enterprise SEO", "Multi-Language & Multi-Region"].map(
                  (feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                      <CheckCircle2 className="w-6 h-6 text-[#3D43D4] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
              <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            {/* Visual */}
            <motion.div
              variants={fadeInUp}
              className="relative w-full h-[300px] md:h-[400px] rounded-[50%_40%_30%_60%/60%_30%_50%_40%] overflow-hidden shadow-lg bg-gradient-to-br from-[#5B61F6]/20 to-[#3D43D4]/10 border border-[#5B61F6]/30 flex items-center justify-center"
            >
              <div className="text-center space-y-4 p-8">
                <div className="text-7xl">📈</div>
                <p className="text-[#5B61F6] font-semibold text-xl">Scalable Growth Systems</p>
                <p className="text-gray-400 text-sm">Built for local heroes & global brands</p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Our SEO Process ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our SEO Blueprint
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Audit",
                description: "Deep-dive analysis of your site's technical health, content gaps, and competitive landscape.",
                icon: <FileSearch className="w-8 h-8 text-[#5B61F6]" />,
              },
              {
                step: "02",
                title: "Strategy",
                description: "Building a custom keyword map and content plan targeting your highest-value opportunities.",
                icon: <Target className="w-8 h-8 text-[#5B61F6]" />,
              },
              {
                step: "03",
                title: "Execute",
                description: "On-page optimization, technical fixes, content creation, and authority link building.",
                icon: <Settings className="w-8 h-8 text-[#5B61F6]" />,
              },
              {
                step: "04",
                title: "Grow",
                description: "Continuous monitoring, monthly reporting, and agile strategy updates for sustained ranking growth.",
                icon: <TrendingUp className="w-8 h-8 text-[#5B61F6]" />,
              },
            ].map((process, index) => (
              <AnimatedItem
                key={index}
                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 space-y-4 relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-[#3D43D4]/10 group-hover:text-[#3D43D4]/20 transition-colors duration-300">
                  {process.step}
                </div>
                <div className="relative z-10">
                  <div className="mb-4">{process.icon}</div>
                  <h3 className="text-xl font-semibold text-[#5B61F6] mb-2">{process.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA Banner ── */}
      <section className="relative min-h-[300px] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#3D43D4] to-[#5B61F6]" />
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="relative z-10 w-full max-w-3xl text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-wide">
            WANT TO SEE HOW WE RANK BUSINESSES?
          </h2>
          <p className="text-lg md:text-xl text-white/85 mb-2">
            Explore our SEO case studies and see the organic traffic growth, ranking jumps, and revenue impact we've delivered.
          </p>
          <button className="mt-8 px-8 py-3 bg-white text-[#171629] rounded-full font-semibold shadow hover:bg-[#10101A] hover:text-white transition-colors duration-300">
            VIEW CASE STUDIES
          </button>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-16">
            Full-Spectrum SEO Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technical SEO",
                description: "Fix the foundation — site speed, crawlability, indexing, Core Web Vitals, and more.",
                icon: <Settings className="w-8 h-8" />,
                features: ["Site Speed Optimization", "Crawl Error Fixes", "Structured Data / Schema", "Mobile-First Indexing"],
              },
              {
                title: "On-Page SEO",
                description: "Optimize every page element to signal relevance and authority to search engines.",
                icon: <FileSearch className="w-8 h-8" />,
                features: ["Keyword Optimization", "Meta Tags & Headers", "Content Structure", "Internal Linking"],
              },
              {
                title: "Off-Page & Link Building",
                description: "Build domain authority with high-quality, white-hat backlink acquisition campaigns.",
                icon: <Link className="w-8 h-8" />,
                features: ["DA/DR Link Acquisition", "Guest Posting", "Digital PR", "Competitor Link Gaps"],
              },
              {
                title: "Local SEO",
                description: "Dominate local search and Google Maps for location-specific searches that drive foot traffic.",
                icon: <MapPin className="w-8 h-8" />,
                features: ["Google Business Profile", "Local Citations", "NAP Consistency", "Review Management"],
              },
              {
                title: "Content Marketing",
                description: "Strategic content creation that attracts organic traffic and converts visitors into customers.",
                icon: <Activity className="w-8 h-8" />,
                features: ["Pillar & Cluster Content", "Blog Strategy", "Landing Page Copy", "Content Refresh"],
              },
              {
                title: "Analytics & Reporting",
                description: "Full visibility into your SEO performance with monthly reports that matter.",
                icon: <LineChart className="w-8 h-8" />,
                features: ["Ranking Dashboards", "Traffic Analysis", "Conversion Tracking", "Competitor Monitoring"],
              },
            ].map((service, index) => (
              <AnimatedItem
                key={index}
                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl space-y-4 group hover:border-[#5B61F6]/50 transition-colors duration-300"
              >
                <div className="text-[#5B61F6] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#5B61F6]">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-[#5B61F6] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── How We Approach SEO ── */}
      <section
        className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
        style={{ background: "radial-gradient(circle at 20% 40%, #2e3192 0%, #08060F 80%)" }}
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">How We Approach SEO?</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Our methodology is built on transparency, data, and sustainable results — no black-hat shortcuts, no vague promises. Just proven, repeatable SEO that compounds over time.
          </p>
        </div>
        <SEOApproachAccordion />
      </section>

      {/* ── Enterprise SEO for Every Industry ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">
            SEO Built for Every Industry
          </h2>
          <p className="text-center text-white/70 text-lg mb-12 max-w-3xl mx-auto">
            Whether you're a local business or a global enterprise, our SEO strategies adapt to your industry's competitive landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="w-7 h-7" />,
                title: "E-Commerce SEO",
                desc: "Drive product visibility, improve category rankings, and boost online revenue through smart e-commerce optimization.",
              },
              {
                icon: <Smartphone className="w-7 h-7" />,
                title: "Mobile-First SEO",
                desc: "Optimize for mobile users and Core Web Vitals — because over 60% of all searches happen on mobile devices.",
              },
              {
                icon: <Eye className="w-7 h-7" />,
                title: "Brand Visibility SEO",
                desc: "Strengthen SERP presence for branded queries, reputation management, and knowledge panel optimization.",
              },
              {
                icon: <ThumbsUp className="w-7 h-7" />,
                title: "Local Business SEO",
                desc: "Get discovered in your city. We optimize Google Business Profiles, local citations, and map rankings.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start text-left"
              >
                <div className="mb-4 text-[#3D43D4]">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Models ── */}
      <EngagementModels />

      {/* ── SEO Packages ── */}
      <SEOPackages />

      {/* ── Case Studies ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-16">
            SEO Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "300% Organic Traffic Growth",
                client: "E-Commerce Retailer",
                description:
                  "Rebuilt site architecture, optimized 500+ product pages, and launched a content hub — resulting in triple the organic sessions within 6 months.",
                results: ["300% Traffic Increase", "85 Page-1 Keywords", "2.4x Revenue from Organic"],
                icon: <TrendingUp className="w-8 h-8 text-[#5B61F6]" />,
                tech: ["Technical SEO", "Content Strategy", "Link Building"],
                duration: "6 Months",
                team: "4 SEO Specialists",
              },
              {
                title: "#1 Local Rankings in 3 Cities",
                client: "Multi-Location Service Business",
                description:
                  "Implemented a hyper-local SEO strategy with optimized GBP profiles and location-specific landing pages across 3 markets.",
                results: ["#1 Map Pack in 3 Cities", "4x More Calls", "180% Local Traffic Growth"],
                icon: <MapPin className="w-8 h-8 text-[#5B61F6]" />,
                tech: ["Local SEO", "GBP Optimization", "Citation Building"],
                duration: "4 Months",
                team: "3 Local SEO Experts",
              },
              {
                title: "Enterprise Domain Authority Boost",
                client: "B2B SaaS Platform",
                description:
                  "Built a strategic backlink campaign targeting DA 50+ publications, increasing domain authority from 28 to 52 in under a year.",
                results: ["DA 28 → 52", "220+ Quality Backlinks", "60% More Organic Leads"],
                icon: <Link className="w-8 h-8 text-[#5B61F6]" />,
                tech: ["Digital PR", "Guest Posting", "HARO Link Building"],
                duration: "10 Months",
                team: "5 Link Builders",
              },
              {
                title: "Healthcare Site Penalty Recovery",
                client: "Medical Services Group",
                description:
                  "Identified and disavowed toxic backlinks, rewrote thin content, and restored organic traffic after a Google core update penalty.",
                results: ["Full Traffic Restoration", "40% Higher CTR", "100% Penalty Removal"],
                icon: <Shield className="w-8 h-8 text-[#5B61F6]" />,
                tech: ["Penalty Recovery", "Content Overhaul", "E-E-A-T Optimization"],
                duration: "3 Months",
                team: "SEO Recovery Team",
              },
              {
                title: "50x ROI in 12 Months",
                client: "Legal Services Firm",
                description:
                  "Targeted high-intent legal keywords with a structured content strategy and local SEO — delivering consistent case-generating leads.",
                results: ["50x Organic ROI", "180 Top-10 Keywords", "65% Conversion Rate Lift"],
                icon: <Award className="w-8 h-8 text-[#5B61F6]" />,
                tech: ["Content SEO", "Local SEO", "CRO"],
                duration: "12 Months",
                team: "6 Specialists",
              },
              {
                title: "Global SEO Expansion",
                client: "FinTech Startup",
                description:
                  "Launched multilingual SEO strategy across 8 countries, driving international organic traffic and qualified lead generation.",
                results: ["8 Markets Ranked", "220% International Traffic", "3x Global Lead Volume"],
                icon: <Globe className="w-8 h-8 text-[#5B61F6]" />,
                tech: ["International SEO", "Hreflang", "Multilingual Content"],
                duration: "9 Months",
                team: "8 Global SEO Experts",
              },
            ].map((caseStudy, index) => (
              <AnimatedItem
                key={index}
                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl space-y-4 group hover:border-[#5B61F6]/50 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="text-[#5B61F6]">{caseStudy.icon}</div>
                  <span className="text-sm text-[#5B61F6] font-medium">{caseStudy.client}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#5B61F6]">{caseStudy.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.description}</p>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.results.map((result, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-[#3D43D4]/10 text-[#5B61F6] rounded-full text-xs font-medium"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(61,67,212,0.2)" }}
                    >
                      {result}
                    </motion.span>
                  ))}
                </div>
                <div className="pt-4 border-t border-[#3D43D4]/30">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#5B61F6]" />
                      <span>{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#5B61F6]" />
                      <span>{caseStudy.team}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-[#3D43D4]/5 text-[#5B61F6] rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA Section ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8">
            Let's Grow Your Organic Traffic
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 mb-12 text-lg leading-relaxed">
            Whether you need to recover from a penalty, launch a new SEO campaign, or dominate a competitive niche — SKS Tech Solution's SEO team is ready to deliver results that matter.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <a href="/contact-us">
            <motion.button
              className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your SEO Journey <ArrowRight className="w-5 h-5" />
            </motion.button>
            </a>
            <a href="/contact-us">
            <motion.button
              className="border border-[#3D43D4] hover:bg-[#3D43D4]/10 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free SEO Audit
            </motion.button>
            </a>
          </motion.div>

          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: <Star className="w-6 h-6" />, text: "Certified SEO Experts" },
              { icon: <Shield className="w-6 h-6" />, text: "100% White-Hat" },
              { icon: <Zap className="w-6 h-6" />, text: "Fast, Measurable Results" },
              { icon: <Heart className="w-6 h-6" />, text: "Guaranteed Satisfaction" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ scale: 1.05, color: "#5B61F6" }}
              >
                <span className="text-[#5B61F6]">{item.icon}</span>
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center text-white/50 text-sm font-semibold">
            SKS TECH SOLUTION
            <br />
            Digital excellence starts here — with innovation, integrity, and results.
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
