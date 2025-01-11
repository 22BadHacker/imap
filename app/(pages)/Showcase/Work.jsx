import Image from 'next/image'
import React from 'react'
import pics1 from '../../Assets/Work/Nike.webp'
import pics2 from '../../Assets/Work/port2.webp'
import pics4 from '../../Assets/Work/Moroc.webp'
import pics5 from '../../Assets/Work/VictoriaBag-min.webp'
import pics3 from '../../Assets/Work/Card.webp'

const list = [
    'Informatique',
    'Genie Civil',
    'bureautique',
    'Infographie'

]

const imgs = [
    {src: pics1, alt:''},
    {src: pics2, alt:''},
    {src: pics3, alt:''},
    {src: pics4, alt:''},
    
    {src: pics5, alt:''},
   
   
]

const Work = () => {
  return (
    <div className='w-screen h-auto max-w-[1450px] px-5 pt-[80px] sm:pt-[120px] mx-auto grid grid-cols-1 gap-[40px]'>


        <div className="w-full flex flex-col  justify-center text-center">
            
            <p className='text-white bg-main mx-auto shadow-[1px_1px_1px_#ee4530]  px-6 py-2 w-fit text-[15px]'>Projets réalisés par nos étudiants talentueux</p>
            {/* <p className='text-white bg-main mx-auto shadow-[1px_1px_1px_#ee4530]  px-6 py-2 w-fit text-[15px]'>Projets réalisés par nos étudiants talentueux</p> */}
            <h1 className='sm:text-[100px] text-[70px] flex text-wrap leading-snug font-bold opacity-80'>Présentation des Projets  de nos étudiants </h1>
        </div>

        <div className="w-full flex justify-center items-center gap-4 flex-wrap">
            {list.map((item, i)=> <p key={i} className='border-[.5px] border-black/50 text-[13px] uppercase px-3 py-2 rounded-full font-normal'>{item}</p>)}
           
            <p className='text-main font-semibold underline italic'>& More...</p>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-4 lg:grid-rows-4 w-full  pt-10 gap-4">
            {/* <div className="w-full h-auto flex flex-col gap-4 "> */}

                {
                    imgs.map((item, i) => <Image key={i} src={item.src} className='object-cover shadow-[.5px_.5px_1px_#1853a0] border-[.5px] border-black/10 w-full h-full saturate-[1.1]' width={500} height={500} alt={item.alt}/>)
                }
                {/* <Image src={pic1} className='object-cover w-full h-full saturate-150' width={500} height={500} alt='Nike'/> */}
                {/* <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <p className='text-[15px]  bg-main text-white bg-opacity-65 px-[4px] font-medium'>Infographie</p>
                        <p className='text-[15px]  bg-main text-white bg-opacity-65 px-[4px] font-medium'>Graphic Design</p>
                        
                    </div>
                    <p>by <span className='text-main underline'>@mounirlagzouli</span></p>
                </div> */}
            {/* </div> */}

            

            
        </div>
        
    </div>
  )
}

export default Work
