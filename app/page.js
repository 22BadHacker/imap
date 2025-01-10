// 'use client'
import React from 'react'
import Nav from './component/Nav'
import pic from './Assets/black-background-with-fabric-texture_23-2149872525.avif'
import Image from 'next/image'
import Social from './component/Social'

const page = () => {
  return (
    <div className='w-screen z-[1] bg-[#e4ebf5] relative h-screen pb-0 overflow-y-scroll overflow-x-hidden'>

      <div className="fixed z-[2] top-0 left-0 ">
        <div className="blur-[150px] opacity-65 saturate-200 w-[100px] rounded-full  absolute top-0 left-[100px] h-[800px] -rotate-45 bg-red-500"></div>
        <div className="blur-[140px]  opacity-55 saturate-200 w-[100px] rounded-full absolute top-[100px]  left-[100px] h-[500px] -rotate-45 bg-blue-600">
        </div>
        {/* <Image src={pic} alt='' width={200} height={200} className=' absolute object-cover top-20 left-20' /> */}

      </div>

      <div className="max-w-[1450px] px-5 px pt-[13px] mx-auto w-full h-auto">

        {/* <header>
            <Nav />
        </header> */}


      </div>
    </div>
  )
}

export default page
