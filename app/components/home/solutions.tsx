"use client"

import Link from "next/link"
import { Roboto } from "next/font/google"
import ai from "@/public/home/artifical-intelligence.png"
import gen from "@/public/home/gen-ai.png"
import ar from "@/public/home/ar-vr-1.png"
import block from "@/public/home/blockchain-1.png"
import meta from "@/public/home/metaverse-2.png" 
import data from "@/public/home/data-analytics.png"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import {FolderCode,PackageSearch,RectangleGoggles,TabletSmartphone,CloudCog,MonitorSmartphone} from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const roboto = Roboto({
    subsets: ['latin'],
})

const solutions = [
    {
        title: "Artificial intelligence",
        description: "By leveraging generative and conversational AI, we develop smart apps that optimize decision-making processes and automation.",
        image: ai
    },
    {
        title: "Generative AI",
        description: "By utilizing generative AI, we develop intelligent systems that automate workflows and unlock creative possibilities for businesses.",
        image: gen
    },
    {
        title: "AR/VR",
        description: "Our AR/VR technologies deliver immersive and interactive experiences, redefining user engagement in retail, education, and entertainment industries.",
        image: ar
    },
    {
        title: "Blockchain",
        description: "We build secure, industry-changing blockchain solutions that revolutionize industries through decentralized approaches.",
        image: block
    },
    {
        title: "Metaverse",
        description: "We design immersive metaverse solutions that bridges businesses with users, by offering new and engaging digital experiences.",
        image: meta
    },
    {
        title: "Data Analytics",
        description: "With advanced data analytics, we turn raw information into actionable insights, for smarter decisions making and achieve success.",
        image: data
    }
]

