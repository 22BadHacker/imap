import React from 'react'
import Info from './Info'
import Formailer from './Formailer'

const Contact = () => {
  return (
    <div className='w-full  relative container h-auto max-w-[1450px] sm:px-5 px-5 mx-auto grid grid-cols-1 gap-[40px]'>

        <div className="w-full flex flex-col gap-[100px] relative h-auto py-[120px] z-[1]">
            <div className="flex gap-2  flex-col relative pb-6"> 

                <p className='font-bold uppercase text-[17.5px] tracking-wider font-morir text-main2 flex gap-1 items-center'>
                    <span className='blink'></span> Contact
                </p>
                <h1 className='sm:text-[60px] max-w-[720px] leading-tight font-sans text-[#1a1918] text-[40px] flex text-wrap  font-bold opacity-90'>
                    Ensemble, Créons l'Avenir dès Aujourd'hui
                </h1>


            </div>

            <div className="grid grid-cols-1 gap-10 sm:pt-12 z-[20]">
              
              <Info />
            <div className="flex w-full flex-col gap-6 ">
              
              <p className='uppercase font-morir   text-black contact-title opacity-70 pb-3 text-[17px] flex gap-1 items-center'> <span className=''>/</span>notre emplacement</p>
              <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6198199059386!2d-7.612786500000001!3d33.589219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29e135bc767%3A0x996cc0c9356b767!2s37-15%20Rue%20du%20Y%C3%A9men%2C%20Casablanca%2020250!5e0!3m2!1sen!2sma!4v1737142249435!5m2!1sen!2sma" width="600" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            </div>
              
              <Formailer/>

            </div>
           
        </div>

              
    </div>
  )
}

export default Contact
