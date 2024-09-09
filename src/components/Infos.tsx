"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

const informationen = [
    {
        title: "Lorem",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum facere, iste autem nobis aliquam illo quas voluptatem vel pariatur impedit magnam. Est magni natus quae omnis accusamus fugiat quas.",
        src: card1
    },
    {
        title: "Lorem",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum facere, iste autem nobis aliquam illo quas voluptatem vel pariatur impedit magnam. Est magni natus quae omnis accusamus fugiat quas.",
        src: card2
    },
    {
        title: "Lorem",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, harum facere, iste autem nobis aliquam illo quas voluptatem vel pariatur impedit magnam. Est magni natus quae omnis accusamus fugiat quas.",
        src: card3
    }
]

const Infos = () => {
  return (
    <div className='text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-40 ' id="infos">

        <h1 className="text-white text-6xl max-w-[340px] mx-auto font-semibold p-4 mb-4">
            Über 
            <span className=""> mich</span>
        </h1>

        <div className='px-6 md:px-0 max-w-[800px] mx-auto space-y-24 mt-40 items-center px-4 py-2 mx-auto'>
            {informationen.map((information, index) => (
                <motion.div
                    key={index}
                    initial={{opacity: 0, y: 75}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25}}
                    className={`mt-12 flex flex-col${index % 2 === 1 ? "md:flex-col-reverse md:flex-row-reverse gap-12" : "md:flex-row"}`}
                >
                    <div className='space-y-2 max-w-[550px]'>
                        <h2 className='text-7xl my-4 text-orange-500'>{information.title}</h2>                        
                        <p className='text-xl text-white/70 break-words font-semibold p-4'>{information.desc}</p>
                        <div className='w-64 h-[1px] bg-gray-400 my-4'>

                        </div>

                    </div>

                    <div className='flex justify-center items-center'>
                        <Image src={information.src} alt={information.title} className='h-[250px] w-[250px] object-cover' />
                    </div>


                </motion.div>
            ))}
        </div>

    </div>
  )
}

export default Infos