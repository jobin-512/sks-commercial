"use client"

import { Roboto } from "next/font/google"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const roboto = Roboto({
    subsets: ['latin'],
})

export default function Footer(){
    return(
        <footer className={`bg-[#08060F] text-gray-300 py-16 ${roboto.className}`}>
            <div className="lg:w-[80vw] xl:w-[60vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                {/* Company Info */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-white">Seo Master </h3>
                    <p className="text-sm">We empower businesses through innovative digital strategies and personalized solutions</p>
                    <div className="flex gap-4 mt-4">
                        <a href="https://www.facebook.com/seomaster?ref=pages_you_manage" target="_blank" className="w-10 h-10 bg-[#3D43D4] rounded-full flex items-center justify-center text-white text-lg hover:bg-white hover:text-[#3D43D4] transition-colors duration-200"><FaFacebookF /></a>
                        <a href="https://www.linkedin.com/company/sks-techsolution" target="_blank" className="w-10 h-10 bg-[#3D43D4] rounded-full flex items-center justify-center text-white text-lg hover:bg-white hover:text-[#3D43D4] transition-colors duration-200"><FaLinkedinIn /></a>
                        <a href="https://www.instagram.com/seomaster/" target="_blank" className="w-10 h-10 bg-[#3D43D4] rounded-full flex items-center justify-center text-white text-lg hover:bg-white hover:text-[#3D43D4] transition-colors duration-200"><FaInstagram /></a>
                        <a href="https://x.com/seomaster" target="_blank" className="w-10 h-10 bg-[#3D43D4] rounded-full flex items-center justify-center text-white text-lg hover:bg-white hover:text-[#3D43D4] transition-colors duration-200"><FaXTwitter /></a>
                    </div>
                </div>

                {/* Company Links */}
                <div className="flex flex-col gap-4 md:ml-16">
                    <h4 className="text-lg font-bold text-white">Company</h4>
                    <a href="/" className="text-sm hover:text-white transition-colors duration-200">Home</a>
                    <a href="/aboutus" className="text-sm hover:text-white transition-colors duration-200">About Us</a>
                    <a href="/portfolio" className="text-sm hover:text-white transition-colors duration-200">Portfolio</a>
                </div>

                {/* Support Links */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-bold text-white">Support</h4>
                    <a href="/legal-disclaimer" className="text-sm hover:text-white transition-colors duration-200">Legal Disclaimer</a>
                    <a href="/terms-and-conditions" className="text-sm hover:text-white transition-colors duration-200">Terms & Conditions</a>
                    <a href="/privacy-policy" className="text-sm hover:text-white transition-colors duration-200">Privacy Policy</a>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-lg font-bold text-white">Contact</h4>
                    <div>
                        <h5 className="font-semibold text-white mb-2">Registered Office:</h5>
                        <p className="text-sm">651 N Broad St, Suite 206, Middletown, Delaware 19709 USA</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-white mb-2">Operational Office:</h5>
                        <p className="text-sm">A-48, 2nd Floor, Sector-64, Noida-201301, India</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-white mb-2">Email Us:</h5>
                        <a href="mailto:info@seomaster.com" className="text-sm hover:text-white transition-colors duration-200">info@seomaster.com</a>
                    </div>
                    <div>
                        {/* <h5 className="font-semibold text-white mb-2">Phone Us:</h5>
                        <a href="tel:+13023212310" className="text-sm hover:text-white transition-colors duration-200 block">+1 (302) 321-2310</a>
                        <a href="tel:+13023293535" className="text-sm hover:text-white transition-colors duration-200 block">+1 (302) 329-3535</a> */}
                    </div>
                </div>
            </div>

            <div className="text-center text-xs mt-16 border-t border-gray-700 pt-8">
                <p>© 2025 Seo Master , All Rights Reserved</p>
            </div>
        </footer>
    )
}