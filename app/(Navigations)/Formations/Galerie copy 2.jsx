import React, {useState} from 'react'
import devlopor from '@/public/Gallerie/Developer.jpeg'
import Image from 'next/image'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'
// import logo from '@/public/IMAPLogo/vertical_logo.svg'

import { Gallerie } from '@/Data/Data'
import Banner from '@/app/component/Banner'


const Galerie = () => {
 

  return (
    <div className='w-full grid grid-cols-1 pt-12 '>
        {/* <div className="w-full overflow-hidden  h-auto">
                        
          <Banner />
          </div> */}
        {Gallerie.map((item, i) => (
            <div key={i} className="py-6  grid grid-cols-3 gap-20 first:border-t-[1.4px] border-b-[1.4px] border-y-[#733b3b]">
              <div className="flex  items-start gap-8 text-[32px] font-sans max-w-[400px] font-bold leading-tight text-left   relative -top-1 ">
                    <span className=' text-[35px] h-fit relative -top-1 font-[800] tracking-wide text-str text-gray-800'>0{i+1}</span>
                    {item.formation}
              </div>

              <Image src={item.src} alt='devlopor' width={300} height={300} className='size-[400px] saturate-150 object-cover rounded-lg shadow-lg '/>

              <div className="flex justify-between h-full flex-col">
                <p className='font-sans text-[18px] font-semibold  leading-[1.40] relative -top-1'>{item.desc}</p>

                <div className="flex border-main2 w-fit text-main2 border-[1px] hover:bg-main2 hover:text-white duration-200 ease-in-out cursor-pointer px-5 rounded-full py-3  items-center gap-2 font-semibold text-[14.5px]">
                  Découvrir davantage
                  <LiaLongArrowAltRightSolid  className='text-[20px] relative top-[1px]'/>

                </div>

              </div>

            </div>

        ))}
           

       
    </div>
  )
}

export default Galerie




// <div className="grid grid-cols-2 grid-rows-2 gap-4">
//             <div className="h-[450px] flex-col gap-4 uppercase text-[30px] font-bold leading-snug text-center flex justify-center items-center p-3 text-bold bg-[#f5f9ff] relative rounded-lg shadow-sm border-gray-200 border-[.5px]">
//                 <Image className='w-[100px]' height={200} width={200} src='/IMAPLogo/Vertical_logo.svg' alt='IMAP'/>
//                 Développement informatique
//             <span className=' text-[25px] absolute top-3 left-3 text-str'>01</span>
//             </div>

//         </div> 