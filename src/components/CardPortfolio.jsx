import React from 'react'
import { AiFillGithub, AiOutlineGlobal } from "react-icons/ai"

export default function CardPortfolio(props) {
  return (
    <div style={{backdropFilter: 'blur(5px)'}} className='w-[45%] md:w-[23%]  bg-white bg-opacity-20 text-white border-b-[.5px] border-r-[.5px] border-[#00EEF8] p-3'>
        <p className='text-sm'>{props.content}</p>
        <div className=' mt-2 w-full object-cover'>
            <img className='' src={props.img} alt="" />
        </div>
        <div className='mt-3 flex gap-2 justify-end '>
            <a href={props.github} className='text-[20px] hover:cursor-pointer hover:text-[#00EEF8] hover:scale-125'>
                <AiFillGithub />
            </a>
            <a href={props.link} className='text-[20px] hover:cursor-pointer hover:text-[#00EEF8] hover:scale-125'>
                <AiOutlineGlobal/>
            </a>
        </div>
    </div>
  )
}
