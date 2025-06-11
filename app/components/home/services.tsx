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
        // Log the current state of refs when useEffect runs
        console.log("useEffect triggered.");
        console.log("Top blocks refs (at useEffect start):", topBlocksRef.current);
        console.log("Bottom blocks refs (at useEffect start):", bottomBlocksRef.current);

        // Ensure all refs are populated before creating animations
        if (topBlocksRef.current.length === 0 || bottomBlocksRef.current.length === 0) {
            return; // Exit if refs are not ready yet
        }

        // Animate gradient
        if (gradientRef.current) {
            gsap.fromTo(gradientRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
        }

        // Animate top section elements
        if (topSectionRef.current) {
            gsap.fromTo(topSectionRef.current.children, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: topSectionRef.current, start: "top 80%" } });
        }

        // Combine all blocks for a single staggered animation
        const allBlocks = [...topBlocksRef.current, ...bottomBlocksRef.current];

        console.log("Blocks Container Ref at timeline creation:", blocksContainerRef.current);

        // Create a timeline for the blocks animation
        let blocksTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: blocksContainerRef.current, // Trigger on the main container
                start: "top 99%", // Very early start point
                toggleActions: "play none none none", // Play once on scroll down
            }
        });

        console.log("All blocks array before animation:", allBlocks);

        // Add animation to the timeline - extreme y, opacity, and background color
        blocksTimeline.fromTo(allBlocks, 
            { y: 1000, opacity: 0, scale: 0.8, transformOrigin: "center center", backgroundColor: "rgba(0,0,0,0)" }, // Initial state with extreme y and transparent background
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", stagger: 0.1, clearProps: "all", backgroundColor: "rgba(61,67,212,0.5)" } // Final state with visible background
        );

        // Add hover animations for blocks
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

        // Cleanup: Kill all ScrollTriggers and the timeline created in this useEffect
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
        <section ref={sectionRef} className={`flex justify-center relative opacity-100`}> 
            <Image ref={gradientRef} src={gradient} className="hidden lg:block absolute h-auto top-60" alt="Gradient"></Image>
            <section className="grid grid-rows-[1fr_3fr] xl:w-[60vw] lg:w-[80vw] lg:h-[auto] xl:h-[auto] 2xl:h-[auto] w-full gap-12">
                <div ref={topSectionRef} className="flex flex-col justify-center items-center gap-4">
                    <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className} `}><p className='text-5xl text-[#3D43D4]'>•</p>Services</span>
                    <h2 className="xl:w-[35rem] text-center text-2xl">Comprehenvice Mobile App development & Software Development</h2>
                    <p className={`${roboto.className} text-xs text-gray-400`}>Tailored solution For your business growth</p>
                    <Link href="/" className={`cursor-pointer rounded-full bg-[#3D43D4] font-light p-3 px-6  hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] font-semibold ${roboto.className}`}>Explore More</Link>
                </div>

            <div ref={blocksContainerRef} className={`relative lg:bg-[url(/home/Servicebg.png)] bg-no-repeat ${roboto.className}  grid grid-cols-3 gap-12 bg-size-[100%_auto] overflow-visible`}>
                <div className="grid grid-rows-2 pt-20 gap-8 relative z-30">
                    <div ref={el => addToRefs(el, topBlocksRef)} className="relative bg-[#26242C40] hover:bg-[#15154080] hover:duration-200 duration-200 p-4 pr-8 space-y-3 rounded-2xl border border-gray-700 ml-[-3rem] w-[95%] z-30">
                        <h3 className="text-xl">Software Development</h3>
                        <p className=" text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex doloribus excepturi </p>
                        <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                        <Image src={software} alt="Software Development"></Image>
                    </div>
                    <div>
                    <div ref={el => addToRefs(el, bottomBlocksRef)} className="relative bg-[#26242C40] hover:bg-[#15154080] hover:duration-200 duration-200 p-4 pr-8 space-y-3 rounded-2xl border border-gray-700 ml-[-3rem] w-[95%]">
                        <h3 className="text-xl">AI development</h3>
                        <p className=" text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex doloribus excepturi </p>
                        <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                        <Image src={Ai} alt="Software Development"></Image>
                    </div>
                    </div>
                </div>
                <div className="grid grid-rows-2 pt-30 gap-8 relative z-30">
                    <div ref={el => addToRefs(el, topBlocksRef)} className="relative bg-[#3D43D4] hover:bg-[#3D43D4] hover:duration-200 duration-200 p-4 pr-8 space-y-3 rounded-2xl border border-gray-700 z-30">
                        <h3 className="text-xl">Mobile App Development</h3>
                        <p className=" text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex doloribus excepturi </p>
                        <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                        <Image src={seo} alt="Mobile app dev"></Image>
                    </div>
                    <div>
                    <div ref={el => addToRefs(el, bottomBlocksRef)} className="relative bg-[#26242C40] hover:bg-[#15154080] hover:duration-200 duration-200 p-4 pr-8 space-y-3 rounded-2xl border border-gray-700  ">
                        <h3 className="text-xl">MVP Development</h3>
                        <p className=" text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex doloribus excepturi </p>
                        <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                        <Image src={mvp} alt="MVP Development"></Image>
                    </div>
                    </div>
                </div>
                <div className="grid grid-rows-2 pt-20 gap-8 relative z-30">
                    <div ref={el => addToRefs(el, topBlocksRef)} className="relative bg-[#26242C40] hover:bg-[#15154080] hover:duration-200 duration-200 p-4 pr-8 space-y-3 rounded-2xl border border-gray-700 ml-[3rem] w-[95%] z-30">
                        <h3 className="text-xl">Web App Development</h3>
                        <p className=" text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex doloribus excepturi </p>
                        <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                        <Image src={web} alt="website Development"></Image>
                    </div>
                    <div>
                    <div ref={el => addToRefs(el, bottomBlocksRef)} className="relative bg-[#26242C40] hover:bg-[#15154080] hover:duration-200 duration-200 p-4 pr-8 space-y-3 rounded-2xl border border-gray-700 ml-[3rem] w-[95%]">
                        <h3 className="text-xl">UI/UX Designing</h3>
                        <p className=" text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex doloribus excepturi </p>
                        <Link href="/" className="flex w-fit hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] rounded-full py-2 px-4 bg-[#403F4680]">Learn More <ChevronsRight/></Link>
                        <Image src={ui} alt="UI/UX"></Image>
                    </div>
                    </div>
                </div>
            </div>
            </section>
        </section>
    )
}