import Image from 'next/image';
import React from 'react'
// import img from '../Assets/Work2/colors.jpeg'
import img from '../Assets/Work2/hand2.webp'
import logo from '../Assets/IMAPLogo/IMAP1.svg'


export const metadata = {
    title: "𝗜𝗠𝗔𝗣 | S'inscrire",
    description: "IMAP.ma",
  };

const page = () => {
  return (
    <div className='w-full gap-8 h-screen overflow-hidden grid-rows-1 bg-[#eee] grid grid-cols-[.8fr_1fr]  p-3'>
        <div className="w-full h-full relative shadow">
          <Image className='w-full h-full object-cover' src={img} alt='piccs'/>
          <div className="flex z-3  p-3  bottom-0 left-0 gap-2 absolute backdrop-blur-[40px] bg-white w-full h-[200px]">
            <h2 className='font-bold text-[30px] text-[#2b2e3a]'>Construisez votre avenir avec nous.</h2>
          </div>
        </div>

        <form className='w-full flex flex-col gap-5 px-2 py-3'>
            <h1 className='flex pb-20 gap-2 opacity-90 items-center font-mori1 text-[22px]'><span className='size-2 rounded-full bg-black/80'></span> Inscrivez-vous maintenant</h1>

            <div className="grid grid-cols-1 ">
              <div className="grid grid-cols-2 gap-4">
                    <div className="relative flex flex-col gap-2">
                        <input 
                          type="text" 
                          id="prenom" 
                          className="peer border-b-[1.5px] border-[#5d5f62] outline-none bg-transparent py-2" 
                        />
                        <label 
                          htmlFor="prenom" 
                          className="absolute left-0 mt-5  text-[#757e89] text-[30px] transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#868e98] peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#2b2e3a]"
                          style={{ top: '0', transform: 'translateY(-50%)' }}
                        >
                          Prenom
                        </label>
                    </div>
              </div>
            </div>
        </form>
    </div>
  )
}

export default page

// {/* <p className='flex gap-2 opacity-90 items-center font-mori1 text-[19px]'><span className='size-2 rounded-full bg-black/80'></span> Inscrivez-vous maintenant</p>
// <p className='flex gap-2 opacity-90 items-center font-mori1 text-[19px]'><span className='size-2 rounded-full bg-black/80'></span> Institut des Métiers Appliqués Privée</p>
// <h1 className='text-[35px] max-w-[400px] text-black/80 font-semibold tracking-[.5x]'>Faites partie de quelque  chose de plus grand.</h1> */}