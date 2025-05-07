import React from 'react'
import Contact from './Contact'
import Last from '@/app/component/BiigButton';
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
        <Last url='Showcase' name='rejoignez-nous' title='Des compétences, de l’expérience, un vrai tremplin.'/>
       
    </div>
  )
}

export default page
