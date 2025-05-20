import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'
import About from './About'
import ImageSlider from './Slider'

const Landing = () => {
  return (
    <div className='flex flex-col gap-2 bg-[#f9fbfc] w-full py-20'>   
      
        <div className="max-w-[1450px]  px-5 mx-auto  w-full h-auto relative grid grid-cols-1 md:grid-cols-2     gap-20">
          <div className="flex gap-4 flex-col">
              <p className='text-[14px] flex items-center gap-1 text-[#1f1f1f] uppercase font-inter font-normal h-fit lg:col-span-1 md:col-span-2'><span className='w-[20px] h-[1.5px] bg-[#1f1f1f]'></span> à propos de nous </p>
              <h3 className='text-[40px] font-inter leading-[1.22] md:max-w-[80%] lg:max-w-[500px] text-[#171717] font-bold tracking-[.5x]'>Apprendre aujourd’hui, réussir demain.</h3>

          </div>

          <div className="flex flex-col gap-6">
            <h5 className='text-[16px] font-inter font-normal'>IMAP est un centre de formation basé au cœur de Casablanca, au Maroc. Ici, on accueille celles et ceux qui veulent apprendre autrement, se former à un métier concret, et avancer avec confiance dans leur avenir. </h5>
            <h5 className='text-[16px] font-inter font-normal'>Que vous soyez passionné par le design graphique, le développement web, ou tout simplement curieux de découvrir votre potentiel, IMAP vous accompagne à chaque étape. </h5>
          </div>

        </div>

        <div className="max-w-[1450px] px-5 mx-auto  w-full h-auto relative flex overflow-x-scroll   py-[100px]  gap-6">
            {/* <ImageSlider /> */}
        </div>


       <About />
    </div>
  )
}

export default Landing


// {/* <div className="max-w-[1450px]  px-5 mx-auto  w-full h-auto relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  pt-[100px]  gap-12">

//           <p className='text-[16.5px] uppercase font-inter font-medium h-fit lg:col-span-1 md:col-span-2'> à propos de nous </p>

//           <div className="flex flex-col gap-6">
//             <h5 className='text-[18px] font-inter font-medium '>IMAP est un centre de formation basé au cœur de Casablanca, au Maroc. Ici, on accueille celles et ceux qui veulent apprendre autrement, se former à un métier concret, et avancer avec confiance dans leur avenir. </h5>
//             <h5 className='text-[16px] font-inter font-normal'>Que vous soyez passionné par le design graphique, le développement web, ou tout simplement curieux de découvrir votre potentiel, IMAP vous accompagne à chaque étape. </h5>
//           </div>

//         </div> */}


// {/* <div className="max-w-[1450px]  px-5 mx-auto  w-full h-auto relative grid grid-cols-1 lg:grid-cols-1  py-[80px]  gap-6">
//           <div className="gap-6 w-full ">
//               <Image alt='' width={600} height={600} className='w-full saturate-[1.3] h-[650px]  object-cover' src={'/Gallerie/color.jpeg'}/>
//               {/* <Image alt='' width={600} height={600} className='w-full h-full rounded-sm object-cover' src={'/Gallerie/hats.jpg'}/>
//               <Image alt='' width={600} height={600} className='w-full h-full rounded-sm col-span-2 object-cover' src={'/Gallerie/hats.jpg'}/> */}
//           </div>
//         </div> */}





// {/* <div className="max-w-[1450px] grid-rows-1  px-5 mx-auto  w-full h-auto relative grid grid-cols-1 lg:grid-cols-[.7fr_1fr]  py-[100px]  gap-6">
//           <div className="border w-full  h-[700px]">
//               {/* <Image alt='' width={600} height={600} className='w-full h-[700px] object-cover' src={'/Gallerie/Flowers.jpeg'}/> */}
//           </div>

//           <div className="grid grid-cols 2 gap-6 h-[700px]">
//               <div className="border col-span-2"></div>
//               <div className="border "></div>
//               <div className="border "></div>
//           </div>
//         </div> */}