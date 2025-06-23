'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Roboto } from "next/font/google";
import { FaBullseye, FaLightbulb, FaHandshake, FaUsers, FaGlobe, FaAward, FaCogs, FaRocket, FaUserTie } from 'react-icons/fa';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
    subsets: ['latin'],
});

export default function AboutUsPage() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(contentRef.current, 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        toggleActions: "play none none none",
                        once: true,
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Sample team data
    const team = [
        { name: 'Suneel', role: 'Founder', img: '', icon: <FaUserTie className="w-12 h-12 text-[#3D43D4]" /> },
        { name: 'Ajil', role: 'Founder', img: '', icon: <FaUserTie className="w-12 h-12 text-[#3D43D4]" /> },
        { name: 'Jobin', role: 'Lead Developer', img: '', icon: <FaUserTie className="w-12 h-12 text-[#3D43D4]" /> },
        { name: 'Anup', role: 'UI/UX Designer', img: '', icon: <FaUserTie className="w-12 h-12 text-[#3D43D4]" /> },
    ];

    return (
        <section ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-[#08060F] text-white overflow-hidden">
            <div className="max-w-6xl w-full text-center space-y-16">
                {/* Hero Section - About Us Style */}
                <div className="relative flex items-center justify-center min-h-[60vh] md:min-h-[70vh] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16" style={{background: "linear-gradient(180deg, #171629 60%, #08060F 100%)"}}>
                    <div className="absolute inset-0 z-0" style={{background: "linear-gradient(180deg, #171629 60%, #08060F 100%)"}}></div>
                    <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide">ABOUT US</h1>
                        <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button className="bg-white text-[#171629] hover:bg-[#5B61F6] hover:text-white px-8 py-3 rounded-full font-semibold shadow transition-colors duration-300 text-lg">READ MORE</button>
                    </div>
                </div>
                {/* End Hero Section */}

                {/* Our Values Section */}
                <section className="relative flex justify-center w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0B0A17] py-20 px-4 md:px-16">
                    <div className="w-[90vw] lg:w-[80vw] xl:w-[60vw] max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="w-full md:w-1/2 max-w-xl mx-auto md:mx-0 mb-12 md:mb-0">
                            <span className="inline-block mb-6 px-6 py-2 rounded-full border border-[#3D43D4] text-[#3D43D4] font-semibold tracking-widest text-sm bg-[#181828]">OUR VALUES</span>
                            <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-10 leading-tight">We Are More Than<br/>Digital Agency</h2>
                            <div className="space-y-8">
                                {/* Fast Response */}
                                <div className="flex items-start gap-5">
                                    <span className="text-[#3DFFE2] text-3xl mt-1">
                                        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2v6h6"/><path d="M13 8a5 5 0 1 1-4 8"/><path d="M3 12a9 9 0 1 0 9-9"/></svg>
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Fast Response</h3>
                                        <p className="text-gray-400 text-base">Lorem ipsum dolor sit amet consecte adipiscing elit sed eiusmod tempor dolore magna aliqua.</p>
                                    </div>
                                </div>
                                {/* World Class Designer */}
                                <div className="flex items-start gap-5">
                                    <span className="text-[#3DFFE2] text-3xl mt-1">
                                        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">World Class Designer</h3>
                                        <p className="text-gray-400 text-base">Lorem ipsum dolor sit amet consecte adipiscing elit sed eiusmod tempor dolore magna aliqua.</p>
                                    </div>
                                </div>
                                {/* Best Quality */}
                                <div className="flex items-start gap-5">
                                    <span className="text-[#3DFFE2] text-3xl mt-1">
                                        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.91z"/></svg>
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Best Quality</h3>
                                        <p className="text-gray-400 text-base">Lorem ipsum dolor sit amet consecte adipiscing elit sed eiusmod tempor dolore magna aliqua.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md w-full">
                                <img src="/about/agency-team.jpg" alt="Digital Agency Team" className="w-full h-full object-cover object-center grayscale" />
                            </div>
                        </div>
                    </div>
                </section>


               
                {/* Expertise Section */}
                <section className="relative flex justify-center w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0B0A17] overflow-hidden py-24">
                    <div className="absolute inset-0">
                        <img src='/about/expertise-bg.jpg' alt='' className='w-full h-full object-cover object-center opacity-30' />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2e3192]/60 via-transparent to-[#3DFFE2]/30 pointer-events-none"></div>
                    </div>
                    <div className="relative z-10 w-[90vw] lg:w-[80vw] xl:w-[60vw] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="w-full md:w-1/2 flex flex-col items-start justify-center mb-12 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Discover Range<br/>Of Our Expertise</h2>
                            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">Lorem ipsum dolor sit amet consectetur adipiscing elit. Cras id arcu luctus pellentesque lorem ac pharetra sapien. Donec elementum, tortor vel viverra ultrices lacus orci venenatis tortor vel rhoncus ipsum felis a diam.</p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-8">
                                <ExpertiseBar label="Web Design" percent={88} />
                                <ExpertiseBar label="Web Development" percent={92} />
                                <ExpertiseBar label="Content Strategy" percent={92} />
                            </div>
                            {/* Right Column */}
                            <div className="space-y-8">
                                <ExpertiseBar label="Branding Design" percent={90} />
                                <ExpertiseBar label="Digital Marketing" percent={87} />
                                <ExpertiseBar label="Social Advertising" percent={89} />
                            </div>
                        </div>
                    </div>
                </section>


                 {/* Lifestyle Section */}
                 <section className="relative flex justify-center w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0B0A17] py-20 px-4 md:px-16 border-t border-[#23234a]" style={{ width: '100vw' }}>
                    <div className="w-[100vw] lg:w-[80vw] xl:w-[60vw] max-w-6xl flex flex-col md:flex-row items-center gap-8 mx-auto">
                        {/* Left Side */}
                        <div className="w-full md:w-1/3 flex flex-col items-start justify-center mb-12 md:mb-0">
                            <div className="text-6xl mb-4">😊 👉👉</div>
                            <h3 className="text-xl md:text-2xl font-semibold text-[#3D9CFF] mb-2">More Than Just a Job,</h3>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight">It's a Lifestyle!</h2>
                        </div>
                        {/* Right Side - Cards */}
                        <div className="w-full md:w-2/3 flex gap-6 overflow-x-auto pb-4 scrollbar-hide hover:scrollbar-default" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {[
                                {
                                    img: "/about/lifestyle-1.jpg",
                                    title: "Grow Like a Boss",
                                    desc: "Access workshops, certifications, and all the learning tools to upgrade your skills and flex your potential."
                                },
                                {
                                    img: "/about/lifestyle-2.jpg",
                                    title: "Pay That Slaps",
                                    desc: "We know your skills are fire, so we make sure you get paid what you deserve."
                                },
                                {
                                    img: "/about/lifestyle-3.jpg",
                                    title: "Work Doesn't Have to Be Boring",
                                    desc: "Whether it's virtual happy hours or team-building adventures, we know how to mix work with fun."
                                },
                                {
                                    img: "/about/lifestyle-4.jpg",
                                    title: "Wellness is the Win",
                                    desc: "We're all about mental and physical health. Your mind needs as much care as your code."
                                }
                            ].map((card, idx) => (
                                <div key={idx} className="min-w-[300px] max-w-[320px] bg-[#181828] rounded-xl shadow-lg border border-[#23234a] flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                    <img src={card.img} alt={card.title} className="w-full h-48 object-cover object-center" />
                                    <div className="p-5 flex flex-col flex-1">
                                        <h4 className="font-bold text-lg text-white mb-2">{card.title}</h4>
                                        <p className="text-gray-300 text-sm">{card.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                {/* Mission, Vision, Values */}
                <motion.div
                    ref={contentRef}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
                >
                    {[{
                        icon: <FaBullseye className="w-10 h-10 text-[#5B61F6] mb-2" />,
                        title: 'Our Mission',
                        desc: 'To empower businesses with cutting-edge technology and innovative software solutions that drive growth, enhance efficiency, and create lasting value.'
                    }, {
                        icon: <FaLightbulb className="w-10 h-10 text-[#5B61F6] mb-2" />,
                        title: 'Our Vision',
                        desc: 'To be a global leader in digital innovation, recognized for our commitment to excellence, client success, and transformative technological advancements.'
                    }, {
                        icon: <FaHandshake className="w-10 h-10 text-[#5B61F6] mb-2" />,
                        title: 'Our Values',
                        desc: <ul className="mt-2 space-y-2 text-left inline-block">
                            <li className="text-md text-gray-300 flex items-center gap-2"><span className="text-[#3D43D4] text-lg font-bold">•</span> Integrity</li>
                            <li className="text-md text-gray-300 flex items-center gap-2"><span className="text-[#3D43D4] text-lg font-bold">•</span> Collaboration</li>
                            <li className="text-md text-gray-300 flex items-center gap-2"><span className="text-[#3D43D4] text-lg font-bold">•</span> Innovation</li>
                            <li className="text-md text-gray-300 flex items-center gap-2"><span className="text-[#3D43D4] text-lg font-bold">•</span> Customer Focus</li>
                            <li className="text-md text-gray-300 flex items-center gap-2"><span className="text-[#3D43D4] text-lg font-bold">•</span> Excellence</li>
                        </ul>
                    }].map((item, idx) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className="flex flex-col items-center text-center p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow-xl space-y-4"
                        >
                            {item.icon}
                            <h2 className="text-2xl font-semibold text-[#5B61F6]">{item.title}</h2>
                            <div className="text-md text-gray-300">{item.desc}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Our Process */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
                    className="mt-20"
                >
                    <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] mb-8`}>How We Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <FaUsers className="w-8 h-8 text-[#5B61F6]" />, title: 'Discover', desc: 'We listen and understand your needs.' },
                            { icon: <FaCogs className="w-8 h-8 text-[#5B61F6]" />, title: 'Design', desc: 'We craft tailored solutions.' },
                            { icon: <FaRocket className="w-8 h-8 text-[#5B61F6]" />, title: 'Develop', desc: 'We build with precision and agility.' },
                            { icon: <FaAward className="w-8 h-8 text-[#5B61F6]" />, title: 'Deliver', desc: 'We ensure quality and ongoing support.' },
                        ].map((step, idx) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.1 }}
                                className="flex flex-col items-center p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow space-y-3"
                            >
                                {step.icon}
                                <h3 className="font-semibold">{step.title}</h3>
                                <p className="text-sm text-gray-300">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats / Achievements */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
                    className="mt-20"
                >
                    <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] mb-8`}>Our Achievements</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '10+', label: 'Years Experience' },
                            { value: '200+', label: 'Projects Delivered' },
                            { value: '50+', label: 'Global Clients' },
                            { value: '98%', label: 'Client Satisfaction' },
                        ].map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.1 }}
                                className="flex flex-col items-center p-6 bg-[#171629]/70 rounded-xl border border-gray-700 shadow space-y-2"
                            >
                                <span className="text-4xl font-bold text-[#5B61F6]">{stat.value}</span>
                                <span className="text-sm text-gray-300">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 text-center"
                >
                    <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] mb-4`}>Ready to Transform Your Business?</h2>
                    <p className="text-lg text-gray-300 mb-8">Let's build your future together. Contact us today to start your digital transformation journey.</p>
                    <motion.button
                        whileHover={{ scale: 1.07 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-10 py-4 bg-[#3D43D4] hover:bg-[#5B61F6] text-white rounded-full font-semibold shadow transition-colors duration-300"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}

// ExpertiseBar component
function ExpertiseBar({ label, percent }) {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center mb-1">
                <span className="text-white font-semibold text-base">{label}</span>
                <span className="text-white font-semibold text-base">{percent}%</span>
            </div>
            <div className="w-full h-2 bg-[#23234a] rounded-full overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-[#3D43D4] to-[#3DFFE2] rounded-full transition-all duration-700" style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    );
} 