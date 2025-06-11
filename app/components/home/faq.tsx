"use client"

import { Roboto } from "next/font/google";
import { useState, useRef, useLayoutEffect } from "react";
import {ChevronsDown,ChevronsUp} from "lucide-react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQData {
    [key: string]: FAQItem[];
}

const roboto = Roboto({
    subsets: ['latin'],
})

gsap.registerPlugin(ScrollTrigger); 

export default function Faq(){
    const [activeTab, setActiveTab] = useState<keyof FAQData>('General Questions');
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const tabContainerRef = useRef<HTMLDivElement>(null); 
    const sliderRef = useRef<HTMLDivElement>(null); 
    const faqGridRef = useRef<HTMLDivElement>(null); 
    const sectionRef = useRef<HTMLElement>(null); 

    const activeTabRef = useRef(activeTab);

    // Effect for initial ScrollTrigger animation on component mount
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            if (faqGridRef.current && sectionRef.current) { 
                const faqItems = faqGridRef.current.children;

                // Always set initial state
                gsap.set(faqItems, { opacity: 0, y: 50, visibility: 'hidden' });

                // Set up ScrollTrigger for initial entry animation
                gsap.to(faqItems, {
                    opacity: 1,
                    y: 0,
                    visibility: 'visible',
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "power1.out",
                    overwrite: true,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "bottom top",
                        toggleActions: "play none none none",
                        once: true,
                    }
                });
            }
            // Refresh ScrollTrigger to ensure correct positioning after DOM updates
            ScrollTrigger.refresh();
        }, sectionRef);

        return () => ctx.revert();
    }, []); 

    // Effect for tab changes and managing the slider/answer visibility/content entry
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Update slider position for active tab
            if (tabContainerRef.current && sliderRef.current) {
                const activeTabButton = tabContainerRef.current.querySelector(`[data-tab="${activeTab}"]`) as HTMLElement;
                if (activeTabButton) {
                    gsap.to(sliderRef.current, {
                        left: activeTabButton.offsetLeft,
                        width: activeTabButton.offsetWidth,
                        duration: 0.3,
                        ease: "power2.out",
                    });
                }
            }

            // Animate content when tab changes if already in view
            const rect = sectionRef.current?.getBoundingClientRect();
            const isSectionInView = rect && rect.top < window.innerHeight && rect.bottom > 0;

            if (faqGridRef.current && isSectionInView) {
                // Ensure initial state for new content before animating
                gsap.set(faqGridRef.current.children, { opacity: 0, y: 50 });
                gsap.to(faqGridRef.current.children,
                    { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: "power1.out", overwrite: true }
                );
            }

            // Ensure all answer elements are initially hidden (height: 0) when tab changes
            // This applies to *new* content when switching tabs.
            if (faqGridRef.current) {
                faqGridRef.current.querySelectorAll<HTMLElement>('p[class*="faq-answer-"]').forEach((el, idx) => {
                    // Only hide if it's not the currently open item in the *new* tab's content
                    // And if it's not the one being toggled to open
                    if (openIndex !== idx) {
                        gsap.set(el, { height: 0, opacity: 0, overflow: 'hidden' });
                    }
                });
            }

            // Reset openIndex when activeTab changes, but not when openIndex changes
            // This must be handled carefully. If `activeTab` changes, all answers should close.
            // If `openIndex` changes, only that specific one.
            // The `toggleFAQ` handles `openIndex` state, so this `useLayoutEffect` only needs to
            // ensure *new* tabs start with all answers closed.
            if (activeTab !== activeTabRef.current) { // Check if activeTab actually changed
                setOpenIndex(null);
            }
            activeTabRef.current = activeTab; // Update ref for next comparison


        }, sectionRef);

        return () => ctx.revert();

    }, [activeTab]); 

    const faqData: FAQData = {
        'General Questions': [
            {
                question: "Where are you based? Do you work with clients overseas?",
                answer: "Yes, we do! We work remotely with clients from all over the world. Whether you're in Bali or Berlin, we've got you covered."
            },
            {
                question: "Can I see more of your work before starting?",
                answer: "Of course! Just let us know what you're interested in, and we'll share relevant case studies and examples."
            },
            {
                question: "Do you work with startups or only big brands?",
                answer: "We work with businesses of all sizes, from ambitious startups to established enterprises. Our solutions are tailored to your specific needs and goals."
            },
            {
                question: "How experienced is your team?",
                answer: "Our team comprises highly skilled professionals with years of experience in their respective fields, ensuring top-notch quality and innovative solutions."
            },
            {
                question: "How do I know if we're a good fit?",
                answer: "We offer a free consultation to discuss your project and see how our expertise aligns with your vision. This helps ensure a mutually beneficial partnership."
            },
            {
                question: "Do I need to have everything ready before I contact you?",
                answer: "No, you don't. We can help you define your needs and prepare all necessary materials. Just come with your ideas, and we'll guide you through the process."
            }
        ],
        'Pricing & Payments': [
            {
                question: "How do you charge for your services?",
                answer: "Our pricing models vary depending on the project scope and complexity. We offer hourly rates, fixed-price contracts, and retainer agreements. We'll discuss the best option for your project during the consultation."
            },
            {
                question: "Do you require an upfront payment?",
                answer: "Yes, a deposit is typically required to begin a project, with subsequent payments linked to project milestones. This ensures commitment from both sides."
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept various payment methods, including bank transfers, credit cards, and online payment platforms for your convenience."
            }
        ],
        'Working Process': [
            {
                question: "What is your typical project timeline?",
                answer: "Project timelines depend on complexity and scope. We'll provide a detailed timeline after assessing your needs and agreeing on the project plan."
            },
            {
                question: "How do you communicate with clients during a project?",
                answer: "We maintain transparent communication through regular updates, meetings (virtual or in-person), and dedicated project management tools. We believe in keeping you informed every step of the way."
            },
            {
                question: "Can I request revisions during the project?",
                answer: "Yes, we include revision rounds in our project agreements to ensure your satisfaction. Additional revisions beyond the agreed scope may incur extra charges."
            }
        ],
        'Support & Communication': [
            {
                question: "What kind of support do you offer after project completion?",
                answer: "We offer post-launch support and maintenance packages to ensure your solution continues to run smoothly and stays updated with the latest technologies."
            },
            {
                question: "How quickly do you respond to inquiries?",
                answer: "We strive to respond to all client inquiries within 24-48 hours during business days, ensuring timely communication and support."
            }
        ]
    };

    const toggleFAQ = (index: number) => {
        setOpenIndex(prevIndex => {
            const newIndex = prevIndex === index ? null : index;
            const targetElement = document.querySelector(`.faq-answer-${index}`) as HTMLElement;

            if (targetElement) {
                if (newIndex === index) { // Opening the FAQ item
                    // Temporarily set height to auto to get natural height, then animate from 0
                    gsap.set(targetElement, { overflow: 'hidden', height: 'auto' });
                    const naturalHeight = targetElement.offsetHeight; 
                    gsap.fromTo(targetElement,
                        { height: 0, opacity: 0 },
                        { height: naturalHeight, opacity: 1, duration: 0.3, ease: 'power1.out', onComplete: () => {
                            gsap.set(targetElement, { height: 'auto', overflow: 'visible' }); // Set height to auto after animation
                        }
                    });
                } else { // Closing the FAQ item
                    gsap.to(targetElement,
                        { height: 0, opacity: 0, duration: 0.3, ease: 'power1.in', onComplete: () => {
                            gsap.set(targetElement, { overflow: 'hidden' });
                        }
                    });
                }
            }
            return newIndex;
        });
    };

    return(
        <section ref={sectionRef} className="flex justify-center">
            <section className="lg:w-[80vw] xl:w-[60vw] flex flex-col items-center gap-4">
                <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}><p className='text-5xl text-[#3D43D4]'>•</p>FAQ</span>
                <h2 className="text-xl">Find Your Answers Here</h2>
                <p className={`${roboto.className} text-xs text-gray-300`}>Everything you need to know, In one place</p>
                
                <div className={`${roboto.className} flex flex-col w-full items-center gap-8`}>
                    <div ref={tabContainerRef} className="relative flex flex-wrap justify-center gap-4 border border-gray-600 rounded-full p-2">
                        {/* Sliding indicator */}
                        <div ref={sliderRef} className="absolute top-0 bottom-0 h-[3rem] mt-0.5 bg-[#3D43D4] rounded-full transition-colors duration-300"></div>

                        {Object.keys(faqData).map((tab) => (
                            <button 
                                key={tab} 
                                data-tab={tab} // Add data-tab attribute to identify the button
                                className={`relative px-4 py-2 rounded-full text-sm font-medium z-10 ${activeTab === tab ? 'text-white' : 'text-gray-300'}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div ref={faqGridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-start">
                        {faqData[activeTab].map((item: FAQItem, index: number) => (
                            <div key={index} className="border border-gray-600 rounded-xl p-6 bg-[#26242C80]">
                                <button 
                                    className="flex justify-between items-center w-full text-left focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="text-lg font-medium text-white">{item.question}</h3>
                                    <span className="ml-6 text-xl text-[#3D43D4]">
                                        {openIndex === index ? <ChevronsUp/> : <ChevronsDown/>}
                                    </span>
                                </button>
                                <p className={`mt-4 text-sm text-gray-300 faq-answer-${index}`}>
                                    {item.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}