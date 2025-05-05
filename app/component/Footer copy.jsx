import React from 'react'
import { Linkss, ContactInfo } from '../Data/Data'
import Link from 'next/link'
import Ima from '../Assets/IMAPLogo/IMAP1.svg'
// import Ima from './Logo1.svg'
import Image from 'next/image'
import { BiPhoneCall, BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdLocationPin, MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";

const center = ['Accueil', 'Formations', 'Showcase', 'Contact', "S'inscrire"]
const selecte = ['Informatique', 'Genie civil', "Bureautique", 'Comptabilité', 'Infographie', '....']

const socials = [
  { href: 'https://wa.me/+212604248395', name: 'WhatsApp' },
  { href: 'https://www.instagram.com/imap.ma/', name: 'Instagram' },
  { href: 'https://www.facebook.com/IMAP.ma/', name: 'Facebook' },
  { href: 'https://www.linkedin.com/company/imap-ma/', name: 'LinkedIn' },
  { href: 'https://twitter.com/imap_ma', name: 'Gmail' },

]

const Footer = () => {
  return (
    <footer className='max-w-[1450px]  z-20  px-5  py-[13px] mx-auto w-full h-auto pb-10 '>
        <div className="w-full h-full gap-10 grid md:grid-cols-1 lg:grid-cols-[auto_1fr]">
            {/* First */}

            <div className=" flex flex-col gap-8 w-full lg:w-[30vw]">

              {/* <div className=" flex flex-col gap-3 w-full lg:w-[30vw] ">
                  <h1 className='font-medium text-main  uppercase text-[15px] pb-1'>/ Appelez-nous</h1>
                  <div className="flex flex-col gap-[0px]">
                    <Link href='tel:+212604248395' className="text-gray-800  blink-on-hover hover:text-main2  w-fit  font-bold  text-[27px]"> +212 604 248 395</Link>
                    <Link href='tel:+212691990259' className="text-gray-800  blink-on-hover hover:text-main2  w-fit  font-bold  text-[27px]"> +212 691 990 259</Link>
                  </div>
                  
              </div>

              <div className=" flex flex-col gap-3 w-full lg:w-[30vw] ">
                  <h1 className='font-medium text-main  uppercase text-[15px] pb-1'>/ Visitez-nous</h1>
                  <div className="flex flex-col gap-[3px]">
                    <Link href='' className="text-gray-800 max-w-[400px] leading-9  blink-on-hover hover:text-main2   font-bold  text-[27px]"> 37-15 Rue du Yamen, Casablanca</Link>
                  </div>
                  
              </div> */}

              <h2 className=' max-w-[400px] text-gray-800 font-bold text-[27px]'>Libérer les talents. Partager les visions. C'est ça l'IMAP.</h2>

            </div>
            

            {/* Second */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-[auto_auto_.5fr]">

              <div className="flex flex-col gap-3">
                <h1 className='font-medium text-main  uppercase text-[15px] pb-1'>/ L’univers IMAP</h1>
                <div className="flex flex-col gap-[2px]">
                    {
                      center.map((item, i)=> <Link href='/' key={i} className='text-gray-800 linkTo blink-on-hover hover:text-main2 flex items-center gap-[6px]  relative font-bold  text-[27px]'>{item}<HiArrowUpRight className='dir text-[17px] relative top-[2px] opacity-0'/></Link>)
                    }
                </div>

              </div>

              <div className="flex flex-col gap-3">
                <h1 className='font-medium text-main  uppercase text-[15px] pb-1'>/ Formations</h1>
                <div className="flex flex-col gap-[3px]">
                    {
                      selecte.map((item, i)=> <Link href='/' key={i} className='text-gray-800 linkTo blink-on-hover hover:text-main2 flex items-center gap-[6px]  relative font-bold  text-[27px]'>{item}<HiArrowUpRight className='dir text-[17px] relative top-[2px] opacity-0'/></Link>)
                    }
                </div>

              </div>

              <div className="flex flex-col gap-3">
                <h1 className='font-medium text-main  uppercase text-[15px] pb-1'>/ Socials</h1>
                <div className="flex flex-col gap-[3px]">
                    {
                      socials.map((item, i)=> <Link href={item.href} key={i} className='text-gray-800 linkTo blink-on-hover hover:text-main2 flex items-center gap-[6px]  relative font-bold  text-[27px]'>{item.name}<HiArrowUpRight className='dir text-[17px] relative top-[2px] opacity-0'/></Link>)
                    }
                </div>

              </div>

              

              {/* <div className="footer md:flex md:pt-0 pt-5 w-full grid md:col-span-1 col-span-2 grid-cols-2  md:flex-col gap-3">

                  <div className="flex flex-col gap-[3px] cursor-pointer">
                    <h1 className='font-medium text-main  uppercase text-[15px] pb-[13px]'>/ Appelez-nous</h1> 
                    <Link href='tel:+212604248395' className="text-black/75  blink-on-hover hover:text-main2   font-bold  text-[27px]"> 06 04 24 83 95</Link>
                    <Link href='tel:+212691990259' className="text-black/75  blink-on-hover hover:text-main2   font-bold  text-[27px]"> 06 91 99 02 59</Link>
                  </div>

                  <div className="flex flex-col gap-[5px] cursor-pointer">
                    <h1 className='font-medium text-main  uppercase text-[15px] pb-1'>/ Visitez-nous</h1> 
                    <Link href='' className="text-black/75 leading-tight blink-on-hover hover:text-main2   font-bold  text-[27px]"> 37-15 Rue du Yamen, Casablanca</Link>                    
                  </div>
                  <div className="flex flex-col gap-[5px] cursor-pointer">
                    <h1 className='font-medium text-main  uppercase text-[15px] pb-1'>/ Envoyez-nous un email</h1> 
                    
                    <a href='mailto:contact.imap@gmail.com' className="flex shrink-[2] items-start gap-3 text-[17px]">contact.imap@gmail.com</a>                    
                  </div>

              </div> */}
                  
            </div>



        </div>
          <div className="grid w-full md:place-items-end  pt-10 grid-cols-1  gap-5 lg:gap-0 md:grid-cols-[auto_1fr]">
                <div className="w-full  lg:w-[600px]">
                    <Image width={280}  src={Ima} alt='Ima Logo'/>
                </div>

                <div className="flex items-end gap-4 ">
                    <p className='opacity-95 text-main text-[17px]'>&copy; 2025 𝗜𝗠𝗔𝗣 | Institut des Métiers Appliqués Privée</p>
                    
                </div>
          </div>

        
    </footer>
  )
}

export default Footer


