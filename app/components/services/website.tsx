import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Code,
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
  Layers,
  Cloud,
  Globe,
  Cpu,
  Server,
  Boxes,
  Network,
  LineChart,
  MegaphoneIcon,
  MonitorSmartphone,
  Paintbrush,
  SearchCode,
  ShoppingCart,
  Gauge,
} from 'lucide-react';

// ─── Animation Variants ───────────────────────────────────────────────────────

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

// ─── Reusable Animated Wrappers ───────────────────────────────────────────────

function AnimatedSection({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <motion.div
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedItem({
  children,
  className = '',
  ...rest
}: { children: React.ReactNode; className?: string } & React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      variants={fadeInUp}
      className={className}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── Accordion ────────────────────────────────────────────────────────────────

function CustomApproachAccordion() {
  const steps = [
    {
      title: 'Discovery & Strategy',
      description:
        'Every great website starts with understanding your business. We dig into your goals, audience, and competitors to craft a tailored web strategy that delivers real results.',
      checklist: ['Competitor & Market Research', 'Goal-Setting Workshops', 'Technology & Platform Roadmapping'],
    },
    {
      title: 'UI/UX Design',
      description:
        'We design visually stunning, user-friendly interfaces. Every layout, color choice, and interaction is deliberately crafted to engage visitors and guide them toward conversion.',
      checklist: ['Wireframes & Interactive Prototypes', 'Mobile-First Responsive Design', 'Brand-Aligned Design Systems'],
    },
    {
      title: 'Agile Development',
      description:
        "Our iterative build process keeps you in control. We develop in sprints so you always know what's happening, giving you working software at every stage.",
      checklist: ['Sprint Planning & Execution', 'Real-Time Progress Visibility', 'Continuous Integration & Testing'],
    },
    {
      title: 'Launch & Optimization',
      description:
        'We handle your go-live with care, then monitor, optimize, and improve post-launch—ensuring your site stays fast, secure, and effective long after launch day.',
      checklist: ['Production Deployment & QA', 'Core Web Vitals Optimization', 'Live Monitoring & Growth Iteration'],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {steps.map((step, idx) => (
        <div key={idx}>
          <button
            className={`w-full flex justify-between items-center px-6 py-4 bg-[#181828] text-white font-semibold text-lg border-b border-[#23234a] focus:outline-none transition-all duration-200 ${
              openIndex === idx ? 'rounded-t-2xl' : 'rounded-2xl'
            }`}
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            <span>{step.title}</span>
            <span className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>▼</span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === idx && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="bg-[#10101A] border border-t-0 border-[#3D43D4]/30 text-white rounded-b-2xl px-6 py-6 flex flex-col md:flex-row justify-between items-start gap-6">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-base text-white/80">{step.description}</p>
                  </div>
                  <ul className="min-w-[240px] space-y-2 text-base">
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

// ─── Flexible Models Section ──────────────────────────────────────────────────

function FlexibleModelsSection() {
  const models = [
    {
      label: 'Fixed Price Model',
      title: 'Fixed Price Model',
      description:
        'Best for well-scoped website projects with clearly defined requirements, timelines, and budgets. Enjoy full cost predictability with zero surprises.',
      checklist: ['Pre-approved timelines', 'Defined deliverables', 'Full cost certainty'],
      gradient: 'from-[#3D43D4] to-[#5B61F6]',
    },
    {
      label: 'Time & Material Model',
      title: 'Time & Material Model',
      description:
        'Ideal for evolving websites and ongoing improvements. Scale your development effort up or down and pay only for work completed.',
      checklist: ['No long-term lock-in', 'Flexible budget control', 'Agile adaptability'],
      gradient: 'from-[#5B61F6] to-[#7B80F8]',
    },
    {
      label: 'Dedicated Team Model',
      title: 'Dedicated Team Model',
      description:
        'Get a fully embedded web development team that works exclusively on your project—perfect for complex, long-term digital products.',
      checklist: ['Rapid onboarding', 'Full expert oversight', 'Seamless team integration'],
      gradient: 'from-[#2e3192] to-[#3D43D4]',
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Choose a Model That Fits Your Business</h2>
        <p className="text-white/80 text-lg md:text-xl">
          We offer flexible engagement models so you can partner with us in a way that works best for you.
        </p>
      </div>
      <div className="flex flex-col items-center">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {models.map((model, idx) => (
            <button
              key={model.label}
              onClick={() => setActive(idx)}
              className={`relative px-6 py-3 rounded-lg font-semibold text-base border transition-all duration-200 focus:outline-none ${
                active === idx
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white border-white/40 hover:bg-white/10'
              }`}
            >
              {model.label}
              {active === idx && (
                <span className="absolute left-1/2 -bottom-4 -translate-x-1/2">
                  <svg width="22" height="11" viewBox="0 0 24 12" fill="none">
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
            transition={{ duration: 0.35 }}
            className="w-full max-w-4xl bg-[#10101A] border border-[#3D43D4]/40 rounded-3xl flex flex-col md:flex-row items-center p-8 gap-8"
          >
            {/* Visual */}
            <div
              className={`w-full md:w-1/2 flex-shrink-0 rounded-2xl bg-gradient-to-br ${models[active].gradient} flex items-center justify-center h-56 md:h-64`}
            >
              <div className="text-center text-white px-6">
                <div className="text-6xl font-black opacity-20 mb-2">{`0${active + 1}`}</div>
                <div className="text-2xl font-bold">{models[active].label}</div>
              </div>
            </div>
            {/* Content */}
            <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-4">{models[active].title}</h3>
              <p className="text-white/80 mb-6">{models[active].description}</p>
              <ul className="space-y-3">
                {models[active].checklist.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-lg text-white font-semibold">
                    <span className="text-[#5B61F6]">✔</span> {item}
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

export default function Website() {
  return (
    <div className="bg-[#08060F] text-white overflow-hidden font-sans">

      {/* ── Hero ── */}
      <section
        className="min-h-[92vh] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/services/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#171629]/90 via-[#08060F]/70 to-[#08060F] z-0" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(91,97,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(91,97,246,0.3) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

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
            <span className="px-4 py-2 rounded-full bg-[#171629] border border-[#3D43D4]/40 text-[#5B61F6] text-sm font-medium inline-block">
              Enterprise Website Development
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#7B80F8] leading-tight">
            Design with Vision.&nbsp;Build&nbsp;with&nbsp;Purpose.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            We craft high-performance websites that captivate audiences, strengthen brands, and drive measurable business growth.
          </p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: <Paintbrush className="w-5 h-5" />, text: 'Stunning Designs' },
              { icon: <Zap className="w-5 h-5" />, text: 'Blazing Performance' },
              { icon: <Shield className="w-5 h-5" />, text: 'Enterprise Security' },
              { icon: <MonitorSmartphone className="w-5 h-5" />, text: 'Fully Responsive' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-[#171629]/70 px-4 py-2 rounded-full border border-[#3D43D4]/30"
              >
                <span className="text-[#5B61F6]">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#services"
              className="border border-[#3D43D4]/60 hover:bg-[#3D43D4]/10 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
            >
              Explore Services
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Star className="w-8 h-8 text-[#5B61F6]" />, value: '500+', label: 'Websites Delivered' },
            { icon: <Heart className="w-8 h-8 text-[#5B61F6]" />, value: '98%', label: 'Client Satisfaction' },
            { icon: <Award className="w-8 h-8 text-[#5B61F6]" />, value: '12+', label: 'Years of Excellence' },
            { icon: <Users className="w-8 h-8 text-[#5B61F6]" />, value: '150+', label: 'Global Partners' },
          ].map((stat, i) => (
            <AnimatedItem key={i} className="space-y-4">
              <div className="flex justify-center">{stat.icon}</div>
              <motion.h3
                className="text-4xl md:text-5xl font-bold text-[#5B61F6]"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </AnimatedItem>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Expert Teams & Capabilities ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* Expert Web Teams */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeInUp}
              className="relative w-full h-[300px] md:h-[420px] overflow-hidden rounded-[50%_40%_30%_60%/60%_30%_50%_40%] shadow-2xl shadow-[#3D43D4]/20"
            >
              <img
                src="/services/web-team.png"
                alt="Expert Web Development Teams"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#3D43D4]/30 to-transparent" />
            </motion.div>
            <motion.div variants={fadeInUp} className="space-y-6">
              <span className="text-[#5B61F6] text-sm font-semibold uppercase tracking-widest">Our Team</span>
              <h3 className="text-3xl font-bold text-white">Expert Web Development Teams</h3>
              <p className="text-gray-300 leading-relaxed">
                Our website development services are built around your unique digital goals. Whether you need a marketing site, a SaaS product, or a full e-commerce ecosystem, we deliver seamless solutions that look great and perform even better.
              </p>
              <ul className="space-y-3">
                {['Pixel-Perfect UI Implementation', 'CMS Integration & Management', 'Real-Time Analytics Dashboards'].map(
                  (feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#3D43D4] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
              <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2">
                Explore More <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Core Capabilities */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="space-y-6 md:order-1">
              <span className="text-[#5B61F6] text-sm font-semibold uppercase tracking-widest">Our Capabilities</span>
              <h3 className="text-3xl font-bold text-white">Core Website Development Capabilities</h3>
              <p className="text-gray-300 leading-relaxed">
                We deliver structured, flexible, and scalable web solutions through thoughtful engineering—ensuring faster build cycles, consistent performance, and long-term adaptability across every digital platform.
              </p>
              <ul className="space-y-3">
                {['Component-Based Architecture', 'Cross-Platform Compatibility', 'Custom Design System Libraries'].map(
                  (feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-[#3D43D4] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>
              <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2">
                Explore More <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative w-full h-[300px] md:h-[420px] overflow-hidden rounded-[50%_40%_30%_60%/60%_30%_50%_40%] shadow-2xl shadow-[#3D43D4]/20 md:order-2"
            >
              <img
                src="/services/web-capabilities.png"
                alt="Core Website Development Capabilities"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-bl from-[#3D43D4]/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Development Blueprint ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Website Development Blueprint
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A proven four-stage process that takes your idea from concept to a live, high-performing website.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy',
                description: 'We understand your goals, audience, and competitive landscape to define a winning web strategy.',
                icon: <BarChart className="w-8 h-8 text-[#5B61F6]" />,
              },
              {
                step: '02',
                title: 'Design',
                description: 'We craft beautiful, brand-aligned designs with intuitive user experiences at the core.',
                icon: <Paintbrush className="w-8 h-8 text-[#5B61F6]" />,
              },
              {
                step: '03',
                title: 'Build',
                description: 'Agile sprints, clean code, and thorough testing ensure a robust, scalable website.',
                icon: <Code className="w-8 h-8 text-[#5B61F6]" />,
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Seamless deployment with performance audits, SEO setup, and zero downtime rollout.',
                icon: <Cloud className="w-8 h-8 text-[#5B61F6]" />,
              },
            ].map((process, i) => (
              <AnimatedItem
                key={i}
                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 space-y-4 relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 text-8xl font-black text-[#3D43D4]/10 group-hover:text-[#3D43D4]/20 transition-colors duration-300">
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

      {/* ── Latest Works Banner ── */}
      <section
        className="relative min-h-[320px] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 overflow-hidden"
        style={{ backgroundImage: "url('/services/works-banner.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 w-full max-w-3xl text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-wide">
            WANT TO SEE OUR LATEST WORK?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-2">
            From sleek landing pages to complex web applications, our portfolio speaks for itself.
          </p>
          <p className="text-white/60 mb-8">Explore projects that have driven real results for real businesses.</p>
          <button className="mt-2 px-10 py-3 bg-white text-[#171629] rounded-full font-semibold shadow hover:bg-[#5B61F6] hover:text-white transition-colors duration-300 uppercase tracking-wide">
            View All Projects
          </button>
        </div>
      </section>

      {/* ── Services ── */}
      <AnimatedSection id="services" className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-4">
            Full-Spectrum Website Development Services
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Everything you need to build, grow, and scale your online presence—under one roof.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Website Design',
                description: 'Bespoke, brand-aligned websites built from scratch—no templates, no compromises.',
                icon: <Paintbrush className="w-8 h-8" />,
                features: ['Brand Identity Integration', 'Interactive UI/UX', 'Accessibility Standards', 'Conversion Optimized'],
              },
              {
                title: 'E-Commerce Development',
                description: 'Powerful online stores that drive sales, streamline checkouts, and delight shoppers.',
                icon: <ShoppingCart className="w-8 h-8" />,
                features: ['Shopify & WooCommerce', 'Payment Gateway Integration', 'Inventory Management', 'Mobile Shopping'],
              },
              {
                title: 'CMS & Web Apps',
                description: 'Content-driven platforms and complex web applications built for scale.',
                icon: <Server className="w-8 h-8" />,
                features: ['WordPress & Headless CMS', 'SaaS Portals', 'Member Dashboards', 'API-Driven Platforms'],
              },
              {
                title: 'SEO & Performance',
                description: 'Technically optimized websites that rank higher and load faster.',
                icon: <SearchCode className="w-8 h-8" />,
                features: ['Core Web Vitals Tuning', 'Technical SEO Audits', 'Schema Markup', 'Page Speed Optimization'],
              },
              {
                title: 'Cloud & Hosting',
                description: 'Scalable cloud infrastructure to keep your website fast, secure, and always online.',
                icon: <Cloud className="w-8 h-8" />,
                features: ['AWS & Vercel Hosting', 'CDN & Caching Setup', 'Auto-Scaling Support', 'Uptime SLAs'],
              },
              {
                title: 'Maintenance & Growth',
                description: 'Ongoing support, updates, and growth iterations to keep your site ahead of the curve.',
                icon: <Gauge className="w-8 h-8" />,
                features: ['24/7 Monitoring', 'Security Patching', 'Content Updates', 'A/B Testing & CRO'],
              },
            ].map((service, i) => (
              <AnimatedItem
                key={i}
                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl space-y-4 group hover:border-[#5B61F6]/60 transition-colors duration-300"
              >
                <div className="text-[#5B61F6] mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#5B61F6]">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-2 pt-2">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-[#5B61F6] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Our Approach Accordion ── */}
      <section
        className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
        style={{ background: 'radial-gradient(circle at 20% 40%, #2e3192 0%, #08060F 80%)' }}
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            How We Approach Website Development?
          </h2>
          <p className="text-white/80 text-lg md:text-xl">
            Our process is collaborative, transparent, and laser-focused on delivering websites that truly work—for your users and your business.
          </p>
        </div>
        <CustomApproachAccordion />
      </section>

      {/* ── Technology Stack ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Technology Stack
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            We choose the right tools for the job—modern, proven, and built for performance.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: 'Frontend', icon: '🎨', tech: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'] },
              { name: 'Backend', icon: '⚙️', tech: ['Node.js', 'Python', 'Laravel', '.NET'] },
              { name: 'Database', icon: '🗄️', tech: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'] },
              { name: 'Cloud', icon: '☁️', tech: ['AWS', 'Vercel', 'Netlify', 'DigitalOcean'] },
              { name: 'CMS', icon: '📝', tech: ['WordPress', 'Sanity', 'Contentful', 'Strapi'] },
              { name: 'E-Commerce', icon: '🛒', tech: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce'] },
              { name: 'Testing', icon: '🧪', tech: ['Cypress', 'Playwright', 'Jest', 'Vitest'] },
              { name: 'Performance', icon: '⚡', tech: ['Lighthouse', 'WebPageTest', 'GTmetrix', 'Datadog'] },
            ].map((stack, i) => (
              <AnimatedItem
                key={i}
                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl group hover:border-[#5B61F6]/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stack.icon}
                </div>
                <h3 className="text-lg font-semibold text-[#5B61F6] mb-4">{stack.name}</h3>
                <ul className="space-y-2">
                  {stack.tech.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#5B61F6] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── Enterprise Solutions Cards ── */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">
            Websites Built for Every Business Need
          </h2>
          <p className="text-center text-white/80 text-lg mb-12 max-w-3xl mx-auto">
            From startups to enterprise, we build web experiences designed to scale with your ambitions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MegaphoneIcon className="w-6 h-6" />,
                title: 'Marketing & Lead Gen Sites',
                desc: 'Conversion-focused marketing websites that turn visitors into qualified leads and loyal customers.',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'Corporate Web Portals',
                desc: 'Professional portals that enhance brand authority, streamline communication, and serve your stakeholders.',
              },
              {
                icon: <Server className="w-6 h-6" />,
                title: 'SaaS & Product Sites',
                desc: 'Engaging SaaS websites that showcase your product, drive signups, and support your growth funnel.',
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: 'Integrated Web Platforms',
                desc: 'Complex multi-system platforms connecting your CRM, ERP, and third-party tools into one seamless web experience.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start text-left"
              >
                <div className="mb-4 text-[#3D43D4]">{card.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-black">{card.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flexible Models ── */}
      <FlexibleModelsSection />

      {/* ── Case Studies ── */}
      <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-center mb-4">
            Client Highlights
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Real results from real partnerships—see how we've helped businesses transform their web presence.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Transformation',
                client: 'Global Retail Brand',
                description: 'Redesigned and rebuilt a high-traffic online store with modern stack, cutting load time by 70%.',
                results: ['200% Revenue Growth', '70% Faster Load Time', '99.99% Uptime'],
                icon: <ShoppingCart className="w-8 h-8 text-[#5B61F6]" />,
                tech: ['Next.js', 'Shopify', 'Tailwind'],
                duration: '6 Months',
                team: 'Team of 8',
              },
              {
                title: 'SaaS Product Launch',
                client: 'FinTech Startup',
                description: 'Built a full product marketing site and onboarding flow that drove 5,000+ signups in 30 days.',
                results: ['5K+ Signups', '42% Conversion Rate', '0 Downtime Launch'],
                icon: <LineChart className="w-8 h-8 text-[#5B61F6]" />,
                tech: ['React', 'Node.js', 'AWS'],
                duration: '4 Months',
                team: '6 Developers',
              },
              {
                title: 'Corporate Portal Rebuild',
                client: 'Fortune 500 Enterprise',
                description: 'Overhauled a legacy corporate portal into a modern, accessible platform serving 50,000 daily users.',
                results: ['50K Daily Users', '60% Engagement Boost', 'WCAG 2.1 AA Compliant'],
                icon: <Globe className="w-8 h-8 text-[#5B61F6]" />,
                tech: ['Vue.js', 'Laravel', 'Azure'],
                duration: '10 Months',
                team: '14 Engineers',
              },
              {
                title: 'Healthcare Patient Portal',
                client: 'Regional Health Network',
                description: 'HIPAA-compliant patient portal with appointment booking, records access, and telehealth integration.',
                results: ['45% Admin Reduction', '90% Patient Satisfaction', '100% HIPAA Compliant'],
                icon: <Heart className="w-8 h-8 text-[#5B61F6]" />,
                tech: ['.NET', 'React', 'Azure'],
                duration: '9 Months',
                team: '10 Members',
              },
              {
                title: 'Real Estate Platform',
                client: 'Property Group',
                description: 'Interactive property search platform with 3D tours, mortgage calculators, and CRM integration.',
                results: ['3x Lead Volume', '55% Longer Session Time', 'Top 3 Google Rankings'],
                icon: <Boxes className="w-8 h-8 text-[#5B61F6]" />,
                tech: ['Next.js', 'PostgreSQL', 'AWS'],
                duration: '7 Months',
                team: '9 Developers',
              },
              {
                title: 'Logistics Dashboard',
                client: 'Supply Chain Network',
                description: 'Real-time fleet and shipment tracking dashboard built on a scalable IoT-connected web platform.',
                results: ['35% Efficiency Gain', '25% Cost Reduction', '100% Geo-Coverage'],
                icon: <Network className="w-8 h-8 text-[#5B61F6]" />,
                tech: ['React', 'MongoDB', 'AWS IoT'],
                duration: '8 Months',
                team: '11 Members',
              },
            ].map((cs, i) => (
              <AnimatedItem
                key={i}
                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl space-y-4 group hover:border-[#5B61F6]/50 transition-all duration-300"
                whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)' }}
              >
                <div className="flex items-start justify-between">
                  <div className="text-[#5B61F6]">{cs.icon}</div>
                  <span className="text-sm text-[#5B61F6] font-medium">{cs.client}</span>
                </div>
                <h3 className="text-xl font-semibold text-[#5B61F6]">{cs.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{cs.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {cs.results.map((r, idx) => (
                    <motion.span
                      key={idx}
                      className="px-3 py-1 bg-[#3D43D4]/10 text-[#5B61F6] rounded-full text-xs font-medium"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(61,67,212,0.2)' }}
                    >
                      {r}
                    </motion.span>
                  ))}
                </div>
                <div className="pt-4 mt-2 border-t border-[#3D43D4]/20">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#5B61F6]" />
                      {cs.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#5B61F6]" />
                      {cs.team}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cs.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#3D43D4]/10 text-[#5B61F6] rounded text-xs border border-[#3D43D4]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── CTA ── */}
      <AnimatedSection id="contact" className="py-24 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Your Next Website
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-300 mb-12 text-lg leading-relaxed">
            Whether you need a stunning landing page, a powerful e-commerce store, or a complex web platform—
            <span className="text-[#5B61F6] font-semibold"> WebCraft Pro</span> is ready to deliver.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-10 py-3 rounded-full font-semibold transition-colors duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="border border-[#3D43D4] hover:bg-[#3D43D4]/10 text-white px-10 py-3 rounded-full font-semibold transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-14 flex flex-wrap justify-center gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: <Star className="w-5 h-5" />, text: 'Award-Winning Designs' },
              { icon: <Shield className="w-5 h-5" />, text: 'Full-Cycle Delivery' },
              { icon: <Zap className="w-5 h-5" />, text: 'Transparent Process' },
              { icon: <Heart className="w-5 h-5" />, text: 'Guaranteed Satisfaction' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex items-center gap-2 text-gray-300"
                whileHover={{ scale: 1.05, color: '#5B61F6' }}
              >
                <span className="text-[#5B61F6]">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center text-white/40 text-sm">
            <span className="font-semibold text-white/60">WebCraft Pro</span>
            <br />
            Digital excellence starts here — with innovation, integrity, and results.
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
