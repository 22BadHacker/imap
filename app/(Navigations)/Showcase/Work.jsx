'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { TfiArrowRight, TfiArrowTopRight } from "react-icons/tfi";
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { WorkGalerie } from '@/Data/Data'
import icon from '@/public/IMAPLogo/icon.svg'


const dots = Array.from({ length: 18 });

const Dots = () => {

    return(
        <>

            <div  className="size-[45px] z-[1] cursor-pointer rounded-full backdrop-blur-[5px] absolute top-5 left-5 flex justify-center items-center rotate">
                    {dots.map((_, i) => {
                    const angle = (i / dots.length) * 2 * Math.PI;
                    const x = 22 * Math.cos(angle); // radius
                    const y = 22 * Math.sin(angle);
                    return (
                        <div
                        
                        key={i}
                        className="absolute z-[2] translate-x-1/2 translate-y-1/2 cursor-pointer hover:bg-main2  size-[2.5px] bg-[#fff] rounded-full"
                        style={{
                            top: `calc(50% + ${y}px - 2px)`,
                            left: `calc(50% + ${x}px - 2px)`
                        }}
                        />
                    );

                    })}
                    <div  className="w-full cursor-pointer z-[4] h-full rounded-full absolute top-0 left-0 "></div>

                </div>
        </>
    )
}


const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const filteredImgs = selectedCategory === 'All'
        ? WorkGalerie
        : WorkGalerie.filter(img => img.category === selectedCategory)

    const openModal = (img) => {
        setSelectedImage(img)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedImage(null)
    }

    return (
        <div className='w-full container h-auto max-w-[1450px] sm:px-5 px-5 mx-auto grid grid-cols-1 gap-[40px]'>

            <div className="w-full coontain relative h-auto py-[120px] z-[1]">
                <div className="flex gap-3 flex-col pb-[120px] ">
                   
                    <p className='font-semibold uppercase text-[14.5px] tracking-wider font-metro text-main2 flex gap-1 items-center'>
                        <span className='blink'></span> Showcase
                    </p>
                    <h1 className='sm:text-[60px] text-[#1f1f1f] max-w-[750px] font-morir text-[40px] flex text-wrap leading-tight font-bold opacity-90'>
                        Galerie des Projets de nos futurs ingénieurs
                        
                    </h1>
                </div>

               

                <div className="grid  md:grid-cols-3 grid-cols-2 gap-2 md:gap-3 pt-12 z-20">
                    {filteredImgs.map((items, i) => (
                        <div
                            key={i}
                            className='w-full shadow-sm rounded-sm first:mt-2 h-full gap-3 relative mt-2 cursor-pointer' 
                            onClick={() => openModal(items.src)}>
                            <Image
                                alt=''
                                className='w-full saturate-[1.3]  z-30 first:mt-0 h-full object-cover md:mt-3'
                                src={items.src}
                                loading='lazy'
                            />

                            <Dots />



                            <div className="absolute z-[1] top-0 left-0 w-full h-full  flex justify-start px-6 pb-2 items-end   opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">

                            <div class="absolute z-[-1] inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 w-full h-full"></div>
            
                                <div className="flex flex-col gap-1 pt-0 ">
                                    <h1 className='md:text-[45px] leading-[44px] py-1 font-[500] text-[22px]  font-metro  text-white'>{items.name}.</h1>
                                    <p className='md:text-[11px]  text-[12px] text-white font-sans uppercase gap-2 flex md:gap-3 flex-wrap'>{Array.isArray(items.desc) ? items.desc.map((item, i) => (<span className='border-white border-dashed backdrop-blur-[5px] border-[1px] px-3 shadow-md py-1 rounded-full' key={i}>{item}</span>)) : items.desc}</p>z

                                </div>

                                {/* <Image src={icon} alt='icon' className='w-[25px] absolute bottom-3 right-4'/> */}

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black/70  backdrop-blur-[5px] flex items-center justify-center z-50">
                    
                    <div className="relative">
                        <Image
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-[90vw] saturate-[1.3] max-h-[90vh] object-contain  drop-shadow-[.5px_.5px_.25px_#fff] "
                        />
                        <button
                            onClick={closeModal}
                            className="absolute rounded-full size-11 flex items-center justify-center hover:bg-main2 border-white border-dashed border-[1px] -top-8 right-0  duration-200 hover:border-main2  hover:rotate-[180deg] hover:scale-[1.1] shadow-md  text-white/90 text-3xl font-bold"
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Work


