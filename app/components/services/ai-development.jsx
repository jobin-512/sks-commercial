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

export default function AIDevelopmentPage() {
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
                            AI Development Services
                        </span>
                    </motion.div>
                    <h1 className={`${roboto.className} text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] leading-tight`}>
                    We build intelligent solutions using machine learning, NLP, computer vision, and automation to help you innovate and scale.
                    </h1>
                    <p className={`${roboto.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                        We help startups and businesses validate their ideas quickly with cost-effective, feature-rich Minimum Viable Products that drive user engagement and business growth.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: <Code className="w-5 h-5" />, text: "Machine Learning" },
                            { icon: <Zap className="w-5 h-5" />, text: "NLP" },
                            { icon: <Shield className="w-5 h-5" />, text: "Computer Vision" },
                            { icon: <Cloud className="w-5 h-5" />, text: "Automation" }
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
                        { icon: <Star className="w-8 h-8 text-[#5B61F6]" />, value: "100+", label: "AI Projects" },
                        { icon: <Heart className="w-8 h-8 text-[#5B61F6]" />, value: "95%", label: "Accuracy" },
                        { icon: <Award className="w-8 h-8 text-[#5B61F6]" />, value: "10+", label: "Years AI Experience" },
                        { icon: <Users className="w-8 h-8 text-[#5B61F6]" />, value: "50+", label: "Happy Clients" }
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
                            <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                                Explore more <ArrowRight className="w-5 h-5" />
                            </button>
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">MVP Solutions We Deliver to Help Startups Validate Ideas</h2>
                    <p className="text-center text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto">At Sks Tech Solution we specialize in delivering rapid MVP development services to help startups and businesses validate their ideas quickly and cost-effectively. Here's what we offer:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* Megaphone icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182A4.5 4.5 0 016.75 12.75m0 0A4.5 4.5 0 0115.182 8.818m-8.432 3.932a4.5 4.5 0 018.432-3.932m0 0V3.75m0 5.068a4.5 4.5 0 01-8.432 3.932m8.432-3.932l3.75 3.75m-3.75-3.75l-3.75 3.75" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">SaaS Platforms</h3>
                            <p className="text-black/80">Build and launch SaaS MVPs quickly to validate market demand and gather early user feedback for product-market fit.</p>
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
                            <h3 className="text-xl font-bold mb-2 text-black">E-commerce Solutions</h3>
                            <p className="text-black/80">Create e-commerce MVPs to test product demand, pricing strategies, and customer acquisition channels.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* App window icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <rect x="7" y="9" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">Healthcare Apps</h3>
                            <p className="text-black/80">Develop healthcare MVPs to validate patient needs, regulatory compliance, and market opportunities in the health tech space.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                            <div className="mb-4 text-[#2563eb]">{/* Asset management icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                                    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-black">EdTech Platforms</h3>
                            <p className="text-black/80">Build educational technology MVPs to test learning methodologies, user engagement, and market demand for innovative education solutions.</p>
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
    const models = [
        {
            label: 'Fixed Price Model',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Fixed Price Model',
            description: 'Our fixed price model is ideal for MVPs with well-defined requirements and scope. It offers cost predictability and is best suited for startups with clear vision and limited budget.',
            checklist: [
                'Clear Scope & Timeline',
                'Budget Certainty',
                'Fast Time to Market',
            ],
        },
        {
            label: 'Time and Material Model',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Time and Material Model',
            description: 'This model is perfect for MVPs where requirements may evolve based on user feedback. It provides flexibility and transparency, allowing you to iterate quickly based on market response.',
            checklist: [
                'Flexible Requirements',
                'Quick Iterations',
                'User Feedback Integration',
            ],
        },
        {
            label: 'Dedicated Team',
            image: '/services/Layer-17.png', // Replace with your image
            title: 'Dedicated Team',
            description: 'Our MVP development company offers a dedicated team model that is tailored for startups looking to build and scale their product. It provides long-term commitment and expertise for growing businesses.',
            checklist: [
                'Faster Development',
                'Reduced Costs',
                'Long-Term Partnership',
            ],
        },
    ];
    const [active, setActive] = useState(0);
    return (
        <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
            <div className="max-w-6xl mx-auto text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Choose From Our Flexible Models for MVP Development</h2>
                <p className="text-white/80 text-lg md:text-xl">Being a top MVP development services provider, we offer various hiring models to suit your startup needs.</p>
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