'use client';

import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';

/**
 * DynamicRunningText - Premium scrolling announcement banner
 * Adaptive, smooth, non-intrusive
 * Features: Smart pause on hover, mobile-safe, GPU-optimized
 */
interface DynamicRunningTextProps {
  text: string;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  direction?: 'left' | 'right';
}

export const DynamicRunningText: React.FC<DynamicRunningTextProps> = ({
  text,
  speed = 30,
  pauseOnHover = true,
  className = '',
  direction = 'left',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-3 ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="whitespace-nowrap text-white font-medium text-sm md:text-base flex items-center gap-8"
        animate={{
          x: direction === 'left' ? [-1000, 1000] : [1000, -1000],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        {/* Duplicate text for seamless loop */}
        {[0, 1].map((i) => (
          <span key={i} className="flex items-center gap-8">
            <span>✨ {text}</span>
            <span className="text-blue-300">•</span>
          </span>
        ))}
      </motion.div>

      {/* Pause indicator */}
      {isHovered && pauseOnHover && (
        <motion.div
          className="absolute inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{ scale: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white/80 text-sm font-medium"
          >
            ⏸ Paused
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

/**
 * MotionHeadline - Premium animated text reveal
 * Word-by-word or character-by-character animation
 * GPU-optimized with fade + scale
 */
interface MotionHeadlineProps {
  text: string;
  variant?: 'word' | 'char' | 'line';
  stagger?: number;
  className?: string;
  delay?: number;
}

export const MotionHeadline: React.FC<MotionHeadlineProps> = ({
  text,
  variant = 'word',
  stagger = 0.05,
  className = '',
  delay = 0,
}) => {
  const words = text.split(' ');
  const chars = text.split('');
  const lines = text.split('\n');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  if (variant === 'word') {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span key={index} variants={itemVariants} className="inline-block mr-2">
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  if (variant === 'char') {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {chars.map((char, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            className={char === ' ' ? 'inline-block w-1' : 'inline-block'}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Line variant
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {lines.map((line, index) => (
        <motion.div key={index} variants={itemVariants}>
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};

/**
 * TextRevealScroll - Reveal text as user scrolls
 * Progressive reveal effect with intersection observer
 */
interface TextRevealScrollProps {
  text: string;
  className?: string;
}

export const TextRevealScroll: React.FC<TextRevealScrollProps> = ({
  text,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.3 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{
            delay: index * 0.03,
            duration: 0.4,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

/**
 * CountUp - Animated number counter
 * Perfect for stats and metrics
 */
interface CountUpProps {
  start?: number;
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  start = 0,
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const increment = (end - start) / (duration * 100);
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration * 10);

    return () => clearInterval(timer);
  }, [isVisible, start, end, duration]);

  return (
    <div ref={ref} className={className}>
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </motion.span>
    </div>
  );
};

export default DynamicRunningText;
