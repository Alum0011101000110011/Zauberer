"use client";
import Image from "next/image";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import message from "../assets/icon2.png";
import {motion} from 'framer-motion';
import michael3 from "../assets/michael3.png";

import React from 'react'

const Hero = () => {
  return (
    <div 
        style={{
          background: 'linear-gradient(to bottom, #000, #2B1942 35%, #2B1942  60%, #000 80%)',
        }}
        className="py-24 relative overflow-clip"
      >


      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="gold"
          >Michael</h1>
          <h1  className="gold"          
          >Fischbacher</h1>
        </div>    
        
{/* Bewegliche Dekoration 

        <motion.div 
          className="hidden md:block absolute right-[200px] top-[60px]"
          drag
          >
            <Image
              src={card1}
              height="130"
              width="130"
              alt="cursor"
              className=""
              draggable="false"
              >
            </Image>
        </motion.div>

        <motion.div 
          className="hidden md:block absolute left-[200px] top-[20px]"
          drag
          >
            <Image
              src={card2}
              height="130"
              width="130"
              alt="cursor"
              className=""
              draggable="false"
              >
            </Image>
        </motion.div>

        <motion.div 
          className="absolute right-[50px] top-[200px]"
          drag
          >
            <Image
              src={card3}
              height="130"
              width="130"
              alt="cursor"
              className=""
              draggable="false"
              >
            </Image>
        </motion.div>

        <motion.div 
          className="absolute left-[50px] top-[240px]"
          drag
          >
            <Image
              src={card4}
              height="130"
              width="130"
              alt="cursor"
              className=""
              draggable="false"
              >
            </Image>
        </motion.div>
*/}
        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          Ich werde Ihren Abend Verzaubern.
        </p>

        <Image
          src={michael3}
          alt="profiel picture"
          className="h-[700px] w-[466px] mx-auto "
        />
      </div>

    </div>
  )
}

export default Hero