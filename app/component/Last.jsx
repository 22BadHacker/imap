import Link from 'next/link'
import React from 'react'
import { MagneticNested } from './Magnet2'

const Last = () => {
  return (
    <>
       <div className="flex flex-col relative w-full gap-12 py-20  items-center text-center justify-center  h-auto max-w-[1450px]  px-5 mx-auto ">

        {/* <div className="w-10 h-[1px] bg-main2 absolute top-0"></div> */}
        <div className="absolute left-5 top-0 size-6 border-l-[2.5px] border-main2 border-t-[2.5px]"></div>
        <div className="absolute right-5 top-0 size-6 border-r-[2.5px] border-main border-t-[2.5px]"></div>
        <div className="absolute right-5 bottom-0 size-6  border-r-[2.5px] border-main2 border-b-[2.5px]"></div>
        <div className="absolute left-5 bottom-0 size-6 border-l-[2.5px] border-main border-b-[2.5px]"></div>


          <div className="absolute unset z-[2]  bg-red-500 w-[60%] h-[80px]  blur-[60px] rotate-[30deg]"></div>
          <div className="absolute unset z-[2]  bg-blue-500 w-[60%] h-[80px]   blur-[60px] rotate-[-30deg]"></div>
          <p></p>
            <h1 className='font-bold z-[3] opacity-90 text-str leading-[1.08] font-sans text-[90px] max-w-[1300px]'>Bien plus qu’un lieu d’apprentissage — une vraie impulsion pour votre avenir.</h1>
            {/* <h1 className='font-bold z-[3] opacity-90 text-str leading-[1.1] font-sans text-[90px] max-w-[1300px]'>C’est plus qu’une formation. C’est un nouveau départ.</h1> */}

            <Link href={'/Contact/#rejoignez-nous'}  className="size-[182px] z-[5] out bg-transparent backdrop-blur-[2px] bg-black/05 flex justify-center items-center rounded-full border-main2 border-dashed border-[.5px]">
                <MagneticNested/>
              </Link>

        </div>
    </>
  )
}

export default Last
