'use client'
import Image from 'next/image'
import React from 'react'

import pics2 from '../../Assets/Formation/pss.png'
import pics4 from '../../Assets/Formation/hhhh.webp'
import pics5 from '../../Assets/Formation/mm.webp'
import { GoArrowUpRight } from "react-icons/go";
import { IoIosArrowRoundDown } from "react-icons/io";
import {motion} from 'framer-motion'
import biro from '../../Assets/Formation/banner_21_1.jpg'
import en from '../../Assets/Formation/nn.png'
import com from '../../Assets/Formation/cc.png'
import mar from '../../Assets/Formation/mar11.jpg'
import gest from '../../Assets/Formation/gee.jpg'
import log from '../../Assets/Formation/loo.jpg'
import Link from 'next/link'



const Title = ({title, href}) => (
    <>
        <h4 className='text-black/80 font-medium drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)] font-mori1  absolute top-3 left-4   text-[22px]  z-[2]'>{title}</h4>
        <Link href={href} className="arr opacity-0 right-5 top-3  absolute bg-[rgb(44,46,48)] backdrop-blur-[10px] z-[5] rounded-full text-[22px] cursor-pointer text-white/80 flex items-center justify-center  size-[35px]">
            <GoArrowUpRight />
        </Link>
    </>
)



export const Programmes = () => (
    <div id='Programmes' className="w-full h-auto">

            
              <p className='md:text-[45px] text-[40px] text-wrap z-[1] relative font-sussi text-black/85 pb-6 pt-10 whitespace-nowrap leading-[1.25]'>Des compétences étendues, <br /> une orientation claire : <br /> les domaines qui nous définissent
              <span className='w-[600px] z-[-1] blur-[90px] opacity-45  h-[150px] rounded-full absolute left-0 top-5 rotate-6 bg-red-500'></span>
              </p>

             <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-4">

             <motion.div  initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }} className="hoo w-full   overflow-hidden md:col-span-1 col-span-2  bg-[rgba(242,243,247,0.9)] rounded-sm h-[300px] relative ">

                        <Image src={pics5} alt='Informatique' className='picc drop-shadow-xl object-cover w-[25vh]    z-[1]  bottom-0 right-1 absolute saturate-[1.4] ' />
                    
                   <Title href='/Formations/Informatique' title='Informatique'/>
                    
                </motion.div>

                <div className="w-full  col-span-2 hoo overflow-hidden bg-[#efefef] rounded-sm h-[300px] relative ">
                    <Image src={pics4} alt='Génie civil' className='picc object-cover saturate-[1.4] drop-shadow-[0px_.5px_.5px_rgba(0,0,0,0.4)] w-[40vh]  z-[1] absolute bottom-0 sm:top-10 right-2' />
                    <Title href='/Formations/Informatique' title='Génie Civil'/>              
                    
                </div>


               
                <div className="hoo w-full lg:col-span-1 col-span-2 overflow-hidden bg-[#eeeefb] rounded-sm h-[300px] relative ">
                        <Image src={pics2} alt='Infoghaphie' className='picc object-cover z-[1] bottom-0 sm:top-10 right-6 hover:drop-shadow-xl w-[25vh] absolute   -rotate-6   saturate-[1.2]  ' />
                   
                     <Title href='/Formations/Informatique' title='Infographie'/>
                </div>


                <div className="w-full sm:col-span-1 col-span-2  hoo overflow-hidden bg-[#f2f2f2] rounded-sm h-[300px] relative ">
                    <Image src={biro} alt='Bureautique' className='picc object-cover saturate-[1.4] w-[40vh] bottom-0 right-0 lg:left-0  mix-blend-darken z-[1] absolute  ' />
                     <Title href='/Formations/Informatique' title='Bureautique'/>                 
                </div>

                <div className="w-full sm:col-span-1 col-span-2 hoo overflow-hidden bg-[rgba(238,244,251,0.9)] rounded-sm h-[300px] relative ">
                    <Image src={en} alt='Langue Anglaise' className='picc  object-cover  saturate-[1.2]  z-[1] absolute bottom-0 right-0 w-[30vh] ' />
                    <Title href='/Formations/Informatique' title='Langue Anglaise'/>                                         
                </div>

                <div className="w-full lg:col-span-2 col-span-2  hoo overflow-hidden bg-[#f2f2f2] rounded-sm h-[300px] relative ">
                    <Image src={log} alt='logistique et transport' className='picc mix-blend-multiply object-cover saturate-150 w-[40vh] right-0 absolute bottom-0 sm:top-5  ' />
                    
                    <Title href='/Formations/Informatique' title='logistique et transport'/> 
                   

                                        
                </div>
                   
                <div className="w-full col-span-2 hoo overflow-hidden bg-[#ffe8d5] rounded-sm h-[300px] relative ">
                    <Image src={com} alt='Comptabilité' className='picc  object-cover saturate-150  w-[40vh] bottom-4 right-2 lg:right-10 absolute lg:top-10 ' />
                    <Title href='/Formations/Informatique' title='Comptabilité'/> 
                                
                </div>

                <div className="w-full sm:col-span-1 col-span-2 hoo overflow-hidden bg-[#ede9ea] rounded-sm h-[300px] relative ">
                    <Image src={mar} alt='Marketing' className='picc  object-cover saturate-150  w-[30vh] bottom-2 right-2 z-[1] absolute  ' />
                    <Title href='/Formations/Informatique' title='Marketing'/> 
                                 
                </div>

                <div className="w-full hoo overflow-hidden  lg:col-span-1 md:col-span-3 bg-[#edf9ea] rounded-sm h-[300px] relative ">
                    <Image src={gest} alt='Gestion des entreprises' className='picc  object-cover saturate-150 md:w-[45vh] w-[30vh] lg:w-[30vh] bottom-2 right-2 z-[1] absolute  ' />
                    <h4 className='text-black/80 leading-tight font-medium drop-shadow-[2px_2px_10px_rgba(0,0,0,0.5)] font-mori1  absolute top-3 left-4   text-[22px]  z-[2]'>Gestion des <br />entreprises</h4>
                    <div className="arr opacity-0 right-5 top-3  absolute bg-[rgb(44,46,48)] backdrop-blur-[10px] z-[5] rounded-full text-[22px] cursor-pointer text-white/80 flex items-center justify-center  size-[35px]">
                        <GoArrowUpRight />
                    </div>

                                        
                </div>


             </div>

             </div>
)

