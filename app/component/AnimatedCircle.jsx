import { useState } from 'react';

export default function AnimatedCircle() {
  const [hovered, setHovered] = useState(false);

  const dots = Array.from({ length: 15 });

  return (
    // <div className="flex items-center justify-center min-h-screen bg-green-200">
      <div
        className={`relative rotate  cursor-pointer size-[45px] rounded-full flex justify-center items-center   transition-all duration-500`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
       
          <>
            {/* Dots */}
            {dots.map((_, i) => {
              const angle = (i / dots.length) * 2 * Math.PI;
              const x = 20 * Math.cos(angle); // radius
              const y = 20 * Math.sin(angle);
              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2  size-[2px] bg-[#030303] rounded-full"
                  style={{
                    top: `calc(50% + ${y}px - 0px)`,
                    left: `calc(50% + ${x}px - 0px)`
                  }}
                />
              );
            })}
            <div className={` ease-in-out ${hovered ? 'size-[10px]' : 'size-full'} duration-300  bg-[#030303] rounded-full`} />
          </>
      </div>
    // </div>
  );
}
