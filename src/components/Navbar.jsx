import React from 'react'
import Logo from '../assets/logo.png'
import { ImMenu, ImCross } from "react-icons/im";
import { useState } from 'react';

export default function Navbar() {

    const [menu, setMenu] = useState(false)
    const showMenu = ()=>{
        setMenu(!menu)
    }

  return (

    <>
        {menu && (
            <>
                <button onClick={showMenu} className='fixed  text-white md:hidden w-[50px] h-[50px] flex justify-center items-center right-[20px] text-[20px] z-[120]'><ImCross/></button>
                <div className='w-screen h-screen bg-gradient-to-br from-[#02000B] to-[#15001F] fixed text-white flex flex-col justify-center gap-5 items-center z-[110]'>
                
                    <img src={Logo} className='w-[50vh]' alt="" />
                    <hr className='border-spacing-1  w-full border-[#00EEF8]'/>
                    <a href={'#about'} onClick={showMenu}>About</a>
                    <hr className='border-spacing-1  w-full border-[#00EEF8]'/>
                    <a href={'#skill'} onClick={showMenu}>Skill</a>
                    <hr className='border-spacing-1  w-full border-[#00EEF8]'/>
                    <a href={'#portfolio'} onClick={showMenu}>Portfolio</a>
                    <hr className='border-spacing-1  w-full border-[#00EEF8]'/>
                    <a href={'#contact'} onClick={showMenu}>Contact</a>
                    <hr className='border-spacing-1  w-full border-[#00EEF8]'/>
                </div>
                
            </>
        )}

        <nav style={{backdropFilter: 'blur(5px)'}} className=' fixed top-0 w-full bg-white bg-opacity-20 border-b-[.5px] border-[#00EEF8] z-50'>
            <div className='max-w-[1080px] px-5 mx-auto flex flex-row justify-between text-center'>
                <img src={Logo} className='md:w-[60px] w-[45px] items-center text-center flex' alt="" />
                <menu className='hidden md:flex flex-row text-white items-center'>
                    <a className='hover:border-[.5px] hover:px-[9px] hover:border-[#00EEF8] hover:mx-0 hover:text-[#00EEF8] mx-[10px]' href={'#about'} >About</a>
                    <a className='hover:border-[.5px] hover:px-[9px] hover:border-[#00EEF8] hover:mx-0 hover:text-[#00EEF8] mx-[10px]' href={'#skill'} >Skill</a>
                    <a className='hover:border-[.5px] hover:px-[9px] hover:border-[#00EEF8] hover:mx-0 hover:text-[#00EEF8] mx-[10px]' href={'#portfolio'}>Portfolio</a>
                    <a  className='hover:border-[.5px] hover:px-[9px] hover:border-[#00EEF8] hover:mx-0 hover:text-[#00EEF8] mx-[10px]' href={'#contact'}>Contact</a>
                </menu>
                <button onClick={showMenu} className='text-white md:hidden w-[50px] h-50px] flex justify-center items-center text-[25px]'><ImMenu/></button>
            </div>
        </nav>
    </>
  )
}
