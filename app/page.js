// 'use client'
import React from 'react'
import Image from 'next/image'
import Hero from './component/Home/Hero'
// import bg from './Assets/Work/bg.mp4'


const page = () => {
  return (
    <div className='w-full z-[-1] bg-[#e4ebf5] relative h-full pb-0  '>
      <div className="w-screen h-screen abject-cover">
          {/* <iframe src={bg} autoPlay loop /> */}
      </div>

      {/* <div className="fixed z-[2] top-0 left-0 ">
        <div className="blur-[150px] opacity-65 saturate-200 w-[100px] rounded-full  absolute top-0 left-[100px] h-[800px] -rotate-45 bg-red-500"></div>
        <div className="blur-[140px]  opacity-55 saturate-200 w-[100px] rounded-full absolute top-[100px]  left-[100px] h-[500px] -rotate-45 bg-blue-600">
      </div>
       

      </div> */}

      <div className="max-w-[1450px] px-5 px pt-[13px] mx-auto w-full h-auto">

       <section>
          {/* <Hero /> */}
       </section>


      </div>
    </div>
  )
}

export default page
