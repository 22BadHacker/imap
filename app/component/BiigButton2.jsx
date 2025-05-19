import Link from 'next/link'
import React from 'react'
// import { MagneticNested } from './Magnet2'
import { Magnetic } from '@/components/ui/magnetic'

const Buttoon = ({name, url}) => {
  const springOptions = { bounce: 0.1 };
  return (
    <>
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
    </>
  )
}

export default Buttoon
