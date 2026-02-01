"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  amount?: number;
  className?: string;
}

/**
 * Premium fade-in animation component
 * Follows enterprise design standards: 320-420ms, subtle 14px movement
 */
export function FadeInView({
  children,
  delay = 0,
  duration = 0.38,
  direction = 'up',
  amount = 0.3,
  className = ''
}: FadeInViewProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  const directionOffset = {
    up: { y: 14 },
    down: { y: -14 },
    left: { x: 14 },
    right: { x: -14 },
    none: {}
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        x: 0,
        y: 0
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.24, 0.8, 0.34, 1] // Premium cubic-bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered children animation
 * For lists, grids, and sequential reveals
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.08,
  className = ''
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = ''
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.38,
            ease: [0.24, 0.8, 0.34, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
