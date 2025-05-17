'use client'
import React from 'react'
import Social from '../component/Social'
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
import Banner from '../component/Banner';


const layout = ({ children }) => {
  return (
    <div className='grid   grid-rows-[auto_1fr_auto] h-screen overflow-y-scroll'>
            
              <header className="  z-20  relative    w-full h-auto py-[14px] ">
                  <NavBar/>

              </header>

            <div className="">
                {children}

                <Social />
              </div>

            
          <section className="grid grid-cols-1 ">
           
            {/* <div className="w-full max-w-[1450px]  px-5 mx-auto  sm:flex hidden ">

              <div className="w-full overflow-hidden  h-auto  border-y-[1.5px] border-y-[#e4e6ef]/60 py-3 bg-[#ff391e] px-6">
              
                    <Banner />
                  </div>
            </div> */}
                <Footer />
          </section>
    </div>
  )
}

export default layout
