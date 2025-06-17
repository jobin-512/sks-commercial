'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Roboto } from "next/font/google";
import Image from 'next/image';
import { motion } from "framer-motion"
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
                            Enterprise Software Development
                        </span>
                    </motion.div>
                    <h1 className={`${roboto.className} text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] leading-tight`}>
                        Building Scalable Software
                        <br />Solutions for Business Growth
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
                            { icon: <Code className="w-5 h-5" />, text: "Custom Development" },
                            { icon: <Zap className="w-5 h-5" />, text: "High Performance" },
                            { icon: <Shield className="w-5 h-5" />, text: "Enterprise Security" },
                            { icon: <Cloud className="w-5 h-5" />, text: "Cloud Solutions" }
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
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>Software Developer</h3>
                            <p className="text-gray-300">Our software developer services help streamline your digital ecosystem for peak performance. From marketing automation to CRM and analytics tools, we ensure your tech stack works together seamlessly to support smarter decisions and scalable growth.</p>
                            <ul className="space-y-3">
                                {["CRM & Automation Setup", "Tool Integration & Sync", "Performance Analytics & Dashboards"].map((feature, idx) => (
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
                            <h3 className={`${roboto.className} text-3xl font-bold text-[#5B61F6]`}>Software Developer</h3>
                            <p className="text-gray-300">Our software developer services help streamline your digital ecosystem for peak performance. From marketing automation to CRM and analytics tools, we ensure your tech stack works together seamlessly to support smarter decisions and scalable growth.</p>
                            <ul className="space-y-3">
                                {["CRM & Automation Setup", "Tool Integration & Sync", "Performance Analytics & Dashboards"].map((feature, idx) => (
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
                                title: "Analysis",
                                description: "Understanding business requirements, challenges, and objectives.",
                                icon: <BarChart className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "02",
                                title: "Architecture",
                                description: "Designing scalable and secure system architecture.",
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
                                title: "Deployment",
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
                                title: "Custom Software Development",
                                description: "Tailored software solutions designed to meet your specific business needs.",
                                icon: <Code className="w-8 h-8" />,
                                features: ["Business Analysis", "Custom Development", "Quality Assurance", "Maintenance"]
                            },
                            {
                                title: "Enterprise Solutions",
                                description: "Scalable enterprise software for large organizations.",
                                icon: <Server className="w-8 h-8" />,
                                features: ["ERP Systems", "CRM Solutions", "HR Management", "Workflow Automation"]
                            },
                            {
                                title: "Cloud Development",
                                description: "Cloud-native applications and migration services.",
                                icon: <Cloud className="w-8 h-8" />,
                                features: ["AWS", "Azure", "Google Cloud", "Hybrid Cloud"]
                            },
                            {
                                title: "DevOps & CI/CD",
                                description: "Streamlined development and deployment processes.",
                                icon: <Workflow className="w-8 h-8" />,
                                features: ["CI/CD Pipelines", "Containerization", "Kubernetes", "Monitoring"]
                            },
                            {
                                title: "API Development",
                                description: "Robust and secure API solutions for seamless integration.",
                                icon: <Network className="w-8 h-8" />,
                                features: ["REST APIs", "GraphQL", "API Security", "Documentation"]
                            },
                            {
                                title: "Database Solutions",
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
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        variants={fadeInUp}
                        className={`${roboto.className} text-3xl md:text-4xl font-bold text-center mb-16`}
                    >
                        Industries We Serve
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Finance", icon: "💰", description: "Banking and fintech solutions" },
                            { name: "Healthcare", icon: "🏥", description: "Medical software systems" },
                            { name: "Manufacturing", icon: "🏭", description: "Production management" },
                            { name: "Retail", icon: "🛍️", description: "E-commerce platforms" },
                            { name: "Education", icon: "📚", description: "Learning management systems" },
                            { name: "Logistics", icon: "🚚", description: "Supply chain solutions" },
                            { name: "Real Estate", icon: "🏠", description: "Property management" },
                            { name: "Energy", icon: "⚡", description: "Utility management systems" }
                        ].map((industry, index) => (
                            <AnimatedItem 
                                key={index}
                                className="p-6 bg-[#171629]/70 rounded-xl border border-[#3D43D4]/30 shadow-xl text-center group hover:border-[#5B61F6]/50 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {industry.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-[#5B61F6] mb-2">{industry.name}</h3>
                                <p className="text-sm text-gray-400">{industry.description}</p>
                            </AnimatedItem>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

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
                                title: "Enterprise Resource Planning",
                                client: "Global Manufacturing Corp",
                                description: "Developed a comprehensive ERP system that streamlined operations and reduced costs by 30%.",
                                results: ["30% Cost Reduction", "50% Faster Processing", "99.9% Uptime"],
                                icon: <Boxes className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Java", "Spring Boot", "PostgreSQL", "Kubernetes"],
                                duration: "12 months",
                                team: "15 members"
                            },
                            {
                                title: "Cloud Migration",
                                client: "Tech Solutions Inc",
                                description: "Successfully migrated legacy systems to cloud infrastructure, improving scalability and performance.",
                                results: ["40% Performance Boost", "60% Cost Savings", "Zero Downtime"],
                                icon: <Cloud className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["AWS", "Docker", "Terraform", "Jenkins"],
                                duration: "8 months",
                                team: "10 members"
                            },
                            {
                                title: "E-commerce Platform",
                                client: "Retail Giant",
                                description: "Built a scalable e-commerce platform handling millions of transactions daily.",
                                results: ["200% Sales Growth", "99.99% Reliability", "5x Faster Load Times"],
                                icon: <Globe className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Node.js", "React", "MongoDB", "Redis"],
                                duration: "10 months",
                                team: "12 members"
                            },
                            {
                                title: "Healthcare Management",
                                client: "Medical Group",
                                description: "Developed a patient management system improving care coordination and efficiency.",
                                results: ["45% Efficiency Gain", "90% Patient Satisfaction", "HIPAA Compliant"],
                                icon: <Heart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: [".NET", "SQL Server", "Azure", "Power BI"],
                                duration: "9 months",
                                team: "8 members"
                            },
                            {
                                title: "Financial Trading Platform",
                                client: "Investment Bank",
                                description: "Created a high-frequency trading platform with real-time analytics and risk management.",
                                results: ["0.1ms Latency", "99.999% Uptime", "50% ROI"],
                                icon: <LineChart className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["C++", "Python", "Kafka", "TimescaleDB"],
                                duration: "14 months",
                                team: "20 members"
                            },
                            {
                                title: "IoT Fleet Management",
                                client: "Logistics Company",
                                description: "Implemented an IoT-based fleet management system with real-time tracking and analytics.",
                                results: ["35% Fuel Savings", "25% Route Optimization", "100% GPS Coverage"],
                                icon: <Network className="w-8 h-8 text-[#5B61F6]" />,
                                tech: ["Python", "React Native", "MongoDB", "AWS IoT"],
                                duration: "11 months",
                                team: "9 members"
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
                        Ready to Transform Your Business?
                    </motion.h2>
                    <motion.p 
                        variants={fadeInUp}
                        className="text-gray-300 mb-12 text-lg"
                    >
                        Let's create something amazing together. Our team of expert developers is ready to help you build your next successful software solution.
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