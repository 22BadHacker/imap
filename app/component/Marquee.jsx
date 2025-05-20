'use client'
import React,{useState} from 'react'
import { MarqueeData } from '@/Data/Data';

const Marquee = () => {
const [stop, setStop] = useState(false)
  
  return (
    <div className='w-full mar h-[50px]   flex items-center overflow-hidden gap-4'>
        <div onMouseEnter={()=>setStop(true)} onMouseLeave={()=>setStop(false)} className={`flex ${stop ? "paused" : ""} h-auto cursor-pointer animate-marquee  whitespace-nowrap  gap-5`}>
            <MarqueeData />
            <MarqueeData />
            <MarqueeData />
            <MarqueeData />
            <MarqueeData />
            <MarqueeData />
        </div>
      
    </div>
  )
}

export default Marquee