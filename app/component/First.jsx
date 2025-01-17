'use client'
import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { motion } from 'framer-motion'

const First = ({title, desc}) => {
  return (
    <>
      
      <div className="w-full relative coontain h-screen grid grid-row-[1fr_auto] items-center  py-[100px] gap-20 sm:justify-center text-center">

            {
                [...Array(20)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-60 odd:bg-red-500 rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
            }
                        
            <h1 className='sm:text-[60px] relative md:top-[110px] font-morir text-[50px] flex text-wrap leading-snug font-bold opacity-90'>{title} </h1>

            <div className="flex flex-col  items-center gap-10 relative  md:top-20">
                <p className='text-[19px] font-morir font-light'>{desc}</p>


                <motion.div animate={{y:20}} transition={{duration: .2, type: 'spring', stiffness: 20, damping: 10, ease: 'easeInOut', repeat: Infinity, repeatDelay: .1, repeatType: 'mirror'}} className="bg-[#2c2e30] z-[5] rounded-full text-[22px] text-white flex items-center justify-center  size-[45px]">
                    <IoIosArrowRoundDown />

                </motion.div>


            </div>
        </div>

    </>
  )
}

export default First
