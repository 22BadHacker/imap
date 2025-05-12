import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

const Landing = () => {
  return (
    <div className='flex flex-col gap-2'>
        <div className=' max-w-[1450px] sm:px-5 px-5 mx-auto  w-full h-auto relative flex   py-[120px]  flex-col gap-4'>
            {/* <p className='w-fit px-4 py-2 rounded-full text-[15px] font-semibold  border-main2 border-[1.5px] text-main2'>Institut des Métiers Appliqués Privée</p> */}
            <p className='w-fit text-[15px] font-semibold   text-main2'>Institut des Métiers Appliqués Privée</p>
            <h1 className='max-w-[800px] font-sans text-[35px] font-bold  text-[#1f1f1f]'>Un lieu, une équipe, une énergie… pour t’aider à devenir la personne que tu rêves d’être — créatif, curieux, libre.</h1>

            <div className="flex gap-8 items-center pt-6">
                <Link href={'/Formations'} className='border-[1px] font-semibold hover:bg-main2 hover:text-white bg-[#e4e6ef] hover:border-white duration-200 ease-in-out font-snans border-[#e4e6ef] rounded-full px-4 py-[13px] text-[14.5px] flex items-center gap-3 text-[#1f1f1f] '>Découvrir nos formations <span className='text-[12px] flex items-center gap-0 relative top-[1px]'><FaAngleRight /><FaAngleRight className='relative -left-[2px]' /></span></Link>
                <Link href={'/Contact#rejoignez-nous'} className='border-[1px] font-semibold hover:bg-main2 hover:border-main2 duration-200 ease-in-out bg-main text-white font-sans border-main rounded-full px-4 py-[13px] text-[14.5px] flex items-center gap-3 '>Rejoignez-nous <span className='text-[12px] flex items-center gap-0 relative top-[1px]'><FaAngleRight /><FaAngleRight className='relative -left-[2px]' /></span></Link>
            </div>

            
        </div>  
        <video src="/videos/hats.mp4" autoPlay loop muted className="w-full object-cover saturate-[1.3] h-[850px]"></video>

        <div className="max-w-[1450px]  px-5 mx-auto  w-full h-auto relative grid grid-cols-3  py-[120px]  gap-12">

          <p className='uppercase h-fit px-3 py-3 border-main2 border-[1.5px] font-semibold rounded-full w-fit text-main2 contact-title  text-[14px] flex gap-1 items-center'> <span className=''></span>à propos de nous</p>

          {/* <h5 className='text-[21px] px-2 font-semibold leading-tight text-[#1f1f1f]'>IMAP est un centre de formation basé à Casablanca, pensé pour celles et ceux qui veulent apprendre un métier, construire un projet, ou simplement trouver leur voie. Ici, on avance ensemble, avec des formations concrètes, des formats accessibles, et une équipe à l’écoute. Que vous soyez attiré par le design, le développement web ou la comptabilité — vous êtes au bon endroit.</h5>
          <h5 className='text-[21px] px-2 font-semibold leading-tight text-[#1f1f1f]'>Notre mission ? Offrir des formations modernes, accessibles, et ancrées dans la réalité des métiers d’aujourd’hui. Ici, on apprend par la pratique, on échange avec des professionnels, et surtout, on grandit humainement et professionnellement. </h5> */}
          <h5 className='text-[21px] px-2 font-semibold leading-tight text-[#1f1f1f]'>Basé au cœur de Casablanca, au Maroc, nous sommes un espace où les esprits créatifs se rencontrent, apprennent, et bâtissent leur avenir. </h5>
          <h5 className='text-[21px] px-2 font-semibold leading-tight text-[#1f1f1f]'>Que vous soyez passionné par le design graphique, le développement web, ou tout simplement curieux de découvrir votre potentiel, IMAP vous accompagne à chaque étape. </h5>
        </div>


    </div>
  )
}

export default Landing
