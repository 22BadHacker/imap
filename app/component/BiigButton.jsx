import Link from 'next/link'
import React from 'react'
// import { MagneticNested } from './Magnet2'
import { Magnetic } from '@/components/ui/magnetic'

const Last = ({title, name, url}) => {
  const springOptions = { bounce: 0.1 };
  return (
    <>
       <div className="flex flex-col relative w-full gap-6 md:gap-12  pt-[150px] pb-[130px] items-center text-center justify-center  h-auto max-w-[1450px]  px-5 mx-auto ">
          
          <div className="absolute unset z-[2]  bg-red-500 w-[70%] h-[80px]  blur-[70px] rotate-[30deg]"></div>
          <div className="absolute unset z-[2]   bg-blue-500 w-[70%] h-[80px]   blur-[70px] rotate-[-30deg]"></div>
            <h1 className='font-bold text-[#1d1c1f] z-[3] text-[48px] sm:text-[50px] md:text-[70px] relative top-5 opacity-90  leading-[1.08] font-sans lg:text-[90px] max-w-[1300px]'>{title}</h1>
            {/* <h1 className='font-bold z-[3] opacity-90 text-str leading-[1.1] font-sans text-[90px] max-w-[1300px]'>C’est plus qu’une formation. C’est un nouveau départ.</h1> */}

            <Link href={`/${url}`} className='relative z-[5] '>
                 <Magnetic
                      intensity={0.2}
                      springOptions={springOptions}
                      actionArea='global'
                      range={200}
                    >
                      <div className="size-[182px] md:scale-100 sm:scale-[.9] scale-[.85] z-[5] out bg-transparent backdrop-blur-[2px] bg-black/05 flex justify-center items-center rounded-full relative top-4 border-main2 border-dashed border-[.5px]">
                        <button
                
                          
                          type='button'
                          className='size-[170px]  in font-sans rounded-full text-[18px]  font-medium duration-200 ease-in-out shadow-lg  bg-main2 text-white'
                        >
                          <Magnetic
                            intensity={0.1}
                            springOptions={springOptions}
                            actionArea='global'
                            range={200}
                          >
                            {name}
                          </Magnetic>
                        </button>
                      </div>
                    </Magnetic>
            </Link>

        </div>
    </>
  )
}

export default Last
