// 'use client'
import React from 'react'
import Head from 'next/head';
import Hero from '../component/Hero';




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

      <div className="w-full h-auto relative pb-[100px]">
        <div className="w-full h-auto max-w-[1450px] sm:px-5 px-5 mx-auto grid grid-cols-1 gap-[40px]">
            <Hero />

        </div>
          <video src="/videos/hats.mp4" autoPlay loop muted className="w-full object-cover h-[700px]"></video>
      </div>
    </>
  )
}

export default page
