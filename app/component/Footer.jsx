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
    <footer className='max-w-[1450px] relative z-10  px-5  pb-[20px] mx-auto w-full h-auto'>

      <div className="w-full grid grid-cols-1 lg:gap-4 gap-20 lg:grid-cols-2 pb-[100px] lg:pb-[170px] lg:pt-[120px] ">
          <div className="flex flex-col gap-0">
              <h6 className='uppercase text-[12px]  font-noto_sans font-normal pb-[22px] w-fit hover:text-main cursor-pointer blink-on-hover'>/ On est là pour vous</h6>
              <Link className='text-[30px] font-noto_sans font-semibold leading-tight hover:text-main2 duration-200 w-fit ease-in-out' href={'/'}>contact.imap@gmail.com</Link>
              <Link className='text-[30px] font-noto_sans font-semibold leading-tight hover:text-main2 duration-200 w-fit ease-in-out' href={'/'}>+212 (0)6 042 483 95</Link>
              
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-20 sm:gap-10">
              <div className="flex flex-col gap-0">
                <h6 className='uppercase text-[12px]  font-noto_sans font-normal pb-[22px] w-fit hover:text-main cursor-pointer blink-on-hover'>/ Réseaux sociaux</h6>
                {socials.map((item, i) => (
                  <Link target='_blank' key={i} className='text-[20px] pb-[1.5px] font-poppins font-semibold leading-snug hover:text-main2 flex gap-1 items-center linkTo duration-200 ease-out w-fit' href={item.href}>{item.name}<HiArrowUpRight className='dir text-[15px] relative top-[1.2px] opacity-0'/></Link>
                ))}
              </div> 

              <div className="flex flex-col gap-0">
                <h6 className='uppercase text-[12px]  font-noto_sans font-normal pb-[22px] w-fit hover:text-main cursor-pointer blink-on-hover'>/ navigation</h6>
                {center.map((item, i) => (
                  <Link target='_blank' key={i} className='text-[20px] pb-[1.5px] font-poppins font-semibold leading-snug hover:text-main2 flex gap-1 items-center linkTo duration-200 ease-out w-fit' href={item.href}> {item.name} <HiArrowUpRight className='dir text-[15px] relative top-[1.2px] opacity-0'/></Link>
                ))}
               
              </div>                
              <div className="flex flex-col gap-0 col-span-2 sm:col-span-1">
                <h6 className='uppercase text-[12px]  font-noto_sans font-normal pb-[22px] w-fit hover:text-main cursor-pointer blink-on-hover'>/ Trouvez-nous</h6>
                <Link target='_blank' className='text-[20px] hover:text-main2 duration-200 ease-in-out font-poppins font-semibold leading-tight' href={'https://www.google.com/maps/place/37-15+Rue+du+Yamen,+Casablanca/@33.5731104,-7.5898433,17z/data=!3m1!4b1!4m6!3m5!1s0xda7a2f8c9e0d5b7:0x8a2f8c9e0d5b7!8m2!3d33.5731104!4d-7.5898433!16s%2Fg%2F11c1gqj_6h'}>37-15 Rue du Yamen, Casablanca</Link>
              </div>                
          </div>
      </div>


      <div className="flex lg:flex-row flex-col gap-6  justify-between lg:items-end sm:py-5 py-10 ">
              <Image className='lg:w-[380px] md:w-[500px] pb-2 w-full relative top-[2px]' src={Ima} alt="logo" />
                <p className='text-[#000]  cursor-pointer  relative font-medium  lg:text-[14px]'>&copy; 2025 <span className='font-[900]'>IMAP</span> — Institut des Métiers Appliqués Privé.</p>
        </div>

        

    </footer>
  )
}

export default Footer

