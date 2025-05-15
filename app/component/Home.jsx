import React from 'react'

const Home = () => {
  return (
    <>
        <div className='w-full container h-auto max-w-[1450px] sm:px-5 px-5 mx-auto grid grid-cols-1 gap-[40px]'>

            <div className="w-full relative h-auto py-[120px] z-[1]">
                <div className="flex justify-center items-center gap-3 flex-col md:pb-[120px] ">
                   
                    <p className='font-semibold uppercase text-[14.5px] tracking-wider font-metro text-main2 flex gap-1 items-center'>
                        <span className='blink'></span> Showcase
                    </p>
                    <h1 className='sm:text-[60px] text-[#1f1f1f] max-w-[750px] text-center font-morir text-[40px] flex text-wrap leading-tight font-bold opacity-90'>
                        Galerie des Projets de nos futurs ingénieurs
                        
                    </h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
