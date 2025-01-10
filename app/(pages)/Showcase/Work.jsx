import Image from 'next/image'
import React from 'react'
import pic1 from '../../Assets/Work/Nike.webp'
import pic2 from '../../Assets/Work/port2.webp'

const Work = () => {
  return (
    <div className='w-screen h-auto max-w-[1450px] px-5 px pt-[150px] mx-auto grid grid-cols-1 gap-[40px]'>

        <div className="w-full flex justify-center items-center gap-4">
            <p className='border-[.5px] border-black/80 text-[13px] uppercase px-4 py-3 rounded-full font-[500]'>Informatique</p>
            <p className='border-[.5px] border-black/80 text-[13px] uppercase px-4 py-3 rounded-full font-[500]'>Comptabilte</p>
            <p className='border-[.5px] border-black/80 text-[13px] uppercase px-4 py-3 rounded-full font-[500]'>bureautique</p>
            <p className='border-[.5px] border-black/80 text-[13px] uppercase px-4 py-3 rounded-full font-[500]'>Infographie</p>
            <p className='text-main font-semibold underline italic'>& More...</p>
        </div>

        <div className="w-full grid grid-cols-1 text-center ">
            {/* <h1 className='text-[100px] num leading-snug font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] to-main'>Présentation des Projets  de nos étudiants </h1> */}
            <h1 className='text-[100px] num leading-snug font-bold '>Présentation des Projets  de nos étudiants </h1>
        </div>


        <div className="grid w-full grid-cols-4 pt-10 gap-4">
            <div className="w-full h-auto flex flex-col gap-4">
                <Image src={pic1} className='object-cover w-full h-full saturate-150' width={500} height={500} alt='Nike'/>
                {/* <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <p className='text-[15px]  bg-main text-white bg-opacity-65 px-[4px] font-medium'>Infographie</p>
                        <p className='text-[15px]  bg-main text-white bg-opacity-65 px-[4px] font-medium'>Graphic Design</p>
                        
                    </div>
                    <p>by <span className='text-main underline'>@mounirlagzouli</span></p>
                </div> */}
            </div>

            <div className="w-full col-span-2 h-auto flex flex-col gap-4">
                <Image src={pic2} className='object-cover w-full h-full saturate-[1.2]' width={500} height={500} alt='Nike'/>
                {/* <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <p className='text-[15px]  bg-main text-white bg-opacity-65 px-[4px] font-medium'>Infographie</p>
                        <p className='text-[15px]  bg-main text-white bg-opacity-65 px-[4px] font-medium'>Graphic Design</p>
                        
                    </div>
                    <p>by <span className='text-main underline'>@mounirlagzouli</span></p>
                </div> */}
            </div>
        </div>
        
    </div>
  )
}

export default Work
