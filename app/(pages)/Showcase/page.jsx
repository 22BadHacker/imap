import React from 'react'
import Work from './Work1'
import Last from '@/app/component/Last';
// import { MagneticNested } from '@/app/component/Magnet2';
// import Link from 'next/link';
// import Last from '@/app/component/Last';


export const metadata = {
  title: "𝗜𝗠𝗔𝗣 | Showcase",
  description: "IMAP.ma",
};
const page = () => {
  return (
    <div className='w-full  h-auto  pb-[100px]'>
        <Work />
        <Last />
       
    </div>
  )
}

export default page
