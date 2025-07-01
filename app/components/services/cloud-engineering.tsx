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
            title: '1. Business & Cloud Readiness Analysis',
            description: 'We evaluate your business goals, current systems, and technical shortcomings to create a cloud strategy that meets your specific operating and growth requirements.',
            checklist: [
                'Infrastructure assessment',
                'Business requirement analysis',
                'Security and compliance check',
                'Risk identification',
                'Cloud adoption roadmap',
            ],
        },
        {
            title: '2. Custom Architecture & Solution Design',
            description: 'Our specialists create secure, scalable, and performance-oriented cloud architectures, with easy integration to your business processes and future expansion.',
            checklist: [
                'Scalable architecture',
                'Security-focused design',
                'Cost-efficient solutions',
                'Performance optimization',
                'Integration planning',
            ],
        },
        {
            title: '3. Smooth Development & Deployment',
            description: 'We build and deploy cloud solutions with best practices, advanced tools, and automation for smooth delivery with low risk and disruption.',
            checklist: [
                'Agile development',
                'Automated deployment',
                'Risk mitigation',
                'Minimal downtime',
                'Quality assurance',
            ],
        },
        {
            title: '4. Continuous Support & Optimization',
            description: 'We monitor, maintain, and maximize performance proactively so your cloud environment will be secured, optimized, and aligned with business needs that keep changing over time.',
            checklist: [
                '24/7 monitoring',
                'Security updates',
                'Performance tuning',
                'Cost optimization',
                'Scalability improvements',
            ],
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
                                    <ul className="min-w-[220px] space-y-2 text-base">
                                        {step.checklist.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-[#3D43D4] font-medium"><span>✔</span> <span className="text-[#181828]">{item}</span></li>
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

export default function CloudEngineeringPage() {
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
                            Cloud Engineering Excellence
                        </span>
                    </motion.div>
                    <h1 className={`${roboto.className} text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] leading-tight`}>
                        Cloud Engineering Services to Power Your Digital Future
                    </h1>
                    <p className={`${roboto.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                        At SKS Tech Solution, we enable businesses to unlock the real power of the cloud. As your reliable technology partner, we architect, build, and operate scalable cloud environments that fuel growth, security, and operational efficiency.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: <Code className="w-5 h-5" />, text: "Cloud Architecture & Migration" },
                            { icon: <Zap className="w-5 h-5" />, text: "Infrastructure Modernization" },
                            { icon: <Shield className="w-5 h-5" />, text: "DevOps & Automation" },
                            { icon: <Cloud className="w-5 h-5" />, text: "Secure, reliable, and Scalable Systems" }
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
                        <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2 mx-auto">
                            Start Your Cloud Journey <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section with Animated Counters */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { icon: <Star className="w-8 h-8 text-[#5B61F6]" />, value: "200+", label: "Cloud Projects Delivered" },
                        { icon: <Heart className="w-8 h-8 text-[#5B61F6]" />, value: "99%", label: "Client Satisfaction" },
                        { icon: <Award className="w-8 h-8 text-[#5B61F6]" />, value: "12+", label: "Years of Expertise" },
                        { icon: <Users className="w-8 h-8 text-[#5B61F6]" />, value: "100+", label: "Global Enterprise Clients" }
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
                            <Image src={sd} alt="Cloud Architecture & Migration" layout="fill" objectFit="cover" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>End-to-End Cloud Services for Modern Businesses</h3>
                            <p className="text-gray-300">We help businesses design, build, and manage secure, scalable cloud solutions that boost growth, improve performance, and support daily operations.</p>
                            <ul className="space-y-3">
                                {[
                                    "Cloud Strategy & Consulting",
                                    "Performance Optimization",
                                    "Multi-Cloud & Hybrid Solutions",
                                    "Security-First Architecture"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                        <CheckCircle2 className="w-6 h-6 text-[#3D43D4]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                                Explore More <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                    </div>

                    {/* Section 2: Left Text, Right Image */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>Proactive Cloud Management & Support</h3>
                            <p className="text-gray-300">We keep your cloud safe and running smoothly with 24/7 monitoring, regular updates, and quick issue resolution.</p>
                            <ul className="space-y-3">
                                {[
                                    "24/7 Monitoring",
                                    "Cost Optimization",
                                    "Compliance & Data Protection",
                                    "Disaster Recovery Solutions"
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                        <CheckCircle2 className="w-6 h-6 text-[#3D43D4]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                                Explore More <ArrowRight className="w-5 h-5" />
                            </button>
                        </motion.div>
                        <motion.div 
                            variants={fadeInUp} 
                            className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-[50%_40%_30%_60%/60%_30%_50%_40%] shadow-lg"
                        >
                            <Image src={sd2} alt="Cloud Management & Support" layout="fill" objectFit="cover" />
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
                        Our Proven Cloud Engineering Approach
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Cloud Readiness Assessment",
                                description: "We assess your current systems to create a secure, scalable, and tailored cloud strategy.",
                                icon: <BarChart className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "02",
                                title: "Architecture & Design",
                                description: "Our experts design secure, high-performing, and cost-efficient cloud infrastructure for your business success.",
                                icon: <Layers className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "03",
                                title: "Seamless Cloud Migration",
                                description: "We make cloud migration quick, reliable, and with the least downtime, and no business disruption.",
                                icon: <Code className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "04",
                                title: "Optimization",
                                description: "Ongoing monitoring, security patching, and performance optimization to maintain cloud performance at its peak.",
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
                        Our Cloud Engineering Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Cloud Consulting & Strategy",
                                description: "Seamless cloud migrations are facilitated, employing well-tested methods to transfer data, applications, and systems into the cloud at minimal risk and zero disruption to existing businesses.",
                                icon: <Code className="w-8 h-8" />,
                                features: [
                                    "Cloud readiness assessment",
                                    "Customized cloud strategy",
                                    "Cost optimization planning",
                                    "Risk identification",
                                    "Growth-focused recommendations"
                                ]
                            },
                            {
                                title: "Cloud Architecture & Migration",
                                description: "We design and implement scalable cloud systems tailored to your growth plans.",
                                icon: <Server className="w-8 h-8" />,
                                features: [
                                    "AWS, Azure, Google Cloud",
                                    "Infrastructure Assessment",
                                    "Secure Data Migration",
                                    "Application Re-Architecture"
                                ]
                            },
                            {
                                title: "Cloud Migration & Deployment",
                                description: "We manage seamless cloud migrations, using proven methodologies to move your data, apps, and systems to the cloud with minimal risk and zero business disruption.",
                                icon: <Cloud className="w-8 h-8" />,
                                features: [
                                    "Minimal downtime",
                                    "Data integrity assurance",
                                    "Application rehosting",
                                    "Automated deployment tools"
                                ]
                            },
                            {
                                title: "Cloud Security Engineer Services",
                                description: "Our dedicated cloud security engineer team ensures your systems are protected against evolving cyber threats.",
                                icon: <Workflow className="w-8 h-8" />,
                                features: [
                                    "Cloud Security Audits",
                                    "Threat Detection & Prevention",
                                    "Compliance Management",
                                    "Identity & Access Controls"
                                ]
                            },
                            {
                                title: "Google Cloud Expertise",
                                description: "Leverage our certified specialists for superior Google cloud solutions.",
                                icon: <Network className="w-8 h-8" />,
                                features: [
                                    "Google Cloud Professional Data Engineer",
                                    "Data-driven Cloud Solutions",
                                    "AI & Machine Learning Integration",
                                    "Seamless Application Modernization"
                                ]
                            },
                            {
                                title: "Cloud DevOps & Automation",
                                description: "Our DevOps engineers ensure the development process, deployment, and operations are set up with automation tools for rapid release, better collaboration, and sturdier infrastructure services.",
                                icon: <Database className="w-8 h-8" />,
                                features: [
                                    "CI/CD pipeline setup",
                                    "Automated deployments",
                                    "Infrastructure as Code (IaC)",
                                    "Faster release cycles"
                                ]
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">We Follow a Tailored Cloud Development Process</h2>
                    <p className="text-white/80 text-lg md:text-xl">We adopt a customized cloud development process specific to your business objectives, providing secure, scalable, and efficient cloud solutions by way of strategic planning, smooth integration, and continuous optimization.</p>
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
                            { name: "Cloud Providers", icon: "☁️", tech: ["AWS", "Azure", "Google Cloud"] },
                            { name: "Monitoring", icon: "📈", tech: ["Prometheus", "Grafana", "CloudWatch"] },
                            { name: "Automation", icon: "🤖", tech: ["Terraform", "Kubernetes", "Ansible"] },
                            { name: "Data & Analytics", icon: "📊", tech: ["BigQuery", "Dataflow", "Google professional data engineer Tools"] },
                            { name: "Security", icon: "🔒", tech: ["Access Control", "Data Encryption", "Threat Monitoring & Detection"] },
                            { name: "DevOps", icon: "⚙️", tech: ["Jenkins", "Docker", "CI/CD Pipelines"] }
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">Cloud Engineering Solutions We Deliver for Modern Businesses</h2>
                    <p className="text-center text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto">SKS Tech Solution empowers organizations across industries with robust, scalable, and secure cloud engineering solutions. Here's how we help you transform and future-proof your business:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* Cloud migration icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Cloud Migration & Modernization</h3>
                            <p className="text-black/80">Seamlessly move your applications, data, and workloads to the cloud with minimal risk and zero business disruption.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* Security icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Cloud Security & Compliance</h3>
                            <p className="text-black/80">Protect your cloud environment with advanced security frameworks, real-time monitoring, and regulatory compliance.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* DevOps icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-8-8v16" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">DevOps & Automation</h3>
                            <p className="text-black/80">Accelerate your cloud operations with CI/CD pipelines, infrastructure as code, and automated deployments for faster innovation.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* Multi-cloud icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Multi-Cloud & Hybrid Solutions</h3>
                            <p className="text-black/80">Leverage the best of multiple cloud providers and on-premise systems for resilience, flexibility, and business continuity.</p>
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
                                title: "Smart Retail Platform",
                                client: "Multi-Cloud Architecture for Global Expansion",
                                description: "A hybrid cloud solution designed and implemented using AWS & Google Cloud that would allow seamless operations and improve data redundancy across regions.",
                                results: ["60% Faster Global Rollout", "Zero Data Loss Across Regions", "2x System Resilience"],
                                icon: <Boxes className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["AWS", "Google Cloud", "Terraform"],
                                duration: "14 weeks",
                                team: "7 members"
                            },
                            {
                                title: "MedSync Healthcare",
                                client: "Cloud Security Fortification for Patient Data",
                                description: "Our cloud security engineer specialists designed a zero-trust security framework for a healthcare cloud environment, ensuring strict regulatory compliance.",
                                results: ["100% HIPAA & GDPR Compliant", "Real-Time Threat Monitoring Enabled", "Zero Security Breaches Post-Migration"],
                                icon: <Heart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Azure", "Kubernetes", "Sentinel"],
                                duration: "10 weeks",
                                team: "5 members"
                            },
                            {
                                title: "LogiChain Transport",
                                client: "Fleet Management with Real-Time Cloud Infrastructure",
                                description: "Implemented a cloud platform for real-time tracking of vehicles, predictive maintenance notifications, and fuel optimization.",
                                results: ["35% Fuel Cost Reduction", "30% Fewer Downtime Incidents", "Full Global GPS Coverage"],
                                icon: <Network className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["AWS", "IoT Core", "Node.js"],
                                duration: "16 weeks",
                                team: "8 members"
                            },
                            {
                                title: "SkillUp EdTech",
                                client: "Cloud-Native Learning Platform with Auto-Scaling",
                                description: "Built a fully cloud-native e-learning platform capable of handling unpredictable traffic spikes during virtual events and exams.",
                                results: ["500% Traffic Surge Handling", "0 System Outages During Events", "AI-Powered Content Recommendations"],
                                icon: <LineChart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Google Cloud", "Firebase", "React"],
                                duration: "15 weeks",
                                team: "9 members"
                            },
                            {
                                title: "EcoPower Energy",
                                client: "Smart Grid Monitoring with Cloud & IoT",
                                description: "Engineered a scalable cloud solution for real-time energy grid monitoring, improving efficiency and minimizing outages in rural regions.",
                                results: ["20% Energy Loss Reduction", "Real-Time Fault Detection", "3x Faster Outage Response"],
                                icon: <Globe className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Azure", "IoT Hub", "GraphQL"],
                                duration: "18 weeks",
                                team: "10 members"
                            },
                            {
                                title: "VaultFin Banking",
                                client: "High-Security Cloud Infrastructure for Digital Banking",
                                description: "Deployed a secure, compliant cloud environment to support a growing digital bank with real-time fraud detection and uninterrupted operations.",
                                results: ["99.999% Platform Uptime", "AI-Powered Fraud Prevention", "Scaled to 1 Million Users Securely"],
                                icon: <Lock className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Google Cloud", "Kubernetes", "Firebase"],
                                duration: "20 weeks",
                                team: "12 members"
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
                        Ready to Future-Proof Your Business with the Cloud?
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp}
                        className="text-gray-300 mb-12 text-lg"
                    >
                        Partner with SKS Tech Solution to build secure and innovative cloud solutions backed by certified expertise.
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
                            Start Your Project <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button 
                            className="border border-[#3D43D4] hover:bg-[#3D43D4]/10 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Schedule a Consultation
                        </motion.button>
                    </motion.div>
                    <motion.div 
                        className="mt-12 flex flex-wrap justify-center gap-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: <Star className="w-6 h-6" />, text: "Expert Engineers" },
                            { icon: <Shield className="w-6 h-6" />, text: "Certified Google Cloud Professionals" },
                            { icon: <Lock className="w-6 h-6" />, text: "Secure & Compliant Development" },
                            { icon: <Heart className="w-6 h-6" />, text: "24/7 Support" }
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
    const models = [
        {
            label: 'Custom Engagements to Fit Your Business',
            image: '/services/Layer-17.png',
            title: 'Custom Engagements to Fit Your Business',
            description: 'We also offer custom engagement models designed to meet unique business needs. You define the terms, and we deliver solutions that align perfectly with your goals.',
            checklist: [
                'Tailored to your needs',
                'Flexible contracts',
                'Full control over deliverables',
            ],
        },
        {
            label: 'Time & Material Model for Flexibility',
            image: '/services/Layer-17.png',
            title: 'Time & Material Model for Flexibility',
            description: 'Perfect for evolving projects where requirements may change. Pay only for the actual time and resources used, offering flexibility and control throughout the development process.',
            checklist: [
                'Flexible project scope',
                'Transparent billing',
                'Ideal for long-term enhancements',
            ],
        },
        {
            label: 'Dedicated Cloud Team for Long-Term Needs',
            image: '/services/Layer-17.png',
            title: 'Dedicated Cloud Team for Long-Term Needs',
            description: 'A full-time, skilled team working exclusively on your project. Ideal for businesses needing continuous development, cloud maintenance, or long-term technical support.',
            checklist: [
                'Full project ownership',
                'Quick scalability',
                'Continuous development support',
            ],
        },
    ];
    const [active, setActive] = useState(0);
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Flexible Engagement Models That Fit Your Cloud Journey</h2>
                <p className="text-white/80 text-lg md:text-xl">We offer flexible engagement models to suit your project needs and budget. Whether it's a short-term project or ongoing support, we have the right solution for your business.</p>
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