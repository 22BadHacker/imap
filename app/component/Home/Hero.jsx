import React from 'react'
import img from '../../Assets/Work/fc02880f.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='grid w-full h-[820px] grid-cols-5 grid-rows-3 border-[.5px] border-black/20'>
        <div className="w-full h-full border-r-[.5px] border-b-[.5px] border-black/50">
            <Image src={img} alt='' className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default Hero
