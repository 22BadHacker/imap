// 'use client'
import React from 'react'
import Head from 'next/head';
import Hero from '../component/Hero';
import Landing from '../component/Landing';
import Last from '../component/BiigButton';
import Marquee from '../component/Marquee';
import Programmes from '../component/Programmes';

// import Hero from '../Heroo/Hero';


const page = () => {
  return (

   <>
      <Head>
        <title>𝗜𝗠𝗔𝗣 | Institut des Métiers Appliqués Privée</title>
        <meta
          name="description"
          content="Formations professionnelles en design, développement web, et métiers du digital au Maroc. Rejoignez IMAP pour apprendre un métier d’avenir."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ima-privee.vercel.app/" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "𝗜𝗠𝗔𝗣 – Institut des Métiers Appliqués Privée",
              "url": "https://ima-privee.vercel.app/",
              "description":
                "Formations professionnelles en développement, design, comptabilité, bureautique, et plus.",
              "publisher": {
                "@type": "EducationalOrganization",
                "name": "𝗜𝗠𝗔𝗣 – Institut des Métiers Appliqués Privée"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Maroc"
              }
            }),
          }}
        />
      </Head>

      <div className="w-full h-auto  pb-[100px]">

         <Hero/>
         {/* <Landing />
          <div className="w-full h-auto ">
            <Programmes />

          </div> */}

         <div className="pt-[120px]">
            <Last url='Contact/#rejoignez-nous' name='Rejoignez-nous' title='Plus qu’une institut, un tremplin vers l’avenir professionnel.'/>
         </div>
      </div>
    </>
  )
}

export default page
