'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';


const About = () => {
  return (
    <div className='max-w-[1450px]  px-5 mx-auto  w-full h-auto relative md:pt-[20px]   '>

      <div className="gap-[40px]  md:grid-cols-4 grid grid-cols-2   w-full">
        <div className="flex flex-col border-r-[2px] border-r-[#3f4144]/30 h-fit">
            <p className=' text-[14px] text-[#1f1f1f] uppercase font-inter font-normal   '>Fondée </p>
            <p className='md:text-[45px] pt-2 text-[48px] text-[#1f1f1f] font-inter font-[800] leading-tight '><AnimatedCounter target={2016} /></p>
        </div>
        <div className="flex flex-col md:border-r-[2px] md:border-r-[#3f4144]/30 h-fit">
            <p className='text-[14px] text-[#1f1f1f] uppercase font-inter font-normal  '>Formations disponibles</p>
            <p className='md:text-[45px] pt-2 text-[48px] text-[#1f1f1f] font-inter font-[800] leading-tight '>+0<AnimatedCounter target={8} /></p>
        </div>
        <div className="flex flex-col border-r-[2px] border-r-[#3f4144]/30 h-fit">
            <p className='text-[14px] text-[#1f1f1f] uppercase font-inter font-normal  '>Étudiants formés / année </p>
            <p className='md:text-[45px] pt-2 text-[48px] text-[#1f1f1f] font-inter font-[800] leading-tight  '>+<AnimatedCounter target={120} /> <span className='text-[18px]'></span></p>
        </div>
        <div className="flex flex-col ">
            <p className='text-[14px] text-[#1f1f1f] uppercase font-inter font-normal  '>Projets réalisés par les étudiants </p>
            <p className='md:text-[45px] pt-2 text-[48px] text-[#1f1f1f] font-inter font-[800] leading-tight  '>+<AnimatedCounter target={350} /> <span className='text-[18px]'></span></p>
        </div>

      </div>
    </div>


  )
}

export default About
