'use client'
import React, {useState, useEffect, useRef} from 'react'
import logo from '../Assets/Logo+sub.svg'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import Button from '../ButtonWhite/Button';
import { navLinks } from '../Data/Data';
import maroc from '../Assets/Flags/Flag_of_Morocco.svg (2).png'
import eng from '../Assets/Flags/Flag_of_the_United_Kingdom_(3-5).svg.webp'
import fr from '../Assets/Flags/Flag_of_France.svg.webp'
import { AnimatePresence, motion } from 'framer-motion';
import Sign from './Sign'


const Nav = () => {
    const [drop, setDrop] = useState(false)
    const [sign, setSign] = useState(false)
    const menuRef = useRef();
    

   
    const active = drop ? 'active' : ''



    // useEffect(()=> {

    //     let handler = (e) =>{
    //         if(!menuRef?.current?.contains(e.target)){
    //             setDrop(false)
    
    //         }
    //     }
        
    //     document.addEventListener('mousedown', handler)

    //     return()=>{
    //         document.removeEventListener('mousedown', handler)
    //     }
        
    // })


    const dropHandel = () => {
        setDrop(!drop)
    }

   

   

   
  return (
    <>
    <nav className='w-full z-20 relative h-[65px]  flex justify-between items-center '>
        <div className='flex z-[5] w-full flex-row-reverse sm:justify-normal sm:flex-row justify-between items-center gap-10 lg:gap-[60px]'>
            <div onClick={dropHandel} className={`${active} lg:hidden p-[2px] rounded-full menu cursor-pointer md:size-9 size-[38px] flex flex-col gap-2 justify-center items-center `}>
                <div className="w-full h-[1.5px] bg-main bar1 relative"></div>
                <div className="w-full h-[1.5px] bg-main bar2 relative"></div>
            </div>
            <Link href='/'>
                <Image src={logo} className='sm:size-[120px] size-[120px]' alt='logo' width={120} height={120} />
            </Link>


            <div className="lg:flex gap-8 items-center hidden">
                {navLinks.map((link) => (
                    <Link href={link.url} key={link.id} className=' font-mori hover:text-main link relative   text-[17px]'>{link.title}</Link>
                ))}
                <div className='w-[.5px] h-[20px] bg-black'></div>
                <div onClick={() => setDrop(!drop)} className='flex duration-200 ease-in-out cursor-pointer relative w-fit gap-1 text-[14px]  font-semibold items-center uppercase'><Image src={fr} alt='maroc' width={20} height={20} /> <span>Fr</span>  {drop ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                    {drop && (
                        <motion.div animate={{opacity: 1, filter: 'blur(0px)'}} transition={{duration: 0.3, delay: 0, ease: 'easeInOut', type: 'spring', stiffness: 100}} initial={{opacity: 0, filter: 'blur(2px)'}} className='absolute z-[2] top-[35px] left-0 w-[90px] bg-white/70 border-[.5px] border-main rounded-md p-2'>
                            {/* <div className='size-3 absolute bg-main -top-1 z-[-4] left-1  -rotate-45'></div> */}
                            <div className='flex relative  flex-col gap-2'>
                                <div className="flex gap-1 items-center  ">
                                    <Image src={maroc} alt='maroc' width={20} height={20} />
                                    <p>Ar</p>

                                </div>
                                <div className="w-full h-[.2px] opacity-20 bg-main"></div>
                                <div className="flex gap-1 items-center ">
                                    <Image src={eng} alt='maroc' width={20} height={20} />
                                    <p>En</p>

                                </div>
                                
                            </div>
                        </motion.div>
                    )}
                </div>

            </div>

        </div>

        <div className="sm:flex gap-5 items-center z-[5] hidden">
            
            <p onClick={()=> setSign(!sign)} className='font-normal cursor-pointer relative link text-[17px] ' >S'inscrire</p>
            <div className='w-[.5px] h-[20px] bg-black'></div>
            <Link className='font-normal relative btn w-fit h-fit overflow-hidden border-[.5px] border-black rounded-full text-white py-2 px-5  text-[16px]' href='/'>Platform</Link>
        </div>

        <AnimatePresence>

            {
                drop && (
                    <motion.div  animate={{opacity: 1, height: '50vh', width: '45vw', filter: 'blur(0px)'}} transition={{duration: 0.1, delay: 0.1, ease: 'easeInOut', type: 'spring', stiffness: 50, damping: 10}} initial={{opacity: 0, height: 0, width:0, filter: 'blur(2px)'}} className='absolute lg:hidden sm:flex hidden border-[.5px] border-main   z-[1] -top-[6px] -left-[10px] h-[50vh] w-[35vw] rounded-[40px] overflow-hidden bg-white/80 backdrop-blur-[50px] shadow-[2px_2px_4px_rgb(0,0,0,.1)] px-4 py-6'>
                        <div className='flex linkss relative top-[80px] flex-col gap-2 w-full'>
                            {navLinks.map((link, i) => (
                                <>
                                    <div className="w-full h-[.2px] opacity-20 bg-main"></div>
                                    <div  className='text-main  tracking-wide w-full h-[30px]  hover:text-black relative font-medium  text-[20px]'>
                                        <Link key={i} href={link.url}  className=''>{link.title}</Link>

                                    </div>
                                </>
                                ))}
                                <div className="w-full h-[.2px] opacity-20 bg-main"></div>
                            <div className='flex relative  flex-col gap-3 pt-2 pl-2 uppercase'>
                                <div className="flex gap-1 items-center ">
                                    <Image src={fr} alt='maroc' width={23} height={23} />
                                    <p>Fr</p>

                                </div>
                                
                                <div className="flex gap-1 items-center ">
                                    <Image src={maroc} alt='maroc' width={23} height={23} />
                                    <p>Ar</p>

                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image src={eng} alt='maroc' width={23} height={23} />
                                    <p>En</p>

                                </div>
                                
                            </div>

                        </div>

                        <div className="absolute bottom-0 opacity-50 right-0 blur-[70px] size-[100px] rounded-[20px_0_0_0] bg-red-500"></div>
                        <div className="absolute top-0 opacity-50 right-0 blur-[80px] size-[100px] rounded-[20px_0_0_0] bg-blue-500"></div>
                        {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */}

                    </motion.div>
                )
            }
        </AnimatePresence>




    </nav>

    {/* <div className="w-[90%] mt-3 absolute left-1/2 -translate-x-1/2 h-[.2px] opacity-20 bg-main"></div> */}

        {
            drop && (
                <motion.div animate={{opacity:1, filter: 'blur(0px)'}} transition={{ delay:.2,duration: .25, ease: 'easeInOut'}} initial={{opacity: 0, filter: 'blur(10px)'}} className='w-screen z-10 sm:hidden flex  absolute h-auto bg-white/70 backdrop-blur-[25px] right-0 top-0 py-10 border-b-[.5px] border-main shadow-[0px_1px_1px_#1e539e] pt-[80px] left-0'>
                    <div className='flex linkss relative  flex-col gap-2 w-full pt-10 px-5 pr-10'>
                            {navLinks.map((link, i) => (
                                <>
                                    <div key={i} className='text-main  tracking-wide w-full   hover:text-black relative font-medium  text-[20px]'>
                                        <Link key={i} href={link.url}  className=''>{link.title}</Link>

                                    </div>
                                    <div className="w-full h-[.2px] opacity-20 bg-main"></div>
                                </>
                                ))}
                                {/* <div className="w-full h-[.2px] opacity-20 bg-main"></div> */}
                            <div className='flex relative  flex-col gap-3 pt-2 text-[15px]  uppercase'>
                                <div className="flex gap-1 items-center ">
                                    <Image src={fr} className='' alt='maroc' width={20} height={20} />
                                    <p>France</p>

                                </div>
                                
                                <div className="flex gap-1 items-center ">
                                    <Image src={maroc} alt='maroc' width={20} height={20} />
                                    <p>Arabic</p>

                                </div>
                                <div className="flex gap-1 items-center">
                                    <Image src={eng} alt='maroc' width={20} height={20} />
                                    <p>Englais</p>

                                </div>
                                
                            </div>

                            <div className=" gap-10 items-center  flex w-full justify-center pt-10">
                
                                <Link className='font-medium  relative    border-[.5px] border-main rounded-full text-main py-2 px-5  text-[16px]text-main' href='/SignUp'>S'inscrire</Link>
                                <div className='w-[.5px] h-[25px] bg-black'></div>
                                <Link className='font-medium relative btn w-fit h-fit overflow-hidden border-[.5px] border-main rounded-full text-white py-2 px-5  text-[16px]' href='/'>Platform</Link>
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
