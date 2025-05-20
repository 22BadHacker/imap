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
import { BsArrowRight } from 'react-icons/bs';


const Galerie = () => {

  return (
    <div className='w-full grid grid-cols-1 pb-[100px] '>
      <Banner />
      {Gallerie.map((item, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 5, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0)' }}
        transition={{ duration: 0.2,delay:i* .2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }}  className="grid md:grid-cols-2 gap-10 pt-8 pb-8  border-t-[1px] border-t-[#2a2a2a]/50 last:border-b-[1px] last:border-b-[#2a2a2a]/50">
            <div className="flex flex-col gap-4 md:pt-3">
              {/* <div className="flex gap-6 items-start">
              </div> */}
                <h1 className='text-[32px] text-[#2a2a2a] tracking-tight  uppercase  font-inter font-semibold leading-[1.1]'>{item.formation}</h1>
                <h6 className='text-[15px] leading-relaxed font-inter font-semi md:max-w-[560px] text-[#2d2626]'>{item.desc}</h6>

                {/* <Link className='bg-main font-sans font-medium uppercase w-fit text-white px-4 py-3 relative top-5 md:top-7 text-[12.5px]  hover:bg-main2 duration-200 ease-in-out rounded-full flex gap-[6px] items-center' href='/'><span className='size-[6px] rounded-full bg-white'></span> Découvrir davantage</Link> */}
                <Link href={'/Contact#rejoignez-nous'} className='bg-main w-fit relative top-5 md:top-6 hover:bg-main2 font-normal font-inter  text-white text-[15px] sm:text-[15.5px] duration-200 ease-in-out px-[2px] rounded-full py-[2px] pl-3 flex items-center gap-2 liink'>Découvrir davantage <span className='sm:size-[40px] size-[40px]  flex items-center justify-center bg-white text-main text-[20px] rounded-full  spaaan'><BsArrowRight /></span></Link>
                
            </div>

            <div className="flex flex-col gap-5">
              <Image src={item.src} alt='pic' className='w-full saturate-[1.2] border shadow-sm h-[450px] sm:h-[550px] object-cover'/>

              <div className="flex flex-col gap-2">
                  <h5 className="uppercase text-[14px] font-sans tracking-wide text-wrap">{item.keys}</h5>
                  <p className='uppercase text-[25px] font-sans flex gap-2 items-center'><span className='bg-black/90 rounded-full size-[10px]'></span>{item.title}</p>

              </div>
            </div>
        </motion.div>
        
      ))}
     

       
    </div>

  )

 
}

export default Galerie

