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

        {/* <div class="absolute top-0 z-[-2] blur-[100px] h-screen w-screen bg-transparent bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

        {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[410px] w-[410px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div> */}
        
        {/* <div className="w-full h-auto max-w-[1450px] sm:px-5 px-5 mx-auto ">
            <Hero />
        </div>
          <video src="/videos/hats.mp4" autoPlay loop muted className="w-full object-cover h-[850px]"></video>

          <div className="w-full h-auto max-w-[1450px] sm:px-5 px-5 mx-auto grid grid-cols-1 gap-[40px] py-20">
              <About />
          </div> */}

      </div>
    </>
  )
}

export default page
