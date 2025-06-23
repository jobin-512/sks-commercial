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
            title: 'Design',
            description: 'The design phase involves creating the visual and interactive aspects of the software development. Our custom software development services are critical in ensuring that the software solution is user-friendly and aesthetically pleasing.',
            checklist: [
                'Interaction Flows',
                'Wireframing',
                'Visual Design',
                'Brand Alignment',
            ],
        },
        {
            title: 'Development',
            description: 'The development phase is where the actual coding and implementation take place. Our experienced developers use best practices and the latest technologies to build robust, scalable, and secure software solutions.',
            checklist: [
                'Agile Development',
                'Code Reviews',
                'Quality Assurance',
                'Continuous Integration',
            ],
        },
        {
            title: 'Deployment',
            description: 'The deployment phase ensures your software is launched smoothly and efficiently. We provide ongoing support and maintenance to guarantee optimal performance and user satisfaction.',
            checklist: [
                'Cloud Deployment',
                'Monitoring & Support',
                'User Training',
                'Performance Optimization',
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

// Accordion for Customized App Development Process Section
function CustomAppProcessAccordion() {
    const steps = [
        {
            title: "Discovery",
            description: "We analyze your business goals and user needs to lay a strong foundation.",
            checklist: [
                "Understand the target audience",
                "Define core app features",
                "Research competitors",
                "Develop a comprehensive project timeline"
            ]
        },
        {
            title: "Design",
            description: "We design intuitive and interactive interfaces centered on user experience.",
            checklist: [
                "Wireframes and UI mockups",
                "UX journey planning",
                "Visual branding",
                "Gather client feedback and iterate"
            ]
        },
        {
            title: "Development",
            description: "We code secure and high-performing mobile apps tailored to your needs.",
            checklist: [
                "Frontend and backend development",
                "API integration",
                "Platform compatibility",
                "Perform regular unit testing"
            ]
        },
        {
            title: "Deployment",
            description: "We ensure smooth app launch and post-release stability.",
            checklist: [
                "App store submission",
                "Quality assurance testing",
                "Performance monitoring",
                "Plan for updates and support"
            ]
        }
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
            <section className="min-h-[90vh] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-[#171629]/50 to-[#08060F] z-0"></div>
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
                            Mobile App Development Excellence
                        </span>
                    </motion.div>
                    <h1 className={`${roboto.className} text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] leading-tight`}>
                        Mobile App Development That Connects, Engages, and Grows!
                    </h1>
                    <p className={`${roboto.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                        As a trusted mobile app development company, SKS Tech Solution turns complex concepts into feature-rich applications that offer seamless user experiences.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            "Native iOS & Android App Development",
                            "Cross-Platform Expertise",
                            "App Store Launch & Optimization",
                            "Secure, Scalable, and Future-Ready Apps"
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-2 bg-[#171629]/70 px-4 py-2 rounded-full border border-[#3D43D4]/30"
                            >
                                <span className="text-[#5B61F6]">✔</span>
                                <span>{item}</span>
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
                            Start Your Project
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section with Animated Counters */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { value: "300+", label: "Mobile Apps Delivered" },
                        { value: "99%", label: "Client Satisfaction" },
                        { value: "10+", label: "Years of Innovation" },
                        { value: "100+", label: "Enterprise Clients" }
                    ].map((stat, index) => (
                        <AnimatedItem key={index} className="space-y-4">
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
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>UI/UX Design That Engages</h3>
                            <p className="text-gray-300">The core of our design process rests on a clean layout, smooth yet functional interactions, and user psychology to give an app the feel of engagement and pleasure on every single screen on every single device.</p>
                            <ul className="space-y-3">
                                {["UI/UX Design That Engages", "Native & Cross-Platform Efficiency", "Fast Deployment with Full App Store Support"].map((feature, idx) => (
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

                    {/* Section 2: Left Text, Right Image */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>Post-Launch Support </h3>
                            <p className="text-gray-300">Post-launch and on into eternity, we have ceaseless Monitoring, new Feature upgrade Services, and Tech support for your app to keep it competitive, secure, and adhering to current platform standards.</p>
                            <ul className="space-y-3">
                                {["Real-Time Analytics", "Maintenance & Feature Expansion", "Performance Optimization"].map((feature, idx) => (
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
                                description: "Understanding business requirements, challenges, and objectives.",
                                icon: <BarChart className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "02",
                                title: "Design",
                                description: "Creating high-performance, scalable, and user-friendly mobile applications.",
                                icon: <Layers className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "03",
                                title: "Development",
                                description: "Agile development with regular iterations and feedback.",
                                icon: <Code className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "04",
                                title: "Launch",
                                description: "Seamless deployment with continuous integration.",
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
                        Our Mobile App Development Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "iOS App Development",
                                description: "We help you create smooth, creative apps for iPhones and iPads that look great and work fast.",
                                features: ["Custom UI", "Swift/SwiftUI-based solutions", "App Store Compliance", "Continuous Updates"]
                            },
                            {
                                title: "Android Application Development",
                                description: "Our tailored Android software development services are optimized for market reach and device compatibility.",
                                features: ["Kotlin & Jetpack Expertise", "App Architecture & Testing", "Scalable Backend Integration", "Support for Multiple Screen Sizes"]
                            },
                            {
                                title: "Cross-Platform Apps",
                                description: "We are experts in technologies such as Flutter and React Native to reduce costs and time to market while increasing quality.",
                                features: ["Unified Codebase", "Native-like Performance", "Fast MVP Rollouts", "Lower Maintenance Costs"]
                            },
                            {
                                title: "Backend & APIs",
                                description: "We ensure secure and fast APIs for all types of mobile app development software integration.",
                                features: ["REST, GraphQL APIs", "Firebase/Node.js", "Real-time Sync", "Cloud Database Integration"]
                            },
                            {
                                title: "UI/UX Design",
                                description: "Develop efficient and engaging mobile designs that ensure users have a consistent user experience on all devices.",
                                features: ["Cross-Platform Visual Consistency", "Wireframing & Interactive Prototyping", "User-Centered Design Approach"]
                            },
                            {
                                title: "App Maintenance",
                                description: "Maximize application performance by managing its regular updates, fixes, security updates, and never-ending contribution of features that are up-kept.",
                                features: ["OS & Device Compatibility Checks", "Security & Performance Monitoring", "Regular Bug Fixes & Updates"]
                            }
                        ].map((service, index) => (
                            <AnimatedItem 
                                key={index}
                                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl space-y-4 group hover:border-[#5B61F6]/50 transition-colors duration-300"
                            >
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">We Follow a Customized App Development Process</h2>
                    <p className="text-white/80 text-lg md:text-xl">At SKS Tech Solution, every app starts with understanding your business, because great software is built with clarity and care.</p>
                </div>
                <CustomAppProcessAccordion />
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
                            { name: "iOS", icon: "🎨", tech: ["Swift", "SwiftUI", "UIKit", "Core Data"] },
                            { name: "Android", icon: "⚙️", tech: ["Kotlin", "Jetpack", "Material Design", "Room DB"] },
                            { name: "Cross-Platform", icon: "🎨", tech: ["React Native", "Flutter", "Xamarin", "Ionic"] },
                            { name: "Backend", icon: "⚙️", tech: ["Node.js", "Firebase", "AWS", "GraphQL"] },
                            { name: "Analytics", icon: "📊", tech: ["Firebase Analytics", "Mixpanel", "Google Analytics"] },
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">Building Smarter Solutions for Your Growth</h2>
                    <p className="text-center text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto">At SKS Tech Solution, we bring creativity, technicality, and in-depth knowledge of human behavior together to create impactful mobile apps. Our solutions are made according to your vision and optimized for sustained growth.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: <Users className="w-8 h-8" />, // Expert Development Team
                                title: "Expert Development Team",
                                description: "Our developers have expertise in crafting high-quality, intuitive applications with clean code and contemporary design."
                            },
                            {
                                icon: <Workflow className="w-8 h-8" />, // End-to-End Services
                                title: "End-to-End Services",
                                description: "We handle every stage of the app journey—from idea validation to launch and post-launch support—under one trusted roof."
                            },
                            {
                                icon: <Layers className="w-8 h-8" />, // Scalable Architecture
                                title: "Scalable Architecture",
                                description: "We create apps that grow with your business, using robust backend systems and future-ready infrastructure."
                            },
                            {
                                icon: <Heart className="w-8 h-8" />, // Client-Centric Approach
                                title: "Client-Centric Approach",
                                description: "Your business goals guide every step. We ensure transparent communication, flexible delivery models, and measurable results."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                                <div className="mb-4 text-[#2563eb]">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                                <p className="text-black/80">{item.description}</p>
                            </div>
                        ))}
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
                                client: "Retail Chain",
                                title: "GoodShopping App",
                                description: "Created a shopping application with inventory management in-built, having a good interface.",
                                results: ["3x Customer Retention", "98.7% Crash-Free Sessions", "120% Revenue Growth"],
                                duration: "10 months",
                                team: "14 members",
                                tech: ["React Native", "Node.js", "MongoDB", "Firebase"]
                            },
                            {
                                client: "Healthcare Startup",
                                title: "Virtual Consultation Platform",
                                description: "Created a HIPAA-compliant telemedicine app that allows video consults, prescriptions, and health monitoring within one integrated platform.",
                                results: ["80% Reduction in Wait Times", "95% Patient Satisfaction", "HIPAA Compliant"],
                                duration: "11 months",
                                team: "10 members",
                                tech: ["Kotlin", "Jetpack", "Room DB", "Firebase"]
                            },
                            {
                                client: "Logistics Company",
                                title: "Fleet Management App",
                                description: "Launched a GPS-enabled tracking app to optimize routes, monitor drivers, and reduce delivery delays across regions.",
                                results: ["40% Route Optimization", "30% Fuel Savings", "24/7 Real-Time Tracking"],
                                duration: "9 months",
                                team: "9 members",
                                tech: ["Flutter", "Firebase", "Google Maps API", "Node.js"]
                            },
                            {
                                client: "Education Platform",
                                title: "E-Learning Mobile App",
                                description: "Delivered a feature-rich app with live classes, assessments, and gamified learning for K–12 students.",
                                results: ["60% Daily Active Usage", "90% Course Completion Rate", "99.9% Server Uptime"],
                                duration: "8 months",
                                team: "12 members",
                                tech: ["SwiftUI", "Firebase", "Core Data", "GraphQL"]
                            },
                            {
                                client: "Restaurant Franchise",
                                title: "Online Ordering & Loyalty App",
                                description: "Created a customer-facing app with ordering, real-time kitchen updates, and a loyalty reward system integrated with POS.",
                                results: ["2x Order Volume", "50% Loyalty Member Growth", "Full POS Integration"],
                                duration: "7 months",
                                team: "8 members",
                                tech: ["React Native", "Firebase", "Stripe API", "Node.js"]
                            },
                            {
                                client: "Travel Agency",
                                title: "Custom Trip Planner App",
                                description: "Created a customized itinerary creator with real-time reservation, weather, and location-based tips.",
                                results: ["75% User Engagement Increase", "35% Boost in Booking Conversions", "Multi-Language Support"],
                                duration: "10 months",
                                team: "11 members",
                                tech: ["Flutter", "Firebase", "Google Maps API", "Stripe"]
                            }
                        ].map((cs, idx) => (
                            <AnimatedItem key={idx} className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl space-y-4 group hover:border-[#5B61F6]/50 transition-all duration-300">
                                <div className="flex items-start justify-between">
                                    <div className="text-[#5B61F6] font-bold text-lg">{cs.client}</div>
                                    <span className="text-sm text-[#5B61F6]">{cs.duration} | {cs.team}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-[#5B61F6]">{cs.title}</h3>
                                <p className="text-gray-300">{cs.description}</p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {cs.results.map((result, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-[#3D43D4]/10 text-[#5B61F6] rounded-full text-sm">{result}</span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {cs.tech.map((tech, idx) => (
                                        <span key={idx} className="px-2 py-1 bg-[#3D43D4]/5 text-[#5B61F6] rounded text-xs">{tech}</span>
                                        ))}
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
                        Ready to Build Your Mobile App?
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp}
                        className="text-gray-300 mb-12 text-lg"
                    >
                        Let's create something amazing together. Our team of expert mobile app developers is ready to help you launch your next big app.
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
                            Start Your Project
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
    const models = [
        {
            label: 'MVP Launch Model',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'MVP Launch Model',
            description: 'Quickly launch core app features to validate ideas, gather feedback, and scale based on real user needs.',
            checklist: [
                'Core Features First',
                'Launch-Ready in Weeks',
                'Rapid Prototyping',
            ],
        },
        {
            label: 'Agile Sprint Model',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Agile Sprint Model',
            description: 'Perfect for evolving apps that require ongoing iterations. Great for scaling products or adapting to user feedback post-launch.',
            checklist: [
                'Flexible Backlog Management',
                'Continuous Delivery',
                'Sprint-Based Billing',
            ],
        },
        {
            label: 'Product Partnership Model',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Product Partnership Model',
            description: 'For businesses seeking a long-term tech partner. We become your extended team, handling full-cycle mobile app development and beyond.',
            checklist: [
                'Dedicated Team & PM',
                'End-to-End Ownership',
                'Shared Growth Goals',
            ],
        },
    ];
    const [active, setActive] = useState(0);
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Choose From Our Flexible Models for Mobile Application Development</h2>
                <p className="text-white/80 text-lg md:text-xl">At SKS Tech Solution, we understand that every app journey is unique. That's why we offer flexible collaboration models that match your project's size, scope, and speed.</p>
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