import React from 'react'
import Contactimg from '../assets/contact.svg'

export default function Contact() {
  return (
    <section id='contact' className='max-w-[1080px] mx-auto p-5 min-h-[400px] text-white ' >
        <h1 id='portfolio' className=' md:text-5xl md:py-4 text-[#00EEF8] text-3xl font-extrabold text-center mb-5'>Contact me</h1>
        <div className='md:flex'>
            <img className='p-5 md:flex-1 md:w-1/2 ' src={Contactimg} alt="" />
            
            <form className='md:flex-1 w-full md:w-1/2 flex flex-col gap-2'>
                <div className='w-full flex gap-2'>
                    <input style={{backdropFilter: 'blur(5px)'}} className='w-1/2 px-2 py-1 bg-white bg-opacity-20 border-b-[.2px] border-r-[.2px] border-[#00EEF8] focus:outline-none focus:border-white ' type="text" placeholder='Name' />
                    <input style={{backdropFilter: 'blur(5px)'}} className='w-1/2 px-2 py-1  bg-white bg-opacity-20 border-b-[.2px] border-r-[.2px] border-[#00EEF8] focus:outline-none focus:border-white ' type="email" placeholder='Email' />
                </div>
                <input style={{backdropFilter: 'blur(5px)'}} className='px-2 py-1  bg-white bg-opacity-20 border-b-[.2px] border-r-[.2px] border-[#00EEF8] focus:outline-none focus:border-white ' type="text" placeholder='Subject' />
                <textarea style={{backdropFilter: 'blur(5px)'}} className='px-2 py-1  bg-white bg-opacity-20 border-b-[.2px] border-r-[.2px] border-[#00EEF8] focus:outline-none focus:border-white ' placeholder='Message' id="" cols="30" rows="11"></textarea>
                <button className='text-base border-[#00EEF8] text-[#00EEF8] border-[1px] px-5 py-3 mt-5 hover:bg-[#00EEF8] hover:text-[#02000B]'>Send message !</button>
            </form>
            
        </div>
    </section>
  )
}