"use client"

import { Roboto } from "next/font/google"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";


const roboto = Roboto({
    subsets: ['latin'],
})

export default function Footer(){
    return(
        <footer className={`bg-[#08060F] text-gray-300 py-16 ${roboto.className}`}>
            <div className="lg:w-[80vw] xl:w-[60vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {/* Company Info */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-white">SKS TECH SOLUTION</h3>
                    <p className="text-sm">We empower businesses through innovative digital strategies and personalized solutions</p>
                    <div className="flex gap-4 mt-4">
                        <a href="/" className="w-10 h-10 bg-[#3D43D4] rounded-full flex items-center justify-center text-white text-lg hover:bg-white hover:text-[#3D43D4] transition-colors duration-200"><FaFacebookF /></a>
                        <a href="/" className="w-10 h-10 bg-[#3D43D4] rounded-full flex items-center justify-center text-white text-lg hover:bg-white hover:text-[#3D43D4] transition-colors duration-200"><FaLinkedinIn /></a>
                        <a href="/" className="w-10 h-10 bg-[#3D43D4] rounded-full flex items-center justify-center text-white text-lg hover:bg-white hover:text-[#3D43D4] transition-colors duration-200"><FaInstagram /></a>
                        <a href="/" className="w-10 h-10 bg-[#3D43D4] rounded-full flex items-center justify-center text-white text-lg hover:bg-white hover:text-[#3D43D4] transition-colors duration-200"><FaThreads /></a>
                    </div>
                </div>

                {/* Company Links */}
                <div className="flex flex-col gap-4 md:ml-16">
                    <h4 className="text-lg font-bold text-white">Company</h4>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">Home</a>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">About Us</a>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">Services</a>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">Teams</a>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">Articles</a>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">FAQ</a>
                </div>

                {/* Support Links */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-bold text-white">Support</h4>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">Help Center</a>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">Technical Support</a>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">Legal Notice</a>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">Terms & Conditions</a>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">Privacy Policy</a>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-bold text-white">Contact</h4>
                    <p className="flex items-center gap-2 text-sm"><span className="text-indigo-600 text-3xl">•</span>Somewhere in the world, street 14</p>
                    <p className="flex items-center gap-2 text-sm"><span className="text-indigo-600 text-3xl">•</span>hello@gachorsupport.com</p>
                    <p className="flex items-center gap-2 text-sm"><span className="text-indigo-600 text-3xl">•</span>+123-456-7890</p>
                </div>
            </div>

            <div className="text-center text-xs mt-16 border-t border-gray-700 pt-8">
                <p>© 2025 Sks Tech Solution , All Rights Reserved</p>
            </div>
        </footer>
    )
}