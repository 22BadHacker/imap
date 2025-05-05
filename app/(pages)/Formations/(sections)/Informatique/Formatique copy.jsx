import React from 'react'
import TextLoop1 from '../TextLoop'
import img1 from '../../Assets/cood.jpg'
import img2 from '../../Assets/developer-8829735_1280-e1724354582311-1024x709.jpg'
import img3 from '../../Assets/web.jpg'
import Image from 'next/image'

const Formatique = () => {
  return (
    <div className='w-full container  z-[1] h-auto max-w-[1450px] px-5  sm:pt-[0px] mx-auto grid grid-cols-1 gap-[40px]'>
        <div className="w-full relative justify-between coontain h-screen flex flex-col  items-center  py-[100px] pt-[140px]  text-center">
            {
                [...Array(20)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-60 odd:bg-red-500 rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
            }
            <div className="w-full flex flex-col gap-0 justify-center items-center relative">
              {/* <p className='text-[20px] text-main2  w-fit'>𝗜𝗠𝗔𝗣 | <span className='text-main'>Institut des Métiers Appliqués Privée</span></p> */}
              <h1 className='sm:text-[120px] text-black/85 z-[1] relative font-morir text-[50px]  font-bold opacity-90'>Informatique</h1>
            </div>

              {/* <TextLoop1 /> */}
            {/* <h5 className='text-[18px]'>Maîtrisez les compétences essentielles en matière de codage, créez des projets percutants et lancez votre carrière en tant que développeur Web.</h5> */}
            

            <div className="w-full flex gap-5 items-center pb-10">
                <Image alt='' className='w-[20vh] -rotate-12 h-[200px] object-cover border-main2 p-1 border-[.5px]' src={img1}/>
                <Image alt='' className='w-[20vh] -rotate-12 h-[200px] object-cover border-main p-1 border-[.5px]' src={img2}/>
                <Image alt='' className='w-[20vh] -rotate-12 h-[200px] object-cover border-black/50 p-1 border-[.5px]' src={img3}/>
            </div>

        </div>
    </div>
  )
}

export default Formatique
