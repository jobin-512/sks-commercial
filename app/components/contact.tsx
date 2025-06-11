"use client"

import { Roboto } from "next/font/google"

const roboto = Roboto({
    subsets: ['latin'],
})

export default function Contact(){
    return(
        <section className={`${roboto.className} flex justify-center p-12`}>
            <section className="bg-[url('/footer_form_map.png')] bg-no-repeat bg-cover grid lg:grid-cols-2 lg:w-[80vw] xl:w-[60vw] p-12 ">
                <div className="flex flex-col gap-8">
                    <h2 className="text-3xl">Partner with tech catalysts who transform idea into impact</h2>
                    <p>Book Your consultation with us</p>
                    <p className="text-transparent bg-gradient-to-b from-[white] to-50% to-[#353BB7] bg-clip-text text-7xl font-bold">Let's Talk</p>
                </div>

                <div>
                    <form action="" className="p-8 border border-indigo-700 rounded-3xl flex flex-col gap-8 bg-[#08060F90]">
                        <p className="text-2xl">Speak With Our Experts</p>
                        <input type="text" placeholder="Full Name " className="border-b focus:outline-none focus:border-b-indigo-700" />
                        <input type="number" placeholder="Phone number" className="border-b focus:outline-none focus:border-b-indigo-700 no-spinners" />
                        <input type="email" placeholder="Business Email" className="border-b focus:outline-none focus:border-b-indigo-700" />
                        <textarea name="" placeholder="About Project"  className="border-b focus:outline-none focus:border-indigo-700 resize-none" id=""></textarea>
                        <input type="Submit" value="Submit" className="bg-[#3D43D4] px-6 cursor-pointer py-2 w-fit rounded-full duration-200 hover:duration-200 hover:bg-white hover:text-[#3D43D4]" readOnly />
                    </form>
                </div>
            </section>
        </section>
    )
}