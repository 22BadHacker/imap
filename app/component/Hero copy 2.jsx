import Link from 'next/link'
import React from 'react'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Buttoon from './BiigButton2';
import BannerFormations from './BannerFormations';


const Hero = () => {
  return (
    <>
        <div className="w-full relative  h-auto max-w-[1450px] px-5 mx-auto pb-10 pt-[150px]">
                {/* <div className="absolute z-[1] top-[80px] left-0 size-[350px] rounded-full bg-gradient-to-tl from-red-500 to-pink-400 blur-[100px] opacity-65"></div>
                <div className="absolute z-[1] -bottom-10 right-5 size-[350px] rounded-full bg-gradient-to-tl from-[#94d4b6] to-blue-500 blur-[100px] opacity-80"></div> */}
            <div className="w-full z-[1] relative h-auto flex flex-col  items-center gap-[40px]">

                <div className="flex flex-col items-center w-full gap-3">
                    <p className='font-space_grotesk  font-semibold text-[17px] text-[#2f2f2e]'>Construis ton avenir, ici et maintenant, avec nous.</p>
                    <h1 className='text-[85px] tracking-wide z-[5] font-[800]  leading-[1.15] font-morir max-w-[1100px] text-[#1f1f1f] opacity-95 text-center'>Chaque talent <span className='w-[120px] h-[50px] mx-1 inline-flex items-center justify-center  relative border-[2px] border-main2 text-main2 rounded-full'><LiaLongArrowAltRightSolid className='inline h-fit absolute' /></span> mérite d’être  <span className=''>écouté, guidé, révélé</span>.</h1>
                </div>

                <Buttoon url={'/Contact#rejoignez-nous'} name={'Rejoignez nous'} />

                {/* <Link className='bg-main2 hover:bg-main font-poppins duration-200 shadow-[0px_3px_0px_#010302] ease-in-out font-semibold px-5 text-[18px] py-[12px] rounded-full w-fit relative top-3 text-white' href={'/'}>Rejoignez Nous</Link> */}
            </div>
        </div>


        {/* <div className="overflow-hidden  h-auto w-full py-2  bg-main  ">
          <BannerFormations />

         </div> */}

    </>
    
   
  )
}

export default Hero


//  <h5 className='text-[17px] font-medium text-[#1f1f1f] max-w-[500px] text-left font-'>Un lieu, une équipe, une énergie… pour t’aider à devenir la personne que tu rêves d’être — créatif, curieux, libre.</h5>