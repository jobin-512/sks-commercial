"use client"

import { Roboto } from "next/font/google"
import { useState } from "react";

const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export default function Contact(){
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        businessEmail: '',
        aboutProject: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    fullName: '',
                    phoneNumber: '',
                    businessEmail: '',
                    aboutProject: ''
                });
            } else {
                setStatus(`Error: ${result.message}`);
            }
        } catch (error) {
            setStatus('Error: Could not send message.');
        }
    };

    return(
        <section className={`${roboto.className} flex justify-center p-4 md:p-8 lg:p-12`}>
            <section className="bg-[url('/footer_form_map.png')] bg-no-repeat bg-cover grid lg:grid-cols-2 w-full lg:w-[80vw] xl:w-[60vw] p-4 md:p-8 lg:p-12 gap-8 lg:gap-12">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Build smarter, grow faster, with strategies built for your brand.</h2>
                    <p className="text-base md:text-lg text-gray-300">Book your free consultation today.</p>
                    <p className="text-transparent bg-gradient-to-b from-[white] to-50% to-[#353BB7] bg-clip-text text-4xl md:text-5xl lg:text-7xl font-bold">Let's get started!</p>
                </div>

                <div className="w-full">
                    <form onSubmit={handleSubmit} className="p-4 md:p-6 lg:p-8 border border-indigo-700 rounded-3xl flex flex-col gap-4 md:gap-6 lg:gap-8 bg-[#08060F90] backdrop-blur-sm">
                        <p className="text-xl md:text-2xl font-medium">Let's turn your ideas into real results.</p>
                        <div className="flex flex-col gap-4 md:gap-6">
                            <input 
                                type="text" 
                                name="fullName"
                                placeholder="Full Name" 
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className="w-full p-2 md:p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-700 text-base md:text-lg transition-colors duration-300" 
                            />
                            <input 
                                type="tel" 
                                name="phoneNumber"
                                placeholder="Phone number" 
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                className="w-full p-2 md:p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-700 text-base md:text-lg transition-colors duration-300" 
                            />
                            <input 
                                type="email" 
                                name="businessEmail"
                                placeholder="Business Email" 
                                value={formData.businessEmail}
                                onChange={handleChange}
                                required
                                className="w-full p-2 md:p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-700 text-base md:text-lg transition-colors duration-300" 
                            />
                            <textarea 
                                name="aboutProject" 
                                placeholder="About Project"  
                                value={formData.aboutProject}
                                onChange={handleChange}
                                required
                                className="w-full p-2 md:p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-700 text-base md:text-lg transition-colors duration-300 resize-none min-h-[100px] md:min-h-[120px]" 
                                id=""
                            ></textarea>
                        </div>
                        <button 
                            type="submit"
                            className="bg-[#3D43D4] px-6 md:px-8 py-2 md:py-3 w-full md:w-fit rounded-full text-base md:text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#3D43D4] hover:scale-105"
                        >
                            Submit
                        </button>
                        {status && <p className="text-center mt-4 text-white">{status}</p>}
                    </form>
                </div>
            </section>
        </section>
    )
}