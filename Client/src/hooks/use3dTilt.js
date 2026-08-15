import { useState, useRef, useEffect } from 'react';

// Lightweight 3D tilt hook — returns handlers and style string to apply to elements
export default function use3dTilt(options = {}) {
  const { max = 12, scale = 1.03, perspective = 1000, transition = 'transform 300ms cubic-bezier(.2,.9,.3,1)' } = options;
  const frame = useRef(null);
  const elRef = useRef(null);
  // Respect prefers-reduced-motion: if set, return no-op handlers and empty style
  const prefersReduced = typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [style, setStyle] = useState(prefersReduced ? {} : { transform: 'perspective(' + perspective + 'px) rotateX(0deg) rotateY(0deg) scale(1)' });

  if (prefersReduced) {
    // Provide stable refs and noop handlers for accessibility
    return { ref: elRef, style: {}, onMouseMove: () => {}, onMouseLeave: () => {} };
  }

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const handleMove = (e) => {
    const el = elRef.current || e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * (max * 2) * -1; // invert for natural direction
    const rotateX = (py - 0.5) * (max * 2);

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`,
        transition,
      });
    });
  };

  const handleLeave = () => {
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setStyle({ transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`, transition });
    });
  };

  return { ref: elRef, style, onMouseMove: handleMove, onMouseLeave: handleLeave };
}
