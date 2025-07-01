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
    LineChart,
    Eye,
    PenTool,
    Briefcase,
    BookOpen,
    Building,
    ShoppingBag,
    HeartHandshake
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

// Accordion for Our Tactics
function TacticsAccordion() {
    const tactics = [
        {
            title: 'User-Centered Approach',
            description: 'We place your users at the center of every design choice to provide products that fully cater to their requirements.',
            checklist: ['Empathy-Driven Design', 'Real User Behavior Analysis', 'Task-Oriented Workflows', 'Frictionless Interactions'],
        },
        {
            title: 'Design Decisions Based on Data',
            description: 'User behavior data, analytics, and research promote design decisions with a goal of enhanced usability and business results.',
            checklist: ['Heatmaps & User Flow Analysis', 'A/B Testing for Validation', 'Performance Metrics Monitoring', 'Continuous UX Optimization'],
        },
        {
            title: 'Consistent Brand Integration',
            description: 'We ensure that every interface reflects your brand identity, building recognition, trust, and emotional connection.',
            checklist: ['Visual Language Consistency', 'Logo & Color Palette Alignment', 'Typography & Iconography Standards', 'Style Guide Development'],
        },
        {
            title: 'Agile & Iterative Process',
            description: 'We design iteratively so that everything can be adjusted, improved upon, questioned, and re-examined due to stricter time constraints.',
            checklist: ['Sprint-Based Design Cycles', 'Standing Reviews with Stakeholders', 'Fast Prototyping and Testing', 'Fast Implementation of Feedback'],
        },
        {
            title: 'Accessibility & Inclusivity Focus',
            description: "We don't shy away from accessibility so that all users can maximize the product, irrespective of ability or device.",
            checklist: ['WCAG Compliance', 'Screen Reader Support', 'Color Contrast Checks', 'Inclusive Interaction Design'],
        },
        {
            title: 'Collaborative Design Process',
            description: 'Your in-house team collaborates with us throughout the project to keep everyone aligned, ensure transparency, and attain joint ownership of the specified solution.',
            checklist: ['Transparent Communication', 'Regular Design Workshops', 'Shared Prototypes for Feedback', 'Cross-Team Collaboration'],
        },
    ];
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="space-y-4">
            {tactics.map((tactic, idx) => (
                <div key={idx}>
                    <button
                        className={`w-full flex justify-between items-center px-6 py-4 bg-[#181828] text-white rounded-t-2xl focus:outline-none font-semibold text-lg border-b border-[#23234a] ${openIndex === idx ? 'rounded-b-none' : 'rounded-b-2xl'}`}
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    >
                        <span>{tactic.title}</span>
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
                                <div className="bg-[#ededf7] text-[#181828] rounded-b-2xl px-6 py-6 flex flex-col md:flex-row justify-between items-start border border-t-0 border-[#23234a]">
                                    <div className="flex-1 mb-4 md:mb-0">
                                        <p className="mb-4 text-base">{tactic.description}</p>
                                    </div>
                                    <ul className="min-w-[250px] space-y-2 text-base pl-4 md:pl-0">
                                        {tactic.checklist.map((item, i) => (
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

export default function UIDesignPage() {
    return (
        <div className="bg-[#08060F] text-white overflow-hidden">
            {/* Hero Section with Parallax */}
            <section className="min-h-[90vh] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 relative bg-cover bg-[url('/BANNER.jpg')]">
                <div className="absolute inset-0 bg-gradient-to-b from-[#171629]/80 to-[#08060F] z-0"></div>
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
                            UI/UX Design Excellence
                        </span>
                    </motion.div>
                    <h1 className={`${roboto.className} text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] leading-tight`}>
                    User-First Design That Makes Every Click Count
                    </h1>
                    <p className={`${roboto.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                    We craft beautiful, simple, and interactive interfaces to create outstanding user experiences. As a top UI UX design agency, we make sure your product is attractive and functional.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: <Eye className="w-5 h-5" />, text: "Pixel-Perfect Designs" },
                            { icon: <PenTool className="w-5 h-5" />, text: "Interactive Prototypes" },
                            { icon: <Layers className="w-5 h-5" />, text: "Responsive Across Devices" },
                            { icon: <Zap className="w-5 h-5" />, text: "Conversion-Focused UI" }
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
                        { icon: <Star className="w-8 h-8 text-[#5B61F6]" />, value: "200+", label: "UI/UX Projects Delivered" },
                        { icon: <Heart className="w-8 h-8 text-[#5B61F6]" />, value: "95%", label: "Client Satisfaction" },
                        { icon: <Award className="w-8 h-8 text-[#5B61F6]" />, value: "10+", label: "Years of Design Innovation" },
                        { icon: <Users className="w-8 h-8 text-[#5B61F6]" />, value: "50+", label: "Global Brands Served" }
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

            {/* Why partner with us & Remote sections */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto space-y-24">
                    {/* Section 1: Left Image, Right Text */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            variants={fadeInUp} 
                            className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-[50%_40%_30%_60%/60%_30%_50%_40%] shadow-lg"
                        >
                            <Image src={sd} alt="Why Partner with UX Design Experts?" layout="fill" objectFit="cover" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>Why Partner with UX Design Experts?</h3>
                            <p className="text-gray-300">Being one of the trusted UX design agencies, we specialize in intuitive design experiences that boost product value and user retention.</p>
                            <ul className="space-y-3">
                                {["Research-Driven Approach", "Interactive Prototypes", "User Testing & Feedback", "Accessibility-Focused Design"].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                        <CheckCircle2 className="w-6 h-6 text-[#3D43D4]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Section 2: Left Text, Right Image */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div variants={fadeInUp} className="space-y-6">
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>Get Expert Designs Remotely</h3>
                            <p className="text-gray-300">Our remote team offers hassle-free user interface design online, delivering beautiful, high-performing interfaces, wherever you are.</p>
                            <ul className="space-y-3">
                                {["Remote Collaboration", "Flexible Engagement Models", "Real-Time Feedback Integration", "Global Clientele"].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                                        <CheckCircle2 className="w-6 h-6 text-[#3D43D4]" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div 
                            variants={fadeInUp} 
                            className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-[50%_40%_30%_60%/60%_30%_50%_40%] shadow-lg"
                        >
                            <Image src={sd2} alt="Get Expert Designs Remotely" layout="fill" objectFit="cover" />
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
                        Our UI/UX Design Process
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Research & Discovery",
                                description: "Ascertaining user requirements, pain areas, and business objectives for custom user interface design solutions.",
                                icon: <BarChart className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "02",
                                title: "Wireframing & Prototyping",
                                description: "Developing low and high-fidelity prototypes based on functionality and beauty.",
                                icon: <Layers className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "03",
                                title: "Visual Design & Branding",
                                description: "Blending design creativity with brand consistency for engaging digital experiences.",
                                icon: <Code className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "04",
                                title: "User Testing & Iterations",
                                description: "Real user testing, perfecting designs to make them both usable and satisfying.",
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
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-wide">Have a Look at Our Latest Works?</h2>
                    <p className="text-lg md:text-xl text-white/80 mb-4">We deliver UI/UX  projects across industries, proving why we're among the most reliable UX design companies worldwide.</p>
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
                        What Services We Offer?
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                           {
                                title: "User Interface Design",
                                description: "We design neat, functional, and visually appealing user interfaces that boost user satisfaction and conversions.",
                                icon: <Code className="w-8 h-8" />,
                                features: ["Intuitive Layouts", "Brand-Aligned Visuals", "Interactive Elements", "High-Fidelity UI Mockups"]
                            },
                            {
                                title: "UX Research & Strategy",
                                description: "Our design journey initially involves learning about user behavior in order to provide real-world, engaging, and business solutions.",
                                icon: <Server className="w-8 h-8" />,
                                features: ["User Persona Creation", "Competitor Analysis", "User Journey Mapping", "Design Roadmap Planning"]
                            },
                            {
                                title: "Wireframing & Prototyping",
                                description: "We visualize the product early with the wireframes and prototypes to make sure that it is clear and functional, with user validation.",
                                icon: <Cloud className="w-8 h-8" />,
                                features: ["Low & High-Fidelity Wireframes", "Interactive Clickable Prototypes", "Feedback Integration", "Efficient Design Iterations"]
                            },
                            {
                                title: "Visual Design & Branding",
                                description: "Our team turns out stunning views that tie nicely with the brand and touch the hearts of the target audience.",
                                icon: <Workflow className="w-8 h-8" />,
                                features: ["Brand Identity Integration", "Typography & Color Schemes", "Iconography & Visual Assets", "Pixel-Perfect Screen Designs"]
                            },
                            {
                                title: "Responsive & Cross-Platform Design",
                                description: "We deliver superior digital experiences across all devices and platforms.",
                                icon: <Network className="w-8 h-8" />,
                                features: ["Mobile-First Design Approach", "Adaptive & Scalable Layouts", "Tablet & Desktop Optimization", "Cross-Browser Issues"]
                            },
                            {
                                title: "User Testing & Usability Improvements",
                                description: "Performing usability testing helps to check for interaction improvements, checks & enhances performance, and encourages a streamlined user journey.",
                                icon: <Database className="w-8 h-8" />,
                                features: ["Real User Feedback", "Usability Testing Sessions", "UX Audit & Recommendations", "Continuous Improvement Cycles"]
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

            {/* Our Tactics Section */}
            <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ background: 'radial-gradient(circle at 20% 40%, #2e3192 0%, #08060F 80%)' }}>
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Our Tactics</h2>
                    <p className="text-white/80 text-lg md:text-xl">At SKS Tech Solution, we hold the conviction that good design is not merely about looks — it's about crafting significant, intuitive experiences. Our tested tactics guarantee that every product we develop is intuitive, stimulating, and productive.</p>
                </div>
                <div className="max-w-4xl mx-auto space-y-8">
                    <TacticsAccordion />
                </div>
            </section>

            {/* Who Gets Benefit From Us Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#080813]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-white">Who Gets Benefit From Us?</h2>
                    <p className="text-center text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto">Our user-first design offerings enable companies in industries to provide outstanding digital experiences. Whether you're an enterprise or a startup, our offerings will allow you to engage users and drive your business objectives.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: <Briefcase className="w-12 h-12 text-[#2563eb]" />, title: "Visionary Startups", description: "We make complex concepts intuitive, interactive, and easy to follow, enabling startups to differentiate themselves in saturated digital landscapes." },
                            { icon: <Building className="w-12 h-12 text-[#2563eb]" />, title: "Growing Enterprises", description: "Our design strategies make it easier for big teams to deliver cohesive, seamless experiences." },
                            { icon: <ShoppingBag className="w-12 h-12 text-[#2563eb]" />, title: "Online Retailers", description: "We design attractive store layouts that are easy to shop, fun to shop, and invite customers to keep coming back." },
                            { icon: <Cpu className="w-12 h-12 text-[#2563eb]" />, title: "Tech Product Innovators", description: "Our UI/UX specialists assist tech teams in taking sophisticated features and making them easy, intuitive, and immediately comprehensible to users." },
                            { icon: <BookOpen className="w-12 h-12 text-[#2563eb]" />, title: "Educational Platforms", description: "We build learning spaces that are interactive, intuitive, and accessible for students, instructors, and administrators." },
                            { icon: <HeartHandshake className="w-12 h-12 text-[#2563eb]" />, title: "Healthcare Solutions", description: "Our accessible, compliant solutions enable healthcare professionals to present information, services, and care in a clear, uncluttered manner." },
                            { icon: <PenTool className="w-12 h-12 text-[#2563eb]" />, title: "Creative Agencies", description: "We assist design firms with consistent UI/UX services, enabling their projects to proceed effortlessly and yield excellent outcomes." },
                        ].map((item, index) => (
                            <div key={index} className="bg-white rounded-2xl shadow p-8 flex flex-col items-start text-left">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                                <p className="text-black/80">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* How Can We Help Section */}
             <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">How Can We Help?</h2>
                    <p className="text-center text-white/80 text-lg md:text-xl mb-12 max-w-3xl mx-auto">We at SKS Tech Solution convert your digital concepts into visually appealing, user-centric products. Our UI/UX knowledge assists organizations in engaging users, developing confidence, and leaving lasting impressions.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <div className="bg-[#10101A] border border-[#3D43D4]/30 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-[#5B61F6] mb-4">Simplifying Digital Experiences</h3>
                            <p className='text-white/80 mb-4'>We design intuitive interfaces that remove complexity and allow simple interaction.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Easy-to-use navigation structures</li>
                                <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Clear visual hierarchy</li>
                                <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Minimalistic, clutter-free layouts</li>
                            </ul>
                        </div>
                        <div className="bg-[#10101A] border border-[#3D43D4]/30 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-[#5B61F6] mb-4">Boosting User Engagement</h3>
                            <p className='text-white/80 mb-4'>Our designs keep users engaged, satisfied, and loyal to your product.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Interactive, engaging UI elements</li>
                                <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Smooth user journeys</li>
                                <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Mobile and cross-platform consistency</li>
                            </ul>
                        </div>
                        <div className="bg-[#10101A] border border-[#3D43D4]/30 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-[#5B61F6] mb-4">Supporting Business Growth</h3>
                            <p className='text-white/80 mb-4'>We ensure your product design contributes directly to your business success.</p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Brand-aligned, visually appealing interfaces</li>
                                <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Developer-friendly prototypes for faster builds</li>
                                <li className="flex items-center gap-2 text-white"><span className="text-[#5B61F6]">✔</span> Conversion-focused user experience</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

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
                                title: "Patient Portal Redesign",
                                client: "Healthcare Startup",
                                description: "We redesigned a medical portal, simplifying appointment booking and improving accessibility for all patient demographics.",
                                results: ["70% Fewer Booking Errors", "40% Faster User Task Completion", "Increased Accessibility Compliance"],
                                icon: <Heart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Figma", "Hotjar", "Accessibility Tools", "Google Analytics"],
                                duration: "9 weeks",
                                team: "4 members"
                            },
                            {
                                title: "Interactive Learning Experience",
                                client: "E-Learning Platform",
                                description: "Enhanced an online education platform with intuitive design, boosting course completion rates and student satisfaction.",
                                results: ["50% Higher Course Completions", "3x More Daily Active Users", "Better Content Accessibility"],
                                icon: <BookOpen className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Figma", "Maze", "UserTesting", "Analytics Tools"],
                                duration: "12 weeks",
                                team: "6 members"
                            },
                            {
                                title: "Vehicle Showcase Website",
                                client: "Automotive Brand",
                                description: "Developed a sleek, responsive website for showcasing vehicles, improving product discovery , and online lead generation.",
                                results: ["35% Increase in Test Drive Bookings", "25% Higher Page Engagement", "Mobile-Optimized Experience"],
                                icon: <Globe className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Adobe XD", "Hotjar", "Google Analytics"],
                                duration: "7 weeks",
                                team: "5 members"
                            },
                            {
                                title: "Order Flow Optimization",
                                client: "Food Delivery Platform",
                                description: "Revamped the food ordering experience, reducing friction and driving more successful orders across mobile and desktop.",
                                results: ["55% Faster Checkout Process", "20% Drop in Cart Abandonment", "Improved App Store Ratings"],
                                icon: <ShoppingBag className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Figma", "UserTesting", "Amplitude"],
                                duration: "6 weeks",
                                team: "4 members"
                            },
                            {
                                title: "Dashboard Redesign",
                                client: "B2B SaaS Product",
                                description: "Modify the dashboard for easy understanding by all the business stakeholders.",
                                results: ["60% Faster Data Interpretation", "45% Boost in User Retention", "Reduced Support Tickets"],
                                icon: <LineChart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Figma", "Hotjar", "Google Analytics"],
                                duration: "10 weeks",
                                team: "5 members"
                            },
                            {
                                title: "Streaming Platform UI Overhaul",
                                client: "Entertainment App",
                                description: "Redesigned a movie and music streaming platform to boost engagement and simplify content discovery.",
                                results: ["40% Increase in Daily Streaming", "30% Boost in User Session Time", "Improved Mobile Experience"],
                                icon: <Network className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Figma", "UserTesting", "Hotjar"],
                                duration: "9 weeks",
                                team: "5 members"
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
                        Let's Design Something That Works for Your Users
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp}
                        className="text-gray-300 mb-12 text-lg"
                    >
                        Let's create interfaces that wow your users and drive business success. As a reputed UI UX design company, SKS Tech Solution brings your vision to life.
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
                            { icon: <Star className="w-6 h-6" />, text: "Creative & Functional Designs" },
                            { icon: <Shield className="w-6 h-6" />, text: "Experienced Design Team" },
                            { icon: <Zap className="w-6 h-6" />, text: "User-Focused Process" },
                            { icon: <Heart className="w-6 h-6" />, text: "Scalable Solutions" }
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