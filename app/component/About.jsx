'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';


const About = () => {
  return (
    <div className='max-w-[1450px]  px-5 mx-auto  w-full h-auto relative flex flex-col  py-[120px]  gap-10'>
      <h1 className=' max-w-[400px] font-morir text-[40px] flex text-wrap leading-[1.2] font-[800] opacity-90'>
          {/* Ensemble, allons plus loin. */}
      </h1>
      <div className="gap-[70px]  md:grid-cols-2 grid sm:grid-cols-2 grid-cols-1  w-full">
        <div className="flex flex-col border-t-[.5px] border-[#c4cede] ">
            <p className='text-[17.5px] relative md:top-7 font-semibold md:pt-0 pt-6'>Fondée <span className='text-main2'>*</span></p>
            <p className='md:text-[150px] text-[100px] font-sans font-[800] leading-tight '><AnimatedCounter target={2016} /></p>
        </div>
        <div className="flex flex-col border-t-[.5px] border-[#c4cede">
            <p className='text-[17.5px] relative md:top-7 font-semibold md:pt-0 pt-6'>Formations disponibles <span className='text-main2'>*</span></p>
            <p className='md:text-[150px] text-[100px] font-sans font-[800] leading-tight '>0<AnimatedCounter target={8} /></p>
        </div>
        <div className="flex flex-col border-t-[.5px] border-[#c4cede">
            <p className='text-[17.5px] relative md:top-7 font-semibold md:pt-0 pt-6'>Étudiants formés / année <span className='text-main2'>*</span></p>
            <p className='md:text-[150px] text-[100px] font-sans font-[800] leading-tight '>+<AnimatedCounter target={120} /> <span className='text-[18px]'></span></p>
        </div>
        <div className="flex flex-col border-t-[.5px] border-[#c4cede">
            <p className='text-[17.5px] relative md:top-7 font-semibold md:pt-0 pt-6'>Projets réalisés par les étudiants <span className='text-main2'>*</span></p>
            <p className='md:text-[150px] text-[100px] font-sans font-[800] leading-tight '>+<AnimatedCounter target={350} /> <span className='text-[18px]'></span></p>
        </div>

      </div>
    </div>


  )
}

export default About
