import Image from 'next/image';
import React from 'react'
import Form2 from '../component/Form';
import Social from '../component/Social';
// import Logoo from '@/public/IMAPLogo/vertical_logo.svg';



export const metadata = {
    title: " 𝗜𝗠𝗔𝗣 -– inscription",
    description: "IMAP.ma",
  };

const page = () => {
  return (

    <>

      <div className='w-full relative pt-2 gap-8 h-auto overflow-y-scroll flex items-end justify-center bg-[#d3d8e1]  overflow-x-hidden'>

        <div className="flex flex-col gap-[70px] md:gap-[70px] w-full items-center justify-center max-w-[1100px] mx-auto px-6">

          <div className="w-full flex-col pt-2 flex items-center justify-center">
            
            <h1 className='uppercase leading-tight px-10 text-[6.3vw] lg:text-[71px] tracking-normal font-[800] md:leading-[70px] font-sans text-[#15161b]'>contact.imap@gmail.com</h1>
            <h1 className='uppercase text-[6.3vw] lg:text-[71px] tracking-tight font-[800] leading-tight md:leading-[70px] font-sans text-[#15161b]'>+212 (0)6 04 24 83 95</h1>
          </div>


          <Form2/>



          <div className="lg:flex w-full lg:flex-row lg:justify-between grid grid-cols-1 gap-6 md:grid-cols-2 items-center py-6 pt-20 ">
            {/* <div className=""></div> */}
            <p className=' cursor-pointer   text-black   relative font-semibold  sm:text-[17px]'>&copy; 2025 <span className='font-[800]'>IMAP</span> | Institut des Métiers Appliqués Privé</p>
            <Image src={'/IMAPLogo/vertical_logo.svg'} width={500} height={100} alt='' className='w-[350px]' />
          </div>

        </div>

          
      </div>

      <Social />
    </>
  )
}

export default page



