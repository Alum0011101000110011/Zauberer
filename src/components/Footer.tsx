import React from 'react'
import {FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa"

const Socials = [
    { icon: <FaFacebook size={140} />, lable: "Facebook"},
    { icon: <FaInstagram size={140} />, lable: "Instagram"},
    { icon: <FaTiktok size={140} />, lable: "Tiktok"},
    ];

const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 container max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between itmes-center'>
        
        <h1 className='ml-5 text-2xl font-bold'>Michael Fischbacher</h1>

        <div className='flex space-x-6 mt-4'>
            <a href="#" className='hover:text-gray-300'>
            <FaFacebook size={24} />
            </a>
            <a href="#" className='hover:text-gray-300'>
            <FaInstagram size={24} />
            </a>
            <a href="#" className='hover:text-gray-300'>
            <FaTiktok size={24} />
            </a>
        </div>
    </div>
  )
}

export default Footer