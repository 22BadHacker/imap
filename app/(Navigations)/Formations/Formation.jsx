'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Galerie from './Galerie'



const Formation = () => {
    
  return (
     <div className='w-full  h-auto max-w-[1450px] sm:px-5 px-5 mx-auto grid grid-cols-1 gap-[40px]'>
             <div className="w-full flex flex-col gap-20 coontain relative h-auto py-[120px] z-[1]">
                 <div className="flex gap-3 flex-col">
                     
                     <p className='font-semibold uppercase text-[14.5px] tracking-wider font-metro text-main2 flex gap-1 items-center'>
                         <span className='blink'></span> Formations
                     </p>
                     <h1 className='sm:text-[60px] leading-tight max-w-[800px] font-morir text-[#1a1918] text-[40px] flex text-wrap  font-bold opacity-90'>
                     Façonnez votre avenir avec 
                     nos programmes
                     </h1>
                 </div>
                
                 {/* <div className="w-[600px] absolute right-0 -rotate-12 h-[100px] top-[200px] opacity-55 bg-main2 blur-[80px]"></div>   
                 <div className="w-[600px] absolute right-0 -rotate-12 opacity-60 h-[100px] bg-main blur-[80px]"></div>    */}

                 
                <Galerie />
                   
                
             </div>
     
                   
         </div>
  )
}

export default Formation
// export default Programmes



{/* <p className='md:text-[45px] text-[40px] text-wrap z-[1] relative font-sussi text-black/85 pb-6 pt-10 whitespace-nowrap leading-[1.25]'>Des compétences étendues, <br /> une orientation claire : <br /> les domaines qui nous définissent */}