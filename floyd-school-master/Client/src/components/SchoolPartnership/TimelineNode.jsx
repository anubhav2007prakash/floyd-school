import { motion } from 'framer-motion';

const TimelineNode = ({
  node,
  isActive,
  onHover,
  onClick,
  nodeOpacity,
  nodeY,
  nodeScale,
}) => {
  const Icon = node.icon;

  return (
    <motion.div
      style={{
        opacity: nodeOpacity,
        y: nodeY,
        scale: nodeScale,
      }}
      className={`absolute ${node.positionDesktop} z-20 w-[220px] flex flex-col items-center gap-2 cursor-pointer group transition-all duration-300`}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      {/* ── Glowing Icon Container ── */}
      <motion.div
        animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
        transition={isActive ? { repeat: Infinity, duration: 2.5 } : {}}
        whileHover={{ scale: 1.15, rotate: 6 }}
        className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center relative border-4 border-white shadow-xl transition-all duration-300 mb-0"
        style={{
          background: node.bg,
          boxShadow: isActive
            ? `0 0 0 4px ${node.color}50, 0 12px 35px ${node.glowColor}`
            : `0 8px 24px ${node.glowColor}`,
        }}
      >
        <Icon className="w-8 h-8 text-white drop-shadow-md" />

        {/* Active Pulse Ring */}
        {isActive && (
          <span className="absolute -inset-1 rounded-full border-2 border-white animate-ping pointer-events-none opacity-60" />
        )}
      </motion.div>

      {/* ── Icon to card connector ── */}
      <div
        className="w-1.5 h-6 rounded-full mx-auto mb-2"
        style={{ backgroundColor: node.color, opacity: 0.9 }}
      />

      {/* ── Glassmorphism Badge Card ── */}
      <div
        className={`rounded-2xl px-4 py-2.5 max-w-[220px] text-center transition-all duration-300 border ${
          isActive
            ? 'bg-white shadow-2xl -translate-y-1.5 border-slate-200 ring-2'
            : 'bg-white/90 shadow-md border-slate-100 group-hover:shadow-lg group-hover:-translate-y-1'
        }`}
        style={{
          ringColor: isActive ? node.color : 'transparent',
        }}
      >
        <div
          className="w-8 h-1 rounded-full mx-auto mb-1.5 transition-all duration-300"
          style={{ background: '#60A5FA', width: isActive ? '28px' : '16px' }}
        />
        <div className="setu-heading font-extrabold text-slate-800 text-xs sm:text-sm leading-tight">
          {node.title}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineNode;
