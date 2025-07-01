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

    const expertiseData = [
        { title: "Web Design", desc: "Outstanding User Experiences" },
        { title: "Web Development", desc: "Solid, Scalable Solutions" },
        { title: "Content Strategy", desc: "Engaging, Purpose-Driven Content" },
        { title: "Brand Building", desc: "Unique Identity Creation" },
        { title: "Digital Growth", desc: "Smarter Marketing, Bigger Reach" },
        { title: "Social Media", desc: "Conversations that Convert" },
    ];

    // Sample team data

    return (
        <section ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen py-16 px-4 md:px-8 lg:px-16 bg-[#08060F] text-white overflow-hidden">
            <div className="max-w-6xl w-full text-center space-y-16">
                {/* Hero Section - About Us Style */}
                <div className="relative flex items-center justify-center min-h-[60vh] md:min-h-[70vh] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-16" style={{background: "linear-gradient(180deg, #171629 60%, #08060F 100%)"}}>
                    <div className="absolute inset-0 z-0 bg-cover bg-center opacity-5" style={{background: "url('/BANNER.jpg')"}}></div>
                    <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-wide">ABOUT US</h1>
                        <p className="text-lg md:text-md text-white/80 mb-8 max-w-3xl mx-auto">At SKS Tech Solution, we believe technology should make life easier, not harder. We help businesses grow with custom digital solutions that deliver real results. Whether you're a startup with big ideas or an established brand looking to scale, we've got you covered — from Software Development Services and Mobile App Development Services to MVP Development Services, AI Development Services, Cloud Engineering Services, and UI Design Services.
                        Since 2010, we've been building smart, practical, and future-ready digital experiences for businesses around the world. Our goal is simple — help you succeed in the fast-moving digital world.</p>
                        <button className="bg-white text-[#171629] hover:bg-[#5B61F6] hover:text-white px-8 py-3 rounded-full font-semibold shadow transition-colors duration-300 text-lg">READ MORE</button>
                    </div>
                </div>
                {/* End Hero Section */}

                {/* Our Values Section */}
                <section className="relative flex justify-center w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0B0A17] py-20 px-4 md:px-16">
                    <div className="w-[90vw] lg:w-[80vw] xl:w-[60vw] max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="w-full md:w-1/2 max-w-xl mx-auto md:mx-0 mb-12 md:mb-0">
                            <span className="inline-block mb-6 px-6 py-2 rounded-full border border-[#3D43D4] text-[#3D43D4] font-semibold tracking-widest text-sm bg-[#181828]">OUR VALUES</span>
                            <h2 className="text-4xl md:text-4xl font-extrabold text-white mb-10 leading-tight">We're Your Team,<br/>Not Just Your Agency</h2>
                            <div className="space-y-8">
                                {/* Fast Response */}
                                <div className="flex items-start gap-5">
                                    <span className="text-[#3DFFE2] text-3xl mt-1">
                                        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 2v6h6"/><path d="M13 8a5 5 0 1 1-4 8"/><path d="M3 12a9 9 0 1 0 9-9"/></svg>
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Quick Support</h3>
                                        <p className="text-gray-400 text-base">You shouldn't have to wait days for answers. Our dedicated team is always ready to jump in and help.</p>
                                    </div>
                                </div>
                                {/* World Class Designer */}
                                <div className="flex items-start gap-5">
                                    <span className="text-[#3DFFE2] text-3xl mt-1">
                                        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Creative Brains at Work</h3>
                                        <p className="text-gray-400 text-base">Our designers and developers don't just follow trends — they create them. Your digital presence will never look ordinary.</p>
                                    </div>
                                </div>
                                {/* Best Quality */}
                                <div className="flex items-start gap-5">
                                    <span className="text-[#3DFFE2] text-3xl mt-1">
                                        <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2l2.09 6.26L20 9.27l-5 3.64L16.18 20 12 16.77 7.82 20 9 12.91l-5-3.64 5.91-.91z"/></svg>
                                    </span>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Results You Can See</h3>
                                        <p className="text-gray-400 text-base">We measure success by your growth. Every project is built for real, lasting impact — not just flashy presentations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="rounded-2xl overflow-hidden shadow-2xl max-w-md w-full">
                                <img src="/values-pirus.jpg" alt="Digital Agency Team" className="w-full h-full object-cover object-center grayscale" />
                            </div>
                        </div>
                    </div>
                </section>


                {/* Expertise Section */}
                <section className="relative flex justify-center w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0B0A17] overflow-hidden py-24">
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#2e3192]/60 via-transparent to-[#3DFFE2]/30 pointer-events-none"></div>
                    </div>
                    <div className="relative z-10 w-[90vw] lg:w-[80vw] xl:w-[60vw] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="w-full md:w-1/2 flex flex-col items-start justify-center mb-12 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">Meet Our Team</h2>
                            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl">The People Behind Your Success. At SKS Tech Solution, our talented team brings experience, creativity, and dedication together to help your ideas grow and your business thrive in today's competitive digital world.</p>
                        </div>
                        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {expertiseData.map((item, index) => (
                                <div key={index} className="p-4 rounded-lg bg-[#171629]/70 border border-gray-700 shadow-lg">
                                    <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-300 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>


                 {/* Lifestyle Section */}
                <section className="relative flex justify-center w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#0B0A17] py-20 px-4 md:px-16 border-t border-[#23234a]" style={{ width: '100vw' }}>
                    <div className="w-[90vw] lg:w-[80vw] xl:w-[60vw] max-w-6xl flex flex-col md:flex-row items-center gap-8 mx-auto">
                        {/* Left Side */}
                        <div className="w-full md:w-1/3 flex flex-col items-start justify-center mb-12 md:mb-0">
                            <div className="text-6xl mb-4">😊 👉👉</div>
                            <h3 className="text-xl md:text-2xl font-semibold text-[#3D9CFF] mb-2">Work That Feels Good,</h3>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight">It's a Lifestyle!</h2>
                        </div>
                        {/* Right Side - Cards */}
                        <div className="w-full md:w-2/3 flex gap-6 overflow-x-auto pb-4 scrollbar-hide hover:scrollbar-default" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {[
                                {
                                    img: "/a1.jpg",
                                    title: "Grow Without Limits",
                                    desc: "Get access to training, certifications, and mentorship to fine-tune your skills and lead the pack."
                                },
                                {
                                    img: "/a2.jpg",
                                    title: "We Value Your Worth",
                                    desc: "We appreciate your hard work, and we ensure you get rewarded accordingly."
                                },
                                {
                                    img: "/a3.jpg",
                                    title: "Fun, Not Just Function",
                                    desc: "Teamwork doesn't have to be dull. Expect collaboration, creativity, and the occasional team celebration."
                                },
                                {
                                    img: "/a4.jpg",
                                    title: "Health Comes First",
                                    desc: "We believe a happy, healthy team builds the best solutions — mind and body wellness is part of the plan."
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
                        title: 'Our Purpose',
                        desc: 'To help businesses embrace innovation and technology through reliable, user-friendly solutions that fuel growth and efficiency.'
                    }, {
                        icon: <FaLightbulb className="w-10 h-10 text-[#5B61F6] mb-2" />,
                        title: 'Our Aspiration',
                        desc: 'To become a globally recognized technology partner known for excellence, trust, and forward-thinking solutions.'
                    }, {
                        icon: <FaHandshake className="w-10 h-10 text-[#5B61F6] mb-2" />,
                        title: 'Our Guiding Principles',
                        desc: <ul className="mt-2 space-y-2 text-left inline-block">
                            <li className="text-md text-gray-300 flex items-center gap-2"><span className="text-[#3D43D4] text-lg font-bold">•</span> Honesty in every interaction</li>
                            <li className="text-md text-gray-300 flex items-center gap-2"><span className="text-[#3D43D4] text-lg font-bold">•</span> Teamwork that drives results</li>
                            <li className="text-md text-gray-300 flex items-center gap-2"><span className="text-[#3D43D4] text-lg font-bold">•</span> Innovation at the heart of what we do</li>
                            <li className="text-md text-gray-300 flex items-center gap-2"><span className="text-[#3D43D4] text-lg font-bold">•</span> Clients always come first</li>
                            <li className="text-md text-gray-300 flex items-center gap-2"><span className="text-[#3D43D4] text-lg font-bold">•</span> We never settle for average</li>
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
                    <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] mb-8`}>How We Work?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: <FaUsers className="w-8 h-8 text-[#5B61F6]" />, title: 'Understand', desc: 'We invest time to understand your challenges, vision, and goals.' },
                            { icon: <FaCogs className="w-8 h-8 text-[#5B61F6]" />, title: 'Plan', desc: 'Our professionals develop custom plans to turn your vision into reality.' },
                            { icon: <FaRocket className="w-8 h-8 text-[#5B61F6]" />, title: 'Create', desc: 'We transform ideas into high-performing solutions with intelligent development and design.' },
                            { icon: <FaAward className="w-8 h-8 text-[#5B61F6]" />, title: 'Support', desc: 'We stand by you with ongoing help, improvements, and technical support.' },
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
                    <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] mb-8`}>Our Milestones</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '10+', label: 'Years Crafting Digital Solutions' },
                            { value: '200+', label: 'Projects Successfully Launched' },
                            { value: '50+', label: 'Clients Across the Globe' },
                            { value: '98%', label: 'Client Satisfaction Rate' },
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
                    <h2 className={`${roboto.className} text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3D43D4] to-[#5B61F6] mb-4`}>Ready to Take the Next Step?</h2>
                    <p className="text-lg text-gray-300 mb-8">Let's bring your ideas to life. Contact SKS Tech Solution today and discover how we can transform your business.</p>
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