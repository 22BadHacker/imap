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
import { MagneticNested } from './Magnet2'

const center = ['Accueil', 'Formations', 'Showcase', 'Contact', "S'inscrire"]
const selecte = ['Informatique', 'Genie civil', "Bureautique", 'Comptabilité', 'Infographie']

const socials = [
  { href: 'https://wa.me/+212604248395', name: 'WhatsApp' },
  { href: 'https://www.instagram.com/imap.ma/', name: 'Instagram' },
  { href: 'https://www.facebook.com/IMAP.ma/', name: 'Facebook' },
  { href: 'https://www.linkedin.com/company/imap-ma/', name: 'LinkedIn' },
  { href: 'https://twitter.com/imap_ma', name: 'Gmail' },

]

const Footer = () => {
  return (
    <footer className='max-w-[1450px]  z-20  px-5  py-[13px] mx-auto w-full h-auto '>
        <div className="w-full h-full  lg:gap-10 gap-20 grid md:grid-cols-1 lg:grid-cols-[auto_1fr]">
            

            <div className="w-full lg:w-[30vw] flex flex-col justify-between ">
              <div className=""></div>
              {/* <div className=""></div> */}
              {/* <Link href={'/'} className="size-[214px] bg-white flex justify-center items-center rounded-full border-black/10  border-[.5px]">
                <MagneticNested/>
              </Link> */}
                {/* <p className='text-gray-800 cursor-pointer linkTo blink-on-hover hover:text-main2 flex items-center gap-[6px]  relative font-semibold  text-[21px] sm:text-[17px]'>&copy; 2025 <span className='font-[800]'>IMAP</span>. All right reserved</p> */}
                <Image className='w-[240px] relative top-[1px]' src={Ima} alt="logo" />
              {/* <div className="flex flex-col gap-3">

              </div> */}

              
            </div>
            

            {/* Second */}

            <div className="flex flex-col gap-[70px]">
              <div className="w-full sm:flex sm:justify-between grid grid-cols-2 ">

                <div className="flex flex-col gap-3">
                  <h1 className='font-medium text-main  uppercase text-[12px] sm:text-[14px] pb-1'>/ NAVIGATION</h1>
                  <div className="flex flex-col gap-[2px]">
                      {
                        center.map((item, i)=> <Link href='/' key={i} className='text-gray-800 linkTo blink-on-hover hover:text-main2 flex items-center gap-[6px]  relative font-bold  text-[21px] sm:text-[26px]'>{item}<HiArrowUpRight className='dir text-[16px] sm:text-[18px] relative top-[1px] opacity-0'/></Link>)
                      }
                  </div>

                </div>

                <div className="flex flex-col gap-3">
                  <h1 className='font-medium text-main  uppercase  text-[12px] sm:text-[14px] pb-1'>/ Formations</h1>
                  <div className="flex flex-col gap-[3px]">
                      {
                        selecte.map((item, i)=> <Link href='/' key={i} className='text-gray-800 linkTo blink-on-hover hover:text-main2 flex items-center gap-[6px]  relative font-bold  text-[21px] sm:text-[26px]'>{item}<HiArrowUpRight className='dir text-[16px] sm:text-[17px] relative top-[2px] opacity-0'/></Link>)
                      }
                  </div>

                </div>

                <div className="flex flex-col gap-3">
                  <h1 className='font-medium text-main  uppercase  text-[12px] sm:text-[14px] pb-1'>/ Socials</h1>
                  <div className="flex flex-col gap-[3px]">
                      {
                        socials.map((item, i)=> <Link href={item.href} key={i} className='text-gray-800 linkTo blink-on-hover hover:text-main2 flex items-center gap-[6px]  relative font-bold  text-[21px] sm:text-[26px]'>{item.name}<HiArrowUpRight className='dir text-[16px] sm:text-[17px] relative top-[2px] opacity-0'/></Link>)
                      }
                  </div>

                </div>

                    
              </div>

              <div className="justify-between items-end hidden md:flex w-full pt-[70px]">
                
                
                <div className="flex flex-col gap-0">
                    <Link className='text-gray-800  text-[17.5px] font-poppins font-normal' href='tel:+212604248395'><span className='font-[700]  pr-[4px] '>T : </span>  06 042 483 95</Link>
                    <Link className='text-gray-800  text-[17.5px] font-poppins font-normal' href={''}><span className='font-[700]  pr-[4px] '>A : </span> 37-15 Rue du Yamen, Casablanca</Link>
                    <p className='text-gray-800  text-[17.5px] font-poppins font-normal' href=''><span className='font-[700]  pr-[4px] '>H : </span> Du lundi au samedi, de 8h30 à 21h00</p>
                    
                  
                </div>
                <div className="flex flex-col">
                  <Link className='text-gray-800  text-[17.5px] font-poppins font-normal' href='tel:+212691990259' ><span className='font-[700]  pr-[4px] '>T : </span> 06 919 902 59</Link>
                  <Link className='text-gray-800  text-[17.5px] font-poppins font-normal' href='mailto:contact.imap@gmail.com'><span className='font-[700]  pr-[4px]'>E : </span> contact.imap@gmail.com</Link>
                  
                {/* <p className='font-metro text-[19px] text-right'>2025 <span className=''>©</span>  IMAP</p> */}

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

            </div>



        </div>

        
    </footer>
  )
}

export default Footer



