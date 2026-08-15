import { motion } from 'framer-motion';

const AnimatedPath = ({ pathProgressLeft, pathProgressRight }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Blue -> Purple -> Pink Gradient for Left Path */}
        <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#A855F7" stopOpacity="0.9" />
        </linearGradient>

        {/* Pink -> Purple -> Orange Gradient for Right Path */}
        <linearGradient id="gradientRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#6366F1" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.9" />
        </linearGradient>

        {/* Glow Filters */}
        <filter id="glowPath" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* ── Background Guide Paths (Faint Dashed Lines) ── */}
      <path
        d="M 500 120 C 350 120, 150 140, 140 220 C 130 300, 180 340, 180 370 C 180 420, 300 460, 330 508"
        fill="none"
        stroke="rgba(99, 102, 241, 0.15)"
        strokeWidth="3"
        strokeDasharray="6 6"
      />
      <path
        d="M 500 120 C 650 120, 850 140, 860 220 C 870 300, 820 340, 820 370 C 820 420, 700 460, 670 508"
        fill="none"
        stroke="rgba(236, 72, 153, 0.15)"
        strokeWidth="3"
        strokeDasharray="6 6"
      />

      {/* ── Scroll-Animated Left Path ── */}
      <motion.path
        d="M 500 120 C 350 120, 150 140, 140 220 C 130 300, 180 340, 180 370 C 180 420, 300 460, 330 508"
        fill="none"
        stroke="url(#gradientLeft)"
        strokeWidth="4"
        strokeDasharray="8 6"
        strokeLinecap="round"
        filter="url(#glowPath)"
        style={{ pathLength: pathProgressLeft }}
      />

      {/* ── Scroll-Animated Right Path ── */}
      <motion.path
        d="M 500 120 C 650 120, 850 140, 860 220 C 870 300, 820 340, 820 370 C 820 420, 700 460, 670 508"
        fill="none"
        stroke="url(#gradientRight)"
        strokeWidth="4"
        strokeDasharray="8 6"
        strokeLinecap="round"
        filter="url(#glowPath)"
        style={{ pathLength: pathProgressRight }}
      />
    </svg>
  );
};

export default AnimatedPath;
