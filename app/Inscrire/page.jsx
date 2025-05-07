import Image from 'next/image';
import React from 'react'
// import img from '../Assets/Work2/colors.jpeg'
import img from '../Assets/Work2/hand2.webp'
import logo from '../Assets/IMAPLogo/IMAP1.svg'
import Form from '../component/Form';
import Form2 from '../component/Form';
import { MdOutlineClose } from 'react-icons/md';
import Preloader from '../component/Preloader';


export const metadata = {
    title: "𝗜𝗠𝗔𝗣 | S'inscrire",
    description: "IMAP.ma",
  };

const page = () => {
  return (

    <>
    {/* <Preloader /> */}
      <div className='w-full relative pt-20 gap-8 h-auto pb-[140px] overflow-y-scroll flex items-end justify-center bg-[#d3d8e1]  '>

          {/* <div className="flex text-[20px] tracking-wide font-normal  gap-2 uppercase items-center fixed top-10 right-10">
          <MdOutlineClose className='text-[20px] opacity-90'/>
          close
          </div> */}
        <div className="flex flex-col gap-[100px] w-full items-center justify-center max-w-[1100px] mx-auto px-6">

          <div className="w-full flex-col pt-2 flex items-center justify-center">
            <h1 className='uppercase text-[71px] tracking-normal font-[800] leading-[70px] font-sans text-[#15161b]'>contact.imap@gmail.com</h1>
            <h1 className='uppercase text-[71px] tracking-tight font-[800] leading-[70px] font-sans text-[#15161b]'>+212 (0)6 04 24 83 95</h1>
          </div>


          <Form2/>

        </div>

          
      </div>
    </>
  )
}

export default page



