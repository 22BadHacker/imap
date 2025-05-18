'use client'
import React, {useState} from 'react'

import Form2 from '@/app/component/Form'


const Formailer = () => {

  return (
    <div id='rejoignez-nous' className='grid grid-cols-1 lg:grid-cols-[.8fr_1fr] gap-20 lg:gap-12 h-auto pt-[40px] w-full relative'>
        <div className="flex flex-col gap-2">
            <p className='uppercase font-morir w-fit   text-black contact-title opacity-80 pb-3 text-[16.5px] flex gap-1 items-center'> <span className=''>/</span>Inscrivez-vous maintenant</p>
            <h1 className='sm:text-[54px] font-noto_sans text-[40px] leading-[1.22] md:max-w-[80%] lg:max-w-[500px] text-black/80 font-semibold tracking-[.5x]'>Osez rêver plus grand, commencez aujourd’hui.</h1>
        </div>
        <Form2/>
        
    </div>
  )
}

export default Formailer


