'use client'
import Image from 'next/image'
import React from 'react'

import pics2 from '../../Assets/Formation/gra.jpg'
import pics3 from '../../Assets/Formation/pinn-removebg-preview.webp'
import pics4 from '../../Assets/Formation/House.jpg'
import pics5 from '../../Assets/Formation/robo.jpg'
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundDown } from "react-icons/io";
import {motion} from 'framer-motion'
import biro from '../../Assets/Formation/banner_21_1.jpg'
import en from '../../Assets/Formation/english-words-removebg-preview.webp'
import com from '../../Assets/Formation/cc.png'
import mar from '../../Assets/Formation/mar11.jpg'
import gest from '../../Assets/Formation/gee.jpg'
import log from '../../Assets/Formation/loo.jpg'



const Title = ({title}) => (
    <>
        <h4 className='text-black/80 font-medium drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)] font-mori1  absolute top-3 left-4   text-[22px]  z-[2]'>{title}</h4>
        <div className="arr opacity-0 right-5 top-3  absolute bg-[rgb(44,46,48)] backdrop-blur-[10px] z-[5] rounded-full text-[22px] cursor-pointer text-white/80 flex items-center justify-center  size-[35px]">
            <GoArrowUpRight />
        </div>
    </>
)

const Formation = () => {
  return (
     <div className='w-full z-[1] h-auto max-w-[1450px] px-5  sm:pt-[0px] mx-auto grid grid-cols-1 gap-[40px]'>
    
    
            

             <div className="w-full relative h-screen grid grid-row-[1fr_auto] items-center  py-[100px] gap-20 sm:justify-center text-center">

                {
                    [...Array(20)].map((_, i) => <div className="absolute duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-60 odd:bg-red-500 rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
                }

                                 
                  <h1 className='sm:text-[60px] text-black z-[1] relative md:top-[110px] font-morir text-[50px] flex text-wrap leading-snug font-bold opacity-90'>Façonnez votre avenir  avec <br /> nos programmes </h1>
                  {/* <p className="text-muted-foreground text-lg"> nos programmes conçus pour autonomiser la prochaine génération d'innovateurs, de créateurs et de dirigeants. </p> */}

                  <div className="flex flex-col  items-center gap-10 relative  md:top-20">
                  <p className='text-[19px] font-morir font-light'>Découvrez nos programmes</p>


                  <motion.a href='#Programmes' animate={{y:20}} transition={{duration: .2, type: 'spring', stiffness: 20, damping: 10, ease: 'easeInOut', repeat: Infinity, repeatDelay: .1, repeatType: 'mirror'}} className="bg-[#2c2e30] z-[5] rounded-full text-[22px] text-white flex items-center justify-center  size-[45px]">
                      <IoIosArrowRoundDown />

                  </motion.a>


                  </div>
              </div>

              {/* <p className='flex gap-2 pb-10 items-center font-mori1 text-[19px]'><span className='size-2 rounded-full bg-black/80'></span> Nos programmes</p> */}
            <div id='Programmes' className="w-full h-auto">

            
              <p className='md:text-[45px] text-[40px] text-wrap z-[1] relative font-sussi text-black/85 pb-6 pt-10 whitespace-nowrap leading-[1.25]'>Des compétences étendues, <br /> une orientation claire : <br /> les domaines qui nous définissent
              <span className='w-[600px] z-[-1] blur-[90px] opacity-45  h-[150px] rounded-full absolute left-0 top-5 rotate-6 bg-red-500'></span>
              </p>

             <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">

             <div className="hoo w-full  overflow-hidden md:col-span-1 col-span-2 bg-[#eff1f5] rounded-sm h-[300px] relative ">

                    <div className="picc mix-blend-darken absolute top-0 left-0 w-full h-full ">
                        <Image src={pics5} alt='Informatique' className='object-cover   z-[1] h-full   absolute scale-90 bottom-2  md:scale-[.9] saturate-[1.2] -right-[50px] md:-rotate-[25deg] md:-bottom-[55px]   ' />
                    </div>
                   <Title title='Informatique'/>
                    
                </div>

                <div className="w-full col-span-2 hoo overflow-hidden bg-[#efefef] rounded-sm h-[300px] relative ">
                    <Image src={pics4} alt='Génie civil' className='picc object-cover saturate-150 mix-blend-multiply scale-90 sm:scale-[.65]  z-[1] absolute md:-bottom-[60px] lg:-bottom-[90px] sm:-bottom-[90px] -right-20  ' />
                    <Title title='Génie Civil'/>              
                    
                </div>


               
                <div className="hoo w-full sm:col-span-1 col-span-2 overflow-hidden bg-[#eeeefb] rounded-sm h-[300px] relative ">
                    <div className="picc absolute mix-blend-multiply top-0 left-0 w-full h-full ">
                        <Image src={pics2} alt='Infoghaphie' className='object-cover z-[1] h-full  scale-[.7] absolute  -right-[55px] mix -rotate-6  -bottom-[55px] saturate-[1.2]  ' />
                       

                    </div>
                     <Title title='Infographie'/>
                </div>


                <div className="w-full sm:col-span-1 col-span-2  hoo overflow-hidden bg-[#f2f2f2] rounded-sm h-[300px] relative ">
                    <Image src={biro} alt='Bureautique' className='picc object-cover saturate-[1.4]  scale-[.95] mix-blend-darken z-[1] absolute  -bottom-[20px] w-full -right-5  ' />
                     <Title title='Bureautique'/>                 
                </div>

                <div className="w-full md:col-span-1 col-span-2 hoo overflow-hidden bg-[rgb(255,175,176,.3)] rounded-sm h-[300px] relative ">
                    <Image src={en} alt='Langue Anglaise' className='picc drop-shadow-[2px_2px_10px_rgba(0,0,0,0.2)] object-cover  saturate-[1.2] -rotate-10 md:scale-[.75] scale-[.65] lg:scale-[.77] mix-blend-light  z-[1] absolute  -bottom-[5px] w-full -right-[30px]  ' />
                    <Title title='Langue Anglaise'/>                                         
                </div>

                <div className="w-full lg:col-span-2 col-span-2 md:col-span-3 hoo overflow-hidden bg-[#f2f2f2] rounded-sm h-[300px] relative ">
                    <Image src={log} alt='logistique et transport' className='picc mix-blend-multiply object-cover saturate-150 md:scale-[.45] lg:scale-[.55] scale-[.6] -bottom-20  z-[1] absolute md:-bottom-[200px] lg:-bottom-[110px] w-full -right-[120px]  ' />
                    <Title title='logistique et transport'/> 
                   

                                        
                </div>
                   
                <div className="w-full col-span-2 hoo overflow-hidden bg-[#ffe8d5] rounded-sm h-[300px] relative ">
                    <Image src={com} alt='Comptabilité' className='picc  object-cover saturate-150  scale-[.65]  z-[1] absolute -bottom-10 lg:-bottom-[100px] w-full -right-[100px]  ' />
                    <Title title='Comptabilité'/> 
                                
                </div>

                <div className="w-full sm:col-span-1 col-span-2 hoo overflow-hidden bg-[#ede9ea] rounded-sm h-[300px] relative ">
                    <Image src={mar} alt='Marketing' className='picc  object-cover saturate-150  scale-[.78]  z-[1] absolute  -bottom-[20px] w-full -right-10  ' />
                    <Title title='Marketing'/> 
                                 
                </div>

                <div className="w-full hoo overflow-hidden  lg:col-span-1 md:col-span-3 bg-[#edf9ea] rounded-sm h-[300px] relative ">
                    <Image src={gest} alt='Gestion des entreprises' className='picc  object-cover saturate-150 md:scale-50 lg:scale-[.78] scale-[.75] z-[1] absolute  md:-bottom-[120px] lg:-bottom-[10px] -bottom-[10px] w-full -right-10  ' />
                    <h4 className='text-black/80 leading-tight font-medium drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)] font-mori1  absolute top-3 left-4   text-[22px]  z-[2]'>Gestion des <br />entreprises</h4>
                    <div className="arr opacity-0 right-5 top-3  absolute bg-[rgb(44,46,48)] backdrop-blur-[10px] z-[5] rounded-full text-[22px] cursor-pointer text-white/80 flex items-center justify-center  size-[35px]">
                        <GoArrowUpRight />
                    </div>

                                        
                </div>


             </div>

             </div>



           
    
           
    
            
            
        </div>
  )
}

export default Formation



