import Link from 'next/link'
import React from 'react'
import { BiPhoneCall, BiSolidPhoneCall } from 'react-icons/bi'
import { GoPlus } from "react-icons/go";
import { MdLocationPin, MdOutlineLocationOn } from 'react-icons/md';
import { Linkss } from '@/app/Data/Data';
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiVoicemail } from "react-icons/ci";

const Info = () => {
  return (
    <div className='w-full grid grid-cols-1fr gap-5 pb-10'>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8 pb-10">
            <div className="flex flex-col gap-2 h-[200px] bg-[rgb(229,233,235,.4)] justify-center px-4 relative">
                <h1 className='flex gap-2 pb-4 opacity-90 items-center font-mori1 text-[19px]'>Téléphone</h1>
                    <a href='' className="flex items-center gap-3 text-[15px] font-mori"><BiPhoneCall className='text-[17.5px]'/> +212 604-248-395</a>
                    <a href='' className="flex items-center gap-3 text-[15px] font-mori"><BiSolidPhoneCall  className='text-[17.5px]'/> +212 691-990-259</a>
                    <GoPlus className='absolute -top-2 -left-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -top-2 -right-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -bottom-2 -right-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -bottom-2 -left-2 text-main2 text-[20px]'/>
            </div>

            <div className="flex flex-col bg-[rgb(229,233,235,.4)] gap-2 h-[200px] justify-center px-4 relative">
                <h1 className='flex gap-2 pb-4 opacity-90 items-center font-mori1 text-[19px]'>adresse</h1>
                <a href='' className="flex font-mori shrink-[2] items-start gap-3 text-[14.5px]"><MdLocationPin className='text-[17.5px]  relative top-[1.5px]'/> 37-15 Rue du Yamen, Casablanca</a>
                <a href='' className="flex font-mori shrink-[2] w-full items-start gap-3 text-[14.5px]"><MdOutlineLocationOn className='text-[19.5px]  relative top-[1.5px]'/> N, Rue 5, 26 Bd du Fouarat , Casablanca</a>
                    <GoPlus className='absolute -top-2 -left-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -top-2 -right-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -bottom-2 -right-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -bottom-2 -left-2 text-main2 text-[20px]'/>
            </div>
            
            <div className="flex flex-col bg-[rgb(229,233,235,.4)] gap-2 h-[200px] justify-center px-4 relative">
                <h1 className='flex gap-2 pb-4 opacity-90 items-center font-mori1 text-[19px]'>Suivez-nous</h1>
                <div className="flex gap-3 flex-wrap items-center w-full">
                    {
                    Linkss.map((item, i) => <a key={i} className='size-[38px] rounded-full hover:bg-main hover:text-[#f9f9f9] text-black/80 text-[14.5px] border-[.5px] border-black/20 flex items-center justify-center' href={item.href}>{item.icon}</a>)
                    }
                </div>
                    <GoPlus className='absolute -top-2 -left-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -top-2 -right-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -bottom-2 -right-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -bottom-2 -left-2 text-main2 text-[20px]'/>
            </div>

            <div className="flex flex-col bg-[rgb(229,233,235,.4)] gap-2 h-[200px] justify-center px-4 relative">
                <h1 className='flex gap-2 pb-4 opacity-90 items-center font-mori1 text-[19px]'>Email</h1>
                <a href='' className="flex font-mori shrink-[2] items-start gap-3 tracking-wide text-[15px]"><MdOutlineAlternateEmail className='text-[17.5px]  relative top-[1.5px]'/> contact@imap.ma</a>
                <a href='' className="flex font-mori shrink-[2] items-start gap-3 tracking-wide text-[15px]"><CiVoicemail className='text-[17.5px]  relative top-[1.5px]'/>  contact.imap@gmail.com</a>
                
                    <GoPlus className='absolute -top-2 -left-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -top-2 -right-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -bottom-2 -right-2 text-main2 text-[20px]'/>
                    <GoPlus className='absolute -bottom-2 -left-2 text-main2 text-[20px]'/>
            </div>
        </div>

        <div className="flex w-full flex-col gap-6">
            {/* <p className='flex gap-2 opacity-90 items-center font-mori1 text-[19px]'><span className='size-2 rounded-full bg-black/80'></span> Location</p> */}
            <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6198199059386!2d-7.612786500000001!3d33.589219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29e135bc767%3A0x996cc0c9356b767!2s37-15%20Rue%20du%20Y%C3%A9men%2C%20Casablanca%2020250!5e0!3m2!1sen!2sma!4v1737142249435!5m2!1sen!2sma" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Info
