import React from 'react'
import Work from './Work'
import Last from '@/app/component/BiigButton';
// import { MagneticNested } from '@/app/component/Magnet2';
import Link from 'next/link';
import Head from 'next/head';
// import Last from '@/app/component/Last';


export const metadata = {
  title: "𝗜𝗠𝗔𝗣 — Showcase",
  description: "IMAP.ma",
};
const page = () => {
  return (
    <>
    <Head>
        <title>Showcase – IMAP</title>
        <meta
          name="description"
          content="Contactez IMAP pour plus d'informations sur nos formations ou pour vous inscrire."
        />
        <link rel="canonical" href="https://ima-privee.vercel.app/Showcase" />
      </Head>
    <div className='w-full  h-auto  pb-[100px]'>
        <Work />
       
          <Last url='Contact/#rejoignez-nous' name='rejoignez-nous' title='Bien plus qu’un lieu d’apprentissage — une vraie impulsion pour votre avenir.'/>
    </div>
    </>
  )
}

export default page
