import React from "react";
import Image from "next/image";
import neon from "@/public/home/Testimonials-2-1.png"

export default function PortfolioHeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 md:py-32 text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-br from-[#08060F]/40 to-transparent blur-3xl z-0" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-bl from-[#08060F]/40 to-transparent blur-3xl z-0" />

      {/* Portfolio Button */}
      <button className="relative z-10 px-6 py-2 mb-8 rounded-lg bg-[#171629] text-purple-300 shadow-lg border border-[#3D43D4] font-medium flex items-center gap-2 hover:bg-[#3D43D4] hover:text-white transition-all">
        <span className="text-lg">✶</span> Portfolio
      </button>

      {/* Main Heading */}
      <h1 className="relative z-10 text-xl md:text-2xl lg:text-3xl font-normal text-center max-w-3xl mb-8 leading-tight">
        EVERYTHING YOU NEED IS BUILT-IN, <br /> BEAUTIFULLY SIMPLE, AND ALWAYS <br /> IMPROVING WITH AI.
      </h1>

      {/* Read More Button */}
      <button className="relative z-10 px-8 py-3 rounded-full bg-[#3D43D4] text-white font-semibold text-lg shadow-lg flex items-center gap-2 mb-16 hover:bg-[#171629] transition-all">
        Read More <span className="ml-2">→</span>
      </button>

      {/* Lower Section */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col gap-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-normal">IMAGINE IT. WE'LL GENERATE IT.</h2>
          <span className="text-3xl font-bold">–</span>
        </div>
        <hr className="border-gray-700 mb-6" />
        <div className="flex flex-col md:flex-row gap-8">
          {/* Before/After Images */}
          <div className="flex gap-4">
            <div className="relative w-40 h-56 rounded-xl overflow-hidden bg-[#22213a] flex flex-col items-center justify-end">
              <Image src="/portfolio/before.jpg" alt="Before" fill className="object-cover" />
              <span className="absolute bottom-2 left-2 bg-black/60 px-3 py-1 rounded text-xs font-semibold">BEFORE</span>
            </div>
            <div className="relative w-40 h-56 rounded-xl overflow-hidden bg-[#22213a] flex flex-col items-center justify-end">
              <Image src="/portfolio/after.jpg" alt="After" fill className="object-cover" />
              <span className="absolute bottom-2 left-2 bg-black/60 px-3 py-1 rounded text-xs font-semibold">AFTER</span>
            </div>
          </div>
          {/* Description and Read More */}
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-gray-300 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.
            </p>
            <button className="px-6 py-2 rounded-full bg-[#3D43D4] text-white font-semibold flex items-center gap-2 w-max hover:bg-[#171629] transition-all">
              Read More <span className="ml-2">→</span>
            </button>
          </div>
          </div>
      </div>
    </section>
  );
} 