'use client'
import React, { useState, useRef } from 'react'
import StoryVideo from './StoryVideo'
import Image from 'next/image';

const Storys = () => {
    const [showStory, setShowStory] = useState(false);
    const videoRef = useRef(null);
  return (
    <>
        <div className="grid grid-cols-4 gap-8">
                    <div className="flex items-center justify-center size-[300px] rounded-full bg-gray-100">
                       

                    </div>
                </div>
                
                  
            {showStory && (
                <StoryVideo
                src="/videos/infographie_ad.mp4"
                onClose={() => setShowStory(false)}
                />
            )}
    </>
  )
}

export default Storys


//  {/* <button
//                             onClick={() => setShowStory(true)}
//                             className="px-4 py-2 bg-black text-white rounded-lg"
//                         >
//                             Voir la Story
//                         </button> */}

//                         {/* <video className='w-full h-full object-cover' onClick={() => setShowStory(true)} src={"/videos/infographie_ad.mp4"} ref={videoRef}  /> */}