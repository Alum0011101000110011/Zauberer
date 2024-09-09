import React from 'react'
import Image from 'next/image'


const Contact = () => {
  return (
    <div className='max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-x-8' id='contact'>
        <div className='bg-white/10 p-6 rounded-xl max-w-[550px] mx-auto'>
            <h2 className='text-5xl font-bold text-orange-400 mb-4'>Kontacktaufnahme</h2>
            <p className='text-white/70 mb-6'>Erzählen Sie mir welchen Event Sie planen!</p>
            <form className='space-y-4'>
                <div className='grid md:gird-cols-2 gap-4'>
                    <input className='bg-black/70 rounded-xl p-3 focus:ouline-none focus:ring-2 focus:ring.orange-400' placeholder='Vorname'/>
                    <input className='bg-black/70 rounded-xl p-3 focus:ouline-none focus:ring-2 focus:ring.orange-400' placeholder='Nachname'/>
                    <input className='bg-black/70 rounded-xl p-3 focus:ouline-none focus:ring-2 focus:ring.orange-400' placeholder='E-mail'/>
                    <input className='bg-black/70 rounded-xl p-3 focus:ouline-none focus:ring-2 focus:ring.orange-400' placeholder='Tel-Nr.'/>
                </div>
                <textarea className='bg-black/70 w-full rounded-xl p-3 focus:ouline-none focus:ring-2 focus:ring.orange-400' placeholder='Ihre Nachricht an mich'/>
                <button className='bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl'>Nachricht Senden</button>
                    
            </form>
        </div>
        
        

    </div>
  )
}

export default Contact