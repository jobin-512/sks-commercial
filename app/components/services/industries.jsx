'use client'

import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Roboto } from "next/font/google";
import Image from 'next/image';
import { 
    Building2,
    Factory,
    ShoppingCart,
    GraduationCap,
    HeartPulse,
    Plane,
    Truck,
    Banknote,
    Home,
    Leaf,
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
    Zap,
    ShieldCheck,
    LineChart as ChartIcon,
    Target,
    TrendingUp,
    BarChart3,
    PieChart,
    Activity,
    Gauge,
    LineChart as AnalyticsIcon,
    Stethoscope,
    Hotel,
    Microscope,
    Ship,
    Car,
    Train,
    Rocket,
    Wifi,
    ComputerIcon,
    HeartIcon,
    Banknote as BanknotesIcon,
    CogIcon,
    ShoppingBagIcon,
    GraduationCap as AcademicCapIcon,
    TruckIcon,
    HomeIcon,
    BoltIcon
} from "lucide-react"

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
});

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

const AnimatedSection = ({ children, className = "" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.section
            ref={ref}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerContainer}
            className={className}
        >
            {children}
        </motion.section>
    )
}

const AnimatedItem = ({ children, className = "" }) => {
    return (
        <motion.div
            variants={fadeInUp}
            className={className}
        >
            {children}
        </motion.div>
    )
}

