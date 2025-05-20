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
                <Footer />
          </section>
    </div>
  )
}

export default layout
