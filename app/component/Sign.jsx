'use client'
import React, {useEffect, useState} from 'react'
import Logo from './Logo1.svg'
import Image from 'next/image'
import { IoIosSend } from "react-icons/io";
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


const Form = ({name}) => (
    <div className="flex flex-col   relative  gap-1">
        <label htmlFor="" className='font-normal text-main uppercase text-[14px] tracking-wide'>{name} <span className='text-red-500'>*</span></label>
        <input type="text" className='outline-none duration-200 focus:shadow-[2px_2px_.5px_rgb(0,0,0,.1)] p-[5.5px] bg-[#e4ebf5] text-[14.5px] text-black/70' />
        
    </div>
)

const selecte = ['Informatique', 'Genie civil', "Bureautique", 'Comptabilité', 'Infographie','Marketing','Logistique & management', 'Gestion des entreprises' ,'La Langue Anglais' ]


const Sign = () => {

    const [select, setSelcted] = useState('')
    const [open, setOpen] = useState(false)

   
  return (
    <div  className='w-screen absolute top-0 left-0 h-screen '>

        
        <motion.form initial={{opacity:0, filter: 'blur(10px)'}} transition={{duration: .2, ease: 'easeInOut', type: 'tween'}} animate={{opacity: 1, filter: 'blur(0)'}} action="" className="w-[500px] z-30  border-[#1e539e] border-[.5px] h-[600px] flex flex-col gap-2 bg-[#f8f9fb]   overflow-hidden absolute right-[155px] top-[90px]">
        {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
        <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1.5px,transparent_1.5px),linear-gradient(to_bottom,#8080800a_1.5px,transparent_1.5px)] bg-[size:14px_24px]"></div>

        {/* <div className="absolute -bottom-2 right-10 blur-[150px] bg-red-500 w-[100px] rounded-full -rotate-45 h-[200px]"></div> */}
            
            <h1 className='text-2xl  border-b-[1px] border-main font-semibold text-white bg-main py-5  text-center'>Inscrivez-vous maintenant</h1>
            {/* <Badge className="mb-4 px-2 py-1 bg-main text-white" variant="secondary">
            Institut des Métiers Appliqués Privée
            </Badge> */}
            
        <div className="flex flex-col gap-6 p-4">

            <div className="grid grid-cols-2 gap-2">
                <Form name='Nom'/>
                <Form name='Prénom'/>
            </div>
                
           <Form name='telephone'/>
           {/* <Form name='formationJe suis intéressé par'/> */}

           <div className="flex flex-col   relative  gap-1">
            <label htmlFor="" className='font-normal text-main uppercase text-[14px] tracking-wide'>Je suis intéressé par <span className='text-red-500'>*</span></label>
            
            <div onClick={()=> setOpen(!open)} className="w-full text-[14.5px] text-black/70 duration-200 hover:shadow-[2px_2px_.5px_rgb(0,0,0,.1)] flex  items-center px-1 h-[32px] relative bg-[#e4ebf5]">{select} {open ? <MdOutlineKeyboardArrowUp className='absolute right-2'/> : <MdOutlineKeyboardArrowDown className='absolute right-2'/>}
                {
                    open && (
                        <div className="w-full flex flex-col    bg-[#e4ebf5]/30 backdrop-blur-[20px] absolute top-10 z-50 left-0  h-[180px] overflow-y-scroll">
                            {
                                selecte.map((item, i) => 
                                <div className='flex flex-col'>
                                    <p key={i} onClick={e=> setSelcted(e.target.textContent)} className='p-2 px-2 cursor-pointer duration-200 hover:bg-white/30 text-main font-medium'>{item}</p>
                                    <div className="w-full h-[.4px] opacity-20 bg-main"></div>
                                </div>
                                )
                            }
                        </div>
                    )
                }

            </div>
            
        
            </div>



           <div className="flex flex-col   relative  gap-1">
                <label htmlFor="" className='font-normal text-main uppercase text-[14px] tracking-wide'>Vous avez des questions ? <span className='text-green-500'>*</span></label>
                <textarea type="text" className='outline-none duration-200 focus:shadow-[2px_2px_.5px_rgb(0,0,0,.1)] min-h-[120px] max-h-[110px] p-[5.5px] bg-[#e4ebf5] text-[14.5px] text-black/70' />
                
            </div>
            {/* <div className="w-full flex justify-center"></div> */}
            <button className='flex btn relative overflow-hidden items-center gap-2 w-max text-white  px-7  py-3 rounded-full font-semibold'>Envoyer <IoIosSend/> </button>
            

        </div>
        </motion.form>
        
    </div>
  )
}

export default Sign
