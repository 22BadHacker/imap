'use client'
import React from 'react'
import TextLoop1 from '../TextLoop'
import img1 from '../../Assets/cood.jpg'
import img2 from '../../Assets/developer-8829735_1280-e1724354582311-1024x709.jpg'
import img3 from '../../Assets/web.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IoIosArrowRoundDown } from 'react-icons/io'

const piics = [img1, img2, img3, img2, img3, img2, img3, img2, img3]

const Formatique = () => {
  return (
    <div className='w-full container  z-[1] h-auto max-w-[1450px] px-5  sm:pt-[0px] mx-auto grid grid-cols-1 gap-[40px]'>
        <div className="w-full relative coontain h-screen grid grid-row-[1fr_auto] items-center  py-[100px] gap-20 sm:justify-center text-center">
            {
                [...Array(20)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-60 odd:bg-red-500 rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
            }
            <div className="w-full flex flex-col gap-0 justify-center items-center relative">
              <h1 className='sm:text-[120px] text-black/85 z-[1] relative font-morir text-[50px]  font-bold opacity-90'>Informatique</h1>
              <h5 className='text-[19.5px] tracking-[.1px] text-start relative left-20 font-mori  w-[450px]'>Maîtrisez les compétences essentielles en matière de codage, créez des projets percutants et lancez votre carrière en tant que développeur Web.</h5>
            </div>
            

            {/* <div className="w-full flex justify-end text-start">

            </div> */}
            <div className="flex flex-col  items-center gap-5 relative  md:top-20">
            {/* <h5 className='text-[19.5px] tracking-[.1px] font-mori  w-[450px]'>Maîtrisez les compétences essentielles en matière de codage, créez des projets percutants et lancez votre carrière en tant que développeur Web.</h5> */}


              <motion.a href='#Programmes' animate={{y:20}} transition={{duration: .2, type: 'spring', stiffness: 20, damping: 10, ease: 'easeInOut', repeat: Infinity, repeatDelay: .1, repeatType: 'mirror'}} className="bg-[#2c2e30] z-[5] rounded-full text-[22px] text-white flex items-center justify-center  size-[45px]">
                  <IoIosArrowRoundDown />

              </motion.a>


              </div>
             

        </div>
    </div>
  )
}

export default Formatique

// {/* <h1 className='sm:text-[120px] flex items-center gap-8 text-black/85 z-[1] relative font-morir text-[50px]  font-bold opacity-90'><span className='text-main2 font-mori1'>IMAP</span> <span className='w-[1.2px] h-[100px] bg-black/20 '></span> Informatique</h1> */}

//               {/* <p className='text-[20px] text-main2  w-fit'>𝗜𝗠𝗔𝗣 | <span className='text-main'>Formation</span></p> */}
