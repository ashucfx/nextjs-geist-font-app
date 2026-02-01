"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface RunningTextProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * RunningText - Scrolling text animation for dynamic content highlights
 * Perfect for displaying achievements, client names, or service highlights
 */
export const RunningText: React.FC<RunningTextProps> = ({
  items,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className = ''
}) => {
  const duplicatedItems = [...items, ...items];

  return (
    <div className={`overflow-hidden bg-gradient-to-r from-transparent via-[#1e56d6]/10 to-transparent py-4 ${className}`}>
      <motion.div
        animate={{ x: direction === 'left' ? [0, -1920] : [0, 1920] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
        onHoverStart={pauseOnHover ? () => {} : undefined}
        className="flex gap-8 whitespace-nowrap"
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="text-lg font-semibold text-gray-300 hover:text-[#1e56d6] transition-colors px-4 flex-shrink-0"
          >
            ✦ {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

interface DynamicHighlightProps {
  words: string[];
  highlightColor?: string;
  className?: string;
  rotationInterval?: number;
}

/**
 * DynamicHighlight - Highlights different words in sequence
 * Creates engaging, dynamic text effects
 */
export const DynamicHighlight: React.FC<DynamicHighlightProps> = ({
  words,
  highlightColor = '#1e56d6',
  className = '',
  rotationInterval = 3000
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [words.length, rotationInterval]);

  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      style={{ color: highlightColor }}
      className={`font-bold ${className}`}
    >
      {words[currentIndex]}
    </motion.span>
  );
};

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

/**
 * TextReveal - Reveals text character by character
 * Creates premium, engaging text animation
 */
export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = '',
  delay = 0
}) => {
  const characters = text.split('');

  return (
    <div className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.05,
            delay: (delay + index) * 0.05
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
  format?: (value: number) => string;
}

/**
 * Counter - Animated number counter
 * Great for displaying stats and metrics
 */
export const Counter: React.FC<CounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  className = '',
  format = (val) => val.toFixed(0)
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const value = Math.floor(from + (to - from) * progress);

      node.textContent = format(value) + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [from, to, duration, suffix, format]);

  return <span ref={nodeRef} className={className} />;
};

interface GlitchTextProps {
  text: string;
  className?: string;
}

/**
 * GlitchText - Futuristic glitch effect
 * Use sparingly for tech-forward brands
 */
export const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  className = ''
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="text-transparent">{text}</span>
      <motion.span
        className="absolute inset-0 text-white"
        animate={{
          x: [0, -2, 2, -2, 0],
          opacity: [1, 0.8, 1]
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
          repeatDelay: 3
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};
