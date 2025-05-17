'use client'
import Image from 'next/image'
import logo from '@/public/IMAPLogo/IMAP1.svg'
import Link from 'next/link'
import { navLinks, navLinks2 } from '../../Data/Data'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiArrowUpRight } from "react-icons/hi2";


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }
    const toggleClass = open ? 'active' : ''

    return(

        <>
        
            <nav className='max-w-[1450px]  z-[40]  px-5  py-[13px] mx-auto w-full h-auto  flex items-center justify-between'>
                
                
                <Image src={logo}  className='sm:w-[140px] w-[115px] z-[20]'  alt='logo'/> 

                    
                <div className=" gap-[60px] lg:flex hidden  items-center">
                    {navLinks.map((link, i) => (
                        <>
                            <Link key={i} href={link.url} className='text-[20px]  relative  items-center font-medium tracking-[.3px] duration-200 blink-on-hover ease-in-out text-[#2b2e3a]   hover:text-main2'>{link.title} </Link>
                        </>
                    ))}
                </div>
                
                <div className="flex gap-1 items-center">
                    

                    <div className="flex items-center gap-[2px] ">

                        <Link className='text-[19px]  px-[25px]  duration-200 hover:text-white  py-[10px] call relative ease-in-out  text-[#2b2e3a] overflow-hidden border-[1px] border-[#e4e6ef]  font-medium  tracking-wide hidden lg:block  rounded-full' href={'/inscription'}>S'inscrire</Link>

                    </div>
                    

                    <div onClick={toggle} className={` ${toggleClass} menu lg:hidden z-[30] duration-300 ease-out   rounded-full menu cursor-pointer size-[64px]  flex flex-col gap-[4px] justify-center items-center `}>
                        <div className={`w-full  border-b-[2px]  border-black/80 bar1  `}></div>
                        <div className={`w-full border-b-[2px] border-black/80 bar2  `}></div>
                    </div>
                        

                </div>


                
                        

            </nav>  

            <AnimatePresence>

                {
                    open && (

                        <div className="fixed w-full h-screen bg-[#d3d8e1] z-[9] top-0 left-0 px-6 lg:hidden grid grid-rows-[1fr_.5fr]">

                            <div className="flex flex-col pt-[130px] ">
                                {navLinks2.map((link, i) => (
                                    <>
                                    <Link onClick={()=>setOpen(false)} key={i} href={link.url} className='text-[35px] flex border-b-[1px] border-b-[#1f1f1f]/20 justify-between leading-tight transition-all  h-[56px] overflow-hidden    relative  items-center font-semibold tracking-[.3px] duration-200 blink-on-hover ease-in-out text-[#2b2e3a]   hover:text-main2'><motion.div className='relative  w-full flex items-center justify-between' transition={{duration: 0.4, delay: i * 0.05, ease: 'easeInOut', type: 'tween'}}  exit={{opacity: 0, filter: 'blur(5px)', transition: {delay: i * 0.1}}} animate={{y: 0, opacity: 1}} initial={{y: 60, opacity: 0}} >{link.title} <span><HiArrowUpRight className='text-[25px]' /></span></motion.div>  </Link>
                                    </>
                                ))}
                            </div>

                            <motion.div transition={{delay: .52, ease: 'easeInOut', type: 'spring', stiffness: 100}} exit={{opacity: 0,  transition: {delay: .6}}} animate={{ opacity: 1}} initial={{ opacity: 0}} className="w-full  grid grid-rows-3 px-1">

                                <div className="flex flex-col gap-0">
                                    <Link className='text-gray-800  font-metro text-[19px] font-medium' href='tel:+212604248395'><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>T : </span>  06 042 483 95</Link>
                                    <Link className='text-gray-800 font-metro text-[19px] font-medium' href='tel:+212691990259' ><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>T : </span> 06 919 902 59</Link>

                                </div>

                                <div className="flex flex-col gap-0">
                                    <Link className='text-gray-800 font-metro text-[19px] font-medium' href='mailto:contact.imap@gmail.com'><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>E : </span> contact.imap@gmail.com</Link>

                                    <Link className='text-gray-800 font-metro text-[19px] font-medium' href={'https://www.google.com/maps/place/37-15+Rue+du+Yamen,+Casablanca/@33.5731104,-7.5898433,17z/data=!3m1!4b1!4m6!3m5!1s0xda7a2f8c9e0d5b7:0x8a2f8c9e0d5b7!8m2!3d33.5731104!4d-7.5898433!16s%2Fg%2F11c1gqj_6h'}><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>A : </span> 37-15 Rue du Yamen, Casablanca</Link>
                                </div>
                                    <Link className='text-gray-800 font-metro text-[19px] font-medium' href='mailto:contact.imap@gmail.com'><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>H : </span>Du lundi au samedi, de 8h30 à 21h00</Link>
                                

                            </motion.div>
                               
                        </div>
                    )
                }
            </AnimatePresence>

        </>
    )
}


export default NavBar;