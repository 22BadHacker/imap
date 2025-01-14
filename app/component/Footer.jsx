import React from 'react'
import { Linkss, ContactInfo } from '../Data/Data'
import Link from 'next/link'
import Ima from '../Assets/Logo.svg'
// import Ima from './Logo1.svg'
import Image from 'next/image'
import { BiPhoneCall, BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdLocationPin } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";

const center = ['Accueil', 'Formations', 'Œuvres', 'Contact', 'Platform']
const selecte = ['Informatique', 'Genie civil', "Bureautique", 'Comptabilité', 'Infographie','Marketing']

const Footer = () => {
  return (
    <footer className='max-w-[1450px]  z-20  px-5  py-[13px] mx-auto w-full h-auto pb-10 '>
        <div className="w-full h-full gap-10 grid md:grid-cols-1 lg:grid-cols-[auto_1fr]">
            {/* First */}
            <div className=" flex flex-col gap-3 w-full lg:w-[33vw] ">
                <h1 className='font- font-semibold text-main tracking-tight text-[21px]'>Contactez-nous sur</h1>
                <div className="flex gap-3 items-center w-full">
                  {
                    Linkss.map((item, i) => <a key={i} className='size-[55px] rounded-full hover:bg-main hover:text-white  text-[21px] border-[.5px] border-black/20 flex items-center justify-center' href={item.href}>{item.icon}</a>)
                  }
                </div>
            </div>
            

            {/* Second */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-[auto_auto_.5fr]">

              <div className="flex flex-col gap-3">
                <h1 className='font- font-semibold text-main tracking-tight text-[21px]'>Center imap</h1>
                <div className="flex flex-col gap-[8px]">
                    {
                      center.map((item, i)=> <Link href='' key={i} className=' text-black/85 hover:drop-shadow-none hover:text-main link relative   text-[19px]'>{item}</Link>)
                    }
                    <span className='text-black/80'>........</span>
                </div>

              </div>

              <div className="flex flex-col gap-3">
                <h1 className='font- font-semibold text-main tracking-tight text-[21px]'>Formations</h1>
                <div className="flex flex-col gap-[8px]">
                    {
                      selecte.map((item, i)=> <Link href='' key={i} className='   text-black/85 hover:drop-shadow-none hover:text-main link relative   text-[19px]'>{item}</Link>)
                    }
                    <span className='text-black/80'>........</span>
                </div>

              </div>

              <div className="footer md:flex md:pt-0 pt-5 w-full grid md:col-span-1 col-span-2 grid-cols-2  md:flex-col gap-3">

                  <div className="flex flex-col gap-[5px] cursor-pointer">
                    <h1 className='pb-2 font-semibold text-main tracking-tight text-[21px]'>Appelez-nous</h1> 
                    <Link href='' className="flex items-center gap-3 text-[17px]"><BiPhoneCall className='text-[17.5px]'/> +212 604-248-395</Link>
                    <Link href='' className="flex items-center gap-3 text-[17px]"><BiSolidPhoneCall  className='text-[17.5px]'/> +212 691-990-259</Link>
                  </div>

                  <div className="flex flex-col gap-[5px] cursor-pointer">
                    <h1 className='pb-2 font-semibold text-main tracking-tight text-[21px]'>Visitez-nous</h1> 
                    <Link href='' className="flex shrink-[2] items-start gap-3 text-[17px]"><MdLocationPin className='text-[17.5px]  relative top-[1.5px]'/> 37-15 Rue du Yamen, Casablanca</Link>
                    <Link href='' className="flex shrink-[2] w-full items-start gap-3 text-[17px]"><MdOutlineLocationOn className='text-[19.5px]  relative top-[1.5px]'/> N, Rue 5, 26 Bd du Fouarat , Casablanca</Link>
                    
                  </div>

                  <span className='text-black/80 hidden md:flex'>........</span>

              </div>
                  
            </div>



        </div>
          <div className="grid w-full md:place-items-end  pt-10 grid-cols-1  gap-5 lg:gap-0 md:grid-cols-[auto_1fr]">
                <div className="w-full  lg:w-[600px]">
                    <Image width={280}  src={Ima} alt='Ima Logo'/>
                </div>

                <div className="flex items-end gap-4 ">
                    <p className='opacity-80 text-main text-[17px]'>&copy; 2025 𝗜𝗠𝗔𝗣 | Institut des Métiers Appliqués Privée</p>
                    
                </div>
          </div>

        
    </footer>
  )
}

export default Footer


