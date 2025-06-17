"use client"

import { Roboto } from "next/font/google"
import Image from "next/image"
import reactJs from "@/public/technologies/reactjs.png"
import angular from "@/public/technologies/angular.png"
import nextJs from "@/public/technologies/nextjs.png"
import vueJs from "@/public/technologies/vuejs.png"
import javascript from "@/public/technologies/javascript.png"
import css from "@/public/technologies/css.png"
import html from "@/public/technologies/html.png"
import ember from "@/public/technologies/ember.png"
import meteor from "@/public/technologies/meteor.png"
// import java from "@/public/technologies/java.png"
// import nodeJs from "@/public/technologies/nodejs.png"
// import php from "@/public/technologies/php.png"
// import python from "@/public/technologies/python.png"
// import go from "@/public/technologies/go.png"
// import net from "@/public/technologies/net.png"
// import microsoft from "@/public/technologies/microsoft.png"
// import mobile from "@/public/technologies/mobile.png"
// import aiMl from "@/public/technologies/aiml.png"
// import devops from "@/public/technologies/devops.png"
import { useState } from "react"
import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"

interface TechnologyItem {
    name: string;
    image: any; // Using 'any' for now since StaticImageData is not directly available without import
}

interface Technologies {
    [key: string]: TechnologyItem[];
}

const roboto = Roboto({
    subsets: ['latin'],
})

export default function Technology(){
    const [activeCategory, setActiveCategory] = useState<keyof Technologies>('Frontend')

    const comp = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from("h2", { opacity: 0, y: 100, delay: 0.2 })
            gsap.from("p", { opacity: 0, y: 100, delay: 0.4 })
            gsap.from(".box", { opacity: 0, y: 100, stagger: 0.2, delay: 0.6 })
        }, comp)

        return () => ctx.revert()
    }, [])

    const technologies: Technologies = {
        Frontend: [
            { name: "ReactJS", image: reactJs },
            { name: "Angular", image: angular },
            { name: "Next JS", image: nextJs },
            { name: "Vue JS", image: vueJs },
            { name: "Javascript", image: javascript },
            { name: "CSS", image: css },
            { name: "HTML", image: html },
            { name: "Ember", image: ember },
            { name: "Meteor", image: meteor },
        ],
        Backend: [
            { name: "JAVA", image: javascript },
            { name: "Node.js", image: javascript },
            { name: "PHP", image: javascript },
            { name: "Python", image: javascript },
            { name: "Go", image: javascript },
            { name: ".NET", image: javascript },
        ],
        Microsoft: [
            { name: "SalesForce", image: javascript },
            { name: "Sharepoint", image: javascript },
            { name: "Microsoft Dynamics", image: javascript },
            { name: "Microoft SQL", image: javascript },
            { name: "My SQL", image: javascript },
            { name: "Postgress SQL", image: javascript },
            { name: "Oracle", image: javascript },
            { name: "APACHE HBASE", image: javascript },
            { name: "APACHE nifi", image: javascript },
            { name: "Cassandra", image: javascript },
            { name: "HIVE", image: javascript },
            { name: "Mongo DB", image: javascript },

        ],
        Mobile: [
            { name: "React Native", image: javascript },
            { name: "Flutter", image: javascript },
            { name: "Android", image: javascript },
            { name: "Cordova", image: javascript },
            { name: "iOS", image: javascript },
            { name: "Xamarin", image: javascript },
            { name: "PWA", image: javascript },
            { name: "Ionic", image: javascript },

        ],
        'AI & ML': [
            { name: "Open AI", image: javascript },
            { name: "Meta", image: javascript },
            { name: "Mistral AI", image: javascript },
            { name: "Google", image: javascript },
            { name: "Huggung Face", image: javascript },
            { name: "Grok", image: javascript },
            { name: "Drant", image: javascript },
            { name: "Milvus", image: javascript },
            { name: "Pinecone", image: javascript },
            { name: "LangChain", image: javascript },

        ],
        Devops: [
            { name: "Docker", image: javascript },
            { name: "Kubernetes", image: javascript },
            { name: "Apache Mesos", image: javascript },
            { name: "Teraaform", image: javascript },
            { name: "Openshift", image: javascript },
            { name: "Packer", image: javascript },
            { name: "Ansible", image: javascript },
            { name: "Puppet", image: javascript },
            { name: "SaltStack", image: javascript },
            { name: "Azure Devops", image: javascript },

        ],
    }

    return(
        <section ref={comp} className="flex justify-center w-full px-4 md:px-8">
            {/* Desktop and larger screens view */}
            <section className="hidden lg:flex flex-col items-center py-12 z-20 gap-8 lg:w-[80vw] xl:w-[60vw]">
                <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}><p className='text-5xl text-[#3D43D4]'>•</p>Technologies</span>
                <h2 className="text-xl text-center">Mastering Every Technology To Build Your Perfection Solution</h2>
                <div className="w-full">
                    <div className="flex flex-wrap justify-center gap-4">
                        {Object.keys(technologies).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium ${
                                    activeCategory === category
                                        ? 'bg-[#3D43D4] text-white'
                                        : 'bg-[#171629] text-gray-300'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className={`${roboto.className} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8 justify-items-center`}>
                        {technologies[activeCategory].map((tech, index) => (
                            <div key={index} className="bg-[#171629] rounded-xl p-4 flex flex-col items-center gap-2 w-full max-w-[200px]">
                                <Image alt={tech.name} src={tech.image} width={50} height={50} className="w-12 h-12 object-contain"></Image>
                                <p className="text-white text-sm text-center">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mobile view */}
            <section className="lg:hidden flex flex-col items-center py-8 md:py-12 z-20 gap-6 w-full bg-gradient-to-br from-[#2769AA] to-[#2D349B] px-4 md:px-8 rounded-3xl">
                <span className={`flex items-center bg-[#171629] w-fit px-2 border h-[2rem] border-gray-700 rounded-full ${roboto.className}`}><p className='text-5xl text-[#3D43D4]'>•</p>Technologies</span>
                <h2 className="text-lg md:text-xl text-center text-white">Mastering Every Technology To Build Your Perfection Solution</h2>
                
                {Object.entries(technologies).map(([categoryName, categoryItems], categoryIndex) => (
                    <div key={categoryIndex} className="w-full">
                        <h2 className="text-2xl md:text-4xl text-white mr-auto mt-8 first:mt-0">{categoryName}</h2>
                        <div className={`${roboto.className} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 w-full justify-items-center`}>
                            {categoryItems.map((tech, index) => (
                                <div key={index} className="h-fit bg-white rounded-xl flex flex-col items-center justify-center gap-2 p-2 w-full max-w-[150px]">
                                    <Image alt={tech.name} src={tech.image} width={40} height={40} className="w-10 h-10 md:w-12 md:h-12 object-contain"></Image>
                                    <p className="text-black text-xs md:text-sm text-center">{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </section>
    )
}