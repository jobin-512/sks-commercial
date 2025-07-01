'use client'

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Roboto } from "next/font/google";
import {MegaphoneIcon} from "lucide-react"
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
import { LucideIceCreamCone } from 'lucide-react';

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
function CustomApproachAccordion() {
    const steps = [
        {
            title: 'Discovery & Planning',
            description: 'Every successful project begins with understanding. We dive deep into your operations to define goals and build a development strategy that aligns software capabilities with real-world objectives.',
            checklist: [
                'Market & Competitor Research',
                'Requirement Scoping Sessions',
                'Technology & Platform Roadmapping',
            ],
        },
        {
            title: 'UI/UX Design Strategy',
            description: "We use smart design to make your digital products easy and enjoyable to use. Every screen and feature is built for real users, making sure it's clear, accessible, and matches your brand.",
            checklist: [
                'Persona-Based Interaction Flows',
                'Responsive Wireframes & Mockups',
                'Design Systems & Brand Alignment',
            ],
        },
        {
            title: 'Agile Software Development',
            description: 'We use an iterative development process that focuses on flexibility, velocity, and co-creation. This means delivery stays aligned with your changing business needs and user input.',
            checklist: [
                'Sprint Planning & Execution',
                'Real-Time Progress Visibility',
                'Continuous Integration Builds',
            ],
        },
        {
            title: 'Launch & Optimization',
            description: 'Careful final deployment is executed to avoid disruption and gain maximum impact. After launch, we track and optimize to guarantee sustained performance, reliability, and success.',
            checklist: [
                'Production Deployment Setup',
                'Performance Testing & QA',
                'Live Monitoring & Feedback Loop',
            ],
        },
    ];
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="max-w-4xl mx-auto space-y-4">
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
                                <div className="bg-[#10101A] border border-t-0 border-[#3D43D4]/30 text-white rounded-b-2xl px-6 py-6 flex flex-col md:flex-row justify-between items-center">
                                    <div className="flex-1 mb-4 md:mb-0">
                                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                                        <p className="mb-4 text-base text-white/80">{step.description}</p>
                                    </div>
                                    <ul className="min-w-[220px] space-y-2 text-base">
                                        {step.checklist.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-[#5B61F6] font-medium"><span>✔</span> <span className="text-white">{item}</span></li>
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

export default function SoftwareDevelopmentPage() {
    return (
        <div className="bg-[#08060F] text-white overflow-hidden">
            {/* Hero Section with Parallax */}
            <section className="min-h-[90vh] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative bg-cover bg-[url('/BANNER.jpg')]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#171629]/90 to-[#08060F] z-0"></div>
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10 z-0"></div>
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
                            Enterprise Software Development
                        </span>
                    </motion.div>
                    <h1 className={`${roboto.className} text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] leading-tight`}>
                        Code with Purpose. Build with Confidence
                    </h1>
                    <p className={`${roboto.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                        We develop smart, custom software systems for optimizing operations, enhancing output, and driving digital transformation.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: <Code className="w-5 h-5" />, text: "Tailored Solutions" },
                            { icon: <Zap className="w-5 h-5" />, text: "Optimized Performance" },
                            { icon: <Shield className="w-5 h-5" />, text: "Enterprise-Grade Security" },
                            { icon: <Cloud className="w-5 h-5" />, text: "Cloud-Ready Deployments" }
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
                        { icon: <Star className="w-8 h-8 text-[#5B61F6]" />, value: "300+", label: "Successful Launches" },
                        { icon: <Heart className="w-8 h-8 text-[#5B61F6]" />, value: "99%", label: "Client Retention Rate" },
                        { icon: <Award className="w-8 h-8 text-[#5B61F6]" />, value: "10+", label: "Years of Excellence" },
                        { icon: <Users className="w-8 h-8 text-[#5B61F6]" />, value: "100+", label: "Satisfied Business Partners" }
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
                    {/* Expert Software Teams Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            variants={fadeInUp} 
                            className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-[50%_40%_30%_60%/60%_30%_50%_40%] shadow-lg"
                        >
                            <Image src={sd} alt="Expert Software Teams" layout="fill" objectFit="cover" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>Expert Software Teams</h3>
                            <p className="text-gray-300">Our software development services are meant to be a fine-tuning for your digital architecture. Whether CRM, automation, or analytics, we connect the dots to enable real-time decisions and scalable achievements.</p>
                            <ul className="space-y-3">
                                {["Intelligent CRM Systems", "Seamless Tool Connectivity", "Real-Time Dashboards"].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                        <CheckCircle2 className="w-6 h-6 text-[#3D43D4]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                                Explore more <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Core Software Development Capabilities Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>Core Software Development Capabilities</h3>
                            <p className="text-gray-300">We deliver structured, flexible, and scalable software solutions through thoughtful engineering, ensuring faster development cycles, consistent performance, and long-term adaptability across all digital platforms.</p>
                            <ul className="space-y-3">
                                {["Modular Code Architecture", "Platform-Agnostic Development", "Custom UI Component Libraries"].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                        <CheckCircle2 className="w-6 h-6 text-[#3D43D4]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                                Explore more <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                        <motion.div 
                            variants={fadeInUp} 
                            className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-[50%_40%_30%_60%/60%_30%_50%_40%] shadow-lg"
                        >
                            <Image src={sd2} alt="Core Software Development Capabilities" layout="fill" objectFit="cover" />
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
                        Our Development Blueprint
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Strategy",
                                description: "Grasping your unique goals and business challenges.",
                                icon: <BarChart className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "02",
                                title: "Planning",
                                description: "Crafting a resilient, scalable framework with security top of mind.",
                                icon: <Layers className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "03",
                                title: "Creation",
                                description: "Iterative builds with agile practices and rapid feedback loops.",
                                icon: <Code className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "04",
                                title: "Launch",
                                description: "Smooth rollout with CI/CD pipelines and zero downtime.",
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
                    <button className="mt-6 px-8 py-3 bg-white text-[#171629] rounded-full font-semibold shadow hover:bg-[#5B61F6] hover:text-white transition-colors duration-300">ALL PROJECTS</button>
                </div>
            </section>

            {/* Services Section with Enhanced Cards */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        variants={fadeInUp}
                        className={`${roboto.className} text-3xl md:text-4xl font-bold text-center mb-16`}
                    >
                        Full-Spectrum Software Development Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Custom Software Solutions",
                                description: "Personalized programs tailored to your exact workflow.",
                                icon: <Code className="w-8 h-8" />,
                                features: ["Process Mapping", "Bespoke Builds", "QA & Testing", "Lifecycle Support"]
                            },
                            {
                                title: "Enterprise Applications",
                                description: "Robust software crafted for large-scale operations.",
                                icon: <Server className="w-8 h-8" />,
                                features: ["ERP Deployment", "CRM Implementation", "HR Tools", "Digital Workflows"]
                            },
                            {
                                title: "Cloud Enablement",
                                description: "Cloud-first development with seamless migration and native builds.",
                                icon: <Cloud className="w-8 h-8" />,
                                features: ["AWS & GCP Solutions", "Azure Integration", "Multi-Cloud Support", "Scalable Architectures"]
                            },
                            {
                                title: "DevOps & CI/CD",
                                description: "Faster development with accuracy and stability.",
                                icon: <Workflow className="w-8 h-8" />,
                                features: ["Automated Pipelines", "Scalable Containers", "Kubernetes Environments", "Intelligent Monitoring"]
                            },
                            {
                                title: "API & Integrations",
                                description: "Flexible and secure API ecosystems built for speed.",
                                icon: <Network className="w-8 h-8" />,
                                features: ["RESTful Services", "GraphQL Development", "Token-Based Security", "Developer Portals"]
                            },
                            {
                                title: "Data Engineering",
                                description: "Efficient database management for performance and reliability.",
                                icon: <Database className="w-8 h-8" />,
                                features: ["RDBMS & NoSQL Setup", "Database Porting", "Speed Optimization", "Maintenance Services"]
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">How We Approach Custom Development?</h2>
                    <p className="text-white/80 text-lg md:text-xl">As one of the trusted software development outsourcing companies, our methodology puts your goals front and center. We specialize in shaping systems that drive value and usability across every level.</p>
                </div>
                <CustomApproachAccordion />
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
                            { name: "Frontend", icon: "🎨", tech: ["React", "Vue.js", "Angular", "Next.js"] },
                            { name: "Backend", icon: "⚙️", tech: ["Node.js", "Python", "Java", ".NET"] },
                            { name: "Database", icon: "🗄️", tech: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
                            { name: "Cloud", icon: "☁️", tech: ["AWS", "Azure", "GCP", "DigitalOcean"] },
                            { name: "DevOps", icon: "🔄", tech: ["Docker", "Kubernetes", "Jenkins", "GitLab"] },
                            { name: "Testing", icon: "🧪", tech: ["Jest", "Selenium", "Cypress", "JUnit"] },
                            { name: "Security", icon: "🔒", tech: ["OWASP", "SSL/TLS", "JWT", "OAuth"] },
                            { name: "Monitoring", icon: "📊", tech: ["Prometheus", "Grafana", "ELK Stack", "New Relic"] }
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">Enterprise Software Built for the Future</h2>
                    <p className="text-center text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto">At SKS Tech Solution, a trusted name in offshore software development services, we create business software designed to support growth and agility.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">
                                {/* Marketing Automation Tools icon */}
                                <MegaphoneIcon />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Marketing Automation Tools</h3>
                            <p className="text-black/80">Build smart marketing tools that use data to boost engagement, sales, and make better decisions.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">
                                {/* Web-Based Business Hubs icon */}
                                <Globe />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Web-Based Business Hubs</h3>
                            <p className="text-black/80">Design portals that enhance collaboration, streamline workflows, and improve customer interaction experiences.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">
                                {/* Tailored Enterprise Apps icon */}
                                <Server />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Tailored Enterprise Apps</h3>
                            <p className="text-black/80">Develop custom-fit enterprise apps for operational control, process efficiency, and scalable solutions.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">
                                {/* Integrated Resource Management icon */}
                                <Layers />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Integrated Resource Management</h3>
                            <p className="text-black/80">Integrate HR, finance, and logistics through smart systems for hassle-free business running.</p>
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
                        Client Highlights
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "ERP Transformation",
                                client: "Global Engineering Firm",
                                description: "Built a platform to integrate procurement, finance, and production.",
                                results: ["30% Operational Savings", "50% Faster Cycles", "99.9% Uptime"],
                                icon: <Boxes className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Java", "Spring Boot", "Kubernetes"],
                                duration: "12 Months",
                                team: "Team of 15"
                            },
                            {
                                title: "Cloud Upgrade",
                                client: "SaaS Leader",
                                description: "Replaced legacy systems with a scalable microservices architecture.",
                                results: ["40% Speed Improvement", "60% Cost Cut", "Zero Migration Downtime"],
                                icon: <Cloud className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["AWS", "Terraform", "Docker"],
                                duration: "8 Months",
                                team: "10 Devs"
                            },
                            {
                                title: "Next-Gen E-Commerce",
                                client: "Retail Conglomerate",
                                description: "Launched a robust system to handle high traffic and seamless checkout.",
                                results: ["200% Revenue Spike", "99.99% System Availability", "5x Performance"],
                                icon: <Globe className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Node.js", "React", "Redis"],
                                duration: "10 Months",
                                team: "12 Engineers"
                            },
                            {
                                title: "Patient Software Suite",
                                client: "HealthCare Services",
                                description: "Developed a HIPAA-compliant tool for a better patient experience.",
                                results: ["45% Workflow Efficiency", "90% Positive Feedback", "100% Compliance"],
                                icon: <Heart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: [".NET", "Azure", "Power BI"],
                                duration: "9 Months",
                                team: "8 Members"
                            },
                            {
                                title: "Trading Dashboard",
                                client: "Financial Institution",
                                description: "Delivered real-time risk tracking for high-speed trading operations.",
                                results: ["0.1ms Latency", "99.999% System Uptime", "50% ROI in Year 1"],
                                icon: <LineChart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["C++", "Python", "Kafka"],
                                duration: "14 Months",
                                team: "20 Developers"
                            },
                            {
                                title: "IoT Fleet Dashboard",
                                client: "Logistics Network",
                                description: "Designed a tracking system that delivered fuel savings and routing accuracy.",
                                results: ["35% Fuel Efficiency", "25% Travel Time Reduced", "100% Geo-Coverage"],
                                icon: <Network className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["React Native", "MongoDB", "AWS IoT"],
                                duration: "11 Months",
                                team: "9 Team Members"
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
                        Let's Build What's Next
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp}
                        className="text-gray-300 mb-12 text-lg"
                    >
                        Whether you need to reimagine workflows or launch a full-scale enterprise app, SKS Tech Solution is ready to help.
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap justify-center gap-4 w-full"
                    >
                        <motion.button 
                        href="/contactus"
                            className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start Your Project <ArrowRight className="w-5 h-5" />
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
                            { icon: <Star className="w-6 h-6" />, text: "Pro-Level Teams" },
                            { icon: <Shield className="w-6 h-6" />, text: "Full-Cycle Delivery" },
                            { icon: <Zap className="w-6 h-6" />, text: "Transparent Collaboration" },
                            { icon: <Heart className="w-6 h-6" />, text: "Guaranteed Satisfaction" }
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
                    <div className="mt-16 text-center text-white/60 text-sm font-semibold">
                        SKS TECH SOLUTION<br />
                        Digital excellence starts here — with innovation, integrity, and results.
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
}

// Flexible Models Section Component
function FlexibleModelsSection() {
    const models = [
        {
            label: 'Fixed Price Model',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Fixed Price Model',
            description: 'Best for sharply defined projects with well-planned requirements, timelines, and budgets. This model offers predictability and minimal risk.',
            checklist: [
                'Pre-approved timelines',
                'Defined deliverables',
                'Cost certainty',
            ],
        },
        {
            label: 'Time and Material Model',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Time and Material Model',
            description: 'Best suited for evolving projects, this model allows businesses to scale development as needed and pay based on hours or tasks completed.',
            checklist: [
                'No long-term lock-in',
                'Budget control',
                'Agile adaptability',
            ],
        },
        {
            label: 'Build-Operate-Transfer Model',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Build-Operate-Transfer Model',
            description: 'Perfect for businesses looking to establish in-house teams through expert setup. We build and manage your offshore unit, then transfer ownership.',
            checklist: [
                'Rapid setup',
                'Expert oversight',
                'Full handover',
            ],
        },
    ];
    const [active, setActive] = useState(0);
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Choose a Model That Fits Your Business</h2>
                <p className="text-white/80 text-lg md:text-xl">Being a reliable partner for outsourcing software development, we offer flexible engagement models:</p>
            </div>
            <div className="flex flex-col items-center">
                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-8">
                    {models.map((model, idx) => (
                        <button
                            key={model.label}
                            onClick={() => setActive(idx)}
                            className={`px-8 py-3 rounded-lg font-semibold text-lg border transition-all duration-200 focus:outline-none ${active === idx ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white/60 hover:bg-white/10'}`}
                            style={{ position: 'relative' }}
                        >
                            {model.label}
                            {active === idx && (
                                <span className="absolute left-1/2 -bottom-3 transform -translate-x-1/2">
                                    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 12L0 0H24L12 12Z" fill="white"/>
                                    </svg>
                                </span>
                            )}
                        </button>
                    ))}
                </div>
                {/* Card */}
                <div className="w-full max-w-4xl bg-[#10101A] border border-white rounded-3xl flex flex-col md:flex-row items-center p-8 gap-8 relative">
                    <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center">
                        <img src={models[active].image} alt={models[active].label} className="rounded-2xl object-cover w-full h-64 md:h-72" />
                    </div>
                    <div className="w-full md:w-1/2 text-left flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-4">{models[active].title}</h3>
                        <p className="text-white/80 mb-6">{models[active].description}</p>
                        <ul className="space-y-3">
                            {models[active].checklist.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-lg text-white font-semibold">
                                    <span className="text-[#2563eb]">✔</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
} 