'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function Header() {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isButtonChecked, setIsButtonChecked] = useState(false);

    useEffect(() => {
        // Initial slide-in animation for the header itself
        gsap.from(headerRef.current, {
            y: -100,
            duration: 1,
            ease: "power3.out"
        });

        // Scroll effect
        const handleScroll = () => {
            const header = headerRef.current;
            if (!header) return;

            if (window.scrollY > 50) {
                (header as HTMLElement).classList.add('backdrop-blur-md', 'bg-[#08060F]/80', 'shadow-lg');
                (header as HTMLElement).classList.remove('bg-transparent');
            } else {
                (header as HTMLElement).classList.remove('backdrop-blur-md', 'bg-[#08060F]/80', 'shadow-lg');
                (header as HTMLElement).classList.add('bg-transparent');
            }
        };
        
        // The header is already set to bg-transparent in JSX, so no need to set initial state here.
        // Tailwind's transition-all will handle the smooth class changes.

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSidebar = () => {
        if (!isSidebarOpen) {
            gsap.to(sidebarRef.current, {
                x: 0,
                duration: 0.5,
                ease: "power3.out"
            });
        } else {
            gsap.to(sidebarRef.current, {
                x: "100%",
                duration: 0.5,
                ease: "power3.in"
            });
        }
        setIsSidebarOpen(!isSidebarOpen);
    };

    return(
        <>
            <header ref={headerRef} className="z-[100] fixed lg:block top-0 w-full transition-all duration-300 bg-transparent">
                <section className='lg:w-[80vw] xl:w-[60vw] justify-self-center md:h-[4rem] hidden lg:grid grid-flow-col items-center'>
                    <Link  href="/" className='justify-self-start '>
                        <Image alt="logo" src={logo} className='w-auto grayscale-100 invert h-[3.5rem]' />
                    </Link>

                    <div className='justify-self-center flex gap-4'>
                        <Link href="/portfolio" className="text-white hover:text-[#3D43D4] transition-colors">Portfolio</Link>
                        
                        {/* Services Dropdown */}
                        <div className="relative group h-full flex items-center">
                            <span className="text-white hover:text-[#3D43D4] transition-colors cursor-pointer inline-flex items-center h-full">
                                Services
                                {/* Optional: Add a dropdown icon */}
                                <svg className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </span>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-48 bg-[#08060F] border border-gray-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto flex flex-col p-2 gap-2 top-[calc(100%-2px)] pt-4 z-50">
                                <Link href="/services/software-development" className="block px-4 py-2 text-sm text-white hover:bg-[#3D43D4] hover:text-white rounded-md transition-colors">Software Development</Link>
                                <Link href="/services/seo" className="block px-4 py-2 text-sm text-white hover:bg-[#3D43D4] hover:text-white rounded-md transition-colors">SEO</Link>
                                <Link href="/services/mobile-app-development" className="block px-4 py-2 text-sm text-white hover:bg-[#3D43D4] hover:text-white rounded-md transition-colors">Mobile App Development</Link>
                                <Link href="/services/ui-design" className="block px-4 py-2 text-sm text-white hover:bg-[#3D43D4] hover:text-white rounded-md transition-colors">UI design</Link>
                                <Link href="/services/mvp-development" className="block px-4 py-2 text-sm text-white hover:bg-[#3D43D4] hover:text-white rounded-md transition-colors">MVP Development</Link>
                                <Link href="/services/ai-development" className="block px-4 py-2 text-sm text-white hover:bg-[#3D43D4] hover:text-white rounded-md transition-colors">AI Development</Link>
                                <Link href="/services/cloud-engineering" className="block px-4 py-2 text-sm text-white hover:bg-[#3D43D4] hover:text-white rounded-md transition-colors">Cloud Engineering</Link>
                            </div>
                        </div>

                        <Link href="/industries" className="text-white hover:text-[#3D43D4] transition-colors">Industries</Link>
                        <Link href="/aboutus" className="text-white hover:text-[#3D43D4] transition-colors">About us</Link>
                    </div>

                    <div className='justify-self-end mt-2'>
                        <Link href="/contact-us"
                            className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                            >
                            <span
                                className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
                            >
                                <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
                            >
                                <span
                                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
                                ></span>
                            </span>
                            <span
                                className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
                            ></span>
                            <span
                                className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >
                                Get Started
                            </span>
                        </Link>
                    </div>
                </section>

                {/* mobile View */}
                <section className='lg:hidden px-4 h-[4rem] grid grid-flow-col items-center'>
                    <Link href="/" className='justify-self-start'>
                        <Image alt='logo' src={logo} className='h-[3.5rem] w-auto grayscale-100 invert'></Image>
                    </Link>

                    <div className='justify-self-end'>
                        <button 
                            onClick={toggleSidebar}
                            className="p-2 hover:bg-gray-100/10 rounded-lg transition-colors text-white"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                                />
                            </svg>
                        </button>
                    </div>
                </section>
            </header>

            {/* Mobile Sidebar */}
            <div 
                ref={sidebarRef}
                className="fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-[#08060F] z-[200] transform translate-x-full lg:hidden"
            >
                <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-end mb-8">
                        <button 
                            onClick={toggleSidebar}
                            className="p-2 hover:bg-gray-100/10 rounded-lg transition-colors text-white"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="w-6 h-6"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    d="M6 18L18 6M6 6l12 12" 
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Link 
                            href="/portfolio" 
                            className="text-lg text-white hover:text-[#3D43D4] transition-colors"
                            onClick={toggleSidebar}
                        >
                            Portfolio
                        </Link>
                        <Link 
                            href="/services" 
                            className="text-lg text-white hover:text-[#3D43D4] transition-colors"
                            onClick={toggleSidebar}
                        >
                            Services
                        </Link>
                        {/* Mobile Service Links - now directly visible */}
                        <Link 
                            href="/services/software-development" 
                            className="text-md text-gray-300 hover:text-[#3D43D4] transition-colors ml-4"
                            onClick={toggleSidebar}
                        >
                            - Software Development
                        </Link>
                        <Link 
                            href="/services/seo" 
                            className="text-md text-gray-300 hover:text-[#3D43D4] transition-colors ml-4"
                            onClick={toggleSidebar}
                        >
                            - SEO
                        </Link>
                        <Link 
                            href="/services/mobile-app-development" 
                            className="text-md text-gray-300 hover:text-[#3D43D4] transition-colors ml-4"
                            onClick={toggleSidebar}
                        >
                            - Mobile App Development
                        </Link>
                        <Link 
                            href="/services/ui-design" 
                            className="text-md text-gray-300 hover:text-[#3D43D4] transition-colors ml-4"
                            onClick={toggleSidebar}
                        >
                            - UI design
                        </Link>
                        <Link 
                            href="/services/mvp-development" 
                            className="text-md text-gray-300 hover:text-[#3D43D4] transition-colors ml-4"
                            onClick={toggleSidebar}
                        >
                            - MVP Development
                        </Link>
                        <Link 
                            href="/services/ai-development" 
                            className="text-md text-gray-300 hover:text-[#3D43D4] transition-colors ml-4"
                            onClick={toggleSidebar}
                        >
                            - AI Development
                        </Link>
                        <Link 
                            href="/services/cloud-engineering" 
                            className="text-md text-gray-300 hover:text-[#3D43D4] transition-colors ml-4"
                            onClick={toggleSidebar}
                        >
                            - Cloud Engineering
                        </Link>
                        <Link 
                            href="/industries" 
                            className="text-lg text-white hover:text-[#3D43D4] transition-colors"
                            onClick={toggleSidebar}
                        >
                            Industries
                        </Link>
                        <Link 
                            href="/aboutus" 
                            className="text-lg text-white hover:text-[#3D43D4] transition-colors"
                            onClick={toggleSidebar}
                        >
                            About us
                        </Link>
                        <Link 
                            href="/contact-us" 
                            className="text-lg text-white hover:text-[#3D43D4] transition-colors"
                            onClick={toggleSidebar}
                        >
                            Contact Us
                        </Link>
                    </div>
                    <div className='mt-auto'>
                        <Link href="/contact-us"
                            onClick={toggleSidebar}
                            className="block w-full text-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                        >
                             <span
                                className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
                            >
                                Get Started
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
