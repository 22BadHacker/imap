"use client";

import { useRef, useState, useEffect } from "react";

export default function StoryVideo({ src, onClose }) {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const current = video.currentTime;
      const total = video.duration;
      setProgress((current / total) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("ended", () => onClose?.());

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70  backdrop-blur-[5px] flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 h-1 w-full bg-gray-700">
        <div
          className="h-full bg-white transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <video
        ref={videoRef}
        src={src}
        autoPlay
        
        playsInline
        className="max-w-[90vw] max-h-[90vh] object-contain  object-contain"
      />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl font-bold"
      >
        ×
      </button>
    </div>
  );
}
