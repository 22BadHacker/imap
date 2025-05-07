'use client'
import React, { useState } from 'react'
import { GoLink } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { TfiClose } from "react-icons/tfi";
import { MagneticNested } from './Magnet';




const Social = () => {
    const [drop, setDrop] = useState(false)
    const soc = [
        {
            id: 1,
            icon: <FaWhatsapp />,
            url: 'https://wa.me/212604248395'
        },
        {
            id: 2,
            icon: <GrFacebookOption />,
            url: 'https://www.facebook.com'
        },
        {
            id: 3,
            icon: <FaInstagram className=' '/>,
            url: 'https://www.instagram.com/institut.ima/'
        },
    ]

    
  return (

    <motion.div drag className=' z-[20] fixed bottom-[60px] right-5 sm:right-10 lg:bottom-20 lg:right-20 flex flex-col items-center gap-3'>
        <AnimatePresence>
            {drop && (
                <div className='flex flex-col gap-3'>
                    {
                        soc.map((item, i) => (
                            <motion.div drag exit={{opacity: 0, filter: 'blur(2px)', transition: {duration: 0.2, delay: i * 0.1, ease: 'easeInOut', type: 'spring', stiffness: 100}}} animate={{opacity: 1, filter: 'blur(0px)'}} transition={{duration: 0.2, delay: i * 0.1, ease: 'easeInOut', type: 'spring', stiffness: 100}} initial={{opacity: 0, filter: 'blur(2px)'}} key={i}  className="size-[53px] text-[26px] relative btn btn2 overflow-hidden rounded-full hover:border-[.5px] cursor-pointer hover:border-main text-white flex items-center justify-center"><Link target='_blank' href={item.url} className='w-full h-full flex items-center justify-center'>{item.icon}</Link></motion.div>
                        ))
                    }
                </div>
            )}
        </AnimatePresence>
            
            <MagneticNested click={() => setDrop(!drop)}/>
        
    </motion.div>
  )
}

export default Social
