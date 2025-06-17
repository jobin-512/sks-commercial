"use client"

import { Roboto } from "next/font/google"

const roboto = Roboto({
    subsets: ['latin'],
})

export default function Contact(){
    return(
        <section className={`${roboto.className} flex justify-center p-4 md:p-8 lg:p-12`}>
            <section className="bg-[url('/footer_form_map.png')] bg-no-repeat bg-cover grid lg:grid-cols-2 w-full lg:w-[80vw] xl:w-[60vw] p-4 md:p-8 lg:p-12 gap-8 lg:gap-12">
                <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Build smarter, grow faster, with strategies built for your brand.</h2>
                    <p className="text-base md:text-lg text-gray-300">Book your free consultation today.</p>
                    <p className="text-transparent bg-gradient-to-b from-[white] to-50% to-[#353BB7] bg-clip-text text-4xl md:text-5xl lg:text-7xl font-bold">Let’s get started!</p>
                </div>

                <div className="w-full">
                    <form action="" className="p-4 md:p-6 lg:p-8 border border-indigo-700 rounded-3xl flex flex-col gap-4 md:gap-6 lg:gap-8 bg-[#08060F90] backdrop-blur-sm">
                        <p className="text-xl md:text-2xl font-medium">Let’s turn your ideas into real results.</p>
                        <div className="flex flex-col gap-4 md:gap-6">
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className="w-full p-2 md:p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-700 text-base md:text-lg transition-colors duration-300" 
                            />
                            <input 
                                type="number" 
                                placeholder="Phone number" 
                                className="w-full p-2 md:p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-700 text-base md:text-lg transition-colors duration-300 no-spinners" 
                            />
                            <input 
                                type="email" 
                                placeholder="Business Email" 
                                className="w-full p-2 md:p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-700 text-base md:text-lg transition-colors duration-300" 
                            />
                            <textarea 
                                name="" 
                                placeholder="About Project"  
                                className="w-full p-2 md:p-3 bg-transparent border-b border-gray-600 focus:outline-none focus:border-indigo-700 text-base md:text-lg transition-colors duration-300 resize-none min-h-[100px] md:min-h-[120px]" 
                                id=""
                            ></textarea>
                        </div>
                        <input 
                            type="Submit" 
                            value="Submit" 
                            className="bg-[#3D43D4] px-6 md:px-8 py-2 md:py-3 w-full md:w-fit rounded-full text-base md:text-lg font-medium cursor-pointer transition-all duration-300 hover:bg-white hover:text-[#3D43D4] hover:scale-105" 
                            readOnly 
                        />
                    </form>
                </div>
            </section>
        </section>
    )
}