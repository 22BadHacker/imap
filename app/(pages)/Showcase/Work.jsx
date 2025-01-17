'use client'
import Image from 'next/image'
import React from 'react'
import pics1 from '../../Assets/Work2/Nike.webp'
import pics4 from '../../Assets/Work2/Moroc.webp'
import pics5 from '../../Assets/Work2/viic.svg'
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
    {src: pics8, alt:'',desc1:'Fronend', desc2:'Informatique',  name: "Sign Up Page"},
    {src: pics4, alt:'',  desc1:'Poster', desc2:'Photoshop', name: 'Maroc Affiche'},
    {src: pics3, alt:'', desc1:'Drag & Drop', desc2:'JavaScript', name: 'Informatique'},
    {src: pics10, alt:'', desc1:'Informatique', desc2:'Web Design', name: 'Notification'},
    // {src: pics5, alt:'', name: 'Victoria Logo', desc1:'Illustrator', desc2:'Logo Design',},
    // {src: pics9, alt:'', desc1:'Flyer', desc2:'Informatique', name: 'Headphones Flyer'},   
]


const Titlee=({title, desc1, desc2})=>(
    <div className="w-full gap-1 flex justify-between items-center flex-wrap">
        <p className='text-[25px] font-light opacity-90 flex gap-2 items-center'> <span className='size-[6px] bg-black/80 rounded-full'></span> {title}</p>
        
        <div className="flex gap-3 items-center flex-wrap">
            <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>{desc1}</span>
            <span className='text-[13.5px] px-3 py-1 border-black/10 bg-[#fafafa] border-[.5px] rounded-sm'>{desc2}</span>
        </div>
    </div>

)
const Work = () => {
  return (
    <div className='w-full container h-auto max-w-[1450px] sm:px-5  px-5 mx-auto grid grid-cols-1 gap-[40px]'>


       

        <div className="w-full coontain relative h-screen grid grid-row-[1fr_auto] items-center  py-[100px] gap-20 sm:justify-center text-center">

            {
                [...Array(20)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-60 odd:bg-[#c83642] rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
            }
                        
                
                       
            <h1 className='sm:text-[60px] relative md:top-[110px] font-morir text-[50px] flex text-wrap leading-snug font-bold opacity-90'>
                <Cursors />
                Galerie des Projets de <br/> nos futurs ingénieurs </h1>
            

            <div className="flex flex-col  items-center gap-10 relative  md:top-20">
            <p className='text-[19px] font-morir font-light'>Découvrez le travail de nos étudiants</p>
           
            {/* <TextLoopCustomVariantsTransition /> */}


            <motion.div animate={{y:20}} transition={{duration: .2, type: 'spring', stiffness: 20, damping: 10, ease: 'easeInOut', repeat: Infinity, repeatDelay: .1, repeatType: 'mirror'}} className="bg-[#2c2e30] z-[5] rounded-full text-[22px] text-white flex items-center justify-center  size-[45px]">
                <IoIosArrowRoundDown />

            </motion.div>


            </div>
        </div>
                        

                    <div className="w-full flex md:flex-row md:gap-0 gap-6 flex-col items-center justify-between">

                        <p className='flex gap-2 items-center font-mori1 text-[19px]'><span className='size-2 rounded-full bg-black/80'></span> Etudiant oeuvre</p>

                        <div className=" flex justify-center items-center gap-4 flex-wrap">


                            {list.map((item, i)=> <p key={i} className='border-[.5px] border-black/50 text-[12.5px] uppercase px-3 py-2 rounded-full font-normal'>{item}</p>)}
                        
                            <p className='text-main font-semibold underline italic'>& More...</p>
                        </div>
                    </div>


        <div className="column md:columns-3 columns-2  w-full  pt-10 gap-x-5 ">
           

                {
                    imgs.map((item, i) =>
                        <div key={i} className='flex pb-5 flex-col gap-2 relative overflow-hidden'>
                            
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

                <div className="flex flex-col gap-2 col-span-2 w-full h-auto pb-5">
                    <div className=' z-[1] flex  items-center justify-center  bg-black/90 overflow-hidden backdrop-blur-[100px]  w-full relative     '>
                        <Image src={logo} className='object-cover saturate-150 '  alt="MEGASOFT" />
                        <div className="w-[300px] opacity-100 h-[200px] z-[-5]  absolute right-[0px] blur-[150px] -top-0 bg-red-600 rounded-full"></div>
                        <div className="w-[300px] opacity-100 h-[200px] z-[-5]  absolute left-[0px] blur-[140px] -bottom-0 bg-blue-500 rounded-full"></div>

                    </div>

                    <Titlee title="Megasoft's Logo" desc1='Logo' desc2='Illustrator'/>
                        
                </div>



                <div className="flex flex-col gap-2  w-full h-auto pb-5">
                    <div className=' z-[1] flex  items-center justify-center  bg-black/90 overflow-hidden backdrop-blur-[100px]  w-full relative     '>
                        <Image src={pics9} className='object-cover saturate-150 '  alt="Headphones affiche" />
                    </div>
                    <Titlee title="Headphones affiche" desc1='Poster' desc2='Photoshop'/>
                        
                </div>

               
                <div className="flex flex-col gap-2  w-full h-auto pb-5">
                    <div className=' z-[1] flex  items-center justify-center  bg-black/90 overflow-hidden backdrop-blur-[100px]  w-full relative     '>
                        <Image src={pics12} className='object-cover saturate-150 '  alt="Illusion studio" />
                    </div>

                    <Titlee title="Illusion studio" desc1='Music Website' desc2='Web Design'/>
                       
                </div>

                <div className="flex flex-col gap-2  w-full h-auto pb-5">
                    <div className=' z-[1] flex  items-center justify-center  bg-black/90 overflow-hidden backdrop-blur-[100px]  w-full relative     '>
                        <Image src={pics11} className='object-cover saturate-150 '  alt="MEGASOFT" />
                    </div>
                    
                    <Titlee title="Portfolio projet" desc1='Portfolio' desc2='Web Design'/>
                       
                </div>
            
                <div className="flex flex-col gap-2  w-full h-auto pb-5">
                    <div className=' z-[1] flex  items-center justify-center  bg-[#239aad] overflow-hidden w-full relative     '>
                        <Image src={pics5} className='object-cover saturate-150 '  alt="Victoria's Logo" />
                        
                    </div>

                    <Titlee title="Victoria's Logo" desc1='Logo' desc2='Illustartor'/>
                       
                </div>

            
        </div>
        
    </div>
  )
}

export default Work



