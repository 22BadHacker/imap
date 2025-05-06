'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import ginie from './Assets/Construction-Management-and-Cost-Estimation-scaled.jpg'
import StoryVideo from './StoryVideo'
import Storys from './Storys'


const Formation = () => {
    
  return (
     <div className='w-full container h-screen max-w-[1450px] sm:px-5 px-5 mx-auto grid grid-cols-1 gap-[40px]'>
             <div className="w-full flex flex-col gap-20 coontain relative h-auto py-[120px] z-[1]">
                 <div className="flex gap-3 flex-col">
                     {/* {
                         [...Array(10)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-30 odd:bg-red-500 rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
                     } */}
                     <p className='font-semibold uppercase text-[14.5px] tracking-wider font-metro text-main2 flex gap-1 items-center'>
                         <span className='blink'></span> Formations
                     </p>
                     <h1 className='sm:text-[60px] font-morir text-[#1a1918] text-[40px] flex text-wrap leading-snug font-bold opacity-90'>
                     Façonnez votre avenir <br /> avec 
                     nos programmes
                     </h1>
                 </div>

                <div className="flex flex-col gap-10">
                <p className='uppercase text-black contact-title opacity-70 pb-2 text-[14.5px] flex gap-1 items-center'> <span className=''>/</span>Highlights</p>

                    <Storys />
                </div>

                   
                
             </div>
     
                   
         </div>
  )
}

export default Formation
// export default Programmes



