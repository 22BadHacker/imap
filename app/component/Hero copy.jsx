import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    
            <div className="grid grid-rows-[1fr_.4fr]   w-full h-auto pb-[80px] pt-[100px]">
                <div className="flex gap-3 flex-col ">
                 <h1 className='sm:text-[75px] text-[#1f1f1f] max-w-[700px] font-morir text-[40px] flex text-wrap leading-[1.2] font-[800] opacity-90'>
                        Ensemble, allons plus loin.
                    </h1>
                    <p className='text-[17px] font-medium text-[#1f1f1f] max-w-[500px] text-left font-morir'>'' Un lieu, une équipe, une énergie… pour t’aider à devenir la personne que tu rêves d’être — créatif, curieux, libre. ''</p>
                    <div className="flex gap-10 items-center pt-2">
                        <Link className='bg-main2 hover:bg-main duration-200 ease-in-out font-semibold px-5 text-[13px] py-[12px] rounded-full w-fit relative top-3 text-white'  href={'/Contact#rejoignez-nous'}>Rejoignez-nous</Link>
                        <Link className='bg-main hover:bg-main duration-200 ease-in-out font-semibold px-5 text-[13px] py-[12px] rounded-full w-fit relative top-3 text-white'  href={'/Contact#rejoignez-nous'}>Découvrir nos formations</Link>

                    </div>
                        
                </div>

                <div className="w-full flex justify-end  pt-10 ">
                    {/* <p className='text-[20px] text-[#1f1f1f] max-w-[400px] text-right'>Ici, on ne suit pas juste une formation — on trace son propre chemin.</p> */}
                    
                </div>
            </div>
   
  )
}

export default Hero
