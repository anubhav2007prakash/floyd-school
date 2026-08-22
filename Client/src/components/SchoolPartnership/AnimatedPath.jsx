import { motion } from 'framer-motion';

const AnimatedPath = ({ pathProgressLeft, pathProgressRight, dashOffset, laserProgress }) => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
    >
      <defs>
        {/* Electric Cyan -> Blue -> Purple Gradient for Left Path */}
        <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F0FF" />
          <stop offset="50%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>

        {/* Hot Pink -> Indigo -> Orange Gradient for Right Path */}
        <linearGradient id="gradientRight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF007A" />
          <stop offset="50%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#FF5500" />
        </linearGradient>

        {/* High-Intensity Glow Filter */}
        <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur2" />
          <feMerge>
            <feMergeNode in="blur2" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Laser Particle Gradient */}
        <radialGradient id="particleGlowLeft" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#00F0FF" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="particleGlowRight" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FF007A" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FF007A" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── 1. AMBIENT NEON UNDERGLOW PATHS (Thick Glowing Halos) ── */}
      <path
        d="M 500 130 C 350 130, 140 140, 130 220 C 120 310, 180 340, 180 370 C 180 430, 310 470, 340 515"
        fill="none"
        stroke="url(#gradientLeft)"
        strokeWidth="14"
        strokeOpacity="0.4"
        filter="url(#intenseGlow)"
      />
      <path
        d="M 500 130 C 650 130, 860 140, 870 220 C 880 310, 820 340, 820 370 C 820 430, 690 470, 660 515"
        fill="none"
        stroke="url(#gradientRight)"
        strokeWidth="14"
        strokeOpacity="0.4"
        filter="url(#intenseGlow)"
      />

      {/* ── 2. HIGH-VISIBILITY BASE CIRCUIT LINES (Solid Neon) ── */}
      <path
        d="M 500 130 C 350 130, 140 140, 130 220 C 120 310, 180 340, 180 370 C 180 430, 310 470, 340 515"
        fill="none"
        stroke="url(#gradientLeft)"
        strokeWidth="5"
        strokeOpacity="0.8"
      />
      <path
        d="M 500 130 C 650 130, 860 140, 870 220 C 880 310, 820 340, 820 370 C 820 430, 690 470, 660 515"
        fill="none"
        stroke="url(#gradientRight)"
        strokeWidth="5"
        strokeOpacity="0.8"
      />

      {/* ── 3. ULTRA-SENSITIVE SCROLL-DRIVEN ACTIVE LASER FIBERS ── */}
      {/* Responds instantly to any scroll up or down */}
      <motion.path
        d="M 500 130 C 350 130, 140 140, 130 220 C 120 310, 180 340, 180 370 C 180 430, 310 470, 340 515"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeDasharray="12 8"
        strokeLinecap="round"
        style={{ 
          strokeDashoffset: dashOffset,
          pathLength: pathProgressLeft 
        }}
      />
      <motion.path
        d="M 500 130 C 650 130, 860 140, 870 220 C 880 310, 820 340, 820 370 C 820 430, 690 470, 660 515"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="3"
        strokeDasharray="12 8"
        strokeLinecap="round"
        style={{ 
          strokeDashoffset: dashOffset,
          pathLength: pathProgressRight 
        }}
      />

      {/* Radiant Energized Overlay Beam */}
      <motion.path
        d="M 500 130 C 350 130, 140 140, 130 220 C 120 310, 180 340, 180 370 C 180 430, 310 470, 340 515"
        fill="none"
        stroke="#00F0FF"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#intenseGlow)"
        style={{ pathLength: pathProgressLeft }}
      />
      <motion.path
        d="M 500 130 C 650 130, 860 140, 870 220 C 880 310, 820 340, 820 370 C 820 430, 690 470, 660 515"
        fill="none"
        stroke="#FF007A"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#intenseGlow)"
        style={{ pathLength: pathProgressRight }}
      />

      {/* ── 4. CONTINUOUS ANIMATED LASER PARTICLES GLIDING ALONG THE FLOW ── */}
      {/* Left Laser Pulse 1 */}
      <circle r="9" fill="url(#particleGlowLeft)">
        <animateMotion
          path="M 500 130 C 350 130, 140 140, 130 220 C 120 310, 180 340, 180 370 C 180 430, 310 470, 340 515"
          dur="3.2s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Left Laser Pulse 2 */}
      <circle r="6" fill="#FFFFFF">
        <animateMotion
          path="M 500 130 C 350 130, 140 140, 130 220 C 120 310, 180 340, 180 370 C 180 430, 310 470, 340 515"
          dur="3.2s"
          begin="1.6s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Right Laser Pulse 1 */}
      <circle r="9" fill="url(#particleGlowRight)">
        <animateMotion
          path="M 500 130 C 650 130, 860 140, 870 220 C 880 310, 820 340, 820 370 C 820 430, 690 470, 660 515"
          dur="3.2s"
          repeatCount="indefinite"
        />
      </circle>
      {/* Right Laser Pulse 2 */}
      <circle r="6" fill="#FFFFFF">
        <animateMotion
          path="M 500 130 C 650 130, 860 140, 870 220 C 880 310, 820 340, 820 370 C 820 430, 690 470, 660 515"
          dur="3.2s"
          begin="1.6s"
          repeatCount="indefinite"
        />
      </circle>

      {/* ── 5. GLOWING CONNECTOR JUNCTION HUBS ── */}
      <circle cx="500" cy="130" r="8" fill="#FFFFFF" filter="url(#intenseGlow)" />
      <circle cx="130" cy="220" r="6" fill="#00F0FF" filter="url(#intenseGlow)" />
      <circle cx="180" cy="370" r="6" fill="#3B82F6" filter="url(#intenseGlow)" />
      <circle cx="340" cy="515" r="6" fill="#A855F7" filter="url(#intenseGlow)" />

      <circle cx="870" cy="220" r="6" fill="#FF007A" filter="url(#intenseGlow)" />
      <circle cx="820" cy="370" r="6" fill="#6366F1" filter="url(#intenseGlow)" />
      <circle cx="660" cy="515" r="6" fill="#FF5500" filter="url(#intenseGlow)" />
    </svg>
  );
};

export default AnimatedPath;
