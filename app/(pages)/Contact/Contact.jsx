import React from 'react'
import F from '@/app/component/First'
import SignUp from './SignUp'
import Info from './Info'
import Marquee from './Marquee'
import Form from './Form'
import FAQAccordion from '../Formations/Faq'

const selecte = ['Informatique', 'Genie civil', "Bureautique", 'Comptabilité', 'Infographie','Marketing','logistique et transport', 'Gestion des entreprises' ,'La Langue Anglais' ]


const Contact = () => {
  return (
    <div className='w-full  relative container h-auto max-w-[1450px] sm:px-5 px-5 mx-auto grid grid-cols-1 gap-[40px]'>
        {/* {
            [...Array(20)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-30 odd:bg-red-500 rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
        } */}
        <div className="w-full flex flex-col gap-[100px] relative h-auto py-[120px] z-[1]">
            <div className="flex gap-3  flex-col relative pb-6"> 

              {/* <div className="absolute right-10 top-0 blur-[80px] size-[250px] rounded-full bg-main2"></div>             */}
              {/* <div className="absolute right-10 top-5 blur-[0px] size-[250px] rounded-full border-[4px] border-main">highlight </div>             */}
                <p className='font-semibold uppercase text-[14.5px] tracking-wider font-metro text-main2 flex gap-1 items-center'>
                    <span className='blink'></span> Contact
                </p>
                <h1 className='sm:text-[60px] font-morir text-[#1a1918] text-[40px] flex text-wrap leading-snug font-bold opacity-90'>
                    Ensemble, Créons <br />l'Avenir dès Aujourd'hui
                </h1>


            </div>

            <div className="grid grid-cols-1 gap-10 sm:pt-12 z-[20]">

            {/* <p className='uppercase opacity-70 pb-1 text-[14.5px]'>Inscrivez-vous maintenant</p> */}
              
              <div className="lg:flex lg:justify-between sm:gap-20 gap-8 h-auto grid grid-cols-1 sm:grid-cols-2 lg:flex-wrap">
                <div className="flex gap-1 flex-col ">
                    <p className='uppercase text-black contact-title opacity-70 pb-2 text-[14.5px] flex gap-1 items-center'> <span className=''>/</span>numéro de téléphone</p>
                    
                    <a href='tel:+212604248395' className='text-[24px] font-[450] hover:underline'>+212 6 04 24 83 95</a>
                    <a href='tel:+212691990259' className='text-[24px] font-[450] hover:underline '>+212 6 91 99 02 59 </a>
                </div>
                <div className="flex gap-1 flex-col">
                    <p className='uppercase text-black contact-title opacity-70 pb-2 text-[14.5px] flex gap-1 items-center'> <span className=''>/</span>email</p>
                    <a href='mailto:contact.imap@gmail.com' className=' text-[24px] font-[450] hover:underline'>contact.imap@gmail.com</a>
                </div>
                <div className="flex gap-1 flex-col">
                <p className='uppercase text-black contact-title opacity-70 pb-2 text-[14.5px] flex gap-1 items-center'> <span className=''>/</span>adresse</p>
                    <a href='maps' className=' text-[24px] font-[450] hover:underline'>37-15 Rue du Yamen, <br /> Casablanca</a>
                </div>
                <div className="flex gap-1 flex-col">
                    <p className='uppercase text-black contact-title opacity-70 pb-2 text-[14.5px] flex gap-1 items-center'> <span className=''>/</span>Réseaux sociaux</p>
                    <a href='' className=' text-[24px] font-[450] hover:underline'>Instagram</a>
                    <a href='' className=' text-[24px] font-[450] hover:underline'>Facebook</a>
                    <a href='' className=' text-[24px] font-[450] hover:underline'>WhatsApp</a>
                </div>

              </div>

            <div className="flex w-full flex-col gap-6 ">
            <p className='uppercase text-black contact-title opacity-70 pb-1 text-[14.5px] flex gap-1 items-center'> <span className=''>/</span>notre emplacement</p>
              <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6198199059386!2d-7.612786500000001!3d33.589219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d29e135bc767%3A0x996cc0c9356b767!2s37-15%20Rue%20du%20Y%C3%A9men%2C%20Casablanca%2020250!5e0!3m2!1sen!2sma!4v1737142249435!5m2!1sen!2sma" width="600" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
            </div>
              
              {/* <FAQAccordion/> */}

              {/* <div className="w-full border-black/80 my-4  border-b-[1px]"></div> */}

              <Form/>

            </div>
           
        </div>

              
    </div>
  )
}

export default Contact
