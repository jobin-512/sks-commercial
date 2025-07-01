"use client"

import { Roboto } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import {ChevronsRight} from "lucide-react"
import gradient from "@/public/home/Gradient-1.png"
import software from "@/public/home/BlueIcons-19-13.png"
import Ai from "@/public/home/BlueIcons-19-01-1.png"
import seo from "@/public/home/BlueIcons-19-02.png"
import mvp from "@/public/home/BlueIcons-19-01.png"
import web from "@/public/home/BlueIcons-19-01-3.png"
import ui from "@/public/home/BlueIcons-19-01-3.png"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
    subsets: ['latin'],
})

export default function Services(){
    const topSectionRef = useRef<HTMLDivElement>(null);
    const topBlocksRef = useRef<HTMLDivElement[]>([]);
    const bottomBlocksRef = useRef<HTMLDivElement[]>([]);
    const gradientRef = useRef<HTMLImageElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const blocksContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (topBlocksRef.current.length === 0 || bottomBlocksRef.current.length === 0) {
            return;
        }

        if (gradientRef.current) {
            gsap.fromTo(gradientRef.current, 
                { opacity: 0, y: 100 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1, 
                    ease: "power2.out", 
                    scrollTrigger: { 
                        trigger: sectionRef.current, 
                        start: "top 80%" 
                    } 
                }
            );
        }

        if (topSectionRef.current) {
            gsap.fromTo(topSectionRef.current.children, 
                { opacity: 0, y: 50 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.8, 
                    stagger: 0.1, 
                    ease: "power3.out", 
                    scrollTrigger: { 
                        trigger: topSectionRef.current, 
                        start: "top 80%" 
                    } 
                }
            );
        }

        const allBlocks = [...topBlocksRef.current, ...bottomBlocksRef.current];

        let blocksTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: blocksContainerRef.current,
                start: "top 99%",
                toggleActions: "play none none none",
            }
        });

        blocksTimeline.fromTo(allBlocks, 
            { y: 1000, opacity: 0, scale: 0.8, transformOrigin: "center center", backgroundColor: "rgba(0,0,0,0)" },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", stagger: 0.1, clearProps: "all", backgroundColor: "rgba(61,67,212,0.5)" }
        );

        const addHoverAnimation = (block: HTMLDivElement) => {
            gsap.to(block, {
                scale: 1.02,
                duration: 0.3,
                ease: "power2.out",
                paused: true,
                onComplete: () => {
                    gsap.to(block, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                }
            });
        };

        topBlocksRef.current.forEach(block => {
            if (block) addHoverAnimation(block);
        });

        bottomBlocksRef.current.forEach(block => {
            if (block) addHoverAnimation(block);
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            blocksTimeline.kill();
        };
    }, [topBlocksRef.current.length, bottomBlocksRef.current.length]);

    const addToRefs = (el: HTMLDivElement | null, refs: React.MutableRefObject<HTMLDivElement[]>) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    return(
        <section ref={sectionRef} className="flex justify-center relative opacity-100 px-4 lg:px-0"> 
            <Image ref={gradientRef} src={gradient} className="hidden lg:block absolute h-auto top-60" alt="Gradient"></Image>
            <section className="grid grid-rows-[auto_auto] xl:w-[60vw] lg:w-[80vw] w-full gap-8 lg:gap-12">
                <div ref={topSectionRef} className="flex flex-col justify-center items-center gap-4 py-8 lg:py-0">
                    <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}>
                        <p className='text-5xl text-[#3D43D4]'>•</p>Services
                    </span>
                    <h2 className="text-xl lg:text-2xl text-center max-w-[35rem]">One-stop solution for Mobile App development &amp; Software Development</h2>
                    <p className={`${roboto.className} text-xs text-gray-400`}>Tailored solution For your business growth</p>
                    <Link href="/industries" className={`cursor-pointer rounded-full bg-[#3D43D4]  p-3 px-6 hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] font-semibold ${roboto.className}`}>
                        Explore More
                    </Link>
                </div>

                <div ref={blocksContainerRef} className={`relative lg:bg-[url(/home/Servicebg.png)] bg-no-repeat ${roboto.className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 bg-size-[100%_auto] overflow-visible`}>
                    <div className="grid grid-rows-2 gap-6 lg:gap-8 lg:pt-20 relative z-30">
                        <div ref={el => addToRefs(el, topBlocksRef)} className="relative bg-[#26242C40] hover:bg-[#15154080] hover:duration-200 duration-200 p-4 lg:pr-8 space-y-3 rounded-2xl border border-gray-700 lg:ml-[-3rem] w-full lg:w-[95%] z-30">
                            <h3 className="text-lg lg:text-xl">Software Development</h3>
                            <p className="text-sm lg:text-base text-gray-300">We develop robust, scalable custom software that meets your business requirements. We integrate strategy, design, and innovation to provide lasting value digital solutions that drive long-term performance and growth.</p>
                            <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                            <Image src={software} alt="Software Development" className="w-full h-auto"></Image>
                        </div>
                        <div ref={el => addToRefs(el, bottomBlocksRef)} className="relative bg-[#26242C40] hover:bg-[#15154080] hover:duration-200 duration-200 p-4 lg:pr-8 space-y-3 rounded-2xl border border-gray-700 lg:ml-[-3rem] w-full lg:w-[95%]">
                            <h3 className="text-lg lg:text-xl">AI development</h3>
                            <p className="text-sm lg:text-base text-gray-300">We create strong, scalable software solutions that meet your company&#39;s requirements. Our emphasis is on intelligent design and seamless performance to allow you to expand with no constraints.</p>
                            <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                            <Image src={Ai} alt="AI Development" className="w-full h-auto"></Image>
                        </div>
                    </div>

                    <div className="grid grid-rows-2 gap-6 lg:gap-8 lg:pt-30 relative z-30">
                        <div ref={el => addToRefs(el, topBlocksRef)} className="relative bg-[#3D43D4] hover:bg-[#3D43D4] hover:duration-200 duration-200 p-4 lg:pr-8 space-y-3 rounded-2xl border border-gray-700 z-30">
                            <h3 className="text-lg lg:text-xl">Mobile App Development</h3>
                            <p className="text-sm lg:text-base text-gray-300">Our team crafts seamless, high-performance mobile applications for iOS and Android that engage users and support business growth. </p>
                            <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                            <Image src={seo} alt="Mobile app dev" className="w-full h-auto"></Image>
                        </div>
                        <div ref={el => addToRefs(el, bottomBlocksRef)} className="relative bg-[#26242C40] hover:bg-[#15154080] hover:duration-200 duration-200 p-4 lg:pr-8 space-y-3 rounded-2xl border border-gray-700">
                            <h3 className="text-lg lg:text-xl">MVP Development</h3>
                            <p className="text-sm lg:text-base text-gray-300">We develop impeccable, responsive iOS and Android mobile apps. Our user-centric approach guarantees end-user performance, seamless UI/UX, and great functionality that end-users adore. </p>
                            <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                            <Image src={mvp} alt="MVP Development" className="w-full h-auto"></Image>
                        </div>
                    </div>

                    <div className="grid grid-rows-2 gap-6 lg:gap-8 lg:pt-20 relative z-30">
                        <div ref={el => addToRefs(el, topBlocksRef)} className="relative bg-[#26242C40] hover:bg-[#15154080] hover:duration-200 duration-200 p-4 lg:pr-8 space-y-3 rounded-2xl border border-gray-700 lg:ml-[3rem] w-full lg:w-[95%] z-30">
                            <h3 className="text-lg lg:text-xl">Cloud Engineering</h3>
                            <p className="text-sm lg:text-base text-gray-300">Power your business with secure, scalable, and affordable cloud solutions. We assist you to move, manage, and transform with confidence and ongoing support. </p>
                            <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                            <Image src={web} alt="website Development" className="w-full h-auto"></Image>
                        </div>
                        <div ref={el => addToRefs(el, bottomBlocksRef)} className="relative bg-[#26242C40] hover:bg-[#15154080] hover:duration-200 duration-200 p-4 lg:pr-8 space-y-3 rounded-2xl border border-gray-700 lg:ml-[3rem] w-full lg:w-[95%]">
                            <h3 className="text-lg lg:text-xl">UI/UX Designing</h3>
                            <p className="text-sm lg:text-base text-gray-300">Our UI/UX experts design engaging, user-centric interfaces that offer smooth navigation and elevate overall digital experiences.</p>
                            <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                            <Image src={ui} alt="UI/UX" className="w-full h-auto"></Image>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}