export default function Solutions(){
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const serviceCardsRef = useRef<HTMLDivElement>(null);

    // Separate effect for GSAP initialization
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const initGSAP = () => {
            gsap.registerPlugin(ScrollTrigger);
            
            const cards = document.querySelectorAll('.service-card');

            cards.forEach((card, index) => {
                // Set initial state
                gsap.set(card, {
                    x: index % 2 === 0 ? -100 : 100,
                    opacity: 0,
                    visibility: 'visible'
                });

                // Create animation
                gsap.to(card, {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        end: "top center",
                        toggleActions: "play none none none"
                    }
                });
            });
        };

        // Initialize after a short delay to ensure DOM is ready
        const timer = setTimeout(() => {
            initGSAP();
        }, 500);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // Mounting effect
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return(
        <section className="flex items-center flex-col justify-center gap-8 md:gap-12">
            <section className="w-full lg:w-[80vw] xl:w-[60vw] flex flex-col items-center pt-8 px-4 md:px-8">
                <div className="flex flex-col justify-center items-center gap-4">
                    <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}><p className='text-5xl text-[#3D43D4]'>•</p>Crafting Solutions</span>
                    <h2 className="text-lg md:text-xl text-center max-w-[28rem]">Crafting Solutions With Technology that Works For You</h2>
                </div>
                <div className="w-full mt-8">
                    {/* Mobile Layout (3x2 grid) */}
                    <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {solutions.map((solution, index) => (
                            <div 
                                key={index}
                                className="relative overflow-hidden rounded-lg cursor-pointer h-[12rem]"
                            >
                                <div className="absolute inset-0 bg-black/60">
                                    <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white">
                                        <h3 className="text-sm font-semibold mb-2 text-center">{solution.title}</h3>
                                        <p className="text-xs text-center line-clamp-3">{solution.description}</p>
                                    </div>
                                </div>
                                <Image 
                                    alt={solution.title} 
                                    src={solution.image}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Desktop Layout (horizontal) */}
                    <div className="hidden lg:flex h-[30rem] gap-4">
                        {solutions.map((solution, index) => (
                            <div 
                                key={index}
                                className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-[1000ms] ease-in-out ${
                                    hoveredIndex === index 
                                        ? 'w-[40%]' 
                                        : hoveredIndex !== null 
                                            ? 'w-[12%]'
                                            : 'w-[16.666%]'
                                }`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={`absolute inset-0 ${
                                    hoveredIndex === index ? 'bg-black/70' : 'bg-black/60'
                                }`}>
                                    <div className={`absolute inset-0 flex flex-col justify-center items-center p-4 text-white transition-all duration-[1000ms] ${
                                        hoveredIndex === index ? 'opacity-100' : 'opacity-100'
                                    }`}>
                                        <h3 className={`font-semibold mb-2 text-center transition-all duration-[1000ms] ${
                                            hoveredIndex === index ? 'text-lg' : 'text-sm'
                                        }`}>{solution.title}</h3>
                                        <p className={`text-center transition-all duration-[1000ms] ${
                                            hoveredIndex === index ? 'text-sm opacity-100' : 'text-xs opacity-0'
                                        }`}>{solution.description}</p>
                                    </div>
                                </div>
                                <Image 
                                    alt={solution.title} 
                                    src={solution.image}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full lg:w-[80vw] xl:w-[60vw] flex rounded-3xl bg-[url(/home/Untitled-1.png)] bg-no-repeat bg-cover ">
                <div className="h-[12rem] md:h-[15rem] w-full rounded-3xl p-4 md:p-8 flex flex-col justify-center bg-gradient-to-r from-[#3D43D4] to-transparent ">
                    <h2 className="text-2xl md:text-3xl">We Don’t Just Code, We Connect</h2>
                    <p className="text-xl md:text-2xl">A True Tech Partner Invested in Your Growth</p>
                </div>
            </section>

            <section className="w-full lg:w-[80vw] xl:w-[60vw] flex flex-col items-center gap-8 px-4 md:px-8">
                <h2 className="text-lg md:text-xl text-center max-w-[35rem]">Grow your business online with strategy-first digital solutions and support.</h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" ref={serviceCardsRef}>
                    <div className={`service-card rounded-xl border p-6 md:p-8 space-y-4 hover:bg-white hover:text-black duration-200 hover:duration-200 ${roboto.className}`} style={{ visibility: 'hidden' }}>
                        <span className="flex gap-2 items-center"><FolderCode className="text-white rounded-full bg-[#3D43D4] p-2" size={40} /><h3 className="text-lg md:text-xl font-semibold">Software Development</h3></span>
                        <p className="text-sm md:text-base">We create strong, scalable software solutions that meet your company&#39;s requirements. Our emphasis is on intelligent design and seamless performance to allow you to expand with no constraints.</p>
                    </div>
                    
                    <div className={`service-card rounded-xl border p-6 md:p-8 space-y-4 hover:bg-white hover:text-black duration-200 hover:duration-200 ${roboto.className}`} style={{ visibility: 'hidden' }}>
                        <span className="flex gap-2 items-center"><PackageSearch className="text-white rounded-full bg-[#3D43D4] p-2" size={40} /><h3 className="text-lg md:text-xl font-semibold">Product Engineering</h3></span>
                        <p className="text-sm md:text-base">We offer complete product engineering services—from concept to deployment. We design high-performance, future-ready solutions built to scale, evolve, and align with your business goals.</p>
                    </div>

                    <div className={`service-card rounded-xl border p-6 md:p-8 space-y-4 hover:bg-white hover:text-black duration-200 hover:duration-200 ${roboto.className}`} style={{ visibility: 'hidden' }}>
                        <span className="flex gap-2 items-center"><RectangleGoggles className="text-white rounded-full bg-[#3D43D4] p-2" size={40} /><h3 className="text-lg md:text-xl font-semibold">Digital Experience</h3></span>
                        <p className="text-sm md:text-base">We create user-centric digital experiences through strategic design and deep user behavior insights, ensuring intuitive interfaces and high engagement across all platforms.</p>
                    </div>

                    <div className={`service-card rounded-xl border p-6 md:p-8 space-y-4 hover:bg-white hover:text-black duration-200 hover:duration-200 ${roboto.className}`} style={{ visibility: 'hidden' }}>
                        <span className="flex gap-2 items-center"><TabletSmartphone className="text-white rounded-full bg-[#3D43D4] p-2" size={40} /><h3 className="text-lg md:text-xl font-semibold">Mobile App Development</h3></span>
                        <p className="text-sm md:text-base">Our team builds flawless, responsive mobile apps for iOS and Android. Our user-first approach ensures high performance, intuitive UI/UX, and exceptional functionality that users love.</p>
                    </div>

                    <div className={`service-card rounded-xl border p-6 md:p-8 space-y-4 hover:bg-white hover:text-black duration-200 hover:duration-200 ${roboto.className}`} style={{ visibility: 'hidden' }}>
                        <span className="flex gap-2 items-center"><CloudCog className="text-white rounded-full bg-[#3D43D4] p-2" size={40} /><h3 className="text-lg md:text-xl font-semibold">Cloud Engineering</h3></span>
                        <p className="text-sm md:text-base">We establish safe and scalable cloud infrastructures that enable you to work more efficiently. Our cloud solutions are designed to expand with your company and protect your data.</p>
                    </div>

                    <div className={`service-card rounded-xl border p-6 md:p-8 space-y-4 hover:bg-white hover:text-black duration-200 hover:duration-200 ${roboto.className}`} style={{ visibility: 'hidden' }}>
                        <span className="flex gap-2 items-center"><MonitorSmartphone className="text-white rounded-full bg-[#3D43D4] p-2" size={40} /><h3 className="text-lg md:text-xl font-semibold">MVP Development</h3></span>
                        <p className="text-sm md:text-base">We rapidly develop MVPs that focus on usability, core features, and user feedback, helping you validate your idea and reach the market quicker.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}