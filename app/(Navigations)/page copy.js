// 'use client'
import React from 'react'
import Head from 'next/head';
import Hero from '../component/Hero';
import About from '../component/About';
import Landing from '../component/Landing';




  <Head>
    <title>𝗜𝗠𝗔𝗣 -- Institut des Métiers Appliqués Privée</title>
    <meta name="description" content="A short, keyword-rich description of your site." />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://www.yourdomain.com" />
</Head>
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

          <Landing />
          
          <div className="w-full flex flex-col max-w-[1450px]  px-5 mx-auto gap-2 pt-12  h-auto">

              <div className="flex items-center text-md gap-1  uppercase font-mono">01 <span className='w-4 h-[1.5px] relative top-1 bg-black'></span>à propos de nous</div>

              <h1 className=' max-w-[600px] font-sans text-[45px] flex text-wrap leading-[1.2] font-[700] text-main2 opacity-90'>
                  Ensemble, allons plus loin.
              </h1>
          </div>

          <div className="w-full grid grid-cols-2 max-w-[1450px]  px-5 mx-auto gap-20  h-auto">


          <div className=" relative flex flex-col pt-[40px]  gap-12">

          <h5 className='text-[19px] font-medium font-serif leading-snug '>IMAP est un centre de formation basé au cœur de Casablanca, au Maroc. Ici, on accueille celles et ceux qui veulent apprendre autrement, se former à un métier concret, et avancer avec confiance dans leur avenir. </h5>
          <h5 className='text-[18px] font-normal leading-snug font-serif '>Que vous soyez passionné par le design graphique, le développement web, ou tout simplement curieux de découvrir votre potentiel, IMAP vous accompagne à chaque étape. </h5>
        </div>
            <About />
          </div>

      </div>
    </>
  )
}

export default page
