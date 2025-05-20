'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';


const About = () => {
  return (
    <div className='max-w-[1450px]  px-5 mx-auto flex justify-center ite  w-full h-auto relative md:pt-[80px]  pb-[40px] '>

      <div className="gap-[40px]   md:grid-cols-4 grid grid-cols-2   max-w-[1200px]">
        <div className="flex flex-col ">
            <p className='md:text-[14px] text-[15px] text-[#1f1f1f] font-inter  md:pt-0 pt-6 font-medium '>Fondée </p>
            <p className='md:text-[40px] pt-2 text-[48px] text-[#1f1f1f] font-inter font-[800] leading-tight '><AnimatedCounter target={2016} /></p>
        </div>
        <div className="flex flex-col md:bor">
            <p className='md:text-[14px] text-[15px] text-[#1f1f1f] font-inter  md:pt-0 pt-6 font-medium  '>Formations disponibles</p>
            <p className='md:text-[40px] pt-2 text-[48px] text-[#1f1f1f] font-inter font-[800] leading-tight '>+0<AnimatedCounter target={8} /></p>
        </div>
        <div className="flex flex-col ">
            <p className='md:text-[14px] text-[15px] text-[#1f1f1f] font-inter  md:pt-0 pt-6 font-medium  '>Étudiants formés / année </p>
            <p className='md:text-[40px] pt-2 text-[48px] text-[#1f1f1f] font-inter font-[800] leading-tight '>+<AnimatedCounter target={120} /> <span className='text-[18px]'></span></p>
        </div>
        <div className="flex flex-col ">
            <p className='md:text-[14px] text-[15px] text-[#1f1f1f] font-inter  md:pt-0 pt-6 font-medium  '>Projets réalisés par les étudiants </p>
            <p className='md:text-[40px] pt-2 text-[48px] text-[#1f1f1f] font-inter font-[800] leading-tight '>+<AnimatedCounter target={350} /> <span className='text-[18px]'></span></p>
        </div>

      </div>
    </div>


  )
}

export default About
