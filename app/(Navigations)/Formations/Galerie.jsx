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
import Link from 'next/link';


const Galerie = () => {

  return (
    <div className='w-full grid grid-cols-1 pb-[100px] '>
      {/* <Banner /> */}
      {Gallerie.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 5, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
        transition={{ duration: 0.2,delay:i* .2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}  className="grid md:grid-cols-2 gap-10 pt-8 pb-8 first:border-t-[0px] border-t-[1px] border-t-[#2a2a2a]/50 last:border-b-[1px] last:border-b-[#2a2a2a]/50">
            <div className="flex flex-col gap-4 ">
              {/* <div className="flex gap-6 items-start">
              </div> */}
                <h1 className='text-[35px] text-[#2a2a2a] tracking-tight  uppercase  font-morir font-semibold leading-[1.1]'>{item.formation}</h1>
                <h6 className='text-[15px] leading-relaxed font-poppins font-semi md:max-w-[560px] text-[#2d2626]'>{item.desc}</h6>

                <Link className='bg-main font-morir uppercase w-fit text-white px-4 py-2 relative top-5 md:top-7 text-[12.5px] tracking-wide hover:bg-main2 duration-200 ease-in-out rounded-full flex gap-2 items-center' href='/'><span className='size-[7.5px] rounded-full bg-white'></span> Découvrir davantage</Link>
                
            </div>

            <div className="flex flex-col gap-5">
              <Image src={item.src} alt='pic' className='w-full saturate-[1.2] shadow-sm h-[450px] sm:h-[550px] object-cover'/>

              {/* <div className="flex flex-col gap-2">
                  <h5 className="uppercase text-[14px] font-sans tracking-wide text-wrap">{item.keys}</h5>
                  <p className='uppercase text-[25px] font-sans flex gap-2 items-center'><span className='bg-black/90 rounded-full size-[10px]'></span>{item.title}</p>

              </div> */}
            </div>
        </motion.div>
        
      ))}
     

       
    </div>

  )

 
}

export default Galerie

