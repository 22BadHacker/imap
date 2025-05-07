'use client'
import Image from 'next/image'
import logo from '@/public/IMAPLogo/IMAP1.svg'
import Link from 'next/link'
import { navLinks } from '../../Data/Data'
import { useState } from 'react'


const NavBar = () => {
    const [open, setOpen] = useState(false)
    return(
        <nav className='max-w-[1450px]  z-20  px-5  py-[13px] mx-auto w-full h-auto  flex items-center justify-between'>
            
               
            <Image src={logo}  className='sm:w-[140px] w-[115px]'  alt='logo'/> 

                
            <div className=" gap-[55px] lg:flex hidden  items-center">
                {navLinks.map((link, i) => (
                    <>
                        <Link key={i} href={link.url} className='text-[20px]  relative  items-center font-normal tracking-[.3px] duration-200 blink-on-hover ease-in-out text-[#2b2e3a]   hover:text-main2'>{link.title} </Link>
                    </>
                ))}
            </div>
            
            <div className="flex gap-1 items-center">
                

                <div className="flex items-center gap-[2px] ">

                    <Link className='text-[19px]  px-[27px]  duration-200 hover:text-white  lg:py-[10px] py-[9px] call relative ease-in-out  text-[#2b2e3a] overflow-hidden border-[1px] border-[#e4e6ef]  font-normal  tracking-wide hidden lg:block  rounded-full' href={'/inscription'}>S'inscrire</Link>

                </div>
                

                <div className={` lg:hidden  p-[5px] rounded-full menu cursor-pointer md:w-[52px] size-[38px] flex flex-col gap-[6px] justify-center items-center `}>
                    <div className="w-full  border-b-[1.5px] border-black/80 bar1 relative"></div>
                    <div className="w-[50%] border-b-[1.5px] border-black/80 bar2 relative"></div>
                    <div className="w-full border-b-[1.5px] border-black/80 bar2 relative"></div>
                </div>
                    

            </div>


            
                    

        </nav>  
    )
}


export default NavBar;