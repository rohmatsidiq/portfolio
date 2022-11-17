import React from 'react'
import Bghero from '../assets/bghero.png'
import About from '../components/About'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Skill from '../components/Skill'
import { AiFillGithub, AiFillYoutube, AiFillLinkedin, AiFillMail, AiFillRocket } from "react-icons/ai"
import Background from '../assets/background.png'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className='overflow-x-hidden relative'>
        <div id='home'></div>
        <img className=' fixed right-[-50%] top-[-10%] animate-spin-slow md:right-[-35%] md:top-[-65%] z-[-200] ' src={Bghero} alt="" />
        <div style={{backdropFilter: 'blur(5px)'}} className=' fixed top-[40%] h-auto w-[40px] bg-white bg-opacity-20 flex flex-col justify-center items-center z-50'>
            <a className='hover:scale-125 hover:text-[#00EEF8] m-3 w-full flex items-center text-[30px] justify-center text-white ' href="https://github.com/rohmatsidiq"><AiFillGithub/></a>
            <hr className=' border-[#00EEF8] w-full' />
            <a className='hover:scale-125 hover:text-[#00EEF8] m-3 w-full flex items-center text-[30px] justify-center text-white ' href="https://www.linkedin.com/in/rohmat-sidiq-926a18190/"><AiFillLinkedin/></a>
            <hr className=' border-[#00EEF8] w-full' />
            <a className='hover:scale-125 hover:text-[#00EEF8] m-3 w-full flex items-center text-[30px] justify-center text-white ' href="https://www.youtube.com/channel/UCqK3aEUQyrbl3g98UL-ZaDQ"><AiFillYoutube/></a>
            <hr className=' border-[#00EEF8] w-full' />
            <a className='hover:scale-125 hover:text-[#00EEF8] m-3 w-full flex items-center text-[30px] justify-center text-white ' href="mailto:rohmatsidiq9@gmail.com"><AiFillMail/></a>
        </div>
        <a href='#home' style={{backdropFilter: 'blur(5px)'}} className='fixed rounded-full bg-white bg-opacity-20 text-white right-4 bottom-4 text-[30px] p-2 z-[100] hover:scale-125 hover:text-[#00EEF8]'>
            <AiFillRocket/>
        </a>
        <img src={Background} alt="" className='w-screen fixed bottom-0 opacity-10 md:bottom-[-40%] md:left-[-15%] z-[-100]' />
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
    </div>
  )
}
