'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Roboto } from "next/font/google";
import Image from 'next/image';
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { 
    Smartphone, 
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
    Battery,
    Wifi,
    SmartphoneIcon
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

export default function MobileAppDevelopmentPage() {
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
                        Transform Your Ideas Into
                        <br />Powerful Mobile Apps
                    </h1>
                    <p className={`${roboto.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                        We build high-performance, scalable, and user-friendly mobile applications that drive business growth and deliver exceptional user experiences.
                    </p>
                    <motion.div 
                        className="flex flex-wrap justify-center gap-4 mt-8"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        {[
                            { icon: <Smartphone className="w-5 h-5" />, text: "Native & Cross-Platform" },
                            { icon: <Code className="w-5 h-5" />, text: "Modern Tech Stack" },
                            { icon: <Zap className="w-5 h-5" />, text: "High Performance" },
                            { icon: <Shield className="w-5 h-5" />, text: "Secure & Reliable" }
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
                        { icon: <Star className="w-8 h-8 text-[#5B61F6]" />, value: "150+", label: "Apps Launched" },
                        { icon: <Heart className="w-8 h-8 text-[#5B61F6]" />, value: "4.8/5", label: "App Store Rating" },
                        { icon: <Award className="w-8 h-8 text-[#5B61F6]" />, value: "10M+", label: "Downloads" },
                        { icon: <Users className="w-8 h-8 text-[#5B61F6]" />, value: "40+", label: "Happy Clients" }
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

            

            {/* Development Process Section */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        variants={fadeInUp}
                        className={`${roboto.className} text-3xl md:text-4xl font-bold text-center mb-16`}
                    >
                        Our Development Process
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery",
                                description: "Understanding your requirements, target audience, and business objectives.",
                                icon: <Users className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "02",
                                title: "Planning",
                                description: "Creating detailed project roadmap, architecture, and technical specifications.",
                                icon: <Layers className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "03",
                                title: "Development",
                                description: "Building your app with clean code, best practices, and regular updates.",
                                icon: <Code className="w-8 h-8 text-[#5B61F6]" />
                            },
                            {
                                step: "04",
                                title: "Testing",
                                description: "Rigorous testing for performance, security, and user experience.",
                                icon: <CheckCircle2 className="w-8 h-8 text-[#5B61F6]" />
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
                        Our Mobile App Development Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Native iOS Development",
                                description: "High-performance iOS apps built with Swift and SwiftUI for the best user experience.",
                                icon: <SmartphoneIcon className="w-8 h-8" />,
                                features: ["Swift & SwiftUI", "ARKit Integration", "Core ML", "App Store Optimization"]
                            },
                            {
                                title: "Native Android Development",
                                description: "Robust Android applications using Kotlin and Jetpack Compose for modern UI.",
                                icon: <Smartphone className="w-8 h-8" />,
                                features: ["Kotlin & Jetpack", "Material Design", "Android Studio", "Play Store Optimization"]
                            },
                            {
                                title: "Cross-Platform Development",
                                description: "Efficient cross-platform solutions using React Native and Flutter.",
                                icon: <Globe className="w-8 h-8" />,
                                features: ["React Native", "Flutter", "Single Codebase", "Native Performance"]
                            },
                            {
                                title: "Backend Development",
                                description: "Scalable backend solutions with cloud integration and real-time capabilities.",
                                icon: <Cloud className="w-8 h-8" />,
                                features: ["Node.js", "Firebase", "AWS", "Real-time Sync"]
                            },
                            {
                                title: "UI/UX Design",
                                description: "Intuitive and engaging user interfaces that enhance user experience.",
                                icon: <Layers className="w-8 h-8" />,
                                features: ["Material Design", "iOS Guidelines", "Prototyping", "User Testing"]
                            },
                            {
                                title: "App Maintenance",
                                description: "Ongoing support, updates, and optimization to keep your app running smoothly.",
                                icon: <Wifi className="w-8 h-8" />,
                                features: ["Bug Fixes", "Performance Updates", "Security Patches", "Feature Updates"]
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
                            { name: "iOS", icon: "🍎", tech: ["Swift", "SwiftUI", "UIKit", "Core Data"] },
                            { name: "Android", icon: "🤖", tech: ["Kotlin", "Jetpack", "Material Design", "Room DB"] },
                            { name: "Cross-Platform", icon: "🌐", tech: ["React Native", "Flutter", "Xamarin", "Ionic"] },
                            { name: "Backend", icon: "⚙️", tech: ["Node.js", "Python", "Java", "Go"] },
                            { name: "Database", icon: "🗄️", tech: ["MongoDB", "PostgreSQL", "Firebase", "Redis"] },
                            { name: "Cloud", icon: "☁️", tech: ["AWS", "Google Cloud", "Azure", "Heroku"] },
                            { name: "DevOps", icon: "🔄", tech: ["Docker", "Kubernetes", "CI/CD", "Jenkins"] },
                            { name: "Testing", icon: "🧪", tech: ["Jest", "JUnit", "XCUITest", "Espresso"] }
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
                            { name: "E-commerce", icon: "🛍️", description: "Shopping apps with secure payments" },
                            { name: "Healthcare", icon: "🏥", description: "Medical and wellness applications" },
                            { name: "Finance", icon: "💰", description: "Banking and fintech solutions" },
                            { name: "Education", icon: "📚", description: "Learning and training platforms" },
                            { name: "Entertainment", icon: "🎮", description: "Gaming and media apps" },
                            { name: "Real Estate", icon: "🏠", description: "Property management solutions" },
                            { name: "Travel", icon: "✈️", description: "Booking and travel planning apps" },
                            { name: "Food & Delivery", icon: "🍔", description: "Restaurant and delivery platforms" }
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

            {/* CTA Section */}
            <AnimatedSection className="py-20 px-4 md:px-8 lg:px-16">
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
                        Let's create something amazing together. Our team of expert developers is ready to help you build your next successful mobile application.
                    </motion.p>
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <button className="bg-[#3D43D4] hover:bg-[#5B61F6] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 flex items-center gap-2">
                            Start Your Project <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="border border-[#3D43D4] hover:bg-[#3D43D4]/10 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
                            Schedule a Call
                        </button>
                    </motion.div>
                </div>
            </AnimatedSection>
        </div>
    );
} 