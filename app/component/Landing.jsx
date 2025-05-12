import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'

const Landing = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className=' max-w-[1450px] sm:px-5 px-5 mx-auto  w-full h-auto relative grid-cols-1  grid lg:grid-cols-[1fr_.8fr]  gap-10   py-[90px]  '>

          <div className="flex-col justify-between">

            <div className="flex flex-col gap-4">
              <p className='w-fit text-[15px] font-semibold   text-main2'>Institut des Métiers Appliqués Privée</p>
              <h1 className='lg:max-w-[800px] font-sans text-[35px] md:leading-normal leading-snug md:text-[40px] font-bold  text-[#1f1f1f]'>Un lieu, une équipe, une énergie… pour t’aider à devenir la personne que tu rêves d’être — créatif, curieux, libre.</h1>

            </div>

              <div className="flex gap-12 items-center md:pt-10 relative top-[60px]">
                  <Link href={'/Formations'} className='border-[1px] font-semibold hover:bg-main2 hover:text-white bg-[#e4e6ef] hover:border-white duration-200 ease-in-out font-snans border-[#e4e6ef] rounded-full px-4 py-[13px] text-[14.5px] flex items-center gap-2 text-[#1f1f1f] '>Découvrir nos formations <span className='text-[17px] flex items-center gap-0 relative top-[2px]'><GoArrowUpRight /></span></Link>
                  <Link href={'/Contact#rejoignez-nous'} className='border-[1px] font-semibold hover:bg-main2 hover:border-main2 duration-200 ease-in-out bg-main text-white font-sans border-main rounded-full px-4 py-[13px] text-[14.5px] flex items-center gap-2 '>Rejoignez-nous  <span className='text-[17px] flex items-center gap-0 relative top-[2px]'><GoArrowUpRight /></span></Link>
              </div>

          </div>

        <div className="w-full lg:flex hidden justify-center items-center md:pt-0 pt-20">

            <Image alt='Africa' src='/Africa.svg' width={400} height={100} className='w-[450px]'/>
        </div>

            
        </div>  
        <video src="/videos/hats.mp4" autoPlay loop muted className="lg:w-full size-full object-cover saturate-[1.3] lg:h-[850px]"></video>

        
      
        <div className="max-w-[1450px]  px-5 mx-auto  w-full h-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  pt-[100px]  gap-12">

          <p className='text-[17.5px] font-semibold h-fit lg:col-span-1 md:col-span-2'> à propos de nous <span className='text-main2'>*</span></p>

          <h5 className='text-[21px] font-semibold leading-snug '>IMAP est un centre de formation basé au cœur de Casablanca, au Maroc. Ici, on accueille celles et ceux qui veulent apprendre autrement, se former à un métier concret, et avancer avec confiance dans leur avenir. </h5>
          <h5 className='text-[21px] font-semibold leading-snug'>Que vous soyez passionné par le design graphique, le développement web, ou tout simplement curieux de découvrir votre potentiel, IMAP vous accompagne à chaque étape. </h5>
        </div>


    </div>
  )
}

export default Landing
