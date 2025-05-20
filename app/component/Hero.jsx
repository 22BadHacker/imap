import Link from 'next/link'
import React from 'react'
import { LiaLongArrowAltRightSolid, LiaStarOfLifeSolid } from "react-icons/lia";
import Buttoon from './BiigButton2';
import BannerFormations from './BannerFormations';
import About from './About2';
import Ima from '@/public/IMAPLogo/Vertical_logo.svg'
import Image from 'next/image';
import ScrollVideo from './ScrollVideo';
import Banner from './Banner';
import ImageSlider from './ImageSlide';
import { BsArrowRight } from "react-icons/bs";
import { formation2 } from '@/Data/Data';
import Flowers from '@/public/Gallerie/Flowers.jpeg'
import Marquee from './Marquee';


const Hero = () => {
  return (
   <div className="w-full relative  h-auto max-w-[1450px] px-5 mx-auto pb-[100px] pt-[180px]">
            <div className="w-full z-[1] pb-[100px] relative h-auto flex flex-col  items-center gap-[60px]">

                <div className="absolute top-[120px] opacity-90 blur-[70px] right-0 bg-blue-500 w-[400px] -rotate-[45deg] h-[80px]"></div>
                <div className="absolute top-[100px] opacity-90 blur-[70px] left-0 bg-red-500 w-[400px] -rotate-[45deg] h-[80px]"></div>

                <div className="flex flex-col items-center w-full gap-6">
                    <p className='font-inter  font-semibold sm:text-[17px] text-[16px] text-[#2f2f2e]'>Construis ton avenir, ici et maintenant, avec nous.</p>
                    <h1 className='sm:text-[85px] text-[60px] relative -top-[4px] tracking-wide z-[5] font-[800]  leading-[1.15] font-morir max-w-[1100px] text-[#1f1f1f] opacity-95 text-center'>Chaque talent <span className='sm:w-[120px] sm:h-[50px] w-[90px] h-[35px] mx-1 inline-flex items-center justify-center overflow-hidden relative  rounded-full'><Image src={Flowers} className='inline h-full w-full object-cover'/></span> mérite d’être  <span className=''>écouté, guidé, révélé</span>.</h1>

                    <h6 className='max-w-[900px] sm:text-[16px] text-[14px] text-center font-inter'>Chez IMAP, nos formations sont façonnées pour le réel. Ancrées dans la pratique, elles vous préparent aux métiers d’aujourd’hui et de demain — ici comme ailleurs. Parce qu’apprendre, c’est aussi bâtir sa place dans le monde.</h6>
                </div>

                {/* <Buttoon url={'/Contact#rejoignez-nous'} name={'Rejoignez nous'} /> */}

                <div className="flex gap-9 flex-wrap items-center pt-2">
                    <Link href={'/Contact#rejoignez-nous'} className='bg-main hover:bg-main2 font-normal font-inter  text-white text-[15px] sm:text-[16.5px] duration-200 ease-in-out px-[2px] rounded-full py-[2px] pl-3 flex items-center gap-3 liink'>Rejoignez nous <span className='sm:size-[43px] size-[40px]  flex items-center justify-center bg-white text-main text-[20px] rounded-full  spaaan'><BsArrowRight /></span></Link>

                    <Link className='border-main hover:bg-main2 hover:text-white hover:border-main2 duration-200 ease-in-out text-main font-semibold font-inter  px-3 border-[1.5px] sm:py-[11px] py-[9px] rounded-full text-[15px] sm:text-[16.5px]' href={'/Formations'}>Nos formations</Link>
                    
                </div>

                {/* <About /> */}
            </div>

    </div>
    
    
)
}

export default Hero

//  <p className='max-w-[600px] text-[25px]  leading-snug font-semibold text-[#111111]'>Chez IMAP, nos formations sont façonnées pour le réel. Ancrées dans la pratique, elles vous préparent aux métiers d’aujourd’hui et de demain — ici comme ailleurs. Parce qu’apprendre, c’est aussi bâtir sa place dans le monde.</p>

{/* <span className='bg-[#1f1f1f] size-[12px] rounded-full'></span> */}
{/* <video src="/videos/hats.mp4"  className="w-full rounded-[20px] h-full object-cover" autoPlay muted loop /> */}
{/* <h5 className='font-inter max-w-[600px] text-[16px]  leading-snug font-semibold text-[#111111]'>nos programmes sont façonnées pour le réel. Ancrées dans la pratique, elles vous préparent aux métiers d’aujourd’hui et de demain — ici comme ailleurs. Parce qu’apprendre, c’est aussi bâtir sa place dans le monde.</h5> */}

// <span className='bg-main text-white size-[34px] rounded-full flex items-center justify-center text-[22px]'><LiaLongArrowAltRightSolid /></span>




// {/* <div className="pt-[130px] w-full flex flex-col gap-6 " >
//     <div className="grid grid-cols-2 w-full  gap-8 " >

//         <div className="flex flex-col">
//             <p className='uppercase font-inter   text-black contact-title opacity-70 pb-3 text-[15px] flex gap-1 items-center'> <span className=''>/</span>Nos programmes</p>

//             <h3 className='max-w-[400px] text-[32px] leading-tight font-semibold text-[#111111] opacity-95 flex items-center gap-2 '>Nos programmes, votre tremplin vers le succès.</h3>

//         </div>


//         <div className="flex flex-col">
            
//             {
//                 formation2.map((item, i) => (

//                     <div key={i} className="pb-[26px] pt-[20px] first:pt-0 flex flex-col gap-[6px] border-b-[1.5px] border-b-[#e7ebf2]">
//                         <div className="flex items-center justify-between">
//                             <h4 className='text-[17px] uppercase  leading-snug font-semibold text-[#111111]'>{item.name}</h4>
//                             <span className=' text-main2 font-[800] font-space_grotesk text-str  text-[22px]'>00{i + 1}</span>
//                         </div>
//                         <h6 className='max-w-[510px] text-[15px] font-medium text-[#1f1f1f] font-inter'>{item.desc}</h6>
//                     </div>
//                 ))
//             }


//         </div>


//     </div>

// </div> */}