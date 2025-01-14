'use client'
import Image from 'next/image'
import React from 'react'
import pics1 from '../../Assets/Work2/Nike.webp'
import pics4 from '../../Assets/Work2/Moroc.webp'
import pics5 from '../../Assets/Work2/VictoriaBottle-min.webp'
import pics3 from '../../Assets/Work2/drag-&-drab-notes.webp'
import logo from '../../Assets/Work2/Logo.svg'
import {motion} from 'framer-motion'
import pics11 from '../../Assets/Work2/Mockup.webp'
import pics8 from '../../Assets/Work2/sign.webp'
import pics9 from '../../Assets/Work2/Headphones_Flyer.webp'
import pics10 from '../../Assets/Work2/Sans-titre-1.webp'
import pics12 from '../../Assets/Work2/illu.webp'
import { IoIosArrowRoundDown } from 'react-icons/io'
import Cursors from './Cursor'
import { TextLoopCustomVariantsTransition } from './TextLoop'

const list = [
    'Informatique',
    'Genie Civil',
    'bureautique',
    'Infographie'

]

const imgs = [
    {src: pics1, alt:'', desc1:'Poster', desc2:'Infographie', name: 'Nike Poster'},
    {src: pics8, alt:'',desc1:'Sign Up Page', desc2:'Informatique',  name: "Frontend"},
    {src: pics4, alt:'',  desc1:'Poster', desc2:'Photoshop', name: 'Maroc Affiche'},
    {src: pics3, alt:'', desc1:'Drag & Drop', desc2:'JavaScript', name: 'Informatique'},
    {src: pics10, alt:'', desc1:'Informatique', desc2:'Web Design', name: 'Notification'},
    {src: pics5, alt:'', name: 'Victoria Logo', desc1:'Illustrator', desc2:'Logo Design',},
    // {src: pics9, alt:'', desc1:'Flyer', desc2:'Informatique', name: 'Headphones Flyer'},   
]

