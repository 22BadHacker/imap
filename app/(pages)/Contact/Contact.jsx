'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { IoIosArrowRoundDown } from 'react-icons/io'

const Contact = () => {
  return (
    <div className='w-screen h-auto max-w-[1450px] px-5  sm:pt-[0px] mx-auto grid grid-cols-1 gap-[40px]'>
        <div className="w-full h-screen grid grid-row-[1fr_auto] items-center  py-[100px] gap-20 sm:justify-center text-center">
                        
            <h1 className='sm:text-[60px] relative md:top-[110px] font-morir text-[50px] flex text-wrap leading-snug font-bold opacity-90'>Ensemble, Créons l'Avenir dès Aujourd'hui </h1>

            <div className="flex flex-col  items-center gap-10 relative  md:top-20">
            <p className='text-[19px] font-morir font-light'>Contactez-nous</p>


            <motion.div animate={{y:20}} transition={{duration: .2, type: 'spring', stiffness: 20, damping: 10, ease: 'easeInOut', repeat: Infinity, repeatDelay: .1, repeatType: 'mirror'}} className="bg-[#2c2e30] z-[5] rounded-full text-[22px] text-white flex items-center justify-center  size-[45px]">
                <IoIosArrowRoundDown />

            </motion.div>


            </div>
        </div>



        <div className="grid w-full grid-cols-4 gap-2">
            <div className="flex flex-col w-full h-[300px] border-black/10 bg-[#fafafa] border-[.5px] rounded-sm">

            </div>
        </div>
                       
    </div>
  )
}

export default Contact
