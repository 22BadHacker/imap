import React from 'react'
import { Linkss, ContactInfo } from '../../Data/Data'
import Link from 'next/link'
import Ima from '@/public/IMAPLogo/Vertical_logo.svg'
import Image from 'next/image'
import { HiArrowUpRight } from "react-icons/hi2";
import { center, socials, formation } from '../../Data/Data'






const info = [
  { href: 'tel:+212604248395', name: '06 042 483 95' },
  { href: 'tel:+212691990259', name: '06 919 902 59' },
  { href: 'mailto:contact.imap@gmail.com', name: 'contact.imap@gmail.com' },
  { href: 'https://www.google.com/maps/place/37-15+Rue+du+Yamen,+Casablanca/@33.5731104,-7.5898433,17z/data=!3m1!4b1!4m6!3m5!1s0xda7a2f8c9e0d5b7:0x8a2f8c9e0d5b7!8m2!3d33.5731104!4d-7.5898433!16s%2Fg%2F11c1gqj_6h', name: '37-15 Rue du Yamen, Casablanca' },
]

const Footer = () => {
  return (
    <footer className='max-w-[1450px] relative z-10  px-5  pb-[20px] mx-auto w-full h-fit'>


        <div className="grid lg:grid-cols-2 grid-cols-1  lg:gap-6 gap-20 border-t-[#e4ebf5] border-t-[1.5px] pb-[140px] pt-[110px]">
            <div className="flex flex-col gap-5 h-fit">
                <h1 className='text-[29px] font-metro max-w-[450px] leading-[1.32] text-[#111111] font-bold'>Des parcours créatifs qu’on ne voit nulle part ailleurs.</h1>

                <div className="flex gap-8 items-center">
                    <Link className='bg-main flex gap-3 items-center text-white px-5 py-[11px] rounded-full w-fit font-medium hover:bg-main2   relative top-4  sm:text-[14px]' href={'/'}>Contact-nouz</Link>
                    <Link href={'/Contact'} className=' bg-[#e4e6ef] hover:text-white text-black/80 px-5 py-[11px] rounded-full font-medium w-fit  hover:bg-main2   relative top-4  sm:text-[14px]'>Découvrez nos programmes</Link>
                </div>
            </div>


            <div className="lg:flex lg:justify-between  grid sm:grid-cols-3 grid-cols-2 gap-20  lg:gap-4  place-content-center">
                <div className="flex flex-col gap-[6px]">
                    <h4 className='lg:text-[14px] text-[13px] font-sans uppercase font-normal text-main pb-[10px]'>Navigations</h4>
                    {center.map((item, i) => (
                      <Link key={i} className='lg:text-[26px] text-[24px] text-nowrap blink-on-hover hover:text-main2 font-metro max-w-[450px] leading-snug text-[#111111] font-semibold' href={item.href}>{item.name}</Link>
                    ))}
                </div>
                <div className="flex flex-col gap-[6px] ">
                    <h4 className='text-[14px] font-sans uppercase font-normal text-main pb-[10px]'>Formations</h4>
                    {formation.map((item, i) => (
                      <Link key={i} className='lg:text-[26px] text-[24px] text-nowrap blink-on-hover hover:text-main2 font-metro max-w-[450px] leading-snug text-[#111111] font-semibold' href={item.href}>{item.name}</Link>
                    ))}
                   
                </div>
                <div className="flex flex-col gap-[6px] h-fit">
                    <h4 className='text-[14px] font-sans uppercase font-normal text-main pb-[10px]'>Réseaux sociaux</h4>
                    {socials.map((item, i) => (
                      <Link key={i} className='lg:text-[26px] text-[24px] text-nowrap blink-on-hover hover:text-main2 font-metro max-w-[450px] leading-snug text-[#111111] font-semibold' href={item.href}>{item.name}</Link>
                    ))}
                </div>
            </div>
        </div> 
        

          <div className="grid lg:grid-cols-2 gap-6 w-full items-end sm:py-8 py-10 ">
            <div className="">
              <Link href={'tel:+212604248395'} className='text-[#1f1f1f] uppercase font-bold tracking-wide  cursor-pointer  relative   sm:text-[14.5px] '><span className='font-normal uppercase'>ouverture : </span>Du lundi au samedi, de 8h30 à 21h00</Link>
            </div>

            <div className="flex sm:flex-row flex-col justify-between sm:items-end gap-6">

            <div className="flex flex-col gap-1 flex-wrap">
                    <Link href={'tel:+212604248395'} className='text-[#1f1f1f] font-bold tracking-wide  cursor-pointer  relative   sm:text-[14.5px] '><span className='font-normal uppercase'>téléphone : </span>+212 (0)6 04 24 83 95</Link>
                    <Link href={'tel:+212691990259'} className='text-[#1f1f1f] font-bold tracking-wide  cursor-pointer  relative   sm:text-[14.5px] '><span className='font-normal uppercase'>téléphone : </span>+212 (0)6 91 99 02 59</Link>

            </div>
            <div className="flex flex-col gap-2 sm:items-end flex-wrap">
                    <Link href={'mailto:contact.imap@gmail.com'} className='text-[#1f1f1f] uppercase font-bold tracking-wide  cursor-pointer  relative   sm:text-[14.5px] '><span className='font-normal uppercase'>Email : </span>contact.imap@gmail.com</Link>
                    <Link href={'https://www.google.com/maps/place/37-15+Rue+du+Yamen,+Casablanca/@33.5731104,-7.5898433,17z/data=!3m1!4b1!4m6!3m5!1s0xda7a2f8c9e0d5b7:0x8a2f8c9e0d5b7!8m2!3d33.5731104!4d-7.5898433!16s%2Fg%2F11c1gqj_6h'} className='text-[#1f1f1f] uppercase font-bold tracking-wide  cursor-pointer  relative   sm:text-[14.5px] '><span className='font-normal uppercase'>Address : </span>37-15 Rue du Yamen, Casablanca</Link>

            </div>
            </div>
                
          </div>

        <div className="flex lg:flex-row flex-col gap-6  justify-between items-start sm:py-5 py-10 border-t-[#e4ebf5] border-t-[1px]">
              <Image className='lg:w-[410px] md:w-[500px] pb-2 w-full relative top-[2px]' src={Ima} alt="logo" />
               <p className='text-[#1f1f1f]  cursor-pointer  relative font-medium  lg:text-[15px]'>&copy; 2025 <span className='font-[900]'>IMAP</span> — Institut des Métiers Appliqués Privé.</p>
        </div>

    </footer>
  )
}

export default Footer



// <p className='text-gray-800 font-metro text-[19px] font-medium'>IMAP est un centre de formation professionnelle qui propose des formations de qualité dans divers domaines, notamment l'informatique, le génie civil, la bureautique, la comptabilité et l'infographie. Notre objectif est de fournir aux apprenants les compétences nécessaires pour réussir sur le marché du travail.</p>

//  <h4 className='text-[14px] font-sans uppercase font-normal text-main pb-[10px] flex items-center gap-1'><span className='w-[15px] h-[1.5px] bg-main relative top-1'></span>Navigations</h4>