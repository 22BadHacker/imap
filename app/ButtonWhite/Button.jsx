'use client'
import React from 'react'
import {motion} from 'framer-motion'

const Button
 = () => {
  return (
    
    <motion.button initial={{"--x": "100%", scale: 1}} whileTap={{scale: 0.9}}  animate={{"--x": "-100%"}} transition={{repeat: Infinity, repeatType: "loop", repeatDelay: 1, type: 'spring', stiffness: 20, damping: 15, mass: 2, scale: {type: 'spring', stiffness: 10, damping: 5, mass: 0.1}}}  className='px-6   py-[16px] rounded-md relative radial-gradient2'>
        <span className='text-main text-[14px]  block relative size-full font-bold font-[roboto] tracking-wide linear-mask2'>Rejoindre Maintenant</span>
        <span className='block absolute inset-0 rounded-md p-[1px] linear-overlay2'/>
    </motion.button>
  )
}

export default Button

