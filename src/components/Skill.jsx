import React from 'react'
import { HiCheck } from "react-icons/hi"
import Skillogo from '../assets/skill.svg'

export default function Skill() {
  return (
    <>
        <h1 id='skill' className='md:mt-10 md:text-5xl md:py-4 text-[#00EEF8] text-3xl font-extrabold text-center'>Skill</h1>
        <section className='max-w-[1080px] mx-auto p-5 min-h-[400px] text-white flex flex-col-reverse md:flex-row md:gap-5 md:items-start'>
            <div className='md:w-1/2 my-5'>
                <p className='mb-7'>I managed to create a responsive website that is fast, easy to use, and built with best practices. My main areas of experience are front-end development, HTML, CSS, JS, React, tailwind, create small and medium-sized web applications. <br/>
                <br/>Visit my LinkedIn profile for details or contact me. You can also visit my youtube channel to find out how I work.<br/> <br/>Here are some technologies I've been working on recently:</p>
                <div className='flex flex-row gap-10'>
                    <ul>
                        <li className='list-disc flex flex-row items-center gap-2'><HiCheck/>JavaScript</li>
                        <li className='list-disc flex flex-row items-center gap-2'><HiCheck/>Typescript</li>
                        <li className='list-disc flex flex-row items-center gap-2'><HiCheck/>React</li>
                    </ul>
                    <ul>
                        <li className='list-disc flex flex-row items-center gap-2'><HiCheck/>Tailwind</li>
                        <li className='list-disc flex flex-row items-center gap-2'><HiCheck/>Express</li>
                        <li className='list-disc flex flex-row items-center gap-2'><HiCheck/>Node Js</li>
                    </ul>
                </div>
            </div>
            <img className='md:w-1/2 p-5' src={Skillogo} alt="" />
        </section>
    </>
  )
}
