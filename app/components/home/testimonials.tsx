"use client"
import { Roboto } from "next/font/google"
import Image from "next/image"
import profile from "@/public/home/Rectangle-27.png"
import profile2 from "@/public/home/Profile.png"
import profile3 from "@/public/home/Profile-1.png"
import profile4 from "@/public/home/Profile-2.png"
import profile5 from "@/public/home/Profile-3.png"
import profile6 from "@/public/home/Profile-4.png"
import bg from "@/public/home/Testimonials-2-1.png"
import { gsap } from "gsap"
import { useRef, useLayoutEffect } from "react"


const roboto = Roboto({
    subsets: ['latin'],
})

export default function Tesitmonials(){
    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from("h2", { opacity: 0, y: 100, delay: 0.2 })
            gsap.from("p", { opacity: 0, y: 100, delay: 0.4 })
            gsap.from(".box", { opacity: 0, y: 100, stagger: 0.2, delay: 0.6 })
        }, comp)

        return () => ctx.revert()
    }, [])

    return(
        <section ref={comp} className="flex justify-center relative">
            <Image alt="bg" src={bg} className="absolute w-full top-[-20rem] z-10"></Image>
            <section className="lg:w-[60vw] xl:w-[80vw] flex flex-col items-center gap-4 z-20">
                <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}><p className='text-5xl text-[#3D43D4]'>•</p>Testimonials</span>
                <h2 className="text-xl">What Our Clients Say</h2>
                <p className={`text-xs text-gray-300 ${roboto.className}`}>See what our clients say about work!</p>
                <div className={`${roboto.className} grid grid-cols-2 xl:grid-cols-3 2xl:px-52 gap-4 space-y-4 h-full`}>
                    <div className="flex flex-col  items-center gap-4 border border-gray-600 rounded-3xl p-8 px-16 text-center bg-[#26242C80] box">
                        <Image alt="profile" src={profile}></Image>
                        <p>“Working with Sks Tech Solution was a game-changer. Their team is dedicated and results-driven”</p>
                        <p>Jane Doe</p>
                        <p>CEO Company</p>
                    </div>

                    <div className="flex flex-col items-center gap-4 border border-gray-600 rounded-3xl p-8 px-16 text-center bg-[#26242C80] box">
                    <Image alt="profile" src={profile2}></Image>
                        <p>“We saw remarkable growth after partnering with SKS Tech Solution. Their expertise in digital marketing is second to none!”</p>
                        <p>Jane Doe</p>
                        <p>CEO Company</p>
                    </div>

                    <div className="flex flex-col gap-4 border items-center border-gray-600 rounded-3xl p-8 px-16 text-center bg-[#26242C80] box">
                    <Image alt="profile" src={profile3}></Image>
                        <p>“SKS Tech Solution transformed our online presence. Their strategies are unparalleled!”</p>
                        <p>Jane Doe</p>
                        <p>CEO Company</p>
                    </div>

                    <div className="flex flex-col gap-4 border items-center border-gray-600 rounded-3xl p-8 px-16 text-center bg-[#26242C80] box">
                    <Image alt="profile" src={profile4}></Image>
                        <p>"Gachor SKS Tech exceeded our expectations. Their tailored strategies delivered tangible results, and we've seen a substantial increase in customer engagement"</p>
                        <p>Jane Doe</p>
                        <p>CEO Company</p>
                    </div>

                    <div className="flex flex-col gap-4 items-center border border-gray-600 rounded-3xl p-8 px-16 text-center bg-[#26242C80] box">
                    <Image alt="profile" src={profile5}></Image>
                        <p>"Choosing SKS Tech Solutions was a strategic move for our brand. Their holistic approach to digital marketing has positioned us as industry leaders"</p>
                        <p>Jane Doe</p>
                        <p>CEO Company</p>
                    </div>

                    <div className="flex flex-col gap-4 items-center border border-gray-600 rounded-3xl p-8 px-16 text-center bg-[#26242C80] box">
                    <Image alt="profile" src={profile6}></Image>
                        <p>"The impact of SKS Tech Solutions on our business was immediate. Their commitment to understanding our industry and target audience set them apart"</p>
                        <p>Jane Doe</p>
                        <p>CEO Company</p>
                    </div>
                </div>
            </section>
        </section>
    )
}