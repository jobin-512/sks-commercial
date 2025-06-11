'use client'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Header(){
    const headerRef = useRef(null);

    useEffect(() => {
        // Initial slide-in animation
        gsap.from(headerRef.current, {
            y: -100,
            duration: 1,
            ease: "power3.out"
        });

        // Scroll effect
        const handleScroll = () => {
            if (window.scrollY > 50) {
                headerRef.current.classList.add('backdrop-blur-md', 'bg-[#08060F]/80');
            } else {
                headerRef.current.classList.remove('backdrop-blur-md', 'bg-[#08060F]/80');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header ref={headerRef} className="z-[100] sticky top-0 w-full transition-all duration-300">
            <section className='lg:w-[80vw] xl:w-[60vw] justify-self-center md:h-[4rem] grid grid-flow-col items-center'>
            <div className='justify-self-start'>
            <p>Will be logo</p>
            </div>

            <div className='justify-self-center flex gap-4'>
            <Link rel="stylesheet" href="/">Portfolio</Link>
            <Link rel="stylesheet" href="/">Services</Link>
            <Link rel="stylesheet" href="/">Industries</Link>
            <Link rel="stylesheet" href="/">About us</Link>
            <Link rel="stylesheet" href="/">Insights</Link>
            </div>

            <div className='justify-self-end'>
                <button>will be a button soon</button>
            </div>
            </section>
        </header>
    )
}