const industries = [
    {
        name: "Technology",
        icon: ComputerIcon,
        category: "technology",
        description: "Empowering tech companies with cutting-edge solutions and digital transformation.",
        challenges: [
            "Rapid technological evolution",
            "Cybersecurity threats",
            "Scalability requirements",
            "Integration complexity"
        ],
        solutions: [
            "Cloud-native architecture",
            "Advanced security protocols",
            "Microservices implementation",
            "API-first development"
        ],
        statistics: {
            efficiency: "85%",
            costReduction: "40%",
            productivity: "75%",
            quality: "98%"
        },
        technologies: [
            "Cloud Computing",
            "DevOps",
            "AI/ML",
            "Blockchain",
            "IoT",
            "Cybersecurity"
        ],
        caseStudy: {
            title: "Tech Platform Modernization",
            client: "Global Tech Solutions",
            results: [
                "3x faster deployment",
                "60% cost reduction",
                "99.9% uptime"
            ]
        }
    },
    {
        name: "Healthcare",
        icon: HeartIcon,
        category: "healthcare",
        description: "Transforming healthcare delivery with innovative digital solutions.",
        challenges: [
            "Patient data security",
            "Interoperability issues",
            "Regulatory compliance",
            "Resource optimization"
        ],
        solutions: [
            "HIPAA-compliant systems",
            "Telemedicine platforms",
            "AI-powered diagnostics",
            "Patient management systems"
        ],
        statistics: {
            efficiency: "60%",
            costReduction: "45%",
            productivity: "70%",
            quality: "95%"
        },
        technologies: [
            "Electronic Health Records",
            "Telehealth",
            "Medical IoT",
            "Health Analytics",
            "Patient Portals",
            "Clinical Systems"
        ],
        caseStudy: {
            title: "Digital Health Platform",
            client: "Global Medical Group",
            results: [
                "60% faster patient care",
                "45% cost reduction",
                "90% patient satisfaction"
            ]
        }
    },
    {
        name: "Finance",
        icon: BanknotesIcon,
        category: "finance",
        description: "Revolutionizing financial services with secure and scalable solutions.",
        challenges: [
            "Regulatory compliance",
            "Fraud prevention",
            "Real-time processing",
            "Data security"
        ],
        solutions: [
            "Secure payment gateways",
            "Anti-fraud systems",
            "Blockchain integration",
            "Real-time analytics"
        ],
        statistics: {
            efficiency: "80%",
            costReduction: "40%",
            productivity: "85%",
            quality: "99.9%"
        },
        technologies: [
            "Blockchain",
            "FinTech",
            "Payment Systems",
            "Risk Analytics",
            "Compliance Tools",
            "Digital Banking"
        ],
        caseStudy: {
            title: "Digital Banking Platform",
            client: "Future Finance Bank",
            results: [
                "2M+ active users",
                "80% faster transactions",
                "99.9% uptime"
            ]
        }
    },
    {
        name: "Manufacturing",
        icon: CogIcon,
        category: "manufacturing",
        description: "Driving Industry 4.0 transformation with smart manufacturing solutions.",
        challenges: [
            "Supply chain complexity",
            "Quality control",
            "Equipment maintenance",
            "Production efficiency"
        ],
        solutions: [
            "IoT-based monitoring",
            "Predictive maintenance",
            "Quality management systems",
            "Supply chain optimization"
        ],
        statistics: {
            efficiency: "70%",
            costReduction: "50%",
            productivity: "80%",
            quality: "95%"
        },
        technologies: [
            "Industrial IoT",
            "Predictive Analytics",
            "Quality Control Systems",
            "Supply Chain Management",
            "Equipment Monitoring",
            "Production Planning"
        ],
        caseStudy: {
            title: "Smart Factory Implementation",
            client: "Industrial Solutions Inc",
            results: [
                "70% efficiency increase",
                "50% cost savings",
                "Zero downtime"
            ]
        }
    },
    {
        name: "Retail",
        icon: ShoppingBagIcon,
        category: "retail",
        description: "Enhancing retail operations with omnichannel solutions.",
        challenges: [
            "Inventory management",
            "Customer experience",
            "Omnichannel integration",
            "Supply chain visibility"
        ],
        solutions: [
            "Inventory management systems",
            "Customer analytics",
            "E-commerce platforms",
            "Supply chain tracking"
        ],
        statistics: {
            efficiency: "65%",
            costReduction: "35%",
            productivity: "75%",
            quality: "92%"
        },
        technologies: [
            "E-commerce",
            "Inventory Management",
            "Customer Analytics",
            "POS Systems",
            "Supply Chain",
            "Mobile Commerce"
        ],
        caseStudy: {
            title: "Omnichannel Retail Platform",
            client: "Global Retail Corp",
            results: [
                "3x revenue growth",
                "99.99% uptime",
                "50% faster checkout"
            ]
        }
    },
    {
        name: "Education",
        icon: AcademicCapIcon,
        category: "education",
        description: "Transforming education with digital learning solutions.",
        challenges: [
            "Remote learning",
            "Student engagement",
            "Content delivery",
            "Assessment systems"
        ],
        solutions: [
            "Learning management systems",
            "Virtual classrooms",
            "Student analytics",
            "Assessment platforms"
        ],
        statistics: {
            efficiency: "75%",
            costReduction: "30%",
            productivity: "85%",
            quality: "90%"
        },
        technologies: [
            "LMS",
            "Virtual Learning",
            "Student Analytics",
            "Content Management",
            "Assessment Tools",
            "Collaboration Platforms"
        ],
        caseStudy: {
            title: "Digital Learning Platform",
            client: "EduTech Solutions",
            results: [
                "90% student engagement",
                "60% learning efficiency",
                "95% teacher satisfaction"
            ]
        }
    },
    {
        name: "Logistics",
        icon: TruckIcon,
        category: "logistics",
        description: "Optimizing supply chain and logistics operations.",
        challenges: [
            "Route optimization",
            "Fleet management",
            "Real-time tracking",
            "Delivery efficiency"
        ],
        solutions: [
            "Route optimization systems",
            "Fleet management platforms",
            "Real-time tracking",
            "Delivery automation"
        ],
        statistics: {
            efficiency: "70%",
            costReduction: "45%",
            productivity: "80%",
            quality: "94%"
        },
        technologies: [
            "Fleet Management",
            "Route Optimization",
            "GPS Tracking",
            "Supply Chain",
            "Warehouse Management",
            "Delivery Systems"
        ],
        caseStudy: {
            title: "Smart Logistics Platform",
            client: "Global Logistics Inc",
            results: [
                "40% fuel savings",
                "50% faster delivery",
                "95% on-time delivery"
            ]
        }
    },
    {
        name: "Real Estate",
        icon: HomeIcon,
        category: "realestate",
        description: "Modernizing real estate operations with digital solutions.",
        challenges: [
            "Property management",
            "Tenant engagement",
            "Maintenance tracking",
            "Market analysis"
        ],
        solutions: [
            "Property management systems",
            "Tenant portals",
            "Maintenance tracking",
            "Market analytics"
        ],
        statistics: {
            efficiency: "65%",
            costReduction: "35%",
            productivity: "75%",
            quality: "93%"
        },
        technologies: [
            "Property Management",
            "Virtual Tours",
            "Market Analytics",
            "Tenant Portals",
            "Maintenance Systems",
            "Document Management"
        ],
        caseStudy: {
            title: "Property Management Platform",
            client: "Real Estate Solutions",
            results: [
                "50% faster leasing",
                "40% cost reduction",
                "90% tenant satisfaction"
            ]
        }
    },
    {
        name: "Energy",
        icon: BoltIcon,
        category: "energy",
        description: "Powering the future with smart energy solutions.",
        challenges: [
            "Grid management",
            "Energy efficiency",
            "Renewable integration",
            "Consumption monitoring"
        ],
        solutions: [
            "Smart grid systems",
            "Energy management platforms",
            "Renewable integration",
            "Consumption analytics"
        ],
        statistics: {
            efficiency: "75%",
            costReduction: "40%",
            productivity: "85%",
            quality: "96%"
        },
        technologies: [
            "Smart Grid",
            "Energy Management",
            "Renewable Energy",
            "Consumption Analytics",
            "Grid Monitoring",
            "Energy Storage"
        ],
        caseStudy: {
            title: "Smart Grid Implementation",
            client: "Energy Solutions Corp",
            results: [
                "40% energy savings",
                "30% cost reduction",
                "99.9% grid reliability"
            ]
        }
    }
]

