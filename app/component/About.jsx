import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1450px]  px-5 mx-auto  w-full h-auto relative flex flex-col  py-[120px]  gap-10'>
      <h1 className=' max-w-[400px] font-morir text-[40px] flex text-wrap leading-[1.2] font-[800] opacity-90'>
          {/* Ensemble, allons plus loin. */}
      </h1>
      <div className="gap-[50px] flex-wrap flex justify-between  w-full">
        <div className="flex flex-col border-t-[.5px] border-[#c4cede]">
            <p className='text-[17.5px] relative top-7 font-semibold'>Fondée <span className='text-main2'>*</span></p>
            <p className='text-[150px] font-sans font-[800] leading-tight '>2016</p>
        </div>
        <div className="flex flex-col border-t-[.5px] border-[#c4cede">
            <p className='text-[17.5px] relative top-7 font-semibold'>Formations <span className='text-main2'>*</span></p>
            <p className='text-[150px] font-sans font-[800] leading-tight'>08</p>
        </div>
        <div className="flex flex-col border-t-[.5px] border-[#c4cede">
            <p className='text-[17.5px] relative top-7 font-semibold'>Étudiants <span className='text-main2'>*</span></p>
            <p className='text-[150px] font-sans font-[800] leading-tight'>100 <span className='text-[18px]'>/ année</span></p>
        </div>

      </div>
    </div>


  )
}

export default About
