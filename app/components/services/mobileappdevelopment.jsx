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
                    Transform Your Ideas Into Powerful Mobile Apps
                    </h1>
                    <p className={`${roboto.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                        We develop custom software solutions that streamline operations, enhance productivity, and drive business innovation.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: <Code className="w-5 h-5" />, text: "Native iOS & Android" },
                            { icon: <Zap className="w-5 h-5" />, text: "Cross-Platform" },
                            { icon: <Shield className="w-5 h-5" />, text: "App Store Optimization" },
                            { icon: <Cloud className="w-5 h-5" />, text: "Secure & Scalable" }
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
                            Start Your Project <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section with Animated Counters */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { icon: <Star className="w-8 h-8 text-[#5B61F6]" />, value: "300+", label: "Projects Delivered" },
                        { icon: <Heart className="w-8 h-8 text-[#5B61F6]" />, value: "99%", label: "Client Satisfaction" },
                        { icon: <Award className="w-8 h-8 text-[#5B61F6]" />, value: "15+", label: "Years Experience" },
                        { icon: <Users className="w-8 h-8 text-[#5B61F6]" />, value: "100+", label: "Enterprise Clients" }
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
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>Mobile App Developer</h3>
                            <p className="text-gray-300">From ideation to launch, we deliver apps that delight users and drive business growth.</p>
                            <ul className="space-y-3">
                                {["UI/UX Design", "Native & Cross-Platform", "App Store Launch"].map((feature, idx) => (
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
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>Mobile App Developer</h3>
                            <p className="text-gray-300">Ongoing support, analytics, and updates.</p>
                            <ul className="space-y-3">
                                {["Maintenance", "Analytics", "Feature Updates"].map((feature, idx) => (
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
                        Our Software Development Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "iOS App Development",
                                description: "Tailored software solutions designed to meet your specific business needs.",
                                icon: <Code className="w-8 h-8" />,
                                features: ["Business Analysis", "Custom Development", "Quality Assurance", "Maintenance"]
                            },
                            {
                                title: "Android App Development",
                                description: "Scalable enterprise software for large organizations.",
                                icon: <Server className="w-8 h-8" />,
                                features: ["ERP Systems", "CRM Solutions", "HR Management", "Workflow Automation"]
                            },
                            {
                                title: "Cross-Platform Apps",
                                description: "Cloud-native applications and migration services.",
                                icon: <Cloud className="w-8 h-8" />,
                                features: ["AWS", "Azure", "Google Cloud", "Hybrid Cloud"]
                            },
                            {
                                title: "Backend/API",
                                description: "Streamlined development and deployment processes.",
                                icon: <Workflow className="w-8 h-8" />,
                                features: ["CI/CD Pipelines", "Containerization", "Kubernetes", "Monitoring"]
                            },
                            {
                                title: "UI/UX Design",
                                description: "Robust and secure API solutions for seamless integration.",
                                icon: <Network className="w-8 h-8" />,
                                features: ["REST APIs", "GraphQL", "API Security", "Documentation"]
                            },
                            {
                                title: "App Maintenance",
                                description: "Efficient database design and optimization services.",
                                icon: <Database className="w-8 h-8" />,
                                features: ["SQL", "NoSQL", "Data Migration", "Performance Tuning"]
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">We Follow a Customized Software Development Process</h2>
                    <p className="text-white/80 text-lg md:text-xl">As one of the best custom software development companies, our well-designed development process allows organizations to tailor solutions that meet specific business needs, enhance user experience, and drive innovation.</p>
                </div>
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Discovery Card */}
                    <div className="bg-[#10101A] border border-[#3D43D4]/30 rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center shadow-xl mb-4">
                        <div className="text-left flex-1 mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold text-white mb-2">Discovery</h3>
                            <p className="text-white/80">The discovery phase is the initial stage of the customized software development process. Our custom software development company tries to understand your project's goals, objectives, and requirements.</p>
                        </div>
                        <ul className="text-left space-y-2 min-w-[220px]">
                            <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Requirements Gathering</li>
                            <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Research & Analysis</li>
                            <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Solution Mapping</li>
                            <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Technology Evaluation</li>
                        </ul>
                    </div>
                    {/* Accordion for other steps */}
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">Enterprise Software Solutions We Deliver to Help Businesses Stay Modern</h2>
                    <p className="text-center text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto">At Sks Tech Solution  we specialize in delivering a wide range of enterprise software development services to help businesses stay future-ready. Here's what we offer:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* Megaphone icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182A4.5 4.5 0 016.75 12.75m0 0A4.5 4.5 0 0115.182 8.818m-8.432 3.932a4.5 4.5 0 018.432-3.932m0 0V3.75m0 5.068a4.5 4.5 0 01-8.432 3.932m8.432-3.932l3.75 3.75m-3.75-3.75l-3.75 3.75" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Marketing & advertising</h3>
                            <p className="text-black/80">Plan and execute marketing campaigns with tools that offer automation, analytics, and personalization</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* Web portal icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <path d="M7 9h2m2 0h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M7 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M7 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Web portals</h3>
                            <p className="text-black/80">Create secure and user-friendly web portals for customers, employees, or partners to improve communication and collaboration.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* App window icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <rect x="7" y="9" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Enterprise Applications</h3>
                            <p className="text-black/80">Streamline your business operations with customized enterprise applications designed to meet your unique needs and scale with your growth.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* Asset management icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Asset management</h3>
                            <p className="text-black/80">Integrate core business processes like finance, HR, and operations into a single system to improve efficiency and decision-making.</p>
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
                                title: "Fitness Tracker App",
                                client: "Global Fitness Corp",
                                description: "Developed a comprehensive fitness tracking app that improved user engagement and health outcomes.",
                                results: ["20% Increase in User Engagement", "30% Improvement in Health Metrics", "99.9% Uptime"],
                                icon: <Boxes className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Swift", "Firebase", "Core Data", "UIKit"],
                                duration: "12 months",
                                team: "15 members"
                            },
                            {
                                title: "E-commerce Mobile Platform",
                                client: "Retail Giant",
                                description: "Built a scalable e-commerce platform handling millions of transactions daily.",
                                results: ["200% Sales Growth", "99.99% Reliability", "5x Faster Load Times"],
                                icon: <Globe className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
                                duration: "10 months",
                                team: "12 members"
                            },
                            {
                                title: "Healthcare Appointment App",
                                client: "Medical Group",
                                description: "Developed a patient management system improving care coordination and efficiency.",
                                results: ["45% Efficiency Gain", "90% Patient Satisfaction", "HIPAA Compliant"],
                                icon: <Heart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Kotlin", "Jetpack", "Room DB", "Firebase"],
                                duration: "9 months",
                                team: "8 members"
                            },
                            {
                                title: "FinTech Wallet App",
                                client: "Investment Bank",
                                description: "Created a high-frequency trading platform with real-time analytics and risk management.",
                                results: ["0.1ms Latency", "99.999% Uptime", "50% ROI"],
                                icon: <LineChart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Swift", "Firebase", "Core Data", "UIKit"],
                                duration: "14 months",
                                team: "20 members"
                            },
                            {
                                title: "Food Delivery App",
                                client: "Logistics Company",
                                description: "Implemented an IoT-based fleet management system with real-time tracking and analytics.",
                                results: ["35% Fuel Savings", "25% Route Optimization", "100% GPS Coverage"],
                                icon: <Network className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
                                duration: "11 months",
                                team: "9 members"
                            },
                            {
                                title: "Social Networking App",
                                client: "Social Media Platform",
                                description: "Developed a social networking app that improved user engagement and community building.",
                                results: ["20% Increase in User Engagement", "30% Improvement in Community Interaction", "99.9% Uptime"],
                                icon: <Globe className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Swift", "Firebase", "Core Data", "UIKit"],
                                duration: "12 months",
                                team: "15 members"
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
            label: 'Fixed Price Model',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Fixed Price Model',
            description: 'Our fixed price model is ideal for projects with well-defined requirements and scope. It offers cost predictability and is best suited for short-term projects or MVPs.',
            checklist: [
                'Clear Scope & Timeline',
                'Budget Certainty',
                'Low Risk for Clients',
            ],
        },
        {
            label: 'Time and Material Model',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Time and Material Model',
            description: 'This model is perfect for projects where requirements may evolve. It provides flexibility and transparency, allowing you to pay for actual work done.',
            checklist: [
                'Flexible Requirements',
                'Transparent Billing',
                'Ongoing Collaboration',
            ],
        },
        {
            label: 'Dedicated Team',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Dedicated Team',
            description: 'Our custom software development company offers a model that is tailored for companies looking to establish in-house capabilities. It is advantageous for organizations aiming to build a sustainable team while benefiting from expert guidance during the initial stages.',
            checklist: [
                'Faster Time to Market',
                'Reduced Costs',
                'Long-Term Commitment',
            ],
        },
    ];
    const [active, setActive] = useState(0);
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Choose From Our Flexible Models for Custom Software Development</h2>
                <p className="text-white/80 text-lg md:text-xl">Being a top custom software development services provider, we offer various hiring models.</p>
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