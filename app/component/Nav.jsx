'use client'
import React, {useState} from 'react'
import logo from '../Assets/Logo+sub.svg'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Button from '../ButtonWhite/Button';
import { navLinks } from '../Data/Data';
import maroc from '../Assets/Flags/Flag_of_Morocco.svg (2).png'
import eng from '../Assets/Flags/Flag_of_the_United_Kingdom_(3-5).svg.webp'
import fr from '../Assets/Flags/Flag_of_France.svg.webp'
import { motion } from 'framer-motion';

const Nav = () => {
    const [drop, setDrop] = useState(true)

    const handleDrop = () => {
        setDrop(!drop)
    }

    const active = drop ? 'active' : ''
  return (
    <nav className='w-full h-[65px] flex justify-between items-center '>
        <div className='flex z-[5]  items-center gap-10 lg:gap-[60px]'>
            <div onClick={()=> setDrop(!drop)} className={`${active} menu cursor-pointer size-8  flex flex-col gap-2 justify-center items-center `}>
                <div className="w-full h-[1.5px] bg-main bar1 relative"></div>
                <div className="w-full h-[1.5px] bg-main bar2 relative"></div>
            </div>
            <Link href='/'>
                <Image src={logo} alt='logo' width={120} height={120} />
            </Link>


            <div className="lg:flex gap-8 items-center hidden">
                {navLinks.map((link) => (
                    <Link href={link.url} key={link.id} className='text-main link relative font-medium  text-[17px]'>{link.title}</Link>
                ))}
                <div className='w-[.5px] h-[20px] bg-black'></div>
                <div onClick={() => setDrop(!drop)} className='flex duration-200 ease-in-out cursor-pointer relative w-fit gap-1 text-[14px] text-main font-semibold items-center uppercase'><Image src={fr} alt='maroc' width={20} height={20} /> <span>Fr</span>  {drop ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                    {drop && (
                        <motion.div animate={{opacity: 1, filter: 'blur(0px)'}} transition={{duration: 0.3, delay: 0, ease: 'easeInOut', type: 'spring', stiffness: 100}} initial={{opacity: 0, filter: 'blur(2px)'}} className='absolute z-[2] top-[35px] left-0 w-[90px] bg-white/70 border-[.5px] border-main rounded-md p-2'>
                            {/* <div className='size-3 absolute bg-main -top-1 z-[-4] left-1  -rotate-45'></div> */}
                            <div className='flex relative  flex-col gap-2'>
                                <div className="flex gap-1 items-center ">
                                    <Image src={maroc} alt='maroc' width={20} height={20} />
                                    <p>Ar</p>

                                </div>
                                <div className="w-full h-[.2px] opacity-20 bg-main"></div>
                                <div className="flex gap-1 items-center">
                                    <Image src={eng} alt='maroc' width={20} height={20} />
                                    <p>En</p>

                                </div>
                                
                            </div>
                        </motion.div>
                    )}
                </div>

            </div>

        </div>

        <div className="flex gap-5 items-center z-[5]">
            
            <Link className='font-medium relative link text-[17px] text-main' href='/'>S'inscrire</Link>
            <div className='w-[.5px] h-[20px] bg-black'></div>
            <Link className='font-medium relative btn w-fit h-fit overflow-hidden border-[.5px] border-main rounded-full text-white py-2 px-5  text-[16px]' href='/'>Platform</Link>
        </div>



        {
            drop && (
                <motion.div animate={{opacity: 1, height: '50vh', width: '45vw', filter: 'blur(0px)'}} transition={{duration: 0.2, delay: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 50, damping: 10}} initial={{opacity: 0, height: 0, width:0, filter: 'blur(2px)'}} className='absolute border-[.5px] border-main  z-[1] top-2 left-2 h-[50vh] w-[35vw] rounded-[40px] overflow-hidden bg-white  px-4 py-6'>
                    <div className='flex relative top-[80px] flex-col gap-3 w-full'>
                        {navLinks.map((link, i) => (
                            <Link href={link.url} key={link.id} className='text-main tracking-wide w-full overflow-hidden h-[30px]  link relative font-medium  text-[20px]'><motion.span animate={{translateY: 0}} className='w-full h-full relative top-8'>{link.title}</motion.span></Link>
                        ))}
                    </div>
                </motion.div>
            )
        }
    </nav>
  )
}

export default Nav
