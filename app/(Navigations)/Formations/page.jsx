import React from 'react'
import Formation from './Formation'
import Last from '@/app/component/BiigButton';
import FAQAccordion from '@/app/component/FAQAccordion';
import Banner from '@/app/component/Banner';
import Head from 'next/head';


export const metadata = {
  title: "𝗜𝗠𝗔𝗣 — Formations",
  description: "IMAP.ma",
};

const page = () => {
  return (
    <>
    <Head>
        <title>Formations – IMAP</title>
        <meta
          name="description"
          content="Nos formations professionnelles en développement web, design graphique, bureautique, et plus."
        />
        <link rel="canonical" href="https://ima-privee.vercel.app/Formations" />
      </Head>
    
      <div className='w-full h-auto  pb-[100px] '>

      
        <Formation />

        <div className="pb-[100px]
        ">

          <FAQAccordion /> 
        </div>
        <Last url='Contact/#rejoignez-nous' name='rejoignez-nous' title='Tout ce dont vous avez besoin pour commencer à construire votre avenir.'/>
    </div>
    </>
  )
}

export default page