const Work = () => {
  return (
    <div className='w-full h-auto max-w-[1450px] sm:px-5  px-5 mx-auto grid grid-cols-1 gap-[40px]'>


       

        <div className="w-full relative h-screen grid grid-row-[1fr_auto] items-center  py-[100px] gap-20 sm:justify-center text-center">

            {
                [...Array(20)].map((_, i) => <div className="absolute duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-60 odd:bg-[#c83642] rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
            }
                        
                
                       
            <h1 className='sm:text-[60px] relative md:top-[110px] font-morir text-[50px] flex text-wrap leading-snug font-bold opacity-90'>
                <Cursors />
                Exposition des Œuvres de <br /> Nos Futurs Ingénieurs </h1>
            {/* <p className="text-muted-foreground text-lg"> nos programmes conçus pour autonomiser la prochaine génération d'innovateurs, de créateurs et de dirigeants. </p> */}

            <div className="flex flex-col  items-center gap-10 relative  md:top-20">
            <p className='text-[19px] font-morir font-light'>Découvrez nos Etudiant  Œuvre</p>
            {/* <TextLoopCustomVariantsTransition /> */}


            <motion.div animate={{y:20}} transition={{duration: .2, type: 'spring', stiffness: 20, damping: 10, ease: 'easeInOut', repeat: Infinity, repeatDelay: .1, repeatType: 'mirror'}} className="bg-[#2c2e30] z-[5] rounded-full text-[22px] text-white flex items-center justify-center  size-[45px]">
                <IoIosArrowRoundDown />

            </motion.div>


            </div>
        </div>
                        

                    <div className="w-full flex md:flex-row md:gap-0 gap-6 flex-col items-center justify-between">

                        <p className='flex gap-2 items-center font-mori1 text-[19px]'><span className='size-2 rounded-full bg-black/80'></span> Etudiant Œuvre</p>

                        <div className=" flex justify-center items-center gap-4 flex-wrap">


                            {list.map((item, i)=> <p key={i} className='border-[.5px] border-black/50 text-[12.5px] uppercase px-3 py-2 rounded-full font-normal'>{item}</p>)}
                        
                            <p className='text-main font-semibold underline italic'>& More...</p>
                        </div>
                    </div>


        <div className="grid  grid-cols-2 grid-rows-2 md:grid-cols-3  w-full  pt-10 gap-x-5 gap-y-10">
            {/* <div className="w-full h-auto flex flex-col gap-4 "> */}

                {
                    imgs.map((item, i) =>
                        <div key={i} className='flex  flex-col gap-2 relative overflow-hidden'>
                            
                            <Image  src={item.src} className='object-cover img shadow-[.5px_.5px_1px_#1853a0] border-[.5px] border-black/10 w-full h-full saturate-[1.1]'  alt={item.alt}/>

                            <div className="w-full gap-1 flex justify-between items-center flex-wrap">
                                <p className='text-[25px] font-light opacity-90 flex gap-2 items-center'> <span className='size-[6px] bg-black/80 rounded-full'></span> {item.name}</p>
                                {/* <span className='w-[.2px] h-[20px] bg-black/80 rounded-full'></span> */}

                                <div className="flex gap-3 items-center flex-wrap">
                                   <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>{item.desc1}</span>
                                   <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>{item.desc2}</span>
                                </div>
                            </div>
                        </div>
                )
                }

                <div className="flex flex-col gap-2 col-span-2 w-full h-auto">
                    <div className=' z-[1] flex  items-center justify-center  bg-black/90 overflow-hidden backdrop-blur-[100px]  w-full relative     '>
                        <Image src={logo} className='object-cover saturate-150 '  alt="MEGASOFT" />
                        <div className="w-[300px] opacity-100 h-[200px] z-[-5]  absolute right-[0px] blur-[150px] -top-0 bg-red-600 rounded-full"></div>
                        <div className="w-[300px] opacity-100 h-[200px] z-[-5]  absolute left-[0px] blur-[140px] -bottom-0 bg-blue-500 rounded-full"></div>

                    </div>
                        <div className="w-full gap-1 flex justify-between items-center flex-wrap">
                                    <p className='text-[25px] font-light opacity-90 flex gap-2 items-center'> <span className='size-[6px] bg-black/80 rounded-full'></span> Megasoft's Logo</p>
                                    {/* <span className='w-[.2px] h-[20px] bg-black/80 rounded-full'></span> */}

                                    <div className="flex gap-3 items-center flex-wrap">
                                    <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>Branding</span>
                                    <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>Illustrator</span>
                                    </div>
                                </div>
                </div>



                <div className="flex flex-col gap-2  w-full h-auto">
                    <div className=' z-[1] flex  items-center justify-center  bg-black/90 overflow-hidden backdrop-blur-[100px]  w-full relative     '>
                        <Image src={pics9} className='object-cover saturate-150 '  alt="MEGASOFT" />
                       

                    </div>
                        <div className="w-full gap-1 flex justify-between items-center flex-wrap">
                                    <p className='text-[25px] font-light opacity-90 flex gap-2 items-center'> <span className='size-[6px] bg-black/80 rounded-full'></span> Headphones</p>
                                    {/* <span className='w-[.2px] h-[20px] bg-black/80 rounded-full'></span> */}

                                    <div className="flex gap-3 items-center flex-wrap">
                                    <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>Flayer</span>
                                    <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>Photoshop</span>
                                    </div>
                                </div>
                </div>

               
                <div className="flex flex-col gap-2  w-full h-auto">
                    <div className=' z-[1] flex  items-center justify-center  bg-black/90 overflow-hidden backdrop-blur-[100px]  w-full relative     '>
                        <Image src={pics12} className='object-cover saturate-150 '  alt="MEGASOFT" />
                       

                    </div>
                        <div className="w-full gap-1 flex justify-between items-center flex-wrap">
                                    <p className='text-[25px] font-light opacity-90 flex gap-2 items-center'> <span className='size-[6px] bg-black/80 rounded-full'></span>Illusion studio </p>
                                    {/* <span className='w-[.2px] h-[20px] bg-black/80 rounded-full'></span> */}

                                    <div className="flex gap-3 items-center flex-wrap">
                                    <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>Music Website</span>
                                    <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>Web Design</span>
                                    </div>
                                </div>
                </div>

                <div className="flex flex-col gap-2  w-full h-auto">
                    <div className=' z-[1] flex  items-center justify-center  bg-black/90 overflow-hidden backdrop-blur-[100px]  w-full relative     '>
                        <Image src={pics11} className='object-cover saturate-150 '  alt="MEGASOFT" />
                       

                    </div>
                        <div className="w-full gap-1 flex justify-between items-center flex-wrap">
                                    <p className='text-[25px] font-light opacity-90 flex gap-2 items-center'> <span className='size-[6px] bg-black/80 rounded-full'></span> Headphones</p>
                                    {/* <span className='w-[.2px] h-[20px] bg-black/80 rounded-full'></span> */}

                                    <div className="flex gap-3 items-center flex-wrap">
                                    <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>Flayer</span>
                                    <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>Photoshop</span>
                                    </div>
                                </div>
                </div>
            

            
        </div>
        
    </div>
  )
}

export default Work




//  {/* <Image src={pic1} className='object-cover w-full h-full saturate-150' width={500} height={500} alt='Nike'/> */}
//                 {/* <div className="flex flex-col gap-2">
//                     <div className="flex items-center gap-2">
//                         <p className='text-[15px]  bg-main text-white bg-opacity-65 px-[4px] font-medium'>Infographie</p>
//                         <p className='text-[15px]  bg-main text-white bg-opacity-65 px-[4px] font-medium'>Graphic Design</p>
                        
//                     </div>
//                     <p>by <span className='text-main underline'>@mounirlagzouli</span></p>
//                 </div> */}
//             {/* </div> */}
