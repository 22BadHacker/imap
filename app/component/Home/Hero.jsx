import React from 'react'
import Image from 'next/image'
import logo from '../../Assets/Hero/haat.png'
import yellow from '../../Assets/Hero/yellow.jpg'
import blue from '../../Assets/Hero/blue.jpg'
import en from '../../Assets/Hero/een.jpg'
import { Programmes } from '@/app/(pages)/Formations/Formation'

const Lines = () => (
  <>
    <div className="w-full absolute top-0 left-0 h-screen grid grid-cols-12">
            {
                [...Array(12)].map((_, i) => <div className="w-full h-full border-r-[.5px] border-black/5" key={i}  />)
            }

        </div>
        <div className="w-full absolute top-0 left-0 h-screen grid grid-cols-1">
            {
                [...Array(12)].map((_, i) => <div className="w-full h-full border-t-[.5px] border-black/5" key={i}  />)
            }

        </div>
  </>
)

const Bubb = () => (
  <>
      {
          [...Array(20)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-60 odd:bg-[#c83642] rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
      }
  </>
)



const Hero = () => {
  return (
    <div className='w-full container h-auto max-w-[1450px] sm:px-5  px-5 mx-auto grid grid-cols-1 gap-[40px]'>
      {/* <Lines /> */}
        
       <div className="w-full coontain relative h-screen grid grid-row-[1fr_1fr] pt-[70px]">
          <Bubb />

          <div className='flex flex-col gap-4'>
              {/* <p className='text-[20px] text-main2 font-light'>Institut des Métiers Appliqués Privée</p> */}
              <h1 className='text-[50px] max-w-[900px] tracking-wide text-black/90 font-semibold font-mori'>Votre base pour atteindre vos objectifs plus rapidement grâce à l'apprentissage, à la croissance et au succès !</h1>
              {/* <p className='text-[20px] '>Enroll Today and Take the First Step Towards Greatness!</p> */}
          </div>


          


          {/* <div className="w-full grid grid-cols-[auto_auto]">
              <div className="grid grid-rows-2 grid-cols-6 max-w-[700px]">
                  <div className=" size-[120px] col-span-2 bg-[#e5e9eb]">
                      <Image src={logo} className='object-cover w-[15vh]'  alt='Gradution'/>
                  </div>
                 
                  <div className=" size-[120px] col-span-2">
                      <Image src={yellow} className='size-full object-cover'  alt='Gradution'/>
                  </div>
                 
                  <div className=" size-[120px] ">
                      <Image src={blue} className='size-full object-cover'  alt='Gradution'/>
                  </div>
                  <div className=" size-[120px] ">
                      <Image src={en} className='size-full object-cover'  alt='Gradution'/>
                  </div>
              </div>
          </div> */}
       </div>
       <Programmes />
    </div>
  )
}

export default Hero
