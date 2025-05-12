'use client';
import { motion } from 'framer-motion';
import React, {useState} from 'react'
import Image from 'next/image'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import devlopor from '@/public/Gallerie/web.gif'
import buro from '@/public/Gallerie/buro.gif'
import { CgQuote } from "react-icons/cg";

import { Gallerie } from '@/Data/Data'
import Banner from '@/app/component/Banner'


const Galerie = () => {
 

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 pt-12 gap-[55px]'>


      {Gallerie.map((item, i) => (
       
       <motion.div key={i} initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
       whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
       transition={{ duration: 0.2,delay:i* .3, ease: 'easeOut' }}
       viewport={{ once: true, amount: 0.2 }} className="grid md:last:col-span-1 sm:last:col-span-2  duration-200 ease-in-out bg-white left-0 md:grid-cols-1 grid-cols-1 gap-6 w-full py-12  border-b-[1px] border-b-[#aa7878]">
          <div className="flex w-full  justify-between gap-6 pr-2">
              <p className='text-[40px] relative -top-4 font-bold text-str  font-mono'>0{i+1}</p>
              <p className='md:text-[30px] text-[28px] w-full text-right sm:max-w-[300px] max-w-[300px] leading-tight font-bold uppercase h-[80px]'>{item.formation}</p>
          </div>
            <Image src={item.src} alt='' width={370} height={280} className=' shadow-sm sm:w-full sm:h-[400px] size-full  saturate-150 object-cover rounded-md'/>
          <div className="flex flex-col justify-between md:gap-6 gap-10 pt-2">
              <p className='md:text-[16.5px] text-[17.5px] font-normal leading-normal font-sans'><CgQuote className='text-[20px] '/> {item.desc} <span className='w-full flex justify-end'><CgQuote className='text-[20px] '/></span></p>

              <div className="flex  bg-main2 w-fit text-main2 border-[1px] hover:bg-main text-white duration-200 ease-in-out cursor-pointer py-3 md:py-[12px] px-4 rounded-full   items-center gap-2 font-semibold md:text-[14px] uu text-[14px]">
                Découvrir davantage
                <LiaLongArrowAltRightSolid  className='text-[21px] relative top-[1px]'/>

              </div>

          </div>
       </motion.div>
           
      ))}

       
    </div>
  )
}

export default Galerie

