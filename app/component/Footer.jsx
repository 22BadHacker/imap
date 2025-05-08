import React from 'react'
import { Linkss, ContactInfo } from '../../Data/Data'
import Link from 'next/link'
import Ima from '@/public/IMAPLogo/Vertical_logo.svg'
import Image from 'next/image'
import { HiArrowUpRight } from "react-icons/hi2";


const center = ['Accueil', 'Formations', 'Showcase', 'Contact', "S'inscrire"]
const selecte = ['Informatique', 'Génie Civil',  "Bureautique", 'Comptabilité', 'Infographie']

const socials = [
  { href: 'https://wa.me/+212604248395', name: 'WhatsApp' },
  { href: 'https://www.instagram.com/imap.ma/', name: 'Instagram' },
  { href: 'https://www.facebook.com/IMAP.ma/', name: 'Facebook' },
  { href: 'https://www.linkedin.com/company/imap-ma/', name: 'LinkedIn' },
  { href: 'https://twitter.com/imap_ma', name: 'Gmail' },

]

const info = [
  { href: 'tel:+212604248395', name: '06 042 483 95' },
  { href: 'tel:+212691990259', name: '06 919 902 59' },
  { href: 'mailto:contact.imap@gmail.com', name: 'contact.imap@gmail.com' },
  { href: 'https://www.google.com/maps/place/37-15+Rue+du+Yamen,+Casablanca/@33.5731104,-7.5898433,17z/data=!3m1!4b1!4m6!3m5!1s0xda7a2f8c9e0d5b7:0x8a2f8c9e0d5b7!8m2!3d33.5731104!4d-7.5898433!16s%2Fg%2F11c1gqj_6h', name: '37-15 Rue du Yamen, Casablanca' },
]

