import React from 'react'
import AboutPic from '../assets/about.svg'

export default function About() {
  return (
    <>
      <h1 data-aos="fade-up" id='about' className='text-center md:text-5xl md:py-4 text-[#00EEF8] text-3xl font-extrabold'>About me</h1>
      <section className='text-white p-5 max-w-[1080px] mx-auto md:flex md:gap-5'>
          <img src={AboutPic} className='p-5 md:w-1/2' alt="" />
          <div className='md:w-1/2 md:text-xl md:ml-5 mb-5  py-4'>
              <p className='mb-7'>Hello! I’m Rohmat Sidiq Mustaqim. I’m Fullstack Javascript from Indonesia. I enjoy creating living things on the internet. My main focus today is developing web applications with Javascript.</p>
              <a href="#contact" className='text-base border-[#00EEF8] text-[#00EEF8] border-[1px] px-5 py-3 mt-5 hover:bg-[#00EEF8] hover:text-[#02000B]'>Contact me !</a>
          </div>
      </section>
    </>
  )
}
