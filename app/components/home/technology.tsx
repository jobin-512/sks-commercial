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
import java from "@/public/technologies/java.png"
import node from "@/public/technologies/node.png"
import php from "@/public/technologies/php.png"
import python from "@/public/technologies/python.png"
import go from "@/public/technologies/go.png"
import net from "@/public/technologies/net.png"
import salesforce from "@/public/technologies/salseforce.png"
import sharepoint from "@/public/technologies/sharepoint.png"
import dynamics from "@/public/technologies/dynamics.png"
import sql from "@/public/technologies/sqlserver.png"
import mysql from "@/public/technologies/mysql.png"
import postgress from "@/public/technologies/postgress.png"
import oracle from "@/public/technologies/oracle.png"
import apache from "@/public/technologies/apache.png"
import nifi from "@/public/technologies/nifi.png"
import cassandra from "@/public/technologies/cassandra.png"
import hive from "@/public/technologies/hive.png"
import mongodb from "@/public/technologies/mongodb.png"
import android from "@/public/technologies/android.png"
import flutter from "@/public/technologies/flutter.png"
import cordova from "@/public/technologies/cordova.png"
import ios from "@/public/technologies/ios.png"
import xamarin from "@/public/technologies/xamarin.png"
import pwa from "@/public/technologies/pwa.png"
import ionic from "@/public/technologies/ionic.png"
import open from "@/public/technologies/open.png"
import meta from "@/public/technologies/meta.png"
import mistral from "@/public/technologies/mistral.png"
import google from "@/public/technologies/google.png"
import hugging from "@/public/technologies/hugginh.png"
import grok from "@/public/technologies/grok.png"
import milvus from "@/public/technologies/milvus.png"
import pinecone from "@/public/technologies/pinecone.png"
import langchain from "@/public/technologies/langchain.png"
import drant from "@/public/technologies/drant.png"
import mesos from "@/public/technologies/mesos.png"
import docker from "@/public/technologies/docker.png"
import kubernetes from "@/public/technologies/kuberneters.png"
import terraform from "@/public/technologies/terraform.png"
import openshift from "@/public/technologies/openshift.png"
import packer from "@/public/technologies/packer.png"
import ansible from "@/public/technologies/ansible.png"
import puppet from "@/public/technologies/puppet.png"
import saltstack from "@/public/technologies/stacksalt.png"
import azure from "@/public/technologies/azure.png"

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
            { name: "JAVA", image: java},
            { name: "Node.js", image: node },
            { name: "PHP", image: php },
            { name: "Python", image: python },
            { name: "Go", image: go },
            { name: ".NET", image: net },
        ],
        Microsoft: [
            { name: "SalesForce", image: salesforce },
            { name: "Sharepoint", image: sharepoint },
            { name: "Microsoft Dynamics", image: dynamics },
            { name: "Microoft SQL", image: sql },
            { name: "My SQL", image: mysql },
            { name: "Postgress SQL", image: postgress },
            { name: "Oracle", image: oracle },
            { name: "APACHE HBASE", image: apache },
            { name: "APACHE nifi", image: nifi },
            { name: "Cassandra", image: cassandra },
            { name: "HIVE", image: hive },
            { name: "Mongo DB", image: mongodb },

        ],
        Mobile: [
            { name: "React Native", image: reactJs },
            { name: "Flutter", image: flutter },
            { name: "Android", image: android },
            { name: "Cordova", image: cordova },
            { name: "iOS", image: ios },
            { name: "Xamarin", image: xamarin },
            { name: "PWA", image: pwa },
            { name: "Ionic", image: ionic },

        ],
        'AI & ML': [
            { name: "Open AI", image: open },
            { name: "Meta", image: meta },
            { name: "Mistral AI", image: mistral },
            { name: "Google", image: google },
            { name: "Huggung Face", image: hugging },
            { name: "Grok", image: grok },
            { name: "Drant", image: drant },
            { name: "Milvus", image: milvus },
            { name: "Pinecone", image: pinecone },
            { name: "LangChain", image: langchain },

        ],
        Devops: [
            { name: "Docker", image: docker },
            { name: "Kubernetes", image: kubernetes },
            { name: "Apache Mesos", image: mesos },
            { name: "Teraaform", image: terraform },
            { name: "Openshift", image: openshift },
            { name: "Packer", image: packer },
            { name: "Ansible", image: ansible },
            { name: "Puppet", image: puppet },
            { name: "SaltStack", image: saltstack },
            { name: "Azure Devops", image: azure },

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
                                <div className="h-16 flex items-center justify-center  rounded-lg">
                                    <Image alt={tech.name} src={tech.image}  className="object-contain w-auto max-h-full" />
                                </div>
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
                                    <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg">
                                        <Image alt={tech.name} src={tech.image} width={40} height={40} className="object-contain max-w-full max-h-full" />
                                    </div>
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