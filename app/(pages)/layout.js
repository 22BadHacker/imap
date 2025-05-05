'use client'
import React from 'react'
import Social from '../component/Social'
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';


const layout = ({ children }) => {
  return (
    <div className='grid  grid-rows-[auto_1fr_auto] h-screen overflow-y-scroll'>
            
              <header className="  z-20   py-[18px] mx-auto w-full h-auto">
                  <NavBar/>

              </header>

            <div className="">
                {children}

                <Social />
              </div>

            

            <section className="relative  w-full h-auto bg-[#f5f9ff] pb-4 pt-20 ">
                <Footer />
            </section>
    </div>
  )
}

export default layout