const Formation = () => {
  return (
     <div className='w-full container  z-[1] h-auto max-w-[1450px] px-5  sm:pt-[0px] mx-auto grid grid-cols-1 gap-[40px]'>
    
    
            

             <div className="w-full relative coontain h-screen grid grid-row-[1fr_auto] items-center  py-[100px] gap-20 sm:justify-center text-center">

                

                {
                    [...Array(20)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-60 odd:bg-red-500 rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
                }

                                 
                  <h1 className='sm:text-[60px] text-black z-[1] relative md:top-[110px] font-morir text-[50px] flex text-wrap leading-snug font-bold opacity-90'>Façonnez votre avenir  avec <br /> nos programmes </h1>
                 

                  <div className="flex flex-col  items-center gap-10 relative  md:top-20">
                  <p className='text-[19px] font-morir font-light'>Découvrez nos programmes</p>


                  <motion.a href='#Programmes' animate={{y:20}} transition={{duration: .2, type: 'spring', stiffness: 20, damping: 10, ease: 'easeInOut', repeat: Infinity, repeatDelay: .1, repeatType: 'mirror'}} className="bg-[#2c2e30] z-[5] rounded-full text-[22px] text-white flex items-center justify-center  size-[45px]">
                      <IoIosArrowRoundDown />

                  </motion.a>


                  </div>
              </div>

              {/* <p className='flex gap-2 pb-10 items-center font-mori1 text-[19px]'><span className='size-2 rounded-full bg-black/80'></span> Nos programmes</p> */}
            


                <Programmes/>
           
    
           
    
            
            
        </div>
  )
}

export default Formation
// export default Programmes



