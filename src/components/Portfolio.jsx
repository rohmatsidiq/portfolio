import React from 'react'
import Image1 from '../assets/img1.png'
import Image2 from '../assets/img2.png'
import Image3 from '../assets/img3.png'
import CardPortfolio from './CardPortfolio'

export default function Portfolio() {
  return (
    <div className='text-white max-w-[1080px] mx-auto p-5'>
        <h1 id='portfolio' className=' md:text-5xl md:py-4 text-[#00EEF8] text-3xl font-extrabold text-center mb-5'>My Portfolio</h1>
        <div className='flex gap-5 flex-wrap mx-auto items-center justify-center' >

            <CardPortfolio 
                content='Portfolio with React Js and Tailwind'
                github='https://github.com/rohmatsidiq'
                link=''
                img={Image1}
            />

            <CardPortfolio 
                content='List Belanja App with HTML and CSS'
                github='https://github.com/rohmatsidiq'
                link='https://rohmat-list-belanja-app.vercel.app/'
                img={Image2}
            />

            <CardPortfolio 
                content='Buku Tamu App with HTML, CSS and JS'
                github='https://github.com/rohmatsidiq'
                link='https://buku-tamu-flax.vercel.app/'
                img={Image3}
            />

        </div>
    </div>
  )
}
