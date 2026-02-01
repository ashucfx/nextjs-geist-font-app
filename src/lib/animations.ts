/**
 * Advanced animation configurations
 * GPU-optimized, smooth, and professional
 */

// These will be added to tailwind.config.js
export const advancedAnimations = {
  animation: {
    'fade-in': 'fadeIn 0.6s ease-out',
    'fade-in-up': 'fadeInUp 0.6s ease-out',
    'fade-in-down': 'fadeInDown 0.6s ease-out',
    'fade-in-left': 'fadeInLeft 0.6s ease-out',
    'fade-in-right': 'fadeInRight 0.6s ease-out',
    'scale-in': 'scaleIn 0.5s ease-out',
    'slide-up': 'slideUp 0.6s ease-out',
    'slide-down': 'slideDown 0.6s ease-out',
    'slide-left': 'slideLeft 0.6s ease-out',
    'slide-right': 'slideRight 0.6s ease-out',
    'bounce-subtle': 'bounceSubtle 0.8s ease-in-out infinite',
    'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
    'shimmer': 'shimmer 2s infinite',
    'float': 'float 3s ease-in-out infinite',
    'glow': 'glow 2s ease-in-out infinite',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    fadeInUp: {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    fadeInDown: {
      '0%': { opacity: '0', transform: 'translateY(-20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    fadeInLeft: {
      '0%': { opacity: '0', transform: 'translateX(-20px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    fadeInRight: {
      '0%': { opacity: '0', transform: 'translateX(20px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    scaleIn: {
      '0%': { opacity: '0', transform: 'scale(0.95)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
    slideUp: {
      '0%': { transform: 'translateY(30px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    slideDown: {
      '0%': { transform: 'translateY(-30px)', opacity: '0' },
      '100%': { transform: 'translateY(0)', opacity: '1' },
    },
    slideLeft: {
      '0%': { transform: 'translateX(30px)', opacity: '0' },
      '100%': { transform: 'translateX(0)', opacity: '1' },
    },
    slideRight: {
      '0%': { transform: 'translateX(-30px)', opacity: '0' },
      '100%': { transform: 'translateX(0)', opacity: '1' },
    },
    bounceSubtle: {
      '0%, 100%': { transform: 'translateY(0)' },
      '50%': { transform: 'translateY(-8px)' },
    },
    pulseGlow: {
      '0%, 100%': { 
        opacity: '1',
        boxShadow: '0 0 20px rgba(30, 86, 214, 0.3)'
      },
      '50%': { 
        opacity: '0.8',
        boxShadow: '0 0 40px rgba(30, 86, 214, 0.6)'
      },
    },
    shimmer: {
      '0%': { backgroundPosition: '-1000px 0' },
      '100%': { backgroundPosition: '1000px 0' },
    },
    float: {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' },
    },
    glow: {
      '0%, 100%': { 
        textShadow: '0 0 5px rgba(30, 86, 214, 0.5)'
      },
      '50%': { 
        textShadow: '0 0 20px rgba(30, 86, 214, 1)'
      },
    },
  },
};

// Motion variants for Framer Motion
export const MOTION_VARIANTS = {
  // Container animations
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  // Item animations
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  },

  // Slide animations
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'easeOut', duration: 0.6 },
    },
  },

  slideDown: {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'easeOut', duration: 0.6 },
    },
  },

  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'easeOut', duration: 0.6 },
    },
  },

  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'easeOut', duration: 0.6 },
    },
  },

  // Scale animation
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'easeOut', duration: 0.5 },
    },
  },

  // Fade animation
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  },

  // Hover effects
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  },

  hoverGlow: {
    whileHover: { boxShadow: '0 0 30px rgba(30, 86, 214, 0.6)' },
    transition: { duration: 0.3 },
  },

  // Tap animation
  tap: {
    whileTap: { scale: 0.97 },
    transition: { type: 'spring', stiffness: 200, damping: 10 },
  },
};
