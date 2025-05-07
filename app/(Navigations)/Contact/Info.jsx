import React from 'react'

const Info = () => {
  return (
    <>
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
    </>
  )
}

export default Info
