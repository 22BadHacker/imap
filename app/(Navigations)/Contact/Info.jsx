import React from 'react'

const Info = () => {
  return (
    <>
      <div className="lg:flex lg:justify-between sm:gap-20 gap-8 h-auto grid grid-cols-1 sm:grid-cols-2 lg:flex-wrap">
                <div className="flex gap-1 flex-col ">
                    <p className='uppercase font-morir   text-black contact-title opacity-70 pb-3 text-[17px] flex gap-1 items-center'> <span className=''>/</span>numéro de téléphone</p>
                    
                    <a href='tel:+212604248395' className='text-[24px] font-[450] hover:underline leading-tight'>+212 6 04 24 83 95</a>
                    <a href='tel:+212691990259' className='text-[24px] font-[450] hover:underline leading-tight'>+212 6 91 99 02 59 </a>
                </div>
                <div className="flex gap-1 flex-col">
                    <p className='uppercase font-morir   text-black contact-title opacity-70 pb-3 text-[17px] flex gap-1 items-center'> <span className=''>/</span>email</p>
                    <a href='mailto:contact.imap@gmail.com' className=' text-[24px] font-[450] hover:underline leading-tight'>contact.imap@gmail.com</a>
                </div>
                <div className="flex gap-1 flex-col">
                <p className='uppercase font-morir   text-black contact-title opacity-70 pb-3 text-[17px] flex gap-1 items-center'> <span className=''>/</span>adresse</p>
                    <a target='_blank' href='https://www.google.com/maps/place/Skills+Institute+Applied+Private+Ima+-+%D9%85%D8%B9%D9%87%D8%AF+%D8%A7%D9%84%D9%85%D9%87%D9%86+%D8%A7%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D9%8A%D8%A9+%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%E2%80%AD/@33.5825423,-7.5554973,17z/data=!3m1!4b1!4m6!3m5!1s0xda7cdd6601350ed:0x7b691318bf5d9619!8m2!3d33.5825423!4d-7.5554973!16s%2Fg%2F11fs08kdwb?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D' className=' text-[24px]  font-[450] hover:underline leading-tight'>N, Rue 5, 26 Bd du Fouarat, <br /> Casablanca 20670</a>
                </div>
                <div className="flex gap-1 flex-col">
                    <p className='uppercase font-morir   text-black contact-title opacity-70 pb-3 text-[16.5px] flex gap-1 items-center'> <span className=''>/</span>Réseaux sociaux</p>
                    <a target='_blank' href='https://www.instagram.com/institut.ima/' className=' text-[24px] font-[450] hover:underline leading-tight'>Instagram</a>
                    <a target='_blank' href='' className=' text-[24px] font-[450] hover:underline leading-tight'>Facebook</a>
                    <a target='_blank' href='https://wa.me/212604248395' className=' text-[24px] font-[450] hover:underline leading-tight'>WhatsApp</a>
                </div>

              </div>
    </>
  )
}

export default Info
