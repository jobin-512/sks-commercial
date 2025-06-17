"use client"

import Link from "next/link"
import { Roboto } from "next/font/google"
import Image from "next/image"
import seo from "@/public/home/SEO.png"
import {Check} from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { StaticImageData } from "next/image"
import scomd from "@/public/home/Socmed.png"
import ppc from "@/public/home/PPC-Ads.png"
import content from "@/public/home/Content-Mark.png"
import email from "@/public/home/Email.png"
import technology from "@/public/home/Technology.png"
import gsap from 'gsap'
import bg from "@/public/home/About-Us-BG.png"


const roboto = Roboto({
    subsets: ['latin'],
})

interface ServiceData {
    title: string;
    description: string;
    features: string[];
    image: StaticImageData;
}

interface ServicesData {
    [key: string]: ServiceData;
}

const servicesData: ServicesData = {
    "AI Solutions": {
        title: "AI Solutions",
        description: "We design intelligent AI solutions that help automate processes, enhance decision-making, and future-proof your business.",
        features: ["We leverage machine learning for intelligent automation", "Our AI tools increase efficiency across departments", "We unlock insights using real-time data intelligence"],
        image: seo
    },
    "On Demand": {
        title: "On Demand Services",
        description: "We deliver flexible, on-demand development services to meet your evolving business needs—fast, scalable, and reliable.",
        features: ["We scale tech resources as you grow", "Our experts handle urgent development projects", "We offer quick deployment with long-term support"],
        image: scomd
    },
    "ERP": {
        title: "Enterprise Resource Planning",
        description: "We build custom ERP systems that simplify workflows and boost performance with centralized control and automation.",
        features: ["Our ERP tools streamline your business operations", "We offer real-time data synchronization", "Our solutions adapt to your specific workflows"],
        image: ppc
    },
    "Real Estate": {
        title: "Real Estate Solutions",
        description: "We empower real estate businesses with digital tools, CRM systems, and effective digital marketing services.",
        features: ["Our CRM tracks every property lead efficiently", "We create custom web portals for your listings", "Our SEO strategies improve property visibility"],
        image: content
    },
    "Gaming": {
        title: "Gaming Solutions",
        description: "We develop powerful gaming platforms with immersive design, scalable architecture, and flawless functionality.",
        features: ["Our games run smoothly across devices", "We design interactive 2D/3D gaming experiences", "Our backend supports real-time multiplayer features"],
        image: email
    },
    "E-commerce": {
        title: "E-commerce Solutions",
        description: "We build secure, user-friendly e-commerce websites with smart integrations, fast loading, and SEO foundations.",
        features: ["Our platforms support smooth checkout flows", "We integrate payment gateways and inventory tools", "Our web development ensures a mobile-first design"],
        image: technology
    }
}

export default function ServiceDetails (){
    const [selectedService, setSelectedService] = useState<keyof ServicesData>("AI Solutions")
    const sectionRef = useRef<HTMLElement>(null);
    const topSectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);

    // Initial load animation
    useEffect(() => {
        if (topSectionRef.current) {
            gsap.fromTo(topSectionRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );
        }

        if (contentRef.current) {
            gsap.fromTo(contentRef.current.children,
                { opacity: 0, x: 50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out"
                }
            );
        }
    }, []);

    // Animation for service switching
    useEffect(() => {
        if (imageRef.current && detailsRef.current) {
            // Fade out current content
            gsap.to([imageRef.current, detailsRef.current], {
                opacity: 0,
                x: -50,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    // Fade in new content
                    gsap.to([imageRef.current, detailsRef.current], {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });
        }
    }, [selectedService]);

    return(
        <section ref={sectionRef} className="flex justify-center p-4 md:p-8 lg:p-20 relative">
            <Image src={bg} className="absolute w-full h-full object-cover" alt="bg"></Image>
            <section className="w-full xl:w-[60vw] lg:w-[80vw] grid grid-rows-[auto_auto] gap-8 lg:gap-12 justify-center">
                <div ref={topSectionRef} className="flex flex-col justify-center items-center gap-4">
                    <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}>
                        <p className='text-5xl text-[#3D43D4]'>•</p>Service Details
                    </span>
                    <h2 className="text-lg md:text-xl text-center max-w-[20rem]">Tailored Solutions for Your Business Growth</h2>
                    <div className={`flex flex-wrap justify-center gap-2 text-xs ${roboto.className}`}>
                        {Object.keys(servicesData).map((service) => (
                            <button 
                                key={service}
                                onClick={() => setSelectedService(service as keyof ServicesData)}
                                className={`px-3 md:px-4 py-2 rounded-full border whitespace-nowrap ${
                                    selectedService === service 
                                        ? 'bg-[#151540] border-[#3939a8]' 
                                        : 'bg-[#15131B] border-gray-400'
                                } cursor-pointer transition-all duration-300 hover:scale-105`}
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                </div>
                <div ref={contentRef} className={`${roboto.className} grid grid-cols-1 lg:grid-cols-2 gap-8 justify-self-center w-full lg:w-[85%]`}>
                    <div className="relative w-full aspect-square lg:aspect-auto">
                        <Image 
                            ref={imageRef}
                            src={servicesData[selectedService].image} 
                            alt={servicesData[selectedService].title}
                            className="object-contain w-full h-full"
                        />
                    </div>
                    <div ref={detailsRef} className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-semibold">{servicesData[selectedService].title}</h3>
                        <p className="text-sm md:text-base text-gray-300">{servicesData[selectedService].description}</p>
                        <div className="space-y-2">
                            {servicesData[selectedService].features.map((feature: string, index: number) => (
                                <p key={`feature-${index}`} className="text-sm md:text-base flex items-center gap-2">
                                    <Check size={20} className="flex-shrink-0"/>
                                    <span>{feature}</span>
                                </p>
                            ))}
                        </div>
                        <Link 
                            href="/" 
                            className={`inline-block cursor-pointer rounded-full bg-[#3D43D4] p-3 px-6 hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] font-semibold ${roboto.className}`}
                        >
                            Explore More
                        </Link>
                    </div>
                </div>
            </section>
        </section>
    )
}