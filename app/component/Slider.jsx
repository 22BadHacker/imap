'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const images = [
  '/Gallerie/hats.jpg',
  '/Gallerie/Flowers.jpeg',
  '/Gallerie/Flowers.jpeg',
  '/Gallerie/Flowers.jpeg',
  '/Gallerie/Flowers.jpeg',
//   '/Gallerie/',
//   '/Gallerie/',
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
    const walk = (x - startX) * 2; // scroll-fast multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="overflow-hidden">
      <div
        ref={sliderRef}
        className="flex space-x-6 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="w-[380px] h-[480px] flex-shrink-0 overflow-hidden bg-gray-200"
            // whileHover={{ scale: 1.05 }}
            // transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={src}
              alt={`image-${index}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