export default function IndustriesPage() {
    const [expandedIndustry, setExpandedIndustry] = useState(null)
    const [activeTab, setActiveTab] = useState('all')
    const [hoveredTech, setHoveredTech] = useState(null)
    const [selectedCaseStudy, setSelectedCaseStudy] = useState(null)
    const [showMoreStats, setShowMoreStats] = useState(false)

    const toggleIndustry = (index) => {
        setExpandedIndustry(expandedIndustry === index ? null : index)
    }

    const globalStats = [
        { label: "Industries Served", value: "20+", icon: "🏢" },
        { label: "Global Clients", value: "500+", icon: "🌍" },
        { label: "Projects Delivered", value: "1000+", icon: "🚀" },
        { label: "Success Rate", value: "98%", icon: "📈" },
        { label: "Team Members", value: "100+", icon: "👥" },
        { label: "Years Experience", value: "10+", icon: "⏳" },
        { label: "Countries Served", value: "25+", icon: "🌎" },
        { label: "Client Satisfaction", value: "99%", icon: "😊" }
    ]

    const industryTabs = [
        { id: 'all', label: 'All Industries', icon: '🌐' },
        { id: 'technology', label: 'Technology', icon: '💻' },
        { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
        { id: 'finance', label: 'Finance', icon: '💰' },
        { id: 'manufacturing', label: 'Manufacturing', icon: '🏭' },
        { id: 'retail', label: 'Retail', icon: '🛍️' },
        { id: 'education', label: 'Education', icon: '📚' },
        { id: 'logistics', label: 'Logistics', icon: '🚚' },
        { id: 'realestate', label: 'Real Estate', icon: '🏠' },
        { id: 'energy', label: 'Energy', icon: '⚡' }
    ]

    const detailedStats = {
        healthcare: {
            projects: 150,
            clients: 75,
            efficiency: "60%",
            costReduction: "45%",
            patientSatisfaction: "90%",
            implementationTime: "6 months"
        },
        manufacturing: {
            projects: 200,
            clients: 120,
            efficiency: "70%",
            costReduction: "50%",
            quality: "95%",
            implementationTime: "8 months"
        },
        finance: {
            projects: 180,
            clients: 90,
            efficiency: "80%",
            costReduction: "40%",
            security: "99.99%",
            implementationTime: "7 months"
        }
    }

    const featuredCaseStudies = [
        {
            title: "Digital Transformation in Healthcare",
            client: "Global Medical Group",
            description: "Implemented a comprehensive digital health platform serving 1M+ patients",
            results: ["60% faster patient care", "45% cost reduction", "90% patient satisfaction"],
            image: "/healthcare-case.jpg"
        },
        {
            title: "Smart Manufacturing Revolution",
            client: "Industrial Solutions Inc",
            description: "Transformed traditional manufacturing into Industry 4.0",
            results: ["70% efficiency increase", "50% cost savings", "Zero downtime"],
            image: "/manufacturing-case.jpg"
        },
        {
            title: "Banking Innovation",
            client: "Future Finance Bank",
            description: "Launched next-gen digital banking platform",
            results: ["2M+ active users", "80% faster transactions", "99.9% uptime"],
            image: "/banking-case.jpg"
        },
        {
            title: "Smart City Integration",
            client: "Metro City Council",
            description: "Implemented IoT-based smart city solutions across 100+ locations",
            results: ["40% energy savings", "30% traffic reduction", "85% citizen satisfaction"],
            image: "/smart-city-case.jpg",
            details: "Comprehensive smart city solution including traffic management, waste management, and public safety systems."
        },
        {
            title: "E-commerce Platform",
            client: "Global Retail Corp",
            description: "Built scalable e-commerce platform handling 1M+ daily transactions",
            results: ["3x revenue growth", "99.99% uptime", "50% faster checkout"],
            image: "/ecommerce-case.jpg",
            details: "End-to-end e-commerce solution with AI-powered recommendations and real-time inventory management."
        },
        {
            title: "Educational Platform",
            client: "EduTech Solutions",
            description: "Developed learning management system for 500K+ students",
            results: ["90% student engagement", "60% learning efficiency", "95% teacher satisfaction"],
            image: "/education-case.jpg",
            details: "Comprehensive LMS with AI-powered personalized learning paths and real-time analytics."
        }
    ]

    const testimonials = [
        {
            name: "Sarah Johnson",
            position: "CTO, Global Medical Group",
            industry: "Healthcare",
            quote: "The digital transformation solution provided by SKS Tech has revolutionized our patient care system. We've seen a 60% improvement in operational efficiency.",
            image: "/testimonial-1.jpg"
        },
        {
            name: "Michael Chen",
            position: "Operations Director, Industrial Solutions Inc",
            industry: "Manufacturing",
            quote: "Their Industry 4.0 implementation has transformed our manufacturing process. We've achieved zero downtime and 70% higher efficiency.",
            image: "/testimonial-2.jpg"
        },
        {
            name: "David Wilson",
            position: "CEO, Future Finance Bank",
            industry: "Finance",
            quote: "The banking platform developed by SKS Tech has helped us reach 2M+ customers and process transactions 80% faster.",
            image: "/testimonial-3.jpg"
        }
    ]

    const solutionComparison = {
        features: [
            "Custom Development",
            "Cloud Integration",
            "AI/ML Capabilities",
            "Security Features",
            "Analytics Dashboard",
            "Mobile Support",
            "API Integration",
            "Scalability"
        ],
        industries: {
            "Healthcare": [true, true, true, true, true, true, true, true],
            "Manufacturing": [true, true, true, true, true, true, true, true],
            "Finance": [true, true, true, true, true, true, true, true],
            "Retail": [true, true, true, true, true, true, true, true],
            "Education": [true, true, true, true, true, true, true, true]
        }
    }

    const technologies = [
        {
            category: "Cloud & Infrastructure",
            items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"]
        },
        {
            category: "AI & Machine Learning",
            items: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Computer Vision", "NLP"]
        },
        {
            category: "Web Technologies",
            items: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL", "WebSocket"]
        },
        {
            category: "Mobile Development",
            items: ["React Native", "Flutter", "iOS", "Android", "Kotlin", "Swift"]
        },
        {
            category: "DevOps & Security",
            items: ["CI/CD", "GitLab", "Jenkins", "SonarQube", "OWASP", "Penetration Testing"]
        },
        {
            category: "Data & Analytics",
            items: ["Big Data", "Hadoop", "Spark", "Tableau", "Power BI", "Data Warehousing"]
        }
    ]

    return (
        <div className="min-h-screen bg-[#08060F] text-white pt-24">
            {/* Hero Section */}
            <AnimatedSection className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#3D43D4]/20 to-transparent" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                
                <div className="relative z-10 text-center px-4">
                    <motion.h1 
                        className="text-4xl md:text-6xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Industries We Serve
                    </motion.h1>
                    <motion.p 
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Transforming businesses across diverse sectors with innovative technology solutions
                    </motion.p>
                </div>
            </AnimatedSection>

            {/* Enhanced Global Statistics */}
            <AnimatedSection className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {globalStats.slice(0, showMoreStats ? 8 : 4).map((stat, index) => (
                        <AnimatedItem key={index}>
                            <div className="bg-[#1A1A2E] rounded-xl p-4 md:p-6 border border-gray-800 text-center">
                                <div className="text-2xl md:text-3xl mb-2">{stat.icon}</div>
                                <h3 className="text-xl md:text-3xl font-bold text-[#3D43D4] mb-1">{stat.value}</h3>
                                <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <button
                        onClick={() => setShowMoreStats(!showMoreStats)}
                        className="px-6 py-2 bg-[#3D43D4]/10 text-[#3D43D4] rounded-lg hover:bg-[#3D43D4]/20 transition-colors"
                    >
                        {showMoreStats ? 'Show Less' : 'Show More'}
                    </button>
                </div>
            </AnimatedSection>

            {/* Enhanced Case Studies Section */}
            <AnimatedSection className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredCaseStudies.map((study, index) => (
                        <AnimatedItem key={index}>
                            <motion.div 
                                className="bg-[#1A1A2E] rounded-xl overflow-hidden border border-gray-800 cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedCaseStudy(study)}
                            >
                                <div className="relative h-48">
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#3D43D4]/20 to-transparent" />
                                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4">Client: {study.client}</p>
                                    <p className="text-gray-300 mb-4">{study.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {study.results.map((result, i) => (
                                            <span key={i} className="px-3 py-1 bg-[#3D43D4]/10 text-[#3D43D4] rounded-full text-sm">
                                                {result}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedItem>
                    ))}
                </div>
            </AnimatedSection>

            {/* Testimonials Section */}
            <AnimatedSection className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Client Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <AnimatedItem key={index}>
                            <motion.div 
                                className="bg-[#1A1A2E] rounded-xl p-6 border border-gray-800"
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-[#3D43D4]/20 flex items-center justify-center">
                                        <span className="text-[#3D43D4] font-semibold">
                                            {testimonial.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{testimonial.name}</h3>
                                        <p className="text-gray-400 text-sm">{testimonial.position}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 mb-4">{testimonial.quote}</p>
                                <span className="px-3 py-1 bg-[#3D43D4]/10 text-[#3D43D4] rounded-full text-sm">
                                    {testimonial.industry}
                                </span>
                            </motion.div>
                        </AnimatedItem>
                    ))}
                </div>
            </AnimatedSection>

            {/* Solution Comparison Table */}
            <AnimatedSection className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Solution Comparison</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#1A1A2E]">
                                <th className="p-4 text-left">Features</th>
                                {Object.keys(solutionComparison.industries).map((industry) => (
                                    <th key={industry} className="p-4 text-center">{industry}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {solutionComparison.features.map((feature, index) => (
                                <tr key={index} className="border-t border-gray-800">
                                    <td className="p-4">{feature}</td>
                                    {Object.values(solutionComparison.industries).map((features, i) => (
                                        <td key={i} className="p-4 text-center">
                                            {features[index] ? (
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-6 h-6 bg-[#3D43D4] rounded-full mx-auto"
                                                />
                                            ) : (
                                                <span className="text-gray-600">-</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </AnimatedSection>

            {/* Technology Stack */}
            <AnimatedSection className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Technology Stack</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <AnimatedItem key={index}>
                            <div className="bg-[#1A1A2E] rounded-xl p-6 border border-gray-800">
                                <h3 className="text-xl font-semibold mb-4 text-[#3D43D4]">{tech.category}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {tech.items.map((item, i) => (
                                        <span key={i} className="px-3 py-1 bg-[#3D43D4]/10 text-[#3D43D4] rounded-full text-sm">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>
            </AnimatedSection>

            {/* Enhanced Industries Grid with Tabs */}
            <AnimatedSection className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Explore Our Industries</h2>
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                    {industryTabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`px-4 md:px-6 py-2 rounded-full transition-colors flex items-center gap-2 text-sm md:text-base ${
                                activeTab === tab.id 
                                    ? 'bg-[#3D43D4] text-white' 
                                    : 'bg-[#1A1A2E] text-gray-400 hover:text-white'
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span>{tab.icon}</span>
                            <span className="hidden md:inline">{tab.label}</span>
                            <span className="md:hidden">{tab.label.split(' ')[0]}</span>
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {industries
                        .filter(industry => activeTab === 'all' || industry.category === activeTab)
                        .map((industry, index) => (
                            <AnimatedItem key={index}>
                                <motion.div 
                                    className="bg-[#1A1A2E] rounded-xl p-4 md:p-6 border border-gray-800 hover:border-[#3D43D4] transition-all duration-300 cursor-pointer"
                                    whileHover={{ scale: 1.02 }}
                                    onClick={() => toggleIndustry(index)}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-[#3D43D4]/10 rounded-lg">
                                            <industry.icon className="w-6 h-6 text-[#3D43D4]" />
                                        </div>
                                        <h3 className="text-xl font-semibold">{industry.name}</h3>
                                    </div>
                                    <p className="text-gray-400 mb-4">{industry.description}</p>
                                    
                                    {expandedIndustry === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-4 mt-4"
                                        >
                                            <div>
                                                <h4 className="text-[#3D43D4] font-semibold mb-2">Challenges</h4>
                                                <ul className="list-disc list-inside text-gray-400 space-y-1">
                                                    {industry.challenges.map((challenge, i) => (
                                                        <li key={i}>{challenge}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            
                                            <div>
                                                <h4 className="text-[#3D43D4] font-semibold mb-2">Solutions</h4>
                                                <ul className="list-disc list-inside text-gray-400 space-y-1">
                                                    {industry.solutions.map((solution, i) => (
                                                        <li key={i}>{solution}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <h4 className="text-[#3D43D4] font-semibold mb-2">Statistics</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-[#3D43D4]/10 rounded-lg p-3">
                                                        <p className="text-sm text-gray-400">Efficiency</p>
                                                        <p className="text-xl font-semibold text-[#3D43D4]">{industry.statistics.efficiency}</p>
                                                    </div>
                                                    <div className="bg-[#3D43D4]/10 rounded-lg p-3">
                                                        <p className="text-sm text-gray-400">Cost Reduction</p>
                                                        <p className="text-xl font-semibold text-[#3D43D4]">{industry.statistics.costReduction}</p>
                                                    </div>
                                                    <div className="bg-[#3D43D4]/10 rounded-lg p-3">
                                                        <p className="text-sm text-gray-400">Productivity</p>
                                                        <p className="text-xl font-semibold text-[#3D43D4]">{industry.statistics.productivity}</p>
                                                    </div>
                                                    <div className="bg-[#3D43D4]/10 rounded-lg p-3">
                                                        <p className="text-sm text-gray-400">Quality</p>
                                                        <p className="text-xl font-semibold text-[#3D43D4]">{industry.statistics.quality}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-[#3D43D4] font-semibold mb-2">Technologies</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {industry.technologies.map((tech, i) => (
                                                        <span key={i} className="px-3 py-1 bg-[#3D43D4]/10 text-[#3D43D4] rounded-full text-sm">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-[#3D43D4] font-semibold mb-2">Case Study</h4>
                                                <div className="bg-[#3D43D4]/10 rounded-lg p-4">
                                                    <h5 className="font-semibold mb-2">{industry.caseStudy.title}</h5>
                                                    <p className="text-sm text-gray-400 mb-2">Client: {industry.caseStudy.client}</p>
                                                    <ul className="list-disc list-inside text-gray-400 space-y-1">
                                                        {industry.caseStudy.results.map((result, i) => (
                                                            <li key={i}>{result}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            </AnimatedItem>
                        ))}
                </div>
            </AnimatedSection>

            {/* Case Study Modal */}
            {selectedCaseStudy && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
                    onClick={() => setSelectedCaseStudy(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-[#1A1A2E] rounded-xl p-6 max-w-2xl w-full"
                        onClick={e => e.stopPropagation()}
                    >
                        <h3 className="text-2xl font-bold mb-4">{selectedCaseStudy.title}</h3>
                        <p className="text-gray-400 mb-4">Client: {selectedCaseStudy.client}</p>
                        <p className="text-gray-300 mb-6">{selectedCaseStudy.details}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {selectedCaseStudy.results.map((result, i) => (
                                <span key={i} className="px-3 py-1 bg-[#3D43D4]/10 text-[#3D43D4] rounded-full text-sm">
                                    {result}
                                </span>
                            ))}
                        </div>
                        <button
                            className="px-6 py-2 bg-[#3D43D4] rounded-lg hover:bg-[#3D43D4]/90 transition-colors"
                            onClick={() => setSelectedCaseStudy(null)}
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* CTA Section */}
            <AnimatedSection className="max-w-7xl mx-auto px-4 py-16">
                <div className="bg-gradient-to-r from-[#3D43D4] to-[#3D43D4]/80 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Industry?</h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Let's discuss how our technology solutions can help your business thrive in the digital age.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-3 bg-white text-[#3D43D4] rounded-lg font-semibold hover:bg-white/90 transition-colors">
                            Start Your Project
                        </button>
                        <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                            Schedule a Call
                        </button>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    )
} 