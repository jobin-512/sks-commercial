'use client'
import { Roboto } from "next/font/google"
import robot from "@/public/home/Image-11-1.png"
import Image from "next/image"
import frame from "@/public/home/Frame-151-2-1 (1).png"
import innovation from "@/public/home/Image-12-1.png"
import gradient from "@/public/home/Gradient-1.png"
import Link from "next/link"
import cloud from "@/public/home/image-28.png"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import logo from "@/public/home/Logo1.png"
import logo2 from "@/public/home/Logo2.png"
import logo3 from "@/public/home/Logo3.png"
import logo4 from "@/public/home/Logo4.png"
import logo5 from "@/public/home/Logo5.png"
import logo6 from "@/public/home/Logo6.png"
import logo7 from "@/public/home/Logo7.png"



const roboto = Roboto({
    subsets: ['latin'],
})

export default function Portfolio(){
    const portfolioRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        const initGSAP = () => {
            // Animate the title section
            gsap.from(".portfolio-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".portfolio-title",
                    start: "top bottom-=100",
                    toggleActions: "play none none none"
                }
            });

            // Animate the first portfolio item
            gsap.from(".portfolio-item-1", {
                y: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".portfolio-item-1",
                    start: "top bottom-=100",
                    toggleActions: "play none none none"
                }
            });

            // Animate the second portfolio item
            gsap.from(".portfolio-item-2", {
                x: -100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".portfolio-item-2",
                    start: "top bottom-=100",
                    toggleActions: "play none none none"
                }
            });

            // Animate the third portfolio item
            gsap.from(".portfolio-item-3", {
                x: 100,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ".portfolio-item-3",
                    start: "top bottom-=100",
                    toggleActions: "play none none none"
                }
            });
        };

        const timer = setTimeout(() => {
            initGSAP();
        }, 500);

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <section className="flex justify-center relative h-full">
            <Image src={frame} className="absolute w-full" alt="bg"></Image>
            <Image src={gradient} className="absolute w-full lg:bottom-80 xl:bottom-60" alt="gradient"></Image>
            <section className="p-4 md:p-8 lg:p-12 w-full lg:w-[80vw] xl:w-[60vw] flex flex-col items-center gap-8" ref={portfolioRef}>
                <div className="flex flex-col items-center gap-2 portfolio-title">
                    <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}><p className='text-5xl text-[#3D43D4]'>•</p>Portfolio</span>
                    <h2 className="text-lg md:text-xl text-center">See Our Success Stories</h2>
                    <p className={`text-xs text-gray-300 ${roboto.className} text-center`}>Explore Our Portfolio of Digital Triumphs</p>
                </div>

                <div className="flex flex-col gap-8 w-full">
                    <div className="portfolio-item-1 border border-[#13cbce] w-full relative p-4 md:p-8 lg:p-12 pb-0 rounded-3xl overflow-clip flex backdrop-blur-2xl">
                        <Image src={robot} className="h-auto w-full" alt="robot"></Image>
                        <div className="grid grid-cols-1 md:grid-cols-2 rounded-t-2xl absolute bottom-0 backdrop-blur-3xl p-4 w-full md:w-[70%] abs z-30">
                            <h3 className="text-lg md:text-xl">Custom Web Solution for a Robotics Company</h3>
                            <p className="text-xs text-gray-300">We developed a sleek, high-performing website for a robotics firm, combining smart design and smooth functionality to showcase their innovations while improving user experience and driving digital engagement.</p>
                        </div>
                    </div>

                    <div className="portfolio-item-2 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className="border border-gray-600 rounded-3xl p-4 md:p-8 lg:p-12 pr-0 backdrop-blur-xl">
                            <Image src={innovation} alt="Innovation" className="w-full h-auto"></Image>
                        </div>
                        <div className="flex flex-col gap-4 justify-center p-4 md:p-8 lg:p-12">
                            <h2 className="text-lg md:text-xl">Website Redesign for a Renewable Energy Firm</h2>
                            <p className="text-xs text-gray-300">Our transformative redesign for a leading Renewable Energy firm seamlessly blends innovation with eco-conscious design, creating a digital space that mirrors their commitment to a greener future.</p>
                            <Link href="/" className='w-fit cursor-pointer rounded-full bg-[#3D43D4] p-2 md:p-3 px-4 md:px-6 hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] font-semibold text-sm md:text-base'>More Details</Link>
                        </div>
                    </div>

                    <div className="portfolio-item-3 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className="flex flex-col gap-4 justify-center p-4 md:p-8 lg:p-12 order-2 md:order-1">
                            <h2 className="text-lg md:text-xl">Next-Gen Web Presence for a Global Tech Firm</h2>
                            <p className="text-xs text-gray-300">We revamped the website of a leading IT agency in Singapore, introducing a modern interface, enhanced UX, and optimized performance to better represent their expertise and attract global clients.</p>
                            <Link href="/" className='w-fit cursor-pointer rounded-full bg-[#3D43D4] p-2 md:p-3 px-4 md:px-6 hover:bg-white duration-200 hover:duration-200 hover:text-[#3D43D4] font-semibold text-sm md:text-base'>More Details</Link>
                        </div>
                        <div className="border border-gray-600 rounded-3xl p-4 md:p-8 lg:p-12 pr-0 pb-0 backdrop-blur-xl overflow-clip order-1 md:order-2">
                            <Image src={cloud} className="w-full h-auto" alt="Innovation"></Image>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 w-full">
                    <h3 className="text-lg md:text-xl text-center">Trusted by brands who value results</h3>
                    <div className="border border-gray-600 rounded-3xl p-4 md:p-8 grid gap-4 md:gap-8 bg-[#2C2A32] w-full">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            <Image alt="logo" src={logo} className="w-full h-auto"></Image>
                            <Image alt="logo" src={logo2} className="w-full h-auto"></Image>
                            <Image alt="logo" src={logo3} className="w-full h-auto"></Image>
                            <Image alt="logo" src={logo4} className="w-full h-auto"></Image>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
                            <div className="hidden md:block"></div>
                            <Image alt="logo" src={logo5} className="w-full h-auto"></Image>
                            <Image alt="logo" src={logo6} className="w-full h-auto"></Image>
                            <Image alt="logo" src={logo7} className="w-full h-auto"></Image>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}