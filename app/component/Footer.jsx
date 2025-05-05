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
            

            <div className="w-full lg:w-[30vw] flex flex-col gap-4">
              
              <Link href={'/'} className="size-[214px]  bg-white flex justify-center items-center rounded-full border-black/10  border-[.5px]">
                <MagneticNested/>
              </Link>

              
            </div>
            

            {/* Second */}
            <div className="w-full flex justify-between">

              <div className="flex flex-col gap-3">
                <h1 className='font-medium text-main  uppercase text-[15px] pb-1'>/ NAVIGATION</h1>
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

                  
            </div>



        </div>

        <div className="border-b-[1px]  pt-[130px] w-full border-[#e4ebf5]"></div>
          <div className="grid grid-cols-[auto_1fr] pt-3">
                <div className="w-full md:top-2 relative lg:w-[620px]">
                    <Image width={250}  src={Ima} alt='Ima Logo'/>
                </div>

                <div className="justify-between flex w-full">

                  <div className="flex flex-col gap-0">
                      <Link className='text-gray-800  font-metro text-[19px] font-medium' href='tel:+212604248395'><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>T : </span>  06 042 483 95</Link>
                      <Link className='text-gray-800 font-metro text-[19px] font-medium' href={''}><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>A : </span> 37-15 Rue du Yamen, Casablanca</Link>
                      
                    
                  </div>
                  <div className="flex flex-col">
                    <Link className='text-gray-800 font-metro text-[19px] font-medium' href='tel:+212691990259' ><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>T : </span> 06 919 902 59</Link>
                    <Link className='text-gray-800 font-metro text-[19px] font-medium' href='mailto:contact.imap@gmail.com'><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>E : </span> contact.imap@gmail.com</Link>
                  {/* <p className='font-metro text-[19px] text-right'>2025 <span className=''>©</span>  IMAP</p> */}

                  </div>

                </div>

                {/* <div className="flex items-end gap-4 ">
                    <p className='opacity-95 text-main font-bold text-[18px]'>&copy; 2025 𝗜𝗠𝗔𝗣 | Institut des Métiers Appliqués Privée</p>
                    
                </div> */}
          </div>

        
    </footer>
  )
}

export default Footer


{/* <p className='opacity-95 text-main font-bold text-[18px]'>© 2025 IMAP</p> */}


// <div className="flex flex-col gap-0">
//                       <Link className='text-gray-800  font-metro text-[19px] font-medium' href='tel:+212604248395'><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>T : </span>  06 042 483 95</Link>
//                       <Link className='text-gray-800 font-metro text-[19px] font-medium' href={''}><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>A : </span> 37-15 Rue du Yamen, Casablanca</Link>
//                       <Link className='text-gray-800 font-metro text-[19px] font-medium' href='mailto:contact.imap@gmail.com'><span className='font-[700] font-mori1 pr-[4px] text-[18px]'>E : </span> contact.imap@gmail.com</Link>
                    
//                   </div>

