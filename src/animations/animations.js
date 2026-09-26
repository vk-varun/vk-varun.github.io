/**
 * Centralized Framer Motion Animation Variants
 * Following a cohesive, refined, luxury motion design language
 */

export const transitionDefaults = {
  ease: [0.22, 1, 0.36, 1], // Smooth custom cubic bezier
  duration: 0.7,
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const scaleOnHover = {
  rest: {
    scale: 1,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
  hover: {
    scale: 1.03,
    y: -4,
    transition: { duration: 0.25, ease: 'easeOut' },
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 1.5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const subtleCardHover = {
  rest: {
    y: 0,
    boxShadow: '0 8px 24px -4px rgba(17, 18, 13, 0.06)',
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
  hover: {
    y: -6,
    boxShadow: '0 20px 40px -12px rgba(17, 18, 13, 0.12)',
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};
