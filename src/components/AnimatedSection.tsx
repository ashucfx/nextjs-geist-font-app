"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MOTION_VARIANTS } from '@/lib/animations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof MOTION_VARIANTS;
  delay?: number;
  staggerChildren?: boolean;
}

/**
 * AnimatedSection - Wraps content with smooth entrance animations
 * Supports various animation patterns and staggered children
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  variant = 'slideUp',
  delay = 0,
  staggerChildren = false
}) => {
  const animationVariant = MOTION_VARIANTS[variant] || MOTION_VARIANTS.slideUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay } as any}
      variants={staggerChildren ? (MOTION_VARIANTS.container as any) : (animationVariant as any)}
      className={className}
    >
      {staggerChildren ? (
        React.Children.map(children, (child) =>
          <motion.div variants={MOTION_VARIANTS.item} key={Math.random()}>
            {child}
          </motion.div>
        )
      ) : (
        children
      )}
    </motion.div>
  );
};

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'scale' | 'glow' | 'lift' | 'none';
}

/**
 * AnimatedCard - Card with hover effects and smooth animations
 */
export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  hoverEffect = 'scale'
}) => {
  const hoverVariants = {
    scale: { scale: 1.05, transition: { duration: 0.3 } },
    glow: { 
      boxShadow: '0 0 30px rgba(30, 86, 214, 0.6)',
      transition: { duration: 0.3 }
    },
    lift: { 
      y: -10,
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
      transition: { duration: 0.3 }
    },
    none: {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hoverVariants[hoverEffect] || hoverVariants.scale}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

/**
 * StaggerContainer - Automatically stagger children animations
 */
export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          }
        }
      }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 100, damping: 10 }
            }
          }}
        >
          {child}
        </motion.div>
      )}
    </motion.div>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * ScrollReveal - Reveals content on scroll with smooth animation
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
