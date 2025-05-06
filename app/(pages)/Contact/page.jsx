import React from 'react'
import Contact from './Contact'
import Last from '@/app/component/Last';
import Link from 'next/link';
// import Sign from './Sign'

export const metadata = {
  title: "𝗜𝗠𝗔𝗣 | Contact",
  description: "IMAP.ma",
};


const page = () => {
  return (
    <div className='w-full flex flex-col gap-[80px] relative h-auto  pb-[160px]'>
        <Contact />
        {/* <Link  href={'/Showcase'}  className='relative z-[5] '>
        </Link> */}
          <Last url='Showcase' name='Travaux d’élèves' title='Des compétences, de l’expérience, un vrai tremplin.'/>
       
    </div>
  )
}

export default page
