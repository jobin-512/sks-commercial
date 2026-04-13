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
                    const buttonRect = activeTabButton.getBoundingClientRect();
                    const containerRect = tabContainerRef.current.getBoundingClientRect();
                    
                    // Calculate the correct position considering scroll position
                    const scrollLeft = tabContainerRef.current.scrollLeft;
                    const left = buttonRect.left - containerRect.left + scrollLeft;
                    
                    gsap.to(sliderRef.current, {
                        left: left,
                        width: buttonRect.width,
                        duration: 0.3,
                        ease: "power2.out",
                        overwrite: true
                    });

                    // Center the active tab
                    const containerWidth = containerRect.width;
                    const buttonCenter = left + (buttonRect.width / 2);
                    const scrollTo = buttonCenter - (containerWidth / 2);
                    
                    gsap.to(tabContainerRef.current, {
                        scrollLeft: scrollTo,
                        duration: 0.3,
                        ease: "power2.out"
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
                question: "Why should I work with Seo Master ?",
                answer: "Because we provide more than services, we craft solutions that develop your business and build your trust."
            },
            {
                question: "Do you have international clients?",
                answer: "Yes, we are honored to serve international clients in more than 15 nations in various time zones with remote support and complete collaboration on projects."
            },
            {
                question: "What if I need changes after launch?",
                answer: "We offer post-launch support and flexible maintenance plans so your digital solution stays updated and optimized."
            },
            {
                question: "Can I view samples of your previous work?",
                answer: "Yes, contact us to ask for our portfolio or read client success stories on our website."
            },
            {
                question: "How will I know which service I require?",
                answer: "Our specialists will assist you throughout the consultation, selecting services according to your business objectives and digital presence requirements."
            },
            {
                question: "How do you guarantee project deadlines?",
                answer: "We adhere to a precise project schedule, provide frequent updates, and utilize milestone tracking to guarantee each stage is delivered within the timeframe."
            },
            {
                question: "Can I request demo versions before final delivery?",
                answer: "Yes. We share staged previews so you can see progress and suggest changes before final deployment."
            },
            {
                question: "Do you help businesses get online for the first time?",
                answer: "Absolutely. From domain to deployment, we help businesses launch their first digital presence from scratch."
            },
            {
                question: "May I order several services simultaneously?",
                answer: "Yes, we will package services into one tailored package that meets your project objectives and timeline."
            }
        ],
        'Pricing & Payments': [
            {
                question: "How do I pay for services?",
                answer: "We accept payments through bank transfer or UPI. We also allow milestone-based payments for long-term projects."
            },
            {
                question: "Do you accept international payments for global clients?",
                answer: "Yes, we accept international payments through secure channels. We work with clients in 15+ countries and provide convenient payment options globally."
            },
            {
                question: "Are there any hidden charges in your service pricing?",
                answer: "No hidden charges. All fees are discussed upfront during consultation. We value transparency and client trust in every project."
            },
            {
                question: "Do you charge separately for hosting and domain setup?",
                answer: "Yes, hosting and domain services are billed separately unless included in your package. Contact us for bundled options."
            },
            {
                question: "Do I get an invoice or a receipt after making payment?",
                answer: "Yes, we provide a professional invoice with all payment details and GST breakdown (if applicable)."
            },
            {
                question: "Do I need to pay extra for revisions or changes?",
                answer: "Minor revisions are usually included. Significant changes outside the agreed scope may attract additional costs. We’ll inform you before applying charges."
            },
            {
                question: "Can I pause the project after making part payment?",
                answer: "Yes, but terms apply. We’ll hold your project for a specific period. Reach out to discuss timelines and reactivation charges."
            },
            {
                question: "Are prices the same for SEO, SMO, and ORM services?",
                answer: "No, each service has its own pricing based on complexity and duration. Contact us for detailed service-specific quotes."
            },
            {
                question: "What's your refund policy?",
                answer: "Our cancellation and refund policies are clearly stipulated in our terms and conditions and are project stage-specific."
            },
            {
                question: "Can I pay after the project is completed?",
                answer: "We follow milestone-based payments. Full post-delivery payment is generally not accepted unless agreed in writing beforehand."
            }

        ],
        'Working Process': [
            {
                question: "How do you manage rush or fast-track projects?",
                answer: "We evaluate feasibility, assign extra resources if necessary, and focus on delivery without any compromise on quality or communication."
            },
            {
                question: "What if I'm not happy with the work?",
                answer: "We want you to be happy and provide revision rounds depending on the scope of work agreed to in our proposal."
            },
            {
                question: "What is part of your software product development?",
                answer: "Everything from concept and design through deployment and scaling is taken care of by us to deliver the final software that suits your precise requirements."
            },
            {
                question: "What if I want to add new features mid-project?",
                answer: "We’re flexible! New features can be added with updated pricing and timelines. We’ll confirm everything before moving ahead."
            },
            {
                question: "Can I review the design before development?",
                answer: "Yes, we offer wireframes or mockups for feedback and review before proceeding with the development process."
            },
            {
                question: "Do you test the software before delivering it?",
                answer: "Yes. We conduct comprehensive testing—functionality, security, and performance testing—before delivering the end product."
            },
            {
                question: "Can you register a domain for me or host my website?",
                answer: "Can you register a domain for me or host my website?"
            },
            {
                question: "Do you execute NDAs for confidential projects?",
                answer: "Yes, we would be pleased to execute non-disclosure agreements to maintain your business details and project secrecy."
            },
            {
                question: "What is the procedure for updates post-delivery?",
                answer: "We provide support packages on an ongoing basis and can carry out updates as per your feedback or changing business requirements."
            },
            {
                question: "How frequently do we interact during a project?",
                answer: "Meetings are set according to project complexity—weekly or biweekly is usually the case—but we're always within reach when you need to touch base."
            },
        ],
        'Support & Communication': [
            {
                question: "Is technical support available after hours?",
                answer: "We offer support during business hours and emergency support options based on your package."
            },
            {
                question: "Will you teach my staff to work with new tools?",
                answer: "Yes, we provide initial training and documentation to enable your staff to manage your website, application, or software comfortably."
            },
            {
                question: "Will I get a dedicated project manager for communication?",
                answer: "Yes, every project includes a dedicated manager to ensure clear, ongoing communication."
            },
            {
                question: "How long is support available after project handover?",
                answer: "Free support is offered for 30 days post-launch. Extended support plans are available."
            },
            {
                question: "Do you help migrate websites or data from previous developers?",
                answer: "Yes, we assist with smooth migration and ensure no data loss during the transition."
            },
            {
                question: "Can I renew my support plan after expiration?",
                answer: "Yes, you can renew monthly or annually, depending on your service plan needs."
            },
            {
                question: "Is support available for older software you built years ago?",
                answer: "If it's our codebase, yes. We evaluate and offer continued support or upgrade suggestions."
            },
            {
                question: "Do you offer technical training after project delivery?",
                answer: "Yes, we offer introductory training sessions to help your team manage the solution confidently."
            },
            {
                question: "How do I request additional features mid-project?",
                answer: "Just email your project manager. We'll evaluate the request and provide a timeline adjustment if needed."
            },
            {
                question: "Do you offer support in multiple languages?",
                answer: "Our support is currently offered in English and Hindi for client convenience."
            },
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
        <section ref={sectionRef} className="flex justify-center px-4 md:px-8 py-20">
            <section className="w-full lg:w-[80vw] xl:w-[60vw] flex flex-col items-center gap-4">
                <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}><p className='text-5xl text-[#3D43D4]'>•</p>FAQ</span>
                <h2 className="text-lg md:text-xl text-center">Find Your Answers Here</h2>
                <p className={`${roboto.className} text-xs text-gray-300 text-center`}>Everything you need to know, In one place</p>
                
                <div className={`${roboto.className} flex flex-col w-full items-center gap-4 md:gap-8`}>
                    <div 
                        ref={tabContainerRef} 
                        className="relative flex flex-nowrap justify-center gap-2 md:gap-4 border border-gray-600 rounded-full p-2 w-full max-w-3xl mx-auto overflow-x-auto scrollbar-hide bg-[#171629]/50 backdrop-blur-sm"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Sliding indicator */}
                        <div 
                            ref={sliderRef} 
                            className="absolute top-0 bottom-0 h-[calc(100%-4px)] mt-0.5 rounded-full transition-all duration-300"
                            style={{ 
                                width: '0px', 
                                left: '0px',
                                background: 'linear-gradient(90deg, rgba(61, 67, 212, 0.2) 0%, rgba(91, 97, 246, 0.2) 100%)',
                                boxShadow: 'inset 0 0 0 1px rgba(61, 67, 212, 0.3), 0 0 20px rgba(61, 67, 212, 0.2)'
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] opacity-20 rounded-full"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] opacity-10 blur-sm rounded-full"></div>
                        </div>

                        <div className="flex flex-nowrap justify-center items-center gap-2 md:gap-4">
                            {Object.keys(faqData).map((tab) => (
                                <button 
                                    key={tab} 
                                    data-tab={tab}
                                    className={`relative flex-shrink-0 px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-medium z-10 whitespace-nowrap transition-all duration-300 ${
                                        activeTab === tab 
                                            ? 'text-white font-semibold' 
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="w-full space-y-4">
                        {faqData[activeTab].map((item: FAQItem, index: number) => (
                            <div key={index} className="border border-gray-600 rounded-xl p-4 md:p-6 bg-[#26242C80] backdrop-blur-sm">
                                <button 
                                    className="flex justify-between items-center w-full text-left focus:outline-none group"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="text-base md:text-lg font-medium text-white pr-4 group-hover:text-[#3D43D4] transition-colors duration-300">{item.question}</h3>
                                    <span className="flex-shrink-0 text-xl text-[#3D43D4] transform transition-transform duration-300 group-hover:scale-110">
                                        {openIndex === index ? <ChevronsUp/> : <ChevronsDown/>}
                                    </span>
                                </button>
                                <div className={`mt-4 text-sm text-gray-300 faq-answer-${index} overflow-hidden`} style={{ height: openIndex === index ? 'auto' : '0' }}>
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}