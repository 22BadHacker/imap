import React from 'react'
import devlopor from '@/public/Gallerie/Developer.jpeg'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import icon from '@/app/'

const dots = Array.from({ length: 16 });

const Galerie = () => {
  return (
    <div className='w-full grid grid-cols-3 pt-10 gap-7'>
        <div className="flex flex-col relative h-[600px] gap-4 overflow-hidden rounded-md">
            <Image className='object-cover  saturate-200 h-full w-full shadow-sm' src={devlopor} alt='developer'/>
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent "></div>

            <div className="size-[46px] rounded-full bg-transparent backdrop-blur-[10px] absolute top-5 left-5 flex justify-center items-center rotate">
                {dots.map((_, i) => {
                const angle = (i / dots.length) * 2 * Math.PI;
                const x = 22 * Math.cos(angle); // radius
                const y = 22 * Math.sin(angle);
                return (
                    <div
                    key={i}
                    className="absolute  size-[3px] bg-[#fff] rounded-full"
                    style={{
                        top: `calc(50% + ${y}px - 2px)`,
                        left: `calc(50% + ${x}px - 2px)`
                    }}
                    />
                );
                })}

                <Image src='' alt='icon' />
            </div>

            <div className="flex flex-col w-full h-full items-start justify-end gap-1 p-4 absolute top-0 left-0">
                <div className="w-10 h-1 bg-main2"></div>
                <p className='text-[#fff] text-[25px]  font-bold'>Développement informatique</p>
                <h5 className='text-white text-[14.5px] leading-tight max-w-[350px]'>Une formation pratique pour apprendre à concevoir et développer des applications web</h5>

                <div className="flex w-full  gap-3 items-center pt-5">
                    <p className='text-white text-[19px] font-semibold'>Voir Plus</p>
                    <p className='text-white text-[20px] font-semibold px-3 bg-main2 rounded-full'><LiaLongArrowAltRightSolid /></p>
                </div>
                <div className=" absolute right-2 bottom-2 h-10 w-1 bg-white"></div>
            </div>
        </div>
       
    </div>
  )
}

export default Galerie
