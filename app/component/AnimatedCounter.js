// components/AnimatedCounter.js
'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function AnimatedCounter({ target, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const stepTime = 10;
    const increment = target / (duration / stepTime);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(interval);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
}
