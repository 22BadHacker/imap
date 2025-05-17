// components/CustomCursor.tsx
"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringImage, setHoveringImage] = useState(false);

  useEffect(() => {
    const addMouseListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
    };
    const removeMouseListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    addMouseListeners();
    return () => removeMouseListeners();
  }, []);

  useEffect(() => {
    const handleEnter = () => setHoveringImage(true);
    const handleLeave = () => setHoveringImage(false);

    const hoverTargets = document.querySelectorAll(".hover-image");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none; }`}</style>

      {/* Custom Cursor */}
      <div
        className={`absolute top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200 ${
          hoveringImage ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div className="bg-black text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
          Click or Preview
        </div>
      </div>
    </>
  );
}
