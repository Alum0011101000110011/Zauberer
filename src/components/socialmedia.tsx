import React from 'react'
import {FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa"

const Socials = [
    { icon: <FaFacebook size={140} />, lable: "Facebook"},
    { icon: <FaInstagram size={140} />, lable: "Instagram"},
    { icon: <FaTiktok size={140} />, lable: "Tiktok"},
    ];

const Socialmedia = () => {
  return (
    <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
      <div className='text-white w-[400px] md:min-w-[850px] mx-auto p-8 text-center'>
        <h2 className='text-6xl font-bold mb:4'>Meine Magische Welt</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
          {Socials.map((social, index) => (
            <div
              key={index}
              className='h-[220px] w-[220px] flex flex-col justify-between items-center bg-white/10 p-3 rounded-xl'>
                {social.icon}
                <p className='mt-2'>{social.lable}</p>
            </div>
          ))}
        </div>

      </div>
        
    </div>
  )
}

export default Socialmedia