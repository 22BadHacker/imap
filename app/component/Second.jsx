'use client'
import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io'
import { motion } from 'framer-motion'

const Second = () => {
  return (
    <>
      
      <div className="w-full absolute coontain h-full  items-center   sm:justify-center text-center">

            {
                [...Array(10)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-60 odd:bg-red-500 rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
            }
                        

        </div>

    </>
  )
}

export default Second
