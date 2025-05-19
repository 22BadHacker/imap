import Link from 'next/link'
import React from 'react'
import { LiaLongArrowAltRightSolid, LiaStarOfLifeSolid } from "react-icons/lia";
import Buttoon from './BiigButton2';
import BannerFormations from './BannerFormations';


const Hero = () => {
  return (
    <div className=' w-full h-screen'>
        <div className="w-full   h-auto max-w-[1450px] px-5 mx-auto pb-10 pt-[140px]">
            
            {/* <div class="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div> */}
            <div className="w-full z-[1] relative h-auto flex flex-col  items-center gap-[40px]">
                {/* <div className="absolute z-[1] -bottom-10 right-5 size-[350px] rounded-full bg-gradient-to-tl from-[#94d4b6] to-blue-500 blur-[150px] opacity-60"></div> */}

                <div className="flex flex-col items-center w-full gap-3">
                    <p className='font-noto_sans uppercase flex items-center gap-2 font-medium text-[14px]  text-main2'><span className='bg-main2 size-[7px] rounded-full relative -top-[1.1px]'></span> Institut des Métiers Appliqués Privé </p>
                    <h1 className='text-[75px] tracking-wide z-[5] font-[700]  leading-[1.15] font-sans max-w-[1100px] text-[#1f1f1f] opacity-90 text-center'>Chaque talent  mérite d’être  <span className=''>écouté, guidé, révélé</span>.</h1>
                    <h5 className='text-[16.5px] leading-relaxed text-center opacity-85 font-medium text-[#1f1f1f] max-w-[800px] pt-6'>Chez IMAP, nos formations sont façonnées pour le réel. Ancrées dans la pratique, elles vous préparent aux métiers d’aujourd’hui et de demain — ici comme ailleurs. Parce qu’apprendre, c’est aussi bâtir sa place dans le monde.</h5>
                </div>

                <div className="flex gap-12 items-center w-full justify-center">
                    <Link className='bg-main2 hover:bg-main font-noto_sans duration-200 ease-in-out font-medium px-5 text-[16px] py-[12px] rounded-full w-fit relative top-3 text-white' href={'/'}>rejoignez nous</Link>
                    {/* <div className="w-[100px] h-[1.5px] bg-main2"></div> */}
                    <Link className=' flex items-center gap-2 hover:bg-main font-noto_sans duration-200 ease-in-out font-medium px-5 text-[16px] py-[12px] rounded-full w-fit relative top-3 text-black' href={'/'}> explorez nos formations <span className='border-main2 border-[1px] text-main2 flex  items-center  justify-center rounded-full w-8 h-[20px] text-[16px]'><LiaLongArrowAltRightSolid/></span></Link>

                </div>

                {/* <Buttoon url={'/Contact#rejoignez-nous'} name={'Rejoignez nous'} /> */}

            </div>
        </div>
             {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" /> */}

        {/* <div className="overflow-hidden  h-auto w-full py-2  bg-main  ">
          <BannerFormations />

         </div> */}

    </div>
    
   
  )
}

export default Hero


//  <h5 className='text-[17px] font-medium text-[#1f1f1f] max-w-[500px] text-left font-'>Un lieu, une équipe, une énergie… pour t’aider à devenir la personne que tu rêves d’être — créatif, curieux, libre.</h5>

// {/* <span className='spaan flex flex-col items-end  justify-center gap-[2px] relative size-6'></span>  */}