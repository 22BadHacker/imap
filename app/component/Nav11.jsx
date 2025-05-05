'use client'
import React, {useState, useEffect, useRef} from 'react'
import logo from '../Assets/IMAPLogo/IMAP.svg'
import out from '../Assets/IMAPLogo/outloudWhite.svg'
import Image from 'next/image'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { navLinks } from '../Data/Data';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation'
import Sign from './Sign'
import Link from 'next/link'


const Nav = () => {
    const [drop, setDrop] = useState(false)
    const [sign, setSign] = useState(false)
    const menuRef = useRef();
   
    const active = drop ? 'active' : ''

    const dropHandel = () => {
        setDrop(!drop)
    }

   
    const router = useRouter()
    const pathname = usePathname()
   
   

   
  return (
    <>
    <nav className={`w-full z-[100] ${drop ? 'fixed top-0 left-0' : 'relative'}  relative h-[65px]  flex justify-between items-center`}>
        <div className='flex z-[5] w-full  sm:justify-normal sm:flex-row justify-between items-center gap-10 lg:gap-[60px]'>
            
            <Link href='/'>
                <Image src={logo} className='sm:size-[145px] size-[120px]' alt='IMAP' width={125} height={125} />
            </Link>



        </div>

        <div className="flex gap-20 items-center z-[5]">
            <div className="md:flex gap-7 lg:gap-12 items-center hidden">
                {navLinks.map((link) => (
                    <Link  onClick={() => router.push(link.url, undefined, { shallow: true })} href={link.url} key={link.id} className={`${router.pathname === link.url ? 'text-main2' : ''} font-noto_sans hover:text-[#e94531] transition-[200ms] font-[450]  text-[#361516]   relative  text-[17px] lg:text-[18px]`}>{link.title}</Link>
                ))}
               

            </div>

            <motion.a initial='initial' whileHover='hovered' className='relative hidden font-noto_sans btn sm:flex items-center justify-center  overflow-hidden  rounded-full font-bold  text-[#fff] h-[38px] tracking-[.4px] py-[26px] w-[115px]  text-[16.5px]' href='/'><motion.div  variants={{ hovered: {top: 0, opacity: 1}}} className='absolute opacity-0 -top-20 inset-0 w-full  flex justify-center items-center'>
                    <Image width={72} className='saturate-200'  src={out} alt='OUTLOUD'/>
                </motion.div> 
            <motion.span variants={{intial: {y:0}, hovered: {y: '130%'}}}className='opacity-95'>Platform</motion.span>
            </motion.a>

            <div onClick={dropHandel} className={`${active} md:hidden hover:bg-[rgb(231,231,231,.6)] p-[5px] rounded-full menu cursor-pointer md:size-9 size-[38px] flex flex-col gap-2 justify-center items-center `}>
                <div className="w-full h-[1.5px] bg-main bar1 relative"></div>
                <div className="w-full h-[1.5px] bg-main bar2 relative"></div>
            </div>
        </div>


    </nav>

   

        {
            drop && (
                <motion.div animate={{opacity:1, filter: 'blur(0px)'}} transition={{ delay:.2,duration: .25, ease: 'easeInOut'}} initial={{opacity: 0, filter: 'blur(10px)'}} className='w-screen z-10 md:hidden flex h-screen fixed  bg-white/100 backdrop-blur-[25px]  top-0 py-10 border-b-[.5px] border-black/20 shadow-[0px_.5px_.5px_#1e539e] pt-[80px] left-0'>
                    <div className='flex linkss relative h-full flex-col gap-2 w-full pt-10 px-5 pr-10'>
                            {navLinks.map((link, i) => (
                                <div key={i}>
                                    <div  className='text-main  tracking-wide w-full   hover:text-black relative font-medium  text-[20px]'>
                                        <Link key={i} href={link.url}  className=''>{link.title}</Link>

                                    </div>
                                    <div  className="w-full h-[.2px] opacity-20 bg-main"></div>
                                </div>
                                ))}
                          

                            <div className=" gap-10 items-center sm:hidden flex w-full justify-center pt-10">
                                <motion.a initial='initial' whileHover='hovered' className='relative font-mori1 btn flex items-center justify-center  overflow-hidden  rounded-full font- text-[#f9f9f9] h-[38px] py-[22px] w-[105px]  text-[16.5px]' href='/'><motion.div  variants={{ hovered: {top: 0, opacity: 1}}} className='absolute opacity-0 -top-20 inset-0 w-full  flex justify-center items-center'>
                                        <Image width={72}  src={out} alt='OUTLOUD'/>
                                    </motion.div> 
                                <motion.span variants={{intial: {y:0}, hovered: {y: '130%'}}}className='opacity-95'>Platform</motion.span>
                                </motion.a>
                            </div>
                        </div>

                </motion.div>
            )
        }


        {
            sign && <Sign  />
        }
    
    </>
  )
}

export default Nav
