'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedCounter from './AnimatedCounter';


const About = () => {
  return (
    <div className='max-w-[1450px]  px-5 mx-auto  w-full h-auto relative flex flex-col  py-[40px]  gap-12'>

      {/* <div className="flex items-center text-md gap-1 ">01 <span className='w-4 h-[2px] relative top-1 bg-black'></span>Overview</div>

      <h1 className=' max-w-[600px] font-morir text-[45px] flex text-wrap leading-[1.2] font-[500] opacity-90'>
          Ensemble, allons plus loin.
      </h1> */}
      <div className="gap-[50px]  md:grid-cols-2 grid sm:grid-cols-2 grid-cols-1  w-full">
        <div className="flex max-w-[550px]  rounded-[25px] px-10 py-6 gap-20 flex-col bg-[#eef3f3] ">
            <p className='md:text-[80px] font-mono text-[#3f4144] text-[100px]  font-[700] leading-tight '><AnimatedCounter target={2016} /></p>
            <p className='text-[30px] w-full text-right uppercase md:pt-0 pt-6 font-medium opacity-80'>Fondée </p>
        </div>
        <div className="flex flex-col ">
            <p className='text-[16px]  md:pt-0 pt-6 font-medium opacity-80'>Formations disponibles <span className='text-main2'>*</span></p>
            <p className='md:text-[40px] text-[100px] font-sans font-[700] leading-tight '>0<AnimatedCounter target={8} /></p>
        </div>
        <div className="flex flex-col ">
            <p className='text-[16px]  md:pt-0 pt-6 font-medium opacity-80'>Étudiants formés / année <span className='text-main2'>*</span></p>
            <p className='md:text-[40px] text-[100px] font-sans font-[700] leading-tight '>+<AnimatedCounter target={120} /> <span className='text-[18px]'></span></p>
        </div>
        <div className="flex flex-col ">
            <p className='text-[16px]  md:pt-0 pt-6 font-medium opacity-80'>Projets réalisés par les étudiants <span className='text-main2'>*</span></p>
            <p className='md:text-[40px] text-[100px] font-sans font-[700] leading-tight '>+<AnimatedCounter target={350} /> <span className='text-[18px]'></span></p>
        </div>

      </div>
    </div>


  )
}

export default About
