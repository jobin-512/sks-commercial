"use client";
import React, { useState } from "react";
import { Roboto } from "next/font/google";
import {Car,Gamepad2, HeartIcon, Banknote, CogIcon, ShoppingBagIcon, GraduationCap, TruckIcon,MapPinHouse } from "lucide-react";
import Image from "next/image";
import frame from "@/public/home/Frame-151-2-1 (1).png";
import gradient from "@/public/home/Gradient-1.png";
import PortfolioHeroSection from "../components/portfolioHeroSection";

const roboto = Roboto({
  subsets: ["latin"],
});

const industries = [
  {
    name: "Auto Mobile",
    icon: Car,
    category: "Auto Mobile",
    description: "Empowering tech companies with cutting-edge solutions and digital transformation.",
    portfolio: [
      {
        title: "exppress car wash",
        image: "/portfolio/port8.png",
        link: "https://www.exppresscarwash.com/"
      },
      {
        title: "carx",
        image: "/portfolio/port9.png",
        link: "https://www.carx.com/"
      }
    ]
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    category: "Gaming",
    description: "Empowering tech companies with cutting-edge solutions and digital transformation.",
    portfolio: [
      {
        title: "vulcanforged",
        image: "/portfolio/port11.png",
        link: "https://vulcanforged.com/"
      },
      {
        title: "anti aginggames",
        image: "/portfolio/port12.png",
        link: "https://anti-aginggames.com/"
      }
    ]
  },
  {
    name: "Real Estate",
    icon: MapPinHouse,
    category: "Real Estate",
    description: "",
    portfolio: [
      {
        title: "andrewsonline",
        image: "/portfolio/port5.png",
        link: "https://www.andrewsonline.co.uk/"
      },
    ]
  },
  
  {
    name: "Healthcare",
    icon: HeartIcon,
    category: "healthcare",
    description: "",
    portfolio: [
      {
        title: "accoladessalonspa",
        image: "/portfolio/port4.png",
        link: "https://accoladessalonspa.com/"
      },
      {
        title: "astm",
        image: "/portfolio/port6.png",
        link: "https://www.astm.org/"
      },
      {
        title: "confluencehealth",
        image: "/portfolio/port10.png",
        link: "https://www.confluencehealth.org/"
      }
    ]
  },
  {
    name: "Finance",
    icon: Banknote,
    category: "finance",
    description: "",
    portfolio: [
      {
        title: "StockPe: Stock & Crypto Games",
        image: "/portfolio/port3.png",
        link: "https://play.google.com/store/apps/details?id=com.stockpemarket&hl=en_IN&pli=1#"
      }
    ]
  },
  {
    name: "Retail",
    icon: ShoppingBagIcon,
    category: "retail",
    description: "",
    portfolio: [
      {
        title: "pinkaprons",
        image: "/portfolio/port1.png",
        link: "https://www.pinkaprons.in/"
      },
      {
        title:"theteashelf",
        image:"/portfolio/port2.png",
        link:"https://www.theteashelf.com/"
      },
      {
        title:"thehaelli",
        image:"/portfolio/port7.png",
        link:"https://thehaelli.com/"
      }
    ]
  },
];

export default function PortfolioPage() {
  const [selected, setSelected] = useState("all");

  const filteredIndustries = selected === "all" ? industries : industries.filter(i => i.category === selected);

  return (
    <div className="bg-[#08060F] min-h-screen relative">
        <Image alt="frame" src={frame} className="absolute w-full"></Image>
      <PortfolioHeroSection />
      <main className={`max-w-6xl mx-auto px-4 py-12 relative z-0 ${roboto.className}`}>
        <h1 className="text-3xl font-bold mb-8 text-center">Portfolio</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={`px-4 py-2 rounded-full border ${selected === "all" ? "bg-[#3D43D4] text-white" : "bg-[#171629] text-gray-200 border-gray-700"} transition-colors`}
            onClick={() => setSelected("all")}
          >
            All Industries
          </button>
          {industries.map((industry) => (
            <button
              key={industry.category}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border ${selected === industry.category ? "bg-[#3D43D4] text-white" : "bg-[#171629] text-gray-200 border-gray-700"} transition-colors`}
              onClick={() => setSelected(industry.category)}
            >
              <industry.icon className="w-5 h-5" />
              {industry.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-[100] ">
          {filteredIndustries.map((industry) =>
            industry.portfolio.map((item, idx) => (
              <a href={item.link} key={item.title + idx} target="_blank" rel="noopener noreferrer" className="block bg-[#171629] border border-gray-700 rounded-2xl overflow-hidden shadow-lg flex flex-col group transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-indigo-500/50">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                </div>
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <h2 className="text-lg font-semibold group-hover:text-[#3D43D4] transition-colors">{item.title}</h2>
                  <div className="mt-auto text-xs text-gray-400">{industry.name}</div>
                </div>
              </a>
            ))
          )}
        </div>
      </main>
    </div>
  );
} 