const Footer = () => {
  return (
    <footer className='max-w-[1450px]  z-20  px-5  py-[13px] mx-auto w-full h-auto '>

        <div className="w-full h-full  lg:gap-10 gap-[130px] grid md:grid-cols-1 lg:grid-cols-[auto_1fr]">
            
            <div className="w-full lg:w-[34vw]  flex  flex-col justify-between ">
                <div className="flex flex-col gap-6 md:gap-5">
                  <Image className='md:w-[450px] pb-2 w-full relative top-[2px]' src={Ima} alt="logo" />
                  <p className=' md:text-[30px]  pt-4 border-t-gray-200 font-bold uppercase text-gray-800 text-[7vw] md:max-w-[460px] font-sans leading-tight md:leading-[45px] tracking-wide'><span className=''>un espace pour apprendre, créer, et s’épanouir.</span></p>

                  <div className="flex w-full gap-6 sm:gap-10 items-center sm:justify-start flex-wrap justify-between  relative top-1">

                    <Link href={'/Contact'} className=' bg-main flex gap-3 items-center text-white px-4 py-[10px] rounded-full w-fit   cursor-pointer linkTo blink-on-hover hover:bg-main2   relative top-4  sm:text-[13px]'>Contact-nouz <HiArrowUpRight className='rotate-[45deg]'/></Link>
                    <Link href={'/Contact'} className=' bg-[#e4e6ef] hover:text-white text-black/80 px-4 py-[10px] rounded-full w-fit   cursor-pointer linkTo blink-on-hover hover:bg-main2   relative top-4  sm:text-[13px]'>Découvrez nos programmes</Link>
                  </div>
                </div>
                
                
                <p className='text-main  cursor-pointer linkTo blink-on-hover hover:text-main2 hidden lg:block   relative font-semibold  sm:text-[17px]'>&copy; 2025 <span className='font-[800]'>IMAP</span> | Institut des Métiers Appliqués Privé</p>
              
            </div>
            

            {/* Second */}

            <div className="flex flex-col gap-[70px] pb-1">
              <div className="w-full lg:flex lg:justify-between gap-8 sm:gap-12 grid grid-cols-2 sm:grid-cols-3 pb-5">

                <div className="flex flex-col gap-3">
                  <h1 className='font-medium text-main font-sans   uppercase text-[12px] sm:text-[14px] pb-1'>/ NAVIGATION</h1>
                  <div className="flex flex-col gap-[3px]">
                      {
                        center.map((item, i)=> <Link href='/' key={i} className='text-black/80 linkTo font-sans blink-on-hover hover:text-main2 flex items-center gap-[6px]  relative  font-semibold  text-[21px] sm:text-[25px]'>{item}<HiArrowUpRight className='dir text-[16px] sm:text-[18px] relative top-[1px] opacity-0'/></Link>)
                      }
                  </div>

                </div>

                <div className="flex flex-col gap-3">
                  <h1 className='font-medium text-main font-sans  uppercase  text-[12px] sm:text-[14px] pb-1'>/ Formations</h1>
                  <div className="flex flex-col gap-[3px]">
                      {
                        selecte.map((item, i)=> <Link href='/' key={i} className='text-black/80 font-sans linkTo blink-on-hover hover:text-main2 flex items-center gap-[6px]  relative font-semibold  text-[21px] sm:text-[25px]'>{item}<HiArrowUpRight className='dir text-[16px] sm:text-[17px] relative top-[2px] opacity-0'/></Link>)
                      }
                      

                  </div>

                </div>

                <div className="flex flex-col gap-3">
                  <h1 className='font-medium font-sans  text-main  uppercase  text-[12px] sm:text-[14px] pb-1'>/ Socials</h1>
                  <div className="flex flex-col gap-[3px]">
                      {
                        socials.map((item, i)=> <Link href={item.href} key={i} className='text-black/80 font-sans linkTo blink-on-hover hover:text-main2 flex items-center gap-[6px]  relative font-semibold  text-[21px] sm:text-[25px]'>{item.name}<HiArrowUpRight className='dir text-[14px] sm:text-[16px] relative top-[2px] opacity-0'/></Link>)
                      }
                  </div>

                </div>

                    
              </div>

              <div className="lg:justify-between items-end hidden md:grid md:gap-10 md:grid-cols-2 lg:flex w-full pt-[25px] lg:border-t-[.5px] border-gray-200">
                
                
                <div className="flex flex-col gap-0">
                    <Link className='text-gray-800  text-[17.5px] font-sans  font-normal' href='tel:+212604248395'><span className='font-[700]  pr-[4px] '>T : </span>  06 042 483 95</Link>
                    <Link className='text-gray-800  text-[17.5px] font-sans font-normal' href={''}><span className='font-[700]  pr-[4px] '>A : </span> 37-15 Rue du Yamen, Casablanca</Link>
                    <p className='text-gray-800  text-[17.5px] font-sans  font-normal' href=''><span className='font-[700]  pr-[4px] '>H : </span> Du lundi au samedi, de 8h30 à 21h00</p>
                    
                  
                </div>
                <div className="flex flex-col">
                  <Link className='text-gray-800  text-[17.5px] font-sans  font-normal' href='tel:+212691990259' ><span className='font-[700]  pr-[4px] '>T : </span> 06 919 902 59</Link>
                  <Link className='text-gray-800  text-[17.5px] font-sans  font-normal' href='mailto:contact.imap@gmail.com'><span className='font-[700]  pr-[4px]'>E : </span> contact.imap@gmail.com</Link>
                  
                </div>


              </div>


              <div className="w-full md:hidden grid grid-cols-1 gap-4">

                <div className="flex flex-col gap-0">
                    <Link className='text-gray-800  font-metro text-[19px] font-medium' href='tel:+212604248395'><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>T : </span>  06 042 483 95</Link>
                    <Link className='text-gray-800 font-metro text-[19px] font-medium' href='tel:+212691990259' ><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>T : </span> 06 919 902 59</Link>

                </div>

                <div className="flex flex-col gap-0">
                    <Link className='text-gray-800 font-metro text-[19px] font-medium' href='mailto:contact.imap@gmail.com'><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>E : </span> contact.imap@gmail.com</Link>

                    <Link className='text-gray-800 font-metro text-[19px] font-medium' href={''}><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>A : </span> 37-15 Rue du Yamen, Casablanca</Link>
                </div>
                    <Link className='text-gray-800 font-metro text-[19px] font-medium' href='mailto:contact.imap@gmail.com'><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>H : </span>Du lundi au samedi, de 8h30 à 21h00</Link>
                   

              </div>


              <div className="lg:hidden flex  flex-col justify-between  gap-12">
                <p className='text-gray-800  cursor-pointer linkTo blink-on-hover hover:text-main2 flex lg:hidden items-center gap-[6px]  relative font-semibold  text-[15.5px] text-main sm:text-[17px]'>&copy; 2025 <span className='font-[800]'>IMAP</span>| Institut des Métiers Appliqués Privé</p>
              </div>

            </div>



        </div>

        
    </footer>
  )
}

export default Footer



// <p className='text-gray-800 font-metro text-[19px] font-medium'>IMAP est un centre de formation professionnelle qui propose des formations de qualité dans divers domaines, notamment l'informatique, le génie civil, la bureautique, la comptabilité et l'infographie. Notre objectif est de fournir aux apprenants les compétences nécessaires pour réussir sur le marché du travail.</p>