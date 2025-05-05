import React from 'react'
import Contact from './Contact'
// import Sign from './Sign'

export const metadata = {
  title: "𝗜𝗠𝗔𝗣 | Contact",
  description: "IMAP.ma",
};


const page = () => {
  return (
    <div className='w-full relative h-auto  pb-[100px]'>
        <Contact />
      {/* <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div> */}
      {/* <div className="w-full overflow-hidden relative coontain ">
          {
              [...Array(10)].map((_, i) => <div className="absolute Bubbles duration-[200ms] ease-in-out w-[200px] h-[200px] even:bg-blue-500 blur-[100px] opacity-30 odd:bg-red-500 rounded-full" key={i} style={{top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`}} />)
          }

        </div> */}
        
    </div>
  )
}

export default page
