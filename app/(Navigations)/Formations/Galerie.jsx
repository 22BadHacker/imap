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
    <div className='w-full grid grid-cols-1 pt-[100px] '>
      {Gallerie.map((item, i) => (
        <div key={i} className="grid grid-cols-2 gap-10 pt-8 pb-12 border-t-[1px] border-t-[#2a2a2a]/50 last:border-b-[1px] last:border-b-[#2a2a2a]/50">
            <div className="flex flex-col gap-6">
                <h1 className='text-[30px] text-[#2a2a2a] font-semibold uppercase max-w-[300px] font-noto_sans leading-[1.1]'>{item.formation}</h1>
                <h6 className='text-[14.5px] flex flex-col gap-4 font-noto_sans leading-relaxed max-w-[560px] text-[#2a2a2a]'>{item.desc}</h6>
            </div>

            <div className="flex flex-col gap-5">
              <Image src={item.src} alt='pic' className='w-full shadow h-[500px] object-cover'/>
            </div>
        </div>
        
      ))}
     

       
    </div>

  )

 
}

export default Galerie

