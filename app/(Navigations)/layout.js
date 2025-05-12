'use client'
import React from 'react'
import Social from '../component/Social'
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
import Banner from '../component/Banner';


const layout = ({ children }) => {
  return (
    <div className='grid md:pt-[14px] pt-[16px]  grid-rows-[auto_1fr_auto] h-screen overflow-y-scroll'>
            
              <header className="  z-20  relative    w-full h-auto">
                  <NavBar/>

              </header>

            <div className="">
                {children}

                <Social />
              </div>

            
          <div className="grid grid-cols-1 ">
            <section className="relative pb-4  w-full h-auto bg-[#f5f9ff]  pt-[50px] ">
                
                <Footer />
            </section>
            {/* <div className="w-full sm:flex hidden bg-[#e4e6ef]/60 py-3">

              <div className="w-full overflow-hidden  h-auto max-w-[1450px] sm:px-5 px-5 mx-auto ">
              
                    <Banner />
                  </div>
            </div> */}
          </div>
    </div>
  )
}

export default layout
