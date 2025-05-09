'use client';
import { motion } from 'framer-motion';
import React, {useState} from 'react'
import Image from 'next/image'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
import devlopor from '@/public/Gallerie/web.gif'

import { Gallerie } from '@/Data/Data'
import Banner from '@/app/component/Banner'


const Galerie = () => {
 

  return (
    <div className='w-full grid grid-cols-1 pt-12 '>


  <div  className="grid md:sticky md:top-[40px] top-0 duration-200 ease-in-out bg-white left-0 md:grid-cols-3 grid-cols-1 md:gap-6 gap-10 w-full py-12 first:border-t-[1px] border-b-[1px] border-b-[#d9d9d9]">
          <div className="flex flex-col justify-between gap-6">
              <p className='text-[40px] relative -top-4 font-bold text-str  font-mono'>01</p>
              <p className='text-[25px] md:max-w-[300px] leading-tight font-bold uppercase'>Développement informatique</p>
          </div>
            <Image src={devlopor} alt='' width={370} height={280} className='md:h-[280px] shadow-sm size-full md:w-[370px] saturate-150 object-cover rounded-md'/>
          <div className="flex flex-col justify-between md:gap-0 gap-10">
              <p className=' md:text-[15px] text-[17.5px] md:max-w-[450px] font-semibold leading-snug'>Une formation pratique pour apprendre à concevoir et développer des  web. Au programme : langages de programmation (HTML, CSS, JavaScript, PHP...), bases de données, frameworks modernes (Laravel, React...), et projets concrets pour se préparer au métier de développeur.</p>

              <div className="flex  border-main2 w-fit text-main2 border-[1px] hover:bg-main2 hover:text-white duration-200 ease-in-out cursor-pointer px-4 rounded-full py-3 md:py-2  items-center gap-2 font-semibold md:text-[11px] text-[14px]"> 
                Découvrir davantage
                <LiaLongArrowAltRightSolid  className='text-[20px] relative top-[1px]'/>

              </div>

          </div>
       </div>

      {Gallerie.map((item, i) => (
       
       <motion.div key={i} initial={{ opacity: 0, y: 10 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.3,delay:.3, ease: 'easeOut' }}
       viewport={{ once: false, amount: 0.2 }} className="grid md:sticky md:top-[40px] duration-200 ease-in-out bg-white left-0 md:grid-cols-3 grid-cols-1 gap-6 w-full py-12  border-b-[1px] border-b-[#d9d9d9]">
          <div className="flex flex-col justify-between gap-6">
              <p className='text-[40px] relative -top-4 font-bold text-str  font-mono'>0{i+2}</p>
              <p className='text-[25px] md:max-w-[300px] leading-tight font-bold uppercase'>{item.formation}</p>
          </div>
            <Image src={item.src} alt='' width={370} height={280} className='md:h-[280px] shadow-sm size-full md:w-[370px] saturate-150 object-cover rounded-md'/>
          <div className="flex flex-col justify-between md:gap-0 gap-10">
              <p className='md:text-[15px] text-[17.5px] md:max-w-[450px] font-semibold leading-snug'>{item.desc}</p>

              <div className="flex  border-main2 w-fit text-main2 border-[1px] hover:bg-main2 hover:text-white duration-200 ease-in-out cursor-pointer py-3 md:py-2 px-4 rounded-full   items-center gap-2 font-semibold md:text-[11px] text-[14px]">
                Découvrir davantage
                <LiaLongArrowAltRightSolid  className='text-[20px] relative top-[1px]'/>

              </div>

          </div>
       </motion.div>
           
      ))}
       
    </div>
  )
}

export default Galerie




// <div className="grid grid-cols-2 grid-rows-2 gap-4">
//             <div className="h-[450px] flex-col gap-4 uppercase text-[30px] font-bold leading-snug text-center flex justify-center items-center p-3 text-bold bg-[#f5f9ff] relative rounded-lg shadow-sm border-gray-200 border-[.5px]">
//                 <Image className='w-[100px]' height={200} width={200} src='/IMAPLogo/Vertical_logo.svg' alt='IMAP'/>
//                 Développement informatique
//             <span className=' text-[25px] absolute top-3 left-3 text-str'>01</span>
//             </div>

//         </div> 