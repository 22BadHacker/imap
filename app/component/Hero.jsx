import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    
            <div className="grid grid-rows-[1fr_.4fr]  gap-6 w-full h-auto py-[120px]">
                <div className="flex gap-3 flex-col ">
                {/* <p className='font-semibold  text-[16px] tracking-wider text-main2 flex gap-1 items-center'>Institut des Métiers Appliqués Privé</p> */}
                 <h1 className='sm:text-[75px] text-[#1f1f1f] max-w-[700px] font-morir text-[40px] flex text-wrap leading-[1.2] font-[800] opacity-90'>
                        Ensemble, allons plus loin.
                    </h1>

                    <Link className='bg-main2 font-bold px-5 py-2 rounded-full w-fit relative top-2 text-white'  href={'/Contact'}>Contact us</Link>
                        
                </div>

                <div className="w-full flex justify-end  pt-10 ">
                    {/* <p className='text-[20px] text-[#1f1f1f] max-w-[400px] text-right'>Ici, on ne suit pas juste une formation — on trace son propre chemin.</p> */}
                    <p className='text-[18px] font-semibold text-[#1f1f1f] max-w-[460px] text-right font-morir'>Un lieu, une équipe, une énergie… pour t’aider à devenir la personne que tu rêves d’être — créatif, curieux, libre.</p>
                    
                </div>
            </div>
   
  )
}

export default Hero
