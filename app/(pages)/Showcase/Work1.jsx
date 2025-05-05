'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import pics1 from '../../Assets/Work2/Nike.webp'
import pics4 from '../../Assets/Work2/Moroc.webp'
import pics5 from '../../Assets/Work2/bussinessCard.webp'
import pics3 from '../../Assets/Work2/drag-&-drab-notes.webp'
import pics10 from '../../Assets/Work2/Sans-titre-1.webp'
import pics13 from '../../Assets/Work2/mag.webp'
import pics8 from '../../Assets/Work2/sign.webp'
import pics11 from '../../Assets/Work2/Mockup.webp'
import pics12 from '../../Assets/Work2/card2.webp'
import { AiOutlineClose } from 'react-icons/ai'
import { TfiArrowRight, TfiArrowTopRight } from "react-icons/tfi";
import { HiOutlineArrowLongRight } from 'react-icons/hi2'

const imgs = [
    {name:'Nike Poster', desc:['Photoshope', 'Infographie'], src: pics1, category: 'Infographie' },
    {name:'Sign Up Page', desc:['HTML', 'CSS', 'Informatique'], src: pics8, category: 'Informatique' },
    {name:'Be Point PROD', desc:['Illustrator', 'Business Card', 'Infographie'], src: pics5, category: 'Infographie' },
    {name:'Drag & Drop Notes', desc:['HTML', 'CSS','JS', 'Informatique'], src: pics3, category: 'Informatique' },
    {name:'Notification Page', desc:['HTML', 'CSS', 'Informatique'], src: pics10, category: 'Informatique' },
    {name:'Magazine Cover', desc:['Photoshope', 'Infographie'], src: pics13, category: 'Infographie' },
    {name:'Moroccan Affiche', desc:['Photoshope', 'Infographie'], src: pics4, category: 'Infographie' },
    {name:'Portfolio Website', desc:['React', 'Tailwind Css', 'Informatique'], src: pics11, category: 'Informatique' },
    {name:'Business Card', desc:['Illustrator', 'Infographie'], src: pics12, category: 'Infographie' },
]

const Work = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const filteredImgs = selectedCategory === 'All'
        ? imgs
        : imgs.filter(img => img.category === selectedCategory)

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
                <div className="flex gap-3 flex-col pb-10">
                    {/* {
                        [...Array(10)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] z-[1] opacity-30 odd:bg-red-500 rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
                    } */}
                    <p className='font-semibold uppercase text-[14.5px] tracking-wider font-metro text-main2 flex gap-1 items-center'>
                        <span className='blink'></span> Showcase
                    </p>
                    <h1 className='sm:text-[60px] text-[#1f1f1f] font-morir text-[50px] flex text-wrap leading-snug font-bold opacity-90'>
                        Galerie des Projets de<br />nos futurs ingénieurs
                        
                    </h1>
                </div>

                {/* <div className="flex w-full justify-end pt-20 pb-10 z-[20]">
                    <div className="flex items-center gap-4">
                        {['All', 'Informatique', 'Genie Civil', 'Bureautique', 'Infographie'].map((item, i) => (
                            <p
                                key={i}
                                onClick={() => setSelectedCategory(item)}
                                className={`cursor-pointer text-[14.5px] tracking-[.4px] rounded-full px-6 py-3 border-[1.5px] border-black/60 font-metro font-semibold ${
                                    selectedCategory === item ? 'bg-black text-white' : ''
                                }`}
                            >
                                {item}
                            </p>
                        ))}
                    </div>
                </div> */}

                <div className="grid  md:grid-cols-3 grid-cols-2 gap-2 md:gap-3 mt-12 z-20">
                    {filteredImgs.map((items, i) => (
                        <div
                            key={i}
                            className='w-full shadow-sm rounded-sm first:mt-2 h-full gap-3 relative mt-2 cursor-pointer' 
                            onClick={() => openModal(items.src)}
                        >
                            <Image
                                alt=''
                                className='w-full shadow-md z-30 first:mt-0 h-full object-cover md:mt-3'
                                src={items.src}
                            />

                            <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[20px] bg-black/20 flex justify-start p-6 items-end   opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
                               
                                <div className="absolute top-0 left-0 text-black bg-white px-3 tracking-wide py-1 uppercase font-semibold text-[14px] ">/ {items.category}</div>
                                <div className="flex flex-col gap-1 pt-2 ">
                                    <span className=' w-fit text-white  bg-main2 px-4 py-1 tracking-wide  flex items-center justify-center rounded-full text-[12px]'>Voir l’aperçu</span> 
                                    <h1 className='md:text-[45px] leading-[44px] py-1 font-[500] text-[22px]  font-metro  text-white'>{items.name}.</h1>
                                    <p className='md:text-[13px] text-[12px] text-white font-metro gap-2 flex md:gap-3 flex-wrap'>{Array.isArray(items.desc) ? items.desc.map((item, i) => (<span className='border-white border-[1px] px-3 shadow-md py-1 rounded-full' key={i}>{item}</span>)) : items.desc}</p>

                                </div>

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
                            className="max-w-[90vw] max-h-[90vh] object-contain  drop-shadow-[.5px_.5px_.25px_#fff] "
                        />
                        <button
                            onClick={closeModal}
                            className="absolute rounded-full size-11 flex items-center justify-center hover:bg-white bg-main2 -top-8 right-0 duration-200 rotate-[45deg] hover:rotate-[180deg] hover:scale-[1.1] shadow-md  hover:text-main2 text-white text-3xl font-bold"
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


// {/* <div className="absolute top-0 left-0 w-full h-full backdrop-blur-[20px] bg-black/20 flex justify-center  opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
//                                 <div className="flex flex-col gap-0 pt-2">
//                                     {[...Array(6)].map((_, index) => (
//                                         <h1 key={index} className='md:text-[2.9vw] font-[800] text-[18px] leading-tight font-poppins text-white'>
//                                             {items.name}.
//                                         </h1>
//                                     ))}
//                                 </div>
//                             </div> */}