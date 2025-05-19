import Link from 'next/link'
import React from 'react'
import { LiaLongArrowAltRightSolid, LiaStarOfLifeSolid } from "react-icons/lia";
import Buttoon from './BiigButton2';
import BannerFormations from './BannerFormations';
import About from './About';
import Ima from '@/public/IMAPLogo/Vertical_logo.svg'
import Image from 'next/image';


const Hero = () => {
  return (
   <div className="w-full relative  h-auto max-w-[1450px] px-5 mx-auto pb-10 pt-[160px]">
            <div className="w-full z-[1] relative h-auto flex flex-col  items-center gap-[45px]">

                <div className="absolute top-[120px] blur-[70px] right-0 bg-blue-500 w-[400px] -rotate-[45deg] h-[80px]"></div>
                <div className="absolute top-[100px] blur-[70px] left-0 bg-red-500 w-[400px] -rotate-[45deg] h-[80px]"></div>

                <div className="flex flex-col items-center w-full gap-4">
                    <p className='font-inter  font-semibold text-[17px] text-[#2f2f2e]'>Construis ton avenir, ici et maintenant, avec nous.</p>
                    <h1 className='text-[85px] tracking-wide z-[5] font-[800]  leading-[1.15] font-morir max-w-[1100px] text-[#1f1f1f] opacity-95 text-center'>Chaque talent <span className='w-[120px] h-[50px] mx-1 inline-flex items-center justify-center  relative border-[2px] border-main2 text-main2 rounded-full'><LiaLongArrowAltRightSolid className='inline h-fit absolute text-[70px]' /></span> mérite d’être  <span className=''>écouté, guidé, révélé</span>.</h1>
                </div>

                <Buttoon url={'/Contact#rejoignez-nous'} name={'Rejoignez nous'} />

            </div>

            <div className="pt-[120px] w-full">
                
            </div>
    </div>
    
   
  )
}

export default Hero

