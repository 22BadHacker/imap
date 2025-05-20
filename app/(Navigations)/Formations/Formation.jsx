'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Galerie from './Galerie'
import Banner from '@/app/component/Banner'
import hand from '@/public/Work2/hand2.webp'



const Formation = () => {
    
  return (

    <>
        <div className='w-full  h-auto max-w-[1450px] px-5 mx-auto grid grid-cols-1 gap-[40px]'>
                <div className="w-full flex flex-col gap-20  relative h-auto pb-[10px] pt-[120px] z-[1]">
                    <div className="flex gap-2 flex-col">
                        <div className="absolute right-10 top-[140px] bg-blue-500 w-[500px] -rotate-[10deg] animate-pulse  h-[80px] blur-[100px]"></div>
                        {/* <div className="absolute left-0 bottom-[0px] bg-blue-500 w-[400px]  h-[80px] animate-pulse blur-[60px]"></div> */}
                        <p className='font-bold uppercase text-[17.5px] tracking-wider font-morir text-main2 flex gap-1 items-center'>
                            <span className='blink'></span> Formations
                        </p>
                        <h1 className='sm:text-[62px] leading-[1.1] max-w-[800px] font-sans text-[#1f1f1f] opacity-95 text-[40px] flex text-wrap  font-bold '>
                        Construis ton avenir, ici et maintenant, avec nous.
                        </h1>
                    </div>


                    <div className="grid sm:grid-cols-2 gap-10 pt-5">
                        <h5 className='uppercase leading-tight max-w-[250px] h-fit font-inter font-medium text-[16px] tracking-wide  '> Un lieu où l’on apprend, crée et évolue.</h5>
                        <div className="flex flex-col gap-5">
                            <h6 className='text-[15px] max-w-[550px] font-inter leading-relaxed'>chaque formation est pensée pour être plus qu’un simple apprentissage : c’est une passerelle vers un métier, une passion ou un avenir que vous choisissez.</h6>
                            <h6 className='text-[15px] font-inter max-w-[550px]  leading-relaxed'>Nos programmes sont concrets, accessibles et guidés par des pros du terrain. Ici, on apprend en faisant, et surtout, on avance avec confiance, vers ce qu’on veut vraiment devenir.</h6>
                        </div>
                    </div>

                </div>
        
                    
            </div>

            <div className="pt-20">
                <video src="/videos/hats.mp4"  className="w-full h-full object-cover saturate-[1.4]" autoPlay muted loop />

            </div>
                    

            <div className="w-full  h-auto max-w-[1450px] px-5 mx-auto ">

                <Galerie />
            </div>
                    
                    
                    
    </>
  )
}

export default Formation
// export default Programmes



{/* <p className='md:text-[45px] text-[40px] text-wrap z-[1] relative font-sussi text-black/85 pb-6 pt-10 whitespace-nowrap leading-[1.25]'>Des compétences étendues, <br /> une orientation claire : <br /> les domaines qui nous définissent */}

// Façonnez votre avenir avec 
//                      nos programmes