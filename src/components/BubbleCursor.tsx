"use client";

import { useEffect, useRef, useState } from 'react';

const isLowPerformanceDevice = () => {
  if (typeof navigator === 'undefined') return true;
  const cores = navigator.hardwareConcurrency || 0;
  const memory = (navigator as any).deviceMemory || 0;
  return (cores && cores <= 4) || (memory && memory <= 4);
};

export default function BubbleCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const isFine = window.matchMedia('(pointer: fine)').matches;

    if (prefersReduced || isCoarse || !isFine || isLowPerformanceDevice()) {
      setEnabled(false);
      return;
    }

    setEnabled(true);

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;

      const onMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest('a, button, input, textarea, select, [data-cursor="interactive"]');
      if (interactive) {
        cursor.classList.add('cursor--hover');
        ring.classList.add('cursor-ring--hover');
      } else {
        cursor.classList.remove('cursor--hover');
        ring.classList.remove('cursor-ring--hover');
      }
    };

    const onClick = (event: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.left = `${event.clientX}px`;
      ripple.style.top = `${event.clientY}px`;
      document.body.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('click', onClick, { passive: true });
    document.body.classList.add('cursor-enabled');

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      document.body.classList.remove('cursor-enabled');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="cursor-layer">
      <div ref={ringRef} className="cursor-ring" />
      <div ref={cursorRef} className="cursor-dot" />
    </div>
  );
}
