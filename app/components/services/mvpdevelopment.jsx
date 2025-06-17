'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Roboto } from "next/font/google";
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
    subsets: ['latin'],
});

export default function MVPDevelopmentPage() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(sectionRef.current, 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        toggleActions: "play none none none",
                        once: true,
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#08060F] text-white">
            {/* Hero Section */}
            <section className="min-h-[80vh] flex items-center justify-center px-4 md:px-8 lg:px-16 py-20">
                <div className="max-w-6xl w-full text-center space-y-8">
                    <h1 className={`${roboto.className} text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] leading-tight`}>
                        MVP Development Services
                    </h1>
                    <p className={`${roboto.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                        We help startups and businesses validate their ideas quickly with cost-effective, feature-rich Minimum Viable Products.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="flex items-center gap-2 bg-[#171629]/70 px-4 py-2 rounded-full">
                            <span className="text-[#5B61F6]">✓</span>
                            <span>Fast Time-to-Market</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#171629]/70 px-4 py-2 rounded-full">
                            <span className="text-[#5B61F6]">✓</span>
                            <span>Cost-Effective Solutions</span>
                        </div>
                        <div className="flex items-center gap-2 bg-[#171629]/70 px-4 py-2 rounded-full">
                            <span className="text-[#5B61F6]">✓</span>
                            <span>User Feedback Driven</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#5B61F6]">100+</h3>
                        <p className="text-gray-300">MVPs Launched</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#5B61F6]">8-12</h3>
                        <p className="text-gray-300">Weeks Average</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#5B61F6]">85%</h3>
                        <p className="text-gray-300">Success Rate</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-4xl md:text-5xl font-bold text-[#5B61F6]">30+</h3>
                        <p className="text-gray-300">Industries Served</p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold text-center mb-16`}>
                        Our MVP Development Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Idea Validation",
                                description: "Thorough market research and competitor analysis to validate your business idea."
                            },
                            {
                                title: "Rapid Prototyping",
                                description: "Quick development of functional prototypes to test core features and user flows."
                            },
                            {
                                title: "Core Feature Development",
                                description: "Focus on essential features that demonstrate your product's value proposition."
                            },
                            {
                                title: "User Testing",
                                description: "Gather valuable user feedback to refine and improve your MVP."
                            },
                            {
                                title: "Analytics Integration",
                                description: "Track user behavior and gather insights for data-driven decisions."
                            },
                            {
                                title: "Scalable Architecture",
                                description: "Build on a foundation that can grow with your product's success."
                            }
                        ].map((service, index) => (
                            <div key={index} className="p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow-xl space-y-4 transition-transform duration-300 hover:scale-105">
                                <h3 className="text-xl font-semibold text-[#5B61F6]">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold text-center mb-16`}>
                        Industries We Serve
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {[
                            "SaaS",
                            "E-commerce",
                            "Healthcare",
                            "FinTech",
                            "EdTech",
                            "Real Estate",
                            "Food & Delivery",
                            "Social Media"
                        ].map((industry, index) => (
                            <div key={index} className="p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow-xl text-center transition-transform duration-300 hover:scale-105">
                                <h3 className="text-lg font-semibold text-[#5B61F6]">{industry}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold text-center mb-16`}>
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                question: "What is an MVP and why do I need one?",
                                answer: "An MVP (Minimum Viable Product) is a version of your product with just enough features to satisfy early users and gather feedback. It helps validate your idea, reduce development costs, and speed up time-to-market."
                            },
                            {
                                question: "How long does it take to develop an MVP?",
                                answer: "Typically, an MVP can be developed in 8-12 weeks, depending on complexity and features. We focus on delivering core functionality quickly to get your product to market."
                            },
                            {
                                question: "What features should be included in an MVP?",
                                answer: "An MVP should include only the essential features that solve your core problem and demonstrate value to users. We help identify these features through market research and user interviews."
                            },
                            {
                                question: "How much does MVP development cost?",
                                answer: "MVP development costs vary based on features, complexity, and platform. We offer flexible pricing models and can work within your budget while ensuring quality."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow-xl">
                                <h3 className="text-xl font-semibold text-[#5B61F6] mb-3">{faq.question}</h3>
                                <p className="text-gray-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#171629]/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold mb-8`}>
                        Ready to Launch Your MVP?
                    </h2>
                    <p className="text-lg text-gray-300 mb-12">
                        Let's turn your idea into a successful product with our MVP development services.
                    </p>
                    <button className="bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
                        Get in Touch
                    </button>
                </div>
            </section>
        </div>
    );
} 