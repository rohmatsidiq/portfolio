import React from 'react'

export default function Hero() {
  return (
    <section className='max-w-[1080px] mx-auto text-white p-5 w-full md:h-[600px] h-[400px] mt-8 mb-2 flex items-center'>
        <div className='md:w-[80%] py-3'>
            <h2 className='md:text-3xl text-2xl'>Hi, I'm</h2>
            <h1 className=' text-[#00EEF8] md:text-[70px] md:h-auto md:py-8 md:mt-1 text-4xl font-extrabold h-auto py-2'>Rohmat Sidiq M</h1>
            <p className='md:text-xl text-sm mb-7'>I am a Fullstack Javascript. I am currently focusing on developing web applications using the Javascript programming language.</p>
            <a href="#contact" className='text-base border-[#00EEF8] text-[#00EEF8] border-[1px] px-5 py-3 mt-5 hover:bg-[#00EEF8] hover:text-[#02000B]'>Contact me !</a>
        </div>
    </section>
  )
}