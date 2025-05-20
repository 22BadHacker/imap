'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/Gallerie/Designer.jpeg',
    title: 'infographie',
    tags: 'Créativité – DESIGN – Branding',
  },
  {
    src: '/img2.jpg',
    title: 'Développement web',
    tags: 'Programmation – DEVELOPMENT – Frameworks ',
  },
  {
    src: '/Gallerie/Architect.jpeg',
    title: 'Ginie civil',
    tags: 'RESEARCH – Architecture – Maîtrise d’œuvre',
  },
//   {
//     src: '/img4.jpg',
//     title: 'LEMKUS',
//     tags: 'RESEARCH – STRATEGY – DESIGN – DEVELOPMENT',
//   },
];

export default function ImageSlider() {
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className=" py-12">
     

      {/* Slider */}
      <div
        ref={sliderRef}
        className="grid  grid-cols-4 gap-20  overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none pb-4"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] md:min-w-[360px] flex-shrink-0"
           
          >
            <div className="h-[480px]  overflow-hidden bg-gray-200 mb-4">
              <motion.img
               
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-[1.2px]  bg-[#2a2a2a]"></div>
            <p className="text-[13.5px] text-[#2a2a2a] uppercase tracking-wide pt-[9px] pb-1">
              {item.tags}
            </p>
            <h3 className="text-[19.5px] font-medium uppercase font-inter"  >{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
