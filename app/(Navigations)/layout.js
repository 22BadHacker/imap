'use client'
import React, { useEffect, useState } from 'react'
import Social from '../component/Social'
import Footer from '../component/Footer';
import NavBar from '../component/NavBar';
import Banner from '../component/Banner';
import Preloader from '../component/Preloader';


const layout = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Matches roughly with 100% progress

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='grid   grid-rows-[auto_1fr_auto] h-screen overflow-y-scroll'>
            
              <header className="  z-20  relative    w-full h-auto py-[14px] ">
                  <NavBar/>

              </header>

            <div className="">
                {/* {isLoading ? <Preloader /> : children} */}
                {children}
                {/* <Preloader />  */}

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
