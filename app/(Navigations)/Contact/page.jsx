import React from 'react'
import Contact from './Contact'
import Last from '@/app/component/BiigButton';
import Link from 'next/link';
import Head from 'next/head';
// import Sign from './Sign'

export const metadata = {
  title: "𝗜𝗠𝗔𝗣 -- Contact",
  description: "IMAP.ma",
};


const page = () => {
  return (
    <>
      <Head>
        <title>Contact – IMAP</title>
        <meta
          name="description"
          content="Contactez IMAP pour plus d'informations sur nos formations ou pour vous inscrire."
        />
        <link rel="canonical" href="https://ima-privee.vercel.app/Contact" />
      </Head>
      <div className='w-full flex flex-col gap-[80px] relative h-auto  pb-[160px]'>
          <Contact />
          <Last url='Contact/#rejoignez-nous' name='rejoignez-nous' title='Des compétences, de l’expérience, un vrai tremplin.'/>
        
      </div>
    </>
  )
}

export default page
