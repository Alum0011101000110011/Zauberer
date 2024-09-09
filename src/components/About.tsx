"use client";
import React from 'react';
import Image from "next/image";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

// Imports !!!

const About = () => {
  return (
    <div className="max-w-[1200px] mx-auto" id="about">

        <h1 className="text-white text-6xl max-w-auto mx-auto font-semibold p-4 mb-4 items-center text-center">
            Meine  
            <span className="gold"> Show</span>
        </h1>

        <div className="px-6 md:p-0 grid md:grid-cols-8 gap-6 place-items-center items-center px-4 py-2 mx-auto">

            <div className="w-full  md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={card1} alt="card1" className="w-auto h-[130px]"/>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2x1 font-bold text-white/80'>Lassen Sie sich verzaubern!</h2>
                        <p className='text-lg text-white/70 mt-2'>Tauchen Sie ein in eine Welt voller Magie und staunen Sie über Illusionen, die den Verstand herausfordern und die Realität auf den Kopf stellen.</p>
                    </div>
                </div>
            </div>

            <div className="w-full  md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={card2} alt="card2" className="w-auto h-[130px]"/>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2x1 font-bold text-white/80'>Magie hautnah erleben:</h2>
                        <p className='text-lg text-white/70 mt-2'>Erleben Sie eine unvergessliche Show voller Überraschungen.</p>
                    </div>
                </div>
            </div>

            <div className="w-full  md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={card3} alt="card3" className="w-auto h-[130px]"/>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2x1 font-bold text-white/80'>Mehr als nur Tricks!</h2>
                        <p className='text-lg text-white/70 mt-2'>Meine Zauberkunst verbindet Humor, Spannung zu einem magischen Erlebnis.</p>
                    </div>
                </div>
            </div>

            <div className="w-full  md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                <div className='absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700 to-orange-800 opacity-30 animate-gradient-xy'></div>
                <div className='flex flex-row p-6'>
                    <Image src={card4} alt="card4" className="w-auto h-[130px]"/>
                    <div className='flex flex-col mt-4'>
                        <h2 className='text-2x1 font-bold text-white/80'>Verwandeln Sie Ihre Veranstaltung in ein Highlight:</h2>
                        <p className='text-lg text-white/70 mt-2'>Ob Hochzeit, Firmenfeier oder Geburtstag – meine Show macht jeden Anlass zu einem magischen Event, an das man sich gerne erinnert.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About