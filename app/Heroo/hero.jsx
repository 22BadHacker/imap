import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='w-full  h-auto max-w-[1450px] relative  md:py-[100px] px-5 mx-auto '>

      <div className="flex flex-col gap-4">
          <h1 className='sm:text-[70px] text-[#1f1f1f] max-w-[1000px] font-morir text-[40px] flex text-wrap leading-[1.1] uppercase opacity-90'> Chaque talent mérite d’être écouté, guidé, révélé. </h1>
          <h5 className='text-[#0f0f0f] uppercase text-[17px] tracking-wide font-morir flex gap-2 items-center'> Construis ton avenir, ici et maintenant, avec nous.</h5>
      </div>


     
    </div>
  )
}

export default Hero
