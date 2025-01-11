'use client'
import React, {useEffect, useState} from 'react'
// import Logo from './Logo1.svg'
import Image from 'next/image'
import { IoIosSend } from "react-icons/io";
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";


const Form = ({name}) => (
    <div className="flex flex-col   relative  gap-1">
        <label htmlFor="" className='font-normal text-main uppercase text-[14px] tracking-wide'>{name} <span className='text-red-500'>*</span></label>
        <input type="text" className='outline-none rounded-sm p-[5.5px] bg-[#fff] text-[14.5px] text-black/70' />
        
    </div>
)

const selecte = ['Informatique', 'Genie civil', "Bureautique", 'Comptabilité', 'Infographie', 'Langue Anglaise' ]


const Up = () => {

    const [select, setSelcted] = useState('')
    const [open, setOpen] = useState(false)

   
  return (
    <div  className='w-full '>
        <form  action="" className="w-full z-30   h-auto flex flex-col gap-2   rounded-md overflow-hidden p-2 ">
            
            
        <div className="flex flex-col gap-6 p-4">

            <div className="grid grid-cols-2 gap-2">
                <Form name='Nom'/>
                <Form name='Prénom'/>
            </div>
                
           <Form name='telephone'/>
           {/* <Form name='formationJe suis intéressé par'/> */}

           <div className="flex flex-col   relative  gap-1">
            <label htmlFor="" className='font-normal text-main uppercase text-[14px] tracking-wide'>Je suis intéressé par <span className='text-red-500'>*</span></label>
            
            <div onClick={()=> setOpen(!open)} className="w-full text-[14.5px] text-black/70 flex  items-center px-1 h-[32px] relative bg-[#fff]">{select} {open ? <MdOutlineKeyboardArrowUp className='absolute right-2'/> : <MdOutlineKeyboardArrowDown className='absolute right-2'/>}
                {
                    open && (
                        <div className="w-full flex flex-col    bg-[#fff]/100 backdrop-blur-[20px] absolute top-10 z-50 left-0  h-[180px] overflow-y-scroll">
                            {
                                selecte.map((item, i) => 
                                <div className='flex flex-col'>
                                    <p key={i} onClick={e=> setSelcted(e.target.textContent)} className='p-2 px-2 cursor-pointer duration-200 hover:bg-blue-500/10 text-main font-medium'>{item}</p>
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
                <textarea type="text" className='outline-none min-h-[120px] max-h-[110px] rounded-sm p-[5.5px] bg-[#fff] text-[14.5px] text-black/70' />
                
            </div>
            {/* <div className="w-full flex justify-center"></div> */}
            <button className='flex btn relative overflow-hidden items-center gap-2 w-max text-white  px-7  py-3 rounded-full font-semibold'>Envoyer <IoIosSend/> </button>
            

        </div>
        </form>
        
    </div>
  )
}

export default Up
