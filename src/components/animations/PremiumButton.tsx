"use client";

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface PremiumButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Premium button with enterprise-grade micro-interactions
 * - 2-4px hover lift
 * - 200ms timing
 * - Subtle shadow enhancement
 */
export function PremiumButton({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: PremiumButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200";
  
  const variantStyles = {
    primary: "bg-[#1e56d6] text-white hover:bg-blue-700",
    secondary: "bg-white text-[#1e56d6] border-2 border-[#1e56d6] hover:bg-blue-50",
    ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10"
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{
        y: -3,
        boxShadow: variant === 'primary' 
          ? '0 12px 24px rgba(30, 86, 214, 0.25)'
          : '0 8px 16px rgba(0, 0, 0, 0.15)'
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.2,
        ease: 'easeOut'
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

/**
 * Interactive card with hover lift effect
 */
export function PremiumCard({
  children,
  className = '',
  hoverLift = 4,
  ...props
}: {
  children: ReactNode;
  className?: string;
  hoverLift?: number;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -hoverLift,
        transition: { duration: 0.22, ease: 'easeOut' }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
