"use client"
import Image from 'next/image'
import {Roboto} from "next/font/google"
import HeroImg from "@/public/home/Image-Hero.png"
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import circle from "@/public/home/circle.png"
import ring from "@/public/home/rings.png"


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

        // Set initial positions
        gsap.set(efficiencyRef.current, { x: 100, opacity: 0 });
        gsap.set(centerSectionRef.current, { y: -50, opacity: 0 });
        gsap.set(leftLinkRef.current, { x: -100, opacity: 0 });
        gsap.set(rightLinkRef.current, { x: 100, opacity: 0 });
        gsap.set(partnersRef.current, { x: 100, opacity: 0 });
        gsap.set(heroImageRef.current, { y: 100, opacity: 0 });

        // Efficiency box animation
        tl.to(efficiencyRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        });

        // Center section animation
        tl.to(centerSectionRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1");

        // Links animation
        tl.to(leftLinkRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1");

        tl.to(rightLinkRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1");

        // Partners box animation
        tl.to(partnersRef.current, {
            x: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1");

        // Hero image animation
        tl.to(heroImageRef.current, {
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.out"
        }, "-=1");

        // Infinite rotation for #circle
        const circleEl = document.getElementById('circle');
        if (circleEl) {
            gsap.to(circleEl, {
                rotate: 360,
                duration: 10,
                repeat: -1,
                ease: 'linear',
                transformOrigin: '50% 50%'
            });
        }

    }, []);

    return(
        <section className={`relative flex justify-center w-full h-[60rem] lg:h-[70rem]  bg-[url(/home/Background-Hero-1.png)] bg-center lg:bg-no-repeat lg:bg-cover ${roboto.className}`}>
            <section className='lg:w-[80vw] xl:w-[60vw] grid grid-rows-2'>
                <div className='h-full flex'>
                    <div className='hidden lg:flex p-8 items-center'> 
                        <div ref={efficiencyRef} className='flex size-fit flex-col py-5 px-7 border-[#16D2D4] border rounded-2xl text-center bg-[#373652] hover:bg-[#3D43D4] transition-all duration-300'>
                            <p className='font-bold text-2xl'>80%</p>
                            <p className='text-center text-sm'>Boost</p>
                            <p className='text-center text-sm'>efficiency</p>
                            <div className='mt-2 w-full h-1 bg-[#16D2D4] rounded-full overflow-hidden'>
                                <div className='w-[80%] h-full bg-white'></div>
                            </div>
                        </div>
                    </div>

                    <div ref={centerSectionRef} className='w-full flex flex-col justify-center items-center gap-4 px-4 md:px-8'>
                        <span className='flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full hover:bg-[#3D43D4] transition-all duration-300'><p className='text-5xl text-[#3D43D4]'>•</p>Digital Solutions</span>
                        <div className='text-center'>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-[#16D2D4] bg-clip-text text-transparent'>SKS TECH SOLUTION</h1>
                            <h2 className='text-2xl md:text-3xl lg:text-4xl mt-2'>Your Digital Innovation Partner</h2>
                        </div>
                        <p className='text-xs md:text-sm text-gray-400 max-w-[600px] text-center'>We deliver expert mobile app and software development services, customized to drive your
                        success.</p>
                        <div className='flex flex-wrap justify-center gap-4 mt-4'>
                            <Link ref={leftLinkRef} href="/contacctus" className='cursor-pointer rounded-full bg-[#3D43D4] p-3 px-6 hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] font-semibold flex items-center gap-2 group'>
                            Let's connect today! 
                                <span className='group-hover:rotate-12 transition-transform duration-200'>🤘</span>
                            </Link>
                            <Link ref={rightLinkRef} href="/aboutus" className='cursor-pointer rounded-full p-3 px-6 flex gap-2 bg-[#38386E] border border-gray-500 hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] font-semibold hover:fill-[#3D43D4] fill-white group'>
                                Learn More About Us
                                <svg aria-hidden="true" className="h-[1.3rem] group-hover:translate-x-1 transition-transform duration-200" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z"></path></svg>
                            </Link>
                        </div>
                        <div className='flex flex-wrap justify-center gap-6 mt-6'>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 rounded-full bg-[#16D2D4]'></div>
                                <span className='text-sm text-gray-400'>24/7 Support</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 rounded-full bg-[#16D2D4]'></div>
                                <span className='text-sm text-gray-400'>Expert Team</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='w-2 h-2 rounded-full bg-[#16D2D4]'></div>
                                <span className='text-sm text-gray-400'>Fast Delivery</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className='hidden lg:flex p-8 items-center'> 
                        <div ref={partnersRef} className='flex size-fit flex-col py-5 px-7 border-[#16D2D4] border rounded-2xl text-center bg-[#373652] hover:bg-[#3D43D4] transition-all duration-300'>
                            <p className='font-bold text-2xl'>240+</p>
                            <p className='text-center text-sm'>Agency</p>
                            <p className='text-center text-sm'>Partners</p>
                            <div className='mt-2 flex gap-1 justify-center'>
                                <div className='w-1 h-1 rounded-full bg-[#16D2D4]'></div>
                                <div className='w-1 h-1 rounded-full bg-[#16D2D4]'></div>
                                <div className='w-1 h-1 rounded-full bg-[#16D2D4]'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex lg:p-8 xl:p-12 2xl:p-20 p-4 md:p-8 w-full justify-center relative'>
                    <div className='absolute inset-0'></div>
                    <div ref={heroImageRef}  className='relative z-10 w-full max-w-[95%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] 2xl:max-w-[50%]'>
                        <Image alt='circle' src={ring} className='absolute z-50' />
                        <Image 
                            
                            alt='Hero-Image' 
                            src={circle} 
                            id='circle'
                            className='w-full h-auto object-contain'
                            priority
                        />
                    </div>
                </div>
            </section>
        </section>
    )
}

