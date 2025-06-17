'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Roboto } from "next/font/google";

gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
    subsets: ['latin'],
});

export default function AboutUsPage() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current, 
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
        <section ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-[#08060F] text-white overflow-hidden">
            <div className="max-w-6xl w-full text-center space-y-10">
                <h1 className={`${roboto.className} text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] leading-tight`}>
                    Driving Innovation, Delivering Excellence
                </h1>
                <p className={`${roboto.className} text-lg md:text-xl text-gray-300 max-w-3xl mx-auto`}>
                    At SKS Tech Solutions, we are catalysts for digital transformation. We partner with ambitious businesses to turn groundbreaking ideas into impactful software solutions.
                </p>

                <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                    <div className="flex flex-col items-center text-center p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow-xl space-y-4 transition-transform duration-300 hover:scale-105">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#5B61F6]">Our Mission</h2>
                        <p className="text-md text-gray-300">
                            To empower businesses with cutting-edge technology and innovative software solutions that drive growth, enhance efficiency, and create lasting value.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow-xl space-y-4 transition-transform duration-300 hover:scale-105">
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#5B61F6]">Our Vision</h2>
                        <p className="text-md text-gray-300">
                            To be a global leader in digital innovation, recognized for our commitment to excellence, client success, and transformative technological advancements.
                        </p>
                    </div>
                </div>

                <div className="mt-20 space-y-8">
                    <h2 className={`${roboto.className} text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6]`}>
                        Why Choose Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow-xl space-y-3 transition-transform duration-300 hover:scale-105">
                            <span className="text-4xl text-[#3D43D4]">•</span>
                            <h3 className="text-xl font-semibold">Expert Team</h3>
                            <p className="text-sm text-gray-300">Our seasoned professionals bring unparalleled expertise to every project, ensuring top-tier results.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow-xl space-y-3 transition-transform duration-300 hover:scale-105">
                            <span className="text-4xl text-[#3D43D4]">•</span>
                            <h3 className="text-xl font-semibold">Client-Centric Approach</h3>
                            <p className="text-sm text-gray-300">Your vision is our blueprint. We work closely with you to deliver solutions that truly meet your unique needs.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow-xl space-y-3 transition-transform duration-300 hover:scale-105">
                            <span className="text-4xl text-[#3D43D4]">•</span>
                            <h3 className="text-xl font-semibold">Innovative Solutions</h3>
                            <p className="text-sm text-gray-300">We leverage the latest technologies to craft forward-thinking solutions that give you a competitive edge.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <h2 className={`${roboto.className} text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6]`}>
                        Our Values
                    </h2>
                    <ul className="mt-8 space-y-4 text-left inline-block">
                        <li className="text-lg text-gray-300 flex items-center gap-3">
                            <span className="text-[#3D43D4] text-2xl font-bold">•</span> Integrity: Upholding the highest ethical standards in all our interactions.
                        </li>
                        <li className="text-lg text-gray-300 flex items-center gap-3">
                            <span className="text-[#3D43D4] text-2xl font-bold">•</span> Collaboration: Fostering strong partnerships and teamwork for shared success.
                        </li>
                        <li className="text-lg text-gray-300 flex items-center gap-3">
                            <span className="text-[#3D43D4] text-2xl font-bold">•</span> Innovation: Continuously exploring new ideas and technologies to stay ahead.
                        </li>
                        <li className="text-lg text-gray-300 flex items-center gap-3">
                            <span className="text-[#3D43D4] text-2xl font-bold">•</span> Customer Focus: Prioritizing client needs and delivering exceptional value.
                        </li>
                        <li className="text-lg text-gray-300 flex items-center gap-3">
                            <span className="text-[#3D43D4] text-2xl font-bold">•</span> Excellence: Striving for perfection in every solution we deliver.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
} 