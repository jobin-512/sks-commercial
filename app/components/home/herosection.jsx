"use client"
import Image from 'next/image'
import {Roboto} from "next/font/google"
import HeroImg from "@/public/home/Image-Hero.png"
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const roboto = Roboto({
    subsets: ['latin'],
})

export default function HeroSection(){
    const efficiencyRef = useRef(null);
    const centerSectionRef = useRef(null);
    const leftLinkRef = useRef(null);
    const rightLinkRef = useRef(null);
    const partnersRef = useRef(null);
    const heroImageRef = useRef(null);

    useEffect(() => {
        // Create a timeline
        const tl = gsap.timeline();

        // Efficiency box animation
        tl.from(efficiencyRef.current, {
            x: 100,
            opacity: 0,
            duration: 2,
            ease: "power3.out"
        });

        // Center section animation
        tl.from(centerSectionRef.current, {
            y: -50,
            opacity: 0,
            duration: 2,
            ease: "power3.out"
        }, "-=1.5");

        // Links animation - using to() instead of from() to ensure they stay visible
        tl.to(leftLinkRef.current, {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: "power3.out"
        }, "-=1.5");

        tl.to(rightLinkRef.current, {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: "power3.out"
        }, "-=2");

        // Partners box animation
        tl.from(partnersRef.current, {
            x: 100,
            opacity: 0,
            duration: 2,
            ease: "power3.out"
        }, "-=1.5");

        // Hero image animation
        tl.from(heroImageRef.current, {
            y: 100,
            opacity: 0,
            duration: 2.5,
            ease: "power3.out"
        }, "-=1.5");

        // Set initial positions for links
        gsap.set(leftLinkRef.current, { x: -100, opacity: 0 });
        gsap.set(rightLinkRef.current, { x: 100, opacity: 0 });
    }, []);

    return(
        <section className={`relative flex justify-center w-full lg:h-[32rem] xl:h-[40rem] 2xl:h-[52rem] lg:bg-[url(/home/Background-Hero-1.png)] lg:bg-no-repeat lg:bg-cover ${roboto.className}`}  >
            <section className='lg:w-[80vw] xl:w-[60vw] grid grid-rows-2'>
                <div className=' h-full flex'>
                    <div className=' flex p-8 items-center'> 
                        <div ref={efficiencyRef} className='flex size-fit flex-col py-5 px-7 border-[#16D2D4] border rounded-2xl text-center bg-[#373652]'>
                            <p className='font-bold'>80%</p>
                            <p className='text-center'>technology</p>
                            <p className='text-center'>efficiency</p>
                        </div>
                    </div>

                    <div ref={centerSectionRef} className='w-full flex flex-col justify-center items-center gap-4'>
                        <span className='flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full'><p className='text-5xl text-[#3D43D4]'>•</p>Digital Solutions</span>
                        <div className='text-center'>
                        <h1 className='text-4xl'>SKS TECH SOLUTION</h1>
                        <h2 className='text-4xl'>DIGITAL SOLUTIONS</h2>
                        </div>
                        <p className='text-xs text-gray-400'>Expert Mobile app and software development services Tailored for Success</p>
                        <div className='flex gap-4'>
                        <Link ref={leftLinkRef} href="/" className='cursor-pointer rounded-full bg-[#3D43D4] p-3 px-6  hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] font-semibold'>Let's contact us 🤘</Link>
                        <Link ref={rightLinkRef} href="/" className='cursor-pointer rounded-full p-3 px-6 flex gap-2  bg-[#38386E] border border-gray-500 hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] font-semibold hover:fill-[#3D43D4] fill-white'>More About Us <svg aria-hidden="true" className="h-[1.3rem] " viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg> </Link>
                        </div>
                    </div>
                    
                    <div className=' flex p-8 items-center'> 
                        <div ref={partnersRef} className='flex size-fit flex-col py-5 px-7 border-[#16D2D4] border rounded-2xl text-center bg-[#373652]'>
                            <p className='font-bold'>240+</p>
                            <p className='text-center'>Agency</p>
                            <p className='text-center'>Partners</p>
                        </div>
                    </div>
                </div>
                <div className=' flex lg:p-8 xl:p-12 2xl:p-20 justify-center'>
                    <Image ref={heroImageRef} alt='Hero-Image' src={HeroImg} className='w-auto'></Image>
                </div>
            </section>
        </section>
    )
}