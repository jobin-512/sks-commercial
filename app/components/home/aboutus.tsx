"use client"

import {Roboto} from "next/font/google"
import Link from "next/link"
import {MoveRight,ChevronRight} from "lucide-react"
import phone from "@/public/home/original-d1c0cd2ed043c25858d8af9d21fabc23.png"
import Image from "next/image"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
    subsets: ['latin'],
})

export default function AboutUs(){
    const sectionRef = useRef<HTMLElement>(null);
    const topSectionRef = useRef<HTMLDivElement>(null);
    const phoneRef = useRef<HTMLImageElement>(null);
    const visionMissionRef = useRef<HTMLDivElement>(null);
    const bottomContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Animate top section elements
        if (topSectionRef.current) {
            gsap.fromTo(topSectionRef.current.children, 
                { opacity: 0, y: 50 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    stagger: 0.2, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: topSectionRef.current,
                        start: "top 80%"
                    }
                }
            );
        }

        // Animate phone image
        if (phoneRef.current) {
            gsap.fromTo(phoneRef.current,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: phoneRef.current,
                        start: "top 80%"
                    }
                }
            );
        }

        // Animate vision and mission cards
        if (visionMissionRef.current) {
            gsap.fromTo(visionMissionRef.current.children,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: visionMissionRef.current,
                        start: "top 80%"
                    }
                }
            );
        }

        // Animate bottom content
        if (bottomContentRef.current) {
            gsap.fromTo(bottomContentRef.current.children,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: bottomContentRef.current,
                        start: "top 80%"
                    }
                }
            );
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <section ref={sectionRef} className="relative flex justify-center lg:h-[auto] 2xl:h-[42rem] px-4 lg:px-0">
            <section className="w-full lg:w-[80vw] xl:w-[60vw] grid grid-rows-[auto_auto] lg:grid-rows-[1fr_2fr] gap-8 lg:gap-0">
                <div ref={topSectionRef} className="flex relative flex-col justify-center p-4 lg:p-8 items-center">
                    <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}><p className='text-5xl text-[#3D43D4]'>•</p>About Us</span>
                    <div className="grid grid-cols-1 lg:grid-cols-[3fr_7fr] h-full w-full mt-8">
                        <div className="flex justify-center items-center flex-col gap-4">
                            <span className="flex text-5xl lg:text-7xl font-light">10<p className="text-[#0F40AC]">+</p></span>
                            <p className="text-xs">YEARS EXPERIENCE</p>
                        </div>
                        <div className="text-lg lg:text-2xl p-4 lg:p-8 text-center lg:text-left">
                            <p>Empowering brands globally</p>
                            <p> with innovative solutions</p>
                            <p>for real growth and digital impact</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
                    <div className="flex justify-center">
                        <Image ref={phoneRef} src={phone} alt="Phone" className="w-[80%] lg:w-full h-auto"></Image>
                    </div>
                    <div className="grid grid-rows-[auto_auto] lg:grid-rows-[3fr_5fr] gap-8 lg:gap-0">
                        <div ref={visionMissionRef} className="grid grid-cols-1 lg:grid-cols-2 font-thin">
                            <Link href="/" className="border-b lg:border-r border-t border-gray-600 p-4 hover:bg-[#171629]/50 transition-colors">
                                <div className="flex w-full gap-4">
                                    <p>Our Vision</p>
                                    <span className="w-fit"><MoveRight/></span>
                                </div>
                                <p className="text-xs text-gray-300 mt-2">We strive to elevate businesses through Digital Marketing Services, crafting SEO-driven strategies that connect, convert, and inspire.</p>
                            </Link>
                            <Link href="/" className="border-b border-t border-gray-600 p-4 hover:bg-[#171629]/50 transition-colors">
                                <div className="flex w-full gap-4">
                                    <p>Our Mission</p>
                                    <span className="w-fit"><MoveRight/></span>
                                </div>
                                <p className="text-xs text-gray-300 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam deserunt unde reprehenderit eligendi iste quibusdam aliquid </p>
                            </Link>
                        </div>
                        <div ref={bottomContentRef} className="text-xs font-thin py-4 lg:py-8 space-y-4">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam repellendus, sequi veniam dolorem aspernatur harum labore quasi est commodi alias eius voluptate minima incidunt quaerat enim deleniti, distinctio cupiditate optio?</p>
                            <Link href="/" className="text-[.9rem] flex w-fit items-center bg-[#3D43D4] rounded-full px-8 py-2 hover:bg-[#3D43D4]/90 transition-colors">Read More <ChevronRight/></Link>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}