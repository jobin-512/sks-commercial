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
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ex aperiam libero quas officiis soluta esse accusantium. Optio accusamus porro recusandae ea. Nostrum illo dolorum sint repudiandae. Exercitationem, ad quibusdam!",
        features: ["Keyword Research", "AI-Powered Analysis", "Machine Learning Integration"],
        image: seo
    },
    "On Demand": {
        title: "On Demand Services",
        description: "Custom on-demand solutions tailored to your business needs. We provide flexible and scalable services that adapt to your requirements.",
        features: ["24/7 Support", "Custom Development", "Rapid Deployment"],
        image: scomd
    },
    "ERP": {
        title: "Enterprise Resource Planning",
        description: "Comprehensive ERP solutions to streamline your business operations and improve efficiency across all departments.",
        features: ["Process Automation", "Resource Management", "Business Intelligence"],
        image: ppc
    },
    "Real Estate": {
        title: "Real Estate Solutions",
        description: "Innovative technology solutions for the real estate industry, helping you manage properties and connect with clients effectively.",
        features: ["Property Management", "Virtual Tours", "Market Analysis"],
        image: content
    },
    "Gaming": {
        title: "Gaming Solutions",
        description: "Cutting-edge gaming solutions and development services to create engaging and immersive gaming experiences.",
        features: ["Game Development", "AR/VR Integration", "Multiplayer Systems"],
        image: email
    },
    "E-commerce": {
        title: "E-commerce Solutions",
        description: "Powerful e-commerce platforms and solutions to help you build and grow your online business.",
        features: ["Online Store Setup", "Payment Integration", "Inventory Management"],
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
        <section ref={sectionRef} className="flex justify-center p-20 relative">
            <Image src={bg} className="absolute w-full" alt="bg"></Image>
            <section className="xl:w-[60vw] lg:w-[80vw] grid grid-rows-[1fr_2fr] justify-center">
                <div ref={topSectionRef} className="flex flex-col justify-center items-center gap-4">
                    <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}><p className='text-5xl text-[#3D43D4]'>•</p>Service Details</span>
                    <h2 className="text-xl w-[20rem] text-center">Tailored Solutions for Your Business Growth</h2>
                        <div className={`flex gap-2 text-xs ${roboto.className}`}>
                            {Object.keys(servicesData).map((service) => (
                                <button 
                                    key={service}
                                    onClick={() => setSelectedService(service as keyof ServicesData)}
                                    className={`px-4 py-2 rounded-full border ${
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
                <div ref={contentRef} className={`${roboto.className} grid grid-cols-2 gap-8 justify-self-center xl:w-[85%]`}>
                    <Image 
                        ref={imageRef}
                        src={servicesData[selectedService].image} 
                        alt={servicesData[selectedService].title}
                    />
                    <div ref={detailsRef} className="space-y-4">
                            <h3>{servicesData[selectedService].title}</h3>
                            <p className="text-xs text-gray-300">{servicesData[selectedService].description}</p>
                        <div>
                            {servicesData[selectedService].features.map((feature: string, index: number) => (
                                <p key={`feature-${index}`} className="text-xs flex gap-2"><Check size={20}/>{feature}</p>
                            ))}
                        </div>
                        <Link href="/" className={`cursor-pointer rounded-full bg-[#3D43D4]  p-3 px-6  hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] font-semibold ${roboto.className}`}>Explore More</Link>
                    </div>
                </div>
            </section>
        </section>
    )
}