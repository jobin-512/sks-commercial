'use client'

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Roboto } from "next/font/google";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import sd from "@/public/services/sd.png"
import sd2 from "@/public/services/sd2.png"



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
    Database,
    Cloud,
    Lock,
    Globe,
    Cpu,
    Server,
    Terminal,
    GitBranch,
    Workflow,
    Boxes,
    Network,
    LineChart
} from "lucide-react"

gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
});

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
                    opacity: 1, 
        transition: {
            staggerChildren: 0.1
        }
    }
}

const AnimatedSection = ({ children, className = "" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

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
    )
}

const AnimatedItem = ({ children, className = "" }) => {
    return (
        <motion.div
            variants={fadeInUp}
            className={className}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            {children}
        </motion.div>
    )
}

// Accordion for Customized Software Development Process
function ProcessAccordion() {
    const steps = [
        {
            title: '1. Discovery & Consultation',
            description: 'We start by learning about your objectives, technical requirements, and expectations in order to develop a distinct roadmap for your artificial intelligence development project.',
            checklist: [],
        },
        {
            title: '2. Solution Design',
            description: 'Our developers design AI-powered solutions with user experience, scalability, and integration into your existing business environment in mind.',
            checklist: [],
        },
        {
            title: '3. Development & Testing',
            description: 'Artificial intelligence expert developers build and extensively test your AI product with the newest technologies and industry standards.',
            checklist: [],
        },
        {
            title: '4. Deployment & Support',
            description: 'We deploy your AI solution smoothly and provide continuous support, updates, and performance monitoring for long-term success.',
            checklist: [],
        },
    ];
    const [openIndex, setOpenIndex] = useState(0);
    return (
        <div className="space-y-4">
            {steps.map((step, idx) => (
                <div key={idx} className="">
                    <button
                        className={`w-full flex justify-between items-center px-6 py-4 bg-[#181828] text-white rounded-t-2xl focus:outline-none font-semibold text-lg border-b border-[#23234a] ${openIndex === idx ? 'rounded-b-none' : 'rounded-b-2xl'}`}
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
                                <div className="bg-[#ededf7] text-[#181828] rounded-b-2xl px-6 py-6 flex flex-col md:flex-row justify-between items-center border border-t-0 border-[#23234a]">
                                    <div className="flex-1 mb-4 md:mb-0">
                                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                        <p className="mb-4 text-base">{step.description}</p>
                                    </div>
                                    {step.checklist.length > 0 && (
                                        <ul className="min-w-[220px] space-y-2 text-base">
                                            {step.checklist.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-[#3D43D4] font-medium"><span>✔</span> <span className="text-[#181828]">{item}</span></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

export default function AIDevelopmentPage() {
    return (
        <div className="bg-[#08060F] text-white overflow-hidden">
            {/* Hero Section with Parallax */}
            <section className="min-h-[90vh] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative bg-cover bg-[url('/BANNER.jpg')] " > 
                <div className="absolute inset-0 bg-gradient-to-b from-[#171629]/80 to-[#08060F] z-0"></div>
                <div className="absolute inset-0  opacity-50 z-0"></div>
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
                        className="inline-block"
                    >
                        <span className={`${roboto.className} px-4 py-2 rounded-full bg-[#171629] border border-[#3D43D4]/30 text-[#5B61F6] text-sm font-medium`}>
                            AI Development Excellence
                        </span>
                    </motion.div>
                    <h1 className={`${roboto.className} text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] leading-tight`}>
                        Intelligent Solutions Begin with Smarter Development
                    </h1>
                    <p className={`${roboto.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                        Being one of the reliable AI development companies, SKS Tech Solution is enabling businesses to automate, innovate, and grow on the strength of advanced artificial intelligence technologies.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: <Code className="w-5 h-5" />, text: "AI-Powered Business Solutions" },
                            { icon: <Zap className="w-5 h-5" />, text: "NLP" },
                            { icon: <Shield className="w-5 h-5" />, text: "ML & Predictive Analytics" },
                            { icon: <Cloud className="w-5 h-5" />, text: "Scalable AI Applications" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 bg-[#171629]/70 px-4 py-2 rounded-full border border-[#3D43D4]/30"
                            >
                                <span className="text-[#5B61F6]">{item.icon}</span>
                                <span>{item.text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12"
                    >
                        <a href="/contact-us" className="bg-[#3D43D4] w-fit hover:bg-[#5B61F6] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2 mx-auto">
                            Start Your Project <ArrowRight className="w-5 h-5" />
                        </a>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section with Animated Counters */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { icon: <Star className="w-8 h-8 text-[#5B61F6]" />, value: "150+", label: "AI Projects Delivered" },
                        { icon: <Heart className="w-8 h-8 text-[#5B61F6]" />, value: "98%", label: "Client Satisfaction" },
                        { icon: <Award className="w-8 h-8 text-[#5B61F6]" />, value: "10+", label: "Years of AI Innovation" },
                        { icon: <Users className="w-8 h-8 text-[#5B61F6]" />, value: "100+", label: "Global Clients" }
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
                            <p className="text-gray-300">{stat.label}</p>
                        </AnimatedItem>
                    ))}
                </div>
            </AnimatedSection>

            {/* Software Developer Sections */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto space-y-24">
                    {/* Section 1: Left Image, Right Text */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            variants={fadeInUp} 
                            className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-[50%_40%_30%_60%/60%_30%_50%_40%] shadow-lg"
                        >
                            <Image src={sd} alt="Software Development on Laptop" layout="fill" objectFit="cover" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>AI Strategy</h3>
                            <p className="text-gray-300">From concept to launch, we turn your ideas into real products fast.</p>
                            <ul className="space-y-3">
                                {["Market Research", "Prototyping", "Core Features"].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                        <CheckCircle2 className="w-6 h-6 text-[#3D43D4]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact-us" className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                                Explore more <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Section 2: Left Text, Right Image */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>NLP</h3>
                            <p className="text-gray-300">Ongoing support, analytics, and updates.</p>
                            <ul className="space-y-3">
                                {["Analytics", "User Testing", "Iterative Updates"].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                        <CheckCircle2 className="w-6 h-6 text-[#3D43D4]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact-us" className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                                Explore more <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>
                        <motion.div 
                            variants={fadeInUp} 
                            className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-[50%_40%_30%_60%/60%_30%_50%_40%] shadow-lg"
                        >
                            <Image src={sd2} alt="Software Development with Developer" layout="fill" objectFit="cover" />
                        </motion.div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Development Process Section */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        variants={fadeInUp}
                        className={`${roboto.className} text-3xl md:text-4xl font-bold text-center mb-16`}
                    >
                        Our Development Methodology
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery",
                                description: "Understanding business requirements, market validation, and MVP scope definition.",
                                icon: <BarChart className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "02",
                                title: "Data Preparation",
                                description: "Creating rapid prototypes and wireframes to validate user experience and core features.",
                                icon: <Layers className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "03",
                                title: "Model Development",
                                description: "Agile development focusing on core features and essential functionality for MVP launch.",
                                icon: <Code className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "04",
                                title: "Deployment",
                                description: "Quick deployment with analytics integration and user feedback collection.",
                                icon: <Cloud className="w-8 h-8 text-[#5B61F6]" />
                            }
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
                                    <p className="text-gray-300">{process.description}</p>
                                </div>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Latest Works Section  */}
            <section className="relative min-h-[340px] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/services/Untitled-4.png')] bg-cover bg-center" ></div>
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 w-full max-w-3xl text-center flex flex-col items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-wide">WANNA SEE OUR LATEST WORKS?</h2>
                    <p className="text-lg md:text-xl text-white/80 mb-4">Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>Ut enim ad minim veniam quis nostrud exercitation</p>
                    <a href="/portfolio" className="mt-6 px-8 py-3 bg-white text-[#171629] rounded-full font-semibold shadow hover:bg-[#5B61F6] hover:text-white transition-colors duration-300">ALL PROJECTS</a>
                </div>
            </section>

            {/* Services Section with Enhanced Cards */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        variants={fadeInUp}
                        className={`${roboto.className} text-3xl md:text-4xl font-bold text-center mb-16`}
                    >
                        Our MVP Development Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "AI Strategy",
                                description: "Market research and user interviews to validate your business idea before development.",
                                icon: <Code className="w-8 h-8" />,
                                features: ["Market Research", "User Interviews", "Competitor Analysis", "Feasibility Study"]
                            },
                            {
                                title: "Custom ML Models",
                                description: "Quick wireframes and interactive prototypes to visualize your MVP concept.",
                                icon: <Server className="w-8 h-8" />,
                                features: ["Wireframing", "Interactive Prototypes", "User Flow Design", "UI/UX Mockups"]
                            },
                            {
                                title: "NLP Solutions",
                                description: "Essential functionality development focusing on the most critical features for MVP launch.",
                                icon: <Cloud className="w-8 h-8" />,
                                features: ["Essential Features", "Scalable Architecture", "Performance Optimization", "Security"]
                            },
                            {
                                title: "Computer Vision",
                                description: "Comprehensive testing with real users to gather feedback and iterate quickly.",
                                icon: <Workflow className="w-8 h-8" />,
                                features: ["Beta Testing", "User Feedback", "Analytics Integration", "Iteration Planning"]
                            },
                            {
                                title: "Predictive Analytics",
                                description: "Built-in analytics and tracking to measure user behavior and MVP performance.",
                                icon: <Network className="w-8 h-8" />,
                                features: ["Google Analytics", "User Tracking", "Performance Metrics", "A/B Testing"]
                            },
                            {
                                title: "Automation",
                                description: "Future-proof architecture that can grow with your business and user base.",
                                icon: <Database className="w-8 h-8" />,
                                features: ["Cloud Infrastructure", "Database Design", "API Development", "Scalability Planning"]
                            }
                        ].map((service, index) => (
                            <AnimatedItem 
                                key={index}
                                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl space-y-4 group hover:border-[#5B61F6]/50 transition-colors duration-300"
                            >
                                <div className="text-[#5B61F6] mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-[#5B61F6]">{service.title}</h3>
                                <p className="text-gray-300 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                                            <CheckCircle2 className="w-4 h-4 text-[#5B61F6]" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Customized Software Development Process Section */}
            <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ background: 'radial-gradient(circle at 20% 40%, #2e3192 0%, #08060F 80%)' }}>
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">How Do We Work?</h2>
                    <p className="text-white/80 text-lg md:text-xl">We at SKS Tech Solution adopt a systematic, customer-oriented approach to provide efficient, scalable, and innovative AI development services as per your business requirements.</p>
                </div>
                <div className="max-w-4xl mx-auto space-y-8">
                    <ProcessAccordion />
                </div>
            </section>

            {/* Technology Stack Section */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        variants={fadeInUp}
                        className={`${roboto.className} text-3xl md:text-4xl font-bold text-center mb-16`}
                    >
                        Our Technology Stack
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Frontend", icon: "🎨", tech: ["React", "Next.js", "Vue.js", "TypeScript"] },
                            { name: "Backend", icon: "⚙️", tech: ["Node.js", "Python", "Firebase", "Express"] },
                            { name: "Database", icon: "🗄️", tech: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
                            { name: "Design", icon: "🎨", tech: ["Figma", "Sketch", "Adobe XD", "InVision"] },
                            { name: "Analytics", icon: "📊", tech: ["Google Analytics", "Mixpanel", "Hotjar", "Amplitude"] },
                            { name: "Testing", icon: "🧪", tech: ["Jest", "Cypress", "User Testing", "A/B Testing"] },
                            { name: "Deployment", icon: "🚀", tech: ["Vercel", "Netlify", "AWS", "Heroku"] },
                            { name: "Monitoring", icon: "📊", tech: ["Sentry", "LogRocket", "New Relic", "DataDog"] }
                        ].map((stack, index) => (
                            <AnimatedItem 
                                key={index}
                                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl group hover:border-[#5B61F6]/50 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {stack.icon}
                            </div>
                                <h3 className="text-lg font-semibold text-[#5B61F6] mb-4">{stack.name}</h3>
                                <ul className="space-y-2">
                                    {stack.tech.map((item, idx) => (
                                        <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                                            <Cpu className="w-4 h-4 text-[#5B61F6]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* Industries Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">AI Solutions We Deliver to Empower Businesses</h2>
                    <p className="text-center text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto">We provide artificial intelligence software development that brings measurable value to businesses across industries. Here's who benefits from partnering with us:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">
                                {/* Lightbulb icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m7-7h2M3 12H1m16.95-6.95l1.414 1.414M4.636 19.364l1.414-1.414M19.364 19.364l-1.414-1.414M4.636 4.636L6.05 6.05" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Startups</h3>
                            <p className="text-black/80">Helping startups convert their innovative AI ideas into scalable, marketable AI products with shorter development time and much less risk.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">
                                {/* Building icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <path d="M9 8h6M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Enterprises</h3>
                            <p className="text-black/80">Big businesses count on our AI expertise to develop secure, scalable, and enterprise-grade solutions that further automate & streamline their businesses.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">
                                {/* Chip icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <path d="M12 3v2m0 14v2m7-7h2M3 12H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Technology Companies</h3>
                            <p className="text-black/80">We partner with tech companies to enhance their AI capabilities, reduce development time, and deliver advanced AI-driven features.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">
                                {/* Heart/health icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.1566 3 12.5 4.34315 12.5 6C12.5 4.34315 13.8434 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 13.5 12 21 12 21Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Healthcare Industry</h3>
                            <p className="text-black/80">Our AI models support healthcare providers with predictive diagnostics, automated processes, and improved patient care solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flexible Models for Custom Software Development Section */}
            <FlexibleModelsSection />

            {/* Case Studies Section */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        variants={fadeInUp}
                        className={`${roboto.className} text-3xl md:text-4xl font-bold text-center mb-16`}
                    >
                        Success Stories
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "AI Strategy for Retailer",
                                client: "Tech Startup",
                                description: "Developed a SaaS MVP that helped validate market demand and secure seed funding within 3 months.",
                                results: ["500+ Beta Users", "95% User Satisfaction", "Seed Funding Secured"],
                                icon: <Boxes className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                                duration: "8 weeks",
                                team: "6 members"
                            },
                            {
                                title: "AI Scaling for Startup",
                                client: "Retail Startup",
                                description: "Built an e-commerce MVP that tested product demand and pricing strategies successfully.",
                                results: ["200+ Products Listed", "50% Conversion Rate", "Market Validation"],
                                icon: <Globe className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Next.js", "Firebase", "Stripe", "Analytics"],
                                duration: "6 weeks",
                                team: "4 members"
                            },
                            {
                                title: "Healthcare Booking MVP",
                                client: "HealthTech Startup",
                                description: "Created a healthcare appointment booking MVP that validated patient needs and regulatory requirements.",
                                results: ["HIPAA Compliant", "100+ Doctors", "Patient Satisfaction"],
                                icon: <Heart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["React Native", "Node.js", "PostgreSQL", "Twilio"],
                                duration: "10 weeks",
                                team: "7 members"
                            },
                            {
                                title: "EdTech Learning Platform",
                                client: "Education Startup",
                                description: "Developed an educational technology MVP that tested learning methodologies and user engagement.",
                                results: ["1000+ Students", "85% Completion Rate", "Investor Interest"],
                                icon: <LineChart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Vue.js", "Python", "MongoDB", "AWS"],
                                duration: "12 weeks",
                                team: "8 members"
                            },
                            {
                                title: "FinTech Payment MVP",
                                client: "FinTech Startup",
                                description: "Built a financial technology MVP that validated payment processing and security requirements.",
                                results: ["PCI Compliant", "10K+ Transactions", "Regulatory Approval"],
                                icon: <Network className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
                                duration: "14 weeks",
                                team: "10 members"
                            },
                            {
                                title: "Social Networking MVP",
                                client: "Social Startup",
                                description: "Created a social networking MVP that tested user engagement and community building features.",
                                results: ["5000+ Users", "High Engagement", "Viral Growth"],
                                icon: <Globe className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["React Native", "Firebase", "Socket.io", "AWS"],
                                duration: "9 weeks",
                                team: "6 members"
                            }
                        ].map((caseStudy, index) => (
                            <AnimatedItem 
                                key={index}
                                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl space-y-4 group hover:border-[#5B61F6]/50 transition-all duration-300"
                                whileHover={{ 
                                    scale: 1.02,
                                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                }}
                            >
                                <motion.div 
                                    className="flex items-start justify-between"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-[#5B61F6]">{caseStudy.icon}</div>
                                    <span className="text-sm text-[#5B61F6]">{caseStudy.client}</span>
                                </motion.div>
                                <h3 className="text-xl font-semibold text-[#5B61F6]">{caseStudy.title}</h3>
                                <p className="text-gray-300">{caseStudy.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {caseStudy.results.map((result, idx) => (
                                        <motion.span 
                                            key={idx}
                                            className="px-3 py-1 bg-[#3D43D4]/10 text-[#5B61F6] rounded-full text-sm"
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(61, 67, 212, 0.2)" }}
                                        >
                                            {result}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="pt-4 mt-4 border-t border-[#3D43D4]/30">
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-[#5B61F6]" />
                                            <span>{caseStudy.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4 text-[#5B61F6]" />
                                            <span>{caseStudy.team}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {caseStudy.tech.map((tech, idx) => (
                                            <motion.span 
                                                key={idx}
                                                className="px-2 py-1 bg-[#3D43D4]/5 text-[#5B61F6] rounded text-xs"
                                                whileHover={{ scale: 1.05, backgroundColor: "rgba(61, 67, 212, 0.1)" }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                            </div>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section with Enhanced Animation */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2 
                        variants={fadeInUp}
                        className={`${roboto.className} text-3xl md:text-4xl font-bold mb-8`}
                    >
                        Ready to Build with AI?
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp}
                        className="text-gray-300 mb-12 text-lg"
                    >
                        Let's create intelligent solutions for your business.
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <motion.button 
                            className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your MVP <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button 
                            className="border border-[#3D43D4] hover:bg-[#3D43D4]/10 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule a Call
                        </motion.button>
                    </motion.div>
                    <motion.div 
                        className="mt-12 flex flex-wrap justify-center gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: <Star className="w-6 h-6" />, text: "Expert Team" },
                            { icon: <Shield className="w-6 h-6" />, text: "Secure Development" },
                            { icon: <Zap className="w-6 h-6" />, text: "Fast Delivery" },
                            { icon: <Heart className="w-6 h-6" />, text: "Client Satisfaction" }
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
                </div>
            </AnimatedSection>
        </div>
    );
}

// Flexible Models Section Component
function FlexibleModelsSection() {
    return (
        <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[#171629]/50 to-transparent z-0"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.h2
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl font-bold mb-6"
                >
                    Flexible Engagement Models
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
                >
                    Choose a flexible engagement model for your custom software development project. We provide the right team for your needs, on your terms.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex justify-center">
                    <a href="/contact-us" className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-8 py-4 rounded-full font-medium transition-colors duration-300 flex items-center gap-2 text-lg">
                        Schedule your project <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
} 